"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97217],{3905:(t,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>h});var n=i(67294);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}var a=n.createContext({}),d=function(t){var e=n.useContext(a),i=e;return t&&(i="function"==typeof t?t(e):l(l({},e),t)),i},u=function(t){var e=d(t.components);return n.createElement(a.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var i=t.components,o=t.mdxType,r=t.originalType,a=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=d(i),k=o,h=c["".concat(a,".").concat(k)]||c[k]||p[k]||r;return i?n.createElement(h,l(l({ref:e},u),{},{components:i})):n.createElement(h,l({ref:e},u))}));function h(t,e){var i=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=i.length,l=new Array(r);l[0]=k;var s={};for(var a in e)hasOwnProperty.call(e,a)&&(s[a]=e[a]);s.originalType=t,s[c]="string"==typeof t?t:o,l[1]=s;for(var d=2;d<r;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}k.displayName="MDXCreateElement"},97137:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=i(87462),o=(i(67294),i(3905));const r={description:"CircuitPython for ESP32S3",title:"CircuitPython for ESP32S3",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/XIAO_ESP32S3_CircuitPython",last_update:{date:"11/09/2023",author:"Chen Lei"}},l=void 0,s={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/cn_XIAO_ESP32S3_CircuitPython",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/cn_XIAO_ESP32S3_CircuitPython",title:"CircuitPython for ESP32S3",description:"CircuitPython for ESP32S3",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/cn_XIAO_ESP32S3_CircuitPython.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application",slug:"/cn/XIAO_ESP32S3_CircuitPython",permalink:"/cn/XIAO_ESP32S3_CircuitPython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/cn_XIAO_ESP32S3_CircuitPython.md",tags:[],version:"current",lastUpdatedBy:"Chen Lei",lastUpdatedAt:1699488e3,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{description:"CircuitPython for ESP32S3",title:"CircuitPython for ESP32S3",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/XIAO_ESP32S3_CircuitPython",last_update:{date:"11/09/2023",author:"Chen Lei"}}},a={},d=[{value:"\u786c\u4ef6\u51c6\u5907",id:"\u786c\u4ef6\u51c6\u5907",level:2},{value:"\u8f6f\u4ef6\u51c6\u5907",id:"\u8f6f\u4ef6\u51c6\u5907",level:2},{value:"\u5165\u95e8",id:"\u5165\u95e8",level:2},{value:"\u5728BootLoader\u6a21\u5f0f\u4e0b\u5c06XIAO ESP32S3\u677f\u8fde\u63a5\u5230PC",id:"\u5728bootloader\u6a21\u5f0f\u4e0b\u5c06xiao-esp32s3\u677f\u8fde\u63a5\u5230pc",level:3},{value:"\u6253\u5f00Thonny\u5e76\u914d\u7f6e\u9009\u9879",id:"\u6253\u5f00thonny\u5e76\u914d\u7f6e\u9009\u9879",level:3},{value:"XIAO ESP32S3\u677f\u7684Flash CircuitPython\u56fa\u4ef6",id:"xiao-esp32s3\u677f\u7684flash-circuitpython\u56fa\u4ef6",level:3},{value:"\u7f16\u5199\u4ee3\u7801\uff08IIC\uff09\u5e76\u4e0a\u4f20\u4ee5\u5b9e\u73b0OLED\u663e\u793a",id:"\u7f16\u5199\u4ee3\u7801iic\u5e76\u4e0a\u4f20\u4ee5\u5b9e\u73b0oled\u663e\u793a",level:3},{value:"\u800c\u4e14",id:"\u800c\u4e14",level:2},{value:"\u2728 \u53c2\u4e0e\u8005\u9879\u76ee",id:"-\u53c2\u4e0e\u8005\u9879\u76ee",level:2},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],u={toc:d};function c(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"#\u9879\u76ee\u6982\u51b5"),(0,o.kt)("p",null,"CircuitPython\u662fXIAO ESP32S3\u7684\u7406\u60f3\u7f16\u7a0b\u8bed\u8a00\uff0c\u56e0\u4e3a\u5b83\u7b80\u5316\u4e86\u7269\u7406\u8ba1\u7b97\u9879\u76ee\u3002\u5b83\u57fa\u4e8ePython\uff0c\u5177\u6709\u521d\u5b66\u8005\u53cb\u597d\u7684\u8bed\u6cd5\uff0c\u5e76\u5305\u62ec\u7528\u4e8e\u8bbf\u95ee\u4f20\u611f\u5668\u548c\u663e\u793a\u5668\u7b49\u786c\u4ef6\u7684\u6a21\u5757\u3002\u7531\u4e8eCircuitPython\u5df2\u7ecf\u652f\u6301ESP32S3\u82af\u7247\uff0c\u672c\u9879\u76ee\u5c1d\u8bd5\u5728Seeed Studio XIAO ESP32S3\u677f\u4e0a\u7f16\u8bd1CircuitPython\u3002"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg"})),(0,o.kt)("h2",{id:"\u786c\u4ef6\u51c6\u5907"},"\u786c\u4ef6\u51c6\u5907"),(0,o.kt)("p",null,"\u6211\u5728\u8fd9\u91cc\u4f7f\u7528Seeed Studio XIAO ESPS3\u548cSeeed Studio Grove OLED\u663e\u793a\u56680.96\u4f5c\u4e3a\u786c\u4ef6\u3002"),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"Seeed Studio XIAO ESP32S3"),(0,o.kt)("th",null,"Seeed Studio Grove OLED Display 0.96")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg",style:{width:250,height:"auto"}}))),(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-oled-displey-0.96-ssd1315-preview.jpg",style:{width:250,height:"auto"}})))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \u70b9\u51fb\u8d2d\u4e70 \ud83d\uddb1\ufe0f")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \u70b9\u51fb\u8d2d\u4e70  \ud83d\uddb1\ufe0f"))))))))),(0,o.kt)("h2",{id:"\u8f6f\u4ef6\u51c6\u5907"},"\u8f6f\u4ef6\u51c6\u5907"),(0,o.kt)("p",null,"\u6211\u6b63\u5728\u4f7f\u7528Thonny IDE\u8f6f\u4ef6\uff08Windows\uff09\u548c\u4e00\u4e9b\u76f8\u5173\u7684\u5e93\u548c\u6587\u4ef6\u3002"),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"Thonny IDE"),(0,o.kt)("th",null,"related files(libraries)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://thonny.org/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \u4e0b\u8f7d \u23ec")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \u4e0b\u8f7d \u23ec"))))))))),(0,o.kt)("p",null,":::\u4fe1\u606f\n\u5728\u4f7f\u7528\u5b83\u4e4b\u524d\uff0c\u6211\u9700\u8981\u8bf4\u660e\u6211\u5728\u8fd9\u91cc\u4f7f\u7528\u7684\u8f6f\u4ef6/\u56fa\u4ef6\u662f\u4e3aESP32S3\u82af\u7247\u8bbe\u8ba1\u7684\u3002\u56e0\u6b64\uff0c\u5f53\u60a8\u5c1d\u8bd5\u4f7f\u7528\u5f15\u811a\u65f6\uff0c\u8bf7\u786e\u4fdd\u4f7f\u7528\u901a\u7528\u8f93\u5165/\u8f93\u51fa\uff0c\u800c\u4e0d\u662f\u677f\u4e0a\u7684\u5f15\u811a",(0,o.kt)("br",null),"\n\u4f8b\u5982\uff0c\u5f53\u60a8\u5c1d\u8bd5\u4f7f\u7528\u5de6\u4fa7\u7b2c\u4e00\u884c\u4e2d\u7684\u63a5\u70b9\u65f6\u3002\u8bf7\u786e\u4fdd\u5b83\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"GPIO1")," \u800c\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"A0")," \u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"D0"),"\u3002"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg",style:{width:500,height:"auto"}})),":::",(0,o.kt)("h2",{id:"\u5165\u95e8"},"\u5165\u95e8"),(0,o.kt)("h3",{id:"\u5728bootloader\u6a21\u5f0f\u4e0b\u5c06xiao-esp32s3\u677f\u8fde\u63a5\u5230pc"},"\u5728BootLoader\u6a21\u5f0f\u4e0b\u5c06XIAO ESP32S3\u677f\u8fde\u63a5\u5230PC"),(0,o.kt)("p",null,"\u5177\u4f53\u65b9\u6cd5\u662f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 1"),". \u6309\u4f4fXIAO ESP32S3\u4e0a\u7684BOOT\uff08\u5f15\u5bfc\uff09\u6309\u94ae\uff0c\u4e0d\u8981\u677e\u5f00\u5b83\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 2"),". \u6309\u4f4fBOOT\uff08\u5f15\u5bfc\uff09\u6309\u94ae\uff0c\u7136\u540e\u901a\u8fc7\u6570\u636e\u7ebf\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\u3002\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\u540e\u91ca\u653eBOOT\u6309\u94ae\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 3"),". \u4e0a\u4f20",(0,o.kt)("strong",{parentName:"p"},"Blink"),"\u7a0b\u5e8f\u4ee5\u68c0\u67e5XIAO ESP32S3\u7684\u64cd\u4f5c\u3002"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif",style:{width:500,height:"auto"}})),(0,o.kt)("h3",{id:"\u6253\u5f00thonny\u5e76\u914d\u7f6e\u9009\u9879"},"\u6253\u5f00Thonny\u5e76\u914d\u7f6e\u9009\u9879"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884cThonny\u540e\uff0c\u5bfc\u822a\u201c\u5de5\u5177->\u9009\u9879\u201d\u5e76\u5355\u51fb\u201c\u9009\u9879\u201d\u9009\u62e9")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/03.png"})),(0,o.kt)("p",null,"2.\u9009\u62e9\u201c\u89e3\u91ca\u5668\u201d\u9009\u9879\uff0c\u7136\u540e\u5355\u51fb\u201cCircuitPython\uff08generic\uff09\u201d\u9009\u62e9"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/04.png"})),(0,o.kt)("h3",{id:"xiao-esp32s3\u677f\u7684flash-circuitpython\u56fa\u4ef6"},"XIAO ESP32S3\u677f\u7684Flash CircuitPython\u56fa\u4ef6"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fbThonny\u4e2d\u7684\u201c\uff08esptool\uff09\u201d\u3002\u5b83\u5c06\u63d0\u793a\u60a8\u4e0b\u8f7d\u6700\u65b0\u7684CircuitPython\u56fa\u4ef6\u5e76\u5c06\u5176\u95ea\u5b58\u5230\u677f\u4e0a\u3002")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/06.png"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Thonny\u4e2d\u7684\u201c\uff08esptool\uff09\u201d\u5982\u4e0b\u6240\u793a\uff0c\u5e76\u9996\u5148\u9009\u62e9\u6b63\u786e\u7684\u201c\u76ee\u6807\u7aef\u53e3\u201d\u3002")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/07.png"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9CircuitPython\u7cfb\u5217\u4f5c\u4e3a\u201cESP32-S3\u201d\uff0c\u5e76\u9009\u62e9\u53d8\u4f53\u4f5c\u4e3a\u201cEspressif\u2022ESP32-S3-DevKitC-1-N8\u201d\u3002")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/08.png"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Thonny\u5c06\u586b\u5145\u91cd\u7f6e\uff0c\u60a8\u73b0\u5728\u53ef\u4ee5\u5355\u51fb\u201c\u5b89\u88c5\u201d\u3002")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/09.png"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u663e\u793a\u201c\u5b8c\u6210\u201d\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u53ef\u4ee5\u5173\u95ed\u7a97\u53e3\u3002")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/10.png"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"\u7535\u8111\u4e0a\u4f1a\u6709\u4e00\u4e2a\u201cCIRCUITPY\u201d\u9a71\u52a8\u7a0b\u5e8f\uff0c\u663e\u793a\u4e3b\u677f\u5df2\u6210\u529f\u95ea\u5b58\u3002")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/11.png"})),(0,o.kt)("p",null,"###\u5c06\u76f8\u5173\u6587\u4ef6\uff08\u5e93\uff09\u6dfb\u52a0\u5230\u201cCIRCUITPY\u201d\u9a71\u52a8\u7a0b\u5e8f"),(0,o.kt)("p",null,"\u4ece","[\u76f8\u5173\u6587\u4ef6(\u5e93)]","\u590d\u5236\u6240\u6709\u6587\u4ef6(",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip)%E8%87%B3%E2%80%9C%E7%94%B5%E8%B7%AF%E2%80%9D%E9%A9%B1%E5%8A%A8%E5%99%A8%E3%80%82"},"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip)\u81f3\u201c\u7535\u8def\u201d\u9a71\u52a8\u5668\u3002")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/12.png"})),(0,o.kt)("p",null,":::\u7b14\u8bb0\n\u4f7f\u7528\u201cSeeed Studio Grove OLED Display 0.96\u201d\u65f6\uff0c\u9700\u8981\u201cadafruit_ssd1306.mpy\u201d\u6587\u4ef6\u548c\u201cadafrut_framebuf.mpy\u201d"),(0,o.kt)("p",null,"adafruit_framebuf\u5e93\u4f7f\u7528\u540d\u4e3afont5x8.bin\u7684\u5b57\u4f53\u6587\u4ef6\u6765\u5448\u73b0\u6587\u672c\u3002\u6b64\u6587\u4ef6\u9700\u8981\u5728\u6267\u884c\u4ee3\u7801\u7684\u73af\u5883\u4e2d\u53ef\u4ee5\u8bbf\u95ee\u3002\n:::"),(0,o.kt)("h3",{id:"\u7f16\u5199\u4ee3\u7801iic\u5e76\u4e0a\u4f20\u4ee5\u5b9e\u73b0oled\u663e\u793a"},"\u7f16\u5199\u4ee3\u7801\uff08IIC\uff09\u5e76\u4e0a\u4f20\u4ee5\u5b9e\u73b0OLED\u663e\u793a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u6587\u4ef6\u540e\uff0c\u6211\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4import adafruit_ssd1306\u5c06adafruit_ssd1306\u5e93\u5bfc\u5165\u5230\u4ee3\u7801\u4e2d\uff0c\u5e76\u4e14\u73af\u5883\u73b0\u5728\u88ab\u914d\u7f6e\u4e3a\u9a71\u52a8OLED\u663e\u793a\u5668\u3002\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"from board import *\nfrom busio import I2C\nimport busio\nimport adafruit_ssd1306\n\ni2c = I2C(IO6,IO5)  # Initialize I2C communication using IO6 and IO5 pins\n\n# Create a display object with 128x64 resolution and an I2C address of 0x3C\ndisplay = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c, addr=0x3C)\n\n# Clear the display\ndisplay.fill(0)\ndisplay.show()\n\n# Write text on the display\ndisplay.text('SeeedStudio ESP32S3', 0, 0 , 1)\ndisplay.text('Code by CircuitPython!', 0, 20 , 2)\ndisplay.show()\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u201cRun\u201d\u6309\u94ae\u4e0a\u4f20\u4ee3\u7801")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/14.png"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u6700\u7ec8\u7ed3\u679c")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg"})),(0,o.kt)("h2",{id:"\u800c\u4e14"},"\u800c\u4e14"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u76f8\u5173\u6587\u4ef6\u5747\u6765\u81ea\u7ec4\u88c5\u7684",(0,o.kt)("a",{parentName:"li",href:"https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20230718/adafruit-circuitpython-bundle-8.x-mpy-20230718.zip"},"Adafruit CircuitPython\u5e93\u6346\u7ed1\u5305"),"\u5f62\u5f0f ",(0,o.kt)("a",{parentName:"li",href:"https://circuitpython.org/libraries%E6%82%A8%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8CircuitPython%E6%89%BE%E5%88%B0%E6%89%80%E6%9C%89%E6%94%AF%E6%8C%81%E7%9A%84%E7%A1%AC%E4%BB%B6%E6%96%87%E4%BB%B6%E3%80%82"},"https://circuitpython.org/libraries\u60a8\u53ef\u4ee5\u4f7f\u7528CircuitPython\u627e\u5230\u6240\u6709\u652f\u6301\u7684\u786c\u4ef6\u6587\u4ef6\u3002")),(0,o.kt)("li",{parentName:"ul"},'The "font5x8.bin"\u6587\u4ef6\u6765\u81ea',(0,o.kt)("a",{parentName:"li",href:"https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin"},"\u6b64\u5904"))),(0,o.kt)("h2",{id:"-\u53c2\u4e0e\u8005\u9879\u76ee"},"\u2728 \u53c2\u4e0e\u8005\u9879\u76ee"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6b64\u9879\u76ee\u7531Seeed Studio","[\u8d21\u732e\u8005\u9879\u76ee]","\u652f\u6301(",(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"),")."),(0,o.kt)("li",{parentName:"ul"},"\u611f\u8c22 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35178340"},"Isaac\u7684\u52aa\u529b")," \u4f60\u7684\u4f5c\u54c1\u5c06",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"\u5c55\u51fa"),"\u3002")),(0,o.kt)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,o.kt)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u5229\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);