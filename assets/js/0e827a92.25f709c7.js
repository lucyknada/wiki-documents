"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||s;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:o,a[1]=r;for(var d=2;d<s;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>w,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var i=n(87462),o=n(67294),s=n(3905);const a=()=>{const[e,t]=(0,o.useState)([]),[i,s]=(0,o.useState)([]),a=[{id:1,name:"CVEDIA-RT",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/cvedia-logo.jpg",scenes:[4]},{id:2,name:"Lumeo",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/lumeo-logo.jpg",scenes:[4]},{id:3,name:"alwaysAI",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools83.png",scenes:[1]},{id:4,name:"YOLOv8",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/yolov8-logo.png",scenes:[1,2,4]},{id:5,name:"YOLOv5",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools80.png",scenes:[2,4]},{id:6,name:"roboflow",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools81.png",scenes:[1,4]},{id:7,name:"Allxon",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools4.png",scenes:[5]},{id:8,name:"Deci",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools82.png",scenes:[3]},{id:9,name:"Edge Impulse",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/ei-logo.png",scenes:[1,2,4]},{id:10,name:"Cochl.Sense",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/cochl-logo.png",scenes:[4]}],r=[{id:1,name:"Data Upload & Label",link:"https://www.baidu.com/",img:"huang.png",brands:[3,4,6,9]},{id:2,name:"Train",link:"https://www.baidu.com/",img:"huang.png",brands:[4,5,9]},{id:3,name:"Optimize",link:"https://www.baidu.com/",img:"huang.png",brands:[8]},{id:4,name:"Deploy",link:"https://www.baidu.com/",img:"huang.png",brands:[1,2,4,5,6,9,10]},{id:5,name:"Remote Manage",link:"https://www.baidu.com/",img:"huang.png",brands:[7]}],l=()=>{t([]),s([])};return o.createElement("div",{className:"hardware_container"},o.createElement("div",{className:"brand-list "},o.createElement("ul",null,a.map((n=>o.createElement("li",{key:n.id,onMouseEnter:()=>(e=>{t([e]);const n=r.filter((t=>t.brands.includes(e.id)));s(n)})(n),onMouseLeave:l,className:"padding--sm "+(e.find((e=>e.id===n.id))?"selected":""),style:{backgroundImage:e.find((e=>e.id===n.id))?`url(${n.bg})`:""}},o.createElement("a",{target:"_blank",href:n.link},n.name)))))),o.createElement("div",{className:"scene-list"},o.createElement("ul",null,r.map((e=>o.createElement("li",{key:e.id,onMouseEnter:()=>(e=>{t([]);const n=e.brands,i=a.filter((e=>n.includes(e.id)));console.log(i),s([e]),i.length&&t(i)})(e),onMouseLeave:l,className:"padding--sm "+(i.find((t=>t.id===e.id))?"selected":"")},o.createElement("a",{className:"scene-item",target:"_blank",href:e.link},o.createElement("img",{src:n(12487).Z}),o.createElement("div",{className:"srene-title"},"  ",e.name))))))))},r=()=>{const[e,t]=(0,o.useState)([]),[i,s]=(0,o.useState)([]),a=[{id:1,name:"CVEDIA-RT",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/cvedia-logo.jpg",scenes:[4]},{id:2,name:"Lumeo",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/lumeo-logo.jpg",scenes:[4]},{id:3,name:"alwaysAI",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools83.png",scenes:[1]},{id:4,name:"YOLOv8",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/yolov8-logo.png",scenes:[1,2,4]},{id:5,name:"YOLOv5",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools80.png",scenes:[2,4]},{id:6,name:"roboflow",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools81.png",scenes:[1,4]},{id:7,name:"Allxon",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools4.png",scenes:[5]},{id:8,name:"Deci",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools82.png",scenes:[3]},{id:9,name:"Edge Impulse",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/ei-logo.png",scenes:[1,2,4]},{id:10,name:"Cochl.Sense",link:"https://www.baidu.com/",bg:"https://files.seeedstudio.com/wiki/recomputerzhongwen/cochl-logo.png",scenes:[4]}],r=[{id:1,name:"Data Upload & Label",link:"https://www.baidu.com/",img:"huang.png",brands:[3,4,6,9]},{id:2,name:"Train",link:"https://www.baidu.com/",img:"huang.png",brands:[4,5,9]},{id:3,name:"Optimize",link:"https://www.baidu.com/",img:"huang.png",brands:[8]},{id:4,name:"Deploy",link:"https://www.baidu.com/",img:"huang.png",brands:[1,2,4,5,6,9,10]},{id:5,name:"Remote Manage",link:"https://www.baidu.com/",img:"huang.png",brands:[7]}],l=()=>{t([]),s([])};return o.createElement("div",{className:"software_container"},o.createElement("div",{className:"brand-list "},o.createElement("ul",null,a.map((n=>o.createElement("li",{key:n.id,onMouseEnter:()=>(e=>{t([e]);const n=r.filter((t=>t.brands.includes(e.id)));s(n)})(n),onMouseLeave:l,className:"padding--sm "+(e.find((e=>e.id===n.id))?"selected":""),style:{backgroundImage:e.find((e=>e.id===n.id))?`url(${n.bg})`:""}},o.createElement("a",{target:"_blank",href:n.link},n.name)))))),o.createElement("div",{className:"scene-list"},o.createElement("ul",null,r.map((e=>o.createElement("li",{key:e.id,onMouseEnter:()=>(e=>{t([]);const n=e.brands,i=a.filter((e=>n.includes(e.id)));console.log(i),s([e]),i.length&&t(i)})(e),onMouseLeave:l,className:"padding--sm "+(i.find((t=>t.id===e.id))?"selected":"")},o.createElement("a",{className:"scene-item",target:"_blank",href:e.link},o.createElement("img",{src:n(12487).Z}),o.createElement("div",{className:"srene-title"},"  ",e.name))))))))},l=()=>o.createElement("div",null,o.createElement(a,null),o.createElement(r,null)),d={description:"NVIDIA\xae Jetson\u2122-Powered Edge Devices",title:"NVIDIA\xae Jetson\u2122-Powered Edge Devices",keywords:["Edge","reComputer","reServer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"07/20/2023",author:"Matthew"}},c=void 0,m={unversionedId:"Edge/reComputer/RecomputerPage",id:"Edge/reComputer/RecomputerPage",title:"NVIDIA\xae Jetson\u2122-Powered Edge Devices",description:"NVIDIA\xae Jetson\u2122-Powered Edge Devices",source:"@site/docs/Edge/reComputer/RecomputerPage.mdx",sourceDirName:"Edge/reComputer",slug:"/Edge/reComputer/RecomputerPage",permalink:"/Edge/reComputer/RecomputerPage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/RecomputerPage.mdx",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1689811200,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{description:"NVIDIA\xae Jetson\u2122-Powered Edge Devices",title:"NVIDIA\xae Jetson\u2122-Powered Edge Devices",keywords:["Edge","reComputer","reServer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"07/20/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"FAQs for Jetson Usage",permalink:"/Jetson_FAQ"},next:{title:"MaskCam",permalink:"/Jetson-Nano-MaskCam"}},p={},u=[{value:"What are in the NVIDIA\xae Jetson\u2122-Powered Edge Devices?",id:"what-are-in-the-nvidia-jetson-powered-edge-devices",level:2},{value:"The reComputer series",id:"the-recomputer-series",level:2},{value:"THe reComputer",id:"the-recomputer",level:3},{value:"title 1",id:"title-1",level:3},{value:"title 2",id:"title-2",level:2}],g={toc:u};function w(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-platform/collection_page/NVIDIA_Jetson_collection_front.jpg",style:{width:1200,height:"auto"}})),(0,s.kt)(l,{title:"NVDIA Jetson Hardware",mdxType:"RecomputerPage"}),(0,s.kt)("h2",{id:"what-are-in-the-nvidia-jetson-powered-edge-devices"},"What are in the NVIDIA\xae Jetson\u2122-Powered Edge Devices?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The reComputer Series")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The reComputer Industrial Series")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Embedded Mini PCs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The reServer Series")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"All Carrier Boards for NVIDIA Jetson Modules"))),(0,s.kt)("h2",{id:"the-recomputer-series"},"The reComputer series"),(0,s.kt)("p",null,"The reComputer series are hand-size edge AI boxes built with differenct NVIDIA Jetson module which delivers high AI performance to multiple edge scenarios. Each of it has a rich set of IOs, equipped with an aluminum case, a cooling fan with a heatsink, and a pre-installed JetPack System with NVIDIA JetPack\u2122."),(0,s.kt)("h3",{id:"the-recomputer"},"THe reComputer"),(0,s.kt)("h3",{id:"title-1"},"title 1"),(0,s.kt)("h2",{id:"title-2"},"title 2"))}w.isMDXComponent=!0},12487:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/nvidia_icon-89e2cf7bce904210a53a2ae0c9c4c51d.png"}}]);