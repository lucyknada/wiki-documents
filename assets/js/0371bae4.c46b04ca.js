"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62275],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return a?n.createElement(c,o(o({ref:t},u),{},{components:a})):n.createElement(c,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},29906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={description:"W600 Module",title:"W600 Module",keywords:["Air602_WiFi_Development_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/W600_Module",last_update:{date:"01/20/2023",author:"Matthew"}},o=void 0,i={unversionedId:"Seeed_Elderly/W600/W600_Module",id:"Seeed_Elderly/W600/W600_Module",title:"W600 Module",description:"W600 Module",source:"@site/docs/Seeed_Elderly/W600/W600_Module.md",sourceDirName:"Seeed_Elderly/W600",slug:"/W600_Module",permalink:"/W600_Module",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/W600/W600_Module.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1674172800,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{description:"W600 Module",title:"W600 Module",keywords:["Air602_WiFi_Development_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/W600_Module",last_update:{date:"01/20/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"NPi i.MX6ULL Dev Board - Linux SBC",permalink:"/NPi-i.MX6ULL-Dev-Board-Linux-SBC"},next:{title:"Artik",permalink:"/Artik"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical Applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Block Diagram",id:"block-diagram",level:3},{value:"Pinout",id:"pinout",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Create a SoftAP process",id:"create-a-softap-process",level:3},{value:"Scan AP Process",id:"scan-ap-process",level:3},{value:"STA joins the AP process",id:"sta-joins-the-ap-process",level:3},{value:"Create an APSTA process",id:"create-an-apsta-process",level:3},{value:"Firmware Programming",id:"firmware-programming",level:2},{value:"FAQ",id:"faq",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resouce",id:"resouce",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/W600_Module/img/113020031-preview.png",alt:null})),(0,r.kt)("p",null,"The W600 Module is a cost-effective 2.4GHz WiFi module support 802.11b/g/n. Seeed W600 Module is based on the W600 chip which features ARM Cortex-M3 with 1MB on-chip flash and freeRTOS kernel."),(0,r.kt)("p",null,"We take the pins of the W600 chip out and put them on the back of the board, including I2S/I2C/SPI/GPIO/PWM/UART/SDIO. In addition, this module has an on-board PCB Antenna, no need to design the antenna separately, so you can quickly deploy the module to your own board. We also have made CE/FCC certification for this module and you can use it directly for business projects."),(0,r.kt)("a",{href:"https://www.seeedstudio.com/W600-Module-p-4020.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"})),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"\u2022 Integrated 32bit Embedded Cortex-M3 CPU, operating frequency 80MHz"),(0,r.kt)("p",null,"\u2022 Integrated 288KB RAM"),(0,r.kt)("p",null,"\u2022 Integrated 1MB FLASH"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface")),(0,r.kt)("p",null,"\u2022 Integrated GPIO device controller"),(0,r.kt)("p",null,"\u2022 Integrated 2 UART interface, support RTS/CTS, baud rate: 1200bps~2Mbps"),(0,r.kt)("p",null,"\u2022 Integrated one high speed SPI controller, operating frequency: 0~50MHz;"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wireless")),(0,r.kt)("p",null,"\u2022 Support IEEE802.11 b/g/e/i/d/k/r/s/w/n"),(0,r.kt)("p",null,"\u2022 Support 2.4~2.4835 GHz"),(0,r.kt)("p",null,"\u2022 Support Wi-Fi WMM/WMM-PS/WPA/WPA2/WPS"),(0,r.kt)("p",null,"\u2022 Support Wi-Fi Direct"),(0,r.kt)("p",null,"\u2022 STBC\u3001GreenField\u3001Short-GI"),(0,r.kt)("p",null,"\u2022 Support multiple network protocols: TCP/UDP/ICMP/DHCP/DNS/HTTP"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Others")),(0,r.kt)("p",null,"\u2022 Supports AT+ instruction protocol based on ASCII encoding (UART interface)"),(0,r.kt)("p",null,"\u2022 Support for user\u2010programmable GPIO control"),(0,r.kt)("p",null,"\u2022 On-board Antenna"),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Wireless"),(0,r.kt)("td",{parentName:"tr",align:null},"Support Wi\u2010Fi  Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE802.11b/g/n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"RF system impedance"),(0,r.kt)("td",{parentName:"tr",align:null},"50\u03a9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Frequency Range"),(0,r.kt)("td",{parentName:"tr",align:null},"2.4~2.4835 GHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Receiving sensitivity"),(0,r.kt)("td",{parentName:"tr",align:null},"20MHz MCS7@\u201071dBm;",(0,r.kt)("br",null),"40MHz MCS7@\u201068dBm;",(0,r.kt)("br",null),"54Mbps@\u201073dBm;",(0,r.kt)("br",null),"11Mbps@\u201086dBm;",(0,r.kt)("br",null),"1Mbps@\u201095dBm;")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Physical layer data rate"),(0,r.kt)("td",{parentName:"tr",align:null},"802.11n MCS 0~7   150Mbps")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Modulation"),(0,r.kt)("td",{parentName:"tr",align:null},"DSSS\u3001OFDM\u3001DBPSK\u3001DQPSK\u3001CCK\u3001QAM16/64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Output Power"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE802.11b, DSSS 1Mbps, POUT = +17dBm;",(0,r.kt)("br",null),"IEEE802.11g, OFDM 54Mbps, POUT = +10dBm;",(0,r.kt)("br",null),"IEEE802.11n, OFDM MCS7, POUT = +10dBm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hardware"),(0,r.kt)("td",{parentName:"tr",align:null},"Interface Type"),(0,r.kt)("td",{parentName:"tr",align:null},"UART/SPI/GPIO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Interface rate"),(0,r.kt)("td",{parentName:"tr",align:null},"2Mbps@UART (Max) ",(0,r.kt)("br",null),"50Mbps@SPI (Max)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3V(Module)/5V(Development Board)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Operating humidity"),(0,r.kt)("td",{parentName:"tr",align:null},"5%~90% (No condensation)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"storage temperature"),(0,r.kt)("td",{parentName:"tr",align:null},"\u201040~+125 \u2103")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Operating temperature"),(0,r.kt)("td",{parentName:"tr",align:null},"\u201040~+85\u2103")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Software"),(0,r.kt)("td",{parentName:"tr",align:null},"Network Type"),(0,r.kt)("td",{parentName:"tr",align:null},"STA/AP/AP+STA/Wi\u2010Fi Direct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Verification"),(0,r.kt)("td",{parentName:"tr",align:null},"WEP/WPA\u2010PSK/WPA2\u2010PSK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Encryption"),(0,r.kt)("td",{parentName:"tr",align:null},"WEP64/WEP128/TKIP/CCMP(AES)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"WPS  Function"),(0,r.kt)("td",{parentName:"tr",align:null},"WPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Energy saving"),(0,r.kt)("td",{parentName:"tr",align:null},"PS\u2010POLL/Standby")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Network protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Interface Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"AT+ instruction set")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more detail about specifications, please check the W600 ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Specification%20V1.0.0_EN.pdf"},"Specification V1.0.0_EN.pdf")," and ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/W600_Module/res/W600%20HardwareDesignGuide_v1.0.1.pdf"},"W600 HardwareDesignGuide_v1.0.1.pdf"))),(0,r.kt)("h2",{id:"typical-applications"},"Typical Applications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"intelligent home appliances"),(0,r.kt)("li",{parentName:"ul"},"smart home"),(0,r.kt)("li",{parentName:"ul"},"wireless audio and video"),(0,r.kt)("li",{parentName:"ul"},"smart toys"),(0,r.kt)("li",{parentName:"ul"},"medical monitoring"),(0,r.kt)("li",{parentName:"ul"},"industrial control"),(0,r.kt)("li",{parentName:"ul"},"other Internet of Things applications")),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("h3",{id:"block-diagram"},"Block Diagram"),(0,r.kt)("div",{align:"center"},(0,r.kt)("figure",null,(0,r.kt)("a",{href:"https://files.seeedstudio.com/wiki/W600_Module/img/block.png",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/W600_Module/img/block.png",alt:"block diagram of W600 Module",title:"block diagram of W600 Module"}),(0,r.kt)("figcaption",null,(0,r.kt)("i",null,"click to see the clearer original file"))))),(0,r.kt)("h3",{id:"pinout"},"Pinout"),(0,r.kt)("div",{align:"center"},(0,r.kt)("figure",null,(0,r.kt)("a",{href:"https://files.seeedstudio.com/wiki/W600_Module/img/pinout_w600_module.jpg",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/W600_Module/img/pinout_w600_module.jpg",alt:"pinout of W600 Module",title:"pinout of W600 Module"}),(0,r.kt)("figcaption",null,(0,r.kt)("i",null,"click to see the clearer original file"))))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("strong",{parentName:"p"},"W600 Module"),", you need to use ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/PL2303-USB-to-Serial-TTL-Module-Adapter-p-2358.html"},"USB-to-Serial Tools")," to connect the RX/TX pins to your computer, also you need to power this module with the ",(0,r.kt)("strong",{parentName:"p"},"3.3v")," and ",(0,r.kt)("strong",{parentName:"p"},"GND")," pins."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For mac, we found that some version of mac system can not recognize the on-board USB-to-Serial chip CH330N, please check here for solution ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=aa548f2de0fb26380f50e0b328a49a80"},"Mac os driver issue"))),(0,r.kt)("p",null,"We use the serial port tool ",(0,r.kt)("strong",{parentName:"p"},"sscom")," to send the AT command. You can use your favorite serial port tool, in case you want to use ",(0,r.kt)("strong",{parentName:"p"},"sscom"),", you can download it ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip"},"Here"),"."),(0,r.kt)("p",null,"What ever, please make sure you have checked the option ",(0,r.kt)("strong",{parentName:"p"},"AddCrLf"),", and set the baud rate to ",(0,r.kt)("strong",{parentName:"p"},"115200")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_2.jpg",alt:null})),(0,r.kt)("p",null,"Tap ",(0,r.kt)("strong",{parentName:"p"},"AT+")," then click ",(0,r.kt)("strong",{parentName:"p"},"SEND")," or press ++enter++ key to to check if the connection was successfully established."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+\n")),(0,r.kt)("p",null,"When it returns ",(0,r.kt)("strong",{parentName:"p"},"+OK"),", you can use the AT command to control this module."),(0,r.kt)("h3",{id:"create-a-softap-process"},"Create a SoftAP process"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1- ",(0,r.kt)("strong",{parentName:"li"},"WPRT")," sets the wireless network card working mode to SoftAP:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+WPRT=2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2- ",(0,r.kt)("strong",{parentName:"li"},"APSSID")," Set the AP SSID for the STA, e.g.",(0,r.kt)("em",{parentName:"li"},"MyAP"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+APSSID=MyAp\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3- ",(0,r.kt)("strong",{parentName:"li"},"APENCRY")," Set the wireless network card security mode to WEP64:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+APENCRY=1\n")),(0,r.kt)("p",null,"Parameter\uff1a"),(0,r.kt)("p",null,"open\uff1a0\uff0cWEP64\uff1a1\uff0cWEP128\uff1a2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4- ",(0,r.kt)("strong",{parentName:"li"},"APKEY")," Set the wireless network card key to ",(0,r.kt)("em",{parentName:"li"},"12345"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+APKEY=1,1,12345\n")),(0,r.kt)("p",null,"Parameter 1\uff1aKey format\uff0c 0 means HEX, 1 means ASCII  "),(0,r.kt)("p",null,"Parameter 2\uff1aindex:  Key index number, 1 to 4 are used for WEP encryption keys, and other encryption methods are fixed to 0.  "),(0,r.kt)("p",null,"Parameter 3\uff1awireless key, e.g.\uff1a12345  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"5- ",(0,r.kt)("strong",{parentName:"li"},"APNIP")," Set the ip address and subnet mask")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1\n")),(0,r.kt)("p",null,"Parameter 1\uff1aaddress type: 0 means dynamic allocation using DHCP, 1 means static address",(0,r.kt)("br",{parentName:"p"}),"\n","parameter 2\uff1aip:192.168.1.1",(0,r.kt)("br",{parentName:"p"}),"\n","parameter 3\uff1anetmask\uff1a255.255.255.0",(0,r.kt)("br",{parentName:"p"}),"\n","parameter 4\uff1agateway\uff1a192.168.1.1",(0,r.kt)("br",{parentName:"p"}),"\n","parameter 5\uff1adns\uff1a192.168.1.1  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6- ",(0,r.kt)("strong",{parentName:"li"},"PMTF")," saves the above parameters to spi flash, just start from step 7 with the next boot.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+PMTF\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"7- ",(0,r.kt)("strong",{parentName:"li"},"WJOIN")," Create wireless network ",(0,r.kt)("em",{parentName:"li"},"MyAp"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+WJOIN\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8- ",(0,r.kt)("strong",{parentName:"li"},"SLIST"),"  Query the STA information which connected to your SoftAP.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+SLIST\n")),(0,r.kt)("h3",{id:"scan-ap-process"},"Scan AP Process"),(0,r.kt)("p",null,"Wireless network card scanning AP's AT command is \uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+WSCAN\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_3.jpg",alt:null})),(0,r.kt)("p",null,"The last paremeter is the signal strength,  unit db"),(0,r.kt)("h3",{id:"sta-joins-the-ap-process"},"STA joins the AP process"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1- ",(0,r.kt)("strong",{parentName:"li"},"WPRT")," Set the working mode to STA")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+WPRT=0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2- ",(0,r.kt)("strong",{parentName:"li"},"SSID")," Set the AP name to join. e.g. ",(0,r.kt)("em",{parentName:"li"},"TEST_AP"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+SSID=TEST_AP\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3- ",(0,r.kt)("strong",{parentName:"li"},"KEY")," Set the wireless key of the AP you want to join. e.g. ",(0,r.kt)("em",{parentName:"li"},"12345678"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+KEY=1,0,12345678\n")),(0,r.kt)("p",null,"parameter 1\uff1a0 means HEX, 1 means ASCII"),(0,r.kt)("p",null,"parameter 2\uff1aindex: The key index number, 1 to 4 is used for the WEP encryption key. The other encryption methods are fixed to 0."),(0,r.kt)("p",null,"parameter 3\uff1a Wireless key  e.g.\uff1a12345678"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4- ",(0,r.kt)("strong",{parentName:"li"},"NIP")," Enable DHCP")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+NIP=0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"5- PMTF Save the above parameters to spi flash, Just start from step 6 with the next boot")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+PMTF\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6- WJOIN Join the wireless network TEST_AP")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+WJOIN\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_4.jpg",alt:null})),(0,r.kt)("h3",{id:"create-an-apsta-process"},"Create an APSTA process"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1- ",(0,r.kt)("strong",{parentName:"li"},"WPRT")," Set the working mode to APSTA")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+WPRT=3\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2- ",(0,r.kt)("strong",{parentName:"li"},"SSID")," Set the AP name to be joined, such as ",(0,r.kt)("em",{parentName:"li"},"TEST_AP"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+SSID=TEST_AP\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3- ",(0,r.kt)("strong",{parentName:"li"},"KEY")," Set the wireless key of the AP you want to join. e.g. ",(0,r.kt)("em",{parentName:"li"},"12345678"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+KEY=1,0,12345678\n")),(0,r.kt)("p",null,"parameter 1\uff1a0 means HEX, 1 means ASCII"),(0,r.kt)("p",null,"parameter 2\uff1aindex: The key index number, 1 to 4 is used for the WEP encryption key. The other encryption methods are fixed to 0."),(0,r.kt)("p",null,"parameter 3\uff1a Wireless key e.g.\uff1a12345678"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4- ",(0,r.kt)("strong",{parentName:"li"},"APSSID")," Set the network name of the created SOFTAP")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+APSSID=\u201dMYSoftAP\u201d\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"5-  ",(0,r.kt)("strong",{parentName:"li"},"APENCRY")," Set the encryption type of SoftAP (such as WPA2-TKIP)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+APENCRY=5\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6- ",(0,r.kt)("strong",{parentName:"li"},"APKEY"),"  Set the password for SoftAP (e.g. ASCII code 87654321)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+APKEY=1,0,87654321\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"7- ",(0,r.kt)("strong",{parentName:"li"},"APNIP"),"  Set the IP address and subnet mask")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8- ",(0,r.kt)("strong",{parentName:"li"},"PMTF")," Save the above parameters to spi flash, just start from step 9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+PMTF\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"9- ",(0,r.kt)("strong",{parentName:"li"},"WJOIN")," Join the wireless network TEST_AP")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+WJOIN\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more detail about AT command, please check the ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_AT%20Command_V1.0.2.pdf"},"WM_W60X_SDK_AT Command_V1.0.2.pdf"))),(0,r.kt)("h2",{id:"firmware-programming"},"Firmware Programming"),(0,r.kt)("p",null,"For the firmware programming please check here\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf"},"WM_W60X_SDK_User Manual_V1.0.0.pdf")," and ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_Firmware%20Generation%20Guide_V1.1.pdf"},"WM_W60X_Firmware Generation Guide_V1.1.pdf")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q1.How the STA disconnects the AP")),(0,r.kt)("p",null,"A: The wireless network card disconnects the AP's AT command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+WLEAV\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q2.SoftAP disconnected")),(0,r.kt)("p",null,"A: The AT command of SoftAP disconnected network is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+WLEAV=2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q3.How STA view current status")),(0,r.kt)("p",null,"A: The AT command for the wireless network card to view the status of the current network card is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+LKSTT\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q4. How to View current SoftAP status")),(0,r.kt)("p",null,"A: The AT command to view the current SoftAP status is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"AT+APLKSTT\n")),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Module%20schemaic.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resouce"},"Resouce"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_AT%20Command_V1.0.2.pdf"},"WM_W60X_SDK_AT Command_V1.0.2.pdf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/W600_Module/res/W600%20HardwareDesignGuide_v1.0.1.pdf"},"W600 HardwareDesignGuide_v1.0.1.pdf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf"},"W60X_SDK_User Manual_V1.0.0.pdf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_Firmware%20Generation%20Guide_V1.1.pdf"},"WM_W60X_Firmware Generation Guide_V1.1.pdf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Module%20schemaic.zip"},"W600 Module schematic files"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip"},"sscom")))),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("br",null),"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.",(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);