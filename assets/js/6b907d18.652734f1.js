"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[66003],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?i.createElement(h,a(a({ref:t},u),{},{components:r})):i.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const o={description:"XIAO SAMD21 With Zephyr(RTOS)",title:"XIAO SAMD21 With Zephyr(RTOS)",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"XIAO-SAMD21-Zephyr-RTOS",last_update:{date:"7/26/2023",author:"yulu Ji"}},a="XIAO SAMD21 With Zephyr(RTOS)",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SAMD21-Zephyr-RTOS",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SAMD21-Zephyr-RTOS",title:"XIAO SAMD21 With Zephyr(RTOS)",description:"XIAO SAMD21 With Zephyr(RTOS)",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SAMD21-Zephyr-RTOS.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21",slug:"/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SAMD21-Zephyr-RTOS",permalink:"/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SAMD21-Zephyr-RTOS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SAMD21-Zephyr-RTOS.md",tags:[],version:"current",lastUpdatedBy:"yulu Ji",lastUpdatedAt:1690329600,formattedLastUpdatedAt:"Jul 26, 2023",frontMatter:{description:"XIAO SAMD21 With Zephyr(RTOS)",title:"XIAO SAMD21 With Zephyr(RTOS)",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"XIAO-SAMD21-Zephyr-RTOS",last_update:{date:"7/26/2023",author:"yulu Ji"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with Seeed Studio XIAO SAMD21",permalink:"/Seeeduino-XIAO"},next:{title:"Nanase",permalink:"/Seeeduino-XIAO-by-Nanase"}},l={},p=[{value:"What is RTOS",id:"what-is-rtos",level:2},{value:"What is Zephyr",id:"what-is-zephyr",level:2},{value:"Feature",id:"feature",level:2},{value:"Extensive suite of Kernel services",id:"extensive-suite-of-kernel-services",level:3},{value:"Multiple Scheduling Algorithms",id:"multiple-scheduling-algorithms",level:3},{value:"Bluetooth Low Energy 5.0 support",id:"bluetooth-low-energy-50-support",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"xiao-samd21-with-zephyrrtos"},"XIAO SAMD21 With Zephyr(RTOS)"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{100}",src:"https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-samd21.png"})),(0,n.kt)("h2",{id:"what-is-rtos"},"What is RTOS"),(0,n.kt)("p",null,"One of the most important components of today's embedded systems is the ",(0,n.kt)("strong",{parentName:"p"},"RTOS")," also known as ",(0,n.kt)("strong",{parentName:"p"},"Real-Time Operating System"),", which is responsible for everything from task scheduling to performing applications."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"RTOS")," is designed to provide a predictable execution mode. When the processing must meet the time limit of the system, RTOS is used. Therefore, compared with GPOS (General Purpose Operating System), RTOS is usually light in weight and small in size, and generally only provides functions required to run specific types of applications on specific hardware. In some cases, developers can modify the existing RTOS, narrow it down to only provide the functionality required by a specific application, and/or customize its functionality or performance characteristics."),(0,n.kt)("h2",{id:"what-is-zephyr"},"What is ",(0,n.kt)("a",{parentName:"h2",href:"https://www.zephyrproject.org/"},"Zephyr")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{200}",src:"https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"})),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://www.zephyrproject.org/"},(0,n.kt)("strong",{parentName:"a"},"Zephyr"))," OS is based on a small-footprint kernel designed for use on resource-constrained and embedded systems: from simple embedded environmental sensors and LED wearables to sophisticated embedded controllers, smart watches, and IoT wireless applications."),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("p",null,"Zephyr offers a large and ever growing number of features including:"),(0,n.kt)("h3",{id:"extensive-suite-of-kernel-services"},"Extensive suite of Kernel services"),(0,n.kt)("p",null,"Zephyr offers a number of familiar services for development:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Multi-threading Services")," for cooperative, priority-based, non-preemptive, and preemptive threads with optional round robin time-slicing. Includes POSIX pthreads compatible API support."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Interrupt Services")," for compile-time registration of interrupt handlers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Memory Allocation Services")," for dynamic allocation and freeing of fixed-size or variable-size memory blocks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Inter-thread Synchronization Services")," for binary semaphores, counting semaphores, and mutex semaphores."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Inter-thread Data Passing Services")," for basic message queues, enhanced message queues, and byte streams."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Power Management Services")," such as overarching, application or policy-defined, System Power Management and fine-grained, driver-defined, Device Power Management.")),(0,n.kt)("h3",{id:"multiple-scheduling-algorithms"},"Multiple Scheduling Algorithms"),(0,n.kt)("p",null,"  Zephyr provides a comprehensive set of thread scheduling choices: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cooperative and Preemptive Scheduling"),(0,n.kt)("li",{parentName:"ul"},"Earliest Deadline First (EDF)"),(0,n.kt)("li",{parentName:"ul"},"Meta IRQ scheduling implementing \u201cinterrupt bottom half\u201d or \u201ctasklet\u201d behavior"),(0,n.kt)("li",{parentName:"ul"},"Timeslicing: Enables time slicing between preemptible threads of equal priority"),(0,n.kt)("li",{parentName:"ul"},"Multiple queuing strategies:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Simple linked-list ready queue"),(0,n.kt)("li",{parentName:"ul"},"Red/black tree ready queue"),(0,n.kt)("li",{parentName:"ul"},"Traditional multi-queue ready queue")))),(0,n.kt)("h3",{id:"bluetooth-low-energy-50-support"},"Bluetooth Low Energy 5.0 support"),(0,n.kt)("p",null,"Bluetooth 5.0 compliant (ESR10) and Bluetooth Low Energy Controller support (LE Link Layer). Includes Bluetooth mesh and a Bluetooth qualification-ready Bluetooth controller."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Generic Access Profile (GAP) with all possible LE roles"),(0,n.kt)("li",{parentName:"ul"},"Generic Attribute Profile (GATT)"),(0,n.kt)("li",{parentName:"ul"},"Pairing support, including the Secure Connections feature from Bluetooth 4.2"),(0,n.kt)("li",{parentName:"ul"},"Clean HCI driver abstraction"),(0,n.kt)("li",{parentName:"ul"},"Raw HCI interface to run Zephyr as a Controller instead of a full Host stack"),(0,n.kt)("li",{parentName:"ul"},"Verified with multiple popular controllers"),(0,n.kt)("li",{parentName:"ul"},"Highly configurable")),(0,n.kt)("p",null,"Mesh Support:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Relay, Friend Node, Low-Power Node (LPN) and GATT Proxy features"),(0,n.kt)("li",{parentName:"ul"},"Both Provisioning bearers supported (PB-ADV & PB-GATT)"),(0,n.kt)("li",{parentName:"ul"},"Highly configurable, fitting in devices with at least 16k RAM")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Reference: ",(0,n.kt)("a",{parentName:"em",href:"https://docs.zephyrproject.org/latest/introduction/index.html#"},(0,n.kt)("strong",{parentName:"a"},"Zephyr Project")))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.zephyrproject.org/latest/boards/arm/seeeduino_xiao/doc/index.html"},"XIAO SAMD21 Zephyr(RTOS) Getting Started"))),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);