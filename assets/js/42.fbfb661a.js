(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{358:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("mark",[t._v("JavaWeb笔记转载于狂神笔记，稍修改了点内容")])]),t._v(" "),a("h2",{attrs:{id:"_1、基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、基本概念"}},[t._v("#")]),t._v(" 1、基本概念")]),t._v(" "),a("h3",{attrs:{id:"_1-1、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、前言"}},[t._v("#")]),t._v(" 1.1、前言")]),t._v(" "),a("p",[t._v("web开发：")]),t._v(" "),a("ul",[a("li",[t._v("web，网页的意思  ， www.baidu.com")]),t._v(" "),a("li",[t._v("静态web\n"),a("ul",[a("li",[t._v("html，css")]),t._v(" "),a("li",[t._v("提供给所有人看的数据始终不会发生变化！")])])]),t._v(" "),a("li",[t._v("动态web\n"),a("ul",[a("li",[t._v("淘宝，几乎是所有的网站；")]),t._v(" "),a("li",[t._v("提供给所有人看的数据始终会发生变化，每个人在不同的时间，不同的地点看到的信息各不相同！")]),t._v(" "),a("li",[t._v("技术栈：Servlet/JSP，ASP，PHP")])])])]),t._v(" "),a("p",[t._v("在Java中，动态web资源开发的技术统称为JavaWeb；")]),t._v(" "),a("h3",{attrs:{id:"_1-2、web应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、web应用程序"}},[t._v("#")]),t._v(" 1.2、web应用程序")]),t._v(" "),a("p",[t._v("web应用程序：可以提供浏览器访问的程序；")]),t._v(" "),a("ul",[a("li",[t._v("a.html、b.html......多个web资源，这些web资源可以被外界访问，对外界提供服务；")]),t._v(" "),a("li",[t._v("你们能访问到的任何一个页面或者资源，都存在于这个世界的某一个角落的计算机上。")]),t._v(" "),a("li",[t._v("URL")]),t._v(" "),a("li",[t._v("这个统一的web资源会被放在同一个文件夹下，web应用程序--\x3eTomcat：服务器")]),t._v(" "),a("li",[t._v("一个web应用由多部分组成 （静态web，动态web）\n"),a("ul",[a("li",[t._v("html，css，js")]),t._v(" "),a("li",[t._v("jsp，servlet")]),t._v(" "),a("li",[t._v("Java程序")]),t._v(" "),a("li",[t._v("jar包")]),t._v(" "),a("li",[t._v("配置文件 （Properties）")])])])]),t._v(" "),a("p",[t._v("web应用程序编写完毕后，若想提供给外界访问：需要一个服务器来统一管理；")]),t._v(" "),a("h3",{attrs:{id:"_1-3、静态web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3、静态web"}},[t._v("#")]),t._v(" 1.3、静态web")]),t._v(" "),a("ul",[a("li",[t._v("*.htm, *.html,这些都是网页的后缀，如果服务器上一直存在这些东西，我们就可以直接进行读取。通络；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/JavaWeb.assets/1567822802516.png",alt:"1567822802516"}})]),t._v(" "),a("ul",[a("li",[t._v("静态web存在的缺点\n"),a("ul",[a("li",[t._v("Web页面无法动态更新，所有用户看到都是同一个页面\n"),a("ul",[a("li",[t._v("轮播图，点击特效：伪动态")]),t._v(" "),a("li",[t._v("JavaScript [实际开发中，它用的最多]")]),t._v(" "),a("li",[t._v("VBScript")])])]),t._v(" "),a("li",[t._v("它无法和数据库交互（数据无法持久化，用户无法交互）")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-4、动态web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4、动态web"}},[t._v("#")]),t._v(" 1.4、动态web")]),t._v(" "),a("p",[t._v("页面会动态展示： “Web的页面展示的效果因人而异”；")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/JavaWeb.assets/1567823191289.png",alt:"1567823191289"}})]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("加入服务器的动态web资源出现了错误，我们需要重新编写我们的"),a("strong",[t._v("后台程序")]),t._v(",重新发布；\n"),a("ul",[a("li",[t._v("停机维护")])])])]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("Web页面可以动态更新，所有用户看到都不是同一个页面")]),t._v(" "),a("li",[t._v("它可以与数据库交互 （数据持久化：注册，商品信息，用户信息........）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/JavaWeb.assets/1567823350584.png",alt:"1567823350584"}})]),t._v(" "),a("h2",{attrs:{id:"_2、web服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、web服务器"}},[t._v("#")]),t._v(" 2、web服务器")]),t._v(" "),a("h3",{attrs:{id:"_2-1、技术讲解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、技术讲解"}},[t._v("#")]),t._v(" 2.1、技术讲解")]),t._v(" "),a("p",[a("strong",[t._v("ASP:")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("微软：国内最早流行的就是ASP；")])]),t._v(" "),a("li",[a("p",[t._v("在HTML中嵌入了VB的脚本，  ASP + COM；")])]),t._v(" "),a("li",[a("p",[t._v("在ASP开发中，基本一个页面都有几千行的业务代码，页面极其换乱")])]),t._v(" "),a("li",[a("p",[t._v("维护成本高！")])]),t._v(" "),a("li",[a("p",[t._v("C#")])]),t._v(" "),a("li",[a("p",[t._v("IIS")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n            <%\n            System.out.println("hello")\n            %>\n            '),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])])]),t._v(" "),a("p",[a("strong",[t._v("php：")])]),t._v(" "),a("ul",[a("li",[t._v("PHP开发速度很快，功能很强大，跨平台，代码很简单 （70% , WP）")]),t._v(" "),a("li",[t._v("无法承载大访问量的情况（局限性）")])]),t._v(" "),a("p",[t._v("**JSP/Servlet : **")]),t._v(" "),a("p",[t._v("B/S：浏览和服务器")]),t._v(" "),a("p",[t._v("C/S:  客户端和服务器")]),t._v(" "),a("ul",[a("li",[t._v("sun公司主推的B/S架构")]),t._v(" "),a("li",[t._v("基于Java语言的 (所有的大公司，或者一些开源的组件，都是用Java写的)")]),t._v(" "),a("li",[t._v("可以承载三高问题带来的影响；")]),t._v(" "),a("li",[t._v("语法像ASP ， ASP--\x3eJSP , 加强市场强度；")])]),t._v(" "),a("p",[t._v(".....")]),t._v(" "),a("h3",{attrs:{id:"_2-2、web服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、web服务器"}},[t._v("#")]),t._v(" 2.2、web服务器")]),t._v(" "),a("p",[t._v("服务器是一种被动的操作，用来处理用户的一些请求和给用户一些响应信息；")]),t._v(" "),a("p",[a("strong",[t._v("IIS")])]),t._v(" "),a("p",[t._v("微软的； ASP...,Windows中自带的")]),t._v(" "),a("p",[a("strong",[t._v("Tomcat")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/JavaWeb.assets/1567824446428.png",alt:"1567824446428"}})]),t._v(" "),a("p",[t._v("面向百度编程；")]),t._v(" "),a("p",[t._v("Tomcat是Apache 软件基金会（Apache Software Foundation）的Jakarta 项目中的一个核心项目，最新的Servlet 和JSP 规范总是能在Tomcat 中得到体现，因为Tomcat 技术先进、性能稳定，而且"),a("strong",[t._v("免费")]),t._v("，因而深受Java 爱好者的喜爱并得到了部分软件开发商的认可，成为目前比较流行的Web 应用服务器。")]),t._v(" "),a("p",[t._v("Tomcat 服务器是一个免费的开放源代码的Web 应用服务器，属于轻量级应用"),a("a",{attrs:{href:"https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务器"),a("OutboundLink")],1),t._v("，在中小型系统和并发访问用户不是很多的场合下被普遍使用，是开发和调试JSP 程序的首选。对于一个Java初学web的人来说，它是最佳的选择")]),t._v(" "),a("p",[t._v("Tomcat 实际上运行JSP 页面和Servlet。")]),t._v(" "),a("p",[t._v("....")]),t._v(" "),a("p",[a("strong",[t._v("工作3-5年之后，可以尝试手写Tomcat服务器；")])]),t._v(" "),a("p",[t._v("下载tomcat：")]),t._v(" "),a("ol",[a("li",[t._v("安装 or  解压")]),t._v(" "),a("li",[t._v("了解配置文件及目录结构")]),t._v(" "),a("li",[t._v("这个东西的作用")])])])}),[],!1,null,null,null);a.default=e.exports}}]);