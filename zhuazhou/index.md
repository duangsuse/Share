---
title: 短篇小说《抓周》
author: duangsuse
date: Oct 11, 2019
category: Misc
tags: Life Statement Book
keywords: fiction China school gaokao 高考
---

<link rel="stylesheet" href="https://neko-dev.github.io/neko.css/dist/css/neko.css" />

<h1><a id="zhuazhou">《抓周》</a> <b>©</b><a href="https://github.com/duangsuse"><a rel="author">duangsuse</a></a> <button class="neko-btn shadow neko-color-green" id="btn-nsfw">吐槽！</button> <button class="neko-btn shadow" id="btn-night">昼/夜</button></h1>

<div class="main-content">
<blockquote>本文以 <a href="#CC-BY-4.0">CC-BY 4.0</a> （知识共享-署名）许可证、短篇小说体裁发布于 <a href="https://duangsuse-valid-projects.github.io/Share/">duangsuse 的个人分享页</a>；创作时间 <a rel="time">2019.11.1</a></blockquote>

<article id="main-article"></article>
</div>

<template articleBegin></template>

## 目录

<div id="toc-part"> <a nsfw>（已经开启 NSFW）</a>
  <noscript class="no-script"><blockquote>这里本来应该是 <b>机器自动生成</b> 的呢（但是没有成功），看起来你应该用不同的浏览器看，或者在 <b>浏览器设置</b> 里 <b>启用脚本</b></blockquote></noscript>
  <details id="toc"><summary id="toc-summary"></summary></details>
</div>

<script src="waits.js"></script>
<script id="plug-tree" src="toc_tree.js" defer></script>
<link rel="stylesheet" href="zhuazhou_toc.css" />
<script>
  function drawToc() {
    var toc_tree = tocTree.parse(helem('zhuazhou').parentNode.parentNode);
    var re = /^(\S+\s©\S+\s).*|^(\S+)\s.*/;
    var toc_head; do { toc_head = toc_tree.shift() }
      while(!re.test(toc_head.innerText));
    tocTree.config.setSubtree = function(e) { e.classList.add('toc-subtree'); };
    tocTree.config.setItem = function(e) { if(e.classList) e.classList.add('toc-entry'); };
    helem('toc').appendChild(tocTree.render(toc_tree));
    helem('toc-summary').innerText = '¶ '+toc_head.innerText.match(re)[1];
  }
  waits(helem('plug-tree'), drawToc);
</script>

## 正文

### *楔子*

抓周的仪式，一般在吃中午那顿『长寿面』前进行，讲究一些的人家，都在炕前陈设大案，上摆
印章、儒、释、道三教的经书，笔、墨、纸、砚、算盘、钱币、帐册、首饰、花朵、胭脂、吃食、玩具，如是女孩抓周，还要加摆铲子、勺子、剪子、尺子、绣线等等。

一般人家，限于经济条件，多予简化，仅用一铜茶盘，内放私塾启蒙课本《三字经》或《千字文》一本，毛笔一枝、算盘一个、烧饼油果一套。女孩加摆铲子、剪子、尺子各一把。

由大人将小孩抱来，令其端坐，不予任何诱导，任其挑选，视其先抓何物，后抓何物。以此来测卜其志趣、前途和将要从事的职业。

如果小孩先抓了印章，则谓长大以后，必乘天恩祖德，官运亨通

如果先抓了文具，则谓长大以后好学，必有一笔锦绣文章，终能三元及第

如是小孩先抓算盘，则谓，将来长大善于理财，必成陶朱事业。

如是女孩先抓剪、尺之类的缝纫用具或铲子、勺子之类的炊事用具，则谓长大善于料理家务。

反之，小孩先抓了吃食、玩具，也不能当场就斥之为『好吃』、『贪玩』，也要被说成『孩子长大之后，必有口道福儿，善于「及时行乐」』。

总之，抓周的本意就是长辈们对小孩的前途寄予厚望，在一周岁之际，对小孩祝愿一番而已。

### 第一章 抓周

### 第二章 历史课

### 第三章 语文课

### 第四章 羊群

### 第五章 devIl

### 第六章 老师的善意

### 第七章 复主任

### 第八章 高考、毕业

### 第九章 进入大专

### 第十章 『语树』和墨教授

### 第十一章 『鿕』的诞生

### 第十二章 毕业²

#### 同学聚会

### 第十三章 『星野』开始设计

### 第十四章 同学聚会

### 第十五章 『星野』的第一版

#### 『风口』

#### 十年松木

### 第十五章 繁星之野

### 第十六章 春天的

### 第十七章 专利与平静

## 后记

本书的内容无聊透顶，本书的作者，我们这里暂且称之为『动苏』吧（原名是英文，有点拗口……），他的爱好却不是写小说，而是写代码。

一滴不在大海里的水，从不会停止缓慢但坚决的游荡

一块切错了形状的木料，无论如何也砌不牢仙宫的栋梁

一个放错了地方的人才，怎么看也自然百无一用（当然你得先是个人才）

> 是马也，虽有千里之能，食不饱，力不足，才美不外见，且欲与常马等不可得，安求其能千里也？

