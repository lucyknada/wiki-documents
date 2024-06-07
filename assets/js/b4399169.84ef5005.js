"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34336],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,y=p["".concat(s,".").concat(d)]||p[d]||g[d]||r;return t?a.createElement(y,l(l({ref:n},c),{},{components:t})):a.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(58168),o=(t(96540),t(15680));const r={description:"reComputer-FAQ",title:"The remaining space in the eMMC in the received reComputer is only about 2GB, how to solve the problem of insufficient space?",image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",slug:"/solution_of_insufficient_space",last_update:{date:"2023/6/30",author:"Seraphina"}},l=void 0,i={unversionedId:"FAQ/Jetson/solution_of_insufficient_space",id:"FAQ/Jetson/solution_of_insufficient_space",title:"The remaining space in the eMMC in the received reComputer is only about 2GB, how to solve the problem of insufficient space?",description:"reComputer-FAQ",source:"@site/docs/FAQ/Jetson/solution_of_insufficient_space.md",sourceDirName:"FAQ/Jetson",slug:"/solution_of_insufficient_space",permalink:"/solution_of_insufficient_space",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/Jetson/solution_of_insufficient_space.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1688083200,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{description:"reComputer-FAQ",title:"The remaining space in the eMMC in the received reComputer is only about 2GB, how to solve the problem of insufficient space?",image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",slug:"/solution_of_insufficient_space",last_update:{date:"2023/6/30",author:"Seraphina"}}},s={},u=[],c={toc:u},p="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"We currently offer three ways to deal with this particular situation, and you can choose the right solution for you based on the actual situation."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Option 1.")," Redeployment of systems to external storage devices"),(0,o.yg)("p",null,"If you haven't started a project with reComputer, you might consider using this option to redeploy the new system on a storage device with sufficient capacity."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"There are generally two ways to install a system for reComputer, the first is to use the ",(0,o.yg)("strong",{parentName:"li"},"NVIDIA SDK Manager"),".")),(0,o.yg)("p",null,"If you are on a ",(0,o.yg)("strong",{parentName:"p"},"reComputer J2011")," or ",(0,o.yg)("strong",{parentName:"p"},"reComputer J2012"),", in ",(0,o.yg)("strong",{parentName:"p"},"step 12")," of ",(0,o.yg)("a",{parentName:"p",href:"reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line"},"Flashing to eMMC with SDK Manager"),", you can expand the capacity by changing the location of the system burn-in."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png"})),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"This method is not applicable to the Jetson Nano module.")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"There are generally two ways to install a system for reComputer, the second is to use the ",(0,o.yg)("strong",{parentName:"p"},"command lines"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If you are using an ",(0,o.yg)("strong",{parentName:"p"},"A20X carrier board"),", the method to install the system using the command line is in ",(0,o.yg)("a",{parentName:"p",href:"reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line"},"Flashing to eMMC with command-line"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If you are using the ",(0,o.yg)("strong",{parentName:"p"},"reComputer J1010 Carrier Board"),", then use the command line to install the system at ",(0,o.yg)("a",{parentName:"p",href:"reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line"},"Flashing to eMMC with command-line"),"."))),(0,o.yg)("p",null,"They both essentially complete the installation of the system by using the following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./flash.sh [options] <board> <rootdev>\n")),(0,o.yg)("p",null,"Where:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"[options]")," is one or more command line options. All of the options are optional. See ",(0,o.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage"},"Flashing Script Usage")," for information about the options.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"<board>")," specifies the configuration to be applied to the device to be flashed. Values are listed in the table in ",(0,o.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations"},"Jetson Modules and Configurations")," in the topic ",(0,o.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart"},"Quick Start"),". ",(0,o.yg)("inlineCode",{parentName:"p"},"flash.sh")," gets the configuration from a configuration file named ",(0,o.yg)("inlineCode",{parentName:"p"},"<board>.conf"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"<rootdev>")," specifies the type of device to be flashed. Use the value ",(0,o.yg)("strong",{parentName:"p"},"mmcblk0p1")," to flash a local storage device (eMMC or SD card, depending on platform), as distinguished from an NFS server, for example."))),(0,o.yg)("p",null,"As you can see from the above explanation, if we want to install the system in external storage, we can do so by changing the ",(0,o.yg)("inlineCode",{parentName:"p"},"<rootdev>")," option."),(0,o.yg)("p",null,"For a partition on a USB storage device connected to the reComputer device, enter this command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./flash.sh <board> sda<x>\n")),(0,o.yg)("p",null,"For a partition on an NVMe storage device connected to the reComputer device, enter this command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./flash.sh <board> nvme0n1p<x>\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"<x>")," is a number specifying the APP partition\u2019s position on the storage device, e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"sda1")," for a USB device, or ",(0,o.yg)("inlineCode",{parentName:"p"},"nvme0n1p1")," for an NVMe storage device."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Option 2.")," Remove unneeded JetPack components to increase eMMC space."),(0,o.yg)("p",null,"NVIDIA JetPack SDK is the most comprehensive solution for building end-to-end accelerated AI applications. All Jetson modules and developer kits are supported by JetPack SDK."),(0,o.yg)("p",null,"JetPack SDK includes the Jetson Linux Driver Package (L4T) with Linux operating system and CUDA-X accelerated libraries and APIs for Deep Learning, Computer Vision, Accelerated Computing and Multimedia. It also includes samples, documentation, and developer tools for both host computer and developer kit, and supports higher level SDKs such as DeepStream for streaming video analytics and Isaac for robotics."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages"},"This table")," lists all components included in JetPack 4.6."),(0,o.yg)("table",{align:"center"},(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("th",{align:"center"},"Component Group"),(0,o.yg)("th",{colSpan:2,align:"center",valign:"middle"},"Packages")),(0,o.yg)("tr",null,(0,o.yg)("th",{align:"center",valign:"middle"},"CUDA Toolkit for L4T"),(0,o.yg)("td",{align:"center"},"cuda ",(0,o.yg)("br",null)," cuda-11-4 ",(0,o.yg)("br",null)," cuda-cccl-11-4 ",(0,o.yg)("br",null)," cuda-command-line-tools-11-4 ",(0,o.yg)("br",null)," cuda-compiler-11-4 ",(0,o.yg)("br",null)," cuda-cudart-11-4 ",(0,o.yg)("br",null)," cuda-cudart-dev-11-4 ",(0,o.yg)("br",null)," cuda-cuobjdump-11-4 ",(0,o.yg)("br",null)," cuda-cupti-11-4 ",(0,o.yg)("br",null)," cuda-cupti-dev-11-4 ",(0,o.yg)("br",null)," cuda-cuxxfilt-11-4 ",(0,o.yg)("br",null)," cuda-documentation-11-4 ",(0,o.yg)("br",null)," cuda-driver-dev-11-4 ",(0,o.yg)("br",null)," cuda-gdb-11-4 ",(0,o.yg)("br",null)," cuda-gdb-src-11-4 ",(0,o.yg)("br",null)," cuda-libraries-11-4 ",(0,o.yg)("br",null)," cuda-libraries-dev-11-4 ",(0,o.yg)("br",null)," cuda-minimal-build-11-4 ",(0,o.yg)("br",null)," cuda-nvcc-11-4 ",(0,o.yg)("br",null)," cuda-nvdisasm-11-4 ",(0,o.yg)("br",null)," cuda-nvml-dev-11-4 ",(0,o.yg)("br",null)," cuda-nvprof-11-4 ",(0,o.yg)("br",null)," cuda-nvprune-11-4 ",(0,o.yg)("br",null)," cuda-nvrtc-11-4 ",(0,o.yg)("br",null)," cuda-nvrtc-dev-11-4 ",(0,o.yg)("br",null)," cuda-nvtx-11-4"),(0,o.yg)("td",{align:"center"},"cuda-runtime-11-4 ",(0,o.yg)("br",null)," cuda-samples-11-4 ",(0,o.yg)("br",null)," cuda-sanitizer-11-4 ",(0,o.yg)("br",null)," cuda-toolkit-11-4 ",(0,o.yg)("br",null)," cuda-toolkit-11-4-config-common ",(0,o.yg)("br",null)," cuda-toolkit-11-config-common ",(0,o.yg)("br",null)," cuda-toolkit-config-common ",(0,o.yg)("br",null)," cuda-tools-11-4 ",(0,o.yg)("br",null)," cuda-visual-tools-11-4 ",(0,o.yg)("br",null)," libcublas-11-4 ",(0,o.yg)("br",null)," libcublas-dev-11-4 ",(0,o.yg)("br",null)," libcudla-11-4 ",(0,o.yg)("br",null)," libcudla-dev-11-4 ",(0,o.yg)("br",null)," libcufft-11-4 ",(0,o.yg)("br",null)," libcufft-dev-11-4 ",(0,o.yg)("br",null)," libcurand-11-4 ",(0,o.yg)("br",null)," libcurand-dev-11-4 ",(0,o.yg)("br",null)," libcusolver-11-4 ",(0,o.yg)("br",null)," libcusolver-dev-11-4 ",(0,o.yg)("br",null)," libcusparse-11-4 ",(0,o.yg)("br",null)," libcusparse-dev-11-4 ",(0,o.yg)("br",null)," libnpp-11-4 ",(0,o.yg)("br",null)," libnpp-dev-11-4")),(0,o.yg)("tr",null,(0,o.yg)("th",{align:"center"},"cuDNN"),(0,o.yg)("td",{align:"center"},"libcudnn8 ",(0,o.yg)("br",null)," libcudnn8-dev"),(0,o.yg)("td",{align:"center"},"libcudnn8-samples")),(0,o.yg)("tr",null,(0,o.yg)("th",{align:"center"},"TensorRT"),(0,o.yg)("td",{align:"center"},"graphsurgeon-tf ",(0,o.yg)("br",null)," libnvinfer-bin ",(0,o.yg)("br",null)," libnvinfer-dev ",(0,o.yg)("br",null)," libnvinfer-doc ",(0,o.yg)("br",null)," libnvinfer-plugin-dev ",(0,o.yg)("br",null)," libnvinfer-plugin8 ",(0,o.yg)("br",null)," libnvinfer-samples ",(0,o.yg)("br",null)," libnvinfer8"),(0,o.yg)("td",{align:"center"},"libnvonnxparsers-dev ",(0,o.yg)("br",null)," libnvonnxparsers8 ",(0,o.yg)("br",null)," libnvparsers-dev ",(0,o.yg)("br",null)," libnvparsers8 ",(0,o.yg)("br",null)," python3-libnvinfer ",(0,o.yg)("br",null)," python3-libnvinfer-dev ",(0,o.yg)("br",null)," tensorrt ",(0,o.yg)("br",null)," uff-converter-tf")),(0,o.yg)("tr",null,(0,o.yg)("th",{align:"center"},"OpenCV"),(0,o.yg)("td",{align:"center"},"libopencv ",(0,o.yg)("br",null)," libopencv-dev ",(0,o.yg)("br",null)," opencv-licenses"),(0,o.yg)("td",{align:"center"},"libopencv-python ",(0,o.yg)("br",null)," libopencv-samples")),(0,o.yg)("tr",null,(0,o.yg)("th",{align:"center"},"VPI"),(0,o.yg)("td",{align:"center"},"libnvvpi2 ",(0,o.yg)("br",null)," vpi2-dev ",(0,o.yg)("br",null)," python-vpi2"),(0,o.yg)("td",{align:"center"},"python3.9-vpi2 ",(0,o.yg)("br",null)," vpi2-samples ",(0,o.yg)("br",null)," vpi2-demos")),(0,o.yg)("tr",null,(0,o.yg)("th",{align:"center"},"NVIDIA container runtime with Docker integration"),(0,o.yg)("td",{align:"center"},"libnvidia-container0 ",(0,o.yg)("br",null)," libnvidia-container1 ",(0,o.yg)("br",null)," libnvidia-container-tools"),(0,o.yg)("td",{align:"center"},"nvidia-container-toolkit ",(0,o.yg)("br",null)," nvidia-container-runtime ",(0,o.yg)("br",null)," nvidia-docker2")),(0,o.yg)("tr",null,(0,o.yg)("th",{align:"center"},"Multimedia API"),(0,o.yg)("td",{colSpan:2,align:"center"},"nvidia-l4t-jetson-multimedia-api")))),(0,o.yg)("p",null,"The JetPack SDK contains a lot of content, but it's not something that all developers will need to use. So, it is one of the good options to selectively remove them for more storage space."),(0,o.yg)("p",null,"We can view information about the JetPack installed in reComputer Jetson with the following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt-cache show nvidia-jetpack\n")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png"})),(0,o.yg)("p",null,"With this command, you can quickly learn the content of the installed components in JetPack, such as CUDA, openCV, etc."),(0,o.yg)("p",null,"To get more detailed information, you can use the following command to find out all the software currently installed by reComputer and its description information."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"dpkg-query -l\n")),(0,o.yg)("p",null,"Then, you can selectively remove the content you don't need according to your actual needs and the description information for the component. The command to delete is as follows."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt autoremove ${packagesname}\n")),(0,o.yg)("p",null,"The environment variable ",(0,o.yg)("inlineCode",{parentName:"p"},"${packagesname}")," indicates the name of the component package you want to remove. If you want to remove all packages prefixed by a certain name, you can add ",(0,o.yg)("inlineCode",{parentName:"p"},"*")," to this prefix to indicate that."),(0,o.yg)("p",null,"As an example, if we want to remove all components about ",(0,o.yg)("strong",{parentName:"p"},"CUDA"),", then we can use the following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt autoremove cuda*\n")),(0,o.yg)("p",null,"After releasing the contents of the CUDA component, you can see that the remaining capacity of the eMMC will also become larger."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png"})),(0,o.yg)("p",null,"The same applies to other JetPack components."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Option 3.")," Capacity expansion via external storage devices."),(0,o.yg)("p",null,"You can choose this option if you have been using reComputer normally for some time and do not want to destroy the existing system environment to complete the expansion solution."),(0,o.yg)("p",null,"We already have a well-developed expansion wiki ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reComputer_Jetson_Memory_Expansion/"},"Memory Expansion for reComputer series"),"."),(0,o.yg)("p",null,"It is worth noting that any expansion operation is dangerous and we expect you to be proactive in ",(0,o.yg)("strong",{parentName:"p"},"making backups")," of your system before everything starts."))}g.isMDXComponent=!0}}]);