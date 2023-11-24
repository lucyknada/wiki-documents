"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={description:"XIAO ESP32C3-Chatgpt",title:"XIAO ESP32C3-Chatgpt",keywords:["XIAO ESP32C3"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/xiaoesp32c3-chatgpt",last_update:{date:"03/03/2023",author:"Citric"}},r="Learn to use WiFiClient and HTTPClient on XIAO ESP32C3 - XIAO ESP32C3 & ChatGPT in action",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/xiaoesp32c3-chatgpt",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/xiaoesp32c3-chatgpt",title:"XIAO ESP32C3-Chatgpt",description:"XIAO ESP32C3-Chatgpt",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/xiaoesp32c3-chatgpt.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application",slug:"/xiaoesp32c3-chatgpt",permalink:"/xiaoesp32c3-chatgpt",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/xiaoesp32c3-chatgpt.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1677801600,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{description:"XIAO ESP32C3-Chatgpt",title:"XIAO ESP32C3-Chatgpt",keywords:["XIAO ESP32C3"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/xiaoesp32c3-chatgpt",last_update:{date:"03/03/2023",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"XIAO ESP32C3 accesses Home Assistant via ESPHome service",permalink:"/xiao-esp32c3-esphome"},next:{title:"XIAO ESP32C3 Flash-storage",permalink:"/xiaoesp32c3-flash-storage"}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Materials Required",id:"materials-required",level:3},{value:"Preliminary Preparation",id:"preliminary-preparation",level:3},{value:"Configure the XIAO ESP32C3 to connect to the network",id:"configure-the-xiao-esp32c3-to-connect-to-the-network",level:2},{value:"Build the embedded web page",id:"build-the-embedded-web-page",level:2},{value:"Submit questions via the built-in web page",id:"submit-questions-via-the-built-in-web-page",level:2},{value:"Get answers from ChatGPT",id:"get-answers-from-chatgpt",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Q1: Is there any limitation on the use of geography or network to get the answer by calling the OpenAI API using XIAO ESP32C3?",id:"q1-is-there-any-limitation-on-the-use-of-geography-or-network-to-get-the-answer-by-calling-the-openai-api-using-xiao-esp32c3",level:3},{value:"Q2: Why am I getting Time Out errors returned?",id:"q2-why-am-i-getting-time-out-errors-returned",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"learn-to-use-wificlient-and-httpclient-on-xiao-esp32c3---xiao-esp32c3--chatgpt-in-action"},"Learn to use WiFiClient and HTTPClient on XIAO ESP32C3 - XIAO ESP32C3 & ChatGPT in action"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/18.png"})),(0,a.kt)("p",null,"ChatGPT is a new chatbot model, an artificial intelligence technology-powered natural language processing tool, released by OpenAI, an artificial intelligence research lab, on November 30, 2022."),(0,a.kt)("p",null,"It is able to carry out conversations by learning and understanding human language, and can also interact based on the context of the chat, truly chatting and communicating like a human, even performing tasks such as writing emails, video scripts, copywriting, translating, and coding."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/2.png"})),(0,a.kt)("p",null,"In embedded systems, ChatGPT can be a good helper to assist us in writing simple programs, or even checking and fixing bugs that appear in the program."),(0,a.kt)("p",null,"What is exciting is that OpenAI officially provides interfaces to call GPT-3 models, which allows us to call these interfaces and deploy this great model into our own embedded systems through a number of methods."),(0,a.kt)("p",null,"Seeed Studio XIAO ESP32C3 is an IoT mini development board based on the Espressif ESP32-C3 WiFi/Bluetooth dual-mode chip. It has excellent radio frequency performance, supporting IEEE 802.11 b/g/n WiFi, and Bluetooth 5 (LE) protocols. It can perfectly support the services of WiFi Client and WiFi Server provided by ESP32 official. Of course, it is able to support Arduino perfectly."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"200",src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"})),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("p",null,"So in this tutorial, we will guide users to learn and use XIAO ESP32C3 WiFiClient and HTTPClient libraries, how to connect to the network, how to publish web pages and the basics of HTTP GET and POST. The goal is to call OpenAI ChatGPT and create your own Q&A website."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"In this tutorial, we will use an XIAO ESP32C3 to configure a ChatGPT Q&A page of our own. In this page, you can enter your question and XIAO ESP32C3 will record your question and use the API call method provided by OpenAI to send a request command using HTTP Client to get ChatGPT's answer and print it in the serial port."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/19.png"})),(0,a.kt)("p",null,"The tasks in this tutorial can be divided into the following four main steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#configure-the-xiao-esp32c3-to-connect-to-the-network"},"Configure the XIAO ESP32C3 to connect to the network")," : Inside this step, we will learn the basic WiFi configuration process using XIAO ESP32C3 and learn the basic operations of XIAO ESP32C3 such as network configuration, connecting to network services and obtaining IP address.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#build-the-embedded-web-page"},"Build the embedded web page")," : In this step, we mainly touch on the WiFi Client library. By using the GET and POST functions of this library, we can write our own Q&A web page using HTML and deploy it on top of XIAO ESP32C3.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#submit-questions-via-the-built-in-web-page"},"Submit questions via the built-in web page")," : In this step we will mainly learn to use the POST method in the HTTP Client to POST the questions we ask according to the OpenAI API standard. we will focus our main attention on the process of how to collect and store the questions from the web page.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#get-answers-from-chatgpt"},"Get answers from ChatGPT")," : In this step we learn to use the POST method in the HTTP Client and extract the answers to the questions we need from the returned messages. The last step is to sort out the structure of the code and make the final integration."))),(0,a.kt)("h3",{id:"materials-required"},"Materials Required"),(0,a.kt)("table",{align:"center"},(0,a.kt)("tr",null,(0,a.kt)("th",null,"Material")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"130",src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"})))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"},(0,a.kt)("strong",null,"Get ONE Now"))))),(0,a.kt)("h3",{id:"preliminary-preparation"},"Preliminary Preparation"),(0,a.kt)("p",null,"All procedures and steps in this tutorial have been completed based on the XIAO ESP32C3. In the preparation phase, we first need to complete the configuration of the environment for using the XIAO ESP32C3."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Connect XIAO ESP32C3 to your computer via a USB Type-C cable."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png",alt:"pir",width:"120",height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Download and Install the latest version of Arduino IDE according to your operating system"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.arduino.cc/en/software"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png",alt:"pir",width:"600",height:"auto"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Launch the Arduino application."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"600",src:"https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Add ESP32 board package to your Arduino IDE")),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("strong",{parentName:"p"},"File > Preferences"),", and fill ",(0,a.kt)("strong",{parentName:"p"},'"Additional Boards Manager URLs"')," with the url below:\n",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json"},"https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"600",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/4.png"})),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("strong",{parentName:"p"},"Tools > Board > Boards Manager..."),', type the keyword "',(0,a.kt)("strong",{parentName:"p"},"esp32"),'" in the search box, select the latest version of *',(0,a.kt)("strong",{parentName:"p"},"*esp32**"),", and install it."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png",alt:"pir",width:"650",height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Select your board and port")),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("strong",{parentName:"p"},"Tools > Board > ESP32 Arduino"),' and select "',(0,a.kt)("strong",{parentName:"p"},"XIAO_ESP32C3"),'". The list of board is a little long and you need to roll to the buttom to reach it.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png",alt:"pir",width:"800",height:"auto"})),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("strong",{parentName:"p"},"Tools > Port")," and select the serial port name of the connected XIAO ESP32C3. This is likely to be COM3 or higher (",(0,a.kt)("strong",{parentName:"p"},"COM1")," and ",(0,a.kt)("strong",{parentName:"p"},"COM2")," are usually reserved for hardware serial ports)."),(0,a.kt)("h2",{id:"configure-the-xiao-esp32c3-to-connect-to-the-network"},"Configure the XIAO ESP32C3 to connect to the network"),(0,a.kt)("p",null,"The use of WiFi has been described in detail in the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO_ESP32C3_WiFi_Usage/#connect-to-a-wifi-network"},"XIAO ESP32C3 tutorial on using WiFi"),"."),(0,a.kt)("p",null,"When the ESP32 is set as a Wi-Fi station, it can connect to other networks (like your router). In this scenario, the router assigns a unique IP address to your ESP board."),(0,a.kt)("p",null,"The first thing you need to do to use the ESP32 Wi-Fi functionalities is to include the WiFi.h library in your code, as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <WiFi.h>\n")),(0,a.kt)("p",null,"To connect the ESP32 to a specific Wi-Fi network, you must know its SSID and password. Additionally, that network must be within the ESP32 Wi-Fi range."),(0,a.kt)("p",null,"First, set the Wi-Fi mode. If the ESP32 will connected to another network (access point/hotspot) it must be in station mode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"WiFi.mode(WIFI_STA);\n")),(0,a.kt)("p",null,"Then, use ",(0,a.kt)("inlineCode",{parentName:"p"},"WiFi.begin()")," to connect to a network. You must pass as arguments the network SSID and its password."),(0,a.kt)("p",null,"Connecting to a Wi-Fi network can take a while, so we usually add a while loop that keeps checking if the connection was already established by using ",(0,a.kt)("inlineCode",{parentName:"p"},"WiFi.status()"),". When the connection is successfully established, it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"WL_CONNECTED"),"."),(0,a.kt)("p",null,"When the ESP32 is set as a Wi-Fi station, it can connect to other networks (like your router). In this scenario, the router assigns a unique IP address to your ESP32 board. To get your board\u2019s IP address, you need to call ",(0,a.kt)("inlineCode",{parentName:"p"},"WiFi.localIP()")," after establishing a connection with your network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'void WiFiConnect(void){\n    WiFi.begin(ssid, password);\n    Serial.print("Connecting to ");\n    Serial.println(ssid);\n\n    while (WiFi.status() != WL_CONNECTED) {\n        delay(500);\n        Serial.print(".");\n    }\n\n    Serial.println("");\n    Serial.println("WiFi connected!");\n    Serial.print("IP address: ");\n    Serial.println(WiFi.localIP());\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ssid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," variables hold the SSID and password of the network you want to connect to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Replace with your network credentials\nconst char* ssid = "REPLACE_WITH_YOUR_SSID";\nconst char* password = "REPLACE_WITH_YOUR_PASSWORD";\n')),(0,a.kt)("p",null,"This is a very simple WiFi connection program, upload the program to XIAO ESP32C3, then open the serial assistant and set the baud rate to 115200. If the connection goes well, you will see the IP address of XIAO printed out."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"600",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/5.png"})),(0,a.kt)("p",null,"If you are interested in reading more about ESP32C3 applications and functions in WiFi, we recommend reading ",(0,a.kt)("a",{href:"https://randomnerdtutorials.com/esp32-useful-wi- fi-functions-arduino/"},"ESP32 Useful Wi-Fi Library Functions"),"."),(0,a.kt)("h2",{id:"build-the-embedded-web-page"},"Build the embedded web page"),(0,a.kt)("p",null,"ESP32 integrates many very useful WiFiClient functions in WiFi library, which allows us to design and develop embedded web pages without adding additional libraries."),(0,a.kt)("p",null,"Create a new WiFiServer object in order to use this object to control the XIAO ESP32C3 established IoT server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"WiFiServer server(80);\nWiFiClient client1;\n")),(0,a.kt)("p",null,"In the above step, we let the XIAO ESP32C3 connect to WiFi. after the WiFi connection is successful, you will be able to get the current IP address of XIAO from the serial monitor. At this time, XIAO has successfully set up the web server. You can access this web server through the IP address of XIAO."),(0,a.kt)("p",null,"Suppose the IP address of your XIAO ESP32C3 is ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.7.152"),". Then you can enter this IP address through your browser next."),(0,a.kt)("p",null,"After entering this IP address, we may only see a blank page. This is because we have not yet published our page content for that page."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"500",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/6.png"})),(0,a.kt)("p",null,"So let's now create an array to store the content of the page we want to layout, which is the HTML code, in C."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'const char html_page[] PROGMEM = {\n    "HTTP/1.1 200 OK\\r\\n"\n    "Content-Type: text/html\\r\\n"\n    "Connection: close\\r\\n"  // the connection will be closed after completion of the response\n    //"Refresh: 1\\r\\n"         // refresh the page automatically every n sec\n    "\\r\\n"\n    "<!DOCTYPE HTML>\\r\\n"\n    "<html>\\r\\n"\n    "<head>\\r\\n"\n      "<meta charset=\\"UTF-8\\">\\r\\n"\n      "<title>Cloud Printer: ChatGPT</title>\\r\\n"\n      "<link rel=\\"icon\\" href=\\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\\" type=\\"image/x-icon\\">\\r\\n"\n    "</head>\\r\\n"\n    "<body>\\r\\n"\n    "<img alt=\\"SEEED\\" src=\\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/logo.png\\" height=\\"100\\" width=\\"410\\">\\r\\n"\n    "<p style=\\"text-align:center;\\">\\r\\n"\n    "<img alt=\\"ChatGPT\\" src=\\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\\" height=\\"200\\" width=\\"200\\">\\r\\n"\n    "<h1 align=\\"center\\">Cloud Printer</h1>\\r\\n" \n    "<h1 align=\\"center\\">OpenAI ChatGPT</h1>\\r\\n" \n    "<div style=\\"text-align:center;vertical-align:middle;\\">"\n    "<form action=\\"/\\" method=\\"post\\">"\n    "<input type=\\"text\\" placeholder=\\"Please enter your question\\" size=\\"35\\" name=\\"chatgpttext\\" required=\\"required\\"/>\\r\\n"\n    "<input type=\\"submit\\" value=\\"Submit\\" style=\\"height:30px; width:80px;\\"/>"\n    "</form>"\n    "</div>"\n    "</p>\\r\\n"\n    "</body>\\r\\n"\n    "<html>\\r\\n"\n};\n')),(0,a.kt)("p",null,"This code gives us the page effect shown in the figure below."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/7.png"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"HTML syntax for web pages is beyond the scope of this tutorial. You can learn to use HTML on your own, or, alternatively, we can use existing generation tools to do the code generation work. We recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://webcode.tools/generators/html"},"HTML Generator"),'.\nIt is worth noting that in C programs, "',"\\",'" and """ are special characters, and if you want to retain the functionality of these special characters in your program, you need to add a right slash in front of them.')),(0,a.kt)("p",null,"Client1 refers to the Socket client after the web server is established, the following code is the flow of web server processing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'client1 = server.available();\nif (client1){\n    Serial.println("New Client.");           // print a message out the serial port\n    // an http request ends with a blank line\n    boolean currentLineIsBlank = true;    \n    while (client1.connected()){\n        if (client1.available()){  // Check if the client is connected\n            char c = client1.read();\n            json_String += c;\n            if (c == \'\\n\' && currentLineIsBlank) {                                 \n                dataStr = json_String.substring(0, 4);\n                Serial.println(dataStr);\n                if(dataStr == "GET "){\n                    client1.print(html_page);  //Send the response body to the client\n                }         \n                else if(dataStr == "POST"){\n                    json_String = "";\n                    while(client1.available()){\n                        json_String += (char)client1.read();\n                    }\n                    Serial.println(json_String); \n                    dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");\n                    chatgpt_Q = json_String.substring(dataStart, json_String.length());                    \n                    client1.print(html_page);        \n                    // close the connection:\n                    delay(10);\n                    client1.stop();       \n                }\n                json_String = "";\n                break;\n            }\n            if (c == \'\\n\') {\n                // you\'re starting a new line\n                currentLineIsBlank = true;\n            }\n            else if (c != \'\\r\') {\n                // you\'ve gotten a character on the current line\n                currentLineIsBlank = false;\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"In the example program above, we need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"server.begin()")," to start the IoT server. The statement needs to be placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'void setup()\n{\n    Serial.begin(115200);\n \n    // Set WiFi to station mode and disconnect from an AP if it was previously connected\n    WiFi.mode(WIFI_STA);\n    WiFi.disconnect();\n    while(!Serial);\n\n    Serial.println("WiFi Setup done!");\n    WiFiConnect();\n\n    // Start the TCP server server\n    server.begin();\n}\n')),(0,a.kt)("p",null,"Once the above program is run and the IP address of the XIAO ESP32C3 is entered into the browser (provided that your host also needs to be on the same LAN as the XIAO ESP32C3), then the GET step of WiFiClient will start to execute. At this point, with the help of the client-side print method, we submit the HTML code of the page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'if(dataStr == "GET "){\n    client1.print(html_page);\n}\n')),(0,a.kt)("p",null,"And, we design the input box for question input in the page, the web page will get the status of the button and store the input question into the string variable ",(0,a.kt)("inlineCode",{parentName:"p"},"chatgpt_Q")," after the user enters the content and clicks the ",(0,a.kt)("strong",{parentName:"p"},"Submit")," button."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'json_String = "";\nwhile(client1.available()){\n    json_String += (char)client1.read();\n}\nSerial.println(json_String); \ndataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");\nchatgpt_Q = json_String.substring(dataStart, json_String.length());                    \nclient1.print(html_page);        \n// close the connection:\ndelay(10);\nclient1.stop();      \n')),(0,a.kt)("p",null,"The running effect is shown below."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/15.png"})),(0,a.kt)("h2",{id:"submit-questions-via-the-built-in-web-page"},"Submit questions via the built-in web page"),(0,a.kt)("p",null,"In the page in the step above, there is an input box. The input box is where we need the user to enter the question they want to ask. All we need to do is to get this question and send it out through the API request provided by OpenAI."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),". Sign up for an OpenAI account."),(0,a.kt)("p",null,"You can go to OpenAI's registration address by clicking ",(0,a.kt)("a",{parentName:"p",href:"https://beta.openai.com/signup"},"here"),". If you have registered for its account before, then you can skip this step."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"400",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/8.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),". Get the OpenAI API."),(0,a.kt)("p",null,"Login to the ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/overview"},"OpenAI website"),", click your account avatar in the upper right corner, and then select ",(0,a.kt)("strong",{parentName:"p"},"View API keys"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/9.png"})),(0,a.kt)("p",null,"In the new pop-up page select ",(0,a.kt)("strong",{parentName:"p"},"+Create new secret key"),", then copy your key and save it."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/10.png"})),(0,a.kt)("p",null,"In the meantime, we can create string variables in our program and copy this key here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'char chatgpt_token[] = "sk**********Rj9DYiXLJJH";\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"As of February 15, 2023, OpenAI is giving away ",(0,a.kt)("strong",{parentName:"p"},"$18")," worth of credits for free to every new user. The detailed rates can be found in OpenAI's ",(0,a.kt)("a",{parentName:"p",href:"https://openai.com/api/pricing/"},"documentation"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/11.png"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),". Write the program according to the HTTP requests of OpenAI."),(0,a.kt)("p",null,"OpenAI provides very detailed ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/making-requests"},"API usage instructions")," so that users can use their own API key to call ChatGPT."),(0,a.kt)("p",null,"According to the documentation of ChatGPT, the format we need to send the request is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl https://api.openai.com/v1/completions \\\n-H "Content-Type: application/json" \\\n-H "Authorization: Bearer YOUR_API_KEY" \\\n-d \'{"model": "text-davinci-003", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}\'\n')),(0,a.kt)("p",null,"The Hypertext Transfer Protocol (HTTP) works as a request-response protocol between a client and server.\n",(0,a.kt)("strong",{parentName:"p"},"GET")," is used to request data from a specified resource. It is often used to get values from APIs.\n",(0,a.kt)("strong",{parentName:"p"},"POST")," is used to send data to a server to create/update a resource.\nESP32 can make HTTP POST requests using three different types of body requests: URL encoded, JSON object or plain text. These are the most common methods and should integrate with most APIs or web services."),(0,a.kt)("p",null,"The above information is very important and provides the theoretical basis for writing HTTP POST programs. At the beginning, we start by importing the HTTPClient library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <HTTPClient.h>\n")),(0,a.kt)("p",null,"You also need to type OpenAI domain name, so the ESP publishes the question to ChatGPT. And don't forget the OpenAI API key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'HTTPClient https;\n\nconst char* chatgpt_token = "YOUR_API_KEY";\nchar chatgpt_server[] = "https://api.openai.com/v1/completions";\n')),(0,a.kt)("p",null,"We need to make an HTTP POST request using JSON object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'if (https.begin(chatgpt_server)) {  // HTTPS\n    https.addHeader("Content-Type", "application/json"); \n    String token_key = String("Bearer ") + chatgpt_token;\n    https.addHeader("Authorization", token_key);\n    String payload = String("{\\"model\\": \\"text-davinci-003\\", \\"prompt\\": \\"") + chatgpt_Q + String("\\", \\"temperature\\": 0, \\"max_tokens\\": 100}"); //Instead of TEXT as Payload, can be JSON as Paylaod\n    httpCode = https.POST(payload);   // start connection and send HTTP header\n    payload = "";\n}\nelse {\n    Serial.println("[HTTPS] Unable to connect");\n    delay(1000);\n}\n')),(0,a.kt)("p",null,"In the program, we send the ",(0,a.kt)("inlineCode",{parentName:"p"},"payload")," to the server via the ",(0,a.kt)("inlineCode",{parentName:"p"},"POST()")," method. ",(0,a.kt)("inlineCode",{parentName:"p"},"chatgpt_Q")," is the content of the question we want to send to ChatGPT, which will be available in the Get Question page."),(0,a.kt)("p",null,"If you are interested in more features of the ESP32C3 HTTPClient, we recommend you to read ",(0,a.kt)("a",{parentName:"p",href:"https://randomnerdtutorials.com/esp32-http-get-post-arduino/"},"ESP32 HTTP GET and HTTP POST with Arduino IDE"),"."),(0,a.kt)("h2",{id:"get-answers-from-chatgpt"},"Get answers from ChatGPT"),(0,a.kt)("p",null,"The next step is the last step of the whole tutorial, how we get the answer to ChatGPT and record it."),(0,a.kt)("p",null,"Let's continue from reading the ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/making-requests"},"API documentation")," provided by OpenAI to understand how the structure of the message content returned by ChatGPT looks like. This will allow us to write programs to parse the content we need."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "id": "cmpl-GERzeJQ4lvqPk8SkZu4XMIuR",\n    "object": "text_completion",\n    "created": 1586839808,\n    "model": "text-davinci:003",\n    "choices": [\n        {\n            "text": "\\n\\nThis is indeed a test",\n            "index": 0,\n            "logprobs": null,\n            "finish_reason": "length"\n        }\n    ],\n    "usage": {\n        "prompt_tokens": 5,\n        "completion_tokens": 7,\n        "total_tokens": 12\n    }\n}\n')),(0,a.kt)("p",null,"From the reference documentation provided by OpenAI, we know that the location of the answer to the question in the message returned by the interface is in ",(0,a.kt)("inlineCode",{parentName:"p"},'{"choices": [{"text": "\\n\\nxxxxxxx",}]}'),"."),(0,a.kt)("p",null,'So now we can be sure that the "Answer" we need should start with ',(0,a.kt)("strong",{parentName:"p"},"\\n\\n")," and end with ",(0,a.kt)("strong",{parentName:"p"},","),". Then, in the program, we can retrieve the position where the text starts and ends by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"indexOf()")," method, and store the content of the returned answer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'dataStart = payload.indexOf("\\\\n\\\\n") + strlen("\\\\n\\\\n");\ndataEnd = payload.indexOf("\\",\\"", dataStart); \nchatgpt_A = payload.substring(dataStart, dataEnd);\n')),(0,a.kt)("p",null,"In summary, we can use the switch method with the current state of the program to determine which step of the program we should execute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"typedef enum \n{\n  do_webserver_index,\n  send_chatgpt_request,\n  get_chatgpt_list,\n}STATE_;\n\nSTATE_ currentState;\n\nswitch(currentState){\n    case do_webserver_index:\n        ...\n    case send_chatgpt_request:\n        ...\n    case get_chatgpt_list:\n        ...\n}\n")),(0,a.kt)("p",null,"At this point, the entire program's logic is structured. The complete program code can be obtained by clicking the image below. Please don't rush to upload the program, you need to change the ",(0,a.kt)("strong",{parentName:"p"},"ssid, password and chatgpt_token")," of the program to your own."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://github.com/limengdu/xiaoesp32c3-chatgpt",target:"_blank"},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"})))),(0,a.kt)("p",null,"Then, feel free to use it!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/16.gif"})),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("p",null,"In this tutorial, we provide the basic method of calling OpenAI interface using ChatGPT for an embedded development board like Arduino - XIAO ESP32C3. Next, you can let your creativity run wild!"),(0,a.kt)("p",null,"For example, could you consider adding a screen or keyboard to make him a stand-alone display device that works only for you? Come see Gavin's creativity, he made a particularly interesting surveillance device! We also give special thanks to him for providing the necessary steps and ideas for this tutorial."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.hackster.io/gavinchiong/chatgpt-recorder-monitor-601ef6"},"Gavin - ChatGPT Recorder & Monitor"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"600",src:"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/14.jpg"})),(0,a.kt)("p",null,"Or go one step further and add a voice recognition module to get rid of the keyboard and mouse from now on and make a voice assistant of your own, etc. All in all, we'd love to see you share your work with a great product like the XIAO ESP32C3!"),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"q1-is-there-any-limitation-on-the-use-of-geography-or-network-to-get-the-answer-by-calling-the-openai-api-using-xiao-esp32c3"},"Q1: Is there any limitation on the use of geography or network to get the answer by calling the OpenAI API using XIAO ESP32C3?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A: As of February 17, 2023 testing, authors in mainland China and using China's network are also able to get ChatGPT responses very smoothly, with no restrictions for now. As long as we can get the OpenAI API key, the call will be completed smoothly.")),(0,a.kt)("h3",{id:"q2-why-am-i-getting-time-out-errors-returned"},"Q2: Why am I getting Time Out errors returned?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A: This may be because ChatGPT waits too long to reply to a message, which can cause the program to mistakenly think it is not responding.")),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}h.isMDXComponent=!0}}]);