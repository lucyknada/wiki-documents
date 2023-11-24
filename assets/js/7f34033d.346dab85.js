"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[51158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,k=p["".concat(s,".").concat(h)]||p[h]||c[h]||r;return n?i.createElement(k,a(a({ref:t},u),{},{components:n})):i.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const r={description:"Grove Vision AI Module",title:"Grove Vision AI Module",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/K1100-Vision-AI-Module-Grove-LoRa-E5",last_update:{date:"1/13/2023",author:"shuxu hu"}},a="Grove Vision AI Module",l={unversionedId:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/K1100-Vision-AI-Module-Grove-LoRa-E5",id:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/K1100-Vision-AI-Module-Grove-LoRa-E5",title:"Grove Vision AI Module",description:"Grove Vision AI Module",source:"@site/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/K1100-Vision-AI-Module-Grove-LoRa-E5.md",sourceDirName:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino",slug:"/K1100-Vision-AI-Module-Grove-LoRa-E5",permalink:"/K1100-Vision-AI-Module-Grove-LoRa-E5",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/K1100-Vision-AI-Module-Grove-LoRa-E5.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Grove Vision AI Module",title:"Grove Vision AI Module",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/K1100-Vision-AI-Module-Grove-LoRa-E5",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove Temp&Humi Sensor (SHT40)",permalink:"/K1100-Temp-Humi-Sensor-Grove-LoRa-E5"},next:{title:"Helium Introduction",permalink:"/Helium-Introduction"}},s={},d=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Working Principle of Sensors",id:"working-principle-of-sensors",level:2},{value:"Materials Required",id:"materials-required",level:2},{value:"Preliminary Preparation",id:"preliminary-preparation",level:2},{value:"Connection",id:"connection",level:3},{value:"Software preparation",id:"software-preparation",level:3},{value:"Get the value of the Grove Vision AI Module",id:"get-the-value-of-the-grove-vision-ai-module",level:2},{value:"Send data via Grove - Wio-E5",id:"send-data-via-grove---wio-e5",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2},{value:"Statement",id:"statement",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"grove-vision-ai-module"},"Grove Vision AI Module"),(0,o.kt)("p",null,"In this section, we will detail how the sensors work, how to get sensor data using Wio Terminal and how to send the data out using Wio Terminal & Grove - Wio-E5."),(0,o.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,o.kt)("p",null,"With the SenseCAP ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,o.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,o.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,o.kt)("font",{color:"white",size:4},(0,o.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,o.kt)("strong",null,"S2100 ",(0,o.kt)("br",null)," Data Logger"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,o.kt)("strong",null,"S2101 ",(0,o.kt)("br",null)," Air Temp & Humidity"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,o.kt)("strong",null,"S2102 ",(0,o.kt)("br",null)," Light"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,o.kt)("strong",null,"S2103 ",(0,o.kt)("br",null)," Air Temp & Humidity & CO2")))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,o.kt)("strong",null,"S2104 ",(0,o.kt)("br",null)," Soil Moisture & Temp"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,o.kt)("strong",null,"S2105 ",(0,o.kt)("br",null)," Soil Moisture & Temp & EC"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,o.kt)("strong",null,"S2110 ",(0,o.kt)("br",null)," LoRaWAN\xae Controller"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,o.kt)("strong",null,"S2120 ",(0,o.kt)("br",null)," 8-in-1 Weather Station")))))),(0,o.kt)("h2",{id:"working-principle-of-sensors"},"Working Principle of Sensors"),(0,o.kt)("p",null,"A device\u2019s live camera can be used to detect objects in an environment using machine learning."),(0,o.kt)("p",null,"The live feed of a camera can be used to identify objects in the physical world. Using the \u201cstreaming\u201d mode of ML Kit\u2019s Object Detection & Tracking API, a camera feed can detect objects and use them as input to perform a visual search (a search query that uses an image as input) with our app\u2019s own image classification model (still under development)."),(0,o.kt)("p",null,"Searching with a live camera can help users learn more about objects around them, whether it is a dog or a cat."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/197.jpeg"})),(0,o.kt)("p",null,"For more information on the use of Vision AI Module its reference ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Vision-AI-Module/"},"here"),"."),(0,o.kt)("p",null,"If you want to train some models you can use yourself, please refer to the content ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Train-Deploy-AI-Model/"},"here"),"."),(0,o.kt)("h2",{id:"materials-required"},"Materials Required"),(0,o.kt)("table",{align:"center"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:210,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg"}))),(0,o.kt)("td",{align:"center"},(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:210,src:"https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png"}))),(0,o.kt)("td",{align:"center"},(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:170,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg"})))),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"Wio Terminal"),(0,o.kt)("td",{align:"center"},"Grove - Wio-E5"),(0,o.kt)("td",{align:"center"},"Grove Vision AI Module")))),(0,o.kt)("h2",{id:"preliminary-preparation"},"Preliminary Preparation"),(0,o.kt)("h3",{id:"connection"},"Connection"),(0,o.kt)("p",null,"In this routine, we need to connect to a nearby LoRa\xae gateway with the help of Grove - Wio-E5. We need to configure the Grove port on the right side of the Wio Terminal as a soft serial port to receive AT commands. Vision AI Module (on the left side) according to the diagram below."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/K1100/aivision.jpg"})),(0,o.kt)("h3",{id:"software-preparation"},"Software preparation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," You need to Install an Arduino Software."),(0,o.kt)("div",null,(0,o.kt)("p",{style:{}},(0,o.kt)("a",{href:"https://www.arduino.cc/en/Main/Software",target:"_blank"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.arduino.cc/en/Main/Software",target:"_blank"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png"}))),(0,o.kt)("p",null)),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Launch the Arduino application."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Add Wio Terminal to the Arduino IDE."),(0,o.kt)("p",null,"Open your Arduino IDE, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"File > Preferences"),", and copy below url to Additional Boards Manager URLs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json\n")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png"})),(0,o.kt)("p",null,"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Tools > Board > Board Manager")," and Search ",(0,o.kt)("strong",{parentName:"p"},"Wio Terminal")," in the Boards Manager."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Select your board and port"),(0,o.kt)("p",null,"You'll need to select the entry in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tools > Board")," menu that corresponds to your Arduino. Selecting the ",(0,o.kt)("strong",{parentName:"p"},"Wio Terminal"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png"})),(0,o.kt)("p",null,"Select the serial device of the Wio Terminal board from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tools -> Port")," menu. This is likely to be COM3 or higher (COM1 and COM2 are usually reserved for hardware serial ports). To find out, you can disconnect your Wio Terminal board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For Mac User, it will be something like ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/cu.usbmodem141401"),"."),(0,o.kt)("p",{parentName:"admonition"},"If you are not able to upload the sketch, mostly it's because Arduino IDE was not able to put Wio Terminal to bootloader mode. (Because MCU was halted or your program handling USB) Workaround is putting your Wio Terminal to bootloader mode manually.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5.")," Download Grove - Wio-E5 Library"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/disk91/Disk91_LoRaE5"},"Disk91_LoRaE5")," repositories and download the entire repo to your local drive."),(0,o.kt)("div",null,(0,o.kt)("p",{style:{}},(0,o.kt)("a",{href:"https://github.com/disk91/Disk91_LoRaE5",target:"_blank"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://github.com/disk91/Disk91_LoRaE5",target:"_blank"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,o.kt)("p",null)),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6.")," Adding libraries to the Arduino IDE"),(0,o.kt)("p",null,"Now, the 3-Axis Digital Accelerometer library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,o.kt)("inlineCode",{parentName:"p"},"sketch -> Include Library -> Add .ZIP Library"),", and choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"Disk91_LoRaE5")," file that you've have just downloaded."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg"})),(0,o.kt)("h2",{id:"get-the-value-of-the-grove-vision-ai-module"},"Get the value of the Grove Vision AI Module"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Download Grove Vision AI Module Code Library"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle"},"Seeed-Grove-Vision-AI-Moudle")," repositories and download the entire repo to your local drive."),(0,o.kt)("div",null,(0,o.kt)("p",{style:{}},(0,o.kt)("a",{href:"https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle",target:"_blank"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle",target:"_blank"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,o.kt)("p",null)),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Adding libraries to the Arduino IDE"),(0,o.kt)("p",null,"Now, the Vision AI Module library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,o.kt)("inlineCode",{parentName:"p"},"sketch -> Include Library -> Add .ZIP Library"),", and choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"Seeed-Grove-Vision-AI-Moudle")," file that you've have just downloaded."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Obtain Grove Vision AI Module data"),(0,o.kt)("div",null,(0,o.kt)("p",{style:{}},(0,o.kt)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-AI-Module-value",target:"_blank"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-AI-Module-value",target:"_blank"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,o.kt)("p",null)),(0,o.kt)("p",null,"This repo is able to obtain the number of models identified by the camera feed and the confidence level. They are unsigned integer data with no more than 8 bits."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'#include "Seeed_Arduino_GroveAI.h"\n#include <Wire.h>\n\nGroveAI ai(Wire);\nuint8_t state = 0;\nvoid setup()\n{\n  Wire.begin();\n  Serial.begin(115200);\n  \n  Serial.println("begin");\n  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // Object detection and pre-trained model 1\n  {\n    Serial.print("Version: ");\n    Serial.println(ai.version());\n    Serial.print("ID: ");\n    Serial.println( ai.id());\n    Serial.print("Algo: ");\n    Serial.println( ai.algo());\n    Serial.print("Model: ");\n    Serial.println(ai.model());\n    Serial.print("Confidence: ");\n    Serial.println(ai.confidence());\n    state = 1;\n  }\n  else\n  {\n    Serial.println("Algo begin failed.");\n  }\n}\n\nvoid loop()\n{\n  if (state == 1)\n  {\n    uint32_t tick = millis();\n    if (ai.invoke()) // begin invoke\n    {\n      while (1) // wait for invoking finished\n      {\n        CMD_STATE_T ret = ai.state(); \n        if (ret == CMD_STATE_IDLE)\n        {\n          break;\n        }\n        delay(20);\n      }\n\n     uint8_t len = ai.get_result_len(); // receive how many people detect\n     if(len)\n     {\n       int time1 = millis() - tick; \n       Serial.print("Time consuming: ");\n       Serial.println(time1);\n       Serial.print("Number of people: ");\n       Serial.println(len);\n       object_detection_t data;       //get data\n\n       for (int i = 0; i < len; i++)\n       {\n          Serial.println("result:detected");\n          Serial.print("Detecting and calculating: ");\n          Serial.println(i+1);\n          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result\n  \n          Serial.print("confidence:");\n          Serial.print(data.confidence);\n          Serial.println();\n        }\n     }\n     else\n     {\n       Serial.println("No identification");\n     }\n    }\n    else\n    {\n      delay(1000);\n      Serial.println("Invoke Failed.");\n    }\n  }\n  else\n  {\n    state == 0;\n  }\n}\n')),(0,o.kt)("p",null,"Open the serial monitor of Arduino IDE and select the baud rate as 115200 and observe the result."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/198.png"})),(0,o.kt)("h2",{id:"send-data-via-grove---wio-e5"},"Send data via Grove - Wio-E5"),(0,o.kt)("p",null,"We combine the previous code of Grove - Wio-E5 to connect to the LoRa\xae network. Using the AT command it is possible to send the value of the Grove Vision AI Module to the LoRa\xae network."),(0,o.kt)("p",null,"In the code of the previous section, we know the output - the number of detected objects and the confidence level are both positive integers and neither is greater than 8 bits."),(0,o.kt)("p",null,"In this way, we determine the content, size and format of the data to be sent via the AT command. We might as well set up a large enough array, store the strings we need to send into the array, and finally use the ",(0,o.kt)("strong",{parentName:"p"},"send_sync()")," function to send the array out."),(0,o.kt)("p",null,"The pseudo-code for the above idea is roughly as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'  ......\n  static uint8_t data_val[4] = { 0x00 };  //Use the data[] to store the values of the sensors\n  \n  if (state == 1)\n  {\n    if (ai.invoke()) // begin invoke\n    {\n      while (1) // wait for invoking finished\n      {\n        CMD_STATE_T ret = ai.state(); \n        if (ret == CMD_STATE_IDLE)\n        {\n          break;\n        }\n        delay(20);\n      }\n      uint8_t len = ai.get_result_len(); // receive how many people detect\n      if(len)\n      {\n        Serial.print("Number of people: "); Serial.println(len);\n        object_detection_t data;       //get data\n    \n        for (int i = 0; i < len; i++)\n        {\n          Serial.println("result:detected");\n          Serial.print("Detecting and calculating: ");\n          Serial.println(i+1);\n          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result\n    \n          Serial.print("confidence:"); Serial.println(data.confidence);\n\n          data_decord(len, data.confidence, data_val);\n          \n          if ( lorae5.send_sync(              //Sending the sensor values out\n                8,                            // LoRaWan Port\n                data_val,                     // data array\n                sizeof(data_val),             // size of the data\n                false,                        // we are not expecting a ack\n                7,                            // Spread Factor\n                14                            // Tx Power in dBm\n               ) \n          )\n          ......\n')),(0,o.kt)("p",null,"The rest of what we need to do is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"begin()")," function to initialize Grove - Wio-E5 and the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup()")," function to configure the triplet information of Grove - Wio-E5. When we send a data message using the ",(0,o.kt)("inlineCode",{parentName:"p"},"send_sync()")," function, we will try to join the LoRaWAN\xae at the same time, and once it succeeds, the data will be sent and information such as signal strength and address will be returned."),(0,o.kt)("p",null,"The full code example can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data"},"here"),"."),(0,o.kt)("div",null,(0,o.kt)("p",{style:{}},(0,o.kt)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data",target:"_blank"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data",target:"_blank"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,o.kt)("p",null)),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'We do not recommend that you upload the code now to see the results, because at this point you have not yet configured Helium/TTN and will get a "Join failed" result. We recommend that you upload this code after you have completed the ',(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Connecting-to-Helium/"},"Connecting to Helium")," or ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Connecting-to-TTN/"},"Connecting to TTN")," chapter to complete the complete data sending process.")),(0,o.kt)("p",null,"Once you have experienced and understood how the Grove Vision AI Module works and the data format, please continue with the next step of the tutorial join LoRaWAN\xae."),(0,o.kt)("table",{align:"center"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:2,bgcolor:"8FBC8F"},(0,o.kt)("b",null,"Helium Section"))),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg",alt:"pir",width:500,height:"auto"}))),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",null,"Helium Introduction"),(0,o.kt)("br",null),(0,o.kt)("br",null),"In this chapter, we will introduce the Helium console controls that we use to get a first impression of the Helium console.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://wiki.seeedstudio.com/Helium-Introduction"},"Jump to chapter >"))),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png",alt:"pir",width:500,height:"auto"}))),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",null,"Connecting to Helium"),(0,o.kt)("br",null),(0,o.kt)("br",null),"This section describes how to configure Helium so that sensor data can be successfully uploaded to and displayed in Helium.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://wiki.seeedstudio.com/Connecting-to-Helium"},"Jump to chapter >"))),(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:2,bgcolor:"8FBC8F"},(0,o.kt)("b",null,"TTN Section"))),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png",alt:"pir",width:500,height:"auto"}))),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",null,"TTN Introduction"),(0,o.kt)("br",null),(0,o.kt)("br",null),"In this chapter, we will introduce the TTN console controls that we use to get a first impression of the TTN console.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://wiki.seeedstudio.com/TTN-Introduction"},"Jump to chapter >"))),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/K1100/ttncon.jpg",alt:"pir",width:500,height:"auto"}))),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",null,"Connecting to TTN"),(0,o.kt)("br",null),(0,o.kt)("br",null),"This section describes how to configure TTN so that sensor data can be successfully uploaded to and displayed in TTN.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://wiki.seeedstudio.com/Connecting-to-TTN"},"Jump to chapter >"))))),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})),(0,o.kt)("h2",{id:"statement"},"Statement"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The LoRa\xae Mark is a trademark of Semtech Corporation or its subsidiaries."),(0,o.kt)("li",{parentName:"ul"},"LoRaWAN\xae is a mark used under license from the LoRa Alliance\xae.")))}c.isMDXComponent=!0}}]);