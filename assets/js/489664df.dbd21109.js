"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a="Model Training",s={unversionedId:"Topics/TinyML/ModelAssistant/tutorials/training/overview",id:"Topics/TinyML/ModelAssistant/tutorials/training/overview",title:"Model Training",description:"SSCMA currently supports the following models. You can refer to the corresponding tutorials to complete the training of the models and obtain the model weights.",source:"@site/docs/Topics/TinyML/ModelAssistant/tutorials/training/overview.md",sourceDirName:"Topics/TinyML/ModelAssistant/tutorials/training",slug:"/Topics/TinyML/ModelAssistant/tutorials/training/overview",permalink:"/Topics/TinyML/ModelAssistant/tutorials/training/overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/ModelAssistant/tutorials/training/overview.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1704163786,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{},sidebar:"ProductSidebar",previous:{title:"Datasets",permalink:"/Topics/TinyML/ModelAssistant/tutorials/datasets"},next:{title:"Object Detecion - SWIFT-YOLO",permalink:"/Topics/TinyML/ModelAssistant/tutorials/training/yolo"}},l={},p=[{value:"Parameter Descriptions",id:"parameter-descriptions",level:2},{value:"Deployment",id:"deployment",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"model-training"},"Model Training"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," currently supports the following models. You can refer to the corresponding tutorials to complete the training of the models and obtain the model weights."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../yolo"},"Object Detection - SWIFT-YOLO"),": digital meter reading")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../fomo"},"Object Detection - FOMO"),": Face mask detection")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../pfld"},"Keypoint Detection PFLD"),": Pointer meter reading"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Before start training, we recommend you to read ",(0,o.kt)("a",{parentName:"p",href:"../../config"},"Config")," and ",(0,o.kt)("a",{parentName:"p",href:"../../datasets"},"Datasets")," sections first.")),(0,o.kt)("h2",{id:"parameter-descriptions"},"Parameter Descriptions"),(0,o.kt)("p",null,"For more parameters during model training, you can refer the code below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"python3 tools/train.py --help\n\n# Train SSCMA models\n\n# positional arguments:\n#   config                the model config file path\n\n# optional arguments:\n#   -h, --help            show this help message and exit\n#   --work_dir WORK_DIR, --work-dir WORK_DIR\n#                         the directory to save logs and models\n#   --amp                 enable automatic-mixed-precision during training (https://pytorch.org/tutorials/recipes/recipes/amp_recipe.html)\n#   --auto_scale_lr, --auto-scale-lr\n#                         enable automatic-scale-LR during training\n#   --resume [RESUME]     resume training from the checkpoint of the last epoch (or a specified checkpoint path)\n#   --no_validate, --no-validate\n#                         disable checkpoint evaluation during training\n#   --launcher {none,pytorch,slurm,mpi}\n#                         the job launcher for MMEngine\n#   --cfg_options CFG_OPTIONS [CFG_OPTIONS ...], --cfg-options CFG_OPTIONS [CFG_OPTIONS ...]\n#                         override some settings in the used config, the key-value pair in 'xxx=yyy' format will be merged into config file\n#   --local_rank LOCAL_RANK, --local-rank LOCAL_RANK\n#                         set local-rank for PyTorch\n#   --dynamo_cache_size DYNAMO_CACHE_SIZE, --dynamo-cache-size DYNAMO_CACHE_SIZE\n#                         set dynamo-cache-size limit for PyTorch\n#   --input_shape INPUT_SHAPE [INPUT_SHAPE ...], --input-shape INPUT_SHAPE [INPUT_SHAPE ...]\n#                         Extension: input data shape for model parameters estimation, e.g. 1 3 224 224\n")),(0,o.kt)("h3",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"After exporting the model, you can deploy the model to an edge computing device for testing and evaluation. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"../../../deploy/overview"},"Deploy")," section to learn more about how to deploy the model."))}u.isMDXComponent=!0}}]);