"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12503],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>d});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},29577:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(58168),a=(t(96540),t(15680));const o={description:"reTerminal-FAQ",title:"How to wake up the reTerminal LCD after sleep",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wakeup_reTerminal_LCD_after_sleep",last_update:{date:"6/21/2023",author:"Seraphina"}},i=void 0,l={unversionedId:"FAQ/reTerminal/Wakeup_reTerminal_LCD_after_sleep",id:"FAQ/reTerminal/Wakeup_reTerminal_LCD_after_sleep",title:"How to wake up the reTerminal LCD after sleep",description:"reTerminal-FAQ",source:"@site/docs/FAQ/reTerminal/Wakeup_reTerminal_LCD_after_sleep.md",sourceDirName:"FAQ/reTerminal",slug:"/Wakeup_reTerminal_LCD_after_sleep",permalink:"/Wakeup_reTerminal_LCD_after_sleep",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/reTerminal/Wakeup_reTerminal_LCD_after_sleep.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1687305600,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{description:"reTerminal-FAQ",title:"How to wake up the reTerminal LCD after sleep",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wakeup_reTerminal_LCD_after_sleep",last_update:{date:"6/21/2023",author:"Seraphina"}}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Open a terminal window after connecting through SSH or VNC and enter the following commands"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"DISPLAY=:0 xset dpms force off\nDISPLAY=:0 xset dpms force on\n")),(0,a.yg)("p",null,"This will reinitialize the LCD on the reTerminal!"))}m.isMDXComponent=!0}}]);