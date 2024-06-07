"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91721],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(n),u=a,m=g["".concat(l,".").concat(u)]||g[u]||c[u]||s;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=n(58168),a=(n(96540),n(15680));const s={description:"Voice Assistant System with ReSpeaker Lite and XIAO ESP32S3",title:"Voice Assistant System with ReSpeaker Lite and XIAO ESP32S3",keywords:["ESP32S3","XIAO","reSpeaker","Home Assistant"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reSpeaker_v3_HA",last_update:{date:"4/2/2024",author:"Jessie"}},r=void 0,o={unversionedId:"Sensor/SenseCAP/ReSpeaker/reSpeaker_ha",id:"Sensor/SenseCAP/ReSpeaker/reSpeaker_ha",title:"Voice Assistant System with ReSpeaker Lite and XIAO ESP32S3",description:"Voice Assistant System with ReSpeaker Lite and XIAO ESP32S3",source:"@site/docs/Sensor/SenseCAP/ReSpeaker/reSpeaker_ha.md",sourceDirName:"Sensor/SenseCAP/ReSpeaker",slug:"/reSpeaker_v3_HA",permalink:"/reSpeaker_v3_HA",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/ReSpeaker/reSpeaker_ha.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1712016e3,formattedLastUpdatedAt:"Apr 2, 2024",frontMatter:{description:"Voice Assistant System with ReSpeaker Lite and XIAO ESP32S3",title:"Voice Assistant System with ReSpeaker Lite and XIAO ESP32S3",keywords:["ESP32S3","XIAO","reSpeaker","Home Assistant"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reSpeaker_v3_HA",last_update:{date:"4/2/2024",author:"Jessie"}}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Install Add-ons",id:"install-add-ons",level:3},{value:"Add Seeed Studio XIAO ESP32S3 to ESPHome",id:"add-seeed-studio-xiao-esp32s3-to-esphome",level:3},{value:"Add Voice Asssitant",id:"add-voice-asssitant",level:3}],d={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Say 'hello' to effortless control and 'goodbye' to tapping on screens with our voice assistant system.",(0,a.yg)("br",null),"\nPicture this: you're cozied up on your couch, and with just a simple shout-out to the ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"},"ReSpeaker Lite"),", you can switch up the lights, crank up the tunes, or even ask about the weather \u2013 all without lifting a finger. Thanks to a nifty little ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"},"Seeed XIAO ESP32S3")," chip, you've got a mini-but-mighty brain that hooks up your voice to Home Assistant, making your smart home smarter and your life a whole lot easier. So, if you're ready to make your home listen and respond to your voice as if it's just another member of the family, let's get started on this voice-activated adventure!"),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("p",null,"Navigate to your ",(0,a.yg)("a",{parentName:"p",href:"http://homeassistant.local:8123/"},"Home Assistant web interface"),". "),(0,a.yg)("p",null,"To unlock the full potential of Home Assistant and gain access to advanced features, it's recomended to enable the ",(0,a.yg)("inlineCode",{parentName:"p"},"Advanced mode")," in the user interface."),(0,a.yg)("p",null,"Click on your profile, and enable the ",(0,a.yg)("inlineCode",{parentName:"p"},"Advanced mode"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/advanced-mode.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("h3",{id:"install-add-ons"},"Install Add-ons"),(0,a.yg)("p",null,"Go to ",(0,a.yg)("a",{parentName:"p",href:"https://my.home-assistant.io/redirect/supervisor"},"Settings > Add-ons"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/add-ons.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Under the Official ",(0,a.yg)("inlineCode",{parentName:"p"},"add-ons")," section, you will find the ",(0,a.yg)("inlineCode",{parentName:"p"},"ESPHome"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Whisper"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Piper"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"openWakeWord")," add-on, and click ",(0,a.yg)("inlineCode",{parentName:"p"},"Install"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Enable ",(0,a.yg)("inlineCode",{parentName:"p"},"Start on boot")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Watchdog"),", and click ",(0,a.yg)("inlineCode",{parentName:"p"},"Start"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/start-addons.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"After the installation script has finished, restart Home Assistant to apply the changes. "),(0,a.yg)("p",{parentName:"admonition"},"After this add-on is installed and running, it will be automatically discovered by the Wyoming integration."),(0,a.yg)("p",{parentName:"admonition"},"Go to ",(0,a.yg)("inlineCode",{parentName:"p"},"Settings")," > ",(0,a.yg)("inlineCode",{parentName:"p"},"System")," > ",(0,a.yg)("inlineCode",{parentName:"p"},"Restart"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/restart.png",alt:"pir",width:800,height:"auto"}))),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"Settings")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"Devices & Services"),", you will find these integrations under the ",(0,a.yg)("inlineCode",{parentName:"p"},"Discovered"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/device-page.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Click ",(0,a.yg)("inlineCode",{parentName:"p"},"CONFIGURE")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"SUBMIT"),". "),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/config-success.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/device-page.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/entities.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("h3",{id:"add-seeed-studio-xiao-esp32s3-to-esphome"},"Add Seeed Studio XIAO ESP32S3 to ESPHome"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Step 1: Navigate to ",(0,a.yg)("inlineCode",{parentName:"li"},"ESPHome"),", and click ",(0,a.yg)("inlineCode",{parentName:"li"},"+ NEW DEVICE"),".")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/add-new-esphome.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Step 2. Enter a Name for your device, then click ",(0,a.yg)("inlineCode",{parentName:"li"},"NEXT"),".")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/next11.png",alt:"pir",width:500,height:"auto"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Step 4. Select ",(0,a.yg)("inlineCode",{parentName:"p"},"ESP32-S3"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/choose-s3.png",alt:"pir",width:800,height:"auto"}))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Step 5. Click ",(0,a.yg)("inlineCode",{parentName:"p"},"SKIP"),", we will configure this file manually."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/.png",alt:"pir",width:800,height:"auto"}))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Step 6. Click ",(0,a.yg)("inlineCode",{parentName:"p"},"EDIT")," and copy the following code:"))),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/config.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("details",null,(0,a.yg)("summary",null,".yaml"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'esphome:\n  name: esp32s3\n  friendly_name: ReSpeakerv3\n  platformio_options:\n    board_build.flash_mode: dio\n    board_build.mcu: esp32s3\n  # on_boot:\n  #   then:\n  #     - if:\n  #            condition:\n  #              switch.is_on: \n  #            then:\n  #              - voice_assistant.start_continuous:\n\n\nesp32:\n  board: esp32-s3-devkitc-1\n  variant: esp32s3\n  framework:\n    type: esp-idf\n    version: recommended\n\nlogger:\n  level: VERY_VERBOSE\n\napi:\n\n\nwifi:\n  ssid: "Wi-Fi name"\n  password: "Wi-Fi password"\n\ncaptive_portal:\n\nexternal_components:\n  - source: github://QingWind6/ESPHome_XIAO-ESP32S3\n\ni2s_audio_xiao:\n  i2s_lrclk_pin: GPIO7\n  i2s_bclk_pin: GPIO8\n  i2s_mclk_pin: GPIO9\n\n\nmicrophone:\n  - platform: i2s_audio_xiao\n    id: xiao_mic\n    adc_type: external\n    i2s_din_pin: GPIO44\n    pdm: false\n    bits_per_sample: 32bit\n    channel: left\n\nspeaker:\n  - platform: i2s_audio_xiao\n    id: xiao_speaker\n    dac_type: external\n    i2s_dout_pin: GPIO43\n    mode: stereo\n\nvoice_assistant:\n  microphone: xiao_mic\n  use_wake_word: true\n  noise_suppression_level: 0\n  auto_gain: 0dBFS\n  volume_multiplier: 1\n  speaker: xiao_speaker\n  id: assist\n  on_listening:\n    - light.turn_on:\n        id: led\n        blue: 100%\n        red: 0%\n        green: 0%\n        effect: "Slow Pulse"\n  on_stt_vad_end:\n    - light.turn_on:\n        id: led\n        blue: 100%\n        red: 0%\n        green: 0%\n        effect: "Fast Pulse"\n  on_tts_start:\n    - light.turn_on:\n        id: led\n        blue: 100%\n        red: 0%\n        green: 0%\n        brightness: 100%\n        effect: none\n  on_end:\n    - delay: 100ms\n    - wait_until:\n        not:\n          speaker.is_playing:\n    - script.execute: reset_led\n  on_error:\n    - light.turn_on:\n        id: led\n        red: 100%\n        green: 0%\n        blue: 0%\n        brightness: 100%\n        effect: none\n    - delay: 1s\n    - script.execute: reset_led\n  on_client_connected:\n    - if:\n        condition:\n          switch.is_on: use_wake_word\n        then:\n          - voice_assistant.start_continuous:\n          - script.execute: reset_led\n  on_client_disconnected:\n    - if:\n        condition:\n          switch.is_on: use_wake_word\n        then:\n          - voice_assistant.stop:\n          - light.turn_off: led\n\nlight:\n  - platform: esp32_rmt_led_strip\n    id: led\n    name: None\n    disabled_by_default: true\n    entity_category: config\n    pin: GPIO1\n    default_transition_length: 0s\n    chipset: ws2812\n    num_leds: 1\n    rgb_order: grb\n    rmt_channel: 0\n    effects:\n      - pulse:\n          name: "Slow Pulse"\n          transition_length: 250ms\n          update_interval: 250ms\n          min_brightness: 50%\n          max_brightness: 100%\n      - pulse:\n          name: "Fast Pulse"\n          transition_length: 100ms\n          update_interval: 100ms\n          min_brightness: 50%\n          max_brightness: 100%\n\n# light:\n#   - platform: monochromatic\n#     id: led\n#     name: "Desk Lamp"\n#     output: light_output\n#     effects:\n#       - pulse:\n#           name: "Slow Breathing Light"\n#           transition_length: 5s  # \u7f13\u6162\u547c\u5438\u706f\uff0c\u6e10\u53d8\u65f6\u95f4\u8f83\u957f\n#       - pulse:\n#           name: "Fast Breathing Light"\n#           transition_length: 1s  # \u5feb\u901f\u547c\u5438\u706f\uff0c\u6e10\u53d8\u65f6\u95f4\u8f83\u77ed\n#       - pulse:\n#           name: "Fast Pulse"\n#           transition_length: 0.5s\n#           update_interval: 0.5s\n#           min_brightness: 0%\n#           max_brightness: 100%\n\noutput:\n  - platform: ledc\n    id: light_output\n    pin: GPIO21\n    inverted: true\n\n\nscript:\n  - id: reset_led\n    then:\n      - if:\n          condition:\n            - switch.is_on: use_wake_word\n            - switch.is_on: use_listen_light\n          then:\n            - light.turn_on:\n                id: led\n                effect: none\n\n          else:\n            - light.turn_off: \n               id: led\n\n\nswitch:\n  - platform: template\n    name: Use wake word\n    id: use_wake_word\n    optimistic: true\n    restore_mode: RESTORE_DEFAULT_ON\n    entity_category: config\n    on_turn_on:\n      - lambda: id(assist).set_use_wake_word(true);\n      - if:\n          condition:\n            not:\n              - voice_assistant.is_running\n          then:\n            - voice_assistant.start_continuous\n    on_turn_off:\n      - voice_assistant.stop\n      - lambda: id(assist).set_use_wake_word(false);\n\n  - platform: template\n    name: Use Listen Light\n    id: use_listen_light\n    optimistic: true\n    restore_mode: RESTORE_DEFAULT_ON\n    entity_category: config\n    on_turn_on:\n      - script.execute: reset_led\n    on_turn_off:\n      - script.execute: reset_led\n'))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Step 7: Click ",(0,a.yg)("inlineCode",{parentName:"li"},"SAVE")," and then ",(0,a.yg)("inlineCode",{parentName:"li"},"INSTALL"),".")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/click-install.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Step 8: Choose ",(0,a.yg)("inlineCode",{parentName:"li"},"Manual Download")," -> ",(0,a.yg)("inlineCode",{parentName:"li"},"Modern-format"),".")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/manual-download.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Step 9: Connect the XIAO ESP32S3 to your PC via a USB Type-C cable.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Step 10: Navigate to ",(0,a.yg)("a",{parentName:"p",href:"https://web.esphome.io/"},"Web-ESPHome"),", click ",(0,a.yg)("inlineCode",{parentName:"p"},"CONNECT"),", then choose the port and connect it."))),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/connect-port.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Step 11: Select the ",(0,a.yg)("inlineCode",{parentName:"li"},".bin")," file we just downloaded, and click ",(0,a.yg)("inlineCode",{parentName:"li"},"INSTALL"),".")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/install.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Wait for a few minutes for the installation. After the installation is successful, you will see the following prompt."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/install-done.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("h3",{id:"add-voice-asssitant"},"Add Voice Asssitant"),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"Settings")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"Voice Assistant"),". "),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/voice-assistant.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Enter a name and select:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Speech to text"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"Whisper")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Text to speech"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"Piper")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Wake word engine"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"openwakeword")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/piper-config.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Choose a wakeword you preferred."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/choose-wakeword.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/respeakerv3/piper-config.png",alt:"pir",width:800,height:"auto"})))}c.isMDXComponent=!0}}]);