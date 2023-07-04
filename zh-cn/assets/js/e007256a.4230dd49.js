"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7472],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>y});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=s(r),m=a,y=g["".concat(p,".").concat(m)]||g[m]||u[m]||i;return r?t.createElement(y,o(o({ref:n},l),{},{components:r})):t.createElement(y,o({ref:n},l))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[g]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3869:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2,sidebar_label:"Keyring"},o="Keyring",c={unversionedId:"api/keyring",id:"api/keyring",title:"Keyring",description:"Keyring \u4f7f\u4f60\u80fd\u591f\u7ba1\u7406\u4f60\u7684\u5bc6\u94a5\u5bf9\uff08\u8d26\u6237\uff09\uff0c\u4ee5\u6267\u884c\u5404\u79cd\u7684\u64cd\u4f5c\uff0c\u5305\u62ec\u7b7e\u7f72\u3001\u9a8c\u8bc1\u548c\u52a0\u5bc6/\u89e3\u5bc6\u3002\u79c1\u94a5\u6c38\u8fdc\u4e0d\u4f1a\u66b4\u9732\u5728\u5916\u90e8\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/keyring.md",sourceDirName:"api",slug:"/api/keyring",permalink:"/zh-cn/docs/api/keyring",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/keyring.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Keyring"},sidebar:"docs",previous:{title:"\u5f00\u59cb",permalink:"/zh-cn/docs/api/getting-started"},next:{title:"\u8ba1\u7b97 Gas",permalink:"/zh-cn/docs/api/calculate-gas"}},p={},s=[{value:"\u521b\u5efa keyring",id:"\u521b\u5efa-keyring",level:2},{value:"\u9ed8\u8ba4\u8d26\u53f7",id:"\u9ed8\u8ba4\u8d26\u53f7",level:2}],l={toc:s},g="wrapper";function u(e){let{components:n,...r}=e;return(0,a.kt)(g,(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keyring"},"Keyring"),(0,a.kt)("p",null,"Keyring \u4f7f\u4f60\u80fd\u591f\u7ba1\u7406\u4f60\u7684\u5bc6\u94a5\u5bf9\uff08\u8d26\u6237\uff09\uff0c\u4ee5\u6267\u884c\u5404\u79cd\u7684\u64cd\u4f5c\uff0c\u5305\u62ec\u7b7e\u7f72\u3001\u9a8c\u8bc1\u548c\u52a0\u5bc6/\u89e3\u5bc6\u3002\u79c1\u94a5\u6c38\u8fdc\u4e0d\u4f1a\u66b4\u9732\u5728\u5916\u90e8\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa-keyring"},"\u521b\u5efa keyring"),(0,a.kt)("p",null,"\u521b\u5efa\u65b0\u7684 keyring"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { GearKeyring } from '@gear-js/api';\nconst { keyring, json } = await GearKeyring.create('keyringName', 'passphrase');\n")),(0,a.kt)("p",null,"\u4ece JSON \u5f97\u5230 keyring"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const jsonKeyring = fs.readFileSync('path/to/keyring.json').toString();\nconst keyring = GearKeyring.fromJson(jsonKeyring, 'passphrase');\n")),(0,a.kt)("p",null,"keyring \u8f6c\u6362\u4e3a JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const json = GearKeyring.toJson(keyring, 'passphrase');\n")),(0,a.kt)("p",null,"\u4ece seed \u4e2d\u5f97\u5230 keyring"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const seed = '0x496f9222372eca011351630ad276c7d44768a593cecea73685299e06acef8c0a';\nconst keyring = await GearKeyring.fromSeed(seed, 'name');\n")),(0,a.kt)("p",null,"\u4ece\u52a9\u8bb0\u8bcd\u4e2d\u5f97\u5230 keyring"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const mnemonic = 'slim potato consider exchange shiver bitter drop carpet helmet unfair cotton eagle';\nconst keyring = GearKeyring.fromMnemonic(mnemonic, 'name');\n")),(0,a.kt)("p",null,"\u751f\u6210\u52a9\u8bb0\u8bcd \u548c seed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { mnemonic, seed } = GearKeyring.generateMnemonic();\n\n// Getting a seed from mnemonic\nconst { seed } = GearKeyring.generateSeed(mnemonic);\n")),(0,a.kt)("h2",{id:"\u9ed8\u8ba4\u8d26\u53f7"},"\u9ed8\u8ba4\u8d26\u53f7"),(0,a.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5728\u5f00\u53d1\u94fe\u4e0a\uff0cSubstrate \u6709\u8bb8\u591a\u6807\u51c6\u8d26\u6237\u662f\u9884\u5148\u6ce8\u8d44\u7684\u3002\u4e00\u822c\u5728\u5f00\u53d1\u94fe\u4e0a\u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u7ed9\u4f60\u4ecb\u7ecd",(0,a.kt)("inlineCode",{parentName:"p"},"Alice"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Bob"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Charlie"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Dave"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Eve"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Ferdie"),"\u8fd9\u6837\u7684\u89d2\u8272\u3002\u8981\u4ece\u9884\u5148\u5b89\u88c5\u7684\u8d26\u6237\u4e2d\u521b\u5efa Keyring\uff0c\u8bf7\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const keyring = await GearKeyring.fromSuri('//Alice');\n")))}u.isMDXComponent=!0}}]);