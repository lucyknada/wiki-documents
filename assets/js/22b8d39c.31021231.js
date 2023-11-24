"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77863],{3905:(t,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>k});var r=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,r,n=function(t,e){if(null==t)return{};var i,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)i=a[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var l=r.createContext({}),c=function(t){var e=r.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var i=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(i),h=n,k=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return i?r.createElement(k,o(o({ref:e},u),{},{components:i})):r.createElement(k,o({ref:e},u))}));function k(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=i.length,o=new Array(a);o[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:n,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},45369:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const a={description:"LinkIt ONE Tutorial - The Basics",title:"LinkIt ONE Tutorial - The Basics",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-The_Basics",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,s={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-The_Basics",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-The_Basics",title:"LinkIt ONE Tutorial - The Basics",description:"LinkIt ONE Tutorial - The Basics",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-The_Basics.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE_Tutorial-The_Basics",permalink:"/LinkIt_ONE_Tutorial-The_Basics",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-The_Basics.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"LinkIt ONE Tutorial - The Basics",title:"LinkIt ONE Tutorial - The Basics",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-The_Basics",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - SMS control the LED",permalink:"/LinkIt_ONE_Tutorial-SMS_control_the_LED"},next:{title:"Sidekick Basic Kit for LinkIt ONE",permalink:"/Sidekick_Basic_Kit_for_LinkIt_ONE"}},l={},c=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:c},p="wrapper";function d(t){let{components:e,...i}=t;return(0,n.kt)(p,(0,r.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What We're Doing")),(0,n.kt)("p",null,"Let's build a simple circuit using a transistor, LED and a toggle switch. Light Emitting Diode (LED) transforms electrical energy into visible light. Transistor is a fundamental component in electronics which acts as a switch or a current amplifier. Here, we use a switch to ON and OFF the LED indirectly using the transistor."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Things you need")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"LinkIt One x 1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bread board x 1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Resistors 330\u03a9,1k\u03a9 x 1 each")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"5mm LED x 1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Switch x 1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Transistor (2N3904) x 1"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Schematic")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-The_Basics/img/LinkItONE_Kit_0_1.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Connection")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-The_Basics/img/LinkItONE_Kit_0_2.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Troubleshooting")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ensure the polarity of the LED(Long lead is positive and the short lead is negative).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Check whether you have shorted two pins of the switch.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure you haven't missed the transistor connection in the circuit(A transistor is required to drive a LED).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Burned out an LED..?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This happens when you forget to connect the input resistance which acts as a current limiter to the LED.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Making it better")),(0,n.kt)("p",null,"Now we've made a simple control circuit. Lets make it fascinating by just adding another component called a capacitor. A capacitor acts like a temporary charge storing device. If a capacitor is connected in parallel with the resistor which is in series with the LED it fades the LED. When the switch is turned ON the capacitor gets charged, when the switch is turned OFF the charge stored in the capacitor gets discharged slowly which makes fading OFF of the LED."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"More ideas")),(0,n.kt)("p",null,"What is the component used for growing the luminosity of the LED slowly when it is turned ON?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reference")),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);