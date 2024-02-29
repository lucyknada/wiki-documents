"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,k=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(k,a(a({ref:t},c),{},{components:n})):o.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const r={description:"Get_Started_with_Wio_Tracker_1110",title:"Get Started with Wio-Tracker_1110",keywords:["Tracker","Wio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get_Started_with_Wio-Trakcer_1110",last_update:{date:"11/3/2023",author:"Jessie"}},a=void 0,l={unversionedId:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Get_Started",id:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Get_Started",title:"Get Started with Wio-Tracker_1110",description:"Get_Started_with_Wio_Tracker_1110",source:"@site/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Get_Started.md",sourceDirName:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board",slug:"/Get_Started_with_Wio-Trakcer_1110",permalink:"/Get_Started_with_Wio-Trakcer_1110",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Get_Started.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1698969600,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{description:"Get_Started_with_Wio_Tracker_1110",title:"Get Started with Wio-Tracker_1110",keywords:["Tracker","Wio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get_Started_with_Wio-Trakcer_1110",last_update:{date:"11/3/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Wio Tracker 1110 Introduction",permalink:"/Wio-Tracker_Introduction"},next:{title:"Connect to TTN",permalink:"/connect_wio_tracker_to_TTN"}},s={},d=[{value:"Bind the dev board",id:"bind-the-dev-board",level:3},{value:"Configure the frequency and connect to the gateway",id:"configure-the-frequency-and-connect-to-the-gateway",level:3},{value:"Check the data",id:"check-the-data",level:3},{value:"How to upload data immediately",id:"how-to-upload-data-immediately",level:3},{value:"Add Grove Sensor(optional)",id:"add-grove-sensoroptional",level:3},{value:"SenseCAP API",id:"sensecap-api",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial, we will guide users to quickly set up the Wio Tracker 1110 development board through the factory firmware, connect it to SenseCAP cloud and check the data."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/image.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("h3",{id:"bind-the-dev-board"},"Bind the dev board"),(0,i.kt)("p",null,"Download the SenseCAP Mate APP."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png",alt:"pir",width:500,height:"auto"})),(0,i.kt)("admonition",{title:"Note",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Please select the ",(0,i.kt)("strong",{parentName:"p"},"Global")," version when registering.")),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Device"),"."),(0,i.kt)("p",null,"Then scan the QR code on the board label."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-board.png",alt:"pir",width:500,height:"auto"})),(0,i.kt)("p",null,"Name your device and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Device Group"),"(optional), then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Bind to account"),".",(0,i.kt)("br",null)),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-dev.png",alt:"pir",width:300,height:"auto"})),(0,i.kt)("h3",{id:"configure-the-frequency-and-connect-to-the-gateway"},"Configure the frequency and connect to the gateway"),(0,i.kt)("p",null,"Go back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Device")," page, then you will see the dev board has been bound."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-done.png",alt:"pir",width:300,height:"auto"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration Now"),"."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/1.jpeg",alt:"pir",width:300,height:"auto"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Ready, go to the next step"),", which is entering the device search. "),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The device needs to be powered on first.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/2.jpeg",alt:"pir",width:300,height:"auto"})),(0,i.kt)("p",null,"Search for the device by ",(0,i.kt)("inlineCode",{parentName:"p"},"Scan"),", and when you find an item in the list with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"S/N code")," as your own device, click to enter."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/3.jpeg",alt:"pir",width:300,height:"auto"})),(0,i.kt)("p",null,"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Setting")," page, choose the platform either as ",(0,i.kt)("inlineCode",{parentName:"p"},"SenseCAP for the Things Network")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"SenseCAP for Helium"),"."),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can choose others as well, but in that case, you cannot use SenseCAP platform.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg",alt:"pir",width:300,height:"auto"})),(0,i.kt)("table",{align:"center"},(0,i.kt)("caption",null," ",(0,i.kt)("h2",null,"Platform")," "),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"Platform")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"Description"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"SenseCAP for The Things Network"),(0,i.kt)("td",null,"Default platform. It must be used with SenseCAP Gateway. SenseCAP builds a proprietary TTN server that enables sensors to be used out of the box when paired with an SenseCAP gateway. ",(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html",target:"_blank"},(0,i.kt)("span",null,"SenseCAP Outdoor Gateway")),(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html",target:"_blank"},(0,i.kt)("span",null,"SenseCAP Indoor Gateway")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"SenseCAP for Helium"),(0,i.kt)("td",null,"When there is the Helium network coverage, data can upload via Helium. Devices run on a private Helium console of SenseCAP. Users do not need to create devices on Helium console, out of the box with SenseCAP Mate App and Portal. ",(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://explorer.helium.com/",target:"_blank"},(0,i.kt)("span",null,"Helium Coverage")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Helium"),(0,i.kt)("td",null,"Connect device to your public Helium console")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"The Things Network"),(0,i.kt)("td",null,"Connect device to your TTN(TTS) server")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Other Platform"),(0,i.kt)("td",null,"Other LoRaWAN Network Server")))),(0,i.kt)("p",null,"Choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"Frequency Plan"),"."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/5.jpeg",alt:"pir",width:300,height:"auto"})),(0,i.kt)("p",null,"Enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"Position Uplink Interval (in minutes)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Sensor Uplink Interval (in minutes)"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Position Uplink Interval (minutes)"),(0,i.kt)("td",{parentName:"tr",align:null},"Scheduled upload of location information.",(0,i.kt)("br",null),"Default 5 minutes.",(0,i.kt)("br",null),"The higher the frequency, the higher the power consumption.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sensor Uplink Interval (minutes)"),(0,i.kt)("td",{parentName:"tr",align:null},"Scheduled upload of sensor data.",(0,i.kt)("br",null),"Default 5 minutes.",(0,i.kt)("br",null),"The higher the frequency, the higher the power consumption.")))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/6.jpeg",alt:"pir",width:300,height:"auto"})),(0,i.kt)("p",null,"Once all the information in Settings aligns with your requirements, you can click ",(0,i.kt)("inlineCode",{parentName:"p"},"Send")," to transmit it to ",(0,i.kt)("strong",{parentName:"p"},"Tracker Wio 1110"),"."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/7.jpeg",alt:"pir",width:300,height:"auto"})),(0,i.kt)("p",null,"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Measure")," page, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Measure"),", then you will get the sensor values."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/8.jpeg",alt:"pir",width:500,height:"auto"})),(0,i.kt)("h3",{id:"check-the-data"},"Check the data"),(0,i.kt)("p",null,"Power on the dev board, and please make sure you have network coverage nearby\uff0cwhen the dev board is successfully connected to the network, it will show ",(0,i.kt)("inlineCode",{parentName:"p"},"online")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Device")," page."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/9.jpeg",alt:"pir",width:300,height:"auto"})),(0,i.kt)("p",null,"If your area suffers from poor signal, just simply install a LoRaWAN gateway - it's as simple as setting up a Wi-Fi router. The beauty of LoRa lies in its flexibility and ease of network expansion. This reliable solution is also cost-effective. For instance, the ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html"},"SenseCAP M2 Indoor LoRaWAN Gateway"),",it can extend your coverage up to 10km!"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_873855_RPfBjpKfW2xWddri_1693817031?w=680&h=446&type=image/png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Please put your dev board by the window or in an unobstructed place, so that there will be a better GPS signal, and then the board can successfully obtain the location data.")),(0,i.kt)("p",null,"You can check the location and sensor data on SenseCAP Mate APP or SenseCAP Portal."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SenseCAP Mate APP")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/app-data.png",alt:"pir",width:500,height:"auto"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SenseCAP Portal")),(0,i.kt)("p",null,"If you have created an account through the APP, you can log in directly.\nNavigate to your device page, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Data")," to check."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://sensecap-docs.seeed.cc/quickstart.html"},"SenseCAP Portal User Guide"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/por.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/portal-da.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("h3",{id:"how-to-upload-data-immediately"},"How to upload data immediately"),(0,i.kt)("p",null,"1\u3001When the development board is shaken, causing vibrations, it triggers ",(0,i.kt)("strong",{parentName:"p"},"the three-axis accelerometer sensor")," to immediately collect and upload data."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake.GIF",alt:"pir",width:800,height:"auto"})),(0,i.kt)("p",null,"You can view the information on the serial monitor."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-shake.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("p",null,"The SenseCAP Mate app interface will display data packets when the device is shaken."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake-app.JPG",alt:"pir",width:300,height:"auto"})),(0,i.kt)("p",null,"2\u3001Press the ",(0,i.kt)("inlineCode",{parentName:"p"},"BUTTON")," once, and the device will immediately collect and upload data."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/button.GIF",alt:"pir",width:800,height:"auto"})),(0,i.kt)("p",null,"You can view the information on the serial monitor."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-button.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("p",null,"The SenseCAP Mate app interface will display SOS signals and data packets."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/sos-app.JPG",alt:"pir",width:300,height:"auto"})),(0,i.kt)("h3",{id:"add-grove-sensoroptional"},"Add Grove Sensor(optional)"),(0,i.kt)("p",null,"In addition to the onboard sensors, the possibilities are endless with the Wio tracker 1110 dev board. In the factory firmware, the following Grove sensors are also allowed to access this board and be recognized automatically."),(0,i.kt)("table",{align:"center"},(0,i.kt)("caption",null," ",(0,i.kt)("h2",null,"Grove Modules")," "),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"Sensor")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"Get One Now")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"Sensor")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"Get One Now"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Sound Sensor-Based on LM358 amplifier"),(0,i.kt)("td",null,(0,i.kt)("div",{class:"document"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM358-amplifier-Arduino-Compatible.html",target:"_blank",rel:"noopener"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/c_6.png",alt:"",width:200,height:"auto"})))),(0,i.kt)("td",null,"High Precision Barometer Sensor-DPS310"),(0,i.kt)("td",null,(0,i.kt)("div",{class:"document"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html",target:"_blank",rel:"noopener"},(0,i.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-high-precision-barometer-sensor-dps310-preview.jpg",alt:"",width:200,height:"auto"}))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Air Quality Sensor(SGP41)"),(0,i.kt)("td",null,(0,i.kt)("div",{class:"document"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html",target:"_blank",rel:"noopener"},(0,i.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-voc-and-eco2-gas-sensor_sgp41_-v1.0-45font.jpg",alt:"",width:200,height:"auto"})))),(0,i.kt)("td",null,"Sunlight sensor-SI1151"),(0,i.kt)("td",null,(0,i.kt)("div",{class:"document"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Grove-Sunlight-Sensor.html",target:"_blank",rel:"noopener"},(0,i.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg",alt:"",width:200,height:"auto"}))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Ultrasonic Distance Sensor"),(0,i.kt)("td",null,(0,i.kt)("div",{class:"document"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html",target:"_blank",rel:"noopener"},(0,i.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove---ultrasonic-distance-sensor-preview_1.png",alt:"",width:200,height:"auto"}))))))),(0,i.kt)("p",null,"Connect the Grove sensor to the corresponding Grove port on the Wio Tracker dev board."),(0,i.kt)("p",null,"You can also use a ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-I2C-Hub.html"},"Grove-I2C Hub")," to connect multiply I2C sensors to the board."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg",alt:"pir",width:800,height:"auto"})),(0,i.kt)("h2",{id:"sensecap-api"},"SenseCAP API"),(0,i.kt)("p",null,"SenseCAP API is for users to manage IoT devices and data. It includes 3 types of API methods: HTTP protocol, MQTT protocol, and Websocket protocol."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With HTTP API, users can manage LoRa devices, to get raw data or historical data."),(0,i.kt)("li",{parentName:"ul"},"With MQTT API, users can subscribe to the sensor's real-time measurement data through the MQTT protocol."),(0,i.kt)("li",{parentName:"ul"},"With Websocket API, users can get real-time measurement data of sensors through Websocket protocol.")),(0,i.kt)("p",null,"Please check ",(0,i.kt)("a",{parentName:"p",href:"https://sensecap-docs.seeed.cc/"},"API User Guide")," for more details."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png",alt:"pir",width:800,height:"auto"})))}u.isMDXComponent=!0}}]);