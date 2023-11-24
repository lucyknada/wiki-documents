"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75330],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=n,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return a?r.createElement(k,o(o({ref:t},u),{},{components:a})):r.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},36937:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={description:"Grove - Step Counter(BMA456)",title:"Grove - Step Counter(BMA456)",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Step_Counter-BMA456",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Motion/Grove-Step_Counter-BMA456",id:"Sensor/Grove/Grove_Sensors/Motion/Grove-Step_Counter-BMA456",title:"Grove - Step Counter(BMA456)",description:"Grove - Step Counter(BMA456)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-Step_Counter-BMA456.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Motion",slug:"/Grove-Step_Counter-BMA456",permalink:"/Grove-Step_Counter-BMA456",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-Step_Counter-BMA456.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Grove - Step Counter(BMA456)",title:"Grove - Step Counter(BMA456)",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Step_Counter-BMA456",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove-Encoder",permalink:"/Grove-Encoder"},next:{title:"Grove Network Module Guide",permalink:"/Grove_network_module_intro"}},p={},s=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Schemaitc",id:"schemaitc",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/main.jpg",alt:null})),(0,n.kt)("p",null,"The Grove - Step Counter(BMA456) is based on BMA456, which is an exetremely small, triaxial, low-g high performance accelerations module. Thanks to the special algorithm of BOSCH, we made this module a portable pedometer."),(0,n.kt)("p",null,"Relaiable, cost-effective, on top of that, it's very easy to use, you can easily add this plug and play module on your wearable devices. "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - Step Counter(BMA456)"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Oct 2018")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On chip FIFO"),(0,n.kt)("li",{parentName:"ul"},"Ultra-low power"),(0,n.kt)("li",{parentName:"ul"},"On-chip interrupt"),(0,n.kt)("li",{parentName:"ul"},"Programable functionality")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Acceleration Range"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb12g, \xb14g, \xb18g, \xb116g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sensitivity"),(0,n.kt)("td",{parentName:"tr",align:null},"16384 @\xb12g / 8192 @\xb14g / 4096 @\xb18g / 2048 @\xb116g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"I^2^C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I^2^C Address"),(0,n.kt)("td",{parentName:"tr",align:null},"0x19(default) / 0x18(optional)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 40mm W: 20mm H: 10mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"3.2g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Package size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 140mm W: 90mm H: 10mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gross Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"9g")))),(0,n.kt)("h2",{id:"typical-applications"},"Typical applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Applications with height constrains"),(0,n.kt)("li",{parentName:"ul"},"Plug and Play Step-Counter solution with watermark functionality"),(0,n.kt)("li",{parentName:"ul"},"Fitness applications / Activity Tracking"),(0,n.kt)("li",{parentName:"ul"},"Power management for wearable applications "),(0,n.kt)("li",{parentName:"ul"},"Display on/off and profile switching"),(0,n.kt)("li",{parentName:"ul"},"User interface without hardware buttons"),(0,n.kt)("li",{parentName:"ul"},"E-compass tilt compensation and data synchronization"),(0,n.kt)("li",{parentName:"ul"},"High performance angle measurements")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("h3",{id:"pin-out"},"Pin Out"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/pin_out.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/pin_out_back.jpg",alt:null})),(0,n.kt)("h3",{id:"schemaitc"},"Schemaitc"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Power")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/schematic_1.jpg",alt:null})),(0,n.kt)("p",null,"The typical voltage of BMA456 is 1.8V, so we use the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf"},"XC6206P182MR")," chip to provide a stable 1.8V. The input of XC6206P33 ranges from 1.8V to 6.0V, so you can use this module with your Arduino both in 3.3V and 5V."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Bi-directional level shifter circuit")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/schematic_2.jpg",alt:null})),(0,n.kt)("p",null,"This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I",(0,n.kt)("sup",null,"2"),"C bus of this sensor use 3.3V, if the I",(0,n.kt)("sup",null,"2"),"C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, ",(0,n.kt)("strong",{parentName:"p"},"Q6")," and ",(0,n.kt)("strong",{parentName:"p"},"Q5")," are N-Channel MOSFET ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf"},"2N7002A"),", which act as a bidirectional switch. In order to better understand this part, you can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf"},"AN10441")),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Step Counter(BMA456)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/thumbnail.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html",target:"_blank"},"Get One Now"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy\n\n**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - Step Counter(BMA456) to port ",(0,n.kt)("strong",{parentName:"p"},"I^2^C")," of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/connect.jpg",alt:null})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Cable"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Step Counter(BMA456)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V or 3.3V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"White"),(0,n.kt)("td",{parentName:"tr",align:null},"SDA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_BMA456"},"Seeed_BMA456")," Library from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the example, you can open it in the following three ways\uff1a"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Open it directly in the Arduino IDE via the path: ",(0,n.kt)("strong",{parentName:"li"},"File --\x3e Examples --\x3e Grove -Step Counter(BMA456) --\x3e step_counter"),".\n",(0,n.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/path_1.jpg",alt:null})),(0,n.kt)("li",{parentName:"ol"},"Open it in your computer by click the ",(0,n.kt)("strong",{parentName:"li"},"step_counter.ino")," which you can find in the folder ",(0,n.kt)("strong",{parentName:"li"},"XXXX\\Arduino\\libraries\\Seeed_BMA456-master\\examples\\step_counter"),", ",(0,n.kt)("strong",{parentName:"li"},"XXXX")," is the location you installed the Arduino IDE.\n",(0,n.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/path_2.jpg",alt:null})),(0,n.kt)("li",{parentName:"ol"},"Or, you can just click the icon ",(0,n.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:null})," in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},'#include "arduino_bma456.h"\n\nuint32_t step = 0;\n\nvoid setup(void)\n{    \n    Serial.begin(115200);\n    Serial.println("BMA456 Step Counter");\n    \n    bma456.initialize(RANGE_4G, ODR_1600_HZ, NORMAL_AVG4, CONTINUOUS);\n    bma456.stepCounterEnable();\n}\n\nvoid loop(void)\n{   \n    step = bma456.getStepCounterOutput();\n\n    Serial.print("Step: ");\n    Serial.println(step);\n    \n    delay(1000);\n}\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,n.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,n.kt)("strong",{parentName:"p"},"115200"),"."))),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," If every thing goes well, when you open the Serial Monitor and walk with this sensor on or move it to simulated walking posture , it may show as below:\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},"BM\nStep: 0\nBMA456 Step Counter\nStep: 0\nStep: 0\n...\n...\nStep: 18\nStep: 20\nStep: 22\nStep: 24\nStep: 26\nStep: 28\nStep: 30\nStep: 32\nStep: 34\nStep: 36\nStep: 38\n")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip"},"Grove - Step Counter(BMA456) Eagle Files"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_BMA456/archive/master.zip"},"Seeed BMA456 Library"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/BMA456.pdf"},"Datasheet BMA456"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf"},"XC6206 DATASHEET")))),(0,n.kt)("h2",{id:"project"},"Project"),(0,n.kt)("p",null,"This is the introduction Video of this product, simple demos, you can have a try."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gPi4EWuAGtg?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);