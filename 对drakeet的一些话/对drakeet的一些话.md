---
title: 对 drakeet 的一些话
author: duangsuse
date: July 02, 2019
category: Misc
tags: Life Statement Kotlin Java Haskell
keywords: Android drakeet reverse-engineering technical
---

# 对 drakeet 的一些话 <sub><a href="对drakeet的一些话.html">[Telegraph Version]</a></sub>

<p id="article-info" align="center">
  <var><a rel="author">duangsuse</a></var> <abbr title="我真是咸得没事，写了两个月"><time>July 02, 2019</time></abbr><br>
  <blockquote>
    <b>Abstract</b> : 这篇文章初始版本从 <b><i>duangsuse Throws</i></b> Telegram 频道上拷贝，
  主要基于作者与一<template nsfw><sub><s>七八年如一日不见长进的</s></sub></template>软件工程师 drakeet 曾经争执的经过和结果的<abbr title="即使我已经尽可能使文章客观且符合事实">主观</abbr>看法编写。<br>
  <ul>
    <li>文中后半部分主要涉及部分作者对其信仰哲学的见解<template nsfw>迫真嘴遁</template></li>
    <li>文章本身只表明观点看法，没有其他用意<template nsfw>还有发泄个人不满的用意</template></li>
  </ul>
  </blockquote>
</p>

<div id="toc"></div>

