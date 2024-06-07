"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61884],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>h});var o=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),d=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=d(e.components);return o.createElement(l.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},g=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),g=n,h=u["".concat(l,".").concat(g)]||u[g]||c[g]||i;return t?o.createElement(h,a(a({ref:r},p),{},{components:t})):o.createElement(h,a({ref:r},p))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},62155:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(58168),n=(t(96540),t(15680));const i={title:"Grove - I2C Motor Driver V1.2",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.2/",slug:"/Grove-I2C_Motor_Driver_V1.2",last_update:{date:"01/09/2022",author:"gunengyu"}},a=void 0,s={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver_V1.2",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver_V1.2",title:"Grove - I2C Motor Driver V1.2",description:"The Grove I2C motor driver is a new addition to the Grove series with the same easy-to-use interface. Its heart is a dual channel H-bridge driver chip\uff08L298N\uff09that can handle current up to 2A per channel, controlled by an Atmel ATmega8L which handles the I2C communication with for example an Arduino. Both motors can be driven simultaneously while set to a different speed and direction. It can power two brushed DC motors or one 4-wire two-phase stepper motor. It requires a 6V to 15V power supply to power the motor and has an onboard 5V voltage regulator which can power the I2C bus and the Arduino(selectable by jumper). All driver lines are diode protected from back EMF.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver_V1.2.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-I2C_Motor_Driver_V1.2",permalink:"/Grove-I2C_Motor_Driver_V1.2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver_V1.2.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"Jan 9, 2022",frontMatter:{title:"Grove - I2C Motor Driver V1.2",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.2/",slug:"/Grove-I2C_Motor_Driver_V1.2",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - I2C Motor Driver",permalink:"/Grove-I2C_Motor_Driver"},next:{title:"Grove - I2C Motor Driver V1.3",permalink:"/Grove-I2C_Motor_Driver_V1.3"}},l={},d=[{value:"Version Tracker",id:"version-tracker",level:2},{value:"Feature",id:"feature",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Cautions",id:"cautions",level:2},{value:"Usage",id:"usage",level:2},{value:"Set the address of the I2C Motor Driver",id:"set-the-address-of-the-i2c-motor-driver",level:3},{value:"How to drive a 4-wire stepper",id:"how-to-drive-a-4-wire-stepper",level:3},{value:"Function Reference",id:"function-reference",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},u="wrapper";function c(e){let{components:r,...t}=e;return(0,n.yg)(u,(0,o.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-2.jpg",alt:null})),(0,n.yg)("p",null,"The Grove I2C motor driver is a new addition to the Grove series with the same easy-to-use interface. Its heart is a dual channel H-bridge driver chip\uff08L298N\uff09that can handle current up to 2A per channel, controlled by an Atmel ATmega8L which handles the I2C communication with for example an Arduino. Both motors can be driven simultaneously while set to a different speed and direction. It can power two brushed DC motors or one 4-wire two-phase stepper motor. It requires a 6V to 15V power supply to power the motor and has an onboard 5V voltage regulator which can power the I2C bus and the Arduino(selectable by jumper). All driver lines are diode protected from back EMF."),(0,n.yg)("p",null,"The easy software interface is not the only easy-to-use feature because the Grove I2C motor driver is designed to get you up and running in no time. It features a LED for power and four LED's to indicate if and to which direction each motor is running. Screw terminals facilitate motor and power connections, and the Grove system plug and I2C interface enables you to daisy-chain the driver with many other devices."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/twig-i2c-motor-driver-p-907.html"},(0,n.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.yg)("h2",{id:"version-tracker"},"Version Tracker"),(0,n.yg)("hr",null),(0,n.yg)("table",{width:"494"},(0,n.yg)("tr",null,(0,n.yg)("th",null," Revision"),(0,n.yg)("th",null," Descriptions"),(0,n.yg)("th",null," Release")),(0,n.yg)("tr",null,(0,n.yg)("td",null," v1.0"),(0,n.yg)("td",null," Initial public release"),(0,n.yg)("td",null," May 17th, 2012")),(0,n.yg)("tr",null,(0,n.yg)("td",null," v1.2"),(0,n.yg)("td",null," I2C address set by hardware"),(0,n.yg)("td",null," July 2th, 2012"))),(0,n.yg)("h2",{id:"feature"},"Feature"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Grove Compatiple")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"I2C Interface")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Motor's speed and direction can control")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Number of channels: 2")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Changeable slave address by Hardware"))),(0,n.yg)("h2",{id:"specifications"},"Specifications"),(0,n.yg)("hr",null),(0,n.yg)("table",{cellspacing:"0",width:"80%"},(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"col"}," Item"),(0,n.yg)("th",{scope:"col"}," Min"),(0,n.yg)("th",{scope:"col"}," Typical"),(0,n.yg)("th",{scope:"col"}," Max"),(0,n.yg)("th",{scope:"col"}," Unit")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"Working Voltage"),(0,n.yg)("td",null," 6"),(0,n.yg)("td",null," -"),(0,n.yg)("td",null," 15"),(0,n.yg)("td",null," VDC")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," Max Output Current per channel"),(0,n.yg)("td",{colspan:"3"},"0.5"),(0,n.yg)("td",null," A")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," Maximum Total current"),(0,n.yg)("td",{colspan:"3"},"1.0"),(0,n.yg)("td",null," A")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," Input/output voltage on I2C bus"),(0,n.yg)("td",{colspan:"3"}," 5"),(0,n.yg)("td",null," V")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  Communication protocol"),(0,n.yg)("td",{colspan:"3"}," I2C"),(0,n.yg)("td",null," /"))),(0,n.yg)("h2",{id:"interface-function"},"Interface Function"),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-1.jpg",alt:null})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"78M05 IC:")," 5v voltage regulator"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"L298 IC:")," dual full bridge driver"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Atmega8 IC:")," Control Motor Rotate."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"NOTE:")," Input voltage on screw terminals is regulated to 5v and connected to I2C +5v via a jumper (J4). Remove jumper if both external power via the screw terminals and power via the I2C header is used. Use jumper if 5v should be supplied to the I2C bus."),(0,n.yg)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.yg)("hr",null),(0,n.yg)("p",null,"This motor driver can be used to drive any brushed electronic motor as long as it doesn't consume more than 2A at 5v. Two motors can be driven simultaneously while set to a different speed and direction. The speed can be set fully proportional and is controlled by the ATmega8 on the board using PWM. It is set by I2C commands sent from Arduino or Seeeduino.\nIt is perfect for applications like robots, homebuilt RC cars, case fans, high power LED illumination or any other project that involves proportional load control."),(0,n.yg)("h2",{id:"cautions"},"Cautions"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The board will be very hot if while operating over 1Amps. Do keep off your hands!")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Arduino IDE(1.0 Or higher version) are supported."))),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("hr",null),(0,n.yg)("p",null,"The I2C Motor Driver can control motor which is based on the chip L298, The L298 isn\u2019t just a dual motor driver, it is a dual H-bridge. An h-bridge is basically a specific setup of transistors that allow you to switch direction of current. So hooked up to a motor, that means you can have it spin in both directions, and with PWM input, you can use your Arduino to make them spin at any speed. Because the L298 has 2 H-bridges, you can not only make a robot go forwards and backwards, but also turn around by having each wheel spin in a different direction."),(0,n.yg)("p",null,"Now, let's use the I2C Motor Driver to control two DC motors or a stepper rotating in the positive or opposite direction."),(0,n.yg)("h3",{id:"set-the-address-of-the-i2c-motor-driver"},"Set the address of the I2C Motor Driver"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Set the address by dial switch as a new function added to the new I2C Motor Driver.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-9.jpg",alt:null})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Then keep the address setup in the program is same to the address setup on the I2C motor driver. The default address setup in the program is 0x0f.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"#define I2CMotorDriverAdd         0x0f   // Set the address of the I2CMotorDriver\n")),(0,n.yg)("h3",{id:""}),(0,n.yg)("p",null,"How to drive 2 DC motors"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-4.jpg",alt:null})),(0,n.yg)("div",null,(0,n.yg)("span",{style:{color:"red"}},"**Note:**"),(0,n.yg)("dl",null,(0,n.yg)("dd",null,"The first thing to notice however, is that you need an external power source  your DC motors, the 5v pin on the Arduino can not source enough power to drive 2 motors, you may damage your Arduino if you do."))),(0,n.yg)("p",null,"And then program your Arduino as below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"#include <Wire.h>\n.......\n.......\n< Driver functions >\n.......\n.......\nvoid setup()  {\n    Wire.begin(); // join i2c bus (address optional for master)\n    delayMicroseconds(10000); //wait for motor driver to initialization\n}\n\nvoid loop()  {\n    while(1)  {\n        MotorSpeedSetAB(100,20);\n        delay(10); //this delay needed\n        MotorDirectionSet(0b1010);  //0b1010  Rotating in the positive direction\n        delay(1000);\n        MotorDirectionSet(0b0101);  //0b0101  Rotating in the opposite direction\n        delay(500);\n    }\n}\n")),(0,n.yg)("p",null,"In this program, Arduino first set the speed of the 2 DC motors with the ",(0,n.yg)("em",{parentName:"p"},"MotorSpeedSetAB()_command, and then set the DC motors work directions with _MotorDirectionSet()")," command. please refer to the Grove-I2C_Motor_Driver_V1.2#Function_Reference for details, you can download all the demo code in the Grove-I2C_Motor_Driver_V1.2#Resources."),(0,n.yg)("h3",{id:"how-to-drive-a-4-wire-stepper"},"How to drive a 4-wire stepper"),(0,n.yg)("p",null,"The I2C motor Driver can be also used to drive a 4-wire stepper. connect your stepper to the Output Pins of I2C motor driver, and then connect motor driver to your Arduino/Seeeduino with I2C bus. Program your Arduino as blows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"#include <Wire.h>\n.......\n.......\n< Driver functions >\n.......\n.......\nvoid setup()  {\n    Wire.begin(); // join i2c bus (address optional for master)\n    delayMicroseconds(10000); //wait for motor driver to initialization\n}\n\nvoid loop()  {\n    while(1)  {\n        MotorSpeedSetAB(100,100);//when driving a stepper, the speed should be set to 100;\n        delay(10);\n        MotorDirectionSet(0b0001);\n        delay(4);\n        MotorDirectionSet(0b0011);\n        delay(4);\n        MotorDirectionSet(0b0010);\n        delay(4);\n        MotorDirectionSet(0b0110);\n        delay(4);\n        MotorDirectionSet(0b0100);\n        delay(4);\n        MotorDirectionSet(0b1100);\n        delay(4);\n        MotorDirectionSet(0b1000);\n        delay(4);\n        MotorDirectionSet(0b1001);\n        delay(4);\n    }\n}\n")),(0,n.yg)("p",null,"This connected 4-wire stepper will rotate, you can adjust the rotate speed or step number in your Arduino program. You can also use some other stepper libraries to control it, you can download all the demo code in the Resource."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/2.gif",alt:null})),(0,n.yg)("h2",{id:"function-reference"},"Function Reference"),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"1. void MotorSpeedSetAB(unsigned char MotorSpeedA , unsigned char MotorSpeedB)")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description: defines the speed of motor 1 and motor 2")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"MotorSpeedA: the DC motor A speed, should be 0~100;")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"MotorSpeedB: the DC motor B speed, should be 0~100;")),(0,n.yg)("p",null,"Usage:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'Serial.println("sent DC speed 100");\nMotorSpeedSetAB(100,100);//defines the speed of motor 1 and motor 2;\ndelay(10); //this delay needed\n')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"2. void MotorPWMFrequenceSet(unsigned char Frequence)")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description:set the prescale frequency of PWM, 0x03 default.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Frequence: the prescale frequency of PWM.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"3. void MotorDirectionSet(unsigned char Direction)")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description: Adjust the direction of the motors.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Direction:can be Forward/Reverse rotating.")),(0,n.yg)("p",null,"Usage:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'MotorDirectionSet(0b1010);  //"0b1010" defines the output polarity, "10" means the M+ is "positive" while the M- is "negative"\n                            // make sure M+ and M- is different polarity when driving DC motors.\ndelay(1000);\nMotorDirectionSet(0b0101);  //0b0101  Rotating in the opposite direction\ndelay(500);\n')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"4. void MotorDriectionAndSpeedSet(unsigned char Direction,unsigned char MotorSpeedA,unsigned char MotorSpeedB)")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description: Adjust the direction and speed together of Motors.")),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip"},"Grove - I2C Motor Driver Eagle File"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/I2CMotorDriver12Demo.zip"},"I2C Motor DriverV1.2 Demo Code"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/L298datasheet.pdf"},"L298 Datasheet"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/ST_78M05DataSheet.pdf"},"78M05 Datssheet"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Burn_firmware_for_Atmega8_using_ISP.zip"},"File:Burn Firmware for Atmega8 using ISP")))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);