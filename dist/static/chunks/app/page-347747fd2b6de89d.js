(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5186:function(e,t,n){Promise.resolve().then(n.bind(n,8192))},8412:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(2929),r=n(656),i=n(3130),l=n.n(i),s=n(2265);n(1682);var o=n(2909);n(4193);var c=n(1136);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(){var e=(0,s.useState)({name:"",number:"",message:""}),t=e[0],n=e[1],i=(0,s.useState)(!1),m=i[0],u=i[1],p=(0,s.useState)(!1),f=p[0],g=p[1];(0,s.useEffect)(function(){var e=t.name,n=t.number,a=t.message;e.trim()&&n.trim()&&a.trim()?u(!0):u(!1)},[t]),(0,s.useEffect)(function(){var e=document.querySelector("body"),t=document.createElement("div");if(f)t.className="darkened-overlay",e.appendChild(t),document.body.style.overflow="hidden";else{var n=document.querySelector(".darkened-overlay");n&&e.removeChild(n),document.body.style.overflow="auto"}return function(){var t=document.querySelector(".darkened-overlay");t&&e.removeChild(t)}},[f]);var h=function(e){var a=e.target,i=a.name,l=a.value;n(d(d({},t),{},(0,r.Z)({},i,l)))};function b(){return(b=(0,a.Z)(l().mark(function e(a){var r,i,m,d;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r=t.name,i=t.number,m=t.message,!(!r.trim()||!i.trim()||!m.trim())){e.next=5;break}return alert("All fields are required."),e.abrupt("return");case 5:return e.prev=5,e.next=8,fetch("/api/contact",{method:"POST",body:JSON.stringify({name:r,number:i,message:m}),headers:{"Content-Type":"application/json"}});case 8:if((d=e.sent).ok){e.next=12;break}throw console.log("Error: Could not send message."),Error("Response status: ".concat(d.status));case 12:return e.next=14,d.json();case 14:console.log(e.sent.message),g(!0),(0,o.Am)(s.createElement("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}},s.createElement(c.default,{src:"/successImage.svg",alt:"Success",width:45,height:45,style:{marginBottom:"16px"}}),s.createElement("div",null,s.createElement("p",{style:{fontFamily:"Poppins",fontWeight:600,fontSize:"20px",lineHeight:"29px",color:"rgba(10, 10, 10, 1)",margin:0}},"Thank you for filling the form"),s.createElement("p",{style:{fontFamily:"Poppins",fontWeight:400,fontSize:"16px",lineHeight:"23.2px",color:"rgba(0, 0, 0, 0.8)",margin:0}},"Our team will connect with you shortly."))),{closeButton:!0,autoClose:!1,position:"top-center",onClose:function(){return g(!1)}}),n({name:"",number:"",message:""}),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(5),console.error("Submission error:",e.t0),alert("Error, please try resubmitting the form");case 25:case"end":return e.stop()}},e,null,[[5,21]])}))).apply(this,arguments)}return(0,s.useEffect)(function(){f?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[f]),s.createElement("div",{className:"container ".concat(f?"darkened":""),id:"contact-us"},s.createElement("div",{className:"form"},s.createElement("h1",null,s.createElement("b",null,"Contact Us")),s.createElement("form",{onSubmit:function(e){return b.apply(this,arguments)}},s.createElement("div",{className:"inputgroup"},s.createElement("input",{id:"form-name",autoComplete:"name",maxLength:50,name:"name",type:"text",value:t.name,onChange:h,onBlur:function(e){var a=e.target.value;/^[a-zA-Z\s]*$/.test(a)||(alert("Name should contain only alphabets"),n(d(d({},t),{},{name:""})))},required:!0}),s.createElement("label",{htmlFor:"form-name"},"Enter Your Name*")),s.createElement("div",{className:"inputgroup"},s.createElement("input",{id:"form-number",autoComplete:"tel",maxLength:15,name:"number",type:"tel",value:t.number,onChange:h,onBlur:function(e){var a=e.target.value;/^[0-9]*$/.test(a)||(alert("Please enter numbers only"),n(d(d({},t),{},{number:""})))},required:!0}),s.createElement("label",{htmlFor:"form-number"},"Enter Your Number*")),s.createElement("div",{className:"inputgroup"},s.createElement("textarea",{id:"form-message",name:"message",rows:5,value:t.message,onChange:h,required:!0}),s.createElement("label",{htmlFor:"form-message"},"Write Your Message")),s.createElement("button",{className:"button",type:"submit",disabled:!m,style:{backgroundColor:m?"darkblue":"grey"}},"Submit")),s.createElement("div",{className:"call"},s.createElement("span",null,s.createElement("img",{src:"/call1.png",width:"28px",alt:"call"})),s.createElement("span",{className:"number"},s.createElement("a",{href:"tel:9930451078"},"9930451078"))),s.createElement("div",{className:"gmail"},s.createElement("span",null,s.createElement("img",{src:"/mail1.png",width:"28px",alt:"email"})),s.createElement("span",{className:"email"},s.createElement("a",{href:"mailto:support.sugarlogger@gmail.com",target:"_blank"},"support.sugarlogger@gmail.com")))),s.createElement("div",{className:"image"},s.createElement(c.default,{src:"/contact-robot.png",layout:"fixed",width:700,height:400,alt:"robot"})),s.createElement(o.Ix,null))}},8192:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(2265);n(8423);var r=n(1136),i=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,a.useEffect)(function(){var e=function(){n(window.innerWidth<=768)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),a.createElement("div",{className:"hero-container"},a.createElement("div",{className:"hero-section"},a.createElement("div",{className:"hero-content"},a.createElement("h1",{className:"hero-title"},"Revolutionizing Bidding with"),a.createElement("h1",{className:"hero-subtitle"},"AI-Powered Optimization"),a.createElement("p",{className:"hero-description"},"BidVids is a cutting-edge ad technology platform that uses advanced AI algorithms to optimise advertising yield for digital media buyers. Boost revenue and enhance user experience seamlessly."),a.createElement("button",{className:"hero-button"},"Contact Us")),a.createElement("div",{className:"hero-image-container"},a.createElement(r.default,{src:t?"/mobile-banner.png":"/banner.png",alt:"Robot Hand",className:"hero-image",width:t?500:800,height:t?300:450}))))},l=n(2469),s=["title","titleId"],o=a.forwardRef(function(e,t){var n=e.title,r=e.titleId,i=(0,l.Z)(e,s);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"}))}),c=["title","titleId"],m=a.forwardRef(function(e,t){var n=e.title,r=e.titleId,i=(0,l.Z)(e,c);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))});n(2108);var d=[{id:1,title:"1. Real-Time Bid Optimization",description:"Our advanced AI algorithms analyse each ad request in real time, dynamically adjusting key parameters such as CPM floor, auction timeout rate, participating bidders, and allowed ad sizes. This ensures the highest possible yield from every ad impression.",features:["Dynamic adjustment of auction parameters","Real-time analysis of user behavior and market conditions","Seamless integration with your existing ad tech stack"],image:"/real_time_bid_desktop.png"},{id:2,title:"2. Maximize Return on Ad Spend (ROAS)",description:"Boost your campaign’s return on ad spend (ROAS) by targeting impressions that yield the most beneficial results for your online business. Our solution is compatible with leading DSPs and inventory channels, ensuring broad reach and effective optimization.",features:["Enhanced ROAS through AI-driven targeting","Focus on high-impact impressions","Available across multiple DSPs and inventory channels"],image:"/Maximize Return on Ad Spend (ROAS) Desktop.png"},{id:3,title:"3. Customization Reporting & Analytics",description:"Get detailed insights into your campaign performance with our advanced reporting and analytics tools. Customize reports to suit your business needs and make data-driven decisions to optimize your ad strategy.",features:["Detailed, customizable reporting","Granular performance analytics","Full visibility into optimization processes"],image:"/Customization Reporting & Analytics Desktop.png"}];function u(){var e=(0,a.useState)(d[0]),t=e[0],n=e[1],i=function(e){t&&t.id===e.id?n(null):n(e)};return a.createElement("section",{className:"bg-white text-primary p-8"},a.createElement("div",{className:"hidden md:flex max-w-7xl mx-auto flex-col md:flex-row items-start justify-between font-sans services-container"},a.createElement("div",{className:"w-full md:w-1/2 ml-8 mt-8 mb-8 services-title"},a.createElement("h2",{className:"text-3xl font-bold ml-8 mb-4"},"Our Services"),a.createElement("div",{className:"space-y-4"},d.map(function(e){return a.createElement("div",{key:e.id,className:"p-4 border-b service-card"},a.createElement("div",{className:"flex justify-between items-center cursor-pointer p-4 text-justify ".concat(t&&t.id===e.id?"bg-darkBlue text-white":"bg-transparent text-darkBlue"),onClick:function(){return i(e)}},a.createElement("h3",{className:"text-xl font-semibold"},e.title),t&&t.id===e.id?a.createElement(o,{className:"h-5 w-5 text-white"}):a.createElement(m,{className:"h-5 w-5 text-darkBlue"})),t&&t.id===e.id&&a.createElement("div",{className:"mt-4 font-sans text-justify service-description"},a.createElement("p",null,e.description),a.createElement("h4",{className:"mt-4 font-semibold"},"Key Features"),a.createElement("ul",{className:"list-disc list-inside"},e.features.map(function(e,t){return a.createElement("li",{key:t},e)}))))}))),a.createElement("div",{className:"w-full md:w-1/2 mt-80 pt-36 md:mt-0 flex justify-center"},a.createElement("div",{className:"transition-transform mt-0"},t&&a.createElement(r.default,{src:t.image,alt:t.title,width:517,height:339})))),a.createElement("div",{className:"flex md:hidden flex-col items-start justify-between font-sans "},a.createElement("h2",{className:"text-3xl font-bold  mb-4"},"Our Services"),a.createElement("div",{className:"space-y-8"},d.map(function(e){return a.createElement("div",{key:e.id,className:"border-b"},a.createElement("div",{className:"flex flex-col items-start text-left"},a.createElement(r.default,{src:e.image,alt:e.title,width:300,height:300,className:"mb-4"}),a.createElement("h3",{className:"text-xl font-bold mb-2"},e.title),a.createElement("p",{className:"mb-4"},e.description),a.createElement("h4",{className:"font-semibold mb-2"},"Key Features"),a.createElement("ul",{className:"list-disc list-inside mb-4"},e.features.map(function(e,t){return a.createElement("li",{key:t},e)}))))}))))}n(9850);var p=[{img:"/Increased Ad Revenue Desktop.png",title:"Increased Ad Revenue",description:"Enhance your campaign’s return on ad spend (ROAS) by targeting impressions that yield the best results for your online business. This service is available across major DSPs and inventory channels."},{img:"/Actionable Insights Desktop.png",title:"Actionable Insights",description:"Detailed reporting and analytics empower publishers to make informed decisions about inventory, pricing, and monetisation strategies."},{img:"/Simplified Operations Desktop.png",title:"Simplified Operations",description:"BidVid’s automated, self-optimising platform eliminates manual bid management, allowing publishers to focus on content creation and audience development."},{img:"/Improved User Experience Desktop.png",title:"Improved User Experience",description:"By dynamically adjusting key auction parameters, BidVids ensures that ads are correctly sized, timed, and targeted, creating a seamless and non-intrusive experience for the publisher’s audience."}],f=function(){return a.createElement("div",{className:"bg-darkBlue text-white py-16 font-sans "},a.createElement("div",{className:"max-w-9xl benefits-parent "},a.createElement("h2",{className:"text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-6 benefits-text "},"Benefits"),a.createElement("div",{className:"max-w-8xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-28 gap-y-12 sm:gap-y-12 pr-12 ml-8 sm:ml-4 benefits-container"},p.map(function(e,t){return a.createElement("div",{key:t,className:"flex flex-col items-start max-w-[535px]"},a.createElement("img",{src:e.img,alt:e.title,className:"w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mb-6"}),a.createElement("h3",{className:"text-lg lg:text-xl xl:text-2xl font-semibold mb-4"},e.title),a.createElement("p",{className:"text-sm lg:text-base xl:text-lg leading-relaxed"},e.description))}))))};n(3306);var g=function(){return a.createElement("div",{className:"bg-gray-900 footer-parent"},a.createElement("footer",{className:" text-white h-32 md:h-auto flex flex-col md:flex-col justify-between p-4 md:p-6 footer-container"},a.createElement("div",{className:"flex flex-row justify-between items-center md:flex-row md:justify-between "},a.createElement(r.default,{src:"/newbidvid.png",alt:"BidVid logo",width:126,height:52}),a.createElement("div",{className:"flex space-x-4"},a.createElement("a",{href:"#",className:"hidden md:inline hover:underline"},"Contact Us"),a.createElement("a",{href:"/about",className:"hover:underline"},"About Us"))),a.createElement("div",{className:"flex justify-center mt-2 md:mt-4"},a.createElement("p",{className:"text-center"},"Copyright @ BidVid"))))};n(1682);var h=n(8412),b=n(2117),v=n.n(b);function y(){return a.createElement(a.Fragment,null,a.createElement(v(),null,a.createElement("title",null,"BidVids: Revolutionising Bidding with AI-Powered Optimisation"),a.createElement("meta",{name:"description",content:"BidVids is a cutting-edge ad technology platform that uses advanced AI algorithms to optimise advertising yield for digital media buyers. Boost revenue and enhance user experience seamlessly."}),a.createElement("meta",{property:"og:title",content:"BidVids: Revolutionising Bidding with AI-Powered Optimisation"}),a.createElement("meta",{property:"og:description",content:"BidVids is a cutting-edge ad technology platform that uses advanced AI algorithms to optimise advertising yield for digital media buyers. Boost revenue and enhance user experience seamlessly."})),a.createElement(i,null),a.createElement(u,null),a.createElement(f,null),a.createElement(h.default,null),a.createElement(g,null))}},2117:function(e,t,n){"use strict";var a=n(918);function r(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"===a(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9850:function(){},1682:function(){},3306:function(){},8423:function(){},2108:function(){}},function(e){e.O(0,[616,298,777,136,215,971,165,744],function(){return e(e.s=5186)}),_N_E=e.O()}]);