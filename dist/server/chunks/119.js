exports.id=119,exports.ids=[119],exports.modules={4804:(e,t,r)=>{Promise.resolve().then(r.bind(r,9482))},5924:(e,t,r)=>{Promise.resolve().then(r.bind(r,7976)),Promise.resolve().then(r.t.bind(r,9591,23))},1864:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1919,23)),Promise.resolve().then(r.t.bind(r,9351,23)),Promise.resolve().then(r.t.bind(r,1406,23)),Promise.resolve().then(r.t.bind(r,5120,23)),Promise.resolve().then(r.t.bind(r,3934,23)),Promise.resolve().then(r.t.bind(r,7884,23))},6676:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var n=r(1694),o=r.n(n);r(6346);var a=r(5966);r(5996);var i=r(7976);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){c=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function m(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{m({},"")}catch(e){m=function(e,t,r){return e[t]=r}}function f(t,r,n,a){var i,l,c=Object.create((r&&r.prototype instanceof y?r:y).prototype);return o(c,"_invoke",{value:(i=new k(a||[]),l=p,function(r,o){if(l===d)throw Error("Generator is already running");if(l===v){if("throw"===r)throw o;return{value:e,done:!0}}for(i.method=r,i.arg=o;;){var a=i.delegate;if(a){var c=function t(r,n){var o=n.method,a=r.iterator[o];if(a===e)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g;var i=h(a,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var l=i.arg;return l?l.done?(n[r.resultName]=l.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):l:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,i);if(c){if(c===g)continue;return c}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(l===p)throw l=v,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);l=d;var u=h(t,n,i);if("normal"===u.type){if(l=i.done?v:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:i.done}}"throw"===u.type&&(l=v,i.method="throw",i.arg=u.arg)}})}),c}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p="suspendedStart",d="executing",v="completed",g={};function y(){}function b(){}function E(){}var w={};m(w,i,function(){return this});var x=Object.getPrototypeOf,P=x&&x(x(_([])));P&&P!==r&&n.call(P,i)&&(w=P);var O=E.prototype=y.prototype=Object.create(w);function j(e){["next","throw","return"].forEach(function(t){m(e,t,function(e){return this._invoke(t,e)})})}function L(e,t){var r;o(this,"_invoke",{value:function(o,a){function i(){return new t(function(r,i){!function r(o,a,i,c){var u=h(e[o],e,a);if("throw"!==u.type){var s=u.arg,m=s.value;return m&&"object"==l(m)&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(u.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}})}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function _(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw TypeError(l(t)+" is not iterable")}return b.prototype=E,o(O,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:b,configurable:!0}),b.displayName=m(E,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,m(e,s,"GeneratorFunction")),e.prototype=Object.create(O),e},t.awrap=function(e){return{__await:e}},j(L.prototype),m(L.prototype,u,function(){return this}),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},j(O),m(O,s,"Generator"),m(O,i,function(){return this}),m(O,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return l.type="throw",l.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function u(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){r(e);return}l.done?t(c):Promise.resolve(c).then(n,o)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){f(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e,t,r){var n;return(n=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==l(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===l(n)?n:String(n))in e)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(){var e=(0,n.useState)({name:"",number:"",message:""}),t=e[0],r=e[1],l=(0,n.useState)(!1),s=l[0];l[1];var h=(0,n.useState)(!1),p=h[0],d=h[1],v=function(e){var n=e.target,o=n.name,a=n.value;r(m(m({},t),{},f({},o,a)))};function g(){var e;return e=c().mark(function e(n){var l,u,s,m;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),l=t.name,u=t.number,s=t.message,!(!l.trim()||!u.trim()||!s.trim())){e.next=5;break}return alert("All fields are required."),e.abrupt("return");case 5:return e.prev=5,e.next=8,fetch("/api/contact",{method:"POST",body:JSON.stringify({name:l,number:u,message:s}),headers:{"Content-Type":"application/json"}});case 8:if((m=e.sent).ok){e.next=12;break}throw console.log("Error: Could not send message."),Error("Response status: ".concat(m.status));case 12:return e.next=14,m.json();case 14:console.log(e.sent.message),d(!0),(0,a.Am)(o().createElement("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}},o().createElement(i.default,{src:"/successImage.svg",alt:"Success",width:45,height:45,style:{marginBottom:"16px"}}),o().createElement("div",null,o().createElement("p",{style:{fontFamily:"Poppins",fontWeight:600,fontSize:"20px",lineHeight:"29px",color:"rgba(10, 10, 10, 1)",margin:0}},"Thank you for filling the form"),o().createElement("p",{style:{fontFamily:"Poppins",fontWeight:400,fontSize:"16px",lineHeight:"23.2px",color:"rgba(0, 0, 0, 0.8)",margin:0}},"Our team will connect with you shortly."))),{closeButton:!0,autoClose:!1,position:"top-center",onClose:function(){return d(!1)}}),r({name:"",number:"",message:""}),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(5),console.error("Submission error:",e.t0),alert("Error, please try resubmitting the form");case 25:case"end":return e.stop()}},e,null,[[5,21]])}),(g=function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){u(a,n,o,i,l,"next",e)}function l(e){u(a,n,o,i,l,"throw",e)}i(void 0)})}).apply(this,arguments)}return o().createElement("div",{className:"container ".concat(p?"darkened":""),id:"contact-us"},o().createElement("div",{className:"form"},o().createElement("h1",null,o().createElement("b",null,"Contact Us")),o().createElement("form",{onSubmit:function(e){return g.apply(this,arguments)}},o().createElement("div",{className:"inputgroup"},o().createElement("input",{id:"form-name",autoComplete:"name",maxLength:50,name:"name",type:"text",value:t.name,onChange:v,onBlur:function(e){var n=e.target.value;/^[a-zA-Z\s]*$/.test(n)||(alert("Name should contain only alphabets"),r(m(m({},t),{},{name:""})))},required:!0}),o().createElement("label",{htmlFor:"form-name"},"Enter Your Name*")),o().createElement("div",{className:"inputgroup"},o().createElement("input",{id:"form-number",autoComplete:"tel",maxLength:15,name:"number",type:"tel",value:t.number,onChange:v,onBlur:function(e){var n=e.target.value;/^[0-9]*$/.test(n)||(alert("Please enter numbers only"),r(m(m({},t),{},{number:""})))},required:!0}),o().createElement("label",{htmlFor:"form-number"},"Enter Your Number*")),o().createElement("div",{className:"inputgroup"},o().createElement("textarea",{id:"form-message",name:"message",rows:5,value:t.message,onChange:v,required:!0}),o().createElement("label",{htmlFor:"form-message"},"Write Your Message")),o().createElement("button",{className:"button",type:"submit",disabled:!s,style:{backgroundColor:s?"darkblue":"grey"}},"Submit")),o().createElement("div",{className:"call"},o().createElement("span",null,o().createElement("img",{src:"/call1.png",width:"28px",alt:"call"})),o().createElement("span",{className:"number"},o().createElement("a",{href:"tel:9930451078"},"9930451078"))),o().createElement("div",{className:"gmail"},o().createElement("span",null,o().createElement("img",{src:"/mail1.png",width:"28px",alt:"email"})),o().createElement("span",{className:"email"},o().createElement("a",{href:"mailto:support.sugarlogger@gmail.com",target:"_blank"},"support.sugarlogger@gmail.com")))),o().createElement("div",{className:"image"},o().createElement(i.default,{src:"/contact-robot.png",layout:"fixed",width:700,height:400,alt:"robot"})),o().createElement(a.Ix,null))}},9482:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(1694),o=r.n(n);let a=function(e){return e.errorCode,o().createElement("h1",null,"Unexpected Error")}},2445:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(7120),o=r(4599),a=r(8300),i=r.n(a);r(8102);let l=function(){return i().createElement("nav",{className:" p-4 flex justify-between items-center nav-bar"},i().createElement("div",{className:"flex items-center navbar-mob-image "},i().createElement("a",{href:"/"},i().createElement(n.ZP,{src:"/bidvid_logo.svg",alt:"BidVid Logo",width:126,height:52}))),i().createElement("div",{className:"space-x-4 lg:pr-6"},i().createElement(o.default,{href:"#contact-us",legacyBehavior:!0},i().createElement("a",{className:"hidden md:inline text-gray-800 hover:text-blue-600"},"Contact Us")),i().createElement(o.default,{href:"/about",legacyBehavior:!0},i().createElement("a",{className:"text-gray-800 hover:text-blue-600"},"About Us"))))}},7713:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>l});var n=r(7866);let o=(0,n.createProxy)(String.raw`/workspaces/bidvid-website/app/error.js`),{__esModule:a,$$typeof:i}=o;o.default;let l=(0,n.createProxy)(String.raw`/workspaces/bidvid-website/app/error.js#default`)},8151:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,metadata:()=>i}),r(413);var n=r(8300),o=r.n(n),a=r(2445),i={title:"BidVid",description:"Revolutionizing Bidding with AI-Powered Optimization"};function l(e){var t=e.children;return o().createElement("html",{lang:"en"},o().createElement("body",null,o().createElement(a.Z,null),t))}},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(8008);let o=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},6346:()=>{},8102:()=>{},413:()=>{}};