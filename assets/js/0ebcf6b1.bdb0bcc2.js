"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=i.createContext({}),d=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||r;return n?i.createElement(m,s(s({ref:t},l),{},{components:n})):i.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var d=2;d<r;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const r={description:"Seeed Studio XIAO nRF52840 with CircuitPython",title:"CircuitPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE_CircutPython",last_update:{date:"1/11/2023",author:"shuxu hu"}},s="**Seeed Studio XIAO nRF52840 with CircuitPython**",a={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE_CircutPython",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE_CircutPython",title:"CircuitPython",description:"Seeed Studio XIAO nRF52840 with CircuitPython",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE_CircutPython.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense",slug:"/XIAO-BLE_CircutPython",permalink:"/XIAO-BLE_CircutPython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE_CircutPython.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Seeed Studio XIAO nRF52840 with CircuitPython",title:"CircuitPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE_CircutPython",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"XIAO nRF52840(sense) With Zephyr(RTOS)",permalink:"/XIAO-nRF52840-Zephyr-RTOS"},next:{title:"IMU Usage for XIAO nRF52840 Sense",permalink:"/XIAO-BLE-Sense-IMU-Usage"}},u={},d=[{value:"<strong>Getting Started</strong>",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"Application",id:"application",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seeed-studio-xiao-nrf52840-with-circuitpython"},(0,o.kt)("strong",{parentName:"h1"},"Seeed Studio XIAO nRF52840 with CircuitPython")),(0,o.kt)("p",null,"CircuitPython is a programming language designed to simplify experimenting and learning to program on low-cost microcontroller boards. It makes getting started easier than ever with no upfront desktop downloads needed. Once you get your board set up, open any text editor, and get started editing code. It's that simple."),(0,o.kt)("h2",{id:"getting-started"},(0,o.kt)("strong",{parentName:"h2"},"Getting Started")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," Enter Bootloader Mode"),(0,o.kt)("p",null,"Before we install CircuitPython to Seeed Studio XIAO nRF52840, it requires bootloader mode. We can enter the bootloadrer mode by the clicking Reset Button twice :"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Then the disk will show up:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," Downloard the ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-Circuitpython.uf2"},"firmware")," for Seeed Studio XIAO nRF52840"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3"),' Drag the .urf file to the disk driver("XIAO-SENSE")'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4"),' Check the disk driver if the name has changed to "CIRCUITPY".'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Now you have successfully install the CircuitPython to the Seeed Studio XIAO nRF52840 board."),(0,o.kt)("h3",{id:"application"},"Application"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," Download CircuitPython editor - ",(0,o.kt)("a",{parentName:"p",href:"https://codewith.mu/en/download"},"Mu Editor")," and open it"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),' Click "Mode" and chose the mode as "CircuitPython"'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3")," Copy and upload the following codes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'"""Example for Seeed Studio XIAO nRF52840. Blinks the built-in LED."""\nimport time\nimport board\nimport digitalio\n\nled = digitalio.DigitalInOut(board.LED)\nled.direction = digitalio.Direction.OUTPUT\n\nwhile True:\n    led.value = True\n    time.sleep(0.5)\n    led.value = False\n    time.sleep(0.5)\n')),(0,o.kt)("p",null,"Click \"Serial\" to open REPL, save the codes to REPL as 'code.py' or 'main.py'"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"The user LED on Seeed Studio XIAO nRF52840 then will flash."),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);