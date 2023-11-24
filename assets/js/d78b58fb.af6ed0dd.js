"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,h=p["".concat(d,".").concat(u)]||p[u]||m[u]||a;return n?i.createElement(h,o(o({ref:t},l),{},{components:n})):i.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={description:"Get Started with SenseCAP Indicator Native Firmware",title:"Native Firmware",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_Native_Firmware",sidebar_position:1,last_update:{date:"11/16/2023",author:"Spencer"}},o="**Native Firmware**",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Setup_Guide/Native_Firmware",id:"Sensor/SenseCAP/SenseCAP_Indicator/Setup_Guide/Native_Firmware",title:"Native Firmware",description:"Get Started with SenseCAP Indicator Native Firmware",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Setup_Guide/Native_Firmware.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Setup_Guide",slug:"/SenseCAP_Indicator_Native_Firmware",permalink:"/SenseCAP_Indicator_Native_Firmware",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Setup_Guide/Native_Firmware.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1700092800,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:1,frontMatter:{description:"Get Started with SenseCAP Indicator Native Firmware",title:"Native Firmware",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_Native_Firmware",sidebar_position:1,last_update:{date:"11/16/2023",author:"Spencer"}},sidebar:"ProductSidebar",previous:{title:"Setup Guide",permalink:"/SenseCAP_Indicator_Setup_Guide"},next:{title:"Overview",permalink:"/SenseCAP_Indicator_OpenAI_X_Overview"}},d={},c=[{value:"<strong>Wi-Fi Setting</strong>",id:"wi-fi-setting",level:2},{value:"<strong>Display Setting</strong>",id:"display-setting",level:2},{value:"<strong>Date &amp; Time Setting</strong>",id:"date--time-setting",level:2},{value:"<strong>Sensor Data</strong>",id:"sensor-data",level:2}],l={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"native-firmware"},(0,r.kt)("strong",{parentName:"h1"},"Native Firmware")),(0,r.kt)("p",null,"The SenseCAP Indicator D1S and D1Pro version has the built-in tVOC and CO2 sensors, and an external Grove TH sensor for accurate data reading. The SenseCAP native firmware provides air quality detector UI to show the sensor data. For D1 and D1L verison which does not include the sensors, the data page will show N/A."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"})),(0,r.kt)("p",null,"Simple steps to configure SenseCAP Indicator at the setting page."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setting.png"})),(0,r.kt)("h2",{id:"wi-fi-setting"},(0,r.kt)("strong",{parentName:"h2"},"Wi-Fi Setting")),(0,r.kt)("p",null,"Select the Wi-Fi name and input the password and connect it."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_9.png"})),"Once you saw the green Wi-Fi icon, you'are all set.",(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_10.png"})),(0,r.kt)("h2",{id:"display-setting"},(0,r.kt)("strong",{parentName:"h2"},"Display Setting")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Brightness"),": Adjust screen brightness."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sleep Mode"),": Turn off the screen according to the interval you set.During sleep mode, the screen is turned of and does not display any content.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"})),(0,r.kt)("h2",{id:"date--time-setting"},(0,r.kt)("strong",{parentName:"h2"},"Date & Time Setting")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Time Format:")," You can set 24H or 12H format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Time Auto Update/Zone Auto Update"),": When the device is connected to WiFi, it will automatically obtain the corresponding time zone and date.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Manual setting"),": If the time obtained through the time zone cannot automatically identify the winter time or device is offline, then you can manually set the time zone"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"})),(0,r.kt)("h2",{id:"sensor-data"},(0,r.kt)("strong",{parentName:"h2"},"Sensor Data")),(0,r.kt)("p",null,"We offers four different versions: D1, D1S, D1L, and D1Pro. Each version is designed to meet different application needs without any extra cost from unnecessary hardware. Here are the differences between the versions:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/version.png"})),(0,r.kt)("p",null,"The device's firmware has two pages that display data for tVOC, CO2, temperature, and humidity."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Note:")),(0,r.kt)("p",{parentName:"admonition"},"The UI for the native firmware remains the same for all versions for SenseCAP Indicator. For D1 and D1L version which has no embedded sensors. the sensor data will show 'N/A'. You are able to connect with other Grove sensors and create your own customized UI.")),(0,r.kt)("p",null,"Click the specified sensor to enter the detailed information page, and you can choose to display the value in the past 24h or a week. Data will be kept within one week."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"})),(0,r.kt)("admonition",{title:"Looking for ChatGPT x DALL\xb7E?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Head to ",(0,r.kt)("a",{parentName:"p",href:"/SenseCAP_Indicator_OpenAI_X_Overview"},"SenseCAP Indicator X OpenAI"))))}m.isMDXComponent=!0}}]);