"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27328],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=l(o),u=a,h=k["".concat(c,".").concat(u)]||k[u]||d[u]||i;return o?n.createElement(h,r(r({ref:t},p),{},{components:o})):n.createElement(h,r({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[k]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},29294:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(87462),a=(o(67294),o(3905));const i={description:"A Guide to Integrating LinkStar, Grocy, and BookStack in Your Office",title:"A Guide to Integrating LinkStar, Grocy, and BookStack in Your Office",keywords:["LinkStar","Getting started","Bookstack","Grocy"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/grocy-bookstack-linkstar",last_update:{date:"6/26/2023",author:"Kasun Thushara"}},r="Taking Control: Self-Hosted Solutions for Office Management with LinkStar, Grocy, and BookStack",s={unversionedId:"Network/RK_Devices/LinkStar/Application/grocy-bookstack-linkstar",id:"Network/RK_Devices/LinkStar/Application/grocy-bookstack-linkstar",title:"A Guide to Integrating LinkStar, Grocy, and BookStack in Your Office",description:"A Guide to Integrating LinkStar, Grocy, and BookStack in Your Office",source:"@site/docs/Network/RK_Devices/LinkStar/Application/grocy-bookstack-linkstar.md",sourceDirName:"Network/RK_Devices/LinkStar/Application",slug:"/grocy-bookstack-linkstar",permalink:"/grocy-bookstack-linkstar",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/RK_Devices/LinkStar/Application/grocy-bookstack-linkstar.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1687737600,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{description:"A Guide to Integrating LinkStar, Grocy, and BookStack in Your Office",title:"A Guide to Integrating LinkStar, Grocy, and BookStack in Your Office",keywords:["LinkStar","Getting started","Bookstack","Grocy"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/grocy-bookstack-linkstar",last_update:{date:"6/26/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Streamlining Web Development, The Perfect Duo - Linkstar and WordPress",permalink:"/wordpress_linkstar"},next:{title:"H28K Introduction",permalink:"/H28K_Datasheet"}},c={},l=[{value:"What is Docker ?",id:"what-is-docker-",level:2},{value:"What is Portainer ?",id:"what-is-portainer-",level:2},{value:"What is Bookstack?",id:"what-is-bookstack",level:2},{value:"What is Grocy?",id:"what-is-grocy",level:2},{value:"Set up the Docker environment on the LinkStar OpenWRT router.",id:"set-up-the-docker-environment-on-the-linkstar-openwrt-router",level:2},{value:"Install Portainer container",id:"install-portainer-container",level:2},{value:"Install BookStack",id:"install-bookstack",level:2},{value:"Step 01: Create a new stack",id:"step-01-create-a-new-stack",level:3},{value:"Step 02: Installing BookStack using web editor",id:"step-02-installing-bookstack-using-web-editor",level:3},{value:"Step 03: Access to BookStack.",id:"step-03-access-to-bookstack",level:3},{value:"Install Grocy",id:"install-grocy",level:2},{value:"Step 01: Create a new stack",id:"step-01-create-a-new-stack-1",level:3},{value:"Step 02: Installing Grocy using web editor.",id:"step-02-installing-grocy-using-web-editor",level:3},{value:"Step 03: Access to Grocy.",id:"step-03-access-to-grocy",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:l},k="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(k,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"taking-control-self-hosted-solutions-for-office-management-with-linkstar-grocy-and-bookstack"},"Taking Control: Self-Hosted Solutions for Office Management with LinkStar, Grocy, and BookStack"),(0,a.kt)("p",null,"The integration of Grocy and BookStack within a self-hosted office server powered by a LinkStar router offers a compelling solution for efficient and organized operations. With Grocy, businesses can effectively manage their groceries, shopping lists, and tasks, ensuring streamlined processes and reduced waste. On the other hand, BookStack provides a centralized documentation platform that promotes collaboration, knowledge sharing, and easy access to important information. By hosting both applications on the LinkStar router, businesses gain control over their data, enhance security, and eliminate the reliance on external services. This self-hosted setup empowers offices to optimize workflows, improve productivity, and create a well-structured and productive work environment. In this blog post, we will delve into the importance of integrating Grocy and BookStack within a LinkStar-powered office server, exploring the benefits and showcasing how this combination revolutionizes office management."),(0,a.kt)("h2",{id:"what-is-docker-"},"What is Docker ?"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png",alt:"pir",width:"200",height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker")," is an open-source platform that enables developers to automate the deployment and management of applications within lightweight, isolated containers. Containers are self-contained units that package an application along with its dependencies, libraries, and configuration files, allowing it to run consistently across different environments. Docker simplifies the process of creating, distributing, and running applications, making it easier to develop and deploy software in a consistent and reproducible manner. With Docker, developers can encapsulate their applications and ensure that they run smoothly across different operating systems and infrastructure setups, making it an invaluable tool for building portable and scalable applications, streamlining development workflows, and enabling efficient collaboration among team members."),(0,a.kt)("h2",{id:"what-is-portainer-"},"What is Portainer ?"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png",alt:"pir",width:"200",height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.portainer.io/"},"Portainer")," is a powerful and intuitive open-source management interface designed specifically for Docker. With its user-friendly web-based GUI, Portainer simplifies the deployment and administration of Docker containers, images, networks, and volumes. It offers a visual representation of the container environment, allowing users to easily create, start, stop, and remove containers with just a few clicks. Monitoring resource usage, viewing logs, and accessing container terminals are made effortless within the Portainer interface. Additionally, Portainer supports role-based access control, providing granular control over user privileges. Whether you're a beginner or an experienced Docker user, Portainer is an invaluable tool that streamlines container management, making it accessible and efficient for everyone."),(0,a.kt)("h2",{id:"what-is-bookstack"},"What is Bookstack?"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstackicon.png",alt:"pir",width:"200",height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.bookstackapp.com/"},"BookStack")," is a powerful and user-friendly open-source platform designed for creating and managing documentation and knowledge bases. With its intuitive interface, BookStack allows teams and organizations to efficiently organize and share information. It offers a hierarchical structure where content can be organized into books, chapters, and pages, enabling easy navigation and retrieval of information. BookStack supports rich text editing, allowing users to format and style their content effectively. It also offers features such as image embedding, version control, and collaboration tools, promoting seamless teamwork and efficient knowledge management. Whether for internal documentation, customer support, or educational purposes, BookStack is a versatile and widely used solution that streamlines the process of creating and maintaining comprehensive knowledge bases."),(0,a.kt)("h2",{id:"what-is-grocy"},"What is Grocy?"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy_logo.svg",alt:"pir",width:"200",height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://grocy.info/"},"Grocy")," is a self-hosted, open-source web application that helps users manage their groceries, household items, and tasks. It provides features for tracking food inventory, creating shopping lists, managing recipes, and keeping track of expiration dates."),(0,a.kt)("h2",{id:"set-up-the-docker-environment-on-the-linkstar-openwrt-router"},"Set up the Docker environment on the LinkStar OpenWRT router."),(0,a.kt)("p",null,"By default, the Docker installation on LinkStar has a storage capacity of around 250MB, which may not be sufficient for installing images. Therefore, we need to allocate more space to Docker to accommodate our requirements. As same as ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/plex_media_server/"},"Plex media server WiKi")," you need to follow steps.If you have already done it, please skip this step."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," For that make sure to follow the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router"},"Set up the docker environment on the linkstar openwrt router")," before going through this guide."),(0,a.kt)("h2",{id:"install-portainer-container"},"Install Portainer container"),(0,a.kt)("p",null,"This topic is discussed in the WordPress integration to Linkstar.  So you need to follow these steps if you are installing the Portainer for the first time. Here is the link for ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/wordpress_linkstar/#install-portainer-container"},"installing Portainer container"),"."),(0,a.kt)("h2",{id:"install-bookstack"},"Install BookStack"),(0,a.kt)("h3",{id:"step-01-create-a-new-stack"},"Step 01: Create a new stack"),(0,a.kt)("p",null,"In the context of application usage, a stack refers to a set of related services. Therefore, our first step is to establish a new stack. To do this, navigate to the sidebar and locate the ",(0,a.kt)("strong",{parentName:"p"},"Stacks")," option. Click on it and select ",(0,a.kt)("strong",{parentName:"p"},"Add Stack")," to proceed."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack1.PNG",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("h3",{id:"step-02-installing-bookstack-using-web-editor"},"Step 02: Installing BookStack using web editor"),(0,a.kt)("p",null,"In this step, you will need to provide a stack name and copy the following docker-compose format text to the web editor."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack2.PNG",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'---\nversion: "2"\nservices:\n  bookstack:\n    image: lscr.io/linuxserver/bookstack\n    container_name: bookstack\n    environment:\n      - APP_URL=http://192.168.100.1:6875\n      - DB_HOST=bookstack_db\n      - DB_PORT=3306\n      - DB_USER=bookstack\n      - DB_PASS=yourdbpass\n      - DB_DATABASE=bookstackapp\n    volumes:\n      - ./bookstack_app_data:/config\n    ports:\n      - 6875:80\n    restart: unless-stopped\n    depends_on:\n      - bookstack_db\n  bookstack_db:\n    image: lscr.io/linuxserver/mariadb\n    container_name: bookstack_db\n    environment:\n      - MYSQL_ROOT_PASSWORD=yourdbpass\n      - TZ=Asia/Colombo\n      - MYSQL_DATABASE=bookstackapp\n      - MYSQL_USER=bookstack\n      - MYSQL_PASSWORD=yourdbpass\n    volumes:\n      - ./bookstack_db_data:/config\n    restart: unless-stopped\n\n')),(0,a.kt)("p",null,"The provided docker-compose file includes two distinct docker containers: one for the Bookstack application and another for the SQL database. This is the recommended method for installing Bookstack. However, there are a few crucial changes that need to be made before proceeding."),(0,a.kt)("p",null,'Firstly, replace "yourappurl" with the desired URL through which you intend to access the Bookstack application. Additionally, modify "yourdbpass" to a password of your preference. It\'s essential to ensure that the same password is used for both containers to maintain consistency.'),(0,a.kt)("p",null,'Finally, remember to adjust the "TZ" variable to match your specific ',(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"Timezone"),"."),(0,a.kt)("p",null,"By making these necessary modifications, you can successfully configure the docker-compose file for your Bookstack installation."),(0,a.kt)("p",null,"Under the page you can found ",(0,a.kt)("strong",{parentName:"p"},"Deploy Stack")," button and click on it. "),(0,a.kt)("h3",{id:"step-03-access-to-bookstack"},"Step 03: Access to BookStack."),(0,a.kt)("p",null,"After the deploying process is done you can see a new stack is created. In our case, it is bookstack and click on it."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack3.PNG",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("p",null,"Then you can observe two containers are running, and the port number is 6875."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack4.PNG",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("p",null,"Next open your web browser and type 192.168.100.1:6875. Then you will navigate to login page."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Email: ",(0,a.kt)("a",{parentName:"p",href:"mailto:admin@admin.com"},"admin@admin.com")),(0,a.kt)("p",{parentName:"admonition"},"Password: password")),(0,a.kt)("p",null,"Then you can access successfully to home page of BookStack."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack5.PNG",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("h2",{id:"install-grocy"},"Install Grocy"),(0,a.kt)("h3",{id:"step-01-create-a-new-stack-1"},"Step 01: Create a new stack"),(0,a.kt)("p",null,"Same as the first step of the installation of Bookstack, we need to create a new stack. So you can use the above guide line on how to create a new stack. "),(0,a.kt)("h3",{id:"step-02-installing-grocy-using-web-editor"},"Step 02: Installing Grocy using web editor."),(0,a.kt)("p",null,"Same as the second step of installation of BookStack, you need to provide a stack name. Then copy and paste the following docker-compose text to the web editor. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'---\nversion: "2.1"\nservices:\n  grocy:\n    image: lscr.io/linuxserver/grocy\n    container_name: grocy\n    environment:\n      - TZ=Asia/Colombo\n    volumes:\n      - /grocy/config:/config\n    ports:\n      - 9283:80\n    restart: unless-stopped\n\n')),(0,a.kt)("p",null,"Under the page you can found ",(0,a.kt)("strong",{parentName:"p"},"Deploy Stack")," button and click on it. "),(0,a.kt)("h3",{id:"step-03-access-to-grocy"},"Step 03: Access to Grocy."),(0,a.kt)("p",null," After the deploying process is done you can see a new stack is created. In our case, it is grocy and click on it."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy1.PNG",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("p",null,"Then you can observe grocy container is running, and the port number is 9283."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy2.PNG",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("p",null," Next open your web browser and type 192.168.100.1:9283. Then you will navigate to login page."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Username: admin"),(0,a.kt)("p",{parentName:"admonition"},"Password: admin")),(0,a.kt)("p",null,"Then you can access successfully to home page of BookStack."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy3.PNG",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com"},"Docker Offficial Documentation"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com"},"Docker Hub"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.portainer.io/"},"Portainer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.bookstackapp.com/"},"BookStack"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,a.kt)("a",{parentName:"p",href:"https://grocy.info/"},"Grocy")))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);