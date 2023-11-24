"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,c=p["".concat(s,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={description:"Seeeduino Cloud",title:"Seeeduino Cloud",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Cloud",last_update:{date:"1/31/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Seeeduino Series/Seeeduino_Cloud",id:"Sensor/Seeeduino Series/Seeeduino_Cloud",title:"Seeeduino Cloud",description:"Seeeduino Cloud",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino_Cloud.md",sourceDirName:"Sensor/Seeeduino Series",slug:"/Seeeduino_Cloud",permalink:"/Seeeduino_Cloud",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino_Cloud.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Seeeduino Cloud",title:"Seeeduino Cloud",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Cloud",last_update:{date:"1/31/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino",permalink:"/Seeeduino"},next:{title:"Seeeduino Cortex M0",permalink:"/Seeeduino-Cortex-M0"}},s={},d=[{value:"Application Ideas",id:"application-ideas",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Program on ATmega32U4 side",id:"program-on-atmega32u4-side",level:3},{value:"Program on ATHEROS AR9331 side",id:"program-on-atheros-ar9331-side",level:3},{value:"Sysupgrade Firmware",id:"sysupgrade-firmware",level:3},{value:"Terminal",id:"terminal",level:3},{value:"Yun Bridge Library",id:"yun-bridge-library",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"FAQ",id:"faq",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_cover.jpg",alt:"enter image description here"})),(0,i.kt)("p",null,"Seeeduino Cloud is a microcontroller board based on ",(0,i.kt)("a",{parentName:"p",href:"http://www.dragino.com/products/linux-module/item/87-he.html"},"Dragino WiFi IoT module HE")," and ATmega32u4. HE is a high performance, low cost 150M, 2.4G WiFi module which means \u201ccore\u201d in Chinese and with an Open Source OpenWrt system inside. Seeeduino Cloud is also an Arduino compatible board, 100% compatible to Grove, shield and IDEs(Arduino IDE 1.5.3 and later). Except for the normal interface of Arduino, Seeeduino Cloud has built-in Ethernet and WiFi support, a USB-A port which makes it very suitable for those prototype design that need network connection and mass storage. It is also a good idea to make Seeeduino Cloud to be an IoT gateway."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Cloud-Arduino-Yun-compatible-openWRT-controller-p-2123.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:"enter image description here"}))),(0,i.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Internet of Things  "),(0,i.kt)("li",{parentName:"ul"},"Smart House"),(0,i.kt)("li",{parentName:"ul"},"Learning")),(0,i.kt)("p",null,"Here are some funny projects for your reference."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Simple Wi-Fi Messager"),(0,i.kt)("th",{parentName:"tr",align:null},"Send data to Google Docs"),(0,i.kt)("th",{parentName:"tr",align:null},"Solar Panel Monitoring System"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_1.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_2.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_3.jpg",alt:"enter image description here"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Arduino-Yun-Messager/"},"Make it Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Google-Docs-and-the-Arduino-Y%C3%BAn/"},"Make it Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Arduino-Yun-Solar-Panel-Monitoring-System/"},"Make it Now"))))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compatible with Arduino Yun"),(0,i.kt)("li",{parentName:"ul"},"Based on Dragino WiFi IoT module HE"),(0,i.kt)("li",{parentName:"ul"},"Open Source OpenWrt system inside"),(0,i.kt)("li",{parentName:"ul"},"Support 2.4Ghz WiFi, 802.11 b/g/n"),(0,i.kt)("li",{parentName:"ul"},"Support Ethernet"),(0,i.kt)("li",{parentName:"ul"},"Support USB 2.0"),(0,i.kt)("li",{parentName:"ul"},"On-board Grove connectors")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"Because Seeeduino Cloud has two processors, this section shows the characteristics of each one in two separate tables."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dragino HE Module")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CPU"),(0,i.kt)("td",{parentName:"tr",align:null},"ATHEROS AR9331")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Clock Speed"),(0,i.kt)("td",{parentName:"tr",align:null},"400MHz")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RAM"),(0,i.kt)("td",{parentName:"tr",align:null},"64MB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Flash"),(0,i.kt)("td",{parentName:"tr",align:null},"16MB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OS"),(0,i.kt)("td",{parentName:"tr",align:null},"OpenWrt")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Interfaces"),(0,i.kt)("td",{parentName:"tr",align:null},"2 x RJ45, 1 x USB Host, 1 x UART, 14 multiplex GPIOs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Power"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3V Power Input")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WiFi"),(0,i.kt)("td",{parentName:"tr",align:null},"Support 150M 2.4Ghz WiFi, 802.11 b/g/n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AVR Arduino Microcontroller")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,i.kt)("td",{parentName:"tr",align:null},"ATmega32u4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Flash Memory"),(0,i.kt)("td",{parentName:"tr",align:null},"32KB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,i.kt)("td",{parentName:"tr",align:null},"2.5kB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EEPROM"),(0,i.kt)("td",{parentName:"tr",align:null},"1kB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Clock Speed"),(0,i.kt)("td",{parentName:"tr",align:null},"16MHz")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Digital I/O Pins"),(0,i.kt)("td",{parentName:"tr",align:null},"20")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PWM Channels"),(0,i.kt)("td",{parentName:"tr",align:null},"7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Analog Input Channels"),(0,i.kt)("td",{parentName:"tr",align:null},"12")))),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("p",null,"The images below show an overview of Seeeduino Cloud hardware features. The pin-out and alternate functions of various pins of Seeeduino Cloud are shown in the pin-out diagram. This could be used as a quick reference."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_hardware.png",alt:"enter image description here"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RJ45 Ethernet Port"),"\nThe LAN Port is connected to ATHEROS AR9331 and has its own IP address that can be used for Internet connection and device management."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"USB Input"),"\nUSB Port is used to connect the board to your PC for programming and for powering up. Micro USB is the ubiquitous version of USB, found in most Android phones, and other devices. You probably have dozens of these cables laying around your house."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"USB HOST"),"\nSeeeduino Cloud provides USB host capability that enables it to connect to various USB devices such as webcams, USB drives, keyboards, joysticks and more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"32U4 RST"),"\nPressing the 32U4 Reset button will reset the ATmega32U4 MCU. Usually, it is used for re-starting your sketch."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SYS RST"),"\nPressing the System Reset button will reboot the Linux system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Wi-Fi RST"),"\nThe Wi-Fi Reset button only supports long press. When pressed and released after 5 seconds, it will reset the WiFi settings. Other settings will be retained. If the button is pressed and released after 30 seconds, it will reset ALL the settings to factory default."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Grove Connectors"),"\nSeeedStudio has a variety of sensors/devices that can make use of this I2C or UART connection. In addition, we sell independent Grove connectors to help you make our own sensor connections. The I2C Grove connector is also connected to analog pin A4 and A5 for SDA and SCL respectively if you would like to use those pins instead. The UART Grove connector is connected to digital pins 0 and 1 for RX and TX respectively."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ICSP"),"\nThis is the ICSP connection for the ATmega32U4, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware (e.g. shields) that may use this connector. The SPI pins in this port: MISO, SCK, and MOSI, are also connected to digital pins 12, 13, and 11 respectively just like those of the Arduino Uno."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"I-PEX Connector"),"\nThis is an I-PEX Connector for an external antenna."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pins"),"\nIt is not possible to access the I/O pins of the Atheros AR9331. All I/O lines are tied to the ATmega32U4.\nEach of the 20 digital pins on the 32U4 can be used as an input or output, using pinMode(), digitalWrite(), and digitalRead() functions. They operate at 5 volts. Each pin can provide or receive a maximum of 40 mA and has an internal pull-up resistor (disconnected by default) of 20-50 kOhms.\nIn addition, some pins have specialized functions:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Serial: 0 (RX) and 1 (TX). Used to receive (RX) and transmit (TX) TTL serial data using the ATmega32U4 hardware serial capability. Note that on the Seeeduino Cloud, the Serial class refers to USB (CDC) communication; for TTL serial on pins 0 and 1, use the Serial1 class. The hardware serials of the ATmega32U4 and the AR9331 on the Seeeduino Cloud are connected together and are used to communicate between the two processors. As is common in Linux systems, on the serial port of the AR9331 is exposed the console for access to the system, this means that you can access to the programs and tools offered by Linux from your sketch."),(0,i.kt)("li",{parentName:"ul"},"TWI: 2 (SDA) and 3 (SCL). Support TWI communication using the Wire library."),(0,i.kt)("li",{parentName:"ul"},"External Interrupts: 3 (interrupt 0), 2 (interrupt 1), 0 (interrupt 2), 1 (interrupt 3) and 7 (interrupt 4). These pins can be configured to trigger an interrupt on a low value, a rising or falling edge, or a change in value. See the attachInterrupt() function for details. Is not recommended to use pins 0 and 1 as interrupts because they are the also the hardware serial port used to talk with the Linux processor. Pin 7 is connected to the AR9331 processor and it may be used as handshake signal in future. Is recommended to be careful of possible conflicts if you intend to use it as interrupt."),(0,i.kt)("li",{parentName:"ul"},"PWM: 3, 5, 6, 9, 10, 11, and 13. Provide 8-bit PWM output with the analogWrite() function."),(0,i.kt)("li",{parentName:"ul"},"SPI: on the ICSP header. These pins support SPI communication using the SPI library. Note that the SPI pins are not connected to any of the digital I/O pins as they are on the Uno, They are only available on the ICSP connector. This means that if you have a shield that uses SPI, but does NOT have a 6-pin ICSP connector that connects to the Seeeduino Cloud's 6-pin ICSP header, the shield will not work. The SPI pins are also connected to the AR9331 gpio pins, where it has been implemented in software the SPI interface. This means that the ATMega32u4 and the AR9331 can also communicate using the SPI protocol."),(0,i.kt)("li",{parentName:"ul"},"Analog Inputs: A0 - A5, A6 - A11 (on digital pins 4, 6, 8, 9, 10, and 12). The Seeeduino Cloud has 12 analog inputs, labeled A0 through A11, all of which can also be used as digital i/o. Pins A0-A5 appear in the same locations as on the Uno; inputs A6-A11 are on digital i/o pins 4, 6, 8, 9, 10, and 12 respectively. Each analog input provide 10 bits of resolution (i.e. 1024 different values). By default the analog inputs measure from ground to 5 volts, though is it possible to change the upper end of their range using the AREF pin and the analogReference() function."),(0,i.kt)("li",{parentName:"ul"},"AREF. Reference voltage for the analog inputs. Used with analogReference().")))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Seeeduino Cloud has two processors on board. One is an ATmega32U4 like on the Leonardo. The other is an Atheros 9331, running Linux and the OpenWRT wireless stack, which enables the board to connect to WiFi and Ethernet networks. With ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Reference/YunBridgeLibrary"},"Yun Bridge Library"),", it is possible to call programs or custom scripts on the Linux system through the Arduino to connect with various internet services."),(0,i.kt)("h3",{id:"program-on-atmega32u4-side"},"Program on ATmega32U4 side"),(0,i.kt)("p",null,"The ATmega32U4 is programmed using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software?setlang=en"},"Arduino Software (IDE)"),", if you haven't install, please click ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Guide/HomePage"},"here")," for installation instructions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Install the Driver")),(0,i.kt)("p",null,"First of all, you need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Get a Micro-USB cable"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You need a Micro-USB cable first; the data cable of an Android Phone will do fine.\nIf you can't find one, you can buy one ",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100"},"here"),".")))),(0,i.kt)("admonition",{title:"Warning",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Take gentle care in handling micro USB socket, or you might break the socket off.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Connect the board"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Seeeduino Cloud automatically draw power from either the USB connection to the computer or an external power supply. Connect the Arduino board to your computer using the USB cable. The green power LED (labelled ",(0,i.kt)("strong",{parentName:"li"},"PWR"),") should go on.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For Windows")),(0,i.kt)("p",null,"Windows version of Arduino Software (IDE) already contains the proper drivers. When you installed it you let the operating system install them. Connect your Seeeduino Cloud and the drivers will be installed automatically."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For MAC")),(0,i.kt)("p",null,'The first time you plug a Seeeduino Cloud into a Mac, the "Keyboard Setup Assistant" will launch. There\'s nothing to configure with the Seeeduino Cloud; you can close this dialogue by clicking the red button in the top left of the window.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For Linux")),(0,i.kt)("p",null,"There is no need to install drivers for Ubuntu 10.0.4 and later, but make sure port 5353 is not being blocked by a firewall."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Open your first sketch")),(0,i.kt)("p",null,"Open the LED blink example sketch: File > Examples >01.Basics > Blink."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/UNO_Load_Blink.jpg",alt:"enter image description here"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Select your board type and port")),(0,i.kt)("p",null,"You'll need to select the entry in the Tools > Board menu that corresponds to your Arduino or Genuino board."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YUN_SelBoard.jpg",alt:"enter image description here"})),(0,i.kt)("p",null,"Select the serial device of the board from the Tools | Serial Port menu. This is likely to be COM3 or higher (COM1 and COM2 are usually reserved for hardware serial ports). To find out, you can disconnect your board and re-open the menu; the entry that disappears should be the Arduino or Genuino board. Reconnect the board and select that serial port. When your board is properly configured on WiFi, you will find it in the Port list, as in our screenshot."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YUN_SelPort.jpg",alt:"enter image description here"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Upload the program")),(0,i.kt)("p",null,'Now, simply click the "Upload" button in the environment. Wait a few seconds - you should see the RX and TX leds on the board flashing. If the upload is successful, the message "Done uploading." will appear in the status bar.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/UNO_Upload.png",alt:"enter image description here"})),(0,i.kt)("p",null,"A few seconds after the upload finishes, you should see the LED(D13) on the board start to blink (in green). If it does, congratulations! You\u2019ve gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions."),(0,i.kt)("h3",{id:"program-on-atheros-ar9331-side"},"Program on ATHEROS AR9331 side"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Configure Network")),(0,i.kt)("p",null,"The Seeeduino Cloud has a WiFi interface and a LAN port. Either of them has IP address that can be used for internet connection and device management."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Wi-Fi AP Mode")),(0,i.kt)("p",null,"When you power ON the Seeeduino Cloud for the first time, there will be an unsecure WiFi network called SeeeduinoCloud-AXXXX shown in wifi connections.\nYou can connect your computer to this network as shown below. Your computer will get an ip of this network ",(0,i.kt)("strong",{parentName:"p"},"192.168.240.xxx"),". The Seeeduino Cloud has a default ip address of ",(0,i.kt)("strong",{parentName:"p"},"192.168.240.1"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Wi-Fi STA Mode")),(0,i.kt)("p",null,'After connect SeeeduinoCloud-AXXXX, type 172.31.255.254 or 192.168.240.1 in browser search box and you will connect to Seeeduino Cloud with web UI. The default password is "seeeduino", then click LOG IN.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_login.png",alt:"enter image description here"})),(0,i.kt)("p",null,'Click "SYSTEM", select your Wi-Fi network, enter the password and click "CONFIGURE & RESTART".'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_sta.png",alt:"enter image description here"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. Onboard Ethernet")),(0,i.kt)("p",null,"When you connect Seeeduino Cloud to a wired network with an ethernet cable, it will try to connect automatically via DHCP. The board will show up on the ports menu just as it would over WiFi."),(0,i.kt)("h3",{id:"sysupgrade-firmware"},"Sysupgrade Firmware"),(0,i.kt)("p",null,"Below is detailed by using Browser to upgrade new firmware."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Burn File -> Examples -> Birdge -> YunSerialTerminal.ino to Seeeduino Cloud")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YunSerialTerminal.png",alt:"enter image description here"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find ip of Seeeduino Cloud through type ",(0,i.kt)("inlineCode",{parentName:"li"},"ifconfig")," on the putty that can communicate with Seeeduino Cloud")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/putty_configure.png",alt:"enter image description here"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/inet_addr.png",alt:"enter image description here"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visit Seeeduino Cloud by typing ip of Seeeduino Cloud in the Browser. and the password is ",(0,i.kt)("inlineCode",{parentName:"li"},"seeeduino"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/password.png",alt:"enter image description here"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Get ",(0,i.kt)("a",{parentName:"p",href:"http://www.dragino.com/downloads/index.php?dir=motherboards/ms14/Firmware/Yun/Newest_Firmware/"},"newest_Firmware"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Upgrade through the upgrade button."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/upgrade.png",alt:"enter image description here"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/upgrade_configure.png",alt:"enter image description here"})),(0,i.kt)("h3",{id:"terminal"},"Terminal"),(0,i.kt)("p",null,"You could access the terminal of Seeeduino Cloud via SSH to Program or configure on ATHEROS AR9331 side."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download a SSH client such as ",(0,i.kt)("a",{parentName:"li",href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html"},"putty")),(0,i.kt)("li",{parentName:"ul"},"Use the IP address of Seeeduino Cloud and run SSH client.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"username: root\npassword: seeeduino\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_terminal.png",alt:"enter image description here"})),(0,i.kt)("h3",{id:"yun-bridge-library"},"Yun Bridge Library"),(0,i.kt)("p",null,"The Bridge Library simplifies the communication between the Arduino Board and Dragino HE. Bridge commands from the AVR (Arduino Board) are interpreted by Python on the HE.\nIts role is to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"execute programs on the GNU/Linux side when asked by Arduino,"),(0,i.kt)("li",{parentName:"ul"},"provide a shared storage space for sharing data like sensor readings between the Arduino and the Internet"),(0,i.kt)("li",{parentName:"ul"},"receive commands from the Internet and pass them directly to the Arduino.\nThere are detailed explanations and lots of examples to show how to use Bridge on the ",(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Reference/YunBridgeLibrary"},"Arduino Official Website"),". Following are some examples that use Bridge Library.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1: Say hello to Linux")),(0,i.kt)("p",null,"This example is a hello test between the Arduino and Seeeduino Cloud. The example can be found on the Arduino IDE--\x3e File --\x3e Examples --\x3e Bridge --\x3e ConsoleRead. A tutorial of this example can be found ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Tutorial/ConsoleRead"},"here"),". You can see the code below with some additional details to understand it with the Seeeduino Cloud:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#include <Console.h>\n\nString name;\n\nvoid setup() {\n    // Initialize Console and wait for port to open:\n    Bridge.begin();\n    Console.begin();\n\n    // Wait for Console port to connect\n    while (!Console);\n\n    Console.println("Hi, what\'s your name?");\n}\n\nvoid loop() {\n    if (Console.available() > 0) {\n        char c = Console.read(); // read the next char received\n        // look for the newline character, this is the last character in the string\n        if (c == \'\\n\') {\n            //print text with the name received\n            Console.print("Hi ");\n            Console.print(name);\n            Console.println("! Nice to meet you!");\n            Console.println();\n            // Ask again for name and clear the old name\n            Console.println("Hi, what\'s your name?");\n            name = "";  // clear the name string\n        }\n        else {       // if the buffer is empty Cosole.read() returns -1\n            name += c; // append the read char from Console to the name string\n        }\n    }\n}\n\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2: Log Data to USB flash")),(0,i.kt)("p",null,"This example shows how to log data to a USB flash. The sketch used in this example is same as ",(0,i.kt)("a",{parentName:"p",href:"http://wiki.dragino.com/index.php?title=Arduino_Yun_examples#Log_sensor_data_to_USB_flash"},"here"),". And the source code can be found there.\nThe Seeeduino Cloud will auto mount the USB flash to directory /mnt/sda1. And the sketch will append the sensor data to the file /mnt/sda1/data/datalog.csv. So make sure there is such a file in the USB flash before running the sketch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#include <FileIO.h>     //FileIO class allow user to operate Linux file system\n#include <Console.h>    //Console class provide the interactive between IDE and Yun Shield\nvoid setup() {\n    // Initialize the Console\n    Bridge.begin();\n    Console.begin();\n    FileSystem.begin();\n    while(!Console);   // wait for Serial port to connect.\n    Console.println("Filesystem datalogger\\n");\n}\nvoid loop () {\n    // make a string that start with a timestamp for assembling the data to log:\n    String dataString;\n    dataString += getTimeStamp();\n    dataString += " , ";\n    // read three sensors and append to the string:\n    for (int analogPin = 0; analogPin < 3; analogPin++) {\n        int sensor = analogRead(analogPin);\n        dataString += String(sensor);\n        if (analogPin < 2) {\n            dataString += ",";    // separate the values with a comma\n        }\n    }\n    // open the file. note that only one file can be open at a time,\n    // so you have to close this one before opening another.\n    // The USB flash card is mounted at "/mnt/sda1" by default\n    File dataFile = FileSystem.open("/mnt/sda1/data/datalog.csv", FILE_APPEND);\n    // if the file is available, write to it:\n    if (dataFile) {\n        dataFile.println(dataString);\n        dataFile.close();\n        // print to the serial port too:\n        Console.println(dataString);\n    }\n    // if the file isn\'t open, pop up an error:\n    else {\n        Console.println("error opening datalog.csv");\n    }\n    delay(15000);  //Write every 15 seconds\n}\n// getTimeStamp function return a string with the time stamp\n// Yun Shield will call the Linux "date" command and get the time stamp\nString getTimeStamp() {\n    String result;\n    Process time;\n    // date is a command line utility to get the date and the time\n    // in different formats depending on the additional parameter\n    time.begin("date");\n    time.addParameter("+%D-%T");   // parameters: D for the complete date mm/dd/yy\n    //              T for the time hh:mm:ss\n    time.run();   // run the command\n    // read the output of the command\n    while(time.available()>0) {\n        char c = time.read();\n        if(c != \'\\n\')\n        result += c;\n    }\n    return result;\n}\n\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/500px-SeeeduinoCloud_Sketch_USB.png",alt:"enter image description here"})),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Schematic")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_v1.0.zip"},"Seeeduino Cloud Eagle file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_PDF.pdf"},"Seeeduino Cloud PDF file")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Firmware")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.dragino.com/downloads/index.php?dir=motherboards/ms14/Firmware/Yun/Newest_Firmware/"},"Seeeduino Cloud Firmware")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"References")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Guide/HomePage"},"Getting Started with Arduino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Reference/HomePage"},"Arduino Language Reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Main/Software"},"Download the Arduino Software(IDE)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Main/FAQ"},"Arduino FAQ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/guide/introduction"},"Arduino Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Arduino"},"Wikipedia page for Arduino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Main/ArduinoBoardYun"},"Arduino Yun Wiki")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Guide/ArduinoYun#toc2"},"Getting started with Arduino Yun")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Reference/YunBridgeLibrary"},"Yun Bridge Library"))))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is Yun Bridge Library?")),(0,i.kt)("p",null,"Yun Bridge Library is the mechanism used in Arduino Yun for communication between a MPU and a MCU. Seeeduino Cloud supports Yun Bridge Library to make it easy for Arduino users to build their IoT projects."),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);