(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{2870:function(e,t,r){Promise.resolve().then(r.bind(r,8412))},8412:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(2929),a=r(656),o=r(3130),l=r.n(o),c=r(2265);r(1682);var s=r(2909);r(4193);var m=r(1136);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(){var e=(0,c.useState)({name:"",number:"",message:""}),t=e[0],r=e[1],o=(0,c.useState)(!1),u=o[0],p=o[1],f=(0,c.useState)(!1),d=f[0],g=f[1];(0,c.useEffect)(function(){var e=t.name,r=t.number,n=t.message;e.trim()&&r.trim()&&n.trim()?p(!0):p(!1)},[t]),(0,c.useEffect)(function(){var e=document.querySelector("body"),t=document.createElement("div");if(d)t.className="darkened-overlay",e.appendChild(t),document.body.style.overflow="hidden";else{var r=document.querySelector(".darkened-overlay");r&&e.removeChild(r),document.body.style.overflow="auto"}return function(){var t=document.querySelector(".darkened-overlay");t&&e.removeChild(t)}},[d]);var b=function(e){var n=e.target,o=n.name,l=n.value;r(i(i({},t),{},(0,a.Z)({},o,l)))};function h(){return(h=(0,n.Z)(l().mark(function e(n){var a,o,u,i;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=t.name,o=t.number,u=t.message,!(!a.trim()||!o.trim()||!u.trim())){e.next=5;break}return alert("All fields are required."),e.abrupt("return");case 5:return e.prev=5,e.next=8,fetch("/api/contact",{method:"POST",body:JSON.stringify({name:a,number:o,message:u}),headers:{"Content-Type":"application/json"}});case 8:if((i=e.sent).ok){e.next=12;break}throw console.log("Error: Could not send message."),Error("Response status: ".concat(i.status));case 12:return e.next=14,i.json();case 14:console.log(e.sent.message),g(!0),(0,s.Am)(c.createElement("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}},c.createElement(m.default,{src:"/successImage.svg",alt:"Success",width:45,height:45,style:{marginBottom:"16px"}}),c.createElement("div",null,c.createElement("p",{style:{fontFamily:"Poppins",fontWeight:600,fontSize:"20px",lineHeight:"29px",color:"rgba(10, 10, 10, 1)",margin:0}},"Thank you for filling the form"),c.createElement("p",{style:{fontFamily:"Poppins",fontWeight:400,fontSize:"16px",lineHeight:"23.2px",color:"rgba(0, 0, 0, 0.8)",margin:0}},"Our team will connect with you shortly."))),{closeButton:!0,autoClose:!1,position:"top-center",onClose:function(){return g(!1)}}),r({name:"",number:"",message:""}),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(5),console.error("Submission error:",e.t0),alert("Error, please try resubmitting the form");case 25:case"end":return e.stop()}},e,null,[[5,21]])}))).apply(this,arguments)}return(0,c.useEffect)(function(){d?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[d]),c.createElement("div",{className:"container ".concat(d?"darkened":""),id:"contact-us"},c.createElement("div",{className:"form"},c.createElement("h1",null,c.createElement("b",null,"Contact Us")),c.createElement("form",{onSubmit:function(e){return h.apply(this,arguments)}},c.createElement("div",{className:"inputgroup"},c.createElement("input",{id:"form-name",autoComplete:"name",maxLength:50,name:"name",type:"text",value:t.name,onChange:b,onBlur:function(e){var n=e.target.value;/^[a-zA-Z\s]*$/.test(n)||(alert("Name should contain only alphabets"),r(i(i({},t),{},{name:""})))},required:!0}),c.createElement("label",{htmlFor:"form-name"},"Enter Your Name*")),c.createElement("div",{className:"inputgroup"},c.createElement("input",{id:"form-number",autoComplete:"tel",maxLength:15,name:"number",type:"tel",value:t.number,onChange:b,onBlur:function(e){var n=e.target.value;/^[0-9]*$/.test(n)||(alert("Please enter numbers only"),r(i(i({},t),{},{number:""})))},required:!0}),c.createElement("label",{htmlFor:"form-number"},"Enter Your Number*")),c.createElement("div",{className:"inputgroup"},c.createElement("textarea",{id:"form-message",name:"message",rows:5,value:t.message,onChange:b,required:!0}),c.createElement("label",{htmlFor:"form-message"},"Write Your Message")),c.createElement("button",{className:"button",type:"submit",disabled:!u,style:{backgroundColor:u?"darkblue":"grey"}},"Submit")),c.createElement("div",{className:"call"},c.createElement("span",null,c.createElement("img",{src:"/call1.png",width:"28px",alt:"call"})),c.createElement("span",{className:"number"},c.createElement("a",{href:"tel:9930451078"},"9930451078"))),c.createElement("div",{className:"gmail"},c.createElement("span",null,c.createElement("img",{src:"/mail1.png",width:"28px",alt:"email"})),c.createElement("span",{className:"email"},c.createElement("a",{href:"mailto:support.sugarlogger@gmail.com",target:"_blank"},"support.sugarlogger@gmail.com")))),c.createElement("div",{className:"image"},c.createElement(m.default,{src:"/contact-robot.png",layout:"fixed",width:700,height:400,alt:"robot"})),c.createElement(s.Ix,null))}},1682:function(){}},function(e){e.O(0,[777,136,215,971,165,744],function(){return e(e.s=2870)}),_N_E=e.O()}]);