"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[65481],{15680:(e,r,n)=>{n.d(r,{xA:()=>g,yg:()=>y});var o=n(96540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=o.createContext({}),p=function(e){var r=o.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},g=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=t,y=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?o.createElement(y,a(a({ref:r},g),{},{components:n})):o.createElement(y,a({ref:r},g))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:t,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25100:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(58168),t=(n(96540),n(15680));const i={description:"Grove-Single Axis Analog Gyro",title:"Grove-Single Axis Analog Gyro",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Single_Axis_Analog_Gyro",last_update:{date:"1/29/2023",author:"jianjing Huang"}},a=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-Single_Axis_Analog_Gyro",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-Single_Axis_Analog_Gyro",title:"Grove-Single Axis Analog Gyro",description:"Grove-Single Axis Analog Gyro",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-Single_Axis_Analog_Gyro.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Grove-Single_Axis_Analog_Gyro",permalink:"/Grove-Single_Axis_Analog_Gyro",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-Single_Axis_Analog_Gyro.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1674950400,formattedLastUpdatedAt:"Jan 29, 2023",frontMatter:{description:"Grove-Single Axis Analog Gyro",title:"Grove-Single Axis Analog Gyro",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Single_Axis_Analog_Gyro",last_update:{date:"1/29/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - IMU 9DOF(lcm20600+AK09918)",permalink:"/Grove-IMU_9DOF-lcm20600+AK09918"},next:{title:"Grove Lightning Sensor AS3935",permalink:"/grove-lightning-sensor-as3935"}},s={},p=[{value:"Feature",id:"feature",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"With Arduino",id:"with-arduino",level:3},{value:"With Raspberry Pi",id:"with-raspberry-pi",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:p},u="wrapper";function c(e){let{components:r,...n}=e;return(0,t.yg)(u,(0,o.A)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Axis_Analog_Gyro_01.jpg",alt:null})),(0,t.yg)("p",null,"The Grove \u2013 Signal Axis Analog Gyro is based on an angular velocity sensor (Murata-ENC-03R) that uses the phenomenon of Coriolis force. It can only measure the X-axis angular velocity, which is different from other 3-Axis gyro, but with a higher speed. It can be used for the position control and attitude control like the self-balanced 2WD."),(0,t.yg)("p",null,"Model: ",(0,t.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip"},"SEN05091P")),(0,t.yg)("h2",{id:"feature"},"Feature"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Input Voltage: 3.3V/5V")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Standard Grove Interface")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Light Weight")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"High Speed")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Measure X-axis Angular Velocity"))),(0,t.yg)("h2",{id:"demonstration"},"Demonstration"),(0,t.yg)("h3",{id:"with-arduino"},"With ",(0,t.yg)("a",{parentName:"h3",href:"https://www.arduino.cc/"},"Arduino")),(0,t.yg)("p",null,"The module detects one-axis rotation with analog signal.\nHigh-pass filter and low-pass filter circuit are applied to reduce the temperature drift and suppress the output noise.\nBefore the measurement of the angular velocity, a reference value(the sensor output at Angular Velocity=0) is required.\nThis value is 1.35V in default. But in order to get more accurate reference values, before the measurement,a calibration is necessary.\nIn this calibration, the output voltage when angular velocity =0 been sampled 200 times,\nand then the average of these data will be treated as the reference value."),(0,t.yg)("p",null,"1.Connect it to A0 port of  ",(0,t.yg)("a",{parentName:"p",href:"https://seeeddoc.github.io/Grove-Base_Shield/"},"Grove - Base Shield"),", of cause any pin of the analog pins would be OK."),(0,t.yg)("p",null,"2.Plug the Grove - Base Shield into Arduino/Seeeduino and connect them to PC using a USB cable."),(0,t.yg)("p",null,"3.Upload the below code.Please click ",(0,t.yg)("a",{parentName:"p",href:"https://seeeddoc.github.io/Upload_Code/"},"here")," if you do not know how to upload."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-c++"},'    int sensorPin = A0; // select the input pin for the sensor\n\n    float reference_Value=0;\n\n    int sensorValue = 0; // variable to store the value coming from the sensor\n\n    void setup()\n    {\n\n        int i;\n        float sum=0;\n        pinMode(sensorPin, INPUT);\n        Serial.begin(9600);\n        Serial.println("Please do not rotate it before calibrate!");\n        Serial.println("Get the reference value:");\n\n    for(i=0;i<1000;i++)\n    {\n        // read the value from the sensor:\n        sensorValue = analogRead(sensorPin);\n        sum += sensorValue;\n        delay(5);\n    }\n    reference_Value = sum/1000.0;\n    Serial.println(reference_Value);\n    Serial.println("Now you can begin your test!");\n    }\n\n    void loop()\n    {\n        double angularVelocity;\n        sensorValue = analogRead(sensorPin);\n        angularVelocity =((double)(sensorValue-reference_Value)*4930.0)/1023.0/0.67; //get the angular velocity\n        Serial.print(angularVelocity);\n        Serial.println("deg/s");\n        Serial.println(" ");\n        delay(10);\n    }\n')),(0,t.yg)("ol",{start:4},(0,t.yg)("li",{parentName:"ol"},"Now, it is time to the calibration. ",(0,t.yg)("font",{color:"#DC143C",face:!0},"Put the sensor on your desk horizontally"),"\n\uff0cand then press the Reset button on the Seeeduino, and then Open the serial tool:")),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Gyro_Result.jpg",alt:null})),(0,t.yg)("ol",{start:5},(0,t.yg)("li",{parentName:"ol"},'As you see the "Now you can begin your test", that means the calibration done. You can use the sensor now. Rotating direction can reference the following picture:')),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Rotate_direction.jpg",alt:null})),(0,t.yg)("h3",{id:"with-raspberry-pi"},"With ",(0,t.yg)("a",{parentName:"h3",href:"https://seeeddoc.github.io/GrovePiPlus/"},"Raspberry Pi")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"You should have got a raspberry pi and a grovepi or grovepi+.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"You should have completed configuring the development enviroment, otherwise follow ",(0,t.yg)("a",{parentName:"p",href:"https://seeeddoc.github.io/GrovePiPlus/#Introducing_the_GrovePi.2B"},"here"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Connection"))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Plug the sensor to grovepi socket A0 by using a grove cable.")),(0,t.yg)("ol",{start:4},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Navigate to the demos' directory:"),(0,t.yg)("p",{parentName:"li"},"  ",(0,t.yg)("inlineCode",{parentName:"p"},"cd yourpath/GrovePi/Software/Python/\n")))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"To see the code")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'    nano grovesingleaxisanaloggyro.py # "Ctrl+x" to exit #\n\n    import time\n    import grovepi\n\n    #Connect the Grove Single Axis Analog Gyro to analog port A0\n    #SIG,NC,VCC,GND\n    sensor = 0\n\n    grovepi.pinMode(sensor,"INPUT")\n\n    #calibration\n    print "calibrating..."\n\n    sum = 0\n\n    errors = 0\n\n    for x in range(0, 100):\n\n      try:\n          #Get sensor value\n          v = grovepi.analogRead(sensor)\n          sum += v\n          #time.sleep(.05)\n      except IOError:\n          print "Error"\n          errors += 1\n\n    if errors == 100:\n\n       print "unable to calibrate"\n\n       raise SystemExit\n\n    reference_value = sum / (100 - errors)\n\n    print "finished calibrating"\n    print "reference_value =", reference_value\n\n    #ready\n\n    while True:\n        try:\n            #Get sensor value\n            sensor_value = grovepi.analogRead(sensor)\n\n            #Calculate angular velocity (deg/s)\n            velocity = ((float)(sensor_value - reference_value) * 4930.0) / 1023.0 / 0.67\n\n            print "sensor_value =", sensor_value, " velocity =", velocity\n            time.sleep(.5)\n\n        except IOError:\n        print "Error"\n')),(0,t.yg)("p",null,"5.Run the demo."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"sudo python grovesingleaxisanaloggyro.py")),(0,t.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,t.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove-Signal_Axis_Analog_Gyro_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,t.yg)("h2",{id:"resource"},"Resource"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"[Eagle]"),"  ",(0,t.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove-Signal_Axis_Analog_Gyro_Eagle_File.zip"},"Grove - Signal Axis Analog Gyro Eagle")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"[PDF]"),"  ",(0,t.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove%20-%20Single%20Axis%20Analog%20Gyro%20v1.0%20Sch.pdf"},"Grove - Signal Axis Analog Gyro Sch")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"[PDF]"),"  ",(0,t.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove%20-%20Single%20Axis%20Analog%20Gyro%20v1.0%20PCB.pdf"},"Grove - Signal Axis Analog Gyro PCB")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"[Datasheet]")," ",(0,t.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Analog_Gyro_datasheet.pdf"},"File Signal Axis Analog Gyro datasheet")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"[Code]")," ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Single_Axis_Analog_Gyro"},"Demo code on github")),(0,t.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,t.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,t.yg)("div",{class:"button_tech_support_container"},(0,t.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,t.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,t.yg)("div",{class:"button_tech_support_container"},(0,t.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,t.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);