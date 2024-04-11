"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15791],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(i),c=o,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||s;return i?n.createElement(h,r(r({ref:t},p),{},{components:i})):n.createElement(h,r({ref:t},p))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=i.length,r=new Array(s);r[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,r[1]=a;for(var d=2;d<s;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},48705:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=i(87462),o=(i(67294),i(3905));const s={description:"ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3",title:"ESPHome Support on Seeed Studio XIAO ESP32C3",keywords:["ESPHome"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/XIAO-ESP32C3-for-ESPHome-Support",last_update:{date:"10/20/2023",author:"Zachary"}},r="XIAO ESP32C3 connecting with Home Assistant via ESPHome(all ports supported)",a={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/XIAO-ESP32C3-for-ESPHome-Support",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/XIAO-ESP32C3-for-ESPHome-Support",title:"ESPHome Support on Seeed Studio XIAO ESP32C3",description:"ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/XIAO-ESP32C3-for-ESPHome-Support.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application",slug:"/XIAO-ESP32C3-for-ESPHome-Support",permalink:"/XIAO-ESP32C3-for-ESPHome-Support",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/XIAO-ESP32C3-for-ESPHome-Support.md",tags:[],version:"current",lastUpdatedBy:"Zachary",lastUpdatedAt:169776e4,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{description:"ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3",title:"ESPHome Support on Seeed Studio XIAO ESP32C3",keywords:["ESPHome"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/XIAO-ESP32C3-for-ESPHome-Support",last_update:{date:"10/20/2023",author:"Zachary"}},sidebar:"ProductSidebar",previous:{title:"XIAO ESP32C3 Flash-storage",permalink:"/xiaoesp32c3-flash-storage"},next:{title:"Getting Started with Seeed Studio XIAO ESP32C6",permalink:"/xiao_esp32c6_getting_started"}},l={},d=[{value:"What are ESPHome and Home Assistant?",id:"what-are-esphome-and-home-assistant",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:2},{value:"Software Preparation",id:"software-preparation",level:2},{value:"Install Home Assistant",id:"install-home-assistant",level:3},{value:"Install ESPHome on Home Assistant",id:"install-esphome-on-home-assistant",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"1. Add Seeed Studio XIAO ESP32C3 to ESPHome",id:"1-add-seeed-studio-xiao-esp32c3-to-esphome",level:3},{value:"2. Connect Grove Modules and Send the Data",id:"2-connect-grove-modules-and-send-the-data",level:3},{value:"Develop Knowledge",id:"develop-knowledge",level:3},{value:"XIAO Expansion Board",id:"xiao-expansion-board",level:4},{value:"Pin Definitions",id:"pin-definitions",level:4},{value:"Grove Compatibility List with ESPHome",id:"grove-compatibility-list-with-esphome",level:4},{value:"3. Grove Connection and Data Transmission",id:"3-grove-connection-and-data-transmission",level:3},{value:"Grove - Temperature and Humidity Sensor (DHT20)",id:"grove---temperature-and-humidity-sensor-dht20",level:4},{value:"Setup Configuration",id:"setup-configuration",level:5},{value:"Visualize on Dashboard",id:"visualize-on-dashboard",level:5},{value:"Grove - Light Sensor(LS06-S)",id:"grove---light-sensorls06-s",level:4},{value:"Setup Configuration",id:"setup-configuration-1",level:5},{value:"Visualize on Dashboard",id:"visualize-on-dashboard-1",level:5},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xiao-esp32c3-connecting-with-home-assistant-via-esphomeall-ports-supported"},"XIAO ESP32C3 connecting with Home Assistant via ESPHome(all ports supported)"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png",style:{width:900,height:"auto"}})),(0,o.kt)("p",null,"This wiki will walkthrough step-by-step on how to connect ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"},"Seeed Studio XIAO ESP32C3")," with ESPHome running on Home Assistant and send the sensor data/ control devices after connecting Grove modules to XIAO ESP32C3. I applied all kinds of ports here, including ",(0,o.kt)("strong",{parentName:"p"},"digital, analog, IIC, SPI, and UART"),". Now let's get started!"),(0,o.kt)("h2",{id:"what-are-esphome-and-home-assistant"},"What are ESPHome and Home Assistant?"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png",style:{width:900,height:"auto"}})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/"},"ESPHome")," is a tool which aims to make managing your ESP boards as simple as possible. It reads in a YAML configuration file and creates custom firmware which it installs on your ESP device. Devices or sensors added in ESPHome\u2019s configuration will automatically show up in Home Assistant\u2019s UI. ESPHome can help you connect and send the data to Home Assistant devices."),(0,o.kt)("h2",{id:"hardware-preparation"},"Hardware Preparation"),(0,o.kt)("p",null,"I am using XIAO ESP32C3 as the control board, using ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/reRouter-CM4102032-p-5734.html"},"reRouter")," as the hardware here, along with multiple Grove Sensors."),(0,o.kt)("table",{align:"center"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Seeed Studio XIAO ESP32C3"),(0,o.kt)("th",null,"Seeed Studio Expansion Board"),(0,o.kt)("th",null,"Home Assistant Devices")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png",style:{width:100,height:"auto"}}))),(0,o.kt)("td",null,(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg",style:{width:210,height:"auto"}}))),(0,o.kt)("td",null,(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Home-Assistant/1.png",style:{width:210,height:"auto"}})))),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.kt)("td",{align:"center"},(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now\ud83d\uddb1\ufe0f")))))),(0,o.kt)("td",{align:"center"},(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Check More \ud83d\uddb1\ufe0f"))))))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Grove Sensors")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html"},"Grove - Temperature and Humidity Sensor (BME680)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html"},"Grove -Smart Air Quality Sensor (SGP41)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html"},"Grove - Analog Microphone")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html"},"Grove - Digital PIR Sensor"))),(0,o.kt)("h2",{id:"software-preparation"},"Software Preparation"),(0,o.kt)("h3",{id:"install-home-assistant"},"Install Home Assistant"),(0,o.kt)("p",null,"Make sure you already have Home Assistant up and running. There are multiple wiki introducing how to flash Home Assistant into the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-"},"products")," here. I'm using reRouter which is powered by Raspberry Pi CM4, so I can ",(0,o.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/installation/raspberrypi"},"directly use the official one to flash the OS into the reRouter"),"."),(0,o.kt)("h3",{id:"install-esphome-on-home-assistant"},"Install ESPHome on Home Assistant"),(0,o.kt)("p",null,"ESPHome is available as a ",(0,o.kt)("strong",{parentName:"p"},"Home Assistant Add-On")," and can simply be installed via the add-on store."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Click ",(0,o.kt)("strong",{parentName:"li"},"INSTALL"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Enable all the options and click ",(0,o.kt)("strong",{parentName:"li"},"START"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png",style:{width:900,height:"auto"}})),(0,o.kt)("p",null,"You will see the following window if ESPHome is successfully loaded"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png",style:{width:900,height:"auto"}})),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Once all the software and the hardware are really, we can now get started."),(0,o.kt)("h3",{id:"1-add-seeed-studio-xiao-esp32c3-to-esphome"},"1. Add Seeed Studio XIAO ESP32C3 to ESPHome"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Click ",(0,o.kt)("strong",{parentName:"li"},"+ NEW DEVICE"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Click CONTINUE")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3.")," Enter a ",(0,o.kt)("strong",{parentName:"li"},"Name")," for the device and enter WiFi credentials such as ",(0,o.kt)("strong",{parentName:"li"},"Network name")," and ",(0,o.kt)("strong",{parentName:"li"},"Password"),". Then click ",(0,o.kt)("strong",{parentName:"li"},"NEXT"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/7.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4.")," Select ",(0,o.kt)("strong",{parentName:"li"},"ESP32-C3")," and click")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/8.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 5.")," Click ",(0,o.kt)("strong",{parentName:"li"},"SKIP")," because we will configure this board manually")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png",style:{width:400,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 6.")," Click ",(0,o.kt)("strong",{parentName:"li"},"EDIT")," under the newly created board")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/9.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 7.")," This will open a ",(0,o.kt)("strong",{parentName:"li"},"YAML")," file and this file will be used to set all the board configurations. Edit the content under ",(0,o.kt)("strong",{parentName:"li"},"esp32")," as follows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'esphome:\n  name: xiao-esp32c3\n  platformio_options:\n   board_build.flash_mode: dio\n\nesp32:\n  board: seeed_xiao_esp32c3\n  variant: esp32c3\n  framework:\n    type: arduino\n    platform_version: 5.4.0\n\n# Enable logging\nlogger:\n hardware_uart: UART0\n\n# Enable Home Assistant API\napi:\n  password: "Your password"\n\nota:\n  password: "Your password"\n\nwifi:\n  ssid: !secret wifi_ssid\n  password: !secret wifi_password\n\n  # Enable fallback hotspot (captive portal) in case wifi connection fails\n  ap:\n    ssid: "Xiao-Esp32C3 Fallback Hotspot"\n    password: "Your Password"\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Here we are using the latest version of ",(0,o.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://github.com/espressif/arduino-esp32/releases"},"Arduino core")," for ESP32 and ",(0,o.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://github.com/platformio/platform-espressif32/releases"},"ESP32 support for PlatformIO"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 8.")," Click ",(0,o.kt)("strong",{parentName:"li"},"SAVE")," and then click ",(0,o.kt)("strong",{parentName:"li"},"INSTALL"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/10-2.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 9.")," Connect one end of a USB Type-C cable to Seeed Studio XIAO ESP32C3 and the other end to one of the USB ports on the reRouter CM4 1432")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 10.")," Click ",(0,o.kt)("strong",{parentName:"li"},"Plug into the computer running ESPHome Dashboard"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/12-1.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 11.")," Select the connected port. It is likely to be ",(0,o.kt)("inlineCode",{parentName:"li"},"/dev/ttyACM1 because /dev/ttyACM0")," is connected to the reRouter CM4 1432")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/13-1.png",style:{width:900,height:"auto"}})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Better to use 2.4GHz Wi-Fi")),(0,o.kt)("p",null,"Now it will download all the necessary board packages and flash the ESPHome firmware into the XIAO ESP32C3. If the flashing is successful, you will see the following output. If you see something error, try to restart your xiao esp32c3 or enter bootloader mode by holding on the BOOT BUTTON and connect XIAO ESP32C3."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/20.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 12.")," The above window displays the real-time logs from the connected board. Close it by clicking ",(0,o.kt)("strong",{parentName:"li"},"STOP"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/14.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 13.")," If you see the board status as ",(0,o.kt)("strong",{parentName:"li"},"ONLINE"),", that means the board is successful connected to WiFi")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/15.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 14.")," Go to ",(0,o.kt)("strong",{parentName:"li"},"Settings")," and select ",(0,o.kt)("strong",{parentName:"li"},"Devices & Services"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 15.")," You will see ",(0,o.kt)("strong",{parentName:"li"},"ESPHome")," as a discovered integration. Click ",(0,o.kt)("strong",{parentName:"li"},"CONFIGURE"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/20.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 16.")," Click ",(0,o.kt)("strong",{parentName:"li"},"SUBMIT"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/21.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 17.")," Input your password. This is the api password you can find in ",(0,o.kt)("strong",{parentName:"li"},"STEP 8"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/22.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 18.")," Click ",(0,o.kt)("strong",{parentName:"li"},"FINISH"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/23.png",style:{width:900,height:"auto"}})),(0,o.kt)("h3",{id:"2-connect-grove-modules-and-send-the-data"},"2. Connect Grove Modules and Send the Data"),(0,o.kt)("p",null,"Now we will connect Grove modules to Seeed Studio XIAO ESP32C3 so that we can display sensor data or control the devices using Home Assistant!"),(0,o.kt)("h3",{id:"develop-knowledge"},"Develop Knowledge"),(0,o.kt)("h4",{id:"xiao-expansion-board"},"XIAO Expansion Board"),(0,o.kt)("p",null,"In order to use Grove modules with Seeed Studio XIAO ESP32C3, we will use a ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},"Seeed Studio Expansion Base for XIAO")," and connect XIAO ESP32C3 on it."),(0,o.kt)("p",null,"After that, the Grove connectors on the board can be used to connect Grove modules. Here is the pin definitions."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png",style:{width:900,height:"auto"}})),(0,o.kt)("h4",{id:"pin-definitions"},"Pin Definitions"),(0,o.kt)("p",null,"You need to follow the graphic below to use the appropriate internal pin numbers when connecting the Grove modules to the Grove connectors on Grove Shield for Seeed Studio XIAO."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pin_map.png",style:{width:900,height:"auto"}})),(0,o.kt)("p",null,"For example, if you want to connect a Grove module to D0 port, you need to define the pin on ESPHome as GPIO2"),(0,o.kt)("h4",{id:"grove-compatibility-list-with-esphome"},"Grove Compatibility List with ESPHome"),(0,o.kt)("p",null,"Currently the following Grove modules are supported by ESPHome. Check ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/components/sensor/index.html#see-also"},"here")),(0,o.kt)("h3",{id:"3-grove-connection-and-data-transmission"},"3. Grove Connection and Data Transmission"),(0,o.kt)("p",null,"Now we will select several Grove modules and explain how they can be connected with ESPHome and Home Assistant."),(0,o.kt)("h4",{id:"grove---temperature-and-humidity-sensor-dht20"},"Grove - Temperature and Humidity Sensor (DHT20)"),(0,o.kt)("p",null,"This Temperature&Humidity sensor provides a pre-calibrated digital output. A unique capacitive sensor element measures relative humidity and the temperature is measured by a negative temperature coefficient (NTC) thermistor. It has excellent reliability and long term stability. ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html"},"Click here")," for the purchase."),(0,o.kt)("h5",{id:"setup-configuration"},"Setup Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Connect Grove - DHT20 to one of the I2C connectors on the Seeed Studio Expansion Base for XIAO")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic1.png",style:{width:300,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Inside the ",(0,o.kt)("strong",{parentName:"li"},"xiao-esp32c3.yaml")," file that we created before, change the file and push it OTA to XIAO ESP32C3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'esphome:\n  name: xiao-esp32c3\n  platformio_options:\n   board_build.flash_mode: dio\n\nesp32:\n  board: seeed_xiao_esp32c3\n  variant: esp32c3\n  framework:\n    type: arduino\n    platform_version: 5.4.0\n\n# Enable logging\nlogger:\n hardware_uart: UART0\n\napi:\n  password: "F4MQG/rBhNmqP8Nud+AJ+5CYu7LuIhIFTOcRwOm5Nw4="\n\nota:\n  password: "999afa1f8a07e85959a9f89f8f6aebb2"\n\nwifi:\n  ssid: !secret wifi_ssid\n  password: !secret wifi_password\n\n  # Enable fallback hotspot (captive portal) in case wifi connection fails\n  ap:\n    ssid: "Xiao-Esp32C3 Fallback Hotspot"\n    password: "YtpCwOqLoYlp"\n\ncaptive_portal:\n\n# 0x28 is the I2C address of DHT20\ni2c:\n  sda: GPIO6\n  scl: GPIO7\n  scan: True\n  id: bus_0x38\n\nsensor:\n  - platform: aht10\n    temperature:\n      name: "Living Room Temperature"\n    humidity:\n      name: "Living Room Humidity"\n    update_interval: 60s\n')),(0,o.kt)("p",null,"You can learn more about the ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/components/sensor/aht10"},"DHT20 component")," here. Here we add the I\xb2C Bus component because DHT20 communicates using I2C protocol."),(0,o.kt)("h5",{id:"visualize-on-dashboard"},"Visualize on Dashboard"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," On the Overview page of Home Assistant, click the 3 dots and click ",(0,o.kt)("strong",{parentName:"li"},"Edit Dashboard"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Click ",(0,o.kt)("strong",{parentName:"li"},"+ ADD CARD"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3.")," Select ",(0,o.kt)("strong",{parentName:"li"},"By ENTITY"),", type ",(0,o.kt)("strong",{parentName:"li"},"temperature")," and select the ",(0,o.kt)("strong",{parentName:"li"},"check box")," next to ",(0,o.kt)("strong",{parentName:"li"},"Temperature"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Click ",(0,o.kt)("strong",{parentName:"p"},"ADD TO DASHBOARD")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/38.png",style:{width:900,height:"auto"}}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 5.")," You can also visualize sensor data as gauges. Click ",(0,o.kt)("strong",{parentName:"p"},"Gauge")," under ",(0,o.kt)("strong",{parentName:"p"},"BY CARD")))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37-1.png",style:{width:900,height:"auto"}})),(0,o.kt)("p",null,"Now your Home Assistant dashboard will look like below"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/39.png",style:{width:900,height:"auto"}})),(0,o.kt)("h4",{id:"grove---light-sensorls06-s"},"Grove - Light Sensor(LS06-S)"),(0,o.kt)("p",null,"The Grove - Light Sensor v1.2 is an analog module and can output various electrical signals which can be converted to different ranges. It integrates an LS06-S photoresistor, a high-sensitive and reliable photodiode, to detect the intensity of light in the environment. It is a perfect Arduino light sensor module for light measurement, light detection, and a light-controlled switch."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html"},"Click here")," for the purchase."),(0,o.kt)("h5",{id:"setup-configuration-1"},"Setup Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Connect Grove - Light sensor to one of the Analog/Digital connectors on the Seeed Studio Expansion Base for XIAO")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic2.png",style:{width:300,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Inside the ",(0,o.kt)("strong",{parentName:"li"},"xiao-esp32c3.yaml")," file that we created before, change the file and push it OTA to XIAO ESP32C3")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/41-1.png",style:{width:900,height:"auto"}})),(0,o.kt)("p",null,"You will see this result if going well."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/42.png",style:{width:900,height:"auto"}})),(0,o.kt)("h5",{id:"visualize-on-dashboard-1"},"Visualize on Dashboard"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," On the Overview page of Home Assistant, click the 3 dots and click ",(0,o.kt)("strong",{parentName:"li"},"Edit Dashboard"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Click ",(0,o.kt)("strong",{parentName:"li"},"+ ADD CARD"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3.")," Select ",(0,o.kt)("strong",{parentName:"li"},"By ENTITY"),", select the ",(0,o.kt)("strong",{parentName:"li"},"Light Sensor"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/43.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4.")," Select ",(0,o.kt)("strong",{parentName:"li"},"PICK DIFFERENT CARD"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/44.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 5.")," Select ",(0,o.kt)("strong",{parentName:"li"},"Gauge"))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/45.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 6.")," Set the minimum and maximum")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/46.png",style:{width:900,height:"auto"}})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 7.")," Then you will see the light sensor value on your dashboard.")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/47.png",style:{width:900,height:"auto"}})),(0,o.kt)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This project is supported by the Seeed Studio ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"Contributor Project"),"."),(0,o.kt)("li",{parentName:"ul"},"Thanks ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/wiki-documents/issues/603"},"Zachary's efforts")," and your work will be ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"exhibited"),".")),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);