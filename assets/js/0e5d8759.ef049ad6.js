"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63025],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(i),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return i?n.createElement(h,a(a({ref:t},p),{},{components:i})):n.createElement(h,a({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},66902:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=i(87462),r=(i(67294),i(3905));const o={description:"Wio Terminal with CircuitPython",title:"Wio Terminal with CircuitPython",keywords:["Wio_terminal"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-CircuitPython",last_update:{date:"1/31/2023",author:"jianjing Huang"}},a="CircuitPython on Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Wio-Terminal-CircuitPython",id:"Sensor/Wio_Terminal/Wio-Terminal-CircuitPython",title:"Wio Terminal with CircuitPython",description:"Wio Terminal with CircuitPython",source:"@site/docs/Sensor/Wio_Terminal/Wio-Terminal-CircuitPython.md",sourceDirName:"Sensor/Wio_Terminal",slug:"/Wio-Terminal-CircuitPython",permalink:"/Wio-Terminal-CircuitPython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Wio-Terminal-CircuitPython.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Wio Terminal with CircuitPython",title:"Wio Terminal with CircuitPython",keywords:["Wio_terminal"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-CircuitPython",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Get Started with Wio Terminal",permalink:"/Wio-Terminal-Getting-Started"},next:{title:"FreeRTOS with Wio Terminal",permalink:"/Software-FreeRTOS"}},s={},u=[{value:"Installing CircuitPython",id:"installing-circuitpython",level:2},{value:"CircuitPython Basics",id:"circuitpython-basics",level:2},{value:"Built-in Light Sensor",id:"built-in-light-sensor",level:3},{value:"Resourses",id:"resourses",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"circuitpython-on-wio-terminal"},"CircuitPython on Wio Terminal"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png",alt:null})),(0,r.kt)("p",null,"This wiki introduce how to install and run the official ",(0,r.kt)("a",{parentName:"p",href:"https://circuitpython.org/"},"CircuitPython")," by Adafruit Industries on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Seeeduino Wio Terminal"),"!"),(0,r.kt)("p",null,"CircuitPython is a programming language designed to simplify experimenting and learning to program on low-cost microcontroller boards. It makes getting started easier than ever with no upfront desktop downloads needed. Once you get your board set up, open any text editor, and get started editing code. For more info, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython"},"here"),"."),(0,r.kt)("h2",{id:"installing-circuitpython"},"Installing CircuitPython"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the official ",(0,r.kt)("a",{parentName:"p",href:"https://circuitpython.org/board/seeeduino_wio_terminal/"},(0,r.kt)("strong",{parentName:"a"},"CircuitPython Bootloader for Seeeduino Wio Terminal")),". A ",(0,r.kt)("inlineCode",{parentName:"p"},".uf2")," should be downloaded.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Plug-in the Seeeduino Wio Terminal to your PC via USB Type-C.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"here"),"."))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An external drive named ",(0,r.kt)("inlineCode",{parentName:"li"},"Arduino")," should appear in your PC. Drag the the downloaded CircuitPython uf2 files to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Arduino")," drive.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once loaded the CircuitPython bootloader, unplug the USB Type-C and re-connect. A new external drive called ",(0,r.kt)("inlineCode",{parentName:"li"},"CIRCUITPY")," should appear.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Now, CircuitPython is loaded on Seeeduino Wio Terminal! All you need to do it's to write you python program and name it ",(0,r.kt)("inlineCode",{parentName:"li"},"main.py")," and drag it onto the ",(0,r.kt)("inlineCode",{parentName:"li"},"CIRCUITPY")," drive.")),(0,r.kt)("p",null,"You should also see the LCD on the Wio Terminal lights up, the CircuitPython also supports the native LCD display!"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/LCD.gif"})),(0,r.kt)("h2",{id:"circuitpython-basics"},"CircuitPython Basics"),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"Blink")," using CircuitPython:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," simply copy and save the following code and name it ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py"),", and drag it to ",(0,r.kt)("inlineCode",{parentName:"p"},"CIRCUITPY")," drive."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import time\nimport board\nfrom digitalio import DigitalInOut, Direction\n\nled = DigitalInOut(board.D13)\nled.direction = Direction.OUTPUT\n\nwhile True:\n    led.value = True\n    print("LED ON")\n    time.sleep(1)\n    led.value = False\n    print("LED OFF")\n    time.sleep(1)\n')),(0,r.kt)("p",null,"You should see the built-in LED starts to blink!"),(0,r.kt)("h3",{id:"built-in-light-sensor"},"Built-in Light Sensor"),(0,r.kt)("p",null,"Run the following to obtain the built-in light sensor value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import time\nimport board\nfrom analogio import AnalogIn\n\nanalog_in = AnalogIn(board.LIGHT) # Light Sensor pin on Wio Terminal\n\ndef get_voltage(pin):\n    return (pin.value * 3.3) / 65536\n \nwhile True:\n    print("Light Sensor Voltage: ", get_voltage(analog_in))\n    time.sleep(0.1)\n')),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/light.png"})),(0,r.kt)("p",null,"For more CircuitPython API reference, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials"},(0,r.kt)("strong",{parentName:"a"},"CircuitPython Essentials")),"."),(0,r.kt)("h2",{id:"resourses"},"Resourses"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials"},(0,r.kt)("strong",{parentName:"a"},"CircuitPython Essentials")))),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);