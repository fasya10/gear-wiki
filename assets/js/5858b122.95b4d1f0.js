"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Decentralized DNS",sidebar_position:24},o="Decentralized DNS",s={unversionedId:"examples/dein",id:"examples/dein",title:"Decentralized DNS",description:"Decentralized Internet (DNS) demonstrates an on-chain server-less approach to web sites and web applications hosting. Unlike server-based DNS built on centralized components and services, decentralized solutions running on the blockchain are characterized by boosted data security, enhanced data reconciliation, minimized system weak points, optimized resource allocation, and demonstrated great fault tolerance. It brings all the benefits of decentralization such as censorship resistance, security resilience, high transparency.",source:"@site/docs/examples/dein.md",sourceDirName:"examples",slug:"/examples/dein",permalink:"/docs/examples/dein",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/dein.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_label:"Decentralized DNS",sidebar_position:24},sidebar:"docs",previous:{title:"Dia Randomness Oracle",permalink:"/docs/examples/oracle/dia-randomness-oracle"},next:{title:"Auto-subscription (VaraTube)",permalink:"/docs/examples/varatube"}},l={},p=[{value:"Connect your dApp to the Decentralized Internet",id:"connect-your-dapp-to-the-decentralized-internet",level:2},{value:"Open and use dApp",id:"open-and-use-dapp",level:2},{value:"Get DNS records",id:"get-dns-records",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decentralized-dns"},"Decentralized DNS"),(0,r.kt)("p",null,"Decentralized Internet (DNS) demonstrates an on-chain server-less approach to web sites and web applications hosting. Unlike server-based DNS built on centralized components and services, decentralized solutions running on the blockchain are characterized by boosted data security, enhanced data reconciliation, minimized system weak points, optimized resource allocation, and demonstrated great fault tolerance. It brings all the benefits of decentralization such as censorship resistance, security resilience, high transparency."),(0,r.kt)("p",null,"Briefly the solution consists of a DNS program that is uploaded on-chain. It lists programs (smart-contracts) that are also uploaded on-chain and registered in DNS contract as DNS records. Hosted programs may have the user interface that resides on IPFS. The DNS program stores program ids and meta info of their interfaces (name, description and link). "),(0,r.kt)("p",null,"The source code of the smart contract and frontend implementation is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/DeIn"},"GitHub"),".\nNote that its repository contains a git submodule, so cloning should be done with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--recurse-submodules")," flag, i.e.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'git clone --recurse-submodules "https://github.com/gear-dapps/DeIn"\n')),(0,r.kt)("h2",{id:"connect-your-dapp-to-the-decentralized-internet"},"Connect your dApp to the Decentralized Internet"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To connect your program to the Decentralized Internet on Gear Network it's necessary to have a variable of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Option<DnsMeta>")," in your program that will contain metadata of the DNS record:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct DnsMeta {\n    pub name: String,\n    pub link: String,\n    pub description: String,\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"One more thing that you need to do is to include the following enum variants:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_input")," type:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetDnsMeta")," - it has to be the first variant of the enum"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SetDnsMeta(DnsMeta)")," - it is needed to setup the dns record"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_output")," type:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DnsMeta(Option<DnsMeta>)")," - it also has to be the first variant of the enum"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After your program has been uploaded on chain you need to build your frontend to a single html file and upload it to IPFS:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Download and install IPFS Desktop - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ipfs/ipfs-desktop"},"https://github.com/ipfs/ipfs-desktop")),(0,r.kt)("li",{parentName:"ol"},"Upload your built web app using 'Files' tab"),(0,r.kt)("li",{parentName:"ol"},"Get file link by pressing option dots button on file and choose 'Share link'"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The next step is to send Metadata to your program using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SetDnsMeta")," enum variant. Where you need to set name, link (that is link to html file on IPFS) and description.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To register your dApp in DNS, you need to send a message to the DNS program. You can do it through ",(0,r.kt)("a",{parentName:"p",href:"https://idea.gear-tech.io/"},"https://idea.gear-tech.io/")," - find the DNS program and send the message ",(0,r.kt)("inlineCode",{parentName:"p"},"Register")," with the id of your program."))),(0,r.kt)("h2",{id:"open-and-use-dapp"},"Open and use dApp"),(0,r.kt)("p",null,"Firstly you need to download the ",(0,r.kt)("inlineCode",{parentName:"p"},"dns.html"),' file from Releases and open it in your browser. If you have your dApp registered in the DNS program you will see it in the list of available dApps. Just click the "Open" button and your interface will be opened in the new tab.'),(0,r.kt)("h2",{id:"get-dns-records"},"Get DNS records"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://idea.gear-tech.io"},"https://idea.gear-tech.io"),", you can read the state of the DNS program to get records - all or filtered by name, id, pattern."))}u.isMDXComponent=!0}}]);