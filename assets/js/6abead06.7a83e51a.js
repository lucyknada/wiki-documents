"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82596],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return r?o.createElement(k,i(i({ref:t},u),{},{components:r})):o.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={description:"Grove - Joint v2.0",title:"Grove - Joint v2.0",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Joint_v2.0",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Joint_v2.0",id:"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Joint_v2.0",title:"Grove - Joint v2.0",description:"Grove - Joint v2.0",source:"@site/docs/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Joint_v2.0.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Switch&Button",slug:"/Grove-Joint_v2.0",permalink:"/Grove-Joint_v2.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Joint_v2.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Grove - Joint v2.0",title:"Grove - Joint v2.0",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Joint_v2.0",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Magnetic Switch",permalink:"/Grove-Magnetic_Switch"},next:{title:"Grove - Differential Amplifier v1.2",permalink:"/Grove-Differential_Amplifier_v1.2"}},p={},s=[{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Driver Install",id:"driver-install",level:3},{value:"Windows/Linux",id:"windowslinux",level:5},{value:"Mac OS",id:"mac-os",level:5},{value:"Preparations",id:"preparations",level:3},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Software Work",id:"software-work",level:3},{value:"Review Results",id:"review-results",level:3},{value:"Get Voltage of Battery",id:"get-voltage-of-battery",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint.jpg",alt:null})),(0,n.kt)("p",null,"Grove - Joint v2.0 shares many similarities with Seeeduino Lotus. It is a mini ATMEGA328 Microcontroller development board. It uses an Atmel ATMEGA328P-MU and CH340. ATMEGA328P-MU is a high performance, low power AVR 8-Bit Microcontroller. CH340 is a USB bus converter chip that can realize a USB to serial interface. Grove - Joint v2.0 has two Grove interfaces included I",(0,n.kt)("sup",null,"2"),"C port and two digital I/Os. It else support battery powered. You can do some simple applications with it."),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Microcontroller: ATmega328P-MU")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Operating Voltage: 5V")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Digital I/O Pins: 2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"I2C Port: 1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Analog Input Channels: 2 (multiplex with I",(0,n.kt)("sup",null,"2"),"C)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DC Current per I/O Pin: 40 mA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Flash Memory: 32 KB (ATmega328P-MU)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"RAM: 2 KB (ATmega328P-MU)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"EEPROM: 1 KB (ATmega328P-MU)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Clock Speed: 12 MHz"))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",null,"Here is block diagram of Grove - Joint module which consists of following parts."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint_instruction1_.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Battery Interface")," - This moudle can battery powered.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Light Sensor")," - There's a light sensor on the board which is connected to ",(0,n.kt)("strong",{parentName:"p"},"A0")," pin.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Status LED")," - There're 3 LEDs indicate the status of the board. TX(",(0,n.kt)("strong",{parentName:"p"},"D1"),"), RX(",(0,n.kt)("strong",{parentName:"p"},"D0"),") and L(",(0,n.kt)("strong",{parentName:"p"},"D10"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"INPUT Port")," - The INPUT Port is a Grove I",(0,n.kt)("sup",null,"2"),"C interface as well as two analog channels(",(0,n.kt)("strong",{parentName:"p"},"A4")," ","&"," ",(0,n.kt)("strong",{parentName:"p"},"A5"),").")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"OUTPUT Port")," - The OUTPUT Port is a Grove Interface too including two digital I/Os (",(0,n.kt)("strong",{parentName:"p"},"D3")," ","&"," ",(0,n.kt)("strong",{parentName:"p"},"D5"),").")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Button")," - The button is connected to ",(0,n.kt)("strong",{parentName:"p"},"D2")," , It can be used as a switch as well.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Micro USB Port")," - It can be used for power supply and download the code.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Power LED")," - The LED+ connect to VCC and LED- connect to ",(0,n.kt)("strong",{parentName:"p"},"D6"),", you can turn ",(0,n.kt)("strong",{parentName:"p"},"D6")," HIGH to turn off this led to save power.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"CHRG LED")," - The LED+ connect to VCC and LED- connect to ",(0,n.kt)("strong",{parentName:"p"},"A3"),", you can turn ",(0,n.kt)("strong",{parentName:"p"},"A3")," HIGH to turn off this led to save power."))),(0,n.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Battery Powered Toys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Mini Applications")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Wearable electronics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Baby monitor"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Now, Let's begin to use the mini Arduino board ."),(0,n.kt)("h3",{id:"driver-install"},"Driver Install"),(0,n.kt)("p",null,"Grove - Joint v2.0 uses CH340 to download. It needs a driver to be installed."),(0,n.kt)("h5",{id:"windowslinux"},"Windows/Linux"),(0,n.kt)("p",null,"Totally compatible with serial application program in computer endpoint Windows operation system"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1) Plug it to computer's USB Port.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2) Wait till you find it in Device Manager.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"3) If you do not find the port, please download the Driver from ",(0,n.kt)("a",{parentName:"p",href:"http://www.wch.cn/downloads.php?name=pro&proid=5"},"Here")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/CH340_Driver.jpg",alt:null})),(0,n.kt)("h5",{id:"mac-os"},"Mac OS"),(0,n.kt)("p",null,"Download the driver from here:  ",(0,n.kt)("a",{parentName:"p",href:"http://www.wch.cn/download/CH341SER_MAC_ZIP.html"},"http://www.wch.cn/download/CH341SER_MAC_ZIP.html")),(0,n.kt)("p",null,"On Mac OS Yosemite:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1) Download and install the CH340/CH341 driver package")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2) Open Terminal program (located in /Applications/Utilities/)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"3) Type command: ",(0,n.kt)("inlineCode",{parentName:"p"},'sudo nvram boot-args="debug=0x146 kext-dev-mode=1"'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"4) Enter your password for sudo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"5) Restart your computer"))),(0,n.kt)("p",null,"The driver is not signed in Yosemite, so you need to bypass the signed driver check."),(0,n.kt)("p",null,"If you want restore your Mac\u2019s setting, you can exit developer mode by redefining the boot-arg to your previous settings, or clear your boot-args as follows: ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo nvram -d boot-args")),(0,n.kt)("p",null,"To see what the current boot-args are, if any, type: ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo nvram boot-args")),(0,n.kt)("h3",{id:"preparations"},"Preparations"),(0,n.kt)("p",null,"Now we are making a demo for Grove - Joint v2.0 which require following modules."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Grove-Rotary-Angle-Sensor-p-770.html"},"Grove Rotary Angle Sensor"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-60-LED-1-Meter-p-1666.html"},"Digital RGB LED Flexi-Strip")))),(0,n.kt)("p",null,"Grove - Joint is compatible with Arduino.\nIf this is your first time using Arduino, Please put hand on Getting_Started_with_Seeeduino to start your Arduino journey."),(0,n.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,n.kt)("p",null,"Grove - Joint got two Grove sockets for connecting two modules above :\nThey are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Grove Rotary Angle Sensor - connect to Grove Input port")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Digital RGB LED Flexi-StripGrove - connect to Grove Output port"))),(0,n.kt)("p",null,"As shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint_demo_.jpg",alt:null})),(0,n.kt)("h3",{id:"software-work"},"Software Work"),(0,n.kt)("p",null,"Connect Grove - Joint to computer use a micro USB cable, if the status LED not blink , press the button ."),(0,n.kt)("p",null,"Click ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_demo.rar"},"here")," to download testing code and decompress it to any folders(e.g. Drive D or desktop\uff09"),(0,n.kt)("p",null,"Launch Arduino IDE and click File",">","Preferences and add absolute location for downloaded testing code at Sketchbook location."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint-Demo1.jpg",alt:null})),(0,n.kt)("p",null,"After configurations, please restart Arduino, click File",">","Sketchbook and choose Grove- Joint demo after which testing code will show up."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint-Demo2.jpg",alt:null})),(0,n.kt)("p",null,"Click Tools",">","Board to choose Arduino Fio and select respective serial port."),(0,n.kt)("h3",{id:"review-results"},"Review Results"),(0,n.kt)("p",null,"After upload completed, you can rotate the angle sensor then you'll find the RBG LED is lighted one by one."),(0,n.kt)("h3",{id:"get-voltage-of-battery"},"Get Voltage of Battery"),(0,n.kt)("p",null,"The Battery+ is connected to A2. You can read this pin to get the voltage of battery."),(0,n.kt)("p",null,"Upload the below code to get voltage of the battery."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'// Grove - Joint get Battery\n\nconst int pinBattery = A2;\n\nint getAnalogData(int pin)\n{\n    long sum = 0;\n    for(int i=0; i<32; i++)\n    {\n        sum+=analogRead(pin);\n    }\n    return (sum>>5);\n}\nvoid setup()\n{\n    Serial.begin(9600);\n    Serial.println("Grove - Joint V2 test - Battery");\n}\n\nvoid loop()\n{\n    int value = getAnalogData(pinBattery);\n\n    float voltage = value/1023.0*5.0;\n    Serial.print(voltage, 2);\n    Serial.println(" V");\n    delay(1000);\n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note")," that when you insert Grove Joint to a PC, the battery was charged, so maybe the voltage you read is not right."),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_PCB.rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_PCB.rar"},"Schematic in Eagle"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_SCH.rar"},"Schematic in PDF")))),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);