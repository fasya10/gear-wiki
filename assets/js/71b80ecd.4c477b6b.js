"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,g=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Dev Net Mode",sidebar_position:5},i="Running Gear node in Dev Net mode",l={unversionedId:"node/dev-net",id:"node/dev-net",title:"Running Gear node in Dev Net mode",description:"Dev net is helpful for the development and debugging of your smart contracts. You can upload your program directly to a local node, send messages to a program and validate the program's logic.",source:"@site/docs/node/dev-net.md",sourceDirName:"node",slug:"/node/dev-net",permalink:"/docs/node/dev-net",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/node/dev-net.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Dev Net Mode",sidebar_position:5},sidebar:"docs",previous:{title:"Backup and Restore",permalink:"/docs/node/backup-restore"},next:{title:"Multi-Node Mode",permalink:"/docs/node/multi-node"}},d={},s=[],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-gear-node-in-dev-net-mode"},"Running Gear node in Dev Net mode"),(0,o.kt)("p",null,"Dev net is helpful for the development and debugging of your smart contracts. You can upload your program directly to a local node, send messages to a program and validate the program's logic."),(0,o.kt)("p",null,"To run the Gear node in a dev net mode:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Compile or download nightly build for your operating system as described in ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/setting-up"},"setting-up"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the node in dev mode (we assume the executable is in ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/bin")," directory):"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gear --dev\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow ",(0,o.kt)("a",{parentName:"p",href:"https://idea.gear-tech.io/"},"https://idea.gear-tech.io/")," and connect to a local dev node. Click network selection via the left top button, choose Development -> Local node, and click the Switch button. Use the Idea portal for sending messages, reading the program's state, etc.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To purge any existing dev chain state, use:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gear purge-chain --dev\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"To start a dev chain with detailed logging, use:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"RUST_LOG=debug RUST_BACKTRACE=1 gear -lruntime=debug --dev\n")))}u.isMDXComponent=!0}}]);