"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||a;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={description:"XIAO RP2040 With Zephyr(RTOS)",title:"XIAO RP2040 With Zephyr(RTOS)",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-RP2040-Zephyr-RTOS",last_update:{date:"3/20/2024",author:"timo614"}},r="XIAO RP2040 With Zephyr(RTOS)",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-Zephyr-RTOS",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-Zephyr-RTOS",title:"XIAO RP2040 With Zephyr(RTOS)",description:"XIAO RP2040 With Zephyr(RTOS)",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-Zephyr-RTOS.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040",slug:"/XIAO-RP2040-Zephyr-RTOS",permalink:"/XIAO-RP2040-Zephyr-RTOS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-Zephyr-RTOS.md",tags:[],version:"current",lastUpdatedBy:"timo614",lastUpdatedAt:1710892800,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{description:"XIAO RP2040 With Zephyr(RTOS)",title:"XIAO RP2040 With Zephyr(RTOS)",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-RP2040-Zephyr-RTOS",last_update:{date:"3/20/2024",author:"timo614"}},sidebar:"ProductSidebar",previous:{title:"CircuitPython",permalink:"/XIAO-RP2040-with-CircuitPython"},next:{title:"Motion Recognition based on Edge Impulse",permalink:"/XIAO-RP2040-EI"}},s={},p=[{value:"What is Zephyr",id:"what-is-zephyr",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:2},{value:"Developer Knowledge",id:"developer-knowledge",level:3},{value:"XIAO Expansion Board",id:"xiao-expansion-board",level:4},{value:"Pin Definitions",id:"pin-definitions",level:4},{value:"Primary Functionality",id:"primary-functionality",level:3},{value:"WS2812 LED",id:"ws2812-led",level:4},{value:"LED PWM",id:"led-pwm",level:4},{value:"Clock",id:"clock",level:4},{value:"TFLite - Hello World",id:"tflite---hello-world",level:4},{value:"Additional Components",id:"additional-components",level:3},{value:"Grove - Expansion Board - I2C Display",id:"grove---expansion-board---i2c-display",level:4},{value:"Grove - Expansion Board - Button",id:"grove---expansion-board---button",level:4},{value:"Grove - Expansion Board - Buzzer",id:"grove---expansion-board---buzzer",level:4},{value:"Grove - Expansion Board - SD Card",id:"grove---expansion-board---sd-card",level:4},{value:"Grove - Temperature and Humidity Sensor (SHT31)",id:"grove---temperature-and-humidity-sensor-sht31",level:4},{value:"1.69inch LCD Display Module, 240\xd7280 Resolution, SPI Interface",id:"169inch-lcd-display-module-240280-resolution-spi-interface",level:4},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xiao-rp2040-with-zephyrrtos"},"XIAO RP2040 With Zephyr(RTOS)"),(0,i.kt)("p",null,"This wiki covers ",(0,i.kt)("a",{parentName:"p",href:"https://www.zephyrproject.org/"},"Zephyr")," support for the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/xiao_rp2040_getting_started/"},"Seeed Studio XIAO RP2040"),". With the assistance of this guide you will be able to utilize the feature set available to the board."),(0,i.kt)("h2",{id:"what-is-zephyr"},"What is ",(0,i.kt)("a",{parentName:"h2",href:"https://www.zephyrproject.org/"},"Zephyr")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{200}",src:"https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"})),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.zephyrproject.org/"},(0,i.kt)("strong",{parentName:"a"},"Zephyr"))," OS is based on a small-footprint kernel designed for use on resource-constrained and embedded systems: from simple embedded environmental sensors and LED wearables to sophisticated embedded controllers, smart watches, and IoT wireless applications."),(0,i.kt)("p",null,"For each supported device Zephyr has a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/build/dts/index.html"},"devicetree")," file that describes the board and its features. The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html#supported-features"},"Xiao RP2040 Zephyr board page")," describes the supported features currently available which is defined by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_rp2040/xiao_rp2040.yaml#L7"},"board's dts file"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Reference: ",(0,i.kt)("a",{parentName:"em",href:"https://docs.zephyrproject.org/latest/introduction/index.html#"},(0,i.kt)("strong",{parentName:"a"},"Zephyr Project")))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"The first step to working with Zephyr is to get the SDK and toolchain setup for local development. The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/develop/getting_started/index.html"},"Zephyr getting started guide")," should be referenced for the associated setup procedure needed for your environment."),(0,i.kt)("p",null,"Once the Zephyr toolchain has been setup and an associated SDK has been downloaded you can begin application development."),(0,i.kt)("p",null,"For the Xiao RP2040 the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html"},"board description file")," can be referenced for further setup information."),(0,i.kt)("p",null,"To program the Xiao RP2040 the following steps can be taken:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Build an example or your application"),(0,i.kt)("li",{parentName:"ol"},"Plugin the Xiao RP2040"),(0,i.kt)("li",{parentName:"ol"},"Hold the button designated ",(0,i.kt)("inlineCode",{parentName:"li"},"B")," (boot) and press ",(0,i.kt)("inlineCode",{parentName:"li"},"R")," (reset) which will mount the device as a mass storage device"),(0,i.kt)("li",{parentName:"ol"},"Drag the uf2 file (ie ",(0,i.kt)("inlineCode",{parentName:"li"},"build/zephyr/zephyr.uf2"),") generated during the build process to the device triggering an update")),(0,i.kt)("p",null,'The simplest example is to run the "Hello World" sample on the board. After changing to the directory of the Zephyr install run the following commands.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"west build -p always -b xiao_rp2040 samples/subsys/usb/console\n")),(0,i.kt)("p",null,"After this completes enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"build/zephyr")," folder and drag ",(0,i.kt)("inlineCode",{parentName:"p"},"zephyr.uf2")," to your waiting RP2040 mounted drive. The device will reset after it receives the file and your machine should now be connected over USB for serial."),(0,i.kt)("p",null,"Find the port for your device by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"ls /dev/tty*")," and confirming which device appears when your USB has been plugged in."),(0,i.kt)("p",null,"In my example I see ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/ttyACM0")," as the newly added device."),(0,i.kt)("p",null,"Using screen you can then connect and monitor the serial response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"screen /dev/ttyACM0 115200\n")),(0,i.kt)("p",null,"You should see a response similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***\nHello World! arm\nHello World! arm\nHello World! arm\n")),(0,i.kt)("p",null,"To assist with the process of using Zephyr with Xiao and its expansion board a repository has been constructed with several overlays and configurations used here. The commands included in this wiki article assume it is located ",(0,i.kt)("inlineCode",{parentName:"p"},"../applications/xiao-zephyr-examples")," relative to the zephyr root. An alternative path can be provided to the commands below by updating it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples\n")),(0,i.kt)("h2",{id:"hardware-preparation"},"Hardware Preparation"),(0,i.kt)("table",{align:"center"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Seeed Studio XIAO RP2040"),(0,i.kt)("th",null,"Seeed Studio Expansion Board")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg",style:{width:300,height:"auto"}}))),(0,i.kt)("td",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg",style:{width:210,height:"auto"}})))),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,i.kt)("td",{align:"center"},(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now\ud83d\uddb1\ufe0f"))))))))),(0,i.kt)("h3",{id:"developer-knowledge"},"Developer Knowledge"),(0,i.kt)("h4",{id:"xiao-expansion-board"},"XIAO Expansion Board"),(0,i.kt)("p",null,"  In order to use Grove modules with Seeed Studio XIAO RP2040, we will use a ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},"Seeed Studio Expansion Base for XIAO")," and connect XIAO RP2040 on it."),(0,i.kt)("p",null,"  After that, the Grove connectors on the board can be used to connect Grove modules"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png",style:{width:700,height:"auto"}})),(0,i.kt)("h4",{id:"pin-definitions"},"Pin Definitions"),(0,i.kt)("p",null,"  You need to follow the graphic below to use the appropriate internal pin numbers when connecting the Grove modules to the Grove connectors on Grove Shield for Seeed Studio XIAO."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg",style:{width:900,height:"auto"}})),(0,i.kt)("h3",{id:"primary-functionality"},"Primary Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WS2812 LED"),(0,i.kt)("li",{parentName:"ul"},"LED PWM"),(0,i.kt)("li",{parentName:"ul"},"Clock"),(0,i.kt)("li",{parentName:"ul"},"TFLite")),(0,i.kt)("h4",{id:"ws2812-led"},"WS2812 LED"),(0,i.kt)("p",null,"For this example the Xiao RP2040 utilizes its onboard LED and flashes through red, green, and blue continually."),(0,i.kt)("p",null,"To test this setup we can use an existing sample with Zephyr:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ~/zephyrproject/zephyr\nwest build -p always -b xiao_rp2040 samples/drivers/led_strip\n")),(0,i.kt)("p",null,"You'll see the onboard WS2812 LED cycling through red, blue and green continually in a flashing pattern."),(0,i.kt)("p",null,"Let's dive into this example a bit to see why it works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n / {\n     aliases {\n         led-strip = &ws2812;\n     };\n }\n &gpio0 {\n     status = "okay";\n     neopixel-power-enable {\n        gpio-hog;\n        gpios = <11 GPIO_ACTIVE_HIGH>;\n        output-high;\n    };\n };\n &pio0 {\n     status = "okay";\n\n     pio-ws2812 {\n         compatible = "worldsemi,ws2812-rpi_pico-pio";\n         status = "okay";\n         pinctrl-0 = <&ws2812_pio0_default>;\n         pinctrl-names = "default";\n         bit-waveform = <3>, <3>, <4>;\n\n         ws2812: ws2812 {\n             status = "okay";\n             gpios = <&gpio0 12 GPIO_ACTIVE_HIGH>;\n             chain-length = <1>;\n             color-mapping = <LED_COLOR_ID_GREEN\n                      LED_COLOR_ID_RED\n                      LED_COLOR_ID_BLUE>;\n             reset-delay = <280>;\n             frequency = <800000>;\n         };\n     };\n };\n')),(0,i.kt)("p",null,"These elements of the device tree show the onboard WS2812 and its utilization. Given the WS2812 has its VCC line set to the RP2040's pin 11 the devicetree utilizes the gpio-hog functionality to allow the LED to be enabled via environment variables. In this case pin 12 is the one setup for the WS2812 dataline so with the CONFIG_GPIO_HOGS environment variable enabled the LED strip is able to be used for the example."),(0,i.kt)("p",null,"This works in part because the example has an xiao_rp2040.conf file as part of its boards directory so it merges that configuration with the board's configuration and enables it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CONFIG_GPIO=y\nCONFIG_GPIO_HOGS=y\n")),(0,i.kt)("p",null,"If you wish to utilize the onboard WS2812 it is advisable to enable this variable to allow it to draw power."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/ws2812.gif",style:{width:300,height:"auto"}})),(0,i.kt)("h4",{id:"led-pwm"},"LED PWM"),(0,i.kt)("p",null,"This example we'll demonstrate the PWM capabilities of the Xiao RP2040. To do such we'll be using the onboard blue LED and use PWM to fade it continuously."),(0,i.kt)("p",null,"To test this setup we can use an existing sample with Zephyr:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ~/zephyrproject/zephyr\nwest build -p always -b xiao_rp2040 samples/basic/fade_led\n")),(0,i.kt)("p",null,"You'll see the blue light of the RGB onboard LED slowly fade and repeat the process again."),(0,i.kt)("p",null,"Let's dive into this example a bit to see why it works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'&pwm {\n    status = "okay";\n    divider-int-4 = <255>;\n};\n')),(0,i.kt)("p",null,"This bit of logic in the ",(0,i.kt)("inlineCode",{parentName:"p"},"boards/xiao_rp2040.overlay")," for the example enables the PWM functionality from the devicetree that is normally disabled. The Xiao RP2040 setup has the blue onboard RGB LED setup as the default PWM."),(0,i.kt)("p",null,"As can be seen by the ",(0,i.kt)("inlineCode",{parentName:"p"},"xiao_rp2040-pinctrl.dtsi")," from the zephyr board files the following exists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    pwm_ch4b_default: pwm_ch4b_default {\n        group1 {\n            pinmux = <PWM_4B_P25>;\n        };\n    };\n")),(0,i.kt)("p",null,"In this case the PWM is using the configured devicetree pwm LED which is associated back with pin 25 (the blue LED). The PWM pins can be referenced from the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html"},"RP2040 documentation"),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/led_fade.gif",style:{width:300,height:"auto"}})),(0,i.kt)("h4",{id:"clock"},"Clock"),(0,i.kt)("p",null,"For this we'll use an existing sample and our console overlay:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ~/zephyrproject/zephyr\nwest build -p always -b xiao_rp2040 samples/drivers/counter/alarm -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf\n")),(0,i.kt)("p",null,"You can find the uf2 file at ",(0,i.kt)("inlineCode",{parentName:"p"},"~/zephyrproject/zephyr/build/zephyr/zephyr.uf2")),(0,i.kt)("p",null,"After uploading the uf2 file connect to monitor (after quickly resetting your board to ensure it restarts):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"screen /dev/ttyACM0 115200\n")),(0,i.kt)("p",null,"You will see a series of timers going off after a set delay one after another:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***\nCounter alarm sample\n\nSet alarm in 2 sec (2000000 ticks)\n!!! Alarm !!!\nNow: 2\nSet alarm in 4 sec (4000000 ticks)\n!!! Alarm !!!\nNow: 6\nSet alarm in 8 sec (8000000 ticks)\n!!! Alarm !!!\nNow: 14\nSet alarm in 16 sec (16000000 ticks)\n!!! Alarm !!!\nNow: 30\nSet alarm in 32 sec (32000000 ticks)\n")),(0,i.kt)("h4",{id:"tflite---hello-world"},"TFLite - Hello World"),(0,i.kt)("p",null,"Enable TFLite with Zephyr and update:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"west config manifest.project-filter -- +tflite-micro\nwest update\n")),(0,i.kt)("p",null,'For this example we\'re going to use the sample tflite "Hello World" along with our console overlay and conf to read the response over USB serial.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ~/zephyrproject/zephyr\nwest build -p always -b xiao_rp2040 samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf\n")),(0,i.kt)("p",null,"You can find the uf2 file at ",(0,i.kt)("inlineCode",{parentName:"p"},"~/zephyrproject/zephyr/build/zephyr/zephyr.uf2")),(0,i.kt)("p",null,"After uploading the uf2 file connect to monitor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"screen /dev/ttyACM0 115200\n")),(0,i.kt)("p",null,"You will see results returned from the console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***\nx_value: 1.0*2^-127, y_value: 1.0*2^-127\n\nx_value: 1.2566366*2^-2, y_value: 1.4910772*2^-2\n\nx_value: 1.2566366*2^-1, y_value: 1.1183078*2^-1\n\nx_value: 1.8849551*2^-1, y_value: 1.677462*2^-1\n\nx_value: 1.2566366*2^0, y_value: 1.9316229*2^-1\n\nx_value: 1.5707957*2^0, y_value: 1.0420598*2^0\n\nx_value: 1.8849551*2^0, y_value: 1.9146791*2^-1\n\nx_value: 1.0995567*2^1, y_value: 1.6435742*2^-1\n\nx_value: 1.2566366*2^1, y_value: 1.0674761*2^-1\n\nx_value: 1.4137159*2^1, y_value: 1.8977352*2^-3\n")),(0,i.kt)("h3",{id:"additional-components"},"Additional Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},"Grove - Expansion Board")," - I2C Display"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},"Grove - Expansion Board")," - Button"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},"Grove - Expansion Board")," - Buzzer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},"Grove - Expansion Board")," - SD Card"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html"},"Grove - Temperature and Humidity Sensor (SHT31)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html"},"1.69inch LCD Display Module, 240\xd7280 Resolution, SPI Interface"))),(0,i.kt)("h4",{id:"grove---expansion-board---i2c-display"},"Grove - Expansion Board - I2C Display"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_expansion_oled.jpg",style:{width:300,height:"auto"}})),(0,i.kt)("p",null,"To test this setup we can use an existing sample with Zephyr:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ~/zephyrproject/zephyr\nwest build -p always -b xiao_rp2040 samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board\n")),(0,i.kt)("p",null,"You'll see a display showing multiple black boxes and a blinking box in the corner given this display only supports two colors."),(0,i.kt)("p",null,"Let's dive into this example a bit to see why it works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/ {\n    chosen {\n      zephyr,display = &ssd1306;\n    };\n};\n\n&xiao_i2c {\n  status = "okay";\n\n  ssd1306: ssd1306@3c {\n    compatible = "solomon,ssd1306fb";\n    reg = <0x3c>;\n    width = <128>;\n    height = <64>;\n    segment-offset = <0>;\n    page-offset = <0>;\n    display-offset = <0>;\n    multiplex-ratio = <63>;\n    segment-remap;\n    com-invdir;\n    prechargep = <0x22>;\n  };\n};\n\n')),(0,i.kt)("p",null,"The shield overlay file in this example sets up a SSD1306 OLED screen at the 0x3C register. It is selected as the zephyr display in the chosen section."),(0,i.kt)("h4",{id:"grove---expansion-board---button"},"Grove - Expansion Board - Button"),(0,i.kt)("p",null,"To test this setup we can use an existing sample with Zephyr which we will use along with the USB console overlay and conf."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cd ~/zephyrproject/zephyr\nwest build -p always -b xiao_rp2040 samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board\n')),(0,i.kt)("p",null,"After uploading the uf2 file connect to monitor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"screen /dev/ttyACM0 115200\n")),(0,i.kt)("p",null,"Pressing the button with the sample will trigger the onboard LED to light up."),(0,i.kt)("p",null,"You will see results returned from the console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***\nSet up button at gpio@40014000 pin 27\nSet up LED at gpio@40014000 pin 25\nPress the button\nButton pressed at 1934761489\nButton pressed at 2178879257\nButton pressed at 3084766465\nButton pressed at 3388674993\n")),(0,i.kt)("p",null,"Let's dive into this example a bit to see why it works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/ {\n    aliases {\n      sw0 = &xiao_button0;\n    };\n\n    buttons {\n      compatible = "gpio-keys";\n      xiao_button0: button_0 {\n        gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;\n        label = "SW0";\n        zephyr,code = <INPUT_KEY_0>;\n      };\n    };\n};\n')),(0,i.kt)("p",null,"The app overlay file is used to setup various board components. Using this file the button example can be utilized as the overlay allows the Zephyr to configure the button and make it available for the associated code."),(0,i.kt)("p",null,"In this case GPIO 27 corresponds with Pin A1/D1 on the Xiao RP2040. It is setup in this overlay to act as a button and is aliased to the sw0 name to allow it to be used for the sample which has code expecting this."),(0,i.kt)("h4",{id:"grove---expansion-board---buzzer"},"Grove - Expansion Board - Buzzer"),(0,i.kt)("p",null,"We'll activate our buzzer using the blinky PWM example to control its activation via a PWM signal. For this we'll use a custom overlay which enables the PWM for the A3 pin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cd ~/zephyrproject/zephyr\nwest build -p always -b xiao_rp2040 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-rp2040/xiao_expansion_buzzer.overlay"\n')),(0,i.kt)("p",null,"After uploading the uf2 file you should begin hearing a series of buzzes which change in sound as the sample runs its course."),(0,i.kt)("p",null,"Let's look at why this works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/delete-node/ &pwm_led0;\n\n/ {\n    aliases {\n        pwm-led = &pwm_led0;\n    };\n};\n\n&{/pwm_leds} {\n    status = "okay";\n    compatible = "pwm-leds";\n\n    pwm_led0: pwm_led0 {\n        status = "okay";\n        pwms = <&pwm 13 PWM_HZ(880) PWM_POLARITY_NORMAL>;\n    };\n};\n\n&pinctrl {\n    pwm_ch6b_default: pwm_ch6b_default {\n        group1 {\n            pinmux = <PWM_6B_P29>;\n        };\n    };\n};\n\n&pwm {\n    status = "okay";\n    pinctrl-0 = <&pwm_ch6b_default>;\n    divider-frac-6 = <15>;\n    divider-int-6 = <255>;\n};\n')),(0,i.kt)("p",null,"The overlay in use first removes the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"pwm_led0")," node as this board is supported via an onboard LED setup for PWM. It then configures the A3 pin for use as a PWM."),(0,i.kt)("p",null,"We're using channel 6B here for the PWM as the associated pin for A3 on the Xiao RP2040 is pin 29. See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html#a8c0c1058a626d83ba5f7e18238aba150"},"RP2040 pinctrl documentation")," for more information / the pin mapping of other pins."),(0,i.kt)("h4",{id:"grove---expansion-board---sd-card"},"Grove - Expansion Board - SD Card"),(0,i.kt)("p",null,"We'll use the filesystem sample here along with the Xiao Expansion Board shield to try interfacing with the SD card reader over SPI. The expansion board shield has the CS pin configured for the associated ",(0,i.kt)("inlineCode",{parentName:"p"},"&xiao_d 2")," pin so no work is needed on your part for associating this capability with the board aside from adding the shield. To further prepare it we are using a custom config that enables the SD card functionality."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cd ~/zephyrproject/zephyr\nwest build -p always -b xiao_rp2040 samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board\n')),(0,i.kt)("p",null,"After uploading the uf2 file connect to monitor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"screen /dev/ttyACM0 115200\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***\n[00:00:00.201,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz\n[00:00:00.202,000] <inf> main: Block count 15519744\nSector size 512\nMemory Size(MB) 7578\nDisk mounted.\n\nListing dir /SD: ...\n[FILE] IMAGE1.JPG (size = 58422)\n[FILE] IMAGE2.JPG (size = 97963)\n")),(0,i.kt)("p",null,"In this case my SD card had two files. Their names and their sizes were outputted to my console."),(0,i.kt)("p",null,"Let's look over the relevant elements at play here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CONFIG_SPI=y\nCONFIG_DISK_DRIVER_SDMMC=y\nCONFIG_GPIO=y\n")),(0,i.kt)("p",null,"In the associated config we're enabling SPI, the SDMMC disk driver, and the GPIO. Without this config the overlay will lead to an error as the sample is unable to find the SD card."),(0,i.kt)("p",null,"The relevant part of the Xiao Expansion Board shield is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'&xiao_spi {\n    status = "okay";\n    cs-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;\n\n    sdhc0: sdhc@0 {\n        compatible = "zephyr,sdhc-spi-slot";\n        reg = <0>;\n        status = "okay";\n        mmc {\n            compatible = "zephyr,sdmmc-disk";\n            status = "okay";\n        };\n        spi-max-frequency = <24000000>;\n    };\n};\n')),(0,i.kt)("p",null,"As mentioned previously the ",(0,i.kt)("inlineCode",{parentName:"p"},"&xiao_d 2")," pin mapping is used to allow the D2 pin to be selected for this regardless of the board used so long as it supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"&xiao_d")," pin setup."),(0,i.kt)("h4",{id:"grove---temperature-and-humidity-sensor-sht31"},"Grove - Temperature and Humidity Sensor (SHT31)"),(0,i.kt)("p",null,"First solder on pins and connect your Xiao RP2040 to the expansion board. Then connect a grove connector cable between the Grove SHT31 and one of the I2C ports on the expansion board."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_sht31.jpg",style:{width:500,height:"auto"}})),(0,i.kt)("p",null,"To test this setup we can use an existing sample with Zephyr which we will enable USB console support with our overlay and conf."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cd ~/zephyrproject/zephyr\nwest build -p always -b xiao_rp2040 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf\n')),(0,i.kt)("p",null,"After uploading the uf2 file connect to monitor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"screen /dev/ttyACM0 115200\n")),(0,i.kt)("p",null,"You will see results returned from the console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***\nSHT3XD: 26.20 Cel ; 52.49 %RH\nSHT3XD: 26.19 Cel ; 52.69 %RH\nSHT3XD: 26.20 Cel ; 52.75 %RH\nSHT3XD: 26.24 Cel ; 52.88 %RH\nSHT3XD: 26.24 Cel ; 52.67 %RH\nSHT3XD: 26.23 Cel ; 52.49 %RH\nSHT3XD: 26.23 Cel ; 52.48 %RH\nSHT3XD: 26.24 Cel ; 52.30 %RH\n")),(0,i.kt)("p",null,"Let's dive into this example a bit to see why it works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' &xiao_i2c {\n    sht3xd@44 {\n            compatible = "sensirion,sht3xd";\n            reg = <0x44>;\n        };\n    };\n')),(0,i.kt)("p",null,"The app overlay file is used to setup various board components. Using this file the SHT31 example can be utilized as the overlay informs the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c"},"sample logic")," how to configure the sensor for our board."),(0,i.kt)("h4",{id:"169inch-lcd-display-module-240280-resolution-spi-interface"},"1.69inch LCD Display Module, 240\xd7280 Resolution, SPI Interface"),(0,i.kt)("p",null,"For this example we'll use SPI to connect to a 1.69 inch LCD with a 240x280 resolution."),(0,i.kt)("p",null,"First connect your board to the LCD screen using the following image as a guide (in this case we're using the Xiao RP2040 but the same pin layout is used for connecting here)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"1.69-inch LCD SPI Display"),(0,i.kt)("th",{parentName:"tr",align:null},"XIAO RP2040"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VCC"),(0,i.kt)("td",{parentName:"tr",align:null},"3V3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DIN"),(0,i.kt)("td",{parentName:"tr",align:null},"D10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CLK"),(0,i.kt)("td",{parentName:"tr",align:null},"D8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CS"),(0,i.kt)("td",{parentName:"tr",align:null},"D1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DC"),(0,i.kt)("td",{parentName:"tr",align:null},"D3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RST"),(0,i.kt)("td",{parentName:"tr",align:null},"D0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BL"),(0,i.kt)("td",{parentName:"tr",align:null},"D6")))),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/lcd_spi_display/10.png",style:{width:700,height:"auto"}})),(0,i.kt)("p",null,"Next with the hardware prepared we can build the uf2 file for flashing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ~/zephyrproject/zephyr\nwest build -p always -b xiao_rp2040 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf\n")),(0,i.kt)("p",null,"When this completes, move the build file from ",(0,i.kt)("inlineCode",{parentName:"p"},"build/zephyr/zephyr.uf2")," to the mounted Xiao RP2040 (remember you can hold the boot button down while plugging in to enter this state) which will reset the device with the new firmware."),(0,i.kt)("p",null,"With the new firmware in place the device now shows the same demo screen we saw previously on the expansion board just now updated for the color LCD over SPI."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/spi_lcd.jpg",style:{width:500,height:"auto"}})),(0,i.kt)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This project is supported by the Seeed Studio ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293558"},"Contributor Project"),"."),(0,i.kt)("li",{parentName:"ul"},"Thanks ",(0,i.kt)("strong",{parentName:"li"},"Tim's efforts")," and your work will be ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"exhibited"),".")),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}h.isMDXComponent=!0}}]);