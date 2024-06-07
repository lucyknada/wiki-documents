"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28235],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,y=u["".concat(l,".").concat(c)]||u[c]||p[c]||i;return n?r.createElement(y,o(o({ref:t},g),{},{components:n})):r.createElement(y,o({ref:t},g))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(58168),a=(n(96540),n(15680));const i={description:"Getting started with Grove Ultrasonic Sensor (SMS812)",title:"Grove Ultrasonic Sensor (SMS812)",keywords:["ultrasonic","sms812"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove_ultrasonic_sensor_sms812",last_update:{date:"08/16/2023",author:"ZouXiong.Xiao"}},o="Grove Ultrasonic Sensor (SMS812)",s={unversionedId:"Sensor/Grove/Grove_Sensors/Proximity/Grove-Ultrasonic_Sensor_SMS812",id:"Sensor/Grove/Grove_Sensors/Proximity/Grove-Ultrasonic_Sensor_SMS812",title:"Grove Ultrasonic Sensor (SMS812)",description:"Getting started with Grove Ultrasonic Sensor (SMS812)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Proximity/Grove-Ultrasonic_Sensor_SMS812.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Proximity",slug:"/grove_ultrasonic_sensor_sms812",permalink:"/grove_ultrasonic_sensor_sms812",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Proximity/Grove-Ultrasonic_Sensor_SMS812.md",tags:[],version:"current",lastUpdatedBy:"ZouXiong.Xiao",lastUpdatedAt:1692144e3,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{description:"Getting started with Grove Ultrasonic Sensor (SMS812)",title:"Grove Ultrasonic Sensor (SMS812)",keywords:["ultrasonic","sms812"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove_ultrasonic_sensor_sms812",last_update:{date:"08/16/2023",author:"ZouXiong.Xiao"}},sidebar:"ProductSidebar",previous:{title:"Grove - Moisture Sensor",permalink:"/Grove-Moisture_Sensor"},next:{title:"Sensor - Distance(introduction)",permalink:"/Sensor_distance"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Application",id:"application",level:3},{value:"Features",id:"features",level:3},{value:"Hardware Overview",id:"hardware-overview",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Arduino Library Overview",id:"arduino-library-overview",level:2},{value:"Function",id:"function",level:3},{value:"Installation",id:"installation",level:3},{value:"XIAO Example",id:"xiao-example",level:2},{value:"Demo 1: IO Mode Usage",id:"demo-1-io-mode-usage",level:3},{value:"Demo 2: UART Mode Usage",id:"demo-2-uart-mode-usage",level:3},{value:"Demo 3: UART REQ Mode Usage",id:"demo-3-uart-req-mode-usage",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"grove-ultrasonic-sensor-sms812"},"Grove Ultrasonic Sensor (SMS812)"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/ultrasonic-sms812/1.jpg",style:{width:700,height:"auto"}})),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"/grove_ultrasonic_sensor_sms812"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Grove Ultrasonic Sensor (SMS812) is a miniature, ultra-low power ranging sensor. Grove Ultrasonic Sensor (SMS812) is based on the ultrasonic time-off-light (ToF)  principle, and is designed with related acoustics, electricity and algorithms. High precision distance measurement is achieved through the energy difference of ultrasonic echo signals on the surface of different materials, and output millimeter-level distance information and its echo energy intensity value, and can also output flag bits to distinguish soft and hard materials. Furthermore, it can be used for cleaning robots to identify ground materials and measure distances within a certain range. It is small size and easy to install."),(0,a.yg)("h3",{id:"application"},"Application"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The cleaning robot recognizes the soft and hard materials on the ground"),(0,a.yg)("li",{parentName:"ul"},"Home service robot or robot vacuum cleaner to obtain ground information"),(0,a.yg)("li",{parentName:"ul"},"3D printer lever detection")),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Millimeter-level ranging accuracy, great ranging stability"),(0,a.yg)("li",{parentName:"ul"},"Recognize soft and hard materials and output I/O information"),(0,a.yg)("li",{parentName:"ul"},"The detection distance up to 20-50mm and blind area is small"),(0,a.yg)("li",{parentName:"ul"},"Arduino support")),(0,a.yg)("h3",{id:"hardware-overview"},"Hardware Overview"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/ultrasonic-sms812/2.png",style:{width:600,height:"auto"}})),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The structure of this sensor is a cylindrical and made by plastic injection molding."),(0,a.yg)("li",{parentName:"ol"},"The dimensions in the above figure are in millimeters.")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/ultrasonic-sms812/3.png",style:{width:600,height:"auto"}})),(0,a.yg)("p",null,"This interface is PH1.0-4P plug connector. And the definition of the pin is below:"),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{align:"center"},(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},"Pin"),(0,a.yg)("td",{align:"center"},"Type"),(0,a.yg)("td",{align:"center"},"Description"),(0,a.yg)("td",{align:"center"},"Defaults"),(0,a.yg)("td",{align:"center"},"Data stream")),(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},"GND"),(0,a.yg)("td",{align:"center"},"Power supply"),(0,a.yg)("td",{align:"center"},"Negative"),(0,a.yg)("td",{align:"center"},"0V"),(0,a.yg)("td",{align:"center"})),(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},"Tx"),(0,a.yg)("td",{align:"center"},"Output"),(0,a.yg)("td",{align:"center"},"System serial port output"),(0,a.yg)("td",{align:"center"}),(0,a.yg)("td",{align:"center"},"Ladar to Peripherals")),(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},"Rx"),(0,a.yg)("td",{align:"center"},"Input"),(0,a.yg)("td",{align:"center"},"System serial port input"),(0,a.yg)("td",{align:"center"}),(0,a.yg)("td",{align:"center"},"Peripherals to Ladar")),(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},"VCC"),(0,a.yg)("td",{align:"center"},"Power supply"),(0,a.yg)("td",{align:"center"},"Positive"),(0,a.yg)("td",{align:"center"},"3.3V"),(0,a.yg)("td",{align:"center"}))))),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,a.yg)("p",null,"This routine will introduce the use of this ultrasonic radar using the XIAO SAMD21 as the master control. For the convenience of wiring, we will also use the Grove expansion board. You can choose one according to your actual needs."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{align:"center"},(0,a.yg)("tr",null,(0,a.yg)("th",null,"XIAO SAMD21"),(0,a.yg)("th",null,"Grove Base for XIAO"),(0,a.yg)("th",null,"Grove Ultrasonic Sensor (SMS812)")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg",style:{width:250,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png",style:{width:250,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/ultrasonic-sms812/4.jpg",style:{width:250,height:"auto"}})))),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"/grove_ultrasonic_sensor_sms812"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,a.yg)("p",null,"Then, connect the ultrasonic radar to the UART interface of the XIAO."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/ultrasonic-sms812/5.jpg",style:{width:700,height:"auto"}})),(0,a.yg)("h2",{id:"arduino-library-overview"},"Arduino Library Overview"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," or see the simple tutorial below:")),(0,a.yg)("p",null,"The button below will take you directly to our Arduino program library for the Grove Ultrasonic Sensor (SMS812)."),(0,a.yg)("div",{class:"github_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"github_item",href:"https://github.com/limengdu/SeeedStudio_SMS812_Sensor/tree/main"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Download the Library")))," ",(0,a.yg)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,a.yg)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"function"},"Function"),(0,a.yg)("p",null,"Before we get started developing a sketch, let's look at the available functions of the library."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void setIOMode()")," \u2014\u2014 This function is used to set the radar to IO mode, which is mainly used to detect the target material.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void setUARTMode()")," \u2014\u2014 This function is used to set the radar to UART mode, UART mode radar will actively report distance and material information.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void setUARTREQMode()")," \u2014\u2014 This function is used to set the radar to UART REQ mode, in which the distance and material information can only be queried by sending a query command.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void checkUARTREQ(int delaytime = 0, bool showSwitch = true)")," \u2014\u2014 This function is used in UART REQ mode to query the detected material and distance."),(0,a.yg)("p",{parentName:"li"},"  ",(0,a.yg)("strong",{parentName:"p"},"Input Parameters")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"delaytime"),": The default value is 0. This parameter controls the time in milliseconds for the query command to be issued."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"showSwitch"),": The default is on. This parameter controls whether the original data frame is printed out."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"bool getFrame(bool showSwitch = true)")," \u2014\u2014 This function is used to get the original data frame."),(0,a.yg)("p",{parentName:"li"},"  ",(0,a.yg)("strong",{parentName:"p"},"Input Parameters")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"showSwitch"),": The default is on. This parameter controls whether the original data frame is printed out."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"bool parseDatagram(bool showSwitch = false)")," \u2014\u2014 This function is used to parse the original data frame."),(0,a.yg)("p",{parentName:"li"},"  ",(0,a.yg)("strong",{parentName:"p"},"Input Parameters")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"showSwitch"),": The default is off. This parameter controls whether the original data frame is printed out.")))),(0,a.yg)("h3",{id:"installation"},"Installation"),(0,a.yg)("p",null,"Since you have downloaded the zip Library, open your Arduino IDE, click on ",(0,a.yg)("strong",{parentName:"p"},"Sketch > Include Library > Add .ZIP Library"),". Choose the zip file you just downloaded\uff0cand if the library install correct, you will see ",(0,a.yg)("strong",{parentName:"p"},"Library added to your libraries")," in the notice window. Which means the library is installed successfully."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png",style:{width:800,height:"auto"}})),(0,a.yg)("h2",{id:"xiao-example"},"XIAO Example"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1.")," You need to Install an Arduino Software."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("a",{href:"https://www.arduino.cc/en/Main/Software",target:"_blank"},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png"})))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2.")," Launch the Arduino application."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{700}",src:"https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3.")," Select your development board model and add it to the Arduino IDE."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If you want to use ",(0,a.yg)("strong",{parentName:"p"},"Seeeduino V4.2")," for the later routines, please refer to ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Boards/"},"this tutorial"))," to finish adding.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If you want to use ",(0,a.yg)("strong",{parentName:"p"},"XIAO SAMD21(Seeeduino XIAO)")," for the later routines, please refer to ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO/#software"},"this tutorial"))," to finish adding.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If you want to use ",(0,a.yg)("strong",{parentName:"p"},"XIAO RP2040")," for the later routines, please refer to ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup"},"this tutorial"))," to finish adding.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If you want to use ",(0,a.yg)("strong",{parentName:"p"},"XIAO nRF52840")," for the later routines, please refer to ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/XIAO_BLE/#software-setup"},"this tutorial"))," to finish adding.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If you want to use ",(0,a.yg)("strong",{parentName:"p"},"XIAO ESP32C3")," for the later routines, please refer to ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#software-setup"},"this tutorial"))," to finish adding.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If you want to use ",(0,a.yg)("strong",{parentName:"p"},"XIAO ESP32S3")," for the later routines, please refer to ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation"},"this tutorial"))," to finish adding."))),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"For ",(0,a.yg)("strong",{parentName:"p"},"XIAO nRF52840"),", please select ",(0,a.yg)("strong",{parentName:"p"},"Seeed nRF52 mbed-enabled Boards"),", otherwise an error may be reported when running programs."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png",style:{width:600,height:"auto"}}))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4.")," Install the Arduino code library."),(0,a.yg)("h3",{id:"demo-1-io-mode-usage"},"Demo 1: IO Mode Usage"),(0,a.yg)("p",null,"This example will guide you through the process of printing out the flag bits to distinguish soft and hard materials. Here is the reference code for arduino:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},'#include "sms812.h"\n\nconst int radarPin = A7;\n\n//#include <SoftwareSerial.h>\n// Choose any two pins that can be used with SoftwareSerial to RX & TX\n//#define RX_Pin A6\n//#define TX_Pin A7\n\n//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);\n\n// we\'ll be using software serial\n//SMS812_Sensor radar = SMS812_Sensor(&mySerial);\n\n// can also try hardware serial with\nSMS812_Sensor radar = SMS812_Sensor(&Serial1);\n\nvoid setup() {\n  // put your setup code here, to run once:\n  Serial.begin(115200);\n  \n  Serial1.begin(115200);\n  //  mySerial.begin(115200);\n\n  pinMode(radarPin, INPUT);\n\n  while(!Serial);   //When the serial port is opened, the program starts to execute.\n  Serial.println("Ready");\n\n  radar.setIOMode();\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n  int value = analogRead(radarPin); // Read level status of D7 pin\n  Serial.println(value);\n  delay(500);\n}\n\n')),(0,a.yg)("p",null,"After you activate the IO mode, you should know that if the US5 sensor recognize the soft material, its TX pin will send the flag bits ",(0,a.yg)("inlineCode",{parentName:"p"},"0x01")," to the board, otherwise, the hard material is ",(0,a.yg)("inlineCode",{parentName:"p"},"0x00"),", so you should set the ",(0,a.yg)("inlineCode",{parentName:"p"},"radarPin")," as ",(0,a.yg)("strong",{parentName:"p"},"A0"),"(which connect the TX pin of sensor) or the pin which support analog inputs."),(0,a.yg)("p",null,"The high value above 1000 means recognizing the hard material, and the value below the 20 means recognizing the soft material or air."),(0,a.yg)("p",null,"So, when you move the sensor in front of the will see the serial output like below:"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/ultrasonic-sms812/6.png",style:{width:700,height:"auto"}})),(0,a.yg)("h3",{id:"demo-2-uart-mode-usage"},"Demo 2: UART Mode Usage"),(0,a.yg)("p",null,"For UART mode, the radar outputs measurements at a rate of 100Hz. The format of the data telegram is shown in the table below."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{align:"center"},(0,a.yg)("tr",null,(0,a.yg)("th",null,"Header frame"),(0,a.yg)("th",null,"Command frame"),(0,a.yg)("th",null,"Data length frame"),(0,a.yg)("th",null,"Data frame"),(0,a.yg)("th",null,"Checksum frame")),(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},"0xAA 0xAA"),(0,a.yg)("td",{align:"center"},"0xFD"),(0,a.yg)("td",{align:"center"},"0x04"),(0,a.yg)("td",{align:"center"},"--"),(0,a.yg)("td",{align:"center"},"CS")))),(0,a.yg)("p",null,"The data bits occupy 4 Byte. the first 1 Byte is the material flag bit, 0 means hard material and 1 means soft material. For soft materials, it will be impossible to measure the distance. Then there is the distance value, which accounts for 2 Byte in millimeters. The last 1Byte is the intensity value, indicating the strength of the received ultrasonic signal."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{align:"center"},(0,a.yg)("tr",null,(0,a.yg)("th",null,"Material flag bit"),(0,a.yg)("th",null,"Distance value"),(0,a.yg)("th",null,"Strength")),(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},"1 Byte"),(0,a.yg)("td",{align:"center"},"2 Byte"),(0,a.yg)("td",{align:"center"},"1 Byte")))),(0,a.yg)("p",null,"In this example, we will use the functions in the library to parse the received data frames and print out all the feature data reported by the Sensor active via the serial port."),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"hardware serial port "),"on the board XIAO SAMD21 is the UART interface pin ",(0,a.yg)("strong",{parentName:"p"},"A6")," and ",(0,a.yg)("strong",{parentName:"p"},"A7"),".You can also use any two pins as the software serial."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},'#include "sms812.h"\n\n//#include <SoftwareSerial.h>\n// Choose any two pins that can be used with SoftwareSerial to RX & TX\n//#define RX_Pin A2\n//#define TX_Pin A3\n\n//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);\n\n// we\'ll be using software serial\n//SMS812_Sensor radar = SMS812_Sensor(&mySerial);\n\n// can also try hardware serial with\nSMS812_Sensor radar = SMS812_Sensor(&Serial1);\n\nvoid setup() {\n  // put your setup code here, to run once:\n  Serial.begin(115200);\n  \n  Serial1.begin(115200);\n  //  mySerial.begin(115200);\n\n  while(!Serial);   //When the serial port is opened, the program starts to execute.\n  Serial.println("Ready");\n\n  radar.setUARTMode();\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n  \n  // Prints only the acquired raw data frames\n//   radar.getFrame();\n//   delay(1);                //Add time delay to avoid program jam\n\n  // Parses the contents of the data frame. If the function parseDatagram is given a true argument, the raw data frame display is enabled.\n  if(radar.parseDatagram(true)){\n    if(radar.material == 0x00){\n      Serial.println("No blankets detected.");\n      Serial.print("The measured distance is: ");\n      Serial.print(radar.distance);\n      Serial.println(" mm");\n      Serial.print("The ultrasonic signal strength is: ");\n      Serial.println(radar.strength);\n    }\n  }\n  delay(1);                //Add time delay to avoid program jam\n}\n')),(0,a.yg)("p",null,"After upload the code to the board, you move the sensor in front of the ",(0,a.yg)("strong",{parentName:"p"},"hard material"),"(soft material will not output the parsed data), you can see the parsed data below: "),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/ultrasonic-sms812/7.png",style:{width:1e3,height:"auto"}})),(0,a.yg)("h3",{id:"demo-3-uart-req-mode-usage"},"Demo 3: UART REQ Mode Usage"),(0,a.yg)("p",null,"In this example, we set the delaytime parameter to 1000, meaning that we poll for 1 second to send a command query. And the sensor will feedback the ranging result by the raw message, which length is 9 bytes."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},'#include "sms812.h"\n\n//#include <SoftwareSerial.h>\n// Choose any two pins that can be used with SoftwareSerial to RX & TX\n//#define RX_Pin A2\n//#define TX_Pin A3\n\n//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);\n\n// we\'ll be using software serial\n//SMS812_Sensor radar = SMS812_Sensor(&mySerial);\n\n// can also try hardware serial with\nSMS812_Sensor radar = SMS812_Sensor(&Serial1);\n\nvoid setup() {\n  // put your setup code here, to run once:\n  Serial.begin(115200);\n  Serial1.begin(115200);\n  pinMode(A7, INPUT);\n\n  //  mySerial.begin(115200);\n\n  while(!Serial);   //When the serial port is opened, the program starts to execute.\n\n  Serial.println("Ready");\n\n  radar.setUARTREQMode();\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n  radar.checkUARTREQ(1000, true);      // Check radar information every second. And turn on raw data frame display.\n\n  // Parses the contents of the data frame. If the function parseDatagram is given a true argument, the raw data frame display is enabled.\n  if(radar.material == 0x00){\n    Serial.println("No blankets detected.");\n    Serial.print("The measured distance is: ");\n    Serial.print(radar.distance);\n    Serial.println(" mm");\n    Serial.print("The ultrasonic signal strength is: ");\n    Serial.println(radar.strength);\n  }\n}\n')),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/ultrasonic-sms812/7.png",style:{width:1e3,height:"auto"}})),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/ultrasonic-sms812/sms812_Development_Manual_Alpha_V0.2.0.pdf"},"Development Manual Alpha V0.2.0")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/ultrasonic-sms812/sms812_DataSheet_Alpha_V0.1.3.pdf"},"DataSheet Alpha V0.1.3"))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}p.isMDXComponent=!0}}]);