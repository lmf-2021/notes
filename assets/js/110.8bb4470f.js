(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{565:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"从零开始用jenkins自动构建部署springboot项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从零开始用jenkins自动构建部署springboot项目"}},[s._v("#")]),s._v(" 从零开始用Jenkins自动构建部署SpringBoot项目")]),s._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[s._v("#")]),s._v(" 前提条件")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("一台服务器")]),s._v(" "),a("p",[s._v("建议配置2h4g以上（1h2g的属实有点低了）")])]),s._v(" "),a("li",[a("p",[s._v("sspringboot项目手动用maven打包，且jar包可正常运行")]),s._v(" "),a("p",[s._v("如果你的是多模块项目（如图），需要配置好打包，否则启动失败")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210916125322578.png",alt:"image-20210916125322578"}})]),s._v(" "),a("p",[s._v("就像这样的项目，可浏览文章："),a("a",{attrs:{href:"https://blog.csdn.net/A_zhiyuan/article/details/120326653",target:"_blank",rel:"noopener noreferrer"}},[s._v("SpringBoot多模块打包方式"),a("OutboundLink")],1)])])]),s._v(" "),a("h2",{attrs:{id:"安装jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装jenkins"}},[s._v("#")]),s._v(" 安装Jenkins")]),s._v(" "),a("p",[s._v("安装教程可看视频：https://www.bilibili.com/video/BV1wA411c7aS")]),s._v(" "),a("p",[a("strong",[s._v("1、安装")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker pull jenkins/jenkins:lts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("2、创建目录")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir jenkins_home")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\ndocker  jenkins_home\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("3、启动")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run -di --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jenkins -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 -v /data/jenkins_home:/var/jenkins_home jenkins/jenkins:lts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动失败：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker logs  d6b5baf89d6b")]),s._v("\ntouch: cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/var/jenkins_home/copy_reference_file.log'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Permission denied\nCan not "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" to /var/jenkins_home/copy_reference_file.log. Wrong volume permissions?\ntouch: cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/var/jenkins_home/copy_reference_file.log'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Permission denied\nCan not "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" to /var/jenkins_home/copy_reference_file.log. Wrong volume permissions?\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("权限：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" /data/jenkins_home\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("再重新启动，等启动工作完毕后")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914190950830.png",alt:"image-20210914190950830"}})]),s._v(" "),a("p",[s._v("查看容器日志：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker logs jenkins\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914191244184.png",alt:"image-20210914191244184"}})]),s._v(" "),a("p",[s._v("箭头所指就是密码")]),s._v(" "),a("blockquote",[a("p",[s._v("方法二：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd jenkins_home/secrets/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost secrets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\n总用量 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" www www  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":45 filepath-filters.d\n-rw-r----- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" www www  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":45 initialAdminPassword\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" www www  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":45 jenkins.model.Jenkins.crumbSalt\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" www www "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":45 master.key\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" www www "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("272")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":45 org.jenkinsci.main.modules.instance_identity.InstanceIdentity.KEY\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" www www   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":45 slave-to-master-security-kill-switch\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" www www  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":45 whitelisted-callables.d\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost secrets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat initialAdminPassword")]),s._v("\n730edbb8adcd4ae7b58f14ac3ccd001d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("Jenkins修改初始密码:"),a("a",{attrs:{href:"https://www.pianshen.com/article/7582333512/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.pianshen.com/article/7582333512/"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("5、进入页面后，选择推荐的插件")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914191628179.png",alt:"image-20210914191628179"}})]),s._v(" "),a("p",[s._v("全部安装成功后：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914191921616.png",alt:"image-20210914191921616"}})]),s._v(" "),a("p",[s._v("有一些会安装失败（我用的服务器，用虚拟机的由于有墙可能访问不到github）")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914192005987.png",alt:"image-20210914192005987"}})]),s._v(" "),a("p",[s._v("点击重试后")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914192029111.png",alt:"image-20210914192029111"}})]),s._v(" "),a("p",[s._v("大部分都装上了，有几个可能会装不上，到时候可以手动安装，先点确定")]),s._v(" "),a("p",[s._v("然后创建用户")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914192137056.png",alt:"image-20210914192137056"}})]),s._v(" "),a("p",[s._v("下一步，URL为，jenkins的IP:端口")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914192206581.png",alt:"image-20210914192206581"}})]),s._v(" "),a("h2",{attrs:{id:"插件安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件安装"}},[s._v("#")]),s._v(" 插件安装")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914192444240.png",alt:"image-20210914192444240"}})]),s._v(" "),a("p",[s._v("搜索插件 ssh（红色代表与jenkins版本不匹配）")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914192559032.png",alt:"image-20210914192559032"}})]),s._v(" "),a("p",[s._v("安装失败重新安装即可！\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914192746394.png",alt:"image-20210914192746394"}})]),s._v(" "),a("p",[s._v("第一行表示之前的安装的日志，等图标变成蓝色代表安装成功")]),s._v(" "),a("h2",{attrs:{id:"安装jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装jdk"}},[s._v("#")]),s._v(" 安装jdk")]),s._v(" "),a("p",[s._v("全局工具配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914194021666.png",alt:"image-20210914194021666"}})]),s._v(" "),a("p",[s._v("点新增JDK，选择版本，登录下oracle账号：2696671285@qq.com Oracle123")]),s._v(" "),a("p",[s._v("账号为up主提供的：https://www.bilibili.com/video/BV1wA411c7aS")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914194420749.png",alt:"image-20210914194420749"}})]),s._v(" "),a("p",[s._v("之后安装maven（如果你的项目不是maven则安装别的插件）")]),s._v(" "),a("h2",{attrs:{id:"安装maven"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装maven"}},[s._v("#")]),s._v(" 安装maven")]),s._v(" "),a("p",[s._v("点击保存")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914195019228.png",alt:"image-20210914195019228"}})]),s._v(" "),a("h2",{attrs:{id:"配置ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置ssh"}},[s._v("#")]),s._v(" 配置ssh")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914195127408.png",alt:"image-20210914195127408"}})]),s._v(" "),a("p",[s._v("搜索 ssh")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914195210660.png",alt:"image-20210914195210660"}})]),s._v(" "),a("p",[s._v("添加ssh的ip和端口 ， 点击添加")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914200115406.png",alt:"image-20210914200115406"}})]),s._v(" "),a("p",[s._v("添加服务器的账号和密码")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914200334869.png",alt:"image-20210914200334869"}})]),s._v(" "),a("p",[s._v("检测连接是否成功")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210914201739436.png",alt:"image-20210914201739436"}})]),s._v(" "),a("h2",{attrs:{id:"构建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建项目"}},[s._v("#")]),s._v(" 构建项目")]),s._v(" "),a("p",[a("strong",[s._v("1、新建项目")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915083151955.png",alt:"image-20210915083151955"}})]),s._v(" "),a("p",[a("strong",[s._v("2、输入任务名称，选择maven")])]),s._v(" "),a("p",[s._v("没有这个项目则下载maven插件（百度即可）")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://plugins.jenkins.io/maven-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("Maven Integration plugin"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915083215160.png",alt:"image-20210915083215160"}})]),s._v(" "),a("p",[a("strong",[s._v("3、设置源码管理")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915083258091.png",alt:"image-20210915083258091"}})]),s._v(" "),a("p",[s._v("记得添加你的gitee账号密码的凭据")]),s._v(" "),a("p",[a("strong",[s._v("4、设置Maven")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915094404192.png",alt:"image-20210915094404192"}})]),s._v(" "),a("p",[s._v("设置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("clean package\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915083519329.png",alt:"image-20210915083519329"}})]),s._v(" "),a("p",[s._v("然后我们先构建下，等待结束")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915083658318.png",alt:"image-20210915083658318"}})]),s._v(" "),a("p",[s._v("但是maven下载依赖速度太慢，我们可以手动关闭构建，把镜像配置为阿里云镜像")]),s._v(" "),a("p",[a("strong",[s._v("5、修改maven配置")])]),s._v(" "),a("p",[s._v("配置文件在你的jenkins数据目录下，例如我的就是：")]),s._v(" "),a("p",[a("code",[s._v("/data/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation")])]),s._v(" "),a("p",[s._v("按照原先方法修改配置文件，把maven远程仓库地址改成阿里云的，这步就不用详细说了吧。")]),s._v(" "),a("p",[a("strong",[s._v("6、重新构建")])]),s._v(" "),a("p",[s._v("点击 立即构建")]),s._v(" "),a("p",[s._v("这次下载速度就快了，构建好的jar包目录在：")]),s._v(" "),a("p",[a("code",[s._v("/data/jenkins_home/workspace/jekins-test/service/target")])]),s._v(" "),a("p",[s._v("jekins-test：是任务名称（我创建任务时，少打了个n）")]),s._v(" "),a("p",[s._v("选中查看控制台输出")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915084209903.png",alt:"image-20210915084209903"}})]),s._v(" "),a("p",[s._v("根据输出就能看到jar的生成目录")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915004357100.png",alt:"image-20210915004357100"}})]),s._v(" "),a("p",[s._v("然后我们启动看看是否正常")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data/jenkins_home/workspace/jekins-test/service/target\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" java -jar service-0.0.1-SNAPSHOT.jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /data/journalism/logs.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"构建后自动部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建后自动部署"}},[s._v("#")]),s._v(" 构建后自动部署")]),s._v(" "),a("p",[s._v("8160是我的springboot服务端口")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v("  -nlp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8160")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("强制杀死某个端口进程命令，关闭jar包")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fuser")]),s._v(" -k -n tcp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8160")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("请先把刚才开启的jar包服务关掉")]),s._v(" "),a("p",[s._v("设置"),a("strong",[s._v("构建环境")]),s._v("配置，构建后操作（构建前就不用设置，测试过，填了就出现错误）")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915131245249.png",alt:"image-20210915131245249"}})]),s._v(" "),a("h2",{attrs:{id:"git提交后自动构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git提交后自动构建"}},[s._v("#")]),s._v(" Git提交后自动构建")]),s._v(" "),a("p",[a("strong",[s._v("1、配置URL构建触发器")])]),s._v(" "),a("p",[s._v("令牌随便输，URL格式就是下面那个英文说明，根据自己的修改")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915101109152.png",alt:"image-20210915101109152"}})]),s._v(" "),a("p",[a("strong",[s._v("2、配置Gitee的WebHooks")])]),s._v(" "),a("p",[s._v("我这里用的Gitee（学校网进GitHub很不稳定，就选择Gitee了）")]),s._v(" "),a("p",[s._v("Gitee项目里设置URL和秘钥")]),s._v(" "),a("p",[s._v("为了安全自己写个服务用来访问触发Jenkins构建的URL，不直接输入之前的URL")]),s._v(" "),a("p",[s._v("例如：我用的php，代码在下方")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915101405242.png",alt:"image-20210915101405242"}})]),s._v(" "),a("p",[a("strong",[s._v("3、添加用户token")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915114229936.png",alt:"image-20210915114229936"}})]),s._v(" "),a("p",[s._v("生成，保存token信息")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915114258223.png",alt:"image-20210915114258223"}})]),s._v(" "),a("p",[s._v("修改url，例如我的，根据自己规则设置")]),s._v(" "),a("p",[a("code",[s._v("http://用户名:token@ip:端口/job/jekins-test/build?token=设置的token")])]),s._v(" "),a("p",[s._v("详情访问："),a("a",{attrs:{href:"https://www.cnblogs.com/tyrionyang/p/8183819.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("通过URL触发Jenkins构建"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("php代码如下（修改URL和秘钥）：")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//接收头信息")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("em_getallheaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreach")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_SERVER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("substr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'HTTP_'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("str_replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ucwords")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("strtolower")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("str_replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'_'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("substr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//发送请求")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("getSslPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_setopt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CURLOPT_SSL_VERIFYPEER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_setopt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CURLOPT_HEADER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_setopt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CURLOPT_FOLLOWLOCATION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_setopt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CURLOPT_URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_setopt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CURLOPT_REFERER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_setopt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CURLOPT_RETURNTRANSFER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("TRUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$url")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"你的URL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$headers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("em_getallheaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//是否等于Gitee设置的秘钥")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'X-Gitee-Token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"你设置的秘钥"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//调用")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSslPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"ok"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"no"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print_r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'X-Gitee-Token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("p",[a("strong",[s._v("4、完成测试")])]),s._v(" "),a("p",[s._v("更改代码，push到Gitee")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915132358946.png",alt:"image-20210915132358946"}})]),s._v(" "),a("p",[s._v("Gitee请求成功")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915132137715.png",alt:"image-20210915132137715"}})]),s._v(" "),a("p",[s._v("jenkins构建成功")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/jenkins/image-20210915132258799.png",alt:"image-20210915132258799"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);