"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27514],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(o),p=n,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||a;return o?i.createElement(m,r(r({ref:t},h),{},{components:o})):i.createElement(m,r({ref:t},h))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,r[1]=s;for(var d=2;d<a;d++)r[d]=o[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}p.displayName="MDXCreateElement"},88075:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=o(87462),n=(o(67294),o(3905));const a={description:"An introduction to how to quickly experience Matter Lighting using Espressif's Matter Deployment Tool.",title:"Getting Started with Matter Quickly with XIAO ESP32",keywords:["ESP-IDF","XIAO"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/getting_started_with_matter",last_update:{date:"05/11/2024",author:"Citric"}},r="Getting Started with Matter Quickly with XIAO ESP32 Series",s={unversionedId:"Sensor/SeeedStudio_XIAO/Matter/getting_started_with_matter",id:"Sensor/SeeedStudio_XIAO/Matter/getting_started_with_matter",title:"Getting Started with Matter Quickly with XIAO ESP32",description:"An introduction to how to quickly experience Matter Lighting using Espressif's Matter Deployment Tool.",source:"@site/docs/Sensor/SeeedStudio_XIAO/Matter/getting_started_with_matter.md",sourceDirName:"Sensor/SeeedStudio_XIAO/Matter",slug:"/getting_started_with_matter",permalink:"/getting_started_with_matter",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/Matter/getting_started_with_matter.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1715385600,formattedLastUpdatedAt:"May 11, 2024",frontMatter:{description:"An introduction to how to quickly experience Matter Lighting using Espressif's Matter Deployment Tool.",title:"Getting Started with Matter Quickly with XIAO ESP32",keywords:["ESP-IDF","XIAO"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/getting_started_with_matter",last_update:{date:"05/11/2024",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"Developed on XIAO using Espressif ESP-IDF",permalink:"/xiao_idf"},next:{title:"Matter Development with XIAO ESP32 Series",permalink:"/xiao_esp32_matter_env"}},l={},d=[{value:"Prepare the Software",id:"prepare-the-software",level:2},{value:"Prepare the Hardware",id:"prepare-the-hardware",level:2},{value:"Video Tutorials",id:"video-tutorials",level:2},{value:"Step 1. Flash Matter Firmware for XIAO ESP32",id:"step-1-flash-matter-firmware-for-xiao-esp32",level:2},{value:"Step 2. Add a device by scanning the code using the iPhone Home APP",id:"step-2-add-a-device-by-scanning-the-code-using-the-iphone-home-app",level:2},{value:"Step 3. Using the XIAO in the Home APP",id:"step-3-using-the-xiao-in-the-home-app",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Q1: Failed to connect to the device for a long time in Home APP.",id:"q1-failed-to-connect-to-the-device-for-a-long-time-in-home-app",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],h={toc:d},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-matter-quickly-with-xiao-esp32-series"},"Getting Started with Matter Quickly with XIAO ESP32 Series"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This article is the second tutorial in the Seeed Studio XIAO ESP32 Development Matter series. If you haven't configured your ESP-IDF environment yet, please read the first tutorial first:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/xiao_idf"},"Developed on XIAO using Espressif ESP-IDF")))),(0,n.kt)("p",{parentName:"admonition"},"This tutorial applies to the XIAO ESP32C3, XIAO ESP32S3. The Matter example provided by Espressif is temporarily unavailable for the XIAO ESP32C6 because the GPIO8 pin is not pinned out.")),(0,n.kt)("p",null,"In the world of smart home technology, Matter has emerged as a game-changer, promising to revolutionize the way devices communicate and interact with each other. Matter is an open-source, standardized protocol that enables seamless interoperability between smart home devices from various manufacturers. By providing a common language and framework, Matter aims to simplify the development and deployment of IoT devices, creating a more connected and user-friendly smart home experience."),(0,n.kt)("p",null,"As a developer or enthusiast, you may be eager to explore the potential of Matter and start building your own Matter-compatible devices. That's where the XIAO ESP32 series and ESPLaunchPad come into play. The XIAO ESP32 series, particularly the XIAO ESP32C3, XIAO ESP32S3 and XIAO ESP32C6, are compact and powerful development boards that offer an ideal platform for creating Matter devices. With their robust features and extensive peripheral interfaces, these boards provide the necessary hardware foundation for your Matter projects."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/15.png",style:{width:800,height:"auto"}})),(0,n.kt)("p",null,"To streamline the development process and make it more accessible, Espressif Systems has introduced ESPLaunchPad, a comprehensive platform that simplifies the firmware flashing and provisioning of ESP32 devices. ESPLaunchPad leverages the power of the ESP RainMaker ecosystem, allowing you to easily configure and control your devices using a smartphone app. By combining the XIAO ESP32 series with ESPLaunchPad, you can quickly get started with Matter development and experience the benefits of this transformative protocol."),(0,n.kt)("p",null,"In this tutorial, we will guide you through the process of using ESPLaunchPad to swiftly flash firmware onto your XIAO ESP32 board and pair it with your iPhone using a QR code. By following these steps, you'll be able to establish a connection between your phone and the XIAO ESP32 device, enabling you to control and interact with it seamlessly. This hands-on experience will provide you with a foundational understanding of Matter and its potential in the smart home ecosystem."),(0,n.kt)("p",null,"Throughout this tutorial, you'll learn how to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set up your XIAO ESP32 board and prepare it for firmware flashing."),(0,n.kt)("li",{parentName:"ol"},"Use ESPLaunchPad to effortlessly flash the Matter firmware onto your XIAO ESP32 device."),(0,n.kt)("li",{parentName:"ol"},"Pair your XIAO ESP32 board with your iPhone using a QR code."),(0,n.kt)("li",{parentName:"ol"},"Control and interact with your Matter device using the iPhone app."),(0,n.kt)("li",{parentName:"ol"},"Explore the basic functionalities and capabilities of Matter in a practical setting.")),(0,n.kt)("p",null,"By the end of this tutorial, you'll have gained a solid understanding of Matter and its implementation using the XIAO ESP32 series and ESPLaunchPad. You'll be equipped with the knowledge and skills to take your Matter development further, creating innovative smart home solutions that leverage the power of this groundbreaking protocol."),(0,n.kt)("p",null,"So, let's dive in and embark on an exciting journey into the world of Matter with the XIAO ESP32 series and ESPLaunchPad!"),(0,n.kt)("h2",{id:"prepare-the-software"},"Prepare the Software"),(0,n.kt)("p",null,"The following lists the systems and versions supported for use in this tutorial."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Host"),": ",(0,n.kt)("a",{parentName:"li",href:"https://releases.ubuntu.com/jammy/"},"Ubuntu 22.04 LTS (Jammy Jellyfish)")," or macOS 10.15 or later.")),(0,n.kt)("p",null,"Matter's ESPLaunchPad is ",(0,n.kt)("strong",{parentName:"p"},"not supported on Windows"),"."),(0,n.kt)("h2",{id:"prepare-the-hardware"},"Prepare the Hardware"),(0,n.kt)("p",null,"At the end of this tutorial, we will show you how to add the XIAO ESP32 series as a Matter Endpoint to Apple Home to control the LED strips through Apple's ecosystem. So far, this tutorial supports the following XIAOs, and you can choose them directly for the content of this course."),(0,n.kt)("div",{class:"table-center"},(0,n.kt)("table",{align:"center"},(0,n.kt)("tr",null,(0,n.kt)("th",null,"XIAO ESP32C3"),(0,n.kt)("th",null,"XIAO ESP32S3")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png",style:{width:110,height:"auto"}}))),(0,n.kt)("td",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg",style:{width:250,height:"auto"}})))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"},(0,n.kt)("strong",null,(0,n.kt)("span",null,(0,n.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,n.kt)("td",null,(0,n.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"},(0,n.kt)("strong",null,(0,n.kt)("span",null,(0,n.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,n.kt)("p",null,"In addition to the XIAO, we also need the WS281x model light bar or light bead. Currently the light example provided by Espressif only supports a single bead, so whether you use a strip or a bead, it will only light up one light. We would also recommend that you pick up Grove Base for XIAO for ease of wiring."),(0,n.kt)("div",{class:"table-center"},(0,n.kt)("table",{align:"center"},(0,n.kt)("tr",null,(0,n.kt)("th",null,"Grove Base for XIAO"),(0,n.kt)("th",null,"Grove - RGB LED Ring (20 - WS2813 Mini)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png",style:{width:250,height:"auto"}}))),(0,n.kt)("td",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg",style:{width:250,height:"auto"}})))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html"},(0,n.kt)("strong",null,(0,n.kt)("span",null,(0,n.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,n.kt)("td",null,(0,n.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html"},(0,n.kt)("strong",null,(0,n.kt)("span",null,(0,n.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,n.kt)("p",null,"If you are using the XIAO ESP32C3, connect the LED strip to pin ",(0,n.kt)("strong",{parentName:"p"},"D8"),"."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/16.png",style:{width:400,height:"auto"}})),(0,n.kt)("p",null,"If you are using the XIAO ESP32S3, connect the LED strip to pin ",(0,n.kt)("strong",{parentName:"p"},"D9"),"."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png",style:{width:400,height:"auto"}})),(0,n.kt)("p",null,"This tutorial will use the ",(0,n.kt)("strong",{parentName:"p"},"XIAO ESP32C3")," as an example to give you an overview of how to flash the firmware, add devices and the rest."),(0,n.kt)("h2",{id:"video-tutorials"},"Video Tutorials"),(0,n.kt)("div",{class:"table-center"},(0,n.kt)("iframe",{width:"750",height:"450",src:"https://www.youtube.com/embed/bhHVbRe_Gtw?si=iH-oouOl_ItkG7vF?autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),(0,n.kt)("h2",{id:"step-1-flash-matter-firmware-for-xiao-esp32"},"Step 1. Flash Matter Firmware for XIAO ESP32"),(0,n.kt)("p",null,"Connect the XIAO ESP32C3 board to your computer using a USB cable. Ensure that the board is properly recognized by your computer."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please do not use a Windows computer, you will notice that the Flash button is always greyed out on Windows computers.")),(0,n.kt)("p",null,"Open the ESPLaunchPad Website on your computer."),(0,n.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.kt)("a",{class:"get_one_now_item",href:"https://espressif.github.io/esp-launchpad/?flashConfigURL=https://espressif.github.io/esp-matter/launchpad.toml"},(0,n.kt)("strong",null,(0,n.kt)("span",null,(0,n.kt)("font",{color:"FFFFFF",size:"4"},"Go to ESPLaunchPAD"))))),(0,n.kt)("br",null),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"light")," in ",(0,n.kt)("strong",{parentName:"p"},"Select Application")," and select ",(0,n.kt)("strong",{parentName:"p"},"ESP32C3")," in ",(0,n.kt)("strong",{parentName:"p"},"ESP Chipset Type"),"."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/18.png",style:{width:800,height:"auto"}})),(0,n.kt)("p",null,"Then click on the ",(0,n.kt)("strong",{parentName:"p"},"Connect")," button in the upper right corner and select the XIAO device you have connected to your computer."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/19.png",style:{width:800,height:"auto"}})),(0,n.kt)("p",null,"Then click the ",(0,n.kt)("strong",{parentName:"p"},"flash")," button below and wait for the firmware to upload."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/20.png",style:{width:800,height:"auto"}})),(0,n.kt)("p",null,"Once the firmware upload is complete, you'll see some action alert boxes as well as a QR code, and we'll just click ",(0,n.kt)("strong",{parentName:"p"},"Done"),"."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/21.png",style:{width:800,height:"auto"}})),(0,n.kt)("p",null,"Then click the ",(0,n.kt)("strong",{parentName:"p"},"Reset Device")," button on the right side of the screen."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/22.png",style:{width:800,height:"auto"}})),(0,n.kt)("p",null,"When you see the debug message, it means that everything is going very well. We can now proceed with the device binding."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/23.png",style:{width:800,height:"auto"}})),(0,n.kt)("h2",{id:"step-2-add-a-device-by-scanning-the-code-using-the-iphone-home-app"},"Step 2. Add a device by scanning the code using the iPhone Home APP"),(0,n.kt)("p",null,"In the section on adding devices, we'll take Apple's device as an example (since that's all I have on hand). If you have ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/googlenest/answer/12391458?hl=en&co=GENIE.Platform%3DAndroid"},"Google's device")," or ",(0,n.kt)("a",{parentName:"p",href:"https://developer.amazon.com/en-US/alexa/matter"},"Amazon's device")," on hand, maybe you can use them as well."),(0,n.kt)("p",null,"If, as in this article, you want to add devices using the Home APP for iPhone, you need to have an Apple device as a home hub. The devices currently supported by Home Hub are HomePod and Apple TV, read the ",(0,n.kt)("a",{parentName:"p",href:"https://support.apple.com/en-hk/102557"},"Apple website for more details"),". For the purpose of this tutorial, it is assumed that you have already added the Home Hub in the Home APP."),(0,n.kt)("p",null,"Home APP is installed by default on iOS devices. If you have ever deleted it, you can ",(0,n.kt)("a",{parentName:"p",href:"https://apps.apple.com/cn/app/home/id1110145103?l=en-GB"},"search for it")," again in the App Store and download it."),(0,n.kt)("p",null,"Open the Home App on your iPhone. Tap the ",(0,n.kt)("strong",{parentName:"p"},"+")," button in the top right corner of the screen. Select ",(0,n.kt)("strong",{parentName:"p"},"Add or Scan Accessory")," from the menu. Use your iPhone camera to scan the QR code provided with the XIAO ESP32C3 . The Home App will recognize the Matter Accessory and display it as a new accessory. Tap ",(0,n.kt)("strong",{parentName:"p"},"Add to Home")," to add the XIAO ESP32C3 to your Home App. Please refer to the detailed operation pictures below."),(0,n.kt)("div",{class:"table-center"},(0,n.kt)("table",{align:"center"},(0,n.kt)("tr",null,(0,n.kt)("th",null,"Page 1"),(0,n.kt)("th",null,"Page 2"),(0,n.kt)("th",null,"Page 3")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/24.png",style:{width:600,height:"auto"}}))),(0,n.kt)("td",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/25.png",style:{width:600,height:"auto"}}))),(0,n.kt)("td",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/26.png",style:{width:600,height:"auto"}})))),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Page 4"),(0,n.kt)("th",null,"Page 5"),(0,n.kt)("th",null,"Page 6")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/27.png",style:{width:600,height:"auto"}}))),(0,n.kt)("td",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/28.png",style:{width:600,height:"auto"}}))),(0,n.kt)("td",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/32.png",style:{width:600,height:"auto"}})))),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Page 7"),(0,n.kt)("th",null,"Page 8"),(0,n.kt)("th",null,"Page 9")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/29.png",style:{width:600,height:"auto"}}))),(0,n.kt)("td",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/31.png",style:{width:600,height:"auto"}})))))),(0,n.kt)("h2",{id:"step-3-using-the-xiao-in-the-home-app"},"Step 3. Using the XIAO in the Home APP"),(0,n.kt)("p",null,"In the Home App, locate the newly added XIAO ESP32C3 accessory. Tap on the accessory to access its controls. Use the brightness slider to adjust the brightness of the connected lights. Tap on the color icon to change the color of the lights. You can choose from a variety of predefined colors or use the color picker to create custom colors. The lights connected to the XIAO ESP32C3 will respond in real-time to the adjustments made in the Home App."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/30.png",style:{width:300,height:"auto"}})),(0,n.kt)("p",null,"Congratulations! You have successfully flashed the light firmware onto the XIAO ESP32C3 board using ESPLaunchPad and paired it with your iPhone's Home App. You can now control the brightness and color of the connected lights directly from your iPhone, creating a personalized and convenient lighting experience."),(0,n.kt)("p",null,"Feel free to explore more advanced features and customization options available in the Home App and experiment with different light accessories compatible with the XIAO ESP32C3 board. With this foundation, you can further expand your smart home setup and create a truly connected and automated living space."),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h3",{id:"q1-failed-to-connect-to-the-device-for-a-long-time-in-home-app"},"Q1: Failed to connect to the device for a long time in Home APP."),(0,n.kt)("p",null,"If you fail to connect to the device for an extended period of time, make sure you see the log message after uploading the firmware. If you have not paired the device for a long time at this point, the XIAO may go into standby mode, at which point you will need to press the Reset button on the XIAO or use Reset Device on the ESPLaunchPad to reboot the device. After that try adding it again."),(0,n.kt)("p",null,"Apart from that, there could be network issues. Please make sure that XIAO and your iPhone are under the same LAN. And they both need to be connected to a 2.4GHz network, no 5GHz network. After the configuration is done, the phone can use other networks. But XIAO only supports 2.4GHz network."),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"table-center"},(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}u.isMDXComponent=!0}}]);