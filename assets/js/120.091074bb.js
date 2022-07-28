(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{434:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第三章-数组【一维数组、多维数组】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三章-数组【一维数组、多维数组】"}},[s._v("#")]),s._v(" 第三章 数组【一维数组、多维数组】")]),s._v(" "),a("h2",{attrs:{id:"_1-一维数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-一维数组"}},[s._v("#")]),s._v(" 1. 一维数组")]),s._v(" "),a("p",[s._v("一维数组的定义方式为：\n"),a("code",[s._v("类型说明符 数组名 [常量表达式];")]),s._v("\n其中，类型说明符是任一种基本数据类型或构造数据类型。数组名是用户定义的数组标识符。方括号中的常量表达式表示数据元素的个数，也称为数组的长度。例如：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \t\t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 说明整型数组a，有10个元素 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 说明实型数组b，有10个元素，实型数组c，有20个元素 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 说明字符数组ch，有20个元素 */")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("对于数组类型说明应注意以下几点：")])]),s._v(" "),a("ol",[a("li",[s._v("数组的类型实际上是指数组元素的取值类型。对于同一个数组，其所有元素的数据类型都是相同的。")]),s._v(" "),a("li",[s._v("数组名的书写规则应符合标识符的书写规定。")]),s._v(" "),a("li",[s._v("数组名不能与其它变量名相同。例如：")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("是错误的。")]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[s._v("方括号中常量表达式表示数组元素的个数，如a[5]表示数组a有5个元素。但是其下标从0开始计算。因此5个元素分别为a[0], a[1], a[2], a[3], a[4]。")])]),s._v(" "),a("li",[a("p",[s._v("不能在方括号中用变量来表示元素的个数，但是可以是符号常数或常量表达式。例如：")])])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("FD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\t")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 宏定义，FD为常量（值不可改变）")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("FD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("是合法的。但是下述说明方式是错误的。")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("允许在同一个类型说明中，说明多个数组和多个变量。例如：")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("k2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("一维数组元素的引用")]),s._v("\n数组元素是组成数组的基本单元。数组元素也是一种变量， 其标识方法为数组名后跟一个下标。下标表示了元素在数组中的顺序号。数组元素的一般形式为：\n"),a("code",[s._v("数组名[下标]")]),s._v("\n其中下标只能为整型常量或整型表达式。如为小数时，C编译将自动取整。例如：\na[5]\na[i+j]\na[i++]\n都是合法的数组元素。")]),s._v(" "),a("p",[s._v("数组元素通常也称为下标变量。必须先定义数组，才能使用下标变量。在C语言中只能逐个地使用下标变量，而不能一次引用整个数组。")]),s._v(" "),a("p",[a("strong",[s._v("一维数组的初始化")])]),s._v(" "),a("p",[s._v("一维数组的初始化可以使用以下方法实现:")]),s._v(" "),a("ol",[a("li",[s._v("定义数组时给所有元素赋初值，这叫“完全初始化”。例如：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int a[5] = {1, 2, 3, 4, 5};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通过将数组元素的初值依次放在一对花括号中，如此初始化之后，a[0]=1；a[1]=2；a[2]=3；a[3]=4；a[4]=5，即从左到右依次赋给每个元素。需要注意的是，初始化时各元素间是用逗号隔开的，不是用分号。")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("可以只给一部分元素赋值，这叫“不完全初始化”。例如：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int a[5] = {1, 2};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("定义的数组 a 有 5 个元素，但花括号内只提供两个初值，这表示只给前面两个元素 a[0]、a[1] 初始化，而后面三个元素都没有被初始化。不完全初始化时，没有被初始化的元素自动为 0。")]),s._v(" "),a("p",[s._v("需要注意的是，“不完全初始化”和“完全不初始化”不一样。如果“完全不初始化”，即只定义“int a[5]；”而不初始化，那么各个元素的值就不是0了，所有元素都是垃圾值。")]),s._v(" "),a("p",[s._v("你也不能写成“int a[5]={}；”。如果大括号中什么都不写，那就是极其严重的语法错误。大括号中最少要写一个数。比如“int a[5]={0}；”，这时就是给数组“清零”，此时数组中每个元素都是零。此外，如果定义的数组的长度比花括号中所提供的初值的个数少，也是语法错误，如“a[2]={1，2，3，4，5}；”。")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("如果定义数组时就给数组中所有元素赋初值，那么就可以不指定数组的长度，因为此时元素的个数已经确定了。编程时我们经常都会使用这种写法，因为方便，既不会出问题，也不用自己计算有几个元素，系统会自动分配空间。例如：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int a[5] = {1, 2, 3, 4, 5};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以写成：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int a[] = {1, 2, 3, 4, 5};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("第二种写法的花括号中有 5 个数，所以系统会自动定义数组 a 的长度为 5。但是要注意，只有在定义数组时就初始化才可以这样写。如果定义数组时不初始化，那么省略数组长度就是语法错误。比如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int a[];\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("那么编译时就会提示错误，编译器会提示你没有指定数组的长度。")]),s._v(" "),a("h2",{attrs:{id:"_2-二维数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-二维数组"}},[s._v("#")]),s._v(" 2. 二维数组")]),s._v(" "),a("p",[s._v("二维数组定义的一般形式是：\n"),a("code",[s._v("类型说明符 数组名[常量表达式1][常量表达式2]")]),s._v("\n其中常量表达式1表示第一维下标的长度，常量表达式2 表示第二维下标的长度。例如：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("说明了一个三行四列的数组，数组名为a，其下标变量的类型为整型。\n该数组的下标变量共有3×4个，即：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  a[0][0], a[0][1], a[0][2], a[0][3]\n  a[1][0], a[1][1], a[1][2], a[1][3]\n  a[2][0], a[2][1], a[2][2], a[2][3]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("二维数组在概念上是二维的，即是说其下标在两个方向上变化，下标变量在数组中的位置也处于一个平面之中，而不是象一维数组只是一个向量。但是，实际的硬件存储器却是连续编址的，也就是说存储器单元是按一维线性排列的。如何在一维存储器中存放二维数组，可有两种方式：一种是按行排列， 即放完一行之后顺次放入第二行。另一种是按列排列， 即放完一列之后再顺次放入第二列。")]),s._v(" "),a("p",[s._v("在C语言中，二维数组是按行排列的。即，先存放a[0]行，再存放a[1]行，最后存放a[2]行。每行中有四个元素也是依次存放。由于数组a说明为int类型，该类型占两个字节的内存空间，所以每个元素均占有两个字节。")]),s._v(" "),a("p",[a("strong",[s._v("二维数组元素的引用")]),s._v("\n二维数组的元素也称为双下标变量，其表示的形式为：\n"),a("code",[s._v("数组名[下标][下标]")]),s._v("\n其中下标应为整型常量或整型表达式。例如：\n"),a("code",[s._v("a[3][4]")]),s._v("\n表示a数组三行四列的元素。")]),s._v(" "),a("p",[s._v("下标变量和数组说明在形式中有些相似，但这两者具有完全不同的含义。数组说明的方括号中给出的是某一维的长度，即可取下标的最大值；而数组元素中的下标是该元素在数组中的位置标识。前者只能是常量，后者可以是常量，变量或表达式。")]),s._v(" "),a("p",[a("strong",[s._v("二维数组元素的初始化")]),s._v("\n二维数组初始化也是在类型说明时给各下标变量赋以初值。二维数组可按行分段赋值，也可按行连续赋值。\n"),a("strong",[s._v("对于二维数组初始化赋值还有以下说明：")])]),s._v(" "),a("ol",[a("li",[s._v("可以只对部分元素赋初值，未赋初值的元素自动取0值。例如：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int a[3][3]={{1},{2},{3}};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("是对每一行的第一列元素赋值，未赋值的元素取0值。 赋值后各元素的值为：\n1  0  0\n2  0  0\n3  0  0")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int a [3][3]={{0,1},{0,0,2},{3}};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("赋值后的元素值为：\n0  1  0\n0  0  2\n3  0  0")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("如对全部元素赋初值，则第一维的长度可以不给出。例如：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int a[3][3]={1,2,3,4,5,6,7,8,9};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以写为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int a[][3]={1,2,3,4,5,6,7,8,9};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("数组是一种构造类型的数据。二维数组可以看作是由一维数组的嵌套而构成的。设一维数组的每个元素都又是一个数组，就组成了二维数组。当然，前提是各元素类型必须相同。根据这样的分析，一个二维数组也可以分解为多个一维数组。C语言允许这种分解。\n如二维数组"),a("code",[s._v("a[3][4]")]),s._v("，可分解为三个一维数组，其数组名分别为：\na[0]\na[1]\na[2]\n对这三个一维数组不需另作说明即可使用。这三个一维数组都有4个元素，例如：一维数组"),a("code",[s._v("a[0]")]),s._v("的元素为"),a("code",[s._v("a[0][0],a[0][1],a[0][2],a[0][3]")]),s._v("。必须强调的是，"),a("code",[s._v("a[0],a[1],a[2]")]),s._v("不能当作下标变量使用，它们是数组名，不是一个单纯的下标变量。")])]),s._v(" "),a("h2",{attrs:{id:"_3-字符数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-字符数组"}},[s._v("#")]),s._v(" 3. 字符数组")]),s._v(" "),a("p",[a("strong",[s._v("1、字符数组的定义")]),s._v(" "),a("code",[s._v("char word[] = {‘H’, ‘e’, ‘l’, ‘l’, ‘o’,‘!’,’\\0’};")]),s._v("\n以0（整数0）结尾的⼀串字符\n0或"),a("code",[s._v("’\\0’")]),s._v("是⼀样的，但是和’0’不同\n0标志字符串的结束，但它不是字符串的⼀部分\n计算字符串⻓度的时候不包含这个0\n字符串以数组的形式存在，以数组或指针的形式访问\n更多的是以指针的形式\n"),a("strong",[s._v("2、字符数组与字符串")]),s._v("\n• "),a("code",[s._v('"Hello"')]),s._v("\n• "),a("code",[s._v('"Hello"')]),s._v(" 会被编译器变成⼀个字符数组放在某处，这\n个数组的⻓度是6，结尾还有表⽰结束的0\n• 两个相邻的字符串常量会被⾃动连接起来\n• ⾏末的\\表⽰下⼀⾏还是这个字符串常量")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("• C语⾔的字符串是以字符数组的形态存在的\n• 不能⽤运算符对字符串做运算\n• 通过数组的⽅式可以遍历字符串\n• 唯⼀特殊的地⽅是字符串字⾯量可以⽤来初始化字符\n数组\n• 以及标准库提供了⼀系列字符串函数")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("char"),a("code",[s._v("*")]),s._v('s = "Hello, world!";\n• s 是⼀个指针，初始化为指向⼀个字符串常量\n• 由于这个常量所在的地⽅，所以实际上s是 const\nchar'),a("code",[s._v("*")]),s._v(" s ，但是由于历史的原因，编译器接受不带\nconst的写法\n• 但是试图对s所指的字符串做写⼊会导致严重的后果\n• 如果需要修改字符串，应该⽤数组："),a("code",[s._v('char s[] = "Hello, world!";')])]),s._v(" "),a("p",[a("strong",[s._v("指针还是数组？")]),s._v("\n• "),a("code",[s._v('char *str = "Hello";')]),s._v("\n• "),a("code",[s._v('char word[] = "Hello";')]),s._v("\n• 数组：这个字符串在这⾥\n• 作为本地变量空间⾃动被回收\n• 指针：这个字符串不知道在哪⾥\n• 处理参数\n• 动态分配空间")]),s._v(" "),a("ul",[a("li",[s._v("如果要构造⼀个字符串—>数组")])]),s._v(" "),a("ul",[a("li",[s._v("如果要处理⼀个字符串—>指针")])]),s._v(" "),a("p",[a("strong",[s._v("3、字符串的表示形式")]),s._v("\n在C语言中，可以用两种方法表示和存放字符串：\n（1）用字符数组存放一个字符串\n"),a("code",[s._v('char str[]="I love China";')]),s._v("\n（2）用字符指针指向一个字符串\n"),a("code",[s._v('char* str="I love China";')]),s._v('\n对于第二种表示方法，有人认为str是一个字符串变量，以为定义时把字符串常量"I love China"直接赋给该字符串变量，这是不对的。\nC语言对字符串常量是按字符数组处理的，在内存中开辟了一个字符数组用来存放字符串常量，程序在定义字符串指针变量str时只是把字符串首地址（即存放字符串的字符数组的首地址）赋给str。')]),s._v(" "),a("p",[a("strong",[s._v("两种表示方式的字符串输出都用")]),s._v(" "),a("code",[s._v('printf("%s\\n",str);')]),s._v("\n%s表示输出一个字符串，给出字符指针变量名str（对于第一种表示方法，字符数组名即是字符数组的首地址，与第二种中的指针意义是一致的），则系统先输出它所指向的一个字符数据，然后自动使str自动加1，使之指向下一个字符...，如此，直到遇到字符串结束标识符 "),a("code",[s._v('" \\0 "')]),s._v("。")]),s._v(" "),a("p",[s._v("• 字符串可以表达为char"),a("em",[s._v("的形式 • char")]),s._v("不⼀定是字符串 • 本意是指向字符的指针，可能指向的是字符 的数组（就像int*⼀样） • 只有它所指的字符数组有结尾的0，才能说它 所指的是字符串")]),s._v(" "),a("p",[a("strong",[s._v("4、对使用字符指针变量和字符数组两种方法表示字符串的讨论")]),s._v("\n虽然用字符数组和字符指针变量都能实现字符串的存储和运算，但它们二者之间是有区别的，不应混为一谈。\n4.1、字符数组由若干个元素组成，每个元素放一个字符；而字符指针变量中存放的是地址（字符串/字符数组的首地址），绝不是将字符串放到字符指针变量中（是字符串首地址）\n4.2、"),a("strong",[s._v("赋值方式：")]),s._v("   对字符数组只能对各个元素赋值，不能用以下方法对字符数组赋值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('char str[14];\nstr="I love China";\n//（但在字符数组**初始化**时可以，即char str[14]="I love China";）\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("而对字符指针变量，采用下面方法赋值：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('char* a;\na="I love China";\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("或者是"),a("code",[s._v('char* a="I love China";')]),s._v("都可以")]),s._v(" "),a("p",[s._v("4.3、对字符指针变量赋初值（"),a("strong",[s._v("初始化")]),s._v("）：\n"),a("code",[s._v('char* a="I love China";')]),s._v("\n等价于：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('char* a;\na="I love China";\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("而对于字符数组的初始化\n"),a("code",[s._v('char str[14]="I love China";')]),s._v("\n不能等价于：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('char str[14];\nstr="I love China"; （这种不是初始化，而是赋值，而对数组这样赋值是不对的）\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("4.4、如果定义了一个字符数组，那么它有确定的内存地址；而定义一个字符指针变量时，它并未指向个确定的字符数据，并且可以多次赋值。")]),s._v(" "),a("hr"),s._v(" "),a("p",[a("strong",[s._v("5、字符串处理函数")])]),s._v(" "),a("p",[s._v("**注意：**在使用字符串处理函数函数时应当在程序文件的开头用"),a("code",[s._v("#include <string.h>")]),s._v("。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("puts函数")]),s._v(" "),a("ul",[a("li",[s._v("输出字符串："),a("code",[s._v("puts(字符数组)")])])])]),s._v(" "),a("li",[a("p",[s._v("gets函数")]),s._v(" "),a("ul",[a("li",[s._v("输入字符串："),a("code",[s._v("gets(字符数组)")])])])]),s._v(" "),a("li",[a("p",[s._v("strcat函数")]),s._v(" "),a("ul",[a("li",[s._v("字符串连接函数："),a("code",[s._v("strcat（字符串数组1，字符串数组2）")])])])]),s._v(" "),a("li",[a("p",[s._v("strcpy函数")]),s._v(" "),a("ul",[a("li",[s._v("字符串复制函数："),a("code",[s._v("strcpy（字符串数组1，字符串数组2）")])])])]),s._v(" "),a("li",[a("p",[s._v("strncpy函数")]),s._v(" "),a("ul",[a("li",[s._v("字符串复制函数："),a("code",[s._v("strncpy（字符串数组1，字符串数组2，n）")]),s._v("，"),a("code",[s._v("n")]),s._v("为常数")]),s._v(" "),a("li",[s._v("把字符串数组2中前面"),a("code",[s._v("n")]),s._v("个字符复制到字符串数组1中")])])]),s._v(" "),a("li",[a("p",[s._v("strcmp函数")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("字符串比较函数："),a("code",[s._v("strcmp(字符串数组1，字符串数组2)")])])]),s._v(" "),a("li",[a("p",[s._v("比较规则：将两个字符串自左向右逐个字符相比（按ASCII码值大小比较），直到出现不同的字符或遇到"),a("code",[s._v("‘\\0’")]),s._v("为止。")]),s._v(" "),a("blockquote",[a("p",[s._v("1.如果字符串数组1与字符串数组2相同，则返回函数值为0。")]),s._v(" "),a("p",[s._v("2.如果字符串数组1>字符串数组2相同，则返回函数值为一个正整数。")]),s._v(" "),a("p",[s._v("3.如果字符串数组1<字符串数组2相同，则返回函数值为一个负整数。")])])])])]),s._v(" "),a("li",[a("p",[s._v("strlen函数")]),s._v(" "),a("ul",[a("li",[s._v("测字符串长度："),a("code",[s._v("strlen(字符串数组)")])]),s._v(" "),a("li",[s._v("函数的值为字符串中的实际长度（不包括"),a("code",[s._v("'\\0'")]),s._v("在内）")])])]),s._v(" "),a("li",[a("p",[s._v("strlwr函数")]),s._v(" "),a("ul",[a("li",[s._v("转换为小写："),a("code",[s._v("strlwr(字符串数组)")])])])]),s._v(" "),a("li",[a("p",[s._v("strupr函数")]),s._v(" "),a("ul",[a("li",[s._v("转换为小写："),a("code",[s._v("strupr(字符串数组)")])])])])]),s._v(" "),a("hr")])}),[],!1,null,null,null);a.default=e.exports}}]);