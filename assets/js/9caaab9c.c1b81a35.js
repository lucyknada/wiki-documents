"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24920],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},42073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(58168),a=(n(96540),n(15680));const i={description:"Trainnig For Model Assistant",title:"Object Detecion - SWIFT-YOLO",keywords:["sscma model assistant ai tinyml"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ModelAssistant_Tutorials_Training_YOLO",last_update:{date:"01/11/2024",author:"LynnL4"}},r="Object Detecion - SWIFT-YOLO",s={unversionedId:"Topics/TinyML/ModelAssistant/tutorials/training/yolo",id:"Topics/TinyML/ModelAssistant/tutorials/training/yolo",title:"Object Detecion - SWIFT-YOLO",description:"Trainnig For Model Assistant",source:"@site/docs/Topics/TinyML/ModelAssistant/tutorials/training/yolo.md",sourceDirName:"Topics/TinyML/ModelAssistant/tutorials/training",slug:"/ModelAssistant_Tutorials_Training_YOLO",permalink:"/ModelAssistant_Tutorials_Training_YOLO",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/ModelAssistant/tutorials/training/yolo.md",tags:[],version:"current",lastUpdatedBy:"LynnL4",lastUpdatedAt:1704931200,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{description:"Trainnig For Model Assistant",title:"Object Detecion - SWIFT-YOLO",keywords:["sscma model assistant ai tinyml"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ModelAssistant_Tutorials_Training_YOLO",last_update:{date:"01/11/2024",author:"LynnL4"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/ModelAssistant_Tutorials_Training_Overview"},next:{title:"Object Detecion - FOMO",permalink:"/ModelAssistant_Tutorials_Training_FOMO"}},l={},d=[{value:"Prepare Datasets",id:"prepare-datasets",level:2},{value:"Choose a Configuration",id:"choose-a-configuration",level:2},{value:"Training Model",id:"training-model",level:2},{value:"Testing and Evaluation",id:"testing-and-evaluation",level:2},{value:"Testing",id:"testing",level:3},{value:"Evaluation",id:"evaluation",level:3},{value:"Deployment",id:"deployment",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"object-detecion---swift-yolo"},"Object Detecion - SWIFT-YOLO"),(0,a.yg)("p",null,"This section describes how to train the digital meter model on the COCO digital meter datasets. The implementations of yolo digital meter detection model is based on the Swfit-YOLO and power by ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/open-mmlab/mmyolo"},"mmyolo")),(0,a.yg)("h2",{id:"prepare-datasets"},"Prepare Datasets"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," uses ",(0,a.yg)("a",{parentName:"p",href:"https://universe.roboflow.com/seeeddatasets/seeed_meter_digit/"},"Digital Meter Datasets")," by default to train the Swfit-YOLO model, please refer to the following steps to complete the preparation of datasets."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Download digital meter datasets with COCO datasets mode")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Remember its ",(0,a.yg)("strong",{parentName:"p"},"folder path")," (e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},"datasets\\digital_meter"),") of the unpacked datasets, you may need to use this folder path later."))),(0,a.yg)("h2",{id:"choose-a-configuration"},"Choose a Configuration"),(0,a.yg)("p",null,"We will choose a appropriate configuration file depending on the type of training task we need to perform, which we have already introduced in ",(0,a.yg)("a",{parentName:"p",href:"/ModelAssistant_Tutorials_Config"},"Config"),", for a brief description of the functions, structure, and principles of the configuration file."),(0,a.yg)("p",null,"For the Swfit-YOLO model example, we use ",(0,a.yg)("inlineCode",{parentName:"p"},"swift_yolo_tiny_1xb16_300e_coco.py")," as the configuration file, which is located in the folder under the SSCMA root directory ",(0,a.yg)("inlineCode",{parentName:"p"},"configs/swift_yolo")," and its additionally inherits the ",(0,a.yg)("inlineCode",{parentName:"p"},"base_arch.py")," configuration file."),(0,a.yg)("p",null,"For beginners, we recommend to pay attention to the ",(0,a.yg)("inlineCode",{parentName:"p"},"data_root")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"epochs")," parameters in this configuration file at first."),(0,a.yg)("details",null,(0,a.yg)("summary",null," swift_yolo_tiny_1xb16_300e_coco.py "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"_base_='../_base_/default_runtime_det.py'\n_base_ = [\"./base_arch.py\"]\n\nanchors = [\n    [(10, 13), (16, 30), (33, 23)],  # P3/8\n    [(30, 61), (62, 45), (59, 119)],  # P4/16\n    [(116, 90), (156, 198), (373, 326)]  # P5/32\n]\nnum_classes = 11\ndeepen_factor = 0.33\nwiden_factor = 0.15\n\nstrides = [8, 16, 32]\n\nmodel = dict(\n    type='mmyolo.YOLODetector',\n    backbone=dict(\n        type='YOLOv5CSPDarknet',\n        deepen_factor=deepen_factor,\n        widen_factor=widen_factor,\n    ),\n    neck=dict(\n        type='YOLOv5PAFPN',\n        deepen_factor=deepen_factor,\n        widen_factor=widen_factor,\n    ),\n    bbox_head=dict(\n        head_module=dict(\n            num_classes=num_classes,\n            in_channels=[256, 512, 1024],\n            widen_factor=widen_factor,\n        ),\n    ),\n)\n"))),(0,a.yg)("h2",{id:"training-model"},"Training Model"),(0,a.yg)("p",null,"Training the model requires using our previously configured SSCMA working environment, if you follow our ",(0,a.yg)("a",{parentName:"p",href:"ModelAssistant_Introduce_Installation"},"Installation")," guide using Conda to install ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," in a virtual environment named ",(0,a.yg)("inlineCode",{parentName:"p"},"sscma"),", please first make sure that you are currently in the virtual environment."),(0,a.yg)("p",null,"Then, in the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," project root directory, we execute the following command to train a Swfit-YOLO digital meter detection model."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"python3 tools/train.py \\\n    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \\\n    --cfg-options \\\n        data_root='datasets/digital_meter' \\\n        epochs=50\n")),(0,a.yg)("p",null,"During training, the model weights and related log information are saved to the path ",(0,a.yg)("inlineCode",{parentName:"p"},"work_dirs/swift_yolo_tiny_1xb16_300e_coco")," by default, and you can use tools such as ",(0,a.yg)("a",{parentName:"p",href:"https://www.tensorflow.org/tensorboard/get_started"},"TensorBoard")," to monitor for training."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"tensorboard --logdir work_dirs/swift_yolo_tiny_1xb16_300e_coco\n")),(0,a.yg)("p",null,"After the training is completed, the path of the latest Swfit-YOLO model weights file is saved in the ",(0,a.yg)("inlineCode",{parentName:"p"},"work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint")," file. Please take care of the path of the weight file, as it is needed when converting the model to other formats."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"If you have a virtual environment configured but not activated, you can activate it with the following command."),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"conda activate sscma\n"))),(0,a.yg)("h2",{id:"testing-and-evaluation"},"Testing and Evaluation"),(0,a.yg)("h3",{id:"testing"},"Testing"),(0,a.yg)("p",null,"After have finished training the Swfit-YOLO model, you can specify specific weights and test the model using the following command."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"python3 tools/inference.py \\\n    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \\\n    \"$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint)\" \\\n    --show \\\n    --cfg-options \\\n        data_root='datasets/digital_meter'\n")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"If you want a real-time preview while testing, you can append a parameter ",(0,a.yg)("inlineCode",{parentName:"p"},"--show")," to the test command to show the predicted results. For more optional parameters, please refer to the source code ",(0,a.yg)("inlineCode",{parentName:"p"},"tools/inference.py"),".")),(0,a.yg)("h3",{id:"evaluation"},"Evaluation"),(0,a.yg)("p",null,"In order to further test and evaluate the model on a realistic edge computing device, you need to export the model. In the process of exporting the model, ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," will do some optimization on the model, such as model pruning, distillation, etc. You can refer to the ",(0,a.yg)("a",{parentName:"p",href:"ModelAssistant_Tutorials_Export_Overview"},"Export")," section to learn more about how to export models."),(0,a.yg)("h3",{id:"deployment"},"Deployment"),(0,a.yg)("p",null,"After exporting the model, you can deploy the model to the edge computing device for testing and evaluation. You can refer to the ",(0,a.yg)("a",{parentName:"p",href:"/ModelAssistant_Deploy_Overview"},"Deploy")," section to learn more about how to deploy models."))}u.isMDXComponent=!0}}]);