这位动苏家境也不过中产工薪阶层，虽是『*读书*』无用主义者但爱看 CS（计算机科学） 书、虽然逃课厌学但是很爱写烂代码。
日常从来不缺后面死缠烂打的活魏征和再世雷锋、亲爷爷的劝学书信几乎能把整个台式机盖住、讽刺不信任的话可以成为封杀乔碧萝的最后一条评论，
家中有人以各种理由要求不缺课，也不得不完成高中的学业，至于其他的个人情况，不方便透露。

然而即便有这么多人不计耗时的这么多次劝谏，动苏也死性不改地在学校里字面意义上地『*混*』日子！
这是因为有一天，我要写出类似这样一本小说，来 *回绝* 你们的善意：**谢谢你**

**但是，这是我的人生，即便听了你的良言而达到预期，也不能指望我有所感激**

**即便你的劝诫毁了我，毁了的也只是我，与你不会有太大的关系**

我知道你们是为何劝我，可是既然特意发在 QQ 上的文章啊都没人看，我只得改写小说了…… 或许能够写出不一样的效果吧。

或者说即便浪费时间，那也是在相对愉悦的环境里浪费的，我在学校里很喜欢看小说，因为只有两三本有意思的原因，那点书翻了一遍又一遍。

很感谢你们的教导，你们的好心我很有体会。

不过，即便很多事情心比行重，行善的能力却要比行善的心更为重要。

既然是要做『对他好』的事情，必然要先确保这对他的确是好的，不然，好心就一定能够得到好报吗？

毕竟我还是有些区别的，希望你们能够先注意一下我的这些文字再来考虑……

说到底，祸福不与共，听起来是很无情，实际上也的确无情。

可在我心里，亲戚就是这样的存在， **对不起** ，我甚至连你们的名字都不会记住（我基本只能认脸），也没人『系统』的教过我推算七大姑八大姨的关系图，
因为我对姓名、数字的记忆已经差到了自己的生日都不太清楚、爸爸的电话号码都要想一想才能记起的程度了，
事实上哪怕只是和人名相关的东西我都很难有印象。我，是天生没有能力处理人际关系。

可能是注定记不住太多事情，所以可能才要把那一点剩下的可能性，留给自己唯一的爱好吧。

我本来不具有太多的感情，很感谢你们百忙之中能有心，可我就是这么不领情，相信看完这篇小说，个中缘由你们也已经洞悉。

每个人都有自己的人生，我有父母，也有亲戚，可是即便我会继承父母的基因、继承父母的衣钵，我不能继承他们的记忆、不能继承他们的志向，更不可能继承他们的生命历程

如果真的能了的话，恐怕世界上也就不再有所说的『林肯』、『毛泽东』、『比尔·盖茨』、『拿破仑』、『阿姆斯特朗』了吧。

要知道，林肯的父亲只是微不足道的农民，甚至还做过鞋匠

毛泽东的父亲毛贻昌只是个农民，给不了毛泽东打胜仗的能力和治国的魄力

比尔·盖茨的父母很普通，最开始创业时也免不了要借钱

拿破仑的父亲不过是个律师

尼尔·奥尔登·阿姆斯特朗只是出于美国的公务员家庭

**既然『坏的』都不能继承，为什么『好的』就能继承了呢？** 逻辑还真是有点奇怪啊。


或许有些人是『*成功*』的，成功是什么？有钱、有权、出名，俗世的定义也不过这三种，但成功，为什么不可能只是 **做自己**？

如果你找不到自己，或许会把别人的掌声、鼓励、点赞，社会的目光、正面报道、上层的接纳甚至嫉妒当成成功，**但如果找到了呢？**

> 吾十有五而志于学，三十而立，四十而不惑，五十而知天命，六十而耳顺，七十而从心所欲，不逾矩。 —— 孔子 · 《为政》

被尊为古代圣贤的孔子，恐怕是当今成功学最『无志』的人生观了吧，你看他 —— 三十才自立、五十岁就大谈『天命』不干人事了！和某些十七岁风口浪尖，迎取高富帅白富美、走上人生颠峰的才子总管一比，是否缺了点为师的底气呢？

成功不一定是抛大的、干大的、赚大的。找到自己，健康快乐地生活、做好属于自己的每一件事，『傻气』亦是成功、『佛系』亦是成功。

不过…… 本书…… 无聊透顶？其实对所有无聊的人来说，不会有比自己更无聊的东西吧，这本书的『书语』只有一句：**追求自己的热爱、保持自己的本心，不要被外物所迷惑，也不要因为看不到希望、不被人理解而放弃**

还没太看的人可能会想，这本书是否『妖魔化』了做父母的人了呢？

其实也没有。陆凌风的父母，对陆凌风不存在坏的想法。只不过是好心不一定能达到好的效果，有的时候『不知道』『太果断』也会让好心办成坏事而已。

即便是作为已经『堕落』到了在曾经相信自己的人面前，都会被他们失望地叹口气的人，也依然还没有忘记自己的目的，这样的动苏，应该被鼓励吧？

没错，我不能记住过去的『关系』、不能做好数学题、不能在保证一秒内能够背出乘法口诀的任意一项、不能在合理的时间内以合理的准确率完成加减乘除……

