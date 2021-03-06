(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{1068:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),d=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=d(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=d(t),u=a,m=b["".concat(i,".").concat(u)]||b[u]||s[u]||o;return t?r.a.createElement(m,c(c({ref:n},p),{},{components:t})):r.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},348:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(1068)),i={id:"api-cheatsheet",title:"API Cheatsheet",original_id:"api-cheatsheet"},c={unversionedId:"api-cheatsheet",id:"version-v9.1.0/api-cheatsheet",isDocsHomePage:!1,title:"API Cheatsheet",description:"A reference for translating between the Relay Classic and Relay Modern APIs.",source:"@site/versioned_docs/version-v9.1.0/Modern-APICheatsheet.md",slug:"/api-cheatsheet",permalink:"/docs/v9.1.0/api-cheatsheet",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-v9.1.0/Modern-APICheatsheet.md",version:"v9.1.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1615014181},l=[{value:"To add a new root for relay components",id:"to-add-a-new-root-for-relay-components",children:[]},{value:"To add a new relay container",id:"to-add-a-new-relay-container",children:[]},{value:"To add a new relay container that has changing data requirements",id:"to-add-a-new-relay-container-that-has-changing-data-requirements",children:[]},{value:"To add a new paginating relay container",id:"to-add-a-new-paginating-relay-container",children:[]},{value:"To update a variable for my component",id:"to-update-a-variable-for-my-component",children:[]},{value:"To paginate through a connection",id:"to-paginate-through-a-connection",children:[]},{value:"To force fetch a component",id:"to-force-fetch-a-component",children:[]},{value:"To commit a mutation",id:"to-commit-a-mutation",children:[]}],p={toc:l};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A reference for translating between the Relay Classic and Relay Modern APIs."),Object(o.b)("h3",{id:"to-add-a-new-root-for-relay-components"},"To add a new root for relay components"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"<RelayRootContainer>")),Object(o.b)("p",null,"Modern: ",Object(o.b)("inlineCode",{parentName:"p"},"<QueryRenderer>")),Object(o.b)("h3",{id:"to-add-a-new-relay-container"},"To add a new relay container"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.createContainer")),Object(o.b)("p",null,"Modern: ",Object(o.b)("inlineCode",{parentName:"p"},"createFragmentContainer")),Object(o.b)("h3",{id:"to-add-a-new-relay-container-that-has-changing-data-requirements"},"To add a new relay container that has changing data requirements"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.createContainer")),Object(o.b)("p",null,"Modern ",Object(o.b)("inlineCode",{parentName:"p"},"createRefetchContainer")),Object(o.b)("h3",{id:"to-add-a-new-paginating-relay-container"},"To add a new paginating relay container"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.createContainer")),Object(o.b)("p",null,"Modern: ",Object(o.b)("inlineCode",{parentName:"p"},"createPaginationContainer")),Object(o.b)("h3",{id:"to-update-a-variable-for-my-component"},"To update a variable for my component"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.setVariable({foo: bar}...)")),Object(o.b)("p",null,"Modern: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.refetch({foo: bar}...")," in a Refetch Container"),Object(o.b)("h3",{id:"to-paginate-through-a-connection"},"To paginate through a connection"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.setVariable({count: prevCount + pageSize}...)")),Object(o.b)("p",null,"Modern ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.loadMore(pageSize...)")," in a Pagination Container"),Object(o.b)("h3",{id:"to-force-fetch-a-component"},"To force fetch a component"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.forceFetch()")),Object(o.b)("p",null,"Modern: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.refetchConnection(...)")," in a Pagination Container"),Object(o.b)("p",null,"or: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.refetch({}, {}, callback, {force: true})")," in a Refetch Container"),Object(o.b)("h3",{id:"to-commit-a-mutation"},"To commit a mutation"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.commitUpdate(mutation...)")),Object(o.b)("p",null,"Modern: ",Object(o.b)("inlineCode",{parentName:"p"},"commitMutation(this.props.relay.environment, {mutation...})")))}d.isMDXComponent=!0}}]);