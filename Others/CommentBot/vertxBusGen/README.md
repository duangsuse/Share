# 实现 Vert.x codegen -- 模板语言

原作者 iseki 实现了这个 vert.x 模板代码生成，但其 `Codegen` 类的代码质量实在不佳（顺序、量定义和缩进较混乱）

我在检查后发现直接内嵌 `""" $a """` 导致此问题，但解决缩进问题没有更好的方法，量定义在同一函数导致顺序混乱也是无奈的。

为了提升模板生成本身的代码质量及复用性，我们（我和读者你，是吧）决定创建一个模板语言解释器来完成填充的工作。

在科普解释器实现的一些细节前，我们必须思考一个问题——这个生成器需要遍历反射数据，然后在三个位置——`file`, `class:server`, `class:client` 插入代码，有没有办法仅用一个 `StringBuilder` 遍历一次，仅 `append` 不 `insert` 就做到？如何让模板语言尽可能高效地实现这个逻辑？

不幸地，答案是——要么然在两个位置遍历两遍，要么然有两个 `StringBuilder`，必须有缓冲区保留临时结果。

既然这样，结合可复用性我们的选择是后者，从而允许模板语言把部分结果保留到特定的位置，提升其适用性。

下面的一些名词可能不甚准确，为初学者优化，知道的大佬请海涵。

## 模板语言的封装

关于解析器(parser)和解释器(interpreter)，一个常见的误区是——它们必须一起出现，而且永远是作为 `gcc`, `clang`, `kotlinc` 这种编译器(CLI 程序)整体的一个部分出现。

实际上，__与其说解释器是编译器的同类，不如说它是代码复用的极点__。解释器不依附于解析器而存在，它代表着存储程序型计算机的特点——程序即数据、数据也可化为程序

不少优秀的框架多多少少使用了“以数据代表模板化程序”这一定义式思路。

解释器完全可以在语言、复用库的内部，基于常量文本或任何 `CharSequence` 输入使用。比如现在，我们就可以利用 annotation processor 进行基于反射元数据的编译期代码生成。

## 模板语言的语法、解析器

我们希望这门语言包括判断、循环语法，但更希望它保持简单、低复杂度，所以这是定义：

```plain
Hello plain text.
His name is -[name]

Party members:
-{for name in names}-[name]-{end}
-{for names do getHobby}Note, -[name] have -[n], -[hobbies] hobbies-{end}
-{if partyOpen}Party is opened-{if !full}, welcome!!-{end}-{end}

-{buildString foodList}
Foods:
-[joinFoodList eachTrim foods]
-{end}
-[foodList]
```

主要有 `for`, `if` ...`end` 以及无输出只含副作用的 `buildString` 语法，为了简单不支持表达式而只允许变量名、不支持注释。

注意到我们支持 `for iter do op` 语法，因为这门语言只是用于简化代码，它会基于 `java.util.Function` 引入其外部逻辑。

为了解释这门语言，实现其 `fillTo(sb: StringBuilder, map: Globals/*MutableMap<String, Any>*/)` 方法需要创建抽象语法树(AST)，这里略过。

谈到解析器，了解我的人可能以为我又要用 `Feed { val peek: Char; fun consume(): Char; class End: Exception("no more") }` 这种 peek(1) 或称 LL(1) 的输入流结构，实际上这次不。

之所以要用 peek(1) 主要是为了定义的复用性——比如解析 JSON ，每个位置都可能是 `"", -1, 2.0e3, [], true, null` 数种情况，而解析四则运算表达式更需要处理优先级、递归 `(Expr)` 解析等问题，但在模板语言里，只有 `-[]` 和 `-{}` 里的代码才需要具体考虑(目前的情况基本 Regex 就足矣)，要区分 `-x` 还是 `-[` 最好用 peek(2) 解决(不然只有 `consume()` 掉 `-` 后才能看见后面是否是 `[`，再能决定它们到底属于文本部分还是模板代码部分)，则 `Feed` 不适用。

我们这次的基本输入流是 `indexOf`+`subString` 法——`var text: CharSequence; fun readToken(): Pair<TokenKind, String>`

`enum class TokenKind { Plain, Squared, Braced }`；每轮读取到 `-`，判断其后 `[`, `{` ，若是则给到其闭括号、若非则跳过 `-`、继续下次，加到正在收集的 `Plain` 文本里

