"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23123],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>k});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(i),h=o,k=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return i?n.createElement(k,l(l({ref:t},d),{},{components:i})):n.createElement(k,l({ref:t},d))}));function k(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,l=new Array(a);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<a;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},62389:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var n=i(87462),o=(i(67294),i(3905));const a={description:"Get Started with Wio-WM1110 Dev Kit",title:"Get Started",keywords:["Wio-WM1110 Dev Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get_Started_with_Wio-WM1110_Dev_Kit",last_update:{date:"8/7/2023",author:"Jessie"}},l=void 0,r={unversionedId:"Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Get_Started_with_Wio-WM1110_Dev_Kit",id:"Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Get_Started_with_Wio-WM1110_Dev_Kit",title:"Get Started",description:"Get Started with Wio-WM1110 Dev Kit",source:"@site/docs/Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Get_Started_with_Wio-WM1110_Dev_Kit.md",sourceDirName:"Sensor/Wio_Series/Wio-WM1110_Dev_Kit",slug:"/Get_Started_with_Wio-WM1110_Dev_Kit",permalink:"/Get_Started_with_Wio-WM1110_Dev_Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Get_Started_with_Wio-WM1110_Dev_Kit.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1691366400,formattedLastUpdatedAt:"Aug 7, 2023",frontMatter:{description:"Get Started with Wio-WM1110 Dev Kit",title:"Get Started",keywords:["Wio-WM1110 Dev Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get_Started_with_Wio-WM1110_Dev_Kit",last_update:{date:"8/7/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Introduction",permalink:"/Wio-WM1110_Dev_Kit/Introduction"},next:{title:"Hardware Overview",permalink:"/Wio-WM1110_Dev_Kit_Hardware_Overview"}},s={},p=[{value:"Preparation",id:"preparation",level:2},{value:"Device Connection",id:"device-connection",level:3},{value:"Set up your toolchain",id:"set-up-your-toolchain",level:3},{value:"SEGGER Embedded Studio (SES)",id:"segger-embedded-studio-ses",level:4},{value:"SEGGER J-Link Software and Documentation Pack",id:"segger-j-link-software-and-documentation-pack",level:4},{value:"nRF5 SDK",id:"nrf5-sdk",level:4},{value:"Seeed Example Package",id:"seeed-example-package",level:4},{value:"Running a First Test",id:"running-a-first-test",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Setup the Keys",id:"setup-the-keys",level:3},{value:"LoRa Cloud\u2122 Modem &amp; Geolocation Services",id:"lora-cloud-modem--geolocation-services",level:3},{value:"Step 1: Create an Owner",id:"step-1-create-an-owner",level:4},{value:"Step 2: Get a Token",id:"step-2-get-a-token",level:4},{value:"Step 3: API URL",id:"step-3-api-url",level:4},{value:"LoRaWAN\xae Network Server(TTN)",id:"lorawan-network-serverttn",level:3},{value:"Step 1: Create an application",id:"step-1-create-an-application",level:4},{value:"Step 2: Register the Device",id:"step-2-register-the-device",level:4},{value:"Step 3: Create Credentials",id:"step-3-create-credentials",level:4},{value:"Application Server",id:"application-server",level:3},{value:"Install Node.js\xae",id:"install-nodejs",level:4},{value:"Install Node-RED",id:"install-node-red",level:4},{value:"Install libraries",id:"install-libraries",level:4},{value:"Importing the Flow",id:"importing-the-flow",level:4},{value:"Configure the Flow",id:"configure-the-flow",level:4},{value:"Data View",id:"data-view",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wio-WM1110 Dev Kit x 1"),(0,o.kt)("li",{parentName:"ul"},"Computer x 1"),(0,o.kt)("li",{parentName:"ul"},"USB Type-C Cable x 1"),(0,o.kt)("li",{parentName:"ul"},"J-Link Debug Programmer x 1")),(0,o.kt)("h3",{id:"device-connection"},"Device Connection"),(0,o.kt)("p",null,"Connect the Wio-WM1110 Dev Board to the J-Link Debug Programmer as follows:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_connection.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("admonition",{title:"Connection:",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"3V3")," (Wio-WM1110 Dev Board) -> ",(0,o.kt)("strong",{parentName:"p"},"VTref")," (J-Link Debug Programmer Pin 1)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"CLK")," (Wio-WM1110 Dev Board) -> ",(0,o.kt)("strong",{parentName:"p"},"SWCLK")," (J-Link Debug Programmer Pin 9)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"DIO")," (Wio-WM1110 Dev Board) -> ",(0,o.kt)("strong",{parentName:"p"},"SWDIO")," (J-Link Debug Programmer Pin 7)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"GND")," (Wio-WM1110 Dev Board) -> ",(0,o.kt)("strong",{parentName:"p"},"GND")," (J-Link Debug Programmer GND)")),(0,o.kt)("h3",{id:"set-up-your-toolchain"},"Set up your toolchain"),(0,o.kt)("p",null,"Before you can start developing\uff0cthe following tools are required for this Getting Started Guide."),(0,o.kt)("h4",{id:"segger-embedded-studio-ses"},"SEGGER Embedded Studio (SES)"),(0,o.kt)("p",null,"SES is an all-in-one solution for managing, building, testing and deploying embedded applications. This means smooth, efficient development operations thanks to its wide range of features. The powerful project manager enables the management of projects large and small. Version control features enable automatic application deployment."),(0,o.kt)("a",{href:"https://www.segger.com/products/development-tools/embedded-studio/",target:"_blank"},(0,o.kt)("span",null,"SEGGER Embedded Studio (SES)-Download")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It's recommended to use 5.68 version.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"segger-j-link-software-and-documentation-pack"},"SEGGER J-Link Software and Documentation Pack"),(0,o.kt)("a",{href:"https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack",target:"_blank"},(0,o.kt)("span",null,"SEGGER J-Link Software and Documentation Pack-Download")),(0,o.kt)("h4",{id:"nrf5-sdk"},"nRF5 SDK"),(0,o.kt)("p",null,"The nRF5 SDK provides a rich developing environment for nRF5 Series devices by including a broad selection of drivers, libraries, examples for peripherals, SoftDevices, and proprietary radio protocols."),(0,o.kt)("p",null,"All code examples included in the SDK are tailored to compile for and run on Wio-WM1110 Dev Kit."),(0,o.kt)("a",{href:"https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs",target:"_blank"},(0,o.kt)("span",null,"nRF5 SDK-Download")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"seeed-example-package"},"Seeed Example Package"),(0,o.kt)("p",null,"Seeed provides an example project for developers to get started more quickly. This example includes LoRaWAN communication, positioning information acquisition, onboard sensor data acquisition, etc."),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board",target:"_blank"},(0,o.kt)("span",null,"Seeed Example-Download")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/list.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{id:"running-a-first-test"},"Running a First Test"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Add Seeed Example file to nRF5 SDK")),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board"},"Seeed Example file")," to the following path of nRF5 SDK:\n",(0,o.kt)("inlineCode",{parentName:"p"},".../nRF5_SDK_17.1.0_ddde560/examples/peripheral/")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/copyfile.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,'Let\'s build the ses_blinky" project to check if your toolchain is set up correctly.\nImport the "ses_blinky" project.'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/open-project.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Compiling the test application")),(0,o.kt)("p",null,'Select "Build" > "Compile project_target".'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/complie.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Programming the test application")),(0,o.kt)("p",null,"After compiling the application, you can program it to the Dev board."),(0,o.kt)("p",null,'Click "Target" -- "Connect J-Link"'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/connect-to-JLink.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,'Click "Build" -- "Build and Run" to build the blinky project.'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/run.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,'You will see "Download successful" when it has completed.'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/download-seccessful.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Then the 2 LEDs on the board will blink as follows."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/blink-test.gif"})),(0,o.kt)("h2",{id:"get-started"},"Get Started"),(0,o.kt)("p",null,"This chapter will walk you through displaying current location information on Node-Red via TTN, and explains how to set up all required servers(Network Server(NS) and an Application Server(AS))."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Architecture & Data Flow")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/flow.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h3",{id:"setup-the-keys"},"Setup the Keys"),(0,o.kt)("p",null,"Before a device can communicate via the NS, we need to register it with the 3 keys."),(0,o.kt)("p",null,"Wio-WM1110 DK allows users to set the DevEUI, AppEUI, and AppKey, this is required on the next steps, so you can define our own parameters in the 'lorawan_key_config.h' file, then flash it onto the DK."),(0,o.kt)("p",null,"File located at:\n",(0,o.kt)("inlineCode",{parentName:"p"},".../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board/apps/common/lorawan_key_config.h")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Or you can get the keys generated by TTN, then fill into the 'lorawan_key_config.h' file and run it on the DK."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h3",{id:"lora-cloud-modem--geolocation-services"},"LoRa Cloud\u2122 Modem & Geolocation Services"),(0,o.kt)("p",null,"The LoRa Cloud Modem & Geolocation Services provide a full set of lifecycle management features for LoRa\xae devices operating on a LoRaWAN network. These features include but are not limited to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Comprehensive device telemetry"),(0,o.kt)("li",{parentName:"ul"},"Device and application configuration"),(0,o.kt)("li",{parentName:"ul"},"Clock synchronization"),(0,o.kt)("li",{parentName:"ul"},"Advanced data transport services with robustness against packet loss and transparent data fragmentation (buffer streaming and file upload)."),(0,o.kt)("li",{parentName:"ul"},"Geolocation")),(0,o.kt)("p",null,"To begin, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.loracloud.com/?__hstc=212684107.3eb7c02aaa159a9e414cb1b589ca989c.1678419369281.1686727930327.1686794688289.35&__hssc=212684107.3.1686794688289&__hsfp=1476773244"},"LoRa Cloud\u2122 portal")," and register for an account."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/signup.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"step-1-create-an-owner"},"Step 1: Create an Owner"),(0,o.kt)("p",null,"To create a token, you first need to create an owner.\nNavigate to the DEVICE OWNERS page.\nClick CREATE NEW OWNER."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner2.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"step-2-get-a-token"},"Step 2: Get a Token"),(0,o.kt)("p",null,"A token is required for the application server to authenticate calls to the LoRa Cloud Modem & Geolocation Services server. "),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/tokens.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"step-3-api-url"},"Step 3: API URL"),(0,o.kt)("p",null,'The LoRa Cloud Modem & Geolocation Services URL depends on the region in which the device will be deployed.\nClick "Manage Tokens", then you can check the API URL:'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MGS.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When data is received from a device, it is automatically registered with the LoRa Cloud Modem & Geolocation Services server. This means that the device does not need to be registered beforehand.")),(0,o.kt)("h3",{id:"lorawan-network-serverttn"},"LoRaWAN\xae Network Server(TTN)"),(0,o.kt)("p",null,"Currently we use ",(0,o.kt)("a",{parentName:"p",href:"https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3"},"The Things Network V3")),(0,o.kt)("p",null,"To begin, register for an account with The Things Industries or The Things Network."),(0,o.kt)("h4",{id:"step-1-create-an-application"},"Step 1: Create an application"),(0,o.kt)("p",null,'Navigate to Applications page, click "+Create application".'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Enter an Application ID, click Create Application to save your changes."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"step-2-register-the-device"},"Step 2: Register the Device"),(0,o.kt)("p",null,'Click "Register end device".'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Set the following parameters:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Frequency Plan"),": Select the appropriate Frequency plan for the target region"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LoRaWAN version"),":LoRaWAN Specification 1.0.3"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Regional Parameters version"),": V1.0.3 REV A"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"JoinEUI/DevEUI/APPEUI: Which you defined in the 'lorawan_key_config.h' file in the previous setting.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"step-3-create-credentials"},"Step 3: Create Credentials"),(0,o.kt)("p",null,"The Things Network V3 network server requires that you generate a unique MQTT password. On the Application page of the console:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click Integrations and then MQTT.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT1.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select Generate new API Key.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/API_key.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the values from the following fields: Server Address, Username, and Password.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h3",{id:"application-server"},"Application Server"),(0,o.kt)("p",null,"The application server handles application data and device management frames. As there is no background connection between the LoRaWAN\xae network server and the LoRa Cloud\u2122 Modem & Geolocation Services, all uplinks related to modem traffic must be forwarded by the application server to the Lora Cloud Modem & Geolocation Services."),(0,o.kt)("p",null,"We use Node-RED as the application server. Node-RED is a browser-based visual programming tool that allows for fast prototyping. Built on Node.js, Node-RED can be used to wire flows together using a wide array of nodes. These nodes can then be deployed to the Node-RED runtime with a single click."),(0,o.kt)("h4",{id:"install-nodejs"},"Install Node.js\xae"),(0,o.kt)("p",null,"To install Node-RED locally you will need a ",(0,o.kt)("a",{href:"https://nodered.org/docs/faq/node-versions",target:"_blank"},(0,o.kt)("span",null," Supported Node Version "))),(0,o.kt)("p",null,"Download the latest 16.x LTS version of Node.js from the official ",(0,o.kt)("a",{href:"https://nodejs.org/en/",target:"_blank"},(0,o.kt)("span",null,"Node.js")),"\nIt will offer you the best version for your system."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodejs_version.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"When installing Node.js, if you are using a computer that has not had any programming environment installed, we would recommend that you check the box to install the necessary tools while installing Node.js, which will save you a lot of necessary trouble."),(0,o.kt)("p",null,"The easiest way to install Node-RED is, using Node's package management tool, npm. However, we do not recommend installing Node-RED with npm 1.x, but rather upgrading it to the latest npm 2.x version."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"On Windows (Requires Windows 10 and above), use the Win+R shortcut and type cmd in the pop-up window to bring up the terminal and execute the following command.")),(0,o.kt)("p",null,"If you are using MacOS or Linux, please execute the following command in the terminal and add sudo in front of the command for non-root users."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"npm install -g npm@2.x\n")),(0,o.kt)("p",null,"Once installed, open a command prompt and run the following command to ensure Node.js and npm are installed correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"node --version && npm --version\n")),(0,o.kt)("p",null,"You should receive back output that looks similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"> v18.7.0\n> 9.6.5\n")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/npm_version.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h4",{id:"install-node-red"},"Install Node-RED"),(0,o.kt)("p",null,"Installing Node-RED as a global module adds the command node-red to your system path. Execute the following at the command prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"npm install -g --unsafe-perm node-red\n")),(0,o.kt)("p",null,"If Node-RED is installed as a global npm package, then execute the command node-red directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"node-red\n")),(0,o.kt)("p",null,"This will allow you to see the Node-RED editor on http://localhost:1880."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/node-red.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"The user interface has three key areas:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodered1.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Palette"),": This is where you can select nodes; these are functional blocks that can be dragged-and-dropped, and then can be linked together to create a flow."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flow"),": This is the source code of the program. In this pane, you can link nodes together to create an application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sidebar"),": The Sidebar displays any Help or debugging information available for the selected node.")),(0,o.kt)("h4",{id:"install-libraries"},"Install libraries"),(0,o.kt)("p",null,"To set up the demonstration, we will install 2 additional libraries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@semtech-wsp-apps/node-red-contrib-loracloud-utils"},"node-red-contrib-loracloud-utils"),": Handles connections to LoRa Cloud\u2122 servers")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/node-red-contrib-web-worldmap"},"node-red-contrib-web-worldmap"),': World map web page for plotting "things" on')),(0,o.kt)("p",null,'Click the menu in the top right corner and select "Manage palette".'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Select Install on the Palette menu."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_pak.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,'Search for "node-red-contrib-loracloud-utils" and install.'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_loracloud.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,'Repeat these steps to install the "node-red-contrib-web-worldmap" libraries.'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_worldmap.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"importing-the-flow"},"Importing the Flow"),(0,o.kt)("p",null,"The Seeed package includes useful samples to walk you through this example project,just need to import these 2 config file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/modem.json\n\n.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/geolocation.json\n")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow1.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow2.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Then you will see the following flows:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow3.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"configure-the-flow"},"Configure the Flow"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configuring the LoRaWAN Network Server (MQTT)"),"\nAll network server connectors are activated by default; however, the MQTT connection must be set up separately.\nBefore you begin, get the required data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MQTT server address"),(0,o.kt)("li",{parentName:"ul"},"MQTT port"),(0,o.kt)("li",{parentName:"ul"},"MQTT username"),(0,o.kt)("li",{parentName:"ul"},"MQTT password")),(0,o.kt)("p",null,"This data can be obtained in ",(0,o.kt)("strong",{parentName:"p"},"Step 3: Create Credentials")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,'Doule click"TTN v3-Uplinks" node,and edit MQTT node.'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt1.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"You can find the Server, Port in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-WM1110_Dev_Kit_Server_Configuration/#step-3-create-credentials:~:text=Copy%20the%20values%20from%20the%20following%20fields%3A%20Server%20Address%2C%20Username%2C%20and%20Password."},"previous step"),"."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_TLS.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,'Then add the username and password to "Security".'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_se.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Click Add and then click Done."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/add_and_done.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,'Doule click"TTN joinReq" node,and select the MQTT server we added in the previous step.'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/select_server.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Modem & Geolocation Service Configuration")),(0,o.kt)("p",null,"To configure the server, the MGS URL and MGS TOKEN values from the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-WM1110_Dev_Kit_Server_Configuration/#step-2-get-a-token"},"previous step")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_token.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_url.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Fill in the EUI of your device."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_eui.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,'Click "Deploy" button to delpoy the flow.'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/deploy.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"data-view"},"Data View"),(0,o.kt)("p",null,'Click "Debug", to view the data returned by the LoRa Cloud Modem & Geolocation Services:'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/debug_page.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Geolocation")),(0,o.kt)("p",null,"To display the map, add ",(0,o.kt)("inlineCode",{parentName:"p"},"/worldmap")," to the URL in your web browser.\nFor example: ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:1880/worldmap"},"http://127.0.0.1:1880/worldmap")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/map_page.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board"},"Seeed_Wio_WM1110_Dev_Board")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs"},"nRF5-SDK")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack"},"SEGGER J-Link Software and Documentation Pack")),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Need help with your Wio-WM1110 Dev Kit? We're here to assist you!")),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/sensecap",class:"button_tech_support_sensecap"}),(0,o.kt)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions",class:"button_discussion"})))}u.isMDXComponent=!0}}]);