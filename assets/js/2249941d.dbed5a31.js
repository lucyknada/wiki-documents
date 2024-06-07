"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95138],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,y=u["".concat(p,".").concat(m)]||u[m]||g[m]||o;return a?n.createElement(y,i(i({ref:t},s),{},{components:a})):n.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const o={title:"Wio Lite MG126",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Lite-MG126/",slug:"/Wio-Lite-MG126",last_update:{date:"01/11/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Wio_Series/Wio_Lite/Wio-Lite-MG126",id:"Sensor/Wio_Series/Wio_Lite/Wio-Lite-MG126",title:"Wio Lite MG126",description:"Wio Lite MG126 is a cost-effective SAMD21 based development board with the on-board MG126 Bluetooth Module. SAM D21 is an ARM Cortex-M0+ based microcontroller and the MG126 is a 2.4GHz single-mode Bluetooth transceiver module. The same with Wio Lite W600, this board is also compatible with Arduino zero( Used the same Arduino Core SAM D21) and has the same compatible form factor with Adafruit Feather series.",source:"@site/docs/Sensor/Wio_Series/Wio_Lite/Wio-Lite-MG126.md",sourceDirName:"Sensor/Wio_Series/Wio_Lite",slug:"/Wio-Lite-MG126",permalink:"/Wio-Lite-MG126",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Lite/Wio-Lite-MG126.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Wio Lite MG126",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Lite-MG126/",slug:"/Wio-Lite-MG126",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Wio Lite W600",permalink:"/Wio-Lite-W600"},next:{title:"Wio Lite RISC V GD32VF103 with ESP8266",permalink:"/Wio_Lite_RISC_V_GD32VF103_with_ESP8266"}},p={},d=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Software",id:"software",level:2},{value:"Step 1. You need to Install an Arduino Software.",id:"step-1-you-need-to-install-an-arduino-software",level:3},{value:"Step 2. Add the Wio Lite MG126 Board into Arduino IDE",id:"step-2-add-the-wio-lite-mg126-board-into-arduino-ide",level:3},{value:"Step 3. Select your board and port",id:"step-3-select-your-board-and-port",level:3},{value:"Step 4. Open the demo",id:"step-4-open-the-demo",level:3},{value:"Step 5. Upload the program",id:"step-5-upload-the-program",level:3},{value:"Step 6. Use the phone to connect MG126**",id:"step-6-use-the-phone-to-connect-mg126",level:3},{value:"Function interface",id:"function-interface",level:2},{value:"WiFi function interface",id:"wifi-function-interface",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resouces",id:"resouces",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],s={toc:d},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Wio-Lite-MG126-wiki.jpg",alt:null})),(0,r.yg)("p",null,"Wio Lite MG126 is a cost-effective SAMD21 based development board with the on-board MG126 Bluetooth Module. SAM D21 is an ARM Cortex-M0+ based microcontroller and the MG126 is a 2.4GHz single-mode Bluetooth transceiver module. The same with Wio Lite W600, this board is also compatible with Arduino zero( Used the same Arduino Core SAM D21) and has the same compatible form factor with Adafruit Feather series.   "),(0,r.yg)("p",null,"We break out the 3.3V I/O pins of SAM D21, SAM D21 chip has rich I / O resources, including 14 digital pins, 6 analog pins, 1 UART port, 1 I2C port, and 1 ICSP port. More and more boards in Seeed use type C interfaces to supply power and transmit data, so does the Wio Lite MG126. Meanwhile, there is a JST2.0 Li-Po battery port, you can use 3.5V or 4.2V Li-Po battery to power this board.  "),(0,r.yg)("p",null,"Now, let's talk about the Bluetooth Core, the MG126. MG126 is a 2.4GHz BLE RF transceiver with software configurable registers, embedded packet handling engine. It can work with ultra-low power. The Bluetooth air data rate of MG126 is 1Mbps and MG126 can talks with Arduino core at the speed of 4Mbps via the SPI interface."),(0,r.yg)("p",{style:{}},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html",target:"_blank"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Arduino Zero Compatible/ Adafruit Feather Compatible"),(0,r.yg)("li",{parentName:"ul"},"2.4GHz ISM band operation with 2MHz channel spacing"),(0,r.yg)("li",{parentName:"ul"},"1Mbps air data rate"),(0,r.yg)("li",{parentName:"ul"},"Ultra-low power")),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Main Controller")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Microcontroller"),(0,r.yg)("td",{parentName:"tr",align:null},"SAM D21")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Digital I/O Pins"),(0,r.yg)("td",{parentName:"tr",align:null},"14")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Analog Input Channels"),(0,r.yg)("td",{parentName:"tr",align:null},"6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DC Current per I/O Pin"),(0,r.yg)("td",{parentName:"tr",align:null},"40 mA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IO Input Voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3 V")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SRAM"),(0,r.yg)("td",{parentName:"tr",align:null},"32 KB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Flash"),(0,r.yg)("td",{parentName:"tr",align:null},"256 KB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Maximum CPU Frequency"),(0,r.yg)("td",{parentName:"tr",align:null},"48 MHz")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Bluetooth")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Bluetooth Core"),(0,r.yg)("td",{parentName:"tr",align:null},"MG126")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Frequency Band"),(0,r.yg)("td",{parentName:"tr",align:null},"2.4GHz ISM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Data Rate"),(0,r.yg)("td",{parentName:"tr",align:null},"1Mbps air data rate")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Communication with MCU"),(0,r.yg)("td",{parentName:"tr",align:null},"SPI (Max. 4Mbps)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Transmitter"),(0,r.yg)("td",{parentName:"tr",align:null},"Programmable output power: -28 ~ +4 dBm without an external RF PA 20mA at 0dBm output power")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Receiver"),(0,r.yg)("td",{parentName:"tr",align:null},"Integrated channel filters -85 dBm sensitivity Programmable LNA gain")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Antenna"),(0,r.yg)("td",{parentName:"tr",align:null},"On-board PCB antenna")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Max. Bluetooth Connect Distance"),(0,r.yg)("td",{parentName:"tr",align:null},"10 m")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Others")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Power Input Port"),(0,r.yg)("td",{parentName:"tr",align:null},"USB Type C JST2.0 Lipo Battery")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"USB 5V Battery 4.2 V")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Recoverable fuse"),(0,r.yg)("td",{parentName:"tr",align:null},"Protection current 1A")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Battery Charge Current"),(0,r.yg)("td",{parentName:"tr",align:null},"400 mA")))),(0,r.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Hardware-overview.jpg",alt:null})),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"- The PCB antenna should not be shielded by metal when it is mounted, otherwise it will cause the attenuation of the Bluetooth signal;\n- The positive and negative terminals of the battery are indicated on the back of the module. It is strictly prohibited to reverse the positive and negative terminals of the battery.\n"))),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("p",null,"Before the start, please download the ",(0,r.yg)("strong",{parentName:"p"},"nRF Connect")," app from Google/Apple Store. ",(0,r.yg)("strong",{parentName:"p"},"nRF Connect")," is compatible with standard Bluetooth protocol functions, all examples are tested based on this app. "),(0,r.yg)("h2",{id:"hardware"},"Hardware"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Materials required")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Wio Lite Mg126 x1"),(0,r.yg)("li",{parentName:"ul"},"Computer x1"),(0,r.yg)("li",{parentName:"ul"},"USB typc cable x1"),(0,r.yg)("li",{parentName:"ul"},"Jumper x1")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"    Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check [Seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).\n"))),(0,r.yg)("p",null,"Connect the Wio Lite MG126 to your computer via the USB cable."),(0,r.yg)("h2",{id:"software"},"Software"),(0,r.yg)("h3",{id:"step-1-you-need-to-install-an-arduino-software"},"Step 1. You need to Install an Arduino Software."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},(0,r.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png",alt:null}))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Launch the Arduino application")),(0,r.yg)("p",null,"Double-click the Arduino application (arduino.exe) you have previously downloaded."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.\n"))),(0,r.yg)("h3",{id:"step-2-add-the-wio-lite-mg126-board-into-arduino-ide"},"Step 2. Add the Wio Lite MG126 Board into Arduino IDE"),(0,r.yg)("p",null,"Open your Arudino IDE, click on ",(0,r.yg)("strong",{parentName:"p"},"File > Preferences"),", and copy the following url to Additional Boards Manager URLs"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json\n")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png",alt:null})),(0,r.yg)("p",null,"Click on ",(0,r.yg)("strong",{parentName:"p"},"Toos > Board > Board Manager"),". Search the board by name, just search the key word ",(0,r.yg)("inlineCode",{parentName:"p"},"Seeeduino_Wio_Lite_MG126")," and install the corresponding board."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-2.jpg",alt:null})),(0,r.yg)("h3",{id:"step-3-select-your-board-and-port"},"Step 3. Select your board and port"),(0,r.yg)("p",null,"You'll need to select the entry in the ",(0,r.yg)("strong",{parentName:"p"},"Tools > Board")," menu that corresponds to your Arduino.\nSelecting the ",(0,r.yg)("strong",{parentName:"p"},"Wio Lite MG126"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-4.jpg",alt:null})),(0,r.yg)("p",null,"Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (",(0,r.yg)("strong",{parentName:"p"},"COM1")," and ",(0,r.yg)("strong",{parentName:"p"},"COM2")," are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"    You may not find the MG126 examples in the **File > Examples** tab before you select the wio Lite MG126 board. When you select the board, the examples will appear here.\n"))),(0,r.yg)("h3",{id:"step-4-open-the-demo"},"Step 4. Open the demo"),(0,r.yg)("p",null,"Download the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_MG126"},"MG126 Library")," from Seeed Github. Then Refer to ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.\nClick on ",(0,r.yg)("strong",{parentName:"p"},"File > Examples >Seeeduino Wio Lite MG126 >analog_output"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-5.png",alt:null})),(0,r.yg)("p",null,"You can find 7 demos in this folder. The ",(0,r.yg)("inlineCode",{parentName:"p"},"button"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"get_bat_vol")," demos do not use the bluetooth library, and the rest do."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-6.jpg",alt:null})),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Demo Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Function"),(0,r.yg)("th",{parentName:"tr",align:null},"DeviceInfo"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"analog_output"),(0,r.yg)("td",{parentName:"tr",align:null},"The analog value on the development board is obtained via Bluetooth and displayed on the mobile app."),(0,r.yg)("td",{parentName:"tr",align:null},"Wio_BLE_Analog")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"button"),(0,r.yg)("td",{parentName:"tr",align:null},"Press onboard user button and print in the serial monitor."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"echo_ble"),(0,r.yg)("td",{parentName:"tr",align:null},"Bluetooth echo server, that is, the mobile phone receives the data sent by the development board."),(0,r.yg)("td",{parentName:"tr",align:null},"Wio_Lite_BLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"get_bat_vol"),(0,r.yg)("td",{parentName:"tr",align:null},"Get the external battery voltage"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rgb_led_matrix_control"),(0,r.yg)("td",{parentName:"tr",align:null},"Control the ",(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-RGB-LED-Matrix-w-Driver.html"},"Grove - RGB LED Matrix")," to display"),(0,r.yg)("td",{parentName:"tr",align:null},"Wio_Led_matrix")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"serial_transparent_transmission"),(0,r.yg)("td",{parentName:"tr",align:null},"The serial port data is transparently transmitted, that is, the data sent by the mobile phone will be sent from the serial port of the development board, and the data sent to the serial port of the development board will be sent to the mobile phone."),(0,r.yg)("td",{parentName:"tr",align:null},"Wio_Lite_Serial")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"temp_humidity"),(0,r.yg)("td",{parentName:"tr",align:null},"get the information from ",(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html"},"Grove - I2C High Accuracy Temp&Humi Sensor (SHT35)"),",and sent it to your phone."),(0,r.yg)("td",{parentName:"tr",align:null},"Wio_BLE_T&H")))),(0,r.yg)("h3",{id:"step-5-upload-the-program"},"Step 5. Upload the program"),(0,r.yg)("p",null,'Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.'),(0,r.yg)("div",{align:"center"},(0,r.yg)("figure",null,(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png"}))),(0,r.yg)("p",null,"When it is finished the information ",(0,r.yg)("strong",{parentName:"p"},"Done Uploading")," will Pop up in the lower left corner of Arduino IDE."),(0,r.yg)("h3",{id:"step-6-use-the-phone-to-connect-mg126"},"Step 6. Use the phone to connect MG126**"),(0,r.yg)("p",null,"Open the ",(0,r.yg)("a",{parentName:"p",href:"#getting-started"},"nRF Connect")," app, click on the ",(0,r.yg)("strong",{parentName:"p"},"SCANNER")," and search for the name of the DeviceInfo in the page. Different demos have different DeviceInfo, the and the corresponding DeviceInfo of analog_output is ",(0,r.yg)("inlineCode",{parentName:"p"},"Wio_BLE_Analog"),"."),(0,r.yg)("p",null,"So, please choose the ",(0,r.yg)("inlineCode",{parentName:"p"},"Wio_BLE_Analog")," in the bluetooth device list. Tap ",(0,r.yg)("strong",{parentName:"p"},"CONNECT"),", then click ",(0,r.yg)("strong",{parentName:"p"},"Automation IO > Analog"),", and the value of A0 pin will be displayed."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/ana-0.jpg",alt:null})),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"    Due to the caching function of Bluetooth, every time you modify the feature value of Bluetooth (that is, download the example using different Bluetooth functions), you need to clear the cache of the app once, also you need to restart the phone.\n"))),(0,r.yg)("h2",{id:"function-interface"},"Function interface"),(0,r.yg)("h3",{id:"wifi-function-interface"},"WiFi function interface"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Bluetooth package class")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"MG126_Ble  \n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("ol",{parentName:"li",start:2},(0,r.yg)("li",{parentName:"ol"},"Initialize the Bluetooth protocol stack and turn on Bluetooth")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"MG126_Ble .ble_init();\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("ol",{parentName:"li",start:3},(0,r.yg)("li",{parentName:"ol"},"Reporting messages via Bluetooth")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sconn_notifydata();\n")),(0,r.yg)("p",null,"Only some common interfaces are listed here, and other interfaces can view example."),(0,r.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resouces"},"Resouces"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[ZIP]")," ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip"},"Wio lite MG126 schematic files"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/DS-MG126-BLE.pdf"},"DS-MG126-BLE-Datasheet")))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null," if you have any technical issue.  submit the issue into our ",(0,r.yg)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),".\nThank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);