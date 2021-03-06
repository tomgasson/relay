(window.webpackJsonp=window.webpackJsonp||[]).push([[803],{1068:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,j=u["".concat(i,".").concat(d)]||u[d]||p[d]||c;return n?a.a.createElement(j,o(o({ref:t},s),{},{components:n})):a.a.createElement(j,o({ref:t},s))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},877:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(1068)),i={id:"classic-api-reference-relay",title:"Relay",original_id:"classic-api-reference-relay"},o={unversionedId:"classic-api-reference-relay",id:"version-classic/classic-api-reference-relay",isDocsHomePage:!1,title:"Relay",description:"Relay is the entry point to the Relay library. If you're using one of the prebuilt packages it's available as a global; if you're using CommonJS modules you can require() it.",source:"@site/versioned_docs/version-classic/Classic-APIReference-Relay.md",slug:"/classic-api-reference-relay",permalink:"/docs/classic/classic-api-reference-relay",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-APIReference-Relay.md",version:"classic",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1615014181,sidebar:"version-classic/docs",previous:{title:"Network Layer",permalink:"/docs/classic/classic-guides-network-layer"},next:{title:"RelayContainer",permalink:"/docs/classic/classic-api-reference-relay-container"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Properties",id:"properties",children:[{value:"DefaultNetworkLayer (static property)",id:"defaultnetworklayer-static-property",children:[]},{value:"Mutation",id:"mutation",children:[]},{value:"QL",id:"ql",children:[]},{value:"PropTypes",id:"proptypes",children:[]},{value:"RootContainer",id:"rootcontainer",children:[]},{value:"Route",id:"route",children:[]},{value:"Store",id:"store",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createContainer (static method)",id:"createcontainer-static-method",children:[]},{value:"injectNetworkLayer (static method)",id:"injectnetworklayer-static-method",children:[]},{value:"injectTaskScheduler (static method)",id:"injecttaskscheduler-static-method",children:[]},{value:"isContainer (static method)",id:"iscontainer-static-method",children:[]}]}],s={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Relay")," is the entry point to the Relay library. If you're using one of the prebuilt packages it's available as a global; if you're using CommonJS modules you can ",Object(c.b)("inlineCode",{parentName:"p"},"require()")," it."),Object(c.b)("blockquote",null,"Note",Object(c.b)("p",null,"The ",Object(c.b)("code",null,"react-relay")," npm module includes ",Object(c.b)("code",null,"react")," as a ",Object(c.b)("em",{parentName:"p"},"peer dependency"),". Your app should specify React as a dependency explicitly.")),Object(c.b)("p",null,"The most-used function is ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#createcontainer-static-method"}),Object(c.b)("inlineCode",{parentName:"a"},"createContainer()"))," which wraps components with data declarations."),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Properties")),Object(c.b)("ul",{className:"apiIndex"},Object(c.b)("li",null,Object(c.b)("a",{href:"classic-guides-network-layer"},Object(c.b)("pre",null,"static DefaultNetworkLayer \u2192"))),Object(c.b)("li",null,Object(c.b)("a",{href:"classic-guides-mutations"},Object(c.b)("pre",null,"static Mutation \u2192"))),Object(c.b)("li",null,Object(c.b)("a",{href:"classic-api-reference-relay-ql"},Object(c.b)("pre",null,"static QL \u2192"))),Object(c.b)("li",null,Object(c.b)("a",{href:"classic-api-reference-relay-proptypes"},Object(c.b)("pre",null,"static PropTypes \u2192"))),Object(c.b)("li",null,Object(c.b)("a",{href:"classic-guides-root-container"},Object(c.b)("pre",null,"static RootContainer \u2192"))),Object(c.b)("li",null,Object(c.b)("a",{href:"classic-guides-routes"},Object(c.b)("pre",null,"static Route \u2192"))),Object(c.b)("li",null,Object(c.b)("a",{href:"classic-api-reference-relay-store"},Object(c.b)("pre",null,"static Store \u2192")))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Methods")),Object(c.b)("ul",{className:"apiIndex"},Object(c.b)("li",null,Object(c.b)("a",{href:"#createcontainer-static-method"},Object(c.b)("pre",null,"static createContainer(Component, ContainerConfig)"),"Creates a Relay Container.")),Object(c.b)("li",null,Object(c.b)("a",{href:"#injectnetworklayer-static-method"},Object(c.b)("pre",null,"static injectNetworkLayer(networkLayer)"),"Customize how queries and mutations are sent to the server.")),Object(c.b)("li",null,Object(c.b)("a",{href:"#injecttaskscheduler-static-method"},Object(c.b)("pre",null,"static injectTaskScheduler(scheduler)"),"Configure when Relay processing occurs.")),Object(c.b)("li",null,Object(c.b)("a",{href:"#iscontainer-static-method"},Object(c.b)("pre",null,"static isContainer(Component)"),"Determine if a given object is a Relay.Container."))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"defaultnetworklayer-static-property"},"DefaultNetworkLayer (static property)"),Object(c.b)("p",null,"See the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-network-layer"}),"Network Layer Guide"),"."),Object(c.b)("h3",{id:"mutation"},"Mutation"),Object(c.b)("p",null,"See the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-mutations"}),"Mutations Guide"),"."),Object(c.b)("h3",{id:"ql"},"QL"),Object(c.b)("p",null,"See the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-api-reference-relay-ql"}),"Relay.QL API reference"),"."),Object(c.b)("h3",{id:"proptypes"},"PropTypes"),Object(c.b)("p",null,"See the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-api-reference-relay-proptypes"}),"PropTypes API reference"),"."),Object(c.b)("h3",{id:"rootcontainer"},"RootContainer"),Object(c.b)("p",null,"See the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-root-container"}),"RootContainer Guide"),"."),Object(c.b)("h3",{id:"route"},"Route"),Object(c.b)("p",null,"See the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-routes"}),"Routes Guide"),"."),Object(c.b)("h3",{id:"store"},"Store"),Object(c.b)("p",null,"See the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-api-reference-relay-store"}),"Store API reference"),"."),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"createcontainer-static-method"},"createContainer (static method)"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\nvar Container = Relay.createContainer(Component, {\n  initialVariables?: Object,\n  prepareVariables?: (variables: Object, route: string) => Object,\n  fragments: {[key: string]: Function}\n});\n\n")),Object(c.b)("p",null,"Creates a new Relay Container - see the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-containers"}),"Container Guide")," for more details and examples."),Object(c.b)("h3",{id:"injectnetworklayer-static-method"},"injectNetworkLayer (static method)"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\nRelay.injectNetworkLayer(networkLayer: {\n  sendMutation: (mutation: RelayMutationRequest) => void;\n  sendQueries: (queries: Array<RelayQueryRequest>) => void;\n  supports: (...options: Array<string>): boolean;\n});\n\n")),Object(c.b)("p",null,"Overrides the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#defaultnetworklayer-static-property"}),"DefaultNetworkLayer"),"."),Object(c.b)("h4",{id:"example"},"Example"),Object(c.b)("p",null,"As an example, we can log each mutation that is sent to the server as follows:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\nvar DefaultNetworkLayer = Relay.DefaultNetworkLayer;\n\nclass MutationLoggingNetworkLayer extends DefaultNetworkLayer {\n  sendMutation(mutation) {\n    // log the response or error (note that `mutation` is a promise)\n    mutation.then(\n      response => console.log(response),\n      error => console.error(error),\n    );\n    // Send the mutation using the default network implementation\n    return super.sendMutation(mutation);\n  }\n};\n\nRelay.injectNetworkLayer(new MutationLoggingNetworkLayer());\n\n")),Object(c.b)("h3",{id:"injecttaskscheduler-static-method"},"injectTaskScheduler (static method)"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\nRelay.injectTaskScheduler(scheduler: Scheduler): void;\n\ntype Scheduler = (task: Function) => void;\n\n")),Object(c.b)("p",null,"Relay wraps its core processing functions inside lightweight tasks, which by default are executed immediately (i.e. synchronously). In order to customize ",Object(c.b)("em",{parentName:"p"},"when")," these tasks are run - for example to avoid interrupting an animation during a touch gesture - applications can provide a custom scheduling function."),Object(c.b)("h4",{id:"examples"},"Examples"),Object(c.b)("p",null,"The default implementation is as follows:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\nRelay.injectTaskScheduler(task => task());\n\n")),Object(c.b)("p",null,"Notice that it immediately executes the next task. Relay manages the order of tasks to ensure a proper order of operations - the scheduler can't skip or reorder tasks, only decide when to execute the next one."),Object(c.b)("p",null,"In React Native, we can schedule Relay processing so as to avoid interrupting touch gestures as follows:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\nvar {InteractionManager} = require('react-native');\n\nRelay.injectTaskScheduler(InteractionManager.runAfterInteractions);\n\n")),Object(c.b)("p",null,"You can read more about ",Object(c.b)("inlineCode",{parentName:"p"},"InteractionManager")," on the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactnative.dev/docs/interactionmanager.html"}),"React Native API docs"),"."),Object(c.b)("h3",{id:"iscontainer-static-method"},"isContainer (static method)"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\nRelay.isContainer(Component: Object): boolean;\n\n")),Object(c.b)("h4",{id:"example-1"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\nvar Component = require('...');\n\nif (Relay.isContainer(Component)) {\n  Component.getFragment('...');\n}\n\n")))}b.isMDXComponent=!0}}]);