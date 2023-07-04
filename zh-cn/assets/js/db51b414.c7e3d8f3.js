"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:6,sidebar_label:"\u72b6\u6001\u8f6c\u79fb"},o="\u72b6\u6001\u8f6c\u79fb",i={unversionedId:"gear/technology/state-transition",id:"gear/technology/state-transition",title:"\u72b6\u6001\u8f6c\u79fb",description:"\u6bcf\u4e2a\u7cfb\u7edf\u90fd\u9075\u5faa\u7cfb\u7edf\u72b6\u6001\u6f14\u53d8\u6240\u4f9d\u636e\u7684\u89c4\u5219\u3002\u5f53\u7f51\u7edc\u5904\u7406\u65b0\u7684\u8f93\u5165\u6570\u636e\u65f6\uff0c\u72b6\u6001\u4f1a\u6839\u636e\u72b6\u6001\u8f6c\u6362\u89c4\u5219\u524d\u8fdb\u3002\u8fd9\u4e9b\u8f93\u5165\u6570\u636e\u88ab\u6253\u5305\u5728\u88ab\u79f0\u4e3a\u4ea4\u6613 (transactions) \u7684\u7ec6\u7c92\u5ea6\u4fe1\u606f\u4e2d\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/gear/technology/state-transition.md",sourceDirName:"gear/technology",slug:"/gear/technology/state-transition",permalink:"/zh-cn/docs/gear/technology/state-transition",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/gear/technology/state-transition.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"\u72b6\u6001\u8f6c\u79fb"},sidebar:"docs",previous:{title:"Gear \u7f51\u7edc\u72b6\u6001",permalink:"/zh-cn/docs/gear/technology/state"},next:{title:"5 \u5206\u949f\u5feb\u901f\u5165\u95e8",permalink:"/zh-cn/docs/getting-started-in-5-minutes"}},s={},p=[{value:"\u4e0a\u4f20\u7a0b\u5e8f",id:"\u4e0a\u4f20\u7a0b\u5e8f",level:3},{value:"\u4e0a\u4f20\u4ee3\u7801",id:"\u4e0a\u4f20\u4ee3\u7801",level:3},{value:"\u521b\u5efa\u7a0b\u5e8f",id:"\u521b\u5efa\u7a0b\u5e8f",level:3},{value:"\u53d1\u9001\u6d88\u606f",id:"\u53d1\u9001\u6d88\u606f",level:3},{value:"\u53d1\u9001\u56de\u590d\u6d88\u606f",id:"\u53d1\u9001\u56de\u590d\u6d88\u606f",level:3},{value:"\u4ece mailebox \u63d0\u6b3e",id:"\u4ece-mailebox-\u63d0\u6b3e",level:3},{value:"\u53d6\u51fa\u6d88\u606f",id:"\u53d6\u51fa\u6d88\u606f",level:3},{value:"\u8f6c\u8d26\u4ea4\u6613",id:"\u8f6c\u8d26\u4ea4\u6613",level:3},{value:"\u6d88\u606f\u3001\u533a\u5757\u548c\u4e8b\u4ef6\u7684\u751f\u547d\u5468\u671f",id:"\u6d88\u606f\u533a\u5757\u548c\u4e8b\u4ef6\u7684\u751f\u547d\u5468\u671f",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u72b6\u6001\u8f6c\u79fb"},"\u72b6\u6001\u8f6c\u79fb"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u7cfb\u7edf\u90fd\u9075\u5faa\u7cfb\u7edf\u72b6\u6001\u6f14\u53d8\u6240\u4f9d\u636e\u7684\u89c4\u5219\u3002\u5f53\u7f51\u7edc\u5904\u7406\u65b0\u7684\u8f93\u5165\u6570\u636e\u65f6\uff0c\u72b6\u6001\u4f1a\u6839\u636e\u72b6\u6001\u8f6c\u6362\u89c4\u5219\u524d\u8fdb\u3002\u8fd9\u4e9b\u8f93\u5165\u6570\u636e\u88ab\u6253\u5305\u5728\u88ab\u79f0\u4e3a\u4ea4\u6613 (transactions) \u7684\u7ec6\u7c92\u5ea6\u4fe1\u606f\u4e2d\u3002"),(0,a.kt)("p",null,"Gear \u8282\u70b9\u7ef4\u62a4\u548c\u540c\u6b65\u4e00\u4e2a\u4ea4\u6613\u6c60\uff0c\u5176\u4e2d\u5305\u542b\u6240\u6709\u65b0\u4ea4\u6613\u3002\u5f53\u4efb\u4f55\u8282\u70b9\uff08\u65e0\u8bba\u662f\u5426\u4e3a\u9a8c\u8bc1\u8005\uff09\u6536\u5230\u4e00\u4e2a\u4ea4\u6613\u65f6\uff0c\u8be5\u8282\u70b9\u4f1a\u5c06\u8fd9\u4e2a\u4ea4\u4f20\u64ad\u7ed9\u6240\u6709\u8fde\u63a5\u7684\u8282\u70b9\u3002\u5173\u4e8e\u4ea4\u6613\u6c60\u5982\u4f55\u8fd0\u4f5c\u7684\u66f4\u9ad8\u7ea7\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/learn-substrate/tx-pool"},"Substrate \u6587\u6863")," \u3002\u94fe\u63a5\u66ff\u6362\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/concepts/tx-pool/"},"https://docs.substrate.io/v3/concepts/tx-pool/")),(0,a.kt)("p",null,"\u5f53 Gear \u9a8c\u8bc1\u8282\u70b9\u751f\u6210\u65b0\u5757\u65f6\uff0c\u6c60\u4e2d\u7684\u4e00\u4e9b\uff08\u6216\u6240\u6709\uff09\u4ea4\u6613\u5c06\u5408\u5e76\u5230\u4e00\u4e2a\u533a\u5757\u4e2d\uff0c\u7f51\u7edc\u5c06\u901a\u8fc7\u8be5\u5757\u8fdb\u884c\u72b6\u6001\u8f6c\u6362\u3002\u5728\u751f\u6210\u4e0b\u4e00\u4e2a\u5757\u4e4b\u524d\uff0c\u4e0a\u4e00\u4e2a\u5757\u4e2d\u672a\u6253\u5305\u7684\u4ea4\u6613\u5c06\u4fdd\u7559\u5728\u6c60\u5b50\u4e2d\uff0c\u76f4\u5230\u4ea7\u751f\u4e0b\u4e00\u4e2a\u533a\u5757\u3002"),(0,a.kt)("p",null,"Gear \u7f51\u7edc\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u7684\u4ea4\u6613\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u4e0a\u4f20\u7a0b\u5e8f")," - \u7528\u6237\u4e0a\u4f20\u65b0\u7684\u7a0b\u5e8f\uff08\u667a\u80fd\u5408\u7ea6\uff09"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u4e0a\u4f20\u4ee3\u7801")," - \u7528\u6237\u4e0a\u4f20\u4ee3\u7801\uff0c\u4ee5\u4fbf\u4ee5\u540e\u7528\u5b83\u6765\u521b\u5efa\u7a0b\u5e8f"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa\u7a0b\u5e8f")," - \u7a0b\u5e8f\u6216\u7528\u6237\u6839\u636e\u5148\u524d\u4e0a\u4f20\u7684\u4ee3\u7801\u521b\u5efa\u4e00\u4e2a\u7a0b\u5e8f"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u53d1\u9001\u6d88\u606f")," - \u7a0b\u5e8f\u6216\u7528\u6237\u5c06\u6d88\u606f\u653e\u5165\u6d88\u606f\u961f\u5217"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u53d1\u9001\u56de\u590d\u6d88\u606f")," - \u4e0e\u6d88\u606f\u7c7b\u4f3c\uff0c\u4f46\u53ea\u80fd\u4f5c\u4e3a\u5bf9\u6536\u5230\u7684\u4fe1\u606f\u7684\u56de\u590d\u6765\u53d1\u9001"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u4ece mailebox \u63d0\u6b3e")," - \u7528\u6237\u8981\u6c42\u63d0\u8d70\u4e0e\u4ed6\u7684 mailbox \u4e2d\u7684\u4fe1\u606f\u76f8\u5173\u7684\u4f59\u989d"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u53d6\u51fa\u6d88\u606f")," - \u9a8c\u8bc1\u5668\uff08\u533a\u5757\u751f\u4ea7\u8005\uff09\u5bf9\u591a\u4e2a\u4fe1\u606f\u8fdb\u884c\u6392\u961f\uff0c\u8fd0\u884c\u76f8\u5173\u7a0b\u5e8f"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u8f6c\u8d26\u4ea4\u6613")," -  Gear \u5f15\u64ce\u6267\u884c \u7528\u6237\u2014\u7a0b\u5e8f\u2014\u9a8c\u8bc1\u8005 \u4e4b\u95f4\u7684\u8f6c\u8d26\u4ea4\u6613")),(0,a.kt)("p",null,"\u6d88\u606f\u5904\u7406\u5728\u5757\u6784\u5efa/\u5bfc\u5165\u65f6\u7684\u9884\u7559\u7a7a\u95f4\u4e2d\u8fdb\u884c\u3002\u5b83\u4fdd\u8bc1\u6d88\u606f\u5904\u7406\u5c06\u5728\u6bcf\u4e2a\u5757\u4e2d\u6267\u884c\uff0c\u5e76\u4e14\u81f3\u5c11\u4ee5\u5f53\u524d\u5b9e\u4f8b\u8bbe\u7f6e\u786e\u5b9a\u7684\u67d0\u4e2a\u7279\u5b9a\u901f\u7387\u6267\u884c\u3002"),(0,a.kt)("h3",{id:"\u4e0a\u4f20\u7a0b\u5e8f"},"\u4e0a\u4f20\u7a0b\u5e8f"),(0,a.kt)("p",null,"Gear \u7f51\u7edc\u7684\u6307\u5b9a\u673a\u6784 (\u6216\u4efb\u4f55\u516c\u5f00\u5b9e\u73b0\u7684\u7528\u6237) \u53ef\u4ee5\u63d0\u51fa\u4e00\u4e2a\u65b0\u7684\u7a0b\u5e8f\u4fdd\u5b58\u5230\u72b6\u6001\u79cd\u3002\u5bf9\u4e8e\u516c\u5171\u7f51\u7edc\uff0c\u8fd8\u63d0\u4f9b\u4e0e\u7a0b\u5e8f\u76f8\u5173\u7684\u4f59\u989d\u3002\u8fd9\u4e2a\u65b0\u7684\u4f59\u989d\u5c06\u4f1a\u8bbe\u7f6e\u4e3a\u521d\u59cb\u4f59\u989d\uff08\u5b58\u5728\u62b5\u62bc\uff09\u3002"),(0,a.kt)("h3",{id:"\u4e0a\u4f20\u4ee3\u7801"},"\u4e0a\u4f20\u4ee3\u7801"),(0,a.kt)("p",null,"\u65e0\u9700\u521d\u59cb\u5316\u5373\u53ef\u4e0a\u4f20 Wasm \u4ee3\u7801\u3002\u6b64\u4ee3\u7801\u4e0d\u80fd\u4f5c\u4e3a\u7a0b\u5e8f\u6267\u884c\uff0c\u4f46\u5b83\u4f1a\u4fdd\u5b58\u5230\u5b58\u50a8\u4e2d\uff0c\u5e76\u53ef\u7528\u4e8e\u4ece\u4e2d\u521b\u5efa\u65b0\u7a0b\u5e8f\u3002\u7528\u6237\u548c\u7a0b\u5e8f\u90fd\u53ef\u4ee5\u4ece\u4e0a\u4f20\u7684\u4ee3\u7801\u521b\u5efa\u7a0b\u5e8f\u3002"),(0,a.kt)("h3",{id:"\u521b\u5efa\u7a0b\u5e8f"},"\u521b\u5efa\u7a0b\u5e8f"),(0,a.kt)("p",null,"\u7528\u6237\u548c\u7a0b\u5e8f\u90fd\u53ef\u4ee5\u4ece\u4e0a\u4f20\u7684\u4ee3\u7801\u521b\u5efa\u65b0\u7a0b\u5e8f\u3002\u4ee3\u7801\u53ef\u4ee5\u591a\u6b21\u91cd\u7528\u4ee5\u751f\u6210\u591a\u4e2a\u7a0b\u5e8f\u3002"),(0,a.kt)("h3",{id:"\u53d1\u9001\u6d88\u606f"},"\u53d1\u9001\u6d88\u606f"),(0,a.kt)("p",null,"\u7ec8\u7aef\u7528\u6237\u901a\u8fc7\u5411 Gear \u7f51\u7edc\u53d1\u9001\u4fe1\u606f\u4e0e\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002\u53d1\u9001\u5230 Gear \u7f51\u7edc\u7684\u6d88\u606f\u586b\u5145\u5168\u5c40\u6d88\u606f\u961f\u5217\u3002\u8fd9\u4e2a\u961f\u5217\u53ef\u4ee5\u88ab\u770b\u4f5c\u662f\u4e00\u4e2a\u8fd0\u884c\u65f6\u9a71\u52a8\u7684\u4ea4\u6613\u961f\u5217\uff0c\u4f46\u662f\u8981\u4fdd\u8bc1\u5b83\u63a5\u6536\u7684\u4efb\u4f55\u6d88\u606f\u6700\u7ec8\u90fd\u4f1a\u88ab\u5904\u7406\u3002\u5c06\u6d88\u606f\u653e\u5165\u961f\u5217\u4e0d\u662f\u514d\u8d39\u7684\uff0c\u56e0\u6b64\u53ef\u4ee5\u4fdd\u8bc1\u6d88\u606f\u4f1a\u88ab\u53d1\u9001\u3002"),(0,a.kt)("p",null,"\u7a0b\u5e8f\u4e4b\u95f4\u4e5f\u4f1a\u4ea4\u6362\u6d88\u606f\u3002\u63a5\u6536\u5230\u7684\u6d88\u606f\u7684\u7ed3\u679c\u53ef\u4ee5\u662f\u53e6\u4e00\u4e2a\u6d88\u606f (\u56de\u590d)\uff0c\u53d1\u9001\u7ed9\u53e6\u4e00\u4e2a\u7a0b\u5e8f\u6216\u7528\u6237\u6216\u6307\u5b9a\u7684\u884c\u4e3a\uff0c\u7528\u4e8e\u5b83\u63a5\u6536\u5230\u7684\u4e0b\u4e00\u4e2a\u6d88\u606f\u3002\u4e00\u4e2a\u7a0b\u5e8f\u8fd8\u53ef\u4ee5\u53d1\u9001\u4e00\u4e2a\u6d88\u606f\uff0c\u5176\u6267\u884c\u7ed3\u679c\u5c06\u662f\u521b\u5efa\u53e6\u4e00\u4e2a\u7a0b\u5e8f\u3002"),(0,a.kt)("h3",{id:"\u53d1\u9001\u56de\u590d\u6d88\u606f"},"\u53d1\u9001\u56de\u590d\u6d88\u606f"),(0,a.kt)("p",null,"\u56de\u590d\u4e0e\u4e0a\u8ff0\u6d88\u606f\u7c7b\u4f3c\uff0c\u552f\u4e00\u4e0d\u540c\u7684\u662f\uff0c\u56de\u590d\u53ea\u80fd\u4f5c\u4e3a\u5bf9\u6536\u5230\u7684\u6d88\u606f\u7684\u56de\u5e94\u800c\u53d1\u9001\u3002\u7528\u6237\u53ef\u4ee5\u5c06\u56de\u590d\u53d1\u9001\u7ed9\u4ed6\u4eec mailbox \u4e2d\u5305\u542b\u7684\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"\u4ece-mailebox-\u63d0\u6b3e"},"\u4ece mailebox \u63d0\u6b3e"),(0,a.kt)("p",null,"\u5728\u63a5\u6536\u5230\u5177\u6709\u5173\u8054\u7684\u8d44\u4ea7\u7684\u6d88\u606f\u540e\uff0c\u7528\u6237\u5fc5\u987b\u63d0\u53d6\u8d44\u4ea7\uff0c\u624d\u80fd\u5c06\u5176\u4ece\u6d88\u606f\u8f6c\u8d26\u5230\u7528\u6237\u3002\u672a\u8ba4\u9886\u7684\u5c06\u5728\u90ae\u4ef6\u8017\u5c3d gas \u9650\u5236\u540e\u79bb\u5f00 mailbox \u540e\u8fd4\u56de\u7ed9\u53d1\u4ef6\u4eba\u3002"),(0,a.kt)("h3",{id:"\u53d6\u51fa\u6d88\u606f"},"\u53d6\u51fa\u6d88\u606f"),(0,a.kt)("p",null,"\u5f53\u8f6e\u5230\u9a8c\u8bc1\u5668\u751f\u6210\u4e0b\u4e00\u4e2a\u533a\u5757\u65f6\uff0c\u9a8c\u8bc1\u8005\u53ef\u4ee5\u9009\u62e9\u8ba9\u54ea\u4e9b\u6d88\u606f\u51fa\u5217\u3002\u5b83\u4e0d\u9700\u8981\u6bcf\u4e2a\u7279\u5b9a\u7684\u9a8c\u8bc1\u5668\u6765\u7ef4\u62a4\u5b8c\u6574\u5185\u5b58\u72b6\u6001\u3002\u51fa\u961f\u5217\u53ea\u53d1\u751f\u5728\u6bcf\u4e2a\u5757\u7684\u672b\u5c3e\u3002\u5728\u9000\u51fa\u961f\u5217\u671f\u95f4\uff0c\u53ef\u4ee5\u751f\u6210\u65b0\u7684\u6d88\u606f\u3002\u5b83\u4eec\u4e5f\u53ef\u4ee5\u5728\u6b64\u9636\u6bb5\u88ab\u5904\u7406\uff0c\u4f46\u4e5f\u53ef\u4ee5\u7559\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u4e0b\u4e00\u4e2a\u5757 (\u548c\u53e6\u4e00\u4e2a\u9a8c\u8bc1\u5668)\u3002"),(0,a.kt)("h3",{id:"\u8f6c\u8d26\u4ea4\u6613"},"\u8f6c\u8d26\u4ea4\u6613"),(0,a.kt)("p",null,"\u5e38\u89c4\u8f6c\u8d26\u4ea4\u6613\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u3002\u7b2c\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528\u76f8\u5e94\u7684\u5916\u5728\u56e0\u7d20 (\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"transfer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"setBalance"),"\u7b49)\u3002\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u662f\u5c06\u4e00\u4e2a\u7528\u6237\u7684\u4fe1\u606f\u53d1\u9001\u7ed9\u53e6\u4e00\u4e2a\u7528\u6237\uff0c\u5e76\u9644\u9644\u5e26\u76f8\u5173\u7684\u4f59\u989d\u3002"),(0,a.kt)("h3",{id:"\u6d88\u606f\u533a\u5757\u548c\u4e8b\u4ef6\u7684\u751f\u547d\u5468\u671f"},"\u6d88\u606f\u3001\u533a\u5757\u548c\u4e8b\u4ef6\u7684\u751f\u547d\u5468\u671f"),(0,a.kt)("p",null,"\u4e0b\u56fe\u8bf4\u660e\u4e86 Gear \u7684\u5168\u751f\u547d\u5468\u671f\u3002\u6b63\u5982\u9762\u5411\u901a\u4fe1\u9886\u57df\u7684 actor \u6a21\u578b\u6240\u89c4\u5b9a\u7684\uff0c\u9664\u4e86\u6d88\u606f\u53ef\u4ee5\u5171\u4eab\uff0c\u518d\u6ca1\u6709\u4efb\u4f55\u4e1c\u897f\u662f\u53ef\u4ee5\u5171\u4eab\u7684\u4e86\u3002\u4ee5\u201c\u7cfb\u7edf\u201d\u4e3a\u76ee\u7684\u5730\u7684\u6d88\u606f\u6700\u7ec8\u4f1a\u51fa\u73b0\u5728\u4e8b\u4ef6\u65e5\u5fd7\u4e2d\uff0c\u4ee5\u4fbf\u5728\u7528\u6237\u7a7a\u95f4\u8fdb\u884c\u68c0\u67e5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt text",src:n(9938).Z,width:"1400",height:"1400"})))}d.isMDXComponent=!0},9938:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mq-df2e074d5eb9243488edd7b3b907cefa.jpg"}}]);