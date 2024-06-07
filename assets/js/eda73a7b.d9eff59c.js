"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85319],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var _=a.createContext({}),l=function(e){var n=a.useContext(_),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(_.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,_=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=i,u=d["".concat(_,".").concat(g)]||d[g]||m[g]||r;return t?a.createElement(u,o(o({ref:n},c),{},{components:t})):a.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var s={};for(var _ in n)hasOwnProperty.call(n,_)&&(s[_]=n[_]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>_,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(58168),i=(t(96540),t(15680));const r={description:"Deploy Riva and Llama2 on reComputer",title:"Local Voice Chatbot",keywords:["reComputer","LLM","Chatbot"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Local_Voice_Chatbot",last_update:{date:"01/14/2024",author:"Youjiang"}},o="Local Voice Chatbot : Deploy Riva and Llama2 on reComputer",s={unversionedId:"Edge/NVIDIA_Jetson/Application/Generative_AI/Deploy_Riva_and_Llama2_on_reComputer",id:"Edge/NVIDIA_Jetson/Application/Generative_AI/Deploy_Riva_and_Llama2_on_reComputer",title:"Local Voice Chatbot",description:"Deploy Riva and Llama2 on reComputer",source:"@site/docs/Edge/NVIDIA_Jetson/Application/Generative_AI/Deploy_Riva_and_Llama2_on_reComputer.md",sourceDirName:"Edge/NVIDIA_Jetson/Application/Generative_AI",slug:"/Local_Voice_Chatbot",permalink:"/Local_Voice_Chatbot",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Application/Generative_AI/Deploy_Riva_and_Llama2_on_reComputer.md",tags:[],version:"current",lastUpdatedBy:"Youjiang",lastUpdatedAt:1705190400,formattedLastUpdatedAt:"Jan 14, 2024",frontMatter:{description:"Deploy Riva and Llama2 on reComputer",title:"Local Voice Chatbot",keywords:["reComputer","LLM","Chatbot"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Local_Voice_Chatbot",last_update:{date:"01/14/2024",author:"Youjiang"}},sidebar:"ProductSidebar",previous:{title:"reComputer for Jetson Tutorials and Exercise",permalink:"/reComputer_Jetson_Series_Tutorials_Exercise"},next:{title:"How to Format the Output of LLM Using Langchain on Jetson",permalink:"/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson"}},_={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Connection",id:"hardware-connection",level:3},{value:"Install Riva Server",id:"install-riva-server",level:3},{value:"Install and run LLM",id:"install-and-run-llm",level:3},{value:"Clone local chatbot demo and try to run it.",id:"clone-local-chatbot-demo-and-try-to-run-it",level:3},{value:"Effect Demonstration",id:"effect-demonstration",level:2},{value:"References",id:"references",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"local-voice-chatbot--deploy-riva-and-llama2-on-recomputer"},"Local Voice Chatbot : Deploy Riva and Llama2 on reComputer"),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"As artificial intelligence technology rapidly evolves, voice interaction has become an increasingly important mode of human-computer interaction. Especially in fields like smart homes, personal assistants, and customer service support, the demand for voice chatbots is growing significantly. However, most existing voice chatbots rely on cloud computing services, which raises concerns about data privacy and network latency to some extent."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/workflow.png"})),(0,i.yg)("p",null,"This project aims to address these issues by building a locally-operated voice chatbot. Utilizing ",(0,i.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/deeplearning/riva/user-guide/docs/quick-start-guide.html"},"Nvidia Riva")," and ",(0,i.yg)("a",{parentName:"p",href:"https://huggingface.co/meta-llama"},"Meta Llama2"),", we have developed a secure, private, and fast-responding voice interaction system."),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Jetson device with more than 16GB of memory."),(0,i.yg)("li",{parentName:"ul"},"The hardware device needs to be pre-flashed with the jetpack ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_Intro/"},"5.1.1")," operating system."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html?queryID=dd9c8d91c63781d66776771a7ee5ec01&objectID=4247&indexName=bazaar_retailer_products"},"Speaker and Microphone"),".")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," I completed all experiments using ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=012e528073e90bf80afd3880f3fc2b13&objectID=5569&indexName=bazaar_retailer_products"},"Jetson AGX Orin 32GB H01 Kit"),", but you can try loading smaller models with a device that has less memory."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/jetson_agx_orin.jpg"})),(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,i.yg)("h2",{id:"getting-started"},"Getting Started"),(0,i.yg)("h3",{id:"hardware-connection"},"Hardware Connection"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Connect the audio input/output device to the reComputer."),(0,i.yg)("li",{parentName:"ul"},"Power on the reComputer and ensure it has normal network access.")),(0,i.yg)("h3",{id:"install-riva-server"},"Install Riva Server"),(0,i.yg)("p",null,"Please refer ",(0,i.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/deeplearning/riva/user-guide/docs/quick-start-guide.html#embedded"},"here")," for more detailed information."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step1."),"  Access and log into ",(0,i.yg)("a",{parentName:"p",href:"https://catalog.ngc.nvidia.com/?filters=&orderBy=weightPopularDESC&query="},"NVIDIA NGC"),"."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/setup_riva_1.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step2.")," Obtain the NGC API Key."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Account(top right corner)")," --\x3e ",(0,i.yg)("inlineCode",{parentName:"p"},"Setup")," --\x3e ",(0,i.yg)("inlineCode",{parentName:"p"},"Get API Key")," --\x3e ",(0,i.yg)("inlineCode",{parentName:"p"},"Generate API Key")," --\x3e ",(0,i.yg)("inlineCode",{parentName:"p"},"Confirm")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/setup_riva_2.png"})),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Please record the generated API Key.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step3.")," Configure NGC on reComputer"),(0,i.yg)("p",null,"Open the reComputer terminal (You can quickly open a terminal on the desktop of reComputer using the shortcut keys ",(0,i.yg)("inlineCode",{parentName:"p"},"Ctrl+Alt+T"),", or you can remotely access the terminal of reComputer using another computer.) and enter the following commands one by one."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'cd ~ && mkdir ngc_setup && cd ngc_setup\nwget --content-disposition https://api.ngc.nvidia.com/v2/resources/nvidia/ngc-apps/ngc_cli/versions/3.36.0/files/ngccli_arm64.zip && unzip ngccli_arm64.zip \nchmod u+x ngc-cli/ngc\necho "export PATH=\\"\\$PATH:$(pwd)/ngc-cli\\"" >> ~/.bash_profile && source ~/.bash_profile\nngc config set\n')),(0,i.yg)("p",null,"Enter the relevant information in the terminal interactive interface."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/setup_riva_3.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step4.")," Install and run the Riva server on reComputer."),(0,i.yg)("p",null,"In the terminal of reComputer, enter the following commands."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~ && mkdir riva_setup && cd riva_setup\nngc registry resource download-version nvidia/riva/riva_quickstart_arm64:2.13.1\ncd riva_quickstart_v2.13.1\n")),(0,i.yg)("p",null,"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"Vim")," to modify the configuration file."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"vim config.sh\n\n# Press the `A` key on the keyboard to enter edit mode.\n# Edit lines 18 and 20 following the instructions below.\n\n# service_enabled_nlp=true --\x3e service_enabled_nlp=false\n# service_enabled_nmt=true --\x3e service_enabled_nmt=false\n\n# Press the `ESC` on the keyboard to exit edit mode, then use the shortcut `Shift+Z Z` to save the edited content and close the editor.\n")),(0,i.yg)("p",null,"The configuration file after editing\uff1a"),(0,i.yg)("details",null,(0,i.yg)("summary",null," config.sh "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'# Copyright (c) 2022, NVIDIA CORPORATION.  All rights reserved.\n#\n# NVIDIA CORPORATION and its licensors retain all intellectual property\n# and proprietary rights in and to this software, related documentation\n# and any modifications thereto.  Any use, reproduction, disclosure or\n# distribution of this software and related documentation without an express\n# license agreement from NVIDIA CORPORATION is strictly prohibited.\n\n# GPU family of target platform. Supported values: tegra, non-tegra\nriva_target_gpu_family="non-tegra"\n\n# Name of tegra platform that is being used. Supported tegra platforms: orin, xavier\nriva_tegra_platform="orin"\n\n# Enable or Disable Riva Services\n# For any language other than en-US: service_enabled_nlp must be set to false\nservice_enabled_asr=true\nservice_enabled_nlp=false\nservice_enabled_tts=true\nservice_enabled_nmt=false\n\n# Configure translation services\n# Text-to-Text translation (T2T):\n# - service_enabled_nmt must be set to true\n# - Uncomment desired model for source and target languages in models_nmt field\n# Speech-to-Text translation (S2T):\n# - service_enabled_asr, service_enabled_nmt must be set to true\n# - Set language code of input speech in the asr_language_code field\n# - Uncomment desired model for source and target languages in models_nmt field\n# Speech-to-Speech translation (S2S):\n# - service_enabled_asr, service_enabled_nmt, service_enabled_tts must be set to true\n# - Set language code of input speech in the asr_language_code field\n# - Uncomment desired model for source and target languages in models_nmt field\n# - Set language code of output speech in the tts_language_code field\n\n# Enable Riva Enterprise\n# If enrolled in Enterprise, enable Riva Enterprise by setting configuration\n# here. You must explicitly acknowledge you have read and agree to the EULA.\n# RIVA_API_KEY=<ngc api key>\n# RIVA_API_NGC_ORG=<ngc organization>\n# RIVA_EULA=accept\n\n# Language code to fetch ASR models of a specific language\n# Supported language codes: ar-AR, en-US, en-GB, de-DE, es-ES, es-US, fr-FR, hi-IN, it-IT, ja-JP, ru-RU, ko-KR, pt-BR, zh-CN, es-en-US, ja-en-JP\n# For multiple languages enter space separated language codes.\nasr_language_code=("en-US")\n\n# ASR acoustic model architecture\n# Supported values are: conformer, conformer_xl (en-US + amd64 only), citrinet_1024, citrinet_256 (en-US + arm64 only), jasper (en-US + amd64 only), quartznet (en-US + amd64 only)\nasr_acoustic_model=("conformer")\n\n# ASR acoustic model architecture variant\n# Supported values for the architecture are:\n# conformer: unified(de-DE, ja-JP and zh-CN only), ml_cs(es-en-US only), unified_ml_cs(ja-en-JP only)\n# For the default model, keep the field empty\nasr_acoustic_model_variant=("")\n\n# ASR decoder type to be used\n# If you\'d like to use greedy decoder for ASR instead of flashlight/os2s decoder then set the below $use_asr_greedy_decoder to true\nuse_asr_greedy_decoder=false\n\n# Language code to fetch TTS models of a specific language\n# Supported language codes: en-US, es-ES, it-IT, de-DE, zh-CN\n# For multiple languages enter space separated language codes\ntts_language_code=("en-US")\n\n# Specify one or more GPUs to use\n# specifying more than one GPU is currently an experimental feature, and may result in undefined behaviours.\ngpus_to_use="device=0"\n\n# Specify the encryption key to use to deploy models\nMODEL_DEPLOY_KEY="tlt_encode"\n\n# Locations to use for storing models artifacts\n#\n# If an absolute path is specified, the data will be written to that location\n# Otherwise, a Docker volume will be used (default).\n#\n# riva_init.sh will create a `rmir` and `models` directory in the volume or\n# path specified.\n#\n# RMIR ($riva_model_loc/rmir)\n# Riva uses an intermediate representation (RMIR) for models\n# that are ready to deploy but not yet fully optimized for deployment. Pretrained\n# versions can be obtained from NGC (by specifying NGC models below) and will be\n# downloaded to $riva_model_loc/rmir by `riva_init.sh`\n#\n# Custom models produced by NeMo or TLT and prepared using riva-build\n# may also be copied manually to this location $(riva_model_loc/rmir).\n#\n# Models ($riva_model_loc/models)\n# During the riva_init process, the RMIR files in $riva_model_loc/rmir\n# are inspected and optimized for deployment. The optimized versions are\n# stored in $riva_model_loc/models. The riva server exclusively uses these\n# optimized versions.\nriva_model_loc="riva-model-repo"\n\nif [[ $riva_target_gpu_family == "tegra" ]]; then\n    riva_model_loc="`pwd`/model_repository"\nfi\n\n# The default RMIRs are downloaded from NGC by default in the above $riva_rmir_loc directory\n# If you\'d like to skip the download from NGC and use the existing RMIRs in the $riva_rmir_loc\n# then set the below $use_existing_rmirs flag to true. You can also deploy your set of custom\n# RMIRs by keeping them in the riva_rmir_loc dir and use this quickstart script with the\n# below flag to deploy them all together.\nuse_existing_rmirs=false\n\n# Ports to expose for Riva services\nriva_speech_api_port="50051"\n\n# NGC orgs\nriva_ngc_org="nvidia"\nriva_ngc_team="riva"\nriva_ngc_image_version="2.13.1"\nriva_ngc_model_version="2.13.0"\n\n# Pre-built models listed below will be downloaded from NGC. If models already exist in $riva-rmir\n# then models can be commented out to skip download from NGC\n\n########## ASR MODELS ##########\n\nmodels_asr=()\n\nfor lang_code in ${asr_language_code[@]}; do\n    modified_lang_code="${lang_code//-/_}"\n    modified_lang_code=${modified_lang_code,,}\n\n    decoder=""\n    if [ "$use_asr_greedy_decoder" = true ]; then\n      decoder="_gre"\n    fi\n\n    if [[ ${asr_acoustic_model_variant} != "" ]]; then\n      if [[ ${asr_acoustic_model} == "conformer" && ${asr_acoustic_model_variant} != "unified" && ${asr_acoustic_model_variant} != "ml_cs" && ${asr_acoustic_model_variant} != "unified_ml_cs" ]]; then\n        echo "Valid variants for Conformer are: unified, ml_cs and unified_ml_cs."\n        exit 1\n      elif [[ ${asr_acoustic_model} != "conformer" ]]; then\n        echo "Invalid variant for ${asr_acoustic_model}."\n        exit 1\n      fi\n      asr_acoustic_model_variant="_${asr_acoustic_model_variant}"\n    fi\n\n    if [[ ${asr_acoustic_model} == "conformer_xl" && ${lang_code} != "en-US" ]]; then\n      echo "Conformer-XL acoustic model is only available for language code en-US."\n      exit 1\n    fi\n\n    if [[ ${asr_acoustic_model_variant} == "_unified" && ${lang_code} != "de-DE" && ${lang_code} != "ja-JP" && ${lang_code} != "zh-CN" ]]; then\n      echo "Unified Conformer acoustic model is only available for language code de-DE, ja-JP and zh-CN."\n      exit 1\n    fi\n\n    if [[ ${asr_acoustic_model_variant} == "_ml_cs" && ${lang_code} != "es-en-US" ]]; then\n      echo "Multilingual Code Switch Conformer acoustic model is only available for language code es-en-US."\n      exit 1\n    fi\n\n    if [[ ${asr_acoustic_model_variant} == "_unified_ml_cs" && ${lang_code} != "ja-en-JP" ]]; then\n      echo "Unified Multilingual Code Switch Conformer acoustic model is only available for language code ja-en-JP."\n      exit 1\n    fi\n\n    if [[ $riva_target_gpu_family  == "tegra" ]]; then\n\n      if [[ ${asr_acoustic_model} == "jasper" || \\\n            ${asr_acoustic_model} == "quartznet" || \\\n            ${asr_acoustic_model} == "conformer_xl" ]]; then\n          echo "Conformer-XL, Jasper and Quartznet models are not available for arm64 architecture"\n          exit 1\n      fi\n\n      if [[ ${asr_acoustic_model} == "citrinet_256" && ${lang_code} != "en-US" ]]; then\n        echo "For arm64 architecture, citrinet_256 acoustic model is only available for language code en-US."\n        exit 1\n      fi\n\n      models_asr+=(\n      ### Streaming w/ CPU decoder, best latency configuration\n          "${riva_ngc_org}/${riva_ngc_team}/models_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_str:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"\n\n      ### Offline w/ CPU decoder\n      #    "${riva_ngc_org}/${riva_ngc_team}/rmir_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_ofl${decoder}:${riva_ngc_model_version}"\n      )\n    else\n\n      if [[ ${asr_acoustic_model} != "conformer" && \\\n            ${asr_acoustic_model} != "conformer_xl" && \\\n            ${asr_acoustic_model} != "citrinet_1024" && \\\n            ${asr_acoustic_model} != "jasper" && \\\n            ${asr_acoustic_model} != "quartznet" ]]; then\n        echo "For amd64 architecture, valid acoustic models are conformer, conformer_xl, citrinet_1024, jasper and quartznet."\n        exit 1\n      fi\n\n      if [[ (${asr_acoustic_model} == "jasper" || \\\n            ${asr_acoustic_model} == "quartznet") && \\\n            ${lang_code} != "en-US" ]]; then\n        echo "jasper and quartznet acoustic models are only available for language code en-US."\n        exit 1\n      fi\n\n      models_asr+=(\n      ### Streaming w/ CPU decoder, best latency configuration\n          "${riva_ngc_org}/${riva_ngc_team}/rmir_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_str${decoder}:${riva_ngc_model_version}"\n\n      ### Streaming w/ CPU decoder, best throughput configuration\n      #    "${riva_ngc_org}/${riva_ngc_team}/rmir_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_str_thr${decoder}:${riva_ngc_model_version}"\n\n      ### Offline w/ CPU decoder\n          "${riva_ngc_org}/${riva_ngc_team}/rmir_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_ofl${decoder}:${riva_ngc_model_version}"\n      )\n    fi\n\n    ### Punctuation model\n    if [[ ${asr_acoustic_model_variant} != "_unified" && ${asr_acoustic_model_variant} != "_unified_ml_cs" ]]; then\n      pnc_lang=$(echo $modified_lang_code | cut -d "_" -f 1)\n      pnc_region=${modified_lang_code##*_}\n      modified_lang_code=${pnc_lang}_${pnc_region}\n      if [[ $riva_target_gpu_family == "tegra" ]]; then\n        models_asr+=(\n            "${riva_ngc_org}/${riva_ngc_team}/models_nlp_punctuation_bert_base_${modified_lang_code}:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"\n        )\n      else\n        models_asr+=(\n            "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_punctuation_bert_base_${modified_lang_code}:${riva_ngc_model_version}"\n        )\n      fi\n    fi\ndone\n\n### Speaker diarization model\nmodels_asr+=(\n#    "${riva_ngc_org}/${riva_ngc_team}/rmir_diarizer_offline:${riva_ngc_model_version}"\n)\n\n########## NLP MODELS ##########\n\nif [[ $riva_target_gpu_family == "tegra" ]]; then\n  models_nlp=(\n  ### Bert base Punctuation model\n      "${riva_ngc_org}/${riva_ngc_team}/models_nlp_punctuation_bert_base_en_us:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"\n\n  ### BERT Base Intent Slot model for misty domain fine-tuned on weather, smalltalk/personality, poi/map datasets.\n  #    "${riva_ngc_org}/${riva_ngc_team}/models_nlp_intent_slot_misty_bert_base:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"\n\n  ### DistilBERT Intent Slot model for misty domain fine-tuned on weather, smalltalk/personality, poi/map datasets.\n  #    "${riva_ngc_org}/${riva_ngc_team}/models_nlp_intent_slot_misty_distilbert:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"\n  )\nelse\n  models_nlp=(\n  ### Bert base Punctuation model\n      "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_punctuation_bert_base_en_us:${riva_ngc_model_version}"\n\n  ### BERT base Named Entity Recognition model fine-tuned on GMB dataset with class labels LOC, PER, ORG etc.\n  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_named_entity_recognition_bert_base:${riva_ngc_model_version}"\n\n  ### BERT Base Intent Slot model fine-tuned on weather dataset.\n  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_intent_slot_bert_base:${riva_ngc_model_version}"\n\n  ### BERT Base Question Answering model fine-tuned on Squad v2.\n  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_question_answering_bert_base:${riva_ngc_model_version}"\n\n  ### Megatron345M Question Answering model fine-tuned on Squad v2.\n  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_question_answering_megatron:${riva_ngc_model_version}"\n\n  ### Bert base Text Classification model fine-tuned on 4class (weather, meteorology, personality, nomatch) domain model.\n  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_text_classification_bert_base:${riva_ngc_model_version}"\n  )\nfi\n\n########## TTS MODELS ##########\n\nmodels_tts=()\n\nfor lang_code in ${tts_language_code[@]}; do\n  modified_lang_code="${lang_code//-/_}"\n  modified_lang_code=${modified_lang_code,,}\n\n  if [[ $riva_target_gpu_family == "tegra" ]]; then\n    if [[ ${lang_code} == "en-US" ]]; then\n      models_tts+=(\n      ### These models have been trained with energy conditioning and use the International Phonetic Alphabet (IPA) for inference and training.\n          "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_en_us_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"\n      #    "${riva_ngc_org}/${riva_ngc_team}/models_tts_radtts_hifigan_en_us_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"\n\n      ### This model uses the ARPABET for inference and training.\n      #    "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_en_us:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"\n      )\n    elif [[ ${lang_code} == "zh-CN" ]]; then\n      models_tts+=(\n      ### This model is multi-speaker with emotion and and use the International Phonetic Alphabet (IPA) for inference and training.\n          "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_zh_cn_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"\n      )\n    else\n      ### These models are single-speaker and use the International Phonetic Alphabet (IPA) for inference and training.\n      if [[ ${lang_code} != "de-DE" ]]; then\n        models_tts+=(\n            "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_${modified_lang_code}_f_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"\n        )\n      fi\n      models_tts+=(\n          "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_${modified_lang_code}_m_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"\n      )\n    fi\n  else\n    if [[ ${lang_code} == "en-US" ]]; then\n      models_tts+=(\n      ### These models have been trained with energy conditioning and use the International Phonetic Alphabet (IPA) for inference and training.\n          "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_en_us_ipa:${riva_ngc_model_version}"\n      #    "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_radtts_hifigan_en_us_ipa:${riva_ngc_model_version}"\n\n      ### This model uses the ARPABET for inference and training.\n      #    "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_en_us:${riva_ngc_model_version}"\n      )\n    elif [[ ${lang_code} == "zh-CN" ]]; then\n      models_tts+=(\n      ### This model is multi-speaker with emotion and and use the International Phonetic Alphabet (IPA) for inference and training.\n          "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_zh_cn_ipa:${riva_ngc_model_version}"\n      )\n    else\n      ### These models are single-speaker and use the International Phonetic Alphabet (IPA) for inference and training.\n      if [[ ${lang_code} != "de-DE" ]]; then\n        models_tts+=(\n            "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_${modified_lang_code}_f_ipa:${riva_ngc_model_version}"\n        )\n      fi\n      models_tts+=(\n          "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_${modified_lang_code}_m_ipa:${riva_ngc_model_version}"\n      )\n    fi\n  fi\ndone\n\n######### NMT models ###############\n\n# Models follow Source language _ One or more target languages model architecture\n# Source or target language "any" means the model supports 32 languages mentioned in docs.\n# e.g., rmir_nmt_de_en_24x6 is a German to English 24x6 bilingual model\n# and rmir_megatronnmt_en_any_500m is a English to 32 languages megatron model\n\nmodels_nmt=(\n  ###### Bilingual models\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_de_24x6:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_es_24x6:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_zh_24x6:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_ru_24x6:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_fr_24x6:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_de_en_24x6:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_es_en_24x6:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_ru_en_24x6:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_zh_en_24x6:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_fr_en_24x6:${riva_ngc_model_version}"\n\n  ###### Multilingual models\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_deesfr_24x6:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_deesfr_12x2:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_deesfr_en_24x6:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_deesfr_en_12x2:${riva_ngc_model_version}"\n\n  ###### Megatron models\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_megatronnmt_any_en_500m:${riva_ngc_model_version}"\n  #"${riva_ngc_org}/${riva_ngc_team}/rmir_megatronnmt_en_any_500m:${riva_ngc_model_version}"\n)\n\nNGC_TARGET=${riva_ngc_org}\nif [[ ! -z ${riva_ngc_team} ]]; then\n  NGC_TARGET="${NGC_TARGET}/${riva_ngc_team}"\nelse\n  team="\\"\\""\nfi\n\n# Specify paths to SSL Key and Certificate files to use TLS/SSL Credentials for a secured connection.\n# If either are empty, an insecure connection will be used.\n# Stored within container at /ssl/servert.crt and /ssl/server.key\n# Optional, one can also specify a root certificate, stored within container at /ssl/root_server.crt\nssl_server_cert=""\nssl_server_key=""\nssl_root_cert=""\n\n# define Docker images required to run Riva\nimage_speech_api="nvcr.io/${NGC_TARGET}/riva-speech:${riva_ngc_image_version}"\n\n# define Docker images required to setup Riva\nimage_init_speech="nvcr.io/${NGC_TARGET}/riva-speech:${riva_ngc_image_version}-servicemaker"\n\n# daemon names\nriva_daemon_speech="riva-speech"\nif [[ $riva_target_gpu_family != "tegra" ]]; then\n    riva_daemon_client="riva-client"\nfi\n'))),(0,i.yg)("p",null,"Use a similar method to modify ",(0,i.yg)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'sudo vim /etc/docker/daemon.json\n# Add this line >> "default-runtime": "nvidia"\n\n# Press the `ESC` on the keyboard to exit edit mode, then use the shortcut `Shift+Z Z` to save the edited content and close the editor.\n\nsudo systemctl restart docker\n')),(0,i.yg)("p",null,"The configuration file after editing like this:"),(0,i.yg)("details",null,(0,i.yg)("summary",null," /etc/docker/daemon.json "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{   \n    "default-runtime": "nvidia",\n        "runtimes": {\n        "nvidia": {\n            "path": "nvidia-container-runtime",\n            "runtimeArgs": []\n        }\n    }\n}\n'))),(0,i.yg)("p",null,"Use the following command to initialize and start Riva:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo bash riva_init.sh\nsudo bash riva_start.sh\n")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/setup_riva_4.png"})),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Please note, you need to keep this terminal alive.")),(0,i.yg)("h3",{id:"install-and-run-llm"},"Install and run LLM"),(0,i.yg)("p",null,"To simplify the installation process, we can refer to Dusty's ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/text-generation-inference"},"jetson-containers")," project to install ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/huggingface/text-generation-inference"},"text generation inference"),", and use text generation inference to load the ",(0,i.yg)("a",{parentName:"p",href:"https://huggingface.co/meta-llama/Llama-2-7b-chat-hf"},"Llama2 7B")," large language model. Open a new terminal and run the following command."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~\ngit clone https://github.com/dusty-nv/jetson-containers.git\ncd jetson-containers\npip install -r requirements.txt\n./run.sh $(./autotag text-generation-inference)\nexport HUGGING_FACE_HUB_TOKEN=<your hugging face token>\ntext-generation-launcher --model-id meta-llama/Llama-2-7b-chat-hf --port 8899\n")),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"You can obtain the hugging face token ",(0,i.yg)("a",{parentName:"p",href:"https://huggingface.co/docs/hub/security-tokens"},"here"),".")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/install_run_llm.png"})),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Please note, you need to keep this terminal alive.")),(0,i.yg)("h3",{id:"clone-local-chatbot-demo-and-try-to-run-it"},"Clone local chatbot demo and try to run it."),(0,i.yg)("p",null,"Now, you should have at least two terminals open, one running the Riva server and the other running the text generation inference server. Next, we need to open a new terminal to run our demo."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~\ngit clone https://github.com/yuyoujiang/Deploy-Riva-LLama-on-Jetson.git\ncd Deploy-Riva-LLama-on-Jetson\n\n# Query audio input/output devices.\npython3 local_chatbot.py --list-input-devices\npython3 local_chatbot.py --list-output-devices\n\npython3 local_chatbot.py --input-device <your device id> --output-device <your device id>\n# For example: python3 local_chatbot.py --input-device 25 --output-device 30\n")),(0,i.yg)("h2",{id:"effect-demonstration"},"Effect Demonstration"),(0,i.yg)("div",{align:"center"},(0,i.yg)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/Nc3D-qITDoU?si=aWI7Z5IEprRKfuKE",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})),(0,i.yg)("h2",{id:"references"},"References"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.hackster.io/wxxniubi8/build-an-ai-chatbot-using-riva-and-openai-13dc41"},"build-an-ai-chatbot-using-riva-and-openai")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/dusty-nv/jetson-containers/tree/cb6c847f88df221e705397a1ee98424c2e893243/packages/llm/text-generation-inference"},"https://github.com/dusty-nv/jetson-containers")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/huggingface/text-generation-inference"},"https://github.com/huggingface/text-generation-inference")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://huggingface.co/meta-llama"},"https://huggingface.co/meta-llama"))),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);