"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[467],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),s=o,f=u["".concat(c,".").concat(s)]||u[s]||p[s]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(4137));const a={},i="Label your data",l={unversionedId:"form-recognizer-studio/label-data",id:"form-recognizer-studio/label-data",title:"Label your data",description:"In your project, there are five documents, four of the documents have a green dot to indicate the documents have been analyzed and labeled. The fifth document needs to be analyzed and labeled.",source:"@site/docs/25-form-recognizer-studio/40-label-data.md",sourceDirName:"25-form-recognizer-studio",slug:"/form-recognizer-studio/label-data",permalink:"/azure-doc-intelligence-dynamic-models-patient/form-recognizer-studio/label-data",draft:!1,editUrl:"https://github.com/azure-doc-intelligence-dynamic-models-patient/tree/main/docs/docs/25-form-recognizer-studio/40-label-data.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a project",permalink:"/azure-doc-intelligence-dynamic-models-patient/form-recognizer-studio/create-project"},next:{title:"Train your model",permalink:"/azure-doc-intelligence-dynamic-models-patient/form-recognizer-studio/train-model"}},c={},d=[{value:"Video introduction to labeling forms with Azure AI Document Intelligence",id:"video-introduction-to-labeling-forms-with-azure-ai-document-intelligence",level:2},{value:"Label the new patient registration form",id:"label-the-new-patient-registration-form",level:2}],m={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"label-your-data"},"Label your data"),(0,o.kt)("p",null,"In your project, there are five documents, four of the documents have a green dot to indicate the documents have been analyzed and labeled. The fifth document needs to be analyzed and labeled."),(0,o.kt)("h2",{id:"video-introduction-to-labeling-forms-with-azure-ai-document-intelligence"},"Video introduction to labeling forms with Azure AI Document Intelligence"),(0,o.kt)("p",null,"Watch this YouTube to understand how to label an English language version of a form. Open the video on Youtube to watch in full screen."),(0,o.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/d1QHX47mSDo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"label-the-new-patient-registration-form"},"Label the new patient registration form"),(0,o.kt)("p",null,"The following steps will show you how to label your data."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the document named ",(0,o.kt)("em",{parentName:"p"},"Complete_Me.pdf"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Run layout")," the document will analyze and then open the document for labeling.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The form will be displayed in the document viewer. In the interests of time, most of the fields in the form have already been labeled. You need to label the remaining fields in the form.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select  ",(0,o.kt)("em",{parentName:"p"},"Smith"),", then from the list of labels, select ",(0,o.kt)("strong",{parentName:"p"},"family_name"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("em",{parentName:"p"},"Alex"),", then from the list of labels, select ",(0,o.kt)("strong",{parentName:"p"},"given_names"),"."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can filter the list of labels by typing the label name in the list of labels dropdown. For example, if you type ",(0,o.kt)("inlineCode",{parentName:"p"},"family")," in the list of labels, the ",(0,o.kt)("inlineCode",{parentName:"p"},"family_name")," label will be displayed.")))}p.isMDXComponent=!0}}]);