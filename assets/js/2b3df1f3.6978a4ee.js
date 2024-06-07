"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95472],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),g=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=g(a),y=r,d=m["".concat(p,".").concat(y)]||m[y]||u[y]||i;return a?n.createElement(d,o(o({ref:t},s),{},{components:a})):n.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var g=2;g<i;g++)o[g]=a[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},97039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const i={description:"Develop in Microsoft Azure IoT Central",title:"Develop in Microsoft Azure IoT Central",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Develop-in-Microsoft-Azure-IoT-Central",last_update:{date:"1/13/2023",author:"shuxu hu"}},o="Develop in Microsoft Azure IoT Central",l={unversionedId:"Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/Develop-in-Microsoft-Azure-IoT-Central",id:"Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/Develop-in-Microsoft-Azure-IoT-Central",title:"Develop in Microsoft Azure IoT Central",description:"Develop in Microsoft Azure IoT Central",source:"@site/docs/Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/Develop-in-Microsoft-Azure-IoT-Central.md",sourceDirName:"Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage",slug:"/Develop-in-Microsoft-Azure-IoT-Central",permalink:"/Develop-in-Microsoft-Azure-IoT-Central",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/Develop-in-Microsoft-Azure-IoT-Central.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Develop in Microsoft Azure IoT Central",title:"Develop in Microsoft Azure IoT Central",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Develop-in-Microsoft-Azure-IoT-Central",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with Microsoft Azure IoT Central",permalink:"/Connect-Wio-Terminal-to-Azure-IoT-Central"},next:{title:"Data visualisation with Power BI",permalink:"/K1100_Azure_to_PowerBI"}},p={},g=[{value:"Add a Rule to Send an Email",id:"add-a-rule-to-send-an-email",level:3},{value:"Control Hardware from Microsoft Azure IoT Central",id:"control-hardware-from-microsoft-azure-iot-central",level:3},{value:"How to Add Other Sensors?",id:"how-to-add-other-sensors",level:2},{value:"Microsoft Visual Studio Code Set Up",id:"microsoft-visual-studio-code-set-up",level:3},{value:"Download, Install and Configure Visual Studio Code",id:"download-install-and-configure-visual-studio-code",level:4},{value:"Code for the Demo on Visual Studio Code",id:"code-for-the-demo-on-visual-studio-code",level:4},{value:"Microsoft Azure IoT Central Set Up",id:"microsoft-azure-iot-central-set-up",level:3},{value:"Creating a New Device Template",id:"creating-a-new-device-template",level:4},{value:"Importing a Custom Device Model",id:"importing-a-custom-device-model",level:4},{value:"Wio Terminal Set Up",id:"wio-terminal-set-up",level:3},{value:"Hardware Set Up",id:"hardware-set-up",level:4},{value:"Software Set Up",id:"software-set-up",level:4},{value:"Upload Code to Wio Terminal",id:"upload-code-to-wio-terminal",level:5},{value:"Wi-Fi and Azure IoT Configuration",id:"wi-fi-and-azure-iot-configuration",level:5},{value:"Visualize on Azure IoT Central",id:"visualize-on-azure-iot-central",level:3}],s={toc:g},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"develop-in-microsoft-azure-iot-central"},"Develop in Microsoft Azure IoT Central"),(0,r.yg)("h3",{id:"add-a-rule-to-send-an-email"},"Add a Rule to Send an Email"),(0,r.yg)("p",null,"Rules in IoT Central serve as a customizable response tool that trigger on actively monitored events from connected devices.\nFor example, in this demo, we can set IoT Central to send an email when the light intensity level is below 50."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 1:")," Click on ",(0,r.yg)("strong",{parentName:"p"},"Rules")," from the left navigation menu in Azure IoT Central.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 2:")," Click on ",(0,r.yg)("strong",{parentName:"p"},"+New")," or ",(0,r.yg)("strong",{parentName:"p"},"Create a rule"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 3:")," Enter a name for the rule ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 4:")," Under ",(0,r.yg)("strong",{parentName:"p"},"Device template"),", select ",(0,r.yg)("strong",{parentName:"p"},"Seeed Wio Terminal")))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/rule_1.png",alt:"pir",width:830,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 5:")," Under ",(0,r.yg)("strong",{parentName:"li"},"Conditions"),", turn on ",(0,r.yg)("strong",{parentName:"li"},"time aggregation")," and select a ",(0,r.yg)("strong",{parentName:"li"},"time window")," of your choosing. Here we will set it as ",(0,r.yg)("strong",{parentName:"li"},"5 minutes"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," Every ",(0,r.yg)("strong",{parentName:"p"},"xx")," minutes, the rule evaluates once on the last ",(0,r.yg)("strong",{parentName:"p"},"xx")," minutes of data"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 6:")," Under ",(0,r.yg)("strong",{parentName:"p"},"Telemetry"),", select the telemetry of your chossing. Here we will set it as ",(0,r.yg)("strong",{parentName:"p"},"Light intensity"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 7:")," Under ",(0,r.yg)("strong",{parentName:"p"},"Aggregation"),", select ",(0,r.yg)("strong",{parentName:"p"},"Average"),". This will take the average value during the set ",(0,r.yg)("strong",{parentName:"p"},"time window")," before")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 8:")," Under ",(0,r.yg)("strong",{parentName:"p"},"Operator"),", select a condition of your choosing. Here we will use ",(0,r.yg)("strong",{parentName:"p"},"is less than")," condition")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 9:")," Under ",(0,r.yg)("strong",{parentName:"p"},"Value"),", type a value. Here we will type ",(0,r.yg)("strong",{parentName:"p"},"50")))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/conditions_1.png",alt:"pir",width:1200,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 10:")," Under ",(0,r.yg)("strong",{parentName:"p"},"Actions"),", click on ",(0,r.yg)("strong",{parentName:"p"},"Email"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 11:")," Type a ",(0,r.yg)("strong",{parentName:"p"},"Display name"),", ",(0,r.yg)("strong",{parentName:"p"},"To address")," and ",(0,r.yg)("strong",{parentName:"p"},"Note")," for the email "))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/email_3.png",alt:"pir",width:1200,height:"auto"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," Please note that the ",(0,r.yg)("strong",{parentName:"p"},"email address")," here should be added to this ",(0,r.yg)("strong",{parentName:"p"},"Azure IoT Central Application")," and also have signed-in at lease once."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Navigate to ",(0,r.yg)("inlineCode",{parentName:"li"},"Administration > Users")," ,click ",(0,r.yg)("strong",{parentName:"li"},"Assign user"),", fill in the ",(0,r.yg)("strong",{parentName:"li"},"Email"),", assign a ",(0,r.yg)("strong",{parentName:"li"},"Role")," and click ",(0,r.yg)("strong",{parentName:"li"},"Save"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/assign_user.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 12:")," Click on ",(0,r.yg)("strong",{parentName:"p"},"Done"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 13:")," Finally, click ",(0,r.yg)("strong",{parentName:"p"},"Save")))),(0,r.yg)("p",null,"Now we have successfully created a rule to send an email"),(0,r.yg)("h3",{id:"control-hardware-from-microsoft-azure-iot-central"},"Control Hardware from Microsoft Azure IoT Central"),(0,r.yg)("p",null,"You can not only view the telemetry data on Azure IoT Central, but also use it to control hardware as well. In this demo, we will be able to control the built-in buzzer on the Wio Terminal and specify a time duration in which the buzzer will beep"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 1:")," Click on the ",(0,r.yg)("strong",{parentName:"p"},"Command")," tab")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 2:")," Enter a ",(0,r.yg)("strong",{parentName:"p"},"value")," inside the column under ",(0,r.yg)("strong",{parentName:"p"},"Duration")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," values are in milliseconds unit. ex: 1000 = 1000ms = 1s"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 3:")," When you click ",(0,r.yg)("strong",{parentName:"li"},"Run"),", you will be able to hear a beeping sound from the buzzer for the time duration specified above")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png",alt:"pir",width:500,height:"auto"})),(0,r.yg)("h2",{id:"how-to-add-other-sensors"},"How to Add Other Sensors?"),(0,r.yg)("p",null,"You can add any sensor to the Wio Terminal and send telemetry data from the connected sensor to Azure IoT Central. We will connect a ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html"},"Grove - Temperature & Humidity Sensor (DHT11)")," to the Wio Terminal and send temperature and humidity data to Azure IoT Central to visualize on dashboards!"),(0,r.yg)("h3",{id:"microsoft-visual-studio-code-set-up"},"Microsoft Visual Studio Code Set Up"),(0,r.yg)("h4",{id:"download-install-and-configure-visual-studio-code"},"Download, Install and Configure Visual Studio Code"),(0,r.yg)("p",null,"If we want to add more sensors to the Wio Terminal in order to send telemetry data to Azure IoT Central, we cannot easily use the .uf2 file as we did before. Because the codes are already compiled inside that .uf2 file. So, if we want to add more codes to the demo, we need to use an IDE called Microsoft Visual Studio Code, add the necessary codes and finally upload them to the Wio Terminal. "),(0,r.yg)("p",null,"So now, let's move on to installing Microsoft Visual Studio Code on the computer"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 1:")," Visit code.visualstudio.com and click ",(0,r.yg)("strong",{parentName:"li"},"Download"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," Choose the installer according to your operating system"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 2:")," Go through the installation wizard and complete the installation")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 3:")," Open Visual Studio Code")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 4:")," Click on ",(0,r.yg)("strong",{parentName:"p"},"Extensions")," from the left navigation menu and type ",(0,r.yg)("strong",{parentName:"p"},"platformIO")," in the search box"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio.png",alt:"pir",width:380,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 5:")," Click ",(0,r.yg)("strong",{parentName:"li"},"install")," ")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_install.png",alt:"pir",width:550,height:"auto"})),(0,r.yg)("h4",{id:"code-for-the-demo-on-visual-studio-code"},"Code for the Demo on Visual Studio Code"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 1:")," Visit ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeeedJP/wioterminal-aziot-example/releases"},"this link")," to find the available releases inside the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeeedJP/wioterminal-aziot-example"},"SeeedJP/wioterminal-aziot-example repo"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 2:")," Navigate to the ",(0,r.yg)("strong",{parentName:"p"},"Latest release")," and under ",(0,r.yg)("strong",{parentName:"p"},"Assets"),", click on ",(0,r.yg)("strong",{parentName:"p"},"Source code (zip)"),". This will download the source code as a .zip file")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 3:")," Extract the ",(0,r.yg)("strong",{parentName:"p"},".zip file")," ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 4:")," Go back to Visual Studio Code and navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"File > Open Folder..."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 5:")," Choose the folder that we extracted before and click ",(0,r.yg)("strong",{parentName:"p"},"Select Folder"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 6:")," Navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"wioterminal-aziot-example-0.10 > include > config.h")," from the left navigation menu")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 7:")," Once ",(0,r.yg)("strong",{parentName:"p"},"config.h")," is open, look for ",(0,r.yg)("strong",{parentName:"p"},'"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"')," and change it to ",(0,r.yg)("strong",{parentName:"p"},'"dtmi:local:wioterminal_aziot_example;5"')))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," ",(0,r.yg)("strong",{parentName:"p"},"dtmi:local:wioterminal_aziot_example;5")," is the Model ID "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 8:")," Navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"wioterminal-aziot-example-0.10 > seeedkk-wioterminal-wioterminal_aziot_example.json")," from the left navigation menu")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 9:")," Once ",(0,r.yg)("strong",{parentName:"p"},"seeedkk-wioterminal-wioterminal_aziot_example.json")," is open, look for ",(0,r.yg)("strong",{parentName:"p"},'"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"')," and change it to ",(0,r.yg)("strong",{parentName:"p"},'"dtmi:local:wioterminal_aziot_example;5"')," as well"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," ",(0,r.yg)("strong",{parentName:"p"},"seeedkk-wioterminal-wioterminal_aziot_example.json")," is the DTDL model that we have mentioned before"),(0,r.yg)("p",null,"Currently the model is defined for ",(0,r.yg)("strong",{parentName:"p"},"acceleration, light intensity and button count")," data. We will go ahead to add ",(0,r.yg)("strong",{parentName:"p"},"temperature and humidity")," to this DTDL model. "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 10:")," Add the following codes below ",(0,r.yg)("strong",{parentName:"li"},'"contents": ['),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'  "contents": [\n    {\n      "@type": [\n        "Telemetry",\n        "Temperature"\n      ],\n      "name": "temp",\n      "unit": "degreeCelsius",\n      "displayName": {\n        "en": "Temperature (C)",\n        "ja": "\u6e29\u5ea6"\n      },\n      "schema": "integer"\n    },\n    {\n      "@type": "Telemetry",\n      "name": "humi",\n      "displayName": {\n        "en": "Humidity (%RH)",\n        "ja": "\u6e7f\u5ea6"\n      },\n      "schema": "integer"\n    },\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," Here, ",(0,r.yg)("strong",{parentName:"p"},"name")," is what we will use to identify specific telemetry data later in the codes, ",(0,r.yg)("strong",{parentName:"p"},"unit")," is the unit corresponding to the data, ",(0,r.yg)("strong",{parentName:"p"},"displayName"),' is the name which displays on Azure IoT Central ("en" for English/ "ja" for Japanese) and ',(0,r.yg)("strong",{parentName:"p"},"schema")," is the data type"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 11:")," Navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"wioterminal-aziot-example-0.10 > platformio.ini")," from the left navigation menu")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 12:")," Once ",(0,r.yg)("strong",{parentName:"p"},"platformio.ini")," is open, under ",(0,r.yg)("strong",{parentName:"p"},"lib_deps"),", add ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor"},"https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor"))))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"lib_deps = \n    https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," This is the library for Grove - Temperature and Humidity Sensor (DHT11)"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 13:")," Navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"wioterminal-aziot-example-0.10 > src > main.cpp")," from the left navigation menu")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 14:")," Once ",(0,r.yg)("strong",{parentName:"p"},"main.cpp")," is open, add the DHT11 library after the line ",(0,r.yg)("strong",{parentName:"p"},'#include "CliMode.h"')))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "CliMode.h"\n#include "DHT.h"\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 15:")," Add the DHT11 definitions and the initializations after the line\n",(0,r.yg)("strong",{parentName:"li"},"LIS3DHTR  AccelSensor;"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"LIS3DHTR<TwoWire> AccelSensor;\n\n#define DHTPIN 0 //Define signal pin of DHT sensor \n// #define DHTPIN PIN_WIRE_SCL //Use I2C port as Digital Port */\n#define DHTTYPE DHT11 //Define DHT sensor type \nDHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," The DHT11 sensor can be connected to both the Grove Ports on the Wio Terminal. If ",(0,r.yg)("strong",{parentName:"p"},"Digital Port")," is used, pin can be defined as ",(0,r.yg)("strong",{parentName:"p"},"0")," and if ",(0,r.yg)("strong",{parentName:"p"},"I2C port")," is used, pin can be defined as ",(0,r.yg)("strong",{parentName:"p"},"PIN_WIRE_SCL"),". The port diagram will be shown later in this document"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 16:")," Add the following codes under the ",(0,r.yg)("strong",{parentName:"li"},"SendTelemetry()")," function to parse the json file along with the telemetry data")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'static az_result SendTelemetry()\n{\n    float accelX;\n    float accelY;\n    float accelZ;\n    AccelSensor.getAcceleration(&accelX, &accelY, &accelZ);\n\n    int light;\n    light = analogRead(WIO_LIGHT) * 100 / 1023;\n\n    int temp; //assign variable to store temperature\n    int humi; //assign variable to store humidity\n    temp = dht.readTemperature(); //read temperature\n    humi = dht.readHumidity(); //read humidity\n\n    char telemetry_topic[128];\n    if (az_result_failed(az_iot_hub_client_telemetry_get_publish_topic(&HubClient, NULL, telemetry_topic, sizeof(telemetry_topic), NULL)))\n    {\n        Log("Failed az_iot_hub_client_telemetry_get_publish_topic" DLM);\n        return AZ_ERROR_NOT_SUPPORTED;\n    }\n\n    az_json_writer json_builder;\n    char telemetry_payload[200];\n    AZ_RETURN_IF_FAILED(az_json_writer_init(&json_builder, AZ_SPAN_FROM_BUFFER(telemetry_payload), NULL));\n    AZ_RETURN_IF_FAILED(az_json_writer_append_begin_object(&json_builder));\n    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("temp")));\n    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, temp));\n    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("humi")));\n    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, humi));\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 17:")," Add the following codes after the line ",(0,r.yg)("strong",{parentName:"li"},"ntp.begin"),", in order to start the DHT11 sensor")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"dht.begin(); //start DHT sensor\n")),(0,r.yg)("p",null,"Now we have completed all the codes for this demo. "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 18:")," Click ",(0,r.yg)("strong",{parentName:"li"},"PlatformIO icon")," from the left navigation menu and click ",(0,r.yg)("strong",{parentName:"li"},"Build"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_build.png",alt:"pir",width:400,height:"auto"})),(0,r.yg)("p",null,"If you see the following message, you have successfully compiled the code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"================================== [SUCCESS] Took 30.56 seconds ==================================\n")),(0,r.yg)("h3",{id:"microsoft-azure-iot-central-set-up"},"Microsoft Azure IoT Central Set Up"),(0,r.yg)("p",null,"Now we need to create a custom device template so that the data from the Wio Terminal can be visualized on Azure IoT Central Dashboard"),(0,r.yg)("h4",{id:"creating-a-new-device-template"},"Creating a New Device Template"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 1:")," Visit Azure IoT Central and click ",(0,r.yg)("inlineCode",{parentName:"p"},"Device templates")," from the left navigation menu")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 2:")," Click ",(0,r.yg)("strong",{parentName:"p"},"+ New"),", click ",(0,r.yg)("strong",{parentName:"p"},"IoT device")," and click ",(0,r.yg)("strong",{parentName:"p"},"Next:Customize"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 3:")," Type a name inside ",(0,r.yg)("strong",{parentName:"p"},"Device template name")," box and click ",(0,r.yg)("strong",{parentName:"p"},"Next:Review"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 4:")," Click ",(0,r.yg)("strong",{parentName:"p"},"Create")))),(0,r.yg)("h4",{id:"importing-a-custom-device-model"},"Importing a Custom Device Model"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 1:")," Click ",(0,r.yg)("strong",{parentName:"p"},"Import a model"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 2:")," Navigate to the ",(0,r.yg)("strong",{parentName:"p"},"wioterminal-aziot-example-0.10")," folder that we used before, find ",(0,r.yg)("strong",{parentName:"p"},"seeedkk-wioterminal-wioterminal_aziot_example.json")," file and click on it")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 3:")," Click ",(0,r.yg)("strong",{parentName:"p"},"Open"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 4:")," Click ",(0,r.yg)("strong",{parentName:"p"},"Views")," from the left menu and click ",(0,r.yg)("strong",{parentName:"p"},"Generate default views"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 5:")," Click ",(0,r.yg)("strong",{parentName:"p"},"Generate default dashboard view(s)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 6:")," Navigate to ",(0,r.yg)("strong",{parentName:"p"},"Overview")," from the left menu and customize the dashboard according to your preference."))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," We have previously mentioned in this document, how to customize the dashboard"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 7:")," Follow the below configuration")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Tile Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Tile Size"),(0,r.yg)("th",{parentName:"tr",align:null},"Tile Visualization"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Light Intensity"),(0,r.yg)("td",{parentName:"tr",align:null},"2 x 2"),(0,r.yg)("td",{parentName:"tr",align:null},"Line chart")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Light Intensity"),(0,r.yg)("td",{parentName:"tr",align:null},"1 x 1"),(0,r.yg)("td",{parentName:"tr",align:null},"Last Known Value")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Temperature (C), Humidity (%RH)"),(0,r.yg)("td",{parentName:"tr",align:null},"2 x 2"),(0,r.yg)("td",{parentName:"tr",align:null},"Line chart")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Temperature (C)"),(0,r.yg)("td",{parentName:"tr",align:null},"1 x 1"),(0,r.yg)("td",{parentName:"tr",align:null},"Last Known Value")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Humidity (%RH)"),(0,r.yg)("td",{parentName:"tr",align:null},"1 x 1"),(0,r.yg)("td",{parentName:"tr",align:null},"Last Known Value")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Left button"),(0,r.yg)("td",{parentName:"tr",align:null},"1 x 1"),(0,r.yg)("td",{parentName:"tr",align:null},"KPI")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Middle button"),(0,r.yg)("td",{parentName:"tr",align:null},"1 x 1"),(0,r.yg)("td",{parentName:"tr",align:null},"KPI")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Right button"),(0,r.yg)("td",{parentName:"tr",align:null},"1 x 1"),(0,r.yg)("td",{parentName:"tr",align:null},"KPI")))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard.png",alt:"pir",width:1e3,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 8:")," Click ",(0,r.yg)("strong",{parentName:"li"},"Save")," and ",(0,r.yg)("strong",{parentName:"li"},"Publish"))),(0,r.yg)("h3",{id:"wio-terminal-set-up"},"Wio Terminal Set Up"),(0,r.yg)("h4",{id:"hardware-set-up"},"Hardware Set Up"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Connect the ",(0,r.yg)("strong",{parentName:"li"},"Grove - Temperature and Humidity Sensor (DHT11)")," to ",(0,r.yg)("strong",{parentName:"li"},"Grove Digital Port")," on the Wio Terminal")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png",alt:"pir",width:380,height:"auto"})),(0,r.yg)("h4",{id:"software-set-up"},"Software Set Up"),(0,r.yg)("h5",{id:"upload-code-to-wio-terminal"},"Upload Code to Wio Terminal"),(0,r.yg)("p",null,"Now we need to upload the code to the Wio Terminal to send the telemetry data to Azure IoT Central"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 1:")," Go back to VS Code, click ",(0,r.yg)("strong",{parentName:"li"},"PlatformIO icon")," and click ",(0,r.yg)("strong",{parentName:"li"},"Upload"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformIO_upload.png",alt:"pir",width:380,height:"auto"})),(0,r.yg)("h5",{id:"wi-fi-and-azure-iot-configuration"},"Wi-Fi and Azure IoT Configuration"),(0,r.yg)("p",null,"Next, let's move on to configuring Wi-Fi and Azure IoT connection just like we did before"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 1:")," Hold down on the 3 buttons and turn ON the Wio Terminal to enter the configuration mode")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png",alt:"pir",width:700,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 2:")," Open a serial console application such as ",(0,r.yg)("a",{parentName:"p",href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"},"PUTTY"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 3:")," Type the correct serial ",(0,r.yg)("strong",{parentName:"p"},"COM Port"),", set ",(0,r.yg)("strong",{parentName:"p"},"9600")," as the baud rate and enter the Wio Terminal"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png",alt:"pir",width:500,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 4:")," Press ",(0,r.yg)("strong",{parentName:"li"},"ENTER")," on the keyboard and type ",(0,r.yg)("strong",{parentName:"li"},"help")," in the serial terminal to view the configuration usage")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," Now we don't need to enter WiFi SSID and password because they are already saved from the previous configuration"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 5:")," Set connection information of Azure IoT by visiting the previously created application on ",(0,r.yg)("a",{parentName:"p",href:"https://apps.azureiotcentral.com"},"Azure IoT Central"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 6:")," Navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"Administration > Device Connection")," from the left navigation menu, and ",(0,r.yg)("strong",{parentName:"p"},"copy the ID scope")," into ",(0,r.yg)("strong",{parentName:"p"},"notepad"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 7:")," Click on ",(0,r.yg)("strong",{parentName:"p"},"SAS-IoT-Devices")," and copy the ",(0,r.yg)("strong",{parentName:"p"},"primary key")," into ",(0,r.yg)("strong",{parentName:"p"},"notepad"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"STEP 8:")," Visit previously opened serial terminal and type ",(0,r.yg)("strong",{parentName:"p"},"set_az_iotc")," ",(0,r.yg)("inlineCode",{parentName:"p"},"your_ID_scope")," ",(0,r.yg)("inlineCode",{parentName:"p"},"your_primary_key")," ",(0,r.yg)("inlineCode",{parentName:"p"},"your_device_name")," "))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," Make sure to add a single space between each field and you can decide on a ",(0,r.yg)("inlineCode",{parentName:"p"},"device name")," of your choice."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STEP 9:")," Reset the Wio Terminal by sliding down the switch further away from the ON position and releasing ")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png",alt:"pir",width:500,height:"auto"})),(0,r.yg)("p",null,"Now you will be able to see the Wio Terminal LCD displaying that it's connecting to Wi-Fi and then Azure IoT Hub. After that, it will show the telemetry data being sent to Azure IoT Central."),(0,r.yg)("h3",{id:"visualize-on-azure-iot-central"},"Visualize on Azure IoT Central"),(0,r.yg)("p",null,"Go back to Azure IoT Central and from the left navigation menu, click ",(0,r.yg)("strong",{parentName:"p"},"Devices"),", click on your ",(0,r.yg)("strong",{parentName:"p"},"Device name")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png",alt:"pir",width:1e3,height:"auto"})),(0,r.yg)("p",null,"Now you will be able to visualize all the sensor data from the Wio Terminal on Microsoft Azure IoT Central Dashboard!"))}u.isMDXComponent=!0}}]);