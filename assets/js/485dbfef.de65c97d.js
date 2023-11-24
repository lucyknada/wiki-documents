"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11661],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=s(n),k=a,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(c,i(i({ref:e},m),{},{components:n})):r.createElement(c,i({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},41349:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={description:"Grove - Water Atomization",title:"Grove - Water Atomization",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-Water_Atomization",last_update:{date:"2/1/2023",author:"Matthew"}},i=void 0,l={unversionedId:"zh-CN/Sensor/Grove/Grove_Sensor/Grove-Water_Atomization",id:"zh-CN/Sensor/Grove/Grove_Sensor/Grove-Water_Atomization",title:"Grove - Water Atomization",description:"Grove - Water Atomization",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Sensor/Grove-Water_Atomization.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Sensor",slug:"/cn/Grove-Water_Atomization",permalink:"/cn/Grove-Water_Atomization",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Sensor/Grove-Water_Atomization.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"Grove - Water Atomization",title:"Grove - Water Atomization",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-Water_Atomization",last_update:{date:"2/1/2023",author:"Matthew"}}},p={},s=[{value:"\u4ea7\u54c1\u7279\u6027",id:"\u4ea7\u54c1\u7279\u6027",level:2},{value:"\u521b\u610f\u5e94\u7528",id:"\u521b\u610f\u5e94\u7528",level:2},{value:"\u89c4\u683c\u53c2\u6570",id:"\u89c4\u683c\u53c2\u6570",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"\u786c\u4ef6\u6982\u8ff0",id:"\u786c\u4ef6\u6982\u8ff0",level:2},{value:"<strong>\u4ea7\u54c1\u6e05\u5355</strong>",id:"\u4ea7\u54c1\u6e05\u5355",level:3},{value:"\u5165\u95e8\u6307\u5bfc",id:"\u5165\u95e8\u6307\u5bfc",level:2},{value:"<strong>\u9700\u8981\u7684\u7d20\u6750</strong>",id:"\u9700\u8981\u7684\u7d20\u6750",level:3},{value:"<strong>\u51c6\u5907\u5de5\u4f5c</strong>",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"<strong>\u786c\u4ef6\u8fde\u63a5</strong>",id:"\u786c\u4ef6\u8fde\u63a5",level:3},{value:"<strong>\u4e00\u4e2a\u6f14\u793a</strong>",id:"\u4e00\u4e2a\u6f14\u793a",level:3},{value:"Resources",id:"resources",level:2}],m={toc:s},u="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_product_1200.jpg",alt:null})),(0,a.kt)("p",null,"Grove - Water Atomization \u662f\u4e00\u4e2a\u4f18\u79c0\u7684 Grove \u6a21\u5757\uff0c\u901a\u8fc7\u5b83\u60a8\u53ef\u4ee5\u8f7b\u677e\u5730\u5728\u60a8\u7684\u5e94\u7528\u4e2d\u5f00\u53d1\u96fe\u5316\u5668\u6216\u96fe\u5316\u5668\u6a21\u5757\u3002\u901a\u8fc7\u51e0\u4e2a\u7b80\u5355\u7684\u6b65\u9aa4\u5c31\u53ef\u4ee5\u5bf9\u96fe\u5316\u5668\u8fdb\u884c\u539f\u578b\u5316\u3002\u5b83\u5177\u6709 Grove \u63a5\u53e3\uff0c\u4f7f\u5176\u65b9\u4fbf\u5927\u89c4\u6a21\u5e94\u7528\u3002\u52a0\u6e7f\u5668\u662f\u53ef\u4ee5\u6784\u5efa\u7684\u57fa\u672c\u5e94\u7528\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u6570\u5b57\u6c14\u5473\u6280\u672f\u548c\u5176\u4ed6\u57fa\u4e8e\u96fe\u5316\u7684\u6280\u672f\u5f00\u53d1\u66f4\u5148\u8fdb\u548c\u6709\u8da3\u7684\u9879\u76ee\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://item.taobao.com/item.htm?spm=a230r.1.14.15.4d11ba7cm9BTVl&id=531586572094&ns=1&abbucket=1#detail"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG",alt:null}))),(0,a.kt)("h2",{id:"\u4ea7\u54c1\u7279\u6027"},"\u4ea7\u54c1\u7279\u6027"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8d85\u58f0\u6ce2\u52a0\u70ed\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6613\u4e8e\u4e3a\u65b0\u5e94\u7528\u539f\u578b\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5e7f\u6cdb\u7684\u5e94\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5404\u79cd\u6709\u8da3\uff0c\u667a\u80fd\u548c\u65f6\u5c1a\u7684\u5e94\u7528\u3002")),(0,a.kt)("h2",{id:"\u521b\u610f\u5e94\u7528"},"\u521b\u610f\u5e94\u7528"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u52a0\u6e7f\u5668\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4e0d\u540c\u60c5\u51b5\u4e0b\u6563\u53d1\u6c14\u4f53\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u667a\u80fd\u5bb6\u5c45\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6d88\u8d39\u7535\u5b50\u4ea7\u54c1\u7684\u667a\u80fd\u5bf9\u8c61\u3002")),(0,a.kt)("h2",{id:"\u89c4\u683c\u53c2\u6570"},"\u89c4\u683c\u53c2\u6570"),(0,a.kt)("hr",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5de5\u4f5c\u7535\u538b"),(0,a.kt)("td",{parentName:"tr",align:null},"5.0V(DC)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6d9f\u6ce2(\u6700\u5927\u529f\u7387\u4e0b)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2264100 mV")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u529f\u7387"),(0,a.kt)("td",{parentName:"tr",align:null},"2W")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5cf0\u503c\u8f93\u51fa\u7535\u538b"),(0,a.kt)("td",{parentName:"tr",align:null},"65\xb15V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5de5\u4f5c\u9891\u7387"),(0,a.kt)("td",{parentName:"tr",align:null},"105\xb15kHz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u82af\u7247"),(0,a.kt)("td",{parentName:"tr",align:null},"ETA1617, NE555")))),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u786c\u4ef6\u6982\u8ff0"},"\u786c\u4ef6\u6982\u8ff0"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_overview_1200.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Grove \u63a5\u53e3"),(0,a.kt)("br",{parentName:"p"}),"\n","\u8fde\u63a5\u4e3b\u63a7\u677f\u5982 Seeeduino \u677f\u4e0e\u9a71\u52a8\u677f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8f6c\u63a5\u5668\u63a5\u53e3"),(0,a.kt)("br",{parentName:"p"}),"\n","\u5c06\u8d85\u58f0\u6ce2\u8f6c\u63a5\u5668\u8fde\u63a5\u5230\u9a71\u52a8\u677f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Grove \u7ebf\u7f06"),(0,a.kt)("br",{parentName:"p"}),"\n","\u5c06\u4e3b\u63a7\u677f\u4e0e\u9a71\u52a8\u677f\u8fde\u63a5\u3002"),(0,a.kt)("h3",{id:"\u4ea7\u54c1\u6e05\u5355"},(0,a.kt)("strong",{parentName:"h3"},"\u4ea7\u54c1\u6e05\u5355")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u96f6\u4ef6\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u91cf"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u9a71\u52a8\u677f"),(0,a.kt)("td",{parentName:"tr",align:null},"1PC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove \u7ebf\u7f06"),(0,a.kt)("td",{parentName:"tr",align:null},"1PC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8d85\u58f0\u6ce2\u8f6c\u63a5\u5668\u677f"),(0,a.kt)("td",{parentName:"tr",align:null},"1PC")))),(0,a.kt)("h2",{id:"\u5165\u95e8\u6307\u5bfc"},"\u5165\u95e8\u6307\u5bfc"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u9700\u8981\u7684\u7d20\u6750"},(0,a.kt)("strong",{parentName:"h3"},"\u9700\u8981\u7684\u7d20\u6750")),(0,a.kt)("p",null,"Seeeduino v4.2 x 1"),(0,a.kt)("p",null,"Grove - Base shield v2 x 1"),(0,a.kt)("p",null,"Grove - \u7ebf\u7f06 x 1"),(0,a.kt)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},(0,a.kt)("strong",{parentName:"h3"},"\u51c6\u5907\u5de5\u4f5c")),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605\u4ee5\u4e0b\u6307\u5357\u6765\u6784\u5efa\u9002\u5f53\u7684 IDE :"),(0,a.kt)("div",{class:"admonition note"},(0,a.kt)("p",{class:"admonition-title"},"Note"),"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u9009\u62e9\u4e86 Seeeduino\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Seeeduino_v4.2#Getting_Started_on_Windows"},"Windows \u7cfb\u7edf\u5165\u95e8\u6307\u5bfc")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Seeeduino_v4.2#Getting_Started_on_Mac_OS_X"},"Mac OS X \u7cfb\u7edf\u5165\u95e8\u6307\u5bfc")),(0,a.kt)("h3",{id:"\u786c\u4ef6\u8fde\u63a5"},(0,a.kt)("strong",{parentName:"h3"},"\u786c\u4ef6\u8fde\u63a5")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg",alt:null})),(0,a.kt)("h3",{id:"\u4e00\u4e2a\u6f14\u793a"},(0,a.kt)("strong",{parentName:"h3"},"\u4e00\u4e2a\u6f14\u793a")),(0,a.kt)("div",{class:"admonition note"},(0,a.kt)("p",{class:"admonition-title"},"Note"),"\u6211\u4eec\u8fd8\u9700\u8981\u4e00\u4e2a Grove - Touch \u4f20\u611f\u5668\uff0c\u5e76\u5c06\u5176\u8fde\u63a5\u5230 **A5** (\u7528\u4f5c\u6570\u5b57\u5f15\u811a)\u3002"),(0,a.kt)("p",null,"1.\u5c06\u4ee3\u7801\u590d\u5236\u5230 Arduino IDE \u7f16\u8f91\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/*\n  Demo code for grove  atomization.\n  Touch to start atomizing.\n  Last modified by he\n  by xiaohe\n*/\n\n// the setup function runs once when you press reset or power the board\nvoid setup() {\n    // initialize digital pin 13 as an output.\n    pinMode(A5, OUTPUT);// Set A5 as OUTPUT\n    pinMode(5, INPUT); // Use digital pin 5 as output port\n}\n\n// the loop function runs over and over again forever\nvoid loop() {\n    int D2Sig = digitalRead(5);// read pin 5 signal\n    if (D2Sig == 1)\n    {\n        /* code */\n        digitalWrite(A5, HIGH);   // atomize\n        delay(10000);              // wait for 10 seconds\n        digitalWrite(A5, LOW);    // atomization stopped\n\n    }\n}\n")),(0,a.kt)("p",null,"2.\u5c06\u4e00\u4e9b\u68c9\u7eb1\u653e\u5165\u88c5\u6ee1\u6c34\u7684\u4fee\u526a\u7eb8\u676f\u4e2d\uff0c\u5c06\u8d85\u58f0\u8f6c\u63a5\u5668\u653e\u5728\u68c9\u7eb1\u4e0a\u3002"),(0,a.kt)("div",{class:"admonition note"},(0,a.kt)("p",{class:"admonition-title"},"Note"),"\u5e95\u4fa7\u662f\u7a7a\u5fc3\u7684\uff0c\u5e94\u8be5\u9762\u5411\u4e0b\u9762\u3002\u5c06\u8f6c\u63a5\u5668\u5e95\u90e8\u7684\u653e\u5165\u6c34\u4e2d\uff0c\u5e76\u5c06\u9876\u90e8\u4fdd\u6301\u5728\u6c34\u9762\u4ee5\u4e0a\u3002\u68c9\u7eb1\u7684\u529f\u80fd\u662f\u5411\u8f6c\u63a5\u5668\u4f9b\u6c34\uff0c\u5e76\u5c06\u6362\u80fd\u5668\u7684\u4e0a\u4fa7\u4fdd\u6301\u5728\u6c34\u9762\u4ee5\u4e0a\u3002"),(0,a.kt)("p",null,"3.\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230\u4e3b\u63a7\u677f\u3002"),(0,a.kt)("p",null,"4.\u73b0\u5728\uff0c\u5982\u679c\u60a8\u89e6\u6478 Grove touch sensor\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u6709\u84b8\u6c14\u4ea7\u751f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg",alt:null})),(0,a.kt)("div",{class:"admonition caution"},(0,a.kt)("p",{class:"admonition-title"},"Caution"),"\u4e0d\u8981\u76f4\u63a5\u89e6\u6478\u4f20\u611f\u5668\u63a5\u53e3\u5f15\u811a\uff0c\u56e0\u4e3a Drier board \u7684\u5cf0\u503c\u8f93\u51fa\u7535\u538b\u53ef\u4ee5\u4e3a 65V\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/High_voltage_warning_600.jpg",alt:null})),(0,a.kt)("div",{class:"admonition caution"},(0,a.kt)("p",{class:"admonition-title"},"Caution"),"\u7535\u611f **L2** (\u4ee5\u7ea2\u8272\u77e9\u5f62\u6807\u8bb0) \u5c06\u88ab\u52a0\u70ed\u3002 \u6240\u4ee5\u4e0d\u8981\u76f4\u63a5\u78b0\u5b83\u3002"),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Eagle\u6587\u4ef6]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip"},"Schematic files in Eagle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[\u539f\u7406\u56fePDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_PDF.zip"},"Schematic files in PDF"))))}d.isMDXComponent=!0}}]);