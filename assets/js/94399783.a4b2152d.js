"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18559],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(58168),r=(n(96540),n(15680));const i={description:"reComputer for Jetson Initiation",title:"reComputer for Jetson Initiation",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Jetson_Series_Initiation",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},a="reComputer for Jetson Initiation",l={unversionedId:"Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/reComputer_Jetson_Series_Initiation",id:"Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/reComputer_Jetson_Series_Initiation",title:"reComputer for Jetson Initiation",description:"reComputer for Jetson Initiation",source:"@site/docs/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/reComputer_Jetson_Series_Initiation.md",sourceDirName:"Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010",slug:"/reComputer_Jetson_Series_Initiation",permalink:"/reComputer_Jetson_Series_Initiation",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/reComputer_Jetson_Series_Initiation.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"reComputer for Jetson Initiation",title:"reComputer for Jetson Initiation",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Jetson_Series_Initiation",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Hardware Layout for reComputer Series",permalink:"/reComputer_Jetson_Series_Hardware_Layout"},next:{title:"Getting start with reComputer J1020v2",permalink:"/reComputer_J1020v2_with_Jetson_getting_start"}},s={},p=[{value:"1. Connect Peripherals",id:"1-connect-peripherals",level:2},{value:"2. Power Up",id:"2-power-up",level:2},{value:"3. Initial Setup",id:"3-initial-setup",level:2},{value:"Step 1: Wait for powering on",id:"step-1-wait-for-powering-on",level:3},{value:"Step 2: Review and accept the license",id:"step-2-review-and-accept-the-license",level:3},{value:"Step 3\uff1aChoose system language and keyboard layout",id:"step-3choose-system-language-and-keyboard-layout",level:3},{value:"Step 4: Connect to the network",id:"step-4-connect-to-the-network",level:3},{value:"Step 5: Configure user information and password",id:"step-5-configure-user-information-and-password",level:3},{value:"Step 6: Select the supply voltage",id:"step-6-select-the-supply-voltage",level:3},{value:"4. Get Started",id:"4-get-started",level:2},{value:"Install NVIDIA system on reComputer",id:"install-nvidia-system-on-recomputer",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Q1: The remaining space in the eMMC in the received reComputer is only about 2GB, how can I solve the problem of insufficient space?",id:"q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"recomputer-for-jetson-initiation"},"reComputer for Jetson Initiation"),(0,r.yg)("p",null,"All reComputer for Jetson are loaded 16 GB eMMC where ",(0,r.yg)("inlineCode",{parentName:"p"},"ubuntu 18.04 LTS")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"NVIDIA JetPack 4.6")," are both already installed. Follow the instructions, connect peripherals, you can power it up and directly use it in few seconds."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaijiss.png",alt:"pir",width:"auto",height:"auto"})),(0,r.yg)("h2",{id:"1-connect-peripherals"},"1. Connect Peripherals"),(0,r.yg)("p",null,"Connect the reComputer host to a USB-connected keyboard, mouse, and connect to the screen display via HDMI port or DP port (A206 carrier board only)."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji1.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For the reComputer host with both HDMI or DP interface, although it has two display output ports, it does not support dual display output, which means only one display output interface can be used at the same time.")),(0,r.yg)("h2",{id:"2-power-up"},"2. Power Up"),(0,r.yg)("p",null,"After connecting peripherals, connect power to the reComputer host."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The power supply of the ",(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},"reComputer J1010")," is powered by the Type-C interface, and the position of the power supply near the HDMI interface is shown in the figure below.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc1.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},"reComputer J1010")," has a Type-C port on the both sides, where the one on the right near the LAN port is the data transmission port. It is strictly forbidden to insert the Type-C power supply into the data transmission port on the right, which may cause damage to the components.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html"},"reComputer J1020"),", ",(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html"},"reComputer J2011"),", and ",(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html"},"reComputer J2012")," are powered by DC interface where is near the HDMI interface.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc2.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"After connecting to the power supply, the reComputer host will automatically power on."),(0,r.yg)("h2",{id:"3-initial-setup"},"3. Initial Setup"),(0,r.yg)("p",null,"The new reComputer has already flashed the system. But before we can use it, it still requires some necessary initial settings."),(0,r.yg)("h3",{id:"step-1-wait-for-powering-on"},"Step 1: Wait for powering on"),(0,r.yg)("p",null,"After powering on, the first thing you see will be the huge NVIDIA icon displayed in the middle of the screen. Before entering the configuration page, you may find reComputer automatically restarting twice, this process will take about a minute."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji5.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("h3",{id:"step-2-review-and-accept-the-license"},"Step 2: Review and accept the license"),(0,r.yg)("p",null,'In the configuration page, first you will be asked to check the license and select "',(0,r.yg)("strong",{parentName:"p"},"I accept the terms of these licenses"),'" to agree it and then proceed to the next step.'),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji6.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("h3",{id:"step-3choose-system-language-and-keyboard-layout"},"Step 3\uff1aChoose system language and keyboard layout"),(0,r.yg)("p",null,'After clicking the "Continue" button, the next page will ask you to select the system language and keyboard layout. You can select them according to your actual needs.'),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji7.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji8.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("h3",{id:"step-4-connect-to-the-network"},"Step 4: Connect to the network"),(0,r.yg)("p",null,"There are two ways to connect the reComputer to the Internet. One is to connect directly with a network cable, and the other one is to connect to the Internet through Wi-Fi (wireless module required). If you do not need Internet access for software updates, you can choose not to connect to the Internet for the next step when you are in this step."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji9.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("h3",{id:"step-5-configure-user-information-and-password"},"Step 5: Configure user information and password"),(0,r.yg)("p",null,"On the next page, you will be asked to enter your username and password. You will need to remember your startup password as you will need to start reComputer later."),(0,r.yg)("p",null,'If you find it tedious to enter your password every time you start reComputer, and to ensure that no one else can use it, you can select the "Require my password to log in" option below as we do not recommand it.'),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji10.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("h3",{id:"step-6-select-the-supply-voltage"},"Step 6: Select the supply voltage"),(0,r.yg)("p",null,"The final you will chose is the supply voltage while the reComputer operating."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},"reComputer J1010")," and ",(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html"},"reComputer J1020")," are both equipped with Jetson Nano module. We highly recommand the ",(0,r.yg)("strong",{parentName:"li"},"MAXN")," model, for which ensure your reComputer operate normally.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji11.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html"},"reComputer J2011")," and  ",(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html"},"reComputer J2012")," are both equipped with Jetson Xavier NX module, at which will provide a variety of power supply output power options. The default model is 10 W as ",(0,r.yg)("inlineCode",{parentName:"li"},"MODE_10W_DESKTOP - (Default)")," that you can see here:")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji12.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The following table shows NVIDIA predefined power modes and associated module resource usage caps."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/21.jpg"}))),(0,r.yg)("p",null,"After completing the above instructions, we need to wait 1~2 minutes for the reComputer to do the final configuration."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/46.jpg"})),(0,r.yg)("h2",{id:"4-get-started"},"4. Get Started"),(0,r.yg)("p",null,"After reComputer completes the initial setup, it will automatically restart. And After that, it will enter the system desktop as shown in the figure below. It shows the system is in place and can be used."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji4.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",null,"Because the product incldes a built-in 16 GB eMMC where has been installed ",(0,r.yg)("inlineCode",{parentName:"p"},"ubuntu 18.04 LTS")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"NVIDIA JetPack 4.6"),", the remaining user free space is about 2GB. The following figure shows the result after using the disk space command in the terminal:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"seeed@seeed-desktop:~$ df -hl\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/mmcblk0p1   14G   12G  2.0G  86% /\nnone            3.5G     0  3.5G   0% /dev\ntmpfs           3.8G   75M  3.8G   2% /dev/shm\ntmpfs           3.8G   22M  3.8G   1% /run\ntmpfs           5.0M  4.0K  5.0M   1% /run/lock\ntmpfs           3.8G     0  3.8G   0% /sys/fs/cgroup\ntmpfs           777M  128K  777M   1% /run/user/1000\nseeed@seeed-desktop:~$\n")),(0,r.yg)("h2",{id:"install-nvidia-system-on-recomputer"},"Install NVIDIA system on reComputer"),(0,r.yg)("p",null,"If your reComputer devicess crash and you want to reinstall the NVIDIA system. We here provide you the wiki about how to install NVIDIA System on reComputer. The provided wikis include A20X carrier boards and reComputer J1010 Carrier Board:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack/"},"Install NVIDIA system based on A20X carrier board")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/"},"Install NVIDIA system based on reComputer J1010 Carrier Board"))),(0,r.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.yg)("h3",{id:"q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space"},"Q1: The remaining space in the eMMC in the received reComputer is only about 2GB, how can I solve the problem of insufficient space?"),(0,r.yg)("p",null,"We currently offer three ways to deal with this particular situation, and you can choose the right solution for you based on the actual situation."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Option 1.")," Redeployment of systems to external storage devices"),(0,r.yg)("p",null,"If you haven't started a project with reComputer, you might consider using this option to redeploy the new system on a storage device with sufficient capacity."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"There are generally two ways to install a system for reComputer, the first is to use the ",(0,r.yg)("strong",{parentName:"li"},"NVIDIA SDK Manager"),".")),(0,r.yg)("p",null,"If you are on a ",(0,r.yg)("strong",{parentName:"p"},"reComputer J2011")," or ",(0,r.yg)("strong",{parentName:"p"},"reComputer J2012"),", in ",(0,r.yg)("strong",{parentName:"p"},"step 12")," of ",(0,r.yg)("a",{parentName:"p",href:"reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line"},"Flashing to eMMC with SDK Manager"),", you can expand the capacity by changing the location of the system burn-in."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png"})),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"This method is not applicable to the Jetson Nano module.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"There are generally two ways to install a system for reComputer, the second is to use the ",(0,r.yg)("strong",{parentName:"p"},"command lines"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If you are using an ",(0,r.yg)("strong",{parentName:"p"},"A20X carrier board"),", the method to install the system using the command line is in ",(0,r.yg)("a",{parentName:"p",href:"/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line"},"Flashing to eMMC with command-line"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If you are using the ",(0,r.yg)("strong",{parentName:"p"},"reComputer J1010 Carrier Board"),", then use the command line to install the system at ",(0,r.yg)("a",{parentName:"p",href:"/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line"},"Flashing to eMMC with command-line"),"."))),(0,r.yg)("p",null,"They both essentially complete the installation of the system by using the following command."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./flash.sh [options] <board> <rootdev>\n")),(0,r.yg)("p",null,"Where:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"[options]")," is one or more command line options. All of the options are optional. See ",(0,r.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage"},"Flashing Script Usage")," for information about the options.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<board>")," specifies the configuration to be applied to the device to be flashed. Values are listed in the table in ",(0,r.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations"},"Jetson Modules and Configurations")," in the topic ",(0,r.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart"},"Quick Start"),". ",(0,r.yg)("inlineCode",{parentName:"p"},"flash.sh")," gets the configuration from a configuration file named ",(0,r.yg)("inlineCode",{parentName:"p"},"<board>.conf"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<rootdev>")," specifies the type of device to be flashed. Use the value ",(0,r.yg)("strong",{parentName:"p"},"mmcblk0p1")," to flash a local storage device (eMMC or SD card, depending on platform), as distinguished from an NFS server, for example."))),(0,r.yg)("p",null,"As you can see from the above explanation, if we want to install the system in external storage, we can do so by changing the ",(0,r.yg)("inlineCode",{parentName:"p"},"<rootdev>")," option."),(0,r.yg)("p",null,"For a partition on a USB storage device connected to the reComputer device, enter this command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./flash.sh <board> sda<x>\n")),(0,r.yg)("p",null,"For a partition on an NVMe storage device connected to the reComputer device, enter this command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./flash.sh <board> nvme0n1p<x>\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<x>")," is a number specifying the APP partition\u2019s position on the storage device, e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"sda1")," for a USB device, or ",(0,r.yg)("inlineCode",{parentName:"p"},"nvme0n1p1")," for an NVMe storage device."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Option 2.")," Remove unneeded JetPack components to increase eMMC space."),(0,r.yg)("p",null,"NVIDIA JetPack SDK is the most comprehensive solution for building end-to-end accelerated AI applications. All Jetson modules and developer kits are supported by JetPack SDK."),(0,r.yg)("p",null,"JetPack SDK includes the Jetson Linux Driver Package (L4T) with Linux operating system and CUDA-X accelerated libraries and APIs for Deep Learning, Computer Vision, Accelerated Computing and Multimedia. It also includes samples, documentation, and developer tools for both host computer and developer kit, and supports higher level SDKs such as DeepStream for streaming video analytics and Isaac for robotics."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages"},"This table")," lists all components included in JetPack 4.6."),(0,r.yg)("table",{align:"center"},(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("th",{align:"center"},"Component Group"),(0,r.yg)("th",{colSpan:2,align:"center",valign:"middle"},"Packages")),(0,r.yg)("tr",null,(0,r.yg)("th",{align:"center",valign:"middle"},"CUDA Toolkit for L4T"),(0,r.yg)("td",{align:"center"},"cuda ",(0,r.yg)("br",null)," cuda-11-4 ",(0,r.yg)("br",null)," cuda-cccl-11-4 ",(0,r.yg)("br",null)," cuda-command-line-tools-11-4 ",(0,r.yg)("br",null)," cuda-compiler-11-4 ",(0,r.yg)("br",null)," cuda-cudart-11-4 ",(0,r.yg)("br",null)," cuda-cudart-dev-11-4 ",(0,r.yg)("br",null)," cuda-cuobjdump-11-4 ",(0,r.yg)("br",null)," cuda-cupti-11-4 ",(0,r.yg)("br",null)," cuda-cupti-dev-11-4 ",(0,r.yg)("br",null)," cuda-cuxxfilt-11-4 ",(0,r.yg)("br",null)," cuda-documentation-11-4 ",(0,r.yg)("br",null)," cuda-driver-dev-11-4 ",(0,r.yg)("br",null)," cuda-gdb-11-4 ",(0,r.yg)("br",null)," cuda-gdb-src-11-4 ",(0,r.yg)("br",null)," cuda-libraries-11-4 ",(0,r.yg)("br",null)," cuda-libraries-dev-11-4 ",(0,r.yg)("br",null)," cuda-minimal-build-11-4 ",(0,r.yg)("br",null)," cuda-nvcc-11-4 ",(0,r.yg)("br",null)," cuda-nvdisasm-11-4 ",(0,r.yg)("br",null)," cuda-nvml-dev-11-4 ",(0,r.yg)("br",null)," cuda-nvprof-11-4 ",(0,r.yg)("br",null)," cuda-nvprune-11-4 ",(0,r.yg)("br",null)," cuda-nvrtc-11-4 ",(0,r.yg)("br",null)," cuda-nvrtc-dev-11-4 ",(0,r.yg)("br",null)," cuda-nvtx-11-4"),(0,r.yg)("td",{align:"center"},"cuda-runtime-11-4 ",(0,r.yg)("br",null)," cuda-samples-11-4 ",(0,r.yg)("br",null)," cuda-sanitizer-11-4 ",(0,r.yg)("br",null)," cuda-toolkit-11-4 ",(0,r.yg)("br",null)," cuda-toolkit-11-4-config-common ",(0,r.yg)("br",null)," cuda-toolkit-11-config-common ",(0,r.yg)("br",null)," cuda-toolkit-config-common ",(0,r.yg)("br",null)," cuda-tools-11-4 ",(0,r.yg)("br",null)," cuda-visual-tools-11-4 ",(0,r.yg)("br",null)," libcublas-11-4 ",(0,r.yg)("br",null)," libcublas-dev-11-4 ",(0,r.yg)("br",null)," libcudla-11-4 ",(0,r.yg)("br",null)," libcudla-dev-11-4 ",(0,r.yg)("br",null)," libcufft-11-4 ",(0,r.yg)("br",null)," libcufft-dev-11-4 ",(0,r.yg)("br",null)," libcurand-11-4 ",(0,r.yg)("br",null)," libcurand-dev-11-4 ",(0,r.yg)("br",null)," libcusolver-11-4 ",(0,r.yg)("br",null)," libcusolver-dev-11-4 ",(0,r.yg)("br",null)," libcusparse-11-4 ",(0,r.yg)("br",null)," libcusparse-dev-11-4 ",(0,r.yg)("br",null)," libnpp-11-4 ",(0,r.yg)("br",null)," libnpp-dev-11-4")),(0,r.yg)("tr",null,(0,r.yg)("th",{align:"center"},"cuDNN"),(0,r.yg)("td",{align:"center"},"libcudnn8 ",(0,r.yg)("br",null)," libcudnn8-dev"),(0,r.yg)("td",{align:"center"},"libcudnn8-samples")),(0,r.yg)("tr",null,(0,r.yg)("th",{align:"center"},"TensorRT"),(0,r.yg)("td",{align:"center"},"graphsurgeon-tf ",(0,r.yg)("br",null)," libnvinfer-bin ",(0,r.yg)("br",null)," libnvinfer-dev ",(0,r.yg)("br",null)," libnvinfer-doc ",(0,r.yg)("br",null)," libnvinfer-plugin-dev ",(0,r.yg)("br",null)," libnvinfer-plugin8 ",(0,r.yg)("br",null)," libnvinfer-samples ",(0,r.yg)("br",null)," libnvinfer8"),(0,r.yg)("td",{align:"center"},"libnvonnxparsers-dev ",(0,r.yg)("br",null)," libnvonnxparsers8 ",(0,r.yg)("br",null)," libnvparsers-dev ",(0,r.yg)("br",null)," libnvparsers8 ",(0,r.yg)("br",null)," python3-libnvinfer ",(0,r.yg)("br",null)," python3-libnvinfer-dev ",(0,r.yg)("br",null)," tensorrt ",(0,r.yg)("br",null)," uff-converter-tf")),(0,r.yg)("tr",null,(0,r.yg)("th",{align:"center"},"OpenCV"),(0,r.yg)("td",{align:"center"},"libopencv ",(0,r.yg)("br",null)," libopencv-dev ",(0,r.yg)("br",null)," opencv-licenses"),(0,r.yg)("td",{align:"center"},"libopencv-python ",(0,r.yg)("br",null)," libopencv-samples")),(0,r.yg)("tr",null,(0,r.yg)("th",{align:"center"},"VPI"),(0,r.yg)("td",{align:"center"},"libnvvpi2 ",(0,r.yg)("br",null)," vpi2-dev ",(0,r.yg)("br",null)," python-vpi2"),(0,r.yg)("td",{align:"center"},"python3.9-vpi2 ",(0,r.yg)("br",null)," vpi2-samples ",(0,r.yg)("br",null)," vpi2-demos")),(0,r.yg)("tr",null,(0,r.yg)("th",{align:"center"},"NVIDIA container runtime with Docker integration"),(0,r.yg)("td",{align:"center"},"libnvidia-container0 ",(0,r.yg)("br",null)," libnvidia-container1 ",(0,r.yg)("br",null)," libnvidia-container-tools"),(0,r.yg)("td",{align:"center"},"nvidia-container-toolkit ",(0,r.yg)("br",null)," nvidia-container-runtime ",(0,r.yg)("br",null)," nvidia-docker2")),(0,r.yg)("tr",null,(0,r.yg)("th",{align:"center"},"Multimedia API"),(0,r.yg)("td",{colSpan:2,align:"center"},"nvidia-l4t-jetson-multimedia-api")))),(0,r.yg)("p",null,"The JetPack SDK contains a lot of content, but it's not something that all developers will need to use. So, it is one of the good options to selectively remove them for more storage space."),(0,r.yg)("p",null,"We can view information about the JetPack installed in reComputer Jetson with the following command."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt-cache show nvidia-jetpack\n")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png"})),(0,r.yg)("p",null,"With this command, you can quickly learn the content of the installed components in JetPack, such as CUDA, openCV, etc."),(0,r.yg)("p",null,"To get more detailed information, you can use the following command to find out all the software currently installed by reComputer and its description information."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"dpkg-query -l\n")),(0,r.yg)("p",null,"Then, you can selectively remove the content you don't need according to your actual needs and the description information for the component. The command to delete is as follows."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt autoremove ${packagesname}\n")),(0,r.yg)("p",null,"The environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"${packagesname}")," indicates the name of the component package you want to remove. If you want to remove all packages prefixed by a certain name, you can add ",(0,r.yg)("inlineCode",{parentName:"p"},"*")," to this prefix to indicate that."),(0,r.yg)("p",null,"As an example, if we want to remove all components about ",(0,r.yg)("strong",{parentName:"p"},"CUDA"),", then we can use the following command."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt autoremove cuda*\n")),(0,r.yg)("p",null,"After releasing the contents of the CUDA component, you can see that the remaining capacity of the eMMC will also become larger."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png"})),(0,r.yg)("p",null,"The same applies to other JetPack components."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Option 3.")," Capacity expansion via external storage devices."),(0,r.yg)("p",null,"You can choose this option if you have been using reComputer normally for some time and do not want to destroy the existing system environment to complete the expansion solution."),(0,r.yg)("p",null,"We already have a well-developed expansion wiki ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reComputer_Jetson_Memory_Expansion/"},"Memory Expansion for reComputer series"),"."),(0,r.yg)("p",null,"It is worth noting that any expansion operation is dangerous and we expect you to be proactive in ",(0,r.yg)("strong",{parentName:"p"},"making backups")," of your system before everything starts."),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);