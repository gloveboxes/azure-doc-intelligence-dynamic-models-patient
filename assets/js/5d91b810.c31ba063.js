"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[264],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=o,f=p["".concat(m,".").concat(u)]||p[u]||c[u]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(4137));const a={},i="Train your model",l={unversionedId:"form-recognizer-studio/train-model",id:"form-recognizer-studio/train-model",title:"Train your model",description:"With your training forms labeled, you're now ready to train your model. Follow these steps to train your model.",source:"@site/docs/25-form-recognizer-studio/50-train-model.md",sourceDirName:"25-form-recognizer-studio",slug:"/form-recognizer-studio/train-model",permalink:"/azure-doc-intelligence-dynamic-models-patient/form-recognizer-studio/train-model",draft:!1,editUrl:"https://github.com/azure-doc-intelligence-dynamic-models-patient/tree/main/docs/docs/25-form-recognizer-studio/50-train-model.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Label your data",permalink:"/azure-doc-intelligence-dynamic-models-patient/form-recognizer-studio/label-data"},next:{title:"Deploy new patient app",permalink:"/azure-doc-intelligence-dynamic-models-patient/category/deploy-new-patient-app"}},m={},s=[{value:"Test the model",id:"test-the-model",level:2}],d={toc:s},p="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"train-your-model"},"Train your model"),(0,o.kt)("p",null,"With your training forms labeled, you're now ready to train your model. Follow these steps to train your model."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the Train button in the upper-right corner."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"image shows the train form button",src:r(4498).Z,width:"1094",height:"317"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the train a new model dialog, name your model ",(0,o.kt)("inlineCode",{parentName:"p"},"patient-registration-model"),", and optionally, provide a description.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Template")," from the ",(0,o.kt)("strong",{parentName:"p"},"Build Mode"),". "),(0,o.kt)("p",{parentName:"li"},"Template models train in a few minutes. Neural models can take up to 30 minutes to train. Learn more about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom?WT.mc_id=aiml-77396-cxa"},"model types and capabilities"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Train model dialog",src:r(6733).Z,width:"878",height:"450"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Train")," to initiate the training process. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Go to Models")," to navigate to the ",(0,o.kt)("em",{parentName:"p"},"Models")," menu to view the status of the train operation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You may need to select ",(0,o.kt)("inlineCode",{parentName:"p"},"refresh")," to see latest status of the train operation."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The training model status will change to ",(0,o.kt)("strong",{parentName:"p"},"succeeded"),". The model is now ready for use.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Train model status",src:r(8316).Z,width:"1230",height:"351"})))),(0,o.kt)("h2",{id:"test-the-model"},"Test the model"),(0,o.kt)("p",null,"Once the model training is complete, you can test your model by selecting the model on the models list page."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Test")," from the Document Intelligence Studio menu."),(0,o.kt)("li",{parentName:"ol"},"Browse for a file or drag and drop a file into the ",(0,o.kt)("em",{parentName:"li"},"Test model")," page. Select a .jpeg or .pdf file from the ",(0,o.kt)("strong",{parentName:"li"},"contoso_new_patient_assets/training_labeled")," folder that matches the language you used to train your model."),(0,o.kt)("li",{parentName:"ol"},"With a file selected, choose the ",(0,o.kt)("strong",{parentName:"li"},"Analyze")," button to test the model."),(0,o.kt)("li",{parentName:"ol"},"The model results are displayed in the main window and the fields extracted are listed in the right navigation bar on the ",(0,o.kt)("em",{parentName:"li"},"fields")," tab."),(0,o.kt)("li",{parentName:"ol"},"Validate your model by evaluating the results for each field."),(0,o.kt)("li",{parentName:"ol"},"The right navigation bar also includes sample code to invoke your model and the JSON results from the API.")),(0,o.kt)("p",null,"Congratulations you've trained a custom model in the Document Intelligence Studio! Your model is ready for use with the patient registration app."))}c.isMDXComponent=!0},4498:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/train-form-model-7500bd016cde8bdc2fbba73500ad6fd0.png"},6733:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/train-model-dialog-6c5a6da92d44034b4a1eca7927c54917.png"},8316:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/train-model-status-b4688df36cd6d8d5a7523cb9593d0f8e.png"}}]);