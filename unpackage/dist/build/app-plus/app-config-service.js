
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/do_thing/do_thing","pages/find_thing/find_thing","pages/record_thing/record_thing","pages/discuss_thing/discuss_thing","pages/my_thing/my_thing","pages/recommend/recommend","pages/my/my","pages/picture/picture","pages/video/video","pages/news-detail/news-detail","pages/goods-detail/goods-detail"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"微事记","navigationBarBackgroundColor":"#87CEFF","backgroundColor":"#87CEFF"},"tabBar":{"list":[{"text":"处事","pagePath":"pages/do_thing/do_thing","iconPath":"static/icon/home.png","selectedIconPath":"static/icon/home-active.png"},{"text":"寻事","pagePath":"pages/find_thing/find_thing","iconPath":"static/icon/search.png","selectedIconPath":"static/icon/search-active.png"},{"text":"记事","pagePath":"pages/record_thing/record_thing","iconPath":"./static/icon/cart.png","selectedIconPath":"static/icon/cart-active.png"},{"text":"论事","pagePath":"pages/discuss_thing/discuss_thing","iconPath":"static/icon/news.png","selectedIconPath":"static/icon/news-active.png"},{"text":"忆事","pagePath":"pages/my_thing/my_thing","iconPath":"static/icon/member.png","selectedIconPath":"static/icon/member-active.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"微事记","compilerVersion":"3.1.18","entryPagePath":"pages/do_thing/do_thing","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/do_thing/do_thing","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/find_thing/find_thing","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/record_thing/record_thing","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/discuss_thing/discuss_thing","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/my_thing/my_thing","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/recommend/recommend","meta":{},"window":{"navigationBarTitleText":"推荐图片","enablePullDownRefresh":true}},{"path":"/pages/my/my","meta":{},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/pages/picture/picture","meta":{},"window":{"navigationBarTitleText":"图片","enablePullDownRefresh":false}},{"path":"/pages/video/video","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/news-detail/news-detail","meta":{},"window":{"navigationBarTitleText":"咨询详情","enablePullDownRefresh":false}},{"path":"/pages/goods-detail/goods-detail","meta":{},"window":{"navigationBarTitleText":"商品详情","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
