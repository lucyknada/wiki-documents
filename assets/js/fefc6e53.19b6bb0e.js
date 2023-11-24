"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),c=u(n),k=l,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||o;return n?a.createElement(m,p(p({ref:t},i),{},{components:n})):a.createElement(m,p({ref:t},i))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,p=new Array(o);p[0]=k;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:l,p[1]=r;for(var u=2;u<o;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},38521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const o={description:"SenseCAP M4 Quick Start",title:"SenseCAP M4 Quick Start",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},p="**SenseCAP M4 Square Quick Start**",r={unversionedId:"Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start",id:"Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start",title:"SenseCAP M4 Quick Start",description:"SenseCAP M4 Quick Start",source:"@site/docs/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start.md",sourceDirName:"Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square",slug:"/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start",permalink:"/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"SenseCAP M4 Quick Start",title:"SenseCAP M4 Quick Start",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}}},s={},u=[{value:"Step1 Go to the exchange to buy Flux",id:"step1-go-to-the-exchange-to-buy-flux",level:2},{value:"Step2 Download the Zelcore App and register your account",id:"step2-download-the-zelcore-app-and-register-your-account",level:2},{value:"Step3 Withdraw Flux from Binance to Zelcore Wallet",id:"step3-withdraw-flux-from-binance-to-zelcore-wallet",level:2},{value:"Step4 Create a new Flux Cumulus Node",id:"step4-create-a-new-flux-cumulus-node",level:2},{value:"<strong>Step1 Power up and connect to internet</strong>",id:"step1-power-up-and-connect-to-internet",level:2},{value:"<strong>Step2 Install SenseCAP Hotspot App and Zelcore App</strong>",id:"step2-install-sensecap-hotspot-app-and-zelcore-app",level:2},{value:"<strong>Step3 Set up SenseCAP M4</strong>",id:"step3-set-up-sensecap-m4",level:2},{value:"<strong>Step4 Deploy Flux Node</strong>",id:"step4-deploy-flux-node",level:2},{value:"UPnP Setting",id:"upnp-setting",level:2},{value:"Fractus Setting",id:"fractus-setting",level:2},{value:"Add to Dashboard",id:"add-to-dashboard",level:2},{value:"Restore Block",id:"restore-block",level:2},{value:"Delete",id:"delete",level:2},{value:"Redeploy",id:"redeploy",level:2}],i={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sensecap-m4-square-quick-start"},(0,l.kt)("strong",{parentName:"h1"},"SenseCAP M4 Square Quick Start")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"SenseCAP M4 Square")," provides the easiest way to deploy The Next Generation Computational Network(FluxNode). No Linux command, No need to build an environment, and only 4 steps to finish the deployment."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Prerequisites")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Network sufficient upload speed to deploy a CUMULUS FluxNode ",(0,l.kt)("strong",{parentName:"li"},"(25Mbps Upload Minimum"),")"),(0,l.kt)("li",{parentName:"ul"},"A new CUMULUS FluxNodes created")),(0,l.kt)("h1",{id:"what-you-need"},"what you need"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png",alt:null})),(0,l.kt)("h1",{id:"stake-flux-cumulus-node"},"Stake Flux CUMULUS Node"),(0,l.kt)("p",null,"The tutorial takes Binance as an example"),(0,l.kt)("h2",{id:"step1-go-to-the-exchange-to-buy-flux"},"Step1 Go to the exchange to buy Flux"),(0,l.kt)("p",null,"1 Download the ",(0,l.kt)("a",{parentName:"p",href:"https://www.binance.com/zh-CN/download"},"Binance App")," and resgister an account"),(0,l.kt)("p",null,"2 Flux cannot be purchased with fiat currency. Please buy USDT first, then convert USDT to Flux"),(0,l.kt)("p",null,"4 At the Trade page, select spot and the Market select FLUX/USDT"),(0,l.kt)("p",null,"5 Enter the number of USDT and ensure that the converted Flux is greater than 1000"),(0,l.kt)("p",null,"6 Click Buy button, Now you have successfully purchased flux"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg",alt:null})),(0,l.kt)("h2",{id:"step2-download-the-zelcore-app-and-register-your-account"},"Step2 Download the Zelcore App and register your account"),(0,l.kt)("p",null,"1 Download ",(0,l.kt)("a",{parentName:"p",href:"https://zelcore.io/"},"Zelcore App")," and login your Zelcore account"),(0,l.kt)("p",null,"2 At Portfolio page, click Add Assets button to add FLUX BSC asset ( Payments portfolio)"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png",alt:null})),(0,l.kt)("h2",{id:"step3-withdraw-flux-from-binance-to-zelcore-wallet"},"Step3 Withdraw Flux from Binance to Zelcore Wallet"),(0,l.kt)("p",null,"1 Open Binance App and visit the Wallet page"),(0,l.kt)("p",null,"2 Visit Flux, click Withdraw and select Send via Crypto Network"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200",alt:null})),(0,l.kt)("p",null,"3 Input withdraw info and send"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Address: Open Zelcore App, Copy the FLUX BSC receive address, and paste into the Binance")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Network: Select BB Smart Chain (BEP20)"),(0,l.kt)("li",{parentName:"ul"},"Amount: 1000+ flux"),(0,l.kt)("li",{parentName:"ul"},"Send From: Spot&Funding Wallet")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200",alt:null})),(0,l.kt)("p",null,"4 Check your withdraw info and send to Zelcore"),(0,l.kt)("h2",{id:"step4-create-a-new-flux-cumulus-node"},"Step4 Create a new Flux Cumulus Node"),(0,l.kt)("p",null,"1 Open Zelcore App, and check your Flux have sent your FLUX BSC asset (Payments portfolio)"),(0,l.kt)("p",null,"2 Visit Apps Page, and open Fusion to swap FLUX BSC to Flux(Payments portfolio)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sell Asset: Select FLUX BSC"),(0,l.kt)("li",{parentName:"ul"},"Buy Asset: Select FLUX")),(0,l.kt)("p",null,"Note: Ensure you have enough BNB to afford the swap fee"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200",alt:null})),(0,l.kt)("p",null,"3 Send the Flux from the Payments portfolio to another portfolio such as Mining's Flux asset"),(0,l.kt)("p",null,"4 Now you can deploy the new Flux Cumulus node on SenseCAP M4 Sqaure!"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882",alt:null})),(0,l.kt)("h1",{id:"deploy-fluxnode-on-sensecap-m4-square"},"Deploy FluxNode on SenseCAP M4 Square"),(0,l.kt)("h2",{id:"step1-power-up-and-connect-to-internet"},(0,l.kt)("strong",{parentName:"h2"},"Step1 Power up and connect to internet")),(0,l.kt)("p",null,"1 Plug the provided 12V/2A power adaptor into the DC-IN power connector."),(0,l.kt)("p",null,"2 Connect the network cable to the Ethernet2."),(0,l.kt)("p",null,"3 The device will automatically self-setup. Steady orange on L3 indicates the setup and connection to the internet are successful."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png",alt:null})),(0,l.kt)("h2",{id:"step2-install-sensecap-hotspot-app-and-zelcore-app"},(0,l.kt)("strong",{parentName:"h2"},"Step2 Install SenseCAP Hotspot App and Zelcore App")),(0,l.kt)("p",null,"1 SenseCAP Hotspot App is designed to set up and manage devices. Please scan the following QR code to install SenseCAP Hotspot App."),(0,l.kt)("p",null,"2 Sign up SenseCAP account with your email or log in directly."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://app.sensecapmx.com/"},(0,l.kt)("img",{parentName:"a",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png",alt:null}))),(0,l.kt)("p",null,"3 Zelcore App is released by Flux to find, manage, trade, and truly own your digital assets, ",(0,l.kt)("strong",{parentName:"p"},"FluxNode"),", and information, Please click on the following picture to install Zelcore App."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zelcore.io/"},(0,l.kt)("img",{parentName:"a",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png",alt:null}))),(0,l.kt)("h2",{id:"step3-set-up-sensecap-m4"},(0,l.kt)("strong",{parentName:"h2"},"Step3 Set up SenseCAP M4")),(0,l.kt)("p",null,"1 Press the thimble on the bottom left of the device, and the end cap is lifted then take it down."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png",alt:null})),(0,l.kt)("p",null,"2 Press B1 button for 5s until the L2 indicator flashes blue to turn on Bluetooth configure mode."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png",alt:null})),(0,l.kt)("p",null,"3 Select Flux and click Setup on SenseCAP Hotspot App"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Scan the device via Bluetooth"),(0,l.kt)("li",{parentName:"ul"},"Select the device to Connect")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg",alt:null})),(0,l.kt)("p",null,"4 App connects to the device successfully. now click the install button to install flux dApp on the device."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png",alt:null})),(0,l.kt)("h2",{id:"step4-deploy-flux-node"},(0,l.kt)("strong",{parentName:"h2"},"Step4 Deploy Flux Node")),(0,l.kt)("p",null,"1 Flux dApp installation is complete, now click the Open button and start to deploy CUMULUS FluxNode."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note: Please purchase 1000 Flux as collateral and transfer it to your Zelcore Flux wallets for CUMULUS FluxNode setup.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Guide")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb"},"FluxNode SetUp Guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=RT1uaSrurv4"},"Flux Light Node Setup Video Tutorial Guide (Setup Zelcore& Deposit Flux tutorial is from 8:07 to 12:30)"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png",alt:null})),(0,l.kt)("p",null,"2 Input Identity Key, Collateral TX ID, Output Index, Zel ID, and Kadena Address from Zelcore APP, please download Zelcore for more information."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 ",(0,l.kt)("strong",{parentName:"p"},"Identity Key"),"\uff1aclick Apps > click FluxNodes on Apps page > click your FluxNode > click edit on the expand menu > click Identity Key to copy it"),(0,l.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 ",(0,l.kt)("strong",{parentName:"p"},"Collateral TX ID"),"\uff1aclick Apps > click FluxNodes on Apps page > click your FluxNode > click Edit on the expand menu > click Collateral TX ID to copy it"),(0,l.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 ",(0,l.kt)("strong",{parentName:"p"},"Output Index"),"\uff1aclick Apps > click FluxNodes on Apps page > click your FluxNode > click Edit on the expand menu > click Output Index to copy it"),(0,l.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 ",(0,l.kt)("strong",{parentName:"p"},"Zel ID"),"\uff1aclick Apps > click Zel ID on Apps page > click QR code to copy Zel IDdsdsdsssddss"),(0,l.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 ",(0,l.kt)("strong",{parentName:"p"},"Kadena Address"),"\uff1aNIMBUS and STRATUS can input Kadena address to get additional KDA rewards. if you deploy CUMULUS no need to input it.\xa0 \xa0click Portfolio > click Show Zero Sum on the page > click Kadena > click Details >click Receive action > click QR code to copy Kadena address")),(0,l.kt)("p",null,"3 Click Start Deploy, then SenseCAP M4 will deploy FluxNode automatically. The deployment time depends on the device network, please make sure the device has a good network. Now App can disconnect from the SenseCAP M4 or keep monitoring the deployment progress with App."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note\uff1aMake sure your device network has a public IP and DownloadSpeed >= 25 Mb/s and UploadSpeed >= 25 Mb/s. Otherwise, Flux benchmark will fail.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png",alt:null})),(0,l.kt)("p",null,"4 when start syncing Flux chain, Please go to Zelcore App and input the public IP and name in your FluxNode. Then click the Start button to start your FluxNode."),(0,l.kt)("p",null,"If your FluxNode is running well and that is passing benchmarks. It will take 1 block to be mined for your FluxNode status to change to Started and 1-10 blocks (2 to 20 minutes) to get Confirmed. Confirmed is the final status. You can check on FluxOS by refreshing the home page if the node gets Confirmed, it will say on Status page."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png",alt:null})),(0,l.kt)("h1",{id:"advanced-features"},(0,l.kt)("strong",{parentName:"h1"},"Advanced Features")),(0,l.kt)("h2",{id:"upnp-setting"},"UPnP Setting"),(0,l.kt)("p",null,"UPnP stands for universal plug and play which essentially allows devices on your network to request ports to be opened by your router for incoming traffic. UPNP can be an easier solution if your router is supported and sticks to proper upnp standards."),(0,l.kt)("p",null,"If you want to deploy multiple SenseCAP M4 Squares on a single external IP address, make sure that ",(0,l.kt)("strong",{parentName:"p"},"the router where the device is connected supports UPnP and turns it on.")),(0,l.kt)("p",null,"Note: a single external IP address ",(0,l.kt)("strong",{parentName:"p"},"maximum supports deploy 8 FluxNodes"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 SenseCAP M4 Square has deployed FluxNode"),(0,l.kt)("li",{parentName:"ul"},"2\xa0SenseCAP Hotspot App Connect M4 via Bluetooth"),(0,l.kt)("li",{parentName:"ul"},"3 Click the setting icon and UPnP Setting"),(0,l.kt)("li",{parentName:"ul"},"4 Enable UPnP and choose a port that is not used"),(0,l.kt)("li",{parentName:"ul"},"5 Click confirm and send the config"),(0,l.kt)("li",{parentName:"ul"},"6 Now the M4 UPnP is enabled the UPnP status is ENABLE")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg",alt:null})),(0,l.kt)("h2",{id:"fractus-setting"},"Fractus Setting"),(0,l.kt)("p",null,"The Fractus node was born to increase the Flux network storage. A Fractus node is a Cumulus tier node that provides at least 10TB of storage. Fractus nodes will earn an additional 15% Flux on top of the native Flux block reward."),(0,l.kt)("p",null,"Minimum requirements for running Fractus nodes\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A 1000 Flux collateral."),(0,l.kt)("li",{parentName:"ul"},"2 CPU Cores."),(0,l.kt)("li",{parentName:"ul"},"4 CPU Threads."),(0,l.kt)("li",{parentName:"ul"},"240 CPU Events Per Second."),(0,l.kt)("li",{parentName:"ul"},"\xa09250 GB of storage on a single partition (Raid allowed)."),(0,l.kt)("li",{parentName:"ul"},"\xa080MB/s Disk Write Speed."),(0,l.kt)("li",{parentName:"ul"},"100Mb/s Download/Upload.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 SenseCAP M4 Square has deployed FluxNode"),(0,l.kt)("li",{parentName:"ul"},"2 Plug a 10TB drive into SenseCAP M4 Square USB3.1"),(0,l.kt)("li",{parentName:"ul"},"3 SenseCAP Hotspot App Connect M4 via Bluetooth"),(0,l.kt)("li",{parentName:"ul"},"4 Click the setting icon and Fractus Setting"),(0,l.kt)("li",{parentName:"ul"},"5 Turn on Fractus and click on Confirm to send the configuration"),(0,l.kt)("li",{parentName:"ul"},"6 Now the M4 Fractus is open and the Fractus status is True")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/%E7%A8%BF%E5%AE%9A%E8%AE%BE%E8%AE%A1%E5%AF%BC%E5%87%BA-20230220-153442.jpg",alt:null})),(0,l.kt)("h2",{id:"add-to-dashboard"},"Add to Dashboard"),(0,l.kt)("p",null,"For more information about your SenseCAP M4 Square, Please add it to SenseCAP dashboard."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add directly: On FluxNode page, click + icon and input customized name and SN(in device label) to add your device to DashboardAdd via Bluetooth"),(0,l.kt)("li",{parentName:"ul"},"Add via Bluetooth: if your M4 has deployed FluxNode, connect M4 with SenseCAP Hotspot App via Bluetooth. and then add it to dashboard.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png",alt:null})),(0,l.kt)("h2",{id:"restore-block"},"Restore Block"),(0,l.kt)("p",null,"Connect M4 with SenseCAP Hotspot App via Bluetooth. and then open the Flux app and click Restore Block button.M4 will restore blocks automatically and no need for other steps. The restore time depends on the device network, please make sure the device has a good network."),(0,l.kt)("h2",{id:"delete"},"Delete"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Please operate carefully!")," Delete the CUMULUS FluxNode that has been deployed on SenseCAP M4. Connect M4 with SenseCAP Hotspot App via Bluetooth. and then open the Flux app and click Delete button to delete FluxNode."),(0,l.kt)("h2",{id:"redeploy"},"Redeploy"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Please operate carefully!")," Redeploy will automatically delete the deployed FluxNode first. Connect M4 with SenseCAP Hotspot App via Bluetooth. and then open the Flux app and click Redeploy button and input new FluxNode info to redeploy."),(0,l.kt)("h1",{id:"decentralized-app-supported-list"},(0,l.kt)("strong",{parentName:"h1"},"Decentralized App Supported List")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flux Cumulus Node"),(0,l.kt)("li",{parentName:"ul"},"Flux Cumulus Fractus (TBD)")),(0,l.kt)("h1",{id:"flux-cumulus-node-network-configuration"},(0,l.kt)("strong",{parentName:"h1"},"Flux Cumulus Node Network Configuration")),(0,l.kt)("p",null,"To ensure proper operation of your Flux Node please be sure to setup your networking appropriately. Below we will cover single and multi-node network requirements."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Requirements")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A external IP address, The maximum number of Flux nodes supported on a single external IP address is 8. If you have more than eight devices, you may need more external ip addresses"),(0,l.kt)("li",{parentName:"ul"},"Stable wired network environment, \u226525 Mbps Bandwidth"),(0,l.kt)("li",{parentName:"ul"},"Router supports UPNP, and port forwarding functions, to forward ports to the device.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Setup Single Node")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup"},"Refer to the flux official documentation")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Setup Multi-node")),(0,l.kt)("p",null,"SenseCAP M4 Square does not support multiple FluxNodes"))}d.isMDXComponent=!0}}]);