"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(k,a(a({ref:t},c),{},{components:n})):i.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={description:"Speech Recognition",title:"\u57fa\u4e8e TensorFlow Lite \u7684\u8bed\u97f3\u8bc6\u522b",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-BLE-Sense-TFLite-Mic",last_update:{date:"10/30/2023",author:"\u5434\u98de\u98de"}},a="\u57fa\u4e8e TensorFlow Lite \u7684\u8bed\u97f3\u8bc6\u522b",l={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/cn_XIAO-BLE-Sense-TFLite-Mic",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/cn_XIAO-BLE-Sense-TFLite-Mic",title:"\u57fa\u4e8e TensorFlow Lite \u7684\u8bed\u97f3\u8bc6\u522b",description:"Speech Recognition",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/cn_XIAO-BLE-Sense-TFLite-Mic.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML",slug:"/cn/XIAO-BLE-Sense-TFLite-Mic",permalink:"/cn/XIAO-BLE-Sense-TFLite-Mic",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/cn_XIAO-BLE-Sense-TFLite-Mic.md",tags:[],version:"current",lastUpdatedBy:"\u5434\u98de\u98de",lastUpdatedAt:1698624e3,formattedLastUpdatedAt:"Oct 30, 2023",frontMatter:{description:"Speech Recognition",title:"\u57fa\u4e8e TensorFlow Lite \u7684\u8bed\u97f3\u8bc6\u522b",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-BLE-Sense-TFLite-Mic",last_update:{date:"10/30/2023",author:"\u5434\u98de\u98de"}}},s={},p=[{value:"\u8f6f\u4ef6\u8bbe\u7f6e",id:"\u8f6f\u4ef6\u8bbe\u7f6e",level:2},{value:"\u8bad\u7ec3\u6570\u636e\u5e76\u751f\u6210 TensorFlow Lite \u6a21\u578b",id:"\u8bad\u7ec3\u6570\u636e\u5e76\u751f\u6210-tensorflow-lite-\u6a21\u578b",level:2},{value:"\u63a8\u7406",id:"\u63a8\u7406",level:2},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u57fa\u4e8e-tensorflow-lite-\u7684\u8bed\u97f3\u8bc6\u522b"},"\u57fa\u4e8e TensorFlow Lite \u7684\u8bed\u97f3\u8bc6\u522b"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,"\u672c wiki \u5c06\u6f14\u793a\u5982\u4f55\u5728 Seeed Studio XIAO nRF52840 Sense \u4e0a\u4f7f\u7528 TensorFlow Lite\uff0c\u5e76\u4f7f\u7528\u677f\u8f7d\u9ea6\u514b\u98ce\u6267\u884c\u8bed\u97f3\u8bc6\u522b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u5d4c\u5165\u5f0f AI \u5e94\u7528\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528\u201c\u652f\u6301 Seeed nrf52 mbed \u7684\u7535\u8def\u677f\u5e93\u201d\u3002")),(0,r.kt)("h2",{id:"\u8f6f\u4ef6\u8bbe\u7f6e"},"\u8f6f\u4ef6\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u8bf7\u52a1\u5fc5\u5148\u6309\u7167 ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO_BLE/"},'" Seeed Studio XIAO nRF52840 (Sense)\u5165\u53e3"')," wiki \u8fdb\u884c\u521d\u59cb\u786c\u4ef6\u548c\u8f6f\u4ef6\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,"Now let's move on to the rest of the software setup."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 1"),". \u5c06 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lakshanthad/tflite-micro-arduino-examples"},"tflite-micro-arduino-examples \u5e93")," \u4e0b\u8f7d\u4e3aZIP\u6587\u4ef6")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/tflite-mic-github.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 2"),". \u6253\u5f00 Arduino IDE\uff0c\u5bfc\u822a\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"Sketch > Include Library > Add .ZIP Library..."),"\u5e76\u6253\u5f00\u4e0b\u8f7d\u7684 zip \u6587\u4ef6 ")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("h2",{id:"\u8bad\u7ec3\u6570\u636e\u5e76\u751f\u6210-tensorflow-lite-\u6a21\u578b"},"\u8bad\u7ec3\u6570\u636e\u5e76\u751f\u6210 TensorFlow Lite \u6a21\u578b"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 Google Colab \u7b14\u8bb0\u672c\u6765\u6267\u884c\u6570\u636e\u8bad\u7ec3\u5e76\u751f\u6210 TensorFlow Lite \u6a21\u578b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u6253\u5f00 ",(0,r.kt)("a",{parentName:"li",href:"https://colab.research.google.com/github/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb"},"\u8fd9\u4e2a Python \u7b14\u8bb0\u672c"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-mic.jpg",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u5c06\u52a0\u8f7d ",(0,r.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/download.tensorflow.org/data/speech_commands_v0.02.tar.gz"},"\u8fd9\u4e2a\u53ef\u4ee5")," \u8bc6\u522b\u5355\u8bcd\u7684\u6570\u636e\u96c6\uff1a ",(0,r.kt)("strong",{parentName:"p"},'"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 2.")," \u5728 ",(0,r.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u9ed8\u8ba4\u503c")," \u6839\u636e\u60a8\u5e0c\u671b\u6a21\u578b\u8bc6\u522b\u7684\u5355\u8bcd\u66f4\u6539 ",(0,r.kt)("strong",{parentName:"li"},"WANTED_WORDS")," \u53c2\u6570\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\uff1a ",(0,r.kt)("strong",{parentName:"li"},'"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"'),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-wanted-words.png",alt:"pir",width:600,height:"auto"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"yes,no,up,down")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 3.")," \u5bfc\u822a\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"Runtime > Run all")," \u4ee5\u8fd0\u884c\u6240\u6709\u4ee3\u7801\u5355\u5143")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-speech-run-all.png",alt:"pir",width:450,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 4.")," \u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Run anyway")," \u4ee5\u83b7\u53d6\u5f39\u51fa\u7684\u9519\u8bef\u6d88\u606f")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u6b64\u8fc7\u7a0b\u5927\u7ea6\u9700\u8981 2 \u5c0f\u65f6\u624d\u80fd\u5b8c\u6210"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 5.")," \u6267\u884c\u6240\u6709\u4ee3\u7801\u5355\u5143\u540e\uff0c\u5bfc\u822a\u5230\u5de6\u4e0a\u89d2\u7684 ",(0,r.kt)("strong",{parentName:"li"},"files")," \u9009\u9879\u5361\uff0c\u60a8\u5c06\u5728 ",(0,r.kt)("strong",{parentName:"li"},"model.cc")," \u6587\u4ef6\u5939\u4e0b\u627e\u5230\u4e00\u4e2a\u65b0\u7684 ",(0,r.kt)("strong",{parentName:"li"},"models")," \u6587\u4ef6\u751f\u6210")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-cc.png",alt:"pir",width:300,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u5982\u679c\u770b\u4e0d\u5230\u4e0a\u8ff0 ",(0,r.kt)("strong",{parentName:"p"},"model.cc")," \u6587\u4ef6\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 6.")," \u53f3\u952e\u5355\u51fb\u8be5\u6587\u4ef6\uff0c\u7136\u540e\u5355\u51fb\u201c\u4e0b\u8f7d\u201d\u5c06\u6587\u4ef6 ",(0,r.kt)("strong",{parentName:"li"},"\u4e0b\u8f7d")," \u5230\u60a8\u7684 PC")),(0,r.kt)("h2",{id:"\u63a8\u7406"},"\u63a8\u7406"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u4e0b\u8f7d\u7684 TensorFlow Lite \u6a21\u578b\u6587\u4ef6 ",(0,r.kt)("strong",{parentName:"p"},"(model.cc)"),"  \u901a\u8fc7 Seeed Studio XIAO nRF52840 Sense \u4e0a\u7684\u9ea6\u514b\u98ce\u8bc6\u522b\u4e0d\u540c\u7684\u5355\u8bcd\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u5bfc\u822a\u5230 ",(0,r.kt)("strong",{parentName:"li"},"tflite-micro-arduino-examples")," \u5e93\u7684\u5e93\u8def\u5f84(\u901a\u5e38\u5728 ",(0,r.kt)("strong",{parentName:"li"},"Documents > Arduino > libraries > tflite-micro-arduino-examples\u4e0b"),"), \u8bbf\u95ee ",(0,r.kt)("strong",{parentName:"li"},"examples > micro_speech")," \u5e76\u6253\u5f00 ",(0,r.kt)("strong",{parentName:"li"},"micro_features_model.cpp"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-features-model-open.png",alt:"pir",width:550,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 2.")," \u5c06 ",(0,r.kt)("strong",{parentName:"li"},"const unsigned char g_model[] DATA_ALIGN_ATTRIBUTE = {")," \u66ff\u6362\u4e3a ",(0,r.kt)("strong",{parentName:"li"},"model.cc")," \u6587\u4ef6\u4e2d\u7684\u65b0\u503c")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-values.png",alt:"pir",width:550,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 3.")," \u6839\u636e ",(0,r.kt)("strong",{parentName:"li"},"model.cc")," \u7684\u503c\u66f4\u6539",(0,r.kt)("strong",{parentName:"li"},"g_model_len")," \u3002\u5728\u8fd9\u91cc\u6211\u4eec\u5f97\u5230\u4e86 ",(0,r.kt)("strong",{parentName:"li"},"26720"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const int g_model_len = 26720;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 4.")," \u6253\u5f00\u6587\u4ef6\u5939",(0,r.kt)("strong",{parentName:"li"},"micro_speech"),"\u4e2d\u7684",(0,r.kt)("strong",{parentName:"li"},"micro_features_micro_model_settings.cpp")," \u5e76\u6dfb\u52a0\u6211\u4eec\u5728\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u5355\u8bcd\u3002\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,r.kt)("strong",{parentName:"li"},"yes,no,up,down"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "micro_features_micro_model_settings.h"\n\nconst char* kCategoryLabels[kCategoryCount] = {\n    "silence",\n    "unknown",\n    "yes",\n    "no",\n    "up",\n    "down",\n};\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 5.")," \u6253\u5f00 \u6587\u4ef6\u5939",(0,r.kt)("strong",{parentName:"li"},"micro_speech"),"\u4e2d\u7684",(0,r.kt)("strong",{parentName:"li"},"micro_features_micro_model_settings.h")," \u5e76\u6839\u636e\u5b9a\u4e49\u7684\u7c7b\u522b\u6570\u66f4\u6539 ",(0,r.kt)("strong",{parentName:"li"},"constexpr int kCategoryCount")," \u3002\u8fd9\u91cc\u6709 6 \u4e2a\u7c7b\u522b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"constexpr int kCategoryCount = 6;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 6.")," \u6253\u5f00\u6587\u4ef6\u5939 ",(0,r.kt)("strong",{parentName:"p"},"micro_speech")," \u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"micro_speech.ino")," \uff0c\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230 Seeed Studio XIAO nRF52840 Sense")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 7.")," \u6253\u5f00 ",(0,r.kt)("strong",{parentName:"p"},"\u4e32\u884c\u76d1\u89c6\u5668\u7a97\u53e3")," \uff0c\u5927\u58f0\u8bf4\u51fa\u6211\u4eec\u4e4b\u524d\u5b9a\u4e49\u7684\u5355\u8bcd\u3002\u60a8\u5c06\u770b\u5230\u4e32\u884c\u76d1\u89c6\u5668\u8f93\u51fa\u8bc6\u522b\u540e\u8bf4\u51fa\u7684\u6b63\u786e\u5355\u8bcd\u3002"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/mic-capture.png",alt:"pir",width:300,height:"auto"})),(0,r.kt)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,r.kt)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5bf9\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);