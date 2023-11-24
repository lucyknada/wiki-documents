"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63178],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(o),h=n,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||a;return o?r.createElement(m,i(i({ref:t},d),{},{components:o})):r.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},28292:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const a={description:"Grove - Alcohol Sensor",title:"Grove - Alcohol Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Alcohol_Sensor",last_update:{date:"1/5/2023",author:"shuxu hu"}},i=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Gas/Grove-Alcohol_Sensor",id:"Sensor/Grove/Grove_Sensors/Gas/Grove-Alcohol_Sensor",title:"Grove - Alcohol Sensor",description:"Grove - Alcohol Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-Alcohol_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Gas",slug:"/Grove-Alcohol_Sensor",permalink:"/Grove-Alcohol_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-Alcohol_Sensor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - Alcohol Sensor",title:"Grove - Alcohol Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Alcohol_Sensor",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Oxygen Sensor Pro(GGC2330-O2)",permalink:"/Grove-Oxygen-Sensor-Pro"},next:{title:"Grove - CO2 Sensor",permalink:"/Grove-CO2_Sensor"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Download Code and Upload",id:"download-code-and-upload",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Alcohol_sensor_01.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Grove - Alcohol Sensor is a complete alcohol sensor module for Arduino or Seeeduino. It is built with ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/MQ303A.pdf"},"MQ303A")," semiconductor alcohol sensor. It has good sensitivity and fast response to alcohol. It is suitable for making Breathalyzer. This Grove implements all the necessary circuitry for MQ303A like power conditioning and heater power supply. This sensor outputs a voltage inversely proportional to the alcohol concentration in air."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("div",{class:"admonition danger"},(0,n.kt)("p",{class:"admonition-title"},"Note"),"The sensor value only reflects the approximated trend of gas concentration in a permissible error range, it DOES NOT represent the exact gas concentration. The detection of certain components in the air usually requires a more precise and costly instrument, which cannot be done with a single gas sensor. If your project is aimed at obtaining the gas concentration at a very precise level, then we do not recommend this gas sensor."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.\n"))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Input Voltage: 5V"),(0,n.kt)("li",{parentName:"ul"},"Working Current: 120mA"),(0,n.kt)("li",{parentName:"ul"},"Detectable Concentration: 20-1000ppm"),(0,n.kt)("li",{parentName:"ul"},"Grove Compatible connector"),(0,n.kt)("li",{parentName:"ul"},"Highly sensitive to alcohol."),(0,n.kt)("li",{parentName:"ul"},"Fast response and resumes quickly after alcohol exposure."),(0,n.kt)("li",{parentName:"ul"},"Long life."),(0,n.kt)("li",{parentName:"ul"},"Compact form factor.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,n.kt)("p",null,"Grove products have a eco system and all have a same connector which can plug onto the Grove Base Shield. Connect this module to the A0 port of Base Shield, however, you can also connect Gas sensor to Arduino without Base Shield by jumper wires."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino UNO"),(0,n.kt)("th",{parentName:"tr",align:null},"Alcohol Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Analog A1"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Analog A0"),(0,n.kt)("td",{parentName:"tr",align:null},"DAT")))),(0,n.kt)("p",null,"You can gain the present voltage through the DAT pin of sensor. ",(0,n.kt)("font",{color:"Red"},"Please note the best preheat time of the sensor is above 48 hours"),". For the detailed information about the Alcohol sensor please refer to the datasheet."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Twig_Alcohol_Sensor_Connected_To_Seeeduino_via_BaseStem.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h3",{id:"download-code-and-upload"},"Download Code and Upload"),(0,n.kt)("p",null,"There are two steps you need to do before getting the concentration of gas."),(0,n.kt)("p",null,"First, connect the module with Grove Shield using A0 like the picture above. And put the sensor in a clear air and use the program below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'#define heaterSelPin 15\n\nvoid setup() {\n    Serial.begin(9600);\n    pinMode(heaterSelPin,OUTPUT);   // set the heaterSelPin as digital output.\n    digitalWrite(heaterSelPin,LOW); // Start to heat the sensor\n}\n\nvoid loop() {\n    float sensor_volt;\n    float RS_air; //  Get the value of RS via in a clear air\n    float sensorValue = 0;\n\n/*--- Get a average data by testing 100 times ---*/\n    for(int x = 0 ; x < 100 ; x++)\n    {\n        sensorValue = sensorValue + analogRead(A0);\n    }\n    sensorValue = sensorValue/100.0;\n/*-----------------------------------------------*/\n\n    sensor_volt = sensorValue/1024*5.0;\n    RS_air = sensor_volt/(5.0-sensor_volt); // omit *R16\n    Serial.print("sensor_volt = ");\n    Serial.print(sensor_volt);\n    Serial.println("V");\n    Serial.print("RS_air = ");\n    Serial.println(RS_air);\n    delay(1000);\n}\n')),(0,n.kt)("p",null,"Then, open the monitor of Arduino IDE, you can see some data are printed, write down the value of RS_air and you need to use it in the following program. During this step, you may pay a while time to test the value of RS_air."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'#define heaterSelPin 15\n\nvoid setup() {\n    Serial.begin(9600);\n    pinMode(heaterSelPin,OUTPUT);   // set the heaterSelPin as digital output.\n    digitalWrite(heaterSelPin,LOW); // Start to heat the sensor\n}\n\nvoid loop() {\n\n    float sensor_volt;\n    float RS_gas; // Get value of RS in a GAS\n    float ratio; // Get ratio RS_GAS/RS_air\n    int sensorValue = analogRead(A0);\n    sensor_volt=(float)sensorValue/1024*5.0;\n    RS_gas = sensor_volt/(5.0-sensor_volt); // omit *R16\n\n  /*-Replace the name "R0" with the value of R0 in the demo of First Test -*/\n    ratio = RS_gas/RS_air;  // ratio = RS/R0\n  /*-----------------------------------------------------------------------*/\n\n    Serial.print("sensor_volt = ");\n    Serial.println(sensor_volt);\n    Serial.print("RS_ratio = ");\n    Serial.println(RS_gas);\n    Serial.print("Rs/R0 = ");\n    Serial.println(ratio);\n\n    Serial.print("\\n\\n");\n    delay(1000);\n}\n')),(0,n.kt)("p",null,"Now, we can get the concentration of gas from the figure below."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Gas_Sensor_5.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"According to the figure, we can see that the minimum concentration we can test is 20ppm and the maximum is 10000ppm, in a other word, we can get a concentration of gas between 0.002% and 1%. However, we can't provide a formula because the relation between ratio and concentration is nonlinear."),(0,n.kt)("div",{class:"admonition note"},(0,n.kt)("p",{class:"admonition-title"},"Notes"),(0,n.kt)("p",null," a. The value varies between 500 - 905. Hence any value above 650 indicates alcohol vapor in the vicinity."),(0,n.kt)("p",null," b. Once exposed to alcohol vapor, it takes some time for the sensor value to decrease completely."),(0,n.kt)("p",null," c. Yet, any new exposure will show instant increase in sensor value.")),(0,n.kt)("div",{class:"admonition danger"},(0,n.kt)("p",{class:"admonition-title"},"Caution"),(0,n.kt)("p",null," a. Alcohol sensor is very sensitive semiconductor device. Handle with care."),(0,n.kt)("p",null," b. Do not expose to organic silicon steam, alkali or corrosive gases."),(0,n.kt)("p",null," c. Do not use freeze or spill water."),(0,n.kt)("p",null," d. Maintain proper working voltage.")),(0,n.kt)("h1",{id:"grove-alcohol-sensor"},"Grove-Alcohol Sensor"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Twig_-_Alcohol_Sensor_Eagle_Files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h1",{id:"grove-alcohol-sensor-v12"},"Grove-Alcohol Sensor v1.2"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove-Alcohol_Sensor_sch_pcbv1.2.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h1",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Twig_-_Alcohol_Sensor_Eagle_Files.zip"},"Grove-Alcohol Sensor Eagle File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove-Alcohol_Sensor_sch_pcbv1.2.zip"},"Grove-Alcohol Sensor v1.2 Eagle File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove%20-%20Alcohol%20Sensor%20v1.2.pdf"},"Schematics in PDF Format")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#/How_to_Chose_A_Gas_Sensor"},"How to Choose A Gas Sensor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/MQ303A.pdf"},"MQ303A"))),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}u.isMDXComponent=!0}}]);