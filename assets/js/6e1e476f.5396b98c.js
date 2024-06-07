"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46521],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,y=g["".concat(o,".").concat(d)]||g[d]||u[d]||a;return n?i.createElement(y,l(l({ref:t},p),{},{components:n})):i.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[g]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(58168),r=(n(96540),n(15680));const a={description:"\u84dd\u7259\u5728Seeed Studio XIAO ESP32C3\u4e0a\u7684\u4f7f\u7528",title:"\u84dd\u7259\u4f7f\u7528",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO_ESP32C3_Bluetooth_Usage",last_update:{date:"10/27/2023",author:"Xin Ping Li"}},l="\u4f7f\u7528 XIAO ESP32C3 \u7684\u84dd\u7259\u529f\u80fd",s={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/CN_XIAO_ESP32C3_Bluetooth_Usage",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/CN_XIAO_ESP32C3_Bluetooth_Usage",title:"\u84dd\u7259\u4f7f\u7528",description:"\u84dd\u7259\u5728Seeed Studio XIAO ESP32C3\u4e0a\u7684\u4f7f\u7528",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/CN_XIAO_ESP32C3_Bluetooth_Usage.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3",slug:"/cn/XIAO_ESP32C3_Bluetooth_Usage",permalink:"/cn/XIAO_ESP32C3_Bluetooth_Usage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/CN_XIAO_ESP32C3_Bluetooth_Usage.md",tags:[],version:"current",lastUpdatedBy:"Xin Ping Li",lastUpdatedAt:1698364800,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{description:"\u84dd\u7259\u5728Seeed Studio XIAO ESP32C3\u4e0a\u7684\u4f7f\u7528",title:"\u84dd\u7259\u4f7f\u7528",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO_ESP32C3_Bluetooth_Usage",last_update:{date:"10/27/2023",author:"Xin Ping Li"}},sidebar:"CNSidebar",previous:{title:"WiFi \u4f7f\u7528",permalink:"/cn/XIAO_ESP32C3_WiFi_Usage"},next:{title:"\u5e94\u7528 Home Assistant \u5b9e\u73b0\u5c4b\u5185\u73af\u5883\u76d1\u6d4b",permalink:"/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/cn/XIAO-ESP32C3-for-ESPHome-Support"}},o={},c=[{value:"\u786c\u4ef6\u8bbe\u7f6e",id:"\u786c\u4ef6\u8bbe\u7f6e",level:2},{value:"\u626b\u63cf\u84dd\u7259\u8bbe\u5907",id:"\u626b\u63cf\u84dd\u7259\u8bbe\u5907",level:2},{value:"ESP32C3\u4f5c\u4e3a\u84dd\u7259\u670d\u52a1\u5668",id:"esp32c3\u4f5c\u4e3a\u84dd\u7259\u670d\u52a1\u5668",level:2},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],p={toc:c},g="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u4f7f\u7528-xiao-esp32c3-\u7684\u84dd\u7259\u529f\u80fd"},"\u4f7f\u7528 XIAO ESP32C3 \u7684\u84dd\u7259\u529f\u80fd"),(0,r.yg)("p",null,"ESP32C3\u652f\u6301\u84dd\u72595 (LE)\u8fde\u63a5\u3002\u672cwiki\u5c06\u4ecb\u7ecd\u5728\u6b64\u677f\u4e0a\u4f7f\u7528\u84dd\u7259\u7684\u57fa\u7840\u77e5\u8bc6\u3002"),(0,r.yg)("h2",{id:"\u786c\u4ef6\u8bbe\u7f6e"},"\u786c\u4ef6\u8bbe\u7f6e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u5c06\u9644\u5e26\u7684",(0,r.yg)("strong",{parentName:"li"},"WiFi/\u84dd\u7259\u5929\u7ebf"),"\u8fde\u63a5\u5230\u7535\u8def\u677f\u4e0a\u7684",(0,r.yg)("strong",{parentName:"li"},"IPEX\u8fde\u63a5\u5668"))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png",alt:"pir",width:130,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 2.")," \u901a\u8fc7USB Type-C\u6570\u636e\u7ebf\u5c06XIAO ESP32C3\u8fde\u63a5\u5230\u60a8\u7684\u8ba1\u7b97\u673a")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png",alt:"pir",width:120,height:"auto"})),(0,r.yg)("h2",{id:"\u626b\u63cf\u84dd\u7259\u8bbe\u5907"},"\u626b\u63cf\u84dd\u7259\u8bbe\u5907"),(0,r.yg)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528XIAO ESP32C3\u626b\u63cf\u5b83\u5468\u56f4\u53ef\u7528\u7684\u84dd\u7259\u8bbe\u5907\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u5c06\u4e0b\u9762\u7684\u4ee3\u7801\u590d\u5236\u7c98\u8d34\u5230Arduino IDE\u4e2d")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <BLEDevice.h>\n#include <BLEUtils.h>\n#include <BLEScan.h>\n#include <BLEAdvertisedDevice.h>\n\nint scanTime = 5; //In seconds\nBLEScan* pBLEScan;\n\nclass MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {\n    void onResult(BLEAdvertisedDevice advertisedDevice) {\n      Serial.printf("Advertised Device: %s \\n", advertisedDevice.toString().c_str());\n    }\n};\n\nvoid setup() {\n  Serial.begin(115200);\n  Serial.println("Scanning...");\n\n  BLEDevice::init("");\n  pBLEScan = BLEDevice::getScan(); //create new scan\n  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());\n  pBLEScan->setActiveScan(true); //active scan uses more power, but get results faster\n  pBLEScan->setInterval(100);\n  pBLEScan->setWindow(99);  // less or equal setInterval value\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n  BLEScanResults foundDevices = pBLEScan->start(scanTime, false);\n  Serial.print("Devices found: ");\n  Serial.println(foundDevices.getCount());\n  Serial.println("Scan done!");\n  pBLEScan->clearResults();   // delete results fromBLEScan buffer to release memory\n  delay(2000);\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u4e0a\u4f20\u4ee3\u7801\u5e76\u6253\u5f00\u4e32\u884c\u76d1\u89c6\u5668\u5f00\u59cb\u626b\u63cf\u84dd\u7259\u8bbe\u5907"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-1.jpg",alt:"pir",width:1e3,height:"auto"})),(0,r.yg)("h2",{id:"esp32c3\u4f5c\u4e3a\u84dd\u7259\u670d\u52a1\u5668"},"ESP32C3\u4f5c\u4e3a\u84dd\u7259\u670d\u52a1\u5668"),(0,r.yg)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528XIAO ESP32C3\u4f5c\u4e3a\u84dd\u7259\u670d\u52a1\u5668\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u667a\u80fd\u624b\u673a\u641c\u7d22XIAO ESP32C3\u677f\uff0c\u5e76\u53d1\u9001\u5b57\u7b26\u4e32\u4ee5\u663e\u793a\u5728\u4e32\u884c\u76d1\u89c6\u5668\u4e0a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4  1.")," \u5c06\u4e0b\u9762\u7684\u4ee3\u7801\u590d\u5236\u7c98\u8d34\u5230Arduino IDE\u4e2d")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <BLEDevice.h>\n#include <BLEUtils.h>\n#include <BLEServer.h>\n\n// See the following for generating UUIDs:\n// https://www.uuidgenerator.net/\n\n#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"\n#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"\n\n\nclass MyCallbacks: public BLECharacteristicCallbacks {\n    void onWrite(BLECharacteristic *pCharacteristic) {\n      std::string value = pCharacteristic->getValue();\n\n      if (value.length() > 0) {\n        Serial.println("*********");\n        Serial.print("New value: ");\n        for (int i = 0; i < value.length(); i++)\n          Serial.print(value[i]);\n\n        Serial.println();\n        Serial.println("*********");\n      }\n    }\n};\n\nvoid setup() {\n  Serial.begin(115200);\n\n  BLEDevice::init("MyESP32");\n  BLEServer *pServer = BLEDevice::createServer();\n\n  BLEService *pService = pServer->createService(SERVICE_UUID);\n\n  BLECharacteristic *pCharacteristic = pService->createCharacteristic(\n                                         CHARACTERISTIC_UUID,\n                                         BLECharacteristic::PROPERTY_READ |\n                                         BLECharacteristic::PROPERTY_WRITE\n                                       );\n\n  pCharacteristic->setCallbacks(new MyCallbacks());\n\n  pCharacteristic->setValue("Hello World");\n  pService->start();\n\n  BLEAdvertising *pAdvertising = pServer->getAdvertising();\n  pAdvertising->start();\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n  delay(2000);\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2."),"\u4e0a\u4f20\u4ee3\u7801\u5e76\u6253\u5f00\u4e32\u884c\u76d1\u89c6\u5668")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3.")," \u5728\u60a8\u7684\u667a\u80fd\u624b\u673a\u4e0a\u4e0b\u8f7d\u5e76\u5b89\u88c5LightBlue App"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.punchthrough.lightblueexplorer&hl=en_US&gl=US"},"LightBlue App (Android)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://apps.apple.com/us/app/lightblue/id557428110"},"LightBlue App (Apple)"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 4.")," \u6253\u5f00\u624b\u673a\u4e0a\u7684\u84dd\u7259\uff0c\u5c06\u624b\u673a\u9760\u8fd1XIAO ESP32C3\uff0c\u626b\u63cf\u8bbe\u5907\u5e76\u8fde\u63a5",(0,r.yg)("strong",{parentName:"li"},"MyESP32"),"\u8bbe\u5907")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-2.jpg",alt:"pir",width:300,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 5.")," \u6253\u5f00LightBlue\u5e94\u7528\u7a0b\u5e8f\uff0c\u70b9\u51fb",(0,r.yg)("strong",{parentName:"li"},"Bonded"),"\u6807\u7b7e")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-3.jpg",alt:"pir",width:350,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 6.")," \u70b9\u51fb",(0,r.yg)("strong",{parentName:"li"},"MyESP32"),"\u65c1\u8fb9\u7684",(0,r.yg)("strong",{parentName:"li"},"CONNECT"))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-4.jpg",alt:"pir",width:350,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 7.")," \u70b9\u51fb\u6700\u5e95\u90e8\u8bf4",(0,r.yg)("strong",{parentName:"li"},"\u53ef\u8bfb\uff0c\u53ef\u5199"),"\u7684\u90e8\u5206")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-5.jpg",alt:"pir",width:300,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 8.")," \u5728",(0,r.yg)("strong",{parentName:"li"},"\u6570\u636e\u683c\u5f0f"),"\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9",(0,r.yg)("strong",{parentName:"li"},"UTF-8\u5b57\u7b26\u4e32"))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-6.jpg",alt:"pir",width:300,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4  9.")," ",(0,r.yg)("strong",{parentName:"li"},"WRITE"),"\n57/5000\n\u7ffb\u8bd1")),(0,r.yg)("p",null,"\u5728",(0,r.yg)("strong",{parentName:"p"},"WRITTEN VALUES"),"\u4e0b\u952e\u5165\u201cHello\u201d\uff0c\u7136\u540e\u70b9\u51fb",(0,r.yg)("strong",{parentName:"p"},"WRITE")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-7.jpg",alt:"pir",width:300,height:"auto"})),(0,r.yg)("p",null,"\u60a8\u5c06\u5728Arduino IDE\u7684\u4e32\u884c\u76d1\u89c6\u5668\u4e0a\u770b\u5230\u6587\u672c\u5b57\u7b26\u4e32\u201cHello\u201d\u8f93\u51fa"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-9.jpg",alt:"pir",width:500,height:"auto"})),(0,r.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,r.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1!\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u559c\u597d\u548c\u9700\u6c42\u3002"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);