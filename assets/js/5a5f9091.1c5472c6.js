"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96709],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>h});var r=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),u=s(a),g=o,h=u["".concat(d,".").concat(g)]||u[g]||c[g]||l;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=g;var n={};for(var d in t)hasOwnProperty.call(t,d)&&(n[d]=t[d]);n.originalType=e,n[u]="string"==typeof e?e:o,i[1]=n;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},76079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>n,toc:()=>s});var r=a(58168),o=(a(96540),a(15680));const l={description:"Xadow - Pebble Time Adapter",title:"Xadow - Pebble Time Adapter",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Pebble_Time_Adapter",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,n={unversionedId:"Seeed_Elderly/Xadow/Xadow_Pebble_Time_Adapter",id:"Seeed_Elderly/Xadow/Xadow_Pebble_Time_Adapter",title:"Xadow - Pebble Time Adapter",description:"Xadow - Pebble Time Adapter",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Pebble_Time_Adapter.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Pebble_Time_Adapter",permalink:"/Xadow_Pebble_Time_Adapter",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Pebble_Time_Adapter.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - Pebble Time Adapter",title:"Xadow - Pebble Time Adapter",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Pebble_Time_Adapter",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - NFC v2",permalink:"/Xadow_NFC_v2"},next:{title:"Xadow - Q Touch Sensor",permalink:"/Xadow_Q_Touch_Sensor"}},d={},s=[{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Assembling process",id:"assembling-process",level:3},{value:"Download the Xadow APP for Pebble Time",id:"download-the-xadow-app-for-pebble-time",level:2},{value:"Programming Guide",id:"programming-guide",level:2},{value:"Talking to the Adapter",id:"talking-to-the-adapter",level:3},{value:"Programming the Adapter",id:"programming-the-adapter",level:3},{value:"RePhone Community",id:"rephone-community",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.yg)(u,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_wiki.png",alt:null})),(0,o.yg)("p",null,"The introduction of RePhone (Xadow) modules makes your smart watch even smarter. Based on the ",(0,o.yg)("a",{parentName:"p",href:"http://developer.getpebble.com/guides/hardware/"},"new smart accessory port on the back of Pebble Time"),", we integrate the slim and small Rephone modules \u2013 Xadow GPS v2 and Xadow NFC v2, into Pebble\u2019s existing ecosystem, to help improve its capability from the perspective of built-in electronics. Xadow Pebble Time Adapter enables the RePhone(Xadow) modules to talk to the Pebble Time via the Smartstrap interface using One-wire serial protocol."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/RePhone-Strap-Kit-for-Pebble-Time-p-2633.html"},(0,o.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,o.yg)("h2",{id:"specifications"},"Specifications"),(0,o.yg)("p",null,"The \u2018GND\u2019 and \u2018PWR\u2019on the back frame means you can charge your Pebble Time without taking the shell off."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Pebble_base_2.png",alt:null})),(0,o.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,o.yg)("h3",{id:"assembling-process"},"Assembling process"),(0,o.yg)("p",null,"In daily use the modules are evenly placed at each side of the watch, and interconnected with FPC cables. The connections between the module and the adapter are specially designed to be an extendable form so that unexpected connection pull-off may be avoided. The charging ports of Pebble Time are still accessible on the back of adapter for daily charges of watch."),(0,o.yg)("p",null,"A schematic drawing of the assembling process of the RePhone Strap Kit for Pebble Time is given below"),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_assembly3.png",alt:null})),(0,o.yg)("h2",{id:"download-the-xadow-app-for-pebble-time"},"Download the Xadow APP for Pebble Time"),(0,o.yg)("p",null,"You can follow the instructions to download the Xadow APP for Pebble Time, access the GPS information and Tag ID on your Pebble Time."),(0,o.yg)("p",null,"The Demo App can be downloaded from ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw"},"https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw"),'. You can download it from your smart phone or send it from your PC to smart phone. Then select to open it with "Pebble Time" App in your phone. You will have an option to install the demo App into your Pebble Time.'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_APP_UI.png",alt:null})),(0,o.yg)("h2",{id:"programming-guide"},"Programming Guide"),(0,o.yg)("h3",{id:"talking-to-the-adapter"},"Talking to the Adapter"),(0,o.yg)("p",null,"The firmware of the adapter implements the protocol described on pebble's official documentation: ",(0,o.yg)("a",{parentName:"p",href:"http://developer.getpebble.com/guides/hardware/smartstrap-protocol/"},"http://developer.getpebble.com/guides/hardware/smartstrap-protocol/")),(0,o.yg)("p",null,"So the resources which can be called from the watchapp side are as following:"),(0,o.yg)("table",null,(0,o.yg)("thead",null,(0,o.yg)("tr",{class:"header"},(0,o.yg)("th",null,"Service"),(0,o.yg)("th",null,"Attribute"),(0,o.yg)("th",null,"R/W"),(0,o.yg)("th",null,"Data Type"),(0,o.yg)("th",null,"Data"))),(0,o.yg)("tbody",null,(0,o.yg)("tr",{class:"odd"},(0,o.yg)("td",null,"0x0 Raw Data"),(0,o.yg)("td",null,"0x0 Raw Data"),(0,o.yg)("td",null,"RW"),(0,o.yg)("td",null,"uint8 *buffer"),(0,o.yg)("td",null,"No handler in adapter side, leave the expandability for adapter firmware programmer")),(0,o.yg)("tr",{class:"even"},(0,o.yg)("td",null,"0x2003 Battery Service"),(0,o.yg)("td",null,"0x1001 Get voltage of the battery"),(0,o.yg)("td",null,"R"),(0,o.yg)("td",null,"uint16"),(0,o.yg)("td",null,"The voltage of the battery for strap in Volt with a precision of 1/100. For example, the voltage is 3.70V, which would be specified as 370.")),(0,o.yg)("tr",{class:"odd"},(0,o.yg)("td",null,"0x2003 Battery Service"),(0,o.yg)("td",null,"0x1002 Enable or disable charging pebble with the battery of strap"),(0,o.yg)("td",null,"RW"),(0,o.yg)("td",null,"uint8"),(0,o.yg)("td",null,"0: Don't charge pebble. 1: Charge pebble.")),(0,o.yg)("tr",{class:"even"},(0,o.yg)("td",null,"0x2001 Location and Navigation Service"),(0,o.yg)("td",null,"0x0001 Location"),(0,o.yg)("td",null,"R"),(0,o.yg)("td",null,"sint32[2]"),(0,o.yg)("td",null,"The current longitude and latitude in degrees with a precision of 1/10^7. The latitude comes before the longitude in the data. For example, Pebble HQ is at (37.4400662, -122.1583808), which would be specified as ",-1221583808,".")),(0,o.yg)("tr",{class:"odd"},(0,o.yg)("td",null,"0x2001 Location and Navigation Service"),(0,o.yg)("td",null,"0x0003 Speed"),(0,o.yg)("td",null,"R"),(0,o.yg)("td",null,"uint16"),(0,o.yg)("td",null,"The current speed in meters per second with a precision of 1/100. For example, 1.5 m/s would be specified as 150.")),(0,o.yg)("tr",{class:"even"},(0,o.yg)("td",null,"0x2001 Location and Navigation Service"),(0,o.yg)("td",null,"0x1001 Altitude"),(0,o.yg)("td",null,"R"),(0,o.yg)("td",null,"uint16"),(0,o.yg)("td",null,"The current altitude in meters with a precision of 1/100. For example, 100m would be specified as 10000.")),(0,o.yg)("tr",{class:"odd"},(0,o.yg)("td",null,"0x2001 Location and Navigation Service"),(0,o.yg)("td",null,"0x0101 GPS Satellites"),(0,o.yg)("td",null,"R"),(0,o.yg)("td",null,"uint8"),(0,o.yg)("td",null,"The number of GPS satellites (typically reported via NMEA. Note that this number is for satellites in view.")),(0,o.yg)("tr",{class:"even"},(0,o.yg)("td",null,"0x2001 Location and Navigation Service"),(0,o.yg)("td",null,"0x0102 GPS Fix Quality"),(0,o.yg)("td",null,"R"),(0,o.yg)("td",null,"uint8"),(0,o.yg)("td",null,"The quality of the GPS fix (reported via NMEA). The possible values are listed in the ",(0,o.yg)("a",{href:"http://www.gpsinformation.org/dale/nmea.htm#GGA"},"NMEA specification"),".")),(0,o.yg)("tr",{class:"odd"},(0,o.yg)("td",null,"0x1E01 NFC Service"),(0,o.yg)("td",null,"0x1001 Get UID of a NFC tag"),(0,o.yg)("td",null,"R"),(0,o.yg)("td",null,"uint8 *"),(0,o.yg)("td",null,"The UID will be returned with variable length which can be indicated in the SmartstrapReadHandler with parameter length.",(0,o.yg)("strong",null,"This attribute can be notified in SmartstrapNotifyHandler."))),(0,o.yg)("tr",{class:"even"},(0,o.yg)("td",null,"0x1E01 NFC Service"),(0,o.yg)("td",null,"0x1002 Read NDEF Data"),(0,o.yg)("td",null,"R"),(0,o.yg)("td",null,"uint8 *"),(0,o.yg)("td",null,"The NDEF data will be returned with variable length which can be indicated in the SmartstrapReadHandler with parameter length.")),(0,o.yg)("tr",{class:"odd"},(0,o.yg)("td",null,"0x1E01 NFC Service"),(0,o.yg)("td",null,"0x1003 Write NDEF Data"),(0,o.yg)("td",null,"W"),(0,o.yg)("td",null,"uint8 *"),(0,o.yg)("td",null,"Write a uint8 buffer into NFC tag")),(0,o.yg)("tr",{class:"even"},(0,o.yg)("td",null,"0x1E01 NFC Service"),(0,o.yg)("td",null,"0x1004 Erase NDEF Data"),(0,o.yg)("td",null,"W"),(0,o.yg)("td",null,"any type"),(0,o.yg)("td",null,"Write any content or empty to trigger the erasing.")))),(0,o.yg)("p",null,"The source code of the demo pebble app can be downloaded at github: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Xadow_Strap"},"https://github.com/Seeed-Studio/Xadow_Strap")),(0,o.yg)("p",null,"This app is only for demonstration of partial attribute call, please feel free to imagine your own fantastic pebble app based on the ability of GPS, NFC and more on."),(0,o.yg)("h3",{id:"programming-the-adapter"},"Programming the Adapter"),(0,o.yg)("p",null,"The adapter is built with LPC11U35 and running mbed software inside. The initial firmware is located at mbed.org. Please take a look at ",(0,o.yg)("a",{parentName:"p",href:"https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/"},"https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/")),(0,o.yg)("p",null,"The eagle schematic of the adapter can be downloaded ",(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar"},"here:")),(0,o.yg)("p",null,"After building the firmware binary, you can follow the steps below to flash the binary into the adapter."),(0,o.yg)("p",null,"1) Hacking a USB Cable and solder the wires to the soldering pads accordingly."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Hack_USB_cable-03.png",alt:null})),(0,o.yg)("p",null,"2) Make sure the battery disconnected and plug the USB into PC."),(0,o.yg)("p",null,'3) Short the "ISP" and "GND" pins.'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/ShortISP_GND.PNG",alt:null})),(0,o.yg)("p",null,"4) Plug the battery on to power on the adapter"),(0,o.yg)("p",null,"5) There will be a usb drive at your PC, open it and delete anything inside the disk, then copy the firmware binary into the disk."),(0,o.yg)("p",null,"6) Power off then on, the firmware is updated."),(0,o.yg)("h2",{id:"rephone-community"},"RePhone Community"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},(0,o.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/RePhone_Community-2.png",alt:null}))),(0,o.yg)("p",null,"We\u2019ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the RePhone Community."),(0,o.yg)("p",null,"Now join us in the ",(0,o.yg)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"! Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,o.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.yg)("h2",{id:"resources"},"Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar"},"Xadow Pebble Time Adapter eagle files")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://forum.seeedstudio.com/viewtopic.php?f=71&t=6664&p=23753"},"Frequently Asked Questions on RePhone (FAQs)"))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);