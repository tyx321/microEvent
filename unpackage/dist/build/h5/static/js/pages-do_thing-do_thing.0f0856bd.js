(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-do_thing-do_thing"],{"0143":function(e,t,n){var i=n("e0fe");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("37de53dd",i,!0,{sourceMap:!1,shadowMode:!1})},"74d2":function(e,t,n){"use strict";n.r(t);var i=n("c177"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"980f":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={goodsList:n("5700").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"home"},[n("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:!0}},e._l(e.swippers,(function(e){return n("v-uni-swiper-item",{key:e.id},[n("v-uni-image",{attrs:{src:e.img}})],1)})),1),n("v-uni-view",{staticClass:"nav"},e._l(e.navs,(function(t,i){return n("v-uni-view",{key:i,staticClass:"nav-item",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.iconClick(t.path)}}},[n("v-uni-view",{class:t.icon}),n("v-uni-text",[e._v(e._s(t.title))])],1)})),1),n("v-uni-view",{staticClass:"hot_goods"},[n("v-uni-view",{staticClass:"title"},[e._v("推荐图片")]),n("goods-list",{attrs:{hotGoods:e.hotGoods},on:{goodsHander:function(t){arguments[0]=t=e.$handleEvent(t),e.goodsHander.apply(void 0,arguments)}}})],1)],1)},o=[]},"9fe4":function(e,t,n){"use strict";n.r(t);var i=n("980f"),a=n("74d2");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("d7cd");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"070ed7a6",null,!1,i["a"],r);t["default"]=c.exports},c177:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=i(n("1da1")),o=i(n("5700")),r={data:function(){return{swippers:[],number:1,hotGoods:[],navs:[{icon:"iconfont icon-ziyuan",title:"推荐",path:"/pages/recommend/recommend"},{icon:"iconfont icon-guanyuwomen",title:"我的",path:"/pages/my/my"},{icon:"iconfont icon-tupian",title:"图片",path:"/pages/picture/picture"},{icon:"iconfont icon-shipin",title:"视频",path:"/pages/video/video"}]}},components:{"goods-list":o.default},onLoad:function(){this.getSwipper(),this.getHotGoods()},methods:{getSwipper:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$myRequest({url:"/api/getlunbo"});case 2:n=t.sent,e.swippers=n.data.message;case 4:case"end":return t.stop()}}),t)})))()},getHotGoods:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$myRequest({url:"/api/getgoods?pageindex=1"});case 2:n=t.sent,e.hotGoods=n.data.message;case 4:case"end":return t.stop()}}),t)})))()},iconClick:function(e){uni.navigateTo({url:e})},goodsHander:function(e){uni.navigateTo({url:"/pages/goods-detail/goods-detail?id="+e})}}};t.default=r},d7cd:function(e,t,n){"use strict";var i=n("0143"),a=n.n(i);a.a},e0fe:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home uni-swiper[data-v-070ed7a6]{width:%?750?%;height:%?500?%}.home uni-swiper uni-image[data-v-070ed7a6]{width:100%;height:100%}.home .nav[data-v-070ed7a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.home .nav .nav-item[data-v-070ed7a6]{width:25%;text-align:center}.home .nav .nav-item .text[data-v-070ed7a6]{font-size:%?30?%}.home .nav .nav-item .icon-tupian[data-v-070ed7a6]{font-size:%?45?%}.home .nav .nav-item uni-view[data-v-070ed7a6]{width:%?120?%;height:%?120?%;background-color:#87ceff;border-radius:%?60?%;margin:%?10?% auto;line-height:%?120?%;color:#fff;font-size:%?50?%}.home .hot_goods[data-v-070ed7a6]{background-color:#eee;overflow:hidden;margin-top:10px}.home .hot_goods .title[data-v-070ed7a6]{height:50px;line-height:50px;color:#87ceff;text-align:center;letter-spacing:20px;background-color:#fff;margin:%?7?% 0}',""]),e.exports=t}}]);