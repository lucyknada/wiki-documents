"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={description:"Quantized Llama2-7B with MLC LLM on Jetson",title:"Quantized Llama2-7B with MLC LLM on Jetson",keywords:["Edge","reComputer","Jetson","Llama2","MLC LLM"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson",last_update:{date:"04/1/2024",author:"Jiahao"},no_comments:!1},l="Quantized Llama2-7B with MLC LLM on Jetson",r={unversionedId:"Edge/NVIDIA_Jetson/Application/Generative_AI/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson",id:"Edge/NVIDIA_Jetson/Application/Generative_AI/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson",title:"Quantized Llama2-7B with MLC LLM on Jetson",description:"Quantized Llama2-7B with MLC LLM on Jetson",source:"@site/docs/Edge/NVIDIA_Jetson/Application/Generative_AI/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson.md",sourceDirName:"Edge/NVIDIA_Jetson/Application/Generative_AI",slug:"/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson",permalink:"/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Application/Generative_AI/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson.md",tags:[],version:"current",lastUpdatedBy:"Jiahao",lastUpdatedAt:1711929600,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{description:"Quantized Llama2-7B with MLC LLM on Jetson",title:"Quantized Llama2-7B with MLC LLM on Jetson",keywords:["Edge","reComputer","Jetson","Llama2","MLC LLM"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson",last_update:{date:"04/1/2024",author:"Jiahao"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"How to Format the Output of LLM Using Langchain on Jetson",permalink:"/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson"},next:{title:"Real Time Subtitle Recoder on Nvidia Jetson",permalink:"/Real Time Subtitle Recoder on Nvidia Jetson"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Hardware components",id:"hardware-components",level:2},{value:"Install dependencies:",id:"install-dependencies",level:2},{value:"Install and run contiainer",id:"install-and-run-contiainer",level:2},{value:"first step: install image",id:"first-step-install-image",level:3},{value:"second step: Install Llama2-7b-chat-hf and Use MLC quantify the model",id:"second-step-install-llama2-7b-chat-hf-and-use-mlc-quantify-the-model",level:3},{value:"Thrid step: Run and enter docker",id:"thrid-step-run-and-enter-docker",level:3},{value:"Let&#39;s run it",id:"lets-run-it",level:2},{value:"run Llama without quanifing without MLC LLM quantified",id:"run-llama-without-quanifing-without-mlc-llm-quantified",level:3},{value:"run Llama with quanifing with MLC LLM quantified",id:"run-llama-with-quanifing-with-mlc-llm-quantified",level:3},{value:"Video of running Llama with MLC on Jetson Orin NX 16GB:",id:"video-of-running-llama-with-mlc-on-jetson-orin-nx-16gb",level:2},{value:"Project Outlook",id:"project-outlook",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quantized-llama2-7b-with-mlc-llm-on-jetson"},"Quantized Llama2-7B with MLC LLM on Jetson"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In recent years, large language models such as GPT-3 have revolutionized natural language processing tasks. However, most of these models are trained on large-scale datasets, which require powerful computing resources and are not suitable for deployment on edge devices. To address this issue, researchers have developed quantization techniques to compress large models into smaller ones without sacrificing performance. "),(0,i.kt)("p",null,"In this project, we introduce a quantized version of ",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/meta-llama/Llama-2-7b-hf"},"Llama2-7B"),", a large language model trained on 1.5TB of data, and deploy it on the Jetson Orin. We also leverage the ",(0,i.kt)("a",{parentName:"p",href:"https://llm.mlc.ai"},"Machine Learning Compiler Large Language Modle"),"(MLC LLM) to accelerate the inference speed of the model. By deploying the quantized Llama2-7B with MLC LLM on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"Jetson Orin NX"),", developers can build powerful natural language processing applications that deliver high accuracy and low latency on edge devices."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif"})),(0,i.kt)("h2",{id:"hardware-components"},"Hardware components"),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("th",null,"reComputer(Or other devices based on Jetson)")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg",style:{width:800,height:"auto"}})))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,i.kt)("h2",{id:"install-dependencies"},"Install dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update && sudo apt-get install git python3-pip\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/dusty-nv/jetson-containers\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd jetson-containers pip3 install -r requirements.txt\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./data && git clone https://github.com/LJ-Hao/MLC-LLM-on-Jetson-Nano.git && cd ..\n")),(0,i.kt)("h2",{id:"install-and-run-contiainer"},"Install and run contiainer"),(0,i.kt)("h3",{id:"first-step-install-image"},"first step: install image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./run.sh --env HUGGINGFACE_TOKEN=<YOUR-ACCESS-TOKEN> $(./autotag mlc) /bin/bash -c 'ln -s $(huggingface-downloader meta-llama/Llama-2-7b-chat-hf) /data/models/mlc/dist/models/Llama-2-7b-chat-hf'\n")),(0,i.kt)("p",null,"use ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo docker images")," to check wether the image is installed or not"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_image.png",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("h3",{id:"second-step-install-llama2-7b-chat-hf-and-use-mlc-quantify-the-model"},"second step: Install Llama2-7b-chat-hf and Use MLC quantify the model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./run.sh $(./autotag mlc) \\\npython3 -m mlc_llm.build \\\n--model Llama-2-7b-chat-hf \\\n--quantization q4f16_ft \\\n--artifact-path /data/models/mlc/dist \\\n--max-seq-len 4096 \\\n--target cuda \\\n--use-cuda-graph \\\n--use-flash-attn-mqa\n")),(0,i.kt)("h3",{id:"thrid-step-run-and-enter-docker"},"Thrid step: Run and enter docker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./run.sh <YOUR IMAGE NAME> \n#for me dustynv/mlc:51fb0f4-builder-r35.4.1 check result of first step\n")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_run.png",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("h2",{id:"lets-run-it"},"Let's run it"),(0,i.kt)("h3",{id:"run-llama-without-quanifing-without-mlc-llm-quantified"},"run Llama without quanifing without MLC LLM quantified"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf.py \n")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf.png",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("p",null,"you can see without quanifing with MLC, Jetson Nano 16GB can load the model but cant not run."),(0,i.kt)("h3",{id:"run-llama-with-quanifing-with-mlc-llm-quantified"},"run Llama with quanifing with MLC LLM quantified"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf-q4f16_ft.py \n")),(0,i.kt)("p",null,"here is the result:"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf-q4f16_ft.png",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("h2",{id:"video-of-running-llama-with-mlc-on-jetson-orin-nx-16gb"},"Video of running Llama with MLC on Jetson Orin NX 16GB:"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/c2zbIwrOYyk?si=RydTL8dqmz5KRFpr",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,i.kt)("h2",{id:"project-outlook"},"Project Outlook"),(0,i.kt)("p",null,"In this project, we have demonstrated how to deploy a quantized version of Llama2-7B with MLC LLM on the Jetson Orin. With the powerful computing capabilities of the Jetson Orin, developers can build natural language processing applications that deliver high accuracy and low latency on edge devices. In the future, we will continue to explore the potential of deploying large language models on edge devices and develop more efficient and optimized deployment methods."))}p.isMDXComponent=!0}}]);