"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1723],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(d,".").concat(u)]||p[u]||c[u]||r;return n?o.createElement(m,i(i({ref:t},g),{},{components:n})):o.createElement(m,i({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(58168),a=(n(96540),n(15680));const r={description:"This wiki provides a comprehensive guide to working with the Edge Box RPi 200, an industrial IoT edge controller based on the Raspberry Pi 4. It includes instructions for setting up Node-RED, simulating room temperatures with YABE, and discovering and reading BACnet IP device parameters for efficient Building Management System (BMS) integration.",title:"Edge Box RPi 200 with Node Red and BACnet TCP",keywords:["Edge Controller","Edge-Box","Node-Red","Bacnet"],image:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg",slug:"/edge_box_rpi_200_node_red_bacnet_tcp",last_update:{date:"06/05/2024",author:"Kasun Thushara"}},i=void 0,l={unversionedId:"Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red/Edge_Box_rpi_200_Node_red_Bacnet_tcp",id:"Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red/Edge_Box_rpi_200_Node_red_Bacnet_tcp",title:"Edge Box RPi 200 with Node Red and BACnet TCP",description:"This wiki provides a comprehensive guide to working with the Edge Box RPi 200, an industrial IoT edge controller based on the Raspberry Pi 4. It includes instructions for setting up Node-RED, simulating room temperatures with YABE, and discovering and reading BACnet IP device parameters for efficient Building Management System (BMS) integration.",source:"@site/docs/Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red/Edge_Box_rpi_200_Node_red_Bacnet_tcp.md",sourceDirName:"Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red",slug:"/edge_box_rpi_200_node_red_bacnet_tcp",permalink:"/edge_box_rpi_200_node_red_bacnet_tcp",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red/Edge_Box_rpi_200_Node_red_Bacnet_tcp.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1717545600,formattedLastUpdatedAt:"Jun 5, 2024",frontMatter:{description:"This wiki provides a comprehensive guide to working with the Edge Box RPi 200, an industrial IoT edge controller based on the Raspberry Pi 4. It includes instructions for setting up Node-RED, simulating room temperatures with YABE, and discovering and reading BACnet IP device parameters for efficient Building Management System (BMS) integration.",title:"Edge Box RPi 200 with Node Red and BACnet TCP",keywords:["Edge Controller","Edge-Box","Node-Red","Bacnet"],image:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg",slug:"/edge_box_rpi_200_node_red_bacnet_tcp",last_update:{date:"06/05/2024",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Edge Box RPi 200 with Node Red and Modbus RS485",permalink:"/edge_box_rpi_200_node_red_modbus_rs485"},next:{title:"Edge Box RPi 200 with Node Red and InfluxDB",permalink:"/edge_box_rpi_200_node_red_influxdb"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"YABE",id:"yabe",level:3},{value:"Configure Ethernet settings for BACnet IP",id:"configure-ethernet-settings-for-bacnet-ip",level:3},{value:"Install BACnet node",id:"install-bacnet-node",level:2},{value:"Start Room Temperature Controller Simulator",id:"start-room-temperature-controller-simulator",level:2},{value:"Discover BACnet IP Devices",id:"discover-bacnet-ip-devices",level:2},{value:"Read All Device Parameters",id:"read-all-device-parameters",level:2},{value:"Read single device data",id:"read-single-device-data",level:2},{value:"Read Single device particular object data",id:"read-single-device-particular-object-data",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,o.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"BACnet IP (Building Automation and Control Network over IP) is a communication protocol designed for managing and automating building systems. It enables devices from different manufacturers to interoperate seamlessly over standard IP networks, enhancing system integration and flexibility. The primary advantages of BACnet IP in Building Management Systems (BMS) include improved scalability, easier installation and maintenance, and the ability to leverage existing network infrastructure. BACnet IP also supports real-time data exchange, facilitating better monitoring and control of building systems. This results in increased energy efficiency, reduced operational costs, and enhanced occupant comfort and safety."),(0,a.yg)("h2",{id:"getting-start"},"Getting Start"),(0,a.yg)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,a.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{class:"table-nobg"},(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("th",{class:"table-trnobg"},"Edge Box RPi 200")),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg",style:{width:300,height:"auto"}})))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,a.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,a.yg)("p",null,"Edge Box comes to your hand pre-installed with Raspberry Pi OS. If you are booting this device for the first time, please read our ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Edge_Box_introduction/"},"Getting Started Wiki"),". We have prepared a ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Edge-Box-Getting-Started-with-Node-Red/"},"Getting Started Guide on Node-RED"),". It is recommended that you review this guide before proceeding to the wiki. In this tutorial, we are going to connect the Host PC running the YABE room temperature simulator with Node-RED running on Edge Box."),(0,a.yg)("h3",{id:"yabe"},"YABE"),(0,a.yg)("p",null,"Please go to this ",(0,a.yg)("a",{parentName:"p",href:"https://sourceforge.net/projects/yetanotherbacnetexplorer/"},"link")," and download YABE (Yet Another BACnet Explorer). YABE is a versatile tool that allows you to simulate and explore BACnet devices, making it ideal for testing and development purposes. Once downloaded and installed on your Host PC, YABE will be used to simulate room temperature data, which we will then read and process using Node-RED on the Edge Box."),(0,a.yg)("h3",{id:"configure-ethernet-settings-for-bacnet-ip"},"Configure Ethernet settings for BACnet IP"),(0,a.yg)("p",null,"Since your Device IP domain is different from your wireless settings, you may have to change the IP configuration manually. For that,"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 01"),": Run the following command:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/dhcpcd.conf\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 02"),": Then configure the Ethernet port settings according to your Device network domain and set priorities using the metric command. The lowest metric has the highest priority. Then connect Edge Box and Device.")),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG"})),(0,a.yg)("h2",{id:"install-bacnet-node"},"Install BACnet node"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Open Node-RED:"),"\nStart Node-RED on your Edge Box. You can usually access it by opening a web browser and navigating to ",(0,a.yg)("inlineCode",{parentName:"p"},"http://<your-edgebox-ip>:1880"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Access Manage Palette:"),'\nIn the top-right corner of the Node-RED interface, click on the three horizontal lines (menu) to open the main menu. From the drop-down menu, select "Manage palette."')),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Install New Nodes:"),'\nIn the "Manage palette" window, go to the "Install" tab.')),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Search for the Package:"),"\nIn the search box, type ",(0,a.yg)("inlineCode",{parentName:"p"},"node-red-contrib-bacnet-extended")," to find the package.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Install the Package:"),"\nOnce you see ",(0,a.yg)("inlineCode",{parentName:"p"},"node-red-contrib-bacnet-extended"),' in the list of available nodes, click the "Install" button next to it. This will start the installation process.')),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Wait for Installation to Complete:"),"\nThe installation might take a few moments. Once it\u2019s complete, you should see a confirmation message.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Verify Installation:"),"\nAfter the installation is complete, the BACnet nodes will be available in the Node-RED palette. You can verify this by checking the list of nodes on the left sidebar of the Node-RED editor."))),(0,a.yg)("p",null,"Now, you have successfully installed ",(0,a.yg)("inlineCode",{parentName:"p"},"node-red-contrib-bacnet-extended")," and can start using it to integrate BACnet devices with your Node-RED flows."),(0,a.yg)("h2",{id:"start-room-temperature-controller-simulator"},"Start Room Temperature Controller Simulator"),(0,a.yg)("p",null,"Once you have installed YABE, navigate to the ",(0,a.yg)("inlineCode",{parentName:"p"},"add-on")," folder and double-click ",(0,a.yg)("inlineCode",{parentName:"p"},"bacnet.Room.Simulator")," to start it. "),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/room-simulator.PNG"})),(0,a.yg)("p",null,"Once done, you need to start YABE."),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/Yabe-app.png"})),(0,a.yg)("p",null,"Then, click on the ",(0,a.yg)("inlineCode",{parentName:"p"},"+"),' mark to add a device and enter the IP address of your PC\'s Ethernet port. Click on "Start."'),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/YABE-config.PNG"})),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"You might need to configure the Ethernet port IP address to ensure it is in the same network domain as both the reComputer and your PC.")),(0,a.yg)("p",null,"After that, you should be able to see the device with the same device ID as the room temperature simulator."),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/simulator&YABE.PNG"})),(0,a.yg)("h2",{id:"discover-bacnet-ip-devices"},"Discover BACnet IP Devices"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Nodes Required:"),"\nYou will need the following four nodes:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Inject"),(0,a.yg)("li",{parentName:"ul"},"Function"),(0,a.yg)("li",{parentName:"ul"},"Discover-devices"),(0,a.yg)("li",{parentName:"ul"},"Debug"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Add Nodes to Flow:"),"\nDrag and drop the above nodes onto your Node-RED workbench flow.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Connect the Nodes:"),"\nConnect the nodes in the following manner:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Inject >>> Function >>> Discover-devices >>> Debug")))),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-device.PNG"})),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Configure the Function Node:"),"\nDouble-click the Function node to open its configuration dialog. In the function block, write the following code:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"msg.reuseAddr = true;\nmsg.transportClosedDuration = 8000;\nreturn msg;\n")),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-func.PNG"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Deploy the Flow:"),'\nClick on the "Deploy" button in the top-right corner of the Node-RED interface to deploy the flow.')),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Trigger Device Discovery:"),"\nClick on the timestamp button (Inject node) to initiate the discovery process.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Check the Debug Output:"),"\nWait for the output to appear in the Debug window. You will see the device IP and device ID in the debug message."))),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,height:400,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-discover.PNG"})),(0,a.yg)("center",null,(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet1.gif"})),(0,a.yg)("h2",{id:"read-all-device-parameters"},"Read All Device Parameters"),(0,a.yg)("p",null,"To read all parameters from BACnet devices using Node-RED, follow these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Prepare Nodes:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"You will need four nodes: Inject, Function, Read-All-Devices, and Debug."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Add Nodes to Workbench:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Drag and drop the Inject, Function, Read-All-Devices, and Debug nodes onto your workbench."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Connect Nodes:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Connect the nodes in the following order:",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"Inject >>>> Function >>>> Read-All-Devices >>>> Debug\n")))))),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-all-devices.PNG"})),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Configure the Function Node:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Double-click on the Function node to open its configuration window."),(0,a.yg)("li",{parentName:"ul"},"Enter the following code in the function block:"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"msg.reuseAddr = true;\nmsg.transportClosedDuration = 8000;\nreturn msg;\n")))))),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-func.PNG"})),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Deploy the Flow:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},'Click the "Deploy" button in the top-right corner of the Node-RED interface to deploy the flow.'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Initiate Device Parameter Reading:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Click the timestamp button on the Inject node to initiate the process."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Check the Output:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Wait for the output to appear in the Debug window. You will see the parameters of the devices in the BACnet network area.")))),(0,a.yg)("p",null,"This setup will read all the parameters from BACnet devices on your network and display them in Node-RED's Debug window."),(0,a.yg)("center",null,(0,a.yg)("img",{width:"300",src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-read-all.png"})),(0,a.yg)("center",null,(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet2.gif"})),(0,a.yg)("h2",{id:"read-single-device-data"},"Read single device data"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Prepare Nodes:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"You will need four nodes: Inject, Function, Read-All-Devices, and Debug."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Add Nodes to Workbench:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Drag and drop the Inject, Function, Read-Single-Device, and Debug nodes onto your workbench."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Connect Nodes:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Connect the nodes in the following order:",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"Inject >>>> Function >>>> Read-Single-Device >>>> Debug\n")))))),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-single-device.PNG"})),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Configure the Function Node:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Double-click on the Function node to open its configuration window."),(0,a.yg)("li",{parentName:"ul"},"Enter the following code in the function block:"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'   msg.deviceId=DeviceID;\n   msg.address="IP:PORT ADD";\n   return msg;\n')))))),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-single-func.PNG"})),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Deploy the Flow:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},'Click the "Deploy" button in the top-right corner of the Node-RED interface to deploy the flow.'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Initiate Device Parameter Reading:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Click the timestamp button on the Inject node to initiate the process."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Check the Output:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Wait for the output to appear in the Debug window. You will see the parameters of the Selected device in the BACnet network area.")))),(0,a.yg)("center",null,(0,a.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-single-device.PNG"})),(0,a.yg)("center",null,(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet3.gif"})),(0,a.yg)("h2",{id:"read-single-device-particular-object-data"},"Read Single device particular object data"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Prepare Nodes:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"You will need four nodes: Inject, Two function node, Read-Single-Device, and Debug."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Add Nodes to Workbench:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Drag and drop the Inject, Two function node, Read-Single-Device, and Debug nodes onto your workbench.")))),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Connect Nodes:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Connect the nodes in the following order:",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"Inject >>>> Function >>>> Read-Single-Devices >>>> Function >>>> Debug\n")))))),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/single-object.PNG"})),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Configure the Function Node:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Double-click on the Function node near to inject node to open its configuration window.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Enter the following code in the function block:")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'   msg.deviceId=DeviceID;\n   msg.address="IP:PORT ADD";\n   return msg;\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Double-click on the Function node near to debug node to open its configuration window.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Enter the following code in the function block:")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"   const objects = msg.payload['OBJECT_LIST(76)'];\n   let temperatureIndoor = null;\n\n   for (let obj of objects) {\n   if (obj['OBJECT_NAME(77)'] === 'Temperature.Indoor' && obj['OBJECT_TYPE(79)'] === 'ANALOG_INPUT(0)') {\n   temperatureIndoor = obj['PRESENT_VALUE(85)'];\n   break;\n   }\n   }\n\n   if (temperatureIndoor !== null) {\n   msg.payload = { 'Temperature.Indoor': temperatureIndoor };\n   } else {\n   msg.payload = { error: 'Temperature.Indoor not found' };\n   }\n\n   return msg;\n\n")))))),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/single-object-func.PNG"})),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Deploy the Flow:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},'Click the "Deploy" button in the top-right corner of the Node-RED interface to deploy the flow.'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Initiate Device Parameter Reading:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Click the timestamp button on the Inject node to initiate the process."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Check the Output:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Wait for the output to appear in the Debug window. You will see the parameters of the only the particular object in Selected device in the BACnet network area.")))),(0,a.yg)("center",null,(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-single-object.PNG"})),(0,a.yg)("center",null,(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet4.gif"})),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);