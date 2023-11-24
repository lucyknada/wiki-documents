"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2898],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,o(o({ref:e},c),{},{components:r})):n.createElement(h,o({ref:e},c))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64772:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={description:"Wio Terminal Chassis Battery(650mAh)",title:"Wio Terminal Chassis Battery(650mAh)",keywords:["Wio_terminal Extension_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Chassis-Battery_650mAh",last_update:{date:"1/30/2023",author:"jianjing Huang"}},o=void 0,s={unversionedId:"Sensor/Wio_Terminal/Extension_Board/Wio-Terminal-Chassis-Battery_650mAh",id:"Sensor/Wio_Terminal/Extension_Board/Wio-Terminal-Chassis-Battery_650mAh",title:"Wio Terminal Chassis Battery(650mAh)",description:"Wio Terminal Chassis Battery(650mAh)",source:"@site/docs/Sensor/Wio_Terminal/Extension_Board/Wio-Terminal-Chassis-Battery_650mAh.md",sourceDirName:"Sensor/Wio_Terminal/Extension_Board",slug:"/Wio-Terminal-Chassis-Battery_650mAh",permalink:"/Wio-Terminal-Chassis-Battery_650mAh",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Extension_Board/Wio-Terminal-Chassis-Battery_650mAh.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Wio Terminal Chassis Battery(650mAh)",title:"Wio Terminal Chassis Battery(650mAh)",keywords:["Wio_terminal Extension_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Chassis-Battery_650mAh",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Wio Terminal Battery Chassis",permalink:"/Wio-Terminal-Battery-Chassis"},next:{title:"Wio Terminal LoRaWan Chassis with Antenna-built-in LoRa-E5 and GNSS, EU868/US915",permalink:"/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915"}},l={},p=[{value:"<strong>Feature</strong>",id:"feature",level:2},{value:"<strong>Specification</strong>",id:"specification",level:2},{value:"<strong>Hardware Overview</strong>",id:"hardware-overview",level:2},{value:"<strong>Precautions</strong>",id:"precautions",level:2},{value:"<strong>Detecting LiPo Battery Status</strong>",id:"detecting-lipo-battery-status",level:2},{value:"<strong>Example Code</strong>",id:"example-code",level:3},{value:"<strong>Schematic Online Viewer</strong>",id:"schematic-online-viewer",level:2},{value:"<strong>Resources</strong>",id:"resources",level:2},{value:"<strong>Tech Support</strong>",id:"tech-support",level:2}],c={toc:p},u="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png",alt:null})),(0,a.kt)("p",null,"The Wio Terminal Battery Chassis is a must-have extension board for ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio-Terminal")," Dev Board as it provides an external power source for Wio Terminal to enhance its portability and compactness. It has ",(0,a.kt)("strong",{parentName:"p"},"a 650mAH rechargeable lithium polymer battery, battery charging/discharging status LED, 4 Grove Analog/Digital Ports, 1 Grove I2C Port, and 1 Grove UART Port, as well as the ABS enclosure for aesthetic and protection.")," There is also the same Raspberry Pi 40-pin compatible GPIO at the back of the Wio Terminal Battery Chassis for more add-ons!"),(0,a.kt)("p",null,"The new version of the Wio Terminal Battery Chassis has added the ",(0,a.kt)("strong",{parentName:"p"},"Texas Instrument's ",(0,a.kt)("a",{parentName:"strong",href:"http://www.ti.com/product/BQ27441-G1"},"BQ27441-G1A"))," - self-calibrating, I2C-based fuel gauge for lithium polymer (LiPo) batteries which can be used to measures your battery's voltage to estimate its charge percentage and remaining capacity!"),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("h2",{id:"feature"},(0,a.kt)("strong",{parentName:"h2"},"Feature")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Built-in 650mAh Rechargeable Lithium Polymer Battery"),(0,a.kt)("li",{parentName:"ul"},"Battery charging/discharging status LED"),(0,a.kt)("li",{parentName:"ul"},"Battery On/OFF Button"),(0,a.kt)("li",{parentName:"ul"},"Built-in BQ27441-G1A fuel gauge for LiPo batteries"),(0,a.kt)("li",{parentName:"ul"},"USB Type-C Charging"),(0,a.kt)("li",{parentName:"ul"},"Overcurrent protection"),(0,a.kt)("li",{parentName:"ul"},"Hiccup mode/Hiccup Protection"),(0,a.kt)("li",{parentName:"ul"},"4 x Grove Analog/Digital Port"),(0,a.kt)("li",{parentName:"ul"},"1 x Grove I2C Port"),(0,a.kt)("li",{parentName:"ul"},"1 x Grove UART Port"),(0,a.kt)("li",{parentName:"ul"},"Magnets are hidden inside the enclosure so that it can be stuck on the Whiteboard!")),(0,a.kt)("h2",{id:"specification"},(0,a.kt)("strong",{parentName:"h2"},"Specification")),(0,a.kt)("table",{className:"tg"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{className:"tg-pu0z"},"Item"),(0,a.kt)("th",{className:"tg-pu0z"},"Detail"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{className:"tg-fymr"},"Power Supply"),(0,a.kt)("td",{className:"tg-0pky"},"4.75V - 5.25V")),(0,a.kt)("tr",null,(0,a.kt)("td",{className:"tg-1wig"},"Built-in battery"),(0,a.kt)("td",{className:"tg-0lax"},"650mAh")),(0,a.kt)("tr",null,(0,a.kt)("td",{className:"tg-1wig"},"Charging current"),(0,a.kt)("td",{className:"tg-0lax"},"Max: 660mA")),(0,a.kt)("tr",null,(0,a.kt)("td",{className:"tg-1wig"},"battery board mode"),(0,a.kt)("td",{className:"tg-0lax"},"Green LED: Light On is mean the board charing.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Red LED: Light on is mean the OTG(battery discharge) enable.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Yellow LED: Light on is mean the male interface output/input 5V.")),(0,a.kt)("tr",null,(0,a.kt)("td",{className:"tg-1wig"},"GPIO output"),(0,a.kt)("td",{className:"tg-0lax"},"Max voltage: 5.15V ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Max current: 380mA")),(0,a.kt)("tr",null,(0,a.kt)("td",{className:"tg-1wig"},"Trickle charge current"),(0,a.kt)("td",{className:"tg-0lax"},"30mA")),(0,a.kt)("tr",null,(0,a.kt)("td",{className:"tg-1wig"},"Grove Interface"),(0,a.kt)("td",{className:"tg-0lax"},"Grove Analog/Digital *4, Grove I2C* 1, Grove UART * 1")))),(0,a.kt)("h2",{id:"hardware-overview"},(0,a.kt)("strong",{parentName:"h2"},"Hardware Overview")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/new-pin.png"})),(0,a.kt)("h2",{id:"precautions"},(0,a.kt)("strong",{parentName:"h2"},"Precautions")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the battery is removed while the board is in charge mode, the board will switch to failure mode and the green light blink at a frequency of 1Hz.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When the battery board is not in use, please press the button to enter sleep mode and all the LED will off."))),(0,a.kt)("h2",{id:"detecting-lipo-battery-status"},(0,a.kt)("strong",{parentName:"h2"},"Detecting LiPo Battery Status")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sparkfun/SparkFun_BQ27441_Arduino_Library"},"SparkFun_BQ27441_Arduino_Library")," repositories and download the entire repo to your local drive.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, the library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkFun_BQ27441_Arduino_Library")," file that you've have just downloaded."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,a.kt)("h3",{id:"example-code"},(0,a.kt)("strong",{parentName:"h3"},"Example Code")),(0,a.kt)("p",null,"You may use the following code to read stats from your battery chassis."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/demo.gif"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <SparkFunBQ27441.h>\n#include"TFT_eSPI.h"\n\nTFT_eSPI tft;\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite\n#define FF17 &FreeSans9pt7b\n\nconst unsigned int BATTERY_CAPACITY = 650; // Set Wio Terminal Battery\'s Capacity \n\nvoid setupBQ27441(void)\n{\n  // Use lipo.begin() to initialize the BQ27441-G1A and confirm that it\'s\n  // connected and communicating.\n  if (!lipo.begin()) // begin() will return true if communication is successful\n  {\n  // If communication fails, print an error message and loop forever.\n    Serial.println("Error: Unable to communicate with BQ27441.");\n    Serial.println("  Check wiring and try again.");\n    Serial.println("  (Battery must be plugged into Battery Babysitter!)");\n    tft.setTextColor(TFT_RED);\n    tft.setCursor((320 - tft.textWidth("Battery Not Initialised!"))/2, 120);\n    tft.print("Battery Not Initialised!");\n    while (1) ;\n  }\n  Serial.println("Connected to BQ27441!");\n  \n  // Uset lipo.setCapacity(BATTERY_CAPACITY) to set the design capacity\n  // of your battery.\n  lipo.setCapacity(BATTERY_CAPACITY);\n}\n\nvoid printBatteryStats()\n{\n  // Read battery stats from the BQ27441-G1A\n  unsigned int soc = lipo.soc();  // Read state-of-charge (%)\n  unsigned int volts = lipo.voltage(); // Read battery voltage (mV)\n  int current = lipo.current(AVG); // Read average current (mA)\n  unsigned int fullCapacity = lipo.capacity(FULL); // Read full capacity (mAh)\n  unsigned int capacity = lipo.capacity(REMAIN); // Read remaining capacity (mAh)\n  int power = lipo.power(); // Read average power draw (mW)\n  int health = lipo.soh(); // Read state-of-health (%)\n\n  // Now print out those values:\n  String toPrint = String(soc) + "% | ";\n  toPrint += String(volts) + " mV | ";\n  toPrint += String(current) + " mA | ";\n  toPrint += String(capacity) + " / ";\n  toPrint += String(fullCapacity) + " mAh | ";\n  toPrint += String(power) + " mW | ";\n  toPrint += String(health) + "%";\n  \n  Serial.println(toPrint);\n\n  // LCD Graphics\n  tft.setTextColor(TFT_BLUE);\n  tft.drawRoundRect(10, 10, 300, 220, 10, TFT_BLUE);\n  tft.setTextColor(TFT_MAGENTA);\n  tft.drawString("State of Chage:", 20, 30);\n  tft.drawString("Battery Voltage:", 20, 55);\n  tft.drawString("Average Current:", 20, 80);\n  tft.drawString("Remain Capacity:", 20, 105);\n  tft.drawString("Full Capacity:", 20, 130);\n  tft.drawString("Average Power:", 20, 155);\n  tft.drawString("State of Health:", 20, 180);\n  \n  // Data\n  spr.createSprite(80, 170);\n  spr.fillSprite(TFT_BLACK);\n  spr.setFreeFont(FF17);\n  spr.setTextColor(TFT_WHITE);\n  spr.drawString(String(soc)+" % ", 0, 0);\n  spr.drawString(String(volts)+" mV ", 0, 25);\n  spr.drawString(String(current)+" mA ", 0, 50);\n  spr.drawString(String(capacity)+" mAh ", 0, 75);\n  spr.drawString(String(fullCapacity)+" mAh ", 0, 100);\n  spr.drawString(String(power)+" mW ", 0, 125);\n  spr.drawString(String(health)+" % ", 0, 150);\n  spr.pushSprite(170, 30);\n  spr.deleteSprite();\n}\n\nvoid setup()\n{\n  Serial.begin(115200);\n  tft.begin();\n  tft.setRotation(3);\n  tft.fillScreen(TFT_BLACK);\n  tft.setFreeFont(FF17); \n  setupBQ27441();\n  tft.setTextColor(TFT_GREEN);\n  tft.setCursor((320 - tft.textWidth("Battery Initialised!"))/2, 120);\n  tft.print("Battery Initialised!");\n  delay(1000);\n  tft.fillScreen(TFT_BLACK);\n}\n\nvoid loop() \n{\n  printBatteryStats();\n  delay(1000);\n}\n')),(0,a.kt)("h2",{id:"schematic-online-viewer"},(0,a.kt)("strong",{parentName:"h2"},"Schematic Online Viewer")),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://http://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH_NEW.ZIP",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},(0,a.kt)("strong",{parentName:"h2"},"Resources")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/WioTerminal_battry_650mAh.rar"},"Wio Terminal Battery Chassis Schematics Design File"))),(0,a.kt)("h2",{id:"tech-support"},(0,a.kt)("strong",{parentName:"h2"},"Tech Support")),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);