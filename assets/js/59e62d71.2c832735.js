"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4713],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>s});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){return function(n){var t=m(n.components);return a.createElement(e,r({},n,{components:t}))}},m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},x=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(t),c=l,u=s["".concat(o,".").concat(c)]||s[c]||_[c]||r;return t?a.createElement(u,d(d({ref:n},p),{},{components:t})):a.createElement(u,d({ref:n},p))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=x;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d[u]="string"==typeof e?e:l,o[1]=d;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}x.displayName="MDXCreateElement"},79789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var a=t(87462),l=(t(67294),t(3905));const r={},o="build",d={unversionedId:"generated/native/build",id:"generated/native/build",title:"build",description:"CommandExecutorConfig",source:"@site/../docs/generated/native/build.md",sourceDirName:"generated/native",slug:"/generated/native/build",permalink:"/docs/generated/native/build",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Artifact",permalink:"/docs/generated/native/Artifact"},next:{title:"builtins",permalink:"/docs/generated/native/builtins"}},i={},p=[{value:"CommandExecutorConfig",id:"commandexecutorconfig",level:2},{value:"cmd_args",id:"cmd_args",level:2},{value:"dedupe",id:"dedupe",level:2},{value:"get_base_path",id:"get_base_path",level:2},{value:"get_cell_name",id:"get_cell_name",level:2},{value:"glob",id:"glob",level:2},{value:"host_info",id:"host_info",level:2},{value:"implicit_package_symbol",id:"implicit_package_symbol",level:2},{value:"load_symbols",id:"load_symbols",level:2},{value:"oncall",id:"oncall",level:2},{value:"package",id:"package",level:2},{value:"package_name",id:"package_name",level:2},{value:"provider",id:"provider",level:2},{value:"read_config",id:"read_config",level:2},{value:"read_package_value",id:"read_package_value",level:2},{value:"Details",id:"details",level:3},{value:"read_root_config",id:"read_root_config",level:2},{value:"regex_match",id:"regex_match",level:2},{value:"repository_name",id:"repository_name",level:2},{value:"rule",id:"rule",level:2},{value:"rule_exists",id:"rule_exists",level:2},{value:"select",id:"select",level:2},{value:"select_equal_internal",id:"select_equal_internal",level:2},{value:"select_map",id:"select_map",level:2},{value:"select_test",id:"select_test",level:2},{value:"sha256",id:"sha256",level:2},{value:"transition",id:"transition",level:2},{value:"transitive_set",id:"transitive_set",level:2},{value:"warning",id:"warning",level:2},{value:"write_package_value",id:"write_package_value",level:2}],s={toc:p};function m(e){let{components:n,...t}=e;return(0,l.mdx)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"build"},"build"),(0,l.mdx)("h2",{id:"commandexecutorconfig"},"CommandExecutorConfig"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def CommandExecutorConfig(\n    local_enabled: bool.type,\n    remote_enabled: bool.type,\n    *,\n    remote_cache_enabled: [None, bool.type] = None,\n    remote_execution_properties: "" = None,\n    remote_execution_action_key: "" = None,\n    remote_execution_max_input_files_mebibytes: [None, int.type] = None,\n    remote_execution_queue_time_threshold_s: [None, int.type] = None,\n    remote_execution_use_case: "" = None,\n    use_limited_hybrid: bool.type = None,\n    allow_limited_hybrid_fallbacks: bool.type = None,\n    allow_hybrid_fallbacks_on_failure: bool.type = None,\n    use_windows_path_separators: bool.type = None,\n    allow_cache_uploads: bool.type = None,\n    max_cache_upload_mebibytes: [None, int.type] = None,\n    experimental_low_pass_filter: bool.type = None,\n    remote_output_paths: [None, str.type] = None\n) -> ""\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cmd_args"},"cmd_args"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def cmd_args(\n    *args: UNKNOWN,\n    delimiter: [None, str.type] = None,\n    format: [None, str.type] = None,\n    prepend: [None, str.type] = None,\n    quote: [None, str.type] = None\n) -> "cmd_args"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"dedupe"},"dedupe"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def dedupe(val: "") -> ""\n')),(0,l.mdx)("p",null,"Remove duplicates in a list. Uses identity of value (pointer), rather than by equality."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"get_base_path"},"get_base_path"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def get_base_path() -> str.type\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"get_cell_name"},"get_cell_name"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def get_cell_name() -> str.type\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"glob"},"glob"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def glob(include: [str.type], *, exclude: [None, [str.type]] = None) -> ""\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"host_info"},"host_info"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def host_info() -> ""\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"implicit_package_symbol"},"implicit_package_symbol"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def implicit_package_symbol(name: str.type, default: [None, ""] = None) -> ""\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"load_symbols"},"load_symbols"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def load_symbols(symbols: {"": ""}) -> None\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"oncall"},"oncall"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def oncall(name: str.type) -> None\n")),(0,l.mdx)("p",null,"Called in a ",(0,l.mdx)("inlineCode",{parentName:"p"},"BUCK")," file to declare the oncall contact details for all the targets defined. Must be called at most once, before any targets have been declared. Errors if called from a ",(0,l.mdx)("inlineCode",{parentName:"p"},".bzl")," file."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"package"},"package"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def package(\n    *,\n    inherit: bool.type = None,\n    visibility: [str.type] = None,\n    within_view: [str.type] = None\n) -> None\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"package_name"},"package_name"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def package_name() -> str.type\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"provider"},"provider"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def provider(doc: str.type = None, fields: [[str.type], {str.type: str.type}]) -> "provider_callable"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"read_config"},"read_config"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def read_config(section: str.type, key: str.type, default: [None, ""] = None) -> ""\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"read_package_value"},"read_package_value"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def read_package_value(key: str.type) -> ""\n')),(0,l.mdx)("p",null,"Read value specified in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"PACKAGE")," file."),(0,l.mdx)("h3",{id:"details"},"Details"),(0,l.mdx)("p",null,"Returns ",(0,l.mdx)("inlineCode",{parentName:"p"},"None")," if value is not set."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"read_root_config"},"read_root_config"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def read_root_config(section: str.type, key: str.type, default: [None, str.type] = None) -> [None, str.type]\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"regex_match"},"regex_match"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def regex_match(regex: str.type, str: str.type) -> bool.type\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"repository_name"},"repository_name"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def repository_name() -> str.type\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"rule"},"rule"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def rule(\n    *,\n    impl: "",\n    attrs: {str.type: "attribute"},\n    cfg: [None, ""] = None,\n    doc: str.type = None,\n    is_configuration_rule: bool.type = None,\n    is_toolchain_rule: bool.type = None\n) -> ""\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"rule_exists"},"rule_exists"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def rule_exists(name: str.type) -> bool.type\n")),(0,l.mdx)("p",null,'This should be called "target exists", not "rule exists" (if this should exist at all).'),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"select"},"select"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def select(d: "") -> "selector"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"select_equal_internal"},"select_equal_internal"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def select_equal_internal(left: "", right: "") -> bool.type\n')),(0,l.mdx)("p",null,"Tests that two selects are equal to each other. For testing use only."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"select_map"},"select_map"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def select_map(d: "", func: "") -> ""\n')),(0,l.mdx)("p",null,"Applies a mapping function to a selector. See ","[StarlarkSelector::select_map]","."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"select_test"},"select_test"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def select_test(d: "", func: "") -> bool.type\n')),(0,l.mdx)("p",null,"Applies a test function to a selector. See ","[StarlarkSelector::select_test]","."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"sha256"},"sha256"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def sha256(val: str.type) -> str.type\n")),(0,l.mdx)("p",null,"Computes a sha256 digest for a string. Returns the hex representation of the digest."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"transition"},"transition"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def transition(\n    *,\n    impl: "",\n    refs: {str.type: str.type},\n    attrs: [None, [str.type]] = None,\n    split: bool.type = None\n) -> "transition"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"transitive_set"},"transitive_set"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def transitive_set(args_projections: [None, {str.type: ""}] = None, json_projections: [None, {str.type: ""}] = None, reductions: [None, {str.type: ""}] = None) -> "transitive_set_definition"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"warning"},"warning"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def warning(x: str.type) -> None\n")),(0,l.mdx)("p",null,"Produce a warning."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"write_package_value"},"write_package_value"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def write_package_value(\n    key: str.type,\n    value: "",\n    *,\n    overwrite: bool.type = None\n) -> None\n')),(0,l.mdx)("p",null,"Set the value to be accessible in the nested ",(0,l.mdx)("inlineCode",{parentName:"p"},"PACKAGE")," files."))}m.isMDXComponent=!0}}]);