"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97988],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>R});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),c=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(d.Provider,{value:n},e.children)},_="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),_=c(t),u=a,R=_["".concat(d,".").concat(u)]||_[u]||p[u]||r;return t?o.createElement(R,i(i({ref:n},l),{},{components:t})):o.createElement(R,i({ref:n},l))}));function R(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[_]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},32506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const r={description:"LoRa\xae",title:"LoRa\xae",keywords:["SenseCAP Indicator ESP32 Development Tutorial Lora"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_ESP32_LoRa",last_update:{date:"5/23/2023",author:"Thomas"}},i="**LoRa\xae**",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3/LoRa",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3/LoRa",title:"LoRa\xae",description:"LoRa\xae",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3/LoRa.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3",slug:"/SenseCAP_Indicator_ESP32_LoRa",permalink:"/SenseCAP_Indicator_ESP32_LoRa",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3/LoRa.md",tags:[],version:"current",lastUpdatedBy:"Thomas",lastUpdatedAt:16848e5,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{description:"LoRa\xae",title:"LoRa\xae",keywords:["SenseCAP Indicator ESP32 Development Tutorial Lora"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_ESP32_LoRa",last_update:{date:"5/23/2023",author:"Thomas"}},sidebar:"ProductSidebar",previous:{title:"4-inch Touch Screen",permalink:"/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen"},next:{title:"Wi-Fi",permalink:"/SenseCAP_Indicator_ESP32_Wi-Fi"}},d={},c=[{value:"<strong>Send Data Packets</strong>",id:"send-data-packets",level:2},{value:"<strong>Receive Data Packets</strong>",id:"receive-data-packets",level:2}],l={toc:c},_="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(_,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lora"},(0,a.kt)("strong",{parentName:"h1"},"LoRa\xae")),(0,a.kt)("p",null,"The SenseCAP indicator is embedded with SX1262 LoRa\xae module, which can realize the p2p communication."),(0,a.kt)("h2",{id:"send-data-packets"},(0,a.kt)("strong",{parentName:"h2"},"Send Data Packets")),(0,a.kt)("p",null,"This example code demonstrates a basic example of how to use the LoRa\xae radio module in transmit mode to send data packets in LoRa\xae mode. It defines the frequency, bandwidth, spreading factor, coding rate, preamble length, and other parameters of the LoRa\xae modulation scheme."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n#include "esp_log.h"\n#include "radio.h"\n#include "bsp_board.h"\n\n#define RF_FREQUENCY                                868000000 // Hz\n#define LORA_BANDWIDTH                              0         // [0: 125 kHz,\n                                                              //  1: 250 kHz,\n                                                              //  2: 500 kHz,\n                                                              //  3: Reserved]\n#define LORA_SPREADING_FACTOR                       12         // [SF7..SF12]\n#define LORA_CODINGRATE                             1         // [1: 4/5,\n                                                              //  2: 4/6,\n                                                              //  3: 4/7,\n                                                              //  4: 4/8]\n#define LORA_PREAMBLE_LENGTH                        8         // Same for Tx and Rx\n#define LORA_SYMBOL_TIMEOUT                         5         // Symbols\n#define LORA_FIX_LENGTH_PAYLOAD_ON                  false\n#define LORA_IQ_INVERSION_ON                        false\n\nstatic RadioEvents_t RadioEvents;\n\nstatic const char *TAG = "app_main";\n\nvoid OnTxDone( void )\n{\n    ESP_LOGI(TAG, "OnTxDone");\n}\n\nvoid demo_lora_tx(void)\n{\n    int cnt = 0;\n    ESP_LOGI(TAG, "system start");\n    ESP_LOGI(TAG, "demo lora tx");\n    ESP_ERROR_CHECK(bsp_board_init());\n\n    RadioEvents.TxDone = OnTxDone;\n    Radio.Init( &RadioEvents );\n\n    Radio.SetChannel( RF_FREQUENCY );\n    Radio.SetTxConfig( MODEM_LORA,22, 0, LORA_BANDWIDTH,\n                                   LORA_SPREADING_FACTOR, LORA_CODINGRATE,\n                                   LORA_PREAMBLE_LENGTH, LORA_FIX_LENGTH_PAYLOAD_ON,\n                                   true, 0, 0, LORA_IQ_INVERSION_ON, 3000 );\n\n    Radio.SetMaxPayloadLength( MODEM_LORA, 255 );\n\n    while(1) {\n        printf("send... %d\\n", cnt++);\n        Radio.Send( "1234567890", sizeof("1234567890") );\n        vTaskDelay(5000 / portTICK_PERIOD_MS);\n    }\n}\n')),(0,a.kt)("h2",{id:"receive-data-packets"},(0,a.kt)("strong",{parentName:"h2"},"Receive Data Packets")),(0,a.kt)("p",null,"This example code sets up a LoRa\xae receiver using the SX126x radio module and logs the received packets to the console. It can be used as a starting point for developing LoRa\xae applications that require receiving data over long distances with low power consumption."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n#include "esp_log.h"\n#include "radio.h"\n#include "bsp_board.h"\n\n#define RF_FREQUENCY                                868000000 // Hz\n#define LORA_BANDWIDTH                              0         // [0: 125 kHz,\n                                                              //  1: 250 kHz,\n                                                              //  2: 500 kHz,\n                                                              //  3: Reserved]\n#define LORA_SPREADING_FACTOR                       7         // [SF7..SF12]\n#define LORA_CODINGRATE                             1         // [1: 4/5,\n                                                              //  2: 4/6,\n                                                              //  3: 4/7,\n                                                              //  4: 4/8]\n#define LORA_PREAMBLE_LENGTH                        8         // Same for Tx and Rx\n#define LORA_SYMBOL_TIMEOUT                         5         // Symbols\n#define LORA_FIX_LENGTH_PAYLOAD_ON                  false\n#define LORA_IQ_INVERSION_ON                        false\n\nstatic RadioEvents_t RadioEvents;\n\nstatic const char *TAG = "app_main";\n\nvoid OnRxDone( uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr )\n{\n    int i = 0;\n    ESP_LOGI(TAG, "rssi:%d dBm, snr:%d dB, len:%d, payload:", rssi, snr, size);\n    for( i = 0; i < size; i++) {\n        printf("0x%x ",payload[i] );\n    }\n    printf("\\n");\n}\n\nvoid demo_lora_rx(void)\n{\n    int cnt = 0;\n    ESP_LOGI(TAG, "system start");\n    ESP_LOGI(TAG, "demo lora rx continue");\n    bsp_sx126x_init();\n\n    RadioEvents.RxDone = OnRxDone;\n    Radio.Init( &RadioEvents );\n\n    Radio.SetChannel( RF_FREQUENCY );\n    Radio.SetTxConfig( MODEM_LORA,22, 0, LORA_BANDWIDTH,\n                                   LORA_SPREADING_FACTOR, LORA_CODINGRATE,\n                                   LORA_PREAMBLE_LENGTH, LORA_FIX_LENGTH_PAYLOAD_ON,\n                                   true, 0, 0, LORA_IQ_INVERSION_ON, 3000 );\n\n    Radio.SetRxConfig( MODEM_LORA, LORA_BANDWIDTH, LORA_SPREADING_FACTOR,\n                                   LORA_CODINGRATE, 0, LORA_PREAMBLE_LENGTH,\n                                   LORA_SYMBOL_TIMEOUT, LORA_FIX_LENGTH_PAYLOAD_ON,\n                                   0, true, 0, 0, LORA_IQ_INVERSION_ON, true );\n    Radio.SetMaxPayloadLength( MODEM_LORA, 255 );\n\n    Radio.Rx( 0 );\n    while(1) {\n        printf("cnt: %d\\n", cnt++);\n        vTaskDelay(10000 / portTICK_PERIOD_MS);\n    }\n}\n\n')),(0,a.kt)("h1",{id:"tech-support"},(0,a.kt)("strong",{parentName:"h1"},"Tech Support")),(0,a.kt)("p",null,"Don't worry, we've got you covered! Please visit our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/sensecap"},"Seeed Official Discord Channel")," to ask your questions!"),(0,a.kt)("p",null,"If you have large order or customization requirement, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}p.isMDXComponent=!0}}]);