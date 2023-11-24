"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73163],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),d=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(r),c=n,v=m["".concat(p,".").concat(c)]||m[c]||u[c]||a;return r?i.createElement(v,o(o({ref:t},s),{},{components:r})):i.createElement(v,o({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},72821:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=r(87462),n=(r(67294),r(3905));const a={description:"Overview",title:"Overview",keywords:["Wio_terminal File_System"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-FS-Overview",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Overview",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-Overview",id:"Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-Overview",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-Overview.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/SD_Card",slug:"/Wio-Terminal-FS-Overview",permalink:"/Wio-Terminal-FS-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-Overview.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal File_System"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-FS-Overview",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Tapping",permalink:"/Wio-Terminal-IMU-Tapping"},next:{title:"Read and Write",permalink:"/Wio-Terminal-FS-ReadWrite"}},p={},d=[{value:"Installing the File System Library",id:"installing-the-file-system-library",level:2},{value:"Installing the Dependent SFUD Libraries",id:"installing-the-dependent-sfud-libraries",level:3},{value:"MicroSD Card Format",id:"microsd-card-format",level:2}],s={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This repo introduce how to install the File System library used on Wio Terminal. It provides basic functionality of File operating with the SD card, allowing to Read/Write in or from the SD card using SPI interface."),(0,n.kt)("h2",{id:"installing-the-file-system-library"},"Installing the File System Library"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Visit the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/master"},"Seeed_Arduino_FS")," repositories and download the entire repo to your local drive.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now, the FS library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,n.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_FS")," file that you've have just downloaded."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,n.kt)("h3",{id:"installing-the-dependent-sfud-libraries"},"Installing the Dependent SFUD Libraries"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Visit the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_SFUD"},"Seeed_Arduino_SFUD")," repositories and download the entire repo to your local drive.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now, the SFUD library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,n.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_SFUD")," file that you've have just downloaded."))),(0,n.kt)("h2",{id:"microsd-card-format"},"MicroSD Card Format"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Maximum MicroSD Card Capacity: ",(0,n.kt)("inlineCode",{parentName:"strong"},"16GB")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"MicroSD Card Format Supported:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"FAT12")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"FAT16")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"FAT32")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"exFAT"))))))}u.isMDXComponent=!0}}]);