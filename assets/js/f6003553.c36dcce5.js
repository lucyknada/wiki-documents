"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79067],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>m});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(o),g=n,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||i;return o?r.createElement(m,s(s({ref:t},p),{},{components:o})):r.createElement(m,s({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:n,s[1]=a;for(var u=2;u<i;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},14735:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=o(58168),n=(o(96540),o(15680));const i={description:"reComputer for Jetson Tutorials and Exercise",title:"reComputer for Jetson Tutorials and Exercise",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Jetson_Series_Tutorials_Exercise",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},s="reComputer for Jetson Tutorials and Exercises",a={unversionedId:"Edge/NVIDIA_Jetson/Application/Computer_Vision/reComputer_Jetson_Series_Tutorials_Exercise",id:"Edge/NVIDIA_Jetson/Application/Computer_Vision/reComputer_Jetson_Series_Tutorials_Exercise",title:"reComputer for Jetson Tutorials and Exercise",description:"reComputer for Jetson Tutorials and Exercise",source:"@site/docs/Edge/NVIDIA_Jetson/Application/Computer_Vision/reComputer_Jetson_Series_Tutorials_Exercise.md",sourceDirName:"Edge/NVIDIA_Jetson/Application/Computer_Vision",slug:"/reComputer_Jetson_Series_Tutorials_Exercise",permalink:"/reComputer_Jetson_Series_Tutorials_Exercise",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Application/Computer_Vision/reComputer_Jetson_Series_Tutorials_Exercise.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"reComputer for Jetson Tutorials and Exercise",title:"reComputer for Jetson Tutorials and Exercise",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Jetson_Series_Tutorials_Exercise",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Deploy YOLOv8 with TensorRT",permalink:"/YOLOv8-TRT-Jetson"},next:{title:"Train and deploy a custom classification model with YOLOv8",permalink:"/train_and_deploy_a_custom_classification_model_with_yolov8"}},l={},u=[{value:"Tutorial",id:"tutorial",level:2},{value:"Building video AI based on Jetson Nano&#39;s end-side application",id:"building-video-ai-based-on-jetson-nanos-end-side-application",level:3},{value:"Jetson AI courses and certifications",id:"jetson-ai-courses-and-certifications",level:2},{value:"Part 1 - NVIDIA Deep Learning Institute&#39;s Introductory AI Course on Jetson Nano",id:"part-1---nvidia-deep-learning-institutes-introductory-ai-course-on-jetson-nano",level:3},{value:"Part 2 - JetBot (optional)",id:"part-2---jetbot-optional",level:3},{value:"Part 3 - Hello AI World",id:"part-3---hello-ai-world",level:3},{value:"Apply AI on Jetson Nano",id:"apply-ai-on-jetson-nano",level:2},{value:"Building Edge Computing applications for Video with Jetson Nano",id:"building-edge-computing-applications-for-video-with-jetson-nano",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.yg)(c,(0,r.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"recomputer-for-jetson-tutorials-and-exercises"},"reComputer for Jetson Tutorials and Exercises"),(0,n.yg)("p",null,"The best way to learn is through exercise. We have assembled a collection of tutorials and exercises for starters here. Meanwhile, we will introduce the latest developer innovations as well for your further projects."),(0,n.yg)("h2",{id:"tutorial"},"Tutorial"),(0,n.yg)("p",null,"Check out the ",(0,n.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/learn/tutorials"},"Official Jetson Tutorials")," page for comprehensive educational videos on how to develop with Jetson. Here we have provided some tutorials we think are suitable for reComputer starters, including:"),(0,n.yg)("h3",{id:"building-video-ai-based-on-jetson-nanos-end-side-application"},(0,n.yg)("a",{parentName:"h3",href:"https://courses.nvidia.com/courses/course-v1:DLI+S-IV-02+V2-EN/"},"Building video AI based on Jetson Nano's end-side application")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rexuexi.png",alt:"pir",width:200,height:"auto "})),(0,n.yg)("p",null,"Learn to develop video analytics applications with the NVIDIA DeepStream SDK to gain meaningful insights through AI-based video understanding."),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"jetson-ai-courses-and-certifications"},(0,n.yg)("a",{parentName:"h2",href:"https://developer.nvidia.com/embedded/learn/jetson-ai-certification-programs#course_outline"},"Jetson AI courses and certifications")),(0,n.yg)("p",null,"NVIDIA's Deep Learning Institute (DLI) provides developers, educators, students, and lifelong learners with practical, hands-on training and certification in edge computing. It's a great way to gain the critical AI skills you need to thrive and advance in your career. After completing these free open source courses, you can even earn a certificate to demonstrate your understanding of Jetson and AI. ",(0,n.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/learn/jetson-ai-certification-programs#course_outline"},"Get started")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"part-1---nvidia-deep-learning-institutes-introductory-ai-course-on-jetson-nano"},(0,n.yg)("a",{parentName:"h3",href:"https://developer.nvidia.com/embedded/learn/jetson-ai-certification-programs#collapseTwo"},"Part 1 - NVIDIA Deep Learning Institute's Introductory AI Course on Jetson Nano")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rexuexi1.png",alt:"pir",width:200,height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"In this course, you will use Jupyter notebooks on your own Jetson Nano to build deep learning classification and regression projects with computer vision models.")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"part-2---jetbot-optional"},(0,n.yg)("a",{parentName:"h3",href:"https://developer.nvidia.com/embedded/learn/jetson-ai-certification-programs#collapseThree"},"Part 2 - JetBot")," (optional)"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rexuexi2.png",alt:"pir",width:200,height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"https://github.com/NVIDIA-AI-IOT/jetbot"},"JetBot")," is an open source AI robotics platform that provides makers, students and enthusiasts with everything they need to build creative, fun, intelligent AI applications.")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"part-3---hello-ai-world"},(0,n.yg)("a",{parentName:"h3",href:"https://developer.nvidia.com/embedded/learn/jetson-ai-certification-programs#collapseFour"},"Part 3 - Hello AI World")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rexuexi3.png",alt:"pir",width:200,height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"https://github.com/dusty-nv/jetson-inference"},"Hello AI World")," is a great way to get started with Jetson and experience the capabilities of AI. In just a few hours, you can get a set of deep learning inference demos up and running on the Jetson Developer Kit for real-time image classification, object detection, and segmentation using the JetPack SDK\u2122 and NVIDIA TensorRT\u2122. You can also use PyTorch to collect your own datasets and train your own DNN models on Jetson.")),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"apply-ai-on-jetson-nano"},(0,n.yg)("a",{parentName:"h2",href:"https://courses.nvidia.com/courses/course-v1:DLI+S-RX-02+V2/about"},"Apply AI on Jetson Nano")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/85462.gif",alt:"pir",width:200,height:"auto"})),(0,n.yg)("p",null,"In this tutorial, you will use the Jupyter iPython on your own Jetson Nano to build a deep learning classification project with a computer vision model. ",(0,n.yg)("a",{parentName:"p",href:"https://courses.nvidia.com/courses/course-v1:DLI+S-RX-02+V2/about"},"Get started")),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"building-edge-computing-applications-for-video-with-jetson-nano"},(0,n.yg)("a",{parentName:"h2",href:"https://courses.nvidia.com/courses/course-v1:DLI+S-IV-02+V2/"},"Building Edge Computing applications for Video with Jetson Nano")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/584269.gif",alt:"pir",width:200,height:"auto"})),(0,n.yg)("p",null,"This course will guide you through the basic concepts of implementing the ",(0,n.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/deepstream-sdk"},"NVIDIA DeepStream SDK"),"'s plug-and-play architecture for streaming analytics on your own NVIDIA\xae Jetson Nano."),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);