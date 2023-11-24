"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={description:"ODYSSEY - X86J41x5",title:"Adding Accessories",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86J4105-Accessories",last_update:{date:"01/03/2023",author:"w0x7ce"}},a="Adding Accessories to ODYSSEY - X86J41x5",s={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Accessories",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Accessories",title:"Adding Accessories",description:"ODYSSEY - X86J41x5",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Accessories.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105",slug:"/ODYSSEY-X86J4105-Accessories",permalink:"/ODYSSEY-X86J4105-Accessories",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Accessories.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"ODYSSEY - X86J41x5",title:"Adding Accessories",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86J4105-Accessories",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Accessing 40-pin GPIO",permalink:"/ODYSSEY-X86J4105-GPIO"},next:{title:"Coral Mini PCIe Accelerator for ODYSSEY",permalink:"/Coral-Mini-PCIe-Accelerator-x86"}},l={},d=[{value:"1. Adding Additional Storage via PCIe to SATA III (HDD Hard Drives)",id:"1-adding-additional-storage-via-pcie-to-sata-iii-hdd-hard-drives",level:2},{value:"Materials Required",id:"materials-required",level:3},{value:"Hardware Instructions",id:"hardware-instructions",level:3},{value:"Result",id:"result",level:3},{value:"2. Adding an External GPU to the ODYSSEY-X86J41x5",id:"2-adding-an-external-gpu-to-the-odyssey-x86j41x5",level:2},{value:"Materials Required",id:"materials-required-1",level:3},{value:"Initial BIOS Setup",id:"initial-bios-setup",level:3},{value:"Hardware Instructions",id:"hardware-instructions-1",level:3},{value:"Installing GPU&#39;s Driver",id:"installing-gpus-driver",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-accessories-to-odyssey---x86j41x5"},"Adding Accessories to ODYSSEY - X86J41x5"),(0,i.kt)("p",null,"This wiki introduces how to add different accessories to ODYSSEY - X86J41x5 to boost up the performance to fit your needs. For instance, you might be using ODYSSEY-X86J41x5 for a more graphics required scenario, hence the need of ",(0,i.kt)("strong",{parentName:"p"},"adding an external GPU for high performance.")," Or in some cases such as NAS, you would prefer ",(0,i.kt)("strong",{parentName:"p"},"two HDD hard drive instead of using SSD for stability reasons.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-2.png"})),(0,i.kt)("h2",{id:"1-adding-additional-storage-via-pcie-to-sata-iii-hdd-hard-drives"},"1. Adding Additional Storage via PCIe to SATA III (HDD Hard Drives)"),(0,i.kt)("p",null,"On ODYSSEY-X86J41x5, there is ",(0,i.kt)("strong",{parentName:"p"},"1 M.2 SATA SSD, 1 M.2 PCIe SSD and 1 SATA III connectors with 3 SATA III power connectors.")," For standard use, these connectors are enough. However, for more of a industrial usage would prefer using HDD instead of SSD. This demonstrates how to attach more than 1 HDD to ODYSSEY-X86J41x5."),(0,i.kt)("h3",{id:"materials-required"},"Materials Required"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"M.2 PCIe to SATA Adapter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"HDD Hard Drives (Maximum 3 HDD supported on ODYSSEY-X86J41x5)"))),(0,i.kt)("p",null,"To attach more HDD to ODYSSEY-X86J41x5, we need an extra component, a M.2 PCIe to SATA adapter which can convert the M.2 PCIe slot into SATA data connector. This adapter can be purchased commonly on the electronics market."),(0,i.kt)("h3",{id:"hardware-instructions"},"Hardware Instructions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attach the  M.2 PCIe to SATA adapter to the PCIe slot of the ODYSSEY-X86J41x5 and plug the HDD data cable into it as shown below. Connect the HDD power cable to one of the three SATA III power connectors.")),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/HDD.jpg"})),(0,i.kt)("br",null)),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can have maximum of 3 HDD hard drives connected to the ODYSSEY-X86J41x5. Boot up the devices and check if the hard drives shown up in the operating system.")),(0,i.kt)("h3",{id:"result"},"Result"),(0,i.kt)("p",null,"Once booted in the OS, you should be able to see the hard drives."),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/HDD-OS.png"})),(0,i.kt)("br",null)),(0,i.kt)("p",null,"Now you don't have to worry about the storage issue no more!"),(0,i.kt)("h2",{id:"2-adding-an-external-gpu-to-the-odyssey-x86j41x5"},"2. Adding an External GPU to the ODYSSEY-X86J41x5"),(0,i.kt)("p",null,"To add external GPU to the ODYSSEY-X86J41x5 to boost up performance, you will also need an extra component."),(0,i.kt)("h3",{id:"materials-required-1"},"Materials Required"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"M.2 PCIe x4 to PCIe x16 Adapter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"DC power for GPU")))),(0,i.kt)("p",null,"The components are not yet available to sell from Seeed, so please be patient for now or get it from the electronics market. Make sure that the Adapter is suitable for GPU usage."),(0,i.kt)("h3",{id:"initial-bios-setup"},"Initial BIOS Setup"),(0,i.kt)("p",null,"Some configurations in the BIOS are needed for enabling GPU:"),(0,i.kt)("p",null,"1.Enter BIOS menu by keeping ",(0,i.kt)("strong",{parentName:"p"},"DEL")," key when booting up."),(0,i.kt)("p",null,"2.Navigate to ",(0,i.kt)("strong",{parentName:"p"},"Advanced")," -> ",(0,i.kt)("strong",{parentName:"p"},"CSM Support")," and press Enter to enable it."),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/biosSetting.jpg"})),(0,i.kt)("br",null)),(0,i.kt)("p",null,"3.Navigate to ",(0,i.kt)("strong",{parentName:"p"},"Chipset")," -> ",(0,i.kt)("strong",{parentName:"p"},"Primary Display")," and select ",(0,i.kt)("strong",{parentName:"p"},"PCIe")," and press Enter."),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/chipset.png"})),(0,i.kt)("br",null)),(0,i.kt)("p",null,"Save the BIOS settings and power off the device."),(0,i.kt)("h3",{id:"hardware-instructions-1"},"Hardware Instructions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Insert your GPU into the PCIe x16 end of the adapter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Insert the Adapter to M.2 PCIe slot of the ODYSSEY-X86J41x5,")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The GPU also needs an external power, here I used a DIY 4-pin to DC jack to supply the 12V power ",(0,i.kt)("strong",{parentName:"p"},"(Only do this if know what you are doing)"),". There is also 4-pin to DC jack on the market out there that you can buy."))),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/GPU-connect.jpg"})),(0,i.kt)("br",null)),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connect the HDMI to the GPU instead of the ODYSSEY-X86J41x5.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please be careful during the hardware connection. Make sure everything is connected correctly before turning on power or you may in danger of damaging components.")),(0,i.kt)("h3",{id:"installing-gpus-driver"},"Installing GPU's Driver"),(0,i.kt)("p",null,"If everything goes well, the device should boot up properly and enters into the OS. But also need to install the GPU drivers to the OS. If you are a Windows user this will be very easy. Here I will demonstrate installing GPU(Nvidia) drivers on Ubuntu(Linux) for reference."),(0,i.kt)("p",null,"1.Open terminal and type the following command to check the GPU:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"lspci | grep -i vga\n")),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/lspci.png"})),(0,i.kt)("br",null)),(0,i.kt)("p",null,"Here we can see two GPUs, one is the on-board GPU and the other is the external GPU(GTX 750)."),(0,i.kt)("p",null,"2.First, we need to disable the ",(0,i.kt)("strong",{parentName:"p"},"nouveau")," services on Ubuntu. In Terminal, use ",(0,i.kt)("inlineCode",{parentName:"p"},"nano")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"vim")," to open the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/modprobe.d/blacklist.conf"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/modprobe.d/blacklist.conf\n")),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-1.png"})),(0,i.kt)("br",null)),(0,i.kt)("p",null,"3.Add the following code at the end and save the changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"blacklist nouveau\noptions nouveau modeset=0\n")),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-2.png"})),(0,i.kt)("br",null)),(0,i.kt)("p",null,"4.Run the following command to update:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo update-initramfs -u\n")),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-3.png"})),(0,i.kt)("br",null)),(0,i.kt)("p",null,"5.Reboot the device to take on changes and can run the following command, if nothing appears then the service is disabled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"lsmod | grep nouveau\n")),(0,i.kt)("p",null,"6.Now we can use the ubuntu built-in command to check the drivers needed for the external GPU:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ubuntu-drivers devices\n")),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/drivers.png"})),(0,i.kt)("br",null)),(0,i.kt)("p",null,"This will determine the GPU model and recommend the drivers for it. Here recommended the nvidia-driver-435 for the external GPU."),(0,i.kt)("p",null,"7.Auto install the driver using the following command, and reboot the device to take on the effect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ubuntu-drivers autoinstall\n")),(0,i.kt)("p",null,"By now, the driver should be installed on the ODYSSEY-X86J4105! You can check the status of GPU by running the following command in the Terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nvidia-smi\n")),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-1.png"})),(0,i.kt)("br",null)),(0,i.kt)("p",null,"Or simply go to the settings:"),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-2.png"})),(0,i.kt)("br",null)),(0,i.kt)("p",null,"Now enjoy the boosted up ODYSSEY-X86J41x5 and all set to dive in the field of AI where it requires a lot of GPU power!"),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);