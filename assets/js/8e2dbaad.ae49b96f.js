"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),d=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=c(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:r}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=s??p;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var g=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function S(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),r=u[n].value;r!==l&&(p(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:c},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(S,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},86155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={title:"Getting Started with Seeed Studio XIAO ESP32C6",description:"Getting Started with Seeed Studio XIAO ESP32C6.",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",keywords:["XIAO","ESP32C6"],slug:"/xiao_esp32c6_getting_started",toc_max_heading_level:4,sidebar_position:0,last_update:{date:"04/02/2024",author:"Spencer"}},s="Getting Started with Seeed Studio XIAO ESP32C6",u={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/XIAO_ESP32C6_Getting_Started",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/XIAO_ESP32C6_Getting_Started",title:"Getting Started with Seeed Studio XIAO ESP32C6",description:"Getting Started with Seeed Studio XIAO ESP32C6.",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/XIAO_ESP32C6_Getting_Started.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6",slug:"/xiao_esp32c6_getting_started",permalink:"/xiao_esp32c6_getting_started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/XIAO_ESP32C6_Getting_Started.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1712016e3,formattedLastUpdatedAt:"Apr 2, 2024",sidebarPosition:0,frontMatter:{title:"Getting Started with Seeed Studio XIAO ESP32C6",description:"Getting Started with Seeed Studio XIAO ESP32C6.",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",keywords:["XIAO","ESP32C6"],slug:"/xiao_esp32c6_getting_started",toc_max_heading_level:4,sidebar_position:0,last_update:{date:"04/02/2024",author:"Spencer"}},sidebar:"ProductSidebar",previous:{title:"ESPHome Support on Seeed Studio XIAO ESP32C3",permalink:"/XIAO-ESP32C3-for-ESPHome-Support"},next:{title:"Getting Started with Seeed Studio XIAO ESP32C6",permalink:"/xiao_esp32c6_getting_started"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Specifications comparison",id:"specifications-comparison",level:2},{value:"Features",id:"features",level:2},{value:"Hardware overview",id:"hardware-overview",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Hardware setup",id:"hardware-setup",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Add the XIAO-C6 Board",id:"add-board",level:4},{value:"Run your first Blink program",id:"run-your-first-blink-program",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-seeed-studio-xiao-esp32c6"},"Getting Started with Seeed Studio XIAO ESP32C6"),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Seeed Studio XIAO ESP32C6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg",style:{width:250,height:"auto"}})))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html "},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Seeed Studio XIAO ESP32C6 is powered by the highly-integrated ",(0,a.kt)("a",{parentName:"p",href:"https://www.espressif.com/en/products/socs/esp32-c6"},"ESP32-C6 SoC"),", built on ",(0,a.kt)("strong",{parentName:"p"},"two 32-bit RISC-V processors"),", with a high-performance (HP) processor with ",(0,a.kt)("strong",{parentName:"p"},"running up to 160 MHz"),", and a low-power (LP) 32-bit RISC-V processor, which can be clocked up to 20 MHz. There are ",(0,a.kt)("strong",{parentName:"p"},"512KB SRAM and 4 MB Flash on the chip"),", allowing for more programming space, and binging more possibilities to the IoT control scenarios. "),(0,a.kt)("p",null,"XIAO ESP32C6 is ",(0,a.kt)("strong",{parentName:"p"},"Matter native thanks to its enhanced wireless connectivity"),". The wireless stack supports ",(0,a.kt)("strong",{parentName:"p"},"2.4 GHz WiFi 6, Bluetooth\xae 5.3, Zigbee, and Thread (802.15.4)"),". As the first XIAO member compatible with Thread, it's a perfect fit for building Matter-compliant projects, thus achieving interoperability in smart-home."),(0,a.kt)("h2",{id:"specifications-comparison"},"Specifications comparison"),(0,a.kt)("table",{class:"sp-table-c6"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Products"),(0,a.kt)("th",{class:"highlight-cell"},"XIAO ESP32C6"),(0,a.kt)("th",null,"XIAO ESP32C3"),(0,a.kt)("th",null,"XIAO ESP32S3"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2",rowspan:"2"},"Processor"),(0,a.kt)("td",null,"Espressif ESP32-C6 SoC"),(0,a.kt)("td",null,"Espressif ESP32-C3 SoC"),(0,a.kt)("td",null,"Espressif ESP32-S3R8")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Two 32-bit RISC-V processors, with the high-performance one running up to 160 MHz, and the low-power one clocking up to 20 MHz"),(0,a.kt)("td",null,"RISC-V single-core 32-bit chip processor with a four-stage pipeline that operates at up to 160 MHz"),(0,a.kt)("td",null,"Xtensa LX7 dual-core, 32-bit processor running up to 240 MHz")),(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2",rowspan:"3"},"Wireless"),(0,a.kt)("td",null,"Complete 2.4GHz ",(0,a.kt)("strong",null,"Wi-Fi 6")," subsystem"),(0,a.kt)("td",{colspan:"2"},"Complete 2.4GHz Wi-Fi subsystem")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Bluetooth 5.0/ Bluetooth Mesh"),(0,a.kt)("td",null,"BLE: Bluetooth 5.0, Bluetooth Mesh"),(0,a.kt)("td",null,"BLE: Bluetooth 5.0, Bluetooth Mesh")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,"Zigbee,Thread,IEEE 802.15.4")),(0,a.kt)("td",null,"/"),(0,a.kt)("td",null,"/")),(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2",rowspan:"1"},"On-chip Memory"),(0,a.kt)("td",null,"512KB SRAM & 4MB Flash"),(0,a.kt)("td",null,"400KB SRAM & 4MB Flash"),(0,a.kt)("td",null,"8M PSRAM & 8MB Flash")),(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2",rowspan:"2"},"Interface"),(0,a.kt)("td",null,"1x UART,1x LP_UART, 1x IIC, 1x LP_IIC, 1x SPI,11x GPIO(PWM), 7x ADC, 1xSDIO"),(0,a.kt)("td",null,"1x UART, 1x IIC, 1x SPI,11x GPIO(PWM), 4x ADC"),(0,a.kt)("td",null,"1x UART, 1x IIC, 1x IIS, 1x SPI,11x GPIO(PWM), 9x ADC, 1x User LED, 1x Charge LED")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"3"},"1x Reset button, 1x Boot button")),(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2",rowspan:"1"},"Dimensions"),(0,a.kt)("td",{colspan:"3"},"21 x 17.5 mm")),(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"1",rowspan:"3"},"Power"),(0,a.kt)("th",{colspan:"1"},"Input voltage"),(0,a.kt)("td",{colspan:"3"},"Type-C: 5V",(0,a.kt)("br",null),"BAT: 4.2V")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Circuit operating Voltage (ready to operate)"),(0,a.kt)("td",{colspan:"2"},"USB:5V@9mA",(0,a.kt)("br",null),"BAT:3.8V@9mA"),(0,a.kt)("td",null,"Type-C: 5V@19mA",(0,a.kt)("br",null),"BAT: 3.8V@22mA")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Charging battery current"),(0,a.kt)("td",{colspan:"2"},"350mA"),(0,a.kt)("td",null,"100mA")),(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"1",rowspan:"3"},"Power Consumption Model(Supply Power: 3.8V)"),(0,a.kt)("th",null,"Modem-sleep Model"),(0,a.kt)("td",null,"~ 30 mA"),(0,a.kt)("td",null,"~ 24 mA"),(0,a.kt)("td",null,"~ 25 mA")),(0,a.kt)("tr",null,(0,a.kt)("th",null," Light-sleep Model"),(0,a.kt)("td",null,"~ 2.5 mA"),(0,a.kt)("td",null,"~ 3 mA"),(0,a.kt)("td",null,"~ 2 mA")),(0,a.kt)("tr",null,(0,a.kt)("th",null," Deep Sleep Model"),(0,a.kt)("td",null,"~ 15 \u03bcA"),(0,a.kt)("td",null,"~ 44 \u03bcA"),(0,a.kt)("td",null,"~ 14 \u03bcA")),(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Working Temperature"),(0,a.kt)("td",{colspan:"2"},"-40\xb0C ~ 85\xb0C"),(0,a.kt)("td",null,"-40\xb0C ~ 65\xb0C")))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enhanced Connectivity"),": Integrates ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"2.4"))," GHz Wi-Fi 6 (802.11ax), Bluetooth 5(LE), and IEEE 802.15.4 radio connectivity, allowing for the application of ",(0,a.kt)("strong",{parentName:"li"},"Thread")," and ",(0,a.kt)("strong",{parentName:"li"},"Zigbee")," protocols."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Matter Native"),": Supports the building of Matter-compliant smart home projects, ensuring interoperability among different smart devices."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Security Encrypted on Chip"),": Utilizes the ESP32-C6 to provide secure boot, encryption, and Trusted Execution Environment (TEE) features, enhancing the security of smart home projects."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Outstanding RF Performance"),": Features an on-board antenna with up to ",(0,a.kt)("em",{parentName:"li"},"80m")," BLE/Wi-Fi range and offers an interface for connecting an external UFL antenna, ensuring reliable connectivity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Leveraging Power Consumption"),": Offers four working modes, including a deep sleep mode with consumption as low as ",(0,a.kt)("em",{parentName:"li"},"15")," \u03bcA, along with support for lithium battery charge management."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dual RISC-V Processors"),": Incorporates two 32-bit RISC-V processors, with the high-performance processor capable of running up to 160 MHz and the low-power processor up to ",(0,a.kt)("em",{parentName:"li"},"20 MHz"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Classic XIAO Designs"),": Maintains the thumb-size form factor of 21 x 17.5mm and single-sided mount design, ideal for space-limited projects like wearable devices.")),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware overview"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"XIAO ESP32C6/XIAO ESP32C6 indication diagram")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png",style:{width:700,height:"auto"}})))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"XIAO ESP32C6/XIAO ESP32C6 Sense Pin List")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228",style:{width:1e3,height:"auto"}}))))),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"To enable you to get started with the XIAO ESP32C6 faster, please read the hardware and software preparation below to prepare the XIAO."),(0,a.kt)("h3",{id:"hardware-setup"},"Hardware setup"),(0,a.kt)("p",null,"You need to prepare the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 x ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html"},"Seeed Studio XIAO ESP32C6")),(0,a.kt)("li",{parentName:"ul"},"1 x Computer"),(0,a.kt)("li",{parentName:"ul"},"1 x USB Type-C cable")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"},"Seeed USB Type-C support USB 3.1"),".")),(0,a.kt)("h3",{id:"software-preparation"},"Software Preparation"),(0,a.kt)("p",null,"The recommended programming tool for the XIAO ESP32C6 is the Arduino IDE, so you need to complete the Arduino installation as part of the software preparation."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino"),"."),(0,a.kt)("p",{parentName:"admonition"},"And the on-board package for XIAO ESP32C6 requires at least version ",(0,a.kt)("strong",{parentName:"p"},"2.0.8")," to be available.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Download and Install the stable version of Arduino IDE according to your operating system.")),(0,a.kt)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"download_arduino_item",href:"https://www.arduino.cc/en/software"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"},"Download Arduino IDE"))))),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Launch the Arduino application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#add-board"},"Step 3"),"."),"  Add the XIAO ESP32C6 on-board package to the Arduino IDE and click `OK."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Close the Arduino IDE and reopen it.")),(0,a.kt)("h4",{id:"add-board"},"Add the XIAO-C6 Board"),(0,a.kt)("p",null,"As of April 2, 2024, the most current stable release of Arduino-ESP32 is version ",(0,a.kt)("inlineCode",{parentName:"p"},"2.0.14"),". Unfortunately, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/arduino-esp32/en/latest/getting_started.html#supported-soc-s"},"this version does not support")," the ",(0,a.kt)("strong",{parentName:"p"},"ESP32-C6")," chipset, which means it also does not support the ",(0,a.kt)("inlineCode",{parentName:"p"},"XIAO ESP32-C6")," board. To work with XIAO-C6, you'll need to utilize the development release of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide"},"the board manager URL")," provided below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json\n")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"remove",label:"Remove Existing Boards",mdxType:"TabItem"},(0,a.kt)("p",null,"if you've install the ESP32 board package before, you''ll need to remove it first."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/remove_package.png",style:{width:640,height:"auto"}}))),(0,a.kt)(i.Z,{value:"install",label:"Install New Boards",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"To install the XIAO ESP32C6 board, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the above board manager URL to your Arduino IDE preferences.")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png",style:{width:"auto",height:"auto"}})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Download the XIAO ESP32C6 board package.")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png",style:{width:640,height:"auto"}})),(0,a.kt)("p",null,"Additionally, the latest development release version (3.0.0-Alpha 3) was released on December 5, 2023. However, it does not contain our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/espressif/arduino-esp32/pull/9330"},"committed PR"),". You will need to manually set it up using the following resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/boards.txt"},"\u2b07\ufe0fDownload boards.txt")," for XIAO-C6 board information."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32C6.zip"},"\u2b07\ufe0fDownload the XIAO ESP32C6 board package")," for the board variant information.")),(0,a.kt)("p",null,"Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"boards.txt")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"XIAO_ESP32C6")," folder in the following paths based on your operating system:"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},"For Windows, the default storage path for the ESP32 onboard package is:",(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Users\\$USERNAME$\\AppData\\Local\\Arduino15\\packages\\esp32\\hardware\\esp32\\3.0.0-alpha3")),(0,a.kt)("p",null,"Copy the downloaded ",(0,a.kt)("strong",{parentName:"p"},"boards.txt")," file to the above path, replacing the existing one. Then, navigate to the ",(0,a.kt)("strong",{parentName:"p"},"variants folder")," and copy the ",(0,a.kt)("strong",{parentName:"p"},"XIAO_ESP32C6 folder")," into it."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6_variants_board.png",style:{width:480,height:"auto"}})),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6_variants.png",style:{width:480,height:"auto"}}))),(0,a.kt)(i.Z,{value:"MacOS",label:"MacOS",mdxType:"TabItem"},"For MacOS, the default storage path for the ESP32 onboard package is:",(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"~/Library/Arduino15/packages/esp32/hardware/esp32/3.0.0-alpha3")),(0,a.kt)("p",null,"Follow the same steps as for Windows: replace the existing ",(0,a.kt)("strong",{parentName:"p"},"boards.txt")," file with the one you downloaded and add the ",(0,a.kt)("strong",{parentName:"p"},"XIAO_ESP32C6 folder")," to the ",(0,a.kt)("strong",{parentName:"p"},"variants folder"),"."))))),(0,a.kt)("h2",{id:"run-your-first-blink-program"},"Run your first Blink program"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Launch the Arduino application.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Navigate to ",(0,a.kt)("strong",{parentName:"p"},"File > Examples > 01.Basics > Blink"),", open the program."))),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png",style:{width:700,height:"auto"}})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Select the board model to ",(0,a.kt)("strong",{parentName:"li"},"XIAO ESP32C6"),", and select the correct port number to upload the program.")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png",style:{width:1e3,height:"auto"}})),(0,a.kt)("p",null,"Once the program is successfully uploaded, you will see the following output message and you can observe that the orange LED on the right side of the XIAO ESP32C6 is blinking."),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png",style:{width:680,height:"auto"}}))),(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif",style:{width:400,height:"auto"}}))))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);