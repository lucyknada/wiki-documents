"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35515],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={description:"OpenWrt-FAQs PAGE",title:"FAQs for OpenWrt",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/FAQs_For_openWrt",last_update:{date:"7/26/2023",author:"yulu Ji"}},i=void 0,l={unversionedId:"Network/reRouter/FAQs_For_openWrt",id:"Network/reRouter/FAQs_For_openWrt",title:"FAQs for OpenWrt",description:"OpenWrt-FAQs PAGE",source:"@site/docs/Network/reRouter/FAQs_For_openWrt.md",sourceDirName:"Network/reRouter",slug:"/FAQs_For_openWrt",permalink:"/FAQs_For_openWrt",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/reRouter/FAQs_For_openWrt.md",tags:[],version:"current",lastUpdatedBy:"yulu Ji",lastUpdatedAt:1690329600,formattedLastUpdatedAt:"Jul 26, 2023",frontMatter:{description:"OpenWrt-FAQs PAGE",title:"FAQs for OpenWrt",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/FAQs_For_openWrt",last_update:{date:"7/26/2023",author:"yulu Ji"}},sidebar:"ProductSidebar",previous:{title:"reRouter carrier board",permalink:"/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4"},next:{title:"Getting Started with OpenWRT",permalink:"/OpenWrt-Getting-Started"}},s={},c=[{value:"Q1: What if I connect the OpenWrt router to my existing router which has a default gateway IP of 192.168.2.1?",id:"q1-what-if-i-connect-the-openwrt-router-to-my-existing-router-which-has-a-default-gateway-ip-of-19216821",level:4},{value:"Q2: What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without emmC?",id:"q2-what-if-i-have-the-dual-gigabit-ethernet-carrier-board-non-cm4-version-and-attach-a-cm4-without-emmc",level:4},{value:"Q3: I cannot successfully set up Rclone from web UI",id:"q3-i-cannot-successfully-set-up-rclone-from-web-ui",level:4},{value:"Q4: How do I fix my device when I faced the &quot;Read Only Root filesystem&quot;?",id:"q4-how-do-i-fix-my-device-when-i-faced-the-read-only-root-filesystem",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document contains all the frequently asked questions related to OpenWrt. This will be very helpful if you are suffering from any issues when using the OpenWrt."),(0,o.kt)("h4",{id:"q1-what-if-i-connect-the-openwrt-router-to-my-existing-router-which-has-a-default-gateway-ip-of-19216821"},"Q1: What if I connect the OpenWrt router to my existing router which has a default gateway IP of 192.168.2.1?"),(0,o.kt)("p",null,"For details, please click ",(0,o.kt)("a",{parentName:"p",href:"/change_default_gateway_IP"},(0,o.kt)("strong",{parentName:"a"},"here"))),(0,o.kt)("h4",{id:"q2-what-if-i-have-the-dual-gigabit-ethernet-carrier-board-non-cm4-version-and-attach-a-cm4-without-emmc"},"Q2: What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without emmC?"),(0,o.kt)("p",null,"For details, please click ",(0,o.kt)("a",{parentName:"p",href:"/use_a_CM4_witout_eMMC"},(0,o.kt)("strong",{parentName:"a"},"here"))),(0,o.kt)("h4",{id:"q3-i-cannot-successfully-set-up-rclone-from-web-ui"},"Q3: I cannot successfully set up Rclone from web UI"),(0,o.kt)("p",null,"For details, please click ",(0,o.kt)("a",{parentName:"p",href:"/set_up_Rclone_from_web_UI"},(0,o.kt)("strong",{parentName:"a"},"here"))),(0,o.kt)("h4",{id:"q4-how-do-i-fix-my-device-when-i-faced-the-read-only-root-filesystem"},'Q4: How do I fix my device when I faced the "Read Only Root filesystem"?'),(0,o.kt)("p",null,"For details, please click ",(0,o.kt)("a",{parentName:"p",href:"/fix_device_ReadOnlyRootFilesystem"},(0,o.kt)("strong",{parentName:"a"},"here"))))}d.isMDXComponent=!0}}]);