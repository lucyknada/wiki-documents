"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73542],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(i),m=a,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return i?n.createElement(g,o(o({ref:t},c),{},{components:i})):n.createElement(g,o({ref:t},c))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},96748:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const r={description:"Object detection with Edge Impulse and reTerminal",title:"Object detection with Edge Impulse and reTerminal",keywords:["Edge","reTerminal Application","Embedded_ML"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_ML_Edgeimpulse",last_update:{date:"9/12/2023",author:"Kasun Thushara"}},o=void 0,l={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal/Application/Embedded_ML/reTerminal_ML_Edgeimpulse",id:"Edge/Raspberry_Pi_Devices/reTerminal/Application/Embedded_ML/reTerminal_ML_Edgeimpulse",title:"Object detection with Edge Impulse and reTerminal",description:"Object detection with Edge Impulse and reTerminal",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal/Application/Embedded_ML/reTerminal_ML_Edgeimpulse.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal/Application/Embedded_ML",slug:"/reTerminal_ML_Edgeimpulse",permalink:"/reTerminal_ML_Edgeimpulse",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal/Application/Embedded_ML/reTerminal_ML_Edgeimpulse.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1694476800,formattedLastUpdatedAt:"Sep 12, 2023",frontMatter:{description:"Object detection with Edge Impulse and reTerminal",title:"Object detection with Edge Impulse and reTerminal",keywords:["Edge","reTerminal Application","Embedded_ML"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_ML_Edgeimpulse",last_update:{date:"9/12/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Getting started with TensorFlow Lite",permalink:"/reTerminal_ML_TFLite"},next:{title:"Mender Client on reTerminal",permalink:"/Mender-Client-reTerminal"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Hardware preparation",id:"hardware-preparation",level:3},{value:"Edge Impulse",id:"edge-impulse",level:3},{value:"Software preparation",id:"software-preparation",level:3},{value:"Install Dependencies on your reTerminal device",id:"install-dependencies-on-your-reterminal-device",level:2},{value:"Connecting to Edge Impulse",id:"connecting-to-edge-impulse",level:2},{value:"Verifying that your device is connected",id:"verifying-that-your-device-is-connected",level:2},{value:"Detect objects",id:"detect-objects",level:2},{value:"Building a dataset",id:"building-a-dataset",level:3},{value:"Labeling data",id:"labeling-data",level:3},{value:"Rebalancing your dataset",id:"rebalancing-your-dataset",level:3},{value:"Create a impulse",id:"create-a-impulse",level:3},{value:"Feature generation",id:"feature-generation",level:3},{value:"Training",id:"training",level:3},{value:"Validating your model",id:"validating-your-model",level:3},{value:"Running the model on your reTerminal device",id:"running-the-model-on-your-reterminal-device",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/edgeimpulse.gif",alt:"pir",width:"800",height:"auto"})),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In today's digital landscape, the integration of edge AI and IoT (Internet of Things) technologies has opened up exciting possibilities for developers and enthusiasts. One such powerful platform that simplifies the creation of machine learning models for edge devices is Edge Impulse. In this step-by-step guide, we will walk you through the process of installing Edge Impulse on your reTerminal device and creating a local object detection solution."),(0,a.kt)("p",null,"What You'll Learn:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Installing essential dependencies for your reTerminal."),(0,a.kt)("li",{parentName:"ul"},"Setting up Node.js and npm for your project."),(0,a.kt)("li",{parentName:"ul"},"Deploying the Edge Impulse Linux CLI tool."),(0,a.kt)("li",{parentName:"ul"},"Creating and training an object detection model within Edge Impulse."),(0,a.kt)("li",{parentName:"ul"},"Deploying and testing your model locally on the reTerminal device.")),(0,a.kt)("p",null,"By the end of this guide, you'll have a hands-on understanding of how to harness the power of Edge Impulse for object detection on edge devices like the reTerminal. So, let's dive in and explore the exciting world of local AI-driven object detection!"),(0,a.kt)("h3",{id:"hardware-preparation"},"Hardware preparation"),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",{align:"center"},(0,a.kt)("tr",null,(0,a.kt)("th",null,"reTerminal"),(0,a.kt)("th",null,"Camera Module V1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/reterminal.png",style:{width:250,height:"auto"}}))),(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/camera.png",style:{width:250,height:"auto"}})))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.kt)("td",null,(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,a.kt)("h3",{id:"edge-impulse"},"Edge Impulse"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/Edge_Impulse.jpg",alt:"pir",width:"200",height:"auto"})),(0,a.kt)("p",null,"Edge Impulse is a versatile platform dedicated to streamlining the development of machine learning models tailored for edge devices, such as microcontrollers and embedded systems. This comprehensive solution simplifies the entire machine learning workflow, encompassing data collection, preprocessing, model training, deployment, and monitoring, all within a unified environment. One of its standout features is its user-friendly interface, which allows users to effortlessly collect and label data while offering a library of pre-built signal processing blocks and machine learning algorithms for efficient model development. Edge Impulse is engineered for optimal inference performance on resource-constrained edge devices, ensuring real-time processing without relying on continuous internet connectivity. It's further enhanced by seamless integration with a wide array of popular hardware platforms, empowering developers to deploy models with ease."),(0,a.kt)("h3",{id:"software-preparation"},"Software preparation"),(0,a.kt)("p",null,"We recommend installing the latest version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc"},"guide"),"."),(0,a.kt)("p",null,"After that we need to configure raspberry pi camera, please follow the steps outlined in this ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal-piCam/"},"guide")),(0,a.kt)("p",null,"You'll need an Edge Impulse account to get started, so please create one by visiting this ",(0,a.kt)("a",{parentName:"p",href:"https://edgeimpulse.com/"},"link"),". By default initial project will be created."),(0,a.kt)("h2",{id:"install-dependencies-on-your-reterminal-device"},"Install Dependencies on your reTerminal device"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To set this device up in Edge Impulse, run the following commands one by one")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\ncurl -sL https://deb.nodesource.com/setup_12.x | sudo bash -\nsudo apt install -y gcc g++ make build-essential nodejs sox gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps\nnpm config set user root && sudo npm install edge-impulse-linux -g --unsafe-perm\n")),(0,a.kt)("h2",{id:"connecting-to-edge-impulse"},"Connecting to Edge Impulse"),(0,a.kt)("p",null,"With all the software set up, connect your camera or microphone to your reTerminal. You'll need to provide your email address ,password  linked to your Edge Impulse account and a device name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"edge-impulse-linux\n")),(0,a.kt)("center",null,(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/connectingdevice.png"})),(0,a.kt)("h2",{id:"verifying-that-your-device-is-connected"},"Verifying that your device is connected"),(0,a.kt)("p",null,"That's all! Your device is now connected to Edge Impulse. To verify this, go to your Edge Impulse project, and click Devices. The device will be listed here."),(0,a.kt)("center",null,(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/connectdevice.PNG"})),(0,a.kt)("h2",{id:"detect-objects"},"Detect objects"),(0,a.kt)("h3",{id:"building-a-dataset"},"Building a dataset"),(0,a.kt)("p",null,"You have the option to collect data from the attached Raspberry Pi camera directly through the reTerminal or to upload pre-collected data from your local storage."),(0,a.kt)("center",null,(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/datacollection.png"})),(0,a.kt)("p",null,"By selecting 'Camera' as the sensor and providing a label name, you can initiate the data sampling process."),(0,a.kt)("h3",{id:"labeling-data"},"Labeling data"),(0,a.kt)("p",null,'All your collected images will be staged for annotation at the "labeling queue". Labeling your objects is as easy as dragging a box around the object, and entering a label. Then click save label.'),(0,a.kt)("center",null,(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/labeling.PNG"})),(0,a.kt)("h3",{id:"rebalancing-your-dataset"},"Rebalancing your dataset"),(0,a.kt)("p",null,"To validate the effectiveness of your model, it's essential to reserve a portion of your data, usually around 20%, as a 'test set.' This data should not be used during model training but solely for validation purposes. You can easily switch between your training and test sets using the two buttons located above the 'Data collected' widget. If you've collected data on your development board and there's currently no data in the testing set, you can resolve this by navigating to ",(0,a.kt)("strong",{parentName:"p"},"Dashboard > Perform train/test split.")),(0,a.kt)("center",null,(0,a.kt)("img",{width:800,height:"auto",src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/split.PNG"})),(0,a.kt)("h3",{id:"create-a-impulse"},"Create a impulse"),(0,a.kt)("p",null,"In this tutorial, we've been working with 96x96 images, but it's important to note that Edge Impulse can handle other resolutions as long as the images are square. To configure this, follow these steps: First, go to ",(0,a.kt)("strong",{parentName:"p"},"Create Impulse,")," then set the ",(0,a.kt)("strong",{parentName:"p"},"image width")," and ",(0,a.kt)("strong",{parentName:"p"},"image height")," to your desired dimensions (e.g., 96). Next, choose ",(0,a.kt)("strong",{parentName:"p"},"Fit shortest axis")," as the ",(0,a.kt)("strong",{parentName:"p"},"resize mode,")," and add the ",(0,a.kt)("strong",{parentName:"p"},"Images")," and ",(0,a.kt)("strong",{parentName:"p"},"Object Detection (Images)")," blocks. Finally, click ",(0,a.kt)("strong",{parentName:"p"},"Save Impulse")," to apply these settings."),(0,a.kt)("center",null,(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/impulse.PNG"})),(0,a.kt)("h3",{id:"feature-generation"},"Feature generation"),(0,a.kt)("p",null,"In this step, you'll perform the following tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resize all the data."),(0,a.kt)("li",{parentName:"ul"},"Apply the processing block to the entire dataset."),(0,a.kt)("li",{parentName:"ul"},"Generate a 3D visualization of your complete dataset."),(0,a.kt)("li",{parentName:"ul"},"Click 'Generate features' to initiate the process.")),(0,a.kt)("p",null,"Afterward, the 'Feature explorer' will load. This feature explorer represents a plot of all the data in your dataset. Since images have numerous dimensions, we utilize a technique called 'dimensionality reduction' on the dataset before visualizing it."),(0,a.kt)("center",null,(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/generatf.PNG"})),(0,a.kt)("h3",{id:"training"},"Training"),(0,a.kt)("p",null,"Within the '",(0,a.kt)("strong",{parentName:"p"},"Object Detection"),"' tab, you have the option to train your dataset. To do this, you'll need to configure specific parameters and select the model you intend to use. In this tutorial, we're opting for the FOMO model, which, according to its website, introduces a revolutionary approach to running object detection models on resource-constrained devices. FOMO is an innovative algorithm that brings real-time object detection, tracking, and counting capabilities to microcontrollers, marking a significant milestone. Notably, FOMO boasts a remarkable speed advantage, outperforming MobileNet SSD by a factor of 30, and it can operate with less than 200K of RAM."),(0,a.kt)("center",null,(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/training.PNG"})),(0,a.kt)("p",null,"After completing the training process, you will receive a confusion matrix that resembles the following."),(0,a.kt)("center",null,(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/confutionmat.PNG",height:"auto"})),(0,a.kt)("h3",{id:"validating-your-model"},"Validating your model"),(0,a.kt)("p",null,"Now that the model is trained, let's put it to the test using some test data. During data collection, we divided the dataset into training and testing subsets. The model was exclusively trained on the training data. Therefore, we can employ the testing dataset to assess how effectively the model will perform in real-world scenarios. This validation step is crucial to ensure that the model hasn't overfit the training data, a common issue. To validate our model, navigate to ",(0,a.kt)("strong",{parentName:"p"},"Model Testing")," and select ",(0,a.kt)("strong",{parentName:"p"},"Classify all")),(0,a.kt)("center",null,(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/ReTerminal/ML/test.png",height:"auto"})),(0,a.kt)("h3",{id:"running-the-model-on-your-reterminal-device"},"Running the model on your reTerminal device"),(0,a.kt)("p",null,"in new blank terminal run following command line ."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"edge-impulse-linux-runner\n")),(0,a.kt)("p",null,"This action will trigger the model to be built and downloaded. It will then be executed on your reTerminal. If you are on the same network, you can access a live view of the camera feed and view the classification results directly from your reTerminal. Go to Url that device suggests. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Want to see a feed of the camera and live classification in your browser? Go to http://192.168.8.117:4912\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In conclusion, the seamless integration of reTerminal and Edge Impulse empowers developers to unlock the full potential of edge AI. reTerminal, with its robust hardware and versatile capabilities, serves as an excellent platform for running real-time object detection solutions. When coupled with Edge Impulse, which simplifies the creation and deployment of machine learning models on resource-constrained devices, the possibilities become limitless. Whether you're working on IoT applications, robotics, or any project that demands efficient, on-device AI, this powerful synergy between reTerminal and Edge Impulse opens up a world of innovation at the edge of technology."),(0,a.kt)("h1",{id:"tech-support"},"Tech support"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);