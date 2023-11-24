"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||o;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={description:"SenseCAP Indicator x Home Assistant Application Development",title:"Home Assistant X SenseCAP Indicator",keywords:["SenseCAP Indicator","Home Assistant","ESP32S3"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_Application_Home_Assistant",sidebar_position:1,last_update:{date:"11/16/2023",author:"Spencer"}},s="SenseCAP Indicator x Home Assistant Application Development",r={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Application/Home_Assistant",id:"Sensor/SenseCAP/SenseCAP_Indicator/Application/Home_Assistant",title:"Home Assistant X SenseCAP Indicator",description:"SenseCAP Indicator x Home Assistant Application Development",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Application/Home_Assistant.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Application",slug:"/SenseCAP_Indicator_Application_Home_Assistant",permalink:"/SenseCAP_Indicator_Application_Home_Assistant",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Application/Home_Assistant.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1700092800,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:1,frontMatter:{description:"SenseCAP Indicator x Home Assistant Application Development",title:"Home Assistant X SenseCAP Indicator",keywords:["SenseCAP Indicator","Home Assistant","ESP32S3"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_Application_Home_Assistant",sidebar_position:1,last_update:{date:"11/16/2023",author:"Spencer"}},sidebar:"ProductSidebar",previous:{title:"Update and Flash Firmware",permalink:"/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware"},next:{title:"ChatGPT X DALL\xb7E X SenseCAP Indicator",permalink:"/SenseCAP_Indicator_Application_ChatGPT"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Home Assistant",id:"install_HA",level:2},{value:"Step 1: Install <strong>Mosquitto Broker</strong> and <strong>File Editor</strong>",id:"step-1-install-mosquitto-broker-and-file-editor",level:3},{value:"Step 2: Add MQTT Integration and Config",id:"step-2-add-mqtt-integration-and-config",level:3},{value:"Step 3: Modify &quot;configuration.yaml&quot; to Add Indicator Entity",id:"step-3-modify-configurationyaml-to-add-indicator-entity",level:3},{value:"Step 4: Edit Dashboard",id:"step-4-edit-dashboard",level:3},{value:"Add Users for MQTT adds-on",id:"add-users-for-mqtt-adds-on",level:3},{value:"Project Configuration",id:"Config_HA",level:2},{value:"Step 1: Configure IP Address",id:"step-1-configure-ip-address",level:3},{value:"Step 2: Configure User Name and Password",id:"step-2-configure-user-name-and-password",level:3},{value:"Build and Flash the Native Firmware",id:"build-and-flash-the-native-firmware",level:2},{value:"Additional Information",id:"additional-information",level:2},{value:"Modifying Configuration",id:"modifying-configuration",level:3},{value:"CONFIG_BROKER_URL",id:"config_broker_url",level:3},{value:"Relationship between <code>ha_config.h</code> and <code>Configuration.yaml</code>",id:"relationship-between-ha_configh-and-configurationyaml",level:3},{value:"<code>indicator_ha.c</code> Functions",id:"indicator_hac-functions",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:d},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sensecap-indicator-x-home-assistant-application-development"},"SenseCAP Indicator x Home Assistant Application Development"),(0,a.kt)("iframe",{class:"youtube-video-r",src:"https://www.youtube.com/embed/PKMcutZDjDg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("div",{class:"button-container"},(0,a.kt)("a",{class:"button-style",href:"https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html"},"Get One Now \ud83d\uddb1\ufe0f")),(0,a.kt)("p",null,"Welcome to the Seeed SenseCAP Indicator and Home Assistant development tutorial. This guide will walk you through the steps to integrate the SenseCAP Indicator with Home Assistant using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/yellow"},"Home Assistant Yellow"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:680,src:"https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Home Assistant Yellow")," comes pre-assembled in a custom enclosure with a Raspberry Pi Compute Module 4 (CM4) and a custom heat sink for fanless, silent operation. The CM4 is a version without wireless and has 2\xa0GB RAM and 16\xa0GB eMMC storage. Pre-installed with Home Assistant.")),(0,a.kt)("p",null,"To get your SenseCAP Indicator working with Home Assistant, you need to follow two main steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#install_HA"},"Install Home Assistant")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#Config_HA"},"Config Home Assistant Projection"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before we begin, make sure you have read the ",(0,a.kt)("a",{parentName:"p",href:"/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator"},"User Guide")," of the SenseCAP Indicator Board to familiarize yourself with its software and hardware information."),(0,a.kt)("h2",{id:"install_HA"},"Install Home Assistant"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Home Assistant is a powerful open-source home automation platform that focuses on privacy and local control. It offers a customizable and flexible framework to manage and automate all your home devices from a single, unified platform.")),(0,a.kt)("p",null,"With ",(0,a.kt)("strong",{parentName:"p"},"Home Assistant Yellow")," You can follow the instructions provided ",(0,a.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/installation/yellow"},"here"),". Also, to run on any type of Raspberry Pi or a local server, you can follow this ",(0,a.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/installation/"},"instruction")," step by step."),(0,a.kt)("p",null,"Once you installed, getting into this page means you can go to next step."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"})),(0,a.kt)("br",null),(0,a.kt)("admonition",{title:"Don't know how to onboard Home Assistant?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Once you installed the Home Assistant, check ",(0,a.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/getting-started/onboarding/"},"Onboarding Home Assistant - Home Assistant")," for details.")),(0,a.kt)("h3",{id:"step-1-install-mosquitto-broker-and-file-editor"},"Step 1: Install ",(0,a.kt)("strong",{parentName:"h3"},"Mosquitto Broker")," and ",(0,a.kt)("strong",{parentName:"h3"},"File Editor")),(0,a.kt)("p",null,"The next step is to install the ",(0,a.kt)("strong",{parentName:"p"},"Mosquitto Broker")," and ",(0,a.kt)("strong",{parentName:"p"},"File Editor"),". ",(0,a.kt)("strong",{parentName:"p"},"Mosquitto")," is an open-source message broker that implements the MQTT protocol whereas ",(0,a.kt)("strong",{parentName:"p"},"File Editor")," allows you to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," file without accessing the terminal ."),(0,a.kt)("p",null,"In Home Assistant Yellow, you can install the Mosquitto Broker and File Editor using the Add-ons feature."),(0,a.kt)("admonition",{title:"Add-ons feature required",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Home Assistant Yellow comes with ",(0,a.kt)("strong",{parentName:"p"},"Home Assistant Operating System")," can be easily installed Add-ons. However, ",(0,a.kt)("strong",{parentName:"p"},"Home Assistant Container")," does not support Add-ons, which means you need to install a MQTT broker application aside from Home Assistant. For details, check the ",(0,a.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/installation/#compare-installation-methods"},"installation Methods"),".")),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",{align:"center"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Setting.png",style:{width:480,height:"auto"}}))),(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Add-ons.png",style:{width:480,height:"auto"}})))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Press_Add.png",style:{width:480,height:"auto"}}))),(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add-on_Store.png",style:{width:480,height:"auto"}})))))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("details",null,(0,a.kt)("summary",null,"For convenience, show the 'File editor' in sidebar:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"})))),(0,a.kt)("p",null,"Now we get two add-ons."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"})),(0,a.kt)("h3",{id:"step-2-add-mqtt-integration-and-config"},"Step 2: Add MQTT Integration and Config"),(0,a.kt)("p",null,"After installing the MQTT Broker, you need to add MQTT integration and configuration to Home Assistant. This will allow Home Assistant to communicate with the SenseCAP Indicator Board."),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",{align:"center"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png",style:{width:480,height:"auto"}}))),(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png",style:{width:480,height:"auto"}})))))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If not discovered MQTT, restart Home Assistant to see the new one discovered.")),(0,a.kt)("h3",{id:"step-3-modify-configurationyaml-to-add-indicator-entity"},'Step 3: Modify "configuration.yaml" to Add Indicator Entity'),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("strong",{parentName:"p"},"File editor")," add-on in Home Assistant Yellow to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," file."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Click to copy Configuration.yaml to configure Integrations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# Example configuration.yaml entry\nmqtt:\n  sensor:\n    - unique_id: indicator_temperature\n      name: "Indicator Temperature"\n      state_topic: "indicator/sensor"\n      suggested_display_precision: 1\n      unit_of_measurement: "\xb0C"\n      value_template: "{{ value_json.temp }}"\n    - unique_id: indicator_humidity\n      name: "Indicator Humidity"\n      state_topic: "indicator/sensor"\n      unit_of_measurement: "%"\n      value_template: "{{ value_json.humidity }}"\n    - unique_id: indicator_co2\n      name: "Indicator CO2"\n      state_topic: "indicator/sensor"\n      unit_of_measurement: "ppm"\n      value_template: "{{ value_json.co2 }}"\n    - unique_id: indicator_tvoc\n      name: "Indicator tVOC"\n      state_topic: "indicator/sensor"\n      unit_of_measurement: ""\n      value_template: "{{ value_json.tvoc }}"\n  switch:\n    - unique_id: indicator_switch1\n      name: "Indicator Switch1"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      value_template: "{{ value_json.switch1 }}"\n      payload_on: \'{"switch1":1}\'\n      payload_off: \'{"switch1":0}\'\n      state_on: 1\n      state_off: 0\n    - unique_id: indicator_switch2\n      name: "Indicator Switch2"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      value_template: "{{ value_json.switch2 }}"\n      payload_on: \'{"switch2":1}\'\n      payload_off: \'{"switch2":0}\'\n      state_on: 1\n      state_off: 0\n    - unique_id: indicator_switch3\n      name: "Indicator Switch3"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      value_template: "{{ value_json.switch3 }}"\n      payload_on: \'{"switch3":1}\'\n      payload_off: \'{"switch3":0}\'\n      state_on: 1\n      state_off: 0\n    - unique_id: indicator_switch4\n      name: "Indicator Switch4"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      value_template: "{{ value_json.switch4 }}"\n      payload_on: \'{"switch4":1}\'\n      payload_off: \'{"switch4":0}\'\n      state_on: 1\n      state_off: 0\n    - unique_id: indicator_switch6\n      name: "Indicator Switch6"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      value_template: "{{ value_json.switch6 }}"\n      payload_on: \'{"switch6":1}\'\n      payload_off: \'{"switch6":0}\'\n      state_on: 1\n      state_off: 0\n    - unique_id: indicator_switch7\n      name: "Indicator Switch7"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      value_template: "{{ value_json.switch7 }}"\n      payload_on: \'{"switch7":1}\'\n      payload_off: \'{"switch7":0}\'\n      state_on: 1\n      state_off: 0\n  number:\n    - unique_id: indicator_switch5\n      name: "Indicator Switch5"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      command_template: \'{"switch5": {{ value }} }\'\n      value_template: "{{ value_json.switch5 }}"\n    - unique_id: indicator_switch8\n      name: "Indicator Switch8"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      command_template: \'{"switch8": {{ value }} }\'\n      value_template: "{{ value_json.switch8 }}"\n'))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If your local server doesn't support Add-ons, such as Home Assistant Container, you need to modify the configuration.yaml through terminal.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png"})),(0,a.kt)("p",null,"The next step is to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," file to add the Indicator entity. This file is used by Home Assistant to keep track of the various entities in your setup."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png"})),(0,a.kt)("p",null,"Add the code into the ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," like this:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png"})),(0,a.kt)("p",null,"Save the file, and go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Developer Tools")," to update YAML configuration."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png"})),(0,a.kt)("h3",{id:"step-4-edit-dashboard"},"Step 4: Edit Dashboard"),(0,a.kt)("p",null,"The final step is to edit the Home Assistant dashboard. You need to add the following to the raw configuration editor of the dashboard:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Click to copy Dashboard YAML to change the UI"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: This is not for ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration.YAML"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"views:\n  - title: Indicator device\n    icon: ''\n    badges: []\n    cards:\n      - graph: line\n        type: sensor\n        detail: 1\n        icon: mdi:molecule-co2\n        unit: ppm\n        entity: sensor.indicator_co2\n      - graph: line\n        type: sensor\n        entity: sensor.indicator_temperature\n        detail: 1\n        icon: mdi:coolant-temperature\n      - graph: line\n        type: sensor\n        detail: 1\n        entity: sensor.indicator_humidity\n      - graph: line\n        type: sensor\n        entity: sensor.indicator_tvoc\n        detail: 1\n        icon: mdi:air-filter\n      - type: entities\n        entities:\n          - entity: switch.indicator_switch1\n          - entity: switch.indicator_switch2\n          - entity: switch.indicator_switch3\n          - entity: switch.indicator_switch4\n          - entity: number.indicator_switch5\n          - entity: switch.indicator_switch6\n          - entity: switch.indicator_switch7\n          - entity: number.indicator_switch8\n        title: Indicator control\n        show_header_toggle: false\n        state_color: true\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Create a dashboard for SenseCAP Indicator(not necessary, any dashboard is ok)"),(0,a.kt)("p",null,"switch the sidebar: ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings->Dashboards"),":"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard.png"})),(0,a.kt)("p",null,"Set a title and Icon you like, then create it."),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",{align:"center"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png",style:{width:480,height:"auto"}}))),(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png",style:{width:480,height:"auto"}}))))))),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",{align:"center"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png",style:{width:480,height:"auto"}}))),(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png",style:{width:480,height:"auto"}})))))),(0,a.kt)("p",null,"Press the  ",(0,a.kt)("inlineCode",{parentName:"p"},"TAKE CONTROL")," button."),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",{align:"center"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png",style:{width:480,height:"auto"}}))),(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png",style:{width:480,height:"auto"}})))))),(0,a.kt)("p",null,"Replace the YAML contents as above:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Done.png"})),(0,a.kt)("p",null,"Now you've already finish the Home Assistant configuration."),(0,a.kt)("h3",{id:"add-users-for-mqtt-adds-on"},"Add Users for MQTT adds-on"),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",{align:"center"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png",style:{width:480,height:"auto"}}))),(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png",style:{width:480,height:"auto"}})))))),(0,a.kt)("h2",{id:"Config_HA"},"Project Configuration"),(0,a.kt)("p",null,"The purpose of this section is to establish the default communication between Home Assistant (HA) and the Indicator."),(0,a.kt)("h3",{id:"step-1-configure-ip-address"},"Step 1: Configure IP Address"),(0,a.kt)("p",null,"Normally, the default Home Assistant server address is ",(0,a.kt)("inlineCode",{parentName:"p"},"homeassistant.local"),", if you have multiple Home Assistant servers, or if there is no default DNS resolution, or if there are multiple IP server addresses, you will need to configure the IP address accordingly."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"ha_config.h"),", changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_BROKER_URL")," value, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// #define CONFIG_BROKER_URL    "mqtt://homeassistant.local" // Default\n#define CONFIG_BROKER_URL    "mqtt://192.168.1.100" // To yours\n')),(0,a.kt)("h3",{id:"step-2-configure-user-name-and-password"},"Step 2: Configure User Name and Password"),(0,a.kt)("p",null,"If you have a username and password, you will need to configure them. This can be done in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_start")," function in the ",(0,a.kt)("inlineCode",{parentName:"p"},"indicator_ha.c")," file, specifically in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_cfg")," configuration. If you do not have a username and password, you can comment them out."),(0,a.kt)("p",null,"Here is an example of how to configure the username and password:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'    esp_mqtt_client_config_t mqtt_cfg = {\n        .broker.address.uri = CONFIG_BROKER_URL,\n        .credentials.username = "MQTT_Indicator_1", // Your Home Assistant user\n        .credentials.authentication.password = "kjdf", // user\'s password\n    };\n')),(0,a.kt)("p",null,"After completing these steps and building it, you should be able to see the Home Assistant and Indicator working together."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"})),(0,a.kt)("h2",{id:"build-and-flash-the-native-firmware"},"Build and Flash the Native Firmware"),(0,a.kt)("p",null,"Once you have completed the above steps, you are ready to build and flash the project."),(0,a.kt)("div",{class:"github_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"github_item",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Download the Project")))," ",(0,a.kt)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,a.kt)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clone the git repository."),(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"examples\\indicator_ha")," folder.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"idf.py -p PORT build flash monitor")," to build, flash and monitor the project."),(0,a.kt)("li",{parentName:"ul"},"To exit the serial monitor, type ",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl-]"),".")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32\n$ cd SenseCAP_Indicator_ESP32/examples/indicator_ha\n$ idf.py -p PORT build flash monitor\n")),(0,a.kt)("admonition",{title:"PSRAM Octal 120M feature required",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The project configure PSRAM with Octal 120M by default. Please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/tools/patch/README.md#idf-patch"},"here")," to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"PSRAM Octal 120M"),"  feature.")),(0,a.kt)("p",null,"For full steps to configure and use ESP-IDF to build projects, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html"},"Getting Started Guide"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As the Home Assistant demo is mainly based on the indicator_basis demo, you could enjoy the Home Assistant functions when sliding to the other panel.")),(0,a.kt)("h2",{id:"additional-information"},"Additional Information"),(0,a.kt)("h3",{id:"modifying-configuration"},"Modifying Configuration"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"ha_config.h")," file, there are several tags that are used for MQTT communication. These tags are used to identify different components in the system and can be modified according to your needs."),(0,a.kt)("p",null,"For instance, for ",(0,a.kt)("em",{parentName:"p"},"sensor5"),", the tags are defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#define CONFIG_SENSOR5_VALUE_KEY     "temp"\n#define CONFIG_SENSOR5_UI_UNIT       "\xb0C"\n#define CONFIG_SENSOR5_UI_NAME       "Temp"\n#define CONFIG_SENSOR5_TOPIC_DATA    CONFIG_TOPIC_SENSOR_DATA\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_SENSOR5_VALUE_KEY")," tag is used for parsing JSON and structuring JSON data. This tag determines the key that will be used to extract the sensor data from the incoming MQTT messages."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SenseCAP Indicator UI")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_SENSOR5_UI_UNIT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_SENSOR5_UI_NAME")," tags are used to set the display on the SenseCAP Indicator. The ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_SENSOR5_UI_UNIT")," tag determines the unit of measurement that will be displayed, while the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_SENSOR5_UI_NAME")," tag determines the name of the sensor that will be displayed."),(0,a.kt)("p",null,"If you want to change the title or the unit of measurement displayed on the SenseCAP Indicator, you can simply modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_SENSOR5_UI_UNIT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_SENSOR5_UI_NAME")," tags. The same principle applies to other sensors and switch as well."),(0,a.kt)("h3",{id:"config_broker_url"},"CONFIG_BROKER_URL"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_BROKER_URL")," should be related to the Home Assistant's MQTT broker address. This is crucial for the communication between the SenseCAP Indicator and Home Assistant."),(0,a.kt)("h3",{id:"relationship-between-ha_configh-and-configurationyaml"},"Relationship between ",(0,a.kt)("inlineCode",{parentName:"h3"},"ha_config.h")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"Configuration.yaml")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ha_config.h")," file is a header file in the C programming language. It contains definitions to be shared between several source files. In this case, it contains definitions related to the MQTT configuration."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," file, on the other hand, is a file used by Home Assistant to keep track of the various entities in your setup."),(0,a.kt)("p",null,"When you modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," file to add the Indicator entity, you are essentially adding the definitions from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ha_config.h")," file to the Home Assistant setup."),(0,a.kt)("h3",{id:"indicator_hac-functions"},(0,a.kt)("inlineCode",{parentName:"h3"},"indicator_ha.c")," Functions"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"indicator_ha.c")," file contains the main functions for the Home Assistant integration. It includes functions for initializing the MQTT client, subscribing to topics, and handling incoming messages."),(0,a.kt)("p",null,"You can find the ",(0,a.kt)("inlineCode",{parentName:"p"},"indicator_ha.c")," file ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c"},"here"),"."),(0,a.kt)("p",null,"This file contains the main functions for the Home Assistant integration. It includes functions for initializing the MQTT client, subscribing to topics, and handling incoming messages. Here's a brief overview of the critical functions and how they work together:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_event_handler()"),": This function is the main event handler for MQTT events. It is called whenever an event occurs in the MQTT client, such as a new message arriving, a connection being established, or a disconnection happening. Depending on the type of event, it performs different actions. For example, if a new message arrives, it calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_message_arrived()")," function to handle the message.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_message_arrived()"),": This function is called when a new MQTT message arrives. It parses the message and performs the appropriate action based on the message's content. For example, it might update the state of a sensor or switch based on the received message.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_subscribe()"),": This function is used to subscribe to MQTT topics. When you subscribe to a topic, you tell the MQTT broker that you want to receive messages published to that topic. In the context of the SenseCAP Indicator, this function is used to subscribe to the topics that the Indicator's sensors and switches publish their states to.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_publish()"),": This function is used to publish messages to MQTT topics. When you publish a message to a topic, it is sent to the MQTT broker, which then forwards it to all clients that have subscribed to that topic. In the context of the SenseCAP Indicator, this function is used to publish the states of the Indicator's sensors and switches.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_app_start()"),": This function is used to start the MQTT client. It sets up the MQTT client configuration, creates the MQTT client, sets the MQTT event handler, and finally connects the MQTT client to the MQTT broker.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"indicator_ha_init()"),": This is the main initialization function for the Home Assistant integration. It initializes the MQTT client by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_app_start()"),", and then subscribes to the necessary MQTT topics by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_subscribe()"),"."))),(0,a.kt)("p",null,"These functions work together to enable the communication between the SenseCAP Indicator and Home Assistant via MQTT. The ",(0,a.kt)("inlineCode",{parentName:"p"},"indicator_ha_init()")," function starts the MQTT client and subscribes to the necessary topics. Then, whenever an MQTT event occurs, the ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_event_handler()")," function is called to handle the event. If a new message arrives, it calls ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_message_arrived()")," to handle the message. And whenever the state of a sensor or switch changes, ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_publish()")," is called to publish the new state to the corresponding MQTT topic."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Demo SDK"),": The Demo SDK for the SenseCAP Indicator is available on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32"},"GitHub"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"indicator_ha.c")," File"),": This file contains the main functions for the Home Assistant integration. You can view it ",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c"},"here"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"User Guide"),": The User Guide provides detailed information about the software and hardware of the SenseCAP Indicator Board. You can read it ",(0,a.kt)("a",{parentName:"li",href:"/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator"},"here"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Home Assistant Installation Guide"),": If you're new to Home Assistant, this guide will help you get it installed and set up. You can find it ",(0,a.kt)("a",{parentName:"li",href:"https://www.home-assistant.io/installation/"},"here"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Getting Started Guide for ESP-IDF"),": This guide provides full steps to configure and use ESP-IDF to build projects. You can access it ",(0,a.kt)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html"},"here"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.home-assistant.io/getting-started/concepts-terminology/"},"Home Assistant Concepts and terminology"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Need help with your SenseCAP Indicator? We're here to assist you!")),(0,a.kt)("p",null,"If you encounter any issues or have any questions while following this tutorial, please feel free to reach out to our tech support. We are always here to help!"),(0,a.kt)("p",null,"Visit our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/sensecap"},"Seeed Official Discord Channel")," to ask your questions or the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions"},"GitHub discussions")," to share all you want!"))}h.isMDXComponent=!0}}]);