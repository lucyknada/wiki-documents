"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60645],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=o.createContext({}),l=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=l(n),d=a,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(h,s(s({ref:e},u),{},{components:n})):o.createElement(h,s({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57897:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={description:"How to Format the Output of LLM Using Langchain on Jetson",title:"How to Format the Output of LLM Using Langchain on Jetson",keywords:["reComputer","LLM","Langchain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson",last_update:{date:"4/1/2024",author:"Youjiang"}},s=void 0,i={unversionedId:"Edge/NVIDIA_Jetson/Application/Generative_AI/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson",id:"Edge/NVIDIA_Jetson/Application/Generative_AI/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson",title:"How to Format the Output of LLM Using Langchain on Jetson",description:"How to Format the Output of LLM Using Langchain on Jetson",source:"@site/docs/Edge/NVIDIA_Jetson/Application/Generative_AI/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson.md",sourceDirName:"Edge/NVIDIA_Jetson/Application/Generative_AI",slug:"/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson",permalink:"/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Application/Generative_AI/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson.md",tags:[],version:"current",lastUpdatedBy:"Youjiang",lastUpdatedAt:1711929600,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{description:"How to Format the Output of LLM Using Langchain on Jetson",title:"How to Format the Output of LLM Using Langchain on Jetson",keywords:["reComputer","LLM","Langchain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson",last_update:{date:"4/1/2024",author:"Youjiang"}},sidebar:"ProductSidebar",previous:{title:"Local Voice Chatbot",permalink:"/Local_Voice_Chatbot"},next:{title:"Quantized Llama2-7B with MLC LLM on Jetson",permalink:"/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"What is LLM?",id:"what-is-llm",level:2},{value:"Why is it necessary to format the output of LLM?",id:"why-is-it-necessary-to-format-the-output-of-llm",level:2},{value:"How to format the output of LLM?",id:"how-to-format-the-output-of-llm",level:2},{value:"How to deploy in edge devices?",id:"how-to-deploy-in-edge-devices",level:2},{value:"Next Steps Plan?",id:"next-steps-plan",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:l},c="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In modern families, the trend towards smart homes is becoming increasingly common. You can transform your home into a smarter and more convenient living space by connecting smart devices, automation, and artificial intelligence technology. To this end, we plan to integrate LLM into HomeAssistant to create a more intelligent home assistant. The first step to achieve this goal is to enable LLM to output control signals that can manage smart home devices."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/ai_assistant.png"})),(0,a.kt)("p",null,"In this wiki, you will learn how to use Langchain to format the output of large language models and deploy it on edge computing devices. Specifically, use the powerful understanding capability of large language models to build a local chatbot, and then utilize Langchain tools to fix the output format of the large model."),(0,a.kt)("h2",{id:"what-is-llm"},"What is LLM?"),(0,a.kt)("p",null,"Large Language Models (LLM) are a type of artificial intelligence model based on deep learning, such as GPT, which excel in natural language processing tasks. They are capable of understanding and generating text, and are therefore widely used in various applications such as text generation, translation, question-answer systems, and more."),(0,a.kt)("h2",{id:"why-is-it-necessary-to-format-the-output-of-llm"},"Why is it necessary to format the output of LLM?"),(0,a.kt)("p",null,"Formatting the output of a Large Language Model (LLM) is important for making it more comprehensible and tailored to specific applications. Often, the text generated by an LLM may include redundant information, unnecessary details, or content that is inconsistently formatted. By formatting the output, you can ensure that the text meets specific standards, remove unwanted parts, and ensure that it aligns with the requirements of your application. This process is crucial for integrating LLM outputs effectively into various systems and applications, ensuring that the generated content is both relevant and useful."),(0,a.kt)("h2",{id:"how-to-format-the-output-of-llm"},"How to format the output of LLM?"),(0,a.kt)("p",null,"Here, we can utilize a very user-friendly tool\u2014Langchain. It is a powerful framework designed to assist developers in building end-to-end applications using language models. It offers a set of tools, components, and interfaces that simplify the process of creating applications supported by Large Language Models and chat models."),(0,a.kt)("h2",{id:"how-to-deploy-in-edge-devices"},"How to deploy in edge devices?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," You will need to prepare a Jetson device (",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products"},"reComputer J4012"),") equipped with the Jetpack 5.0+ operating system."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Open the terminal and install the corresponding dependency software."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install --no-cache-dir --verbose langchain[llm] openai\npip3 install --no-cache-dir --verbose gradio==3.38.0\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Create a new Python script, named ",(0,a.kt)("inlineCode",{parentName:"p"},"format_opt.py"),", and insert the following code into it."),(0,a.kt)("details",null,(0,a.kt)("summary",null," format_opt.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import copy\n\nimport gradio as gr\nfrom langchain.llms import LlamaCpp\nfrom langchain.output_parsers import StructuredOutputParser, ResponseSchema\nfrom langchain.prompts import PromptTemplate\nfrom langchain.llms import OpenAI\nimport os\nos.environ["OPENAI_API_KEY"] = "your openai api key"\n\n\nclass ChatBot:\n    def __init__(self, llama_model_path=None,history_length=3):\n        self.chat_history = []\n        self.history_threshold = history_length\n        self.llm = None\n        if llama_model_path is not None:\n            self.llm = LlamaCpp(\n                model_path=llama_model_path,\n                temperature=0.75,\n                max_tokens=2000,\n                top_p=1\n            )\n        else:\n            self.llm = OpenAI(model_name="text-davinci-003")\n\n        response_schemas = [\n            ResponseSchema(name="user_input", description="This is the user\'s input"),\n            ResponseSchema(name="suggestion", type="string", description="your suggestion"),\n            ResponseSchema(name="control", description="This is your response"),\n            ResponseSchema(name="temperature", type="int", description="This is used to indicate the degrees "\n                                                                       "centigrade temperature of the air conditioner.")\n        ]\n        self.output_parser = StructuredOutputParser.from_response_schemas(response_schemas)\n        self.format_instructions = self.output_parser.get_format_instructions()\n\n        self.template = """\n            Now you are a smart speaker, and you need to determine whether to turn on the air conditioner based on the\n            user\'s input.\n            In the suggestion section, please reply normal conversation.\n            In the control section, if you need to turn on the air conditioner, please reply with <1>; if you need to \n            turn off the air conditioner, please reply with <0>.\n            \n            {format_instructions}\n            \n            Please do not generate any comments.\n            \n            % USER INPUT:\n            {user_input}\n\n            YOUR RESPONSE:\n        """\n        self.prompt = PromptTemplate(\n            input_variables=["user_input"],\n            partial_variables={"format_instructions": self.format_instructions},\n            template=self.template\n        )\n\n    def format_chat_prompt(self, message):\n        prompt = ""\n        for turn in self.chat_history:\n            user_message, bot_message = turn\n            prompt = f"{prompt}\\nUser: {user_message}\\nAssistant: {bot_message}"\n        prompt = f"{prompt}\\nUser: {message}\\nAssistant:"\n        return prompt\n\n    def respond(self, message):\n        prompt = self.prompt.format(user_input=message)\n        formatted_prompt = self.format_chat_prompt(prompt)\n        bot_message = self.llm(formatted_prompt)\n        # self.output_parser.parse(bot_message)\n\n        if len(self.chat_history) >= self.history_threshold:\n            del self.chat_history[0]\n        self.chat_history.append((message, bot_message))\n        return "", self.chat_history\n\n    def run_webui(self):\n        with gr.Blocks() as demo:\n            gr.Markdown("# This is a demo for format output of LLM")\n            chatbot = gr.Chatbot(height=500)\n            msg = gr.Textbox(label="Prompt")\n            btn = gr.Button("Submit")\n            clear = gr.ClearButton(components=[msg, chatbot], value="Clear console")\n\n            btn.click(self.respond, inputs=[msg], outputs=[msg, chatbot])\n            msg.submit(self.respond, inputs=[msg], outputs=[msg, chatbot])\n\n        gr.close_all()\n        demo.launch()\n\n\nif __name__ == \'__main__\':\n    chatbot_ins = ChatBot("/home/nvidia/Mirror/llama-2-7b-chat.Q4_0.gguf")\n    chatbot_ins.run_webui()\n\n'))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Enter python3 ",(0,a.kt)("inlineCode",{parentName:"p"},"format_opt.py")," in the terminal to start the script, and then visit ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:7861/")," in a browser to access the WebUI and test the effects."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/format_llm_opt.gif"})),(0,a.kt)("h2",{id:"next-steps-plan"},"Next Steps Plan?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Integrate with Nvidia Riva to replace text input with voice interaction."),(0,a.kt)("li",{parentName:"ul"},"Connect to Home Assistant to control smart home devices using the output from LLM.")),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);