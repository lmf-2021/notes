(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{470:function(a,s,t){"use strict";t.r(s);var n=t(27),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"包机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包机制"}},[a._v("#")]),a._v(" 包机制")]),a._v(" "),t("h2",{attrs:{id:"_1、问题发现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、问题发现"}},[a._v("#")]),a._v(" 1、问题发现")]),a._v(" "),t("p",[a._v("存在这样一个问题：当定义了多个类的时候，可能会发生类名的重复问题。")]),a._v(" "),t("p",[a._v("解决方式：在java中采用包机制处理开发者定义的类名冲突问题。")]),a._v(" "),t("p",[a._v("就好比我们平时的用电脑，一个文件夹下不能存在同名的文件，我们要是有这样的需求，但是又不想换 名字，我们就可以考虑使用新建一个文件夹来存放！在我们的Java中也是这样的。")]),a._v(" "),t("p",[a._v("我们在idea中创建包，输入代码后，第一行idea默认会有：package 包名路径，例如")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/JavaSE-%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.assets/image-20210327152247746.png",alt:"image-20210327152247746"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/JavaSE-%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.assets/image-20210327152310010.png",alt:"image-20210327152310010"}})]),a._v(" "),t("p",[a._v("就要求此份java文件必须保存在这样一个目录下，这样Java解释器才能找到它。 在IDEA中能正确运行， 你可以去Windows下的工程中查看，HelloWorld这个文件必是在这样的目录结构下的。")]),a._v(" "),t("p",[a._v("3-6行是文档注释，便于把java文件打包成文档自动生成文件信息，以后会遇到，在阿里巴巴开发手册中，要求添加@author的注释信息 ，可以下载个阿里巴巴开发手册插件配置在ide里")]),a._v(" "),t("h2",{attrs:{id:"_2、包的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、包的作用"}},[a._v("#")]),a._v(" 2、包的作用")]),a._v(" "),t("p",[a._v("为了更好地组织类，Java 提供了包机制，用于区别类名的命名空间。")]),a._v(" "),t("p",[t("strong",[a._v("包的作用：")])]),a._v(" "),t("p",[a._v("1、把功能相似或相关的类或接口组织在同一个包中，方便类的查找和使用。")]),a._v(" "),t("p",[a._v("2、如同文件夹一样，包也采用了树形目录的存储方式。同一个包中的类名字是不同的，不同的包中的类的名字是可以相同的，当同时调用两个不同包中相同类名的类时，应该加上包名加以区别。因此，包可以避免名字冲突。")]),a._v(" "),t("p",[a._v("3、包也限定了访问权限，拥有包访问权限的类才能访问某个包中的类。")]),a._v(" "),t("p",[a._v("Java 使用包（package）这种机制是为了防止命名冲突，访问控制，提供搜索和定位类（class）、接口、枚举（enumerations）和注释（annotation）等。")]),a._v(" "),t("p",[a._v("包语句的语法格式为：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("pkg1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("．pkg2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("．pkg3…"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("例如,一个Something.java 文件它的内容:")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("net"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("util")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Something")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("那么它的路径应该是 net/java/util/Something.java 这样保存的。")]),a._v(" "),t("p",[a._v("package(包) 的作用是把不同的 java 程序分类保存，更方便的被其他 java 程序调用。")]),a._v(" "),t("p",[a._v("一个包（package）可以定义为一组相互联系的类型（类、接口、枚举和注释），为这些类型提供访问 保护和命名空间管理的功能。")]),a._v(" "),t("p",[a._v("以下是一些 Java 中的包：")]),a._v(" "),t("ul",[t("li",[a._v("java.lang-打包基础的类")]),a._v(" "),t("li",[a._v("java.io-包含输入输出功能的函数")])]),a._v(" "),t("p",[a._v("开发者可以自己把一组类和接口等打包，并定义自己的包。而且在实际开发中这样做是值得提倡的，当你自己完成类的实现之后，将相关的类分组，可以让其他的编程者更容易地确定哪些类、接口、枚举和 注释等是相关的。")]),a._v(" "),t("p",[a._v("由于包创建了新的命名空间（namespace），所以不会跟其他包中的任何名字产生命名冲突。使用包这 种机制，更容易实现访问控制，并且让定位相关类更加简单。")]),a._v(" "),t("h2",{attrs:{id:"_3、创建包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、创建包"}},[a._v("#")]),a._v(" 3、创建包")]),a._v(" "),t("p",[a._v("创建包的时候，你需要为这个包取一个合适的名字。之后，如果其他的一个源文件包含了这个包提供的类、接口、枚举或者注释类型的时候，都必须将这个包的声明放在这个源文件的开头。")]),a._v(" "),t("p",[a._v("包声明应该在源文件的第一行，每个源文件只能有一个包声明，这个文件中的每个类型都应用于它。")]),a._v(" "),t("p",[a._v("如果一个源文件中没有使用包声明，那么其中的类，函数，枚举，注释等将被放在一个无名的包 （unnamed package）中。")]),a._v(" "),t("p",[a._v("一般利用公司域名倒置作为报名；")]),a._v(" "),t("p",[a._v("例子：")]),a._v(" "),t("p",[a._v("www.baidu.com 包名：com.baidu.www")]),a._v(" "),t("p",[a._v("bbs.baidu.com 包名：com.baidu.bbs")]),a._v(" "),t("p",[a._v("我们平时也可以按照自己的公司域名去写，比如：com.kuangstudy.utils")]),a._v(" "),t("h2",{attrs:{id:"_4、import-关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、import-关键字"}},[a._v("#")]),a._v(" 4、import 关键字")]),a._v(" "),t("p",[a._v('为了能够使用某一个包的成员，我们需要在 Java 程序中明确导入该包。使用 "import" 语句可完成此功能。')]),a._v(" "),t("p",[a._v("在 java 源文件中 import 语句应位于 package 语句之后，所有类的定义之前，可以没有，也可以有多条，其语法格式为：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("package1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("package2…"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("classname"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果在一个包中，一个类想要使用本包中的另一个类，那么该包名可以省略。")]),a._v(" "),t("p",[a._v("要是要用到其他包下的类，就必须要先导包！")]),a._v(" "),t("p",[a._v("如果两个类重名，需要导入对应的包，否则就需要写出完整地址：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("kuang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dao"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("Hello")]),a._v(" hello "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("kuang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dao"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("Hello")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("用 "),t("strong",[a._v("import")]),a._v(' 关键字引入，使用通配符 "*" , 导入io包下的所有类！')]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("【不建议这样使用，因为会全局扫描，影响速度！】")]),a._v(" "),t("p",[a._v("使用 "),t("strong",[a._v("import")]),a._v(" 关键字引入指定类:")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("kuang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Hello")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("【注意】类文件中可以包含任意数量的 import 声明。import 声明必须在包声明之后，类声明之前。")]),a._v(" "),t("p",[a._v("【编码规范：推荐参考阿里巴巴开发手册编程规范】")])])}),[],!1,null,null,null);s.default=e.exports}}]);