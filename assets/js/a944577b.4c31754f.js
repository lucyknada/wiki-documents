"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80097],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var i=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),c=p(o),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return o?i.createElement(h,s(s({ref:t},u),{},{components:o})):i.createElement(h,s({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[c]="string"==typeof e?e:r,s[1]=n;for(var p=2;p<a;p++)s[p]=o[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},35285:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>p});var i=o(87462),r=(o(67294),o(3905));const a={description:"Grove - 3-Axis Compass V1.0",title:"Grove - 3-Axis Compass V1.0",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis_Compass_V1.0",last_update:{date:"1/5/2023",author:"shuxu hu"}},s=void 0,n={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Compass_V1.0",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Compass_V1.0",title:"Grove - 3-Axis Compass V1.0",description:"Grove - 3-Axis Compass V1.0",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Compass_V1.0.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Grove-3-Axis_Compass_V1.0",permalink:"/Grove-3-Axis_Compass_V1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Compass_V1.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - 3-Axis Compass V1.0",title:"Grove - 3-Axis Compass V1.0",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis_Compass_V1.0",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 3-Axis Analog Accelerometer",permalink:"/Grove-3-Axis_Analog_Accelerometer"},next:{title:"Grove - 3-Axis Digitial Compass v2.0",permalink:"/Grove-3-Axis_Digitial_Compass_v2.0"}},l={},p=[{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Play With Raspberry Pi (with GrovePi_Plus)",id:"play-with-raspberry-pi-with-grovepi_plus",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Grove-3-Axis_Compass_V1.0.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,"This 3-axis digital compass features a low field magnetic sensing multi-chip module HMC5883L, which provides up to 1\xb0 to 2\xb0 heading accuracy. HMC5883L consists of high-resolution HMC118X series magneto-resistive sensors, as well as Honeywell developed ASIC containing amplification, automatic degaussing strap drivers, offset cancellation and 12 bit ADC. With peripheral power management circuit added, this is an easy to use and reliable compass module for low cost compassing and magnetometry."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html"},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Input Voltage: 3.3V, 5V"),(0,r.kt)("li",{parentName:"ul"},"Sleep Mode Current: 2.5uA"),(0,r.kt)("li",{parentName:"ul"},"Measurement Mode Current: 640uA"),(0,r.kt)("li",{parentName:"ul"},"High resolution"),(0,r.kt)("li",{parentName:"ul"},"Easy to control I2C interface"),(0,r.kt)("li",{parentName:"ul"},"Compatible with either 3.3V or 5.0V development platform"),(0,r.kt)("li",{parentName:"ul"},"Max 116Hz output rate"),(0,r.kt)("li",{parentName:"ul"},"High heading accuracy")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,r.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,r.kt)("p",null,"##Getting Started"),(0,r.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,r.kt)("p",null,"This demo is going to show you how to read raw data, how to calibrate the data with your local magnetic declination angle and how to get heading angle."),(0,r.kt)("p",null,"First off, before any action you are going to take, you need to prepare a parameter you are going to use in your demo. That's your local magnetic declination."),(0,r.kt)("p",null,"You can find it out in degree via ",(0,r.kt)("a",{parentName:"p",href:"http://www.magnetic-declination.com/"},"the magnetic declination webpage"),". For example, mine is -2\xb037\u2019, which is -2.617 degree."),(0,r.kt)("p",null,'Then transfer it from degree to radians, and there you get the "declinationAngle". For example, in my case, declinationAngle = -2.617 ',"*",' \u03c0 / 180 = -0.0456752665 rad. Three significant figures are enough. So I would shorten it into -0.0456 rad. And this is the parameter you are going to replace the value of "declinationAngle" in the demo code with.'),(0,r.kt)("p",null,"Now let's start to run your compass."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Plug the 3-axis compass into the I2C port of Grove - Base Shield.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the library file: ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Digital_Compass.zip"},"Digital Compass Library"),". Unzip it into the libraries file of Arduino IDE by the path: ..","\\","arduino-1.0.1","\\","libraries.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the demo\xa0by the path:File ->Example ->Digital Compass ->HMC5883L_Example."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass1.jpg",alt:"pir",width:600,height:"auto"})))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Replace the value of variable "declinitionAngle" with the one you\'ve figured out already.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upload the Code.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the output result by opening the serial monitor."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass2.jpg",alt:"pir",width:600,height:"auto"})))),(0,r.kt)("h3",{id:"play-with-raspberry-pi-with-grovepi_plus"},"Play With Raspberry Pi (with GrovePi_Plus)"),(0,r.kt)("p",null,"1.You should have got a raspberry pi and a grovepi or grovepi+."),(0,r.kt)("p",null,"2.You should have completed configuring the development enviroment, otherwise follow ",(0,r.kt)("a",{parentName:"p",href:"/GrovePi_Plus/"},"here"),"."),(0,r.kt)("p",null,"3.Connection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plug the sensor to grovepi socket i2c-x(1~3) by using a grove cable.")),(0,r.kt)("p",null,"4.Navigate to the demos' directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   cd yourpath/GrovePi/Software/Python/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To see the code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    nano grove_compass_lib.py       \n    nano grove_compass_example.py    \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    import grove_compass_lib\n    c=grove_compass_lib.compass()\n    while True:\n            print "X:",c.x,"Y:",c.y,"X:",c.z,"Heading:",c.headingDegrees\n            c.update()\n            time.sleep(.1)\n')),(0,r.kt)("p",null,"5.Run the demo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo python grove_compass_example.py\n")),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Grove-3-Axis_Digital_Compass_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Grove-3-Axis_Digital_Compass_Eagle_File.zip"},"Grove-3-Axis Digital Compass Eagle File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/HMC5883.pdf",title:"File:HMC5883.pdf"},"HMC5883.pdf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Digital_Compass.zip"},"Digital Compass Library"))),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);