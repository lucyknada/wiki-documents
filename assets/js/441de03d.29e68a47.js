"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58262],{15680:(e,t,i)=>{i.d(t,{xA:()=>d,yg:()=>h});var o=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(i),p=n,h=c["".concat(l,".").concat(p)]||c[p]||g[p]||r;return i?o.createElement(h,a(a({ref:t},d),{},{components:i})):o.createElement(h,a({ref:t},d))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<r;u++)a[u]=i[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}p.displayName="MDXCreateElement"},89346:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=i(58168),n=(i(96540),i(15680));const r={description:"Configure Web APP Visualization",title:"Configure Web APP Visualization",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Configuring-Web-APP-Visualization",last_update:{date:"1/13/2023",author:"shuxu hu"}},a="Configuring Web APP Visualization",s={unversionedId:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/Configuring-Web-APP-Visualization",id:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/Configuring-Web-APP-Visualization",title:"Configure Web APP Visualization",description:"Configure Web APP Visualization",source:"@site/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/Configuring-Web-APP-Visualization.md",sourceDirName:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated",slug:"/Configuring-Web-APP-Visualization",permalink:"/Configuring-Web-APP-Visualization",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/Configuring-Web-APP-Visualization.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Configure Web APP Visualization",title:"Configure Web APP Visualization",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Configuring-Web-APP-Visualization",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Integrate into Azure IoT Hub",permalink:"/Integrate-into-Azure-IoT-Hub"},next:{title:"Google Sheets Integrated",permalink:"/Integrate_into_Google_Sheets_via_Helium"}},l={},u=[{value:"Environmental preparation",id:"environmental-preparation",level:2},{value:"install -Windows",id:"install--windows",level:3},{value:"install -MacOS",id:"install--macos",level:3},{value:"Login to Microsoft Azure CLI",id:"login-to-microsoft-azure-cli",level:2},{value:"Connecting Microsoft Azure CLI to Microsoft Azure IoT Hub",id:"connecting-microsoft-azure-cli-to-microsoft-azure-iot-hub",level:2},{value:"Download Web APP Service Framework",id:"download-web-app-service-framework",level:2},{value:"Configure environment variables for Web APP",id:"configure-environment-variables-for-web-app",level:2},{value:"Run the Web APP",id:"run-the-web-app",level:2},{value:"Open a web page to see data from Azure IoT hub",id:"open-a-web-page-to-see-data-from-azure-iot-hub",level:2},{value:"Light sensor live image display",id:"light-sensor-live-image-display",level:3},{value:"IMU sensor live image display",id:"imu-sensor-live-image-display",level:3},{value:"Soil moisture sensor live image display",id:"soil-moisture-sensor-live-image-display",level:3},{value:"SHT40 sensor live image display",id:"sht40-sensor-live-image-display",level:3},{value:"SGP30 sensor live image display",id:"sgp30-sensor-live-image-display",level:3},{value:"Grove Vision AI Module live image display",id:"grove-vision-ai-module-live-image-display",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},c="wrapper";function g(e){let{components:t,...i}=e;return(0,n.yg)(c,(0,o.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"configuring-web-app-visualization"},"Configuring Web APP Visualization"),(0,n.yg)("p",null,"Now that we have a device connected to the Helium Network as well as data flowing from the device to Helium Network to Microsoft Azure IoT Hubs, let\u2019s start to explore how to analyze and visualize this data."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/192.png"})),(0,n.yg)("h2",{id:"environmental-preparation"},"Environmental preparation"),(0,n.yg)("p",null,"To use this routine, please download and configure ",(0,n.yg)("a",{parentName:"p",href:"https://www.git-scm.com/downloads"},"Git")," and the Azure CLI for your computer in advance."),(0,n.yg)("p",null,"We will not go into the installation and configuration of Git here, but will focus on the installation of the Azure CLI for Windows and MacOS systems."),(0,n.yg)("p",null,"The Azure Command-Line Interface (CLI) is a cross-platform command-line tool to connect to Azure and execute administrative commands on Azure resources. It allows the execution of commands through a terminal using interactive command-line prompts or a script."),(0,n.yg)("p",null,"For interactive use, you first launch a shell such as cmd.exe on Windows, or Bash on Linux or macOS, and then issue a command at the shell prompt. To automate repetitive tasks, you assemble the CLI commands into a shell script using the script syntax of your chosen shell, and then you execute the script."),(0,n.yg)("h3",{id:"install--windows"},"install -Windows"),(0,n.yg)("p",null,"For Windows, the Azure CLI is installed via a MSI, which gives you access to the CLI through the Windows Command Prompt (CMD) or PowerShell. When installing for Windows Subsystem for Linux (WSL), packages are available for your Linux distribution."),(0,n.yg)("p",null,"The current version of the Azure CLI is ",(0,n.yg)("strong",{parentName:"p"},"2.37.0"),". For information about the latest release, see the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli"},"release notes"),". To find your installed version and see if you need to update, run ",(0,n.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/reference-index#az_version"},"az version"),"."),(0,n.yg)("p",null,"You can also install the Azure CLI using PowerShell. Start PowerShell as administrator and run the following command:"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"PowerShell must be run as administrator.\n"))),(0,n.yg)("p",null,"Start PowerShell as administrator and run the following command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\\AzureCLI.msi\n")),(0,n.yg)("p",null,"This will download and install the latest version of the Azure CLI for Windows. If you already have a version installed, the installer will update the existing version."),(0,n.yg)("p",null,"To install specific version, replace the ",(0,n.yg)("inlineCode",{parentName:"p"},"-Uri")," argument with ",(0,n.yg)("inlineCode",{parentName:"p"},"https://azcliprod.blob.core.windows.net/msi/azure-cli-<version>.msi")," with version segment changed. Available versions can be found at ",(0,n.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli"},"Azure CLI release notes"),"."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"After the installation is complete, you will need to reopen PowerShell to use the Azure CLI.")),(0,n.yg)("p",null,"You can now run the Azure CLI with the ",(0,n.yg)("inlineCode",{parentName:"p"},"az")," command from either Windows Command Prompt or PowerShell."),(0,n.yg)("h3",{id:"install--macos"},"install -MacOS"),(0,n.yg)("p",null,"For the macOS platform, you can install the Azure CLI with ",(0,n.yg)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew package manager"),". Homebrew makes it easy to keep your installation of the CLI update to date. The CLI package has been tested on macOS versions 10.9 and later."),(0,n.yg)("p",null,"The current version of the Azure CLI is ",(0,n.yg)("strong",{parentName:"p"},"2.34.1"),". For information about the latest release, see the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli"},"release notes"),". To find your installed version and see if you need to update, run ",(0,n.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/reference-index#az_version"},"az version"),"."),(0,n.yg)("p",null,"You can install the Azure CLI on macOS by updating your brew repository information, and then running the ",(0,n.yg)("inlineCode",{parentName:"p"},"install")," command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"brew update && brew install azure-cli\n")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/1.jpg"})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"The Azure CLI has a dependency on the Homebrew ",(0,n.yg)("inlineCode",{parentName:"p"},"python@3.10")," package, and will install it.")),(0,n.yg)("h2",{id:"login-to-microsoft-azure-cli"},"Login to Microsoft Azure CLI"),(0,n.yg)("p",null,"When you first use Microsoft Azure CLI on your computer, you will first need to log in to the IoT hubs and type ",(0,n.yg)("inlineCode",{parentName:"p"},"az login")," in the command window to bring up the login window. At this point, please complete the login operation."),(0,n.yg)("p",null,"If the CLI can open your default browser, it will initiate ",(0,n.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow"},"authorization code flow")," and open the default browser to load an Azure sign-in page."),(0,n.yg)("p",null,"Otherwise, it will initiate ",(0,n.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-device-code"},"device code flow")," and tell you to open a browser page at ",(0,n.yg)("a",{parentName:"p",href:"https://aka.ms/devicelogin"},"https://aka.ms/devicelogin")," and enter the code displayed in your terminal."),(0,n.yg)("p",null,"Sign in with your account credentials in the browser."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/161.png"})),(0,n.yg)("h2",{id:"connecting-microsoft-azure-cli-to-microsoft-azure-iot-hub"},"Connecting Microsoft Azure CLI to Microsoft Azure IoT Hub"),(0,n.yg)("p",null,"Consumer groups provide independent views into the event stream that enable apps and Azure services to independently consume data from the same Event Hub endpoint. In this section, you add a consumer group to your IoT hub's built-in endpoint that the Web APP will use to read data from."),(0,n.yg)("p",null,"IoT hubs are created with several default access policies. One such policy is the service policy, which provides sufficient permissions for a service to read and write the IoT hub's endpoints. Run the following command to get a connection string for your IoT hub that adheres to the service policy:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"az iot hub connection-string show --hub-name ${YourIotHub} --policy-name service\n")),(0,n.yg)("p",null,"Where the environment variable ",(0,n.yg)("inlineCode",{parentName:"p"},"${YourIotHub}")," indicates the name of your Azure IoT Hub, as shown below."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/157.png"})),(0,n.yg)("p",null,"The connection string should look similar to the following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},'"HostName={YourIotHubName}.azure-devices.net;SharedAccessKeyName=service;SharedAccessKey={YourSharedAccessKey}"\n')),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/27.jpg"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note down the service connection string"),", you'll need it later in this tutorial."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"If for some reason you are unable to install Azure CLI on your computer, you may consider running bash with the Azure CLI environment directly from the IoT hubs panel to help you with the next steps.")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/158.png"})),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"You can enter the above az command directly here to get the connection string.\n")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/159.png"})),(0,n.yg)("h2",{id:"download-web-app-service-framework"},"Download Web APP Service Framework"),(0,n.yg)("p",null,"Please download the corresponding library according to the type of sensor you want to use."),(0,n.yg)("table",{align:"center"},(0,n.yg)("tbody",null,(0,n.yg)("tr",null,(0,n.yg)("th",null,"Sensor Type"),(0,n.yg)("th",null,"Download Address")),(0,n.yg)("tr",null,(0,n.yg)("td",{align:"center"},"Wio Terminal built-in light sensor"),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/lightsensor-Web-APP"},"Download"))),(0,n.yg)("tr",null,(0,n.yg)("td",{align:"center"},"Wio Terminal built-in IMU sensor"),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/IMUsensor-Web-APP"},"Download"))),(0,n.yg)("tr",null,(0,n.yg)("td",{align:"center"},"Soil Moisture Sensor"),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/soil-moisture-Azure-IoT-hub-Web-APP"},"Download"))),(0,n.yg)("tr",null,(0,n.yg)("td",{align:"center"},"VOC and eCO2 Gas Sensor (SGP30)"),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/SGP30-Azure-IoT-hub-Web-APP"},"Download"))),(0,n.yg)("tr",null,(0,n.yg)("td",{align:"center"},"Temp&Humi Sensor (SHT40)"),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/SHT40-Azure-IoT-hub-Web-APP"},"Download"))),(0,n.yg)("tr",null,(0,n.yg)("td",{align:"center"},"Vision AI Module"),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/VisionAI-Azure-IoT-hub-Web-APP"},"Download"))))),(0,n.yg)("p",null,"Open the Web APP library in your favorite editor. The following shows the file structure viewed in VS Code:"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/38.jpg"})),(0,n.yg)("p",null,"Take a moment to examine the following files:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Chart-device-data.js")," is a client-side script that listens on the web socket, keeps track of each DeviceId, and stores the last 50 points of incoming data for each device. It then binds the selected device data to the chart object.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Index.html")," handles the UI layout for the web page and references the necessary scripts for client-side logic.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Event-hub-reader.js")," is a service-side script that connects to the IoT hub's built-in endpoint using the specified connection string and consumer group. It extracts the DeviceId and EnqueuedTimeUtc from metadata on incoming messages and then relays the message using the callback method registered by server.js.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Server.js")," is a service-side script that initializes the web socket and the Event Hub wrapper class. It provides a callback to the Event Hub wrapper class that the class uses to broadcast incoming messages to the web socket."))),(0,n.yg)("h2",{id:"configure-environment-variables-for-web-app"},"Configure environment variables for Web APP"),(0,n.yg)("p",null,"To read data from your IoT hub, the Web APP needs your IoT hub's connection string and the name of the consumer group that it should read through. It gets these strings from the process environment in the following lines in ",(0,n.yg)("strong",{parentName:"p"},"server.js"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-c"},"const iotHubConnectionString = process.env.IotHubConnectionString;\nconst eventHubConsumerGroup = process.env.EventHubConsumerGroup;\n")),(0,n.yg)("p",null,"There will be two methods for this step, so let's start with the more common one."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The first method. Set the environment variables in your command window with the following commands. Replace the placeholder values with the service connection string for your IoT hub and the name of the consumer group you created previously. Don't quote the strings.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"set IotHubConnectionString = YourIoTHubConnectionString\nset EventHubConsumerGroup = YourConsumerGroupName\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"In the second method, we can make changes directly in the code. It would be suitable for cases where, for example, adding environment variables is tedious under MacOS.")),(0,n.yg)("p",null,"Please open the ",(0,n.yg)("strong",{parentName:"p"},"server.js")," file with an editor and modify the code according to the name of the consumer group you created and the connection string we got in ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Configuring-Web-APP-Visualization/#connecting-microsoft-azure-cli-to-microsoft-azure-iot-hub"},(0,n.yg)("strong",{parentName:"a"},"step2")),". Refer to the following figure for the modification."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/160.png"})),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/29.jpg"})),(0,n.yg)("h2",{id:"run-the-web-app"},"Run the Web APP"),(0,n.yg)("p",null,"Please upload the code according to the ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Connecting-to-Helium/#upload-code-send-data-to-helium"},"previous wiki")," content. Make sure that your device is running and sending data."),(0,n.yg)("p",null,"In the command window, run the following lines to download and install referenced packages and start the website:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"npm install\nnpm start\n")),(0,n.yg)("p",null,"You should see output in the console that indicates that the Web APP has successfully connected to your IoT hub and is listening on port 3000:"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/30.jpg"})),(0,n.yg)("h2",{id:"open-a-web-page-to-see-data-from-azure-iot-hub"},"Open a web page to see data from Azure IoT hub"),(0,n.yg)("p",null,"Open a browser to ",(0,n.yg)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,n.yg)("p",null,"In the list selection box in the upper left corner, select your device ID number. Wait until the next set of data sent arrives and you can observe the line graph of data changes."),(0,n.yg)("h3",{id:"light-sensor-live-image-display"},"Light sensor live image display"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/31.png"})),(0,n.yg)("p",null,"You should also see output in the console that shows the messages that your Web APP is broadcasting to the browser client:"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/32.jpg"})),(0,n.yg)("h3",{id:"imu-sensor-live-image-display"},"IMU sensor live image display"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/176.png"})),(0,n.yg)("p",null,"You should also see output in the console that shows the messages that your Web APP is broadcasting to the browser client:"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/177.png"})),(0,n.yg)("h3",{id:"soil-moisture-sensor-live-image-display"},"Soil moisture sensor live image display"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/188.png"})),(0,n.yg)("p",null,"You should also see output in the console that shows the messages that your Web APP is broadcasting to the browser client:"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/187.png"})),(0,n.yg)("h3",{id:"sht40-sensor-live-image-display"},"SHT40 sensor live image display"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/194.png"})),(0,n.yg)("p",null,"You should also see output in the console that shows the messages that your Web APP is broadcasting to the browser client:"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/193.png"})),(0,n.yg)("h3",{id:"sgp30-sensor-live-image-display"},"SGP30 sensor live image display"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/182.png"})),(0,n.yg)("p",null,"You should also see output in the console that shows the messages that your Web APP is broadcasting to the browser client:"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/183.png"})),(0,n.yg)("h3",{id:"grove-vision-ai-module-live-image-display"},"Grove Vision AI Module live image display"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/201.png"})),(0,n.yg)("p",null,"You should also see output in the console that shows the messages that your Web APP is broadcasting to the browser client:"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/199.png"})),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);