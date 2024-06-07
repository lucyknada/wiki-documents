"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29457],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},_=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),_=r,m=c["".concat(l,".").concat(_)]||c[_]||d[_]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=_;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}_.displayName="MDXCreateElement"},97169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(58168),r=(n(96540),n(15680));const i={description:"Make your own UI based on LVGL coding or with Squareline Studio",title:"How to Create your own UI",keywords:["Indicator Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_How_to_Create_your_own_UI",sidebar_position:4,last_update:{date:"5/31/2023",author:"Thomas"}},a="**How to Create your own UI**",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/How_to_Create_your_own_UI",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/How_to_Create_your_own_UI",title:"How to Create your own UI",description:"Make your own UI based on LVGL coding or with Squareline Studio",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/How_to_Create_your_own_UI.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial",slug:"/SenseCAP_Indicator_How_to_Create_your_own_UI",permalink:"/SenseCAP_Indicator_How_to_Create_your_own_UI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/How_to_Create_your_own_UI.md",tags:[],version:"current",lastUpdatedBy:"Thomas",lastUpdatedAt:1685491200,formattedLastUpdatedAt:"May 31, 2023",sidebarPosition:4,frontMatter:{description:"Make your own UI based on LVGL coding or with Squareline Studio",title:"How to Create your own UI",keywords:["Indicator Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_How_to_Create_your_own_UI",sidebar_position:4,last_update:{date:"5/31/2023",author:"Thomas"}},sidebar:"ProductSidebar",previous:{title:"Create a Project(ESP-IDF) - SenseCAP Indicator",permalink:"/sensecap_indicator_project"},next:{title:"Develop both chips with Arduino",permalink:"/SenseCAP_Indicator_ESP32_Arduino"}},l={},p=[{value:"<strong>LvGL</strong>",id:"lvgl",level:2},{value:"<strong>Example Code</strong>",id:"example-code",level:3},{value:"<strong>Squareline Studio(Optional)</strong>",id:"squareline-studiooptional",level:2},{value:"<strong>Replace with your own UI</strong>",id:"replace-with-your-own-ui",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"how-to-create-your-own-ui"},(0,r.yg)("strong",{parentName:"h1"},"How to Create your own UI")),(0,r.yg)("h2",{id:"lvgl"},(0,r.yg)("strong",{parentName:"h2"},"LvGL")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://docs.lvgl.io/master/intro/index.html"},"LvGL")," is an open-source graphics library providing everything you need to create an embedded GUI with easy-to-use graphical elements, beautiful visual effects, and a low memory footprint."),(0,r.yg)("h3",{id:"example-code"},(0,r.yg)("strong",{parentName:"h3"},"Example Code")),(0,r.yg)("p",null,"We provide the demo code of the UI interface, and ",(0,r.yg)("a",{parentName:"p",href:"https://docs.lvgl.io/master/examples.html"},"lvGL example file")," are many sample codes for drawing UI for reference, you can modify the sample code or customize your own UI."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'#include "freertos/FreeRTOS.h"\n#include "freertos/task.h"\n#include "esp_log.h"\n#include "bsp_board.h"\n#include "lv_demos.h"\n#include "lv_port.h"\n#include "ui_demo1.h"\n#include "ui_demo2.h"\n\n#define LOG_MEM_INFO        1\n\nstatic const char *TAG = "app_main";\n\nvoid app_main(void)\n{\n    ESP_LOGI("TAG", "system start");\n\n    ESP_ERROR_CHECK(bsp_board_init());\n    lv_port_init();\n\n#if CONFIG_LCD_AVOID_TEAR\n    ESP_LOGI(TAG, "Avoid lcd tearing effect");\n#if CONFIG_LCD_LVGL_FULL_REFRESH\n    ESP_LOGI(TAG, "LVGL full-refresh");\n#elif CONFIG_LCD_LVGL_DIRECT_MODE\n    ESP_LOGI(TAG, "LVGL direct-mode");\n#endif\n#endif\n\n    lv_port_sem_take();\n    lv_demo_widgets();      /* A widgets example. This is what you get out of the box */\n    //lv_demo_music();        /* A modern, smartphone-like music player demo. */\n    //lv_demo_stress();       /* A stress test for LVGL. */\n    //lv_demo_benchmark();    /* A demo to measure the performance of LVGL or to compare different settings. */\n    // ui_demo1_init();         /* A demo to show virtual printer (must be 800*480)*/\n    //ui_demo2_init();         /* A demo to show virtual tuner\n                                /* (must be 480*800, set LCD_EVB_SCREEN_ROTATION_90 in menuconfig)*/\n    lv_port_sem_give();\n\n#if LOG_MEM_INFO\n    static char buffer[128];    /* Make sure buffer is enough for `sprintf` */\n    while (1) {\n        sprintf(buffer, "   Biggest /     Free /    Total\\n"\n                "\\t  DRAM : [%8d / %8d / %8d]\\n"\n                "\\t PSRAM : [%8d / %8d / %8d]",\n                heap_caps_get_largest_free_block(MALLOC_CAP_INTERNAL),\n                heap_caps_get_free_size(MALLOC_CAP_INTERNAL),\n                heap_caps_get_total_size(MALLOC_CAP_INTERNAL),\n                heap_caps_get_largest_free_block(MALLOC_CAP_SPIRAM),\n                heap_caps_get_free_size(MALLOC_CAP_SPIRAM),\n                heap_caps_get_total_size(MALLOC_CAP_SPIRAM));\n        ESP_LOGI("MEM", "%s", buffer);\n\n        vTaskDelay(pdMS_TO_TICKS(10000));\n    }\n#endif\n}\n')),(0,r.yg)("h2",{id:"squareline-studiooptional"},(0,r.yg)("strong",{parentName:"h2"},"Squareline Studio(Optional)")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://docs.squareline.io/docs/squareline/"},"Squareline Studio")," is a multi-platform design tool that uses a visual interface to help designers and developers work quickly and efficiently. SquareLine Studio makes it possible by creating the perfect code for your projects. Whether you use C or Python, you can export code for both."),(0,r.yg)("p",null,"If you need to create a more complex or advanced UI interface, it\u2018s recommended that you use Squareline Studio for development."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://docs.squareline.io/docs/introduction/install"},"Squareline Studio Installation")),(0,r.yg)("p",null,"We provide a demo project for the UI page:"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/sensecap_indicator_esp32/blob/main/examples/squareline_demo/doc/squareline_project.zip"},"SenseCAP Indicator/squareline_project")),(0,r.yg)("h3",{id:"replace-with-your-own-ui"},(0,r.yg)("strong",{parentName:"h3"},"Replace with your own UI")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 1:You can make changes in our demo project, or create a new UI page")),(0,r.yg)("p",null,"Open the demo project and make changes:"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/squareline.png"})),(0,r.yg)("p",null,"Create a new project:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note"),":The resolution of the screen is 480*480."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/create.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 2:Export your finished page as UI files")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/export.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 3:Remove all the original UI files and copy your onw UI files to this direct.")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/ui.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 4:Build and Flash the project")),(0,r.yg)("p",null,"Run the following command to build, flash and monitor the project:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"idf.py -p PORT build flash monitor")),(0,r.yg)("h1",{id:"tech-support"},(0,r.yg)("strong",{parentName:"h1"},"Tech Support")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Need help with your SenseCAP Indicator? We're here to assist you!")),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.com/invite/QqMgVwHT3X",class:"button_tech_support_sensecap"}),(0,r.yg)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);