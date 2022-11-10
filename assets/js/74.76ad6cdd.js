(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{418:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_6-7-client-gorm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-7-client-gorm"}},[t._v("#")]),t._v(" 6.7 Client gorm")]),t._v(" "),e("h2",{attrs:{id:"范式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#范式"}},[t._v("#")]),t._v(" 范式")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/douyu/jupiter/tree/master/client/gorm/config.go",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考地址"),e("OutboundLink")],1)]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("dsn")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("数据库地址")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("debug")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否debug")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("maxIdleConns")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最大空闲连接数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("MaxOpenConns")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最大活动连接数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("connMaxLifetime")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("time")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("连接的最大存活时间")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("level")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("创建连接的错误级别，=panic时，如果创建失败，立即panic")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("slowThreshold")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("time")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("慢日志阈值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("dialTimeout")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("time")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("拨超时时间")])])])]),t._v(" "),e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("div",{staticClass:"language-toml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("jupiter.mysql.test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("connMaxLifetime")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300s"')]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("debug")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("dsn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root:test@tcp(127.0.0.1:3306)/test?charset=utf8&parseTime=True&loc=Local&readTimeout=1s&timeout=1s&writeTimeout=3s"')]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("level")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"panic"')]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("maxIdleConns")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("maxOpenConns")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);