"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69583],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>g});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(i),h=o,g=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return i?n.createElement(g,a(a({ref:t},u),{},{components:i})):n.createElement(g,a({ref:t},u))}));function g(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},31751:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(87462),o=(i(67294),i(3905));const r={description:"reTerminal DM Ignition Edge Panel Builder Hello World",title:"reTerminal DM Ignition Edge Panel Builder Hello World",keywords:["Edge","reTerminal-DM","Ignition Edge","Panel Builder"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Ignition-Edge-Panel-Builder",last_update:{date:"09/29/2023",author:"Corey Thompson"}},a=void 0,l={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal-DM/Ignition_Edge/reTerminal-DM-Ignition-Edge-Panel-Builder",id:"Edge/Raspberry_Pi_Devices/reTerminal-DM/Ignition_Edge/reTerminal-DM-Ignition-Edge-Panel-Builder",title:"reTerminal DM Ignition Edge Panel Builder Hello World",description:"reTerminal DM Ignition Edge Panel Builder Hello World",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/Ignition_Edge/reTerminal-DM-Ignition-Edge-Panel-Builder.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal-DM/Ignition_Edge",slug:"/reTerminal-DM-Ignition-Edge-Panel-Builder",permalink:"/reTerminal-DM-Ignition-Edge-Panel-Builder",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/Ignition_Edge/reTerminal-DM-Ignition-Edge-Panel-Builder.md",tags:[],version:"current",lastUpdatedBy:"Corey Thompson",lastUpdatedAt:1695945600,formattedLastUpdatedAt:"Sep 29, 2023",frontMatter:{description:"reTerminal DM Ignition Edge Panel Builder Hello World",title:"reTerminal DM Ignition Edge Panel Builder Hello World",keywords:["Edge","reTerminal-DM","Ignition Edge","Panel Builder"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Ignition-Edge-Panel-Builder",last_update:{date:"09/29/2023",author:"Corey Thompson"}},sidebar:"ProductSidebar",previous:{title:"reTerminal DM Getting Started with Ignition Edge",permalink:"/reTerminal-DM-Getting-Started-with-Ignition-Edge"},next:{title:"Getting Start with FUXA - Web Based SCADA Tool",permalink:"/reTerminal-DM_intro_FUXA"}},s={},d=[{value:"Hardware Prerequisites",id:"hardware-prerequisites",level:2},{value:"Licensing",id:"licensing",level:2},{value:"Creating a Hello World View With Panel Designer",id:"creating-a-hello-world-view-with-panel-designer",level:2},{value:"Install and Setup Ignition Edge Panel Builder",id:"install-and-setup-ignition-edge-panel-builder",level:3},{value:"Create and Load a Panel",id:"create-and-load-a-panel",level:3},{value:"Expanding Your HMI",id:"expanding-your-hmi",level:2},{value:"Perspective Vs Vision",id:"perspective-vs-vision",level:2},{value:"Will your users be mobile-first? Choose Perspective.",id:"will-your-users-be-mobile-first-choose-perspective",level:3},{value:"Do you want to feel more native than a web browser? Choose Vision.",id:"do-you-want-to-feel-more-native-than-a-web-browser-choose-vision",level:3},{value:"Will your users multi-task on this device? Choose Perspective",id:"will-your-users-multi-task-on-this-device-choose-perspective",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This document assumes you have already have an Ignition Edge Gateway running and on your network.\nBefore attempting these instructions, follow ",(0,o.kt)("a",{parentName:"p",href:"/reTerminal-DM-Getting-Started-with-Ignition-Edge"},"Getting Started with Ignition Edge")," if you need assistance with this.")),(0,o.kt)("h2",{id:"hardware-prerequisites"},"Hardware Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PC / Mac with SSH terminal capability"),(0,o.kt)("li",{parentName:"ul"},"PC / Mac with available hard drive capacity to install Ignition's Designer applciations"),(0,o.kt)("li",{parentName:"ul"},"12-24V DC power supply"),(0,o.kt)("li",{parentName:"ul"},"Ethernet cable"),(0,o.kt)("li",{parentName:"ul"},"reTerminal DM x 1")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg",alt:"pir",width:"600",height:"auto"})),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reTerminal-DM-p-5616.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"licensing"},"Licensing"),(0,o.kt)("p",null,"This tutorial will not require activation of any products, although it may cause some interruption for you during the series depending on the pace you are working at while following along. Ignition Edge products requires a license for full usage in production. There is a trial version of the product available which has full feature support, however, it will clear its data every two hours. "),(0,o.kt)("p",null,"To get a license for the product, you will need to either reach out to an Inductive Automation sales representative or you can purchase your own on the ",(0,o.kt)("a",{parentName:"p",href:"https://inductiveautomation.com/pricing/ignition"},"Inductive Automation Ignition pricing")," page."),(0,o.kt)("p",null,"To enter the license, simply follow the green banner prompting you to activate ignition on your Ignition Edge Gateway's home page. Ensure your edge device has internet connectivity and enter the 6 or 8 character string and the device will take a few seconds to activate."),(0,o.kt)("h2",{id:"creating-a-hello-world-view-with-panel-designer"},"Creating a Hello World View With Panel Designer"),(0,o.kt)("p",null,"To demonstrate how to create a basic page and display it at a fixed URL, we will create a 'hello world' perspective project and view it on the gateway using a web browser. "),(0,o.kt)("p",null,"To load the gateway's home page, launch a web browser either on the reTerminal itself at ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8088")," OR from another device on the network at ",(0,o.kt)("inlineCode",{parentName:"p"},"{reterminalhostname}:8088")," OR from anywhere on the network with the IP address of the reTerminal itself at ",(0,o.kt)("inlineCode",{parentName:"p"},"{reterminalip}:8088")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png"})),(0,o.kt)("h3",{id:"install-and-setup-ignition-edge-panel-builder"},"Install and Setup Ignition Edge Panel Builder"),(0,o.kt)("p",null,"On the gateway's home screen there is a button to download the Designer Launcher. The Designer Launcher is the HMI designer software which installs onto your local PC/Mac and remotely loads the designs onto the reTerminal DM. "),(0,o.kt)("p",null,"Begin by downloading and executing this installer. It will detect your operating system and install an app on your machine with a very basic installer. After the installation is complete, it will prompt whether you would like to import your setting from the gateway - click ",(0,o.kt)("strong",{parentName:"p"},"yes"),"."),(0,o.kt)("p",null,"Launch the newly installed Ignition Designer Launcher, it should show the connection to your device. Click on your device and and then click the 'open designer' button that is now enabled in the bottom corner."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-launcher.png"})),(0,o.kt)("p",null,"You should now see a login prompt appear. Enter your Ignition admin credentials that were entered during the setup of your Edge Gateway."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-login.png"})),(0,o.kt)("h3",{id:"create-and-load-a-panel"},"Create and Load a Panel"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the left column, expand 'Perspectives' and right click on the 'Views'"),(0,o.kt)("li",{parentName:"ol"},"Create a new view and give it a name 'hello-world'"),(0,o.kt)("li",{parentName:"ol"},"Find the components pallete, which is sometimes in a hidden tab container on your right. Search for a 'label' and drag it onto the canvas."),(0,o.kt)("li",{parentName:"ol"},"Double click on the label and change your text to 'hello world'"),(0,o.kt)("li",{parentName:"ol"},"Save the file and in the top menu bar navigate to File -> Update Project to publish the updated project (aka 'Perspective session') to the gateway.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-create-helloworld.gif"})),(0,o.kt)("p",null,"Now that you've updated your Perspective session, it is live and you can navigate to it with a web browser!\nTo get help finding the URL for the view we just created, you can return to the Edge Gateway Launcher and view the active Perspective sessions. This will launch a browser on your session's home page URL."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif"})),(0,o.kt)("h2",{id:"expanding-your-hmi"},"Expanding Your HMI"),(0,o.kt)("p",null,"You have now setup the basics of Ignition's Perspective module to power the visuals of your ReTerminal. To create more powerful visuals leveraging the full Ignition platform, you will likely need to setup Tag Servers, Historian Databases, etc which are outside the scope of this tutorial. To learn more about the Ignition platform, use their excellent documentation and instructions for free at ",(0,o.kt)("a",{parentName:"p",href:"https://inductiveuniversity.com/"},"Inductive University.")),(0,o.kt)("h2",{id:"perspective-vs-vision"},"Perspective Vs Vision"),(0,o.kt)("p",null,"Ignition offers two panel builder softwares and it is a common question to decide which one to use. There is a lot of overlap in functionality between the two, but there are a couple key deciding factors to make the decision."),(0,o.kt)("h3",{id:"will-your-users-be-mobile-first-choose-perspective"},"Will your users be mobile-first? Choose Perspective."),(0,o.kt)("p",null,"If you wish to use iOS or Android native packages such as location services, or cameras you will only have access to these features through Perspective."),(0,o.kt)("h3",{id:"do-you-want-to-feel-more-native-than-a-web-browser-choose-vision"},"Do you want to feel more native than a web browser? Choose Vision."),(0,o.kt)("p",null,"If you want to avoid the feel of many modern web apps (like Google Drive, Outlook for web, Zoom for web, etc) and fully immerse your user experience, then you should choose Vision."),(0,o.kt)("h3",{id:"will-your-users-multi-task-on-this-device-choose-perspective"},"Will your users multi-task on this device? Choose Perspective"),(0,o.kt)("p",null,"Perspective is a javascript-based tech stack and relies on a web browser to display the application. Vision is a Java-based application and was originally built for dedicated HMI panels and makes assumptions that the host machine will be wholly dedicated to your application. If your user will sometimes want to minimize the HMI to use another application on the operating system, you should choose Perspective."),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);