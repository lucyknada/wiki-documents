"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const r={description:"ODYSSEY - X86J41x5",title:"Android-x86 Installation",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86J4105-Installing-Android",last_update:{date:"01/03/2023",author:"w0x7ce"}},a=void 0,l={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-Android",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-Android",title:"Android-x86 Installation",description:"ODYSSEY - X86J41x5",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-Android.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation",slug:"/ODYSSEY-X86J4105-Installing-Android",permalink:"/ODYSSEY-X86J4105-Installing-Android",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-Android.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"ODYSSEY - X86J41x5",title:"Android-x86 Installation",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86J4105-Installing-Android",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"TrueNAS Installation",permalink:"/ODYSSEY-X86-TrueNAS"},next:{title:"FreeNAS Installation",permalink:"/ODYSSEY-X86J4105-Installing-FreeNAS"}},s={},d=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Download the Android-x86 OS Image",id:"download-the-android-x86-os-image",level:2},{value:"Creating a Bootable USB",id:"creating-a-bootable-usb",level:2},{value:"Step 1 - Prepare your Bootable USB",id:"step-1---prepare-your-bootable-usb",level:3},{value:"Step 2 - Download Flash Burner",id:"step-2---download-flash-burner",level:3},{value:"Step 3 - Writing the OS Image into USB",id:"step-3---writing-the-os-image-into-usb",level:3},{value:"Installing the Android-x86",id:"installing-the-android-x86",level:2},{value:"Step 1 - Enabling CSM Mode in ODYSSEY - X86J41x5",id:"step-1---enabling-csm-mode-in-odyssey---x86j41x5",level:3},{value:"Step 2 - Install the OS",id:"step-2---install-the-os",level:3},{value:"Step 3 - Installing process",id:"step-3---installing-process",level:3},{value:"Configurations",id:"configurations",level:2},{value:"Setting up as Smart TV Box",id:"setting-up-as-smart-tv-box",level:2},{value:"Download and Install KODI for Android-x86",id:"download-and-install-kodi-for-android-x86",level:3},{value:"Kodi IPTV Settings",id:"kodi-iptv-settings",level:3},{value:"Boot from Start-up",id:"boot-from-start-up",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/BBC.png"})),(0,i.kt)("p",null,"This tutorial demonstrates how to install the Android-x86 on the ODYSSEY-X86J41x5 and use it as a smart TV box to watch live stream TV or media from local storage(such as NAS) with the help of ",(0,i.kt)("a",{parentName:"p",href:"https://kodi.tv/"},"Kodi"),"."),(0,i.kt)("p",null,'The Android-x86 is a project to port Android open source project to x86 platform, formerly known as "patch hosting for android x86 support". For more reference, please visit the official ',(0,i.kt)("a",{parentName:"p",href:"https://www.android-x86.org/"},"Android-x86"),"."),(0,i.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A Working Computer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"USB Drive x 1 (>= 8GB is recommended)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A Monitor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Keyboard"))),(0,i.kt)("h2",{id:"download-the-android-x86-os-image"},"Download the Android-x86 OS Image"),(0,i.kt)("p",null,"First, download the ",(0,i.kt)("a",{parentName:"p",href:"https://www.android-x86.org/download.html"},"Android-x86 OS Image")," into your drive. It should be a ",(0,i.kt)("inlineCode",{parentName:"p"},".iso")," file."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/download.png"})),(0,i.kt)("p",null,"In this tutorial, ",(0,i.kt)("inlineCode",{parentName:"p"},"android-x86-7.1-r4-k419")," is used."),(0,i.kt)("h2",{id:"creating-a-bootable-usb"},"Creating a Bootable USB"),(0,i.kt)("h3",{id:"step-1---prepare-your-bootable-usb"},"Step 1 - Prepare your Bootable USB"),(0,i.kt)("p",null,"Format one of the USB drive. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select ",(0,i.kt)("inlineCode",{parentName:"p"},"Format"),".  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"FAT32")," for the File System."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:450,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png"})),(0,i.kt)("h3",{id:"step-2---download-flash-burner"},"Step 2 - Download Flash Burner"),(0,i.kt)("p",null,"Download the Open Source Flash burner ",(0,i.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"balenaEtcher"),". Download the version according to your operating system(Windows/macOS/Linux)."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg"})),(0,i.kt)("h3",{id:"step-3---writing-the-os-image-into-usb"},"Step 3 - Writing the OS Image into USB"),(0,i.kt)("p",null,"Select the downloaded Operating System Image, select the formatted USB Drive and Flash! Now, the bootable USB is all set to go."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png"})),(0,i.kt)("h2",{id:"installing-the-android-x86"},"Installing the Android-x86"),(0,i.kt)("h3",{id:"step-1---enabling-csm-mode-in-odyssey---x86j41x5"},"Step 1 - Enabling CSM Mode in ODYSSEY - X86J41x5"),(0,i.kt)("p",null,"Plugin your bootable USB, Monitor and keyboard to ODYSSEY - X86J41x5, and power up. When booting up, keep pressing ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"DEL"))," key to enter the setup screen. Navigate to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Advanced"))," -> ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"CSM Support"))," and press Enter to enable it."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg"})),(0,i.kt)("h3",{id:"step-2---install-the-os"},"Step 2 - Install the OS"),(0,i.kt)("p",null,"Reboot your ODYSSEY - X86J41x5 and keep pressing ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"F7"))," to enter the boot manager screen. Select the bootable USB (Installer) and press Enter."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Remember to choose the one that has the Android-x86 iso image on it."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg"})),(0,i.kt)("h3",{id:"step-3---installing-process"},"Step 3 - Installing process"),(0,i.kt)("p",null,"Under ",(0,i.kt)("strong",{parentName:"p"},"GRUB options"),", select ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced options"),":"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/1.png"})),(0,i.kt)("p",null,"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Android-x86** Auto Install to specific harddisk"),":"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/2.png"})),(0,i.kt)("p",null,"This goes into the installation process and you can choose where the Android-x86 is installed on ODYSSEY-X86. Here is installed onto the onboard eMMC."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/3.png"})),(0,i.kt)("p",null,"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Yes")," for confirmation:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/\nODYSSEY-X86J4105-Installing-Android/4.png"})),(0,i.kt)("p",null,"Now, the installing process is taking place and once it's done, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Reboot"),":"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/5.png"})),(0,i.kt)("p",null,"Take out the bootable USB and reboot the device. Android-x86 should be booted up."),(0,i.kt)("p",null,"!!!Note\nIf not booted up properly, please press F7 and select the drive you installed Android-x86 to boot from."),(0,i.kt)("h2",{id:"configurations"},"Configurations"),(0,i.kt)("p",null,"If everything goes well, you will booted into the Android-x86 like the screen below:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/home.png"})),(0,i.kt)("p",null,"This may look familiar with people who use Android phones!"),(0,i.kt)("h2",{id:"setting-up-as-smart-tv-box"},"Setting up as Smart TV Box"),(0,i.kt)("p",null,"To get ODYSSEY-X86J41x5 to work as a smart TV Box, we will need to install ",(0,i.kt)("a",{parentName:"p",href:"https://kodi.tv/"},"Kodi"),"."),(0,i.kt)("p",null,"Kodi is a free, open source piece of media centre software that can run on anything from your Android phone to your home PC, and plenty of other devices in between. And of course it supports Android-x86!"),(0,i.kt)("h3",{id:"download-and-install-kodi-for-android-x86"},"Download and Install KODI for Android-x86"),(0,i.kt)("p",null,"You can download the ",(0,i.kt)("a",{parentName:"p",href:"https://mirrors.kodi.tv/releases/android/x86/"},"Kodi for Android-x86 here"),". You may want to download it from another PC and save the ",(0,i.kt)("inlineCode",{parentName:"p"},".apk")," file into a USB drive and install the app from USB."),(0,i.kt)("h3",{id:"kodi-iptv-settings"},"Kodi IPTV Settings"),(0,i.kt)("p",null,"Open ",(0,i.kt)("strong",{parentName:"p"},"Kodi")," and navigate to ",(0,i.kt)("strong",{parentName:"p"},"TV")," -> ",(0,i.kt)("strong",{parentName:"p"},"More Add-on"),":"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/add-on.png"})),(0,i.kt)("p",null,"Choose ",(0,i.kt)("strong",{parentName:"p"},"PVR clients"),":"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/PVR.png"})),(0,i.kt)("p",null,"Select ",(0,i.kt)("strong",{parentName:"p"},"PVR IPTV Simple Client"),":"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/iptv.png"})),(0,i.kt)("p",null,"Select ",(0,i.kt)("strong",{parentName:"p"},"configure")," and type in the ",(0,i.kt)("strong",{parentName:"p"},"IPTV streaming ",(0,i.kt)("inlineCode",{parentName:"strong"},"m3u")," url"),". You may check this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iptv-org/iptv/blob/master/README.md"},(0,i.kt)("inlineCode",{parentName:"a"},"iptv repo"))," for reference. Select ",(0,i.kt)("strong",{parentName:"p"},"OK")," and remember to ",(0,i.kt)("strong",{parentName:"p"},"enable"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/config.png"})),(0,i.kt)("p",null,"REboot the Kodi and you should have channels loaded! Now you have truned your ODYSSEY-X86 into a Smart TV Box!"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/live.png"})),(0,i.kt)("h3",{id:"boot-from-start-up"},"Boot from Start-up"),(0,i.kt)("p",null,"If you want the ODYSSEY-X86 to boot Kodi from boot up, you can simply achieve this by installing ",(0,i.kt)("inlineCode",{parentName:"p"},"Boot apps")," from the Google Play Store!"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/boot.png"})),(0,i.kt)("p",null,"Install the app and select Kodi as boot from start apps!"),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://kodi.tv/"},"Kodi"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://troypoint.com/how-to-use-kodi/"},"How To Use Kodi \u2013 Everything You Need To Know for Unlimited Streaming")))),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);