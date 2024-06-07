"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32626],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>c});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(r),m=n,c=g["".concat(s,".").concat(m)]||g[m]||d[m]||i;return r?a.createElement(c,o(o({ref:t},u),{},{components:r})):a.createElement(c,o({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const i={description:"Grove - RS485",title:"Grove - RS485",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-RS485",last_update:{date:"2/22/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-RS485",id:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-RS485",title:"Grove - RS485",description:"Grove - RS485",source:"@site/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-RS485.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Input_Output",slug:"/Grove-RS485",permalink:"/Grove-RS485",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-RS485.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{description:"Grove - RS485",title:"Grove - RS485",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-RS485",last_update:{date:"2/22/2023",author:"jianjing Huang"}}},s={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pinout",id:"pinout",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},g="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-RS485/img/preview.png",alt:null})),(0,n.yg)("p",null,"The Grove RS-485 allows your Arduino connect with RS-485 device easily, you just need to plug and play. This module is highly stable and supports error-free transmission of 500k bps.  "),(0,n.yg)("p",null,"RS485 is cost-effective solution in serial communication, it can be used to data rate at 10Mbit/s or distance up to 1200m at lower speed.  "),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("a",{href:"https://www.seeedstudio.com/Grove-RS485-p-2924.html",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.yg)("h2",{id:"version"},"Version"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Product Version"),(0,n.yg)("th",{parentName:"tr",align:null},"Changes"),(0,n.yg)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Grove - RS485"),(0,n.yg)("td",{parentName:"tr",align:null},"Initial"),(0,n.yg)("td",{parentName:"tr",align:null},"Nov 2018")))),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Supply voltage: 3.3V/5V"),(0,n.yg)("li",{parentName:"ul"},"Interface: UART"),(0,n.yg)("li",{parentName:"ul"},"500k bps error-free transmission")),(0,n.yg)("h2",{id:"specification"},"Specification"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:null},"Value"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Size"),(0,n.yg)("td",{parentName:"tr",align:null},"L: 40mm W: 20mm H: 12mm")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Weight"),(0,n.yg)("td",{parentName:"tr",align:null},"4.9g")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Package Size"),(0,n.yg)("td",{parentName:"tr",align:null},"L: 135mm W: 85mm H: 13mm")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Gross Weight"),(0,n.yg)("td",{parentName:"tr",align:null},"11g")))),(0,n.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.yg)("h3",{id:"pinout"},"Pinout"),(0,n.yg)("div",{align:"center"},(0,n.yg)("figure",null,(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("a",{href:"https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg"}))),(0,n.yg)("figcaption",null,(0,n.yg)("b",null,"Figure 1"),". ",(0,n.yg)("i",null,"Pinout")))),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,n.yg)("p",null,"The Grove - NFC supports I2C and UART, ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_NFC"},"Seeed Arduino NFC Library")," supports Arduino Uno/Seeeduino v4.2, Arduino Mega/Seeeduino Mega, Arduino Zero/Seeeduino Lorawan and Arduino Leonardo/Seeeduino Lite."),(0,n.yg)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,n.yg)("h4",{id:"hardware"},"Hardware"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Materials required")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html"},"Seeeduino V4.2(ATMega328P)")," x1"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html"},"Seeeduino Lotus V1.1")," x1"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-RS485-p-2924.html"},"Grove - RS485")," x1"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Base-Shield-V2.html"},"Grove Base Shield V2.0")," x1")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Materials Connected")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-RS485/img/connect.png",alt:null})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 1.")," Connect both Seeeduino Lotus and Seeeduino V4.2 to the PC.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino Lite.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 3.")," Using port 6 and port 7 as soft port RX and TX connect two boards with two Grove Rs485."))),(0,n.yg)("h4",{id:"software"},"Software"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1."),"  Open two Arduino IDE windows and copy these codes as below separately. One of the device is using as master device and the other one is using as slave device.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-c++"},'/*      Slave     */\n#include <SoftwareSerial.h>\nSoftwareSerial Slave(6, 7);  \nchar val;\n\nvoid setup() {\n  Serial.begin(38400);   \n  Serial.println("Slave is ready!");\n  Slave.begin(38400);\n}\n\nvoid loop() {\n  while (Serial.available()) {\n    val = Serial.read();\n    Slave.write(val);\n  }\n\n  while(Slave.available()) {\n    val = Slave.read();\n    Serial.write(val);\n  }\n}\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-c++"},'/*      Master      */\n#include <SoftwareSerial.h>\nSoftwareSerial Master(6, 7);\nchar val;\n\nvoid setup() {\n  Serial.begin(38400);   \n  Serial.println("Master is ready!");\n  Master.begin(38400);\n}\n\nvoid loop() {\n  while (Serial.available()) {\n    val = Serial.read();\n    Master.write(val);\n  }\n\n  while(Master.available()) {\n    val = Master.read();\n    Serial.write(val);\n  }\n}\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 2."),"  Chose different ports for different devices while you using the Grove RS485.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 3.")," Send the message and check the results."))),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-RS485/img/image.png",alt:null})),(0,n.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,n.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[ZIP]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip"},"Grove - RS485 Schematic file")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-RS485/res/Max13478.pdf"},"Max13478E Datasheet"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);