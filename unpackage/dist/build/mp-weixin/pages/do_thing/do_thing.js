(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/do_thing/do_thing"],{1739:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return o}));var o={goodsList:function(){return e.e("components/goods-list/goods-list").then(e.bind(null,"5700"))}},i=function(){var n=this,t=n.$createElement;n._self._c},u=[]},"74d2":function(n,t,e){"use strict";e.r(t);var o=e("ddfa"),i=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=i.a},"891d":function(n,t,e){},"895f":function(n,t,e){"use strict";var o=e("891d"),i=e.n(o);i.a},"8f24":function(n,t,e){"use strict";(function(n){e("e243");o(e("66fd"));var t=o(e("9fe4"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"9fe4":function(n,t,e){"use strict";e.r(t);var o=e("1739"),i=e("74d2");for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);e("895f");var r,a=e("f0c5"),c=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=c.exports},ddfa:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(e("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,o,i,u,r){try{var a=n[u](r),c=a.value}catch(s){return void e(s)}a.done?t(c):Promise.resolve(c).then(o,i)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var r=n.apply(t,e);function a(n){u(r,o,i,a,c,"next",n)}function c(n){u(r,o,i,a,c,"throw",n)}a(void 0)}))}}var a=function(){e.e("components/goods-list/goods-list").then(function(){return resolve(e("5700"))}.bind(null,e)).catch(e.oe)},c={data:function(){return{swippers:[],number:1,hotGoods:[],navs:[{icon:"iconfont icon-ziyuan",title:"推荐",path:"/pages/recommend/recommend"},{icon:"iconfont icon-guanyuwomen",title:"我的",path:"/pages/my/my"},{icon:"iconfont icon-tupian",title:"图片",path:"/pages/picture/picture"},{icon:"iconfont icon-shipin",title:"视频",path:"/pages/video/video"}]}},components:{"goods-list":a},onLoad:function(){this.getSwipper(),this.getHotGoods()},methods:{getSwipper:function(){var n=this;return r(o.default.mark((function t(){var e;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$myRequest({url:"/api/getlunbo"});case 2:e=t.sent,n.swippers=e.data.message;case 4:case"end":return t.stop()}}),t)})))()},getHotGoods:function(){var n=this;return r(o.default.mark((function t(){var e;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$myRequest({url:"/api/getgoods?pageindex=1"});case 2:e=t.sent,n.hotGoods=e.data.message;case 4:case"end":return t.stop()}}),t)})))()},iconClick:function(t){n.navigateTo({url:t})},goodsHander:function(t){n.navigateTo({url:"/pages/goods-detail/goods-detail?id="+t})}}};t.default=c}).call(this,e("543d")["default"])}},[["8f24","common/runtime","common/vendor"]]]);