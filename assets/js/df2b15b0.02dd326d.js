"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[93029],{15680:(e,t,i)=>{i.d(t,{xA:()=>h,yg:()=>u});var n=i(96540);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),g=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},h=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=g(i),p=o,u=d["".concat(l,".").concat(p)]||d[p]||c[p]||s;return i?n.createElement(u,a(a({ref:t},h),{},{components:i})):n.createElement(u,a({ref:t},h))}));function u(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=i.length,a=new Array(s);a[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,a[1]=r;for(var g=2;g<s;g++)a[g]=i[g];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},72087:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>g});var n=i(58168),o=(i(96540),i(15680));const s={description:"Introducing how to plug Grove Vision AI V2 into Home Assistant.",title:"Connecting to Home Assistant",keywords:["vision AI","home assistant"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/connect_vision_ai_v2_to_ha",last_update:{date:"01/10/2024",author:"Citric"}},a="Connect Grove Vision AI V2 to Home Assistant",r={unversionedId:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove-vision-ai-v2-ha",id:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove-vision-ai-v2-ha",title:"Connecting to Home Assistant",description:"Introducing how to plug Grove Vision AI V2 into Home Assistant.",source:"@site/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove-vision-ai-v2-ha.md",sourceDirName:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application",slug:"/connect_vision_ai_v2_to_ha",permalink:"/connect_vision_ai_v2_to_ha",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove-vision-ai-v2-ha.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1704844800,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{description:"Introducing how to plug Grove Vision AI V2 into Home Assistant.",title:"Connecting to Home Assistant",keywords:["vision AI","home assistant"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/connect_vision_ai_v2_to_ha",last_update:{date:"01/10/2024",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"Connect Grove Vision AI V2 to the SenseCAP Mate APP",permalink:"/connect_vision_ai_v2_to_sensecap_mate"},next:{title:"Examples for Grove Vision AI V2 and XIAO ESP32",permalink:"/grove_vision_ai_v2_demo"}},l={},g=[{value:"Getting Started",id:"getting-started",level:2},{value:"Materials Required",id:"materials-required",level:3},{value:"Installing the HACS plugin",id:"installing-the-hacs-plugin",level:2},{value:"Step 1. Open Advanced Mode in Home Assistant",id:"step-1-open-advanced-mode-in-home-assistant",level:3},{value:"Step 2. Install Terminal &amp; SSH",id:"step-2-install-terminal--ssh",level:3},{value:"Step 3. Install HACS",id:"step-3-install-hacs",level:3},{value:"Installing the SenseCraft plugin",id:"installing-the-sensecraft-plugin",level:2},{value:"Step 4. Installation of the SenseCraft plugin via HACS",id:"step-4-installation-of-the-sensecraft-plugin-via-hacs",level:3},{value:"Preparing the model for Grove Vision AI V2",id:"preparing-the-model-for-grove-vision-ai-v2",level:2},{value:"Step 5. Flash Firmware for XIAO ESP32C3",id:"step-5-flash-firmware-for-xiao-esp32c3",level:3},{value:"Step 6. Connect the Grove Vision AI V2 to the SenseCraft AI Model Assistant",id:"step-6-connect-the-grove-vision-ai-v2-to-the-sensecraft-ai-model-assistant",level:3},{value:"Step 7. Upload a suitable model",id:"step-7-upload-a-suitable-model",level:3},{value:"Step 8. Observations",id:"step-8-observations",level:3},{value:"Building MQTT Services at Home Assistant",id:"building-mqtt-services-at-home-assistant",level:2},{value:"Step 9. Install EMQX",id:"step-9-install-emqx",level:3},{value:"Integrate Grove Vision AI V2 into Home Assistant",id:"integrate-grove-vision-ai-v2-into-home-assistant",level:2},{value:"Step 10. Configuring the network for Grove Vision AI V2 &amp; XIAO",id:"step-10-configuring-the-network-for-grove-vision-ai-v2--xiao",level:3},{value:"Step 11. Integration into Home Assistant",id:"step-11-integration-into-home-assistant",level:3},{value:"Method 1: If the device has been found",id:"method-1-if-the-device-has-been-found",level:4},{value:"Method 2: If the device is not found",id:"method-2-if-the-device-is-not-found",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Q1: What should I do if I never see the data messages in HA again after the Grove Vision AI V2 drops?",id:"q1-what-should-i-do-if-i-never-see-the-data-messages-in-ha-again-after-the-grove-vision-ai-v2-drops",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],h={toc:g},d="wrapper";function c(e){let{components:t,...i}=e;return(0,o.yg)(d,(0,n.A)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"connect-grove-vision-ai-v2-to-home-assistant"},"Connect Grove Vision AI V2 to Home Assistant"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Integrating Grove Vision AI V2 into Home Assistant can elevate your smart home setup by adding advanced visual sensing capabilities. This integration allows for real-time environmental analysis and customized automation, making your home environment more intelligent and responsive."),(0,o.yg)("p",null,"To facilitate this integration, the SenseCraft-HomeAssistant plugin, accessible via the HACS store, connects your Grove Vision AI V2 to Home Assistant through the SenseCraft Data Platform. This process is streamlined and user-friendly, requiring just a SenseCraft account login to bring your device and sensor data into the Home Assistant ecosystem, ready for you to customize and control."),(0,o.yg)("p",null,"Below is the main content framework of this article."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"#installing-the-hacs-plugin"},"Installing the HACS plugin"),": Install the Home Assistant Community Store (HACS) to enable the installation of Seeed Studio's SenseCraft plugin within Home Assistant."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"#installing-the-sensecraft-plugin"},"Installing the SenseCraft plugin"),": Install the SenseCraft plugin by Seeed Studio, which allows for the swift deployment of Seeed Studio's products into Home Assistant."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"#preparing-the-model-for-grove-vision-ai-v2"},"Preparing the model for Grove Vision AI V2"),": Select and deploy the model you wish to use for the Grove Vision AI V2, and thereafter, Home Assistant will receive the information of the recognition scene and results from Vision AI."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"#building-mqtt-services-at-home-assistant"},"Building MQTT Services at Home Assistant"),": Leverage a local MQTT service to transmit data from the Grove Vision AI V2 and XIAO to Home Assistant."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"#integrate-grove-vision-ai-v2-into-home-assistant"},"Integrate Grove Vision AI V2 into Home Assistant"),": Integrate Grove Vision AI V2 into Home Assistant and set up a visual dashboard for configuration.")),(0,o.yg)("h2",{id:"getting-started"},"Getting Started"),(0,o.yg)("p",null,"Before the tutorial content of this article begins, you may need to have the following hardware ready."),(0,o.yg)("h3",{id:"materials-required"},"Materials Required"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"Grove Vision AI V2"),(0,o.yg)("th",null,"XIAO ESP32C3"),(0,o.yg)("th",null,"Home Assistant Green")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg",style:{width:250,height:"auto"}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png",style:{width:120,height:"auto"}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png",style:{width:210,height:"auto"}})))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("p",null,"Home Assistant Green is the easiest and most privacy-focused way to automate your home. It offers an effortless setup and allows you to control all the smart devices with just one system, where all the data is stored locally by default. This board benefits from the thriving Home Assistant ecosystem and it will be improved every month by open source."),(0,o.yg)("p",null,"We recommend using Home Assistant Green as the Home Assistant host for this tutorial, or you can use any Home Assistant host with a Supervisor."),(0,o.yg)("p",null,"You then need to connect the XIAO and Grove Vision AI V2 via the row of pins (or use the expansion board and Grove interface)."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif",style:{width:600,height:"auto"}})),(0,o.yg)("h2",{id:"installing-the-hacs-plugin"},"Installing the HACS plugin"),(0,o.yg)("h3",{id:"step-1-open-advanced-mode-in-home-assistant"},"Step 1. Open Advanced Mode in Home Assistant"),(0,o.yg)("p",null,'To unlock the full potential of Home Assistant and gain access to advanced features, you can enable "Advanced Mode" in the user interface.'),(0,o.yg)("p",null,"Navigate to your ",(0,o.yg)("a",{parentName:"p",href:"http://homeassistant.local:8123"},"Home Assistant web interface"),". Click on your profile icon at the bottom left corner of the Home Assistant sidebar. On your profile page, scroll down to find the ",(0,o.yg)("strong",{parentName:"p"},"Advanced Mode")," toggle. Switch the toggle to the on position."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h3",{id:"step-2-install-terminal--ssh"},"Step 2. Install Terminal & SSH"),(0,o.yg)("p",null,"Click on ",(0,o.yg)("strong",{parentName:"p"},"Settings")," in the sidebar to access the settings menu. Click on ",(0,o.yg)("strong",{parentName:"p"},"Add-ons")," to access the add-on store."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Use the search bar or browse through the available add-ons to find ",(0,o.yg)("strong",{parentName:"p"},"Terminal & SSH"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Once you've located ",(0,o.yg)("strong",{parentName:"p"},"Terminal & SSH"),", click on it to view the details. On the add-on's page, you'll see an overview, documentation, and configuration options. To install the add-on, click the ",(0,o.yg)("strong",{parentName:"p"},"Install")," button."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h3",{id:"step-3-install-hacs"},"Step 3. Install HACS"),(0,o.yg)("p",null,"Find the recently downloaded ",(0,o.yg)("strong",{parentName:"p"},"Terminal & SSH")," in the sidebar. In the terminal, navigate to the config directory, which is the root of your Home Assistant configuration:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"cd /config\n")),(0,o.yg)("p",null,"Execute the following command to download and run the HACS installation script:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"wget -q -O - https://install.hacs.xyz | bash -\n")),(0,o.yg)("p",null,"After the installation script has finished, you need to restart Home Assistant to apply the changes. You can restart Home Assistant through the UI by going to ",(0,o.yg)("strong",{parentName:"p"},"Settings > System > Restart"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"After the reboot, click on ",(0,o.yg)("strong",{parentName:"p"},"Settings")," in the sidebar to open the settings menu. Within the settings menu, navigate to ",(0,o.yg)("strong",{parentName:"p"},"Devices & Services"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Click on ",(0,o.yg)("strong",{parentName:"p"},"ADD INTEGRATION")," to add a new integration to your Home Assistant setup."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"In the search bar, type ",(0,o.yg)("strong",{parentName:"p"},"HACS")," to look for the Home Assistant Community Store integration."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"If HACS is found, it should appear in the list of available integrations. Click on it to start the installation process."),(0,o.yg)("p",null,"A license agreement or terms of service may pop up. Read through the agreement carefully, and if you agree to the terms, check all the boxes to indicate your agreement. Click ",(0,o.yg)("strong",{parentName:"p"},"SUBMIT")," to proceed with the installation."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png",style:{width:600,height:"auto"}})),(0,o.yg)("p",null,"Next, you will be prompted to log in with your GitHub account. This is necessary because HACS integrates with GitHub to manage the installation of community-created integrations and plugins."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png",style:{width:600,height:"auto"}})),(0,o.yg)("p",null,"Follow the instructions to authorize Home Assistant to access your GitHub account. This will typically involve entering a verification code provided by GitHub to confirm your identity."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png",style:{width:600,height:"auto"}})),(0,o.yg)("p",null,"Once you have authorized Home Assistant to use your GitHub account, HACS will finish installing."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"You may need to restart Home Assistant for HACS to fully integrate into your system."),(0,o.yg)("h2",{id:"installing-the-sensecraft-plugin"},"Installing the SenseCraft plugin"),(0,o.yg)("h3",{id:"step-4-installation-of-the-sensecraft-plugin-via-hacs"},"Step 4. Installation of the SenseCraft plugin via HACS"),(0,o.yg)("p",null,"Look for HACS in the sidebar and click on it to open the HACS interface. In the bottom right corner, you'll find a menu button (three dots or a plus sign, depending on your HACS version). Click on ",(0,o.yg)("strong",{parentName:"p"},"Custom repositories"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"A dialog box will appear asking you to input the repository URL. Here, you will enter the custom repository URL for the SenseCraft integration. After entering the URL, select the category (for the SenseCraft integration, you would select ",(0,o.yg)("strong",{parentName:"p"},"Integration"),")."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git\n")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Click on ",(0,o.yg)("strong",{parentName:"p"},"Add"),". The repository is now added to your HACS, and you should be able to find the SenseCraft integration in the list under ",(0,o.yg)("strong",{parentName:"p"},"Integrations"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,'Locate the SenseCraft integration and click "DOWNLOAD".'),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"By this point, we have successfully completed the installation of the SenseCraft plugin."),(0,o.yg)("h2",{id:"preparing-the-model-for-grove-vision-ai-v2"},"Preparing the model for Grove Vision AI V2"),(0,o.yg)("h3",{id:"step-5-flash-firmware-for-xiao-esp32c3"},"Step 5. Flash Firmware for XIAO ESP32C3"),(0,o.yg)("p",null,"Connect the XIAO ESP32C3 to your computer using a suitable USB-C cable. Ensure the device drivers are installed correctly."),(0,o.yg)("p",null,"Open the ",(0,o.yg)("a",{parentName:"p",href:"https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool"},"SenseCraft Model Assistant Tool")," in your web browser."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Then select ",(0,o.yg)("strong",{parentName:"p"},"XIAO ESP32S3")," and click ",(0,o.yg)("strong",{parentName:"p"},"Connect"),"."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Note that although the XIAO ESP32S3 is selected here, we are still using the XIAO ESP32C3!")),(0,o.yg)("p",null,"Click the button below to download the firmware file and click the ",(0,o.yg)("strong",{parentName:"p"},"Add File")," button on the web page to flash the ",(0,o.yg)("inlineCode",{parentName:"p"},"XIAO_C3_as_AT_module.bin")," firmware for the ",(0,o.yg)("inlineCode",{parentName:"p"},"0x0")," address."),(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://files.seeedstudio.com/wiki/visionai-v2-ha/res/XIAO_C3_as_AT_module.bin"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"},"Download the file"))))),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Finally, click the ",(0,o.yg)("strong",{parentName:"p"},"Flash")," button and wait for the programme to be uploaded successfully before disconnecting the XIAO ESP32C3 from the computer."),(0,o.yg)("h3",{id:"step-6-connect-the-grove-vision-ai-v2-to-the-sensecraft-ai-model-assistant"},"Step 6. Connect the Grove Vision AI V2 to the SenseCraft AI Model Assistant"),(0,o.yg)("p",null,"First, we need to open the main SenseCraft AI Model Assistant page."),(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"},"Go to SenseCraft AI"))))),(0,o.yg)("br",null),(0,o.yg)("p",null,"Please use a Type-C type cable to connect ",(0,o.yg)("strong",{parentName:"p"},"Grove Vision AI V2")," to your computer."),(0,o.yg)("p",null,"In the upper right corner of the SenseCraft AI Model Assistant page, you can select ",(0,o.yg)("strong",{parentName:"p"},"Grove Vision AI (WE2)"),". Then click the ",(0,o.yg)("strong",{parentName:"p"},"Connect")," button on the far right."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"In the new window that pops up, select the correct COM port for the device and click the Connect button."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h3",{id:"step-7-upload-a-suitable-model"},"Step 7. Upload a suitable model"),(0,o.yg)("p",null,"Then, just select a model you want to use and click the ",(0,o.yg)("strong",{parentName:"p"},"Send")," button below. Here is an example of Gesture Detection."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/a2.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Wait for 1~2 minutes for the model to be uploaded."),(0,o.yg)("h3",{id:"step-8-observations"},"Step 8. Observations"),(0,o.yg)("p",null,"Once the model is uploaded successfully, you will be able to see the live feed from the Grove Vision AI V2 camera in the Preview on the right."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/a3.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("br",null),(0,o.yg)("p",null,"We can see that in the Preview Settings on the right hand side, there are two setting options that can be changed to optimise the recognition accuracy of the model."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"If there is no screen displayed in Preview or there is no information in the model information, there may be a problem with the model and you need to reselect the model or upload it again.")),(0,o.yg)("h2",{id:"building-mqtt-services-at-home-assistant"},"Building MQTT Services at Home Assistant"),(0,o.yg)("h3",{id:"step-9-install-emqx"},"Step 9. Install EMQX"),(0,o.yg)("p",null,"Click on ",(0,o.yg)("strong",{parentName:"p"},"Settings")," in the sidebar to access the settings menu. Click on ",(0,o.yg)("strong",{parentName:"p"},"Add-ons")," to access the add-on store."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Use the search bar or browse through the available add-ons to find ",(0,o.yg)("strong",{parentName:"p"},"emqx"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/51.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Once you've located ",(0,o.yg)("strong",{parentName:"p"},"EMQX"),", click on it to view the details. On the add-on's page, you'll see an overview, documentation, and configuration options. To install the add-on, click the ",(0,o.yg)("strong",{parentName:"p"},"Install")," button."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/50.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Once the EMQX Add-on is installed, turn on the ",(0,o.yg)("strong",{parentName:"p"},"Start on boot"),", ",(0,o.yg)("strong",{parentName:"p"},"Watchdog")," and ",(0,o.yg)("strong",{parentName:"p"},"Show in sidebar")," toggles. Click ",(0,o.yg)("strong",{parentName:"p"},"Start")," to start EMQX."),(0,o.yg)("p",null,"In the EMQX Dashboard login page, enter the default username and password."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Default username: ",(0,o.yg)("strong",{parentName:"li"},"admin")),(0,o.yg)("li",{parentName:"ul"},"Default password: ",(0,o.yg)("strong",{parentName:"li"},"public"))),(0,o.yg)("p",null,'Click on the "Login" button to access the EMQX Dashboard.'),(0,o.yg)("p",null,"In the EMQX Dashboard, navigate to the ",(0,o.yg)("strong",{parentName:"p"},"Authentication")," section from the left sidebar menu. Click on the ",(0,o.yg)("strong",{parentName:"p"},"Databases")," tab."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png",style:{width:900,height:"auto"}})),(0,o.yg)("p",null,"Click on the ",(0,o.yg)("strong",{parentName:"p"},"Create")," button. In the ",(0,o.yg)("strong",{parentName:"p"},"Mechanism")," dropdown, select ",(0,o.yg)("strong",{parentName:"p"},"Password-Based"),", In the ",(0,o.yg)("strong",{parentName:"p"},"Backend")," dropdown, select ",(0,o.yg)("strong",{parentName:"p"},"Built-in Database"),'. Click on the "Create" button to create the Built-in Database.'),(0,o.yg)("p",null,"After creating the Built-in Database, click on the ",(0,o.yg)("strong",{parentName:"p"},"Users"),' tab in the "Authentication" section. Click on the "Add User" button.'),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},'In the "Username" field, enter "seeed".'),(0,o.yg)("li",{parentName:"ul"},'In the "Password" field, enter "seeed".')),(0,o.yg)("p",null,'Go back to the "Databases" tab in the "Authentication" section. Locate the previously created database in the list of databases.'),(0,o.yg)("p",null,'Click on the toggle switch next to the database to enable it. The database status should change to "Enabled".'),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png",style:{width:900,height:"auto"}})),(0,o.yg)("h2",{id:"integrate-grove-vision-ai-v2-into-home-assistant"},"Integrate Grove Vision AI V2 into Home Assistant"),(0,o.yg)("h3",{id:"step-10-configuring-the-network-for-grove-vision-ai-v2--xiao"},"Step 10. Configuring the network for Grove Vision AI V2 & XIAO"),(0,o.yg)("p",null,"Connect the Grove Vision AI V2 to your computer and open the ",(0,o.yg)("a",{parentName:"p",href:"https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/config"},"Model Assistant's configuration page"),"."),(0,o.yg)("p",null,"After clicking on the top right corner to connect to Grove Vision AI V2, please turn on the MQTT button and enter the following information that you need to fill in the page."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"SSID & Password"),": The device needs to be on the same LAN as the host where the Home Asistant is installed. So please configure the network under the same LAN. XIAO only supports 2.4G WiFi, 5G network is not available."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Encryption"),": Select ",(0,o.yg)("strong",{parentName:"li"},"AUTO"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Host"),": IP address of the host where Home Assistant is installed."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Port"),": ",(0,o.yg)("inlineCode",{parentName:"li"},"1883"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"clientId"),": For the device identification number, please prefix it with ",(0,o.yg)("inlineCode",{parentName:"li"},"grove_vision_ai_v2_")," followed by the custom ID number."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"username"),": The name of the EMQX database you just create."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"password"),": The password of the EMQX database you just create.")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/13.png",style:{width:900,height:"auto"}})),(0,o.yg)("p",null,"Then click the Save button below. After saving, it ",(0,o.yg)("strong",{parentName:"p"},"does not mean that Grove Vision AI V2 has been written correctly"),", please go back to ",(0,o.yg)("strong",{parentName:"p"},"Process")," in the left menu bar and check if the IP address of the device has appeared and if the status of the MQTT connection is correct."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"When IP Address is displayed, it means there is no problem with WIFI, and Service status must be the text in the figure to represent normal, note that if WIFI is not normal, MQTT is definitely not normal; when you just switch over, it may show unconnected, and you need to wait for about 10s or so, you don't need to refresh to see the status, and it will show the newest status after the change of the status automatically.")),(0,o.yg)("h3",{id:"step-11-integration-into-home-assistant"},"Step 11. Integration into Home Assistant"),(0,o.yg)("h4",{id:"method-1-if-the-device-has-been-found"},"Method 1: If the device has been found"),(0,o.yg)("p",null,"By this point, normally, you can already search for Grove Vision AI V2 inside ",(0,o.yg)("strong",{parentName:"p"},"Settings->Devices & services")," in Home Assistant."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/34.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Please click the ",(0,o.yg)("strong",{parentName:"p"},"Configure")," button to set the relevant information, and you have finished adding the device."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/35.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"In ",(0,o.yg)("strong",{parentName:"p"},"Settings->Devices & services"),", you will be able to see the details of the device and show the supported tabs, you can add as many tabs as you want to show in the overview."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/36.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("ol",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ol"},"If you configured a username and password in the previous steps, you may be asked to enter them when you add a device."),(0,o.yg)("li",{parentName:"ol"},"If you have more than one Vision AI device to add to Home Assistant, keep an eye out for the device's ID number, which serves as a distinguishing mark between the different Grove flags.")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/42.png",style:{width:600,height:"auto"}}))),(0,o.yg)("h4",{id:"method-2-if-the-device-is-not-found"},"Method 2: If the device is not found"),(0,o.yg)("p",null,"If there are too many devices in your home, they may not be directly searchable by Home Assistant sometimes. Then at this time you may need to add devices manually."),(0,o.yg)("p",null,"In the ",(0,o.yg)("strong",{parentName:"p"},"Settings")," page, choose ",(0,o.yg)("strong",{parentName:"p"},"Devices & Services"),"."),(0,o.yg)("p",null,"Then click the ",(0,o.yg)("strong",{parentName:"p"},"ADD INTEGRATION")," button in the bottom right corner and search for ",(0,o.yg)("strong",{parentName:"p"},"SenseCraft"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Click on SenseCraft and select Action as ",(0,o.yg)("strong",{parentName:"p"},"Add device using host/id (\u5c40\u57df\u7f51\u96c6\u6210)"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png",style:{width:500,height:"auto"}})),(0,o.yg)("p",null,"Click ",(0,o.yg)("strong",{parentName:"p"},"SUBMIT"),", then select your device type from the dropdown menu, such as ",(0,o.yg)("inlineCode",{parentName:"p"},"grove_vision_ai_we2"),", and click ",(0,o.yg)("strong",{parentName:"p"},"SUBMIT")," again."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/40.png",style:{width:600,height:"auto"}})),(0,o.yg)("p",null,"In the following input field, enter the exact ID of your device. This ID is usually found on the device itself or on the ",(0,o.yg)("a",{parentName:"p",href:"https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process"},"SenseCraft AI")," website."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/41.png",style:{width:700,height:"auto"}})),(0,o.yg)("p",null,"The next step is to configure the MQTT service. Enter the information that matches the MQTT service details you have set up on the website. If you haven't set up a username and password previously, you don't need to fill them in here. Then click ",(0,o.yg)("strong",{parentName:"p"},"SUBMIT"),"."),(0,o.yg)("p",null,"If the setup is successful, the system will usually prompt you to select a location for your device. Choose the appropriate room or area based on your actual situation and click ",(0,o.yg)("strong",{parentName:"p"},"Finish"),"."),(0,o.yg)("p",null,'Once the configuration is complete, you can view your device and its status on the "Overview" page of Home Assistant.'),(0,o.yg)("p",null,'Following these steps should allow you to successfully add the "SenseCraft" device to your Home Assistant instance and configure it to use the MQTT service.'),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("h3",{id:"q1-what-should-i-do-if-i-never-see-the-data-messages-in-ha-again-after-the-grove-vision-ai-v2-drops"},"Q1: What should I do if I never see the data messages in HA again after the Grove Vision AI V2 drops?"),(0,o.yg)("p",null,"You may need to delete the device and re-add it in SenseCraft. After deleting it may not be able to be automatically searched again and you will need to manually add the device. Please refer to the ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"#method-2-if-the-device-is-not-found"},"steps here"))," to re-add the device."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/44.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}c.isMDXComponent=!0}}]);