"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={description:"Connect AWS IoT Core with N3uron",title:"Connect AWS IoT Core with N3uron",keywords:["reTerminal DM","Getting started","IIoT","Industrial","N3uron","AWS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminalDM_N3uron_AWS",last_update:{date:"3/20/2024",author:"Kasun Thushara"}},o=void 0,l={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal-DM/N3uron/reTerminal_DM_N3uron_AWS",id:"Edge/Raspberry_Pi_Devices/reTerminal-DM/N3uron/reTerminal_DM_N3uron_AWS",title:"Connect AWS IoT Core with N3uron",description:"Connect AWS IoT Core with N3uron",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/N3uron/reTerminal_DM_N3uron_AWS.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal-DM/N3uron",slug:"/reTerminalDM_N3uron_AWS",permalink:"/reTerminalDM_N3uron_AWS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/N3uron/reTerminal_DM_N3uron_AWS.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1710892800,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{description:"Connect AWS IoT Core with N3uron",title:"Connect AWS IoT Core with N3uron",keywords:["reTerminal DM","Getting started","IIoT","Industrial","N3uron","AWS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminalDM_N3uron_AWS",last_update:{date:"3/20/2024",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with N3uron",permalink:"/reTerminalDM_N3uron_Get_Start"},next:{title:"Connect N3uron with MQTT and Modbus Support Devices",permalink:"/reTerminalDM_N3uron_modbus_mqtt"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Configure N3uron IIoT Platform",id:"configure-n3uron-iiot-platform",level:2},{value:"Configure N3uron\u2019s MQTT Module within the WebUI\u2019s Explorer Panel",id:"configure-n3urons-mqtt-module-within-the-webuis-explorer-panel",level:2},{value:"Subscribe to a Topic Using N3uron\u2019s MQTT Module",id:"subscribe-to-a-topic-using-n3urons-mqtt-module",level:2},{value:"Create a Tag",id:"create-a-tag",level:2},{value:"Visualization",id:"visualization",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"We have outlined the process of transmitting data from your ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal-DM_AWS_first/"},"reTerminal DM device to AWS IoT Core using the MQTT protocol"),". This tutorial will seamlessly integrate with the aforementioned process. In this tutorial, we will delve into the intricacies of interfacing between the N3uron Edge IIoT platform and AWS IoT Core."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h3",{id:"hardware"},"Hardware"),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{class:"table-nobg"},(0,i.kt)("tr",{class:"table-trnobg"},(0,i.kt)("th",{class:"table-trnobg"},"reTerminal DM")),(0,i.kt)("tr",{class:"table-trnobg"}),(0,i.kt)("tr",{class:"table-trnobg"},(0,i.kt)("td",{class:"table-trnobg"},(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png",style:{width:300,height:"auto"}})))),(0,i.kt)("tr",{class:"table-trnobg"}),(0,i.kt)("tr",{class:"table-trnobg"},(0,i.kt)("td",{class:"table-trnobg"},(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reTerminal-DM-p-5616.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,i.kt)("h3",{id:"software"},"Software"),(0,i.kt)("p",null,"We highly recommend studying the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminalDM_N3uron_Get_Start/"},"Getting Started with N3uron")," guide. It provides essential insights into navigating the N3uron web interface, understanding concepts such as the Web UI and Web Vision module, grasping the concept of tags, and creating basic dashboards. If you haven't explored these fundamentals yet, it's advisable to do so before proceeding further. You can access the guide through the provided link."),(0,i.kt)("p",null,"If you haven't explored our guide on integrating ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal-DM_AWS_first/"},"AWS IoT Core with reTerminal DM"),", we recommend doing so as well. This comprehensive guide covers everything from the basics to the advanced steps of publishing a value to IoT Core. ",(0,i.kt)("strong",{parentName:"p"},"As it complements the current tutorial, it's beneficial to familiarize yourself with this content too"),"."),(0,i.kt)("h2",{id:"configure-n3uron-iiot-platform"},"Configure N3uron IIoT Platform"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Create a Module Instance Within N3uron\u2019s WebUI Interface")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 01: In the ",(0,i.kt)("strong",{parentName:"li"},"Navigation")," panel, select ",(0,i.kt)("strong",{parentName:"li"},"Config"),"."),(0,i.kt)("li",{parentName:"ul"},"Step 02: In the ",(0,i.kt)("strong",{parentName:"li"},"Explorer")," panel, select ",(0,i.kt)("strong",{parentName:"li"},"Modules"),"."),(0,i.kt)("li",{parentName:"ul"},"Step 03: Click on the ",(0,i.kt)("strong",{parentName:"li"},"Model")," menu and select ",(0,i.kt)("strong",{parentName:"li"},"New Module"),".")),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/createmodel.PNG"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 04: The instance can be given any name but for the example we will use ",(0,i.kt)("strong",{parentName:"li"},"MQTT"),"."),(0,i.kt)("li",{parentName:"ul"},"Step 05: Set the ",(0,i.kt)("strong",{parentName:"li"},"Module Type")," property to ",(0,i.kt)("strong",{parentName:"li"},"MqttClient"),". Leave the rest of the properties as their default values and click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/selectmodeltype.PNG"})),(0,i.kt)("h2",{id:"configure-n3urons-mqtt-module-within-the-webuis-explorer-panel"},"Configure N3uron\u2019s MQTT Module within the WebUI\u2019s Explorer Panel"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 01: In the ",(0,i.kt)("strong",{parentName:"li"},"Explorer")," panel, select the ",(0,i.kt)("strong",{parentName:"li"},"MQTT")," instance you have just created."),(0,i.kt)("li",{parentName:"ul"},"Step 02: Click on the Model menu button and select ",(0,i.kt)("strong",{parentName:"li"},"New Connection"),"."),(0,i.kt)("li",{parentName:"ul"},"Step 03: Give the New connection a name. In this example, it has been named ",(0,i.kt)("strong",{parentName:"li"},"AWS"),".")),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/AWSconnection.PNG"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 04: Configure the connection properties:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A: Select ",(0,i.kt)("strong",{parentName:"li"},"Amazon Web Services")," from the ",(0,i.kt)("strong",{parentName:"li"},"Destination Broker")," drop down menu. ",(0,i.kt)("strong",{parentName:"li"},"Authentication mode")," will be ",(0,i.kt)("strong",{parentName:"li"},"Certificate"),". Also ",(0,i.kt)("strong",{parentName:"li"},"Client Id")," is ",(0,i.kt)("strong",{parentName:"li"},"N3uron")," in this example."),(0,i.kt)("li",{parentName:"ul"},"B: Load the ",(0,i.kt)("strong",{parentName:"li"},"Certificate, Private key and CA certificate")," you downloaded and saved when you created the Thing in the AWS IoT Console."),(0,i.kt)("li",{parentName:"ul"},"C: In the AWS IoT console, in the left-hand menu, go to ",(0,i.kt)("strong",{parentName:"li"},"Settings")," and copy your ",(0,i.kt)("strong",{parentName:"li"},"Device Data Endpoint"),". Go back to N3uron and paste it in the ",(0,i.kt)("strong",{parentName:"li"},"Broker URL")," field."),(0,i.kt)("li",{parentName:"ul"},"D: Leave the rest of the properties as their default values and click on ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")))),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/AWSconfig.PNG"})),(0,i.kt)("h2",{id:"subscribe-to-a-topic-using-n3urons-mqtt-module"},"Subscribe to a Topic Using N3uron\u2019s MQTT Module"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 01: In the ",(0,i.kt)("strong",{parentName:"li"},"Model")," panel, right-click on the ",(0,i.kt)("strong",{parentName:"li"},"AWS")," Connection, select ",(0,i.kt)("strong",{parentName:"li"},"New Subscriber"),", and give it a name. In this example, we will simply use ",(0,i.kt)("strong",{parentName:"li"},"Subscriber"),".")),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/newsubscriber.PNG"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 02: Click on it and add a name in the Topic field. In this example, we have used device/data.(In our AWS tutorial , we have published data under this topic.)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 03: Set the following properties using the values shown below, leaving the rest of them as their default values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Qos"),": Qos 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Encoding"),": UTF8"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compression"),": None"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Serialization"),": JSON"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data parser/Type"),": MqttClient JSON")))),(0,i.kt)("p",null,"And Save it."),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/Subscriberconfig.PNG"})),(0,i.kt)("h2",{id:"create-a-tag"},"Create a Tag"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 01: Within the ",(0,i.kt)("strong",{parentName:"li"},"Explorer panel"),", select ",(0,i.kt)("strong",{parentName:"li"},"Tags"),"."),(0,i.kt)("li",{parentName:"ul"},"Step 02: In the Model menu, right-click on the folder icon, select ",(0,i.kt)("strong",{parentName:"li"},"New Tag"),", and give it a name. In this example, we will use ",(0,i.kt)("strong",{parentName:"li"},"Subscribed_value"),".")),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/newtag.PNG"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 03: In the Configuration panel, set the following properties using the values shown below, leaving the rest of them as their default values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type"),": Number."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source/Enabled"),": Yes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Module Type"),": MqttClient"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Module name"),": MQTT"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Config/Subscriber"),": AWS/Subscriber"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 04: Click on ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."))),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/tagconfig.PNG"})),(0,i.kt)("p",null,"After you run the python script which we provide on AWS IoT and reTerminal DM or EdgeBox and AWS IoT.\nGo back to the N3uron WebUI interface and in the left-hand panel, select ",(0,i.kt)("strong",{parentName:"p"},"Data/Real Time"),". You should now see the ",(0,i.kt)("strong",{parentName:"p"},"Subscribed_Value")," tag you created before with a value."),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/realtimedata.PNG"})),(0,i.kt)("h2",{id:"visualization"},"Visualization"),(0,i.kt)("p",null,"If you have create a webvision module you can start this steps. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 01: Navigate to ",(0,i.kt)("strong",{parentName:"li"},"WebVision")," in the ",(0,i.kt)("strong",{parentName:"li"},"Config")," section and click on ",(0,i.kt)("strong",{parentName:"li"},"Open Designer"),". Log in using your Administrator credentials.")),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/wenvision.PNG"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 02: In the Templates section, create a new Container named as you wish. Then, designate this container as the startup. This will set this as our initial WebVision screen. It will appear with an asterisk symbol (*) beside it.")),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/webvison.PNG"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 03: Change the background color of the  container.")),(0,i.kt)("center",null,(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/colorchabge.PNG"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 04: Inside the Main container, navigate to ",(0,i.kt)("strong",{parentName:"li"},"Components")," and add a new component. For this example, select the ",(0,i.kt)("strong",{parentName:"li"},"Label")," component.")),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/addnewcomp.PNG"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 05: You can modify the properties of the label for a better appearance.")),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/changeproperties.PNG"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 06: Within the ",(0,i.kt)("strong",{parentName:"li"},"Label component"),", select the tag that will provide the values displayed on the Label component.")),(0,i.kt)("center",null,(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/selecttag.PNG"})),(0,i.kt)("center",null,(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/taglist.PNG"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 07: Select tag Property ")),(0,i.kt)("center",null,(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/tagproperty.PNG"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 08: Next, navigate to WebVision in the Config section and click on Open UI. Log in using your Administrator credentials."),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png"})),(0,i.kt)("p",{parentName:"li"},"Subsequently, you will witness the ultimate result, which involves updating the label values in accordance with the data subscribed from the cloud."))),(0,i.kt)("center",null,(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/output.PNG"})),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);