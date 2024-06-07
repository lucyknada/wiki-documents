"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80128],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var i=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return t?i.createElement(g,s(s({ref:n},d),{},{components:t})):i.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=h;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<r;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},61861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(58168),o=(t(96540),t(15680));const r={description:"MicroPython for ESP32C3",title:"MicroPython for ESP32C3",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO_ESP32C3_MicroPython",last_update:{date:"08/14/2023",author:"Matthew and Zachay"}},s="XIAO ESP32C3 Wi-Fi Tracker using MicroPython",a={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_MicroPython",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_MicroPython",title:"MicroPython for ESP32C3",description:"MicroPython for ESP32C3",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_MicroPython.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3",slug:"/XIAO_ESP32C3_MicroPython",permalink:"/XIAO_ESP32C3_MicroPython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_MicroPython.md",tags:[],version:"current",lastUpdatedBy:"Matthew and Zachay",lastUpdatedAt:1691971200,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{description:"MicroPython for ESP32C3",title:"MicroPython for ESP32C3",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO_ESP32C3_MicroPython",last_update:{date:"08/14/2023",author:"Matthew and Zachay"}},sidebar:"ProductSidebar",previous:{title:"Pin Multiplexing",permalink:"/XIAO_ESP32C3_Pin_Multiplexing"},next:{title:"XIAO ESP32C3 with Zephyr(RTOS)",permalink:"/XIAO-ESP32C3-Zephyr"}},l={},c=[{value:"Hardware Preparation",id:"hardware-preparation",level:2},{value:"Software Preparation",id:"software-preparation",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Micropython Configuration on PC",id:"micropython-configuration-on-pc",level:3},{value:"Install Thonny IDE (Windows)",id:"install-thonny-ide-windows",level:4},{value:"Update the firmware using esptool",id:"update-the-firmware-using-esptool",level:4},{value:"Micropython Setup on XIAO ESP32C3",id:"micropython-setup-on-xiao-esp32c3",level:3},{value:"Install required libraries",id:"install-required-libraries",level:4},{value:"Run the scrip and Flash it to the board",id:"run-the-scrip-and-flash-it-to-the-board",level:4},{value:"Demo 1: Light an OLED Screen",id:"demo-1-light-an-oled-screen",level:3},{value:"1. Hello Seeder!",id:"1-hello-seeder",level:4},{value:"2. Loading dynamic effect",id:"2-loading-dynamic-effect",level:4},{value:"Demo 2: Light a Buzzer",id:"demo-2-light-a-buzzer",level:3},{value:"1. Sound",id:"1-sound",level:4},{value:"2. Play the Song &lt;&lt; He&#39;s a pirate &gt;&gt;",id:"2-play-the-song--hes-a-pirate-",level:4},{value:"Demo 3: Connect to Wi-fi",id:"demo-3-connect-to-wi-fi",level:3},{value:"1. Connect to Wi-fi",id:"1-connect-to-wi-fi",level:4},{value:"2. Request New York Time online",id:"2-request-new-york-time-online",level:4},{value:"Final: Wi-fi Signal Strength Tracker",id:"final-wi-fi-signal-strength-tracker",level:3},{value:"What&#39;s more",id:"whats-more",level:2},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,i.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"xiao-esp32c3-wi-fi-tracker-using-micropython"},"XIAO ESP32C3 Wi-Fi Tracker using MicroPython"),(0,o.yg)("p",null,"In this tutorial, I will provide a concise overview of utilizing the XIAO ESP32C3 with Micropython. Furthermore, I will explore the practical application of a Wi-Fi signal strength tracker, which proves invaluable when establishing a high-speed, high-quality family network.\nConsequently, by adhering to the Wi-Fi tracker's guidance, we can effectively optimize the placement of the Wi-Fi signal enhancer, ensuring optimal signal coverage."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/7n72Knh4IIM",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})),(0,o.yg)("h2",{id:"hardware-preparation"},"Hardware Preparation"),(0,o.yg)("p",null,"I am using Seeed Studio XIAO ESP32C3 and Expansion Board Base for XIAO as the hardware here."),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"Seeed Studio XIAO ESP32C3"),(0,o.yg)("th",null,"Expansion Board Base for XIAO")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png",style:{width:"auto",height:200}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg",style:{width:"auto",height:200}})))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("h2",{id:"software-preparation"},"Software Preparation"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"Thonny IDE"),(0,o.yg)("th",null,"Esptool")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://thonny.org/"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Download \u23ec")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://github.com/espressif/esptool"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Git clone Here \u23ec"))))))))),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Before using it, it is required for me to state the software/firmware I'm using here is designed for the ESP32C3 chip. Hence when you are trying to use pin, make sure the General Purpose Input/Output instead of the pin on the board.",(0,o.yg)("br",null),"\nFor example, when you are trying to use the pin in the first row on the left. Make sure it is ",(0,o.yg)("inlineCode",{parentName:"p"},"GPIO2")," instead of ",(0,o.yg)("inlineCode",{parentName:"p"},"A0")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"D0"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png",style:{width:500,height:"auto"}}))),(0,o.yg)("h2",{id:"getting-started"},"Getting Started"),(0,o.yg)("p",null,'It requires two steps("Micropython Configuration on PC" and "Micropython Setup on XIAO ESP32C3") to get the XIAO ESP32C3 really to be programmed by MicroPython.'),(0,o.yg)("p",null,"After setting up, you can copy the code step by step from every demo to achieve the completion."),(0,o.yg)("h3",{id:"micropython-configuration-on-pc"},"Micropython Configuration on PC"),(0,o.yg)("h4",{id:"install-thonny-ide-windows"},"Install Thonny IDE (Windows)"),(0,o.yg)("p",null,"Please follow the steps in the picture"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython1.png"})),(0,o.yg)("h4",{id:"update-the-firmware-using-esptool"},"Update the firmware using esptool"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Open your own file location")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"git clone https://github.com/espressif/esptool.git")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Download the latest firmware (This Tutorial is v1.20.0 (2023-04-26) .bin)")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"}," https://micropython.org/download/esp32c3/")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Put the latest firm in this file location and open the file in CMD")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"your own file location\\esptool-master\\esptool")),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"Flash the firmware by entering this command in CMD \uff08enter bootloader mode before flashing\uff09")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"esptool.exe --chip esp32c3 --port COM10 --baud 921600 --before default_reset --after hard_reset --no-stub  write_flash --flash_mode dio --flash_freq 80m 0x0 esp32c3-usb-20230426-v1.20.0.bin\n")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython2.png"})),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},'If you use linux, change "esptool.exe" to "esptool.py". Change  "COM10" to your own serial port. Change "esp32c3-usb-20230426-v1.20.0.bin" to the latest firmware name you downloaded.')),(0,o.yg)("h3",{id:"micropython-setup-on-xiao-esp32c3"},"Micropython Setup on XIAO ESP32C3"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Plug in your XIAO ESP32C3, open Thonny and click right bottom to configure interpreter")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Select interpreter- Micropython (ESP32) and Port >>> Click OK"))),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython3.png"})),(0,o.yg)("p",null,"Note: If everything goes well, you will see the output in the shell"),(0,o.yg)("h4",{id:"install-required-libraries"},"Install required libraries"),(0,o.yg)("p",null,'Click "Tools" >>> Click "Management Packages" >>> Enter Library\'s name >>> Click "Search micropython-lib and PyPl"'),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython4.png"})),(0,o.yg)("h4",{id:"run-the-scrip-and-flash-it-to-the-board"},"Run the scrip and Flash it to the board"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"After you finish coding, click the green button to run the scrip")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython5.png"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},'Flash the code to the board by save the file to the board as "boot.py"')),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png"})),(0,o.yg)("h3",{id:"demo-1-light-an-oled-screen"},"Demo 1: Light an OLED Screen"),(0,o.yg)("h4",{id:"1-hello-seeder"},"1. Hello Seeder!"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython7.png"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'import time\nfrom machine import Pin, SoftI2C\nimport ssd1306\nimport math\n\n# ESP8266 Pin assignment\ni2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # Adjust the Pin numbers based on your connections\noled_width = 128\noled_height = 64\noled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n\noled.fill(0)  # Clear the screen\noled.text("Hello, Seeder!", 10, 15)\noled.text("/////", 30, 40)\noled.text("(`3`)y", 30, 55)\noled.show()  # Show the text\n')),(0,o.yg)("h4",{id:"2-loading-dynamic-effect"},"2. Loading dynamic effect"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython8.png"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"import time\nfrom machine import Pin, SoftI2C\nimport ssd1306\nimport math\n\n# ESP8266 Pin assignment\ni2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # Adjust the Pin numbers based on your connections\noled_width = 128\noled_height = 64\noled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n\ncenter_x = oled_width // 2\ncenter_y = oled_height // 2\nsquare_size = 6  # Size of each square\nnum_squares = 12  # Number of squares\nangle_increment = 2 * math.pi / num_squares\n\nwhile True:\n    oled.fill(0)  # Clear the screen\n    \n    for i in range(num_squares):\n        angle = i * angle_increment\n        x = int(center_x + (center_x - square_size-30) * math.cos(angle))\n        y = int(center_y + (center_x - square_size-30) * math.sin(angle))\n        \n        # Draw all squares\n        for j in range(num_squares):\n            angle_j = j * angle_increment\n            x_j = int(center_x + (center_x - square_size-30) * math.cos(angle_j))\n            y_j = int(center_y + (center_x - square_size-30) * math.sin(angle_j))\n            \n            oled.fill_rect(x_j, y_j, square_size, square_size, 1)  # Draw the square\n        \n        oled.fill_rect(x, y, square_size, square_size, 0)  # Erase the current square\n        oled.show()\n        time.sleep_ms(100)  # Pause before next iteration\n\n")),(0,o.yg)("h3",{id:"demo-2-light-a-buzzer"},"Demo 2: Light a Buzzer"),(0,o.yg)("h4",{id:"1-sound"},"1. Sound"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"import time\nfrom time import sleep\nimport machine\nfrom machine import Pin, SoftI2C\n\n\n# Buzzer settings\n\nbuzzer_pin = machine.Pin(5, machine.Pin.OUT)\nbuzzer = machine.PWM(buzzer_pin)\nbuzzer.freq(1047)\n\n# Buzzer working\n\nwhile True:\n\n    buzzer.duty(10)\n    time.sleep(1)\n    buzzer.duty(0)\n    time.sleep(1)\n")),(0,o.yg)("h4",{id:"2-play-the-song--hes-a-pirate-"},"2. Play the Song << He's a pirate >>"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"import machine\nimport time\n\n# Buzzer settings\nbuzzer_pin = machine.Pin(5, machine.Pin.OUT)\nbuzzer = machine.PWM(buzzer_pin)\nbuzzer.freq(1047)\n\n# Defining frequency of each music note\nNOTE_C4 = 262\nNOTE_D4 = 294\nNOTE_E4 = 330\nNOTE_F4 = 349\nNOTE_G4 = 392\nNOTE_A4 = 440\nNOTE_B4 = 494\nNOTE_C5 = 523\nNOTE_D5 = 587\nNOTE_E5 = 659\nNOTE_F5 = 698\nNOTE_G5 = 784\nNOTE_A5 = 880\nNOTE_B5 = 988\n\n# Music notes of the song, 0 is a rest/pulse\nnotes = [\n    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,\n    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,\n    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,\n    NOTE_A4, NOTE_G4, NOTE_A4, 0,\n\n    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,\n    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,\n    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,\n    NOTE_A4, NOTE_G4, NOTE_A4, 0,\n\n    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,\n    NOTE_A4, NOTE_C5, NOTE_D5, NOTE_D5, 0,\n    NOTE_D5, NOTE_E5, NOTE_F5, NOTE_F5, 0,\n    NOTE_E5, NOTE_D5, NOTE_E5, NOTE_A4, 0,\n\n    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,\n    NOTE_D5, NOTE_E5, NOTE_A4, 0,\n    NOTE_A4, NOTE_C5, NOTE_B4, NOTE_B4, 0,\n    NOTE_C5, NOTE_A4, NOTE_B4, 0,\n\n    NOTE_A4, NOTE_A4,\n    #Repeat of first part\n    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,\n    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,\n    NOTE_A4, NOTE_G4, NOTE_A4, 0,\n\n    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,\n    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,\n    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,\n    NOTE_A4, NOTE_G4, NOTE_A4, 0,\n\n    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,\n    NOTE_A4, NOTE_C5, NOTE_D5, NOTE_D5, 0,\n    NOTE_D5, NOTE_E5, NOTE_F5, NOTE_F5, 0,\n    NOTE_E5, NOTE_D5, NOTE_E5, NOTE_A4, 0,\n\n    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,\n    NOTE_D5, NOTE_E5, NOTE_A4, 0,\n    NOTE_A4, NOTE_C5, NOTE_B4, NOTE_B4, 0,\n    NOTE_C5, NOTE_A4, NOTE_B4, 0,\n    #End of Repeat\n\n    NOTE_E5, 0, 0, NOTE_F5, 0, 0,\n    NOTE_E5, NOTE_E5, 0, NOTE_G5, 0, NOTE_E5, NOTE_D5, 0, 0,\n    NOTE_D5, 0, 0, NOTE_C5, 0, 0,\n    NOTE_B4, NOTE_C5, 0, NOTE_B4, 0, NOTE_A4,\n\n    NOTE_E5, 0, 0, NOTE_F5, 0, 0,\n    NOTE_E5, NOTE_E5, 0, NOTE_G5, 0, NOTE_E5, NOTE_D5, 0, 0,\n    NOTE_D5, 0, 0, NOTE_C5, 0, 0,\n    NOTE_B4, NOTE_C5, 0, NOTE_B4, 0, NOTE_A4\n]\n\n# Durations (in ms) of each music note of the song\n# Quarter Note is 250 ms when songSpeed = 1.0\ndurations = [\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 375, 125,\n\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 375, 125,\n\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 125, 250, 125,\n\n    125, 125, 250, 125, 125,\n    250, 125, 250, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 375, 375,\n\n    250, 125,\n    #Rpeat of First Part\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 375, 125,\n\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 375, 125,\n\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 125, 250, 125,\n\n    125, 125, 250, 125, 125,\n    250, 125, 250, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 375, 375,\n    #End of Repeat\n\n    250, 125, 375, 250, 125, 375,\n    125, 125, 125, 125, 125, 125, 125, 125, 375,\n    250, 125, 375, 250, 125, 375,\n    125, 125, 125, 125, 125, 500,\n\n    250, 125, 375, 250, 125, 375,\n    125, 125, 125, 125, 125, 125, 125, 125, 375,\n    250, 125, 375, 250, 125, 375,\n    125, 125, 125, 125, 125, 500\n]\n\ndef play_song():\n    total_notes = len(notes)\n    for i in range(total_notes):\n        current_note = notes[i]\n        wait = durations[i]\n        if current_note != 0:\n            buzzer.duty(512)  # Set duty cycle for sound\n            buzzer.freq(current_note)  # Set frequency of the note\n        else:\n            buzzer.duty(0)  # Turn off the sound\n        time.sleep_ms(wait)\n        buzzer.duty(0)  # Turn off the sound\nwhile True:\n    # Play the song\n    play_song()\n")),(0,o.yg)("h3",{id:"demo-3-connect-to-wi-fi"},"Demo 3: Connect to Wi-fi"),(0,o.yg)("h4",{id:"1-connect-to-wi-fi"},"1. Connect to Wi-fi"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython8a.png"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'import network\nimport urequests\nimport utime as time\n\n# Network settings\nwifi_ssid = "Your Own SSID"\nwifi_password = "Your Own Password"\n\ndef scan_and_connect():\n    station = network.WLAN(network.STA_IF)\n    station.active(True)\n\n    print("Scanning for WiFi networks, please wait...")\n    for ssid, bssid, channel, RSSI, authmode, hidden in station.scan():\n        print("* {:s}".format(ssid))\n        print("   - Channel: {}".format(channel))\n        print("   - RSSI: {}".format(RSSI))\n        print("   - BSSID: {:02x}:{:02x}:{:02x}:{:02x}:{:02x}:{:02x}".format(*bssid))\n        print()\n\n    while not station.isconnected():\n        print("Connecting...")\n        station.connect(wifi_ssid, wifi_password)\n        time.sleep(10)\n\n    print("Connected!")\n    print("My IP Address:", station.ifconfig()[0])\n\n\n# Execute the functions\nscan_and_connect()\n')),(0,o.yg)("h4",{id:"2-request-new-york-time-online"},"2. Request New York Time online"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython9.png"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'from machine import Pin, SoftI2C\nimport ssd1306\nfrom time import sleep\nimport time\nimport network\nimport urequests\nimport ujson\n\n# ESP32 Pin assignment\n# i2c = SoftI2C(scl=Pin(22), sda=Pin(21))\n\n# ESP8266 Pin assignment\ni2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # Adjust the Pin numbers based on your connections\n\noled_width = 128\noled_height = 64\noled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n\nstation = network.WLAN(network.STA_IF)\nstation.active(True)\n\n# Network settings\nwifi_ssid = "Your wifi ssid"\nwifi_password = "Your wifi password"\nurl = "http://worldtimeapi.org/api/timezone/America/New_York"\n\nprint("Scanning for WiFi networks, please wait...")\nauthmodes = [\'Open\', \'WEP\', \'WPA-PSK\' \'WPA2-PSK4\', \'WPA/WPA2-PSK\']\nfor (ssid, bssid, channel, RSSI, authmode, hidden) in station.scan():\n    print("* {:s}".format(ssid))\n    print("   - Channel: {}".format(channel))\n    print("   - RSSI: {}".format(RSSI))\n    print("   - BSSID: {:02x}:{:02x}:{:02x}:{:02x}:{:02x}:{:02x}".format(*bssid))\n    print()\n\n# Continually try to connect to WiFi access point\nwhile not station.isconnected():\n    # Try to connect to WiFi access point\n    print("Connecting...")\n    station.connect(wifi_ssid, wifi_password)\n    time.sleep(10)\n\n# Display connection details\nprint("Connected!")\nprint("My IP Address:", station.ifconfig()[0])\n\n\nwhile True:\n    # Perform HTTP GET request on a non-SSL web\n    response = urequests.get(url)\n    # Check if the request was successful\n    if response.status_code == 200:\n        # Parse the JSON response\n        data = ujson.loads(response.text)\n        # Extract the "datetime" field for New York\n        ny_datetime = data["datetime"]\n        # Split the date and time components\n        date_part, time_part = ny_datetime.split("T")\n        # Get only the first two decimal places of the time\n        time_part = time_part[:8]\n        # Get the timezone\n        timezone = data["timezone"]\n        \n        # Clear the OLED display\n        oled.fill(0)\n        \n        # Display the New York date and time on separate lines\n        oled.text("New York Date:", 0, 0)\n        oled.text(date_part, 0, 10)\n        oled.text("New York Time:", 0, 20)\n        oled.text(time_part, 0, 30)\n        oled.text("Timezone:", 0, 40)\n        oled.text(timezone, 0, 50)\n        # Update the display\n        oled.show()\n    else:\n        oled.text("Failed to get the time for New York!")\n        # Update the display\n        oled.show()\n')),(0,o.yg)("h3",{id:"final-wi-fi-signal-strength-tracker"},"Final: Wi-fi Signal Strength Tracker"),(0,o.yg)("p",null,"This  is the  main task in this project. Through this code, you can trake your wifi signal at home with such an easy device."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython10.jpg"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'import network\nimport time\nfrom time import sleep\nimport machine\nfrom machine import Pin, SoftI2C\nimport ssd1306\nimport math\n\n# ESP32C3 Pin assignment\ni2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # Adjust the Pin numbers based on your connections\noled_width = 128\noled_height = 64\noled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n\n# Network settings\nwifi_ssid = "Your Own SSID"\nwifi_password = "Your Own Password"\nmachine.freq(160000000)  # Set CPU frequency to 160 MHz (ESP8266 specific)\noled.text("Starting up...", 0, 0)\noled.show()\n\nstation = network.WLAN(network.STA_IF)\nstation.active(True)\nstation.connect(wifi_ssid, wifi_password)\ntime.sleep(1)\n\nwhile not station.isconnected():\n    time.sleep(1)\n\noled.fill(0)\noled.text("Connecting to", 0, 0)\noled.text(wifi_ssid, 0, 20)\noled.show()\ntime.sleep(2)\n\noled.fill(0)\nip_address = station.ifconfig()[0]  # Get the IP address\noled.text("Connected! ", 0, 0)\noled.text("IP Address:", 0, 20)\noled.text(ip_address, 0, 40)\noled.show()\ntime.sleep(2)\n\n# Buzzer settings\nbuzzer_pin = machine.Pin(5, machine.Pin.OUT)\nbuzzer = machine.PWM(buzzer_pin)\nbuzzer.freq(1047)\nbuzzer.duty(0)\n\ncenter_x = oled_width // 2\ncenter_y = oled_height // 2\nsquare_size = 6  # Size of each square\nnum_squares = 12  # Number of squares\nangle_increment = 2 * math.pi / num_squares\n\nx_pos = [12, 38, 64, 90]\nstatuses = ["poor", "normal", "good", "excellent"]\n\ndef calculate_block_count(rssi):\n    # Determine the number of blocks based on RSSI values\n    if -80 <= rssi < -60:\n        return 1\n    elif -60 <= rssi < -40:\n        return 2\n    elif -40 <= rssi < -20:\n        return 3\n    elif -20 <= rssi <= 10:\n        return 4\n\ndef draw_blocks(count):\n    for i in range(count):\n        y_pos = 50 - calculate_block_height(i)\n        oled.fill_rect(x_pos[i], y_pos, 24, calculate_block_height(i), 1)\n    for i in range(count, 4):  # Clear unused area\n        y_pos = 50 - calculate_block_height(i)\n        oled.fill_rect(x_pos[i], y_pos, 24, calculate_block_height(i), 0)\n\ndef calculate_block_height(index):\n    return 10 * (index + 1)\n\nloop_count = 0  # Initialize loop count\n\nwhile loop_count < 2:  # Execute the loop 24 times\n    oled.fill(0)  # Clear the screen\n    \n    for i in range(num_squares):\n        angle = i * angle_increment\n        x = int(center_x + (center_x - square_size-30) * math.cos(angle))\n        y = int(center_y + (center_x - square_size-30) * math.sin(angle))\n        \n        # Draw all squares\n        for j in range(num_squares):\n            angle_j = j * angle_increment\n            x_j = int(center_x + (center_x - square_size-30) * math.cos(angle_j))\n            y_j = int(center_y + (center_x - square_size-30) * math.sin(angle_j))\n            \n            oled.fill_rect(x_j, y_j, square_size, square_size, 1)  # Draw the square\n        \n        oled.fill_rect(x, y, square_size, square_size, 0)  # Erase the current square\n        oled.show()\n        time.sleep_ms(100)  # Pause before next iteration\n        \n    loop_count += 1  # Increase loop count\n\noled.fill(0)  # Clear the screen after finishing the loops\noled.show()\n\nwhile True:\n    oled.fill(0)\n    station = network.WLAN(network.STA_IF)\n    time.sleep(0.1)\n    rssi = station.status(\'rssi\')\n    rssi_duty = 160 + 2 * int(rssi)\n    rssi_duty_2 = int(rssi_duty / 2)\n    rssi_abs = abs(int(rssi)) / 100\n \n    block_count = calculate_block_count(rssi)\n    status = statuses[block_count - 1]  # Get the status text based on block count\n    \n    draw_blocks(block_count)\n    \n    oled.text(status, 11, 56)\n    \n    oled.text("RSSI:", 0, 0)\n    oled.text(str(rssi), 40, 0)\n    # Update the display\n    oled.show()\n\n    buzzer.duty(rssi_duty)\n    time.sleep(rssi_abs)\n    buzzer.duty(0)\n    time.sleep(rssi_abs)\n    buzzer.duty(rssi_duty_2)\n    time.sleep(rssi_abs)\n    buzzer.duty(0)\n    time.sleep(rssi_abs)\n\n')),(0,o.yg)("h2",{id:"whats-more"},"What's more"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"You can also flash firmware into XIAO ESP32C3 using esptool intergated on Thonny which is supportive for MAC OS.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython11.png"})),(0,o.yg)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"This project is supported by the Seeed Studio ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35177053"},"Contributor Project"),"."),(0,o.yg)("li",{parentName:"ul"},"Thanks ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35177053"},"Zachary's efforts")," and your work will be ",(0,o.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"exhibited"),".")),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);