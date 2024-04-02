"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},34080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={description:"Deploy Whisper on NVIDIA Jetson Orin for Real time Speech to Text",title:"Whisper on Jetson for Real time Speech to Text",keywords:["Edge","reComputer","Jetson","whisper"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"Whisper_on_Jetson_for_Real_Time_Speech_to_Text",last_update:{date:"03/14/2024",author:"Jiahao"},no_comments:!1},a="Deploy Whisper on NVIDIA Jetson Orin for Real time Speech to Text",s={unversionedId:"Edge/NVIDIA_Jetson/reComputer/Application/Whisper_on_Jetson_for_Real_Time_Speech_to_Text",id:"Edge/NVIDIA_Jetson/reComputer/Application/Whisper_on_Jetson_for_Real_Time_Speech_to_Text",title:"Whisper on Jetson for Real time Speech to Text",description:"Deploy Whisper on NVIDIA Jetson Orin for Real time Speech to Text",source:"@site/docs/Edge/NVIDIA_Jetson/reComputer/Application/Whisper_on_Jetson_for_Real_Time_Speech_to_Text.md",sourceDirName:"Edge/NVIDIA_Jetson/reComputer/Application",slug:"/Edge/NVIDIA_Jetson/reComputer/Application/Whisper_on_Jetson_for_Real_Time_Speech_to_Text",permalink:"/Edge/NVIDIA_Jetson/reComputer/Application/Whisper_on_Jetson_for_Real_Time_Speech_to_Text",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/reComputer/Application/Whisper_on_Jetson_for_Real_Time_Speech_to_Text.md",tags:[],version:"current",lastUpdatedBy:"Jiahao",lastUpdatedAt:1710374400,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{description:"Deploy Whisper on NVIDIA Jetson Orin for Real time Speech to Text",title:"Whisper on Jetson for Real time Speech to Text",keywords:["Edge","reComputer","Jetson","whisper"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"Whisper_on_Jetson_for_Real_Time_Speech_to_Text",last_update:{date:"03/14/2024",author:"Jiahao"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Real Time Subtitle Recoder on Nvidia Jetson",permalink:"/Real Time Subtitle Recoder on Nvidia Jetson"},next:{title:"Quantized Llama2-7B with MLC on Jetson",permalink:"/Edge/NVIDIA_Jetson/reComputer/Application/Quantized Llama2-7B with MLC on Jetson"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Hardware Setup",id:"hardware-setup",level:2},{value:"Hardware components",id:"hardware-components",level:3},{value:"hardware connection",id:"hardware-connection",level:3},{value:"Prepare the runtime environment",id:"prepare-the-runtime-environment",level:2},{value:"Step1. Install dependencies:",id:"step1-install-dependencies",level:4},{value:"Step2. Test environment:",id:"step2-test-environment",level:4},{value:"Let&#39;s run it",id:"lets-run-it",level:2},{value:"Riva vs Whisper",id:"riva-vs-whisper",level:2},{value:"Project Outlook",id:"project-outlook",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-whisper-on-nvidia-jetson-orin-for-real-time-speech-to-text"},"Deploy Whisper on NVIDIA Jetson Orin for Real time Speech to Text"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Real-time speech-to-text (STT) systems play a vital role in modern applications, from voice assistants to transcription services. Here are some popular STT model: Whisper, Riva, DeepSpeech, Google Cloud Speech-to-Text API, Microsoft Azure Speech Service, IBM Watson Speech to Text, Kaldi, Wit.ai and so on. The NVIDIA Jetson Orin, known for its high-performance and energy efficiency, offers a promising platform for deploying such demanding applications at the edge."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openai/whisper"},"Whisper"),", an advanced STT system leveraging deep learning, excels in accuracy and efficiency. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvidia-riva"},"Riva")," is a comprehensive, multimodal conversational AI framework developed by NVIDIA.By deploying Whisper or Riva on the Jetson Orin, developers can harness its powerful GPU and CPU cores, along with hardware acceleration technologies like Tensor Cores, to achieve real-time STT with low latency."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif"})),(0,o.kt)("p",null,"In this wiki we introduce you ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git"},"Real Time Whisper on Jetson"),", this integration enables speech processing directly on the device, eliminating the need for constant network connectivity and enhancing privacy and security. Additionally, we will compare the inference speed of Whisper and Riva when deployed on the same Jetson Orin device. Ultimately, deploying Whisper on the Jetson Orin empowers developers to build robust, efficient STT applications that deliver high accuracy and low latency in various domains, from smart homes to industrial automation."),(0,o.kt)("h2",{id:"hardware-setup"},"Hardware Setup"),(0,o.kt)("h3",{id:"hardware-components"},"Hardware components"),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"reComputer(Or other devices based on Jetson)"),(0,o.kt)("th",null,"reSpeaker (Or other USB interface microphones)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg",style:{width:250,height:"auto"}}))),(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png",style:{width:250,height:"auto"}})))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.kt)("h3",{id:"hardware-connection"},"hardware connection"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h2",{id:"prepare-the-runtime-environment"},"Prepare the runtime environment"),(0,o.kt)("h4",{id:"step1-install-dependencies"},"Step1. Install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git\ncd Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text\npip install -r requirements.txt\nsudo apt update && sudo apt install ffmpeg\narecord -D hw:2,0 --dump-hw-params #set microphone rate to 16000\n")),(0,o.kt)("h4",{id:"step2-test-environment"},"Step2. Test environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python test.py\n")),(0,o.kt)("p",null,"If you see the following information printed in the terminal, it means you have successfully installed the necessary libraries."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Deploy-whisper-on-Nvidia-Jetson-orin-for-real-time-speech-to-text-test.png",alt:"pir",width:1e3,height:"auto"})),(0,o.kt)("p",null,"In your terminal(Ctrl+Alt+T), input ",(0,o.kt)("inlineCode",{parentName:"p"}," ffmpeg -version")," if you get something like following that means you have installed ffmpeg."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Whisper-ffmpeg.png",alt:"pir",width:1e3,height:"auto"})),(0,o.kt)("h2",{id:"lets-run-it"},"Let's run it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python main.py\n")),(0,o.kt)("iframe",{width:"800",height:"400",src:"https://www.youtube.com/embed/KR0GYqUuo5Y?si=uSGUkKmCSZmaq5f7",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("h2",{id:"riva-vs-whisper"},"Riva vs Whisper"),(0,o.kt)("p",null,"Riva, known for its advanced AI-driven speech recognition and natural language processing, empowers users with real-time transcription, translation, and analysis of spoken conversations. "),(0,o.kt)("p",null,"Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. Moreover, it enables transcription in multiple languages, as well as translation from those languages into English. "),(0,o.kt)("p",null,"In the upcoming comparative video, we'll compare ability of ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/"},"Riva")," and Whisper in Speech to Text developed on Nvidia Jetson."),(0,o.kt)("iframe",{width:"800",height:"400",src:"https://www.youtube.com/embed/2l7yus611DI?si=XdEjwzpZdJkLC8aB",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,o.kt)("h2",{id:"project-outlook"},"Project Outlook"),(0,o.kt)("p",null,"In this project, we use the Whisper to capture data from the microphone input in real-time and display it on a webpage. In the future, we will enhance the real-time processing capabilities of Whisper to further reduce latency and improve the accuracy of speech recognition and explore integration with other AI services or APIs to enhance the functionality of the application."))}u.isMDXComponent=!0}}]);