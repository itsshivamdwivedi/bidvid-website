(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7721:function(e,t,a){Promise.resolve().then(a.bind(a,3995))},3995:function(e,t,a){"use strict";function r(e,t,a,r,n,l,s){try{var m=e[l](s),c=m.value}catch(e){a(e);return}m.done?t(c):Promise.resolve(c).then(r,n)}a.r(t),a.d(t,{default:function(){return c}});var n=a(3130),l=a.n(n),s=a(2265);a(5343),a(1682);var m=a(77);function c(){function e(){var t;return t=l().mark(function e(t){var a,r,n,s,m;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=(a=new FormData(t.target)).get("name").trim(),n=a.get("email").trim(),s=a.get("message").trim(),!(!r||!n||!s)){e.next=8;break}return alert("All fields are required."),e.abrupt("return");case 8:var l;if(l=n,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)){e.next=11;break}return alert("Invalid email format."),e.abrupt("return");case 11:if(!(s.length<10)){e.next=14;break}return alert("Message must be at least 10 characters long."),e.abrupt("return");case 14:return e.prev=14,e.next=17,fetch("/api/contact",{method:"POST",body:JSON.stringify({name:r,email:n,message:s}),headers:{"Content-Type":"application/json"}});case 17:if((m=e.sent).ok){e.next=21;break}throw console.log("Error: Could not send email."),Error("Response status: ".concat(m.status));case 21:return e.next=23,m.json();case 23:console.log(e.sent.message),alert("Message successfully sent"),t.target.reset(),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(14),console.error("Submission error:",e.t0),alert("Error, please try resubmitting the form");case 33:case"end":return e.stop()}},e,null,[[14,29]])}),(e=function(){var e=this,a=arguments;return new Promise(function(n,l){var s=t.apply(e,a);function m(e){r(s,n,l,m,c,"next",e)}function c(e){r(s,n,l,m,c,"throw",e)}m(void 0)})}).apply(this,arguments)}return s.createElement("div",{className:"container"},s.createElement("div",{className:"form"},s.createElement("h1",null,s.createElement("b",null,"Contact Us")),s.createElement("form",{onSubmit:function(t){return e.apply(this,arguments)}},s.createElement("div",{className:"inputgroup"},s.createElement("input",{id:"form-name",autoComplete:"name",maxLength:50,name:"name",type:"text",required:!0}),s.createElement("label",{htmlFor:"form-name"},"Enter Your Name*")),s.createElement("div",{className:"inputgroup"},s.createElement("input",{id:"form-email",autoComplete:"email",maxLength:80,name:"email",type:"email",required:!0}),s.createElement("label",{htmlFor:"form-email"},"Enter Your Email*")),s.createElement("div",{className:"inputgroup"},s.createElement("textarea",{id:"form-message",name:"message",rows:5,className:"text-black p-2 border rounded",required:!0}),s.createElement("label",{htmlFor:"form-message"},"Write Your Message*")),s.createElement("button",{className:"button",type:"submit"},"Submit")),s.createElement("div",{className:"call"},s.createElement("span",null,s.createElement("img",{src:"/call1.png",width:"28px",alt:"call"})),s.createElement("span",{className:"number"},"9635462536")),s.createElement("div",{className:"gmail"},s.createElement("span",null,s.createElement("img",{src:"/mail1.png",width:"28px",alt:"email"})),s.createElement("span",{className:"email"},"support.sugarloger@gmail.com"))),s.createElement("div",{className:"image"},s.createElement(m.default,{src:"/contact-robot.png",layout:"fixed",width:700,height:400,alt:"robot"})))}},5343:function(e,t,a){"use strict";a(8909)},1682:function(){}},function(e){e.O(0,[245,356,971,165,744],function(){return e(e.s=7721)}),_N_E=e.O()}]);