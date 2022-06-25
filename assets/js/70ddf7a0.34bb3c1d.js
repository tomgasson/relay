(self.webpackChunk=self.webpackChunk||[]).push([[6464],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){return function(n){var t=u(n.components);return a.createElement(e,i({},n,{components:t}))}},u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),p=r,h=c["".concat(o,".").concat(p)]||c[p]||m[p]||i;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var a=t(79973),r=t(67294),i=t(73727),o=t(52263),l=t(13919),s=t(10412),d=(0,r.createContext)({collectLink:function(){}}),c=t(44996),u=t(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var n,t,m=e.isNavLink,h=e.to,f=e.href,g=e.activeClassName,v=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,x=(0,a.Z)(e,p),N=(0,o.default)().siteConfig,k=N.trailingSlash,C=N.baseUrl,O=(0,c.useBaseUrlUtils)().withBaseUrl,R=(0,r.useContext)(d),E=h||f,I=(0,l.Z)(E),j=null==E?void 0:E.replace("pathname://",""),T=void 0!==j?(t=j,w&&function(e){return e.startsWith("/")}(t)?O(t):t):void 0;T&&I&&(T=(0,u.applyTrailingSlash)(T,{trailingSlash:k,baseUrl:C}));var M=(0,r.useRef)(!1),D=m?i.OL:i.rU,_=s.default.canUseIntersectionObserver,q=(0,r.useRef)();(0,r.useEffect)((function(){return!_&&I&&null!=T&&window.docusaurus.prefetch(T),function(){_&&q.current&&q.current.disconnect()}}),[q,T,_,I]);var P=null!==(n=null==T?void 0:T.startsWith("#"))&&void 0!==n&&n,U=!T||!I||P;return T&&I&&!P&&!y&&R.collectLink(T),U?r.createElement("a",Object.assign({href:T},E&&!I&&{target:"_blank",rel:"noopener noreferrer"},x)):r.createElement(D,Object.assign({},x,{onMouseEnter:function(){M.current||null==T||(window.docusaurus.preload(T),M.current=!0)},innerRef:function(e){var n,t;_&&e&&I&&(n=e,t=function(){null!=T&&window.docusaurus.prefetch(T)},q.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(q.current.unobserve(n),q.current.disconnect(),t())}))})),q.current.observe(n))},to:T||""},m&&{isActive:v,activeClassName:g}))}},13919:(e,n,t)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,{b:()=>a,Z:()=>r})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>i,default:()=>o});var a=t(52263),r=t(13919);function i(){var e=(0,a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,d=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(l)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return d?e+c:c}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,a=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var r,i=e.split(/[#?]/)[0],o="/"===i||i===a?i:(r=i,t?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,o)}},18780:function(e,n,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var r=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return a(i).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var a=t(36742),r=t(44256),i=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var s=function(){var e=i.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},c=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return i.createElement(l,null,i.createElement(d,null),i.createElement(s,null),i.createElement(c,null))},p=function(){return i.createElement(l,null,i.createElement(s,null),i.createElement(c,null))};const m=function(){return(0,r.fbContent)({internal:i.createElement(u,null),external:i.createElement(p,null)})}},72867:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>d,contentTitle:()=>c,metadata:()=>u,toc:()=>p,default:()=>h});var a=t(74034),r=t(79973),i=(t(67294),t(3905)),o=t(44256),l=t(68629),s=["components"],d={id:"why-null",title:"Why Is My Field Null?",slug:"/debugging/why-null/",description:"Get help figuring out why a given field is unexpectedly null.",keywords:["null","missing","optional","nullthrows"]},c=void 0,u={unversionedId:"debugging/why-null",id:"version-v14.0.0/debugging/why-null",isDocsHomePage:!1,title:"Why Is My Field Null?",description:"Get help figuring out why a given field is unexpectedly null.",source:"@site/versioned_docs/version-v14.0.0/debugging/why-null.md",sourceDirName:"debugging",slug:"/debugging/why-null/",permalink:"/docs/debugging/why-null/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/debugging/why-null.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1656079507,formattedLastUpdatedAt:"6/24/2022",frontMatter:{id:"why-null",title:"Why Is My Field Null?",slug:"/debugging/why-null/",description:"Get help figuring out why a given field is unexpectedly null.",keywords:["null","missing","optional","nullthrows"]},sidebar:"version-v14.0.0/docs",previous:{title:"Debugging Declarative Mutation Directives",permalink:"/docs/debugging/declarative-mutation-directives/"},next:{title:"Thinking in GraphQL",permalink:"/docs/principles-and-architecture/thinking-in-graphql/"}},p=[{value:"Server Returned Null",id:"server-returned-null",children:[],level:2},{value:"Graph Relationship Change",id:"graph-relationship-change",children:[],level:2},{value:"Inconsistent Server Response",id:"inconsistent-server-response",children:[],level:2},{value:"Client-side Deletion or Incomplete Update",id:"client-side-deletion-or-incomplete-update",children:[],level:2}],m={toc:p};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"There are a number of reasons that a field read by Relay can be null and some of them are obscure or unintuitive. When debugging an unexpectedly null value, it can be helpful to understand both the common cases and edge cases that can cause a field to be read as null. This document enumerates the cases that can lead to null or missing values with tips for figuring determining which case you are in."),(0,i.mdx)("h2",{id:"server-returned-null"},"Server Returned Null"),(0,i.mdx)("p",null,"The simplest reason a field might be null is that the server explicitly returned null. This can happen in two cases:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"The server\u2019s field resolver returned an explicit null"),(0,i.mdx)("li",{parentName:"ol"},"The field resolver throws. In this case GraphQL will return null for that field. ",(0,i.mdx)("em",{parentName:"li"},"This is true even if the server resolver\u2019s return type is non-nullable.")," The one exceptions is fields annotated as non-null. In that case server should ",(0,i.mdx)("em",{parentName:"li"},"never")," return null. If an exception is encountered the entire parent object will be nulled out.")),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"At Meta, non-nullable fields are implemented using ",(0,i.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Graphql-for-hack-developers/fields/return-type/#non-nullable-fields"},(0,i.mdx)("inlineCode",{parentName:"a"},"KillsParentOnException")),".")))),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"\ud83d\udd75\ufe0f\u200d\u2640\ufe0f How to tell:")," Inspect the server\u2019s response using Relay Dev tools, or in your browser\u2019s dev tools\u2019s network tab, to see if the field is null."),(0,i.mdx)("h2",{id:"graph-relationship-change"},"Graph Relationship Change"),(0,i.mdx)("p",null,"If a different query/mutation/subscription observes a relationship change in the graph, you may end up trying to read fields off of an object which your query never fetched."),(0,i.mdx)("p",null,"Imagine you have a query that reads your best friend\u2019s name:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query MyQuery {\n  me {\n    best_friend {\n      # id: 1\n      name\n    }\n  }\n}\n")),(0,i.mdx)("p",null,"After you get your query response, ",(0,i.mdx)("em",{parentName:"p"},"who")," your best friend is ",(0,i.mdx)("em",{parentName:"p"},"changes")," on the server. Then a ",(0,i.mdx)("em",{parentName:"p"},"different")," query/mutation/subscription fetches a different set of fields off of ",(0,i.mdx)("inlineCode",{parentName:"p"},"best_friend"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query OtherQuery {\n  me {\n    best_friend {\n      # new id: 2\n      # Note: name is not fetched here\n      age\n    }\n  }\n}\n")),(0,i.mdx)("p",null,"Because the Relay store is normalized, we will update the ",(0,i.mdx)("inlineCode",{parentName:"p"},"me")," record to indicate that ",(0,i.mdx)("inlineCode",{parentName:"p"},"best_friend")," linked field now points to the user with ID 2, and the only information we know about that user is their age."),(0,i.mdx)("p",null,"This will trigger a rerender of ",(0,i.mdx)("inlineCode",{parentName:"p"},"MyQuery"),". However, when we try to read the ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," field off of the user with ID 2, we won\u2019t find it, since the only thing we know about the user with ID 2 is their ",(0,i.mdx)("inlineCode",{parentName:"p"},"age"),". Note that a relationship \u201cchange\u201d in this case, could also mean a relationship that is new. For example, if you start with no best friend but a subsequent response returns ",(0,i.mdx)("em",{parentName:"p"},"some")," best friend, but does not fetch all fields your component needs."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note"),": In theory, Relay ",(0,i.mdx)("em",{parentName:"p"},"could")," refetch your query when this state is encountered, but some queries are not safe to re-issue arbitrarily, and more generally, UI state changing in a way that\u2019s not tied to a direct user action can lead to confusion. For this reason, we have chosen not to perform refetches in this scenario."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"\ud83d\udd75\ufe0f\u200d\u2640\ufe0f How to tell:")," You can place a breakpoint/",(0,i.mdx)("inlineCode",{parentName:"p"},"console.log")," at the finale return statement of ",(0,i.mdx)("inlineCode",{parentName:"p"},"readWithIdentifier")," in ",(0,i.mdx)("inlineCode",{parentName:"p"},"FragmentResource")," (",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/blob/2b9876fcbf0845cd23728d4d720712525ff424c4/packages/react-relay/relay-hooks/FragmentResource.js#L475"},"code pointer"),". This is the point in Relay at which we know that we are missing data, but there is not query in flight to get it."),(0,i.mdx)("h2",{id:"inconsistent-server-response"},"Inconsistent Server Response"),(0,i.mdx)("p",null,"This is a ",(0,i.mdx)("strong",{parentName:"p"},"rare edge case"),", ",(0,i.mdx)("em",{parentName:"p"},"but")," if the server does not correctly implement the ",(0,i.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/global-object-identification/#field-stability"},"field stability")," semantics of the id field, it\u2019s possible that a field could be present in one part of the response, but ",(0,i.mdx)("em",{parentName:"p"},"explicitly null")," in another."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  me {\n    id: 1\n    name: "Alice"\n  }\n  me_elsewhere_in_the_graph {\n    id: 1 # Note this is the same as the `me` field above...\n    name: null\n  }\n}\n')),(0,i.mdx)("p",null,"In this case, Relay first learns that user 1\u2019s ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," is Alice, but later in the query finds that user 1\u2019s ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," has now ",(0,i.mdx)("inlineCode",{parentName:"p"},"null"),". Because Relay stores data in a normalized store, user 1 can only have one value for ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," and Relay will end in a state where user 1\u2019s ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," is ",(0,i.mdx)("inlineCode",{parentName:"p"},"null"),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"\ud83d\udd75\ufe0f\u200d\u2640\ufe0f How to tell:")," Relay is smart enough to detect when this has happened, and will ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/blob/2b9876fcbf0845cd23728d4d720712525ff424c4/packages/relay-runtime/store/RelayResponseNormalizer.js#L505"},"log an error to the console"),' in dev that looks like: \u201cRelayResponseNormalizer: Invalid record. The record contains two instances of the same id: 1 with conflicting field, name and its values: Alice and null.". Additionally, you can manually inspect the query response.'),(0,i.mdx)("p",null,"Note that if the unstable field is a linked field (edge to another object), this type of bug can cause a Graph Relationship Change (described above) to occur ",(0,i.mdx)("em",{parentName:"p"},"within a single response"),". For example, if a user with the same ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," appears in two places in the response, but their ",(0,i.mdx)("inlineCode",{parentName:"p"},"best_friend")," is different in those two locations."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"\ud83d\udd75\ufe0f\u200d\u2640\ufe0f How to tell:")," Relay is also smart enough to detect this case, and will show a ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/blob/2b9876fcbf0845cd23728d4d720712525ff424c4/packages/relay-runtime/store/RelayResponseNormalizer.js#L844"},"similar console warning")," in dev."),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Because these errors existing in the code base and can cause noisy console outout, these warnings are ",(0,i.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/code/www/%5B5b26a6bd37e8%5D/html/shared/core/WarningFilter.js?lines=559"},"disabled")," in dev mode.")))),(0,i.mdx)("h2",{id:"client-side-deletion-or-incomplete-update"},"Client-side Deletion or Incomplete Update"),(0,i.mdx)("p",null,"Imperative store updates, or optimistic updates could have deleted the record or field. If an imperative store update, or optimistic update, writes a new record to the store, it may not supply a value for a field which you expected to be able to read. This is a fundamental problem, since an updater cannot statically know all the data that might be accessed off of a new object."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"\ud83d\udd75\ufe0f\u200d\u2640\ufe0f How to tell:")," Due to React and Relay\u2019s batching, it\u2019s not always possible to associate a component update with the store update that triggered it. Here, your best bet is to set a breakpoint in your component for when your value is null, and then use the Relay Dev Tools to look at the last few updates."),(0,i.mdx)("p",null,"This can happen due to a newly created object which did not supply a specific field or, as mentioned above, an update which causes a new or changed relationship in the graph. In this case, use the \u201cHow do tell\u201d tip from that section."),(0,i.mdx)(l.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);