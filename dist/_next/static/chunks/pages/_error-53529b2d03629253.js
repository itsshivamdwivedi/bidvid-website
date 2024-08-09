(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820,997],{3997:function(e,t,r){"use strict";var n=r(2092),o=r(3322),i=r(6089),a=r(1961),u=r(7731),c=r(5667);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});var s=r(8754),d=r(5893),l=s._(r(7294)),f=s._(r(6487)),p={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function h(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var y={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},v=function(e){function t(){var e,r;return o(this,t),e=t,r=arguments,e=u(e),a(this,!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){return!1}}()?e.apply(this,r):Reflect.construct(e,r||[],u(this).constructor))}return c(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.statusCode,r=e.withDarkMode,n=this.props.title||p[t]||"An unexpected error has occurred";return(0,d.jsxs)("div",{style:y.error,children:[(0,d.jsx)(f.default,{children:(0,d.jsx)("title",{children:t?t+": "+n:"Application error: a client-side exception has occurred"})}),(0,d.jsxs)("div",{style:y.desc,children:[(0,d.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?(0,d.jsx)("h1",{className:"next-error-h1",style:y.h1,children:t}):null,(0,d.jsx)("div",{style:y.wrap,children:(0,d.jsxs)("h2",{style:y.h2,children:[this.props.title||t?n:(0,d.jsx)(d.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}])}(l.default.Component);v.displayName="ErrorPage",v.getInitialProps=h,v.origGetInitialProps=h,("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3529:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(8754)._(r(7294)).default.createContext({})},1260:function(e,t){"use strict";function r(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},6487:function(e,t,r){"use strict";var n=r(2092),o=r(968);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return h}});var a=r(8754),u=r(1757),c=r(5893),s=u._(r(7294)),d=a._(r(1350)),l=r(3529),f=r(3581),p=r(1260);function h(e){void 0===e&&(e=!1);var t=[(0,c.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,c.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function y(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(1366);var v=["name","httpEquiv","charSet","itemProp"];function b(e,t){var r,n,a,u,c=t.inAmpMode;return e.reduce(y,[]).reverse().concat(h(c).reverse()).filter((r=new Set,n=new Set,a=new Set,u={},function(e){var t=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;var i=e.key.slice(e.key.indexOf("$")+1);r.has(i)?t=!1:r.add(i)}switch(e.type){case"title":case"base":n.has(e.type)?t=!1:n.add(e.type);break;case"meta":for(var c=0,s=v.length;c<s;c++){var d=v[c];if(e.props.hasOwnProperty(d)){if("charSet"===d)a.has(d)?t=!1:a.add(d);else{var l=e.props[d],f=u[d]||new Set;("name"!==d||!o)&&f.has(l)?t=!1:(f.add(l),u[d]=f)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!c&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return n["data-href"]=n.href,n.href=void 0,n["data-optimized-fonts"]=!0,s.default.cloneElement(e,n)}return s.default.cloneElement(e,{key:r})})}var g=function(e){var t=e.children,r=(0,s.useContext)(l.AmpStateContext),n=(0,s.useContext)(f.HeadManagerContext);return(0,c.jsx)(d.default,{reduceComponentsToState:b,headManager:n,inAmpMode:(0,p.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1350:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});var n=r(7294),o=n.useLayoutEffect,i=n.useEffect;function a(e){var t=e.headManager,r=e.reduceComponentsToState;function a(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=a),function(){t&&(t._pendingUpdate=a)}}),i(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},1366:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});var r=function(e){}},1981:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return r(3997)}])}},function(e){e.O(0,[888,774,179],function(){return e(e.s=1981)}),_N_E=e.O()}]);