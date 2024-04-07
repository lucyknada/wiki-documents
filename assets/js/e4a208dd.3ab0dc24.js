"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={description:"Deploy AI model with Lumeo on NVIDIA Jetson Devices",title:"Getting Started with Lumeo",tags:["AI model deploy"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Lumeo-Jetson-Getting-Started",last_update:{date:"03/10/2023",author:"Lakshantha"}},r="Getting Started with Lumeo on NVIDIA\xae Jetson Devices",s={unversionedId:"Edge/NVIDIA_Jetson/Application/Managed_Services/Lumeo-Jetson-Getting-Started",id:"Edge/NVIDIA_Jetson/Application/Managed_Services/Lumeo-Jetson-Getting-Started",title:"Getting Started with Lumeo",description:"Deploy AI model with Lumeo on NVIDIA Jetson Devices",source:"@site/docs/Edge/NVIDIA_Jetson/Application/Managed_Services/Lumeo-Jetson-Getting-Started.md",sourceDirName:"Edge/NVIDIA_Jetson/Application/Managed_Services",slug:"/Lumeo-Jetson-Getting-Started",permalink:"/Lumeo-Jetson-Getting-Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Application/Managed_Services/Lumeo-Jetson-Getting-Started.md",tags:[{label:"AI model deploy",permalink:"/tags/ai-model-deploy"}],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1678406400,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{description:"Deploy AI model with Lumeo on NVIDIA Jetson Devices",title:"Getting Started with Lumeo",tags:["AI model deploy"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Lumeo-Jetson-Getting-Started",last_update:{date:"03/10/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with Docker",permalink:"/jetson-docker-getting-started"},next:{title:"Getting started of NEQTO Engine for Linux on reComputer J30",permalink:"/neqto_engine_for_linux_recomputer"}},l={},p=[{value:"Hardware supported",id:"hardware-supported",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Lumeo Account",id:"create-a-lumeo-account",level:2},{value:"Install Lumeo Gateway on NVIDIA Jetson",id:"install-lumeo-gateway-on-nvidia-jetson",level:2},{value:"Add cameras to the gateway",id:"add-cameras-to-the-gateway",level:2},{value:"Build a people detection pipeline",id:"build-a-people-detection-pipeline",level:2},{value:"Learn more",id:"learn-more",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-lumeo-on-nvidia-jetson-devices"},"Getting Started with Lumeo on NVIDIA\xae Jetson Devices"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/thumb.gif"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://lumeo.com"},"Lumeo")," is a no-code video analytics platform that enables you to rapidly design, deploy, and monitor custom video analytics and other vision-AI enabled applications."),(0,a.kt)("p",null,"This wiki will walkthrough how you can easily install Lumeo on the NVIDIA Jetson platform and set it up as a gateway so that you will be able to execute pipelines and process video from Streams, IP Cameras on the same network, or attached USB cameras."),(0,a.kt)("h2",{id:"hardware-supported"},"Hardware supported"),(0,a.kt)("p",null,"Lumeo is supported by the following platforms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NVIDIA Jetson"),(0,a.kt)("li",{parentName:"ul"},"x86 server with Nvidia GPU"),(0,a.kt)("li",{parentName:"ul"},"GPU instance in AWS, GCP, Azure, etc")),(0,a.kt)("p",null,"However, we will only focus on how to deploy Lumeo on the NVIDIA Jetson platform in this wiki"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"NVIDIA Jetson device running NVIDIA JetPack with all SDK components installed and connected to the internet"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We have tested this wiki with ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"reComputer J4012")," running ",(0,a.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/jetpack-sdk-51"},"JetPack 5.1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Host PC with Windows, Linux or Mac and connected to the internet"))),(0,a.kt)("h2",{id:"create-a-lumeo-account"},"Create a Lumeo Account"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Visit ",(0,a.kt)("a",{parentName:"p",href:"https://console.lumeo.com/register"},"this page"),", enter email, password, click the checkbox to agree to the terms and click ",(0,a.kt)("strong",{parentName:"p"},"Sign up")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/9.jpg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," After signing up for a new account, you can sign in to your account with the email and the password created before by visiting ",(0,a.kt)("a",{parentName:"p",href:"https://console.lumeo.com/login"},"this page")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Emter an ",(0,a.kt)("strong",{parentName:"p"},"organization name")," and ",(0,a.kt)("strong",{parentName:"p"},"workspace name")," and click ",(0,a.kt)("strong",{parentName:"p"},"Start using Lumeo")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:350,src:"https://files.seeedstudio.com/wiki/Lumeo/10.png"})),(0,a.kt)("p",null,"Now you will see the Lumeo console as follows"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/11.jpg"})),(0,a.kt)("h2",{id:"install-lumeo-gateway-on-nvidia-jetson"},"Install Lumeo Gateway on NVIDIA Jetson"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Run the installer script inside the Jetson device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"bash <(wget -qO- https://link.lumeo.com/setup)\n")),(0,a.kt)("p",null,"Respond to the prompts in the installer script according to your needs. You can keep everything to default here"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/1.png"})),(0,a.kt)("p",null,"If you see the below output, that means the installer has successfully completed"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/2.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Type ",(0,a.kt)("strong",{parentName:"p"},"Install")," next to the prompt ",(0,a.kt)("strong",{parentName:"p"},"Enter the command:")," to install a new container which includes the gateway"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Enter the command: \ninstall\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," A free Lumeo account only allows one gateway to be deployed. So you first need to delete the default cloud gateway which comes with Lumeo before deploying your own gateway on the Jetson device. Simply enter the pre-loaded cloud gateway and click ",(0,a.kt)("strong",{parentName:"p"},"Delete")," to delete that gateway."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Enter a name for the container when prompted and login with your Lumeo account credentials when prompted"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/4.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/12.jpg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," After the container installation is finished, type ",(0,a.kt)("strong",{parentName:"p"},"list")," to list the container that you just installed"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/5.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5:")," Type ",(0,a.kt)("strong",{parentName:"p"},"exit")," to quit the running script"),(0,a.kt)("p",null,"Now you have successfully installed Lumeo Gateway on the NVIDIA Jetson. If you go to Lumeo console and navigate to ",(0,a.kt)("strong",{parentName:"p"},"Gateways"),", you will see the newly deployed Jetson-powered gateway."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/13.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Click on the Gateway to view additional information about the gateway"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/14.jpg"})),(0,a.kt)("h2",{id:"add-cameras-to-the-gateway"},"Add cameras to the gateway"),(0,a.kt)("p",null,"Now we will add cameras to gateway that we have already setup on the Jetson device"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Connect a USB camera to one of the USB ports on the Jetson device or connect an ONVIF camera to the same network as the Jetson device"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Under the Gateway that we setup before, click ",(0,a.kt)("strong",{parentName:"p"},"Add Camera")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/15.jpg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," It will try to auto discover all the connected USB cameras and the ONVIF cameras on the same network. Click on ",(0,a.kt)("strong",{parentName:"p"},"Link")," next to a camera to add the camera to the gateway"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/16.png"})),(0,a.kt)("p",null,"If none of the connected cameras are detected, click Discover to start the auto detect process again. If that also fails, click on ",(0,a.kt)("strong",{parentName:"p"},"+ Manually add cameras")," and confgure all your cameras"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/17.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Enter a ",(0,a.kt)("strong",{parentName:"p"},"Camera name"),", provide camera credentials if it is needed by the camera and finally click ",(0,a.kt)("strong",{parentName:"p"},"Connect camera")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Lumeo/18.png"})),(0,a.kt)("p",null,"Now you will see the camera successfully linked "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/19.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5:")," Click on the linked camera to output a preview snapshot as follows"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/20.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 6:")," If you want to add RTSP or HTTP streams, you can navigate to ",(0,a.kt)("strong",{parentName:"p"},"Deploy > Streams"),", click ",(0,a.kt)("strong",{parentName:"p"},"Add input stream")," and configure the stream"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/21.jpg"})),(0,a.kt)("h2",{id:"build-a-people-detection-pipeline"},"Build a people detection pipeline"),(0,a.kt)("p",null,"Lumeo offers many different solutions out-of-the-box with pre-configured pipelines and pre-loaded models. We will try to create a simple people detection application using Lumeo."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Select ",(0,a.kt)("strong",{parentName:"p"},"Basics - Detect Objects")," inside ",(0,a.kt)("strong",{parentName:"p"},"Design > Solutions")," section"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/22.jpg"})),(0,a.kt)("p",null,"Now you will see the template created for you in a block-based style which allows you to add more customizations and features to the solution. Here you can add, modify or remove blocks according to your preference"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/23.jpg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," This template by default loads a ",(0,a.kt)("strong",{parentName:"p"},"people detection")," model, tracks the objects, enclode the video and stream via WebRTC. We will keep all the configured blocks to default and click ",(0,a.kt)("strong",{parentName:"p"},"Deploy")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Lumeo/24.jpg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Under ",(0,a.kt)("strong",{parentName:"p"},"Select Gateway"),", choose the gateway that you have deployed on the Jetson, select the camera that you have configured before and click ",(0,a.kt)("strong",{parentName:"p"},"Deploy")," to start deploying the application to the Jetson device"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/25.png"})),(0,a.kt)("p",null,"If the deployment is successful, you will see a green icon named ",(0,a.kt)("strong",{parentName:"p"},"running"),"\nas follows"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/26.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Click on the ",(0,a.kt)("strong",{parentName:"p"},"play button")," to view the output stream via WebRTC"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Lumeo/27.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/28.png"})),(0,a.kt)("h2",{id:"learn-more"},"Learn more"),(0,a.kt)("p",null,"Lumeo offers very detailed and comprehensive documentation. So it is highly recommended to check them ",(0,a.kt)("a",{parentName:"p",href:"https://docs.lumeo.com"},"here"),"."),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);