"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21502],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,y=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return a?r.createElement(y,o(o({ref:t},p),{},{components:a})):r.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22903:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(58168),n=(a(96540),a(15680));const i={title:"Grove - MP3 v2.0",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-MP3_v2.0/",slug:"/Grove-MP3_v2.0",last_update:{date:"01/09/2022",author:"gunengyu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-MP3_v2.0",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-MP3_v2.0",title:"Grove - MP3 v2.0",description:"Grove - MP3 v2.0 is a tiny-sized and compact audio module. It supports various audio file operations for an audio file of MP3, WAV and WMV format, such as random music playing, play music in specific files, and so on. With serial communication, you can use all predefined command or command combinations to do all operations on music files. This module also supports general file systems such as FAT16 and FAT32. It gets a Grove UART interface, a 3.5 mm audio jack and a micro-SD slot. With this module, you can add some noise to your silent applications.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-MP3_v2.0.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-MP3_v2.0",permalink:"/Grove-MP3_v2.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-MP3_v2.0.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"Jan 9, 2022",frontMatter:{title:"Grove - MP3 v2.0",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-MP3_v2.0/",slug:"/Grove-MP3_v2.0",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - LED Matrix Driver v1.0",permalink:"/Grove-LED_Matrix_Driver_v1.0"},next:{title:"Grove - MP3 v3.0",permalink:"/Grove-MP3-v3"}},s={},d=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Application ideas",id:"application-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},u="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Product_View_700_S.jpg",alt:null})),(0,n.yg)("p",null,"Grove - MP3 v2.0 is a tiny-sized and compact audio module. It supports various audio file operations for an audio file of MP3, WAV and WMV format, such as random music playing, play music in specific files, and so on. With serial communication, you can use all predefined command or command combinations to do all operations on music files. This module also supports general file systems such as FAT16 and FAT32. It gets a Grove UART interface, a 3.5 mm audio jack and a micro-SD slot. With this module, you can add some noise to your silent applications."),(0,n.yg)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/3FMlt_aqhOc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.yg)("p",{style:{}},(0,n.yg)("a",{href:"https://www.seeedstudio.com/Grove-MP3-v2-0-p-2597.html",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",width:210,height:41,border:0}))),(0,n.yg)("h2",{id:"version"},"Version"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Product Version"),(0,n.yg)("th",{parentName:"tr",align:null},"Changes"),(0,n.yg)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Grove - MP3 v1.0"),(0,n.yg)("td",{parentName:"tr",align:null},"Initial"),(0,n.yg)("td",{parentName:"tr",align:null},"April 28 2013")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Grove - MP3 v2.0"),(0,n.yg)("td",{parentName:"tr",align:null},"Change to KT403A"),(0,n.yg)("td",{parentName:"tr",align:null},"Dec 15 2015")))),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"General operations on audio files"),(0,n.yg)("li",{parentName:"ul"},"On-board micro-SD slot and 3.5 mm audio jack"),(0,n.yg)("li",{parentName:"ul"},"Support sample rate of 8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)"),(0,n.yg)("li",{parentName:"ul"},"24-bit DAC output, 90 dB (at Max.) dynamic output range, signal-noise ratio at 85 dB"),(0,n.yg)("li",{parentName:"ul"},"MP3, WMV and WAV audio format and FAT16, FAT32 files system supported"),(0,n.yg)("li",{parentName:"ul"},"Embed 10 levels of equalization in total")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.yg)("h2",{id:"application-ideas"},"Application ideas"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Middle-level audio module for any applications.")),(0,n.yg)("h2",{id:"specifications"},"Specifications"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:null},"Value"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Input"),(0,n.yg)("td",{parentName:"tr",align:null},"5 V (DC)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Operating current (no signal output state)"),(0,n.yg)("td",{parentName:"tr",align:null},"less than 15 mA")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Operating current"),(0,n.yg)("td",{parentName:"tr",align:null},"less than 40 mA")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Chip"),(0,n.yg)("td",{parentName:"tr",align:null},"KT403A ",(0,n.yg)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf"},"(datasheet)"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Chip LDO output voltage"),(0,n.yg)("td",{parentName:"tr",align:null},"3.3 V")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Chip output current"),(0,n.yg)("td",{parentName:"tr",align:null},"100mA(at Max.)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"File formats supported"),(0,n.yg)("td",{parentName:"tr",align:null},"MP3, WAV, WMA")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Maximum memory supported for SD card"),(0,n.yg)("td",{parentName:"tr",align:null},"8 GB")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Sampling rate"),(0,n.yg)("td",{parentName:"tr",align:null},"8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)")))),(0,n.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,n.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Component_view-front-1200_S.jpg",alt:null})),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Component_View-Back-1200_S.jpg",alt:null})),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.yg)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.yg)("h4",{id:"hardware"},"Hardware"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.yg)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove - MP3 v2.0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_s.jpg",alt:"enter image description here"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/Grove-MP3-v20-p-2597.html?cPath=98_106_57"},"Get One Now"))))),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"We need SD card with music inside and Headset/earphone or stereo with 3.5 mm audio jack as well.\n"))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Connect Grove-MP3 v2.0 to port D2 of Grove-Base Shield."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/seeeduino_mp3.jpg",alt:null})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly connect Grove-MP3 v2.0 to Seeeduino as below.")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove-MP3 v2.0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"5V"),(0,n.yg)("td",{parentName:"tr",align:null},"Red")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"GND"),(0,n.yg)("td",{parentName:"tr",align:null},"Black")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"D3"),(0,n.yg)("td",{parentName:"tr",align:null},"White")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"D2"),(0,n.yg)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.yg)("h4",{id:"software"},"Software"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Download the  ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player"},"Grove-MP3 v2.0"),"  from Github."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Refer ",(0,n.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," You can select ",(0,n.yg)("strong",{parentName:"li"},"Seeed_Serial_MP3_Player/examples/KT403A_Terminal_player")," example and upload to arduino. If you do not know how to upload the code, please check ",(0,n.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4.")," We will see the info at COM terminal as below.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png",alt:null})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"For advanced programming, you can [download](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf) datasheet of chip KT403A.\n"))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 5.")," Please key in the related command to play the music.")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"The library supports AVR/SAMD/STM32F4 devices, both hardware and software serial as well.\n"))),(0,n.yg)("p",null,"There are 2 kinds of serial ports. One is COMSerial, stands for communication port(connecting with Grove-MP3 module). The other is ShowSerial, stands for serial info display port(connectiong with PC)."),(0,n.yg)("p",null,"Most of arduino boards have at least one Serial, some have multiple serials(Arduino Mega has 4 Serials). It communicates on digital pins 0 (RX) and 1 (TX) as well as with the computer via USB. So if you connect UART device on pin D0 and pin D1, you have to remove them before downloading program through USB. Or else it will cause upload fails. Sometimes you need more serial ports than the number of hardware serial ports available. If this is the case, you can use an Software Serial that uses software to emulate serial hardware. Software serial requires a lot of help from the Arduino controller to send and receive data, so it\u2019s not as fast or efficient as hardware serial. For more info about the Serial, please refer to ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Serial/"},"Seeed Arduino Serial"),"."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"AVR:")," For the below example, We define Software Serial as COMSerial(connectiong with Grove-MP3 module). NOT all the digital pins can be used for software serial. You can refer to ",(0,n.yg)("a",{parentName:"p",href:"https://www.arduino.cc/en/Reference/SoftwareSerial"},"Software Serial")," for detail pins. We define hardware Serial as ShowSerial(connecting with PC). If you use Arduino Mega, you can connect the hardware Serial to ShowSerial and the other Serial1/Serial2/Serial3 to COMSerial. So you can refer to AVR Mega setting.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"SAMD:")," For the below example, The SAMD does not support software serial. We use the hardware serial ",(0,n.yg)("strong",{parentName:"p"},"Serial1")," to commuincate with Grove-MP3 Module and ",(0,n.yg)("strong",{parentName:"p"},"SerialUSB")," to print message on PC.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"STM32F4:")," For the below example, We use the hardware serial ",(0,n.yg)("strong",{parentName:"p"},"Serial")," to commuincate with Grove-MP3 Module and ",(0,n.yg)("strong",{parentName:"p"},"SerialUSB")," to print message on PC."))),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"For more info about the Serial, please refer to [Seeed Arduino Serial](https://wiki.seeedstudio.com/Seeed_Arduino_Serial/).\n"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-c++"},"#ifdef __AVR__\n#include <SoftwareSerial.h>\nSoftwareSerial SSerial(2, 3); // RX, TX\n#define COMSerial SSerial\n#define ShowSerial Serial \n\nKT403A<SoftwareSerial> Mp3Player;\n#endif\n\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n#define COMSerial Serial1\n#define ShowSerial SerialUSB \n\nKT403A<Uart> Mp3Player;\n#endif\n\n#ifdef ARDUINO_ARCH_STM32F4\n#define COMSerial Serial\n#define ShowSerial SerialUSB \n\nKT403A<HardwareSerial> Mp3Player;\n#endif\n")),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_Schematic_files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Eagle&PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_Schematic_files.zip"},"Grove-MP3_v2.0_Schematic files")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Librarie]"),"  ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player"},"Grove-Serial MP3 Player V2.0 Libraries")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf"},"KT403A Datasheet"))),(0,n.yg)("h2",{id:"projects"},"Projects"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Arduino Based Security Project Using Cayenne"),": Arduino based Home Security Project. SMS/email alerts when intruder detected. Personalized messages for authorized personnel."),(0,n.yg)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed",width:"350"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Leaf Piano"),": We made a piano using a touch sensor, as well as leaves for piano keys."),(0,n.yg)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://project.seeedstudio.com/SeeedStudio/leaf-piano-5261a6/embed",width:"350"}),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);