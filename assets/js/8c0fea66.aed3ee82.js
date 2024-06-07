"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53228],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var i=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),g=n,y=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return r?i.createElement(y,a(a({ref:t},p),{},{components:r})):i.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var d=2;d<o;d++)a[d]=r[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2679:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=r(58168),n=(r(96540),r(15680));const o={description:"Configure_the_Parameters_of_Wio_Tracker_1110",title:"Setup Your Toolchain",keywords:["Tracker","Wio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/setup_toolchain_for_wio_tracker",last_update:{date:"9/19/2023",author:"Jessie"}},a=void 0,l={unversionedId:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Development_Tutorial/Setup_toolchain",id:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Development_Tutorial/Setup_toolchain",title:"Setup Your Toolchain",description:"Configure_the_Parameters_of_Wio_Tracker_1110",source:"@site/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Development_Tutorial/Setup_toolchain.md",sourceDirName:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Development_Tutorial",slug:"/setup_toolchain_for_wio_tracker",permalink:"/setup_toolchain_for_wio_tracker",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Development_Tutorial/Setup_toolchain.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1695081600,formattedLastUpdatedAt:"Sep 19, 2023",frontMatter:{description:"Configure_the_Parameters_of_Wio_Tracker_1110",title:"Setup Your Toolchain",keywords:["Tracker","Wio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/setup_toolchain_for_wio_tracker",last_update:{date:"9/19/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Home Assistant Integration",permalink:"/wio_tracker_home_assistant"},next:{title:"Introduction",permalink:"/Wio-WM1110_Dev_Kit/Introduction"}},s={},d=[{value:"Setup your toolchian",id:"setup-your-toolchian",level:3},{value:"Install Arduino IDE",id:"install-arduino-ide",level:4},{value:"Add Seeed Board",id:"add-seeed-board",level:4},{value:"Wio Tracker 1110 examples",id:"wio-tracker-1110-examples",level:4},{value:"Add Libraries",id:"add-libraries",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,i.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The Wio Tracker 1110 Dev Board leverages Arduino to enhance your coding experience, before you start development, need to set up your toolchain first."),(0,n.yg)("h3",{id:"setup-your-toolchian"},"Setup your toolchian"),(0,n.yg)("h4",{id:"install-arduino-ide"},"Install Arduino IDE"),(0,n.yg)("p",null,"The Arduino IDE (Integrated Development Environment) is an open-source software, mainly used for writing, compiling & uploading code to almost all Arduino Modules.\nIt is available for all operating systems i.e. MAC, Windows, Linux and runs on the Java Platform that comes with inbuilt functions and commands that play a vital role in debugging, editing and compiling the code."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-wio.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.arduino.cc/en/software"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Arduino IDE Download "))))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino"),".")),(0,n.yg)("h4",{id:"add-seeed-board"},"Add Seeed Board"),(0,n.yg)("p",null,"Navigate to ",(0,n.yg)("inlineCode",{parentName:"p"},"Arduino IDE")," -> ",(0,n.yg)("inlineCode",{parentName:"p"},"Preferences")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-add.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)("p",null,"Copy this URL to ",(0,n.yg)("inlineCode",{parentName:"p"},"Additional boards manager URLs"),", then click ",(0,n.yg)("inlineCode",{parentName:"p"},"OK"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json\n")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/copy-urls.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)("p",null,"Click ",(0,n.yg)("inlineCode",{parentName:"p"},"Board Manager"),".\nSearch ",(0,n.yg)("inlineCode",{parentName:"p"},"Seeed nRF52 Boards")," and install it."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-boa.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)("p",null,"Then need to select the Board and Port.",(0,n.yg)("br",null),"\nSearch ",(0,n.yg)("inlineCode",{parentName:"p"},"Seeed Wio Tracker 1110")," and select it, choose the port and click ",(0,n.yg)("inlineCode",{parentName:"p"},"OK"),"."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The port should be like 'Serial Port(USB)'")),(0,n.yg)("h4",{id:"wio-tracker-1110-examples"},"Wio Tracker 1110 examples"),(0,n.yg)("p",null,"SenseCAP provides ",(0,n.yg)("inlineCode",{parentName:"p"},"Wio Tracker 1110 Examples")," for users to get started quickly."),(0,n.yg)("p",null,"Navigate to the ",(0,n.yg)("inlineCode",{parentName:"p"},"File")," tab, select ",(0,n.yg)("inlineCode",{parentName:"p"},"Example"),"-> ",(0,n.yg)("inlineCode",{parentName:"p"},"Wio Tracker 1110 Examples"),", then choose the one you need."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/example.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)("h3",{id:"add-libraries"},"Add Libraries"),(0,n.yg)("p",null,"In the Arduino IDE, you can search for it in the ",(0,n.yg)("inlineCode",{parentName:"p"},"Library Manager"),", e.g. ",(0,n.yg)("inlineCode",{parentName:"p"},"Seeed_Arduino_AHT20"),", and then install it."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-lib.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)("details",null,(0,n.yg)("summary",null,"Click to preview offline installation"),(0,n.yg)("p",null,"To install it ",(0,n.yg)("em",{parentName:"p"},"offline"),", you can ",(0,n.yg)("strong",{parentName:"p"},"download the repo zip")," from GitHub, navigate to ",(0,n.yg)("strong",{parentName:"p"},"Sketch")," -> ",(0,n.yg)("strong",{parentName:"p"},"Include Library")," -> ",(0,n.yg)("strong",{parentName:"p"},"Add .ZIP Library"),", then select the libraries you downloaded."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"}))),(0,n.yg)("admonition",{title:"Libraries for reference",type:"note"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_TinyUSB_Arduino"},"Adafruit TinyUSB Library for Arduino"),(0,n.yg)("br",null),"\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_SPIFlash"},"Adafruit SPI Flash"),(0,n.yg)("br",null),"\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR"},"Seeed_Arduino_LIS3DHTR"),(0,n.yg)("br",null),"\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-i2c-sgp41"},"Sensirion I2C SGP41 Arduino Library"),(0,n.yg)("br",null),"\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-i2c-sht4x"},"Sensirion I2C SHT4X Arduino Library"),(0,n.yg)("br",null),"\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-gas-index-algorithm"},"Sensirion Gas Index Algorithm Arduino Library"))))}c.isMDXComponent=!0}}]);