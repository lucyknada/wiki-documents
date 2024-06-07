"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[98469],{15680:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>h});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(o),m=n,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return o?r.createElement(h,a(a({ref:t},c),{},{components:o})):r.createElement(h,a({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},36304:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=o(58168),n=(o(96540),o(15680));const i={description:"Xadow - Vibrator Motor",title:"Xadow - Vibrator Motor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Vibrator_Motor",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,s={unversionedId:"Seeed_Elderly/Xadow/Xadow_Vibrator_Motor",id:"Seeed_Elderly/Xadow/Xadow_Vibrator_Motor",title:"Xadow - Vibrator Motor",description:"Xadow - Vibrator Motor",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Vibrator_Motor.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Vibrator_Motor",permalink:"/Xadow_Vibrator_Motor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Vibrator_Motor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - Vibrator Motor",title:"Xadow - Vibrator Motor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Vibrator_Motor",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - UV Sensor",permalink:"/Xadow_UV_Sensor"},next:{title:"Xadow - 1.54 inch Touchscreen",permalink:"/Xadow_1.54_inch_Touchscreen"}},l={},d=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,n.yg)(u,(0,r.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/Vibration_Motor_01.jpg",alt:null})),(0,n.yg)("p",null,'This small vibrator motor can vibrate like your phone. When using it, you only need to power for the module and then send "Vibration" command. In fact, the "Vibration" command is setting control pins to high level, then it will work. I like this module because it can create a short-term shock to prompt me whether one operation was successful, such as shaking my arm to switch my iPhone songs, which sounds terrible, but it does not like the buzzer.'),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Vibration-Motor-p-1517.html"},(0,n.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.yg)("h2",{id:"specification"},"Specification"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"working voltage: 3.3V")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Rated Speed: 9000rpm")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"controlled by two digital signals")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Dimensions: 25.43mm x 20.35mm"))),(0,n.yg)("h2",{id:"demonstration"},"Demonstration"),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Here is a Demo Code showing how to turn on the vibration motor."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Hardware Installation: ")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/XadowVibration.jpg",alt:null})),(0,n.yg)("p",null,"Note: when connect Xadow Vibrator Motor to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).\nDemo code like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"<pre>\nvoid setup()\n{\n    DDRF |= 0x01;\n    DDRB |= 0x04;\n}\n\nvoid loop()\n{\n    //turn on the vibration motor\n    PORTF |= 0x01;\n    PORTB |= 0x04;\n    delay(1000);\n    //turn off the vibration motor\n    PORTF &amp;= ~(0x01);\n    PORTB |= 0x04;\n    delay(1000);\n    //turn on the vibration motor\n    PORTF |= 0x01;\n    PORTB |= 0x04;\n    delay(1000);\n    //turn off the vibration motor\n    PORTF |= 0x01;\n    PORTB &amp;= ~(0x04);\n    delay(1000);\n    //turn on the vibration motor\n    PORTF |= 0x01;\n    PORTB |= 0x04;\n    delay(1000);\n    //turn off the vibration motor\n    PORTF &amp;= ~(0x01);\n    PORTB &amp;= ~(0x04);\n    delay(1000);\n}</pre>\n")),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip"},"Xadow Vibrator Motor Eagle File")),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);