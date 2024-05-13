"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6266],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),k=a,m=d["".concat(i,".").concat(k)]||d[k]||c[k]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(87462),a=r(67294),l=r(86010),o=r(12466),s=r(16550),i=r(91980),u=r(67392),p=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function c(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function k(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=c(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=m({queryString:r,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),f=(()=>{const e=i??d;return k({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var f=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==s&&(d(t),i(n))},k=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:k,onClick:c},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return a.createElement(v,(0,n.Z)({key:String(t)},e))}},24133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),l=r(74866),o=r(85162);const s={description:"Flash JetPack to reComputer J4012 (J401 carrier board)",title:"J401 carrier Board Flash JetPack",keywords:["reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_J4012_Flash_Jetpack",last_update:{date:"6/29/2023",author:"Lakshantha"}},i="J401 carrier board",u={unversionedId:"Edge/NVIDIA_Jetson/Carrier_Boards/J401/reComputer_J4012_Flash_Jetpack",id:"Edge/NVIDIA_Jetson/Carrier_Boards/J401/reComputer_J4012_Flash_Jetpack",title:"J401 carrier Board Flash JetPack",description:"Flash JetPack to reComputer J4012 (J401 carrier board)",source:"@site/docs/Edge/NVIDIA_Jetson/Carrier_Boards/J401/reComputer_J4012_Flash_Jetpack.md",sourceDirName:"Edge/NVIDIA_Jetson/Carrier_Boards/J401",slug:"/reComputer_J4012_Flash_Jetpack",permalink:"/reComputer_J4012_Flash_Jetpack",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Carrier_Boards/J401/reComputer_J4012_Flash_Jetpack.md",tags:[],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1687996800,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{description:"Flash JetPack to reComputer J4012 (J401 carrier board)",title:"J401 carrier Board Flash JetPack",keywords:["reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_J4012_Flash_Jetpack",last_update:{date:"6/29/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"J401 carrier board Hardware and Interfaces Usage",permalink:"/J401_carrierboard_Hardware_Interfaces_Usage"},next:{title:"reComputer-Jetson\xae Guide",permalink:"/reComputer_Intro"}},p={},d=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Flash JetPack",id:"flash-jetpack",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Enter Force Recovery Mode",id:"enter-force-recovery-mode",level:3},{value:"Flash to Jetson",id:"flash-to-jetson",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d},k="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"j401-carrier-board"},"J401 carrier board"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"800",src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_10_1.png"})),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-without-Power-Adapter-p-5637.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("p",null,"The J401 carrier board is a powerful extension board that supports NVIDIA Jetson Orin NX/Nano modules. It features 1xGbE port, 1x CAN for data transfer, M.2 Key M for SSD, M.2 Key E for WiFi/BlueTooth, 2 CSI, and 1 HDMI for high-quality video capture and display. It also contains 4x USB 3.2 ports, a fan, RTC, and a flexible 9-19V power supply. All of these make it reliable for a variety of industrial automation systems, building powerful AI applications."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Exceptional Performance Carrier Board:")," Support the NVIDIA Jetson Orin NX/Nano module, leveraging powerful computing power to take on tough tasks with ease"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Versatile Connectivity:")," Offer 1x Gigabit Ethernet port for networking, 4x USB 3.2 Type-A (10Gbps) ports,1x USB2.0 Type-C port, 1x CAN connector for fast data transfer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Flexible Storage and Wireless Expansion:")," Mount with 1x M.2 Key M 2280 and 1x M.2 Key E slots, offering ample space for flexible storage and wireless connectivity expansion"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Advanced Peripherals Supported:")," Assemble 2x 15 pins CSI camera connector, 1x HDMI 2.1, 1x fan, 1x RTC for multiple peripherals"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Wide Range of Input Voltages:")," From 9-19V DC, providing flexibility in power supply options")),(0,a.kt)("h2",{id:"specifications"},"Specifications"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Specifications"),(0,a.kt)("th",null,(0,a.kt)("a",{href:"https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html?queryID=e8d0ae9b2e338e8a860f07dacef58f6e&objectID=5631&indexName=bazaar_retailer_products"},"reComputer J3010")),(0,a.kt)("th",null,(0,a.kt)("a",{href:"https://www.seeedstudio.com/reComputer-J3011-p-5590.html"},"reComputer J3011")),(0,a.kt)("th",null,(0,a.kt)("a",{href:"https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html?queryID=5577f61da645361a7aad9179bc04efc2&objectID=5629&indexName=bazaar_retailer_products"},"reComputer J4011")),(0,a.kt)("th",null,(0,a.kt)("a",{href:"https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html?queryID=639ef60cde4a38ccc9ff2f82070d4854&objectID=5628&indexName=bazaar_retailer_products"},"reComputer J4012")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Module"),(0,a.kt)("td",null,"Jetson Orin Nano 4GB"),(0,a.kt)("td",null,"Jetson Orin Nano 8GB"),(0,a.kt)("td",null,"Jetson Orin NX 8GB"),(0,a.kt)("td",null,"Jetson Orin NX 16GB")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"AI Performance"),(0,a.kt)("td",null,"20 TOPS"),(0,a.kt)("td",null,"40 TOPS"),(0,a.kt)("td",null,"70 TOPS"),(0,a.kt)("td",null,"100 TOPS")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GPU"),(0,a.kt)("td",null,"512-core NVIDIA Ampere architecture GPU with 16 Tensor Cores"),(0,a.kt)("td",null,"1024-core NVIDIA Ampere architecture GPU with 32 Tensor Cores"),(0,a.kt)("td",{colSpan:2},"1024-core NVIDIA Ampere architecture GPU with 32 Tensor Cores")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GPU Max Frequency"),(0,a.kt)("td",{colSpan:2},"625 MHz"),(0,a.kt)("td",null,"765 MHz"),(0,a.kt)("td",null,"918 MHz")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CPU"),(0,a.kt)("td",{colSpan:2},"6-core Arm\xae Cortex\xae-A78AE v8.2 64-bit CPU",(0,a.kt)("br",null),"1.5MB L2 + 4MB L3"),(0,a.kt)("td",null,"6-core Arm\xae Cortex\xae-A78AE v8.2 64-bit CPU 1.5MB L2 + 4MB L3"),(0,a.kt)("td",null,"8-core Arm\xae Cortex\xae-A78AE v8.2 64-bit CPU 2MB L2 + 4MB L3")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CPU Max Frequency"),(0,a.kt)("td",{colSpan:2},"1.5 GHz"),(0,a.kt)("td",{colSpan:2},"2 GHz")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Memory"),(0,a.kt)("td",null,"4GB 64-bit LPDDR5",(0,a.kt)("br",null),"34 GB/s"),(0,a.kt)("td",null,"8GB 128-bit LPDDR5",(0,a.kt)("br",null),"68 GB/s"),(0,a.kt)("td",null,"8GB 128-bit LPDDR5 102.4GB/s"),(0,a.kt)("td",null,"16GB 128-bit LPDDR5 102.4GB/s")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"DL Accelerator"),(0,a.kt)("td",{colSpan:2},"/"),(0,a.kt)("td",null,"1x NVDLA v2"),(0,a.kt)("td",null,"2x NVDLA v2")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"DLA Max Frequency"),(0,a.kt)("td",{colSpan:2},"/"),(0,a.kt)("td",{colSpan:2},"614 MHz")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Vision Accelerator"),(0,a.kt)("td",{colSpan:2},"/"),(0,a.kt)("td",{colSpan:2},"1x PVA v2")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Storage"),(0,a.kt)("td",{colSpan:4},"128GB NVMe SSD")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Video Encoder"),(0,a.kt)("td",{colSpan:2},"1080p30 supported by 1-2 CPU cores"),(0,a.kt)("td",{colSpan:2},"1x 4K60 (H.265) | 3x 4K30 (H.265)",(0,a.kt)("br",null),"6x 1080p60 (H.265) | 12x 1080p30 (H.265)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Video Decoder"),(0,a.kt)("td",{colSpan:2},"1x 4K60 (H.265)",(0,a.kt)("br",null),"2x 4K30 (H.265)",(0,a.kt)("br",null),"5x 1080p60 (H.265)",(0,a.kt)("br",null),"11x 1080p30 (H.265)"),(0,a.kt)("td",{colSpan:2},"1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)",(0,a.kt)("br",null),"9x 1080p60 (H.265) | 18x 1080p30 (H.265)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Display"),(0,a.kt)("td",{colSpan:4},"1* HDMI 2.1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CSI Camera"),(0,a.kt)("td",{colSpan:4},"2* CSI \uff082-lane 15pin\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Networking"),(0,a.kt)("td",{colSpan:4},"1* Gigabit Ethernet (10/100/1000M)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"USB"),(0,a.kt)("td",{colSpan:4},"4* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (Device Mode)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"M.2 Key M"),(0,a.kt)("td",{colSpan:4},"1* M.2 Key M")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"M.2 Key E"),(0,a.kt)("td",{colSpan:4},"1* M.2 Key E")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Fan"),(0,a.kt)("td",{colSpan:4},"1* 4 pin Fan Connector(5V PWM)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CAN"),(0,a.kt)("td",{colSpan:4},"1* CAN")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Multifunctional Port"),(0,a.kt)("td",{colSpan:4},"1* 40-Pin Expansion header,1* 12-Pin Control and UART header")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"RTC"),(0,a.kt)("td",{colSpan:4},"RTC 2-pin, RTC socket (supports CR1220 but not included)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Power"),(0,a.kt)("td",{colSpan:4},"9-19V")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Power Supply"),(0,a.kt)("td",{colSpan:4},"Power adapter not included")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Temperature"),(0,a.kt)("td",{colSpan:4},"-10\u2103~60\u2103")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Mechanical"),(0,a.kt)("td",{colSpan:4},"130mm x120mm x 58.5mm")))),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/reComputer-J4012/6.png"})),(0,a.kt)("h2",{id:"flash-jetpack"},"Flash JetPack"),(0,a.kt)("p",null,"Here, we will show you how to flash ",(0,a.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetpack"},"Jetpack")," to an NVMe SSD connected to the reComputer J4012/ J4011/ J3010 and J3011. All these devices come with J401 carrier board inside and the flashing procedure is the same for all."),(0,a.kt)("p",null,"reComputer J40/ J30 series comes with JetPack 5.1 pre-installed on the included NVMe SSD, so that you do not need to flash it. However, if you want to flash it again with JetPack, you can follow this guide."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ubuntu Host PC (native or VM using VMware Workstation Player)"),(0,a.kt)("li",{parentName:"ul"},"reComputer J4012/ J4011/ J3010 and J3011"),(0,a.kt)("li",{parentName:"ul"},"USB Type-C data transmission cable")),(0,a.kt)("h3",{id:"enter-force-recovery-mode"},"Enter Force Recovery Mode"),(0,a.kt)("p",null,"Before we can move on to the installation steps, we need to make sure that the reComputer is in force recovery mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Use a jumper wire to connect the ",(0,a.kt)("strong",{parentName:"p"},"FC REC")," pin and the ",(0,a.kt)("strong",{parentName:"p"},"GND")," pin."),(0,a.kt)("table",{align:"center"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null," "),(0,a.kt)("th",null,"Button Header"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Button Header"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{rowspan:"6"},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"200",src:"https://files.seeedstudio.com/wiki/reComputer-J4012/1.png"}))),(0,a.kt)("td",null,"1"),(0,a.kt)("td",null,"PWR BTN"),(0,a.kt)("td",null,"7"),(0,a.kt)("td",null,"AUTO ON")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2"),(0,a.kt)("td",null,"GND"),(0,a.kt)("td",null,"8"),(0,a.kt)("td",null,"DIS")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"3"),(0,a.kt)("td",null,"FC REC"),(0,a.kt)("td",null,"9"),(0,a.kt)("td",null,"UART TXD")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"4"),(0,a.kt)("td",null,"GND"),(0,a.kt)("td",null,"10"),(0,a.kt)("td",null,"UART RXD")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"5"),(0,a.kt)("td",null,"SYS RET"),(0,a.kt)("td",null,"11"),(0,a.kt)("td",null,"LED +")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"6"),(0,a.kt)("td",null,"GND"),(0,a.kt)("td",null,"12"),(0,a.kt)("td",null,"LED -")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Power up the reComputer by connecting the included cable from the power adapter and connect the board with the Ubuntu host PC with a USB Type-C data transmission cable"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"700",src:"https://files.seeedstudio.com/wiki/reComputer-J4012/2.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," On the Linux host PC, open a Terminal window and enter the command ",(0,a.kt)("inlineCode",{parentName:"p"},"lsusb"),". If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For Orin NX 16GB: ",(0,a.kt)("strong",{parentName:"li"},"0955:7323 NVidia Corp")),(0,a.kt)("li",{parentName:"ul"},"For Orin NX 8GB: ",(0,a.kt)("strong",{parentName:"li"},"0955:7423 NVidia Corp")),(0,a.kt)("li",{parentName:"ul"},"For Orin Nano 8GB: ",(0,a.kt)("strong",{parentName:"li"},"0955:7523 NVidia Corp")),(0,a.kt)("li",{parentName:"ul"},"For Orin Nano 4GB: ",(0,a.kt)("strong",{parentName:"li"},"0955:7623 NVidia Corp"))),(0,a.kt)("p",null,"The below image is for Orin NX 16GB"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"700",src:"https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Remove the jumper wire"),(0,a.kt)("h3",{id:"flash-to-jetson"},"Flash to Jetson"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Before moving onto flashing, it should be noted that Jetson Orin NX module only supports JetPack 5.1 and above, while Jetson Orin Nano module only supports JetPack 5.1.1 and above.")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"JP5.1.1",label:"JP5.1.1",mdxType:"TabItem"},(0,a.kt)("p",null,"Here we will use NVIDIA L4T 35.3.1 to install Jetpack 5.1.1 on the reComputer"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," ",(0,a.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r3531"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"700",src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Extract ",(0,a.kt)("strong",{parentName:"p"},"Jetson_Linux_R35.3.1_aarch64")," and ",(0,a.kt)("strong",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64")," by navigating to the folder containing these files, apply the changes and install the necessary prerequisites"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tar xf Jetson_Linux_R35.3.1_aarch64\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Configure your username, password & hostname so that you do not need to enter the Ubuntu installation wizard after the device finishes booting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license\n")),(0,a.kt)("p",null,'For example (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Flash the system to the NVMe SSD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 p3509-a02+p3767-0000 internal\n')),(0,a.kt)("p",null,"You will see the following output if the flashing process is successful"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"700",src:"https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"}))),(0,a.kt)(o.Z,{value:"JP5.1.2",label:"JP5.1.2",mdxType:"TabItem"},(0,a.kt)("p",null,"Here we will use NVIDIA L4T 35.4.1 to install Jetpack 5.1.2 on the reComputer"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," ",(0,a.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r3541"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"700",src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Extract ",(0,a.kt)("strong",{parentName:"p"},"Jetson_Linux_R35.4.1_aarch64")," and ",(0,a.kt)("strong",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64")," by navigating to the folder containing these files, apply the changes and install the necessary prerequisites"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tar xf Jetson_Linux_R35.4.1_aarch64\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\n")),(0,a.kt)("p",null,"Now we need to apply a patch from NVIDIA which is needed for JP5.1.2 and explained ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/jetson/archives/r35.4.1/ReleaseNotes/Jetson_Linux_Release_Notes_r35.4.1.pdf"},"here")," in section 4.2.3 of the official NVIDIA JetPack Release Notes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Navigate to the following directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd Linux_for_Tegra/bootloader/t186ref/BCT\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Open the file ",(0,a.kt)("strong",{parentName:"p"},'"tegra234-mb2-bct-scr-p3767-0000.dts"')," and add the following lines under  ",(0,a.kt)("strong",{parentName:"p"},"tfc")," section"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tfc {\n    reg@322 { /* GPIO_M_SCR_00_0 */\n    exclusion-info = <2>;\n    value = <0x38008080>;\n    };\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5:")," Navigate to ",(0,a.kt)("strong",{parentName:"p"},'"Linux_for_Tegra"')," directory, and enter the below command to configure your username, password & hostname so that you do not need to enter the Ubuntu installation wizard after the device finishes booting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd Linux_for_Tegra\nsudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license\n")),(0,a.kt)("p",null,'For example (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 6:")," Flash the system to the NVMe SSD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 p3509-a02+p3767-0000 internal\n')),(0,a.kt)("p",null,"You will see the following output if the flashing process is successful"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"700",src:"https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"})))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);