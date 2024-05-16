"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={description:"Local RAG based on Jetson with LlamaIndex",title:"Local RAG based on Jetson with LlamaIndex",keywords:["Edge","reComputer","Jetson","LlamaIndex","RAG"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Local_RAG_based_on_Jetson_with_LlamaIndex",last_update:{date:"05/15/2024",author:"Jiahao"},no_comments:!1},l="Local RAG based on Jetson with LlamaIndex",i={unversionedId:"Edge/NVIDIA_Jetson/Application/Generative_AI/Local_RAG_based_on_Jetson_with_LlamaIndex",id:"Edge/NVIDIA_Jetson/Application/Generative_AI/Local_RAG_based_on_Jetson_with_LlamaIndex",title:"Local RAG based on Jetson with LlamaIndex",description:"Local RAG based on Jetson with LlamaIndex",source:"@site/docs/Edge/NVIDIA_Jetson/Application/Generative_AI/Local_RAG_based_on_Jetson_with_LlamaIndex.md",sourceDirName:"Edge/NVIDIA_Jetson/Application/Generative_AI",slug:"/Local_RAG_based_on_Jetson_with_LlamaIndex",permalink:"/Local_RAG_based_on_Jetson_with_LlamaIndex",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Application/Generative_AI/Local_RAG_based_on_Jetson_with_LlamaIndex.md",tags:[],version:"current",lastUpdatedBy:"Jiahao",lastUpdatedAt:1715731200,formattedLastUpdatedAt:"May 15, 2024",frontMatter:{description:"Local RAG based on Jetson with LlamaIndex",title:"Local RAG based on Jetson with LlamaIndex",keywords:["Edge","reComputer","Jetson","LlamaIndex","RAG"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Local_RAG_based_on_Jetson_with_LlamaIndex",last_update:{date:"05/15/2024",author:"Jiahao"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"How to Run a Local LLM Text-to-Image on reComputer",permalink:"/How_to_run_local_llm_text_to_image_on_reComputer"},next:{title:"Getting Started with Allxon",permalink:"/Allxon-Jetson-Getting-Started"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Hardware components",id:"hardware-components",level:2},{value:"Prepare the runtime environment",id:"prepare-the-runtime-environment",level:2},{value:"Step 1: Install MLC Jetson Container",id:"step-1-install-mlc-jetson-container",level:3},{value:"Step 2: Install project",id:"step-2-install-project",level:3},{value:"Step 3: Install Llama2-7b model quantified by MLC LLM",id:"step-3-install-llama2-7b-model-quantified-by-mlc-llm",level:3},{value:"Step 4: Run the docker and install requirements",id:"step-4-run-the-docker-and-install-requirements",level:3},{value:"Let&#39;s run it",id:"lets-run-it",level:2},{value:"Project Outlook",id:"project-outlook",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"local-rag-based-on-jetson-with-llamaindex"},"Local RAG based on Jetson with LlamaIndex"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Nowadays, more and more people are starting to use large language models to solve everyday problems. However, large language models can exhibit illusions and provide users with incorrect information when answering certain questions. Nevertheless, ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/blog/2024/04/25/build-a-local-rag-chatbot-on-jetson-orin-for-your-knowledge-base/"},"RAG technology")," can reduce the occurrence of illusions by providing relevant data to the large language models. Therefore, using RAG technology to reduce the generation of illusions in large language models has become a trend."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG-MLC-Jetson.gif",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"And here we introduce you ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Projects/RAG_based_on_Jetson"},"RAG based on Jetson"),", which using ",(0,o.kt)("a",{parentName:"p",href:"https://www.llamaindex.ai"},"llamaindex")," as the RAG framework, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chroma-core/chroma"},"ChromaDB")," as the vector database, and the quantized Llama2-7b model ",(0,o.kt)("a",{parentName:"p",href:"https://llm.mlc.ai/"},"LLM MLC")," as the question-answering model. With this local RAG project, it can protect your data privacy and provide you with low-latency communication experience. "),(0,o.kt)("h2",{id:"hardware-components"},"Hardware components"),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"reComputer (based on Jetson with RAM >= 16GB)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg",style:{width:800,height:"auto"}})))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.kt)("h2",{id:"prepare-the-runtime-environment"},"Prepare the runtime environment"),(0,o.kt)("h3",{id:"step-1-install-mlc-jetson-container"},"Step 1: Install MLC Jetson Container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Install jetson-container and its requirements\ngit clone --depth=1 https://github.com/dusty-nv/jetson-containers\ncd jetson-containers \npip install -r requirements.txt \n")),(0,o.kt)("h3",{id:"step-2-install-project"},"Step 2: Install project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Install RAG project\ncd data\ngit clone https://github.com/Seeed-Projects/RAG_based_on_Jetson.git\n")),(0,o.kt)("h3",{id:"step-3-install-llama2-7b-model-quantified-by-mlc-llm"},"Step 3: Install Llama2-7b model quantified by MLC LLM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Install LLM model\nsudo apt-get install git-lfs\ncd RAG_based_on_Jetson\ngit clone https://huggingface.co/JiahaoLi/llama2-7b-MLC-q4f16-jetson-containers \n")),(0,o.kt)("h3",{id:"step-4-run-the-docker-and-install-requirements"},"Step 4: Run the docker and install requirements"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd ../../\n./run.sh $(./autotag mlc)\n # Here you will enter the Docker, and the commands below will run inside the Docker\ncd data/RAG_based_on_Jetson/\npip install -r requirements.txt\npip install chromadb==0.3.29\n")),(0,o.kt)("p",null,"After you run ",(0,o.kt)("inlineCode",{parentName:"p"},"pip install chromadb==0.3.29")," you will get the interface as shown below."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG_Install_ChromaDB.png",alt:"pir",width:1e3,height:"auto"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It is fine to ignore the error.")),(0,o.kt)("h2",{id:"lets-run-it"},"Let's run it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Run in the docker\npython3 main.py\n")),(0,o.kt)("div",{align:"center"},(0,o.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/v1SDRko5cNM",title:"Jetson Orin NX RAG with MLC, Llama2-7b and ChromaDB",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})),(0,o.kt)("h2",{id:"project-outlook"},"Project Outlook"),(0,o.kt)("p",null,"In this project, TXT and PDF documents were parsed as vector databases, and RAG technology was used to reduce the model's illusions about specific problems. In the future, we will use multimodal models to support retrieval of images and videos."))}u.isMDXComponent=!0}}]);