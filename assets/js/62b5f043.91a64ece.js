"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={description:"Overview",title:"Overview",keywords:["Wio_terminal Buzzer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Buzzer",last_update:{date:"1/17/2023",author:"jianjing Huang"}},a="Getting Started with Buzzer",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Buzzer/Wio-Terminal-Buzzer",id:"Sensor/Wio_Terminal/Hardware_Overview/Buzzer/Wio-Terminal-Buzzer",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Buzzer/Wio-Terminal-Buzzer.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Buzzer",slug:"/Wio-Terminal-Buzzer",permalink:"/Wio-Terminal-Buzzer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Buzzer/Wio-Terminal-Buzzer.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal Buzzer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Buzzer",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/Wio-Terminal-Mic"},next:{title:"Connect Wio Terminal to Microsoft Azure IoT Central",permalink:"/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central"}},s={},u=[{value:"Basics",id:"basics",level:2},{value:"Example code",id:"example-code",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-buzzer"},"Getting Started with Buzzer"),(0,i.kt)("p",null,"This repo demonstrates how to use the built-in piezo buzzer as a component in Wio Terminal. The piezo can be connected to an analog pulse-width modulation(PWM) output to generate various tones and effects!"),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("p",null,"The built-in buzzer of Wio Terminal is a passive buzzer, meaning that it requires a AC signal(PWM) to trigger and output a sound, so you can generate an output following this:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"WIO_BUZZER"))," is the built-in Buzzer Pin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"    void setup() {\n        pinMode(WIO_BUZZER, OUTPUT);\n    }\n\n    void loop() {\n        analogWrite(WIO_BUZZER, 128);\n        delay(1000);\n        analogWrite(WIO_BUZZER, 0);\n        delay(1000);\n    }\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," To generate a default buzzer sound, it is recommended to drive the buzzer using a lower voltage."),(0,i.kt)("h2",{id:"example-code"},"Example code"),(0,i.kt)("p",null,"This example use a buzzer to play melodies. It sends a square wave of the appropriate frequency to the buzzer, generating the corresponding tone."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/* Macro Define */\n#define BUZZER_PIN WIO_BUZZER /* sig pin of the buzzer */\n\nint length = 15;         /* the number of notes */\nchar notes[] = \"ccggaagffeeddc \";\nint beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };\nint tempo = 300;\n\nvoid setup() {\n    //set buzzer pin as output\n    pinMode(BUZZER_PIN, OUTPUT);\n}\n\nvoid loop() {\n    for(int i = 0; i < length; i++) {\n        if(notes[i] == ' ') {\n            delay(beats[i] * tempo);\n        } else {\n            playNote(notes[i], beats[i] * tempo);\n        }\n        delay(tempo / 2);    /* delay between notes */\n    }\n\n}\n\n//Play tone\nvoid playTone(int tone, int duration) {\n    for (long i = 0; i < duration * 1000L; i += tone * 2) {\n        digitalWrite(BUZZER_PIN, HIGH);\n        delayMicroseconds(tone);\n        digitalWrite(BUZZER_PIN, LOW);\n        delayMicroseconds(tone);\n    }\n}\n\nvoid playNote(char note, int duration) {\n    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };\n    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };\n\n    // play the tone corresponding to the note name\n    for (int i = 0; i < 8; i++) {\n        if (names[i] == note) {\n            playTone(tones[i], duration);\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);