但生而为 **人**，为什么我一定要处理好『人际关系』、保证自己的高中数学能考及格？并且，难道因为我差、『低分低能』，我就一点可取之处也没有了吗？

> 上古时有一种体型极小的飞鸟，浑身灰白，是鸟类中最不起眼的一种，还经常被其他同类嘲笑。<br>
可是，它从不将这些嘲笑放在心里，因为它知道自己有天下最美的嗓子，并深深为自己自豪。<br>
当天地遭逢大劫，阳光被黑色毒雾遮蔽，所有的鸟兽都惊恐得躲起来时。只有这只小鸟，执著地站在离天空最近的一根树枝上，对着东方不断鸣唱。
它天下无双的歌声，驱散了毒雾，让阳光重现大地。<br>
可是，当第一缕阳光照到它身上时，它的生命已经因为不断的鸣唱而耗尽。一颗眼泪从树身上落下，笼住了它从树枝上坠下的尸体，将它永远包裹在一颗泪状的琥珀石里。这颗沉睡着世上最自豪的心的石头，被后人称作枝上雀。 __—— 《浮生物语3·上》 [第二章 千机.13](https://www.99lib.net/book/7690/265625.htm)__

~~其实，本文有很多部分部分学习了《浮生》系列的风格，在此向浮生物语的更新家致敬！不过，毕竟笔触上的偶尔雷同，并不牵涉著作权问题。~~

即便再『傻』的孩子，也有拿得出手的事情，也有自己的天命。

> 每个人都有自己存在的价值，而这个价值，并不因你是坐拥天下的皇帝还是大字不识的小贩而有任何差别，也不会因为你不能在 5 秒内解出 `y=(x+1)(x-a); ∀x. y(x) mod 2 = 0, a=?` 而存半分损伤。

上帝关上你的『门』的时候，总会为你打开一扇窗。

记得网络上曾流传的一句话：『*愿你走出半生，归来仍是少年。*』

既然已经过去数十个年头，人的样貌、阅历、能力怎么可能毫无变化呢？
人间不是天界，活人也不是神仙，人的容颜自会老去、也有天生不可磨灭的欲望。

可是，如果说一个人的心性能够数十载不生变化，不忘记曾经的风雨、不失其本来的灵动，又存不存在这种可能呢？


动苏一直习惯在国外某即时通讯平台随便发点笔记、讨论什么的…… 什么时候突然想起来要写小说了？嗯…… 故事要从一个月前说起……

好吧，时间不等人，鉴于写作的时间实在不多，长话短说了：

**这个动苏的（亲）爷爷某党员干部书记一个月前来家探亲，然后和他的儿子一起对他儿子的儿子加强『学习』上的管束，而且很成功的逼着我在一周唯一的半天假里，还不得不趴在电脑屏幕前 20 小时+，而且还啥都做不完**

这篇文章里的 **所有** 故事情节 **纯属捏造**，不少看起来很有道理的片段其实并没有事实依据和实现的可能。请看到文章的小朋友 ~~不要激动~~，安全就是生命 0w0！

**不过，尽管故事里的陆凌风生在一个对他来说很杯具的家庭里，稍有常识的读者显然可以发现身为作者的我其实对生活的改变是蛮赋予期待的呢！相信以后，总会变得更好吧。**

### 只是为了「好玩」

IT 界一个比较知名也比较有个人魅力的工程师，[Linus Torvalds](https://coolshell.cn/articles/1278.html) 说，他说他编程是 "Just for fun." <a nsfw>(and not for homework) :P</a>

他是 [Linux](https://kernel.org) 的创造者和现如今的主要开发者之一，所谓内核(os kernel) 者，操作系统必备组件，是和计算机最底层、最隐秘的电子实现相关度第二高的软件组成成分了，负责管理信息、管理硬件和外设、分配处理资源、提供基本的并行计算辅助操作、提供由对应协议解释的网络访问、保护程序运行和数据安全。它几乎是从被处理器执行的第一条指令开始，肩负起最大的责任，也是所有用户『程序』运行时视角的最后一瞥。

所有的程序都是存在其设计质量需求的。作为操作系统的内核，它的性能开销、它的稳定性、设计安全性
就是对用户嘱托和重要数据的保险，它的扩展性和代码质量就是未来其上应用、函数库作者编程时可有可无的一抹微笑。

不用说，世界是不会容忍任何一个充满问题和瑕疵的内核的。不少在内核级别工作的程序都曾经在历史上留下过自己的名字，又消失在市场上、消失在研究者的数据里，原因不过是对应的机器没落了、对应的用户离开了、最后的开发者也失望了。可是在不为利益工作的世界里，Linux 一直火到了现在。

Linux Kernel，毫不夸张的说是从网络时代到现今世界上使用之处最为广泛的 os kernel 了，它和它衍生版本的兼容就是各种类型 MCU 以上硬件的基本要求、它所服务的应用程序、处理任务，大到服务集群、数据中心、超算，小到智能手机、冰箱、机顶盒、摄像机，即便是当今算力亚洲第一的[神威·太湖之光](http://nsccwx.cn/swsource/5d2fe23624364f0351459262)，也是倚仗下面一只一只『可爱』热情又好客的小企鹅，搭建而来。

应用程序的质量参差不齐，操作系统内核却是铁打的硬要求。
马虎不得、随便不得，更不能存在半分没弄懂、[瞎改写](https://coolshell.cn/articles/4576.html)的代码，一次轻微的错误，便是声誉扫地<a nsfw>（或许你认为他们非常重视声誉，但我觉得他们对代码质量本身更为重视）</a>与永远的失信。

所以 Linux 就这样在保证了核心质量的同时滚动更新下来，很难想像一大群不是为了金钱利益的人，甘愿拿自己本来可以『刷微信、聊微博、刷抖音、看头条、逛B站、划水摸鱼』的时间，贡献了占相当多份量的内核代码。

Linux 成功了。也许这是因为它的开放和应景、也许这是因为它的目标 UNIX 本身早就很受欢迎，可是，如果没有当年的 Linus，那么『废青』地不顾炫耀他老师就是大名鼎鼎的 Minix 开发者，也懒得把自己运行 Minix 的机器『拍照发朋友圈』，
反而还去弄出个 Linux 来『反对』『抗衡』他老师闭源的 Minix，然后居然不拿去发动商业头脑大卖，却万恶地公开了源代码，让所有人都能参与进来加入修改和移植？？？

天哪，要是他申请了专利，这该有多少钱啊！他对得起他的努力奋斗吗？

一般『做慈善』的人和组织，不过是眼盯着慈善家的头衔罢了，一个出钱、一个筑名，彼此心照不宣。

做开源软件似乎也该这样，自己出力，但不是白出；预期着得到了名声，能给自己赢得更多利润。

可是他，甚至连『自由软件教会』FSF 的会议也没参加太多，好像根本不在乎自己已经出了多大的风头，他只是一个一个电子邮件地回、继续每天站在他的跑步机上敲代码。

只是因为那一句 **"Just for fun"**，我想有些人会说他傻！为什么不在许可证上下点功夫，成为大名鼎鼎的 Bill Gates 的竞争者？

不过。我也就想这么当一个傻子，不是因为我不想『成功』，只是对我来说，钱、权、别人羡慕的眼光，
**你们哪有我眼前的一条条子程序、一个个抽象重要？**

一辈子能留给自己喜欢事情的时间不多，如果决定了，就不要反悔。

此间乐，不思蜀。<a nsfw>其实刘禅当年也是说这话不是发自内心，但是我这里用的意思完全不一样。蜀，为什么不能理解为『所有人都走的老路』呢？</a>


我不知道这和少儿编程、速成培训班、民营专科、少年班、「量子波动速读」、对『挣钱快』专业的选择的初衷有什么出入。或许它们也是殊途同归吧，不过，至少在中国的前沿，总该有点变化吧。

或许『快』的东西才是最浪费时间的，学的时候你节约的那几天的时间，会在未来的几十年里，以长百倍、痛苦百倍的经历，一分不差地归还回来。

很少有人心存机缘能接受真正的快，但它却是最轻松、最能持续的一种速度，可以继续到不惑之年，而不是少白头乃至英年早逝。

不常苦，何有甘？未知寒，焉知暖？


是的，单单爱不能拿来发电、只有爱不能填饱肚子、爱也不能堵住三姑六婆暗中鄙夷的目光，只是心中未曾给 *事业* 两个字留出空缺的人啊，
何尝能体会到这『爱』字的重量？又如何能得到这个 "fun" 背后真正的乐趣？

今天看到张三买车置地，忍不住捶胸顿足或者应景买弄一番、明天为请吃友人的饭未曾回请翘首企盼，一整天沉着于无聊之事，无法自拔。

生活琐事越来越多、『刷』过去『混』过去的时间越来越多、别人灌输给你的思想越来越多、别人的『你不行！、你一定输！、你比不过！、只有那样才行！、你不可能做到！、没人会看得起你！』在耳朵里的回响越来越激烈，便离问题的关键点越远、离自己的天命越远。

**心存旁骛、朝四暮三，抓住的太多，得到的反而越来越少，连自己要什么都不知道，凭什么找到真正充实的生活？**

每个细节离完美差一点、每个问题和平均大差不差、每个人离自己的天命差几个念头，可一个国家最终差下来的，又岂止天上地下。

这里不在几百年前的紫禁城之内，为什么不活的 **坦然一点、快乐一点、真实一点？**

改革开放这么多年了，或许做幸福的人所需要的，也不过只是一份像陆凌风一样，找回那份自己 **最在乎的事情** 的觉悟吧。

### 你是做什么的？

动苏是一个计算机科学爱好者，以写代码为乐、也因想不太清的抽象而头疼，他写过很多类型的程序。

他于 2017 年开始编程，第一门实际上的『语言』是 Java 7、第一行代码是 Bash Shell 的顺序判断文字游戏。

动苏很爱玩电脑，甚至以前经常为了一段段自己弄不懂的程序盲目地熬夜到凌晨（现在不会了）。

不过动苏也是有一定的恒心的，因为他也曾经坚持锻炼身体超过两个月，不过最后还是因为连续坐屏幕前熬夜一个星期白费了自己的好心。

#### 在我编程的近三年时光中，除了大部分时间待在学校发呆我又做了什么

+ 我写过自己的解释器和代码生成器

比如 geekapk 基于 PEG.js 的 GeekSpec、FP.js 纯手写的 DefLang、只写了 lexer 的 Lite、能用的 KtLime、BinOps、只是 lexer 的 telegramscanner

实际上我从入门起，就已经很重视 "No boilerplates" 了，即便我的 hostsgen.rb 代码质量不好，它依然是一个『重视简洁』的模板生成工具

当然我也完全有能力写出包括函数定义、中缀定义、局部时序作用域、Closure 和自动类型转换在内的解释器，而且其中每一个问题我都有自己的面向对象解决方案

+ 我曾经维护过自己的博客，虽然只有两篇博文（现在的『博客』算是我的 Telegram 和 Share 项目的 Pages）
+ 我手动逆向工程过被编译成 x86 机器代码的程序（WowCoolApk），并且还原回了等价的高级语言代码，写成了 Ruby, Scala, Python（因为一个大佬已经写出我就没再写）的形式
+ 我实现过『猴语言』（类 Brainfuck）的虚拟机（虽然有 bug）
+ 我写过其他应用程序的插件，比如 VisualGimp.py
+ 我曾经写过一些工具类的 Android 应用，也写过一个 Qt 和一个 C# 的 GUI 应用，也写过一些 Web 应用（GeekApk, Timeliner），虽然代码质量很差本身也辣鸡
+ 我尝试过 SIMD 并行处理的 C 语言 DIP 程序（Essay-DIP-BMP-SIMD-Operation）
+ 我写过基于 DOM/JS/CSS 的东西，比如 CoolApkFeedPreview、FoxAuth 的老模板、alldreamwall
+ 我很乐于尝试新东西，比如 Kotlin Native（Essay-Kotlin-Secure-Desktop） 和手写的 Java "Coroutine Generator"
+ 我写过给别人编程时方便用的库，比如 Dokuss 二进制读写库、FP.java、Montage.py 里的可复用函数式编程辅助
+ 我写过 DIP(Digital Image Processing) 的代码，包括我 Gist 里的 AsciiArt.kt 和 Montage.py
+ 我在 GitHub 的 Share 项目里写了一些算法的代码，它们包括狄克斯特拉算法、权重随机生成（pr.py）、RingBuffer
+ 我知道了世界上还有许多比我强很多的人，比如 ice1k 大佬和 Sleepwalking 大神
+ 我知道了 **凡事彻底理解，直到存有创新的能力最为重要**、做 **有效** 的努力比 **看起来** 很努力更为重要

当然不要和我比写算法的能力，因为我的算法水平其实不高…… 和数学不好也是同一种原因

不过相信有一天，我能够把脑子里的图形和实际编程的『线性』代码，结合起来，这样才能实现能力的突破。

### 动苏不是个聪明人，尽管他真心希望自己是天才

我不聪明，但我有我自己的，无法仅仅用『聪明不聪明』**这一条** 来评判的方法。

我真正拿得出手的，是 **简化** 一切逻辑、结构、时序的能力和设计工具的能力，当然这一切之中也包括算法。

因为再难理解的算法（虽然对我来说，给选择题 shuffle ABCD 四个选项的算法我都会想半天），照映到底层都是由存储、计算、顺序、分支、循环结构组成的，一切皆能可视化。而我的能力 就是提高代码的抽象层次。

不断使得代码变简单的思想，哪怕是在实际上优秀的程序员的脑子里，往往也都很少出现。

可是对我来说，简化已经融入了我最基本的意识，成为了我的直觉。

哪个 *聪明人* 会把一些本来 **已经写好的东西推倒重写四次**，而且每一次都 **完全** 不参考之前写出来的东西？这太 *蠢* 太低效了，可对我这种『蠢』人，这就是最好的方法。

只要我不能完全理解、不能把一段程序写出 **7 个不同的版本**、不能站在 **第二个视角** 看它解决问题的方法，我会 **不断** 重写下去，每一遍都完全从记忆里汲取素材，不依赖任何其他的数据。

可是那些并不太究根究底聪明人啊，怎么会知道还有一门和 Java 基本同年诞生程序设计语言叫 Haskell，它没有传统的存储、顺序循环控制结构，只有值、计算、分支、子程序递归，可还不是一样写出了许多程序员这辈子都想象不出的程序？


即便动苏试过很多东西，但他最想作为未来职业主力的，还是编译原理(ce, Compiler Engineering)和程序设计语言理论(plt, Programming Language Theory)，
只是因为看得顺眼，而且在一定程度上可以融合所学知识。

编译原理是做什么？程序员，包括设计编译器的程序员，在编程的时候是没有一刻能够离开编译器的。所谓编译器，就是把一种语言映射到另一种语言的翻译器。

> 如果翻译器对程序进行了彻底的分析和变换，且其生成的程序与原程序之间没有太大的相似性，我们就认为它是编译的。<br>
**彻底的分析和非平凡的变换，是编译过程的标志性特征。**

无论是简单的数据处理、数据分析，还是数据结构算法、机器学习、神经网络、信号处理、图像处理、实时和高性能计算、分布式计算、计算机网络、数据库、计算机图形学，还是故事中陆凌风喜爱的自然语言处理，甚至嵌入式、电子器件编程，都离不开那一个个基本的逻辑组合、一个个思维模型的建立。

而编译原理和程序设计语言理论，所做的就是化理想为现实、赋灵魂以实体，以两者都尽可能高的效率，把程序员的思想 *转达* 给最终执行程序的计算机。

从某种意义上来讲，编译原理与所有其他别人『看不见』的东西一样，为计算机的实际应用，做出了不可小觑的贡献。

它的职责注定了它的默默无闻，可它的质量要求，却比一些看起来显眼的应用，高得多。

作为编译器工程师，也不过就是编译器工程师而已，何须以那些华而不实的头衔、亮丽而空洞的辞藻来填充实干的空白。

优秀的软件设计者，他们的代码和曾经组织过的项目、他们生活中仿佛映射着编程思想的一言一行，都是昭示着自己能力和价值所在的，真正的标杆。

**我们编译原理爱好者，用的是不能再朴实无华的、二十年前都有的编程技巧，写出来的却是如今各种技巧名词泛滥的框架们，也无法等闲视之的程序。**

手里用的是简单平凡的编程方法，心中洞察着的却是计算的灵魂和内涵。

其实简单一点又何尝不可？大道至简，或许简单，正是繁长冗杂的最终形式，是程序经过反复洗濯<a nsfw>〖读『茁』（zhuo2）〗</a>才脱胎出的，最宝贵最干净的灵魂。

### 为啥要写这玩意

回忆着今年又来劝我的亲戚们的话，我觉得不能再随便糊弄下去了。<a nsfw>我太难了！</a>

离高考越来越近，曾经是千军万马过独木桥，当然如今轻多了，可对我来说依然是一条死路。
不为别的，只为我把每件事『要么做到最好，要么完全不做』的心。

名不正则言不顺，尽管我还有不少想实现的东西没时间去完成，我只得抽出这一两天的时间，写一篇小说来表达志向了。

古人写诗写歌来交友、咏志，我们要求全篇背、背了忘。当然这篇文章是不需要 *背诵* 的。（背了又有什么用？何况你们会喷我写的不如古人文绉绉没有背诵价值，逍遥游！<a nsfw>蜀道难！啊！</a>）

写作本来应该是人人都会，如今 **为自己的内心** 而写作表明己志<a nsfw>（词怪怪的）</a>的人越来越少，但交友也已经革新，只怕真正有『志向』的人，是越来越少了。

自己是否也曾经有过像陆凌风一样的青春呢？又为什么最终没能和他一样呢？

我想，这是值得每个『干着自己不想干事情』『不觉得自己在用心地做什么事情』『觉得生活很平淡很无聊』的人应该思考的问题。


电话和座谈会能输出的信息，太少。那些只盯着一条杆子不放的『教育家』啊，怎么会知道我这个『厌学者』『读书无用论者』，自小最爱的，还是书呢？

我的确从小衣食无忧，这也是我能写出这篇文章的原因，可世界上就是没有绝对的公平，也不应该有完全相同的两个人。

身体素质都存在不小的差异，何况思维方式呢？所谓『智商』，从来不是一个一维的标量。

人们的各项『智商』水平之和，大差不差，可是谁究竟适合哪方面的工作，靠一个简简单单的『IQ』 岂能说明问题。

比起对着本不属于自己的方向『努力到无能为力、拼搏到感动自己』，不如故事里从小就发觉自己天命的一群羊，顺其自然、水到渠成。

发明微积分的牛顿小时候也曾被骂作『傻子』，可傻子与天才之间，会是仅仅差那么一点计算能力？

成功和失败之间，数十乃至上百分的差距，就能够直接划出一道全白的分界线？<a nsfw>不是不可以，至少我们还有机器学习不是？（笑）不过学的是垃圾、预测的也是垃圾。</a>

从拿取，到创造。有的时候需要的只是一个念头，对有的人来说，却是终身也不会有。

去拼搏，可是仅仅为拼而拼的拼搏，它的意义何在？


没有要求，就能够得到尊重与善待？没有要求，便可以得到幸福？

热爱，可以给你一切理由。

我想以 **[台] 林文义** 的 [《木刻猴子》](https://www.douban.com/group/topic/73199348/) 结束全篇

#### 《木刻猴子》

    猴子有三只，排排坐得很乖巧的模样。三只猴子却做出三种截然不同的表情 —— 一只双手掩着耳朵，一只双手遮着眼睛，另一只则显得十分心虚地捂住自己的嘴巴。

    用黄杨木雕刻而成的猴子，十分传神。祖父似乎很钟爱它，常常看见他独自坐在晚霞夕照的院子里，无限怜爱地抚摩着它，他的嘴唇一开一合，不知自言自语地在说些什么。
    那个年代，我还很幼稚，不知道祖父在想什么，只是觉得那三只木刻猴子的表情十分有趣，很想拿来玩。

    “这个不行！”母亲厉声地对我说，并且试图阻止我。

    “没有关系，囝仔爱，就给伊玩嘛。”祖父和蔼地说。

    “阿爸，你就是这样宠囝仔，宠得他五六岁就想要爬壁。”母亲对祖父抱怨着，一面很不放心地看我接过祖父手中的木刻猴子 —— 看一下就好，看完赶紧还给阿公。

    我把木刻猴子放在膝头上，翻来翻去地审视。没什么意思嘛，就是一块木头，刻成三只猴子。表情很逗人，可是没有发条，不像机械、铁皮做成的猴子，只要旋紧发条，它就叮叮咚咚地打鼓敲钹，没什么好玩嘛！
    我翘着小嘴巴，把木刻猴子还给祖父。祖父笑呵呵地说：“你的翘嘴唇可以吊三斤猪肉。”

    有一次，祖父把我抱到跟前，指着木刻猴子对我说：“阿公跟你说，这三只猴，是你阿祖给阿公的，是从唐山带过来的。这三只猴就是跟我们说，非礼勿说、非礼勿看、非礼勿听……
    唉，你还小，不会懂，就是常常听人讲的‘囝仔人有耳无嘴’啦，有耳无嘴，平安食百工。”

    那时，我六岁，祖父的话，我听不大懂，但“有耳无嘴”这句话，却一直深印在我的心里，年长之后，我才慢慢懂得。

    隔了一年，祖父死于肺病 —— 许多采矿人的最后归宿。

    沉默寡言的父亲把木刻猴子摆在神案右侧，不知道是纪念逝去的祖父，还是要提醒些什么。

    木刻猴子一直都摆在神案上，渐渐地，也没有人会去注意它，好像那些神像、香炉、烛台一般，木刻猴子似乎也成了神案的一部分。
    有时候，它会蒙上一层尘埃，好久好久，家人才会拿块抹布，连同神案，擦拭一次。反正这个黄杨木雕刻成的猴子，大家也不太在意它的存在。

    一直到我念高中的时候，不知道为了什么事，我和母亲发生了争执，我的嘴快，说了一大堆气话。母亲泪眼汪汪的，侧过头去，看见神案上那个木刻猴子，悲愤地说：
    “看到你阿公留下来的木猴没？你爸爸把它放在神桌上是要你们警惕，不要乱讲话，你阿公以前常常讲‘囝仔人有耳无嘴’，你难道忘记了？”

    时间逝水般流过。有一次，父亲静静地和我说话，我从来不曾看过像那般谦和、诚恳的父亲。他似乎内心有某些隐痛，却又尽力掩盖。他说：
    “这个时代，谨言慎行是很重要的，不要放言高论，不要妄加评断，平平安安过一世就可以了。人生嘛，好像一出戏。”

    说着，他从神案上把那三只木刻猴子拿下来，充满深意地说：“你看看这三只猴，不听、不看、不说，这是有道理的，东方人的处世哲学，独善其身啊……”父亲叹了口气。

    我不太同意父亲的看法，我说：“像这三只木刻猴子，不听、不看、不说，这样一个人，其生命的本质及意义是什么呢？独善其身，这是多消极的借口啊！”

    父亲苦笑，淡淡地说：“唉，以后你慢慢会晓得的。”

    又是几年匆匆地过去，在不断的历练中，我慢慢理解父亲的看法了，相对的，我痛苦地发现，自己虽不甘愿，却也逐渐地向世俗妥协。就这样，我时时处在自我的相互撕裂里。

    父亲离世前，有一次，紧紧抓住我的手，战栗而悲愁地对我说：“我即将要走了，我最不放心的，就是你这个孩子，怎么会选择去写文章？”

    听到父亲这么沉痛的话，我无言以对。为什么会选择文学这条艰辛的路？也许，只是为了要保持一点点纯然而真挚的自我吧。可是，我不知道要如何对父亲说，我想到他们那个黯淡的年代，沉默成为他们一生的座右铭。

    父亲离开以后，木刻猴子交到我的手里。

    我把木刻猴子放在烧金纸的炉子里。我有点不舍，这个从曾祖父传给祖父，最后由祖父传给父亲，再由父亲交到我手上的木刻猴子，我是不是要再交给我的后代，是不是还要告诉他们“囝仔人有耳无嘴”？要他们继续秉持木刻猴子的精神，不听、不看、不说？要他们独善其身？

    我觉得我不能这样，我要他们活得更坦然，更磊落，更像他们自己，不被扭曲，也不去扭曲别人。点起一把火，我决定把这个木刻猴子烧成灰烬。

<template articleEnd></template>

### 推荐阅读

+ [刘慈欣 《圆圆的肥皂泡》](https://www.baidu.com/s?ie=utf-8&wd=刘慈欣《圆圆的肥皂泡》)
+ [《包宝宝》](https://www.baidu.com/s?ie=utf-8&wd=%E3%80%8A%E5%8C%85%E5%AE%9D%E5%AE%9D%E3%80%8B)
+ [《杨永信，一个恶魔还在逍遥法外》](https://www.zhihu.com/question/49476928)
+ [“量子速读”](https://www.baidu.com/s?ie=utf-8&wd=%E9%87%8F%E5%AD%90%E9%80%9F%E8%AF%BB)
+ 老舍《家》
+ 路遥《平凡的世界》

### 人物

翻到页面最顶上，按下「显示 NSFW」按钮，可以看到额外的注释。

#### 主要人物

+ 陆凌风，**主角**，临沂市第三中学的高三学生，生在一个中产家庭、入初中时学习成绩一般，自从初三毕业后由于作业不及时、数学学科直觉太弱而开始走下坡路，高三时开始花部分时间学习总结自然语言处理技术。陆凌风在大专毕业以后，逐渐实现了最初的梦想 —— 开发一个『聪明一点』的语言交流机器人。
+ 赵慕城，陆凌风的同学，典型的偏科『瘸腿』，学习成绩稳居倒数，大学都无望。和陆凌风一样，赵慕城也非常热爱计算机，不过是喜欢设计 GUI 应用程序，早有两年的『历史』和几百用户粉丝。可是被急于求成的父母要求『考不上大学，立刻打工』，不敢和凌风一样学习不能急用的东西。
+ 林婉秋，陆凌风的同学，成绩中上，喜爱物理学科。偶尔会加入旁人的话题，不是经常和陆凌风交流<a nsfw>互相暗念的一对？（w</a>

#### 次要人物 A

+ 李世杰，陆凌风的同学，即便是班上的真·学霸，也和学炸陆凌风做了不咸不淡的朋友，经常对陆凌风嘴上不饶人
+ 陆爷爷，陆凌风的爷爷，故事里已经 70 岁高龄，农村老共产党员，希望陆凌风『争气』，不给家族丢面子
+ 陆爸爸，陆凌风的爸爸，平面设计师，早年因为学历不够被拒绝过多次，后来通过自己的努力终于得到赏识并与陆妈妈结婚，希望儿子考上大学，少受自己当年吃过的苦
+ 陆妈妈，陆凌风的妈妈，比较成功的销售管理人员，和陆爸爸青梅竹马，毕业自同一所大专，对陆凌风的要求不高，只愿陆凌风健康快乐
+ 陆谐羽，陆凌风与<a nsfw>林婉秋</a>的 ~~儿子~~ （是真的……），故事结束时也仅有十岁，喜欢读书、写习作、打排球，性格温和，继承了父亲对计算机的热爱但不太喜欢久坐台前，总是以大头的时间「打腹稿」，拥有全班最好的记忆力和初露端倪的抽象能力，同时也是个大胆的探索者。 <a nsfw>陆谐羽，本来是我为 GeekApk 的一门脚本语言选择的代表形象，虽然人物外貌还不是很确定……<br>至于为什么陆凌风后来都有儿子了，也是因为我不能在这个故事里把谐羽写成 <s>中年大叔</s>…… 换句话说我给谐羽找了个爸爸。<br>另一方面，我也可以借着这个故事顺道给他一个好爸爸来做铺垫，有其父必有其子，毕竟我当初想的谐羽被<s>吹</s>成天才少年的…… （何况在我看来，GeekApk 的脚本语言 InScript 和 Java 比可以算得上是『天才』了，如果不看类型系统上不如 Java 的话……）</a>

#### 次要人物 B

+ 马老师，三中 (1) 班的班主任，数学老师，关心学生，经常为班上的差生头痛不已
+ 复主任，三中高三年级的年级主任，任职保守但却敢包容部分学生的激进思想
+ 墨教授，临沂市职业技术学院程序设计系的教授，照本宣科，平时不爱找本系的资料看，但对主动出现在眼前的新东西有一定兴趣，视角却也有一定局限性
+ devIl，陆凌风在网上认识的一位同道网友，是五年经验五百强的在职软件工程师，可手段猥琐、对技术的看法和陆凌风背道而驰

## <a id="CC-BY-4.0">许可证</a> | CC-BY 4.0

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img class="neko-helper-center" alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">小说《抓周》</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://duangsuse-valid-projects.github.io/Share/zhuazhou" property="cc:attributionName" rel="cc:attributionURL">duangsuse</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">知识共享 署名 4.0 国际 许可协议</a>进行许可。

### 你可以做的事情

+ 共享 — 在任何媒介以任何形式复制、发行本作品
+ 演绎 — 修改、转换或以本作品为基础进行创作。
在任何用途下，甚至商业目的。

### 但是，当这么做的时候，你必须……

+ 署名 — 您必须给出适当的署名，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。您可以用任何合理的方式来署名，但是不得以任何方式暗示许可人为您或您的使用背书。

## 技术细节：本文使用的 JavaScript 插件

+ [waits](waits.js): 辅助函数库，提供 DOM 高层抽象
+ [toc_tree](toc_tree.js): 解析和渲染文章的 markdown 目录
+ [article_split](article_split.js): 利用 `<template articleBegin></template>...<template articleEnd></template>` 解决 Markdown 长文 `<article>` 标签内联 HTML5 支持问题的自动 DOM Tree 切分插件，需要在 TOC 解析后运行
+ [nsfw_switcher](nsfw_switcher.js): 吐槽切换按钮控件
+ [night](night.js): 夜间模式与字体切换控件

以上插件均为 duangsuse 从基本 DOM+ES5 扩展而来

<script src="article_split.js"></script>
<script>
waits(document.body, function(){articleSplit.execute(document.body)});
</script>

<script src="nsfw_switcher.js"></script>
<style>*[nsfw=""] { color: limegreen !important; }</style>
<script src="night.js"></script>
<link rel="stylesheet" href="night.css" />
<script>
enableOn('btn-nsfw', NsfwButton);
NsfwButton.hideNsfw();

enableOn('btn-night', NightButton);
</script>