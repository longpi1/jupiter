(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{284:function(t,s,a){t.exports=a.p+"assets/img/access_token_create_1.18b2e587.png"},285:function(t,s,a){t.exports=a.p+"assets/img/access_token_create_2.cbd6f155.png"},286:function(t,s,a){t.exports=a.p+"assets/img/access_token_create_3.25a5802e.png"},364:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_12-1-api-授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-api-授权"}},[t._v("#")]),t._v(" 12.1 API 授权")]),t._v(" "),s("h2",{attrs:{id:"_12-1-1-创建一个-access-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-1-创建一个-access-token"}},[t._v("#")]),t._v(" 12.1.1 创建一个 Access Token")]),t._v(" "),s("ol",[s("li",[t._v("打开后台菜单: 系统设置 / AccessTokens，点击新建按钮")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(284),alt:"access_token"}})]),t._v(" "),s("ol",[s("li",[t._v("输入授权应用名称")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(285),alt:"access_token"}})]),t._v(" "),s("ol",[s("li",[t._v("创建成功后，点击小眼睛图表即可看到AppSecret")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(286),alt:"access_token"}})]),t._v(" "),s("h2",{attrs:{id:"_12-1-2-访问open-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-2-访问open-api"}},[t._v("#")]),t._v(" 12.1.2 访问Open API")]),t._v(" "),s("h3",{attrs:{id:"公共参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共参数"}},[t._v("#")]),t._v(" 公共参数")]),t._v(" "),s("p",[t._v("所有Open API都需要携带如下公共参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("app_id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("在Juno后台申请的App ID")])]),t._v(" "),s("tr",[s("td",[t._v("timestamp")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("当前Unix时间戳(秒)，如果Juno服务端收到过期的时间戳，授权失败")])]),t._v(" "),s("tr",[s("td",[t._v("nonce_str")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("随机字符串，16位")])]),t._v(" "),s("tr",[s("td",[t._v("sign")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("签名")])])])]),t._v(" "),s("p",[t._v("如果是"),s("code",[t._v("POST")]),t._v("请求，那么以上参数在 "),s("code",[t._v("Body")]),t._v(" 中，为 "),s("code",[t._v("JSON")]),t._v(" 请求体的字段。如果是 "),s("code",[t._v("GET")]),t._v(" 请求，以上参数为 "),s("code",[t._v("Query")]),t._v(" 参数。")]),t._v(" "),s("h3",{attrs:{id:"签名方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名方法"}},[t._v("#")]),t._v(" 签名方法")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("拼接签名原文")]),t._v(" "),s("p",[t._v("签名原文由 "),s("code",[t._v("app_id")]),t._v("、"),s("code",[t._v("nonce_str")]),t._v("、"),s("code",[t._v("secret")]),t._v(" 、 "),s("code",[t._v("timstamp")]),t._v(" 组成，拼接方式如下:")]),t._v(" "),s("p",[s("code",[t._v("plainText = app_id + nonce_str+ secret + timestamp")])])]),t._v(" "),s("li",[s("p",[t._v("计算签名")]),t._v(" "),s("p",[t._v("目前使用的签名算法是 "),s("code",[t._v("md5")]),t._v("，对签名原文使用md5进行签名即可:")]),t._v(" "),s("p",[s("code",[t._v("sign = md5(plainText)")])])])]),t._v(" "),s("p",[t._v("Go 语言示例：")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//计算签名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//md5(appId + nonceStr + secret + timestamp)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("openAuthSign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nonceStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secret "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timestamp "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sign "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   plainText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sprintf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s%s%s%d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" appId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nonceStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Md5Str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plainText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);