"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8647],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),u=i,y=g["".concat(d,".").concat(u)]||g[u]||m[u]||a;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(58168),i=(n(96540),n(15680));const a={description:"reTerminal DM Getting Started with Node-Red",title:"reTerminal DM Getting Started with Node-Red",keywords:["Edge","reTerminal-DM","Node-Red"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Getting-Started-with-Node-Red",last_update:{date:"04/04/2023",author:"Peter Pan"}},o="reTerminal DM Getting Started with Node Red",l={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal-DM/Node-Red/reTerminal-DM-Getting-Started-with-Node-Red",id:"Edge/Raspberry_Pi_Devices/reTerminal-DM/Node-Red/reTerminal-DM-Getting-Started-with-Node-Red",title:"reTerminal DM Getting Started with Node-Red",description:"reTerminal DM Getting Started with Node-Red",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/Node-Red/reTerminal-DM-Getting-Started-with-Node-Red.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal-DM/Node-Red",slug:"/reTerminal-DM-Getting-Started-with-Node-Red",permalink:"/reTerminal-DM-Getting-Started-with-Node-Red",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/Node-Red/reTerminal-DM-Getting-Started-with-Node-Red.md",tags:[],version:"current",lastUpdatedBy:"Peter Pan",lastUpdatedAt:1680566400,formattedLastUpdatedAt:"Apr 4, 2023",frontMatter:{description:"reTerminal DM Getting Started with Node-Red",title:"reTerminal DM Getting Started with Node-Red",keywords:["Edge","reTerminal-DM","Node-Red"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Getting-Started-with-Node-Red",last_update:{date:"04/04/2023",author:"Peter Pan"}},sidebar:"ProductSidebar",previous:{title:"reTerminal DM Ignition Edge Panel Builder Hello World",permalink:"/reTerminal-DM-Ignition-Edge-Panel-Builder"},next:{title:"reTerminal DM RS485 Port with Node-RED",permalink:"/reTerminal-DM-Node-Red-RS485"}},d={},s=[{value:"Install and Setting up Node-RED On Raspbian OS",id:"install-and-setting-up-node-red-on-raspbian-os",level:2},{value:"Install Node-RED",id:"install-node-red",level:3},{value:"Setup Node-RED",id:"setup-node-red",level:3},{value:"Getting familiar with Node-RED",id:"getting-familiar-with-node-red",level:2},{value:"Node-RED editor Overview",id:"node-red-editor-overview",level:3},{value:"Install Nodes",id:"install-nodes",level:3},{value:"Option 1: Command line",id:"option-1-command-line",level:4},{value:"Option 2: Node-RED editor",id:"option-2-node-red-editor",level:4},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:s},g="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"reterminal-dm-getting-started-with-node-red"},"reTerminal DM Getting Started with Node Red"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg",alt:"pir",width:"600",height:"auto"})),(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reTerminal-DM-p-5616.html"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,i.yg)("br",null),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Node-RED is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways.\nIt provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single-click."),(0,i.yg)("p",{parentName:"blockquote"},"\u2014 nodered.org")),(0,i.yg)("p",null,"Since reTerminal DM is equipped with rich scalability and hybrid connectivity, such as Digital I/O, CAN bus, RS485, RS232 and powerful wireless communication capabilities such as WiFi, BLE, ","*","4G, ","*",'LoRa\xae. Where Node-RED is one of the best low-code programming tool which could rule them all, and Thanks to the Node-RED Dashboard node which could be configured and utilised together with the 10.1" 10-point multi-touch high-sensitivity capacitive panel for the on-site Human Machine Interface purpose.'),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"*","4G and LoRa\xae modules does not come with reTerminal DM by default, please purchase the relevant modules accordingly.")),(0,i.yg)("p",null,"Here is the getting started guide on how to setup, as well as getting familiar with the Node-RED interface together on reTerminal DM."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("strong",{parentName:"li"},"Raspbian OS")," User Please Go TO: ",(0,i.yg)("a",{parentName:"li",href:"#install-and-setting-up-node-red"},"Install Node-RED")),(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("strong",{parentName:"li"},"Sensecraft Edge OS")," User Please Go TO: ",(0,i.yg)("a",{parentName:"li",href:"#getting-familiar-with-node-red"},"Getting Familiar with Node-RED"),", Since Sensecraft Edge OS comes with Node-RED preinstalled"))),(0,i.yg)("h2",{id:"install-and-setting-up-node-red-on-raspbian-os"},"Install and Setting up Node-RED On Raspbian OS"),(0,i.yg)("p",null,"Once you have complete with the setup a new Operating System with reTerminal DM by Following the ",(0,i.yg)("a",{parentName:"p",href:"/reterminal-dm-flash-OS/"},"Install OS on reTerminal DM"),", please follow the steps below to setup the Node-RED."),(0,i.yg)("h3",{id:"install-node-red"},"Install Node-RED"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"STEP 1:")," Getting access to your reTerminal DM"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"option 1: Directly connect the Mouse and Keyboard"),(0,i.yg)("p",{parentName:"li"},"Please go ahead and open ",(0,i.yg)("inlineCode",{parentName:"p"},"Terminal")," APP on you reTerminal DM."),(0,i.yg)("p",{parentName:"li"},"make sure your reTerminal DM is connected to internet.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"option 2: by using SSH"),(0,i.yg)("p",{parentName:"li"},"Make sure your host computer could get access to the reTerminal DM via network and reTerminal DM is connected to internet"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"on Windows:")),(0,i.yg)("p",{parentName:"li"},"  Please open ",(0,i.yg)("strong",{parentName:"p"},"PowerShell")," program and then type ",(0,i.yg)("inlineCode",{parentName:"p"},"ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}"),", please replace ",(0,i.yg)("inlineCode",{parentName:"p"},"{USERNAME}")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"{RETERMINALDM_IP_ADDRESS}")," according to your setup:"),(0,i.yg)("p",{parentName:"li"},"  For Example in my case the  ",(0,i.yg)("inlineCode",{parentName:"p"},"{USERNAME}")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"pi")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"{RETERMINALDM_IP_ADDRESS}")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"192.168.43.100")," :"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"ssh pi@192.168.43.100\n")),(0,i.yg)("p",{parentName:"li"},"  Then please enter the password for the ",(0,i.yg)("inlineCode",{parentName:"p"},"{USER}")," of the Operating System you have setup on your reTerminal DM "),(0,i.yg)("p",{parentName:"li"},"  eg: For Raspbian OS the default login credential is"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Username: ",(0,i.yg)("inlineCode",{parentName:"li"},"pi")),(0,i.yg)("li",{parentName:"ul"},"Password: ",(0,i.yg)("inlineCode",{parentName:"li"},"raspberry"))),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"on Mac/Linux:")),(0,i.yg)("p",{parentName:"li"},"  Please open ",(0,i.yg)("strong",{parentName:"p"},"Terminal")," APP and type ",(0,i.yg)("inlineCode",{parentName:"p"},"ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}"),", please replace ",(0,i.yg)("inlineCode",{parentName:"p"},"{USERNAME}")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"{RETERMINALDM_IP_ADDRESS}")," according to your setup:"),(0,i.yg)("p",{parentName:"li"},"  For Example in my case the  ",(0,i.yg)("inlineCode",{parentName:"p"},"{USERNAME}")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"pi")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"{RETERMINALDM_IP_ADDRESS}")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"192.168.43.100")," :"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"ssh pi@192.168.43.100\n")),(0,i.yg)("p",{parentName:"li"},"  Then please enter the password for the ",(0,i.yg)("inlineCode",{parentName:"p"},"{USER}")," of the Operating System you have setup on your reTerminal DM "),(0,i.yg)("p",{parentName:"li"},"  eg: For Raspbian OS the default login credential is"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Username: ",(0,i.yg)("inlineCode",{parentName:"li"},"pi")),(0,i.yg)("li",{parentName:"ul"},"Password: ",(0,i.yg)("inlineCode",{parentName:"li"},"raspberry")))))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"STEP 2:")," Install Node-RED:"))),(0,i.yg)("p",null,"The Node-RED team has prepared us with a ",(0,i.yg)("a",{parentName:"p",href:"https://nodered.org/docs/getting-started/raspberrypi"},"All-IN-ONE")," script, which you could just enter the following command into the reTerminal DM native ",(0,i.yg)("inlineCode",{parentName:"p"},"Terminal")," APP or in the ",(0,i.yg)("inlineCode",{parentName:"p"},"SSH Shell")," from the step above."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"  bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"There are many options on installing Node-RED with Raspberry Pi, you can explore the ",(0,i.yg)("a",{parentName:"p",href:"https://nodered.org/docs/getting-started/"},"official guide"),", here we show you the ",(0,i.yg)("a",{parentName:"p",href:"https://nodered.org/docs/getting-started/raspberrypi"},"all-in-one")," guide to install Node-RED on reTerminal DM.")),(0,i.yg)("p",null,"Once the installation process finished you should see a ",(0,i.yg)("inlineCode",{parentName:"p"},".node-red")," folder with ",(0,i.yg)("inlineCode",{parentName:"p"},"ls -all")," commands as shown in the image below:"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-installed.png"})),(0,i.yg)("br",null),(0,i.yg)("h3",{id:"setup-node-red"},"Setup Node-RED"),(0,i.yg)("p",null,"Once you have installed Node-RED, please follow the steps below to setup and getting the Node-RED environment ready."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"STEP 1:")," Start Node-RED:"),(0,i.yg)("p",{parentName:"li"},"  After the installation with the ",(0,i.yg)("a",{parentName:"p",href:"https://nodered.org/docs/getting-started/raspberrypi"},"All-IN-ONE")," script is complete, you can use follow commands accordingly:"),(0,i.yg)("p",{parentName:"li"},"  Use ",(0,i.yg)("inlineCode",{parentName:"p"},"node-red-stop"),"                          to stop Node-RED",(0,i.yg)("br",null),"\nUse ",(0,i.yg)("inlineCode",{parentName:"p"},"node-red-start"),"                         to start Node-RED again",(0,i.yg)("br",null),"\nUse ",(0,i.yg)("inlineCode",{parentName:"p"},"node-red-log"),"                           to view the recent log output",(0,i.yg)("br",null),"\nUse ",(0,i.yg)("inlineCode",{parentName:"p"},"sudo systemctl enable nodered.service"),"  to autostart Node-RED at every boot",(0,i.yg)("br",null),"\nUse ",(0,i.yg)("inlineCode",{parentName:"p"},"sudo systemctl disable nodered.service")," to disable autostart on boot",(0,i.yg)("br",null)),(0,i.yg)("p",{parentName:"li"},"  So to start the Node-RED editor you can run following command in the ",(0,i.yg)("inlineCode",{parentName:"p"},"Terminal")," APP on reTerminal DM:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"node-red-start\n")),(0,i.yg)("p",{parentName:"li"},"  if you want to enable the node-RED as autostart service you could use ",(0,i.yg)("inlineCode",{parentName:"p"},"sudo systemctl enable nodered.service")," command and you should see the the output as shown below."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-autostart.png"}))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"STEP 2:")," Access Node-RED editor:"),(0,i.yg)("p",{parentName:"li"},"  Now please open your favorite Web Browser and enter the url described as below:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Option 1: Use ",(0,i.yg)("inlineCode",{parentName:"li"},"http://127.0.0.1:1880"),", if the web browser is running locally on your reTerminal DM."),(0,i.yg)("li",{parentName:"ul"},"Option 2: Use ",(0,i.yg)("inlineCode",{parentName:"li"},"http://{RETERMINALDM_IP_ADDRESS}:1880"),", if the web browser is running remotely on a host computer, please replace the ",(0,i.yg)("inlineCode",{parentName:"li"},"{RETERMINALDM_IP_ADDRESS}")," with the ip address of reTerminal DM. ")))),(0,i.yg)("h2",{id:"getting-familiar-with-node-red"},"Getting familiar with Node-RED"),(0,i.yg)("p",null,"Now you should see the similar result as the image below:"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inital-node-editor.png"})),(0,i.yg)("br",null),(0,i.yg)("h3",{id:"node-red-editor-overview"},"Node-RED editor Overview"),(0,i.yg)("p",null,"Please get yourself familiar with the Node-RED editor."),(0,i.yg)("p",null,"The core Element of the Node-RED editor are listed:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Node Panel"),(0,i.yg)("li",{parentName:"ul"},"Flow Editor"),(0,i.yg)("li",{parentName:"ul"},"Config Panel"),(0,i.yg)("li",{parentName:"ul"},"Settings Button"),(0,i.yg)("li",{parentName:"ul"},"Deploy Button")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-editor.png"})),(0,i.yg)("br",null),(0,i.yg)("h3",{id:"install-nodes"},"Install Nodes"),(0,i.yg)("p",null,"There are two options on install Node-RED node modules, if you are using the SenseCraft EDGE OS please use the ",(0,i.yg)("a",{parentName:"p",href:"#option-2-node-red-editor"},"Node-RED editor method"),": "),(0,i.yg)("h4",{id:"option-1-command-line"},"Option 1: Command line"),(0,i.yg)("p",null,"STEP 1: Please go to Node-RED folder"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png"})),(0,i.yg)("br",null),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"cd .node-red/\n")),(0,i.yg)("p",null,"STEP 2: Install Modbus Node"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />\n\n```sh\nnpm install node-red-contrib-modbus\n')),(0,i.yg)("p",null,"STEP 3: Once the node gets install, Please restart the Node-RED service with:"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png"})),(0,i.yg)("br",null),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"node-red-restart\n")),(0,i.yg)("h4",{id:"option-2-node-red-editor"},"Option 2: Node-RED editor"),(0,i.yg)("p",null,"STEP 1: Click the ",(0,i.yg)("inlineCode",{parentName:"p"},"Settings"),' button with "three dash" icon located at the right corner and then select the ',(0,i.yg)("inlineCode",{parentName:"p"},"Manage palette")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png"})),(0,i.yg)("p",null,"STEP 2: At the palette tab click ",(0,i.yg)("inlineCode",{parentName:"p"},"Install")," tab"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png"})),(0,i.yg)("p",null,"STEP 3: Search for the node in the node search bar and Click ",(0,i.yg)("inlineCode",{parentName:"p"},"install")," button to install"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png"})),(0,i.yg)("p",null,"STEP 4: click on 'Install` button from the dropdown warning window to confirm install"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png"})),(0,i.yg)("p",null,"STEP 5: Wait for the installation to complete and you should see the ",(0,i.yg)("inlineCode",{parentName:"p"},"install")," button changed to ",(0,i.yg)("inlineCode",{parentName:"p"},"installed")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png"})),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png"})),(0,i.yg)("p",null,"STEP 6: you should see the Modbus nodes in the side bar"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png"})),(0,i.yg)("h1",{id:"reterminal-dm-supported-nodes"},"reTerminal DM Supported Nodes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-RS485"},"reTerminal DM RS485 Port with Node-RED")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-mqtt"},"reTerminal DM MQTT with Node-RED")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-canbus"},"reTerminal DM CAN BUS with Node-RED"))),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);