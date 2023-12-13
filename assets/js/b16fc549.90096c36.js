"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={description:"Color Detection with reTerminal and Pi camera with OpenCV",title:"Color Detection with reTerminal and Pi camera with OpenCV",keywords:["Edge","reTerminal","piCamera","OpenCV","Color-Detection"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_DM_Color_detection",last_update:{date:"11/28/2023",author:"Kasun Thushara"}},o=void 0,s={unversionedId:"Edge/reTerminal/Application/OpenCV/reTerminal_DM_Color_detection",id:"Edge/reTerminal/Application/OpenCV/reTerminal_DM_Color_detection",title:"Color Detection with reTerminal and Pi camera with OpenCV",description:"Color Detection with reTerminal and Pi camera with OpenCV",source:"@site/docs/Edge/reTerminal/Application/OpenCV/reTerminal_DM_Color_detection.md",sourceDirName:"Edge/reTerminal/Application/OpenCV",slug:"/reTerminal_DM_Color_detection",permalink:"/reTerminal_DM_Color_detection",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal/Application/OpenCV/reTerminal_DM_Color_detection.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1701129600,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{description:"Color Detection with reTerminal and Pi camera with OpenCV",title:"Color Detection with reTerminal and Pi camera with OpenCV",keywords:["Edge","reTerminal","piCamera","OpenCV","Color-Detection"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_DM_Color_detection",last_update:{date:"11/28/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Face Detection with reTerminal and Pi camera with OpenCV",permalink:"/reTerminal_DM_Face_detection"},next:{title:"Object Tracking with reTerminal and Pi camera with OpenCV",permalink:"/reTerminal_DM_Face-tracking"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Exploring Color Spaces in OpenCV",id:"exploring-color-spaces-in-opencv",level:2},{value:"CMYK Color Space",id:"cmyk-color-space",level:3},{value:"BGR Color Space",id:"bgr-color-space",level:3},{value:"HSV Color Space",id:"hsv-color-space",level:3},{value:"Why HSV is important in Color detection problem?",id:"why-hsv-is-important-in-color-detection-problem",level:2},{value:"How to Use the Code snippets",id:"how-to-use-the-code-snippets",level:2},{value:"Application",id:"application",level:2},{value:"Tech support",id:"tech-support",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("center",null,(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif"})),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Color detection, a core component of computer vision, involves identifying and analyzing colors in digital images or videos. Widely applied across industries, it enables tasks like object recognition in ",(0,a.kt)("strong",{parentName:"p"},"robotics, quality control in manufacturing, and even plays a role in restoring artworks"),". The algorithms behind color detection contribute to advancements in technology, influencing areas such as ",(0,a.kt)("strong",{parentName:"p"},"autonomous vehicles, medical imaging, and visual aesthetics in film and photography"),". In essence, color detection is a versatile tool that enhances our ability to interpret and interact with the visual world in numerous meaningful ways."),(0,a.kt)("h2",{id:"getting-start"},"Getting Start"),(0,a.kt)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,a.kt)("h3",{id:"hardware-preparation"},"Hardware preparation"),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",{class:"table-nobg"},(0,a.kt)("tr",{class:"table-trnobg"},(0,a.kt)("th",{class:"table-trnobg"},"reTerminal"),(0,a.kt)("th",{class:"table-trnobg"},"PiCam")),(0,a.kt)("tr",{class:"table-trnobg"}),(0,a.kt)("tr",{class:"table-trnobg"},(0,a.kt)("td",{class:"table-trnobg"},(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png",style:{width:300,height:"auto"}}))),(0,a.kt)("td",{class:"table-trnobg"},(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg",style:{width:300,height:"auto"}})))),(0,a.kt)("tr",{class:"table-trnobg"}),(0,a.kt)("tr",{class:"table-trnobg"},(0,a.kt)("td",{class:"table-trnobg"},(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.kt)("td",{class:"table-trnobg"},(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/reTerminal-piCam/"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,a.kt)("h3",{id:"software-preparation"},"Software Preparation"),(0,a.kt)("p",null,"We recommend installing the ",(0,a.kt)("strong",{parentName:"p"},"Bullesye"),"  or ",(0,a.kt)("strong",{parentName:"p"},"Bookworm")," version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc"},(0,a.kt)("strong",{parentName:"a"},"guide")),". "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We highly recommend checking out our previous tutorial on ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal_DM_opencv/"},(0,a.kt)("strong",{parentName:"a"},"Getting started with OpenCV")),", as this tutorial serves as a continuation in our series.")),(0,a.kt)("h2",{id:"exploring-color-spaces-in-opencv"},"Exploring Color Spaces in OpenCV"),(0,a.kt)("p",null,"Color spaces are fundamental in image processing, and OpenCV supports several, each serving unique purposes. Let's delve into three common color spaces in OpenCV: CMYK, BGR, and HSV."),(0,a.kt)("h3",{id:"cmyk-color-space"},"CMYK Color Space"),(0,a.kt)("p",null,"CMYK (Cyan, Magenta, Yellow, Key/Black) is a subtractive color space used in color printing.\nColors are created by subtracting varying percentages of cyan, magenta, yellow, and black from white light."),(0,a.kt)("h3",{id:"bgr-color-space"},"BGR Color Space"),(0,a.kt)("p",null,"OpenCV's default color space is RGB, but it internally stores color in BGR (Blue, Green, Red).\nBGR is an additive color model, where varying intensities of blue, green, and red combine to form different shades."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Component Range:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Blue (0-255): Intensity of the blue color."),(0,a.kt)("li",{parentName:"ul"},"Green (0-255): Intensity of the green color."),(0,a.kt)("li",{parentName:"ul"},"Red (0-255): Intensity of the red color.")),(0,a.kt)("h3",{id:"hsv-color-space"},"HSV Color Space"),(0,a.kt)("p",null,"HSV (Hue, Saturation, Value) represents colors in a cylindrical model derived from RGB color points.\nIt mimics human perception of colors, with hue, saturation, and value components."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Component Range:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hue (0-179): Type of color in degrees."),(0,a.kt)("li",{parentName:"ul"},"Saturation (0-255): Intensity or vividness of the color."),(0,a.kt)("li",{parentName:"ul"},"Value (0-255): Brightness of the color.")),(0,a.kt)("h2",{id:"why-hsv-is-important-in-color-detection-problem"},"Why HSV is important in Color detection problem?"),(0,a.kt)("p",null,"HSV (Hue, Saturation, Value) is crucial in color detection tasks due to its ability to separate color information effectively. Unlike RGB or BGR, HSV isolates the type of color (Hue) from its intensity (Saturation) and brightness (Value), providing a more intuitive representation. This separation proves robust to changes in illumination, making color-based segmentation less sensitive to varying lighting conditions. Additionally, the natural representation of colors in HSV simplifies the process of defining color thresholds, facilitating precise criteria for identifying specific objects or regions in an image. Its widespread use in computer vision tasks, such as color-based object tracking and segmentation, highlights its importance in achieving accurate and reliable results."),(0,a.kt)("h2",{id:"how-to-use-the-code-snippets"},"How to Use the Code snippets"),(0,a.kt)("p",null,"In the first code, you have the flexibility to interactively adjust trackbars, allowing you to visually identify the optimal color thresholds. By experimenting with these trackbars, you can pinpoint the specific color you're interested in and take note of the corresponding HSV minimum and maximum values. This hands-on approach provides an intuitive way for individuals to fine-tune color parameters, ensuring a more personalized and precise color identification experience"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam\n\n")),(0,a.kt)("p",null,"Then "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python hsvtest.py\n")),(0,a.kt)("p",null,"Even you can use Thonny IDE to run the python script."),(0,a.kt)("center",null,(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/ReTerminal/opencv/colortrack.PNG"})),(0,a.kt)("p",null,"Here is the code for HSV Tuning"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'import cv2\nimport numpy as np\n\ndef empty(a):\n  pass\n\ndef stackImages(scale,imgArray):\n  rows = len(imgArray)\n  cols = len(imgArray[0])\n  rowsAvailable = isinstance(imgArray[0], list)\n  width = imgArray[0][0].shape[1]\n  height = imgArray[0][0].shape[0]\n  if rowsAvailable:\n      for x in range ( 0, rows):\n          for y in range(0, cols):\n              if imgArray[x][y].shape[:2] == imgArray[0][0].shape [:2]:\n                  imgArray[x][y] = cv2.resize(imgArray[x][y], (0, 0), None, scale, scale)\n              else:\n                  imgArray[x][y] = cv2.resize(imgArray[x][y], (imgArray[0][0].shape[1], imgArray[0][0].shape[0]), None, scale, scale)\n              if len(imgArray[x][y].shape) == 2: imgArray[x][y]= cv2.cvtColor( imgArray[x][y], cv2.COLOR_GRAY2BGR)\n      imageBlank = np.zeros((height, width, 3), np.uint8)\n      hor = [imageBlank]*rows\n      hor_con = [imageBlank]*rows\n      for x in range(0, rows):\n          hor[x] = np.hstack(imgArray[x])\n      ver = np.vstack(hor)\n  else:\n      for x in range(0, rows):\n          if imgArray[x].shape[:2] == imgArray[0].shape[:2]:\n              imgArray[x] = cv2.resize(imgArray[x], (0, 0), None, scale, scale)\n          else:\n              imgArray[x] = cv2.resize(imgArray[x], (imgArray[0].shape[1], imgArray[0].shape[0]), None,scale, scale)\n          if len(imgArray[x].shape) == 2: imgArray[x] = cv2.cvtColor(imgArray[x], cv2.COLOR_GRAY2BGR)\n      hor= np.hstack(imgArray)\n      ver = hor\n  return ver\n\n\n\npath = \'captured_image.jpg\'\ncv2.namedWindow("TrackBars")\ncv2.resizeWindow("TrackBars",640,240)\ncv2.createTrackbar("Hue Min","TrackBars",0,179,empty)\ncv2.createTrackbar("Hue Max","TrackBars",19,179,empty)\ncv2.createTrackbar("Sat Min","TrackBars",110,255,empty)\ncv2.createTrackbar("Sat Max","TrackBars",240,255,empty)\ncv2.createTrackbar("Val Min","TrackBars",153,255,empty)\ncv2.createTrackbar("Val Max","TrackBars",255,255,empty)\n\nwhile True:\n  img = cv2.imread(path)\n  img= cv2.resize(img, (300, 300))\n  imgHSV = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)\n  h_min = cv2.getTrackbarPos("Hue Min","TrackBars")\n  h_max = cv2.getTrackbarPos("Hue Max", "TrackBars")\n  s_min = cv2.getTrackbarPos("Sat Min", "TrackBars")\n  s_max = cv2.getTrackbarPos("Sat Max", "TrackBars")\n  v_min = cv2.getTrackbarPos("Val Min", "TrackBars")\n  v_max = cv2.getTrackbarPos("Val Max", "TrackBars")\n  print(h_min,h_max,s_min,s_max,v_min,v_max)\n  lower = np.array([h_min,s_min,v_min])\n  upper = np.array([h_max,s_max,v_max])\n  mask = cv2.inRange(imgHSV,lower,upper)\n  imgResult = cv2.bitwise_and(img,img,mask=mask)\n\n\n  cv2.imshow("Original",img)\n  cv2.imshow("HSV",imgHSV)\n  cv2.imshow("Mask", mask)\n  cv2.imshow("Result", imgResult)\n\n  #imgStack = stackImages(0.6,([img,imgHSV],[mask,imgResult]))\n  #cv2.imshow("Stacked Images", imgStack)\n\n  cv2.waitKey(1)\n')),(0,a.kt)("p",null,"Once you've determined the HSV minimum and maximum values using the trackbars in the first code snippet, you can seamlessly ",(0,a.kt)("strong",{parentName:"p"},"replace these numeric values")," with the corresponding ",(0,a.kt)("strong",{parentName:"p"},"color name")," and its identified range in the second snippet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python colordetector.py\n")),(0,a.kt)("p",null,"Here is the full code for Color Detection "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'import cv2\nimport numpy as np\nfrom picamera2 import Picamera2\n\nYour_color = "Green"\n\ndef detect_single_color(imageFrame, color_name, lower_range, upper_range, color_display):\n    hsvFrame = cv2.cvtColor(imageFrame, cv2.COLOR_BGR2HSV)\n    color_mask = cv2.inRange(hsvFrame, lower_range, upper_range)\n\n    kernel = np.ones((5, 5), "uint8")\n    color_mask = cv2.dilate(color_mask, kernel)\n    result = cv2.bitwise_and(imageFrame, imageFrame, mask=color_mask)\n\n    contours, hierarchy = cv2.findContours(color_mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)\n\n    for pic, contour in enumerate(contours):\n        area = cv2.contourArea(contour)\n        if area > 800:\n            x, y, w, h = cv2.boundingRect(contour)\n            imageFrame = cv2.rectangle(imageFrame, (x, y), (x + w, y + h), color_display, 2)\n            cv2.putText(imageFrame, f"{color_name} Colour", (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, color_display)\n\n    return imageFrame\n\n# Initialize PiCamera\npicam2 = Picamera2()\npicam2.preview_configuration.main.size = (1280, 720)\npicam2.preview_configuration.main.format = "RGB888"\npicam2.preview_configuration.align()\npicam2.configure("preview")\npicam2.start()\n\n# Define your color range\nmy_color_lower = np.array([49, 105, 0], np.uint8)\nmy_color_upper = np.array([94, 255, 255], np.uint8)\n\n# Start a while loop\nwhile True:\n    im = picam2.capture_array()\n\n    # Example: Detecting your specified color\n    result_frame = detect_single_color(im, Your_color, my_color_lower, my_color_upper, (0, 255, 0))  # Change the color display accordingly\n\n    # Program Termination\n    cv2.imshow("Single Color Detection in Real-Time", result_frame)\n    if cv2.waitKey(10) & 0xFF == ord(\'q\'):\n        picam2.stop()\n        cv2.destroyAllWindows()\n        break\n\n')),(0,a.kt)("h2",{id:"application"},"Application"),(0,a.kt)("p",null,"Color detection plays a pivotal role in diverse applications, from computer vision and manufacturing to ",(0,a.kt)("strong",{parentName:"p"},"medical imaging")," and art. In computer vision, it enables object recognition and tracking, contributing to tasks like ",(0,a.kt)("strong",{parentName:"p"},"robotic navigation and surveillance"),". Industries utilize color detection for ",(0,a.kt)("strong",{parentName:"p"},"sorting and quality control, ensuring products meet standards"),". Medical imaging relies on color-based segmentation for precise analysis, while entertainment industries employ it in film color grading and art restoration. From ",(0,a.kt)("strong",{parentName:"p"},"traffic sign recognition to biometric identification and environmental monitoring"),", the ability to detect and interpret colors is fundamental, shaping advancements in technology, automation, and various fields"),(0,a.kt)("h2",{id:"tech-support"},"Tech support"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);