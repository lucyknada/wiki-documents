"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82248],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73810:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(58168),n=(r(96540),r(15680));const i={description:"Meshtastic\xae Network Introduction",title:"Meshtastic\xae Network Introduction",keywords:["Meshtastic"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/meshtastic_introduction",last_update:{date:"6/17/2024",author:"Jessie"}},a=void 0,s={unversionedId:"Network/Meshtastic_Network/meshtastic_intro",id:"Network/Meshtastic_Network/meshtastic_intro",title:"Meshtastic\xae Network Introduction",description:"Meshtastic\xae Network Introduction",source:"@site/docs/Network/Meshtastic_Network/meshtastic_intro.md",sourceDirName:"Network/Meshtastic_Network",slug:"/meshtastic_introduction",permalink:"/meshtastic_introduction",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/Meshtastic_Network/meshtastic_intro.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1718582400,formattedLastUpdatedAt:"Jun 17, 2024",frontMatter:{description:"Meshtastic\xae Network Introduction",title:"Meshtastic\xae Network Introduction",keywords:["Meshtastic"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/meshtastic_introduction",last_update:{date:"6/17/2024",author:"Jessie"}}},c={},l=[{value:"Features",id:"features",level:2},{value:"How it Works",id:"how-it-works",level:2},{value:"Supported Hardware",id:"supported-hardware",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,o.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://meshtastic.org/"},"Meshtastic\xae")," is an open source, off-grid, decentralized, mesh network built to run on affordable, low-power devices, it enables you to use inexpensive LoRa radios as a long range off-grid communication platform in areas without existing or reliable communications infrastructure."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://meshtastic.org/assets/images/lora-topology-2-c80684f1eafdf2a71fbaf26e494fb26d.webp",alt:"pir",width:800,height:"auto"})),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Long range (254km record by kboxlabs)"),(0,n.yg)("li",{parentName:"ul"},"No phone required for mesh communication"),(0,n.yg)("li",{parentName:"ul"},"Decentralized communication - no dedicated router required"),(0,n.yg)("li",{parentName:"ul"},"Encrypted communication"),(0,n.yg)("li",{parentName:"ul"},"Excellent battery life"),(0,n.yg)("li",{parentName:"ul"},"Send and receive text messages between members of the mesh"),(0,n.yg)("li",{parentName:"ul"},"Optional GPS based location features"),(0,n.yg)("li",{parentName:"ul"},"And more!")),(0,n.yg)("h2",{id:"how-it-works"},"How it Works"),(0,n.yg)("p",null,"Meshtastic utilizes LoRa, a long-range radio protocol, which is widely accessible in most regions without the need for additional licenses or certifications, unlike HAM radio operations."),(0,n.yg)("p",null,"These radios are designed to rebroadcast messages they receive, forming a mesh network. This setup ensures that every group member, including those at the furthest distance, can receive messages. Depending on the settings employed, the Meshtastic mesh network can support up to 100 devices concurrently."),(0,n.yg)("p",null,"Additionally, Meshtastic radios can be paired with a single phone, allowing friends and family to send messages directly to your specific radio. It's important to note that each device is capable of supporting a connection from only one user at a time.\""),(0,n.yg)("p",null,"Click ",(0,n.yg)("a",{parentName:"p",href:"https://meshtastic.org/docs/"},"here")," to learn more about Meshtastic network!"),(0,n.yg)("h2",{id:"supported-hardware"},"Supported Hardware"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Tracker Dev Kit for Meshtastic\xae \u2013 Wio Tracker 1110"),(0,n.yg)("li",{parentName:"ul"})))}d.isMDXComponent=!0}}]);