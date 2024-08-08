"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{3710:function(e,t,r){var n=r(918);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return o}}),r(3546);var o=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2358:function(e,t,r){var n=r(918);function o(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}}),r(3546),("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8909:function(e,t,r){var n=r(4870),o=r(3197),a=r(918),u=r(6182),i=r(3130),c=r(4051),l=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});var p=r(6499),d=r(7437),h=p._(r(2265)),v=r(4046),m=r(8337),g=r(1670),y=r(1717),b=r(3710),O=r(6249),P=r(6445),j=r(4498),R=r(2358),_=r(3670),w=r(8827),E=new Set;function S(e,t,r,n,o,a){if(a||(0,m.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var u,l=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(E.has(l))return;E.add(l)}(u=c(i.mark(function u(){return i.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!a){u.next=4;break}return u.abrupt("return",e.prefetch(t,o));case 4:return u.abrupt("return",e.prefetch(t,r,n));case 5:case"end":return u.stop()}},u)})),function(){return u.apply(this,arguments)})().catch(function(e){})}}function k(e){return"string"==typeof e?e:(0,g.formatUrl)(e)}var x=h.default.forwardRef(function(e,t){var r,n,i=e.href,c=e.as,s=e.children,p=e.prefetch,g=void 0===p?null:p,E=e.passHref,x=e.replace,M=e.shallow,N=e.scroll,C=e.locale,I=e.onClick,T=e.onMouseEnter,L=e.onTouchStart,U=e.legacyBehavior,A=void 0!==U&&U,D=u(e,l);r=s,A&&("string"==typeof r||"number"==typeof r)&&(r=(0,d.jsx)("a",{children:r}));var W=h.default.useContext(O.RouterContext),K=h.default.useContext(P.AppRouterContext),z=null!=W?W:K,B=!W,q=!1!==g,F=null===g?w.PrefetchKind.AUTO:w.PrefetchKind.FULL,$=h.default.useMemo(function(){if(!W){var e=k(i);return{href:e,as:c?k(c):e}}var t=o((0,v.resolveHref)(W,i,!0),2),r=t[0],n=t[1];return{href:r,as:c?(0,v.resolveHref)(W,c):n||r}},[W,i,c]),Y=$.href,H=$.as,Q=h.default.useRef(Y),V=h.default.useRef(H);A&&(n=h.default.Children.only(r));var Z=A?n&&"object"===a(n)&&n.ref:t,G=o((0,j.useIntersection)({rootMargin:"200px"}),3),J=G[0],X=G[1],ee=G[2],et=h.default.useCallback(function(e){(V.current!==H||Q.current!==Y)&&(ee(),V.current=H,Q.current=Y),J(e),Z&&("function"==typeof Z?Z(e):"object"===a(Z)&&(Z.current=e))},[H,Z,Y,ee,J]);h.default.useEffect(function(){z&&X&&q&&S(z,Y,H,{locale:C},{kind:F},B)},[H,Y,X,C,q,null==W?void 0:W.locale,z,B,F]);var er={ref:et,onClick:function(e){A||"function"!=typeof I||I(e),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,r,n,o,a,u,i,c){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((l=e.currentTarget.getAttribute("target"))&&"_self"!==l||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!c&&!(0,m.isLocalURL)(r)))){e.preventDefault();var l,s=function(){var e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?h.default.startTransition(s):s()}}(e,z,Y,H,x,M,N,C,B)},onMouseEnter:function(e){A||"function"!=typeof T||T(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),z&&(q||!B)&&S(z,Y,H,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:F},B)},onTouchStart:function(e){A||"function"!=typeof L||L(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),z&&(q||!B)&&S(z,Y,H,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:F},B)}};if((0,y.isAbsoluteUrl)(H))er.href=H;else if(!A||E||"a"===n.type&&!("href"in n.props)){var en=void 0!==C?C:null==W?void 0:W.locale,eo=(null==W?void 0:W.isLocaleDomain)&&(0,R.getDomainLocale)(H,en,null==W?void 0:W.locales,null==W?void 0:W.domainLocales);er.href=eo||(0,_.addBasePath)((0,b.addLocale)(H,en,null==W?void 0:W.defaultLocale))}return A?h.default.cloneElement(n,er):(0,d.jsx)("a",f(f(f({},D),er),{},{children:r}))});("function"==typeof t.default||"object"===a(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3680:function(e,t,r){var n=r(918);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return a},requestIdleCallback:function(){return o}});var o="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){var t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},a="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4046:function(e,t,r){var n=r(918);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return p}});var o=r(7063),a=r(1670),u=r(5074),i=r(1717),c=r(3546),l=r(8337),s=r(2838),f=r(2483);function p(e,t,r){var n,p="string"==typeof t?t:(0,a.formatWithValidation)(t),d=p.match(/^[a-zA-Z]{1,}:\/\//),h=d?p.slice(d[0].length):p;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+p+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");var v=(0,i.normalizeRepeatedSlashes)(h);p=(d?d[0]:"")+v}if(!(0,l.isLocalURL)(p))return r?[p]:p;try{n=new URL(p.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){n=new URL("/","http://n")}try{var m=new URL(p,n);m.pathname=(0,c.normalizePathTrailingSlash)(m.pathname);var g="";if((0,s.isDynamicRoute)(m.pathname)&&m.searchParams&&r){var y=(0,o.searchParamsToUrlQuery)(m.searchParams),b=(0,f.interpolateAs)(m.pathname,m.pathname,y),O=b.result,P=b.params;O&&(g=(0,a.formatWithValidation)({pathname:O,hash:m.hash,query:(0,u.omit)(y,P)}))}var j=m.origin===n.origin?m.href.slice(m.origin.length):m.href;return r?[j,g||j]:j}catch(e){return r?[p]:p}}("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4498:function(e,t,r){var n=r(918),o=r(3197);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});var a=r(2265),u=r(3680),i="function"==typeof IntersectionObserver,c=new Map,l=[];function s(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,s=o((0,a.useState)(!1),2),f=s[0],p=s[1],d=(0,a.useRef)(null),h=(0,a.useCallback)(function(e){d.current=e},[]);return(0,a.useEffect)(function(){if(i){if(!n&&!f){var e,o,a,s,h,v=d.current;if(v&&v.tagName)return e=function(e){return e&&p(e)},a=(o=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=c.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},l.push(r),c.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,s=o.observer,(h=o.elements).set(v,e),s.observe(v),function(){if(h.delete(v),s.unobserve(v),0===h.size){s.disconnect(),c.delete(a);var e=l.findIndex(function(e){return e.root===a.root&&e.margin===a.margin});e>-1&&l.splice(e,1)}}}}else if(!f){var m=(0,u.requestIdleCallback)(function(){return p(!0)});return function(){return(0,u.cancelIdleCallback)(m)}}},[n,r,t,f,d.current]),[h,f,(0,a.useCallback)(function(){p(!1)},[])]}("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4894:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});var r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},1670:function(e,t,r){var n=r(918);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return c},urlObjectKeys:function(){return i}});var o=r(3715)._(r(7063)),a=/https?|ftp|gopher|file/;function u(e){var t=e.auth,r=e.hostname,u=e.protocol||"",i=e.pathname||"",c=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),l&&"object"===n(l)&&(l=String(o.urlQueryToSearchParams(l)));var f=e.search||l&&"?"+l||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||a.test(u))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),c&&"#"!==c[0]&&(c="#"+c),f&&"?"!==f[0]&&(f="?"+f),""+u+s+(i=i.replace(/[?#]/g,encodeURIComponent))+(f=f.replace("#","%23"))+c}var i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return u(e)}},2838:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});var n=r(5159),o=r(8535)},2483:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return a}});var n=r(9344),o=r(7114);function a(e,t,r){var a="",u=(0,o.getRouteRegex)(e),i=u.groups,c=(t!==e?(0,n.getRouteMatcher)(u)(t):"")||r;a=e;var l=Object.keys(i);return l.every(function(e){var t=c[e]||"",r=i[e],n=r.repeat,o=r.optional,u="["+(n?"...":"")+e+"]";return o&&(u=(t?"":"/")+"["+u+"]"),n&&!Array.isArray(t)&&(t=[t]),(o||e in c)&&(a=a.replace(u,n?t.map(function(e){return encodeURIComponent(e)}).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:l,result:a}}},8535:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return a}});var n=r(4400),o=/\/\[[^/]+?\](?=\/|$)/;function a(e){return(0,n.isInterceptionRouteAppPath)(e)&&(e=(0,n.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},8337:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});var n=r(1717),o=r(904);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{var t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},5074:function(e,t){function r(e,t){var r={};return Object.keys(e).forEach(function(n){t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},7063:function(e,t,r){var n=r(3197);function o(e){var t={};return e.forEach(function(e,r){void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function a(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function u(e){var t=new URLSearchParams;return Object.entries(e).forEach(function(e){var r=n(e,2),o=r[0],u=r[1];Array.isArray(u)?u.forEach(function(e){return t.append(o,a(e))}):t.set(o,a(u))}),t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(function(t){Array.from(t.keys()).forEach(function(t){return e.delete(t)}),t.forEach(function(t,r){return e.append(r,t)})}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return u}})},9344:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});var n=r(1717);function o(e){var t=e.re,r=e.groups;return function(e){var o=t.exec(e);if(!o)return!1;var a=function(e){try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},u={};return Object.keys(r).forEach(function(e){var t=r[e],n=o[t.pos];void 0!==n&&(u[e]=~n.indexOf("/")?n.split("/").map(function(e){return a(e)}):t.repeat?[a(n)]:a(n))}),u}}},7114:function(e,t,r){var n=r(4870),o=r(3197);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return m},getNamedRouteRegex:function(){return v},getRouteRegex:function(){return p}});var i=r(4400),c=r(4894),l=r(4249);function s(e){var t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));var r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function f(e){var t=(0,l.removeTrailingSlash)(e).slice(1).split("/"),r={},n=1;return{parameterizedRoute:t.map(function(e){var t=i.INTERCEPTION_ROUTE_MARKERS.find(function(t){return e.startsWith(t)}),o=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&o){var a=s(o[1]),u=a.key,l=a.optional,f=a.repeat;return r[u]={pos:n++,repeat:f,optional:l},"/"+(0,c.escapeStringRegexp)(t)+"([^/]+?)"}if(!o)return"/"+(0,c.escapeStringRegexp)(e);var p=s(o[1]),d=p.key,h=p.repeat,v=p.optional;return r[d]={pos:n++,repeat:h,optional:v},h?v?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}).join(""),groups:r}}function p(e){var t=f(e),r=t.parameterizedRoute,n=t.groups;return{re:RegExp("^"+r+"(?:/)?$"),groups:n}}function d(e){var t=e.interceptionMarker,r=e.getSafeRouteKey,n=e.segment,o=e.routeKeys,a=e.keyPrefix,u=s(n),i=u.key,l=u.optional,f=u.repeat,p=i.replace(/\W/g,"");a&&(p=""+a+p);var d=!1;(0===p.length||p.length>30)&&(d=!0),isNaN(parseInt(p.slice(0,1)))||(d=!0),d&&(p=r()),a?o[p]=""+a+i:o[p]=i;var h=t?(0,c.escapeStringRegexp)(t):"";return f?l?"(?:/"+h+"(?<"+p+">.+?))?":"/"+h+"(?<"+p+">.+?)":"/"+h+"(?<"+p+">[^/]+?)"}function h(e,t){var r,n=(0,l.removeTrailingSlash)(e).slice(1).split("/"),a=(r=0,function(){for(var e="",t=++r;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:n.map(function(e){var r=i.INTERCEPTION_ROUTE_MARKERS.some(function(t){return e.startsWith(t)}),n=e.match(/\[((?:\[.*\])|.+)\]/);return r&&n?d({getSafeRouteKey:a,interceptionMarker:o(e.split(n[0]),1)[0],segment:n[1],routeKeys:u,keyPrefix:t?"nxtI":void 0}):n?d({getSafeRouteKey:a,segment:n[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,c.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function v(e,t){var r=h(e,t);return u(u({},p(e)),{},{namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys})}function m(e,t){var r=f(e).parameterizedRoute,n=t.catchAll,o=void 0===n||n;return"/"===r?{namedRegex:"^/"+(o?".*":"")+"$"}:{namedRegex:"^"+h(e,!1).namedParameterizedRoute+(o?"(?:(/.*)?)":"")+"$"}}},5159:function(e,t,r){var n=r(9906),o=r(1713),a=r(8534);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return i}});var u=function(){function e(){o(this,e),this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}return a(e,[{key:"insert",value:function(e){this._insert(e.split("/").filter(Boolean),[],!1)}},{key:"smoosh",value:function(){return this._smoosh()}},{key:"_smoosh",value:function(e){var t=this;void 0===e&&(e="/");var r=n(this.children.keys()).sort();null!==this.slugName&&r.splice(r.indexOf("[]"),1),null!==this.restSlugName&&r.splice(r.indexOf("[...]"),1),null!==this.optionalRestSlugName&&r.splice(r.indexOf("[[...]]"),1);var o=r.map(function(r){return t.children.get(r)._smoosh(""+e+r+"/")}).reduce(function(e,t){return[].concat(n(e),n(t))},[]);if(null!==this.slugName&&o.push.apply(o,n(this.children.get("[]")._smoosh(e+"["+this.slugName+"]/"))),!this.placeholder){var a="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+a+'" and "'+a+"[[..."+this.optionalRestSlugName+']]").');o.unshift(a)}return null!==this.restSlugName&&o.push.apply(o,n(this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/"))),null!==this.optionalRestSlugName&&o.push.apply(o,n(this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/"))),o}},{key:"_insert",value:function(t,r,n){if(0===t.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");var o=t[0];if(o.startsWith("[")&&o.endsWith("]")){var a=function(e,t){if(null!==e&&e!==t)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+t+"').");r.forEach(function(e){if(e===t)throw Error('You cannot have the same slug name "'+t+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+t+'" differ only by non-word symbols within a single dynamic path')}),r.push(t)},u=o.slice(1,-1),i=!1;if(u.startsWith("[")&&u.endsWith("]")&&(u=u.slice(1,-1),i=!0),u.startsWith("...")&&(u=u.substring(3),n=!0),u.startsWith("[")||u.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+u+"').");if(u.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+u+"').");if(n){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+t[0]+'" ).');a(this.optionalRestSlugName,u),this.optionalRestSlugName=u,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+t[0]+'").');a(this.restSlugName,u),this.restSlugName=u,o="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+t[0]+'").');a(this.slugName,u),this.slugName=u,o="[]"}}this.children.has(o)||this.children.set(o,new e),this.children.get(o)._insert(t.slice(1),r,n)}}])}();function i(e){var t=new u;return e.forEach(function(e){return t.insert(e)}),t.smoosh()}},1717:function(e,t,r){var n=r(3130),o=r(8534),a=r(1713),u=r(8711),i=r(5954),c=r(773),l=r(6847),s=r(4051);function f(e,t,r){return t=i(t),u(e,!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){return!1}}()?t.apply(e,r):Reflect.construct(t,r||[],i(e).constructor))}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return w},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return k},NormalizeError:function(){return E},PageNotFoundError:function(){return S},SP:function(){return R},ST:function(){return _},WEB_VITALS:function(){return p},execOnce:function(){return d},getDisplayName:function(){return y},getLocationOrigin:function(){return m},getURL:function(){return g},isAbsoluteUrl:function(){return v},isResSent:function(){return b},loadGetInitialProps:function(){return P},normalizeRepeatedSlashes:function(){return O},stringifyError:function(){return M}});var p=["CLS","FCP","FID","INP","LCP","TTFB"];function d(e){var t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e.apply(void 0,o)),t}}var h=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,v=function(e){return h.test(e)};function m(){var e=window.location,t=e.protocol,r=e.hostname,n=e.port;return t+"//"+r+(n?":"+n:"")}function g(){var e=window.location.href,t=m();return e.substring(t.length)}function y(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function b(e){return e.finished||e.headersSent}function O(e){var t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}function P(e,t){return j.apply(this,arguments)}function j(){return(j=s(n.mark(function e(t,r){var o,a;return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.next=4;break;case 4:if(o=r.res||r.ctx&&r.ctx.res,t.getInitialProps){e.next=12;break}if(!(r.ctx&&r.Component)){e.next=11;break}return e.next=9,P(r.Component,r.ctx);case 9:return e.t0=e.sent,e.abrupt("return",{pageProps:e.t0});case 11:return e.abrupt("return",{});case 12:return e.next=14,t.getInitialProps(r);case 14:if(a=e.sent,!(o&&b(o))){e.next=17;break}return e.abrupt("return",a);case 17:if(a){e.next=20;break}throw Error('"'+y(t)+'.getInitialProps()" should resolve to an object. But found "'+a+'" instead.');case 20:return e.abrupt("return",a);case 22:case"end":return e.stop()}},e)}))).apply(this,arguments)}var R="undefined"!=typeof performance,_=R&&["mark","measure","getEntriesByName"].every(function(e){return"function"==typeof performance[e]}),w=function(e){function t(){return a(this,t),f(this,t,arguments)}return c(t,e),o(t)}(l(Error)),E=function(e){function t(){return a(this,t),f(this,t,arguments)}return c(t,e),o(t)}(l(Error)),S=function(e){function t(e){var r;return a(this,t),(r=f(this,t)).code="ENOENT",r.name="PageNotFoundError",r.message="Cannot find module for page: "+e,r}return c(t,e),o(t)}(l(Error)),k=function(e){function t(e,r){var n;return a(this,t),(n=f(this,t)).message="Failed to load static file for page: "+e+" "+r,n}return c(t,e),o(t)}(l(Error)),x=function(e){function t(){var e;return a(this,t),(e=f(this,t)).code="ENOENT",e.message="Cannot find the middleware module",e}return c(t,e),o(t)}(l(Error));function M(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);