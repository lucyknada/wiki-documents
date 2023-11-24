"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},34482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"SenseCAP S2107",title:"SenseCAP S2107",keywords:["SenseCAP Sensor_Probe&Accessories"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_S2107",last_update:{date:"9/25/2023",author:"KeweiLee"}},i=void 0,s={unversionedId:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_S2107",id:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_S2107",title:"SenseCAP S2107",description:"SenseCAP S2107",source:"@site/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_S2107.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series",slug:"/SenseCAP_S2107",permalink:"/SenseCAP_S2107",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_S2107.md",tags:[],version:"current",lastUpdatedBy:"KeweiLee",lastUpdatedAt:16956e5,formattedLastUpdatedAt:"Sep 25, 2023",frontMatter:{description:"SenseCAP S2107",title:"SenseCAP S2107",keywords:["SenseCAP Sensor_Probe&Accessories"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_S2107",last_update:{date:"9/25/2023",author:"KeweiLee"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP LoRaWAN S210X Series Sensor Introduction",permalink:"/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_LoRaWAN_S210X_Series_Sensor"},next:{title:"Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED",permalink:"/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central"}},l={},p=[{value:"Hardware preparation",id:"hardware-preparation",level:2},{value:"Software Preparation",id:"software-preparation",level:2},{value:"Decoder Code",id:"decoder-code",level:2},{value:"Data Parsing Example",id:"data-parsing-example",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/0.jpg"})),(0,a.kt)("h1",{id:"product-description"},"Product Description"),(0,a.kt)("p",null,"SenseCAP LoRaWAN\xae S2107 temperature Sensor measures temperature at the range of -50\xb0C~300\xb0C. A highly accurate temperature sensor PT1000 that can support temperature detection in wide temperature ranges and industrial scenarios.\nPt1000 sensors (1000 ohm temperature sensors) are the most common type of platinum resistance thermometer. The S2107 supports a three-wire circuit for PT1000 sensors and allows for the connection of up to three sensors simultaneously.\nDirect contact temperature is an important indicator in many scenarios, especially in liquid detection, food monitoring, storage cold chain, industrial boilers, aquaculture solutions. The S2107 is specifically optimized for OTA with built-in Bluetooth, which enables quick setup and update. Benefiting from LoRa and IP66 design, this sensor features stability and reliability and can cover a long transmission range while keeping lower power consumption. Unlike wireline devices, it is battery-powered, reducing the workload and complexity of the deployment, and can be disassembled and installed in a few minutes."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,a.kt)("h1",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Compatible with Worldwide LoRaWAN\xae Networks: Compatible with different types of LoRaWAN\xae gateways to enable fast connection with LoRaWAN\xae networks (support the universal frequency plan from 863MHz ~928MHz)."),(0,a.kt)("li",{parentName:"ul"},"Long Range & Battery powered: Ultra-wide-transmission range of 2km in urban scenes and 10km in line of sight scenes. Powered by easily replaceable standard Li-SOCl2 battery (type: ER34615) with Max.10 years of battery life."),(0,a.kt)("li",{parentName:"ul"},"Designed to Use in Harsh Environments: -40\u2103 ~ 85\u2103 operating temperature and IP66-rated enclosure, suitable for outdoor use, high UV exposure, heavy rain, dusty conditions, etc."),(0,a.kt)("li",{parentName:"ul"},"Simple Configuration and Calibration: SenseCAP provides a no-code experience that enables users to finish configuration and calibration through SenseCAP Mate APP."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Local storage\uff1aWhen LoRaWAN network is disconnected, the device can locally store up to 2000 uplinking records"),".")),(0,a.kt)("h1",{id:"applications"},"Applications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Liquid detection"),(0,a.kt)("li",{parentName:"ul"},"Food monitoring"),(0,a.kt)("li",{parentName:"ul"},"Storage cold chain"),(0,a.kt)("li",{parentName:"ul"},"Aquaculture solutions")),(0,a.kt)("h1",{id:"specifications"},"Specifications"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Temperature")),(0,a.kt)("th",{parentName:"tr",align:"left"}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Range"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("p",null,"-50 to 300 \u2103 "),(0,a.kt)("p",null,"(Other range customization contact sales)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Accuracy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\xb10.5\u2103")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Resolution"),(0,a.kt)("td",{parentName:"tr",align:"left"},"0",".","1\u2103")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"General Parameters")),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Product Model"),(0,a.kt)("td",{parentName:"tr",align:"left"},"S2107")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Microcontroller"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Wio-E5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Support Protocol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"LoRaWAN v1.0.3 Class A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Built-in Bluetooth"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App Tool to change parameters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"LoRaWAN Channel Plan"),(0,a.kt)("td",{parentName:"tr",align:"left"},"IN865/EU868/US915/AU915/ AS923/KR920/RU864 ","*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Max Transmitted Power"),(0,a.kt)("td",{parentName:"tr",align:"left"},"19dBm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Sensitivity"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-136dBm@SF12 BW=125KHz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Communication  Distance"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2 to 10 km (depending on gateway  antenna and environments")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"IP Rating"),(0,a.kt)("td",{parentName:"tr",align:"left"},"IP66")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Operating Temperature"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-40 to +85 \xb0C (LoRa DTU);-50 to 200\u2103(Cable); -50 to 300\u2103 (Probe)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Operating Humidity"),(0,a.kt)("td",{parentName:"tr",align:"left"},"0 to 100 %RH (non-condensing)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Device Weight"),(0,a.kt)("td",{parentName:"tr",align:"left"},"360g")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Cable Length"),(0,a.kt)("td",{parentName:"tr",align:"left"},"3 meters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Certi\ufb01cation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CE / FCC / RoHS / TELEC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Battery (Contained in equipment)")),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery Life"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Up to 10 years","*","*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery Capacity"),(0,a.kt)("td",{parentName:"tr",align:"left"},"19Ah (non-rechargeable)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery Type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Standard D-size SOCl2 Battery")))),(0,a.kt)("h1",{id:"how-to-add-3-pt1000-sensors-to-s2107"},"How to add 3 PT1000 sensors to S2107"),(0,a.kt)("h2",{id:"hardware-preparation"},"Hardware preparation"),(0,a.kt)("p",null,"Wire 3 PT1000 sensors as shown in the diagram"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/1.jpg"})),(0,a.kt)("h2",{id:"software-preparation"},"Software Preparation"),(0,a.kt)("p",null,"Use SenseCAP Mate App to configure the PT1000 sensors."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/2.png"})),(0,a.kt)("h1",{id:"payload-decoder"},"Payload Decoder"),(0,a.kt)("h2",{id:"decoder-code"},"Decoder Code"),(0,a.kt)("p",null,"Please direct you to SenseCAP ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S210X"},"S210X Decoder")),(0,a.kt)("h2",{id:"data-parsing-example"},"Data Parsing Example"),(0,a.kt)("p",null,"Temperature Sensor measurement packet:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/3.png"})),(0,a.kt)("p",null,"Packets sent when recovering from offline:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/4.png"})),(0,a.kt)("p",null,"Battery Information for S2107:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/5.png"})),(0,a.kt)("h1",{id:"sensecap-tech-support"},"SenseCAP Tech Support"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/sensecap",class:"button_tech_support_sensecap"}),(0,a.kt)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);