"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6424],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>u});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},a.apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){return function(r){var n=p(r.components);return t.createElement(e,a({},r,{components:n}))}},p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},v=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?t.createElement(f,c(c({ref:r},s),{},{components:n})):t.createElement(f,c({ref:r},s))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=v;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},14470:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var t=n(87462),o=(n(67294),n(3905));const a={},i="RunInfo",c={unversionedId:"generated/native/providers/RunInfo",id:"generated/native/providers/RunInfo",title:"RunInfo",description:"Provider that signals that a rule is runnable",source:"@site/../docs/generated/native/providers/RunInfo.md",sourceDirName:"generated/native/providers",slug:"/generated/native/providers/RunInfo",permalink:"/docs/generated/native/providers/RunInfo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"PlatformInfo",permalink:"/docs/generated/native/providers/PlatformInfo"},next:{title:"TemplatePlaceholderInfo",permalink:"/docs/generated/native/providers/TemplatePlaceholderInfo"}},l={},s=[{value:"args : <code>&quot;cmd_args&quot;</code>",id:"args--cmd_args",level:2}],u={toc:s};function p(e){let{components:r,...n}=e;return(0,o.mdx)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"runinfo"},"RunInfo"),(0,o.mdx)("p",null,"Provider that signals that a rule is runnable"),(0,o.mdx)("h2",{id:"args--cmd_args"},"args : ",(0,o.mdx)("inlineCode",{parentName:"h2"},'"cmd_args"')),(0,o.mdx)("p",null,"The command to run, stored as CommandLine"))}p.isMDXComponent=!0}}]);