<q><abbr title="@LetITFly, 一名 Geek 发烧友，喜欢 Android，作者的朋友之一">频道主</abbr>
在此建议在座的各位一起维护良好的交流氛围<template nsfw><s>没有争执的交流环境</s></template>，不要让更多的人心寒。</q>
[\[原文\]](https://t.me/dsuset/6215)

当然我也看过 [LetITFly 频道](https://t.me/dsuset/5671) 的消息。
但我还是决定，即便没有用，
我也不会像以前一样，把所有错都<abbr title="之前我的处理方式是对 drakeet 的自负表示完全理解，或者大错的是我，反正已经过去了">归在自己身上</abbr>。

## 关于逆向工程：“优秀”<template nsfw>（还真是有点，不骗你们）</template>的纯纯写作

没错，我不该尝试 [逆向分析纯纯写作](https://t.me/dsuse/3059)，
即便它的作者之前 [三次在频道上说](https://t.me/dsuse/3045) 它的反破解（代码保护）技术有多么多么的高大上，
真的是非常让人想了解一下这些听上去十分<abbr title="记住了，核心技术不是你的，再不得了将来也要吃苦头的">不得了</abbr>
的技术有着<abbr title="也不怎么样，个混淆器带来的雕虫小技和几行 C/C++ 代码，糊弄不过真·逆向大佬">怎么样的深度。</abbr>

不过，现在我不仅完全可以自己独立 **纯手动** 从 [x86 汇编代码](https://asmtutor.com/)
（[WowCoolApk](https://github.com/duangsuse-valid-projects/WowCoolApk)、
[CoolTok](https://github.com/duangsuse/CoolTok/)） 和
[Java 字节码](https://t.me/dsuse/10777) 里还原本来的程序逻辑，
也开始自己独立研究学习基于抽象执行、<abbr title="这些理论我在我的 Telegram 频道上讲过，不过目前还没有具体化实践">表达式收束</abbr>和基本块、控制流分析、
模式匹配的<abbr title="逆向程序翻译器的代码生成过程，从目标代码还原出等价的源代码">反编译</abbr>算法了。你照样可以拿着 [jadx](https://github.com/skylot/jadx) 之类的东西，
继续自己非常[擅长](https://t.me/dsuses/2008)的，你和其他 _绝大部分人_ 所熟知的逆向工程。<template nsfw>世界上不缺一个和普通人技能无二的『逆向大佬』</template>

我们的追求不一样，一个是用用就行一个是追求彻头彻尾的理解。<template nsfw><s>（很欠打）</s></template>
我还得感谢你，要不然我真的不会对逆向工程有这一点微不足道的研究。

## 关于<abbr title="拖延、未完成">“鸽子”</abbr> GeekApk

没错，我不该加入一个<abbr title="不是我创立的。我把自己想建立酷安替代品的事情告诉了一个朋友，实际上由他（有可能是各自独立）创立">间接</abbr>因为我自己幼稚的想法创立的 [GeekApk](https://github.com/GeekApk)，
我应该让它这个<abbr title="没人要，都在讨论什么『商业化』『公司』『领导者』，技术呢？现实世界呢？呵呵">孤儿</abbr>自己成为笑话，不必打扰到你。
而且它开始的确就是<abbr title="开始的 GeekApk 绝大部分项目都是空的，没有一行实际代码，只有个名字">空壳</abbr>，
除了 [前端的 HTML](https://github.com/geekapk-r/geekapk.org/blob/master/templates/index.rhtml)
之外一无所有，即便我的确是有尽我所能地努力在为它<abbr title="我花了很多时间，尽可能写了当时我能写出来的东西">付出</abbr>，这点也不可否认。

我为 [GeekApkR](https://github.com/GeekApk-r) 写了
[自己的 Swagger](https://github.com/duangsuse-valid-projects/GeekSpec-GeekApkv1.0b#geekapk-geekspec-%E7%A4%BA%E4%BE%8B%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6---)、
我写了 [API 文档](https://github.com/duangsuse-valid-projects/GeekApk/blob/master/geekapk_v1b_api.geekspec)，
可你只有那一点闲工夫看我真正空壳的东西，看完即使我毕恭毕敬<template nsfw>🌚</template>地指给你到底哪些不是空壳、到底哪些我还付出了一点努力，
你还是 **打年龄炮** 说我是小孩子。

实际上我的确「不仅仅是小孩子还是个 _小人_ 」，就因为我 **不小心** 转发了你的私聊消息、
就因为我 **转发评论** 了你之前发在 **公开频道** 上 **从没声明过不可转发的消息**。

我的确就是微不足道的<abbr title="是什么随便吧。我也觉得 既然决定了 就不要再乎太多 title，追求自己想追求的东西吧">小菜鸡</abbr>，即便是 GeekApk 这个只有壳子的项目在 **名义上都不是我的**。

你这种行为和以前的我很像，不过很可惜<template nsfw><sub>唉，世界上无法理解的心理 就有这么多</sub></template>，你已经比我大个七八岁了，**成年人** 。

我不应该指望 GeekApk <abbr title="我真的只是愿意『业余地』支持它，它应该是一个欢乐、志同道合的地方，不是为了其他目的而生">怎么样</abbr>，但你也可以因为自己会用 Sketch、我可能没见过
[Sketch](https://en.wikipedia.org/wiki/Sketch_\(software\))
就把它当成 GeekApk 现在完全也永远就是废物的 [补充论据](https://t.me/dsuses/1961)，
也可以因为我不接受这个理由而感到 _愤懑不平_ ，可换到我自己，我是不会把自己会用
[Krita](https://krita.org/zh/) 和 [After Effects](https://en.wikipedia.org/wiki/Adobe_After_Effects)、
[Blender](https://www.blender.org/)、[Kdenlive](https://kdenlive.org/en/)、
[Synthesizer V](https://synthesizerv.com/zh-cn/)、[Vocaloid](https://en.wikipedia.org/wiki/Vocaloid)、
[UTAU](https://en.wikipedia.org/wiki/Utau)、[LMMS](https://lmms.io/)、[Synfig studio](https://synfig.org/) 做点微不足道当不了饭吃的小事情之技能视为自己所拥有能力的。

是用 Sketch 设计矢量画、界面和动画的难度真的比上面几个高的多的多，以至于它都能被当成一门 _独特_ 的技术看待，还是我们对技术的 **评判标准** 不同呢？

听起来偶尔尝试用 [Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Gecko) 和
[text editor](https://en.wikipedia.org/wiki/Text_editor) 来做设计就是低层码农，
<abbr title="有时候我不喜欢这个词，因为我把它当成了浅尝辄止、不愿深入探索的代名词">前端</abbr>设计师真 _高大上_ 啊。

不过还是感谢你至少开始的时候表示了支持态度，后来也在我道歉删除转发内容和评论后容忍了我未授权的转发。<template nsfw>这句是真心的。</template>
有些人不喜欢这类<abbr title="和我的风格就有很大差别，当然我因为不常拒绝破事，也会更频繁地焦头烂额">破事</abbr>，我显然是打扰错人了。

## <template nsfw><sup>迫真</sup></template> 理论大佬·不能解决的自动排序问题

是，[你说过](https://t.me/dsuses/1953)：

> 5 没有被手动排序过，5 排在 1 前面，4 被手动排序过，4 也在 1 前面， _但 5 和 4 却无法得出谁在谁前_

的确是没问题，对支持你的人来说它永远是 [真理](https://t.me/dsuse/10848)；
而且 **你知道是这样** 但是不知道有啥 _奇妙的“黑箱”算法_ 可以 **实现它**。

对于一个习惯于抄代码、看文档、<abbr title="我最讨厌某些中国人的这种癖好了。一个我自己也不愿意说的口头禅：『这很中国』">找现成的</abbr><template nsfw>我说的是<a href="https://coolshell.cn/articles/3820.html">实话</a>。</template>、
改代码的工程师来说， _这很不错了_ ，我不该提出别的可能，也不该胡乱猜测你只会 [Bubble sort](https://t.me/dsuse/10849)。

你懒得学<abbr title="计算机科学火爆内容，诸如排序算法、图算法、动态规划、数据结构什么的都是算法优化范围内的工作，重要性好比几何/解析几何于数学">算法</abbr>因为害怕忘记<template nsfw>（谁不会忘记？）</template>，这很正常，显然这 _不会_ 阻止你成为你口中[完美的工程师](https://t.me/dsuse/10855)。

你的确比国内<abbr title="世人熙熙，皆为利来、世人攘攘，皆为利往。好吧，和我又有什么相干？">那一堆</abbr>强的多的多， **但我就是刁钻**，就是喜欢在用户群里公开地贴代码贴截图，你提个小发现都得<abbr title="没有『宽松』的环境，科学不可能繁荣，为什么？想想当年伽利略是怎么死的">被怼回去</abbr>。
即便我只是想帮你实现那个功能；我以为你很喜欢你的 [PureWriter](https://github.com/purewriter)，
没想到如果条件是要看自己不喜欢的、口无遮拦的二愣子<template nsfw><sub>嗯，就是啊</sub></template>写的代码，你就<abbr title="无理由、无余地、果断地">直接把我踢了</abbr>。

你的理论正确，你的发现 **在 _Android 开发圈里_ 很伟大**，我以后都可以叫它「 _不可共客观序_ **_公理_** 」了。
即便你的语言自相矛盾，你开始只是说 _无法实现_ 后来说却又说它逻辑相悖 _无解_ ，
即便你 **不愿意回我一句** 也不愿意 _絮絮叨叨_ 地告诉我们 **为啥因为这句模糊不清的话就不可** [**实现**](https://t.me/dsuse/10902)，
你这句话里 **藏着什么理念所以可以说明它是正确的** 。

我的确就是 [幼稚](https://t.me/dsuse/10848)，因为我妄图打倒你确认 [**100% 成立**](https://t.me/dsuse/10848) 的理论，
你永远是 _正确_ ，因为这个理论就是 _莫名其妙_ 就成立了。
[postulate](https://zh.wikipedia.org/wiki/%E5%81%87%E8%AF%B4) 出来还不行么。
自己随便说点发现就会被自己看不起的人提出反面的意见，要是我，看到后脑子不乱乱的也难。

> **真理是不害怕质疑的**。 质疑 **只会** 让完美的真理在谗妄者的诽谤和学者的证明中 **愈发显出其正确性** ，真理像是一种生物，它的天敌就是所有想要 *打倒它、扭曲它、证伪它* 的人，
**自然选择是真理诞生和生存中必须要有的经历，因为存在，因为扛住了时间的冲刷打击，所以是真理。**
<br>一个人敢于宣称自己说的 _永远_ 是正确的，最终只会成为 _暴君_ ，所有人对他任何作品的评论都会被当成是 _学术欺压_ ，他保留对自己任何作品的解释权、只允许任何人对它们的赞美而任何显得自己 _没面子_ 的评价都是不可能与之共生的，他运用各种方法屏蔽一切任何对他略有微词的、不利的东西，他保护自己的理论， **没有人能说他是错的、他做的是不对的、他误会了某些事情、还有可以改进的地方** ，可是也惯坏了自己的理论，惯坏了自己的技术，进入这种状态的人 _终此一生_ 将 **没有任何实质上的长进** ，因为他已经屏蔽了 _进化的源泉_ 。
<br><br>人们应该追求真理，因为真理让我们变得更好。 **你觉得真理应该是什么样子，真理应该以什么标准被选择出来？**
<br>应该是『某个人说的话全都是真理，我记住它们』还是『一个命题太浅，给我证明它、让我理解它！』？

## 我不该『很随便地』对你有负面评价

没错，我是不应该 *随便* 对别人的技术下评论。我太 <q>judge</q> 人了，但这就是我的风格。

即便我没有说错话，我不知道你 **无法接受** 对自己代码 **任何的负面评价** ，
我不知道你会因此 **直接退出 Telegram** ，即便你的 _粉丝_ 远远比我这 _小人_ 多。

我知道 **表现受到欺负的人在不明真相的吃瓜群众面前永远第一有理**，所以至始至终错的只是我一个，你自然是无过错的。

我的确有从头到尾都把自己的姿态放的 **很高** ，只是因为在你 **毫无理由** 地踢了我之后，
我以我自己所认为的客观视角评论了一下你的代码而且没有为你 **自动过滤掉不中听的话** ，
即便比这更难听的话 **你也对我说过很多次** 。

作为前辈，有无数个理由可以被尊重。
不管做的怎么样，都可能是有自己的理由的，这些谁都能够理解。

问题是 **一面做的尚可改进，另一面却说自己已经完美无缺** 、超出了绝大部分人，
_远远高出_ 自己本身应该得到的评价、逾越了善良的本性而进入了 _自负_ 的范围，就 **应当** 做好接受旁人可能存在指责/异见的准备。

**在你看起来** 我好像是自己为无所不晓无所不能， **恰恰相反，我只是一面镜子** 。
如果你和人交流是别人看你是正常身高，但是自视却比蚂蚁还矮的话，
**我的确是无法不和这样的你高姿态凌空喊话** 。

不过我还就真的是想让你 _谦虚_ 一点，为人和善一点，**_满招损谦受益_** ，
如果只有我一个人说，那是我不够宽容，可现在你 **对别人骄傲自满甚至自负的态度**
已经[让](https://t.me/monogramW/457)很[多](https://t.me/tgsucks/833)人[看](https://t.me/dsuses/3001)不[下](https://t.me/bystartw_chatboard/2228)去了。

##### “断章”

有一点我一直摸不着头脑，就是我 **完全没有** 意识到自己 <b>_断章取义_</b> 了你的话，
我 **不知道** 「断章取义」这四个大红字 **是怎么和我扯上关系的**。

你是指私聊那次？我的确转发漏了一个时间定语，_你得有时间想做了才能完成 XXXX_ ，
没错，但是你只说了那一句，而且 **再想想我没有转发漏并刻意断章出别的含义来** 。

那是一条完整的句子且 **意图明确、原上下文也没有使它拥有多大的歧义的成分** ，
除非你的语言已经 **完全** 欠缺了把一件事情无歧义不 _过分_ 依赖上下文和 _别人_ 自行推导地表述出来的能力，
而这个能力 **正是** 要拥有良好抽象关系逻辑直觉所严重依赖的。

当然这里的「 _别人_ 」其实也有可能是 **自己** — 人总是会忘记，第二天你又是一个崭新的人了。

不好意思啊，如果你是指 Telegram [网际协议](https://en.wikipedia.org/wiki/Internet_Protocol)
下层通讯的路由设施自动完成了数据包的报文切分以备<abbr title="OSI 7 层模型：物理层、数据链路层、网络层、传输层、会话层、表示层、应用层">传输</abbr>使用，
所以我发消息的时候实际上被自动「断章」了无数次，_这种绝路都走_ ，那我真的是无言以对。

但不管怎么样，我都没有为了自己的主观意愿 “*小人* 之心” 去「取」你消息的 “*君子* 之”「义」。

##### 真理部

你的确无意辩驳，也只是简单地像丢垃圾一样把我踢了出去，并且尽可能屏蔽了我，
因为你根本不可能接受两个人“剑拔弩张”地 __讨论问题本身__ 的情况。

不用追求真理，你只需要确认一个自己的认知就可以了。不需要求什么甚解，有问题只需<abbr title="消灭"><q><i>解决</i></q></abbr>掉就可以了。

是，**你就是自己的正义，无须辩论，只需出示一下胜利宣言就可以了** 。

实际上我也在很长时间里都不愿对这件事多说一句话，因为它 **就是** _观点不合_ ， **没有什么其他的东西** 。
但现在我要告诉所有人，**是怎么样的观点不合**，和我平时写技术科普广播的时候一样。

不过，我 **只掺杂部分个人感情** ， **没有** 什么所谓的小人居心；我从没安插过你所谓的「 _内奸_ 」， 
**生活不是宫斗剧。** 我不以 “ _手撕_ ” 什么大佬取乐或者盈利，也不是什么阴谋家。

**我不是微信营销号，无缘由地写这种文字对我来说只是浪费我自己的休息时间而已，对我来说有什么好处呢？**

## 你已经很敏锐了，可是离进步还差一点“傻”劲

当然，你从不絮絮叨叨， **也正是因为你太简洁，所以你也永远不会尝试碰壁** ，
也永远就是躲在一层<abbr title="现代高级程序设计语言可以轻松做到『代码复用』，想想什么是核心技术、什么是应用能力吧">抽象墙壁</abbr>里的 _热爱工作_ 的工程师。

理解的过程是 **从简单到复杂再变回简单** ，从 _入门_ 到 _实践_ 再到 _因看透本质、记熟模型、用透操作而不惑_ ，
你就是得 **永远卡在第一个简单到复杂之间的阶段**；因为你无法阅读复杂一点的代码也只能死记，
最终你也只能写复杂性和一个带消息循环以支持可扩展的<abbr title="分时复用执行资源，和 CPU 调度差不多原理，这里只是比喻因为消息循环很多时候不是『串行模型』">伪</abbr>非串行操作的简单文字游戏没有本质区别的代码，
**永远停留在量变没有质变** 、永远待在那特定的一层死记而看不到其他地方。

你打不破那一层 **屏障** ，看不到裸 <abbr title="老冯的图灵机-based 现代电子计算机模型">VonNewmann</abbr> 计算机的 I/O、存储器、计算器和控制器，
看不到 <abbr title="Arithmatic Logic Unit 数理逻辑单元，执行(binary)算术操作什么的">ALU</abbr>/<abbr title="Floating Point Unit, 浮点运算单元">FPU</abbr>/<abbr title="高速缓存，比如内存区域什么的；一般分指令和数据两种">Cache</abbr>/<abbr title="静态随机访问存储器">SRAM</abbr>/<abbr title="Static Dynamic Random Access Memory">SDRAM</abbr>/<abbr title="处理器晶振，各电子器件按照脉冲的节拍同步完成取指译解码取数寻址执行的操作">clock</abbr>、看不到 <abbr title="Portable Executable">PE</abbr>/<abbr title="Extensible Library Format">ELF</abbr>/<abbr title="一种调试符号格式">DWARF</abbr>/<abbr title="链接器，将分段的程序按照符号表(Procedure Linkage Table)拼接在一起">Linker</abbr>/<abbr title="汇编->机器码翻译器">Assembler</abbr>/<abbr title="C 语言基础库，完成 C 和操作系统 API 的交互定义（一般需内联汇编）">libc</abbr>/<abbr title="编译器和运行时操作系统完成的程序镜像(image)分段">Segments</abbr>/<abbr title="内存映射">maps</abbr>/<abbr title="地址空间虚化，操作系统完成的反溢出攻击的安全措施">ASLR</abbr>/<abbr title="地址空间执行权限限制，操作系统完成的反溢出攻击措施">Exec-shield</abbr>/<abbr title="分级保护域[OS]">Ring</abbr>、
看不到<abbr title="stack & heap">机器堆栈</abbr>、[解析器、抽象语法树](https://rednaxelafx.iteye.com/blog/492667)、<abbr title="OOP(object orented programming) 包含封装、抽象、继承、多态特性，其中特色当属继承和虚函数">面向对象模型</abbr>、<abbr title="面向对象支持兼容某类型的多种子类，覆盖该类型的方法成员等">继承覆写树</abbr>、<abbr title="缓存/记录指针式的面向对象方法重写(override)[多态]优化">虚表</abbr>、
<abbr title="Control Flow Graph">程序控制流程图</abbr>、<abbr title="数(Tree) 状图遍历器">Tree walker</abbr>、<abbr title="Lambda[23] 演算引入的函数闭包理论">lexical scoping</abbr>、<abbr title="Garbage Collector，高级程序设计语言的自动化内存管理方案，无须考虑分配/释放对应问题">GC</abbr>、<abbr title="哈希表是 Mapping[映射] 的实现，典型的空间换时间优化数据结构">Hastable</abbr> 算法，
看不到<abbr title="内存[head@对象->tail@(地址|nil)]链接构成的线性表">链表</abbr>结构、看不透排序算法、不能更好更快地理解 <abbr title="提供“非规范视图”的非结构化查询数据库管理系统">NoSQL 图数据库</abbr>也不熟悉图论、
看不到线程调度保护现场切换执行权再分时抢占的过程也不需要知道<abbr title="并发编程时长遇到的『先后顺序』问题">线程同步</abbr>是什么、锁和乐观并发控制、并行算法是什么、
怎么写 <abbr title="Digital Image Processing">数字图像处理</abbr> 算法、什么是<abbr title="Dynamic Programming 是利用子问题解决情况优化最终得解的算法思路">动态规划</abbr>、怎么做计算[向量化](https://www.llvm.org/docs/Vectorizers.html)，
也无缘任何面向对象或者 <abbr title="aka. Structured Programming">结构化编程</abbr> 之外的范式。

这样，
**你很明智，你的选择是绝大部分 “聪明” 人的选择** 。
因为你少花了做 _无用功_<template nsfw><s>反正你学了也不会</s></template> 的时间，你站在 **巨人** 的肩膀上，多得了 **写应用** 的投入。
**当然你不需要知道那个巨人是什么，有怎么样的历史，它到底长什么样子，它为你做了些什么，_你甚至不需要看见脚下存在有这么一个巨人_。**
**叫它黑箱就可以了。**

你<abbr title="虽然，王垠拒绝任何一个人崇拜他">崇敬</abbr> [王垠](http://www.yinwang.org/)，可惜以你敏锐的速度现在连第一个基于
[S - 表达式的 tree-walking 解释器](http://www.yinwang.org/blog-cn/2012/08/01/interpreter) 都没有写出来，
就是我这个小人也[实现了一个](https://t.me/dsuse/6929)、设计了[两](https://gist.github.com/duangsuse/fc33ea2690d77a0cc1fe0f0a4ce8b4f2)[个](https://gist.github.com/duangsuse/7dba2f4b41e45c3533158226091438e3)。
虽然当初我连 [Lexical scoping](https://anqurvanillapy.github.io/?p=lies-about-programming-languages-in-mathematical-notations-1)
都不懂所以没有支持，但它就是 works，从 **0** 到 1 看起来只是一个 `add1` 而已，实际上 “ _从 0 开始_ ” 这半句还是蛮不同的。

##### 互相伤害啊

我看你的频道的确是收获了很多欢乐偶尔也有点技术，也一直期待从你那里收获更多，
因为我虽然是陌生人但 **依然希望你越来越好**（因为你自己是这么说的啊！我自己是学生，当然知道「都是为你好」有多可怕）。
因为我也想回馈点什么给你，不小心有损你的 “ _尊严_ ” 而被你 **不解释也不给解释机会直接全网 ban 掉** ，
那我也就只好乖乖写自己的东西了。

说开了， **你那点知识对我来说，也没有多大价值**。
我从那一堆 [Unicode 字符](https://zh.wikipedia.org/wiki/%E7%A0%81%E4%BD%8D)
<sub fnref>1</sub>里没有收获多大意义上所谓 _有价值_ 的信息，
和你对我的态度一样，我对你的知识也没啥兴趣，我们可以 <abbr title="我笑你的缺点，你也拿我的不足讽刺我，就因为你比我强。诶，有必要吗？">互相唾弃</abbr> 啊。

##### 原地不动地进步

你的代码风格 _的确_ 是在进步，技术也一样，虽然你 _依然_ 没有摆脱 **容易但成品复杂不清晰** 的 **堆砌** ，
依然没有开始尝试 **困难而简洁** 的 **设计** <sub fnref>2</sub>。你就是 **无法接受** 一点点不足的地方，
你希望自己是 _完美_ 的，当然任何人都是这个样子。不过想要完美就要先明白，
**完美是不可能的，只能作为一个目标不断为之奋斗，这才达到了自己真正的完美。心中的完美，达到了你就不再美了。**

**你已经 _很不错_ 了** ，所以你余下的工作时间在 **禁止评论** 之后，都可以继续你 _完美_ 的编程生涯，
因为 **没有人** 能够指出你还有哪些 **不足之处** ， **也没有人能帮你进步** 。

就好像一段不会运行的 buggy 程序，[type checker](https://en.wikipedia.org/wiki/Type_system)
又不 [sound](https://t.me/dsuse/10692)，因为你封了它的嘴（`cc 2>/dev/null`）， **问题还暴露不出来** ，
是的，它 _很完美_ 、它 _没有错误_ 、它 _无可挑剔_ 、它 _没法改进_ 、它 _正确_。
你说我像鲁迅先生笔下的[孔乙己](https://zh.wikipedia.org/wiki/%E5%AD%94%E4%B9%99%E5%B7%B1)视人论断<sub fnref>3</sub>，
我是否可以给你立个真正的“孔乙己”[孔子](https://zh.wikipedia.org/wiki/%E5%AD%94%E5%AD%90)作为偶像？
孔子万世师表肯以七岁稚子[为师](https://zh.wikipedia.org/wiki/%E9%A0%85%E6%A9%90)，
礼之祖师入个太庙还“[每事问](https://zh.wikipedia.org/wiki/%E5%AD%94%E5%AD%90#%E3%80%8C%E7%A6%AE%E3%80%8D%E7%9A%84%E7%A4%BE%E6%9C%83%E7%A7%A9%E5%BA%8F)”，
恰巧是镜子前伟光正们的对立面。

## 做优秀的知识付费维护者，不是令知识碎片化而无法深入的理由

> 以下内容前半部分节选[自此](https://t.me/Trumeet/3221)，drakeet 清空自己频道消息后的说明<br>
后面几条则节选[自此](https://t.me/dsuset/5671)，drakeet 表示转移到知识星球分享后的声明

> 有朋友说他会反复看我写的东西，令我很感动，因为我也是这样，
> **我也会无数遍不停看自己写的东西或分享，所以当有人细心一点会发现我的内容即使有错别字或不妥的内容，但最终都会相对改正和变得相对得当⋯**

首先你是遵从了自己的内心 <template nsfw>为什么突然觉得自己好文艺</template>、太迟钝抑或是在搪塞自己、甚至说直白点，是不是为了显得自己对文字非常用心但懒得多下点功夫所以这么说，我就不吐槽了。

我写这篇文章之前的文风和你这里使用的差不多，都是 **逗号句号不分** 。对于写作 **只看 “光标” 下一个字** 的人来说是 **注意不到**
自己在该断句的时候没有断句的，断句往往是编辑审阅 **修订** 的时候做的事情；虽然我不是语言学家，但对文字最基本的风格判断还是做得到的。

相信使用拥有 edit history 功能<sub fnref>4</sub> 的纯纯写作你绝对比我有更多修订的机会，可是你没有做到 **不断斟酌推敲** 自己的文字是否 **停当**。
我是在 PC 机上打字所以很难去用纯纯写作，我承认它很不错而且设计上有独到之处并填补了市场的空白，
很多人有时候就是缺了这一点创意和思路；你在 [Hackathon](https://en.wikipedia.org/wiki/Hackathon) 上的设计也很有创意，
只是缺了一点[其他的东西](https://en.wikipedia.org/wiki/Computer_graphics)。但是，你作为软件的作者和一直以来最坚定的粉丝，
却没有把它 **利用到最好** ，我觉得这可以视为一个问题看待。

> ⋯这点上我也很佩服王垠，他的博客文章，我从来没有发现错别字，即使我是一个很敏锐且阅读文章特别慢的人…

> 只是说人的东西永远都会成为黑历史，经典是非常难得的，因为一个好的人应该是不断飞速成长的，
> 如果黑历史没有精力去一一重新审视扶正，就会变得不负责任，或自己也不能接受，所以删除是好事。

你是很 **_聪明_** ， **可是** 对要 **成大事** 的人、想做到 **最好** 的人来说， **_不笨不行_** _啊_ 。

你说你视 **文章信息和语言表述正确性** 为要物，这自然是很好，
可是如果你的文字 **永远** 就只 **停留** 在链接引用和截图一小段代码的层次而没有 _絮絮叨叨_
但深刻且对 **理解和记忆** 过程 **意义非凡** 的 **重复** ，
此时 **一味地** 去强调语言是否得当好看、有没有错别字，却 **忽视了作为文字本身价值所在的文章质量和深度** ，
实在是 _舍本逐末_ 的举措。

这就好像是你费了好大功夫开设了一个教成年人怎么 **洗衣叠被打鸡蛋** 的网站，
使用了各种最新潮的 Web 技术，比如 [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)、
[Webp](https://developers.google.com/speed/webp/)、[VP9](https://www.webmproject.org/vp9/)、
HTML5、<abbr title="Web 画布">Canvas</abbr>、<abbr title="3D Web 场景, GL=Graphics Library">WebGL</abbr>、[Webpack](https://webpack.js.org/)、<abbr title="惰性加载，比如一个复杂的计算 [f(x) = (x+a)(x-1), f mod 2 = 0: a=?] 不要在不用时计算">Lazyload</abbr>、<abbr title="和惰性加载恰巧反过来，它利用计算能力预先计算缓存结果，用时便可快速得出">preload</abbr>、<abbr title="雪碧图，将大文件裁切为小块方便传输">Sprite</abbr>、WebWorkers、WebAudio、WebVideo 一大打，
甚至还做了各种 SEO、访问速度优化，其整体服务就是一个大黑科技，而且 **_没有一个错别字_** 。

它没有问题、它最好。但是网站不仅 UV 量<sub fnref>5</sub> 少，慢慢的都没人过问了，于是你开始 **抱怨** 万维网的万恶、
用户们的眼瞎，为什么就没有让你 _如此用心_ 的网站持续 “火” 下去甚至真正火过一下 。🤔

##### 分享

我和你对你所谓的「[分享](https://t.me/tgsucks/823)」的看法，有很大的区别。

我 **曾经** 是自由软件爱好者，不过那时候我其实 _并不真正_ 写软件，所以现在可以忘掉我曾经是自由软件盲目爱好者的事实。

即使我现在依然 **尽可能** 的 **分享所有** 自己可能得到的成果；
即便现在有些人 **盲目地** 觉得 _所有_ 自由软件都是辣鸡，
**肯定** 不如大公司的专有软件而 **不愿意** _絮絮叨叨_ 地举出几个例子让别人知道 **为什么** ，
也完全无视了无数 [headless](https://en.wikipedia.org/wiki/Headless_software)
的自由软件在所看到那些好看至极的图形界面和大佬至极的特性之后做了多么 **了不起** 的工作。

在我的眼中，分享是自家学习用， 
_顺带_ 帮 _你们_ 理解（为什么就和你对纯纯写作开发动机的解释这么像呢），
因为我的策略是 **教学相长** 。

所谓的分享就是 **学习到知识的另外一半** 。如果我停止絮絮叨叨、停止 _看起来_ 机械愚蠢的重复，
我对知识的 **理解层次** 就会下降很多，我缺失了**一半多** 的理解。

所以哪怕还有另外一个人看、 **甚至一个人都没有了** ，我 **依然要** 记录、重复，
因为我说我 **热爱** 这些东西，因为这是我的 **战术** ；

**既然你热爱它，那就要让自己知道这意味着什么！**

##### 另一边

在我看来，你的分享，只是 **获得鼓励** 的方法， **因为你 _学会了 XXX_ ，所以你 _分享_ 上来**。
**因为** 你已经是最优秀的 _天才_ 了， **所以** 你的分享只是为了 **获得点赞** 。

你是 **_完全_ 弄懂** 了的，你眼中的你 **并不缺更深刻的理解** ，**只是缺乏一点他人的夸奖和赞美** 。

虽然不中听，但看你到你写的文字后，我就是这个感受。

所以你这么说，你需要有人来 **「致谢」「称赞」** 才能维护你眼中对别人 _极其有利_ 的分享：

> 就算你分享再 **难得** ，也极少有人会帮你做 **推荐或扩散** ，因此作为频道主会发现，
> **订阅数** 一年下来，几乎没什么变化。相比我 GitHub 和微博靠自然增长各自有 **6.6K** 和 **8.6K** **followers** ，
> Telegram 有时让人感觉到灰心（我不想说大部分人是冷漠的，但事实确实如此。或许这样的冷漠大多数都是无意识的）。

> Telegram 频道无法评论<sub fnref>6</sub>，虽然大多数时候我不喜欢评论，或者说公开的评论，公开的评论意味着需要尽快花费精力回复，
> 而且偶尔有些傻问题，所以当初也是因为这个特点喜欢上 Telegram Channel。
> 但与此同时，永远没人来（私下） **告诉我因为我的分享在这里收益了很多** ，
> 或者 **说一声感谢也会令人十分开心**，没有，一年到头几乎没人告诉我任何关于我的分享的反馈或感受。

> 总而言之， **订阅数几乎不增长** 加上几乎没有人来 **致谢** ，
> 这让我有时 **怀疑自己是不是像小丑一样在表演** ， **只有自个儿** 陶醉而已。

**这也是你把自己怀疑成是小丑自娱自乐的原因** 。因为你这里说的 _分享_ **与其说** 是分享，
不如说就是为了给自己 **博得喝彩** 而在 Telegram 这个舞台上给大家做 **才艺表演** 而已。

你所 **看重** 的是 **推荐、扩散、围观群众总量、Follower** 什么的 **因为分享优质相伴而生的东西** ，
**而不是分享这个行为 _本身_** 。

你很 _聪明_ ，因为你懂得了使用自己的技术积累给自己整点其他的东西，比如人气。
显然绝大部分人都希望自己成为一个受到广泛尊重和赞美的人，当然我也一样。
不过这也是我们的意见不合之处之一。

## “愚” 者反而拥有大智慧

想要廉价的 _称赞_ ，可惜在 Telegram，你找不到。
如果想得到更 **优质** 的 _认可_ ， **不笨不行啊** 。

我分享只是为了分享，因为我就是 **喜欢** 学习这些东西，就是 **必须** 要分享；
**哪怕有人嫌我 _啰嗦_ 、嫌我消息 _太长、_ 发布 _太频繁_ 有时又因为上学不更，不爱看。**

至于其他什么的，比如提出我没说到的问题，则要看我个人的人品。
不过我个人的人品我自己无法评价，只能让别人来说我来观察改进。

我自身当然不需要考虑自己人品怎么样， _人品_ 是 **_别人对我的看法_** ，
自己评论自己的人品是 **_没有意义_** 的。

我是 **没有状态依赖** 的，我要怎么做， **完全只看我自己。**
在我写文「分享」的时候，**我眼前的舞台下没有任何人，而我所见的只有自己想要完全弄明白的东西。**

你分享则是为了某种指标最大化。你就像是在效仿一个最优化算法，目标是 **人气** 、 **赞美** 之类的决策条件<sub fnref>7</sub>最大化。

**你可以选择怀疑 Telegram 约束了你** ，使你不能达到你 **自觉** 能达到的 **最优水平** ；于是你开始怨天尤人，于是你开始怀疑 Telegram
上的人，是不是 _抛弃_ 了你、是不是 _不公正_ 地对待了做了 **分享** 的你，所以你要去[知识星球](https://t.zsxq.com/Zjun2b2)。

但是，不管怎么样， **你眼中的分享** ， **始终没有把分享的 _内容质量本身_ 放在第一位** 。
这也就是为什么 Telegram 生态观察要对你有[那种评论](https://t.me/tgsucks/826)的原因
— 你不是做学术的，但如果有学者称自己发文的某平台埋没了自己 _不得了_ 的才华，那他就是学术态度 **不端** ，

因为 **_是金子总会发光的_** 。在问得到之前得 **先付出** ，先做 **有效** 有 **真心** 的付出， **人心换人星** 。

会有些人怀疑这个理论并认为单靠口才和营销就可以「[死人说活了，破货变好卖](https://zhuanlan.zhihu.com/p/31846622)」，但这条道理有时候就不行，它或许能够仗依人的不解、侥幸和误会得以暂时苟存，却骗不过时间苛刻的挑拣。

**踏踏实实** 地做 **并且做好** 自己该做的事情， **多问耕耘少问收获，生活不会亏待你的。**

##### 删除、删除、删除

> ⋯只是说人的东西永远都会成为黑历史，经典是非常难得的，因为一个好的人应该是不断飞速成长的，如果黑历史没有精力去一一重新审视扶正，就会变得不负责任，或自己也不能接受，所以删除是好事。⋯

乍一看，删除自己没有精力去重审扶正的 _黑历史_ 无可厚非，其实这个行为本身也没有任何对错可言，但我依然要表达一下自己的观点。

黑历史是什么东西呢？如果这里说的黑历史，是自己曾经失败的尝试、曾经写过的程序、曾经对技术幼稚的观点和评论，我的立场很明确： **不应该删** 。

**是的，正确性很重要**，
所以没有办法确保正确的东西好像只得删掉，但我看到的不是「责任」「经典难得」「求成长」，也不觉得会有人无意识地把我有误解、不准确的 “黑历史”
用于学习，

但实际上，先学会跑才会飞。 **有些你现在看到是误解的东西，开始没有它们的缓冲你反而无法抓住当下拥有的真知。**
所以除了真的舍不得外、我也在选择为他人参考而保留。说出去怕是误解，留作参考还不行么。

因为一点错字、可能的一点时效性问题就『负责任』地删除一切 _确实_ 有道理。但是因噎废食，因为 _怕犯错_ 而什么都不教，才是最大的不负责任。

对我来说，过去的努力 **成功了有经验、失败了有教训** ，但不管怎么样， **都在指引着我朝向自己希望的新高度迈进** 。

<q><i>一个好的人应该是不断飞速成长的</i></q> ，飞速成长意味着什么？意味着你要朝 **新的层次** 、曾经 **不敢碰** 的领域、之前 **不敢开刀**
的思想下手。

<p id="try-everything" align="center">
<quote>
  I keep falling down I keep on hitting the ground<br>
  But I always get up now to see what's next<br>
  <mark>
    Birds don't just fly, they fall down and get up<br>
    Nobody learns without getting it wrong<br>
  </mark></quote>
</p>

— [Try Everything](https://soundcloud.com/nguyen-lam-41616107/shakira-try-everything-zootopia-nightcore) — Zootopia

老生常谈的一句话：

<p align="center">
  <quote>有尝试就有成功和失败，没有尝试就没有失败，也没有成功。</quote>
</p>

失败很丢脸吗？ **失败不丢脸，怕才丢脸** 。

**成功了就继续向上进发、失败了再爬起来再试一遍** ，发明电灯泡的时候可是尝试了 **7000** 次呢！看起来和这个数字相比，现在继续尝试下去会有很大希望嘛。

走出安全区。尝试就有跌落的可能，甚至可能让你在很长的时间里不愿提起它、不愿继续下去。但是，
**你遇到过的所有困难，只要不能彻底打倒你，都只会让你变得更强。**

<p id="dream-it-possible" align="center"><quote>
  <b>The past</b>, is everything we were<br>
  Don't make us <var>who we are</var>
</quote>
</p>

— [Dream It Possible](https://soundcloud.com/abdallah-el-taib-458852947/dream-it-possible)

Telegraph 和 Telegram 一样都说我写的文太长了不给发⋯ <template nsfw><s>划掉 😟 划掉</s></template>

我只好把这里余下的内容加在另外分建的一篇里。看[这里](https://telegra.ph/%E5%AF%B9-drakeet-%E7%9A%84%E4%B8%80%E4%BA%9B%E8%AF%9D%E5%86%85%E8%81%94-07-03)。  

*因为长度限制无法内嵌的超量内容在这个版本里已经合并到主文本。*

就像没有万能药、人被杀就会死一样，现实就是现实； **没有人生而知之，也很少有人天生被限制种种不能** 。只要你想做， **你做的到** ；但在做到之前，
**要先付出精力和时间** 去学习、去尝试， **如果失败了就再试一次、再试一次，直到成功** 。我知道这种策略听起来就很 **_傻_** ，很少有 **_聪明人_** 会真正这么做 — 他们会先想想有没有直达的 **捷径** 、有没有 **不费力气** 不浪费时间的方法。

很不幸， **真正聪明** 的人是 **极少数** 的，不过你也可以 _伪装_ 聪明人：拿时间去换，
**比他们多花甚至十倍的时间去做某件事情，直到和他们一样为止。**

吃力不讨好，这真是非常 **_蠢_** 的办法，所以有的人 **放弃** 、有的人又开始寻找永远找不到的捷径；而那个之前表现的最 **傻**
的人，即使花费了最多的时间， **反而从人群中脱颖而出** 。因为他始终没有改变自己的志向、 **把时间花在了自己内心坚持的事情上** 。

人要铭记历史， **因为历史给了我们经验和教训** ；历史也是我们比其他动物高级的多的多的原因
 — 无须缓慢的自然选择，只需要很少的时间，查查自家的历史、看经验就可以了。

**小到个人，大到国家亦是如此。**

对于「千万家、亿万人」的国家来说，很多国家不能容忍的 **不是** 黑历史，而是 **找不到** “黑历史” 的 **解决方案** 。

**对于国家来说，重要的不是想办法“处理”掉自己的黑历史，不让它被别人看到，而是站在历史和未来的交织点、曾经那个不完美的自己面前作出改变命运的决断。**

**真正的凤凰会终会站在历史的余烬上浴火重生，但不是焚书坑儒的那把火。**

“黑历史” 是曾经不完美的见证， **但它对自己而言也不是没有用处的。** _一个优秀的人_
时常要复习一下自己的黑历史、记住自己曾经的误解、不确定，来为自己的未来提供一个完整的排除名单。 **错误不再重复第二遍。**

<p id="inline-fortune-stone" align="center">
  <quote>人不能在同一块石头上绊倒两次。</quote>
</p>

##### 失败是成功之母<template nsfw>，总结是成功之父（致敬《管好自己就能飞》）</template>

非常简单的 [DFS](https://ice1000.org/2017/05/26/UseMonadInDfs/)，深度优先搜索走迷宫。

虽然深度优先搜索走迷宫的思路本身非常简单，仅仅是每个能到达的位置四处移动下试试，回溯出成功的路径而已。

**如果你不记录下试过走过不能走的点，就会不断重复山穷水尽，向后倒车** ，算法白白浪费计算的存储空间、处理的时间，这是错误的做法。


```haskell
import Control.Applicative

data Move = U | D | L | R
  deriving (Eq, Show, Read, Enum)

type Map = [[Bool]]
type Point = (Int, Int)

type Hitsory a = [a]
type TracedRoute = (History Move)

dfs :: Map -> Point -> History Point -> Maybe TracedRoute
dfs map target history step
  | step == target = Just []
  | step `outbounds` map = Nothing
  | blocked or walked = Nothing
  | otherwise
    = firstJust (fmap try [Up, Down, Left, Right])
  where
    (x, y) = step
    blocked = not (map !! x !! y)
    walked = step `elem` history
    outbounds p m = let (px, py) = p
    in px >= length m or py >= length m !! px

tryDfs m t s = dfs m t [] s  -- Define `try' yourself...
```

曾经独立战争的美国、现在依然被很多墙外的中国人自家看不起的中国， **都是最鲜活的例子** ；他们都有过很 **严重的历史问题**，
但这些问题最终都在无数人和时间的努力下 **平复** 了，现在 **依然** 会有很多新问题，

依然会有人为了解决问题而 **努力**、依然会有人在一旁看着自己无法解决但真实存在的问题灰心丧气但 _仅仅只是要命的灰心丧气_ ，甚至咒骂自己国家、自己民族的劣根性、依然会有人默默 **记录** 下这一切，以供未来 **参考** 。

**你或许可以否定历史，但历史总是真实存在；它是你的一部分** 。而当错误第二次到来的时候，你可以指着自己的历史
— 看，遇到这种情况应该这么办！ 看，这错误我 500 年前都犯过了！

而不是蒙圈在那里，不过说也许是要效仿日本政府 **美化、修正** 侵略历史『黑历史』的话， **那我没话说。**

<template nsfw>
当然这里有些讨论到政治的内容，我不希望每次一提到中国政府并且不是批判的话就会遭来「反色小粉红」的谴责，
是的大部分人什么也做不了，但出于盲目的批判似乎又没有什么目的，只能说自己是努力过吧。
<b>但是即便看起来是再坏，总有好的一面有时候是不能强行抓去一道骂了的</b> ，所以请『反色小粉红』派噤声。<br>
</template>

你又是怎么看那些曾经消息的呢？你不会忘记吗？你可以表达一下自己的观点吗？

## 『敏锐』的不是你的人、不是你的认知，而是你所有的真知

> ⋯即使我是一个很敏锐且阅读文章特别慢的人 ...

记得有篇古文，[《庖丁解牛》](https://zh.wikipedia.org/zh-tw/%E5%BA%96%E4%B8%81%E8%A7%A3%E7%89%9B)，文中所叙无非古时一御厨宰牛经验之谈而已。

> 臣之所好者， __道也，進乎技矣。__ 始臣之解牛之時，所見無非全牛者； __三年之後，未嘗見全牛也。方今之時，臣以神遇而不以目視，官知止而神欲行。依乎天理，批大郤，導大窾，因其固然。__

这位古时的厨师，开始宰牛的时候所见到的无非只是牛罢了，可三年之后，他 **_以神遇而不以目視，官知止而神欲行。_** 几乎不以目视，只是依赖自己对宰牛
**天然的感觉** 就做到依据牛 **本身** _固然_ 的结构去处理它，而非 **机械重复刻板化** 的操作流程。

自然， **厨师只是厨师；可是也可以分为好厨师和差厨师** 。厨师的好差，能够靠着他们自己的语言评定出来吗？

一个人一生里决定他一生的事件，发生的时候他们往往不在场，自主招生、录用、加薪、裁员，
**你觉得是自己想要得到的评论重要，还是别人真实的评论更重要？你是做好自己，还是去和别人争论他们不公平？**

故事里说的，是 *御厨* 。旧时皇帝是坐拥万里江山，厨师自然是最好的厨师。

故事里的厨师 **从屠宰第一只牛开始** ， **花了三年时间** 。他 **并非** 一直只在仅仅 _杀牛分割_ 上下工夫，这三年里他 **悟** 出了「
**道** 」；即使是很多人可能不屑的宰牛之道。
**这也是他能从可能一个普通的市井小民、家常菜馆的小厨子晋升为御厨的缘由所在。**

这位古时的一介武夫，费了三年的时间，
**他并非一直单单在机械化地宰牛，而是在宰牛的过程中亦在学习宰牛、分析宰牛、领悟宰牛，他在利用宰牛的实践经验向宰牛之道逼近** ，并最终可以做到
_“以神遇而不以目視，官知止而神欲行”_ 的境界。

程序设计 **本身** 的 _道_ ，不是所有人都在说的所谓 _优雅_ 的代码、不是看某某人的博客，也不是对有图形用户界面的应用做最优秀的界面交互设计。

刚入门的程序员扣老师枚举出的语法，战战兢兢地拿那一堆惯用法组织自己的逻辑、加入实际项目的工程师扣刻板复制的项目管理、设计模式、代码风格，

可是真正的程序设计大师 **只扣** 对编程的 **直觉** 和程序 **本身的灵魂** ，
对他们来说已经没有入门者的条条框框、刻板的约束了，回归初心，他们看到的是 **程序所做的事情本身** ，
是程序的灵魂；换十种兼容的语言和底层抽象去描述也不是问题，因为他们已经站得足够高，无须顾虑脚下低处的迷雾笼罩而可以自由地放飞视线，
_不识庐山真面目，只缘身在此山_ **_中_** 。

**人类的本质是复读机，可是有些人就是能在不断复读的过程中领悟到所复读内容的真谛，有些人最终也只能是记忆量大一点的复读机而已。**

语法本身是你对高级程序设计语言使用的基础，项目管理和那群系统管理员做的工作一样容易令人困惑，必须强记。模式是容易复制却又很少被彻底看懂 **看透**
的、代码风格可以被机械化的解析、模式匹配、自然语言字典分词、自动却又很 **刻板** 地检查整理。

优秀的程序员 **授人渔而不是授人鱼** ，看懂某个模式、弄懂某个框架或者库、语言特性、开发工具的使用，熟悉某种基本模型，是的，都很好。
但是 **学一就只能得一，做不到举一反三** 、用归用 **忘还是会忘** ，并且既得知识非常容易失去
因为学到的浅层知识 **根本没有产生联系** 、 **不能做到融会贯通** ，甚至刚用完就忘者不在少数。

当然，看起来工程本来就应该是这样， _理论是知道为什么但是它不好用，实践是它好用但不知道为什么。_

##### 技术，也看战术

「真传十页纸，假传万卷书」，通过 **使用** 去揣度基本模型和操作、设计理念、设计思想、诞生缘由和可能的优化， **甚至** 只是用到就去查，
**什么都不干** 。甚至不需要总结任何一个模型、不需要泛化任何一种理念，“复杂”，你都可以 **轻而易举** 地靠增加编程时间来做到，
“_车到山前必有路，船到桥头自然直_ ”。

**可是技术本身呢** ？靠经验，可那点经验 _永远_ 只停留在 _使用_ 层面。
从用例范例看本质，好比管中窥豹、盲人摸象，感受到一点是一点，最终想要 “完美理解应用”“精通” 还得拼起来猜测半天。

从一堆 _碎片_ 拼出整个图像找线索要比一开始就从 _完整图像_ 搜索 **多花不少脑力** ， _不_ **_聪明_** _真的是做不到啊_ 。

drakeet，你自从学习程序设计以来， **离你写下第一行代码开始编程又过去了多久** ？我想即使没有 8 年，也过去了 **两个三年**
吧。程序设计本身的直觉就是这么特殊， **以你如此 _敏锐_** 的思路都没法试着融入了，以古时候厨子的速度你应该已经领悟大道 **两次**
了，可其实你还在第二个理解阶段前徘徊。如果真的是这样，我只能说 **_很可惜_** 。你慢的实在太特别了，把你所有的 _敏锐_ 都给抵消掉了。

目前为止我活了 17 年， **没错，我不是长者，我见识不如你多，我写过的字还没有你写过的代码一半多，我现在还不能到微软、阿里上班。**
但是我依然见过几十个我所认为敏锐的人，他们有的是二线城市最优秀的初中里全科的年级第一，热情阳光口才好，体育成绩优秀，高分高能、有的成绩普通但热爱足球运动、身体灵活且耐力强，多次在校运动会上拿到长跑第一名，

**有的** 敢以自己刚刚初中毕业的年龄挑战自写 Basic 解释器、自创新编程语言， **有的** 从初中就开始写中高难度 OI 题刷各种
OJ/CodeVS/Codewars、高中就熟练 Haskell，现在在函数式编程 / 数理逻辑 / 编程语言理论 (PLT)/ 编译器设计 /
计算机图形应用 / 分布式计算 / 数据库 / 交互式应用编程 / 设计模式和封装 / 软件开发工具设计 / 数据结构和算法 / 基础计算模型上都取得很大收获、 **有的** 大学毕业就加入 Oracle HotSpot，Java
领域无人不晓商用 Java 虚拟机的开发团队、 **有的** 没比我大几岁却对计算机 / 程序运行时 / 计算机网络基础结构摸得很透，做过 8k 并发的
HTTP 服务程序，写过基于 WebAssembly 的子系统运行时支持、写过 TCP 流量的混淆器、 **有的** 高中时代就写纯 C
设计出了自己的歌声合成软件并且不断维护，大学时期从 Illinois
州立大学计算机科学和数学系肆业后又设计了一款基于人工神经网络和语音音高时长修改的歌声合成软件。

要知道信号处理领域可没有一个算法是可以靠抄解决的，机器学习领域又 _岂止_ 单单靠一个 “ _敏锐_ ” 一个 “ _本质_ ” 概论可以弄明白，
若是靠 _抄代码_ 能从头弄出个 Haskell 优化编译器或者质量能听的音素音节歌声合成器，一大群猴子敲键盘都能敲出本《莎士比亚全集》<sub fnref>8</sub>来了。

**照你的说法，他们都是小孩子了** 。很可惜， <b><abbr title="《黑子的篮球》第一季 第七话">孩子可是很危险的</abbr>，没人知道他们会变成什么</b> 。长江后浪推前浪，不单单看中国的就更可怕了。
**_前浪_ 没有危机意识，小心死在沙滩上啊。**

中兴作为中国一大通讯信息企业，不得不说是做了一个好的反例 <template nsfw>，华为虽然是比前者好不少，但在世界技术压制前可能也是够呛</template>。

```haskell
quickSort :: Ord a => [a] -> [a]
quickSort xs
  |length xs <2 = xs -- ordered
  |otherwise = quickSort lts ++ eqs ++ quickSort gts
    where
      x = let mid' = (length xs `div` 2) in (xs !! mid')
      lts = [ l | l <- xs, l < x ]
      eqs = [ x'| x'<- xs, x' ==x]
      gts = [ r | r <- xs, x < r ]

-- forall i. list[i] <= list[i+1]
-- forall x r in join2(list). x <= r
ordered xs
  |length xs <2 = True
  |otherwise = forall (zipWith (<=) xs (tail xs))
    where forall = foldl (&&) True

prop_qsortOrdered inxs = ordered (quickSort inxs)
  where _ = inxs :: [Int]

import Test.QuickCheck (quickCheck)
quickCheck prop_qsortOrdered -- OK, passed 100 tests.

-- zipWith 从来没有完全停机过，它只是挂起，因为 Haskell 的 [a] 关于它的 head/tail 惰性求值
fibs :: [Int]
fibs = 0 : 1 : zipWith (+) fib (tail fib)
fibs' :: [Int]
fibs' = 0 : 1 : zipWith (+) fibs' (drop 1 fibs')

fibseq xs = and (zipWith3 facc xs (drop 1 xs) (drop 2 xs))
  where facc a b c = c == a + b

prop_fibseq n = fibseq (take n fibs')
  where types = n :: Int

splitH :: Char -> String-> [String]
splitH d str = splitH' str []
  where
    splitH' (c : cs) ac
      | c == d = reverse ac : splitH' cs []
      | otherwise = splitH' cs (c : ac)

cyclicIndex :: [a] -> Int -> a
cyclicIndex xs = \i -> let len = length xs in xs !! (i `mod` len)

cyclicIndexF :: [a] -> Integer -> a
cyclicIndexF [] = undefined
cyclicIndexF xs = cyclicIndex' xs xs
  where
    cyclicIndexF' :: [a] -> [a] -> Integer -> a
    cyclicIndexF' sxs [] i' = cyclicIndexF' sxs sxs i'
    cyclicIndexF' sxs (x:_) 0 = x
    cyclicIndexF' sxs (x:xs) i = cyclicIndexF' sxs xs (i -1)
```

```agda
infixr 5 _cat_
data Vec {i} (A : Type i) : Nat -> Type i where
  []    : Vec A O
  _cat_ : forall {n} -> A -> Vec A n -> Vec A (S n)

_ = [] :> Vec Nat 0
_ = (666 cat 233 cat []) :> Vec Nat 2

--
module SimpleCoinductiveList where
open import Agda.Builtin.Size

record Colist {i} (s : Size) (A : Type i) : Type i where
  coinductive
  constructor _:>:_
  field
    cohead : A
    cotail : {ss : Size< s} -> Colist ss A
open Colist
variable s : Size

cozipWith : {A B C : Type i} -> (A -> B -> C) -> Colist s A -> Colist s B -> Colist s C
cohead (cozipWith f a b) = f (cohead a) (cohead b)
cotail (cozipWith f a b) = cozipWith f (cotail a) (cotail b)

cofib : Colist s Nat
cohead cofib = 0
cohead (cotail cofib) = 1
cotail (cotail cofib) = cozipWith _+_ cofib (cotail cofib)
```

##### 『敏锐』

不过 **虽然他们都很敏锐** ，但除了这个之外都还有一个 **共性** ，就是他们对自己的敏锐 **都没有那么敏锐** 。

他们 **不觉得** 自己是在努力， **没有发现** 自己成天是在学习、没有发现自己的技术已经超过了多少人、没有发现自己做到了融会贯通且已开始步入 _大道_ 、
**懒得在意** 自己写的东西有多少人看、没有发现自己有天分、没有发现自己绕过了多少误区，弯道超车、没有发现自己做过的事情总结出来有多么了不起多么热血、 **没有看到** 自己的未来可能是个什么样子，还能再有什么发展。

**你真的是我迄今为止见过最为 _敏锐_ 的人了**， **因为你对自己的敏锐真的 _相当敏锐。_**

我 **真的** _无法_ 从这几十个人里挑出一个可以 _与你匹敌_ 的了， **在我看来他们都很敏锐，可惜他们对自己的敏锐都太迟钝了**
，以至于很多人都不承认自己的天分、自己的敏锐， **只是痴痴地年复一年做着自己喜欢的事情** ， **他们真 _傻_** ， **而你很 _聪明_** 。
<template nsfw><s>我 TMD 也真心希望你一直这样敏锐下去，造福人类。 🌝</s></template>

**每个人都挑着两个篮子，身体前面的篮子里记录别人的优点、背后的篮子里装自己的优点，看起来你好像把这个担子挑反了。**

> 另外我一开始喜欢上 Telegram
的频道功能是因为它可以很敏捷且可控，更关键的是它不用接受评论，⋯我无意与人辩驳，所以没有任何正面回应，因为面对小人，我去一一解释就是在浪费自己的时间和继续令其从我自己这边收获更多。总之就是难免又陷入絮絮叨叨，我非常热爱工作和写代码，我要尽快恢复投入，因此不多说了⋯

已经写不下了，无力吐槽… 省略号的内容没有展开是因为 Telegraph 文章长度有限制…

#### 没有断章取义呦

这次可不准任何人说我断章取义，本文加入了很多 JavaScript 小脚本和样式表来提升阅读体验（Abbr view、Contents Tree、Night、Reflink Preview、Footnote Xref、Music Player、NSFW Template、OpenGraph）<template nsfw>（很抱歉，其中绝大部分都因为我要补课所以没有实现）</template>

引用的链接只要我给了预览，应该可以轻松阅读到的，如果没成功请确认一下自己是不是在 GitHub Pages 上读启用了脚本的版本。

<noscript><var>您没有启用脚本，或许这是因为当前在 GitHub 而不是 Pages 服务上？试着访问 <a href="https://duangsuse-valid-projects.github.io/Share/%E5%AF%B9drakeet%E7%9A%84%E4%B8%80%E4%BA%9B%E8%AF%9D/%E5%AF%B9drakeet%E7%9A%84%E4%B8%80%E4%BA%9B%E8%AF%9D.html">这个版本</a>？</var></noscript>

##### 引用的 drakeet 广播原文

不好意思，你 _又不让人转发，又说别人断章取义_ ，真的是让我很为难啊。 <template nsfw>果真是很害怕被别人评论吗…</template>

今天我就为了自己这一面，充当一次这个 _“坏人”_ 。作为作者，有权保留对消息的解释权，但是却 **不能否认的确由你说过的话。**

我还真的就是为了一些非常 _肮脏_ 、非常 _猥琐_ 的思想，为了 _抬高_ 、 _褒扬_ 我自己，而写这种文章，『手撕』这种大佬。

什么热爱、什么追求、什么梦想， __都是骗人的，只是鸡汤，说说而已。__

我 **前后阅读 30 多遍、修改几十次** ，只是为了能够更好地 _蛊惑_ 祖国的花朵，让他们全都陷入无法自拔的<abbr title="平时遇到特别困难的问题想破头的时候，有没有感觉与人交流都很讨厌了呢？">自闭</abbr>泥沼里面去。

我之前批判他的代码， **也完全是为了让那群韭菜外行们转投到我这里来，崇敬我、显示我的水平很 _高_ 、满足我的 _虚荣心_** ；同时也以实现盈利，虽然我连怎么盈利都不知道。

建设性意见，是我最讨厌的东西。 **一个人过的好好的为什么需要建设性 _意见_ 呢？真是多此一举。**
所以本文，全都是洋洋洒洒地去提出一些 _表面上_ 有建设性实则 _非常邪恶_ 的做法，它们就是厚黑学的典型范例：欺骗别人，把别人带到坑里，以此来实现自己盈利。

尤其是写代码的，别听信上面的那些『励志』的话。 **都是假的、骗人的**
，我最擅长说那些令人热血沸腾但是不是真理的话，拉人下水才是我最真实的目的， _我是个坏人。_

我就是这么一个 _阴暗_ 的人。表面是 _正人君子_ 、只是因为热爱所以才去学习，实际上内心有着很邪恶很不纯的动机，对比自己高的人，都有着很深的 _怨念_ 。
我，一个不折不扣、教科书式的 _小人派_ 。

我 **不是** 为了纠正那些不对的地方、 **不是** 为了自己所相信的东西。
我刻意恶意诽谤造谣断章取义中伤他们、挂出来，想把他们打下去，宁可两败俱伤也要赶大佬出门，而不是自己爬上来成为大佬。
我宁可计算机们少了两个大佬，也不肯别人说的那个大佬，不是我。

哪怕我的对手是
<abbr title="James Arthur Gosling, 意大利计算机科学家, Java 的设计领袖和创造者">James Gosling</abbr>、
<abbr title="Douglas S. Lea, SUNY 纽约州立大学教授，擅长并发编程">Doug Lea</abbr>、
<abbr title="Alan Curtis Kay, 美国计算机科学家, 为图形用户界面和面向对象编程做出过先锋的工作">Alan Kay</abbr>、
<abbr title="Alexander Alexandrovich Stepanov, 俄罗斯计算机科学家, C++ STL 的主要设计和实现者">Alexander Stephanov</abbr>、
<abbr title="Donald Ervin Knuth（高德纳）, 美国计算机科学/数学家, 斯坦福大学名誉教授, TeX 排版系统的创造者">Donald Knuth</abbr>、
<abbr title="[约翰·麦卡锡]27-11, 创造了『人工智能』名词，影响了 ALGOL 语言的设计，于 58 年发明 Lisp 程序设计语言">John McCarthy</abbr>、
<abbr title="Gerald Jay Sussman, 美国 MIT 计算机科学家, SICP 书 / Scheme 的作者">Gerald J. Sussman</abbr>、
<abbr title="Guy Lewis Steele Jr. 美国计算机科学家, Scheme 的作者">Guy L. Steele</abbr>、
<abbr title="Daniel Paul Friedman, The Little Schemer 的作者, PLT 研究者">Daniel P. Friedman</abbr>、
<abbr title="Kenneth Lane 'Ken' Thompson, 美国计算机科学家, 设计实现了 UNIX 操作系统, 协助实现 Plan9 操作系统, B/C 编程语言. 2006 加入 Google, 协助设计了 Go 编程语言">Ken Thompson</abbr>、
<abbr title="意大利 CScist, AWK, AMPL 程序设计语言的发明者, K&R 教科书的 'K'">Brian Kernighan</abbr>、
<abbr title="和大学同学 Ken Thompson 协同设计了 B/C/UNIX">Dennis Ritchie</abbr>、
<abbr title="MIT 密码学家、学院教授, (协同) 发明了 RSA/MD*/RC* 密码系统">Ron Rivest</abbr>、
<abbr title="Timothy John Berners-Lee(TimBL), 英国工程师, 89 年在 CERN 创始了 World Wide Web">Tim Berners-Lee</abbr>、
<abbr title="印第安纳大学教授, 程序设计语言方向, 定义了 R6RS Scheme 规范, 设计了 Chez Scheme 编译系统">R. Kent Dybvig</abbr>
、<abbr title="美国数学家/逻辑学家，贡献于组合子逻辑">Haskell Brooks Curry</abbr>、
<abbr title="Moses Ilyich Schönfinkel, 俄罗斯数学家/逻辑学家, 发明了组合子逻辑">Moses Schönfinkel</abbr>、
<abbr title="[Figueiredo et al., 1996] Figueiredo, L. H., Ierusalimshcy, R., and Celes, W. (1996). Lua: an extensible embedded language. Dr Dobb's Journal, 21(12).">Figueiredo</abbr>、
<abbr title="《算法导论》四位作者名字的缩写 Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein">CLRS</abbr>、
<abbr title="Gang of Four = Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides, Java OOP 设计模式一书的四位作者">GoF</abbr>、
<abbr title="Shannon-Hartley theorem 的提出者，信号处理领域奠基者之一">Shannon</abbr>、
<abbr title="Harry Nyquist, 电子工程师, 信号处理领域奠基者, 发现了奈奎斯特采样频率">Nyquist</abbr>，
我都一定要去执行我邪恶的计划。无论是什么样的大佬，哪怕是奠基者， **哪怕是多么伟大的科学家、怎样厉害的工程师我都一定要去诽谤、抹黑，因为我 _永远_ 就这破水平。** 我要想自己爬高， _必须_ 把别人拉下来才能做到，我就是靠抹黑别人站到 _风口_ 的 _小人_ ，通过手撕大佬来收获眼球。

我本身技不如人、洋文不好、打字还慢。就是这样一个垃圾人，还有脸成天谈什么直觉、写什么 [essay](https://github.com/duangsuse-valid-projects/Essay-DIP-BMP-SIMD-Operation)、
谈论什么 Haskell、函数式编程、优雅性、代码重用，我就是这么一个连 Android 应用都没写过的工程菜鸡，实际上我不如所有这些做出过好看应用的人，我多么羡慕你们啊。

你们的水平我永远无法企及，那些很多人都 _难以理解_ 、 _没有解决_ 的问题、你们稀奇的解决方案和推测，这些奇妙的技巧我永远不得要领。
我的问题、我重造的轮子，都是一个缺乏实际编程锻炼的人做过的白日梦、空想而已、破灭了而已。

我说优秀的程序员要把代码写简单，实际上我是在打自己的脸。我写过不少不那么简单的程序，我讲的理论，看上去也不那么 <abbr title="泛泛">trivial</abbr>，很多人不是立刻就能明白、不是花几分钟就能上手实践做出好看好用的东西来，我是自己的背叛者。
我刻意制造复杂性，只是为了令你们觉得我是大佬，其实我什么都不是，我很不自信、我从未不卑不亢。我最怕别人不说我是大佬，我很看重你们对我的评价。

这些复杂性，它们根本不应该存在的，是虚空。 _不可见即不合理_ 。正如你们平日里看到的那样。 _当然，是我在扯淡而已。_

本来长的就很丑又矮穷挫，现在看到各种应用大佬们一天一天各种平台各种 _新_ 技术的应用在写，我都要不得不低下自己“高贵”的头颅了。
我真的很敬佩你们，果然是看到什么都会啊。自己愈发丑了。要是放在文革时期就会被打死的吧，这种半瓶子晃荡的废物。

当你看到我这么写的时候，你肯定觉得我这里会有一个转折：你以为我会回过头来说，其实我是骗你的，只是在检验你的意志坚定与否；其实我没有这么黑暗，我只是在说反话；其实我的自黑都是演给你们看的。

实际上这里的确是有这么一个转折：其实我只是想让你知道，我看到那些内容自媒体大佬的说法后，内心是怎么样的感受。
因为 _即使是这样，即使没有用_ ，我还是不想委屈了自己。

一但你听信我和我引用的那些文章里作者的观点，就会堕入痛苦而<abbr title="永无止境，学海无涯苦作舟">万劫不复</abbr>的深渊…
千万不要相信任何人，不要相信有付出才能有回报、不要相信追求更高就一定能够完成那些比自己低的事情。都是假的，我就是个反例，我多菜啊。 😭

我不需要有理解我的同伴，不需要有发展眼光的人与我为伍，不需要同好来支持。

绝大部分人，有着只需要看一眼、看一面就决定一切评价的能力、两三天就能翻完一本书的能力，碎片化的知识、『看完』就行『做到』就行的阅读和理解。
没关系，我都能够兼容，哪怕这些未必就和我完全无关，我应该在乎自己真正在乎的东西。

>本频道已经清空过往消息，可能有些朋友刚上 Telegram 遇到这个情况感到很不解，不用去追溯原因或发生了什么，之所以又发布这条消息是因为很多朋友私下来告诉我 曾经因为我的分享而收益很多，很感谢，至于发生了什么，就让它过去吧，也许哪天线下你遇到我，茶余饭后或闲来没事，倒是可以作为无聊的事情吐槽吐槽，当下其实不必再纠结或浪费时间了，我也是这样，我很好，已经花费了许多力气但完全没有忧郁或不开心，只是想摆脱困境。<br>
有朋友说他会反复看我写的东西，令我很感动，因为我也是这样，我也会无数遍不停看自己写的东西或分享，所以当有人细心一点会发现我的内容即使有错别字或不妥的内容，但最终都会相对改正和变得相对得当，这点上我也很佩服王垠，他的博客文章，我从来没有发现错别字，即使我是一个很敏锐且阅读文章特别慢的人 ... 只是说人的东西永远都会成为黑历史，经典是非常难得的，因为一个好的人应该是不断飞速成长的，如果黑历史没有精力去一一重新审视扶正，就会变得不负责任，或自己也不能接受，所以删除是好事。<br>
另外我一开始喜欢上 Telegram 的频道功能是因为它可以很敏捷且可控，更关键的是它不用接受评论，也绝不是要小孩子从头到尾以各种高姿态无所不晓无所不能指点地来和我说「我希望你要谦虚」要如何如何。现在的情况是，尽管频道不能评论，但却可以转发在另外的频道进行附加评论和断章取义、像孔乙己一般视人论断，这完全违背了我的初衷。我无意与人辩驳，所以没有任何正面回应，因为面对小人，我去一一解释就是在浪费自己的时间和继续令其从我自己这边收获更多。总之就是难免又陷入絮絮叨叨，我非常热爱工作和写代码，我要尽快恢复投入，因此不多说了，周末愉快！

>早上起来把我的大部分开源项目都删除了，包括 LayoutFormatter、MultiTypeTemplates、一堆陈旧的 deprecated 项目以及 Rebase 相关的 API、客户端、服务端代码。特别要说的是因为删除了几个 Idea 插件源代码，因此它们进入自用且不开源状态，建议不要使用我的 Idea 插件，因为它们不会再开源了，虽然我绝不会去上传用户的任何内容，但对于一个闭源的插件或许始终存在风险。另外，技术博客由于没有时间更新维护变得不负责任，也关闭了。

>由于本 channel 无法通过拉黑彻底阻止奸细与一些满嘴「我希望 drakeet 应该谦虚一点」、「我希望 drakeet 以后能够 xxx」实际上在我看来非常可笑的小人派，因此即将清空所有消息和删除 channel，要是 telegram 哪天支持 Do Not Forward 和订阅审核制功能或许会回来。

>我真不喜欢去反驳这些人高姿态且可笑幼稚的攻击，惯用的伎俩都是表面上扬一下，实际上经常是为了深层里抬高自己去抑对方，反反复复，这些攻击即使它们每一点都那么容易反驳、诱人深陷，但我都忍住了，所以我不怕抹黑，就怕一直去回想，浪费时间，目前来说我并不打算改变心意，因为我本不期望从分享中获得什么，现在又令自己陷入困境。

#### 最后<sub>（弱弱地）</sub>再加一句…

就算我不说，显然你自己也有权对 **“为什么有人反对我”** 这个状态心寒，然后彻底退出 Telegram，
**它很危险、它言论自由、它居然允许你如此随便地靠着仅仅几百条消息的积累就去可以去否定一个人的某一句话、某一个想法，居然可以让自己可以有除了夸赞夸赞夸赞以外的评论。**
居然让自己当不成永远的老师，真是一个荒谬的东西。

从而其他人会把锅弄到我的身上，到时候我肯定有口难辩；但是请记住这两句话：

<br><quote id="fortunes[0]">
无论你有多聪明，无论你的理论有多完美，如果不符合实际，那么它就是错的。
  — <a href="https://zh.wikipedia.org/wiki/%E7%90%86%E6%9F%A5%E5%BE%B7%C2%B7%E8%B2%BB%E6%9B%BC">Feynman</a>
</quote><br>
<quote id="fortunes[1]">
我唯一能确定的就是自己的无知。
  — <a href="https://zh.wikipedia.org/zh-hans/%E8%8B%8F%E6%A0%BC%E6%8B%89%E5%BA%95">Socrates</a>
</quote><br>

但是现在我唯一能确定的就是，如果有<abbr title="不是酒肉朋友⋯我现在很穷的">朋友</abbr>再来告诉我，不要这么 “激怒”
[drakeet](https://github.com/drakeet)，因为他有很多粉丝；我的确不会收回言论了，所以让我祈祷这条广播被尽可能少地看到吧。

祝你心想事成， **而且要遵从自己的内心** ， **简单一点** ， **不要太看重别人的评价** ，如果你真的还想 **优秀** 的话。

* * *

### Footnotes

<a id="fn-1">1</a> 哦，你肯定要纠正是 [Grapheme Cluster](https://www.unicode.org/reports/tr29/)，
不过没暖用，你的频道里就没有发过是自己写而且附过解释那些印度阿拉伯文写的字，当然也<abbr title="目前有点不准确了，截至我被 drakeet 屏蔽为止。不过还是一行公式也没有">没有一个字是数学操作符区段里的</abbr>，
你 **从不贴** 那些 **容易忘记** 的玩意。

<a id="fn-2">2</a> _越复杂越容易堆砌，越简单越难于设计。_ 大道至简。就像人们对事物、方法的理解进程一样，简单反而可能是最后彻底看透、完全理解的标志。

<a id="fn-3">3</a> 虽然我非常奇怪，以《孔乙己》里的同名人物作比，我真的不知道你到底想表达什么，你是不是本来要说[阿
Q](https://zh.wikipedia.org/zh-tw/%E9%98%BFQ%E6%AD%A3%E4%BC%A0) 呢？

<a id="fn-4">4</a> 就是 [Undo/redo](https://en.wikipedia.org/wiki/Undo)。注意和 [edit
distance](https://en.wikipedia.org/wiki/Edit_distance)
区分开。这个功能我不知道纯纯写作是怎么实现的，一般直接抽象成 Text 数据实例上的 pushState
操作，只要可以监听并重置编辑操作，这类功能（包括纯纯写作扩展的历史记录查看功能）不难完成。

<a id="fn-5">5</a> （站长）网络流量统计分析的术语，UV（独立访客） 为某日访问总人数、PV（访问量） 为用户点击量、IP（客户主机数） 为访问过网站的总人数

<a id="fn-6">6</a> Telegram 虽然没有直接支持评论，但它支持 Inline bot 啊，你可以为机器人设置消息内联按钮，然后 handle callbacks，存
K/V
数据库。实际上现在已经有人[这么做](https://t.me/jogle_channel_bot)了。你知道有机器人这一回事，可是却没有想到它可以做这样的功能。

<a id="fn-7">7</a> 对于很多最[优化算法](https://zhuanlan.zhihu.com/p/42689565)而言（比如知名的[梯度下降](https://www.cnblogs.com/conmajia/p/annt-feed-forward-fully-connected-neural-networks.html#%E9%9A%8F%E6%9C%BA%E6%A2%AF%E5%BA%A6%E4%B8%8B%E9%99%8D%E7%AE%97%E6%B3%95)法，这个方法要求
_目标函数_ 在它的 _值域_ 上是 _可导_
的）决策条件并不是一个相关名词，[决策树](https://zh.wikipedia.org/wiki/%E5%86%B3%E7%AD%96%E6%A0%91)方法则涉及这个名词，最优化领域类似的名词是
**目标函数** ，实际上最优化往往涉及线性代数的内容，这也就和数学函数论、统计、微积分分不开了。

这里，此文的作者对相关领域暂时不熟悉，如果有不准确或者可以增添的<abbr title="即得易见平凡（划掉）">直白简要</abbr>解释欢迎提出

<a id="fn-8">8</a> 为了避免 drakeet
看到后再次发生误解，这里特作脚注：此句引用[无限猴子定理](https://zh.wikipedia.org/wiki/%E7%84%A1%E9%99%90%E7%8C%B4%E5%AD%90%E5%AE%9A%E7%90%86)。
_无限只猴子随机地敲打键盘，总有一天能敲打出莎士比亚全集_ 。有人还在这里加入了自然选择，从而比喻机器学习领域的遗传算法思路。

上次误解是「[猫鼠游戏](http://www.sohu.com/a/131102632_673884)」，我在私聊里提出了这个信息安全领域的名词，被误解为我把自己逆向工程的结果当成偷到的奶酪，是老鼠（破解者）战胜了猫（软件作者），

而此名词本身只是强调游戏的持续性，永远没有输赢，双方都必须持续付出、对策。

### References

1. [A dependently-typed life: 抽刀断水水更流，状态转移是解构](https://ice1000.org/lagda/MuGenHackingToTheGate.html)
2. [QuickCheck: An Automatic Testing Tool for Haskell](http://www.cse.chalmers.se/~rjmh/QuickCheck/manual.html)
3. [Wikipedia: Dunning-Kruger effect](https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect)
4. [酷壳: 如何超过大多数人](https://coolshell.cn/articles/19464.html)
5. [RednaxelaFX@ITEye: 虚拟机随谈（一）：解释器，树遍历解释器，基于栈与基于寄存器，大杂烩](https://rednaxelafx.iteye.com/blog/492667)
6. [当然我在扯淡: 怎样写一个解释器](http://www.yinwang.org/blog-cn/2012/08/01/interpreter)
7. [Horrible RAM: 数学符号下的编程谎言 (1) 数据编码](https://anqurvanillapy.github.io/?p=lies-about-programming-languages-in-mathematical-notations-1)
8. [Kotlin 极简教程](https://www.jianshu.com/p/4fbe5e0a3639)

<noscript><h5>Scripts</h5></noscript>

<link rel="stylesheet" href="对drakeet的一些话.css">

<script src="fp.js"></script>
<script defer id="plug-nsfw" src="plug/nsfw-template.js"></script>
<script defer id="plug-abbr" src="plug/abbrev-view.js"></script>
<script defer id="plug-night" src="plug/night.js"></script>
<link rel="stylesheet" href="plug/night.css">
<script defer id="plug-fnref" src="plug/footnote.js"></script>
<link rel="stylesheet" href="plug/footnote.css">
<script defer id="plug-tree" src="plug/tree.js"></script>
<link rel="stylesheet" href="plug/tree.css">

<script>
function enable(name) {
  return function callInitialize() { var plugin = window[name];
    if (is.fun(plugin.enable)) plugin.enable(); }; };

waitsId('plug-nsfw') (delay.curry2(mins(5), enable('nsfw_template')));
waitsId('plug-abbr') (enable('abbrev_view'));
waitsId('plug-night') (enable('night'));
waitsId('plug-fnref') (enable('footnote'));
waitsId('plug-tree') (function() {
  var may = Maybe.of(cssSingle('.markdown-body')).fmap(function(x){return collect(x.children).slice(1, -1);});
  var doct = contentTree.parseTree(may.getOr(cssSingle('body').children));
  var tree = new TreeView(helem('toc'));
  tree.update(doct); $toc = tree; $para = doct; });
</script>

<script>_____(function(){
console.log('Content loaded~');
});</script>
