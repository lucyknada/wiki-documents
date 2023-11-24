"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,w=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(w,s(s({ref:t},p),{},{components:n})):r.createElement(w,s({ref:t},p))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={description:"Sensecap LoRaWAN User Guide",title:"Sensecap LoRaWAN User Guide",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},s=void 0,i={unversionedId:"Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide",id:"Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide",title:"Sensecap LoRaWAN User Guide",description:"Sensecap LoRaWAN User Guide",source:"@site/docs/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide.md",sourceDirName:"Network/SenseCAP_Network",slug:"/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide",permalink:"/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"Sensecap LoRaWAN User Guide",title:"Sensecap LoRaWAN User Guide",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}}},l={},c=[{value:"1.Product Introduction",id:"1product-introduction",level:2},{value:"2.Quick Start",id:"2quick-start",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1product-introduction"},"1.Product Introduction"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-1.jpg",alt:null})),(0,a.kt)("p",null,"SenseCAP is an industrial wireless sensor network that integrates easy-to-deploy hardware and data API services, enabling low-power, long-distance environmental data collection. SenseCAP includes several versions, such as LoRaWAN, NB-IoT, etc.  "),(0,a.kt)("p",null,"SenseCAP LoRaWAN version products include LoRaWAN Gateways and Sensor Nodes. Based on the LoRaWAN protocol, it can realize one-to-many, long-distance networking and bilateral communication. The LoRaWAN Gateway supports Ethernet and 4G. The Sensor Node is powered by a high-capacity battery that lasts up to 3 years (if uploading data once every hour). It also supports hot-swap, making it easy for maintenance and upgrading.  "),(0,a.kt)("p",null,"SenseCAP provides an easy-to-use cloud platform. Users can scan the QR code with the SenseCAP App to bind the device with its respective account to manage the devices, and check Sensor Node data on the SenseCAP Portal. SenseCAP Portal provides API for users to further develop based on the data on the Portal."),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-c-1339.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Main Features")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gateway: High-performance Cortex A8 1GHz processor"),(0,a.kt)("li",{parentName:"ul"},"Sensors support LoRaWAN protocol, ultra-low-power consumption, battery lasts for 3 years (if upload data once every hour)"),(0,a.kt)("li",{parentName:"ul"},"Gateway uses multiple methods to connect to the network: 4G and Ethernet to support different scenarios"),(0,a.kt)("li",{parentName:"ul"},"Super long-distance communication: 10km in line-of-sight scenario, 2km in urban scenario"),(0,a.kt)("li",{parentName:"ul"},"Easy-to-use cloud platform and API"),(0,a.kt)("li",{parentName:"ul"},"Industrial protection rating IP66-rated enclosure, suitable for outdoor environment at -40\u2103~70\u2103"),(0,a.kt)("li",{parentName:"ul"},"Easy-to-deploy, enabling people without engineering background to install the devices quickly"),(0,a.kt)("li",{parentName:"ul"},"Modular design for the Sensor Nodes, including a Sensor Node Controller and a Sensor Probe, with a specially-designed bracket for easy installation on poles or walls.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LoRaWAN Gateway:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-2.png",alt:null})),(0,a.kt)("p",null,"At the bottom of the gateway are Ethernet port and power connector, all of which meet the waterproof requirements. LED indicator light indicates the networking status. The top of the gateway is the connector for installing 4G/LoRa antenna, and the other connectors are reserved."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LoRaWAN Sensor Node:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-3.png",alt:null})),(0,a.kt)("p",null,"Snap to open the device and you will see two parts. The Sensor Node Controller\u2019s circuit shows a power switch, a RESET button, and an indicator LED as well as a mode button and serial ports, which will be used for firmware upgrading. The two parts connect and communicate via two spring connectors."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-4.png",alt:null})),(0,a.kt)("p",null,"Each Sensor Node comes with a bracket for easy installation on a pole or wall."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-11.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SenseCAP Portal\uff1a")),(0,a.kt)("p",null,"SenseCAP Portal provides multiple services, including web-based management portal and API for calling data. Users can further develop system integration with the API, without worrying about embedded hardware technologies, hence shorten the development cycle."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-7.png",alt:null})),(0,a.kt)("h2",{id:"2quick-start"},"2.Quick Start"),(0,a.kt)("p",null,"For thi quick start guide, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/res/SenseCAP%20Product%20User%20Guide(LoRaWAN%20Series)-V1.1.docx"},"SenseCAP Product User Guide(LoRaWAN Series)-V1.1")))}u.isMDXComponent=!0}}]);