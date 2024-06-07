"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46992],{15680:(e,r,a)=>{a.d(r,{xA:()=>l,yg:()=>m});var t=a(96540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),c=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},l=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(a),y=n,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||i;return a?t.createElement(m,o(o({ref:r},l),{},{components:a})):t.createElement(m,o({ref:r},l))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=y;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},48931:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var t=a(58168),n=(a(96540),a(15680));const i={description:"ReSpeaker 4-Mic Linear Array Kit",title:"ReSpeaker 4-Mic Linear Array Kit",keywords:["reSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi",last_update:{date:"1/11/2023",author:"jianjing Huang"}},o=void 0,p={unversionedId:"Seeed_Elderly/reSpeaker/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi",id:"Seeed_Elderly/reSpeaker/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi",title:"ReSpeaker 4-Mic Linear Array Kit",description:"ReSpeaker 4-Mic Linear Array Kit",source:"@site/docs/Seeed_Elderly/reSpeaker/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi.md",sourceDirName:"Seeed_Elderly/reSpeaker",slug:"/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi",permalink:"/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/reSpeaker/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"ReSpeaker 4-Mic Linear Array Kit",title:"ReSpeaker 4-Mic Linear Array Kit",keywords:["reSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi",last_update:{date:"1/11/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"ReSpeaker 4-Mic Array for Raspberry Pi",permalink:"/ReSpeaker_4_Mic_Array_for_Raspberry_Pi"},next:{title:"ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi",permalink:"/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi"}},s={},c=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Assembly drawing",id:"assembly-drawing",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Software",id:"software",level:3},{value:"Usage overview",id:"usage-overview",level:2},{value:"Record sound with Python",id:"record-sound-with-python",level:3},{value:"FAQ",id:"faq",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:c},d="wrapper";function u(e){let{components:r,...a}=e;return(0,n.yg)(d,(0,t.A)({},l,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/main_wiki.jpg",alt:"enter image description here"})),(0,n.yg)("p",null,"Seeed\u2019s ReSpeaker 4-Mic Linear Array Kit is\nan extension board, aka HAT designed for Raspberry Pi. It's a linear microphone array\nkit, comes with four microphones and\ndesigned for AI and voice applications. That\nmeans you can build a more powerful and\nflexible voice product with Raspberry Pi\nwhich can integrate Amazon Alexa Voice\nService, Google Assistant, and so on."),(0,n.yg)("p",null,"ReSpeaker 4-Mic Linear Array Kit for\nRaspberry Pi consists of two boards, one is\nvoice accessory HAT, another is four\nmicrophones linear array."),(0,n.yg)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/NxZx9nz67Bc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.yg)("p",null,"ReSpeaker 4-Mic Linear Array Kit for\nRaspberry Pi support 8 input & 8 output\nchannels in Raspberry Pi OS. The first 6\ninput channels for microphone\nrecording (only first 4 input channels are\nvalid capture data), rest of 2 input channel\nare echo channel of playback. The first 2\noutput channel are for sound output, the rest of 6 output\nchannels are dummy."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("a",{href:"https://www.seeedstudio.com/ReSpeaker-4-Mic-Linear-Array-Kit-p-3066.html",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"2 ADC chips and 1 DAC chip"),(0,n.yg)("li",{parentName:"ul"},"8 input and 8 output channels"),(0,n.yg)("li",{parentName:"ul"},"Four microphones array"),(0,n.yg)("li",{parentName:"ul"},"Grove support"),(0,n.yg)("li",{parentName:"ul"},"Raspberry Pi compatible (Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)"),(0,n.yg)("li",{parentName:"ul"},"Headset and speaker voice output")),(0,n.yg)("h2",{id:"specification"},"Specification"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"2 x X-Power AC108 ADC"),(0,n.yg)("li",{parentName:"ul"},"4 x high performance analog microphones"),(0,n.yg)("li",{parentName:"ul"},"1 x X-Power AC101 DAC"),(0,n.yg)("li",{parentName:"ul"},"Voice output:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"3.5mm headset audio jack"),(0,n.yg)("li",{parentName:"ul"},"Speaker jack"))),(0,n.yg)("li",{parentName:"ul"},"Compatible with Raspberry Pi 40-pin headers"),(0,n.yg)("li",{parentName:"ul"},"Microphones: MSM321A3729H9BP"),(0,n.yg)("li",{parentName:"ul"},"Sensitivity: -22 dBFS (Omnidirectional)"),(0,n.yg)("li",{parentName:"ul"},"SNR: 59 dB"),(0,n.yg)("li",{parentName:"ul"},"Max Sample Rate: 48Khz")),(0,n.yg)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Smart speaker"),(0,n.yg)("li",{parentName:"ul"},"Intelligent voice assistant systems"),(0,n.yg)("li",{parentName:"ul"},"Voice recorders"),(0,n.yg)("li",{parentName:"ul"},"Voice conferencing system"),(0,n.yg)("li",{parentName:"ul"},"Meeting communicating equipment"),(0,n.yg)("li",{parentName:"ul"},"Voice interacting robot"),(0,n.yg)("li",{parentName:"ul"},"Car voice assistant"),(0,n.yg)("li",{parentName:"ul"},"Other scenarios need voice command")),(0,n.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"System Diagram")),(0,n.yg)("a",{href:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Interface")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/Hardware.jpg",alt:null})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"After connecting, be sure to use a multimeter to determine if the conduction of the circuit is as indicated in the figure above.")),(0,n.yg)("h2",{id:"assembly-drawing"},"Assembly drawing"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png",alt:null})),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Connect ReSpeaker 4-Mic Array to Raspberry Pi")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 1."),"  Connect the ",(0,n.yg)("em",{parentName:"p"},"ReSpeaker Voice Accessory HAT")," with ",(0,n.yg)("em",{parentName:"p"},"ReSpeaker 4-Mic linear Array")," via the Ribbon Cable"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 2."),"  Plug the ",(0,n.yg)("em",{parentName:"p"},"ReSpeaker Voice Accessory HAT")," into the ",(0,n.yg)("em",{parentName:"p"},"Raspberry Pi")," via the 40 Pin GPIO"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 3."),"  Plug the ",(0,n.yg)("em",{parentName:"p"},"earphone")," into the ",(0,n.yg)("em",{parentName:"p"},"3.5mm headset audio jack")," or plug the ",(0,n.yg)("em",{parentName:"p"},"speaker")," into the ",(0,n.yg)("em",{parentName:"p"},"JST 2.0 speaker jack")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 4."),"  Connect the ",(0,n.yg)("em",{parentName:"p"},"Raspberry Pi")," with the ",(0,n.yg)("em",{parentName:"p"},"PC")," via the micro-USB cable"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/4-mic.jpg",alt:"Pics here"})),(0,n.yg)("h3",{id:"software"},"Software"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 1. Install seeed-voicecard")),(0,n.yg)("p",null,"Get the seeed voice card source code. and install all linux kernel drivers."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"sudo apt-get update\ngit clone https://github.com/HinTak/seeed-voicecard.git\ncd seeed-voicecard\nsudo ./install.sh  \nsudo reboot\n\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 2. Check the Sound Card")),(0,n.yg)("p",null,"Tap the command below to check the record device."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"pi@raspberrypi:~ $ arecord -L\n")),(0,n.yg)("p",null,"It should be like:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"pi@raspberrypi:~ $ arecord -L\nnull\n    Discard all samples (playback) or generate zero samples (capture)\ndefault\n    Playback/recording through the PulseAudio sound server\nac108\ndmixer\nac101\nsysdefault:CARD=seeed8micvoicec\n    seeed-8mic-voicecard, \n    Default Audio Device\ndmix:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Direct sample mixing device\ndsnoop:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Direct sample snooping device\nhw:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Direct hardware device without any conversions\nplughw:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Hardware device with all software conversions\n")),(0,n.yg)("p",null,"Use the following command to check the play device."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"pi@raspberrypi:~ $ aplay -L\n")),(0,n.yg)("p",null,"It should be like:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"pi@raspberrypi:~ $ aplay -L\nnull\n    Discard all samples (playback) or generate zero samples (capture)\ndefault\n    Playback/recording through the PulseAudio sound server\nac108\ndmixer\nac101\nsysdefault:CARD=ALSA\n    bcm2835 ALSA, bcm2835 ALSA\n    Default Audio Device\ndmix:CARD=ALSA,DEV=0\n    bcm2835 ALSA, bcm2835 ALSA\n    Direct sample mixing device\ndmix:CARD=ALSA,DEV=1\n    bcm2835 ALSA, bcm2835 IEC958/HDMI\n    Direct sample mixing device\ndsnoop:CARD=ALSA,DEV=0\n    bcm2835 ALSA, bcm2835 ALSA\n    Direct sample snooping device\ndsnoop:CARD=ALSA,DEV=1\n    bcm2835 ALSA, bcm2835 IEC958/HDMI\n    Direct sample snooping device\nhw:CARD=ALSA,DEV=0\n    bcm2835 ALSA, bcm2835 ALSA\n    Direct hardware device without any conversions\nhw:CARD=ALSA,DEV=1\n    bcm2835 ALSA, bcm2835 IEC958/HDMI\n    Direct hardware device without any conversions\nplughw:CARD=ALSA,DEV=0\n    bcm2835 ALSA, bcm2835 ALSA\n    Hardware device with all software conversions\nplughw:CARD=ALSA,DEV=1\n    bcm2835 ALSA, bcm2835 IEC958/HDMI\n    Hardware device with all software conversions\nsysdefault:CARD=seeed8micvoicec\n    seeed-8mic-voicecard, \n    Default Audio Device\ndmix:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Direct sample mixing device\ndsnoop:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Direct sample snooping device\nhw:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Direct hardware device without any conversions\nplughw:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Hardware device with all software conversions\n\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 3. Record and Play")),(0,n.yg)("p",null,"You can record then play, or you can record and play at the same time."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"#It will capture sound on AC108 and save as a.wav\narecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav\n#Take care of that the captured mic audio is on the first 6 channels\n\n#It will play sound file a.wav on AC101\naplay -D ac101 a.wav\n#Do not use -D plughw:1,0 directly except your wave file is single channel only.\n\n")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Limit for developer using 4-Mic Linear Array Kit doing capture & playback the same time:"),(0,n.yg)("p",{parentName:"admonition"},"-1. capture must be start first, or else the capture channels will possibly be disorder."),(0,n.yg)("p",{parentName:"admonition"},"-2. playback output channels must fill with 8 same channels data or 4 same stereo channels data, or else the speaker or headphone will output nothing possibly."),(0,n.yg)("p",{parentName:"admonition"},"-3. If you want to play and record at the same time, the aplay music file must be mono, or you can not use this command to play.")),(0,n.yg)("p",null,"Also you can play and record with Audacity."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"    You should open Audacity via VNC or you can just use a monitor to open it\n"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"sudo apt update\nsudo apt install audacity\naudacity                      // run audacity\n\n")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/audacity.png",alt:null})),(0,n.yg)("h2",{id:"usage-overview"},"Usage overview"),(0,n.yg)("p",null,"To run the following examples, clone ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/respeaker/4mics_hat.git"},"https://github.com/respeaker/4mics_hat.git")," repository to your Raspberry Pi"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git clone https://github.com/respeaker/4mics_hat.git\n")),(0,n.yg)("p",null,"All the Python scripts, mentioned in the examples below can be found inside this repository. To install the necessary dependencies, from mic_hat repository folder, run"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"sudo apt-get install portaudio19-dev libatlas-base-dev\npip3 install -r requirements.txt\n")),(0,n.yg)("h3",{id:"record-sound-with-python"},"Record sound with Python"),(0,n.yg)("p",null,"We use ",(0,n.yg)("a",{parentName:"p",href:"https://people.csail.mit.edu/hubert/pyaudio/"},"PyAudio python library")," to record sound with Python."),(0,n.yg)("p",null,"First, run the following script to get the device index number of 2 Mic pi hat:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"python3 recording_examples/get_device_index.py\n")),(0,n.yg)("p",null,"You will see the device ID as below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)\n")),(0,n.yg)("p",null,"To record the sound, open ",(0,n.yg)("inlineCode",{parentName:"p"},"recording_examples/record.py")," file with nano or other text editor and change  ",(0,n.yg)("inlineCode",{parentName:"p"},"RESPEAKER_INDEX = 2")," to index number of ReSpeaker on your system. Then run python script record.py to make a recording:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"python3 recording_examples/record.py\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Step 6. If you want to extract channel 0 data from 8 channels, have a look at the content of ",(0,n.yg)("inlineCode",{parentName:"li"},"record_one_channel.py"),". For other channel X, please change ","[0::8]"," to ","[X::8]",".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"python3 recording_examples/record_one_channel.py\n")),(0,n.yg)("p",null,"To play the recorded samples you can either use aplay system utility, for example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"aplay -f cd -Dhw:0 output.wav #for Stereo sound\naplay -D plughw:0,0 output_one_channel.wav #for Mono sound from one channel\n")),(0,n.yg)("h2",{id:"faq"},"FAQ"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Q1: There are only 4 Mic in the Mic Array, how could it be 8 channels?")),(0,n.yg)("p",null,"A1: There are 2 AC108 in this array, and each AC108 chip has 4 channel output. So it comes a total of 8 channels here, 4 of which are for the microphone, two channels for the playback and the the rest 2 channels are not used."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Q2: If Raspberry can detect ReSpeaker 2-mics hat, but can't detect ReSpeaker 4-mics linear array?")),(0,n.yg)("p",null,"A2: Please click raspberry -> Preferences -> Raspberry Pi Configuration, then select the Interfaces tab, make sure the 1-Wire is Disabled."),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf"},"AC101 Datasheet")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf"},"AC108 Datesheet")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Driver]")," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/respeaker/seeed-voicecard"},"Seeed-Voice Driver")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Algorithms]")," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/respeaker/mic_array"},"Algorithms includes DOA, VAD, NS")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Voice Engine")," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/voice-engine/voice-engine"},"Voice Engine project, provides building blocks to create voice enabled objects")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Algorithms]")," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/voice-engine/ec"},"AEC")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Mechanical Drawing]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/res/2d.zip"},"2D Drawing"))),(0,n.yg)("h2",{id:"projects"},"Projects"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.hackster.io/SeeedStudio/mojing-mojing-a-smart-mirror-with-respeaker-e1ae20"},"Mojing Mojing - A Smart Mirror with ReSpeaker!"),": A smart mirror with voice interface control via ReSpeaker. We also connect with Wio Link to control other objects! Based on Raspberry Pi."),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);