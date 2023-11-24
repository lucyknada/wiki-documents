"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96390],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>c});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=d(r),k=a,c=s["".concat(p,".").concat(k)]||s[k]||m[k]||i;return r?n.createElement(c,l(l({ref:e},u),{},{components:r})):n.createElement(c,l({ref:e},u))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},66550:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={description:"\u6982\u8ff0",title:"\u5165\u95e8\u6307\u5357",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-RP2040",last_update:{date:"11/2/2023",author:"\u91d1 \u83ca"}},l="Seeed Studio XIAO RP2040 \u5f00\u53d1\u677f",o={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/CN_XIAO-RP2040",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/CN_XIAO-RP2040",title:"\u5165\u95e8\u6307\u5357",description:"\u6982\u8ff0",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/CN_XIAO-RP2040.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040",slug:"/cn/XIAO-RP2040",permalink:"/cn/XIAO-RP2040",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/CN_XIAO-RP2040.md",tags:[],version:"current",lastUpdatedBy:"\u91d1 \u83ca",lastUpdatedAt:1698883200,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{description:"\u6982\u8ff0",title:"\u5165\u95e8\u6307\u5357",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-RP2040",last_update:{date:"11/2/2023",author:"\u91d1 \u83ca"}},sidebar:"CNSidebar",previous:{title:"\u5c06 XIAO SAMD21 \u8fde\u63a5\u5230\u60a8\u7684\u6811\u8393\u6d3e",permalink:"/cn/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI"},next:{title:"Arduino",permalink:"/cn/XIAO-RP2040-with-Arduino"}},p={},d=[{value:"<strong>\u7279\u70b9</strong>",id:"\u7279\u70b9",level:2},{value:"<strong>\u89c4\u683c</strong>",id:"\u89c4\u683c",level:2},{value:"<strong>\u786c\u4ef6\u6982\u8ff0</strong>",id:"\u786c\u4ef6\u6982\u8ff0",level:2},{value:"<strong>\u8fdb\u5165Bootloader\u6a21\u5f0f</strong>",id:"\u8fdb\u5165bootloader\u6a21\u5f0f",level:3},{value:"<strong>\u91cd\u7f6e</strong>",id:"\u91cd\u7f6e",level:3},{value:"\u8d44\u6e90\u6587\u4ef6",id:"\u8d44\u6e90\u6587\u4ef6",level:2},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],u={toc:d},s="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"seeed-studio-xiao-rp2040-\u5f00\u53d1\u677f"},"Seeed Studio XIAO RP2040 \u5f00\u53d1\u677f"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"Seeed Studio XIAO RP2040\u4e0eSeeed Studio XIAO SAMD21\u4e00\u6837\u5c0f\u5de7\uff0c\u4f46\u66f4\u52a0\u5f3a\u5927\u3002\u4e00\u65b9\u9762\uff0c\u5b83\u642d\u8f7d\u4e86\u5f3a\u5927\u7684\u53cc\u6838RP2040\u5904\u7406\u5668\uff0c\u53ef\u7075\u6d3b\u8fd0\u884c\u9ad8\u8fbe133 MHz\u7684\u65f6\u949f\u9891\u7387\uff0c\u662f\u4e00\u6b3e\u4f4e\u529f\u8017\u5fae\u63a7\u5236\u5668\u3002\u5728Seeed Studio XIAO RP2040\u4e0a\u8fd8\u6709264KB\u7684SRAM\u548c2MB\u7684\u677f\u8f7d\u95ea\u5b58\uff0c\u53ef\u63d0\u4f9b\u66f4\u591a\u7684\u7a0b\u5e8f\u5b58\u50a8\u548c\u8fd0\u884c\u7a7a\u95f4\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u8fd9\u5757\u5c0f\u677f\u5b50\u5728\u5904\u7406\u6027\u80fd\u4e0a\u8868\u73b0\u51fa\u8272\uff0c\u4f46\u529f\u8017\u8f83\u4f4e\u3002"),(0,a.kt)("p",null,"\u603b\u4e4b\uff0c\u5b83\u8bbe\u8ba1\u6210\u4e86\u4e00\u4e2a\u8ff7\u4f60\u7684\u5c3a\u5bf8\uff0c\u4ec5\u6709\u62c7\u6307\u5927\u5c0f\uff0820x17.5mm\uff09\uff0c\u53ef\u7528\u4e8e\u53ef\u7a7f\u6234\u8bbe\u5907\u548c\u5c0f\u578b\u9879\u76ee\u3002"),(0,a.kt)("p",null,"Seeed Studio XIAO RP2040\u4e0a\u670914\u4e2aGPIO\u5f15\u811a\uff0c\u5176\u4e2d\u5305\u62ec11\u4e2a\u6570\u5b57\u5f15\u811a\u30014\u4e2a\u6a21\u62df\u5f15\u811a\u300111\u4e2aPWM\u5f15\u811a\u30011\u4e2aI2C\u63a5\u53e3\u30011\u4e2aUART\u63a5\u53e3\u30011\u4e2aSPI\u63a5\u53e3\u548c1\u4e2aSWD Bonding pad\u63a5\u53e3\u3002"),(0,a.kt)("p",null,"Seeed Studio XIAO RP2040\u4e0eSeeed Studio XIAO\u6269\u5c55\u677f\u517c\u5bb9\u3002"),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get one now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("h2",{id:"\u7279\u70b9"},(0,a.kt)("strong",{parentName:"h2"},"\u7279\u70b9")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f3a\u5927\u7684\u5fae\u63a7\u5236\u5668\uff1a\u53cc\u6838ARM Cortex M0+\u5904\u7406\u5668\uff0c\u53ef\u7075\u6d3b\u8fd0\u884c\u9ad8\u8fbe133 MHz\u7684\u65f6\u949f\u9891\u7387\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e30\u5bcc\u7684\u82af\u7247\u8d44\u6e90\uff1a264KB\u7684SRAM\u548c2MB\u7684\u677f\u8f7d\u95ea\u5b58"),(0,a.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u7684\u517c\u5bb9\u6027\uff1a\u652f\u6301Micropython/Arduino/CircuitPython"),(0,a.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u7684\u517c\u5bb9\u6027\uff1a\u652f\u6301Micropython/Arduino/CircuitPython"),(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u5de7\u7684\u5c3a\u5bf8\uff1a\u4e0e\u62c7\u6307\u4e00\u6837\u5c0f\uff0820x17.5mm\uff09\uff0c\u9002\u7528\u4e8e\u53ef\u7a7f\u6234\u8bbe\u5907\u548c\u5c0f\u578b\u9879\u76ee\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u79cd\u63a5\u53e3\uff1a11\u4e2a\u6570\u5b57\u5f15\u811a\uff0c4\u4e2a\u6a21\u62df\u5f15\u811a\uff0c11\u4e2aPWM\u5f15\u811a\uff0c1\u4e2aI2C\u63a5\u53e3\uff0c1\u4e2aUART\u63a5\u53e3\uff0c1\u4e2aSPI\u63a5\u53e3\uff0c1\u4e2aSWD Bonding pad\u63a5\u53e3\u3002")),(0,a.kt)("h2",{id:"\u89c4\u683c"},(0,a.kt)("strong",{parentName:"h2"},"\u89c4\u683c")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9879\u76ee"),(0,a.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CPU"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53cc\u6838ARM Cortex M0+\u5904\u7406\u5668\uff0c\u6700\u9ad8\u53ef\u8fbe133MHz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u95ea\u5b58"),(0,a.kt)("td",{parentName:"tr",align:null},"2MB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u9759\u6001\u968f\u673a\u5b58\u50a8\u5668"),(0,a.kt)("td",{parentName:"tr",align:null},"264KB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u5b57 I/O \u5f15\u811a"),(0,a.kt)("td",{parentName:"tr",align:null},"11")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6a21\u62df I/O \u5f15\u811a"),(0,a.kt)("td",{parentName:"tr",align:null},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PWM \u5f15\u811a"),(0,a.kt)("td",{parentName:"tr",align:null},"11")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"I2C \u63a5\u53e3"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SPI \u63a5\u53e3"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UART \u63a5\u53e3"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7535\u6e90\u548c\u4e0b\u8f7d\u63a5\u53e3"),(0,a.kt)("td",{parentName:"tr",align:null},"Type-C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7535\u6e90"),(0,a.kt)("td",{parentName:"tr",align:null},"3.3V/5V DC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5927\u5c0f"),(0,a.kt)("td",{parentName:"tr",align:null},"20\xd717.5\xd73.5mm")))),(0,a.kt)("h2",{id:"\u786c\u4ef6\u6982\u8ff0"},(0,a.kt)("strong",{parentName:"h2"},"\u786c\u4ef6\u6982\u8ff0")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,":::\u6ce8\u610f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5bf9\u4e8e\u4e00\u822c\u7684I/O\u5f15\u811a\uff1a\nMCU\u7684\u5de5\u4f5c\u7535\u538b\u4e3a3.3V\u3002\u5982\u679c\u5c06\u9ad8\u4e8e3.3V\u7684\u7535\u538b\u8f93\u5165\u8fde\u63a5\u5230\u4e00\u822c\u7684I/O\u5f15\u811a\u4e0a\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u82af\u7247\u635f\u574f\u3002\n\n\u5bf9\u4e8e\u7535\u6e90\u5f15\u811a\uff1a\n\u5185\u7f6e\u7684DC-DC\u8f6c\u6362\u5668\u7535\u8def\u80fd\u591f\u5c065V\u7535\u538b\u8f6c\u6362\u4e3a3.3V\uff0c\u53ef\u4ee5\u901a\u8fc7VIN\u5f15\u811a\u548c5V\u5f15\u811a\u4f7f\u75285V\u7535\u6e90\u6765\u4f9b\u7535\u8bbe\u5907\u3002\n\n\u8bf7\u6ce8\u610f\u4f7f\u7528\uff0c\u4e0d\u8981\u62ac\u8d77\u76d6\u677f\u3002\n")),(0,a.kt)("p",null,":::    "),(0,a.kt)("h3",{id:"\u8fdb\u5165bootloader\u6a21\u5f0f"},(0,a.kt)("strong",{parentName:"h3"},"\u8fdb\u5165Bootloader\u6a21\u5f0f")),(0,a.kt)("p",null,"\u6709\u65f6\u5f53\u7528\u6237\u7f16\u7a0b\u8fc7\u7a0b\u5931\u8d25\u65f6\uff0cseed Studio XIAO RP2040\u7aef\u53e3\u53ef\u80fd\u4f1a\u6d88\u5931\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u64cd\u4f5c\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u957f\u6309\u201cB\u201d\u952e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06Seeed Studio XIAO PR2040\u8fde\u63a5\u5230\u60a8\u7684\u8ba1\u7b97\u673a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u673a\u5c06\u51fa\u73b0\u4e00\u4e2a\u78c1\u76d8\u9a71\u52a8\u7a0b\u5e8f\u3002")),(0,a.kt)("p",null,"\u6b64\u65f6\uff0c\u82af\u7247\u8fdb\u5165\u5f15\u5bfc\u52a0\u8f7d\u7a0b\u5e8f\u6a21\u5f0f\uff0c\u523b\u5f55\u7aef\u53e3\u518d\u6b21\u51fa\u73b0\u3002\u56e0\u4e3aRP2040\u82af\u7247\u6709\u4e24\u4e2a\u5206\u533a\uff0c\u4e00\u4e2a\u662f\u5f15\u5bfc\u52a0\u8f7d\u7a0b\u5e8f\uff0c\u53e6\u4e00\u4e2a\u662f\u7528\u6237\u7a0b\u5e8f\u3002\u8be5\u4ea7\u54c1\u51fa\u5382\u65f6\u5c06\u5728\u7cfb\u7edf\u5185\u5b58\u4e2d\u523b\u5f55\u5f15\u5bfc\u52a0\u8f7d\u7a0b\u5e8f\u4ee3\u7801\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4e0a\u8ff0\u6b65\u9aa4\u6765\u5207\u6362\u6a21\u5f0f\u3002"),(0,a.kt)("h3",{id:"\u91cd\u7f6e"},(0,a.kt)("strong",{parentName:"h3"},"\u91cd\u7f6e")),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u91cd\u7f6eSeeed Studio XIAO RP2040\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06Seeed Studio XIAO RP2040\u8fde\u63a5\u5230\u60a8\u7684\u8ba1\u7b97\u673a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6309\u201cR\u201d\u9488 ",(0,a.kt)("strong",{parentName:"li"},"\u4e00\u6b21"),".")),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f: \u5185\u7f6e\u53ef\u7f16\u7a0b\u5355\u8272led(\u5b83\u4eec\u662f\u7ea2\u8272\uff0c\u84dd\u8272\u548c\u7eff\u8272)\u7684\u884c\u4e3a\u4e0eArduino\u4e0a\u7684\u884c\u4e3a\u76f8\u53cd\u3002\u5728seed Studio XIAO RP2040\u4e0a\uff0c\u5f15\u811a\u5fc5\u987b\u62c9\u4f4e\u624d\u80fd\u4f7f\u80fd\u3002"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("h2",{id:"\u8d44\u6e90\u6587\u4ef6"},"\u8d44\u6e90\u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf"},"RP2040 \u6570\u636e\u624b\u518c"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf"},"Seeed Studio XIAO RP2040 \u539f\u7406\u56fe"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip"},"Seeed Studio XIAO RP2040 KiCAD \u6587\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip"},"Seeed Studio XIAO RP2040 Eagle \u6587\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[DXF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip"},"Seeed Studio XIAO RP2040\u5c3a\u5bf8\u5728DXF"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[LBR]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr"},"Seeed Studio XIAO RP2040\u7684Eagle\u5c01\u88c5\u56fe\u6848"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[XLSX]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx"},"Seeed Studio XIAO RP2040 \u5f15\u811a\u5206\u914d\u8868"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[STEP]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip"},"Seeed Studio XIAO RP2040 3D \u6a21\u578b"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-Certification.zip"},"Seeed Studio XIAO RP2040\u8ba4\u8bc1\u6587\u4ef6")))),(0,a.kt)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,a.kt)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5c06\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5bf9\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);