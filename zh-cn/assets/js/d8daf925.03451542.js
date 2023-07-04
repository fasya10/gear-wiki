"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"gNFT (ERC-721)",sidebar_position:4},i="Gear \u975e\u540c\u8d28\u5316\u4ee3\u5e01",p={unversionedId:"examples/gnft-721",id:"examples/gnft-721",title:"Gear \u975e\u540c\u8d28\u5316\u4ee3\u5e01",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/examples/gnft-721.md",sourceDirName:"examples",slug:"/examples/gnft-721",permalink:"/zh-cn/docs/examples/gnft-721",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/gnft-721.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"gNFT (ERC-721)",sidebar_position:4},sidebar:"docs",previous:{title:"gFT (ERC-20)",permalink:"/zh-cn/docs/examples/gft-20"},next:{title:"Dynamic NFT",permalink:"/zh-cn/docs/examples/dynamic-nft"}},l={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:3},{value:"\u975e\u540c\u8d28\u5316\u4ee3\u5e01\u5b9e\u73b0",id:"\u975e\u540c\u8d28\u5316\u4ee3\u5e01\u5b9e\u73b0",level:3},{value:"\u5236\u5b9a\u4f60\u7684\u975e\u540c\u8d28\u5316\u4ee3\u5e01\u5408\u7ea6",id:"\u5236\u5b9a\u4f60\u7684\u975e\u540c\u8d28\u5316\u4ee3\u5e01\u5408\u7ea6",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],s={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gear-\u975e\u540c\u8d28\u5316\u4ee3\u5e01"},"Gear \u975e\u540c\u8d28\u5316\u4ee3\u5e01"),(0,r.kt)("h3",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u975e\u540c\u8d28\u5316\u4ee3\u5e01\uff08NFT\uff09\u662f\u533a\u5757\u94fe\u4e0a\u552f\u4e00\u7684\u52a0\u5bc6\u4ee3\u5e01\uff0c\u7528\u4e8e\u8bc1\u660e\u6570\u5b57\u8d44\u4ea7\u7684\u6240\u6709\u6743\uff0c\u5982\u6570\u5b57\u827a\u672f\u6216\u6e38\u620f\u8d44\u4ea7\u3002\u4e0e\u540c\u8d28\u5316\u4ee3\u5e01\u7684\u533a\u522b\u5728\u4e8e\uff0c\u540c\u8d28\u5316\u4ee3\u5e01\u5b58\u50a8\u7684\u662f\u4e00\u4e2a\u503c\uff0c\u800c\u975e\u540c\u8d28\u5316\u4ee3\u5e01\u5b58\u50a8\u7684\u662f\u4e00\u4e2a\u52a0\u5bc6\u8bc1\u4e66\u3002\u5728\u5e95\u5c42\uff0c\u4e00\u4e2a\u975e\u540c\u8d28\u5316\u4ee3\u5e01\u7531\u4e00\u4e2a\u552f\u4e00\u7684\u4ee3\u5e01\u6807\u8bc6\u7b26\u6216\u4ee3\u5e01 ID \u7ec4\u6210\uff0c\u5b83\u88ab\u6620\u5c04\u5230\u4e00\u4e2a\u6240\u6709\u8005\u6807\u8bc6\u7b26\uff0c\u5e76\u5b58\u50a8\u5728\u4e00\u4e2a NFT \u667a\u80fd\u5408\u7ea6\u4e2d\u3002",(0,r.kt)("center",null," ",(0,r.kt)("em",null,(0,r.kt)("strong",null,"token_id"))," \u2192 ",(0,r.kt)("em",null,(0,r.kt)("strong",null,"address"))," ")),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u7ed9\u5b9a\u4ee3\u5e01 ID \u7684\u6240\u6709\u8005\u5e0c\u671b\u5c06\u5176\u8f6c\u8ba9\u7ed9\u53e6\u4e00\u4e2a\u7528\u6237\u65f6\uff0c\u5f88\u5bb9\u6613\u9a8c\u8bc1\u6240\u6709\u6743\u5e76\u5c06\u4ee3\u5e01\u91cd\u65b0\u5206\u914d\u7ed9\u65b0\u7684\u6240\u6709\u8005\u3002"),(0,r.kt)("h3",{id:"\u975e\u540c\u8d28\u5316\u4ee3\u5e01\u5b9e\u73b0"},"\u975e\u540c\u8d28\u5316\u4ee3\u5e01\u5b9e\u73b0"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u975e\u540c\u8d28\u5316\u4ee3\u5e01\u5408\u7ea6\u5fc5\u987b\u652f\u6301\u7684\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"transfer(to, token_id)")," \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5141\u8bb8\u4f60\u5c06\u5e26\u6709 ",(0,r.kt)("em",{parentName:"p"},"token_id")," \u7684\u4ee3\u5e01\u8f6c\u79fb\u5230 ",(0,r.kt)("em",{parentName:"p"},"to")," \u5e10\u6237;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"approve(approved_account, token_id)")," - \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5141\u8bb8\u4f60\u5c06\u5904\u7f6e\u4ee3\u5e01\u7684\u6743\u5229\u4ea4\u7ed9\u6307\u5b9a\u7684",(0,r.kt)("em",{parentName:"p"},"approved_account"),"\u3002\u8fd9\u4e2a\u529f\u80fd\u5728\u5e02\u573a\u6216\u62cd\u5356\u4f1a\u4e0a\u5f88\u6709\u7528\uff0c\u56e0\u4e3a\u5f53\u6240\u6709\u8005\u60f3\u51fa\u552e\u4ed6\u7684\u4ee3\u5e01\u65f6\uff0c\u4ed6\u4eec\u53ef\u4ee5\u628a\u5b83\u653e\u5728\u5e02\u573a/\u62cd\u5356\u4f1a\u4e0a\uff0c\u6240\u4ee5\u5408\u7ea6\u5c06\u80fd\u591f\u5728\u67d0\u4e2a\u65f6\u5019\u628a\u8fd9\u4e2a\u4ee3\u5e01\u53d1\u9001\u7ed9\u65b0\u7684\u6240\u6709\u8005\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"mint(to, token_id, metadata)")," - \u662f\u4e00\u4e2a\u521b\u5efa\u65b0\u4ee3\u5e01\u7684\u51fd\u6570\u3002\u5143\u6570\u636e\u53ef\u4ee5\u5305\u62ec\u5173\u4e8e\u4ee3\u5e01\u7684\u4efb\u4f55\u4fe1\u606f\uff1a\u5b83\u53ef\u4ee5\u662f\u4e00\u4e2a\u6307\u5411\u7279\u5b9a\u8d44\u6e90\u7684\u94fe\u63a5\uff0c\u4e5f\u53ef\u4ee5\u662f\u5bf9\u4ee3\u5e01\u7684\u63cf\u8ff0\uff0c\u7b49\u7b49\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"burn(from, token_id)")," - \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u4e8e\u4ece\u5408\u7ea6\u4e2d\u5220\u9664\u5e26\u6709 ",(0,r.kt)("em",{parentName:"p"},"token_id")," \u7684\u4ee3\u5e01\u3002"))),(0,r.kt)("p",null,"NFT \u5408\u7ea6\u7684\u5b9e\u73b0\u4e3a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/gear-lib/tree/master/src/non_fungible_token"},"gear-contract-libraries/non_fungible_token"),"\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u9ed8\u8ba4\u5b9e\u73b0\u9700\u8981\u5728 ",(0,r.kt)("em",{parentName:"p"},"Cargo.toml")," \u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'gear-lib = { git = "https://github.com/gear-dapps/gear-lib.git" }\ngear-lib-derive = { git = "https://github.com/gear-dapps/gear-lib.git" }\nhashbrown = "0.13.1"\n')),(0,r.kt)("p",null,"non-fungible \u5408\u7ea6\u7684\u5b58\u50a8\u72b6\u6001\u5728\u7ed3\u6784 ",(0,r.kt)("inlineCode",{parentName:"p"},"NFTState")," \u4e2d\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use hashbrown::HashMap;\n\n#[derive(Debug, Default)]\npub struct NFTState {\n    pub name: String,\n    pub symbol: String,\n    pub base_uri: String,\n    pub owner_by_id: HashMap<TokenId, ActorId>,\n    pub token_approvals: HashMap<TokenId, Vec<ActorId>>,\n    pub token_metadata_by_id: HashMap<TokenId, Option<TokenMetadata>>,\n    pub tokens_for_owner: HashMap<ActorId, Vec<TokenId>>,\n    pub royalties: Option<Royalties>,\n}\n")),(0,r.kt)("p",null,"\u8981\u91cd\u590d\u4f7f\u7528\u9ed8\u8ba4\u7ed3\u6784\uff0c\u4f60\u9700\u8981\u6d3e\u751f\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"NFTStateKeeper"),"\uff0c\u5e76\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"#[NFTStateField]")," \u5c5e\u6027\u6807\u8bb0\u76f8\u5e94\u7684\u5b57\u6bb5\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728 NF \u5408\u7ea6\u4e2d\u6dfb\u52a0\u5b57\u6bb5\u3002\u4f8b\u5982\uff0c\u5728\u5408\u7ea6\u4e2d\u6dfb\u52a0\u6240\u6709\u8005\u7684\u5730\u5740\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"token_id"),"\uff0c\u5b83\u5c06\u8ddf\u8e2a\u5f53\u524d\u7684\u4ee3\u5e01\u6570\u91cf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use derive_traits::{NFTStateKeeper, NFTCore, NFTMetaState};\nuse gear_contract_libraries::non_fungible_token::{nft_core::*, state::*, token::*};\n\n#[derive(Debug, Default, NFTStateKeeper, NFTCore, NFTMetaState)]\npub struct NFT {\n    #[NFTStateField]\n    pub token: NFTState,\n    pub token_id: TokenId,\n    pub owner: ActorId,\n    pub transactions: HashMap<H256, NFTEvent>,\n}\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u7ee7\u627f\u9ed8\u8ba4\u7684\u903b\u8f91\u529f\u80fd\uff0c\u4f60\u9700\u8981\u6d3e\u751f\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"NFTCore")," \u3002\u76f8\u5e94\u5730\uff0c\u4e3a\u4e86\u8bfb\u53d6\u5408\u7ea6\u72b6\u6001\uff0c\u4f60\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"NFTMetaState")),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u5199\u4e00\u4e0b NFT \u5408\u7ea6\u7684\u6574\u4f53\u5b9e\u73b0\u3002\u9996\u5148\uff0c\u6211\u4eec\u5b9a\u4e49\u6d88\u606f\uff0c\u5b83\u5c06\u521d\u59cb\u5316\u5408\u7ea6\u548c\u5408\u7ea6\u8981\u5904\u7406\u7684\u6d88\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub struct InitNFT {\n    pub name: String,\n    pub symbol: String,\n    pub base_uri: String,\n}\n\npub enum NFTAction {\n    Mint {\n        to: ActorId,\n        token_id: TokenId,\n    },\n    Burn {\n        token_id: TokenId,\n    },\n    Transfer {\n        to: ActorId,\n        token_id: TokenId,\n    },\n    Approve {\n        to: ActorId,\n        token_id: TokenId,\n    },\n}\n")),(0,r.kt)("p",null,"NFT \u5408\u7ea6\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, Default, NFTStateKeeper, NFTCore, NFTMetaState)]\npub struct NFT {\n    #[NFTStateField]\n    pub token: NFTState,\n    pub token_id: TokenId,\n    pub owner: ActorId,\n    pub transactions: HashMap<H256, NFTEvent>,\n}\n\nstatic mut CONTRACT: Option<NFT> = None;\n\n#[no_mangle]\nextern "C" fn init() {\n    let config: InitNFT = msg::load().expect("Unable to decode InitNFT");\n    let mut nft = NFT::default();\n    nft.token.name = config.name;\n    nft.token.symbol = config.symbol;\n    nft.token.base_uri = config.base_uri;\n    nft.owner = msg::source();\n    unsafe { CONTRACT = Some(nft) };\n}\n\n#[no_mangle]\nextern "C" fn handle() {\n    let action: NFTAction = msg::load().expect("Could not load msg");\n    let nft = unsafe { CONTRACT.get_or_insert(NFT::default()) };\n    match action {\n        NFTAction::Mint { to, token_id } => NFTCore::mint(&to, token_id, None),\n        NFTAction::Burn { token_id } => NFTCore::burn(nft, token_id),\n        NFTAction::Transfer { to, token_id } => NFTCore::transfer(nft, &to, token_id),\n        NFTAction::Approve { to, token_id } => NFTCore::approve(nft, &to, token_id),\n    }\n}\n')),(0,r.kt)("h3",{id:"\u5236\u5b9a\u4f60\u7684\u975e\u540c\u8d28\u5316\u4ee3\u5e01\u5408\u7ea6"},"\u5236\u5b9a\u4f60\u7684\u975e\u540c\u8d28\u5316\u4ee3\u5e01\u5408\u7ea6"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u91cd\u5199\u4e00\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"mint"),"\u51fd\u6570\u7684\u5b9e\u73b0\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," \u51fd\u6570\u4f1a\u4e3a\u53d1\u9001 ",(0,r.kt)("inlineCode",{parentName:"p"},"Mint")," \u6d88\u606f\u7684\u8d26\u6237\u521b\u5efa\u4ee3\u5e01\uff0c\u5e76\u5c06\u5143\u6570\u636e\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum NFTAction {\n    Mint {\n        token_metadata: TokenMetadata,\n        token_id: TokenId,\n    },\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TokenMetadata")," \u540c\u6837\u5b9a\u4e49\u5728 gear NFT library\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, Default, Encode, Decode, Clone, TypeInfo)]\npub struct TokenMetadata {\n    // ex. "CryptoKitty #100"\n    pub name: String,\n    // free-form description\n    pub description: String,\n    // URL to associated media, preferably to decentralized, content-addressed storage\n    pub media: String,\n    // URL to an off-chain JSON file with more info.\n    pub reference: String,\n}\n')),(0,r.kt)("p",null,"\u4e3a\u6211\u4eec\u7684\u65b0\u51fd\u6570\u5b9a\u4e49\u4e00\u4e2a trait\uff0c\u5b83\u5c06\u6269\u5c55\u9ed8\u8ba4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"NFTCore")," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait MyNFTCore: NFTCore {\n    fn mint(&mut self, token_metadata: TokenMetadata);\n}\n")),(0,r.kt)("p",null,"\u5e76\u7f16\u5199\u8be5 trait \u7684\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyNFTCore for NFT {\n    fn mint(&mut self, token_metadata: TokenMetadata) {\n        NFTCore::mint(self, &msg::source(), self.token_id, Some(token_metadata));\n        self.token_id = self.token_id.saturating_add(U256::one());\n    }\n}\n")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6709\u5fc5\u8981\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," \u51fd\u6570\u8fdb\u884c\u4fee\u6539\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\nextern "C" fn handle() {\n    let action: NFTAction = msg::load().expect("Could not load msg");\n    let nft = unsafe { CONTRACT.get_or_insert(Default::default()) };\n    match action {\n        NFTAction::Mint { token_metadata } => MyNFTCore::mint(token_metadata),\n        NFTAction::Burn { token_id } => NFTCore::burn(nft, token_id),\n        NFTAction::Transfer { to, token_id } => NFTCore::transfer(nft, &to, token_id),\n        NFTAction::Approve { to, token_id } => NFTCore::approve(nft, &to, token_id),\n    }\n}\n')),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"Gear \u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u91cd\u590d\u4f7f\u7528\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/non-fungible-token/tree/master/non-fungible-token/src"},"\u5e93"),"\uff0c\u5177\u6709 gNFT \u534f\u8bae\u7684\u6838\u5fc3\u529f\u80fd\u3002\u901a\u8fc7\u4f7f\u7528\u5bf9\u8c61\u7ec4\u5408\uff0c\u8be5\u5e93\u53ef\u4ee5\u5728\u81ea\u5b9a\u4e49\u7684 NFT \u5408\u7ea6\u5b9e\u73b0\u4e2d\u4f7f\u7528\uff0c\u4ee5\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"Gear \u63d0\u4f9b\u7684\u5408\u7ea6\u5b9e\u4f8b\u7684\u6e90\u4ee3\u7801\u53ef\u5728 GitHub \u4e0a\u627e\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/non-fungible-token/tree/master/nft-example/src"},"nft-example/src"),"\u3002"),(0,r.kt)("p",null,"\u4e5f\u8bf7\u770b\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"gtest")," \u7684\u667a\u80fd\u5408\u7ea6\u6d4b\u8bd5\u5b9e\u73b0\u7684\u4f8b\u5b50\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/non-fungible-token/tree/master/nft-example/tests"},"nft-example/tests"),"\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u6d4b\u8bd5\u5728 Gear \u4e0a\u7f16\u5199\u7684\u667a\u80fd\u5408\u7ea6\u7684\u66f4\u591a\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003\u8fd9\u7bc7\u6587\u7ae0 ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/developing-contracts/testing"},"\u7a0b\u5e8f\u6d4b\u8bd5"),"\u3002"))}c.isMDXComponent=!0}}]);