"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43991],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(i),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return i?n.createElement(h,a(a({ref:t},u),{},{components:i})):n.createElement(h,a({ref:t},u))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},31550:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=i(87462),r=(i(67294),i(3905));const o={description:"Real Time Subtitle Recoder on Nvidia Jetson",title:"Real Time Subtitle Recoder on Nvidia Jetson",keywords:["Edge","reComputer","Jetson"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Real Time Subtitle Recoder on Nvidia Jetson",last_update:{date:"02/23/2024",author:"Jiahao"},no_comments:!1},a="Speech Subtitle Generation on Nvidia Jetson",l={unversionedId:"Edge/NVIDIA_Jetson/reComputer/Application/Real_Time_Subtitle_Recoder_on_Jetson",id:"Edge/NVIDIA_Jetson/reComputer/Application/Real_Time_Subtitle_Recoder_on_Jetson",title:"Real Time Subtitle Recoder on Nvidia Jetson",description:"Real Time Subtitle Recoder on Nvidia Jetson",source:"@site/docs/Edge/NVIDIA_Jetson/reComputer/Application/Real_Time_Subtitle_Recoder_on_Jetson.md",sourceDirName:"Edge/NVIDIA_Jetson/reComputer/Application",slug:"/Real Time Subtitle Recoder on Nvidia Jetson",permalink:"/Real Time Subtitle Recoder on Nvidia Jetson",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/reComputer/Application/Real_Time_Subtitle_Recoder_on_Jetson.md",tags:[],version:"current",lastUpdatedBy:"Jiahao",lastUpdatedAt:1708646400,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{description:"Real Time Subtitle Recoder on Nvidia Jetson",title:"Real Time Subtitle Recoder on Nvidia Jetson",keywords:["Edge","reComputer","Jetson"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Real Time Subtitle Recoder on Nvidia Jetson",last_update:{date:"02/23/2024",author:"Jiahao"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Local Voice Chatbot",permalink:"/Local_Voice_Chatbot"},next:{title:"reComputer for Jetson Tutorials and Exercise",permalink:"/reComputer_Jetson_Series_Tutorials_Exercise"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Hardware Setup",id:"hardware-setup",level:2},{value:"Prepare the runtime environment",id:"prepare-the-runtime-environment",level:2},{value:"Step1. Install Riva ASR Server:",id:"step1-install-riva-asr-server",level:4},{value:"Step2. Install flask:",id:"step2-install-flask",level:4},{value:"Step3. upgrade pip setuptools wheel:",id:"step3-upgrade-pip-setuptools-wheel",level:4},{value:"Step4. install pyaudio:",id:"step4-install-pyaudio",level:4},{value:"Let&#39;s run it",id:"lets-run-it",level:2},{value:"Project Outlook",id:"project-outlook",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"speech-subtitle-generation-on-nvidia-jetson"},"Speech Subtitle Generation on Nvidia Jetson"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Nowadays, we have many meetings every day, but some of the meeting content is not intended to be published. Sending meeting content to the cloud for recording and returning subtitles can pose a significant threat to meeting privacy. And the most important thing is you will lose your meeting content if the internet is delayed. "),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recoder.gif"})),(0,r.kt)("p",null,"And here we introduce you ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yuyoujiang/Real-time-Subtitle-Recorder-on-Jetson"},"Speech Subtitle Generation on Jetson"),", which can offer real-time speech-to-subtitle services while avoiding information leakage on the internet. Meeting content can be transcribed and displayed on screens using an AI model in subtitle form, which can protect meeting privacy and reduce meeting recorder workload."),(0,r.kt)("h2",{id:"hardware-setup"},"Hardware Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products"},"reComputer ")," (Or other devices based on Jetson)")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg",alt:"left",width:800,height:"auto"})),(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products"},"reSpeaker")," (Or other USB interface microphones)")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png",alt:"auto",width:800,height:"auto"})),(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products)"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hardware connection",(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png",alt:"pir",width:800,height:"auto"})))),(0,r.kt)("h2",{id:"prepare-the-runtime-environment"},"Prepare the runtime environment"),(0,r.kt)("h4",{id:"step1-install-riva-asr-server"},"Step1. Install Riva ASR Server:"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Local_Voice_Chatbot/#install-riva-server"},"this wiki")," for installing Riva ASR Server. "),(0,r.kt)("p",null,"In your terminal(Ctrl+Alt+T), input ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo docker ps")," and you will see something like following, that means you have finished the first step."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/riva.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("h4",{id:"step2-install-flask"},"Step2. Install flask:"),(0,r.kt)("p",null,"Open the terminal (",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+Alt+T"),") and using the following command to install flask:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip3 install flask\npython3 -c 'import flask; print(flask.__version__)\n")),(0,r.kt)("p",null,"If you get something like following that means you have finished this step."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flask.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("h4",{id:"step3-upgrade-pip-setuptools-wheel"},"Step3. upgrade pip setuptools wheel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# riva client\ngit clone --depth=1 --recursive https://github.com/nvidia-riva/python-clients\ncd python-clients\nsudo pip3 install --upgrade pip setuptools wheel\npip3 install --no-cache-dir --verbose -r requirements.txt\npython3 setup.py --verbose bdist_wheel\npip3 install --no-cache-dir --verbose dist/nvidia_riva_client*.whl\npython3 -c 'import riva.client; print(riva.client.__version__)'\n")),(0,r.kt)("p",null,"In your terminal(Ctrl+Alt+T), input ",(0,r.kt)("inlineCode",{parentName:"p"},"pip --version")," you will see somthing like following, it means you finished upgrade pip."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pip.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,"In your terminal(Ctrl+Alt+T), input ",(0,r.kt)("inlineCode",{parentName:"p"},"python3 -c 'import setuptools; print(setuptools.__version__)")," if you get something like following that means you have upgrade setuptools."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/setuptools.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,"In your terminal(Ctrl+Alt+T), input ",(0,r.kt)("inlineCode",{parentName:"p"},"wheel version")," you will see somthing like following, it means you finished upgrade wheel."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/wheel.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("h4",{id:"step4-install-pyaudio"},"Step4. install pyaudio:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# pyaudio\nsudo apt-get install -y --no-install-recommends python3-pyaudio\npython3 -c 'import pyaudio; print(pyaudio.__version__)'\n")),(0,r.kt)("p",null,"If your terminal get something like following, you finished the last step,congratulations!"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pyaudio.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("h2",{id:"lets-run-it"},"Let's run it"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson.git\ncd Real-time-Subtitle-Recorder-on-Jetson\npython3 recorder.py\n")),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XypO6BlXkCY?si=CczjuOXxak1xAelO",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h2",{id:"project-outlook"},"Project Outlook"),(0,r.kt)("p",null,"In this project, we use the ",(0,r.kt)("a",{parentName:"p",href:"https://catalog.ngc.nvidia.com/orgs/nvidia/teams/riva/resources/riva_quickstart"},"Riva ASR Server"),"to capture data from the microphone input in real-time and display it on a webpage. In the future we will add more applications like translating one language into another,  having faster response speed."))}d.isMDXComponent=!0}}]);