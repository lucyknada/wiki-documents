"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14661],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(i),h=n,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||r;return i?o.createElement(m,l(l({ref:t},d),{},{components:i})):o.createElement(m,l({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:n,l[1]=a;for(var u=2;u<r;u++)l[u]=i[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},12290:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=i(87462),n=(i(67294),i(3905));const r={description:"Music_Shield_V2.2",title:"Music Shield V2.2",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Music_Shield_V2.2",last_update:{date:"01/30/2023",author:"Eico"},no_comments:!1},l=void 0,a={unversionedId:"Top_Brand/Arduino/shield/Music_Shield_V2.2",id:"Top_Brand/Arduino/shield/Music_Shield_V2.2",title:"Music Shield V2.2",description:"Music_Shield_V2.2",source:"@site/docs/Top_Brand/Arduino/shield/Music_Shield_V2.2.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Music_Shield_V2.2",permalink:"/Music_Shield_V2.2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Music_Shield_V2.2.md",tags:[],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Music_Shield_V2.2",title:"Music Shield V2.2",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Music_Shield_V2.2",last_update:{date:"01/30/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Brushless Motor Shield TB6605FTG",permalink:"/Brushless_Motor_Shield_TB6605FTG"},next:{title:"NFC Shield V2.0",permalink:"/NFC_Shield_V2.0"}},s={},u=[{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"<strong>Play music</strong>",id:"play-music",level:3},{value:"Reference",id:"reference",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_Shield_Picture.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Time to build your real-time MIDI instrument/music player! It can play many format including MP3, WMA, WAV, AAC, MIDI, Ogg Vorbis. The Music Shield is an audio encoder/decoder compatible with Arduino, Seeeduino, Seeeduino Mega and Arduino Mega. It is based on the VC1053B chip, which enabled it to play sound files from SD card and do short-time recording as well. You can also use it to play MIDI notes by slightly changing its hardware installations. Due to the SPI communication mode, it keeps a minimum number of IO port that facilitates users\u2019 own developments of this device. Additionally, the new multifunction button provides greater convenience for users to control."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The recording function works with Seeeduino Mega and Arduino Mega only. And the maximum size SD card you can use is 2GB.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/depot/Music-Shield-V20-p-1372.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_frame.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Multifunction button:")," Change volume and select songs."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Play/Pause indicator LED (GREEN)\uff1a"),"Blinks while playing."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Headsets interface:")," It can drive 16 ohm or 32 Ohm earphone and could serve as a external audio input port."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Micro SD card"),": Can be FAT16 or FAT32, the maximum size SD card you can use is 2GB."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"U2:")," VS1053B IC,Ogg Vorbis/MP3/AAC/WMA/FLAC/MIDI audio codec."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"U3,U7:")," 74VHC125 IC, Quad Buffer"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"I2S:")," For digital audio input/output."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ISP interface"),": for bringing SPI port when using with Mega series products."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Pins usage on Arduino"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pins used for Play Control:")),(0,n.kt)("p",null,"D3 - Receiving signal from button for Volume Up."),(0,n.kt)("p",null,"D4 - Receiving signal from switch for Next Song function."),(0,n.kt)("p",null,"D5 - Receiving signal from switch for Play&Stop and Record function."),(0,n.kt)("p",null,"D6 - Receiving signal from switch for Previous Song function."),(0,n.kt)("p",null,"D7 - Receiving signal from button for Volume Down."),(0,n.kt)("p",null,"D8 - Green Led instructions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pins Used for SPI Interface:")),(0,n.kt)("p",null,"D10 - SPI Chip Select"),(0,n.kt)("p",null,"D11 - SPI MOSI"),(0,n.kt)("p",null,"D12 - SPI MISO"),(0,n.kt)("p",null,"D13 - SPI SCK"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pins Used for VS1053 Interface:")),(0,n.kt)("p",null,"A0 - Reset of VS1053"),(0,n.kt)("p",null,"A1 - Data Require of VS1053"),(0,n.kt)("p",null,"A2 - Data Select of VS1053"),(0,n.kt)("p",null,"A3 - Chip Select of VS1053"),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield4.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"If you want to use MIDI function, you need to change the hardware installation."),(0,n.kt)("li",null,"If you changed the hardware installation in order to use MIDI function, you are not able to use playback & recording functions until you restore it to the original condition."))),(0,n.kt)("h3",{id:"play-music"},(0,n.kt)("strong",{parentName:"h3"},"Play music")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure there are songs in the micro SD card."),(0,n.kt)("li",{parentName:"ol"},"Download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Music_Shield"},"Music shield V2.0 library")),(0,n.kt)("li",{parentName:"ol"},"Unzip and copy the folder to Arduino\u2019s library path: ..\\arduino-1.0\\libraries.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Change the folder name of the extracted library if Arduino throws an error while loading.",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ol"},"Change the included header (to Arduino.h) in the example file if there is a ",(0,n.kt)("inlineCode",{parentName:"li"},"arduino.h: No such file or directory")," error while compiling."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Demo 1: Play songs (e.g. in shuffle mode)")),(0,n.kt)("p",null,"In order to use the playback function, you need to create a playlist first."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Restart the Arduino IDE. Open \u201ccreatList\u201d example via the path: File --\x3e Examples --\x3e MusicPlayer --\x3e creatList as below.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/OpenCreatListCode.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set the play mode. In \u201ccreatList\u201d, the function we use is described as follows."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Name:")," setPlayMode(unsigned char playmode);"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Function:")," Set the play mode. There are four modes you can set: MODE_NORMAL, MODE_SHUFFLE, MODE_REPEAT_LIST, MODE_REPEAT_ONE. Each mode stands for different playing orders."))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Play_Mode.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Select the type of Arduino board that you are using by the path: Tools --\x3e Board --\x3e for example Arduino UNO."),(0,n.kt)("li",{parentName:"ol"},"Select the correct serial port you are using by the path: Tools --\x3e Serial Port --\x3e for example COM3."),(0,n.kt)("li",{parentName:"ol"},"Upload the code. Click to Serial Monitor when \u201cDone uploading\u201d appears, you will find the order of songs is randomized on the list.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Play_List.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"When multifunction button is pressed up or down, the volume will change. Of course, you can try others play modes."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Demo 2: Play selected songs")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"This demo will show you how to play part of the songs from all songs in the SD card. Open the \u201caddToList\u201d example via the path: File --\x3e Examples --\x3e MusicPlayer --\x3e addToList.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Select_play.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select songs from the playlist.You just need to list songs you want to play by name correctly in the function addToPlayList(char *songName) .\nBut you must ensure that the song has been stored in the SD card and the format of those songs must be one of MP3,WMA,WAV,AAC,MIDI,Ogg Vorbis.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upload code. When you complete the upload,new add songs will be played."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Demo 3: Control Volume by analog port")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Plug the Grove-Base Shield onto the Music shield, Connect the Grove socket of the Rotary and analog port 4 of the Base Shield with a Grove cable. You can change to the digital port as well. But don't forget to change the port number in the definition of the demo code at the same time.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_5.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the \u201canalogInputControl\u201d example and upload it onto your Arduino Board.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rotate the knob to change music volume."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Demo 4: Record music:(Only support ATmega1280 and ATmega2560 based board)")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Upload any sketch in Music Shield library, for example the sketch "creatList". Open the Serial Monitor and it will play audio files on SD card.'),(0,n.kt)("li",{parentName:"ol"},"Press down the multifunction button for 5 seconds, then the indicator LED will light off."),(0,n.kt)("li",{parentName:"ol"},"Press down the multifunction button for 5 seconds again, then the music shield will begin to record, the green indicator LED will blink."),(0,n.kt)("li",{parentName:"ol"},"Quickly press down the multifunction button again, it will stop recording."),(0,n.kt)("li",{parentName:"ol"},"Record will be played in the last place.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Demo 5: Using MIDI")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'This demo will show you how to play notes from 3.5mm using MIDI.Open the "MidiDemoPlayer" example via the path: File --\x3e Examples --\x3e MusicPlayer --\x3e MidiDemoPlayer.')),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_midi_demo.jpeg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Upload Code to your arduino UNO.")),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"MIDI number to note reference list")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/MIDIlist.gif",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2.zip"},"Music Shield V2.2 Eagle Files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2_pdf.pdf"},"Music Shield V2.2 Schematic.pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/VS1053.pdf"},"VS1053 Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Music_Shield"},"Music Shield libraries"))),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);