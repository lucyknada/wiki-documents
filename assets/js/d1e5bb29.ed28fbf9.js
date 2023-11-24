"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43441],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=o.createContext({}),u=function(t){var e=o.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=u(t.components);return o.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(f,a(a({ref:e},l),{},{components:r})):o.createElement(f,a({ref:e},l))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81745:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={description:"Project Six \u2013 LCD Demonstration",title:"Project Six \u2013 LCD Demonstration",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Six-LCD_Demonstration",last_update:{date:"2/15/2023",author:"jianjing Huang"}},a=void 0,s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Six-LCD_Demonstration",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Six-LCD_Demonstration",title:"Project Six \u2013 LCD Demonstration",description:"Project Six \u2013 LCD Demonstration",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Six-LCD_Demonstration.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Project_Six-LCD_Demonstration",permalink:"/Project_Six-LCD_Demonstration",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Six-LCD_Demonstration.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Project Six \u2013 LCD Demonstration",title:"Project Six \u2013 LCD Demonstration",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Six-LCD_Demonstration",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Project Five \u2013 Relay Control",permalink:"/Project_Five-Relay_Control"},next:{title:"Project Seven - Temperature",permalink:"/Project_Seven-Temperature"}},c={},u=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:u},p="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(p,(0,o.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Now it is time to demonstrate the LCD module and matching Grove units. With the LCD you can display data or messages within the two line, eight-character display. For this example, connect the wires from the following LCD sockets to the Grove Base Shield:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"right-bottom to D1/2;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"bottom-left to D3/4;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"bottom-right to D5/6;"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Project_Six-LCD_Demonstration/img/Conn-six.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"Now upload the following Arduino sketch:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'// Project Six - LCD demonstration\n//\n\n#include &lt;LiquidCrystal.h&gt;\n\nLiquidCrystal lcd(1,2,3,4,5,6);\n\nvoid setup()\n{\n  lcd.begin(8,2);\n}\n\nvoid loop()\n{\n  lcd.clear();\n  lcd.setCursor(0,0);\n  lcd.print("01234567");\n  lcd.setCursor(0,1);\n  lcd.print("ABCDEFGH");\n  delay(65000);\n}\n')),(0,n.kt)("p",null,"The lcd.clear() functions blanks the LCD screen; lcd.setCursor() moves the cursor to (column, row); and lcd.print(\u201c\u201d); writes text to the cursor position on the LCD."),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);