这个过程若只能 peek(1)，则判断 `-` 后不是开括号，要将它加到当前收集的 `StringBuilder` 里，这类多字符的判断会影响到递归下降法子程序的可组合性。

不能理解什么是复用的可组合性？比如写 `Repeat(asString() notItem('-'))` 就是一种，而上面提到的情况不可以采用这种写法（`-` 是否加到 `asString()` 的收集里不确定，而如果先去掉再判 `[`，后面的又读不到 `-` 了），必须写成新函数，很麻烦而且导致定义形式不一致。

### Block 的解析

以上语法的形式化文法是这样：

```plain
Block Item* end
Item plain | VarRef | ForIn | ForDo | If | BuildString
If "if" '!'? Name Block
```

入口规则是 `Block`, `a*` 代表重复多次、`a?` 代表可空、`a|b` 代表可选项。

基于 `readToken()` 于字符串上建立的基础流，我们可以选择用 __递归下降法__ 或 __显式栈__ 解析 `-{if p} -{end}` 这样的块(block)。

形如以上 `if end` 例，本身隐含了栈的结构。比如 `if a if b end end` 和 `if a end if b end` 的 `if` 出现顺序一样，但嵌套结构是不同的。

如果利用显式栈则必须让包含 `Block` 的 AST 部分化(不可能直接包含块对象，但可以由 `Block` 包含即解析完的 `head`，而它要等待 `end` 指明全部内部项)

实现比如，得维护一个 `Stack<Pair<BlockHead/*for-in,if,buildString,...*/, Int/*begin-pos*/>>` 和当前 `MutableList<Item>`，每次碰到 `end` 就从表末切出 `stack.last().second` 项，再把其交给 `.first` 组织好后添加到 `items`。

或者更干净点， `Stack<Pair<BlockHead, MutableList<Item>>>`，初始情况是读取 `Block`，而每次 `end` 就 `stack[stack.lastIndex-1].second.add(stack.pop())`，序列读完后栈顶的 `it.second/*items*/` 就是所有项。


你可以照上 `if a b` 例试试两种方法的有效性。不过一般我们会用递归下降法；这种方法不能做成 `onToken` 的模式，但简单快速且不必有临时结果的数据类型。

以上提及的所有方法实质上都用了至少两个栈，即所有层、当前层的所有项，且第一层代表入口规则 `Block`；每层结束时将它加入父层项表。

下面是一个基于 `Char` 递归 `List` 的实验，下 `List<Any>` 的每个位置实际上都可以是另个 `List` 或 `Char`。

```kotlin
fun chars1(code: String): List<Any> {
  var items = mutableListOf<Any>()
  val stack = mutableListOf<Int/*start-pos*/>()
  for (c in code) when (c) {
    '[' -> stack.add(items.lastIndex+1)
    ']' -> { val start=stack.run { removeAt(lastIndex) }
      val layer = items.subList(start, items.size).toList()
      items = items.subList(0, start); items.add(layer) }
    else -> items.add(c)
  }
  return items
}

chars1("sad[23[3]a]") //[s, a, d, [2, 3, [3], a]]
```

```kotlin
fun chars2(code: String): List<Any> {
  fun layer() = mutableListOf<Any>()
  val itemStack = mutableListOf<Any>(layer())
  fun items() = (itemStack.last() as MutableList<Any>)
  for (c in code) when (c) {
    '[' -> itemStack.add(layer())
    ']' -> items().let { itemStack.removeAt(itemStack.lastIndex); items().add(it) }
    else -> items().add(c)
  }
  return items()
}
```

```kotlin
fun chars3(code: CharSequence): Pair<List<Any>, CharSequence> {
  val items = mutableListOf<Any>()
  var codes = code
  read@while (true) { val c=codes[0]; codes = if (codes.length != 1) codes.subSequence(1,codes.length) else break; when (c) {
    '[' -> { val (res, tail) = chars3(codes); items.add(res); codes=tail; continue@read }
    ']' -> return items to codes
    else -> items.add(c)
  } }
  return items to codes
}

chars3("sad[23[3]a]").first //[s, a, d, [2, 3, [3], a]]
```

