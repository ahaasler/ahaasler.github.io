_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var s=d[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},B5Ud:function(e,t,n){"use strict";var r=n("vJKn"),o=n("/GRZ"),a=n("i2R6"),i=n("48fX"),c=n("tCBg"),u=n("T0f4"),s=n("qVT1");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var l=n("AroE");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=y,t.default=void 0;var d=l(n("q1tI")),p=n("g/15");function h(e){return m.apply(this,arguments)}function m(){return(m=s(r.mark((function e(t){var n,o,a;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,p.loadGetInitialProps)(n,o);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=p.AppInitialProps,t.NextWebVitalsMetric=p.NextWebVitalsMetric;var v=function(e){i(n,e);var t=f(n);function n(){return o(this,n),t.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,a=e.__N_SSP;return d.default.createElement(n,Object.assign({},r,o||a?{}:{url:y(t)}))}}]),n}(d.default.Component);function y(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=v,v.origGetInitialProps=h,v.getInitialProps=h},RDVA:function(e,t,n){},Rpix:function(e,t,n){},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},cha2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T})),n.d(t,"EditLink",(function(){return A})),n.d(t,"ThemePicker",(function(){return R}));var r=n("o0o1"),o=n.n(r);function a(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?c(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=n("nKUr"),h=n("8Bbg"),m=n.n(h),v=n("q1tI"),y=n.n(v),b=n("/zyf"),g=n("uUhf"),w=n("8Kt/"),O=n.n(w),j=Object(v.createContext)({setTheme:function(e){},themes:[]}),x=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,r=void 0!==n&&n,o=e.enableSystem,a=void 0===o||o,i=e.storageKey,c=void 0===i?"theme":i,u=e.themes,s=void 0===u?["light","dark"]:u,f=e.defaultTheme,l=void 0===f?"light":f,d=e.attribute,p=void 0===d?"data-theme":d,h=e.value,m=e.children,b=Object(v.useState)((function(){return S(c)})),g=b[0],w=b[1],O=Object(v.useState)((function(){return S(c)})),x=O[0],k=O[1],C=h?Object.values(h):s,M=Object(v.useCallback)((function(e,t){void 0===t&&(t=!0);var n=(null==h?void 0:h[e])||e,o=r?P():null;t&&localStorage.setItem(c,e);var a,i=document.documentElement;"class"===p?((a=i.classList).remove.apply(a,C),i.classList.add(n)):i.setAttribute(p,n),null==o||o()}),[]),T=Object(v.useCallback)((function(e){var t=e.matches?"dark":"light";k(t),"system"===g&&M(t,!1)}),[g]);Object(v.useEffect)((function(){if(a){var e=window.matchMedia("(prefers-color-scheme: dark)");return e.addListener(T),T(e),function(){return e.removeListener(T)}}}),[T]);var E=Object(v.useCallback)((function(e){t||(M(e),w(e))}),[]);return Object(v.useEffect)((function(){var e=function(e){e.key===c&&E(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[]),y.a.createElement(j.Provider,{value:{theme:g,setTheme:E,forcedTheme:t,resolvedTheme:"system"===g?x:g,themes:a?[].concat(s,["system"]):s,systemTheme:a?x:void 0}},y.a.createElement(_,{forcedTheme:t,storageKey:c,attribute:p,value:h,enableSystem:a,defaultTheme:l,attrs:C}),m)},_=Object(v.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,r=e.attribute,o=e.enableSystem,a=e.defaultTheme,i=e.value,c="class"===r?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",u=function(e,t){e=(null==i?void 0:i[e])||e;var n=t?e:"'"+e+"'";return"class"===r?"d.add("+n+")":"d.setAttribute('"+r+"', "+n+")"};return y.a.createElement(O.a,null,y.a.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+u(t)+"}()"}}:o?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+c+"var e=localStorage.getItem('"+n+"');if(!e)return localStorage.setItem('"+n+"','"+a+"'),"+u(a)+';if("system"===e){var t="(prefers-color-scheme: dark)",m=window.matchMedia(t);m.media!==t||m.matches?'+u("dark")+":"+u("light")+"}else "+(i?"var x="+JSON.stringify(i)+";":"")+u(i?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+c+'var t=localStorage.getItem("'+n+'");if(!t)return localStorage.setItem("'+n+'","'+a+'"),'+u(a)+";"+(i?"var x="+JSON.stringify(i)+";":"")+u(i?"x[t]":"t",!0)+"}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),S=function(e){if("undefined"!=typeof window)return localStorage.getItem(e)||void 0},P=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(e),document.head.removeChild(e)}};n("Rpix"),n("RDVA"),n("sCm1");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var t,n,r,o=M(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),d(c(t=o.call(this,e)),"cms",void 0);var n=new g.GithubClient({proxy:"/api/proxy-github",authCallbackRoute:"/api/create-github-access-token",clientId:"<githubClientId>",baseRepoFullName:"ahaasler/ahaasler.github.io",baseBranch:"next.js"});return t.cms=new b.TinaCMS({enabled:!!e.pageProps.preview,apis:{github:n},media:new g.GithubMediaStore(n),sidebar:e.pageProps.preview,toolbar:e.pageProps.preview}),t}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return Object(p.jsx)(x,{enableSystem:!0,defaultTheme:"system",children:Object(p.jsx)(b.TinaProvider,{cms:this.cms,children:Object(p.jsxs)(g.TinacmsGithubProvider,{onLogin:E,onLogout:I,error:n.error,children:[Object(p.jsx)(A,{cms:this.cms}),Object(p.jsx)(R,{}),Object(p.jsx)(t,C({},n))]})})})}}])&&i(t.prototype,n),r&&i(t,r),a}(m.a),E=function(){var e,t=(e=o.a.mark((function e(){var t,n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("tinacms-github-token")||null,n=new Headers,t&&n.append("Authorization","Bearer "+t),e.next=5,fetch("/api/preview",{headers:n});case 5:return r=e.sent,e.next=8,r.json();case 8:if(a=e.sent,200!=r.status){e.next=13;break}window.location.href=window.location.pathname,e.next=14;break;case 13:throw new Error(a.message);case 14:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,u,"next",e)}function u(e){a(i,r,o,c,u,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}(),I=function(){return fetch("/api/reset-preview").then((function(){window.location.reload()}))},A=function(e){var t=e.cms;return Object(p.jsx)("button",{className:"m-2 bg-accent-primary hover:bg-accent-secondary text-white font-bold py-2 px-4 rounded",onClick:function(){return t.toggle()},children:t.enabled?"Exit Edit Mode":"Edit This Site"})},R=function(){var e=Object(v.useState)(!1),t=e[0],n=e[1],r=Object(v.useContext)(j),o=r.themes,a=r.theme,i=r.setTheme;return Object(v.useEffect)((function(){return n(!0)}),[]),t?Object(p.jsxs)("label",{className:"m-2",children:[Object(p.jsx)("span",{className:"sr-only",children:"Theme"}),Object(p.jsx)("select",{className:"form-select bg-bg-primary py-2 px-4 rounded w-32",value:a,onChange:function(e){return i(e.target.value)},children:o.map((function(e){return Object(p.jsx)("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e)}))})]}):Object(p.jsx)("select",{disabled:!0,children:Object(p.jsx)("option",{children:"Theme not loaded"})})}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},o0o1:function(e,t,n){e.exports=n("ls82")},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},sCm1:function(e,t,n){}},[[0,0,1,3,4,2,5]]]);