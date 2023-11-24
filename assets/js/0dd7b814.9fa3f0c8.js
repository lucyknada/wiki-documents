"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[44245],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=d(o),h=r,g=c["".concat(l,".").concat(h)]||c[h]||p[h]||s;return o?n.createElement(g,i(i({ref:t},u),{},{components:o})):n.createElement(g,i({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:r,i[1]=a;for(var d=2;d<s;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},37838:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const s={description:"Overview of SenseCAP S2110 Sensor Builder",title:"SenseCAP S2110 Sensor Builder",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger",last_update:{date:"11/20/2023",author:"Matthew"}},i=void 0,a={unversionedId:"Sensor/SenseCAP/SenseCAP_Sensor_Builder/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger",id:"Sensor/SenseCAP/SenseCAP_Sensor_Builder/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger",title:"SenseCAP S2110 Sensor Builder",description:"Overview of SenseCAP S2110 Sensor Builder",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Sensor_Builder/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Sensor_Builder",slug:"/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger",permalink:"/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Sensor_Builder/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1700438400,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{description:"Overview of SenseCAP S2110 Sensor Builder",title:"SenseCAP S2110 Sensor Builder",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger",last_update:{date:"11/20/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"Optical Rain Gauge RG-9",permalink:"/Sensor/SenseCAP/Accessories/Optical-Rain-Gauge-RG-9"},next:{title:"Build LoRaWAN Sensors with SenseCAP Data Logger",permalink:"/SenseCAP_Builder_build_LoRaWAN_Sensors"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Small object, Industrial functionality",id:"small-object-industrial-functionality",level:3},{value:"With further LoRaWAN\xae the long range wireless data transmission",id:"with-further-lorawan-the-long-range-wireless-data-transmission",level:3},{value:"Features",id:"features",level:2},{value:"Getting Started with the Builder with different ways",id:"getting-started-with-the-builder-with-different-ways",level:2},{value:"Enable the Builder to build LoRaWAN Sensors with SenseCAP Data Logger",id:"enable-the-builder-to-build-lorawan-sensors-with-sensecap-data-logger",level:3},{value:"Add more industrial-level LoRaWAN Grove Sensor",id:"add-more-industrial-level-lorawan-grove-sensor",level:3},{value:"Develop with XIAO RP2040 board using RS485",id:"develop-with-xiao-rp2040-board-using-rs485",level:3},{value:"Factory Firmware Flash",id:"factory-firmware-flash",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sensecap-s2110-sensor-builder"},"SenseCAP S2110 Sensor Builder"),(0,r.kt)("p",null,"SenseCAP S2110 Sensor Builder a groundbreaking solution that enables the fusion of industrial-grade modules and maker-level modules. It is an open-source tool which has the ability to build RS485 functional modules with 500+ Grove modules."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-105.jpg"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"small-object-industrial-functionality"},"Small object, Industrial functionality"),(0,r.kt)("p",null,"It has Seeed Studio XIAO RP2040 as the dual-core ARM Cortex M0+ processor, and has one Grove and one RS485 connector, enabling developers to connect with 500+ Grove sensors and various MODBUS RS485 sensors to develop custom industrial-grade MODBUS RS485 sensors for various IoT applications."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/107.jpg"})),(0,r.kt)("h3",{id:"with-further-lorawan-the-long-range-wireless-data-transmission"},"With further LoRaWAN\xae the long range wireless data transmission"),(0,r.kt)("p",null,"For the long ranger wireless application(LoRaWAN\xae), developers could easily connect it with a ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"SenseCAP LoRaWAN Data Logger")," to transfer the data to SenseCAP Cloud, which only takes a 5-minute simple BLE configuration in SenseCAP Mate App. Clear data results and further analysis could be easily obtained from SenseCAP Dashboard and SenseCAP Mate App. IoT platforms such as Helium, TTN, LORIOT, etc. are also supported."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-106.jpg"})),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Easily build Modbus RS485 Industrial-grade Sensors:")," With open-source source code and IP66 enclosure, easily convert over 500+ existing Grove sensors to Modbus RS485 industrial-grade sensors. 6 of the most popular environmental Grove sensors are already fully compatible with native firmware with more to come"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SenseCAP Data Logger and IoT Platform Compatible:")," Convert to a SenseCAP LoRaWAN\xae sensor with SenseCAP Data Logger and take advantage of quick and easy set-up in just 5-minutes with SenseCAP Mate APP"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Supports Third-party Data Loggers and IoT Platforms:")," Besides SenseCAP Data Logger, developers could connect to other data loggers that support Modbus RS485 protocol and third-party IoT platforms"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ready-to-deploy Industrial-grade Outdoor Enclosure:")," IP66 waterproof rate outdoor enclosure with window and waterproof ventilation hole reserved for light and gas sensors, also comes with a customized mounting panel, suitable for pole and wall installation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Powered by Seeed Studio XIAO RP2040:")," Take advantage of the powerful Seeed Studio XIAO RP2040 dual-core ARM M0+ processor and vast open-source resources to customize your own sensor. Easily upload code via USB-C port")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/108.png"})),(0,r.kt)("p",null,"The product comes with an IP66 industrial-grade enclosure and also the mounting pads and screws set, which enables you to deploy the sensor outdoors easily and safely."),(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))," ",(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/sensecap-outdoor-lorawan-sensor-kit-based-on-grove-p-5503.html"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get LoRaWAN Kit \ud83d\uddb1\ufe0f"))))," "),(0,r.kt)("h2",{id:"getting-started-with-the-builder-with-different-ways"},"Getting Started with the Builder with different ways"),(0,r.kt)("p",null,"Being a groundbreaking solution that enables the fusion of industrial-grade modules and maker-level modules. There are multiple ways to enable the Builder."),(0,r.kt)("h3",{id:"enable-the-builder-to-build-lorawan-sensors-with-sensecap-data-logger"},"Enable the Builder to build LoRaWAN Sensors with SenseCAP Data Logger"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e22011019-sensecap-s2110-lorawan-sensor-kit-first_1_.jpg"})),(0,r.kt)("p",null,"You can build a custom, cost-effective, industrial-grade LoRaWAN sensor using Grove sensors, to connect to SenseCAP Cloud with SenseCAP Data Logger, enabling long range wireless data transmission."),(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\udcda Getting Started "))))," "),(0,r.kt)("h3",{id:"add-more-industrial-level-lorawan-grove-sensor"},"Add more industrial-level LoRaWAN Grove Sensor"),(0,r.kt)("p",null,"We are looking for more Grove modules to be added up to the Builder. And we are honered if you can join us! Check the information below and contribute your works to us(This is under the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=34120904"},"Seeed Studio Contributor Program"),")!"),(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"/list_of_supported_grove_n_adding_more"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\udcda Getting Started "))))," ",(0,r.kt)("a",{class:"get_one_now_item",href:"https://github.com/Seeed-Studio/Seeed_Arduino_S2110"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\udcda Source Code "))))," ",(0,r.kt)("a",{class:"get_one_now_item",href:"https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\ude4b Contributor "))))," "),(0,r.kt)("h3",{id:"develop-with-xiao-rp2040-board-using-rs485"},"Develop with XIAO RP2040 board using RS485"),(0,r.kt)("p",null,"Since it is powered by Seeed Studio XIAO RP2040 and there is a Grove connector on board. You can directly use it as a normal development device. Along with RS485 connectivity, you can add more RS485-enabled sensors to XIAO and expand your project ideas."),(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\udcda Ardunio "))))," ",(0,r.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/XIAO-RP2040-with-MicroPython/"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\udcda MicroPython "))))," ",(0,r.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/XIAO-RP2040-with-CircuitPython/"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\udcda CircuitPython "))))),(0,r.kt)("h2",{id:"factory-firmware-flash"},"Factory Firmware Flash"),(0,r.kt)("p",null,"Now we will go through the steps of flashing firmware into SenseCAP S2110 Sensor Builder. Here we will flash the initial factory firmware, download ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_S2110/releases"},"the latest uf2 firmware")," before starting."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1:")," Unscrew the four screws on the SenseCAP S2110 Sensor Builder lid to open the lid and unscrew the PG connector (with a coin)")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/92.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2:")," If you have already made the connection between the SenseCAP S2110 Sensor Builder and the Data Logger with the 4 wires, it is recommended to remove the red wire which connects to the 5V pin of the SenseCAP S2110 Sensor Builder")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/97.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3:")," Connect one end of a USB Type-C cable to the SenseCAP S2110 Sensor Builder. While holding down the ",(0,r.kt)("strong",{parentName:"li"},"B")," button, connect the other end of the USB cable to the PC to enter mass storage mode.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/98.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4:")," If the ",(0,r.kt)("strong",{parentName:"li"},"RPI-RP2")," disk is shown on the PC and the Power LED on the XIAO is on, the connection is complete.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/91.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5:")," Copy sensorBuilder.ino.uf2 firmware file into the ",(0,r.kt)("strong",{parentName:"li"},"RPI-RP2")," disk.")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"RPI-RP2")," disk will disappear once the firmware flashing is complete."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[GitHub]")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_S2110"},"SenseCAP S2110 Sensor Builder source code"))),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);