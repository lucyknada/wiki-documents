"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18941],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(h,n(n({ref:t},u),{},{components:a})):r.createElement(h,n({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},59894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const i={description:"Grove - Serial Camera Kit",title:"Grove - Serial Camera Kit",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Serial_Camera_Kit",last_update:{date:"2/22/2023",author:"jianjing Huang"}},n=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Display/Grove-Serial_Camera_Kit",id:"Sensor/Grove/Grove_Accessories/Display/Grove-Serial_Camera_Kit",title:"Grove - Serial Camera Kit",description:"Grove - Serial Camera Kit",source:"@site/docs/Sensor/Grove/Grove_Accessories/Display/Grove-Serial_Camera_Kit.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Display",slug:"/Grove-Serial_Camera_Kit",permalink:"/Grove-Serial_Camera_Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Display/Grove-Serial_Camera_Kit.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{description:"Grove - Serial Camera Kit",title:"Grove - Serial Camera Kit",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Serial_Camera_Kit",last_update:{date:"2/22/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove BlinkM",permalink:"/Grove-BlinkM"},next:{title:"Grove - 2-Coil Latching Relay",permalink:"/Grove-2-Coil_Latching_Relay"}},s={},p=[{value:"Specifications",id:"specifications",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Download Code and Upload",id:"download-code-and-upload",level:3},{value:"Take a Photo",id:"take-a-photo",level:3},{value:"Replacing a Lens",id:"replacing-a-lens",level:3},{value:"How To Focus",id:"how-to-focus",level:3},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Introduction.jpg",alt:null})),(0,o.kt)("p",null,"Grove - Serial Camera Kit includes one control board and two interchangeable lenses, one is standard lens and the other is wide-angle lens. It's a great camera for Arduino centered image recognition projects, because 30W pixel wouldn't be overwhelming for Arduino, so that real-time image recognition is possible. To make it more fun and playable, lenses of two specs are shipped in this kit. The standard one is for common photo shots and the wide-angle one is specially suitable for monitoring projects."),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Input Voltage: 5V")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pixel: 300,000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Resolution: 640",(0,o.kt)("em",{parentName:"p"},"480, 320"),"240, 160*120")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Uart Baud Rate: 9600~115200")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Communication: RS485 and RS232")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Photo JPEG compression, high, medium and low grades Optional")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"AGC")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Auto Exposure Event Control")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Automatic White Balance Control")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Focus adjustable"))),(0,o.kt)("h2",{id:"demonstration"},"Demonstration"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This demo will show you how to use Grove - Serial Camera Kit. We need a ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7"},"Seeeduino"),", an ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/sd-card-shield-v40-p-1381.html?cPath=105"},"SD Card Shield")," and a ",(0,o.kt)("a",{parentName:"p",href:"/Grove-Button"},"Grove - Button"),". When the button pressed, we take a photo and save it to SD Card."),(0,o.kt)("p",null,"Follow the below steps step by step, you can easily run your Grove - Serial Camera Kit. Then let's go."),(0,o.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,o.kt)("p",null,"We can find that there are two Grove interfaces on SD Card Shield V4.0, so we needn't a Base Shield, just plug Button to I2C Grove and plug Camera to Uart Grove."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Hardware.jpg",alt:null})),(0,o.kt)("h3",{id:"download-code-and-upload"},"Download Code and Upload"),(0,o.kt)("p",null,"You can download demo code in github, click ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit"},"here")),(0,o.kt)("p",null,"Then upload the code, and it works."),(0,o.kt)("h3",{id:"take-a-photo"},"Take a Photo"),(0,o.kt)("p",null,"After finish uploading demo code, we can take a photo now, just press the button, then wait for a few seconds, a photo will be saved to SD card."),(0,o.kt)("p",null,"The following image is the ceiling of my office use straight angle lens."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_60.jpg",alt:null})),(0,o.kt)("h3",{id:"replacing-a-lens"},"Replacing a Lens"),(0,o.kt)("p",null,"There is another wide-angle lens, I will show you how to replace it."),(0,o.kt)("p",null,"Firstly you should have a screwdriver\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step1.jpg",alt:null})),(0,o.kt)("p",null,"Then, unscrew the screws on the side of lens:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step2.jpg",alt:null})),(0,o.kt)("p",null,"Try rotating the lens, it can be screwed out\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step3.jpg",alt:null})),(0,o.kt)("p",null,"We use  the wide-angle lens to take a photo, also, it's  the ceiling of my office!"),(0,o.kt)("p",null,"Find anything different from the ceiling image previous?"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_90.jpg",alt:null})),(0,o.kt)("h3",{id:"how-to-focus"},"How To Focus"),(0,o.kt)("p",null,"Lens screwed different depths represent different focal length, you can have a try."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Library]")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit"},"Demo Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/res/cj-ov528_protocol.pdf"},"CJ OV528"))),(0,o.kt)("h2",{id:"project"},"Project"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Grove Camera -> PHPoC -> Web Application")," This project shows how to read data from Grove camera and send the data to web application via WebSocket."),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/phpoc_man/grove-camera-phpoc-web-application-1dfd63/embed",width:"350"}),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);