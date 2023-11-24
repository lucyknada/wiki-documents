"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),c=n,h=d["".concat(i,".").concat(c)]||d[c]||m[c]||a;return r?o.createElement(h,p(p({ref:t},u),{},{components:r})):o.createElement(h,p({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,p[1]=s;for(var l=2;l<a;l++)p[l]=r[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},60151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={description:"How to use 40-Pin GPIO on reComputer Jetson Boards",title:"How to use 40-Pin GPIO on reComputer Jetson Boards",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Jetson_GPIO",last_update:{date:"04/12/2023",author:"Lakshantha"}},p="How to use 40-Pin GPIO on reComputer Jetson Boards",s={unversionedId:"Edge/NVIDIA_Jetson/reComputer/reComputer_Jetson_GPIO",id:"Edge/NVIDIA_Jetson/reComputer/reComputer_Jetson_GPIO",title:"How to use 40-Pin GPIO on reComputer Jetson Boards",description:"How to use 40-Pin GPIO on reComputer Jetson Boards",source:"@site/docs/Edge/NVIDIA_Jetson/reComputer/reComputer_Jetson_GPIO.md",sourceDirName:"Edge/NVIDIA_Jetson/reComputer",slug:"/reComputer_Jetson_GPIO",permalink:"/reComputer_Jetson_GPIO",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/reComputer/reComputer_Jetson_GPIO.md",tags:[],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1681257600,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{description:"How to use 40-Pin GPIO on reComputer Jetson Boards",title:"How to use 40-Pin GPIO on reComputer Jetson Boards",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Jetson_GPIO",last_update:{date:"04/12/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"Hardware Layout for reComputer Series",permalink:"/reComputer_Jetson_Series_Hardware_Layout"},next:{title:"GPIO and Grove for reComputer Series",permalink:"/reComputer_Jetson_Series_GPIO_Grove"}},i={},l=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Find GPIO Name",id:"find-gpio-name",level:2},{value:"Access and Control GPIO",id:"access-and-control-gpio",level:2},{value:"Method 1",id:"method-1",level:3},{value:"Method 2",id:"method-2",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-use-40-pin-gpio-on-recomputer-jetson-boards"},"How to use 40-Pin GPIO on reComputer Jetson Boards"),(0,n.kt)("p",null,"This wiki demonstrates how to access and control the 40-pin GPIO of reComputer Jetson Boards. For this wiki, we have used reComputer J4012 as an example. However, the steps will be similar for other reComputer Jetson boards as well."),(0,n.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,n.kt)("p",null,"Here is some information you need to know before you start working with the 40-Pin GPIO on reComputer Jetson devices."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The voltage level per GPIO pin is 3.3V"),(0,n.kt)("li",{parentName:"ul"},"You cannot back power the reComputer Jetson boards via GPIO because of the current limitation from GPIO pins")),(0,n.kt)("h2",{id:"find-gpio-name"},"Find GPIO Name"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1:")," Open the datasheet of a reComputer Jetson board. Below you can find datasheets of all the reComputer Jetson boards that are available."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/102991694/reComputer%20J101V2%20datasheet.pdf"},"J101 Carrier Board")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"reComputer J1010"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/114110049/A206%20carrier%20board%20pin%20description.pdf"},"A206 Carrier Board")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"reComputer J2011"),(0,n.kt)("li",{parentName:"ul"},"reComputer J2012"),(0,n.kt)("li",{parentName:"ul"},"reComputer J1020"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/reComputer/reComputer-J202-carrier-board-datasheet.pdf"},"J202 Carrier Board")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"reComputer J2021"),(0,n.kt)("li",{parentName:"ul"},"reComputer J2022"),(0,n.kt)("li",{parentName:"ul"},"reComputer J1020 V2"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J401-datasheet.pdf"},"J401 Carrier Board")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"reComputer J4011"),(0,n.kt)("li",{parentName:"ul"},"reComputer J4012 "),(0,n.kt)("li",{parentName:"ul"},"reComputer J3010"),(0,n.kt)("li",{parentName:"ul"},"reComputer J3011")))),(0,n.kt)("p",null,"Here we have chosen the datasheet of ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf"},"reComputer J4012"),". "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2:")," Navigate to the section ",(0,n.kt)("strong",{parentName:"p"},"40 Pin Expansion Header - J10")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-GPIO/1.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3:")," Find the name of the ",(0,n.kt)("strong",{parentName:"p"},"Header Pin #")," making sure it's default usage is ",(0,n.kt)("strong",{parentName:"p"},"GPIO")," under the ",(0,n.kt)("strong",{parentName:"p"},"Default Usage / Description")," column"),(0,n.kt)("p",null,"For example, check ",(0,n.kt)("strong",{parentName:"p"},"Header Pin 15"),". It's ",(0,n.kt)("strong",{parentName:"p"},"Default Usage")," is ",(0,n.kt)("strong",{parentName:"p"},"GPIO")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-GPIO/2.jpg"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4:")," For the same pin, find the name under ",(0,n.kt)("strong",{parentName:"p"},"Module Pin Name")," column. In our example, it is ",(0,n.kt)("strong",{parentName:"p"},"GPIO12")),(0,n.kt)("h2",{id:"access-and-control-gpio"},"Access and Control GPIO"),(0,n.kt)("p",null,"Now we have 2 different methods to access the GPIOs on the Jetson boards based on the availability of the GPIO labels directly. Using first method, we can directly know the GPIO pin labels after executing a command within the device. However, if the pin labels are not shown directly, you can use the second method."),(0,n.kt)("h3",{id:"method-1"},"Method 1"),(0,n.kt)("p",null,"In this method, the dts file for GPIO is included inside the JetPack version you flash and will have GPIO labelled properly already so that you can obtain the pin labels directly from the device."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1:")," Enter the terminal of the Jetson device and execute this command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo su\ncat /sys/kernel/debug/gpio\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2:")," Find the ",(0,n.kt)("strong",{parentName:"p"},"GPIO number")," corresponding to the ",(0,n.kt)("strong",{parentName:"p"},"Module Pin Name")," that we got before"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-GPIO/3.png"})),(0,n.kt)("p",null,"In this case, it is ",(0,n.kt)("strong",{parentName:"p"},"gpio-268")," corresponding to ",(0,n.kt)("strong",{parentName:"p"},"GPIO12")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3:")," Execute the following inside the terminal to export gpio-268 pin"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd /sys/class/gpio\necho 268 > export\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4:")," Set the direction and set the value. Here direction can be ",(0,n.kt)("strong",{parentName:"p"},"in/ out")," and the value can be ",(0,n.kt)("strong",{parentName:"p"},"0/ 1")," "),(0,n.kt)("p",null,"For example, to set GPIO12 to HIGH"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'cd gpio268\necho "out" > direction\necho 1 > value\n')),(0,n.kt)("p",null,"To set GPIO12 to LOW"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"echo 0 > value\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5:")," To set the GPIO pin that you exported back to default state, execute the following"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd ..\necho 268 > unexport\n")),(0,n.kt)("h3",{id:"method-2"},"Method 2"),(0,n.kt)("p",null,"In this method, the dts file for GPIO is in not included inside the JetPack version you flash and will not have GPIO labelled properly. So we need to refer to another document (pinmux) and obtain this pin label information. Refer the links below according to the SoM."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/jetson-nano-pinmux"},"Jetson Nano")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106"},"Jetson Xavier NX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template"},"Jetson Orin NX/ Nano"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1:")," Download the pinmux document according to the SoM you are using. Here we choose the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template"},"Jetson Orin NX/ Nano")," document"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2:")," Find the GPIO label (under Customer Usage column) corresponding to the Module Pin Name that we got before. For example, for ",(0,n.kt)("strong",{parentName:"p"},"GPIO12"),", it is ",(0,n.kt)("strong",{parentName:"p"},"GPIO3_PN.01")," and here we refer to ",(0,n.kt)("strong",{parentName:"p"},"PN.01")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3:")," Enter the terminal of the Jetson device and execute this command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo su\ncat /sys/kernel/debug/gpio\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4:")," Find the ",(0,n.kt)("strong",{parentName:"p"},"GPIO number")," corresponding to the ",(0,n.kt)("strong",{parentName:"p"},"GPIO label")," that we got before"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-GPIO/5.png"})),(0,n.kt)("p",null,"In this case, it is ",(0,n.kt)("strong",{parentName:"p"},"gpio-433")," corresponding to ",(0,n.kt)("strong",{parentName:"p"},"PN.01")," which is also equal to ",(0,n.kt)("strong",{parentName:"p"},"GPIO12")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5:")," Execute the following inside the terminal to export gpio-433 pin"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd /sys/class/gpio\necho 433 > export\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 6:")," Set the direction and set the value. Here direction can be ",(0,n.kt)("strong",{parentName:"p"},"in/ out")," and the value can be ",(0,n.kt)("strong",{parentName:"p"},"0/ 1")," "),(0,n.kt)("p",null,"For example, to set GPIO12 to HIGH"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'cd PN.01\necho "out" > direction\necho 1 > value\n')),(0,n.kt)("p",null,"To set GPIO12 to LOW"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"echo 0 > value\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 7:")," To set the GPIO pin that you exported back to default state, execute the following"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd ..\necho 433 > unexport\n")),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);