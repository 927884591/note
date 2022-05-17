(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{456:function(t,s,e){"use strict";e.r(s);var a=e(62),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"vite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[t._v("#")]),t._v(" vite")]),t._v(" "),e("h3",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("我们为什么需要用vite，vite能给我带来什么？")]),t._v(" "),e("p",[t._v("浏览器也支持es模块化打包，但有两个弊端")]),t._v(" "),e("ol",[e("li",[t._v("不能打包除了js，css，html以外的其他格式。")]),t._v(" "),e("li",[t._v("如果一个模块依赖了别的模块，模块与模块的依赖越多发送的请求就越多，而我们只想要模块的某个功能。")])]),t._v(" "),e("h3",{attrs:{id:"vite对vue文件的支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite对vue文件的支持"}},[t._v("#")]),t._v(" vite对vue文件的支持")]),t._v(" "),e("p",[t._v("需要对vite单独配置，vite配置需要安装两个插件")]),t._v(" "),e("ol",[e("li",[t._v("@vitejs/plugin-vue")]),t._v(" "),e("li",[t._v("@vue/compiler-sfc    //编译vue文件的一个插件")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//vite.config.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vitejs/plugin-vue"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因为vite在node环境中我们需要使用common.js的导入方式")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是一个函数")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("h3",{attrs:{id:"杂项知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#杂项知识"}},[t._v("#")]),t._v(" 杂项知识")]),t._v(" "),e("ol",[e("li",[t._v("用vite打包后，类似于ts，less等文件后缀你发现还是原来的后缀，但浏览器是怎么解析的呢？vite本质上是一个本地服务器，而这个服务器接收到浏览器发过来的文件请求，会把ts或less的文件里的内容转化成es6+的js语法，再转发给浏览器，这样浏览器就可以解析了")]),t._v(" "),e("li",[t._v("vite会预打包，在node_modules/.vite文件中，这也是vite打包快的原因之一")])])])}),[],!1,null,null,null);s.default=n.exports}}]);