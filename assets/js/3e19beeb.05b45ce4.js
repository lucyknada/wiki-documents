"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3477],{3905:(t,e,i)=>{i.d(e,{Zo:()=>c,kt:()=>k});var n=i(67294);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}var a=n.createContext({}),p=function(t){var e=n.useContext(a),i=e;return t&&(i="function"==typeof t?t(e):l(l({},e),t)),i},c=function(t){var e=p(t.components);return n.createElement(a.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var i=t.components,o=t.mdxType,r=t.originalType,a=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(i),h=o,k=u["".concat(a,".").concat(h)]||u[h]||d[h]||r;return i?n.createElement(k,l(l({ref:e},c),{},{components:i})):n.createElement(k,l({ref:e},c))}));function k(t,e){var i=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=i.length,l=new Array(r);l[0]=h;var s={};for(var a in e)hasOwnProperty.call(e,a)&&(s[a]=e[a]);s.originalType=t,s[u]="string"==typeof t?t:o,l[1]=s;for(var p=2;p<r;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},77216:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=i(87462),o=(i(67294),i(3905));const r={description:"MicroPython for XIAO ESP32S3 Sense",title:"MicroPython for XIAO ESP32S3 Sense",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/XIAO_ESP32S3_Micropython",last_update:{date:"11/09/2023",author:"Chen Lei"}},l="XIAO ESP32S3 Sense\u7684\u9ea6\u514b\u98ce\uff08\u6444\u50cf\u5934\u3001Wi-Fi\uff09",s={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/cn_XIAO_ESP32S3_Micropython",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/cn_XIAO_ESP32S3_Micropython",title:"MicroPython for XIAO ESP32S3 Sense",description:"MicroPython for XIAO ESP32S3 Sense",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/cn_XIAO_ESP32S3_Micropython.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application",slug:"/cn/XIAO_ESP32S3_Micropython",permalink:"/cn/XIAO_ESP32S3_Micropython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/cn_XIAO_ESP32S3_Micropython.md",tags:[],version:"current",lastUpdatedBy:"Chen Lei",lastUpdatedAt:1699488e3,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{description:"MicroPython for XIAO ESP32S3 Sense",title:"MicroPython for XIAO ESP32S3 Sense",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/XIAO_ESP32S3_Micropython",last_update:{date:"11/09/2023",author:"Chen Lei"}}},a={},p=[{value:"\u786c\u4ef6\u51c6\u5907",id:"\u786c\u4ef6\u51c6\u5907",level:2},{value:"\u8f6f\u4ef6\u51c6\u5907",id:"\u8f6f\u4ef6\u51c6\u5907",level:2},{value:"\ud83d\udc4d \u975e\u5e38\u611f\u8c22",id:"-\u975e\u5e38\u611f\u8c22",level:3},{value:"\u5165\u95e8",id:"\u5165\u95e8",level:2},{value:"\u6b65\u9aa41 flash\u56fa\u4ef6",id:"\u6b65\u9aa41-flash\u56fa\u4ef6",level:3},{value:"\u6b65\u9aa42 \u4e0a\u4f20\u793a\u4f8b\u4ee3\u7801",id:"\u6b65\u9aa42-\u4e0a\u4f20\u793a\u4f8b\u4ee3\u7801",level:3},{value:"\u6b65\u9aa43 \u6d4b\u8bd5\u6d41\u5f0f\u4f20\u8f93\u793a\u4f8b",id:"\u6b65\u9aa43-\u6d4b\u8bd5\u6d41\u5f0f\u4f20\u8f93\u793a\u4f8b",level:3},{value:"\u66f4\u591a\u7684",id:"\u66f4\u591a\u7684",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"\u2728 \u53c2\u4e0e\u8005\u9879\u76ee",id:"-\u53c2\u4e0e\u8005\u9879\u76ee",level:2},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],c={toc:p};function u(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xiao-esp32s3-sense\u7684\u9ea6\u514b\u98ce\u6444\u50cf\u5934wi-fi"},"XIAO ESP32S3 Sense\u7684\u9ea6\u514b\u98ce\uff08\u6444\u50cf\u5934\u3001Wi-Fi\uff09"),(0,o.kt)("p",null,"MicroPython\u662fPython 3\u7f16\u7a0b\u8bed\u8a00\u7684\u7cbe\u7b80\u9ad8\u6548\u5b9e\u73b0\uff0c\u5305\u62ecPython\u6807\u51c6\u5e93\u7684\u4e00\u5c0f\u90e8\u5206\uff0c\u5e76\u7ecf\u8fc7\u4f18\u5316\uff0c\u53ef\u5728\u5fae\u63a7\u5236\u5668\u548c\u53d7\u9650\u73af\u5883\u4e2d\u8fd0\u884c\u3002\n\u81ea2014\u5e74\u9996\u6b21\u542f\u52a8\u4ee5\u6765\uff0cmicroython\u5df2\u7ecf\u652f\u6301\u4e86\u8bb8\u591a\u5fae\u63a7\u5236\u5668\uff0c\u5305\u62ec\u4f5c\u4e3aXiao ESP32S3 Sense\u5f00\u53d1\u677f\u4e3b\u8111\u7684ESP32S3\u3002\n\u5728\u672c\u9875\u4e2d\uff0c\u6211\u5c06\u6307\u5bfc\u5982\u4f55\u4f7f\u7528Xiao ESP32S3 Sense\u529f\u80fd\uff0c\u4f7f\u7528microython\u4e2d\u7b80\u5355\u6613\u7528\u7684\u8bed\u6cd5"),(0,o.kt)("h2",{id:"\u786c\u4ef6\u51c6\u5907"},"\u786c\u4ef6\u51c6\u5907"),(0,o.kt)("p",null,"\u6211\u5728\u8fd9\u91cc\u4f7f\u7528Seeed Studio XIAO ESPS3\u611f\u5e94\u677f\u3002"),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"Seeed Studio XIAO ESP32S3")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg",style:{width:250,height:"auto"}})))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \u70b9\u51fb\u8d2d\u4e70 \ud83d\uddb1\ufe0f"))))))))),(0,o.kt)("h2",{id:"\u8f6f\u4ef6\u51c6\u5907"},"\u8f6f\u4ef6\u51c6\u5907"),(0,o.kt)("p",null,"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u5c06\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"windows10"),"\u4ee5\u53caThonnyIDE\u548cesptool\u3002\u4e3a\u4e86\u4f7f\u7528esptool\uff0c\u8bf7\u786e\u4fdd\u5728\u60a8\u7684windows\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5b89\u88c5Python 3\u73af\u5883\u3002\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4e0b\u8f7d\u56fa\u4ef6\u5e76\u5b89\u88c5Thonny"),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"Thonny IDE"),(0,o.kt)("th",null,"Firmware and Sample Code")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://thonny.org/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \u4e0b\u8f7d \u23ec")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/XIAO_ESP32S3_Micropython.zip"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"  \u4e0b\u8f7d \u23ec"))))))))),(0,o.kt)("p",null,"ftp://34.216.148.10:21//wiki/wiki-ranger/Contributions/S3-MicroPy/XIAO_ESP32S3_Micropython.zip"),(0,o.kt)("h3",{id:"-\u975e\u5e38\u611f\u8c22"},"\ud83d\udc4d \u975e\u5e38\u611f\u8c22"),(0,o.kt)("strong",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \u4e3aXIAO ESP32S3 Sense\u677f\u8bbe\u8ba1\u7684\u56fa\u4ef6\u7531\u6211\u4eec\u7684\u670b\u53cbshariltumin\u5236\u4f5c\uff0c\u6211\u4eec\u975e\u5e38\u559c\u6b22\u4ed6 ")),(0,o.kt)("h2",{id:"\u5165\u95e8"},"\u5165\u95e8"),(0,o.kt)("p",null,"\u56fa\u4ef6\u4ec5\u8bbe\u8ba1\u7528\u4e8eXIAO ESP32S3 MicroPython\u7f16\u7a0b\u3002\u6211\u4eec\u5c06\u9996\u5148\u95ea\u5b58\u56fa\u4ef6\uff0c\u7136\u540e\u5728\u4e0a\u9762\u4f7f\u7528\u793a\u4f8b\u3002"),(0,o.kt)("h3",{id:"\u6b65\u9aa41-flash\u56fa\u4ef6"},"\u6b65\u9aa41 flash\u56fa\u4ef6"),(0,o.kt)("p",null,"\u901a\u8fc7\u6253\u5f00\u8bbe\u5907\u7ba1\u7406\u5668\u627e\u5230usb\u5230\u4e32\u884c\u7aef\u53e3\u5730\u5740"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"\u63d0\u53d6\u4e0b\u8f7d\u7684zip\u6587\u4ef6\u5e76\u5bfc\u822a\u5230\u8be5\u6587\u4ef6\u5939\u3002"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/firmware%20folder.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"\u5355\u51fb\u8def\u5f84\u6846\uff0c\u7136\u540e\u952e\u5165\u201cCMD\u201d\u5e76\u6309enter\u952e"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/cmd_on_folder.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"\u60a8\u5c06\u88ab\u5f15\u5bfc\u5230cmd\u7ec8\u7aef\u3002"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/on_cmd.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"\u4f7f\u7528pip\u547d\u4ee4\u5b89\u88c5esptool\uff08\u786e\u4fdd\u5df2\u5b89\u88c5python 3\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"pip install esptool\n")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"\u4f7f\u7528\u6b64\u547d\u4ee4\u64e6\u9664Xiao ESP32S3\u4e0a\u7684\u95ea\u5b58"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"esptool.py --port COMXX erase_flash\n")),(0,o.kt)("p",null,"Use this command to erase the flash memory on Xiao ESP32S3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32s3  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 firmware.bin \n")),(0,o.kt)("p",null,":::\u63d0\u793a\n\u66f4\u6539\u7535\u8111\u4e0a\u5e26\u6709\u7aef\u53e3COM\u53f7\u7684COMXX\n:::"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h3",{id:"\u6b65\u9aa42-\u4e0a\u4f20\u793a\u4f8b\u4ee3\u7801"},"\u6b65\u9aa42 \u4e0a\u4f20\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5c06\u793a\u4f8b\u4ee3\u7801\u4e0a\u4f20\u5230Xiao ESP32S3\u611f\u5e94\u5185\u90e8\u95ea\u5b58\u3002\n\u5bf9\u4e8e\u8fd9\u4e00\u90e8\u5206\uff0c\u6211\u9996\u5148\u4f7f\u7528thonny IDE\u914d\u7f6e\u7aef\u53e3"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/configure_port_thonny.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"\u7136\u540e\u5728\u201c\u89c6\u56fe\u201d\u83dc\u5355\u4e0a\u9009\u4e2d\u201c\u6587\u4ef6\u201d\u9009\u9879"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/check_the_files.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"\u5bfc\u822a\u5230\u63d0\u53d6\u793a\u4f8b\u4ee3\u7801\u7684\u6587\u4ef6\u5939\uff0c\u7136\u540e\u53f3\u952e\u5355\u51fb\u6587\u4ef6\u5e76\u9009\u62e9\u5982\u4e0b\u56fe\u6240\u793a\u7684\u9009\u9879\u6765\u4e0a\u4f20\u6587\u4ef6"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/upload_the_file.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"\u5728\u6240\u6709\u793a\u4f8b\u4ee3\u7801\u4e0a\u4f20\u5230xiao esp32s3\u677f\u540e\uff0c\u6839\u636e\u60a8\u7684\u672c\u5730wifi\u914d\u7f6e\u66f4\u6539streamin_server.py\u6587\u4ef6\u548cwifi.py\u6587\u4ef6\u4e0a\u7684wifi\u51ed\u636e"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/wifi_configuration.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h3",{id:"\u6b65\u9aa43-\u6d4b\u8bd5\u6d41\u5f0f\u4f20\u8f93\u793a\u4f8b"},"\u6b65\u9aa43 \u6d4b\u8bd5\u6d41\u5f0f\u4f20\u8f93\u793a\u4f8b"),(0,o.kt)("p",null,"\u5728\u6d4b\u8bd5\u6d41\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f7f\u7528pip\u5b89\u88c5opencv python\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"pip install opencv-python\n")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/install_opencv.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"\u6210\u529f\u5b89\u88c5opencv-python\u5e93\u540e\uff0c\u6211\u56de\u5230thonny\uff0c\u8fd0\u884cstreamin_server.py\u5e76\u590d\u5236xiao ESP32S3\u677f\u7684IP\u5730\u5740"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_script.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"\u7136\u540e\u8fd4\u56de\u5230\u63d0\u53d6\u7684zip\u6587\u4ef6\u5939\uff0c\u4f7f\u7528python\u7684IDLE\u6253\u5f00Stein_client.py\uff0c\u5e76\u5c06IP\u5730\u5740\u90e8\u5206\u66f4\u6539\u4e3a\u4e0exiao ESP32S3\u677f\u76f8\u540c"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/change_ip.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"\u7136\u540e\u5c1d\u8bd5\u8fd0\u884c\u8be5\u6587\u4ef6\uff0c\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u4e00\u4e2a\u65b0\u7a97\u53e3\u663e\u793a\u6765\u81eaXiao ESP32S3\u611f\u5e94\u677f\u7684\u6d41\u5f0f\u56fe\u50cf"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_client.jpeg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,":::\u8b66\u544a\n\u5f53\u63a8\u51fa\u6d41\u5a92\u4f53\u793a\u4f8b\u65f6\uff0cXiao ESP32S3\u611f\u5e94\u677f\u53ef\u80fd\u4f1a\u53d8\u5f97\u76f8\u5f53\u70ed\u3002\n:::"),(0,o.kt)("h2",{id:"\u66f4\u591a\u7684"},"\u66f4\u591a\u7684"),(0,o.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528\u8fd9\u4e9b\u4f8b\u5b50\uff0c\u4f60\u53ef\u4ee5\u5236\u4f5c\u4e00\u4e2a\u5feb\u901f\u800c\u7b80\u5355\u7684CCTV\u9879\u76ee\uff0c\u7531\u4e8eXIAO ESP32S3\u7684\u611f\u89c9\u5728\u5c3a\u5bf8\u4e0a\u5f88\u5c0f\uff0c\u8fd9\u4e2a\u9879\u76ee\u53ef\u4ee5\u662f\u65e0\u7f1d\u7684"),(0,o.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,o.kt)("p",null,"\u5982\u679c\u76f8\u673a\u672a\u6210\u529f\u521d\u59cb\u5316\uff08\u663e\u793a\u4e00\u5e27\uff0c\u7136\u540e\u51bb\u7ed3\uff09\u6216\u65e0\u6cd5\u91cd\u65b0\u8fde\u63a5\u5230wifi\uff0c\u8bf7\u5c1d\u8bd5\u62d4\u4e0b\u7535\u8def\u677f\u5e76\u91cd\u65b0\u542f\u52a8Thonny IDE\u3002"),(0,o.kt)("h2",{id:"-\u53c2\u4e0e\u8005\u9879\u76ee"},"\u2728 \u53c2\u4e0e\u8005\u9879\u76ee"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6b64\u9879\u76ee\u7531Seeed Studio\u652f\u6301",(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"\u53c2\u4e0e\u8005\u9879\u76ee"),"."),(0,o.kt)("li",{parentName:"ul"},"\u611f\u8c22 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35979545"},"Hendra and shariltumin \u52aa\u529b"),"\u5e76\u4e14\u4f60\u7684\u4f5c\u54c1\u5c06\u4f1a\u88ab ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"\u5c55\u89c8"),".")),(0,o.kt)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,o.kt)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u5229\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);