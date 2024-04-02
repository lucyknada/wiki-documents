"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2612],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?o.createElement(h,s(s({ref:t},u),{},{components:r})):o.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={description:"A608 Carrier Board",title:"A608 Carrier Board",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_A608_Flash_System",last_update:{date:"01/19/2024",author:"Youjiang"}},s="Flash JetPack OS to A608 Carrier Board (NVIDIA Jetson Orin NX/Nano supported)",i={unversionedId:"Edge/NVIDIA_Jetson/reComputer/Other_Carrier_Boards/A608_Flash_JetPack",id:"Edge/NVIDIA_Jetson/reComputer/Other_Carrier_Boards/A608_Flash_JetPack",title:"A608 Carrier Board",description:"A608 Carrier Board",source:"@site/docs/Edge/NVIDIA_Jetson/reComputer/Other_Carrier_Boards/A608_Flash_JetPack.md",sourceDirName:"Edge/NVIDIA_Jetson/reComputer/Other_Carrier_Boards",slug:"/reComputer_A608_Flash_System",permalink:"/reComputer_A608_Flash_System",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/reComputer/Other_Carrier_Boards/A608_Flash_JetPack.md",tags:[],version:"current",lastUpdatedBy:"Youjiang",lastUpdatedAt:1705622400,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{description:"A608 Carrier Board",title:"A608 Carrier Board",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_A608_Flash_System",last_update:{date:"01/19/2024",author:"Youjiang"}},sidebar:"ProductSidebar",previous:{title:"Jetson Mate",permalink:"/Jetson-Mate"},next:{title:"How to Run a Local LLM Text-to-Image on reComputer",permalink:"/How_to_run_local_llm_text_to_image_on_reComputer"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enter Force Recovery Mode",id:"enter-force-recovery-mode",level:2},{value:"Download the system image package to the PC host",id:"download-the-system-image-package-to-the-pc-host",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"flash-jetpack-os-to-a608-carrier-board-nvidia-jetson-orin-nxnano-supported"},"Flash JetPack OS to A608 Carrier Board (NVIDIA Jetson Orin NX/Nano supported)"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.jpg"})),(0,n.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Jetson-A608-Carrier-Board-for-Orin-NX-Orin-Nano-Series-p-5853.html"},(0,n.kt)("strong",null,(0,n.kt)("span",null,(0,n.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,n.kt)("p",null,"In this wiki, we will show you how to flash Jetpack to an NVMe SSD and a USB Flash drive connected to the A608 Carrier Board which supports both NVIDIA Jetson Orin NX module and NVIDIA Jetson Orin Nano module."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ubuntu Host PC "),(0,n.kt)("li",{parentName:"ul"},"A608 Carrier Board with Jetson Orin NX or Jetson Orin Nano module"),(0,n.kt)("li",{parentName:"ul"},"USB Type-C data transmission cable")),(0,n.kt)("h2",{id:"enter-force-recovery-mode"},"Enter Force Recovery Mode"),(0,n.kt)("p",null,"Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Turn off the system power, please ensure that the power is turned off instead of entering standby mode."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Use the Type C to USB Type A cable to connect the carrier and host."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Use the GH1.25MM locking terminal wire to short-circuit pin1 and pin2 at Recovery to make it enter recovery mode."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/hardware_connection.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Power up the device."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5.")," On the Linux host PC, open a Terminal window and enter the command ",(0,n.kt)("inlineCode",{parentName:"p"},"lsusb"),". If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For Orin NX 16GB: ",(0,n.kt)("strong",{parentName:"li"},"0955:7323 NVidia Corp")),(0,n.kt)("li",{parentName:"ul"},"For Orin NX 8GB: ",(0,n.kt)("strong",{parentName:"li"},"0955:7423 NVidia Corp")),(0,n.kt)("li",{parentName:"ul"},"For Orin Nano 8GB: ",(0,n.kt)("strong",{parentName:"li"},"0955:7523 NVidia Corp")),(0,n.kt)("li",{parentName:"ul"},"For Orin Nano 4GB: ",(0,n.kt)("strong",{parentName:"li"},"0955:7623 NVidia Corp"))),(0,n.kt)("p",null,"The below image is for Orin NX 8GB"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/lsusb.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 6.")," Remove the short-circuit wire"),(0,n.kt)("h2",{id:"download-the-system-image-package-to-the-pc-host"},"Download the system image package to the PC host"),(0,n.kt)("p",null,"Here we will use NVIDIA L4T 35.3.1 to install Jetpack 5.1.1 on the A608 Carrier Board with Jetson Orin NX module."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r3531"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/nvidia_driver.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," ",(0,n.kt)("a",{parentName:"p",href:"https://nv-jetson-images.oss-us-west-1.aliyuncs.com/A608/a608_jp511.tar.gz?OSSAccessKeyId=LTAI5tKm7UD2hmuFW85cz42T&Expires=4861269491&Signature=801mYzDJxj5g68Vqo2H4k7VVLkM%3D"},"Download")," peripheral drivers and put all the drivers in same folder."),(0,n.kt)("p",null,"Now you will see three compressed files in the same folder:"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/drivers.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Prepare system image."),(0,n.kt)("p",null,"Open a terminal window on the host PC and run the following command\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd <path to drivers>\nsudo apt install unzip \ntar xf Jetson_Linux_R35.3.1_aarch64.tbz2\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\ncd ..\ntar -zxvf a608_jp511.tar.gz\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Flash the system to A608."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flash to NVMe",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n'))),(0,n.kt)("li",{parentName:"ul"},"Flash to USB",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n'))),(0,n.kt)("li",{parentName:"ul"},"Flash to SD",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n')))),(0,n.kt)("p",null,"You will see the following output if the flashing process is successful."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flash.png"})),(0,n.kt)("p",null,"After flashing, power on Jetson Device again and log into the system."),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);