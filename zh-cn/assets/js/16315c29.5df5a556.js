"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2636],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||p;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<p;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6339:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const p={sidebar_label:"\u524d\u671f\u51c6\u5907",sidebar_position:1},l="Gear \u8303\u4f8b",o={unversionedId:"examples/prerequisites",id:"examples/prerequisites",title:"Gear \u8303\u4f8b",description:"Gear \u63d0\u4f9b\u4e86\u4e00\u7ec4\u4f8b\u5b50\uff0c\u53ef\u4ee5\u7528\u6765\u719f\u6089\u5728 Gear \u4e0a\u7f16\u5199\u7a0b\u5e8f\uff0c\u6216\u8005\u6210\u4e3a\u4f60\u81ea\u5df1\u7684 dApp \u7684\u57fa\u7840\uff1ahttps://github.com/gear-dapps\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/examples/prerequisites.mdx",sourceDirName:"examples",slug:"/examples/prerequisites",permalink:"/zh-cn/docs/examples/prerequisites",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/prerequisites.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\u524d\u671f\u51c6\u5907",sidebar_position:1},sidebar:"docs",previous:{title:"Gear fungible token standard",permalink:"/zh-cn/docs/developing-contracts/token-standards/gft20"},next:{title:"PING-PONG",permalink:"/zh-cn/docs/examples/ping"}},i={},s=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u9996\u5148",id:"\u9996\u5148",level:2},{value:"\u7f16\u8bd1 Rust \u5408\u7ea6",id:"\u7f16\u8bd1-rust-\u5408\u7ea6",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gear-\u8303\u4f8b"},"Gear \u8303\u4f8b"),(0,a.kt)("p",null,"Gear \u63d0\u4f9b\u4e86\u4e00\u7ec4\u4f8b\u5b50\uff0c\u53ef\u4ee5\u7528\u6765\u719f\u6089\u5728 Gear \u4e0a\u7f16\u5199\u7a0b\u5e8f\uff0c\u6216\u8005\u6210\u4e3a\u4f60\u81ea\u5df1\u7684 dApp \u7684\u57fa\u7840\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps"},"https://github.com/gear-dapps"),"\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u7f16\u5199\u81ea\u5df1\u7684\u667a\u80fd\u5408\u7ea6\u6216\u5c1d\u8bd5\u4ece\u793a\u4f8b\u6784\u5efa\u3002\u8ba9\u6211\u4eec\u5f00\u5e72\u5427\uff01"),(0,a.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,a.kt)("p",null,"\u8981\u5f00\u53d1\u4f60\u7684\u7b2c\u4e00\u4e2a Rust \u667a\u80fd\u5408\u7ea6\uff0c\u4f60\u5fc5\u987b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 Rustup:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"wasm target")," \u5230\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"toolchain"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rustup toolchain add nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\n")),(0,a.kt)("h2",{id:"\u9996\u5148"},"\u9996\u5148"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"cargo")," \u6765\u521b\u5efa\u54b1\u4eec\u7684\u9879\u76ee\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new gear-app --lib\n")),(0,a.kt)("p",null,"\u9879\u76ee\u76ee\u5f55\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  \u2514\u2500\u2500 gear-app // \u5408\u7ea6\u76ee\u5f55\n    \u2502\n    \u251c\u2500\u2500 src // \u5408\u7ea6\u6e90\u6587\u4ef6\n    \u2502    \u251c\u2500\u2500 maybe_some_file.rs // \u5408\u7ea6\u76f8\u5173\u7684\u6587\u4ef6\n    \u2502    \u2514\u2500\u2500 lib.rs // \u5408\u7ea6\u4e3b\u6587\u4ef6\n    \u2502\n    \u2514\u2500\u2500 Cargo.toml // \u5408\u7ea6\u914d\u7f6e\u6587\u4ef6\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," \u662f Rust \u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest"),"\uff0c\u5b83\u5305\u542b\u4e86\u6240\u6709\u7f16\u8bd1\u9879\u76ee\u6240\u9700\u7684\u5143\u6570\u636e\u3002\u6309\u7167 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/ping/blob/master/Cargo.toml"},"examples/ping/Cargo.toml")," \u6765\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\u3002\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/getting-started-in-5-minutes"},"5 \u5206\u949f\u5165\u95e8\u6559\u7a0b")," \u4e86\u89e3\u66f4\u591a\u7ec6\u8282\u3002"),(0,a.kt)("h2",{id:"\u7f16\u8bd1-rust-\u5408\u7ea6"},"\u7f16\u8bd1 Rust \u5408\u7ea6"),(0,a.kt)("p",null,"\u54b1\u4eec\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," \u76ee\u5f55\u7f16\u8bd1\u667a\u80fd\u5408\u7ea6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'RUSTFLAGS="-C link-args=--import-memory" cargo +nightly build --release --target=wasm32-unknown-unknown\n')),(0,a.kt)("p",null,"\u54b1\u4eec\u7684\u5e94\u7528\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u5c06\u751f\u6210\u6700\u7ec8\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/gear-app.wasm"),"\u3002"))}m.isMDXComponent=!0}}]);