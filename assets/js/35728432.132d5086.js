"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38395],{15680:(t,e,s)=>{s.d(e,{xA:()=>c,yg:()=>u});var a=s(96540);function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(Object(s),!0).forEach((function(e){l(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function o(t,e){if(null==t)return{};var s,a,l=function(t,e){if(null==t)return{};var s,a,l={},g=Object.keys(t);for(a=0;a<g.length;a++)s=g[a],e.indexOf(s)>=0||(l[s]=t[s]);return l}(t,e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(t);for(a=0;a<g.length;a++)s=g[a],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(l[s]=t[s])}return l}var n=a.createContext({}),y=function(t){var e=a.useContext(n),s=e;return t&&(s="function"==typeof t?t(e):r(r({},e),t)),s},c=function(t){var e=y(t.components);return a.createElement(n.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var s=t.components,l=t.mdxType,g=t.originalType,n=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=y(s),p=l,u=m["".concat(n,".").concat(p)]||m[p]||d[p]||g;return s?a.createElement(u,r(r({ref:e},c),{},{components:s})):a.createElement(u,r({ref:e},c))}));function u(t,e){var s=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var g=s.length,r=new Array(g);r[0]=p;var o={};for(var n in e)hasOwnProperty.call(e,n)&&(o[n]=e[n]);o.originalType=t,o[m]="string"==typeof t?t:l,r[1]=o;for(var y=2;y<g;y++)r[y]=s[y];return a.createElement.apply(null,r)}return a.createElement.apply(null,s)}p.displayName="MDXCreateElement"},81216:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>n,contentTitle:()=>r,default:()=>d,frontMatter:()=>g,metadata:()=>o,toc:()=>y});var a=s(58168),l=(s(96540),s(15680));const g={description:"How to Choose A Gas Sensor",title:"How to Choose A Gas Sensor",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/How-to-Choose-A-Gas-Sensor",last_update:{date:"02/02/2023",author:"w0x7ce"},no_comments:!1},r=void 0,o={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How-to-Choose-A-Gas-Sensor",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How-to-Choose-A-Gas-Sensor",title:"How to Choose A Gas Sensor",description:"How to Choose A Gas Sensor",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How-to-Choose-A-Gas-Sensor.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/How-to-Choose-A-Gas-Sensor",permalink:"/How-to-Choose-A-Gas-Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How-to-Choose-A-Gas-Sensor.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675296e3,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{description:"How to Choose A Gas Sensor",title:"How to Choose A Gas Sensor",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/How-to-Choose-A-Gas-Sensor",last_update:{date:"02/02/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Arduino Common Error",permalink:"/Arduino_Common_Error"},next:{title:"A Comparison of Different Grove Temperature Sensors",permalink:"/A_Comparison_of_Different_Grove_Temperature_Sensors"}},n={},y=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:y},m="wrapper";function d(t){let{components:e,...s}=t;return(0,l.yg)(m,(0,a.A)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"If you search \u201cgas sensor\u201d on ",(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com"},"www.seeedstudio.com")," , you can find a lot of gas sensor. We know that the air component is diverse, and a certain gas sensor can detect one or more air components, so we designed a series of gas sensor."),(0,l.yg)("p",null,"There are about 10 kind of gas sensor for sale. They have similar name, it\u2019s likely to cause confusion. Hope that through the following presentation, we can help you to choose the appropriate gas sensor easily."),(0,l.yg)("p",null,"It\u2019s obvious that different sensor can detect the same gas. Such as MQ-2, MQ-3, MQ-5 Alcohol Sensor, Grove \u2013 HCHO Sensor can detect Alcohol. So if you want an alcohol sensor, then which on should you chosen? Although most of the above sensors are able to detect Alcohol, but you should know that they have different range to Alcohol."),(0,l.yg)("table",{className:"tg",style:{tableLayout:"fixed",width:800}},(0,l.yg)("colgroup",null,(0,l.yg)("col",{style:{width:119}}),(0,l.yg)("col",{style:{width:259}}),(0,l.yg)("col",{style:{width:271}}),(0,l.yg)("col",{style:{width:151}})),(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",{className:"tg-l5ls"},"Gas"),(0,l.yg)("th",{className:"tg-l5ls"},"Range"),(0,l.yg)("th",{className:"tg-l5ls"},"Product Name"),(0,l.yg)("th",{className:"tg-l5ls"},"SKU"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Dust"),(0,l.yg)("td",{className:"tg-q7v3"},"0~8000pcs/0.01cf"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Dust Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020012")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3",rowSpan:5},(0,l.yg)("br",null),(0,l.yg)("br",null),"CO"),(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ2)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020055")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ3)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020006")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ5)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020056")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"20~2000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ9)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020045")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"0~1000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Multichannel Gas Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020088")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3",rowSpan:5},(0,l.yg)("br",null),(0,l.yg)("br",null),"Alcohol"),(0,l.yg)("td",{className:"tg-q7v3"},"200~10000pp"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ5)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020056")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"100ppm~2000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ2)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020055")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"10~500ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Multichannel Gas Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020088")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"20~1000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Alcohol Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020044")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ3)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020006")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"O2"),(0,l.yg)("td",{className:"tg-q7v3"},"0~25%VOL",(0,l.yg)("br",null),"(0~25000ppm)"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(O2)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020002")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"HCHO"),(0,l.yg)("td",{className:"tg-q7v3"},"5~40ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-HCHO Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020001")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3",rowSpan:5},(0,l.yg)("br",null),(0,l.yg)("br",null),"CH4"),(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ5)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020056")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"5000~20000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ2)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020055")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"500~10000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ9)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020045")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},">1000mmp"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Multichannel Gas Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020088")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ3)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020006")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Hexane"),(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ3)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020006")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3",rowSpan:2},"Propene"),(0,l.yg)("td",{className:"tg-q7v3"},">1000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Multichannel Gas Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020088")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"200~5000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ2)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020055")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Butane"),(0,l.yg)("td",{className:"tg-q7v3"},"3000~5000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ2)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020055")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Benzine"),(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ3)"),(0,l.yg)("td",{className:"tg-q7v3"},"01020006")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3",rowSpan:4},(0,l.yg)("br",null),"LPG"),(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ5)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020056")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"200~5000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ2)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020055")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"500~10000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ9)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020045")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ3)"),(0,l.yg)("td",{className:"tg-q7v3"},"01020006")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3",rowSpan:3},"H2"),(0,l.yg)("td",{className:"tg-q7v3"},"300~5000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ2)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020055")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"1~1000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Multichannel Gas Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020088")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ5)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020056")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Smoke"),(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(MQ2)"),(0,l.yg)("td",{className:"tg-q7v3"},"101020055")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"NO2"),(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Multichannel Gas Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020088")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"NH3"),(0,l.yg)("td",{className:"tg-q7v3"},"1~500ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Multichannel Gas Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020088")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Iso-butane"),(0,l.yg)("td",{className:"tg-q7v3"},">1000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Multichannel Gas Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020088")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"CO2"),(0,l.yg)("td",{className:"tg-q7v3"},"0~2000ppm"),(0,l.yg)("td",{className:"tg-q7v3"},"Grove-CO2 Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020067")))),(0,l.yg)("p",null,"And sometimes, we want to test many gases in one sensor, so how should we choose it ?"),(0,l.yg)("table",{className:"tg",style:{tableLayout:"fixed",width:799}},(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",{className:"tg-l5ls"},"Product Name"),(0,l.yg)("th",{className:"tg-l5ls"},"SKU"),(0,l.yg)("th",{className:"tg-l5ls"},"Measurable Gases"),(0,l.yg)("th",{className:"tg-l5ls"},"Range"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3",rowSpan:8},(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),"Grove-Multichannel Gas Sensor"),(0,l.yg)("td",{className:"tg-q7v3",rowSpan:8},(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),"101020088"),(0,l.yg)("td",{className:"tg-q7v3"},"CO"),(0,l.yg)("td",{className:"tg-q7v3"},"0~1000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Alcohol"),(0,l.yg)("td",{className:"tg-q7v3"},"10~500ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"CH4"),(0,l.yg)("td",{className:"tg-q7v3"},">1000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Propane"),(0,l.yg)("td",{className:"tg-q7v3"},">1000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"NO2"),(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"NH3"),(0,l.yg)("td",{className:"tg-q7v3"},"1~500p")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Iso-butane"),(0,l.yg)("td",{className:"tg-q7v3"},">1000pm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"H2"),(0,l.yg)("td",{className:"tg-q7v3"},"1~1000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3",rowSpan:8},(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),"Grove-Gas Sensor(MQ2)"),(0,l.yg)("td",{className:"tg-q7v3",rowSpan:8},(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),"101020055"),(0,l.yg)("td",{className:"tg-q7v3"},"CO"),(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Alcohol"),(0,l.yg)("td",{className:"tg-q7v3"},"100~2000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"CH4"),(0,l.yg)("td",{className:"tg-q7v3"},"5000^20000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Propane"),(0,l.yg)("td",{className:"tg-q7v3"},"200~5000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"LPG"),(0,l.yg)("td",{className:"tg-q7v3"},"200~5000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Butane"),(0,l.yg)("td",{className:"tg-q7v3"},"3000~5000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"H2"),(0,l.yg)("td",{className:"tg-q7v3"},"300~500pp")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Smoke"),(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3",rowSpan:6},(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),"Grove-Gas Sensor(MQ3)"),(0,l.yg)("td",{className:"tg-q7v3",rowSpan:6},(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("br",null),"101020006"),(0,l.yg)("td",{className:"tg-q7v3"},"CO"),(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Alcohol"),(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"CH4"),(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Hexane"),(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Benzine"),(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"LPG"),(0,l.yg)("td",{className:"tg-q7v3"},"0.05~10ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3",rowSpan:5},(0,l.yg)("br",null),(0,l.yg)("br",null),"Grove-Gas Sensor(MQ5)"),(0,l.yg)("td",{className:"tg-q7v3",rowSpan:5},(0,l.yg)("br",null),(0,l.yg)("br",null),"101020056"),(0,l.yg)("td",{className:"tg-q7v3"},"CO"),(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Alcohol"),(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"CH4"),(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"LPG"),(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"H2"),(0,l.yg)("td",{className:"tg-q7v3"},"200~10000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3",rowSpan:3},"Grove-Gas Sensor(MQ9)"),(0,l.yg)("td",{className:"tg-q7v3",rowSpan:3},"101020045"),(0,l.yg)("td",{className:"tg-q7v3"},"CO"),(0,l.yg)("td",{className:"tg-q7v3"},"20~2000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"CH4"),(0,l.yg)("td",{className:"tg-q7v3"},"500~10000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"LPG"),(0,l.yg)("td",{className:"tg-q7v3"},"500~10000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Dust Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020012"),(0,l.yg)("td",{className:"tg-q7v3"},"Dust"),(0,l.yg)("td",{className:"tg-q7v3"},"0~8000pcs/0.01cf")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Alcohol Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020044"),(0,l.yg)("td",{className:"tg-q7v3"},"Alcohol"),(0,l.yg)("td",{className:"tg-q7v3"},"20~1000ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Grove-Gas Sensor(O2)",(0,l.yg)("br",null)),(0,l.yg)("td",{className:"tg-q7v3"},"101020002"),(0,l.yg)("td",{className:"tg-q7v3"},"O2"),(0,l.yg)("td",{className:"tg-q7v3"},"0~25%VOL",(0,l.yg)("br",null),"(0~25000pp)")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Grove-HCHO Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020001"),(0,l.yg)("td",{className:"tg-q7v3"},"HCHO"),(0,l.yg)("td",{className:"tg-q7v3"},"5~40ppm")),(0,l.yg)("tr",null,(0,l.yg)("td",{className:"tg-q7v3"},"Grove-CO2 Sensor"),(0,l.yg)("td",{className:"tg-q7v3"},"101020067"),(0,l.yg)("td",{className:"tg-q7v3"},"CO2"),(0,l.yg)("td",{className:"tg-q7v3"},"0~200ppm")))),(0,l.yg)("p",null,"Following is the link of all gases to Bazaar, choose the one you needed!"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Gas-Sensor-MQ2.html"},"Grove - Gas Sensor(MQ-2)"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-MQ3-Grove-Gas-Sensor.html"},"Grove - Gas Sensor(MQ-3)"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Gas-Sensor-MQ5.html"},"Grove - Gas Sensor(MQ-5)"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Gas-Sensor-MQ9.html"},"Grove - Gas Sensor(MQ-9)")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-HCHO-Sensor.html"},"Grove - HCHO Sensor"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Alcohol-Sensor.html"},"Grove - Alcohol Sensor"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z16.html"},"Grove - CO2 Sensor"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor.html"},"Grove - Multichannel Gas Sensor"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Dust-Sensor-PPD42NS.html"},"Grove - Dust Sensor")))),(0,l.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,l.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,l.yg)("div",{class:"button_tech_support_container"},(0,l.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,l.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,l.yg)("div",{class:"button_tech_support_container"},(0,l.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,l.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);