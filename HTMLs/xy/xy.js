var eGraph = document.getElementById("graph");
Object.assign(eGraph.style, { position: "absolute", left: px(0), top: px(0) });
var vp_xy = [0, 0], scale_xy = [1, 1];
var wh = [0, 0], keyWH = ["width", "height"];
var cfg = {
    moveSpeed: 60,
    axis: 15, grid: "all" /*none,some,polar*/,
    lineW: 2, markerW: 4, arrowL: 10,
    gridWDiv: 5, miniorGridLDiv: 4,
    noLinecolor: "gray", axisColor: "black", miniorGridColor: "#66ccff",
    tickStepXY: [0.5, 0.5], tickTextFont: "12pt sans", _fontSize: 0,
    numToStr: function (n) { return n.toString(); }, numPrec: 5, showNum: null,
    grabFocus: true, noDrag: false, epsilon: Math.pow(2, -7),
    kmXmove: "Shift", kmScale: "Control"
};
function assignAry(a) {
    var vs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        vs[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < a.length; i++)
        a[i] = vs[i];
}
function px(v) { return v + "px"; }
function addUpdated(e, evn, op) { op(); e.addEventListener(evn, op, false); }
function observeProperty(o, k, op) {
    var v = o[k];
    return Object.defineProperty(o, k, { get: function () { return v; }, set: function (v1) { v = v1; op(v1); } });
}
var maths = {
    inbounds: function (first, last, n) { return first <= n && n <= last; },
    inboundsPN: function (k, n) { return maths.inbounds(-k, k, n); },
    coerceIn: function (first, last, n) { return (n < first) ? first : (n > last) ? last : n; },
    idf: function (into, from) { return function (x) { return into(from(into(x))); }; },
    nop: function () { return null; }
};
var g;
var onDraw = { begin: function () { return console.log(vp_xy, scale_xy); }, end: maths.nop };
addUpdated(window, "resize", function () {
    var e = document.documentElement;
    assignAry(wh, e.clientWidth, e.clientHeight);
    for (var i in keyWH) {
        var k = keyWH[i], v = wh[i];
        eGraph[k] = v;
        eGraph.style[k] = px(v);
    }
    if (cfg.grabFocus)
        eGraph.focus();
    cfg.showNum = function (n) { var ns = cfg.numToStr(n); return (ns.length < cfg.numPrec) ? ns : n.toPrecision(cfg.numPrec) / 1; };
    cfg._fontSize = parseInt(cfg.tickTextFont) * 1.2 /*line-height: normal;*/;
    g = eGraph.getContext("2d");
    g.lineWidth = cfg.lineW;
    g.font = cfg.tickTextFont;
    onDraw.begin();
});
observeProperty(onDraw, "begin", function (v) { return v(); });
function remeberKeyPressOn(e, d, prefix) {
    if (prefix === void 0) { prefix = "key"; }
    var setsKey = function (v) { return function (ev) {
        var k = (ev instanceof MouseEvent) ? "" + prefix + ev.button : ev.key;
        if (k in d) {
            ev.preventDefault();
            d[k] = v;
        }
        if (d["Shift"])
            d["Shift"] = ev.shiftKey; // fixes? shift keyup
    }; };
    for (var _i = 0, _a = ["down", "up"]; _i < _a.length; _i++) {
        var k = _a[_i];
        e.addEventListener(prefix + k, setsKey(k == "down"));
    }
}
function bindkeyNavigation(e, vp, scale, cfg) {
    var kmXmove = cfg.kmXmove, kmScale = cfg.kmScale;
    var pressed = {};
    var prefix = (!!window.PointerEvent) ? "pointer" : "mouse", prefixBtn = prefix + "0";
    for (var _i = 0, _a = [kmXmove, kmScale, prefixBtn]; _i < _a.length; _i++) {
        var k = _a[_i];
        pressed[k] = false;
    }
    remeberKeyPressOn(e, pressed);
    remeberKeyPressOn(e, pressed, prefix);
    var eId = eGraph.id;
    window.addEventListener("wheel", function (ev) {
        if (ev.target.id != eId)
            return;
        ev.preventDefault();
        var v = ev.deltaY; // xy offset
        var xmove = pressed[kmXmove];
        if (pressed[kmScale]) {
            if (v < 0)
                v = 1 / -v; // scale down
            if (!xmove)
                scale[0] *= v;
            scale[1] *= v /*y-only*/;
        }
        else {
            vp[xmove ? 0 : 1] += v * cfg.moveSpeed * (xmove ? -1 : 1);
        }
        onDraw.begin();
    });
    var mousePos0 = [0, 0];
    var rememberMPos = function (ev) { return assignAry(mousePos0, ev.offsetX, ev.offsetY); };
    e.addEventListener(prefix + "down", rememberMPos);
    e.addEventListener(prefix + "move", function (ev) {
        if (!pressed[prefixBtn] || cfg.noDrag)
            return;
        var x0 = mousePos0[0], y0 = mousePos0[1];
        vp[0] += (ev.offsetX - x0);
        vp[1] -= (ev.offsetY - y0);
        rememberMPos(ev);
        onDraw.begin();
    });
    var pinchDist = 0;
    bindPinch(e, function (v) {
        if (Math.abs(pinchDist) > 0.001) {
            var delta = pinchDist - v;
            var d = delta / Math.min(wh[0], wh[1]);
            scale[0] += d;
            scale[1] += d;
            onDraw.begin();
        }
        else {
            pinchDist = v;
        }
    });
}
bindkeyNavigation(eGraph, vp_xy, scale_xy, cfg);
function bindPinch(e, op) {
    var scaling = false;
    e.addEventListener("touchstart", function (ev) { scaling = (ev.touches.length == 2); });
    e.addEventListener("touchmove", function (ev) {
        if (!scaling)
            return;
        var tx = ev.touches;
        var dist = Math.hypot(tx[0].pageX - tx[1].pageX, tx[0].pageY - tx[1].pageY);
        op(dist);
    });
    for (var _i = 0, _a = ["end", "cancel"]; _i < _a.length; _i++) {
        var evn = _a[_i];
        e.addEventListener("touch" + evn, function () { scaling = false; });
    }
}
var y_funcs = [["sin", Math.sin, 0.01, "red"], ["x**2", function (x) { return x * x; }, 0.1, "green"]];
var ybounds = [0, 0]; // for y axis, per session (no reset on redraw)
var drawArrow = function (g, p1, p2, l) {
    var x1 = p1[0], y1 = p1[1], x2 = p2[0], y2 = p2[1];
    var a = (x2 - x1), b = (y2 - y1);
    var ang = Math.atan2(b, a), hyp = Math.sqrt(a * a + b * b);
    g.save();
    g.translate(x1, y1);
    g.rotate(ang);
    var x = hyp - l;
    g.moveTo(x, 0);
    g.lineTo(x, l);
    g.lineTo(hyp, 0);
    g.lineTo(x, -l);
    g.restore();
};
onDraw.begin = function () {
    var w = wh[0], h = wh[1], vx = vp_xy[0], vy = vp_xy[1]; // unit: px
    var kx = scale_xy[0], ky = scale_xy[1];
    g.clearRect(0, 0, w, h);
    var kWX = 1 / w * kx, kWY = vy / w * ky; // coeffient cache
    var intoPx = function (x) { return (x - vx) * kWX; }, fromPx = function (px) { return px / kWX + vx; }, // [into/from] Math <=> Screen
    fromPy = function (py) { return h - h * (py + kWY /*move speed*/) / ky; }, intoPy = function (y) { return (-(y - h) / h) * ky - vy / w; };
    // orig func: -((py+vy/w*ky)/ky)*h +h
    var x, x1, x0 = intoPx(0), ww = intoPx(w), y;
    var lineVert /*-ical*/ = function (sx, sy, l) { g.moveTo(sx, sy); g.lineTo(sx, sy + l); }, lineHorz /*ition*/ = function (sx, sy, l) { g.moveTo(sx, sy); g.lineTo(sx + l, sy); }, newPath = function () { g.beginPath(); }, stroke = function () { g.stroke(); g.closePath(); }, withStroke = function (s, op) { var old = g.strokeStyle; g.strokeStyle = s; op(); g.strokeStyle = old; };
    var axis = cfg.axis, grid = cfg.grid, axisColor = cfg.axisColor, markerW = cfg.markerW, arrowL = cfg.arrowL, gridWDiv = cfg.gridWDiv, miniorGridLDiv = cfg.miniorGridLDiv, miniorGridColor = cfg.miniorGridColor, _a = cfg.tickStepXY, tick_deltaX = _a[0], tick_deltaY = _a[1], showNum = cfg.showNum, epsilon = cfg.epsilon;
    var arrowMode = (axis >> 3 /*bit for x,y,text*/);
    var strokeGrid = function () { g.lineWidth /= gridWDiv; stroke(); g.lineWidth *= gridWDiv; }, drawsArrow = function (v, n, idx) {
        var _1st = (idx == 0);
        var a1 = _1st ? [v, n] : [0, v]; // (sx h 0) [sx,h], [sx,0]
        var a2 = _1st ? [v, 0] : [n, v]; // (sy w 1) [0,sy], [w,sy]
        drawArrow(g, a1, a2, arrowL);
        if (arrowMode == 1)
            drawArrow(g, a2, a1, arrowL);
        g.fill();
    };
    g.textBaseline = "top";
    var hasL = axis & 1, allGrid = (grid == "all"), someGrid = (allGrid || grid == "some");
    var drawingTicks = true, two = 2; // for if(){} code readability
    for (var _i = 0, y_funcs_1 = y_funcs; _i < y_funcs_1.length; _i++) {
        var _b = y_funcs_1[_i], code = _b[0], y_func = _b[1], x_delta = _b[2], color = _b[3];
        g.strokeStyle = axisColor; // Draw x axis!
        out: while (axis & 2) {
            newPath();
            g.textAlign = "center";
            var sy = h - h * (x / w + kWY) / ky; //fromPy((x-0)/w/*~intoPx*/);
            if (Number.isNaN(sy))
                break out;
            var markerD = markerW;
            if (sy < 0) {
                sy = 0;
            }
            else if (sy > (h - markerW)) {
                sy = h;
                g.textBaseline = "bottom";
                markerD = -markerW;
            }
            g.moveTo(0, sy);
            g.lineTo(w, sy);
            stroke();
            if (arrowL != 0)
                drawsArrow(sy, w, 1);
            newPath();
            for (x = x0; x < ww; x += x_delta) {
                var sx = fromPx(x);
                lineVert(sx, sy, markerD); // Draw x-metrics!
            }
            strokeGrid();
            if (drawingTicks) {
                newPath();
                x = x0, x1 = ww + tick_deltaX;
                var lastSx1 = 0; // right-collide=remove
                for (; x < x1; x += tick_deltaX) {
                    var sx = fromPx(x);
                    lineVert(sx, sy, markerD * two);
                    if (hasL) {
                        var sn = showNum(x), width = g.measureText(sn).width;
                        if (lastSx1 <= sx) {
                            g.fillText(sn, sx, sy + markerD * two);
                            lastSx1 = sx + width;
                        }
                    }
                    if (someGrid)
                        lineVert(sx, 0, h);
                }
                strokeGrid();
                if (allGrid) {
                    newPath();
                    x = x0;
                    var d = tick_deltaX / miniorGridLDiv;
                    for (; x < x1; x += d)
                        lineVert(fromPx(x), 0, h);
                    withStroke(miniorGridColor, strokeGrid);
                }
            }
            break;
        }
        newPath();
        g.strokeStyle = color;
        for (x = x0, x1 = ww; x < x1; x += x_delta) {
            y = y_func(x);
            if (y < ybounds[0])
                ybounds[0] = y;
            else if (y > ybounds[1])
                ybounds[1] = y;
            g.lineTo(fromPx(x), fromPy(y)); // Draw func!
        }
        stroke();
        if (fromPx(x1 - (x - x_delta)) > 1) { // func: Render hor-end line
            newPath();
            g.strokeStyle = cfg.noLinecolor;
            var sy = fromPy(y);
            g.moveTo(fromPx(x - x_delta), sy);
            g.lineTo(w, sy);
            stroke();
        }
    }
    g.strokeStyle = axisColor; // Draw y axis! slight different from above
    if (axis & 4) {
        newPath();
        g.textAlign = "left";
        var sx = fromPx(0);
        var markerD = markerW;
        if (sx <= 0) {
            sx = 0;
        }
        else if (sx > w) {
            sx = w;
            markerD = -markerW;
            g.textAlign = "right";
        }
        g.moveTo(sx, 0);
        g.lineTo(sx, h);
        stroke();
        if (arrowL != 0)
            drawsArrow(sx, h, 0);
        if (drawingTicks) {
            newPath();
            var y_1 = ybounds[0], y1 = ybounds[1] + tick_deltaY;
            var lastSy1 = h;
            for (; y_1 < y1; y_1 += tick_deltaY) {
                var sy = fromPy(y_1);
                lineHorz(sx, sy, markerD * two);
                if (hasL && !maths.inboundsPN(epsilon, y_1) && (lastSy1 >= sy)) { // sy has negate dir
                    g.fillText(showNum(y_1), sx + markerD * two, sy + markerD);
                    lastSy1 = sy - cfg._fontSize;
                }
                if (someGrid)
                    lineHorz(0, sy, w);
            }
            strokeGrid();
            if (allGrid) {
                newPath();
                y_1 = ybounds[0];
                var d = tick_deltaY / miniorGridLDiv;
                for (; y_1 < y1; y_1 += d)
                    lineHorz(0, fromPy(y_1), w);
                withStroke(miniorGridColor, strokeGrid);
            }
        }
    }
    onDraw.end();
};