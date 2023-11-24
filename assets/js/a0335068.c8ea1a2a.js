"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47578],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},31548:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={description:"Grove - Round Force Sensor FSR402",title:"Grove - Round Force Sensor FSR402",keywords:["Grove Grove_Sensors Touch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Round_Force_Sensor_FSR402",last_update:{date:"1/19/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Touch/Grove-Round_Force_Sensor_FSR402",id:"Sensor/Grove/Grove_Sensors/Touch/Grove-Round_Force_Sensor_FSR402",title:"Grove - Round Force Sensor FSR402",description:"Grove - Round Force Sensor FSR402",source:"@site/docs/Sensor/Grove/Grove_Sensors/Touch/Grove-Round_Force_Sensor_FSR402.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Touch",slug:"/Grove-Round_Force_Sensor_FSR402",permalink:"/Grove-Round_Force_Sensor_FSR402",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Touch/Grove-Round_Force_Sensor_FSR402.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1674086400,formattedLastUpdatedAt:"Jan 19, 2023",frontMatter:{description:"Grove - Round Force Sensor FSR402",title:"Grove - Round Force Sensor FSR402",keywords:["Grove Grove_Sensors Touch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Round_Force_Sensor_FSR402",last_update:{date:"1/19/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Rotary Angle Sensor",permalink:"/Grove-Rotary_Angle_Sensor"},next:{title:"Grove - 2-Channel Inductive Sensor(LDC1612)",permalink:"/Grove-2_Channel_Inductive_Sensor-LDC1612"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Schematic",id:"schematic",level:3},{value:"Mechanical Drawing",id:"mechanical-drawing",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/main.jpg",alt:null})),(0,n.kt)("p",null,"The Grove-Round Force Sensor(FSR402) is a force sensitive module. At the end of the sensor there is a round force sensitive resistor, the resistance of which depends on pressure applied to this resistor.\nSimply say, the greater the pressure, the smaller the resistance. However, the output of this sensor is not strictly linear, so we do not recommend it for accurate measurements. For more detail about the pressure-resistance diagram, please check the\n",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/FSR402.pdf"},"FSR402 Datasheet")),(0,n.kt)("p",null,"As the you can see, this module is based on FSR402,Interlink Electronics FSR\xae 400 Series is part of the single zone Force Sensing Resistor\xae family. Force Sensing Resistors, or FSR's, are robust polymer thick film (PTF) devices that exhibit a decrease in resistance with increase in force applied to the surface of the sensor. This force sensitivity is optimized for use in human machine interface devices including automotive electronics, medical systems, industrial controls and robotics."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove-Round Force Sensor(FSR402)"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Jun 2018")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Analog output")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reliable mechanical structure  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"High durability:"),(0,n.kt)("p",{parentName:"li"},"  Tested to 10 Million actuations, 1kg, 4Hz / -10% average resistance change"))),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Working voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V/5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Force Sensitivity Range"),(0,n.kt)("td",{parentName:"tr",align:null},"0.2N--20N")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Force Resolution"),(0,n.kt)("td",{parentName:"tr",align:null},"Continuous (analog)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Analog output"),(0,n.kt)("td",{parentName:"tr",align:null},"0-650")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Non-Actuated Resistance"),(0,n.kt)("td",{parentName:"tr",align:null},">10 M\u03a9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Minimum Resistance"),(0,n.kt)("td",{parentName:"tr",align:null},"1 K\u03a9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Device Rise Time"),(0,n.kt)("td",{parentName:"tr",align:null},"<3 Microseconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 75mm W: 20mm H: 11mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"2.5g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Package size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 140mm W: 90mm H: 10mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gross Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"10g")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you want to measure the Non-Actuated Resistance, please remove this thing from the sensor")),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"automotive electronics"),(0,n.kt)("li",{parentName:"ul"},"medical systems"),(0,n.kt)("li",{parentName:"ul"},"industrial controls"),(0,n.kt)("li",{parentName:"ul"},"robotics.")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("h3",{id:"pin-map"},"Pin Map"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/pin_map.jpg",alt:null})),(0,n.kt)("h3",{id:"schematic"},"Schematic"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/hardware.png",alt:null})),(0,n.kt)("p",null,"This module use a DC-DC chip XC6206P332MR to provide a stable 3.3V, as you can see we called it 3V3. You can consider the Force Sensor ",(0,n.kt)("strong",{parentName:"p"},"J1")," as a variable resistance, let's say ",(0,n.kt)("strong",{parentName:"p"},"R",(0,n.kt)("sub",null,"f",(0,n.kt)("sub",null)))," . The greater the pressure, the smaller the ",(0,n.kt)("strong",{parentName:"p"},"R",(0,n.kt)("sub",null,"f",(0,n.kt)("sub",null)))," value."),(0,n.kt)("p",null,"There are two parts in the picture above, for the left part:"),(0,n.kt)("font",{color:"#EE9A00"},"``VIN`` = \\frac","{","3.3*30K","}","{","30K+R_f","}","$"),(0,n.kt)("p",null,"For the right part, it's an Emitter follower, we use the amplifier ",(0,n.kt)("strong",{parentName:"p"},"U1")," to isolate the pre-stage and post-stage circuits."),(0,n.kt)("font",{color:"#EE9A00"},"Vout = VIN"),(0,n.kt)("p",null,"So, the output is:"),(0,n.kt)("font",{color:"#EE9A00"},"$Vout = \\frac","{","3.3*30K","}","{","30K+R_f","}","$"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In this section we only show you part of the schematic, for the full document please refer to the ",(0,n.kt)("a",{parentName:"p",href:"#resources"},"Resources"))),(0,n.kt)("h3",{id:"mechanical-drawing"},"Mechanical Drawing"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Mechanical_A.jpg",alt:null}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Mechanical_B.jpg",alt:null}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Exploded_View.jpg",alt:null})),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Round Force Sensor(FSR402)"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-LED"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/thumbnail.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Red%20LED.jpg",alt:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove---Red-LED-p-1142.html",target:"_blank"},"Get One Now"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," ",(0,n.kt)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove-Round Force Sensor(FSR402) to port ",(0,n.kt)("strong",{parentName:"p"},"A0")," of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Grove-LED to port ",(0,n.kt)("strong",{parentName:"p"},"D3")," of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/connect.jpg",alt:null})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Round Force Sensor(FSR402)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"A0"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-LED"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D3"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Open the Arduino IDE and create a new file, then copy the following code into the new file.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},"/* How to use a Force sensitive resistor to fade an LED with Arduino\n   More info: http://www.ardumotive.com/how-to-use-a-force-sensitive-resistor-en.html\n   Dev: Michalis Vasilakis // Date: 22/9/2015 // www.ardumotive.com  */\n\n//Constants:\nconst int ledPin = 3;     //pin 3 has PWM funtion\nconst int sensorPin = A0; //pin A0 to read analog input\n\n//Variables:\nint value; //save analog value\n\n\nvoid setup(){\n    \n  pinMode(ledPin, OUTPUT);  //Set pin 3 as 'output'\n  Serial.begin(9600);       //Begin serial communication\n\n}\n\nvoid loop(){\n  \n  value = analogRead(sensorPin);       //Read and save analog value from potentiometer\n  Serial.println(value);               //Print value\n  value = map(value, 0, 1023, 0, 255); //Map value 0-1023 to 0-255 (PWM)\n  analogWrite(ledPin,255-value);          //Send PWM value to led\n  delay(100);                          //Small delay\n  \n}\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,n.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the output of A0. Also, you will see the LED become lighter when you press the Round Force Sensor harder."))),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/Grove-Round_Force_Sensor_FSR402.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/Grove-Round_Force_Sensor_FSR402.zip"},"Grove-Round Force Sensor(FSR402) eagle file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip"},"Adafruit_NeoPixel-master")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/FSR402.pdf"},"Datasheet of FSR402"))),(0,n.kt)("h2",{id:"project"},"Project"),(0,n.kt)("p",null,"This is the introduction Video of this product, simple demos, you can have a try."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/55WQ3ia52JM?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);