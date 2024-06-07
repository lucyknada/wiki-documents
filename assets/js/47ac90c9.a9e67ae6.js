"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99899],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=a.createContext({}),s=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,y=d["".concat(g,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(y,l(l({ref:t},p),{},{components:r})):a.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(58168),n=(r(96540),r(15680));const o={title:"Water Flow Sensor",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Water-Flow-Sensor/",slug:"/Water-Flow-Sensor",last_update:{date:"02/03/2022",author:"gunengyu"}},l=void 0,i={unversionedId:"Sensor/Beyond_Grove/Sensors/Water-Flow-Sensor",id:"Sensor/Beyond_Grove/Sensors/Water-Flow-Sensor",title:"Water Flow Sensor",description:"Water flow sensor consists of a copper body, a water rotor, and a hall-effect sensor. When water flows through the rotor, rotor rolls, its speed changes with different rate of flow. And the hall-effect sensor outputs the corresponding pulse signal. This one is suitable to detect flow in water dispenser or coffee machine. More importantly, the life of the copper one is longer than that of plastic body.",source:"@site/docs/Sensor/Beyond_Grove/Sensors/Water-Flow-Sensor.md",sourceDirName:"Sensor/Beyond_Grove/Sensors",slug:"/Water-Flow-Sensor",permalink:"/Water-Flow-Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Sensors/Water-Flow-Sensor.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{title:"Water Flow Sensor",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Water-Flow-Sensor/",slug:"/Water-Flow-Sensor",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Ultra Sonic range measurement module",permalink:"/Ultra_Sonic_range_measurement_module"},next:{title:"Weight Sensor (Load Cell)0-500g",permalink:"/Weight_Sensor_Load_Cell_0-500g"}},g={},s=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"What is a water flow sensor (meter)",id:"what-is-a-water-flow-sensor-meter",level:2},{value:"How does the water flow sensor work",id:"how-does-the-water-flow-sensor-work",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Materials Requied",id:"materials-requied",level:4},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"Software Code",id:"software-code",level:4},{value:"The Formula for the calculation of water flow sensor",id:"the-formula-for-the-calculation-of-water-flow-sensor",level:2},{value:"Water Flow Sensors at Seeed",id:"water-flow-sensors-at-seeed",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("div",{align:"center"},(0,n.yg)("figure",null,(0,n.yg)("img",{src:"https://static-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedfile2017-06bazaar483771_1.jpg",alt:"Grove-Doppler-Radar'' OUTCOME",title:"demo"}),(0,n.yg)("figcaption",null,(0,n.yg)("b",null),(0,n.yg)("i",null)))),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("a",{href:"https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",border:0}))),(0,n.yg)("p",null,"Water flow sensor consists of a copper body, a water rotor, and a hall-effect sensor. When water flows through the rotor, rotor rolls, its speed changes with different rate of flow. And the hall-effect sensor outputs the corresponding pulse signal. This one is suitable to detect flow in water dispenser or coffee machine. ",(0,n.yg)("strong",{parentName:"p"},"More importantly, the life of the copper one is longer than that of plastic body.")),(0,n.yg)("h2",{id:"feature"},"Feature"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Compact, Easy to Install"),(0,n.yg)("li",{parentName:"ul"},"High Sealing Performance"),(0,n.yg)("li",{parentName:"ul"},"High Quality Hall Effect Sensor"),(0,n.yg)("li",{parentName:"ul"},"RoHS Compliant")),(0,n.yg)("h2",{id:"specification"},"Specification"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameters"),(0,n.yg)("th",{parentName:"tr",align:null},"Value"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Dimensions"),(0,n.yg)("td",{parentName:"tr",align:null},"0mm x0mm x0mm")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Weight"),(0,n.yg)("td",{parentName:"tr",align:null},"G.W 79g")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Battery"),(0,n.yg)("td",{parentName:"tr",align:null},"Exclude")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Mini. Wokring Voltage"),(0,n.yg)("td",{parentName:"tr",align:null},"DC 4.5V")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Max. Working Current"),(0,n.yg)("td",{parentName:"tr",align:null},"15mA (DC 5V)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Working Voltage"),(0,n.yg)("td",{parentName:"tr",align:null},"DC 5V~15V")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Interface Dimensions"),(0,n.yg)("td",{parentName:"tr",align:null},"G1/2Inch")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Flow Rate Range"),(0,n.yg)("td",{parentName:"tr",align:null},"1~25L/min")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Frequency"),(0,n.yg)("td",{parentName:"tr",align:null},"F=(11*Q)Q=L/MIN\xb13%")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Error Range"),(0,n.yg)("td",{parentName:"tr",align:null},"(1~30L\\MIN) \xb13%")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Load Capacity"),(0,n.yg)("td",{parentName:"tr",align:null},"\u226410mA (DC 5V)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,n.yg)("td",{parentName:"tr",align:null},"0 ~ 80\u2103")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Liquid Temperature"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2264120\u2103")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Operating Humidity"),(0,n.yg)("td",{parentName:"tr",align:null},"35%\uff5e90%RH")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Water Pressure"),(0,n.yg)("td",{parentName:"tr",align:null},"\u22641.75MPa")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Material Description"),(0,n.yg)("td",{parentName:"tr",align:null},"H57Copper+POM")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Storage Temperature"),(0,n.yg)("td",{parentName:"tr",align:null},"-25\uff5e+ 80\u2103")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Storage Humidity"),(0,n.yg)("td",{parentName:"tr",align:null},"25%\uff5e95%RH")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Output Pulse High Level"),(0,n.yg)("td",{parentName:"tr",align:null},">DC 4.7V (Input Voltage DC5V)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Output Pulse Low Level"),(0,n.yg)("td",{parentName:"tr",align:null},"<DC 0.5V (Input Voltage DC5V)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Output Pulse Duty Cycle"),(0,n.yg)("td",{parentName:"tr",align:null},"50%\xb110%")))),(0,n.yg)("h2",{id:"what-is-a-water-flow-sensor-meter"},"What is a water flow sensor (meter)"),(0,n.yg)("p",null,"We use a water flow sensor to measure the water flow rate. The water flow rate is the volume of fluid that passes per unit time. People often use water flow sensor for automatic water heater control, DIY coffee machines, water vending machines, etc. There are a variety of flow sensors of different principles, but for makers using Arduino or Raspberry Pi, the most common flow sensor is based on a Hall device. For example, the most classic water flow sensor ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html"},"YF-S402")," and ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html"},"YF-S201")," rely on Hall sensors."),(0,n.yg)("h2",{id:"how-does-the-water-flow-sensor-work"},"How does the water flow sensor work"),(0,n.yg)("div",{align:"center"},(0,n.yg)("figure",null,(0,n.yg)("img",{src:"https://blog.seeedstudio.com/wp-content/uploads/2020/05/DSC03966-1030x686.jpg",alt:"Grove-Doppler-Radar'' OUTCOME",title:"demo"}),(0,n.yg)("figcaption",null,(0,n.yg)("b",null,"Figure 1"),". ",(0,n.yg)("i",null,"All components of YF-402")))),(0,n.yg)("div",{align:"center"},(0,n.yg)("figure",null,(0,n.yg)("img",{src:"https://blog.seeedstudio.com/wp-content/uploads/2020/05/how-does-water-flow-sensor-work-1030x599.jpg",alt:"Grove-Doppler-Radar'' OUTCOME",title:"demo"}),(0,n.yg)("figcaption",null,(0,n.yg)("b",null,"Figure 2"),". ",(0,n.yg)("i",null,"Water flow sensor work principle")))),(0,n.yg)("p",null,"It\u2019s quite simple inside. The main components are the Hall Effect sensor, turbine wheel, and magnet. The water flows in through the inlet and out through the outlet. The water current drove the wheel to turn, and the magnet on the wheel turned with it. Magnetic field rotation triggers the Hall sensor, which outputs high and low level square waves ( pulse )."),(0,n.yg)("div",{align:"center"},(0,n.yg)("figure",null,(0,n.yg)("img",{src:"https://blog.seeedstudio.com/wp-content/uploads/2020/05/Water-flow-sensor-principle-1.gif",alt:"Grove-Doppler-Radar'' OUTCOME",title:"demo"}),(0,n.yg)("figcaption",null,(0,n.yg)("b",null,"Figure 3"),". ",(0,n.yg)("i",null,"Water flow sensor working principle")))),(0,n.yg)("p",null,"For every round of the wheel, the volume of water flowing through is a certain amount, as is the number of square waves output. Therefore, we can calculate the flow of water by counting the number of square waves ( pulse )."),(0,n.yg)("h2",{id:"platform-supported"},"Platform Supported"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,n.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("h4",{id:"materials-requied"},"Materials Requied"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Seeeduino Board"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove Base Shield"),(0,n.yg)("th",{parentName:"tr",align:null},"Water Flow Sensor"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_s.png",alt:"enter image description here"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Base_Shield_V2/img/base_shield.png",alt:"enter image description here"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Water_Flow_Sensor/IMG/Water-Flow-Sensor.png",alt:"enter image description here"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html"},"Get ONE Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2.html"},"Get ONE Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/catalogsearch/result/?q=Water+flow+sensor"},"Get ONE Now"))))),(0,n.yg)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,n.yg)("p",null,"For the YF serial, there are 3 wires:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Red for Vcc"),(0,n.yg)("li",{parentName:"ul"},"Black for GND"),(0,n.yg)("li",{parentName:"ul"},"Yellow for pulse output.")),(0,n.yg)("p",null,"For the Atmega 328-based board like ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html"},"Seeeduino V4.2"),". There are two digital pins that can be used as an interrupt. Digital pin 2 for ",(0,n.yg)("strong",{parentName:"p"},"interrupt 0"),", and digital pin 3 for ",(0,n.yg)("strong",{parentName:"p"},"*interrupt 1"),". In this blog, we use the ",(0,n.yg)("strong",{parentName:"p"},"D2")," pin to detect the pulse output by the water flow sensor. If you are using Seeeduino + ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Base-Shield-V2.html"},"Grove base shield"),", just plug the water flow sensor to the D2 connecter. If you are using other Arduino board please use jumper cables to connect to the right pin."),(0,n.yg)("div",{align:"center"},(0,n.yg)("figure",null,(0,n.yg)("img",{src:"https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-34.png",alt:"Grove-Doppler-Radar'' OUTCOME",title:"demo"}),(0,n.yg)("figcaption",null,(0,n.yg)("b",null,"Figure 4"),". ",(0,n.yg)("i",null,"Water flow sensor connect with Arduino")))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"Please plug the USB cable, Water Flow Sensor Interface into Seeeduino board Interface gently, otherwise you may damage the port.\n"))),(0,n.yg)("h4",{id:"software"},"Software"),(0,n.yg)("p",null,"Of course, you can use digitalread() in the ",(0,n.yg)("strong",{parentName:"p"},"LOOP")," function to read the output of the water flow sensor. Count number plus one whenever a high level is read. However, this approach is not real-time, and the program requires a certain waiting time for each execution, during which new pulses are not detected. For such real-time demanding applications, we typically use interrupt. Whenever the rising edge of the pulse is detected, an interruption is triggered, counting plus one."),(0,n.yg)("div",{align:"center"},(0,n.yg)("figure",null,(0,n.yg)("img",{src:"https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-33.png",alt:"Water-Flow-Sensor'' OUTCOME",title:"demo"}),(0,n.yg)("figcaption",null,(0,n.yg)("b",null),(0,n.yg)("i",null)))),(0,n.yg)("p",null,"For more detail about ",(0,n.yg)("strong",{parentName:"p"},"interrupt")," please check ",(0,n.yg)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/"},"attachinterrupt"),"."),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 1.")," Plug Grove Base board with the Water Flow Sensor into Seeeduino board and connect Seeeduino board to PC via a USB cable.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 2.")," Then open your Arduino IDE and copy the code below. At last, download the code into Arduino."))),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"The code here ",(0,n.yg)("strong",{parentName:"p"},"WORKS")," for the most classic YF \u2013 S201, YF - S402 and other Water Flow Sensors at Seeed, so does the working principle of water flow sensors.")),(0,n.yg)("h4",{id:"software-code"},"Software Code"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},'/*\nYF\u2010 S201 Water Flow Sensor\nWater Flow Sensor output processed to read in litres/hour\nAdaptation Courtesy: www.hobbytronics.co.uk\n*/\n\nvolatile int flow_frequency; // Measures flow sensor pulsesunsigned \n\nint l_hour; // Calculated litres/hour\nunsigned char flowsensor = 2; // Sensor Input\nunsigned long currentTime;\nunsigned long cloopTime;\n\nvoid flow () // Interrupt function\n\n{\n   flow_frequency++;\n}\n\n   void setup()\n {\n   pinMode(flowsensor, INPUT);\n   digitalWrite(flowsensor, HIGH); // Optional Internal Pull-Up\n   Serial.begin(9600);\n   attachInterrupt(0, flow, RISING); // Setup Interrupt\n   sei(); // Enable interrupts\n   currentTime = millis();\n   cloopTime = currentTime;\n}\n\n   void loop ()\n{\n   currentTime = millis();// Every second, calculate and print litres/hour\n   if(currentTime >= (cloopTime + 1000))\n   {\n      cloopTime = currentTime; // Updates cloopTime\n      // Pulse frequency (Hz) = 7.5Q, Q is flow rate in L/min.\n      l_hour = (flow_frequency * 60 / 7.5); // (Pulse frequency x 60 min) / 7.5Q = flowrate in L/hour\n      flow_frequency = 0; // Reset Counter\n      Serial.print(l_hour, DEC); // Print litres/hour\n      Serial.println(" L/hour");\n   }\n}\n')),(0,n.yg)("admonition",{title:"success",type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"If everything goes well, open the serial monitor tool and set the baud rate to 9600. as the water through, the flow value will print to the appropriate window.")),(0,n.yg)("h2",{id:"the-formula-for-the-calculation-of-water-flow-sensor"},"The Formula for the calculation of water flow sensor"),(0,n.yg)("p",null,"In the code section, we used the following formula, so how did this formula come about?"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},"l_hour = (flow_frequency * 60 / 7.5)\n")),(0,n.yg)("p",null,"Earlier we mentioned that with each revolution of the wheel, the volume of fluid flowing through is certain. At the same time, the number of pulses generated per revolution of the wheel is also a certain amount. Thus, we can establish an equation between the number of pulses and the water flow."),(0,n.yg)("p",null,"For the YF-S201, every liter of water that flows, the Hall Sensor outputs 450 pulses. Let\u2019s do little math here. 450 pulse for 1 liter, so each pulse means 1/450 liter water flowing through. We take the total volume of liquid flowing through the water flow sensor at a certain time ",(0,n.yg)("strong",{parentName:"p"},"t"),"(unit s) as ",(0,n.yg)("strong",{parentName:"p"},"V_total"),"(unit L), and the total number of pulses detected as ",(0,n.yg)("strong",{parentName:"p"},"N"),". Then we get:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},"V_total(L) = N* 1/450(L) \n")),(0,n.yg)("p",null,"Also, the total volume of fluid flowing through the water flow sensor is equal to the ",(0,n.yg)("strong",{parentName:"p"},"water flow rate(Q - unit L/s)")," multiplied by time ",(0,n.yg)("strong",{parentName:"p"},"t"),"(unit s) ."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},"V_total(L) = Q(L/s)*t(s) \n")),(0,n.yg)("p",null,"So we get:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},"N* 1/450 = Q(L/s)*t(s) \nN/t = 450 * Q(L/s) \n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"N/t")," happen to be frequency ",(0,n.yg)("strong",{parentName:"p"},"f"),", so:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},"f = 450*Q(L/s); \nQ(L/s) = f/450; \nQ(L/min) = f*60/450 = f/7.5 \nQ(L/hour) = f*60*60/450 = f*60 /7.5 \n")),(0,n.yg)("p",null,"For the YF \u2013 S402, every liter of water that flows, the Hall Sensor outputs 4380 pulses. So, the formula should be:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},"f = 4380*Q(L/s); \nQ(L/s) = f/4380; \nQ(L/min) = f*60/4380 = f/73 \nQ(L/hour) = f*60*60/4380 = f*60 /73 \n")),(0,n.yg)("h2",{id:"water-flow-sensors-at-seeed"},"Water Flow Sensors at Seeed"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"There are numerous Water Flow Sensors on sale at Seeed, including ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html"},"YF - 402")," and ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html"},"YF - S201"),". Besides, we offer a variety of Water Flow Sensors with different dimensions, detecting ranges, material and etc as following:")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Dimensions(DN)"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Working Voltage"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Flow Rate Range"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Length"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Male & Female"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Length of Thread"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Material"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html"},"YF-B1")),(0,n.yg)("td",{parentName:"tr",align:"center"},"DN15"),(0,n.yg)("td",{parentName:"tr",align:"center"},"5V~15V(DC)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1~25L/min"),(0,n.yg)("td",{parentName:"tr",align:"center"},"44mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Double Male"),(0,n.yg)("td",{parentName:"tr",align:"center"},"10mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Copper")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Water-Flow-Sensor-YF-B2-p-2879.html"},"YF-B2")),(0,n.yg)("td",{parentName:"tr",align:"center"},"DN15"),(0,n.yg)("td",{parentName:"tr",align:"center"},"5V~15V(DC)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1~25L/min"),(0,n.yg)("td",{parentName:"tr",align:"center"},"50mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Male in Female out"),(0,n.yg)("td",{parentName:"tr",align:"center"},"10mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Copper")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Water-Flow-Sensor-YF-B3-p-2880.html"},"YF-B3")),(0,n.yg)("td",{parentName:"tr",align:"center"},"DN15"),(0,n.yg)("td",{parentName:"tr",align:"center"},"5V~15V(DC)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1~25L/min"),(0,n.yg)("td",{parentName:"tr",align:"center"},"66mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Double Male"),(0,n.yg)("td",{parentName:"tr",align:"center"},"18mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Copper")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Water-Flow-Sensor-YF-B4-p-2881.html"},"YF-B4")),(0,n.yg)("td",{parentName:"tr",align:"center"},"DN15"),(0,n.yg)("td",{parentName:"tr",align:"center"},"5V~15V(DC)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1~25L/min"),(0,n.yg)("td",{parentName:"tr",align:"center"},"66mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Male in Female out"),(0,n.yg)("td",{parentName:"tr",align:"center"},"10mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Copper")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Water-Flow-Sensor-YF-B5-p-2882.html"},"YF-B5")),(0,n.yg)("td",{parentName:"tr",align:"center"},"DN20"),(0,n.yg)("td",{parentName:"tr",align:"center"},"5V~15V(DC)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1~30L/min"),(0,n.yg)("td",{parentName:"tr",align:"center"},"50mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Double Male"),(0,n.yg)("td",{parentName:"tr",align:"center"},"10mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Copper")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Water-Flow-Sensor-YF-B6-p-2883.html"},"YF-B6")),(0,n.yg)("td",{parentName:"tr",align:"center"},"DN20"),(0,n.yg)("td",{parentName:"tr",align:"center"},"5V~15V(DC)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1~30L/min"),(0,n.yg)("td",{parentName:"tr",align:"center"},"60mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Double Male"),(0,n.yg)("td",{parentName:"tr",align:"center"},"11mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Copper")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Water-Flow-Sensor-YF-B7-p-2884.html"},"YF-B7")),(0,n.yg)("td",{parentName:"tr",align:"center"},"DN15"),(0,n.yg)("td",{parentName:"tr",align:"center"},"5V~15V(DC)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1~25L/min"),(0,n.yg)("td",{parentName:"tr",align:"center"},"66mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Double Male"),(0,n.yg)("td",{parentName:"tr",align:"center"},"10mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Copper")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-Enclosure-p-1915.html"},"G1&2")),(0,n.yg)("td",{parentName:"tr",align:"center"},"DN15"),(0,n.yg)("td",{parentName:"tr",align:"center"},"5V~24V(DC)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1~30L/min"),(0,n.yg)("td",{parentName:"tr",align:"center"},"-"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Double Male"),(0,n.yg)("td",{parentName:"tr",align:"center"},"-"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Plastic")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/G3-4-Water-Flow-Sensor-p-1083.html"},"G3&4")),(0,n.yg)("td",{parentName:"tr",align:"center"},"DN20"),(0,n.yg)("td",{parentName:"tr",align:"center"},"5V~24V(DC)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1~60L/min"),(0,n.yg)("td",{parentName:"tr",align:"center"},"-"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Double Male"),(0,n.yg)("td",{parentName:"tr",align:"center"},"-"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Plastic")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html"},"G1&2")),(0,n.yg)("td",{parentName:"tr",align:"center"},"DN15"),(0,n.yg)("td",{parentName:"tr",align:"center"},"5V~24V(DC)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1~30L/min"),(0,n.yg)("td",{parentName:"tr",align:"center"},"60mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Double Male"),(0,n.yg)("td",{parentName:"tr",align:"center"},"13mm"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Plastic")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html"},"G1&8")),(0,n.yg)("td",{parentName:"tr",align:"center"},"-"),(0,n.yg)("td",{parentName:"tr",align:"center"},"5V~24V(DC)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"0.3~6L/min"),(0,n.yg)("td",{parentName:"tr",align:"center"},"-"),(0,n.yg)("td",{parentName:"tr",align:"center"},"-"),(0,n.yg)("td",{parentName:"tr",align:"center"},"-"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Plastic")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html"},"M11*1.25")),(0,n.yg)("td",{parentName:"tr",align:"center"},"-"),(0,n.yg)("td",{parentName:"tr",align:"center"},"5V~24V(DC)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"0.3~6L/min"),(0,n.yg)("td",{parentName:"tr",align:"center"},"-"),(0,n.yg)("td",{parentName:"tr",align:"center"},"-"),(0,n.yg)("td",{parentName:"tr",align:"center"},"-"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Plastic")))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);