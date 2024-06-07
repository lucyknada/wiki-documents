"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95171],{15680:(e,t,i)=>{i.d(t,{xA:()=>d,yg:()=>y});var n=i(96540);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var g=n.createContext({}),s=function(e){var t=n.useContext(g),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=s(e.components);return n.createElement(g.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,g=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(i),u=o,y=c["".concat(g,".").concat(u)]||c[u]||p[u]||r;return i?n.createElement(y,a(a({ref:t},d),{},{components:i})):n.createElement(y,a({ref:t},d))}));function y(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=u;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},14508:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=i(58168),o=(i(96540),i(15680));const r={description:"Getting started with NEQTO Engine for Linux on EdgeBox-RPI-200",title:"Getting started with NEQTO Engine for Linux on EdgeBox-RPI-200",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/NEQTO_Engine_for_Linux_EdgeBox-RPI-200",last_update:{date:"04/25/2024",author:"Kazuhiro Ozuchi"}},a=void 0,l={unversionedId:"Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Edge_Box_rpi_200_NEQTO_Engine_for_Linux",id:"Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Edge_Box_rpi_200_NEQTO_Engine_for_Linux",title:"Getting started with NEQTO Engine for Linux on EdgeBox-RPI-200",description:"Getting started with NEQTO Engine for Linux on EdgeBox-RPI-200",source:"@site/docs/Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Edge_Box_rpi_200_NEQTO_Engine_for_Linux.md",sourceDirName:"Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200",slug:"/NEQTO_Engine_for_Linux_EdgeBox-RPI-200",permalink:"/NEQTO_Engine_for_Linux_EdgeBox-RPI-200",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Edge_Box_rpi_200_NEQTO_Engine_for_Linux.md",tags:[],version:"current",lastUpdatedBy:"Kazuhiro Ozuchi",lastUpdatedAt:1714003200,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{description:"Getting started with NEQTO Engine for Linux on EdgeBox-RPI-200",title:"Getting started with NEQTO Engine for Linux on EdgeBox-RPI-200",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/NEQTO_Engine_for_Linux_EdgeBox-RPI-200",last_update:{date:"04/25/2024",author:"Kazuhiro Ozuchi"}},sidebar:"ProductSidebar",previous:{title:"EdgeBox RPi 200 balena OS Setup",permalink:"/Edgebox-rpi-200-balena-OS-setup"},next:{title:"reComputer R1000 Getting Started",permalink:"/recomputer_r"}},g={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware supported",id:"hardware-supported",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Connection",id:"hardware-connection",level:3},{value:"Sign Up for a NEQTO Account:",id:"sign-up-for-a-neqto-account",level:3},{value:"Installation of NEQTO Linux",id:"installation-of-neqto-linux",level:3},{value:"Hello World",id:"hello-world",level:3},{value:"What&#39;s More / Trouble Shooting",id:"whats-more--trouble-shooting",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:s},c="wrapper";function p(e){let{components:t,...i}=e;return(0,o.yg)(c,(0,n.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"NEQTO is a lightweight and secure software package allowing companies to remotely install and configure their software on edge devices. NEQTO enables companies to provide improved software services to end users through turnkey platform connectors and built-in software lifecycle management."),(0,o.yg)("p",null,"Devices installed with NEQTO can be managed through API or the ready-to-use NEQTO Console, which includes optional services for data storage, alerts, and watchdog monitoring. Businesses can enable AIoT with near-instant installation on any Linux device and seamless data integration with any on-premise or cloud servers."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/header-img_2x.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("h3",{id:"hardware-supported"},"Hardware supported"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{class:"table-nobg"},(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("th",{class:"table-trnobg"},"EdgeBox-RPI-200")),(0,o.yg)("tr",{class:"table-trnobg"}),(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("td",{class:"table-trnobg"},(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg",style:{width:300,height:"auto"}})))),(0,o.yg)("tr",{class:"table-trnobg"}),(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("td",{class:"table-trnobg"},(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"(Any Linux machine)")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"Supported Architectures: armv6l(32bit), armv7l(32bit), aarch64(64bit), x86_64(64bit)"),(0,o.yg)("li",{parentName:"ul"},"Required disk space: \u2265 32 MB"),(0,o.yg)("li",{parentName:"ul"},"Required RAM space: \u2265 4MB (In default settings)"),(0,o.yg)("li",{parentName:"ul"},"Network Communication Interfaces: A physical network adapter must be on board."),(0,o.yg)("li",{parentName:"ul"},"Monitor, keyboard, mouse (optional)"))),(0,o.yg)("h2",{id:"getting-started"},"Getting Started"),(0,o.yg)("h3",{id:"hardware-connection"},"Hardware Connection"),(0,o.yg)("p",null,"Please refer to Getting Started Edge Box RPI-200 (",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Edge_Box_introduction/"},"https://wiki.seeedstudio.com/Edge_Box_introduction/"),")"),(0,o.yg)("h3",{id:"sign-up-for-a-neqto-account"},"Sign Up for a NEQTO Account:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Step 1. Visit this page (",(0,o.yg)("a",{parentName:"li",href:"https://console.neqto.com/register"},"https://console.neqto.com/register"),") to sign up for a NEQTO account"),(0,o.yg)("li",{parentName:"ul"},"Step 2. Enter your email address, create a password, and proceed"),(0,o.yg)("li",{parentName:"ul"},"Step 3. Verify the account from the activation email you receive ")),(0,o.yg)("h3",{id:"installation-of-neqto-linux"},"Installation of NEQTO Linux"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Select ",(0,o.yg)("inlineCode",{parentName:"li"},"Manage API Keys for Linux-based Device")," from")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65eee22eccae06004c6d9459.png",alt:"pir",width:20,height:"auto"})),(0,o.yg)("p",null,"in NEQTO Console"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65effd1accae06004c6d94a0.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Click ",(0,o.yg)("inlineCode",{parentName:"li"},"CREATE API KEY"))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65efff89ccae06004c6d94a6.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,"And then the API Key will be displayed"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65efff33ccae06004c6d94a5.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Download ",(0,o.yg)("inlineCode",{parentName:"p"},"NEQTO Engine Linux Installer")," by curl or wget."),(0,o.yg)("p",{parentName:"li"},"This time, use the wget command."))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65eeeaa3ccae06004c6d945d.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,"Copy the ",(0,o.yg)("inlineCode",{parentName:"p"},"Download link")," of ",(0,o.yg)("inlineCode",{parentName:"p"},"Installer of NEQTO Engine for Linux"),' and paste it after "wget ".'),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be384ccae06004c6d972d.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,"Installer downloads successfully"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be2f5ccae06004c6d9725.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"Change the execution permissions of the downloaded installer (",(0,o.yg)("inlineCode",{parentName:"li"},"neqto-daemon-install.latest.sh"),") with the chmod command before running the installation of NEQTO Engine for Linux.")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be308ccae06004c6d9726.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:5},(0,o.yg)("li",{parentName:"ol"},"Copy the ",(0,o.yg)("inlineCode",{parentName:"li"},"API Key")," from ",(0,o.yg)("inlineCode",{parentName:"li"},"API Keys for NEQTO Engine for Linux")," in the NEQTO Console and paste it after ",(0,o.yg)("inlineCode",{parentName:"li"},"sudo ./neqto-daemon-install.latest.sh -k "),".")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be313ccae06004c6d9727.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:6},(0,o.yg)("li",{parentName:"ol"},'Just after execution, important notes will be displayed. Please check it and enter "agree" if you agree. Thereafter, device registration will be executed, and software installation will continue.')),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be31dccae06004c6d9728.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:7},(0,o.yg)("li",{parentName:"ol"},"Please wait until the final status ",(0,o.yg)("inlineCode",{parentName:"li"},"Installation completed successfully!")," is displayed.")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be329ccae06004c6d9729.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,"Confirmation that the device has been registered on the NEQTO Console"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bc577ccae06004c6d9713.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("h3",{id:"hello-world"},"Hello World"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Click on ",(0,o.yg)("inlineCode",{parentName:"li"},"ADD GROUP")," under ",(0,o.yg)("inlineCode",{parentName:"li"},"GROUPS"),".")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9ee5ccae06004c6d96bf.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Enter ",(0,o.yg)("inlineCode",{parentName:"li"},"EdgeBox-RPI-200")," in ",(0,o.yg)("inlineCode",{parentName:"li"},"Name")," and click ",(0,o.yg)("inlineCode",{parentName:"li"},"SAVE"))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9f21ccae06004c6d96c1.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9fa0ccae06004c6d96c2.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Select the ",(0,o.yg)("inlineCode",{parentName:"li"},"EdgeBox-RPI-200")," you created and click ",(0,o.yg)("inlineCode",{parentName:"li"},"SCRIPTS"))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bc9b3ccae06004c6d9714.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"Click ",(0,o.yg)("inlineCode",{parentName:"li"},"ADD SCRIPT"))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd119ccae06004c6d9715.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:5},(0,o.yg)("li",{parentName:"ol"},"Enter ",(0,o.yg)("inlineCode",{parentName:"li"},"Hello World")," in the ",(0,o.yg)("inlineCode",{parentName:"li"},"Name")," field and click ",(0,o.yg)("inlineCode",{parentName:"li"},"SAVE"))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd134ccae06004c6d9716.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:6},(0,o.yg)("li",{parentName:"ol"},"Copy and paste the ",(0,o.yg)("a",{parentName:"li",href:"https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code"},"sample code")," from ",(0,o.yg)("inlineCode",{parentName:"li"},"Getting Started")," into the NEQTO Console script editor and then click ",(0,o.yg)("inlineCode",{parentName:"li"},"Save"),".")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd142ccae06004c6d9717.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:7},(0,o.yg)("li",{parentName:"ol"},"Click on ",(0,o.yg)("inlineCode",{parentName:"li"},"TEMPLATES"))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd156ccae06004c6d9718.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,"And then click on ",(0,o.yg)("inlineCode",{parentName:"p"},"ADD TEMPLATE")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd166ccae06004c6d9719.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:8},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Set ",(0,o.yg)("inlineCode",{parentName:"p"},"DEVICE INFORMATION")," as follows"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Enter ",(0,o.yg)("inlineCode",{parentName:"p"},"EdgeBox-RPI-200 Template")," for ",(0,o.yg)("inlineCode",{parentName:"p"},"Name")," field")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Select ",(0,o.yg)("inlineCode",{parentName:"p"},"Linux-based device")," for ",(0,o.yg)("inlineCode",{parentName:"p"},"Firmware Type")," field")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Select the latest version for ",(0,o.yg)("inlineCode",{parentName:"p"},"Firmware Version")," field"))))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd177ccae06004c6d971a.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:9},(0,o.yg)("li",{parentName:"ol"},"For ",(0,o.yg)("inlineCode",{parentName:"li"},"OPTIONS"),", select ",(0,o.yg)("inlineCode",{parentName:"li"},"Hello World")," in ",(0,o.yg)("inlineCode",{parentName:"li"},"Script")," field and click ",(0,o.yg)("inlineCode",{parentName:"li"},"SAVE"))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd186ccae06004c6d971b.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:10},(0,o.yg)("li",{parentName:"ol"},"Click on ",(0,o.yg)("inlineCode",{parentName:"li"},"NODES"))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd195ccae06004c6d971c.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,"And then click on ",(0,o.yg)("inlineCode",{parentName:"p"},"ADD NODE")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd19eccae06004c6d971d.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:11},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Set ",(0,o.yg)("inlineCode",{parentName:"p"},"META DATA")," as follows"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Set ",(0,o.yg)("inlineCode",{parentName:"p"},"Name")," field to ",(0,o.yg)("inlineCode",{parentName:"p"},"EdgeBox-RPI-200"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Set ",(0,o.yg)("inlineCode",{parentName:"p"},"Template")," field to ",(0,o.yg)("inlineCode",{parentName:"p"},"EdgeBox-RPI-200 Template")))))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1adccae06004c6d971e.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:12},(0,o.yg)("li",{parentName:"ol"},"Select the device you just registered in ",(0,o.yg)("inlineCode",{parentName:"li"},"DEVICE INFORMATION")," and click ",(0,o.yg)("inlineCode",{parentName:"li"},"SAVE"))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1baccae06004c6d971f.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1c8ccae06004c6d9720.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:13},(0,o.yg)("li",{parentName:"ol"},"Type ",(0,o.yg)("inlineCode",{parentName:"li"},"tail -F /tmp/neqto/log/neqto.log")," on the terminal on EdgeBox-RPI-200 ")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be347ccae06004c6d972b.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("ol",{start:14},(0,o.yg)("li",{parentName:"ol"},"After running ",(0,o.yg)("inlineCode",{parentName:"li"},"Reload Script")," on NEQTO Console, you can see ",(0,o.yg)("inlineCode",{parentName:"li"},"Hello World!!!")," on the terminal of EdgeBox-RPI-200 ")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1eaccae06004c6d9721.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660aad1accae06004c6d96fb.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("h2",{id:"whats-more--trouble-shooting"},"What's More / Trouble Shooting"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://support.neqto.com/hc/en-us"},"NEQTO Support")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.neqto.com/docs/en/neqto/support-guidelines"},"Support Guidelines"))),(0,o.yg)("h2",{id:"resource"},"Resource"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.neqto.com/docs/en/linux/software/requirements"},"NEQTO Resource Center"))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);