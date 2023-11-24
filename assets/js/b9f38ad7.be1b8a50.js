"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},S=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),S=r,m=d["".concat(s,".").concat(S)]||d[S]||c[S]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=S;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}S.displayName="MDXCreateElement"},76271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={description:"ODYSSEY - X86J41x5",title:"Original OS",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86J4105-Installing-OS",last_update:{date:"01/03/2023",author:"w0x7ce"}},i=void 0,l={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-OS",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-OS",title:"Original OS",description:"ODYSSEY - X86J41x5",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-OS.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation",slug:"/ODYSSEY-X86J4105-Installing-OS",permalink:"/ODYSSEY-X86J4105-Installing-OS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-OS.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"ODYSSEY - X86J41x5",title:"Original OS",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86J4105-Installing-OS",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Frigate",permalink:"/ODYSSEY-X86J4105-Frigate"},next:{title:"Firmware Upgrade",permalink:"/ODYSSEY-X86J4105-Updating-Firmware"}},s={},u=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Creating a Bootable USB",id:"creating-a-bootable-usb",level:2},{value:"Step 1 - Download the Operating System Image",id:"step-1---download-the-operating-system-image",level:3},{value:"Step 2 - Prepare your Bootable USB",id:"step-2---prepare-your-bootable-usb",level:3},{value:"Step 3 - Download Flash Burner",id:"step-3---download-flash-burner",level:3},{value:"Step 4 - Writing the OS Image into USB",id:"step-4---writing-the-os-image-into-usb",level:3},{value:"Installing Operating System (Ubuntu)",id:"installing-operating-system-ubuntu",level:2},{value:"Step 1 - Selecting Bootable USB as Boot Device",id:"step-1---selecting-bootable-usb-as-boot-device",level:3},{value:"Step 2 - Installing the OS",id:"step-2---installing-the-os",level:3},{value:"Step 3 - Reboot and Enjoy New OS",id:"step-3---reboot-and-enjoy-new-os",level:3},{value:"Notes",id:"notes",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial demonstrates how to create a bootable USB drive and install Linux OS(Ubuntu Desktop 18.04) onto the ODYSSEY - X86J41x5."),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Working Computer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A USB Drive(>= 8GB is recommended)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Monitor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Keyboard and Mouse"))),(0,r.kt)("h2",{id:"creating-a-bootable-usb"},"Creating a Bootable USB"),(0,r.kt)("h3",{id:"step-1---download-the-operating-system-image"},"Step 1 - Download the Operating System Image"),(0,r.kt)("p",null,"Download your required OS Image to your local drive. In this tutorial, ",(0,r.kt)("em",{parentName:"p"},"Ubuntu Desktop 18.04")," is used to demonstrate to install into the ODYSSEY - X86J41x5."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can download ",(0,r.kt)("a",{parentName:"li",href:"https://ubuntu.com/download/desktop"},"Ubuntu")," OS Image from here.")),(0,r.kt)("h3",{id:"step-2---prepare-your-bootable-usb"},"Step 2 - Prepare your Bootable USB"),(0,r.kt)("p",null,"Format the USB drive. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Format"),".  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"FAT32")," for the File System."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:450,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png"})),(0,r.kt)("h3",{id:"step-3---download-flash-burner"},"Step 3 - Download Flash Burner"),(0,r.kt)("p",null,"Download the Open Source Flash burner ",(0,r.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"balenaEtcher"),". Download the version according to your operating system(Windows/macOS/Linux)."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg"})),(0,r.kt)("h3",{id:"step-4---writing-the-os-image-into-usb"},"Step 4 - Writing the OS Image into USB"),(0,r.kt)("p",null,"Select the downloaded Operating System Image, select the formatted USB Drive and Flash! Now, the bootable USB is all set to go."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png"})),(0,r.kt)("h2",{id:"installing-operating-system-ubuntu"},"Installing Operating System (Ubuntu)"),(0,r.kt)("h3",{id:"step-1---selecting-bootable-usb-as-boot-device"},"Step 1 - Selecting Bootable USB as Boot Device"),(0,r.kt)("p",null,"Plug in your bootable USB, Monitor and keyboard to ODYSSEY - X86J41x5, and power up. When booting up, keep pressing ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"F7"))," to enter the Boot Manager Screen. And use  ","\u2191"," and ","\u2193"," Key on keyboard to select your bootable USB."),(0,r.kt)("p",null,"In this Tutorial, ",(0,r.kt)("inlineCode",{parentName:"p"},"UEFI: Mass Storage Device 1.00")," is the bootable USB."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/bios.png"})),(0,r.kt)("h3",{id:"step-2---installing-the-os"},"Step 2 - Installing the OS"),(0,r.kt)("p",null,"Select the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Install ubuntu"))," and press Enter. Follow through the installing instructions on the screen, i.e. system language, user name, location and etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," For detail steps of Installing ubuntu, you can follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=vt5Lu_ltPkU"},"this")," video for more information. ",(0,r.kt)("em",{parentName:"p"},"The Installing part starts at 3:20 in the video.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/install.png"})),(0,r.kt)("h3",{id:"step-3---reboot-and-enjoy-new-os"},"Step 3 - Reboot and Enjoy New OS"),(0,r.kt)("p",null,"If everything goes well, ubuntu should be installed on the ODYSSEY - X86J41x5 and you can start enjoying your new OS!"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/result.jpg"})),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ubuntu 16 is not supported by ODYSSEY - X86J41x5"))),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);