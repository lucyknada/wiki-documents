"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[98978],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(n),g=i,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},96480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(58168),i=(n(96540),n(15680));const l={description:"RAG on Jetson with MLCLLM and LlamaIndex",title:"RAG on Jetson with MLCLLM and LlamaIndex",keywords:["Edge","reComputer","Jetson","Llama2","MLC LLM","LlamaIndex"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RAG_on_Jetson_with_MLCLLM_and_LlamaIndex",last_update:{date:"05/13/2024",author:"Jiahao"},no_comments:!1},o="RAG on Jetson with LlamaIndex",r={unversionedId:"Edge/NVIDIA_Jetson/Application/Generative_AI/RAG_on_Jetson_with_LlamaIndex",id:"Edge/NVIDIA_Jetson/Application/Generative_AI/RAG_on_Jetson_with_LlamaIndex",title:"RAG on Jetson with MLCLLM and LlamaIndex",description:"RAG on Jetson with MLCLLM and LlamaIndex",source:"@site/docs/Edge/NVIDIA_Jetson/Application/Generative_AI/RAG_on_Jetson_with_LlamaIndex.md",sourceDirName:"Edge/NVIDIA_Jetson/Application/Generative_AI",slug:"/RAG_on_Jetson_with_MLCLLM_and_LlamaIndex",permalink:"/RAG_on_Jetson_with_MLCLLM_and_LlamaIndex",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Application/Generative_AI/RAG_on_Jetson_with_LlamaIndex.md",tags:[],version:"current",lastUpdatedBy:"Jiahao",lastUpdatedAt:1715558400,formattedLastUpdatedAt:"May 13, 2024",frontMatter:{description:"RAG on Jetson with MLCLLM and LlamaIndex",title:"RAG on Jetson with MLCLLM and LlamaIndex",keywords:["Edge","reComputer","Jetson","Llama2","MLC LLM","LlamaIndex"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RAG_on_Jetson_with_MLCLLM_and_LlamaIndex",last_update:{date:"05/13/2024",author:"Jiahao"},no_comments:!1}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Hardware components",id:"hardware-components",level:2},{value:"Install dependencies:",id:"install-dependencies",level:2},{value:"Install and run contiainer",id:"install-and-run-contiainer",level:2},{value:"first step: install image",id:"first-step-install-image",level:3},{value:"second step: Install Llama2-7b-chat-hf and Use MLC quantify the model",id:"second-step-install-llama2-7b-chat-hf-and-use-mlc-quantify-the-model",level:3},{value:"Thrid step: Run and enter docker",id:"thrid-step-run-and-enter-docker",level:3},{value:"Let&#39;s run it",id:"lets-run-it",level:2},{value:"run Llama without quanifing without MLC LLM quantified",id:"run-llama-without-quanifing-without-mlc-llm-quantified",level:3},{value:"run Llama with quanifing with MLC LLM quantified",id:"run-llama-with-quanifing-with-mlc-llm-quantified",level:3},{value:"Video of running Llama with MLC on Jetson Orin NX 16GB:",id:"video-of-running-llama-with-mlc-on-jetson-orin-nx-16gb",level:2},{value:"Project Outlook",id:"project-outlook",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"rag-on-jetson-with-llamaindex"},"RAG on Jetson with LlamaIndex"),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"In recent years, large language models such as GPT-3 have revolutionized natural language processing tasks. However, most of these models are trained on large-scale datasets, which require powerful computing resources and are not suitable for deployment on edge devices. To address this issue, researchers have developed quantization techniques to compress large models into smaller ones without sacrificing performance. "),(0,i.yg)("p",null,"In this project, we introduce a quantized version of ",(0,i.yg)("a",{parentName:"p",href:"https://huggingface.co/meta-llama/Llama-2-7b-hf"},"Llama2-7B"),", a large language model trained on 1.5TB of data, and deploy it on the Jetson Orin. We also leverage the ",(0,i.yg)("a",{parentName:"p",href:"https://llm.mlc.ai"},"Machine Learning Compiler Large Language Modle"),"(MLC LLM) to accelerate the inference speed of the model. By deploying the quantized Llama2-7B with MLC LLM on the ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"Jetson Orin NX"),", developers can build powerful natural language processing applications that deliver high accuracy and low latency on edge devices."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif"})),(0,i.yg)("h2",{id:"hardware-components"},"Hardware components"),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("table",{align:"center"},(0,i.yg)("tr",null,(0,i.yg)("th",null,"reComputer(Or other devices based on Jetson)")),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg",style:{width:800,height:"auto"}})))),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,i.yg)("h2",{id:"install-dependencies"},"Install dependencies:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update && sudo apt-get install git python3-pip\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/dusty-nv/jetson-containers\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"cd jetson-containers pip3 install -r requirements.txt\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"cd ./data && git clone https://github.com/LJ-Hao/MLC-LLM-on-Jetson-Nano.git && cd ..\n")),(0,i.yg)("h2",{id:"install-and-run-contiainer"},"Install and run contiainer"),(0,i.yg)("h3",{id:"first-step-install-image"},"first step: install image"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"./run.sh --env HUGGINGFACE_TOKEN=<YOUR-ACCESS-TOKEN> $(./autotag mlc) /bin/bash -c 'ln -s $(huggingface-downloader meta-llama/Llama-2-7b-chat-hf) /data/models/mlc/dist/models/Llama-2-7b-chat-hf'\n")),(0,i.yg)("p",null,"use ",(0,i.yg)("inlineCode",{parentName:"p"},"sudo docker images")," to check wether the image is installed or not"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_image.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("h3",{id:"second-step-install-llama2-7b-chat-hf-and-use-mlc-quantify-the-model"},"second step: Install Llama2-7b-chat-hf and Use MLC quantify the model"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"./run.sh $(./autotag mlc) \\\npython3 -m mlc_llm.build \\\n--model Llama-2-7b-chat-hf \\\n--quantization q4f16_ft \\\n--artifact-path /data/models/mlc/dist \\\n--max-seq-len 4096 \\\n--target cuda \\\n--use-cuda-graph \\\n--use-flash-attn-mqa\n")),(0,i.yg)("h3",{id:"thrid-step-run-and-enter-docker"},"Thrid step: Run and enter docker"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"./run.sh <YOUR IMAGE NAME> \n#for me dustynv/mlc:51fb0f4-builder-r35.4.1 check result of first step\n")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_run.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("h2",{id:"lets-run-it"},"Let's run it"),(0,i.yg)("h3",{id:"run-llama-without-quanifing-without-mlc-llm-quantified"},"run Llama without quanifing without MLC LLM quantified"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf.py \n")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("p",null,"you can see without quanifing with MLC, Jetson Nano 16GB can load the model but cant not run."),(0,i.yg)("h3",{id:"run-llama-with-quanifing-with-mlc-llm-quantified"},"run Llama with quanifing with MLC LLM quantified"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf-q4f16_ft.py \n")),(0,i.yg)("p",null,"here is the result:"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf-q4f16_ft.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("h2",{id:"video-of-running-llama-with-mlc-on-jetson-orin-nx-16gb"},"Video of running Llama with MLC on Jetson Orin NX 16GB:"),(0,i.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/c2zbIwrOYyk?si=RydTL8dqmz5KRFpr",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,i.yg)("h2",{id:"project-outlook"},"Project Outlook"),(0,i.yg)("p",null,"In this project, we have demonstrated how to deploy a quantized version of Llama2-7B with MLC LLM on the Jetson Orin. With the powerful computing capabilities of the Jetson Orin, developers can build natural language processing applications that deliver high accuracy and low latency on edge devices. In the future, we will continue to explore the potential of deploying large language models on edge devices and develop more efficient and optimized deployment methods."))}p.isMDXComponent=!0}}]);