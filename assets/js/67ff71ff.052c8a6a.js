"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99814],{15680:(e,t,i)=>{i.d(t,{xA:()=>d,yg:()=>u});var n=i(96540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(i),y=a,u=c["".concat(l,".").concat(y)]||c[y]||g[y]||o;return i?n.createElement(u,r(r({ref:t},d),{},{components:i})):n.createElement(u,r({ref:t},d))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}y.displayName="MDXCreateElement"},93919:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=i(58168),a=(i(96540),i(15680));const o={description:"Connect Wio Tracker 1110 to Home Assistant",title:"Home Assistant Integration",keywords:["Home assistant","Wio tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/wio_tracker_home_assistant",last_update:{date:"1/25/2024",author:"Jessie"}},r=void 0,s={unversionedId:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Connect_1110_to_HA",id:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Connect_1110_to_HA",title:"Home Assistant Integration",description:"Connect Wio Tracker 1110 to Home Assistant",source:"@site/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Connect_1110_to_HA.md",sourceDirName:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board",slug:"/wio_tracker_home_assistant",permalink:"/wio_tracker_home_assistant",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Connect_1110_to_HA.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1706140800,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{description:"Connect Wio Tracker 1110 to Home Assistant",title:"Home Assistant Integration",keywords:["Home assistant","Wio tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/wio_tracker_home_assistant",last_update:{date:"1/25/2024",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Connect Wio Tracker to LoRa Cloud\u2122 Locator",permalink:"/connect_wio_tracker_to_locator"},next:{title:"Setup Your Toolchain",permalink:"/setup_toolchain_for_wio_tracker"}},l={},p=[{value:"Get Started",id:"get-started",level:2},{value:"Device Configuration",id:"device-configuration",level:3},{value:"Home Assistant Configuration",id:"home-assistant-configuration",level:3},{value:"Install Add-ons",id:"install-add-ons",level:4},{value:"Install HACS",id:"install-hacs",level:4},{value:"Install SenseCraft plugin",id:"install-sensecraft-plugin",level:4},{value:"Add Devices",id:"add-devices",level:4},{value:"Add Map Card",id:"add-map-card",level:4}],d={toc:p},c="wrapper";function g(e){let{components:t,...i}=e;return(0,a.yg)(c,(0,n.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Integrate the ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html"},"Wio Tracker 1110 Dev Board")," into Home Assistant for real-time tracking and live environmental analysis. ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html"},"Wio Tracker 1110 Dev Board")," is a user-friendly, LoRa-based tracking development platform, you can use the dev board to develop more custom features, making your home environment more intelligent and responsive."),(0,a.yg)("h2",{id:"get-started"},"Get Started"),(0,a.yg)("p",null,"In this tutorial we use ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html"},"Home Assistant Green")," as the Home Assistant host, you can use any Home Assistant host with a Supervisor. Check the ",(0,a.yg)("a",{parentName:"p",href:"https://www.home-assistant.io/installation/"},"Installation")," for more details."),(0,a.yg)("h3",{id:"device-configuration"},"Device Configuration"),(0,a.yg)("p",null,"Before we begin, make sure you have read the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Get_Started_with_Wio-Trakcer_1110/"},"User Guide")," of the Wio Tracker 1110 Dev Board, and select the platform to ",(0,a.yg)("inlineCode",{parentName:"p"},"SenseCAP"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg",alt:"pir",width:300,height:"auto"})),(0,a.yg)("h3",{id:"home-assistant-configuration"},"Home Assistant Configuration"),(0,a.yg)("p",null,"Navigate to your ",(0,a.yg)("a",{parentName:"p",href:"http://homeassistant.local:8123/"},"Home Assistant web interface"),". "),(0,a.yg)("p",null,"To unlock the full potential of Home Assistant and gain access to advanced features, it's recomended to enable the ",(0,a.yg)("inlineCode",{parentName:"p"},"Advanced mode")," in the user interface."),(0,a.yg)("p",null,"Click on your profile, and enable the ",(0,a.yg)("inlineCode",{parentName:"p"},"Advanced mode"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/advanced-mode.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("h4",{id:"install-add-ons"},"Install Add-ons"),(0,a.yg)("p",null,"Go to ",(0,a.yg)("a",{parentName:"p",href:"https://my.home-assistant.io/redirect/supervisor"},"Settings > Add-ons"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-ons.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Under the Official ",(0,a.yg)("inlineCode",{parentName:"p"},"add-ons")," section, you will find the ",(0,a.yg)("inlineCode",{parentName:"p"},"File editor")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Advanced SSH & Web Terminal")," add-on."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/2-ons.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"It's recommended to enable ",(0,a.yg)("inlineCode",{parentName:"p"},"Show in sidebar")," so you can find it more easily."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/show-sidebar.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("h4",{id:"install-hacs"},"Install HACS"),(0,a.yg)("p",null,"Home Assistant Community Store gives you a powerful UI to handle downloads of all your custom needs."),(0,a.yg)("p",null,"Open your terminal and navigate to the config directory:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"cd /config\n")),(0,a.yg)("p",null,"Download and run the HACS installation script:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"wget -q -O - https://install.hacs.xyz | bash -\n")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/comand-page.png",alt:"pir",width:600,height:"auto"})),(0,a.yg)("p",null,"After the installation script has finished, restart Home Assistant to apply the changes. "),(0,a.yg)("p",null,"Go to ",(0,a.yg)("inlineCode",{parentName:"p"},"Settings")," > ",(0,a.yg)("inlineCode",{parentName:"p"},"System")," > ",(0,a.yg)("inlineCode",{parentName:"p"},"Restart"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/restart.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"Settings")," ->  ",(0,a.yg)("inlineCode",{parentName:"p"},"Devices & Services"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-service.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Click on ",(0,a.yg)("inlineCode",{parentName:"p"},"ADD INTEGRATION")," to add a new integration."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-inte.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Search ",(0,a.yg)("inlineCode",{parentName:"p"},"HACS")," and click on it."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/HACS.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Only the last item (experimental features) are optional, you need to accept everything above that before you can setup HACS."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/submit.png",alt:"pir",width:600,height:"auto"})),(0,a.yg)("p",null,"Follow the instructions to authorize Home Assistant to access your GitHub account. This will typically involve entering a verification code provided by GitHub to confirm your identity."),(0,a.yg)("p",null,"HACS uses a device OAuth flow for authentication against the GitHub API."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png\n",alt:"pir",width:600,height:"auto"})),(0,a.yg)("h4",{id:"install-sensecraft-plugin"},"Install SenseCraft plugin"),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"HACS"),", click on the icon in the upper right corner, and choose ",(0,a.yg)("inlineCode",{parentName:"p"},"Custom repositories"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png\n",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Copy the ",(0,a.yg)("inlineCode",{parentName:"p"},"Repositorie"),":"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Repository"),": "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Category"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"Integration")),(0,a.yg)("p",null,"Click on ",(0,a.yg)("inlineCode",{parentName:"p"},"Add"),". The repository is now added to your HACS, and you can also find the SenseCraft integration in the list under ",(0,a.yg)("inlineCode",{parentName:"p"},"Integrations"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/custom-re.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Navigate to the ",(0,a.yg)("inlineCode",{parentName:"p"},"SenseCraft")," integration and click ",(0,a.yg)("inlineCode",{parentName:"p"},"DOWNLOAD"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"We have successfully completed the installation of the SenseCraft plugin now."),(0,a.yg)("h4",{id:"add-devices"},"Add Devices"),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"Settings")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"Devices & Services")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"SenseCraft"),", click on ",(0,a.yg)("inlineCode",{parentName:"p"},"ADD DEVICE"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-device-.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Select ",(0,a.yg)("inlineCode",{parentName:"p"},"Add devices using SenseCraft Account(\u8d26\u53f7\u96c6\u6210) "),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/account-inte.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Log in with your SenseCAP Mate APP account, and select ",(0,a.yg)("inlineCode",{parentName:"p"},"global")," version."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-login.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Then all your devices in your account will be listed, select the one that you want to connect, and then click ",(0,a.yg)("inlineCode",{parentName:"p"},"SUBMIT"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-device.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Once the connection is successful, you will see the device and entity displayed."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cloud-device.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Click on the device, you will see all the data uploarded, click ",(0,a.yg)("inlineCode",{parentName:"p"},"ADD TO DASHBOARD")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-dashboard.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("h4",{id:"add-map-card"},"Add Map Card"),(0,a.yg)("p",null,"Before we add the map card, we need to add a location entity first."),(0,a.yg)("p",null,"Open the ",(0,a.yg)("inlineCode",{parentName:"p"},"File Editor")," and navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration.yaml")," file, add the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"template:\n  - sensor:\n      - name: \"Device Location\"\n        state: >\n          {{ states('sensor.latitude') }},{{ states('sensor.longitude') }}\n        attributes:\n          latitude: \"{{ states('sensor.latitude') }}\"\n          longitude: \"{{ states('sensor.longitude') }}\"\n")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/yaml2.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"name")," can be customized, and the ",(0,a.yg)("inlineCode",{parentName:"p"},"states")," should be same with the entity id of your device."),(0,a.yg)("p",{parentName:"admonition"},"You can check the entity id on ",(0,a.yg)("inlineCode",{parentName:"p"},"Settings")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"Devices and Services")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"Entities")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-id.png",alt:"pir",width:600,height:"auto"}))),(0,a.yg)("p",null,"Click ",(0,a.yg)("inlineCode",{parentName:"p"},"ADD CARD")," on the dashboard."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-card.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Choose the Map card."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-card.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Copy the code into the ",(0,a.yg)("inlineCode",{parentName:"p"},"CODE EDITOR")," and click ",(0,a.yg)("inlineCode",{parentName:"p"},"SAVE"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"type: map\nentities:\n  - entity: sensor.device_location\n")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/code-editor.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The Entity should be same with your entity id, You can check the entity id on ",(0,a.yg)("inlineCode",{parentName:"p"},"Settings")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"Devices and Services")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"Entities")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-location.png",alt:"pir",width:600,height:"auto"}))),(0,a.yg)("p",null,"You can check the live location on the map now."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-map.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"All data of the Dev Board can be viewed in the dashboard."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png",alt:"pir",width:800,height:"auto"})))}g.isMDXComponent=!0}}]);