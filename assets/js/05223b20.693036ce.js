"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78939],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>_});var o=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,_=d["".concat(u,".").concat(m)]||d[m]||l[m]||n;return r?o.createElement(_,s(s({ref:t},p),{},{components:r})):o.createElement(_,s({ref:t},p))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=r(58168),a=(r(96540),r(15680));const n={description:"use IMX477 camera with A603 Jetson carrier board",title:"Use IMX477 Camera with A603 Jetson Carrier Board",keywords:["reComputer","IMX477 Camera","A603"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board",last_update:{date:"05/22/2024",author:"Youjiang"}},s=void 0,i={unversionedId:"Edge/NVIDIA_Jetson/FAQs/Use_IMX477_Camera_with_A603",id:"Edge/NVIDIA_Jetson/FAQs/Use_IMX477_Camera_with_A603",title:"Use IMX477 Camera with A603 Jetson Carrier Board",description:"use IMX477 camera with A603 Jetson carrier board",source:"@site/docs/Edge/NVIDIA_Jetson/FAQs/Use_IMX477_Camera_with_A603.md",sourceDirName:"Edge/NVIDIA_Jetson/FAQs",slug:"/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board",permalink:"/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/FAQs/Use_IMX477_Camera_with_A603.md",tags:[],version:"current",lastUpdatedBy:"Youjiang",lastUpdatedAt:1716336e3,formattedLastUpdatedAt:"May 22, 2024",frontMatter:{description:"use IMX477 camera with A603 Jetson carrier board",title:"Use IMX477 Camera with A603 Jetson Carrier Board",keywords:["reComputer","IMX477 Camera","A603"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board",last_update:{date:"05/22/2024",author:"Youjiang"}},sidebar:"ProductSidebar",previous:{title:"Solution for the Compatibility Issue between reComputer and VEYE Camera",permalink:"/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera"},next:{title:"EdgeBox-ESP-100 Getting Start with Arduino",permalink:"/Edgebox-ESP-100-Arduino"}},u={},c=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:c},d="wrapper";function l(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,o.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"If you need to use the IMX477 camera, please download ",(0,a.yg)("a",{parentName:"p",href:"https://nv-jetson-images.oss-us-west-1.aliyuncs.com/A603/A603_JP5.1.2_IMX477.zip?OSSAccessKeyId=LTAI5tKm7UD2hmuFW85cz42T&Expires=2716365967&Signature=YMt2c0DbGhA9S9WOAEJ97HqIXXE%3D"},"this driver package")," and follow ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reComputer_A603_Flash_System/"},"this tutorial")," to reflash the Jetpack system."),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Please note that you need to use the BSP for ",(0,a.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r3541"}," ",(0,a.yg)("strong",{parentName:"a"},"JP5.1.2")," "),".")),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}l.isMDXComponent=!0}}]);