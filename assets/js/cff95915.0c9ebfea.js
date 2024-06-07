"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48627],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>f});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var S=i.createContext({}),_=function(e){var n=i.useContext(S),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=_(e.components);return i.createElement(S.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,S=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=_(t),d=r,f=u["".concat(S,".").concat(d)]||u[d]||p[d]||a;return t?i.createElement(f,s(s({ref:n},l),{},{components:t})):i.createElement(f,s({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var S in n)hasOwnProperty.call(n,S)&&(o[S]=n[S]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var _=2;_<a;_++)s[_]=t[_];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>S,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>_});var i=t(58168),r=(t(96540),t(15680));const a={description:"This article describes how to use the QSPI Flash on the XIAO nRF52840 Sense.",title:"The QSPI Flash for XIAO nRF52840 Sense",keywords:["QSPI Flash"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/xiao-ble-qspi-flash-usage",last_update:{date:"05/12/2023",author:"Citric"}},s="The QSPI Flash Usage on Seeed Studio XIAO nRF52840 Sense",o={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE_QSPI-Usage",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE_QSPI-Usage",title:"The QSPI Flash for XIAO nRF52840 Sense",description:"This article describes how to use the QSPI Flash on the XIAO nRF52840 Sense.",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE_QSPI-Usage.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense",slug:"/xiao-ble-qspi-flash-usage",permalink:"/xiao-ble-qspi-flash-usage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE_QSPI-Usage.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1683849600,formattedLastUpdatedAt:"May 12, 2023",frontMatter:{description:"This article describes how to use the QSPI Flash on the XIAO nRF52840 Sense.",title:"The QSPI Flash for XIAO nRF52840 Sense",keywords:["QSPI Flash"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/xiao-ble-qspi-flash-usage",last_update:{date:"05/12/2023",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"PDM Usage for XIAO nRF52840 Sense",permalink:"/XIAO-BLE-Sense-PDM-Usage"},next:{title:"Pin Multiplexing for both versions",permalink:"/XIAO-BLE-Sense-Pin-Multiplexing"}},S={},_=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:_},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,i.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"the-qspi-flash-usage-on-seeed-studio-xiao-nrf52840-sense"},"The QSPI Flash Usage on Seeed Studio XIAO nRF52840 Sense"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Special thanks to community users ",(0,r.yg)("strong",{parentName:"p"},"JM_Laird")," and ",(0,r.yg)("strong",{parentName:"p"},"Haakonish")," for their support and help with this tutorial! The program used in this article was sourced from Github user ",(0,r.yg)("strong",{parentName:"p"},"PMCheetham")," and the source can be found ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://github.com/PMCheetham/SEEED_nRF52840_QSPI/tree/main"},"HERE")),".")),(0,r.yg)("p",null,"Welcome to this tutorial on using QSPI Flash on XIAO nRF52840 and XIAO nRF52840 Sense! XIAO is a powerful and compact board that features 256 KB RAM, 1 MB Flash, and 2 MB onboard Flash. In this tutorial, you will learn how to utilize the QSPI Flash on XIAO boards, which can greatly expand the storage capacity and speed up your projects. Let's get started!"),(0,r.yg)("p",null,"The following is a sample program provided by PMCheetham that works well with the XIAO nRF52840 Sense. With the following program you can freely use the QSPI Flash on the XIAO."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n#include "nrfx_qspi.h"\n#include "app_util_platform.h"\n#include "nrf_log.h"\n#include "nrf_log_ctrl.h"\n#include "nrf_log_default_backends.h"\n#include "sdk_config.h"\n#include "nrf_delay.h"\n#include "avr/interrupt.h"\n\n/* \n * Strange parts of this code ... Or things I don\'t understand\n * \n * After the first READ in Setup() it successfully reads the data (Returns 0 = NRFX_SUCCESS), but the status flag\n * has the top 8 bits set to 0xFF which causes nrfx_qspi_mem_busy_check() to show 17 (Returns 17 = NRFX_ERROR_BUSY). \n * However masking the STATUS register with 8 reveals the Ready Status = 1, QSPI is ready!\n * This was why I wrote the QSPI_IsReady().\n * \n * nrf_qspi_phy_conf_t not visible as a structure if you try and set it like this :\n *   QSPIConfig.phy_if {\n *     .xxx = yyy,\n *     .aaa = bbb\n *   };\n *   \n * I don\'t know what the significance of the 48ms Deep Power-down Mode (DPM) is. \n * Will it go into DPM if not used for 48ms and then take 48ms to wake up if instructed?\n * \n * Hope you enjoy this little snippet of code!  Feel free to butcher and use it.\n * Thanks to JM_Laird and Haakonish in Case ID: 224515.\n * And, yes, I could have made it neater, but really need to add some of the bits into a project and tidy them up there!\n */\n\n// QSPI Settings\n#define QSPI_STD_CMD_WRSR   0x01\n#define QSPI_STD_CMD_RSTEN  0x66\n#define QSPI_STD_CMD_RST    0x99\n#define QSPI_DPM_ENTER      0x0003 // 3 x 256 x 62.5ns = 48ms\n#define QSPI_DPM_EXIT       0x0003\n\nstatic uint32_t               *QSPI_Status_Ptr = (uint32_t*) 0x40029604;  // Setup for the SEEED XIAO BLE - nRF52840\nstatic nrfx_qspi_config_t     QSPIConfig;\nstatic nrf_qspi_cinstr_conf_t QSPICinstr_cfg;\nstatic const uint32_t         MemToUse = 64 * 1024;  // Alter this to create larger read writes, 64Kb is the size of the Erase\nstatic bool                   Debug_On = true;\nstatic uint16_t               pBuf[MemToUse / 2] = {0};  // 16bit used as that is what this memory is going to be used for\nstatic uint32_t               *BufMem = (uint32_t*) &pBuf;\nstatic bool                   QSPIWait = false;\n// QSPI Settings Complete\n\nstatic void qspi_handler(nrfx_qspi_evt_t event, void *p_context) {\n  // UNUSED_PARAMETER(p_context);\n  // Serial.println("QSPI Interrupt");\n  // if (event == NRFX_QSPI_EVENT_DONE) {\n  //   QSPI_HasFinished = true;\n  // }\n}\n\nstatic void QSPI_Status(char ASender[]) { // Prints the QSPI Status\n  Serial.print("(");\n  Serial.print(ASender);\n  Serial.print(") QSPI is busy/idle ... Result = ");\n  Serial.println(nrfx_qspi_mem_busy_check() & 8);\n  Serial.print("(");\n  Serial.print(ASender);\n  Serial.print(") QSPI Status flag = 0x");\n  Serial.print(NRF_QSPI->STATUS, HEX);\n  Serial.print(" (from NRF_QSPI) or 0x");\n  Serial.print(*QSPI_Status_Ptr, HEX);\n  Serial.println(" (from *QSPI_Status_Ptr)");\n}\n\nstatic void QSPI_PrintData(uint16_t *AnAddress, uint32_t AnAmount) {\n  uint32_t i;\n\n  Serial.print("Data :"); \n  for (i = 0; i < AnAmount; i++) {\n    Serial.print(" 0x");\n    Serial.print(*(AnAddress + i), HEX);\n  }\n  Serial.println("");\n}\n\nstatic nrfx_err_t QSPI_IsReady() {\n  if (((*QSPI_Status_Ptr & 8) == 8) && (*QSPI_Status_Ptr & 0x01000000) == 0) {\n    return NRFX_SUCCESS;  \n  } else {\n   return NRFX_ERROR_BUSY; \n  }\n}\n\nstatic nrfx_err_t QSPI_WaitForReady() {\n  while (QSPI_IsReady() == NRFX_ERROR_BUSY) {\n    if (Debug_On) {\n      Serial.print("*QSPI_Status_Ptr & 8 = ");\n      Serial.print(*QSPI_Status_Ptr & 8);\n      Serial.print(", *QSPI_Status_Ptr & 0x01000000 = 0x");\n      Serial.println(*QSPI_Status_Ptr & 0x01000000, HEX);\n      QSPI_Status("QSPI_WaitForReady");\n    }   \n  }\n  return NRFX_SUCCESS;\n}\n\nstatic nrfx_err_t QSPI_Initialise() { // Initialises the QSPI and NRF LOG\n  uint32_t Error_Code;\n\n  NRF_LOG_INIT(NULL); // Initialise the NRF Log\n  NRF_LOG_DEFAULT_BACKENDS_INIT();\n  // QSPI Config\n  QSPIConfig.xip_offset = NRFX_QSPI_CONFIG_XIP_OFFSET;                       \n  QSPIConfig.pins = { // Setup for the SEEED XIAO BLE - nRF52840                                                     \n   .sck_pin     = 21,                                \n   .csn_pin     = 25,                                \n   .io0_pin     = 20,                                \n   .io1_pin     = 24,                                \n   .io2_pin     = 22,                                \n   .io3_pin     = 23,                                \n  };                                                                  \n  QSPIConfig.irq_priority = (uint8_t)NRFX_QSPI_CONFIG_IRQ_PRIORITY;           \n  QSPIConfig.prot_if = {                                                        \n    // .readoc     = (nrf_qspi_readoc_t)NRFX_QSPI_CONFIG_READOC,\n    .readoc     = (nrf_qspi_readoc_t)NRF_QSPI_READOC_READ4O,       \n    // .writeoc    = (nrf_qspi_writeoc_t)NRFX_QSPI_CONFIG_WRITEOC,     \n    .writeoc    = (nrf_qspi_writeoc_t)NRF_QSPI_WRITEOC_PP4O,\n    .addrmode   = (nrf_qspi_addrmode_t)NRFX_QSPI_CONFIG_ADDRMODE,   \n    .dpmconfig  = false,                                            \n  };                   \n  QSPIConfig.phy_if.sck_freq   = (nrf_qspi_frequency_t)NRF_QSPI_FREQ_32MDIV1;  // I had to do it this way as it complained about nrf_qspi_phy_conf_t not being visible                                        \n  // QSPIConfig.phy_if.sck_freq   = (nrf_qspi_frequency_t)NRFX_QSPI_CONFIG_FREQUENCY; \n  QSPIConfig.phy_if.spi_mode   = (nrf_qspi_spi_mode_t)NRFX_QSPI_CONFIG_MODE;\n  QSPIConfig.phy_if.dpmen      = false;\n  // QSPI Config Complete\n  // Setup QSPI to allow for DPM but with it turned off\n  QSPIConfig.prot_if.dpmconfig = true;\n  NRF_QSPI->DPMDUR = (QSPI_DPM_ENTER << 16) | QSPI_DPM_EXIT; // Found this on the Nordic Q&A pages, Sets the Deep power-down mode timer\n  Error_Code = 1;\n  while (Error_Code != 0) {\n    Error_Code = nrfx_qspi_init(&QSPIConfig, NULL, NULL);\n    if (Error_Code != NRFX_SUCCESS) {\n      if (Debug_On) {\n        Serial.print("(QSPI_Initialise) nrfx_qspi_init returned : ");\n        Serial.println(Error_Code);\n      }\n    } else {\n      if (Debug_On) {\n        Serial.println("(QSPI_Initialise) nrfx_qspi_init successful");\n      }\n    }\n  }\n  QSPI_Status("QSPI_Initialise (Before QSIP_Configure_Memory)");\n  QSIP_Configure_Memory();\n  if (Debug_On) {\n    Serial.println("(QSPI_Initialise) Wait for QSPI to be ready ...");\n  }\n  NRF_QSPI->TASKS_ACTIVATE = 1;\n  QSPI_WaitForReady();\n  if (Debug_On) {\n    Serial.println("(QSPI_Initialise) QSPI is ready");\n  }\n  return QSPI_IsReady(); \n}\n\nstatic void QSPI_Erase(uint32_t AStartAddress) {\n  uint32_t   TimeTaken;\n  bool       QSPIReady = false;\n  bool       AlreadyPrinted = false;\n\n  if (Debug_On) {\n    Serial.println("(QSPI_Erase) Erasing memory");\n  }\n  while (!QSPIReady) {\n    if (QSPI_IsReady() != NRFX_SUCCESS) {\n      if (!AlreadyPrinted) {\n        QSPI_Status("QSPI_Erase (Waiting)");\n        AlreadyPrinted = true;\n      }\n    } else {\n      QSPIReady = true;\n      QSPI_Status("QSPI_Erase (Waiting Loop Breakout)");\n    }\n  }\n  if (Debug_On) {\n    QSPI_Status("QSPI_Erase (Finished Waiting)");\n    TimeTaken = millis();\n  }\n  if (nrfx_qspi_erase(NRF_QSPI_ERASE_LEN_64KB, AStartAddress) != NRFX_SUCCESS) {\n    if (Debug_On) {\n      Serial.print("(QSPI_Initialise_Page) QSPI Address 0x");\n      Serial.print(AStartAddress, HEX);\n      Serial.println(" failed to erase!");\n    }\n  } else {     \n    if (Debug_On) {\n      TimeTaken = millis() - TimeTaken;\n      Serial.print("(QSPI_Initialise_Page) QSPI took ");\n      Serial.print(TimeTaken);\n      Serial.println("ms to erase a 64Kb page");\n    }\n  }\n}\n\nstatic void QSIP_Configure_Memory() {\n  // uint8_t  temporary = 0x40;\n  uint8_t  temporary[] = {0x00, 0x02};\n  uint32_t Error_Code;\n  \n  QSPICinstr_cfg = {\n    .opcode    = QSPI_STD_CMD_RSTEN,\n    .length    = NRF_QSPI_CINSTR_LEN_1B,\n    .io2_level = true,\n    .io3_level = true,\n    .wipwait   = QSPIWait,\n    .wren      = true\n  };\n  QSPI_WaitForReady();\n  if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, NULL, NULL) != NRFX_SUCCESS) { // Send reset enable\n    if (Debug_On) {\n      Serial.println("(QSIP_Configure_Memory) QSPI \'Send reset enable\' failed!");\n    }\n  } else {\n    QSPICinstr_cfg.opcode = QSPI_STD_CMD_RST;\n    QSPI_WaitForReady();\n    if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, NULL, NULL) != NRFX_SUCCESS) { // Send reset command\n      if (Debug_On) {\n        Serial.println("(QSIP_Configure_Memory) QSPI Reset failed!");\n      }\n    } else {\n      QSPICinstr_cfg.opcode = QSPI_STD_CMD_WRSR;\n      QSPICinstr_cfg.length = NRF_QSPI_CINSTR_LEN_3B;\n      QSPI_WaitForReady();\n      if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, &temporary, NULL) != NRFX_SUCCESS) { // Switch to qspi mode\n        if (Debug_On) {\n          Serial.println("(QSIP_Configure_Memory) QSPI failed to switch to QSPI mode!");\n        }\n      } else {\n          QSPI_Status("QSIP_Configure_Memory");\n      }\n    }\n  }\n}\n\nvoid setup() {\n  uint32_t Error_Code;\n  uint32_t TimeTaken;\n  uint16_t i;\n\n  delay(10000);\n  Serial.begin(9600);\n  while (!Serial) {}\n\n  if (Debug_On) {\n    Serial.println("(Setup) QSPI Initialising ...");\n  }\n  if (QSPI_Initialise() != NRFX_SUCCESS) {\n    if (Debug_On) {\n      Serial.println("(Setup) QSPI Memory failed to start!");\n    }\n  } else {\n    if (Debug_On) {\n      Serial.println("(Setup) QSPI initialised and ready");\n      QSPI_Status("Setup (After initialise)");\n    }\n  }\n\n  if (Debug_On) {\n    Serial.print("(Setup) QSPI is about to be read and then erased. Current busy state is = ");\n    Serial.println(QSPI_IsReady());\n  }\n\n  // QSPI Speed Test\n  if (Debug_On) {\n    QSPI_Status("Setup (Before read)");\n    TimeTaken = millis();\n  }\n  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);\n  if (Debug_On) {\n    TimeTaken = millis() - TimeTaken;\n    Serial.print("(Setup) QSPI took ");\n    Serial.print(TimeTaken);\n    Serial.print("ms to read ");\n    Serial.print(MemToUse / 1024);\n    Serial.print("Kb ... Read result = ");\n    Serial.println(Error_Code);\n    QSPI_Status("Setup (After read)");\n    QSPI_WaitForReady();\n    QSPI_PrintData(&pBuf[0], 10);\n  }\n  if (Debug_On) {\n    Serial.println("QSPI Erasing 64Kb of memory");\n  }\n  QSPI_Erase(0); \n  if (Debug_On) {\n    Serial.println("(Setup) QSPI read after erase");\n    TimeTaken = millis();\n  }\n  QSPI_WaitForReady();\n  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);\n  if (Debug_On) {\n    TimeTaken = millis() - TimeTaken;\n    Serial.print("(Setup) QSPI took ");\n    Serial.print(TimeTaken);\n    Serial.print("ms to read ");\n    Serial.print(MemToUse / 1024);\n    Serial.print("Kb ... Read result = ");\n    Serial.println(Error_Code);\n    QSPI_WaitForReady();\n    QSPI_PrintData(&pBuf[0], 10);\n  }\n  for (i = 0; i < MemToUse / 2; i++) {\n    pBuf[i] = i * 2;\n  }\n  QSPI_WaitForReady();\n  if (Debug_On) {\n    Serial.println("(Setup) Just before QSPI write");\n    TimeTaken = millis();\n  }\n  Error_Code = nrfx_qspi_write(pBuf, MemToUse, 0x0);\n  if (Debug_On) {\n    TimeTaken = millis() - TimeTaken;\n    Serial.print("(Setup) QSPI took ");\n    Serial.print(TimeTaken);\n    Serial.print("ms to write ");\n    Serial.print(MemToUse / 1024);\n    Serial.print("Kb ... Write result = ");\n    Serial.println(Error_Code);\n  }\n  QSPI_WaitForReady();\n  if (Debug_On) {\n    Serial.println("(Setup) Just before QSPI read");\n    TimeTaken = millis();\n  }\n  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);\n  if (Debug_On) {\n    TimeTaken = millis() - TimeTaken;\n    Serial.print("(Setup) QSPI took ");\n    Serial.print(TimeTaken);\n    Serial.print("ms to read ");\n    Serial.print(MemToUse / 1024);\n    Serial.print("Kb ... Read result = ");\n    Serial.println(Error_Code);\n    QSPI_WaitForReady();\n    QSPI_PrintData(&pBuf[0], 10);\n  }\n  QSPI_WaitForReady();\n  QSPI_Status("Setup");\n  // QSPI Speed Test Complete\n}\n\nvoid loop() {\n  delay(10000);\n}\n')),(0,r.yg)("p",null,"The program is only available for ",(0,r.yg)("strong",{parentName:"p"},"mbed")," boards, so please select the XIAO nRF52840 under the mbed tab when compiling and uploading."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"."),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);