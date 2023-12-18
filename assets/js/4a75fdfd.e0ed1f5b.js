"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18289],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(o),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return o?r.createElement(h,n(n({ref:t},d),{},{components:o})):r.createElement(h,n({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,n[1]=l;for(var c=2;c<i;c++)n[c]=o[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},84984:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=o(87462),a=(o(67294),o(3905));const i={description:"Train your own data set with Yolov5 and Deploy on reTerminal DM",title:"Train your own data set with Yolov5 and Deploy on reTerminal DM",keywords:["Edge","reTerminal DM Application","Embedded_ML","yolov5"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Yolo5",last_update:{date:"9/7/2023",author:"Kasun Thushara"}},n=void 0,l={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal-DM/Embedded_ML/reTerminal-DM-Yolo5",id:"Edge/Raspberry_Pi_Devices/reTerminal-DM/Embedded_ML/reTerminal-DM-Yolo5",title:"Train your own data set with Yolov5 and Deploy on reTerminal DM",description:"Train your own data set with Yolov5 and Deploy on reTerminal DM",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/Embedded_ML/reTerminal-DM-Yolo5.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal-DM/Embedded_ML",slug:"/reTerminal-DM-Yolo5",permalink:"/reTerminal-DM-Yolo5",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/Embedded_ML/reTerminal-DM-Yolo5.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1694044800,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{description:"Train your own data set with Yolov5 and Deploy on reTerminal DM",title:"Train your own data set with Yolov5 and Deploy on reTerminal DM",keywords:["Edge","reTerminal DM Application","Embedded_ML","yolov5"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Yolo5",last_update:{date:"9/7/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Frigate intergrating with reTerminal DM",permalink:"/reterminal-DM-Frigate"},next:{title:"Object detection with Edge Impulse and reTerminal DM",permalink:"/reTerminal-DM-edgeimpulse"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware preparation",id:"hardware-preparation",level:3},{value:"Software preparation",id:"software-preparation",level:3},{value:"Roboflow",id:"roboflow",level:3},{value:"Ultralytics",id:"ultralytics",level:3},{value:"Choose a data set from Roboflow",id:"choose-a-data-set-from-roboflow",level:2},{value:"Train your custom dataset",id:"train-your-custom-dataset",level:2},{value:"Prepare your reTerminal DM",id:"prepare-your-reterminal-dm",level:2},{value:"Inference with detect.py",id:"inference-with-detectpy",level:2},{value:"Run on Edge TPU",id:"run-on-edge-tpu",level:2},{value:"Resources",id:"resources",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("center",null,(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/yolov5.gif"})),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Object detection, a fundamental aspect of computer vision, involves identifying objects within images and finds application in numerous fields such as surveillance, healthcare, and self-driving cars. Single-Stage Object Detectors are a specific category of models that simplify this task by directly predicting object categories and bounding box coordinates without requiring an initial region proposal stage. This streamlined approach is especially valuable in real-time applications. Notably, the YOLO (You Only Look Once) family of models exemplifies this efficiency, offering fast object detection with compromising accuracy."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,a.kt)("h3",{id:"hardware-preparation"},"Hardware preparation"),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",{align:"center"},(0,a.kt)("tr",null,(0,a.kt)("th",null,"reTerminal DM"),(0,a.kt)("th",null,"Coral USB Accelerator")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminaldm.png",style:{width:250,height:"auto"}}))),(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/coral.png",style:{width:250,height:"auto"}})))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reTerminal-DM-With-Camera-p-5648.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.kt)("td",null,(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,a.kt)("h3",{id:"software-preparation"},"Software preparation"),(0,a.kt)("p",null,"We recommend installing the latest version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reterminal-dm-flash-OS/"},"guide"),"."),(0,a.kt)("h3",{id:"roboflow"},"Roboflow"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow.png",alt:"pir",width:"200",height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://universe.roboflow.com/"},"Roboflow")," is a comprehensive platform for computer vision that offers a wide range of tools and services to streamline the process of developing and deploying computer vision models. One of its standout features is its robust support for custom datasets with annotations. Users can easily upload their own datasets, complete with annotations, to train and fine-tune computer vision models. So create a account with this. "),(0,a.kt)("h3",{id:"ultralytics"},"Ultralytics"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ultralytic.png",alt:"pir",width:"200",height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ultralytics.com/"},"Ultralytics")," is a cutting-edge platform and research organization that specializes in computer vision and deep learning. They are renowned for their contributions to the field, particularly in the development of the YOLO (You Only Look Once) family of object detection models, such as YOLOv5. Ultralytics offers a range of state-of-the-art tools and open-source software for object detection, image classification, and more, making advanced computer vision accessible to researchers and developers. Their dedication to innovation and performance-driven solutions has garnered significant attention and acclaim in the computer vision community, making Ultralytics a go-to resource for those seeking to push the boundaries of what's possible in the realm of deep learning and visual recognition."),(0,a.kt)("h2",{id:"choose-a-data-set-from-roboflow"},"Choose a data set from Roboflow"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1")," Please access the provided website and navigate to the dataset of your choice using the search function. ",(0,a.kt)("a",{parentName:"li",href:"https://universe.roboflow.com/"},"Roboflow")," ")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow1.PNG",alt:"pir",width:"800",height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2")," After you select a data set click ",(0,a.kt)("strong",{parentName:"li"},"Download this Dataset"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow2.PNG",alt:"pir",width:"800",height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3")," Select YOLOv5 download format.")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow3.PNG",alt:"pir",width:"400",height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4")," Select ",(0,a.kt)("strong",{parentName:"li"},"show download code")," and Press continue.")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow4.PNG",alt:"pir",width:"400",height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5"),' In the "Jupyter" section, you\'ll find a code snippet. Please copy this snippet to your clipboard.')),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow5.PNG",alt:"pir",width:"400",height:"auto"})),(0,a.kt)("h2",{id:"train-your-custom-dataset"},"Train your custom dataset"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1")," Please access the provided github link and click on ",(0,a.kt)("strong",{parentName:"li"},"Open in Colab")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KasunThushara/yoloV5n_RPI/tree/main"},"Github Link"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/github.PNG",alt:"pir",width:"800",height:"auto"})),(0,a.kt)("a",{target:"_blank",href:"https://colab.research.google.com/github/KasunThushara/yoloV5n_RPI/blob/main/yolov5_reTerminal.ipynb"},(0,a.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Before deploying a model on resource-constrained devices like the Raspberry Pi, it's often essential to conduct model conversion and quantization to ensure optimal performance. This process involves several steps: converting a PyTorch model (in .pt format) to a TensorFlow Lite (TFLite) model with quantization, specifically to the uint8 data type. You can train your custom dataset and convert it into a TFLite model using this Colab notebook. We have outlined a step-by-step process for training within the Colab environment. Please follow these instructions, obtain the ",(0,a.kt)("strong",{parentName:"p"},"data.yaml")," file and ",(0,a.kt)("strong",{parentName:"p"},"best-int8.tflite")," file, and return to this wiki for further guidance.")),(0,a.kt)("h2",{id:"prepare-your-reterminal-dm"},"Prepare your reTerminal DM"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),"  On Terminal execute these commands one by one.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo git clone https://github.com/ultralytics/yolov5\ncd yolov5\npip install -r requirements.txt \nsudo apt-get install python3-tflite-runtime\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2")," Paste Data.yaml file and best-int8.tflite file inside yolov5 folder")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminal.PNG",alt:"pir",width:"800",height:"auto"})),(0,a.kt)("h2",{id:"inference-with-detectpy"},"Inference with detect.py"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1")," Open reterminal and navigate to yolov5 folder")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd yolov5\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2")," Inference with detect.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python detect.py --weight best-int8.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can explore the official Ultralytics GitHub site at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5"},"https://github.com/ultralytics/yolov5")," to learn how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"detect.py")," script and discover the various sources you can utilize for feeding images or video streams into the YOLOv5 model.")),(0,a.kt)("h2",{id:"run-on-edge-tpu"},"Run on Edge TPU"),(0,a.kt)("center",null,(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif"})),(0,a.kt)("p",null,"The deployment of the YOLOv5n model on an Edge TPU represents a dynamic synergy between state-of-the-art object detection and high-performance edge computing. This amalgamation empowers applications in edge AI, such as real-time object recognition in resource-constrained environments, making it invaluable for tasks like security surveillance, retail analytics, and autonomous systems. YOLOv5n's efficient design harmonizes seamlessly with Edge TPU's hardware acceleration, delivering rapid and accurate object detection at the edge of the network, where low latency and real-time processing are paramount. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inference with detect.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python detect.py --weight best-int8_edgetpu.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml\n")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5"},"Yolov5 Official Documentation"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,a.kt)("a",{parentName:"p",href:"https://universe.roboflow.com/"},"Roboflow")))),(0,a.kt)("h1",{id:"tech-support"},"Tech support"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);