第三例递归下降法，看起来特别糟糕是因为我用的函数式无变量版本（那个循环 `var codes` 实际上可以写成尾递归参数的），所以一般递归下降法都会结合 `Iterator` 之类的流使用，不会手动 `String.subSequence`。

另注意，如果要对无配对的 `]` 做错误提示，前二者看 items 是否仅 1 项即可；最后者只用把对 `]` 的检查和跳过换到 `'[' -> {}` 里即可，直接看到 `]` 就报错啦。

#### 我掉进的坑

> 这是一个由 `Block = Item* end` 的 `read` 实现误解导致的问题，只能学习错误分析

毕竟 `lastToken`, `nextToken()` 这种流手写我也没有经验，设计时出现了一个奇怪的问题：

`-{if partyOpen}Party is opened-{end}` 和无 `readBlock()` 语法都可以正常解析

`-{if partyOpen}Party is opened-{if !full}, welcome!!-{end}-{end}` 可以正常解析，但后面加个换行符（实际是任意字符）都会 `expecting end of block`

经过调试器检查调用栈和 `text` 变量，我最终发现这是由多跳了一个 `-{end}` 词条导致的，而这个多跳的词条来源于我错误理解的 `readBlock()`，结合 `readList(read_op)` 会自动在 `End` 异常时返回导致的极难调试查出的问题。

本来，`Block = Item* end`，我以为应该由 `Item` 在遇到 `end` 时返回 `null` 终止 `Block` 里的 `readList` 逻辑，然后再由上层处理它。

但若是 `-{if a}-{if b} -{end}-{end}` 的情况，内层在 `readBlock` 后已经跳到了最后的 `end`，而外层没拿到 `null`，不知道要保留 `lastToken`。 

如果最后的 `-{end}` 直接结尾，则 `nextToken()` 抛出 `End`，`readTop` 会接住它，错误不会体现。

这个错误本来已经由另一个侧面体现了——开始只要读 `Block` 就会抛 `End` 异常，发现是确认子项由 `-{end}` 终止后自动跳过了可能是末尾处的它。

下机冷静了一下，我发现这是一个关于流项目处理权误解——`readBlock` 的形式化语法对应的是 `Block = (Item !end) end`，也就是读项直到看见第一个 `end`，而不应该由 `Item` 判断

之前一直没有发觉，不知道所谓的「配对」闭括号对流读取子程序而言不过是看到的第一个，因为其上级 `readBlock()` 自然会消耗总第二个、第三个…… 所以递归下降法和显式栈由这样的联系啊。

还有一个关于 `lastToken`/`nextToken()` 流的问题——实际上 `nextToken()` 不能抛出异常。

我们希望能由 `readItem` 跳过它消耗的词条，但如果 `nextToken()` 会抛出 `End`，从而指示 `asList` 在它还未返回 `lastToken` 的解析结果前结束就不能这么做

要么然像以前一样，把 `nextToken()` 做在 `asList` 里面；要么然提供 `hasNext`，这个方法很好解决，利用 `lastTok == null` 即可。

```kotlin
//before
val list = mutableListOf(pas.lastToken.second)
try { while (true) { pas.nextToken(); list.add(pas.lastToken.second) }} catch (_: SubseqParser.End) {}
// after
val list = mutableListOf<String>()
while (pas.isNotEnd) { list.add(pas.lastToken.second); pas.nextToken() }
```

这样，循环内的子程序无需顾虑 `End` 的问题，全权由 `while` 块处理；同时也杜绝了可提前 `nextToken` 造成的顺序混乱。

一般而言，解析组合子不会暴露 `End`，而是由 `item('a')` 这样的子模式将 `End` 视为 `notParsed`，`asList` 会读取出输入里能识别的前缀，但这里没有不可识别的输入，故仅处理 `End` 问题。

## 尾记

我这是怎么了（草）…… 解析一个 end 块语法居然讲了这么久，为什么要废话这么多啊……

这次的实际解析器依靠 `readToken()` 来解析，所以无需维护 `subSequence` 的问题（这个问题本身也是纯函数式编程引入的“引用透明、无副作用”而已）

解析器对编译器来讲是「万里长征的第0步」，但每一个函数都有被仔细推敲的价值——进步来源于此。对每个人来说也都一样。

总而言之，讲明了这些以后实现大概不困难，就不多言了。