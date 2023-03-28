"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3890],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>s,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>u});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=a.createContext({}),u=function(e){return function(n){var t=p(n.components);return a.createElement(e,d({},n,{components:t}))}},p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,d=e.originalType,r=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(t),s=l,c=u["".concat(r,".").concat(s)]||u[s]||x[s]||d;return t?a.createElement(c,o(o({ref:n},m),{},{components:t})):a.createElement(c,o({ref:n},m))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var d=t.length,r=new Array(d);r[0]=h;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var m=2;m<d;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},94679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var a=t(87462),l=(t(67294),t(3905));const d={},r="cmd_args",o={unversionedId:"generated/native/cmd_args",id:"generated/native/cmd_args",title:"cmd_args",description:"The cmdargs type is created by cmdargs() and is consumed by ctx.actions.run. The type is a mutable collection of strings and artifact values. In general, command lines, artifacts, strings, RunInfo and lists thereof can be added to or used to construct a `cmd_args value. All these methods operate mutably on cmd and return that value too.",source:"@site/../docs/generated/native/cmd_args.md",sourceDirName:"generated/native",slug:"/generated/native/cmd_args",permalink:"/docs/generated/native/cmd_args",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"builtins",permalink:"/docs/generated/native/builtins"},next:{title:"ctx.actions",permalink:"/docs/generated/native/ctx.actions"}},i={},m=[{value:"Members",id:"members",level:3},{value:"absolute_prefix",id:"absolute_prefix",level:2},{value:"absolute_suffix",id:"absolute_suffix",level:2},{value:"add",id:"add",level:2},{value:"copy",id:"copy",level:2},{value:"hidden",id:"hidden",level:2},{value:"ignore_artifacts",id:"ignore_artifacts",level:2},{value:"inputs : <code>&quot;command_line_inputs&quot;</code>",id:"inputs--command_line_inputs",level:2},{value:"outputs : <code>[&quot;output_artifact&quot;]</code>",id:"outputs--output_artifact",level:2},{value:"parent",id:"parent",level:2},{value:"Details",id:"details",level:3},{value:"relative_to",id:"relative_to",level:2},{value:"replace_regex",id:"replace_regex",level:2}],u={toc:m};function p(e){let{components:n,...t}=e;return(0,l.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"cmd_args"},"cmd_args"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"cmd_args")," type is created by ",(0,l.mdx)("inlineCode",{parentName:"p"},"cmd_args()")," and is consumed by ",(0,l.mdx)("inlineCode",{parentName:"p"},"ctx.actions.run"),". The type is a mutable collection of strings and ",(0,l.mdx)("inlineCode",{parentName:"p"},"artifact")," values. In general, command lines, artifacts, strings, ",(0,l.mdx)("inlineCode",{parentName:"p"},"RunInfo")," and lists thereof can be added to or used to construct a `",(0,l.mdx)("inlineCode",{parentName:"p"},"cmd_args")," value. All these methods operate mutably on ",(0,l.mdx)("inlineCode",{parentName:"p"},"cmd")," and return that value too."),(0,l.mdx)("h3",{id:"members"},"Members"),(0,l.mdx)("table",{class:"starlark_table starlark_members_table"},(0,l.mdx)("thead",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Member"),(0,l.mdx)("th",null,"Description"),(0,l.mdx)("th",null,"Type"))),(0,l.mdx)("tbody",null,(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"absolute_prefix")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Adds a prefix to the end of every artifact")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    prefix: str.type\n) -> ""\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"absolute_suffix")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Adds a suffix to the front of every artifact")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    suffix: str.type\n) -> ""\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"add")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"A list of arguments to be added to the command line, as per ",(0,l.mdx)("inlineCode",{parentName:"p"},"cmd_args"))),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    *args: UNKNOWN\n) -> ""\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"copy")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Returns a copy of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"cmd_args")," such that any modifications to the original or the returned value will not impact each other")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'() -> "cmd_args"\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"hidden")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Things to add to the command line which do not show up but are added as dependencies")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    *args: UNKNOWN\n) -> ""\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"ignore_artifacts")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Conceptually the opposite of ",(0,l.mdx)("inlineCode",{parentName:"p"},"hidden()"),". It causes none of the arguments of the command line to be added as dependencies. Use this if you need the path to an artifact but not the artifact itself. Note: if you do find yourself needing any of the inputs referenced by this command, you will hit build errors due to missing dependencies.")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'() -> ""\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"inputs")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Collect all the inputs (including hidden) referenced by this command line.")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'"command_line_inputs"\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"outputs")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Collect all the outputs (including hidden) referenced by this command line.")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'["output_artifact"]\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"parent")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"For all the artifacts listed in this ",(0,l.mdx)("inlineCode",{parentName:"p"},"cmd_args"),", use their parent directory.")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    count: int.type = None\n) -> ""\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"relative_to")),(0,l.mdx)("td",null),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    directory: "",\n  parent: int.type = None\n) -> ""\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"replace_regex")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Replaces all parts matching pattern regular expression in each argument with replacement string. Several replacements can be added by multiple replace_regex calls.")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    pattern: str.type,\n  replacement: str.type\n) -> ""\n')))))),(0,l.mdx)("h2",{id:"absolute_prefix"},"absolute_prefix"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def absolute_prefix(prefix: str.type) -> ""\n')),(0,l.mdx)("p",null,"Adds a prefix to the end of every artifact"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"absolute_suffix"},"absolute_suffix"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def absolute_suffix(suffix: str.type) -> ""\n')),(0,l.mdx)("p",null,"Adds a suffix to the front of every artifact"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"add"},"add"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def add(*args: UNKNOWN) -> ""\n')),(0,l.mdx)("p",null,"A list of arguments to be added to the command line, as per ",(0,l.mdx)("inlineCode",{parentName:"p"},"cmd_args")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"copy"},"copy"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def copy() -> "cmd_args"\n')),(0,l.mdx)("p",null,"Returns a copy of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"cmd_args")," such that any modifications to the original or the returned value will not impact each other"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"hidden"},"hidden"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def hidden(*args: UNKNOWN) -> ""\n')),(0,l.mdx)("p",null,"Things to add to the command line which do not show up but are added as dependencies"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"ignore_artifacts"},"ignore_artifacts"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def ignore_artifacts() -> ""\n')),(0,l.mdx)("p",null,"Conceptually the opposite of ",(0,l.mdx)("inlineCode",{parentName:"p"},"hidden()"),". It causes none of the arguments of the command line to be added as dependencies. Use this if you need the path to an artifact but not the artifact itself. Note: if you do find yourself needing any of the inputs referenced by this command, you will hit build errors due to missing dependencies."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"inputs--command_line_inputs"},"inputs : ",(0,l.mdx)("inlineCode",{parentName:"h2"},'"command_line_inputs"')),(0,l.mdx)("p",null,"Collect all the inputs (including hidden) referenced by this command line."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"outputs--output_artifact"},"outputs : ",(0,l.mdx)("inlineCode",{parentName:"h2"},'["output_artifact"]')),(0,l.mdx)("p",null,"Collect all the outputs (including hidden) referenced by this command line."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"parent"},"parent"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def parent(count: int.type = None) -> ""\n')),(0,l.mdx)("p",null,"For all the artifacts listed in this ",(0,l.mdx)("inlineCode",{parentName:"p"},"cmd_args"),", use their parent directory."),(0,l.mdx)("h3",{id:"details"},"Details"),(0,l.mdx)("p",null,"Typically used when the file name is passed one way, and the directory another,\ne.g. ",(0,l.mdx)("inlineCode",{parentName:"p"},'cmd_args(artifact, format="-L{}").parent()'),"."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"relative_to"},"relative_to"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def relative_to(directory: "", parent: int.type = None) -> ""\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"replace_regex"},"replace_regex"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def replace_regex(pattern: str.type, replacement: str.type) -> ""\n')),(0,l.mdx)("p",null,"Replaces all parts matching pattern regular expression in each argument with replacement string. Several replacements can be added by multiple replace_regex calls."))}p.isMDXComponent=!0}}]);