"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[51683],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(i),c=o,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||a;return i?n.createElement(h,r(r({ref:t},d),{},{components:i})):n.createElement(h,r({ref:t},d))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},66836:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=i(87462),o=(i(67294),i(3905));const a={description:"One Stop Model Training with Edge Impulse",title:"One Stop Model Training with Edge Impulse",keywords:["Sensor Vision_AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/One-Stop-Model-Training-with-Edge-Impulse",last_update:{date:"3/31/2023",author:"Yvonne"}},r=void 0,s={unversionedId:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/One-Stop-Model-Training-with-Edge-Impulse",id:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/One-Stop-Model-Training-with-Edge-Impulse",title:"One Stop Model Training with Edge Impulse",description:"One Stop Model Training with Edge Impulse",source:"@site/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/One-Stop-Model-Training-with-Edge-Impulse.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101",slug:"/One-Stop-Model-Training-with-Edge-Impulse",permalink:"/One-Stop-Model-Training-with-Edge-Impulse",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/One-Stop-Model-Training-with-Edge-Impulse.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1680220800,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{description:"One Stop Model Training with Edge Impulse",title:"One Stop Model Training with Edge Impulse",keywords:["Sensor Vision_AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/One-Stop-Model-Training-with-Edge-Impulse",last_update:{date:"3/31/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"Train and Deploy Your Own AI Model Into SenseCAP A1101",permalink:"/Train-Deploy-AI-Model-A1101"},next:{title:"Train Water Meter Digits Recognition Model with SenseCAP A1101",permalink:"/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Hardware preparation",id:"hardware-preparation",level:2},{value:"Software praparation",id:"software-praparation",level:2},{value:"Connecting to Edge Impulse",id:"connecting-to-edge-impulse",level:2},{value:"Step 1. Update BL702 chip firmware",id:"step-1-update-bl702-chip-firmware",level:3},{value:"Step 2. Update Edge Impulse firmware",id:"step-2-update-edge-impulse-firmware",level:3},{value:"Step 3. Setting keys",id:"step-3-setting-keys",level:3},{value:"Step 4. Verifying that the device is connected",id:"step-4-verifying-that-the-device-is-connected",level:3},{value:"Collecting data from A1101 - Vision AI",id:"collecting-data-from-a1101---vision-ai",level:2},{value:"Deploy model to A1101 - Vision AI",id:"deploy-model-to-a1101---vision-ai",level:2},{value:"Configure your model on the SenseCap Mate",id:"configure-your-model-on-the-sensecap-mate",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In this wiki, we will teach you how to train your own AI model for your specific application with  ",(0,o.kt)("strong",{parentName:"p"},"Edge Imoulse")," and then deploy it easily to the SenseCAP A1101 - LoRaWAN Vision AI Sensor. Let's get started!"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"What is Edge Impulse?"),"Edge Impulse is the edge AI platform for enterprise teams building optimized models on any edge device. Deliver value faster and achieve product innovation with advanced AI sensor features.")),(0,o.kt)("h2",{id:"hardware-preparation"},"Hardware preparation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html"},"Seeed SenseCAP A1101")," - ",(0,o.kt)("strong",{parentName:"p"},"LoRaWAN Vision AI Sensor")," is an image recognition AI sensor designed for developers. SenseCAP A1101 - LoRaWAN Vision AI Sensor combines TinyML AI technology and LoRaWAN long-range transmission to enable a low-power, high-performance AI device solution for both indoor and outdoor use.",(0,o.kt)("br",null),"This sensor features Himax's high-performance, low-power AI vision solution which supports the Google TensorFlow Lite framework and multiple TinyML AI platforms.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"It is fully supported by Edge Impulse which means you will be able to sample raw data from the camera, build models, and deploy trained machine learning models to the module directly from the studio without any programming required. SenseCAP - Vision AI Module is available for purchase directly from ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html"},"Seeed Studio Bazaar"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SenseCAP A1101 - LoRaWAN Vision AI Sensor"),(0,o.kt)("li",{parentName:"ul"},"USB Type-C cable"),(0,o.kt)("li",{parentName:"ul"},"Windows/ Linux/ Mac with internet access")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p1.jpg"})),(0,o.kt)("h2",{id:"software-praparation"},"Software praparation"),(0,o.kt)("p",null,"To set this A1101 up in Edge Impulse, you will need to install the following software:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation"},"Edge Impulse CLI"),"."),(0,o.kt)("li",{parentName:"ol"},"On Linux:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"GNU Screen: install for example via ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt install screen"),"."))),(0,o.kt)("li",{parentName:"ol"},"Download the latest ",(0,o.kt)("a",{parentName:"li",href:"https://dev.bouffalolab.com/download"},"Bouffalo Lab Dev Cube"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Problems installing the Edge Impulse CLI?"),"\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation"},"Installation and troubleshooting guide"),".")),(0,o.kt)("h2",{id:"connecting-to-edge-impulse"},"Connecting to Edge Impulse"),(0,o.kt)("p",null,"With all the software in place it's time to connect the A1101 to Edge Impulse."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Note:")),(0,o.kt)("p",{parentName:"admonition"},"If you purchased the device after ",(0,o.kt)("strong",{parentName:"p"},"March 30, 2023"),", then you don't need to update the firmware of EI, please jump directly to ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/One-Stop-Model-Training-with-Edge-Impulse/#step-3-setting-keys"},"STEP3")," Setting keys. Please note that updating the firmware of EI will overwrite the default model.")),(0,o.kt)("h3",{id:"step-1-update-bl702-chip-firmware"},"Step 1. Update BL702 chip firmware"),(0,o.kt)("p",null,"BL702 is the USB-UART chip which enables the communication between the PC and the Himax chip. You need to update this firmware in order for the Edge Impulse firmware to work properly."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the latest bootloader firmware from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases"},"here"),": ",(0,o.kt)("strong",{parentName:"p"},"tinyuf2-sensecap_vision_ai_xxx.bin"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the A1101 to the PC via a USB Type-C cable while holding down the ",(0,o.kt)("strong",{parentName:"p"},"Boot")," button on the A1101."))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p2.png"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p3.png"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Open previously installed Bouffalo Lab Dev Cube software, select ",(0,o.kt)("strong",{parentName:"li"},"BL702/704/706"),", and then click ",(0,o.kt)("strong",{parentName:"li"},"Finish"),".")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p4.png"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"MCU")," tab. Under ",(0,o.kt)("strong",{parentName:"li"},"Image file"),", click ",(0,o.kt)("strong",{parentName:"li"},"Browse")," and select the firmware you just downloaded.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p5.png"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Refresh"),", choose the ",(0,o.kt)("strong",{parentName:"li"},"Port")," related to the connected A1101, set ",(0,o.kt)("strong",{parentName:"li"},"Chip Erase")," to ",(0,o.kt)("strong",{parentName:"li"},"True"),", click ",(0,o.kt)("strong",{parentName:"li"},"Open UART"),", click ",(0,o.kt)("strong",{parentName:"li"},"Creat & Download")," and wait for the process to be completed .")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p6.png"})),(0,o.kt)("p",null,"You will see the output as ",(0,o.kt)("strong",{parentName:"p"},"All Success")," if it went well."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p7.png"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the flashing throws an error, try to click ",(0,o.kt)("strong",{parentName:"p"},"Create & Download")," multiple times until you see the ",(0,o.kt)("strong",{parentName:"p"},"All Success")," message.")),(0,o.kt)("h3",{id:"step-2-update-edge-impulse-firmware"},"Step 2. Update Edge Impulse firmware"),(0,o.kt)("p",null,"The A1101 does not come with the right Edge Impulse firmware yet. To update the firmware:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/ei_sensecap_vision_ai.uf2.zip"},"Download the latest Edge Impulse firmware")," and extract it to obtain ",(0,o.kt)("strong",{parentName:"p"},"firmware.uf2")," file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the A1101 again to the PC via USB Type-C cable and double-click the ",(0,o.kt)("strong",{parentName:"p"},"Boot")," button on the A1101 to enter ",(0,o.kt)("strong",{parentName:"p"},"mass storage mode"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After this you will see a new storage drive shown on your file explorer as ",(0,o.kt)("strong",{parentName:"p"},"SENSECAP"),". Drag and drop the ",(0,o.kt)("strong",{parentName:"p"},"firmware.uf2")," file to SENSECAP drive."))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"})),(0,o.kt)("p",null,"Once the copying is finished ",(0,o.kt)("strong",{parentName:"p"},"SENSECAP")," drive will disapper. This is how we can check whether the copying is successful or not."),(0,o.kt)("h3",{id:"step-3-setting-keys"},"Step 3. Setting keys"),(0,o.kt)("p",null,"From a command prompt or terminal, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"edge-impulse-daemon\n")),(0,o.kt)("p",null,"This will start a wizard which will ask you to log in, and choose an Edge Impulse project. If you want to switch projects run the command with ",(0,o.kt)("inlineCode",{parentName:"p"},"--clean"),"."),(0,o.kt)("p",null,"Alternatively, recent versions of Google Chrome and Microsoft Edge can collect data directly from your A1101, without the need for the Edge Impulse CLI. See ",(0,o.kt)("a",{parentName:"p",href:"https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser"},"this blog post")," for more information."),(0,o.kt)("h3",{id:"step-4-verifying-that-the-device-is-connected"},"Step 4. Verifying that the device is connected"),(0,o.kt)("p",null,"That's all! Your device is now connected to Edge Impulse. To verify this, go to ",(0,o.kt)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/studio/select-project?autoredirect=1"},"your Edge Impulse project"),", and click ",(0,o.kt)("strong",{parentName:"p"},"Devices"),". The device will be listed here."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p9.png"})),(0,o.kt)("h2",{id:"collecting-data-from-a1101---vision-ai"},"Collecting data from A1101 - Vision AI"),(0,o.kt)("p",null,"With everything set up you can now build and run your first machine learning model with these tutorials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/tutorials/object-detection"},"Object detection"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo"},"Counting objects using FOMO"),".")),(0,o.kt)("p",null,"Frames from the onboard camera can be directly captured from the studio:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p16.png"})),(0,o.kt)("p",null,"Finally, once a model is trained, it can be easily deployed to the A1101 \u2013 Vision AI Module to start inferencing!"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p17.png"})),(0,o.kt)("h2",{id:"deploy-model-to-a1101---vision-ai"},"Deploy model to A1101 - Vision AI"),(0,o.kt)("p",null,"After building the machine learning model and downloading the Edge Impulse firmware from Edge Impulse Studio, deploy the model uf2 to SenseCAP - Vision AI by following ",(0,o.kt)("strong",{parentName:"p"},"steps 1 and 2")," under ",(0,o.kt)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-sensecap-a1101#2.-update-edge-impulse-firmware"},"Update Edge Impulse firmware section"),".\nDrag and drop the ",(0,o.kt)("strong",{parentName:"p"},"firmware.uf2")," file from EDGE IMPULSE to ",(0,o.kt)("strong",{parentName:"p"},"SENSECAP")," drive."),(0,o.kt)("p",null,"When you run this on your local interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"edge-impulse-daemon --debug\n")),(0,o.kt)("p",null,"It will ask you to click a URL, then you will see a live preview of the camera on your device."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/p33.png"})),(0,o.kt)("h2",{id:"configure-your-model-on-the-sensecap-mate"},"Configure your model on the SenseCap Mate"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP/#docusaurus_skipToContent_fallback"},"SenseCAP Mate")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US"},"Android")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apps.apple.com/gb/app/sensecap-mate/id1619944834"},"iOS")))),(0,o.kt)("li",{parentName:"ul"},"Open SenseCAP Mate and login")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p10.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Config")," screen, select ",(0,o.kt)("strong",{parentName:"li"},"Vision AI Sensor"))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p11.jpg"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Press and hold the configuration button on the SenseCap A1101 for 3 seconds to enter bluetooth pairing mode",(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p12.jpg"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p13.jpg"})))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Setup")," and it will start scanning for nearby SenseCAP A1101 devices- Go to ",(0,o.kt)("strong",{parentName:"p"},"Settings")," and make sure ",(0,o.kt)("strong",{parentName:"p"},"Object Detection")," and ",(0,o.kt)("strong",{parentName:"p"},"User Defined 1")," is selected. If not, select it and click ",(0,o.kt)("strong",{parentName:"p"},"Send")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p14.jpg"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"General")," and click ",(0,o.kt)("strong",{parentName:"p"},"Detect")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p15.jpg"})))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/grove_ai_vision/index.html"},"Click here")," to open a preview window of the camera stream")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/p31.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connect")," button. Then you will see a pop up on the browser. Select ",(0,o.kt)("strong",{parentName:"li"},"SenseCAP Vision AI - Paired")," and click ",(0,o.kt)("strong",{parentName:"li"},"Connect"))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/p32.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"View real-time inference results using the preview window!")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.png"})),(0,o.kt)("p",null,'For example, as you can see above, the cat are being detected with bounding boxes around them. Here "0" corresponds to each detection of the same class. If you have multiple classes, they will be named as 0,1,2,3,4 and so on. Also the confidence score for each detected apple (0.72 in above demo) is being displayed!'),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);