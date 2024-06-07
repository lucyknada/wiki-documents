"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78011],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>g});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},S="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),S=c(r),u=i,g=S["".concat(s,".").concat(u)]||S[u]||d[u]||o;return r?t.createElement(g,a(a({ref:n},p),{},{components:r})):t.createElement(g,a({ref:n},p))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[S]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},70547:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(58168),i=(r(96540),r(15680));const o={description:"MicroSD",title:"MicroSD",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_RP2040_MicroSD",last_update:{date:"3/4/2024",author:"DuKaiyin"}},a="**MicroSD**",l={unversionedId:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/cn-Micro_SD",id:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/cn-Micro_SD",title:"MicroSD",description:"MicroSD",source:"@site/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/cn-Micro_SD.md",sourceDirName:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040",slug:"/cn/SenseCAP_Indicator_RP2040_MicroSD",permalink:"/cn/SenseCAP_Indicator_RP2040_MicroSD",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/cn-Micro_SD.md",tags:[],version:"current",lastUpdatedBy:"DuKaiyin",lastUpdatedAt:1709510400,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{description:"MicroSD",title:"MicroSD",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_RP2040_MicroSD",last_update:{date:"3/4/2024",author:"DuKaiyin"}}},s={},c=[{value:"<strong>\u793a\u4f8b\u4ee3\u7801</strong>",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],p={toc:c},S="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(S,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"microsd"},(0,i.yg)("strong",{parentName:"h1"},"MicroSD")),(0,i.yg)("p",null,"RP2040\u6709\u4e00\u7ec4GPIO\u5f15\u811a\uff0c\u53ef\u7528\u4e8e\u4e0e\u5916\u90e8MicroSD\u5361\u6a21\u5757\u8fdb\u884c\u63a5\u53e3\u3002"),(0,i.yg)("p",null,"\u8981\u4f7f\u7528MicroSD\u5361\u4e0eRP2040\uff0c\u6211\u4eec\u4f7f\u7528SPI\uff08\u4e32\u884c\u5916\u8bbe\u63a5\u53e3\uff09\u534f\u8bae\u5c06SD\u5361\u6a21\u5757\u8fde\u63a5\u5230\u5fae\u63a7\u5236\u5668\u7684GPIO\u5f15\u811a\u3002\u8fd9\u6d89\u53ca\u5c06RP2040\u4e0a\u7684\u4ee5\u4e0b\u5f15\u811a\u8fde\u63a5\u5230MicroSD\u5361\u6a21\u5757\u4e0a\u7684\u76f8\u5e94\u5f15\u811a\uff1a"),(0,i.yg)("p",null,"SPI SCK\uff08\u4f8b\u5982GPIO10\uff09\u8fde\u63a5\u5230SD_SCK"),(0,i.yg)("p",null,"SPI TX\uff08\u4f8b\u5982GPIO11\uff09\u8fde\u63a5\u5230SD_MOSI"),(0,i.yg)("p",null,"SPI RX\uff08\u4f8b\u5982GPIO12\uff09\u8fde\u63a5\u5230SD_MISO"),(0,i.yg)("p",null,"\u4e00\u4e2aGPIO\u5f15\u811a\uff08\u4f8b\u5982GPIO13\uff09\u8fde\u63a5\u5230SD\u5361\u6a21\u5757\u4e0a\u7684CS\uff08\u82af\u7247\u9009\u62e9\uff09\u5f15\u811a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"}," // Initialize the SPI interface for the SD card\n  const int chipSelect = 13;\n  SPI1.setSCK(10);\n  SPI1.setTX(11);\n  SPI1.setRX(12);\n")),(0,i.yg)("p",null,"\u786c\u4ef6\u8fde\u63a5\u5efa\u7acb\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u8f6f\u4ef6\u5e93\uff08\u4f8b\u5982Arduino\u7684SD\u5e93\uff09\u4eceMicroSD\u5361\u8bfb\u53d6\u548c\u5199\u5165\u6570\u636e\u3002SD\u5e93\u63d0\u4f9b\u4e86\u521d\u59cb\u5316SD\u5361\u3001\u6253\u5f00\u548c\u5173\u95ed\u6587\u4ef6\u3001\u8bfb\u53d6\u548c\u5199\u5165\u6587\u4ef6\u6570\u636e\u4ee5\u53ca\u6267\u884c\u5176\u4ed6\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c\u7684\u529f\u80fd\u3002"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6ce8\u610f"),": RP2040\u4e0aMicroSD\u5361\u63a5\u53e3\u7684\u6027\u80fd\u5c06\u53d6\u51b3\u4e8e\u8bf8\u5982SD\u5361\u901f\u5ea6\u3001\u8fde\u7ebf\u8d28\u91cf\u548c\u8f6f\u4ef6\u6548\u7387\u7b49\u56e0\u7d20\uff0c\u652f\u6301\u7684\u6700\u5927SD\u5361\u5bb9\u91cf\u4e3a32GB\u3002"),(0,i.yg)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},(0,i.yg)("strong",{parentName:"h2"},"\u793a\u4f8b\u4ee3\u7801")),(0,i.yg)("p",null,"\u6b64\u793a\u4f8b\u4ee3\u7801\u5b9e\u73b0\u4e86\u8bfb\u53d6CO2\u6570\u636e\u5e76\u5c06\u6570\u636e\u5b58\u50a8\u5728SD\u5361\u4e2d\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <Wire.h>\n#include <SPI.h>\n#include <SD.h>\n#include <SensirionI2CScd4x.h>\n\n\nSensirionI2CScd4x scd4x;\n//Initialize a string to store data for writing to the SD card\nString SDDataString = "";\n\nvoid sensor_power_on(void) {\n  pinMode(18, OUTPUT);\n  digitalWrite(18, HIGH);\n}\n// Function to power on the sensor\nvoid sensor_scd4x_init(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  scd4x.begin(Wire);\n\n  // stop potentially previously started measurement\n  error = scd4x.stopPeriodicMeasurement();\n  if (error) {\n    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  }\n\n  // Start Measurement\n  error = scd4x.startPeriodicMeasurement();\n  if (error) {\n    Serial.print("Error trying to execute startPeriodicMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  }\n}\n\nvoid sensor_scd4x_get(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  Serial.print("sensor scd4x: ");\n  // Read Measurement\n  uint16_t co2;\n  float temperature;\n  float humidity;\n  error = scd4x.readMeasurement(co2, temperature, humidity);\n  if (error) {\n    Serial.print("Error trying to execute readMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  } else if (co2 == 0) {\n    Serial.println("Invalid sample detected, skipping.");\n  } else {\n    Serial.print("Co2:");\n    Serial.print(co2);\n    Serial.print("\\t");\n    Serial.print("Temperature:");\n    Serial.print(temperature);\n    Serial.print("\\t");\n    Serial.print("Humidity:");\n    Serial.println(humidity);\n  }\n  // Add data to the SD data string\n  SDDataString += "scd4x,";\n  if (error) {\n    SDDataString += "-,-,-,";\n  } else {\n    SDDataString += String(co2);\n    SDDataString += \',\';\n    SDDataString += String(temperature);\n    SDDataString += \',\';\n    SDDataString += String(humidity);\n    SDDataString += \',\';\n  }\n}\n\n\n\nint cnt = 0;\nvoid setup() {\n  Serial.begin(115200);\n\n  sensor_power_on();\n  Wire.setSDA(20);\n  Wire.setSCL(21);\n  Wire.begin();\n // Initialize the SPI interface for the SD card\n  const int chipSelect = 13;\n  SPI1.setSCK(10);\n  SPI1.setTX(11);\n  SPI1.setRX(12);\n// Check if the SD card is initialized\n  if (!SD.begin(chipSelect, 1000000, SPI1)) {\n    Serial.println("Card failed, or not present");\n  } else {\n    Serial.println("card initialized.");\n  }\n\n  sensor_scd4x_init();\n}\n\nvoid loop() {\n\n  delay(5000);\n  // Clear the SD data string and print a message to the serial monitor\n  SDDataString = "";\n  Serial.printf("\\r\\n\\r\\n--------- start measure %d-------\\r\\n", cnt);\n\n  SDDataString += String(cnt);\n  SDDataString += \',\';\n\n  cnt++;\n  sensor_scd4x_get();\n  // Open the datalog.csv file for writing\n  File dataFile = SD.open("datalog.csv", FILE_WRITE);\n  // if the file is available, write to it:\n  if (dataFile) {\n    dataFile.println(SDDataString);\n    dataFile.close();\n    // print to the serial port too:\n    Serial.print("sd write: ");\n    Serial.println(SDDataString);\n  } else {\n    Serial.println("error opening datalog.txt");\n  }\n\n}\n\n\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u6b64\u5185\u7f6eSCD41\u4f20\u611f\u5668\u4e2d\u7684\u6e29\u5ea6\u548c\u6e7f\u5ea6\u5e76\u4e0d\u80fd\u5b8c\u5168\u4ee3\u8868\u7a7a\u6c14\u7684\u6e29\u5ea6\u548c\u6e7f\u5ea6\u3002"),(0,i.yg)("p",null," ",(0,i.yg)("strong",{parentName:"p"},"\u6280\u672f\u652f\u6301")),(0,i.yg)("p",null,"   \u522b\u62c5\u5fc3\uff0c\u6211\u4eec\u4e3a\u60a8\u63d0\u4f9b\u4e86\u652f\u6301\uff01\u8bf7\u8bbf\u95ee\u6211\u4eec\u7684",(0,i.yg)("a",{parentName:"p",href:"https://discord.com/invite/QqMgVwHT3X"},"Seeed\u5b98\u65b9Discord\u9891\u9053"),"\u63d0\u51fa\u60a8\u7684\u95ee\u9898\uff01"),(0,i.yg)("p",null,"\u5982\u679c\u60a8\u6709\u5927\u91cf\u8ba2\u5355\u6216\u5b9a\u5236\u9700\u6c42\uff0c\u8bf7\u8054\u7cfb ",(0,i.yg)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}d.isMDXComponent=!0}}]);