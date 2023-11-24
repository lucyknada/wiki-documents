"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={description:"SenseCAP & Node-RED to Power BI",title:"SenseCAP & Node-RED to Power BI",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/K1100_SenseCAP_to_PowerBI",last_update:{date:"1/13/2023",author:"shuxu hu"}},s="Connecting SenseCAP to Power BI via Node-RED",i={unversionedId:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_PowerBI",id:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_PowerBI",title:"SenseCAP & Node-RED to Power BI",description:"SenseCAP & Node-RED to Power BI",source:"@site/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_PowerBI.md",sourceDirName:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services",slug:"/K1100_SenseCAP_to_PowerBI",permalink:"/K1100_SenseCAP_to_PowerBI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_PowerBI.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"SenseCAP & Node-RED to Power BI",title:"SenseCAP & Node-RED to Power BI",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/K1100_SenseCAP_to_PowerBI",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP & Node-RED to Microsoft Azure IoT Centra",permalink:"/K1100_SenseCAP_to_Azure_IoT_Central"},next:{title:"SenseCAP & Node-RED to InfluxDB",permalink:"/K1100_SenseCAP_to_influxdb"}},l={},d=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Power BI",id:"power-bi",level:2},{value:"Preliminary preparation",id:"preliminary-preparation",level:2},{value:"Create MQTT Node",id:"create-mqtt-node",level:2},{value:"Configure function node",id:"configure-function-node",level:2},{value:"Create the Power BI datasets",id:"create-the-power-bi-datasets",level:2},{value:"Configure http request node",id:"configure-http-request-node",level:2},{value:"Deploy and observe data",id:"deploy-and-observe-data",level:2},{value:"Add line charts",id:"add-line-charts",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2},{value:"Statement",id:"statement",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-sensecap-to-power-bi-via-node-red"},"Connecting SenseCAP to Power BI via Node-RED"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SenseCAP K1100 - The Sensor Prototype Kit")," represents Seeed Studio concentrating the essence of LoRa\xae communication on technology and edge intelligence products, for the easiest deploying and mastering of LoRa\xae and IoT applications."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100/banner.png"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products"},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,o.kt)("p",null,"With the SenseCAP ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,o.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,o.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,o.kt)("font",{color:"white",size:4},(0,o.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,o.kt)("strong",null,"S2100 ",(0,o.kt)("br",null)," Data Logger"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,o.kt)("strong",null,"S2101 ",(0,o.kt)("br",null)," Air Temp & Humidity"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,o.kt)("strong",null,"S2102 ",(0,o.kt)("br",null)," Light"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,o.kt)("strong",null,"S2103 ",(0,o.kt)("br",null)," Air Temp & Humidity & CO2")))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,o.kt)("strong",null,"S2104 ",(0,o.kt)("br",null)," Soil Moisture & Temp"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,o.kt)("strong",null,"S2105 ",(0,o.kt)("br",null)," Soil Moisture & Temp & EC"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,o.kt)("strong",null,"S2110 ",(0,o.kt)("br",null)," LoRaWAN\xae Controller"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,o.kt)("strong",null,"S2120 ",(0,o.kt)("br",null)," 8-in-1 Weather Station")))))),(0,o.kt)("h2",{id:"power-bi"},"Power BI"),(0,o.kt)("p",null,"Connect and analyze your entire data estate by combining Power BI with Azure analytics services\u2014including Azure Synapse Analytics and Azure Data Lake Storage. Analyze petabytes of data, use advanced AI capabilities, apply additional data protection, and more easily share insights across your organization."),(0,o.kt)("p",null,"In this tutorial we will guide you through how to import sensor data from ",(0,o.kt)("strong",{parentName:"p"},"SenseCAP")," into ",(0,o.kt)("strong",{parentName:"p"},"Power BI")," for more in-depth data processing by using Node RED."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/k1100_powerbi/powerbi_logo.png"})),(0,o.kt)("h2",{id:"preliminary-preparation"},"Preliminary preparation"),(0,o.kt)("p",null,"To complete this tutorial, you need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you haven't installed or don't know what Node-RED is, please refer to ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/K1100_sensecap_node-red/"},"Node-RED & SenseCAP Tutorials"),"."),(0,o.kt)("li",{parentName:"ul"},"A Power BI account. If you don't have a Power BI account, sign up for a ",(0,o.kt)("a",{parentName:"li",href:"https://app.powerbi.com/signupredirect?pbi_source=web"},"free Power BI Pro trial")," before you begin."),(0,o.kt)("li",{parentName:"ul"},"In any of the following wikis, you have successfully uploaded data to SenseCAP.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/K1100-quickstart/#send-sensor-data-to-sensecap-via-lora"},"Send sensor data to SenseCAP via LoRa\xae"))))),(0,o.kt)("h2",{id:"create-mqtt-node"},"Create MQTT Node"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Start Node-RED"),(0,o.kt)("p",null,"Start Node-RED by typing the command ",(0,o.kt)("inlineCode",{parentName:"p"},"node-red")," in the terminal and open a browser and enter the address ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"http://localhost:1880"},"http://localhost:1880"))," in the address bar to access the editor of Node-RED."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Create MQTT Node"),(0,o.kt)("p",null,"We use ",(0,o.kt)("strong",{parentName:"p"},"Network -> mqtt in")," node and configure mqtt in the format of the SenseCAP API as requested in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node"},"previous tutorial"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Server: openstream.api.sensecap.seeed.cc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Port: 1883")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Protocol: MQTT V3.1.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Client ID: The format is ",(0,o.kt)("inlineCode",{parentName:"p"},"org-<Organization ID>-<Random ID>")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Orgnization ID>")," Your organization ID. We have obtained it in the ",(0,o.kt)("a",{parentName:"li",href:"/K1100_sensecap_node-red#get-the-sensecap-api"},"Get the SenseCAP API"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Random ID>")," uses your own randomly generated numbers or lowercase letters."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Topic Format: ",(0,o.kt)("inlineCode",{parentName:"p"},"/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>")))),(0,o.kt)("table",{align:"center"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"OrgID"),(0,o.kt)("td",{align:"center"},"Your organization ID. We have obtained it in the Get the SenseCAP API.")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"DevEUI"),(0,o.kt)("td",{align:"center"},"Unique identification of sensor devices. This information can be found on the sticker on the back of the Grove - Wio E5, as well as in the SenseCAP console device.")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"Channel"),(0,o.kt)("td",{align:"center"},"A physical interface on the device to which the sensor is connected. For the K1100 kit, the default value here is 1.")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"Reserved"),(0,o.kt)("td",{align:"center"},"Reserved Fields.")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"MeasurementID"),(0,o.kt)("td",{align:"center"},"Measured value ID. This ID can be found in the Measurement IDs section of the ",(0,o.kt)("a",{href:"https://sensecap-docs.seeed.cc/sensor_types_list.html",target:"_blank"},"SenseCAP documentation"))))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We recommend that an mqtt in node only transmits the values of a single sensor to avoid data confusion caused by transmitting the values of multiple sensors at the same time.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/20.png" /></div>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Validate MQTT nodes"),(0,o.kt)("p",null,"Once configured, please click the ",(0,o.kt)("strong",{parentName:"p"},"Deploy")," button in the top right corner to check if the configuration was successful. If it is filled in correctly, then the word ",(0,o.kt)("strong",{parentName:"p"},"Connected")," will be displayed."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png"})),(0,o.kt)("h2",{id:"configure-function-node"},"Configure function node"),(0,o.kt)("p",null,"Data reporting to Power BI needs to follow a specific data format, so it's necessary to add a function node to process the data format."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/18.png"})),(0,o.kt)("p",null,"Drag out the function node from the function bar on the left, double-click it to enter the edit page, then copy the code to On Message."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    var payload = msg.payload;\n    var topic = msg.topic;\n    var strs = topic.split("/");\n    var length = strs.length\n    if (length >= 2) {\n        var measurementId = strs[length - 1]\n        var body = {}\n        var value = payload.value\n        if (measurementId == 4100) {\n            body.co2 = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4103) {\n            body.soilmoisture = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4150) {\n            body.accelX = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4151) {\n            body.accelY = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4152) {\n            body.accelZ = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4192) {\n            body.soundintensity = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4193) {\n            body.lightIntensity = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4195) {\n            body.tvoc = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4097) {\n            body.airtemperature = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4098) {\n            body.airhumidity = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4175) {\n            body.AIdetection_1 = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4176) {\n            body.AIdetection_2 = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4177) {\n            body.AIdetection_3 = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4178) {\n            body.AIdetection_4 = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4179) {\n            body.AIdetection_5 = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4180) {\n            body.AIdetection_6 = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4181) {\n            body.AIdetection_7 = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4182) {\n            body.AIdetection_8 = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4183) {\n            body.AIdetection_9 = value\n            body.timestamp = msg.payload.timestamp\n        } else if (measurementId == 4184) {\n            body.AIdetection_10 = value\n            body.timestamp = msg.payload.timestamp\n        }\n        msg.payload = body;\n    }\n    return msg;\n}\n')),(0,o.kt)("p",null,":::Tip\nThe above code is common to all sensors and you can choose to paste it all into a function node or intercept a section of one of the sensors you are using to use.\nIt is worth noting that the name of the sensor in the program needs to match the name set later in Power BI for the data stream to be transferred successfully. For example, in the above program the light sensor has the value name: ",(0,o.kt)("strong",{parentName:"p"},"lightIntensity"),".\n:::"),(0,o.kt)("h2",{id:"create-the-power-bi-datasets"},"Create the Power BI datasets"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Sign in to your ",(0,o.kt)("a",{parentName:"p",href:"https://app.powerbi.com/"},"Power BI account"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Create a workspace."),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"Workspaces"),", and then select ",(0,o.kt)("strong",{parentName:"p"},"Create a workspace"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_powerbi/23.png"})),(0,o.kt)("p",null,"On the Create a workspace page, enter ",(0,o.kt)("strong",{parentName:"p"},"In-store analytics - checkout")," as the Workspace name. Select ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_powerbi/24.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Create a streaming dataset."),(0,o.kt)("p",null,"On the workspace page, select ",(0,o.kt)("strong",{parentName:"p"},"+ New")," > ",(0,o.kt)("strong",{parentName:"p"},"Streaming dataset"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_powerbi/25.png"})),(0,o.kt)("p",null,"On the New streaming dataset page, choose API, and then select Next."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_powerbi/26.png"})),(0,o.kt)("p",null,"Enter ",(0,o.kt)("strong",{parentName:"p"},"Light-Sensor")," as the Dataset name."),(0,o.kt)("p",null,"Enter the Light values from stream in following table:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Value name"),(0,o.kt)("th",{parentName:"tr",align:null},"Value type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,o.kt)("td",{parentName:"tr",align:null},"DataTime")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lightIntensity"),(0,o.kt)("td",{parentName:"tr",align:null},"Number")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The Value name should be the same as the name of the function program in Node RED.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/21.png" /></div>\n')),(0,o.kt)("p",null,"You now have a streaming datasets. Please make a note of the ",(0,o.kt)("strong",{parentName:"p"},"Push URL")," you get here, we will use it in the next step."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/22.png"})),(0,o.kt)("h2",{id:"configure-http-request-node"},"Configure http request node"),(0,o.kt)("p",null,"Add ",(0,o.kt)("strong",{parentName:"p"},"http request")," from the storage bar on the left\uff0cdouble-click it to enter the configuration page, then click the edit button to edit ",(0,o.kt)("strong",{parentName:"p"},"http request")," node."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/16.png"})),(0,o.kt)("p",null,"Please copy the URL obtained in the previous section into the URL in the http request page."),(0,o.kt)("p",null,"Just change the method to ",(0,o.kt)("strong",{parentName:"p"},"POST")," and save it."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/17.png"})),(0,o.kt)("h2",{id:"deploy-and-observe-data"},"Deploy and observe data"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Deploy"),(0,o.kt)("p",null,"Then we connect all the nodes and click on the\xa0",(0,o.kt)("strong",{parentName:"p"},"Deploy"),"\xa0button and if everything is set up correctly you will be able to see the\xa0mqtt in\xa0node showing connected."),(0,o.kt)("p",null,"If you want to see the logging information of the data, you can add a debug node after the function node."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/18.png"})),(0,o.kt)("p",null,"Once the Wio Terminal starts powering up and working and starts sending data to SenseCAP PaaS server, then we can check the data on Node-RED debug log."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Configure Power BI dashboards"),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"Workspaces")," > ",(0,o.kt)("strong",{parentName:"p"},"In-store analytics - checkout"),"."),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"+ New")," > ",(0,o.kt)("strong",{parentName:"p"},"Dashboard"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100_powerbi/50.png"})),(0,o.kt)("p",null,"Enter ",(0,o.kt)("strong",{parentName:"p"},"Store analytics")," as the dashboard name, and select ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."),(0,o.kt)("h3",{id:"add-line-charts"},"Add line charts"),(0,o.kt)("p",null,"Add a line chart tiles to show the Light value from the Wio Terminal buit-in sensors. Use the information in the following table to create the tiles. To add each tile, start by selecting ",(0,o.kt)("strong",{parentName:"p"},"Edit")," > ",(0,o.kt)("strong",{parentName:"p"},"Add a tile"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_powerbi/51.png"})),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"Custom Streaming Data"),", and then select ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/k1100_powerbi/52.png"})),(0,o.kt)("p",null,"Configure the horizontal coordinate to display the timestamp and the vertical coordinate to display the data values on the value."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/15.png"})),(0,o.kt)("p",null,"When the data stream starts to transfer, you will be able to see the dashboard as a line graph."),(0,o.kt)("p",null,"You can also add more graphics or data analysis to suit your needs."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/19.png"})),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})),(0,o.kt)("h2",{id:"statement"},"Statement"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The LoRa\xae Mark is a trademark of Semtech Corporation or its subsidiaries."),(0,o.kt)("li",{parentName:"ul"},"LoRaWAN\xae is a mark used under license from the LoRa Alliance\xae.")))}u.isMDXComponent=!0}}]);