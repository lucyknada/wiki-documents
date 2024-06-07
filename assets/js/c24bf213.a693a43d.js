"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7146],{15680:(l,n,t)=>{t.d(n,{xA:()=>i,yg:()=>p});var e=t(96540);function u(l,n,t){return n in l?Object.defineProperty(l,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[n]=t,l}function g(l,n){var t=Object.keys(l);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(l);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(l,n).enumerable}))),t.push.apply(t,e)}return t}function y(l){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){u(l,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(l,n,Object.getOwnPropertyDescriptor(t,n))}))}return l}function d(l,n){if(null==l)return{};var t,e,u=function(l,n){if(null==l)return{};var t,e,u={},g=Object.keys(l);for(e=0;e<g.length;e++)t=g[e],n.indexOf(t)>=0||(u[t]=l[t]);return u}(l,n);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(l);for(e=0;e<g.length;e++)t=g[e],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(l,t)&&(u[t]=l[t])}return u}var r=e.createContext({}),o=function(l){var n=e.useContext(r),t=n;return l&&(t="function"==typeof l?l(n):y(y({},n),l)),t},i=function(l){var n=o(l.components);return e.createElement(r.Provider,{value:n},l.children)},a="mdxType",s={inlineCode:"code",wrapper:function(l){var n=l.children;return e.createElement(e.Fragment,{},n)}},c=e.forwardRef((function(l,n){var t=l.components,u=l.mdxType,g=l.originalType,r=l.parentName,i=d(l,["components","mdxType","originalType","parentName"]),a=o(t),c=u,p=a["".concat(r,".").concat(c)]||a[c]||s[c]||g;return t?e.createElement(p,y(y({ref:n},i),{},{components:t})):e.createElement(p,y({ref:n},i))}));function p(l,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof l||u){var g=t.length,y=new Array(g);y[0]=c;var d={};for(var r in n)hasOwnProperty.call(n,r)&&(d[r]=n[r]);d.originalType=l,d[a]="string"==typeof l?l:u,y[1]=d;for(var o=2;o<g;o++)y[o]=t[o];return e.createElement.apply(null,y)}return e.createElement.apply(null,t)}c.displayName="MDXCreateElement"},886:(l,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>y,default:()=>s,frontMatter:()=>g,metadata:()=>d,toc:()=>o});var e=t(58168),u=(t(96540),t(15680));const g={description:"Xadow IO pin mapping",title:"Xadow IO pin mapping",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_IO_pin_mapping",last_update:{date:"1/16/2023",author:"jianjing Huang"}},y=void 0,d={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Xadow_IO_pin_mapping",id:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Xadow_IO_pin_mapping",title:"Xadow IO pin mapping",description:"Xadow IO pin mapping",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Xadow_IO_pin_mapping.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage",slug:"/Xadow_IO_pin_mapping",permalink:"/Xadow_IO_pin_mapping",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Xadow_IO_pin_mapping.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"Xadow IO pin mapping",title:"Xadow IO pin mapping",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_IO_pin_mapping",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Flashing the Arduino Bootloader using DAP Link",permalink:"/Flashing-Arduino-Bootloader-DAPLink"},next:{title:"IR Remote",permalink:"/IR_Remote"}},r={},o=[{value:"Xadow FFC IO bus and matching Arduino and Atmega information and example Arduino code",id:"xadow-ffc-io-bus-and-matching-arduino-and-atmega-information-and-example-arduino-code",level:2},{value:"Some MORE Xadow IO pins - only on the Main module, NOT on the FFC bus",id:"some-more-xadow-io-pins---only-on-the-main-module-not-on-the-ffc-bus",level:2},{value:"The BIG Table of Xadow modules and the IO bus pin use for each module",id:"the-big-table-of-xadow-modules-and-the-io-bus-pin-use-for-each-module",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],i={toc:o},a="wrapper";function s(l){let{components:n,...t}=l;return(0,u.yg)(a,(0,e.A)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,u.yg)("p",null,"Single reference page for all pin information including:-"),(0,u.yg)("ul",null,(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("p",{parentName:"li"},"How to use each pin in your Arduino code")),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("p",{parentName:"li"},"Xadow FFC to Atmega32u4 pin mapping")),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("p",{parentName:"li"},"pins that have interrupts and timers")),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("p",{parentName:"li"},"the 2 serial ports, IIc and ISP")),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("p",{parentName:"li"},"additional on board IO, that might be hacked"))),(0,u.yg)("p",null,"The tables provide different views of the data and are especially useful when you are planning which modules to use and which IO pins for direct use!"),(0,u.yg)("h2",{id:"xadow-ffc-io-bus-and-matching-arduino-and-atmega-information-and-example-arduino-code"},"Xadow FFC IO bus and matching Arduino and Atmega information and example Arduino code"),(0,u.yg)("table",null,(0,u.yg)("tr",null,(0,u.yg)("td",{colspan:"4"}," ",(0,u.yg)("strong",null,"Xadow FFC pins")),(0,u.yg)("td",{colspan:"2"}," ",(0,u.yg)("strong",null,"Arduino")),(0,u.yg)("td",{colspan:"2"}," ",(0,u.yg)("strong",null,"Atmega32u4 pins")),(0,u.yg)("td",null)),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Name")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"IO function")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Alternate use")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"#")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"IO Pin")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"code example(s)")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Name (",(0,u.yg)("strong",null,"interrupts in red"),")")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"#")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Notes"))),(0,u.yg)("tr",null,(0,u.yg)("td",null," P1"),(0,u.yg)("td",null," Digital Pin"),(0,u.yg)("td",null," ISP SCK"),(0,u.yg)("td",null," 1"),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"15")),(0,u.yg)("td",null," PinMode(15, OUTPUT); digitalWrite(15, HIGH);"),(0,u.yg)("td",null," PB1",(0,u.yg)("strong",null,"(PCINT1"),"/SCLK)"),(0,u.yg)("td",null," 9"),(0,u.yg)("td",null," ISP SMD header pads also on rear of Xado Main board")),(0,u.yg)("tr",null,(0,u.yg)("td",null," P2"),(0,u.yg)("td",null," Digital Pin"),(0,u.yg)("td",null," ISP MOSI"),(0,u.yg)("td",null," 2"),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"16")),(0,u.yg)("td",null," PinMode(16, OUTPUT); digitalWrite(16, HIGH);"),(0,u.yg)("td",null," PB2(PDI/",(0,u.yg)("strong",null,"PCINT2"),"/MOSI)"),(0,u.yg)("td",null," 10")),(0,u.yg)("tr",null,(0,u.yg)("td",null," P3"),(0,u.yg)("td",null," Digital Pin"),(0,u.yg)("td",null," ISP MISO"),(0,u.yg)("td",null," 3"),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"14")),(0,u.yg)("td",null," PinMode(14, OUTPUT); digitalWrite(14, HIGH);"),(0,u.yg)("td",null," PB3(PDO/",(0,u.yg)("strong",null,"PCINT3"),"/MISO)"),(0,u.yg)("td",null," 11")),(0,u.yg)("tr",null,(0,u.yg)("td",null," P4"),(0,u.yg)("td",null," Analogue Pin"),(0,u.yg)("td",null," Digital pin!"),(0,u.yg)("td",null," 4"),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"A5")),(0,u.yg)("td",null," analogWrite(A5, 128); pinMode(A5, OUTPUT); digitalWrite(A5, HIGH);"),(0,u.yg)("td",null," PF0(ADC0)"),(0,u.yg)("td",null," 41"),(0,u.yg)("td",null," Arduino analogue pins can also be used as digital pins!")),(0,u.yg)("tr",null,(0,u.yg)("td",null," P5"),(0,u.yg)("td",null," Digital Pin"),(0,u.yg)("td",null," IIC SCL"),(0,u.yg)("td",null," 9"),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"3")),(0,u.yg)("td",null," PinMode(3, OUTPUT); digitalWrite(3, HIGH);"),(0,u.yg)("td",null," PD0(OC0B/SCL/",(0,u.yg)("strong",null,"INT0"),")"),(0,u.yg)("td",null," 18"),(0,u.yg)("td",null)),(0,u.yg)("tr",null,(0,u.yg)("td",null," P6"),(0,u.yg)("td",null," Digital Pin"),(0,u.yg)("td",null," IIC SDA"),(0,u.yg)("td",null," 10"),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"2")),(0,u.yg)("td",null," PinMode(2, OUTPUT); digitalWrite(2, HIGH);"),(0,u.yg)("td",null," PD1 (SDA/",(0,u.yg)("strong",null,"INT1"),")"),(0,u.yg)("td",null," 19"),(0,u.yg)("td",null)),(0,u.yg)("tr",null,(0,u.yg)("td",null," P7"),(0,u.yg)("td",null," Digital Pin"),(0,u.yg)("td",null," Serial Rxd"),(0,u.yg)("td",null," 11"),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"0")),(0,u.yg)("td",null," PinMode(0, OUTPUT); digitalWrite(0, HIGH);"),(0,u.yg)("td",null," PD2(RXD/",(0,u.yg)("strong",null,"INT2"),")"),(0,u.yg)("td",null," 20"),(0,u.yg)("td",null," See Xadow BLE/GPS examples for these serial pin usage info.",(0,u.yg)("p",null,"NOT same serial port uploading code\u2013see Red/Green LED below."))),(0,u.yg)("tr",null,(0,u.yg)("td",null," P8"),(0,u.yg)("td",null," Digital Pin"),(0,u.yg)("td",null," Serial Txd"),(0,u.yg)("td",null," 12"),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"1")),(0,u.yg)("td",null," PinMode(1, OUTPUT); digitalWrite(1, HIGH);"),(0,u.yg)("td",null," PD3(TXD/",(0,u.yg)("strong",null,"INT3"),")"),(0,u.yg)("td",null," 21"))),(0,u.yg)("h2",{id:"some-more-xadow-io-pins---only-on-the-main-module-not-on-the-ffc-bus"},"Some MORE Xadow IO pins - only on the Main module, NOT on the FFC bus"),(0,u.yg)("table",null,(0,u.yg)("tr",null,(0,u.yg)("td",{colspan:"4"}," ",(0,u.yg)("strong",null,"Xadow pins")),(0,u.yg)("td",{colspan:"2"}," ",(0,u.yg)("strong",null,"Arduino")),(0,u.yg)("td",{colspan:"2"}," ",(0,u.yg)("strong",null,"Atmega32u4 pins")),(0,u.yg)("td",null)),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Name")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"IO function")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Alternate use")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"#")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"IO Pin")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"code example(s)")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Name (",(0,u.yg)("strong",null,"interrupts in red"),")")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"#")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Notes"))),(0,u.yg)("tr",null,(0,u.yg)("td",null," Red LED"),(0,u.yg)("td",null," Rx"),(0,u.yg)("td",null),(0,u.yg)("td",null," -"),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"17")),(0,u.yg)("td",null," PinMode(17, OUTPUT); digitalWrite(17, HIGH);"),(0,u.yg)("td",null," PB0(SS/",(0,u.yg)("strong",null,"PCINT0"),")"),(0,u.yg)("td",null," 8"),(0,u.yg)("td",null," Serial port uploading code")),(0,u.yg)("tr",null,(0,u.yg)("td",null," Green LED"),(0,u.yg)("td",null," Tx"),(0,u.yg)("td",null),(0,u.yg)("td",null," -"),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"11")),(0,u.yg)("td",null," PinMode(11, OUTPUT); digitalWrite(11, HIGH);"),(0,u.yg)("td",null," PB7(",(0,u.yg)("strong",null,"PCINT7"),"/OC0A/OC1C/!RTS)"),(0,u.yg)("td",null," 12")),(0,u.yg)("tr",null,(0,u.yg)("td",null," Wake"),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null," -"),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"10")),(0,u.yg)("td",null," Have not yet connected and validated this!"),(0,u.yg)("td",null," PB^/A10/D10"),(0,u.yg)("td",null," 30"),(0,u.yg)("td",null," On board switch \u2013 you need super soldering skills to access this!"))),(0,u.yg)("p",null,"Note: Reset switch is connected to Atmega32u4 Reset pin 13 via a diode \u2013 so no access to the 32u4 IO pin AT THE RESET SWITCH!"),(0,u.yg)("h2",{id:"the-big-table-of-xadow-modules-and-the-io-bus-pin-use-for-each-module"},"The BIG Table of Xadow modules and the IO bus pin use for each module"),(0,u.yg)("p",null,"Why such a big complicated table? Well it brings together all of the IO information in one place, but more importantly it lets you see which IO pins are still available once you have selected several Xadow modules! Also the schematic has different FFC pin numbers to the rest of the wiki documentation!"),(0,u.yg)("p",null,"Notes:-"),(0,u.yg)("ol",null,(0,u.yg)("li",{parentName:"ol"},(0,u.yg)("p",{parentName:"li"},"Remember that IIC devices are daisy chained \u2013 that is they can connect in parallel, so you can have more than one IIC device connected to the same pins!")),(0,u.yg)("li",{parentName:"ol"},(0,u.yg)("p",{parentName:"li"},"Need more IO pins? You may be able to use ONE pin for several different uses, the same way the vibration motor and buzzer are sharing one pin, or in some situations you can use the same pin for different purposes at DIFFERENT TIMES. For example you might set a pin as output to trigger an ultrasonic sensor, then change the pin to input to detect when the signal is received!")),(0,u.yg)("li",{parentName:"ol"},(0,u.yg)("p",{parentName:"li"},"Most IIC modules {except the Main Board module, LED, RTC}, ALSO have IIC breakout pins."))),(0,u.yg)("p",null,"So items in purple in the IIC SCL ","&"," IIC SDA columns do NOT also have breakout pins!"),(0,u.yg)("ol",{start:4},(0,u.yg)("li",{parentName:"ol"},(0,u.yg)("p",{parentName:"li"},"Additional details highlighted in yellow in center of table document the ",(0,u.yg)("strong",{parentName:"p"},"ADDITIONAL")," breakout pins on each Xadow module!")),(0,u.yg)("li",{parentName:"ol"},(0,u.yg)("p",{parentName:"li"},"? = Don't know, or not yet verified!"))),(0,u.yg)("table",null,(0,u.yg)("tr",null,(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SCK")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"MOSI")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"MISO")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"A5")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"3")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"2")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"1")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"0")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Arduino Pin name"))),(0,u.yg)("tr",null,(0,u.yg)("td",null),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Interrupts in red--------\x3e")),(0,u.yg)("td",null," PB1(PCINT1/SCLK)"),(0,u.yg)("td",null," PB2(PDI/",(0,u.yg)("strong",null,"PCINT2"),"/MOSI)"),(0,u.yg)("td",null," PB3(PDO/",(0,u.yg)("strong",null,"PCINT3"),"/MISO)"),(0,u.yg)("td",null," PF0(ADC0)"),(0,u.yg)("td",null," PD0(OC0B/SCL/INT0)"),(0,u.yg)("td",null," PD1(SDA/",(0,u.yg)("strong",null,"INT1"),")"),(0,u.yg)("td",null," PD2(RXD/",(0,u.yg)("strong",null,"INT2"),")"),(0,u.yg)("td",null," PD3(TXD/",(0,u.yg)("strong",null,"INT3"),")"),(0,u.yg)("td",null," Atmega32u4 pin Name")),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,(0,u.yg)("strong",null,"IIC = I2C"))),(0,u.yg)("td",null),(0,u.yg)("td",null," 9"),(0,u.yg)("td",null," 10"),(0,u.yg)("td",null," 11"),(0,u.yg)("td",null," 41"),(0,u.yg)("td",null," 18"),(0,u.yg)("td",null," 19"),(0,u.yg)("td",null," 20"),(0,u.yg)("td",null," 21"),(0,u.yg)("td",null," Atmega32u4 pin#")),(0,u.yg)("tr",null,(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null," P1, 1"),(0,u.yg)("td",null," P2, 2"),(0,u.yg)("td",null," P3, 3"),(0,u.yg)("td",null," P4, 4"),(0,u.yg)("td",null," P5, 9"),(0,u.yg)("td",null," P6, 10"),(0,u.yg)("td",null," P7, 11"),(0,u.yg)("td",null," P8,12"),(0,u.yg)("td",null," FFC pin Name, #")),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Xadow Modules ")),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Module Control Mode & Address")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Digital Pin ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Digital Pin ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Digital Pin ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,(0,u.yg)("strong",null,"Analog or "),"Digital Pin ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,(0,u.yg)("strong",null,"IIC SCL"))),(0,u.yg)("td",null," ",(0,u.yg)("center",null,(0,u.yg)("strong",null,"IIC SDA"))),(0,u.yg)("td",null," ",(0,u.yg)("center",null,(0,u.yg)("strong",null,"Serial Rxd"))),(0,u.yg)("td",null," ",(0,u.yg)("center",null,(0,u.yg)("strong",null,"Serial Txd"))),(0,u.yg)("td",null," ",(0,u.yg)("strong",null,"Xadow Pin function"))),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"3-Axis Accelerometer ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"IIC 0x53")),(0,u.yg)("td",null," SCK"),(0,u.yg)("td",null," MOSI"),(0,u.yg)("td",null," MISO"),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"A5")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SCL")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SDA")),(0,u.yg)("td",null," Rxd"),(0,u.yg)("td",null," TxD"),(0,u.yg)("td",null)),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"BaroMeter ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"IIC 0x77")),(0,u.yg)("td",null," SCK"),(0,u.yg)("td",null," MOSI"),(0,u.yg)("td",null," MISO"),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"A5")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SCL")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SDA")),(0,u.yg)("td",null," Rxd"),(0,u.yg)("td",null," TxD"),(0,u.yg)("td",null)),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"BLE Slave ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Serial ")),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",{colspan:"2"}," ",(0,u.yg)("center",null,"RX/TX ")),(0,u.yg)("td",null," Plus pads specific to BLE on rear")),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Breakout ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"None!")),(0,u.yg)("td",null," SCK"),(0,u.yg)("td",null," MOSI"),(0,u.yg)("td",null," MISO"),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"A5")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SCL")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SDA")),(0,u.yg)("td",null," Rxd"),(0,u.yg)("td",null," TxD"),(0,u.yg)("td",null," + Grove I2C & Serial sockets")),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"LED Controller ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"IIC 0x04")),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SCL")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SDA")),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null)),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"OLED ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"IIC 0x3C")),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SCL")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SDA")),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null)),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Vibration Motor ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Digital Signal ")),(0,u.yg)("td",null),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"H ")),(0,u.yg)("td",null),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"H ")),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null," _",(0,u.yg)("strong",null,"Disconnect module BEFORE using ISP"),"_")),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"RTC ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"IIC 0x68")),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SCL")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SDA")),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null," rear pad connect INTB \u2013 Int0???")),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Buzzer ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Digital Signal ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"H ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"H ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," _",(0,u.yg)("strong",null,"Disconnect module BEFORE using ISP"),"_")),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Digital Compass ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"IIC 0x1E")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null)),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Motor ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"TBD ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null)),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"GPS ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Serial ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",{colspan:"2"}," ",(0,u.yg)("center",null,"RX/TX ")),(0,u.yg)("td",null)),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,"Storage ")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"IIC 0x50 & 0x51")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?")),(0,u.yg)("td",null)),(0,u.yg)("tr",null,(0,u.yg)("td",null," ",(0,u.yg)("center",null,(0,u.yg)("strong",null,"Main Board"))),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"?IIC master =0x00?")),(0,u.yg)("td",null," ISP \u2013 SCK"),(0,u.yg)("td",null," ISP MOSI"),(0,u.yg)("td",null," ISP MISO"),(0,u.yg)("td",null),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SCL")),(0,u.yg)("td",null," ",(0,u.yg)("center",null,"SDA")),(0,u.yg)("td",null),(0,u.yg)("td",null),(0,u.yg)("td",null," All via SMD pads on rear."))),(0,u.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,u.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,u.yg)("div",{class:"button_tech_support_container"},(0,u.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,u.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,u.yg)("div",{class:"button_tech_support_container"},(0,u.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,u.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}s.isMDXComponent=!0}}]);