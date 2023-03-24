"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5770],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>i,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){return function(t){var a=m(t.components);return n.createElement(e,l({},t,{components:a}))}},m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=m(a),p=r,c=u["".concat(d,".").concat(p)]||u[p]||x[p]||l;return a?n.createElement(c,o(o({ref:t},i),{},{components:a})):n.createElement(c,o({ref:t},i))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,d=new Array(l);d[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,d[1]=o;for(var i=2;i<l;i++)d[i]=a[i];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},13017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={},d="target_node",o={unversionedId:"generated/bxl/target_node",id:"generated/bxl/target_node",title:"target_node",description:"Members",source:"@site/../docs/generated/bxl/target_node.md",sourceDirName:"generated/bxl",slug:"/generated/bxl/target_node",permalink:"/docs/generated/bxl/target_node",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"sub_target",permalink:"/docs/generated/bxl/sub_target"},next:{title:"target_set",permalink:"/docs/generated/bxl/target_set"}},s={},i=[{value:"Members",id:"members",level:3},{value:"attrs_eager",id:"attrs_eager",level:2},{value:"Details",id:"details",level:3},{value:"attrs_lazy",id:"attrs_lazy",level:2},{value:"Details",id:"details-1",level:3},{value:"get_source",id:"get_source",level:2},{value:"Details",id:"details-2",level:3},{value:"label : <code>&quot;configured_target_label&quot;</code>",id:"label--configured_target_label",level:2},{value:"resolved_attrs_eager",id:"resolved_attrs_eager",level:2},{value:"Details",id:"details-3",level:3},{value:"resolved_attrs_lazy",id:"resolved_attrs_lazy",level:2},{value:"Details",id:"details-4",level:3},{value:"rule_type : <code>str.type</code>",id:"rule_type--strtype",level:2},{value:"sources",id:"sources",level:2},{value:"Details",id:"details-5",level:3}],u={toc:i};function m(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"target_node"},"target_node"),(0,r.mdx)("h3",{id:"members"},"Members"),(0,r.mdx)("table",{class:"starlark_table starlark_members_table"},(0,r.mdx)("thead",null,(0,r.mdx)("tr",null,(0,r.mdx)("th",null,"Member"),(0,r.mdx)("th",null,"Description"),(0,r.mdx)("th",null,"Type"))),(0,r.mdx)("tbody",null,(0,r.mdx)("tr",null,(0,r.mdx)("td",null,(0,r.mdx)("p",null,"attrs_eager")),(0,r.mdx)("td",null,(0,r.mdx)("p",null,"Returns a struct of all the attributes of this target node. The structs fields are the attributes names, and the values are ","[",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkConfiguredValue"),"]",".")),(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'() -> ""\n')))),(0,r.mdx)("tr",null,(0,r.mdx)("td",null,(0,r.mdx)("p",null,"attrs_lazy")),(0,r.mdx)("td",null,(0,r.mdx)("p",null,"Gets a ",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkLazyAttrs")," for getting attrs lazily. Returns a ",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkLazyAttrs")," object that you can call ",(0,r.mdx)("inlineCode",{parentName:"p"},"get()")," on that gets an attr one at a time.")),(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'() -> "lazy_attrs"\n')))),(0,r.mdx)("tr",null,(0,r.mdx)("td",null,(0,r.mdx)("p",null,"get_source")),(0,r.mdx)("td",null,(0,r.mdx)("p",null,"Gets the ",(0,r.mdx)("inlineCode",{parentName:"p"},"SourceArtifact")," that corresponds to the given ",(0,r.mdx)("inlineCode",{parentName:"p"},"path")," given a context. The path should be the project relative path to the file, or an absolute path.")),(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    path: str.type,\n  ctx: "bxl_ctx"\n) -> [None, "artifact"]\n')))),(0,r.mdx)("tr",null,(0,r.mdx)("td",null,(0,r.mdx)("p",null,"label")),(0,r.mdx)("td",null,(0,r.mdx)("p",null,"Gets the configured target label of this target node.")),(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'"configured_target_label"\n')))),(0,r.mdx)("tr",null,(0,r.mdx)("td",null,(0,r.mdx)("p",null,"resolved_attrs_eager")),(0,r.mdx)("td",null,(0,r.mdx)("p",null,"Returns a struct of all the resolved attributes of this target node. The structs fields are the attributes names, and the values are Starlark ",(0,r.mdx)("inlineCode",{parentName:"p"},"[Value]"),".")),(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    ctx: "bxl_ctx"\n) -> ""\n')))),(0,r.mdx)("tr",null,(0,r.mdx)("td",null,(0,r.mdx)("p",null,"resolved_attrs_lazy")),(0,r.mdx)("td",null,(0,r.mdx)("p",null,"Gets a ",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkLazyResolvedAttrs")," for getting resolved attrs lazily. Returns a ",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkLazyResolvedAttrs")," object that you can call ",(0,r.mdx)("inlineCode",{parentName:"p"},"get()")," on that gets a resolved attr one at a time.")),(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    ctx: "bxl_ctx"\n) -> "lazy_resolved_attrs"\n')))),(0,r.mdx)("tr",null,(0,r.mdx)("td",null,(0,r.mdx)("p",null,"rule_type")),(0,r.mdx)("td",null,(0,r.mdx)("p",null,"Gets the targets' corresponding rule's name. This is the fully qualified rule name including the import path.")),(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"str.type\n")))),(0,r.mdx)("tr",null,(0,r.mdx)("td",null,(0,r.mdx)("p",null,"sources")),(0,r.mdx)("td",null,(0,r.mdx)("p",null,"Returns a List of all the sources used by this node.")),(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'() -> ["artifact"]\n')))))),(0,r.mdx)("h2",{id:"attrs_eager"},"attrs_eager"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def attrs_eager() -> ""\n')),(0,r.mdx)("p",null,"Returns a struct of all the attributes of this target node. The structs fields are the attributes names, and the values are ","[",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkConfiguredValue"),"]","."),(0,r.mdx)("h3",{id:"details"},"Details"),(0,r.mdx)("p",null,"If you need to access many or all attrs on the same node, then this is the preferred way. Otherwise,\nusing ",(0,r.mdx)("inlineCode",{parentName:"p"},"attrs_lazy()")," would be a better option for only accessing only a few attrs, although this really\ndepends on what kind of attrs are on the node. Benchmarking performance will give you the best\nindication on which method to use."),(0,r.mdx)("p",null,"You should store the result of this function call for further usage in the code rather than calling\n",(0,r.mdx)("inlineCode",{parentName:"p"},"attrs_eager()")," each time you need to access the attrs."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_attrs_eager(ctx):\n    node = ctx.cquery().owner("cell//path/to/TARGETS")[0]\n    attrs = node.attrs_eager() # cache once\n    ctx.output.print(attrs)\n    # do more stuff with attrs\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"attrs_lazy"},"attrs_lazy"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def attrs_lazy() -> "lazy_attrs"\n')),(0,r.mdx)("p",null,"Gets a ",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkLazyAttrs")," for getting attrs lazily. Returns a ",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkLazyAttrs")," object that you can call ",(0,r.mdx)("inlineCode",{parentName:"p"},"get()")," on that gets an attr one at a time."),(0,r.mdx)("h3",{id:"details-1"},"Details"),(0,r.mdx)("p",null,"If you need to access only few attrs on the same node, then this is the preferred way. Otherwise,\nusing ",(0,r.mdx)("inlineCode",{parentName:"p"},"attrs_eager()")," would be a better option for accessing many or all attrs, although this really\ndepends on what kind of attrs are on the node. Benchmarking performance will give you the best\nindication on which method to use."),(0,r.mdx)("p",null,"You should store the result of this function call for further usage in the code rather than calling\n",(0,r.mdx)("inlineCode",{parentName:"p"},"attrs_lazy()")," each time to get the ",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkLazyAttrs")," object. Note that if the ",(0,r.mdx)("inlineCode",{parentName:"p"},"get()")," is ",(0,r.mdx)("inlineCode",{parentName:"p"},"NoneType"),",\nthen any methods called on ",(0,r.mdx)("inlineCode",{parentName:"p"},"NoneType")," will result in an error."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_attrs_lazy(ctx):\n    node = ctx.cquery().owner("cell//path/to/TARGETS")[0]\n    attrs = node.attrs_lazy() # cache once\n    ctx.output.print(attrs.get("some_attributes").value())\n    ctx.output.print(attrs.get("some_attribute").label)\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"get_source"},"get_source"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def get_source(path: str.type, ctx: "bxl_ctx") -> [None, "artifact"]\n')),(0,r.mdx)("p",null,"Gets the ",(0,r.mdx)("inlineCode",{parentName:"p"},"SourceArtifact")," that corresponds to the given ",(0,r.mdx)("inlineCode",{parentName:"p"},"path")," given a context. The path should be the project relative path to the file, or an absolute path."),(0,r.mdx)("h3",{id:"details-2"},"Details"),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_get_source(ctx):\n    owner = ctx.cquery().owner("project/relative/path/to/file")[0]\n    artifact = owner.sources()[0]\n    ctx.output.print(artifact)\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"label--configured_target_label"},"label : ",(0,r.mdx)("inlineCode",{parentName:"h2"},'"configured_target_label"')),(0,r.mdx)("p",null,"Gets the configured target label of this target node."),(0,r.mdx)("p",null,"Note that you cannot get a non-configured label from a configured target node because the\nconfigured target node is not uniquely identified a non-configured label, only by the configured target label."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_label(ctx):\n    node = ctx.configured_targets("my_cell//bin:the_binary")\n    ctx.output.print(node.label)\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"resolved_attrs_eager"},"resolved_attrs_eager"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def resolved_attrs_eager(ctx: "bxl_ctx") -> ""\n')),(0,r.mdx)("p",null,"Returns a struct of all the resolved attributes of this target node. The structs fields are the attributes names, and the values are Starlark ",(0,r.mdx)("inlineCode",{parentName:"p"},"[Value]"),"."),(0,r.mdx)("h3",{id:"details-3"},"Details"),(0,r.mdx)("p",null,"If you need to access many or all resolved attrs on the same node, then this is the preferred way. Otherwise,\nusing ",(0,r.mdx)("inlineCode",{parentName:"p"},"resolved_attrs_lazy()")," would be a better option for accessing only a few resolved attrs, although this really\ndepends on what kind of resolved attrs are on the node. Benchmarking performance will give you the best\nindication on which method to use."),(0,r.mdx)("p",null,"You should store the result of this function call for further usage in the code rather than calling\n",(0,r.mdx)("inlineCode",{parentName:"p"},"resolved_attrs_eager()")," each time you need all the resolved attrs."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_resolved_attrs_eager(ctx):\n    node = ctx.cquery().owner("cell//path/to/TARGETS")[0]\n    attrs = node.resolved_attrs_eager() # cache once\n    ctx.output.print(attrs)\n    # do more stuff with attrs\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"resolved_attrs_lazy"},"resolved_attrs_lazy"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def resolved_attrs_lazy(ctx: "bxl_ctx") -> "lazy_resolved_attrs"\n')),(0,r.mdx)("p",null,"Gets a ",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkLazyResolvedAttrs")," for getting resolved attrs lazily. Returns a ",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkLazyResolvedAttrs")," object that you can call ",(0,r.mdx)("inlineCode",{parentName:"p"},"get()")," on that gets a resolved attr one at a time."),(0,r.mdx)("h3",{id:"details-4"},"Details"),(0,r.mdx)("p",null,"If you need to access only few resolved attrs on the same node, then this is the preferred way. Otherwise,\nusing ",(0,r.mdx)("inlineCode",{parentName:"p"},"resolved_attrs_eager()")," would be a better option for accessing many or all resolved attrs, although this really\ndepends on what kind of resolved attrs are on the node. Benchmarking performance will give you the best\nindication on which method to use."),(0,r.mdx)("p",null,"You should store the result of this function call for further usage in the code rather than calling\n",(0,r.mdx)("inlineCode",{parentName:"p"},"resolved_attrs_lazy()")," each time to get the ",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkResolvedLazyAttrs")," object. Note that if the ",(0,r.mdx)("inlineCode",{parentName:"p"},"get()")," is ",(0,r.mdx)("inlineCode",{parentName:"p"},"NoneType"),",\nthen any methods called on ",(0,r.mdx)("inlineCode",{parentName:"p"},"NoneType")," will result in an error."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_resolved_attrs_lazy(ctx):\n    node = ctx.cquery().owner("cell//path/to/TARGETS")[0]\n    attrs = node.resolved_attrs_lazy() # cache once\n    ctx.output.print(attrs.get("some_attributes").value())\n    ctx.output.print(attrs.get("some_attribute").label)\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"rule_type--strtype"},"rule_type : ",(0,r.mdx)("inlineCode",{parentName:"h2"},"str.type")),(0,r.mdx)("p",null,"Gets the targets' corresponding rule's name. This is the fully qualified rule name including the import path."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_rule_type(ctx):\n    node = ctx.configured_targets("my_cell//bin:the_binary")\n    ctx.output.print(node.rule_type)\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"sources"},"sources"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def sources() -> ["artifact"]\n')),(0,r.mdx)("p",null,"Returns a List of all the sources used by this node."),(0,r.mdx)("h3",{id:"details-5"},"Details"),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_sources(ctx):\n    node = ctx.configured_targets("my_cell//bin:the_binary")\n    ctx.output.print(node.sources())\n')))}m.isMDXComponent=!0}}]);