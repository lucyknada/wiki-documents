"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89073],{3905:(t,e,i)=>{i.d(e,{Zo:()=>c,kt:()=>m});var r=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e){if(null==t)return{};var i,r,n=function(t,e){if(null==t)return{};var i,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)i=o[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var s=r.createContext({}),l=function(t){var e=r.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):u(u({},e),t)),i},c=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var i=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=l(i),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return i?r.createElement(m,u(u({ref:e},c),{},{components:i})):r.createElement(m,u({ref:e},c))}));function m(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=i.length,u=new Array(o);u[0]=h;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a[d]="string"==typeof t?t:n,u[1]=a;for(var l=2;l<o;l++)u[l]=i[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},44789:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=i(87462),n=(i(67294),i(3905));const o={description:"Seeed Studio XIAO RP2040\u642d\u914dCircuitPython\u4f7f\u7528",title:"CircuitPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-RP2040-with-CircuitPython",last_update:{date:"11/1/2023",author:"\u91d1 \u83ca"}},u="\u5b66\u4e60\u4f7f\u7528 CircuitPython \u5bf9 XIAO RP2040 \u8fdb\u884c\u7f16\u7a0b",a={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/CN_XIAO-RP2040-with-CircuitPython",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/CN_XIAO-RP2040-with-CircuitPython",title:"CircuitPython",description:"Seeed Studio XIAO RP2040\u642d\u914dCircuitPython\u4f7f\u7528",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/CN_XIAO-RP2040-with-CircuitPython.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040",slug:"/cn/XIAO-RP2040-with-CircuitPython",permalink:"/cn/XIAO-RP2040-with-CircuitPython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/CN_XIAO-RP2040-with-CircuitPython.md",tags:[],version:"current",lastUpdatedBy:"\u91d1 \u83ca",lastUpdatedAt:1698796800,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{description:"Seeed Studio XIAO RP2040\u642d\u914dCircuitPython\u4f7f\u7528",title:"CircuitPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-RP2040-with-CircuitPython",last_update:{date:"11/1/2023",author:"\u91d1 \u83ca"}},sidebar:"CNSidebar",previous:{title:"MicroPython",permalink:"/cn/XIAO-RP2040-with-MicroPython"},next:{title:"\u57fa\u4e8eEdge Impulse\u7684\u52a8\u4f5c\u8bc6\u522b",permalink:"/cn/XIAO-RP2040-EI"}},s={},l=[{value:"<strong>\u5165\u95e8\u6307\u5357</strong>",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"LED\u95ea\u70c1\u6559\u7a0b",id:"led\u95ea\u70c1\u6559\u7a0b",level:3},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],c={toc:l},d="wrapper";function p(t){let{components:e,...i}=t;return(0,n.kt)(d,(0,r.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5b66\u4e60\u4f7f\u7528-circuitpython-\u5bf9-xiao-rp2040-\u8fdb\u884c\u7f16\u7a0b"},"\u5b66\u4e60\u4f7f\u7528 CircuitPython \u5bf9 XIAO RP2040 \u8fdb\u884c\u7f16\u7a0b"),(0,n.kt)("p",null,"CircuitPython\u662f\u4e00\u79cd\u4e13\u4e3a\u4f4e\u6210\u672c\u5fae\u63a7\u5236\u5668\u677f\u5b9e\u9a8c\u548c\u5b66\u4e60\u7f16\u7a0b\u800c\u8bbe\u8ba1\u7684\u7f16\u7a0b\u8bed\u8a00\u3002\u5b83\u4f7f\u5f97\u5165\u95e8\u53d8\u5f97\u6bd4\u4ee5\u5f80\u66f4\u52a0\u7b80\u5355\uff0c\u65e0\u9700\u9884\u5148\u4e0b\u8f7d\u684c\u9762\u5de5\u5177\u3002\u4e00\u65e6\u4f60\u8bbe\u7f6e\u597d\u4e86\u5f00\u53d1\u677f\uff0c\u6253\u5f00\u4efb\u4f55\u6587\u672c\u7f16\u8f91\u5668\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u7f16\u8f91\u4ee3\u7801\u3002\u5c31\u662f\u8fd9\u4e48\u7b80\u5355\u3002"),(0,n.kt)("h2",{id:"\u5165\u95e8\u6307\u5357"},(0,n.kt)("strong",{parentName:"h2"},"\u5165\u95e8\u6307\u5357")),(0,n.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\u4e00")," \u8fdb\u5165\u5f15\u5bfc\u7a0b\u5e8f\u6a21\u5f0f"),(0,n.kt)("p",null,"\u5728\u5c06CircuitPython\u5b89\u88c5\u5230Seeed Studio XIAO RP2040\u4e4b\u524d\uff0c\u9700\u8981\u8fdb\u5165\u5f15\u5bfc\u7a0b\u5e8f\u6a21\u5f0f\u3002\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u64cd\u4f5c\u8fdb\u5165\u5f15\u5bfc\u7a0b\u5e8f\u6a21\u5f0f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'\u957f\u6309"BOOT"\u6309\u94ae\uff08\u5728\u677f\u4e0a\u5199\u7740"B"\uff09'),(0,n.kt)("li",{parentName:"ul"},"\u5728\u4fdd\u6301\u6309\u4e0b\u6309\u94ae\u7684\u540c\u65f6\u5c06Seeed Studio XIAO RP2040\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\u4e0a"),(0,n.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u673a\u4e0a\u5c06\u51fa\u73b0\u4e00\u4e2a\u78c1\u76d8\u9a71\u52a8\u5668\uff08RP1-RP2\uff09")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"\u78c1\u76d8\u663e\u793a\u51fa\u73b0\uff08RP1-RP2\uff09\uff1a"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:150,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\u4e8c")," \u4e0b\u8f7dSeeed Studio XIAO RP2040\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-CircuitPython.uf2"},"\u56fa\u4ef6")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\u4e09"),' \u5c06.uf2\u6587\u4ef6\u62d6\u5230\u78c1\u76d8\u9a71\u52a8\u5668\uff08"RP1-RP2"\uff09\u4e2d'),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu9.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\u56db"),' \u68c0\u67e5\u78c1\u76d8\u9a71\u52a8\u5668\u7684\u540d\u79f0\u662f\u5426\u5df2\u66f4\u6539\u4e3a"CIRCUITPY"\u3002'),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:150,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png"})),(0,n.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u5df2\u6210\u529f\u5c06CircuitPython\u5b89\u88c5\u5230Seeed Studio XIAO RP2040\u5f00\u53d1\u677f\u4e0a\u3002"),(0,n.kt)("h3",{id:"led\u95ea\u70c1\u6559\u7a0b"},"LED\u95ea\u70c1\u6559\u7a0b"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\u4e00")," \u4e0b\u8f7dCircuitPython\u7f16\u8f91\u5668 - ",(0,n.kt)("a",{parentName:"p",href:"https://codewith.mu/en/download"},"Mu\u7f16\u8f91\u5668")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\u4e8c"),' \u6253\u5f00\u7f16\u8f91\u5668\u5e76\u9009\u62e9"CircuitPython"\u6a21\u5f0f'),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:750,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu7.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\u4e09")," \u590d\u5236\u5e76\u4e0a\u4f20\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'"""Example for Pico. Blinks the built-in LED."""\nimport time\nimport board\nimport digitalio\n\nled = digitalio.DigitalInOut(board.LED)\nled.direction = digitalio.Direction.OUTPUT\n\nwhile True:\n    led.value = True\n    time.sleep(0.5)\n    led.value = False\n    time.sleep(0.5)\n')),(0,n.kt)("p",null,"\u70b9\u51fb\"Serial\"\u4ee5\u6253\u5f00REPL\uff0c\u5c06\u4ee3\u7801\u4fdd\u5b58\u4e3a'code.py'\u6216'main.py'"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:750,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu6.png"})),(0,n.kt)("p",null,"Seeed Studio XIAO RP2040\u4e0a\u7684\u7528\u6237LED\u5c06\u5f00\u59cb\u95ea\u70c1\u3002"),(0,n.kt)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,n.kt)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u81f4\u529b\u4e8e\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5bf9\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);