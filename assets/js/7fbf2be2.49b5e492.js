"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90839],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(i),h=o,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return i?n.createElement(m,a(a({ref:t},d),{},{components:i})):n.createElement(m,a({ref:t},d))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},72731:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=i(87462),o=(i(67294),i(3905));const r={description:"MicroPython for XIAO ESP32S3 Sense",title:"MicroPython for XIAO ESP32S3 Sense",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/XIAO_ESP32S3_Micropython",last_update:{date:"08/30/2023",author:"Hendra"}},a="Micropython for XIAO ESP32S3 Sense(Camera, Wi-Fi)",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_Micropython",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_Micropython",title:"MicroPython for XIAO ESP32S3 Sense",description:"MicroPython for XIAO ESP32S3 Sense",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_Micropython.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3",slug:"/XIAO_ESP32S3_Micropython",permalink:"/XIAO_ESP32S3_Micropython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_Micropython.md",tags:[],version:"current",lastUpdatedBy:"Hendra",lastUpdatedAt:1693353600,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{description:"MicroPython for XIAO ESP32S3 Sense",title:"MicroPython for XIAO ESP32S3 Sense",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/XIAO_ESP32S3_Micropython",last_update:{date:"08/30/2023",author:"Hendra"}},sidebar:"ProductSidebar",previous:{title:"CircuitPython for ESP32S3",permalink:"/XIAO_ESP32S3_CircuitPython"},next:{title:"WiFi for both versions",permalink:"/xiao_esp32s3_wifi_usage"}},l={},p=[{value:"Hardware Preparation",id:"hardware-preparation",level:2},{value:"Software Preparation",id:"software-preparation",level:2},{value:"\ud83d\udc4d Greatly Thanks",id:"-greatly-thanks",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1. Flashing the firmware",id:"step-1-flashing-the-firmware",level:3},{value:"Step 2. Upload the example code",id:"step-2-upload-the-example-code",level:3},{value:"Step 3. Testing the streaming example",id:"step-3-testing-the-streaming-example",level:3},{value:"What&#39;s More",id:"whats-more",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"micropython-for-xiao-esp32s3-sensecamera-wi-fi"},"Micropython for XIAO ESP32S3 Sense(Camera, Wi-Fi)"),(0,o.kt)("p",null,"MicroPython is a lean and efficient implementation of the Python 3 programming language that includes a small subset of the Python standard library and is optimised to run on microcontrollers and in constrained environments."),(0,o.kt)("p",null,"Since its first initiation in 2014, micropython has already supported many microcontrollers including the ESP32S3 which is the main brain in the Xiao ESP32S3 Sense development board."),(0,o.kt)("p",null,"In this page I will guide on how to use the the Xiao ESP32S3 Sense capability using the simple and easy syntax from micropython"),(0,o.kt)("h2",{id:"hardware-preparation"},"Hardware Preparation"),(0,o.kt)("p",null,"I am using Seeed Studio XIAO ESPS3 Sense board here."),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"Seeed Studio XIAO ESP32S3")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg",style:{width:250,height:"auto"}})))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.kt)("h2",{id:"software-preparation"},"Software Preparation"),(0,o.kt)("p",null,"In this guide I will be using ",(0,o.kt)("strong",{parentName:"p"},"windows 10")," alongside with Thonny IDE and esptool. In order to use esptool make sure to install Python 3 environment on your windows OS. Before getting started make sure to download the firmware and Install Thonny"),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"Thonny IDE"),(0,o.kt)("th",null,"Firmware and Sample Code")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://thonny.org/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Download \u23ec")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/XIAO_ESP32S3_Micropython.zip"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Download \u23ec"))))))))),(0,o.kt)("h3",{id:"-greatly-thanks"},"\ud83d\udc4d Greatly Thanks"),(0,o.kt)("strong",null,(0,o.kt)("font",{color:"8DC215",size:"3"},"The firmware designed for XIAO ESP32S3 Sense board, using in this wiki is made by our friend: shariltumin, whom we are really greatful for.")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"The firmware is designed only for XIAO ESP32S3 MicroPython programming. We will first flash the firmware and then use the example on it."),(0,o.kt)("h3",{id:"step-1-flashing-the-firmware"},"Step 1. Flashing the firmware"),(0,o.kt)("p",null,"Locate the usb to serial port address by opening the device manager"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Extract the downloaded zip file and navigate to the folder."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/firmware%20folder.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,'click On the path box then type "CMD" and press enter'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/cmd_on_folder.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"You will be directed to cmd terminal."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/on_cmd.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Install esptool using pip command (make sure python 3 is already installed)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"pip install esptool\n")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Erase the flash memory on the Xiao ESP32S3 using this command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"esptool.py --port COMXX erase_flash\n")),(0,o.kt)("p",null,"Now proceed to install the micropython firmware using this command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32s3  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 firmware.bin \n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"change the COMXX with port COM number on your PC")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h3",{id:"step-2-upload-the-example-code"},"Step 2. Upload the example code"),(0,o.kt)("p",null,"Now we will upload the example code to Xiao ESP32S3 sense internal flash memory."),(0,o.kt)("p",null,"For this part I am using thonny IDE first I configure the port"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/configure_port_thonny.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"then on the view menu check mark the file option"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/check_the_files.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Navigate to the folder where the example code is extracted then upload the files by right clicking on the file and choose the option like the picture below"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/upload_the_file.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"after all the example code uploaded to xiao esp32s3 board, change the wifi credential on both the streamin_server.py file and the Wifi.py file based on your local wifi configuration"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/wifi_configuration.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h3",{id:"step-3-testing-the-streaming-example"},"Step 3. Testing the streaming example"),(0,o.kt)("p",null,"Before testing the streaming make sure to install the opencv python library using pip"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"pip install opencv-python\n")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/install_opencv.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"after the opencv python library installed successfully I go back to thonny and run the streamin_server.py and copy the IP address of the xiao ESP32S3 board"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_script.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"then go back to the extracted zip folder and open the steamin_client.py using python's IDLE and change the IP address part to be the same with the xiao ESP32S3 board"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/change_ip.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Then try to run the file and you should see a new windows displaying the streaming image from the Xiao ESP32S3 sense board"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_client.jpeg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When launching the streaming example, the Xiao ESP32S3 Sense Board could get quite hot.")),(0,o.kt)("h2",{id:"whats-more"},"What's More"),(0,o.kt)("p",null,"By using this examples you can make a fast and simple CCTV project and since the Xiao ESP32S3 sense is small in size the project could be seamless"),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If the camera is not initialized successfully(display a frame then freeze) or can't reconnect to the wifi try to unplugged the board and relaunch Thonny IDE."),(0,o.kt)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This project is supported by the Seeed Studio ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"Contributor Project"),"."),(0,o.kt)("li",{parentName:"ul"},"Thanks ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35979545"},"Hendra and shariltumin efforts")," and your work will be ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"exhibited"),".")),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);