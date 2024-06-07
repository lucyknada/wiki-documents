"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49869],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=o,y=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(58168),o=(r(96540),r(15680));const i={description:"Security Xray Scan Knife Detection",title:"Security Xray Scan Knife Detection",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Security_Scan",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},a="Knife Detection: An Object Detection Model deployed on Triton Inference Sever based on reComputer",s={unversionedId:"Edge/NVIDIA_Jetson/Application/Computer_Vision/Security_Scan",id:"Edge/NVIDIA_Jetson/Application/Computer_Vision/Security_Scan",title:"Security Xray Scan Knife Detection",description:"Security Xray Scan Knife Detection",source:"@site/docs/Edge/NVIDIA_Jetson/Application/Computer_Vision/Security_Scan.md",sourceDirName:"Edge/NVIDIA_Jetson/Application/Computer_Vision",slug:"/Security_Scan",permalink:"/Security_Scan",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Application/Computer_Vision/Security_Scan.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Security Xray Scan Knife Detection",title:"Security Xray Scan Knife Detection",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Security_Scan",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"MaskCam",permalink:"/Jetson-Nano-MaskCam"},next:{title:"Jetson Community Projects",permalink:"/reComputer_Jetson_Series_Projects"}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Hardware Required",id:"hardware-required",level:4},{value:"Hardware Setup",id:"hardware-setup",level:4},{value:"Software",id:"software",level:3},{value:"Set up Raspberry Pi",id:"set-up-raspberry-pi",level:4},{value:"Set up reComputer J1010",id:"set-up-recomputer-j1010",level:3},{value:"Operating the Program",id:"operating-the-program",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"knife-detection-an-object-detection-model-deployed-on-triton-inference-sever-based-on-recomputer"},"Knife Detection: An Object Detection Model deployed on Triton Inference Sever based on reComputer"),(0,o.yg)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/niS0TLzyn-s",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,o.yg)("p",null,"Security check is a safety alarm for the consideration of passengers and the transportation sectors, keeping danger away, usually applying in the airports, railway stations, subway stations, etc. In the existing security inspection field, security inspection machines are deployed on the inbound passages of public transportation. In general, it requires multiple devices to work at the same time."),(0,o.yg)("p",null,"Nevertheless, the detection performance of prohibited items in X-ray images is still not ideal due to the overlapping of detected objects during the security inspection. For this matter, based on the de-occlusion module in the Triton Interface Sever, deploying a prohibited item detection algorithm in the Xray images can perform a better way."),(0,o.yg)("p",null,"Hence, credit to ",(0,o.yg)("a",{parentName:"p",href:"https://arxiv.org/abs/2004.08656"},"Yanlu Wei, Renshuai Tao et al."),", we provide this fundamental project that we are going to deploy a Deep Learning model on ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},"reComputer J1010")," that could detect prohibited items (knives) with the Raspberry Pi and the reComputer J1010 where we use one reComputer J1010 as our inference server and two Raspberry Pi to simulate security inspection machines as sending images. The ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html"},"reComputer 1020"),", ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html"},"reComputer J2011"),", ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html"},"reComputer J2012")," and ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html"},"Nvidia Jetson AGX Xavier")," are all supported."),(0,o.yg)("h2",{id:"getting-started"},"Getting Started"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/nvidia-triton-inference-server"},"Triton Inference Server")," provides a cloud and edge inferencing solution, optimized for both CPUs and GPUs. Triton supports an HTTP/REST and GRPC protocol that allows remote clients to request inferencing for any model being managed by the server. Here we are going to use Triton (Triton Inference Server) as our local server which will be deployed detection model."),(0,o.yg)("h3",{id:"hardware"},"Hardware"),(0,o.yg)("h4",{id:"hardware-required"},"Hardware Required"),(0,o.yg)("p",null,"In this project the required devices are shown as below:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html"},"Raspberry Pi 4B"),"*2"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},"reComputer J1010")),(0,o.yg)("li",{parentName:"ul"},"HDMI-display screen, mouse and keyboard"),(0,o.yg)("li",{parentName:"ul"},"PC")),(0,o.yg)("h4",{id:"hardware-setup"},"Hardware Setup"),(0,o.yg)("p",null,"Two Raspberry Pi and reComputer should be powered on and all of them should be under the ",(0,o.yg)("strong",{parentName:"p"},"same internet"),". In this project, we use two Raspberry pi to simulate security machine's work since the security inspection machines are used by multiple devices in most instances. Hence, both"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_23.png"})),(0,o.yg)("p",null,"Just one Raspberry Pi could be also applied to this project. However, simultaneous knife detection on two devices demonstration could offer better dynamic batching capabilities of the Triton Inference Server. In the next instruction, we will introduce you how to set up the software on Raspberry Pi and reComputer J1010."),(0,o.yg)("h3",{id:"software"},"Software"),(0,o.yg)("p",null,"We here use ",(0,o.yg)("a",{parentName:"p",href:"https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view"},"Xray images dataset")," as our ",(0,o.yg)("strong",{parentName:"p"},"input data")," which will be placed on the ",(0,o.yg)("strong",{parentName:"p"},"Raspberry Pi"),".  After that, reComputer will output the processed inference results to the Raspberry Pi. In the end, the Raspberry Pi will complete the final work and display on the screen, i.e., the last layer of inference model will be deployed on the Raspberry Pi."),(0,o.yg)("h4",{id:"set-up-raspberry-pi"},"Set up Raspberry Pi"),(0,o.yg)("p",null,"We here will show you how to set up required softwares on Raspberry Pi, including"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1."),"  Install the Raspbian Buster system and basic configuration from the ",(0,o.yg)("a",{parentName:"p",href:"https://www.raspberrypi.com/documentation/computers/getting-started.html#using-network-installation"},"official website"),". In this project, we use RASPBERRY PI OS(64 bit) as our operated system."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_1.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2.")," Configure the Raspberry Pi SSH port (optional)."),(0,o.yg)("p",null,"Before deploying the environment, we can open the Raspberry Pi SSH port and call it remotely using the ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/remote_connect/"},"SSH interface")," on the PC."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Notice: make sure the PC and Raspberry Pi are under the same LAN.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3.")," Configure the Python environment."),(0,o.yg)("p",null,"We need to deploy the required environments for the inference model as ",(0,o.yg)("strong",{parentName:"p"},"Python, PyTorch, Tritonclient, and TorchVision"),". and image display as ",(0,o.yg)("strong",{parentName:"p"},"OpenCV")," on the Raspberry Pi. We provide the instructions below:"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Python")),(0,o.yg)("p",null,"We can execute ",(0,o.yg)("inlineCode",{parentName:"p"},"python \u2013V")," and ensure the Python version is 3.9.2. We need to install PyTorch, Torchclient and TorchVision that the versions we need are corresponding to the Python version 3.9.2. You can refer to ",(0,o.yg)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"here")," to download and install."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"PyTorch")),(0,o.yg)("p",null,"If the Python version is correct. We can now install Pytorch."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Notice: Before we install Pytorch, we have to check out Raspbian version.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_10.png"})),(0,o.yg)("p",null,"Execute the command below to install Pytorch:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"# get a fresh start\nsudo apt-get update\nsudo apt-get upgrade\n\n# install the dependencies\nsudo apt-get install python3-pip libjpeg-dev libopenblas-dev libopenmpi-dev libomp-dev\n\n# above 58.3.0 you get version issues\nsudo -H pip3 install setuptools==58.3.0\nsudo -H pip3 install Cython\n\n# install gdown to download from Google drive\nsudo -H pip3 install gdown\n\n# Buster OS\n# download the wheel\ngdown https://drive.google.com/uc?id=1gAxP9q94pMeHQ1XOvLHqjEcmgyxjlY_R\n# install PyTorch 1.11.0\nsudo -H pip3 install torch-1.11.0a0+gitbc2c6ed-cp39-cp39-linux_aarch64.whl\n# clean up\nrm torch-1.11.0a0+gitbc2c6ed-cp39-cp39m-linux_aarch64.whl\n")),(0,o.yg)("p",null,"After a successful installation, we can check PyTorch with the following commands ",(0,o.yg)("strong",{parentName:"p"},"after initiating")," ",(0,o.yg)("inlineCode",{parentName:"p"},"python"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"import torch as tr\nprint(tr.__version__)\n")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_11.png"})),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Notice: PyTorch wheels for Raspberry Pi 4 can be find in ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS"},"https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Tritonclient")),(0,o.yg)("p",null,"We can execute ",(0,o.yg)("inlineCode",{parentName:"p"},"pip3 install tritonclient[all]")," to download Tritonclient."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_9.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"TorchVision")),(0,o.yg)("p",null,"After Pytorch was installed, we can move to the Torchvision installation. Here are the commands:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"# download the wheel\ngdown https://drive.google.com/uc?id=1oDsJEHoVNEXe53S9f1zEzx9UZCFWbExh\n# install torchvision 0.12.0\nsudo -H pip3 install torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl\n# clean up\nrm torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl\n")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_12.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"OpenCV")),(0,o.yg)("p",null,"We can directly execute ",(0,o.yg)("inlineCode",{parentName:"p"},"pip3 install opencv-python")," to install OpenCV:"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_13.png"})),(0,o.yg)("h3",{id:"set-up-recomputer-j1010"},"Set up reComputer J1010"),(0,o.yg)("p",null,"In this project, we will deploy Triton Inference Server to the reComputer J1010. In order to enhance the interactivity and deployment convenience of the trained model, we will convert the model into ",(0,o.yg)("strong",{parentName:"p"},"ONXX format"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1.")," ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/"},"Install")," Jetpack 4.6.1 into reComputer J1010."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2.")," Create a new folder \u201copi/1\u201d in \u201chome/server/docs/examples/model_repository \u201d. and then download trained and converted ",(0,o.yg)("a",{parentName:"p",href:"https://drive.google.com/file/d/1RcHK_gthCXHsJLeDOUQ6c3r0RlAUgRfV/view?usp=sharing"},"model.onnx")," and put it into the \u201c1\u201d folder."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_15.jpg"})),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"If you need another general server, you can execute the following steps.")),(0,o.yg)("p",null,"Open a new Terminal and execute"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"git clone https://github.com/triton-inference-server/server\ncd ~/server/docs/examples\nsh fetch_models.sh\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3.")," Install the release of Triton for JetPack 4.6.1 and is provided in the attached tar file: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/triton-inference-server/server/releases/download/v2.19.0/tritonserver2.19.0-jetpack4.6.1.tgz"},"tritonserver2.21.0-jetpack5.0.tgz"),"."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_16.png"})),(0,o.yg)("p",null,"The tar file here contains the Triton server executable and shared libraries including the C++ and Python client libraries and examples. For more information about how to install and use Triton on JetPack you can refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/triton-inference-server/server/blob/r22.04/docs/jetson.md"},"here"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 4.")," Execute the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"\nmkdir ~/TritonServer && tar -xzvf tritonserver2.19.0-jetpack4.6.1.tgz -C ~/TritonServer\ncd ~/TritonServer/bin\n./tritonserver --model-repository=/home/seeed/server/docs/examples/model_repository --backend-directory=/home/seeed/TritonServer/backends --strict-model-config=false --min-supported-compute-capability=5.3\n")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_17.png"})),(0,o.yg)("p",null,"Now, we have set up all the preparations."),(0,o.yg)("h2",{id:"operating-the-program"},"Operating the Program"),(0,o.yg)("p",null,"Since all the required environments are deployed, we can run our project according to following steps."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1.")," Download model and related files."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Clone module from GitHub.")),(0,o.yg)("p",null,"Open a new Terminal and execute:."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"git clone https://github.com/LemonCANDY42/Seeed_SMG_AIOT.git\ncd Seeed_SMG_AIOT/\ngit clone https://github.com/LemonCANDY42/OPIXray.git\n")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Create a new folder \u201cweights\u201d to store the trained weight of this algorithm \u201cDOAM.pth\u201d. Download the ",(0,o.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SecurityCheck/DOAM.pth.zip"},"weight file")," and execute:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"cd OPIXray/DOAM")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mkdir weights"))),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_19.png"})),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Create a new \u201cDataset\u201d folder to store the ",(0,o.yg)("a",{parentName:"li",href:"https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view?usp=sharing"},"Xray images dataset"),".")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_20.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2.")," Running inference model."),(0,o.yg)("p",null,"Execute ",(0,o.yg)("inlineCode",{parentName:"p"},"python OPIXray_grpc_image_client.py -u 192.168.8.230:8001 -m opi Dataset")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_21.png"})),(0,o.yg)("p",null,"The result will be shown as the figure below:"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan22.jpg"})),(0,o.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"When you luanch Triton server, you may meet following errors:")),(0,o.yg)("blockquote",null,(0,o.yg)("ol",{parentName:"blockquote"},(0,o.yg)("li",{parentName:"ol"},"if error with libb64.so.0d, execute:\n",(0,o.yg)("inlineCode",{parentName:"li"},"sudo apt-get install libb64-0d")))),(0,o.yg)("blockquote",null,(0,o.yg)("ol",{parentName:"blockquote",start:2},(0,o.yg)("li",{parentName:"ol"},"if error with error with libre2.so.2, execute:\n",(0,o.yg)("inlineCode",{parentName:"li"},"sudo apt-get install libre2-dev")))),(0,o.yg)("blockquote",null,(0,o.yg)("ol",{parentName:"blockquote",start:3},(0,o.yg)("li",{parentName:"ol"},"if error: creating server: Internal - failed to load all models, execute:\n",(0,o.yg)("inlineCode",{parentName:"li"},"--exit-on-error=false")))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);