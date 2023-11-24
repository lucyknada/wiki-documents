"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8004],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(o),m=a,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return o?n.createElement(d,s(s({ref:t},c),{},{components:o})):n.createElement(d,s({ref:t},c))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,s[1]=p;for(var i=2;i<r;i++)s[i]=o[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},49633:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=o(87462),a=(o(67294),o(3905));const r={description:"SenseCAP M1 Quick Start",title:"SenseCAP M1 Quick Start",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},s=void 0,p={unversionedId:"Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Quick_Start",id:"Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Quick_Start",title:"SenseCAP M1 Quick Start",description:"SenseCAP M1 Quick Start",source:"@site/docs/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Quick_Start.md",sourceDirName:"Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1",slug:"/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Quick_Start",permalink:"/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Quick_Start",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Quick_Start.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"SenseCAP M1 Quick Start",title:"SenseCAP M1 Quick Start",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}}},l={},i=[],c={toc:i},u="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Below you will find the required steps to easily set up your hotspot in a few minutes!")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the Helium App and create a Helium Wallet"),(0,a.kt)("li",{parentName:"ol"},"Attach the antenna and power adapter to the SenseCAP M1 and power it on."),(0,a.kt)("li",{parentName:"ol"},"Press the small button on the back for 6-10 seconds until the Blue LED light begins to flash slowly"),(0,a.kt)("li",{parentName:"ol"},'Click "Setup Hotspot" and choose "SenseCAP M1" from the list'),(0,a.kt)("li",{parentName:"ol"},'Click "Scan for my Hotspot" from the Bluetooth page and connect to the SenseCAP M1'),(0,a.kt)("li",{parentName:"ol"},"Select the Wi-Fi and enter the password OR use an Ethernet cable"),(0,a.kt)("li",{parentName:"ol"},"Set Hotspot Location and submit location fee")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What You Will Need"),(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/what-youll-need.webp",alt:"SenseCAP M1 Quick Start"})),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"step-1-download-the-sensecapapp-and-create-a-helium-wallet"},(0,a.kt)("strong",{parentName:"h1"},"Step 1: Download the SenseCAPApp and create a Helium Wallet.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapmx-app.png",alt:"SenseCAP MX App"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/sensecap-hotspot/id1600051150"},(0,a.kt)("strong",{parentName:"a"},"Hotspot App for iOS"))," on the iTunes App Store"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.sensecapmx.hotspot"},(0,a.kt)("strong",{parentName:"a"},"Hotspot App for Android"))," on the Google Play Store")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"step-2-attach-the-antenna-and-the-power-adapter-onto-the-sensecap-m1-and-power-it-up"},(0,a.kt)("strong",{parentName:"h1"},"Step 2: Attach the antenna and the power adapter onto the SenseCAP M1 and power it up.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": Please wait half an hour while your hotspot is getting ready for first use and while updating firmware automatically to latest firmware."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ATTENTION"),": Do not power on the gateway without its antenna connected as this may damage the unit. Make sure you are using the power adapter we provided."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": The units will come with an adaptor with the US/EU standard plug according to the version you choose, so if there is a different plug standard in the place you are going to place the gateway, you are advised to purchase a plug adaptor to fit the standard. After power-up the gateway, wait 30-60 seconds for the gateway to boot up, you should see the Blue LED on the back of the unit turn on and fast flashing. Now it is ready for you to go to the next step to configure the Bluetooth connection."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/hotspot-1.webp",alt:"SenseCAP M1"})),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"step-3-press-the-button-on-the-back-for-6-10-seconds-until-the-blue-led-turns-to-slow-flash-mode"},(0,a.kt)("strong",{parentName:"h1"},"Step 3: Press the button on the back for 6-10 seconds until the Blue LED turns to slow flash mode.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/LED-status-1.webp",alt:"SenseCAP M1 LED Status"})),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"step-4-click-set-up-hotspot-and-choose-sensecap-m1-from-the-list"},(0,a.kt)("strong",{parentName:"h1"},"Step 4: Click \u201cSet up Hotspot\u201d and choose SenseCAP M1 from the list.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/helium-app-sensecap-m1.png",alt:"SenseCAP M1 Setup App"})),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"step-5-click-scan-for-my-hotspot-from-the-bluetooth-page-and-then-connect-to-sensecap-m1"},(0,a.kt)("strong",{parentName:"h1"},"Step 5: Click \u201cScan for my Hotspot\u201d from the Bluetooth page and then connect to SenseCAP M1.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/app-steps.png",alt:"SenseCAP App Setup"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": The last 6 figures of the device\u2019s ETH MAC is displayed under the name of the hotspot, so if more than one gateways are waiting to connect, you could tell hotspot from each other by the ETH MAC, which will be provided on the label stick on the bottom of the device."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecap-m1-mac-labels.webp",alt:"SenseCAP M1 MAC"})),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"step-6-select-the-wifi-and-enter-the-wifi-password-to-connect-to-the-network"},(0,a.kt)("strong",{parentName:"h1"},"Step 6: Select the WiFi and enter the WiFi password to connect to the network.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": To connect with Ethernet, attach the Ethernet cable to the gateway via ETH port, and click \u201cUse Ethernet Instead\u201d on the Wi-Fi connection page to continue."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ATTENTION"),": If you use an Ethernet cable to connect the Internet, in order to avoid the network connection failure caused by the loose or ejected cable, please try hard when plugging the network cable and make sure you hear a clear \u201cclick\u201d sound."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecap-m1-ethernet.webp",alt:"SenseCAP M1 Ethernet"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/helium-app-wifi-eth.png",alt:"SenseCAP M1 App Wifi"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": For the first boot, after the gateway connected to the internet, it will take about 10-15 minutes for the firmware updates before you could do more configuration and register the gateway to Helium. If there is any problem occurs, please hold on and wait for the updates to complete.",(0,a.kt)("br",{parentName:"p"}),"\n","After firmware updates complete, you need to press the button for 6-10 seconds until the Blue LED turns to slow flash mode to enter the Bluetooth configuration mode again."),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"step-7-set-hotspot-location-and-pay-location-fee"},(0,a.kt)("strong",{parentName:"h1"},"Step 7: Set Hotspot Location and Pay Location Fee")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After setting up the gateway, you may be asked to set a location for your hotspot."),(0,a.kt)("li",{parentName:"ul"},"The SenseCAP M1 has covered the $40 Helium network activation fee and the first location assert fee of $10 (worth $50 in total) in the purchase price."),(0,a.kt)("li",{parentName:"ul"},"You could set up the location and change to another location if needed, but you will need to pay the $10 location assert fee again every time you move your gateway to a new location."),(0,a.kt)("li",{parentName:"ul"},"Choose the location on the map and confirm the location of your hotspot, and the setup would be completed.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/register-hotspot.png",alt:"SenseCAP M1 Register Hotspot"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": You will need to wait for about 15 minutes for the Hotspot to register to the Helium network. You could close this screen by clicking \u201cGo to Wallet\u201d, and you could check the updated information of your hotspot in the App after finishing this step."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/helium-wallet.png",alt:"Helium Wallet"})),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Welcome To The People's Network!")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/longfi.webp",alt:"Longfi"})))}h.isMDXComponent=!0}}]);