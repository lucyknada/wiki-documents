"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7114],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(i),h=o,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||r;return i?n.createElement(m,a(a({ref:t},d),{},{components:i})):n.createElement(m,a({ref:t},d))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},29936:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=i(87462),o=(i(67294),i(3905));const r={description:"Seeed Studio XIAO SAMD21 with CircuitPython",title:"CircuitPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino-XIAO-CircuitPython",last_update:{date:"1/11/2023",author:"shuxu hu"}},a="CircuitPython on Seeed Studio XIAO SAMD21",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO-CircuitPython",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO-CircuitPython",title:"CircuitPython",description:"Seeed Studio XIAO SAMD21 with CircuitPython",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO-CircuitPython.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21",slug:"/Seeeduino-XIAO-CircuitPython",permalink:"/Seeeduino-XIAO-CircuitPython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO-CircuitPython.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Seeed Studio XIAO SAMD21 with CircuitPython",title:"CircuitPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino-XIAO-CircuitPython",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Nanase",permalink:"/Seeeduino-XIAO-by-Nanase"},next:{title:"MicroPython",permalink:"/XIAO-SAMD21-MicroPython"}},u={},l=[{value:"Installing CircuitPython",id:"installing-circuitpython",level:2},{value:"CircuitPyhton Basics",id:"circuitpyhton-basics",level:2},{value:"Playing with Grove Modules",id:"playing-with-grove-modules",level:3},{value:"Resourses",id:"resourses",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:l},p="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"circuitpython-on-seeed-studio-xiao-samd21"},"CircuitPython on Seeed Studio XIAO SAMD21"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"This wiki introduce how to install and run the official ",(0,o.kt)("a",{parentName:"p",href:"https://circuitpython.org/"},"CircuitPython")," by Adafruit Industries on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeed Studio XIAO SAMD21 development board"),"!"),(0,o.kt)("p",null,"CircuitPython is a programming language designed to simplify experimenting and learning to program on low-cost microcontroller boards. It makes getting started easier than ever with no upfront desktop downloads needed. Once you get your board set up, open any text editor, and get started editing code. For more info, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython"},"here"),"."),(0,o.kt)("h2",{id:"installing-circuitpython"},"Installing CircuitPython"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the official ",(0,o.kt)("a",{parentName:"p",href:"https://circuitpython.org/board/seeeduino_xiao/"},(0,o.kt)("strong",{parentName:"a"},"CircuitPython Bootloader for Seeed Studio XIAO SAMD21")),". A ",(0,o.kt)("inlineCode",{parentName:"p"},".uf2")," should be downloaded.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Plug-in the Seeed Studio XIAO SAMD21 to your PC via USB Type-C.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Entering the DFU bootloader mode by using a jumper to short connect RST Pins twice quickly. For more reference, please also see ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO/#reset"},"here"),"."))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"An external drive named ",(0,o.kt)("inlineCode",{parentName:"li"},"Arduino")," should appear in your PC. Drag the the downloaded CircuitPython uf2 files to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Arduino")," drive.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Once loaded the CircuitPython bootloader, unplug the USB Type-C and re-connect. A new external drive called ",(0,o.kt)("inlineCode",{parentName:"li"},"CIRCUITPY")," should appear.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Now, CircuitPython is loaded on Seeed Studio XIAO SAMD21! All you need to do it's to write you python program and name it ",(0,o.kt)("inlineCode",{parentName:"li"},"main.py")," and drag it onto the ",(0,o.kt)("inlineCode",{parentName:"li"},"CIRCUITPY")," drive.")),(0,o.kt)("h2",{id:"circuitpyhton-basics"},"CircuitPyhton Basics"),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"Blink")," using CircuitPython:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," simply copy and save the following code and name it ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py"),", and drag it to ",(0,o.kt)("inlineCode",{parentName:"p"},"CIRCUITPY")," drive."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import time\nimport board\nfrom digitalio import DigitalInOut, Direction\n\nled = DigitalInOut(board.LED_INVERTED)\nled.direction = Direction.OUTPUT\n\nwhile True:\n    led.value = True\n    time.sleep(1)\n    led.value = False\n    time.sleep(1)\n")),(0,o.kt)("p",null,"You should see the built-in LED starts to blink!"),(0,o.kt)("h3",{id:"playing-with-grove-modules"},"Playing with Grove Modules"),(0,o.kt)("p",null,"You can use Grove modules with simple Analog/Digital Interfaces on CircuitPython. For example, connect Grove - Light Sensor to Seeeduino XIAO's ",(0,o.kt)("inlineCode",{parentName:"p"},"A0")," port and run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import time\nimport board\nfrom analogio import AnalogIn\n\nanalog_in = AnalogIn(board.A0) # Analog pin on Seeedino XIAO\n\ndef get_voltage(pin):\n    return (pin.value * 3.3) / 65536\n \nwhile True:\n    print("Voltage: ", get_voltage(analog_in))\n    time.sleep(0.1)\n')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Circuitpython-XIAO/CP.png"})),(0,o.kt)("p",null,"For more CircuitPython API reference, please visit ",(0,o.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials"},(0,o.kt)("strong",{parentName:"a"},"CircuitPython Essentials")),"."),(0,o.kt)("h2",{id:"resourses"},"Resourses"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials"},(0,o.kt)("strong",{parentName:"a"},"CircuitPython Essentials")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://makeandymake.github.io/2020/05/02/installing-circuitpython-on-seeeduino-xiao.html"},(0,o.kt)("strong",{parentName:"a"},"Installing Circuit Python on Seeed Studio Xiao SAMD21"))))),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);