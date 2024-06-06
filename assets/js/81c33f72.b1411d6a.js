"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10329],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(o),g=r,h=u["".concat(d,".").concat(g)]||u[g]||c[g]||i;return o?n.createElement(h,s(s({ref:t},p),{},{components:o})):n.createElement(h,s({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=g;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},47696:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const i={description:"Learn how to integrate Modbus TCP with Node-RED on the EdgeBox RPi 200. This guide covers setting up the hardware, configuring Modbus devices, and creating Node-RED flows for efficient industrial automation and monitoring.",title:"Edge Box RPi 200 with Node Red and Modbus TCP",keywords:["Edge Controller","Edge-Box","Node-Red","Modbus"],image:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg",slug:"/edge_box_rpi_200_node_red_modbus_tcp",last_update:{date:"05/27/2024",author:"Kasun Thushara"}},s=void 0,a={unversionedId:"Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red/Edge_Box_rpi_200_Node_red_Modbus_tcp",id:"Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red/Edge_Box_rpi_200_Node_red_Modbus_tcp",title:"Edge Box RPi 200 with Node Red and Modbus TCP",description:"Learn how to integrate Modbus TCP with Node-RED on the EdgeBox RPi 200. This guide covers setting up the hardware, configuring Modbus devices, and creating Node-RED flows for efficient industrial automation and monitoring.",source:"@site/docs/Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red/Edge_Box_rpi_200_Node_red_Modbus_tcp.md",sourceDirName:"Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red",slug:"/edge_box_rpi_200_node_red_modbus_tcp",permalink:"/edge_box_rpi_200_node_red_modbus_tcp",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red/Edge_Box_rpi_200_Node_red_Modbus_tcp.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1716768e3,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{description:"Learn how to integrate Modbus TCP with Node-RED on the EdgeBox RPi 200. This guide covers setting up the hardware, configuring Modbus devices, and creating Node-RED flows for efficient industrial automation and monitoring.",title:"Edge Box RPi 200 with Node Red and Modbus TCP",keywords:["Edge Controller","Edge-Box","Node-Red","Modbus"],image:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg",slug:"/edge_box_rpi_200_node_red_modbus_tcp",last_update:{date:"05/27/2024",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Edge Box RPi 200 with Node Red and MQTT",permalink:"/Edge-Box-Node-Red-MQTT"},next:{title:"Edge Box RPi 200 with Node Red and BACnet TCP",permalink:"/edge_box_rpi_200_node_red_bacnet_tcp"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Modbus Support Devices",id:"modbus-support-devices",level:4},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Configure Ethernet settings for Modbus TCP/IP",id:"configure-ethernet-settings-for-modbus-tcpip",level:3},{value:"Install Modbus node",id:"install-modbus-node",level:2},{value:"Identifying Modbus Addresses",id:"identifying-modbus-addresses",level:2},{value:"Configuring the Modbus-Write Node",id:"configuring-the-modbus-write-node",level:2},{value:"Configuring the Modbus-Read Node",id:"configuring-the-modbus-read-node",level:2},{value:"Configuring the Modbus-Response Node",id:"configuring-the-modbus-response-node",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:l},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Modbus")," is a widely used communication protocol in industrial environments, known for its simplicity and robustness. ",(0,r.kt)("strong",{parentName:"p"},"Modbus RTU (Remote Terminal Unit)")," is a serial communication protocol that operates over RS-232 or RS-485 physical layers. It uses a compact, binary representation of the data, making it efficient for transmission over long distances and in noisy environments. ",(0,r.kt)("strong",{parentName:"p"},"Modbus TCP"),", on the other hand, extends the protocol to Ethernet networks, encapsulating Modbus frames within TCP/IP packets. This allows for faster communication speeds and the integration of Modbus with modern IT infrastructure. Both versions are favored in industrial settings due to their reliability, ease of implementation, and ability to facilitate communication between a wide variety of devices and systems, such as PLCs, sensors, and SCADA systems."),(0,r.kt)("h2",{id:"getting-start"},"Getting Start"),(0,r.kt)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,r.kt)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,r.kt)("div",{class:"table-center"},(0,r.kt)("table",{class:"table-nobg"},(0,r.kt)("tr",{class:"table-trnobg"},(0,r.kt)("th",{class:"table-trnobg"},"Edge Box RPi 200")),(0,r.kt)("tr",{class:"table-trnobg"}),(0,r.kt)("tr",{class:"table-trnobg"},(0,r.kt)("td",{class:"table-trnobg"},(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg",style:{width:300,height:"auto"}})))),(0,r.kt)("tr",{class:"table-trnobg"}),(0,r.kt)("tr",{class:"table-trnobg"},(0,r.kt)("td",{class:"table-trnobg"},(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,r.kt)("h4",{id:"modbus-support-devices"},"Modbus Support Devices"),(0,r.kt)("p",null,"The EdgeBox RPi 200 supports Modbus communication with various devices, including ",(0,r.kt)("strong",{parentName:"p"},"PLCs, VFDs, HMIs, energy meters, and BMS")," systems. For this case, the Siemens LOGO PLC will be utilized, which supports  ",(0,r.kt)("strong",{parentName:"p"},"Modbus TCP/IP protocols"),"."),(0,r.kt)("h3",{id:"software-preparation"},"Software Preparation"),(0,r.kt)("p",null,"Edge Box-200 comes to your hand pre installed raspberry pi OS. If you are booting this device first time please read our ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Edge_Box_introduction/"},"Getting Started")," Wiki.\nWe have prepared a ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Edge-Box-Getting-Started-with-Node-Red/"},"Getting started Guide on Node-RED"),". It is recommended that you review this guide before proceeding to the wiki."),(0,r.kt)("h3",{id:"configure-ethernet-settings-for-modbus-tcpip"},"Configure Ethernet settings for Modbus TCP/IP"),(0,r.kt)("p",null,"Since your PLC/Device IP domain is different from your wireless settings, you may have to change the IP configuration manually. For that,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 01"),": Run the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/dhcpcd.conf\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 02"),": Then configure the Ethernet port settings according to your PLC/Device network domain and set priorities using the ",(0,r.kt)("strong",{parentName:"li"},"metric")," command. The lowest metric has the highest priority.")),(0,r.kt)("center",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG"})),(0,r.kt)("h2",{id:"install-modbus-node"},"Install Modbus node"),(0,r.kt)("p",null,"To install the Modbus node, follow these steps:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Click the Settings button, indicated by a ",(0,r.kt)("strong",{parentName:"p"},"three-dash")," icon, located at the top-right corner, then select ",(0,r.kt)("strong",{parentName:"p"},"Manage palette.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2.")," In the palette tab, navigate to the ",(0,r.kt)("strong",{parentName:"p"},"Install tab"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Use the node search bar to find the desired ",(0,r.kt)("a",{parentName:"p",href:"https://flows.nodered.org/node/node-red-contrib-modbus"},"Modbus node"),"."),(0,r.kt)("center",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4.")," Click the ",(0,r.kt)("strong",{parentName:"p"},"Install")," button next to the node."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5.")," If prompted, click the ",(0,r.kt)("strong",{parentName:"p"},"Install")," button from the dropdown warning window to confirm the installation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 6.")," Wait for the installation process to complete. Once finished, the ",(0,r.kt)("strong",{parentName:"p"},"Install")," button should change to ",(0,r.kt)("strong",{parentName:"p"},"Installed.")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif",style:{width:800,height:"auto"}})),(0,r.kt)("h2",{id:"identifying-modbus-addresses"},"Identifying Modbus Addresses"),(0,r.kt)("p",null,"Identifying the correct Modbus addresses is a crucial step. It is recommended to ",(0,r.kt)("strong",{parentName:"p"},"consult the PLC or device manufacturer's datasheet for detailed information on Modbus addresses, including input, output, and holding registers"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus.PNG",style:{width:600,height:"auto"}})),(0,r.kt)("p",null,"Based on this information, you can adjust the Modbus address in the tag configuration. For example, if the datasheet lists the output coil Q1 as 8193, you should configure the address as 8192 in Node-RED (",(0,r.kt)("strong",{parentName:"p"},"decrementing by one from the original address"),"). Similarly, if a network input is listed as 1 and it is a coil type, the address should be set to 0 in Node-RED."),(0,r.kt)("h2",{id:"configuring-the-modbus-write-node"},"Configuring the Modbus-Write Node"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),". ",(0,r.kt)("strong",{parentName:"p"},"Drag and drop")," the Modbus-Write node onto the workspace, then ",(0,r.kt)("strong",{parentName:"p"},"double-click")," on the node to open its settings."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),". In the ",(0,r.kt)("strong",{parentName:"p"},"Server")," tab, edit it to add your device by entering the following details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": Server Name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type"),": TCP"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host"),": IP Address of the Modbus server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port"),": Port address of the Modbus server (typically 502)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unit-Id"),": 255 (Unit-ID is used to identify individual devices within a Modbus network, especially when multiple devices share the same communication line)")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/server.PNG",style:{width:600,height:"auto"}})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3"),". ",(0,r.kt)("strong",{parentName:"p"},"Give your node an appropriate name"),', for example, "Network IP 1". For this demo, you are controlling a network input in the PLC program.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4"),". Set the ",(0,r.kt)("strong",{parentName:"p"},"FC option")," to ",(0,r.kt)("strong",{parentName:"p"},"FC 5: Force Single Coil"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5"),". Set the ",(0,r.kt)("strong",{parentName:"p"},"address to 0")," (as we are addressing input 0)."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/networkip1.PNG",style:{width:600,height:"auto"}})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 6"),". Using the inject node, we can inject boolean values. Here, we will use a couple of inject nodes for that purpose."),(0,r.kt)("p",null,"The overall steps can be demonstrated as follows"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-write.gif",style:{width:800,height:"auto"}})),(0,r.kt)("h2",{id:"configuring-the-modbus-read-node"},"Configuring the Modbus-Read Node"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),". ",(0,r.kt)("strong",{parentName:"p"},"Drag and drop")," the Modbus-Read node onto the flow. You can find this node in the Modbus tab of your palette."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),". ",(0,r.kt)("strong",{parentName:"p"},"Double-click")," on the Modbus-Read node to open its settings."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3"),". ",(0,r.kt)("strong",{parentName:"p"},"Configure the following settings:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),': Give it an appropriate name, such as "ReadOutputs".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FC value"),": Change the FC value to FC 5: Read Coil Status."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Address"),": Set the address to 8192 (according to the manufacturer's datasheet)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Quantity"),": Set the quantity to 4, This case,there are 4 digital outputs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Poll Rate"),": Change the poll rate to something suitable for your application needs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Server"),': Set the server to "MyPLC" (configured in the previous example).')),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbusread.PNG",style:{width:600,height:"auto"}})),(0,r.kt)("h2",{id:"configuring-the-modbus-response-node"},"Configuring the Modbus-Response Node"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Modbus-Response node")," is used to display the response of a Modbus Read/Write node."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),". ",(0,r.kt)("strong",{parentName:"p"},"Drag and drop")," the Modbus-Response node onto the flow."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),". Connect with ",(0,r.kt)("strong",{parentName:"p"},"Modbus Read")," Node. The response will display an array of numbers under your Modbus-Response node. These numbers represent the count of each digital output."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3"),". ",(0,r.kt)("strong",{parentName:"p"},"Drag and Drop Debug Node")," for inspection purpose. Then connect with ",(0,r.kt)("strong",{parentName:"p"},"Modbus Read Node"),". "),(0,r.kt)("p",null,"By following these steps, you can read and display the values of registers/coils from your Modbus TCP device effectively "),(0,r.kt)("p",null,"The overall steps can be demonstrated as follows."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-read.gif",style:{width:800,height:"auto"}})),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);