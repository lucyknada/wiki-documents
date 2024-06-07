"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18771],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>h});var s=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=s.createContext({}),p=function(e){var t=s.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return s.createElement(g.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,g=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(g,".").concat(m)]||c[m]||d[m]||o;return n?s.createElement(h,a(a({ref:t},l),{},{components:n})):s.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var r={};for(var g in t)hasOwnProperty.call(t,g)&&(r[g]=t[g]);r.originalType=e,r[c]="string"==typeof e?e:i,a[1]=r;for(var p=2;p<o;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var s=n(58168),i=(n(96540),n(15680));const o={description:"Home Assistant Intergration for SenseCAP LoRaWAN Sensors",title:"SenseCAP Integration for Home Assistant",keywords:["SenseCAP M2 Multi-Platform","Home Assistant","LoRaWAN Sensors"],slug:"/home_assistant_sensecap",last_update:{date:"10/19/2023",author:"JoJang"}},a="Automatic intergrate  all your SenseCAP Sensors to Home Assistant",r={unversionedId:"Topics/Home_Assistant/Home_Assistant_Tutorials/home_assistant_sensecap",id:"Topics/Home_Assistant/Home_Assistant_Tutorials/home_assistant_sensecap",title:"SenseCAP Integration for Home Assistant",description:"Home Assistant Intergration for SenseCAP LoRaWAN Sensors",source:"@site/docs/Topics/Home_Assistant/Home_Assistant_Tutorials/home_assistant_sensecap.md",sourceDirName:"Topics/Home_Assistant/Home_Assistant_Tutorials",slug:"/home_assistant_sensecap",permalink:"/home_assistant_sensecap",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/Home_Assistant/Home_Assistant_Tutorials/home_assistant_sensecap.md",tags:[],version:"current",lastUpdatedBy:"JoJang",lastUpdatedAt:1697673600,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{description:"Home Assistant Intergration for SenseCAP LoRaWAN Sensors",title:"SenseCAP Integration for Home Assistant",keywords:["SenseCAP M2 Multi-Platform","Home Assistant","LoRaWAN Sensors"],slug:"/home_assistant_sensecap",last_update:{date:"10/19/2023",author:"JoJang"}},sidebar:"ProductSidebar",previous:{title:"Home Assistant",permalink:"/home_assistant_topic"},next:{title:"Extend Home Assistant with LoRaWAN device (XIAO-ESP32-S3)",permalink:"/ha_xiao_esp32"}},g={},p=[{value:"1. SenseCAP M2 Multi-Platform Configuration",id:"1-sensecap-m2-multi-platform-configuration",level:2},{value:"1.1 LoRa Network Configuration",id:"11-lora-network-configuration",level:3},{value:"1.2 ChirpStack Configuration",id:"12-chirpstack-configuration",level:3},{value:"2. Home Assistant Configuration",id:"2-home-assistant-configuration",level:2},{value:"2.1 Install",id:"21-install",level:3},{value:"2.2 Configuration",id:"22-configuration",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,s.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"automatic-intergrate--all-your-sensecap-sensors-to-home-assistant"},"Automatic intergrate  all your SenseCAP Sensors to Home Assistant"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/overview.jpg",alt:"pir",width:800,height:"auto"})),(0,i.yg)("h2",{id:"1-sensecap-m2-multi-platform-configuration"},"1. SenseCAP M2 Multi-Platform Configuration"),(0,i.yg)("h3",{id:"11-lora-network-configuration"},"1.1 LoRa Network Configuration"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 1.")," Click ",(0,i.yg)("strong",{parentName:"p"},"LoRa")," and choose ",(0,i.yg)("strong",{parentName:"p"},"LoRa Network")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/lora_network.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 2.")," Choose Local Network Server mode and fill your MQTT host information ",(0,i.yg)("strong",{parentName:"p"},"(Include your host, username, password and port).")," Then Click ",(0,i.yg)("strong",{parentName:"p"},"Save&&Apply")," "),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/lns.png"})),(0,i.yg)("p",null,"At this point we have finished the server mode setup, and we wiil configure the ChirpStack later."),(0,i.yg)("h3",{id:"12-chirpstack-configuration"},"1.2 ChirpStack Configuration"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 1.")," Open the ChirpStack configuration page, then ",(0,i.yg)("strong",{parentName:"p"},"Click Device profiles")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_profiles.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 2.")," Click ",(0,i.yg)("strong",{parentName:"p"},"Add device profile")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_profiles_2.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 3.")," First, fill in the device profile according to your SenseCAP configuration: ",(0,i.yg)("strong",{parentName:"p"},"Name, Region, MAC version"),", and ",(0,i.yg)("strong",{parentName:"p"},"Regional parameters revision"),", in which the ",(0,i.yg)("strong",{parentName:"p"},"Expected uplink interval")," needs to be changed to ",(0,i.yg)("strong",{parentName:"p"},"120"),", and this one can be adjusted according to your own requirements. In the second step, we Click the ",(0,i.yg)("strong",{parentName:"p"},"Codec")," at the top"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_general.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 4.")," In this step, we need to choose the decoder according to our Sensor model, the code can be found ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP-Decoder.git"},"Here"),". We need to select the code in the ",(0,i.yg)("strong",{parentName:"p"},"TTN")," folder as our decoder."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_decoder.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 5.")," Next step, we are going to add devices. Click ",(0,i.yg)("strong",{parentName:"p"},"Applications")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_applications.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 6.")," Click ",(0,i.yg)("strong",{parentName:"p"},"Add applications")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_application_2.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 7.")," Fill the application information and Click ",(0,i.yg)("strong",{parentName:"p"},"Submit")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_application_3.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 8.")," Use the ",(0,i.yg)("strong",{parentName:"p"},"SenseCAP Mate APP")," to configure Sensor, Set the ",(0,i.yg)("strong",{parentName:"p"},"Platform")," to ",(0,i.yg)("strong",{parentName:"p"},"Other Platform")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/SenseCAP_Mate.jpg"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 9.")," Click ",(0,i.yg)("strong",{parentName:"p"},"Add device")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 10.")," Fill your device information and Click ",(0,i.yg)("strong",{parentName:"p"},"Submit")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice_2.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 11.")," Click the ",(0,i.yg)("strong",{parentName:"p"},"DevEUI")," of your devices to turn the page"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice_3.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 12.")," Click ",(0,i.yg)("strong",{parentName:"p"},"OTAA keys")," and enter your ",(0,i.yg)("strong",{parentName:"p"},"Application key")," of the SenseCAP Sensor. Then Click ",(0,i.yg)("strong",{parentName:"p"},"Submit")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_appkey.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 13.")," Activate your SenseCAP Sensor and wait for it to automatically connect to LoRaWAN. Then you can see the data uploaded by the sensor in the ",(0,i.yg)("strong",{parentName:"p"},"Events")," and ",(0,i.yg)("strong",{parentName:"p"},"LoRaWAN frames")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_data.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 14.")," At this point, we have completed all configurations of the M2 gateway."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_updata.png"})),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"When adding a device to the M2 gateway for the ",(0,i.yg)("strong",{parentName:"p"},"first time"),", wait at least ",(0,i.yg)("strong",{parentName:"p"},"2-5")," minutes until the data reported by ",(0,i.yg)("strong",{parentName:"p"},"up")," can be seen in ",(0,i.yg)("strong",{parentName:"p"},"Events"),". Then the device addition initialization is complete. Then we can configure the Home Assistant plug-in.")),(0,i.yg)("h2",{id:"2-home-assistant-configuration"},"2. Home Assistant Configuration"),(0,i.yg)("h3",{id:"21-install"},"2.1 Install"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1.HACS")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"First installation"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"1.HACS > Integrations >")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"2.Click on top right corner > Custom repositories \uff1a "),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"  Repository: https://github.com/Seeed-Solution/home-assistant-SenseCAP.git\n  Category: Intergration\n")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/custom_repositories_2.png"}))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"3.Click ADD")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"4.HACS > Integrations > \u2795 EXPLORE & DOWNLOAD REPOSITORIES > Seeed Studio-SenseCAP > DOWNLOAD THIS REPOSITORY"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/custom_repositories_3.png"})))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Update component",(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"HACS > Integrations > ",(0,i.yg)("a",{parentName:"p",href:"https://my.home-assistant.io/redirect/hacs_repository/?owner=Seeed-Solution&repository=https%3A%2F%2Fgithub.com%2FSeeed-Solution%2Fhome-assistant-SenseCAP.git"},(0,i.yg)("inlineCode",{parentName:"a"},"Seeed Studio-SenseCAP"))," > UPDATE / Redownload")))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2.Install via SSH & Web Terminal add-on")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Open SSH Terminal and enter the following command:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"cd ~/config/custom_components && git clone https://github.com/Seeed-Solution/home-assistant-SenseCAP.git && cd home-assistant-SenseCAP/custom_components && mv sensecap ../../ && cd ../../ && rm -r home-assistant-SenseCAP\n")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/Install.jpg"})),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Restart HA core"),(0,i.yg)("li",{parentName:"ol"},"Add Integration",(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/add_intergration.png"})))),(0,i.yg)("h3",{id:"22-configuration"},"2.2 Configuration"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Enter your MQTT information and Click ",(0,i.yg)("strong",{parentName:"p"},"SUBMIT")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_1.png"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Waiting for few minutes (",(0,i.yg)("strong",{parentName:"p"},"The Uplink time depends on your setting in M2 Chirpstack and SenseCAP Mate APP"),"), and Click ",(0,i.yg)("strong",{parentName:"p"},"Notifications")," in the left sidebar. Then we can see the SenseCAP Sensors have been automatically added to HA. Click ",(0,i.yg)("strong",{parentName:"p"},"Check it out")," and turn to the Integration"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_2.png"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Click on one of the devices and we can see that all of the entities have been automatically created and added to the device. Click ",(0,i.yg)("strong",{parentName:"p"},"ADD TO DASHBOARD")," so as to add all the entites of entire device directly to the dashboard through the form of cards"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_3.png"})),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"Go to ",(0,i.yg)("strong",{parentName:"li"},"Overview")," and we can find the card we just added")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_4.png"})),(0,i.yg)("ol",{start:5},(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Edit dashboard"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_5.png"})),(0,i.yg)("ol",{start:6},(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"EDIT")," to edit")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_6.png"})),(0,i.yg)("ol",{start:7},(0,i.yg)("li",{parentName:"ol"},"We can add a header Picture to decorate the card")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_7.png"})),(0,i.yg)("ol",{start:8},(0,i.yg)("li",{parentName:"ol"},"Replace the url to yours in order to display your favorite picture")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_8.png"})),(0,i.yg)("ol",{start:9},(0,i.yg)("li",{parentName:"ol"},"Choose the entity to modify")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_9.png"})),(0,i.yg)("ol",{start:10},(0,i.yg)("li",{parentName:"ol"},"Change the icon to one that is similar to the type of sensor entity")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_10.png"})),(0,i.yg)("ol",{start:11},(0,i.yg)("li",{parentName:"ol"},"We have now completed the entire plugin configuration process here. Subsequently, you can perform custom optimizations according to your own requirements")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_11.png"})),(0,i.yg)("ol",{start:12},(0,i.yg)("li",{parentName:"ol"},'Here are the visual representations of the effects on the "Overview" page after adding various models of SenseCAP sensors.')),(0,i.yg)("p",null,"The aforementioned constitutes the complete step-by-step tutorial for integrating SenseCAP into the Home Assistant platform. Home Assistant has the capability to seamlessly integrate different types of devices from various platforms into a single ecosystem, facilitating cross-platform interoperability. This holds profound significance for the comprehensiveness of the smart home ecosystem. Presently, Seeed has also become a part of the extensive Home Assistant community, enabling the integration of our SenseCAP devices into the platform. We believe that this endeavor will contribute to the further strengthening and growth of the Internet of Things ecosystem !"),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"The SenseCAP for Home Assistant intergration is completely open source, and you can download the source code project here"),": ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/home-assistant-SenseCAP.git"},"https://github.com/Seeed-Solution/home-assistant-SenseCAP.git"),".")),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);