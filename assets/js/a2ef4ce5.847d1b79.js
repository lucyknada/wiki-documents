"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=l,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(k,o(o({ref:t},d),{},{components:r})):n.createElement(k,o({ref:t},d))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),l=r(86010);const a={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(a.tabItem,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(87462),l=r(67294),a=r(86010),o=r(12466),i=r(16550),s=r(91980),u=r(67392),d=r(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:l}}=e;return{value:t,label:r,attributes:n,default:l}}))}function c(e){const{values:t,children:r}=e;return(0,l.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=c(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[s,u]=k({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,d.Nk)(r);return[n,(0,l.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:a})?e:null})();(0,l.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,a]),tabValues:a}}var f=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=d.indexOf(t),n=u[r].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},o,{className:(0,a.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=h(e);return l.createElement("div",{className:(0,a.Z)("tabs-container",g.tabList)},l.createElement(w,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function S(e){const t=(0,f.Z)();return l.createElement(b,(0,n.Z)({key:String(t)},e))}},37985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),l=(r(67294),r(3905)),a=r(74866),o=r(85162);const i={description:"reComputer Industrial Getting Started",title:"Getting Started with reComputer Industrial",keywords:["reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Industrial_Getting_Started",last_update:{date:"05/16/2023",author:"Lakshantha"}},s="Getting Started with reComputer Industrial",u={unversionedId:"Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Industrial/reComputer_Industrial_Getting_Started",id:"Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Industrial/reComputer_Industrial_Getting_Started",title:"Getting Started with reComputer Industrial",description:"reComputer Industrial Getting Started",source:"@site/docs/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Industrial/reComputer_Industrial_Getting_Started.md",sourceDirName:"Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Industrial",slug:"/reComputer_Industrial_Getting_Started",permalink:"/reComputer_Industrial_Getting_Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Industrial/reComputer_Industrial_Getting_Started.md",tags:[],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1684195200,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{description:"reComputer Industrial Getting Started",title:"Getting Started with reComputer Industrial",keywords:["reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Industrial_Getting_Started",last_update:{date:"05/16/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"reComputer-Jetson\xae Guide",permalink:"/reComputer_Intro"},next:{title:"reComputer Industrial J20 Hardware and Interfaces Usage",permalink:"/reComputer_Industrial_J20_Hardware_Interfaces_Usage"}},d={},p=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Full System",id:"full-system",level:3},{value:"Carrier Board",id:"carrier-board",level:3},{value:"Flash JetPack",id:"flash-jetpack",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Enter Force Recovery Mode",id:"enter-force-recovery-mode",level:3},{value:"Different Methods of Flashing",id:"different-methods-of-flashing",level:3},{value:"Download System Image",id:"download-system-image",level:4},{value:"Flash to Jetson",id:"flash-to-jetson",level:4},{value:"Download and Prepare NVIDIA L4T and rootfs",id:"download-and-prepare-nvidia-l4t-and-rootfs",level:4},{value:"Download and Prepare Drivers",id:"download-and-prepare-drivers",level:4},{value:"Flash to Jetson",id:"flash-to-jetson-1",level:4},{value:"Hardware and Interfaces Usage",id:"hardware-and-interfaces-usage",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:p},m="wrapper";function k(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getting-started-with-recomputer-industrial"},"Getting Started with reComputer Industrial"),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"700",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png"})),(0,l.kt)("p",null,"reComputer industrial series offers full systems including NVIDIA Jetson\u2122 Xavier NX/ Orin Nano/Orin NX/ modules, ranging from 20 TOPS to 100 TOPS AI performance. Preinstalled with Jetpack 5.1.1, reComputer industrial simplifies development, ideal for bulding applications of video analytics, object detection, natural language processing, medical imaging, and robots, which brings digital transformantion across industries of smart cities, security, industrial automation, smart factories."),(0,l.kt)("p",null,"reComputer industrial comes with a passive heatsink and a fanless design, making it ideal for use in demanding environments. The passive heatsink allows for efficient cooling without the need for a fan, reducing the risk of component failure due to dust or other contaminants. The fanless design also reduces noise levels and power consumption, making it suitable for use in noise-sensitive environments and minimizing energy costs."),(0,l.kt)("p",null,"reComputer industrial has 2 RJ45 GbE ports, one of which is a PoE PSE port for providing power over Ethernet to devices like IP cameras. This eliminates the need for a separate power source and makes it easier to deploy network devices in areas without readily available power outlets. The other GbE port is used to connect to a network switch or router, enabling communication with other devices on the network and access to the Internet."),(0,l.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,l.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html"},(0,l.kt)("strong",null,(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Fanless compact PC:")," Thermal reference design, wider temperature support -20 ~ 60\xb0C with 0.7m/s airflow"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Designed for industrial interfaces:")," 2x RJ-45 GbE(1 for POE-PSE 802.3 af); 1x RS-232/RS-422/RS-485; 4x DI/DO; 1x CAN; 3x USB3.2; 1x TPM2.0 (Module optional)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Hybrid connectivity:")," Support 5G/4G/LTE/LoRaWAN\xae (Module optional) with 1x Nano SIM card slot"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Flexible mounting:")," Desk, DIN rail, wall-mounting, VESA"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Certifications:")," FCC, CE, RoHS, UKCA")),(0,l.kt)("h2",{id:"specifications"},"Specifications"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:2},"Product Name"),(0,l.kt)("th",null,"reComputer Industrial J4012"),(0,l.kt)("th",null,"reComputer Industrial J4011"),(0,l.kt)("th",null," reComputer Industrial J3011 "),(0,l.kt)("th",null," reComputer Industrial J3010"),(0,l.kt)("th",null,"reComputer Industrial J2012"),(0,l.kt)("th",null,"reComputer Industrial J2011"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:2},"NVIDIA Jetson Module"),(0,l.kt)("td",null,"Orin NX 16GB"),(0,l.kt)("td",null,"Orin NX 8GB"),(0,l.kt)("td",null,"Orin Nano 8GB"),(0,l.kt)("td",null,"Orin Nano 4GB"),(0,l.kt)("td",null,"Xavier NX 16GB"),(0,l.kt)("td",null,"Xavier NX 8GB")),(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:2},"SKU"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html"},"110110191")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html"},"110110190")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html"},"110110193")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://www.seeedstudio.com/reComputer-Industrial-J3010-p-5686.html"},"110110192")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://www.seeedstudio.com/reComputer-Industrial-J2012-p-5685.html"},"110110189")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://www.seeedstudio.com/reComputer-Industrial-J2011-p-5683.html"},"110110188"))),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:6},"Processor System"),(0,l.kt)("td",null,"AI Performance"),(0,l.kt)("td",null,"100 TOPS"),(0,l.kt)("td",null,"70 TOPS"),(0,l.kt)("td",null,"40 TOPS"),(0,l.kt)("td",null,"20 TOPS"),(0,l.kt)("td",{colSpan:2},"21 TOPS")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"GPU"),(0,l.kt)("td",{colSpan:3},"1024-core NVIDIA Ampere architecture GPU with 32 Tensor Cores"),(0,l.kt)("td",null,"512-core NVIDIA Ampere architecture GPU with 16 Tensor Cores"),(0,l.kt)("td",{colSpan:2},"384-core NVIDIA Volta\u2122 GPU with 48 Tensor Cores")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"CPU"),(0,l.kt)("td",null,"8-core Arm\xae Cortex\xae-A78AE v8.2 64-bit CPU",(0,l.kt)("br",null),"2MB L2 + 4MB L3"),(0,l.kt)("td",{colSpan:3},"6-core Arm\xae Cortex\xae-A78AE v8.2 64-bit CPU",(0,l.kt)("br",null),"1.5MB L2 + 4MB L3"),(0,l.kt)("td",{colSpan:2},"6-core NVIDIA Carmel ARM\xaev8.2 64-bit CPU, 6MB L2 + 4MB L3")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Memory"),(0,l.kt)("td",null,"16GB 128-bit LPDDR5",(0,l.kt)("br",null),"102.4GB/s"),(0,l.kt)("td",null,"8GB 128-bit LPDDR5",(0,l.kt)("br",null),"102.4GB/s"),(0,l.kt)("td",null,"8GB 128-bit LPDDR5",(0,l.kt)("br",null),"68 GB/s"),(0,l.kt)("td",null,"4GB 64-bit LPDDR5",(0,l.kt)("br",null),"34 GB/s"),(0,l.kt)("td",null,"16GB 128-bit LPDDR4x",(0,l.kt)("br",null),"59.7GB/s"),(0,l.kt)("td",null,"8GB 128-bit LPDDR4x",(0,l.kt)("br",null),"59.7GB/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Video Encode"),(0,l.kt)("td",{colSpan:2},"1*4K60 (H.265) | 3*4K30 (H.265) | 6*1080p60 (H.265) | 12*1080p30 (H.265)"),(0,l.kt)("td",{colSpan:2},"1080p30 supported by 1-2 CPU cores"),(0,l.kt)("td",{colSpan:2},"2*4K60 | 4*4K30 | 10*1080p60 | 22*1080p30 (H.265)",(0,l.kt)("br",null)," 2*4K60 | 4*4K30 | 10*1080p60 | 20*108p30 (H.264)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Video Decode"),(0,l.kt)("td",{colSpan:2},"1*8K30 (H.265) | 2*4K60 (H.265) | 4*4K30 (H.265) | 9*1080p60 (H.265) | 18*1080p30 (H.265)"),(0,l.kt)("td",{colSpan:2},"1*4K60 (H.265) | 2*4K30 (H.265) | 5*1080p60 (H.265) | 11*1080p30 (H.265)"),(0,l.kt)("td",{colSpan:2},"2*8K30 | 6*4K60 | 12*4K30 | 22*1080p60 | 44*1080p30 (H.265)",(0,l.kt)("br",null)," 2*4K60 | 6*4K30 | 10*1080p60 | 22*1080p30 (H.264)")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:2},"Storage"),(0,l.kt)("td",null,"eMMC",(0,l.kt)("br",null)),(0,l.kt)("td",null,(0,l.kt)("br",null),"-"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",{colSpan:2},"16GB eMMC 5.1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Expansion"),(0,l.kt)("td",{colSpan:6},"M.2 Key M PCIe Gen4.0 SSD (M.2 NVMe 2280 SSD 128G included)")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:6},"I/O"),(0,l.kt)("td",null,"Networking"),(0,l.kt)("td",{colSpan:6},"1* LAN1 RJ45 GbE PoE(PSE 802.3 af 15 W)",(0,l.kt)("br",null),"1* LAN2 RJ45 GbE (10/100/1000Mbps) ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"USB"),(0,l.kt)("td",{colSpan:6},"3* USB3.2 Gen1, 1* USB2.0 Type C(Device mode), 1* USB2.0 Type C For Debug UART & RP2040")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"DI/DO"),(0,l.kt)("td",{colSpan:6},"4*DI,4*DO,3*GND_DI,2*GND_DO,1*GND_ISO,1*CAN",(0,l.kt)("br",null))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"COM"),(0,l.kt)("td",{colSpan:6},"1* DB9 (RS232/RS422/RS485)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Display"),(0,l.kt)("td",{colSpan:6},"1*HDMI 2.0 Type A")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"SIM"),(0,l.kt)("td",{colSpan:6},"1* Nano SIM card slot")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:7},"Expansion"),(0,l.kt)("td",null,"Mini PCIe"),(0,l.kt)("td",{colSpan:6},"Mini PCIe for 4G/LoRaWAN\xae\xa0\xa0(Module optional) ",(0,l.kt)("br",null))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Wi-Fi"),(0,l.kt)("td",{colSpan:6},"Support SMD Wi-Fi/Bluetooth (Module optional) ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"M.2 Key B "),(0,l.kt)("td",{colSpan:6},"M.2 Key B support 4G/5G (Module optional) ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Fan"),(0,l.kt)("td",{colSpan:6},"Fanless, passive heatsink",(0,l.kt)("br",null),"1*Fan connectors(5V PWM)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"TPM"),(0,l.kt)("td",{colSpan:6},"1* TPM 2.0 connector (Module optional) ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"RTC"),(0,l.kt)("td",{colSpan:6},"1* RTC socket (CR1220 included), 1* RTC 2-pin")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Camera"),(0,l.kt)("td",{colSpan:6},"2* CSI (2-lane 15pin)")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:2},"Power"),(0,l.kt)("td",null,"Power Supply"),(0,l.kt)("td",{colSpan:6},"DC 12V-24V Terminal block 2 pin")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Power Adapter"),(0,l.kt)("td",{colSpan:6},"19V Power Adapter(without power cord) ")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:3},"Mechanical",(0,l.kt)("br",null)),(0,l.kt)("td",null,"Dimensions (W x D x H)"),(0,l.kt)("td",{colSpan:6},"159mm*155mm*57mm")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Weight"),(0,l.kt)("td",{colSpan:6},"1.57kg")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Installation"),(0,l.kt)("td",{colSpan:6},"Desk, DIN rail, wall-mounting, VESA")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:4},"Environment"),(0,l.kt)("td",null,"Operating Temperature"),(0,l.kt)("td",{colSpan:6}," -20 ~ 60\xb0C with 0.7m/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Operating Humidity"),(0,l.kt)("td",{colSpan:6},"95% @ 40 \xb0C (non-condensing)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Vibration"),(0,l.kt)("td",{colSpan:6},"3 Grms @ 5 ~ 500 Hz, random, 1 hr/axis")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Shock"),(0,l.kt)("td",{colSpan:6},"50G peak acceleration (11 msec)")),(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:2},"OS"),(0,l.kt)("td",{colSpan:6},"Pre-installed Jetpack 5.1 (above) (provide Linux OS with board support package)")),(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:2},"Certification"),(0,l.kt)("td",{colSpan:6},"FCC, CE, RoHS, UKCA")),(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:2},"Warranty"),(0,l.kt)("td",{colSpan:6},"2 Years")))),(0,l.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,l.kt)("h3",{id:"full-system"},"Full System"),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/3.jpg"})),(0,l.kt)("h3",{id:"carrier-board"},"Carrier Board"),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/4.jpg"})),(0,l.kt)("h2",{id:"flash-jetpack"},"Flash JetPack"),(0,l.kt)("p",null,"reComputer Industrial comes pre-installed with JetPack 5.1.1 on a 128GB SSD along with the necessary drivers. This included SDK components such as CUDA, CUDNN and TensorRT. However, if you want to reflash Jetpack to the included SSD or to a new SSD, you can follow the steps."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you want to use SSDs with reComputer Industrial, we only recommend you choose the ",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html"},"128GB"),", the ",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html"},"256GB"),", and the ",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html"},"512GB")," versions from Seeed.")),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"You need to prepare the following hardware before getting started with reComputer Industrial"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"reComputer Industrial"),(0,l.kt)("li",{parentName:"ul"},"Provided Power Adapter with power cord (",(0,l.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/AC-US-p-5122.html"},"US version")," or ",(0,l.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/AC-EU-p-5121.html"},"EU version"),")"),(0,l.kt)("li",{parentName:"ul"},"Ubuntu 20.04 Host PC"),(0,l.kt)("li",{parentName:"ul"},"USB Type-C data transmission cable"),(0,l.kt)("li",{parentName:"ul"},"External monitor"),(0,l.kt)("li",{parentName:"ul"},"HDMI cable"),(0,l.kt)("li",{parentName:"ul"},"Keyboard and Mouse")),(0,l.kt)("h3",{id:"enter-force-recovery-mode"},"Enter Force Recovery Mode"),(0,l.kt)("p",null,"Now you need to enter recovery mode on the reComputer Industrial board in order flash the device. "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Connect a USB Type-C cable between ",(0,l.kt)("strong",{parentName:"li"},"USB2.0 DEVICE")," port and your PC."),(0,l.kt)("li",{parentName:"ol"},"Use a pin and insert into the ",(0,l.kt)("strong",{parentName:"li"},"RECOVERY")," hole to press recovery button and while holding this."),(0,l.kt)("li",{parentName:"ol"},"Connect the included ",(0,l.kt)("strong",{parentName:"li"},"2-Pin Terminal block power connector")," to the power connector on the board and connect the included power adapter with a power cord to turn on the board."),(0,l.kt)("li",{parentName:"ol"},"Release the recovery button.")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"750",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/97.png"})),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Make sure you power on the device while holding the RECOVERY button or otherwise it will not enter recovery mode")),(0,l.kt)("p",null,"On the Ubuntu host PC, open a Terminal window and enter the command ",(0,l.kt)("strong",{parentName:"p"},"lsusb"),". If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For Orin NX 16GB: ",(0,l.kt)("strong",{parentName:"li"},"0955:7323 NVidia Corp")),(0,l.kt)("li",{parentName:"ul"},"For Orin NX 8GB: ",(0,l.kt)("strong",{parentName:"li"},"0955:7423 NVidia Corp")),(0,l.kt)("li",{parentName:"ul"},"For Orin Nano 8GB: ",(0,l.kt)("strong",{parentName:"li"},"0955:7523 NVidia Corp")),(0,l.kt)("li",{parentName:"ul"},"For Orin Nano 4GB: ",(0,l.kt)("strong",{parentName:"li"},"0955:7623 NVidia Corp"))),(0,l.kt)("h3",{id:"different-methods-of-flashing"},"Different Methods of Flashing"),(0,l.kt)("p",null,"Here we offer 2 different methods of flashing."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the entire system image we have prepared which includes NVIDIA JetPack, hardware periheral drivers and flash to device"),(0,l.kt)("li",{parentName:"ol"},"Download official NVIDIA L4T, use the included hardware periheral drivers and flash to device")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The first method download is around 14GB and the second method download is about 3GB")),(0,l.kt)(a.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"method1",label:"Method 1",mdxType:"TabItem"},(0,l.kt)("h4",{id:"download-system-image"},"Download System Image"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1:")," Download the system image to your Ubuntu PC corresponding to the board you are using")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Device"),(0,l.kt)("th",null,"Image Link"),(0,l.kt)("th",null,"JetPack Version"),(0,l.kt)("th",null,"L4T Version"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"reComputer Industrial J4012"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://nv-jetson-images.oss-us-west-1.aliyuncs.com/reComputer-Industrial/mfi_jetson-orin-nx-devkit-16g-5.1-35.3.1-recompter-industrial-v0.3.tar.gz?OSSAccessKeyId=LTAI5tKm7UD2hmuFW85cz42T&Expires=6547176909&Signature=Sg%2BKNmeBNE5kAOCaOGtIIH3Chj4%3D",target:"_blank",rel:"noopener noreferrer"},"Download")),(0,l.kt)("td",{rowSpan:6},"5.1.1"),(0,l.kt)("td",{rowSpan:6},"35.3.1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"reComputer Industrial J4011"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://nv-jetson-images.oss-us-west-1.aliyuncs.com/reComputer-Industrial/mfi_jetson-orin-nx-devkit-8g-5.1-35.3.1-recompter-industrial-v0.3.tar.gz?OSSAccessKeyId=LTAI5tKm7UD2hmuFW85cz42T&Expires=6547176954&Signature=MUVP8x71SuaBKolaV9hyqkdexqc%3D",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"reComputer Industrial J3011"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://nv-jetson-images.oss-us-west-1.aliyuncs.com/reComputer-Industrial/mfi_jetson-orin-nano-devkit-8g-5.1-35.3.1-recompter-industrial-v0.3.tar.gz?OSSAccessKeyId=LTAI5tKm7UD2hmuFW85cz42T&Expires=6547176993&Signature=sE66QsMtLJ39DLgwaMXJ4fanKiA%3D",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"reComputer Industrial J3010"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://nv-jetson-images.oss-us-west-1.aliyuncs.com/reComputer-Industrial/mfi_jetson-orin-nano-devkit-4g-5.1-35.3.1-recompter-industrial-v0.3.tar.gz?OSSAccessKeyId=LTAI5tKm7UD2hmuFW85cz42T&Expires=6547177022&Signature=ffL61bDQEdWWjCcjaLvn7Avr2dk%3D",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"reComputer Industrial J2012"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://nv-jetson-images.oss-us-west-1.aliyuncs.com/reComputer-Industrial/mfi_jetson-xavier-nx-devkit-emmc-16g-5.1-35.3.1-recompter-industrial-v0.5.tar.gz?OSSAccessKeyId=LTAI5tKm7UD2hmuFW85cz42T&Expires=6547177050&Signature=xjuFapQPKLliRHoX4%2FfgZOYB2dk%3D",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"reComputer Industrial J2011"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://nv-jetson-images.oss-us-west-1.aliyuncs.com/reComputer-Industrial/mfi_jetson-xavier-nx-devkit-emmc-8g-5.1-35.3.1-recompter-industrial-v0.5.tar.gz?OSSAccessKeyId=LTAI5tKm7UD2hmuFW85cz42T&Expires=6547177068&Signature=ldsUQn8gR4v2trmzxfA1jAM0kc8%3D",target:"_blank",rel:"noopener noreferrer"},"Download"))))),(0,l.kt)("p",null,"The source code for the above images can be found ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Linux_for_Tegra"},"here")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2:")," Extract the generated file ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"tar -xvf <file_name>.tar.gz\n")),(0,l.kt)("h4",{id:"flash-to-jetson"},"Flash to Jetson"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1:")," Navigate to the extracted file from before and execute the flash command as follows ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd mfi_p3509-a02+p3767-0000\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs\n")),(0,l.kt)("p",null,"Now it will start to flash the system image to the board. If the flashing is successful, you will see the below output"),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"650",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2:")," Connect the board to a display using the HDMI connector on the board and finish the initial configuration setup")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"})),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"})),(0,l.kt)("p",null,"After that, the board will reboot and will be ready to use!"),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"})),(0,l.kt)("hr",null)),(0,l.kt)(o.Z,{value:"method2",label:"Method 2",mdxType:"TabItem"},(0,l.kt)("h4",{id:"download-and-prepare-nvidia-l4t-and-rootfs"},"Download and Prepare NVIDIA L4T and rootfs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2\nwget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2\ntar xf jetson_linux_r35.3.1_aarch64.tbz2\nsudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\n")),(0,l.kt)("h4",{id:"download-and-prepare-drivers"},"Download and Prepare Drivers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1:")," Download the driver files to your Ubuntu PC corresponding to the board you are using")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Jetson Module"),(0,l.kt)("th",null,"Download Link"),(0,l.kt)("th",null,"JetPack Version"),(0,l.kt)("th",null,"L4T Version"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:2},"Jetson Orin NX 8GB/ 16GB,",(0,l.kt)("br",null),"Orin Nano 8GB"),(0,l.kt)("td",{rowSpan:2},(0,l.kt)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nx-8-16-nano-8-recomputer-industrial.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download")),(0,l.kt)("td",{rowSpan:4},"5.1.1"),(0,l.kt)("td",{rowSpan:4},"35.3.1")),(0,l.kt)("tr",null),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Jetson Orin Nano 4GB"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nano-4-recomputer-industrial.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Jetson Xavier NX 8GB/ 16GB"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/xavier-nx-8-16-recomputer-industrial.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2:")," Move the downloaded peripheral drivers into the same folder with ",(0,l.kt)("strong",{parentName:"li"},"Linux_For_Tegra")," directory")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/125.png"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 3:")," Extract the downloaded driver .zip file. Here we additionally install the ",(0,l.kt)("strong",{parentName:"li"},"unzip")," package which is needed to decompress the .zip file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install unzip\nsudo unzip xxxx.zip # Replace xxxx with the driver file name\n")),(0,l.kt)("p",null,"Here it will ask whether to replace the files. Type A and press ENTER to replace the necessary files"),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/126.png"})),(0,l.kt)("h4",{id:"flash-to-jetson-1"},"Flash to Jetson"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1:")," Navigate to the ",(0,l.kt)("strong",{parentName:"li"},"Linux_for_Tegra")," directory and execute the flash command as follows ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\n\n# For Orin NX and Orin Nano\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0 recomputer-orin-industrial external\n\n# For Xavier NX\nsudo ADDITIONAL_DTB_OVERLAY_OPT="BootOrderNvme.dtbo" ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_l4t_t194_qspi_p3668.xml --no-systemimg" --network usb0  recomputer-xavier-nx-industrial external\n')),(0,l.kt)("p",null,"Now it will start to flash the system image to the board. If the flashing is successful, you will see the below output"),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"650",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2:")," Connect the board to a display using the HDMI connector on the board and finish the initial configuration setup")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"})),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"})),(0,l.kt)("p",null,"After that, the board will reboot and you will see the following"),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 3:")," Open a terminal window inside the device, execute the following, the device will reboot and ready to use!")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl disable nvgetty.service\nsudo depmod -a\nsudo reboot\n")),(0,l.kt)("p",null,"Futhermore, if you want to install SDK components such as CUDA, cuDNN, TensorRT, please execute the following"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\nsudo apt install nvidia-jetpack -y\n")),(0,l.kt)("hr",null))),(0,l.kt)("h2",{id:"hardware-and-interfaces-usage"},"Hardware and Interfaces Usage"),(0,l.kt)("p",null,"To learn more about how to use all the hardware and interfaces on the reComputer Industrial board, we recommend you to follow the relevant wiki documentations we have prepared."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_Industrial_J20_Hardware_Interfaces_Usage"},"reComputer Industrial J20 Hardware and Interfaces Usage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage"},"reComputer Industrial J40, J30 Hardware and Interfaces Usage"))),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-datasheet.pdf"},"reComputer Industrial Datasheet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-Reference-Guide.pdf"},"reComputer Industrial Reference Guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf"},"NVIDIA Jetson Devices and Carrier Boards Comparison")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/NVIDIA/Industrial/reComputer-Industrial.stp"},"reComputer Industrial 3D File"))),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("p",null,"Please do not hesitate to submit issues into our ",(0,l.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,l.kt)("div",null,(0,l.kt)("br",null),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}k.isMDXComponent=!0}}]);