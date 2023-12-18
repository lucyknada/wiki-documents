"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90225],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>b});var o=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,o,i=function(t,e){if(null==t)return{};var r,o,i={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=o.createContext({}),u=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,l=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=u(r),g=i,b=d["".concat(l,".").concat(g)]||d[g]||p[g]||n;return r?o.createElement(b,s(s({ref:e},c),{},{components:r})):o.createElement(b,s({ref:e},c))}));function b(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,s=new Array(n);s[0]=g;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[d]="string"==typeof t?t:i,s[1]=a;for(var u=2;u<n;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},13902:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>u});var o=r(87462),i=(r(67294),r(3905));const n={description:"reRouter Guide",title:"reRouter Guide",keywords:["reRouter"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reRouter_Intro",last_update:{date:"10/16/2023",author:"Kasun Thushara"}},s=void 0,a={unversionedId:"Network/RaspberryPi_Devices/reRouter/reRouter_Intro",id:"Network/RaspberryPi_Devices/reRouter/reRouter_Intro",title:"reRouter Guide",description:"reRouter Guide",source:"@site/docs/Network/RaspberryPi_Devices/reRouter/reRouter_Intro.md",sourceDirName:"Network/RaspberryPi_Devices/reRouter",slug:"/reRouter_Intro",permalink:"/reRouter_Intro",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/RaspberryPi_Devices/reRouter/reRouter_Intro.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1697414400,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{description:"reRouter Guide",title:"reRouter Guide",keywords:["reRouter"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reRouter_Intro",last_update:{date:"10/16/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP LoRaWAN Starter Kit Getting Started",permalink:"/M2_Kit_Getting_Started"},next:{title:"reRouter Introduction",permalink:"/Raspberry-OpenWrt-Getting-Started"}},l={},u=[{value:"Getting Started with reRouter",id:"getting-started-with-rerouter",level:2},{value:"Application",id:"application",level:2},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:u},d="wrapper";function p(t){let{components:e,...r}=t;return(0,i.kt)(d,(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png",style:{width:500,height:"auto"}})),(0,i.kt)("p",null,"This Mini Router is equipped with dual Gigabit Ethernet ports and dual USB 3.0 ports, making it suitable for soft router applications, while keeping the hardware to a minimum. We have pre-installed a Raspberry Pi Compute Module 4 with 4GB RAM and 32GB eMMC to enable fast boot-up times and a smooth overall experience."),(0,i.kt)("h2",{id:"getting-started-with-rerouter"},"Getting Started with reRouter"),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{class:"table-nobg"},(0,i.kt)("tr",{class:"table-trnobg"},(0,i.kt)("th",{class:"table-trnobg"},"Getting Started with OpenWrt on Your Router"),(0,i.kt)("th",{class:"table-trnobg"},"reRouter carrier board - Hardware Overview")),(0,i.kt)("tr",{class:"table-trnobg"}),(0,i.kt)("tr",{class:"table-trnobg"},(0,i.kt)("td",{class:"table-trnobg"},(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router.png",style:{width:300,height:"auto"}}))),(0,i.kt)("td",{class:"table-trnobg"},(0,i.kt)("div",{sawakentyle:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/thumb.png",style:{width:300,height:"auto"}})))),(0,i.kt)("tr",{class:"table-trnobg"}),(0,i.kt)("tr",{class:"table-trnobg"},(0,i.kt)("td",{class:"table-trnobg",style:{textAlign:"justify"}},(0,i.kt)("font",{size:"2"},"In this wiki, explore OpenWrt\u2014an open-source Linux OS for routers and embedded devices. It offers enhanced features, performance, and security, with a customizable filesystem and package management. Accessing the router presents a beautiful, interactive dashboard. ")),(0,i.kt)("td",{class:"table-trnobg",style:{textAlign:"justify"}},(0,i.kt)("font",{size:"2"},"In this wiki, explore the hardware overview of a small-scale router\u2014the Dual Gigabit Carrier Board powered by Raspberry Pi Compute Module 4. With Dual Gigabit Ethernet ports, USB 3.0 ports, and various I/O peripherals, it's ideal for soft router applications while maintaining a compact form factor. Suitable for HTPC makers, Linux developers, and Raspberry Pi users. "))),(0,i.kt)("tr",{class:"table-trnobg"}),(0,i.kt)("tr",{class:"table-trnobg"},(0,i.kt)("td",{class:"table-trnobg"},(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Raspberry-OpenWrt-Getting-Started/"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,i.kt)("td",{class:"table-trnobg"},(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,i.kt)("h2",{id:"application"},"Application"),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{class:"table-nobg"},(0,i.kt)("tr",{class:"table-trnobg"},(0,i.kt)("th",{class:"table-trnobg"},"Getting Started with OpenWRT"),(0,i.kt)("th",{class:"table-trnobg"},"Plex Media Server"),(0,i.kt)("th",{class:"table-trnobg"},"Mender Usage")),(0,i.kt)("tr",{class:"table-trnobg"}),(0,i.kt)("tr",{class:"table-trnobg"},(0,i.kt)("td",{class:"table-trnobg"},(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png",style:{width:300,height:"auto"}}))),(0,i.kt)("td",{class:"table-trnobg"},(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg",style:{width:300,height:"auto"}}))),(0,i.kt)("td",{class:"table-trnobg"},(0,i.kt)("div",{sawakentyle:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mender.png",style:{width:300,height:"auto"}})))),(0,i.kt)("tr",{class:"table-trnobg"}),(0,i.kt)("tr",{class:"table-trnobg"},(0,i.kt)("td",{class:"table-trnobg",style:{textAlign:"justify"}},(0,i.kt)("font",{size:"2"},"In this wiki, we provide an in-depth view of OpenWrt, discussing its features in the GUI. Explore how to use OpenWrt as a soft router and a WiFi access point.")),(0,i.kt)("td",{class:"table-trnobg",style:{textAlign:"justify"}},(0,i.kt)("font",{size:"2"},"This guide explains setting up Plex Media Server as a Docker container on Seeed OpenWrt firmware. With Plex, you can stream your local media files globally. OpenWrt can run on the ODYSSEY \u2013 X86 Board or the Dual Gigabit Ethernet Carrier Board for Raspberry Pi Compute Module 4. ")),(0,i.kt)("td",{class:"table-trnobg",style:{textAlign:"justify"}},(0,i.kt)("font",{size:"2"},"In this wiki, set up the Mender Client on a Dual Gigabit Ethernet Carrier Board for Raspberry Pi Compute Module 4 and receive OTA updates from a Hosted or Self-Hosted Mender Server. "))),(0,i.kt)("tr",{class:"table-trnobg"}),(0,i.kt)("tr",{class:"table-trnobg"},(0,i.kt)("td",{class:"table-trnobg"},(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/OpenWrt-Getting-Started/"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,i.kt)("td",{class:"table-trnobg"},(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/OpenWrt-Plex-Media-Server-on-Docker/"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,i.kt)("td",{class:"table-trnobg"},(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Mender-Client-dual-GbE-CM4/"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,i.kt)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have a task list for updating this page, which is categorized under our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"contributor project"),", as we are dedicated to enhancing the user experience and providing better support through the development of our wiki platform."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962991"},"Your contribution to this page")," is essential to us! We really value your input and would greatly appreciate your assistance in generating ideas.")),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);