"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1613],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,l({},t,{components:n}))}},d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||x[p]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},82992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},o="bxl_actions",i={unversionedId:"generated/bxl/bxl_actions",id:"generated/bxl/bxl_actions",title:"bxl_actions",description:"The bxl action context for creating and running actions.",source:"@site/../docs/generated/bxl/bxl_actions.md",sourceDirName:"generated/bxl",slug:"/generated/bxl/bxl_actions",permalink:"/docs/generated/bxl/bxl_actions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"audit_ctx",permalink:"/docs/generated/bxl/audit_ctx"},next:{title:"bxl_build_result",permalink:"/docs/generated/bxl/bxl_build_result"}},c={},s=[{value:"Members",id:"members",level:3},{value:"action_factory",id:"action_factory",level:2},{value:"Details",id:"details",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"bxl_actions"},"bxl_actions"),(0,a.mdx)("p",null,"The bxl action context for creating and running actions."),(0,a.mdx)("h3",{id:"members"},"Members"),(0,a.mdx)("table",{class:"starlark_table starlark_members_table"},(0,a.mdx)("thead",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"Member"),(0,a.mdx)("th",null,"Description"),(0,a.mdx)("th",null,"Type"))),(0,a.mdx)("tbody",null,(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("p",null,"action_factory")),(0,a.mdx)("td",null,(0,a.mdx)("p",null,"Returns the analysis registry ","[",(0,a.mdx)("inlineCode",{parentName:"p"},"AnalysisRegistry"),"]"," to create and register actions for this bxl function. This will have the same functionality as the actions for rules.")),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'() -> ""\n')))))),(0,a.mdx)("h2",{id:"action_factory"},"action_factory"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def action_factory() -> ""\n')),(0,a.mdx)("p",null,"Returns the analysis registry ","[",(0,a.mdx)("inlineCode",{parentName:"p"},"AnalysisRegistry"),"]"," to create and register actions for this bxl function. This will have the same functionality as the actions for rules."),(0,a.mdx)("h3",{id:"details"},"Details"),(0,a.mdx)("p",null,"Actions created by bxl will not be built by default. Instead, they are marked to be built\nby ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.ensure(artifact)")," on the output module of the ","[",(0,a.mdx)("inlineCode",{parentName:"p"},"BxlContext"),"]",". Only artifacts\nmarked by ensure will be built."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_write_action(ctx):\n    actions = ctx.bxl_actions.action_factory()\n    output = actions.write("my_output", "my_content")\n    ensured = ctx.output.ensure(output)\n    ctx.output.print(ensured)\n')))}d.isMDXComponent=!0}}]);