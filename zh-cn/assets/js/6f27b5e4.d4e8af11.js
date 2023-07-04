"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5836],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_label:"\u94fe\u4e0a NFT",sidebar_position:17},o="\u94fe\u4e0a gNFT \u8d44\u4ea7",l={unversionedId:"examples/onchain-nft",id:"examples/onchain-nft",title:"\u94fe\u4e0a gNFT \u8d44\u4ea7",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/examples/onchain-nft.md",sourceDirName:"examples",slug:"/examples/onchain-nft",permalink:"/zh-cn/docs/examples/onchain-nft",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/onchain-nft.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_label:"\u94fe\u4e0a NFT",sidebar_position:17},sidebar:"docs",previous:{title:"RMRK NFT \u6807\u51c6",permalink:"/zh-cn/docs/examples/rmrk"},next:{title:"\u8d28\u62bc",permalink:"/zh-cn/docs/examples/staking"}},p={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"\u5f00\u53d1\u94fe\u4e0a NFT \u5408\u7ea6",id:"\u5f00\u53d1\u94fe\u4e0a-nft-\u5408\u7ea6",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u94fe\u4e0a-gnft-\u8d44\u4ea7"},"\u94fe\u4e0a gNFT \u8d44\u4ea7"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"NFT \u667a\u80fd\u5408\u7ea6\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u5f53\u4ee3\u5e01\u8d44\u4ea7\u76f4\u63a5\u5b58\u50a8\u5728\u94fe\u4e0a\u7684\u65b9\u6cd5\u3002\u6709\u5173 gNFT \u667a\u80fd\u5408\u7ea6\u690d\u5165\u7684\u7ec6\u8282\uff0c\u8bf7\u9605\u8bfb\uff1a","[gNFT-721]","\uff08/examples/gnft-721\uff09\u3002"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u7ed9\u5b9a\u7684\u4ee3\u5e01 ID \u7684\u6240\u6709\u8005\u5e0c\u671b\u5c06\u5176\u8f6c\u8ba9\u7ed9\u53e6\u4e00\u4e2a\u7528\u6237\u65f6\uff0c\u5f88\u5bb9\u6613\u9a8c\u8bc1\u6240\u6709\u6743\u5e76\u5c06\u4ee3\u5e01\u91cd\u65b0\u5206\u914d\u7ed9\u65b0\u7684\u6240\u6709\u8005\u3002\u5927\u591a\u6570 NFT \u56fe\u50cf\uff08\u6216\u5176\u4ed6\u57fa\u7840\u8d44\u6e90\uff09\u88ab\u5b58\u50a8\u5728\u5176\u4ed6\u5730\u65b9\uff08\u5982 IPFS\uff09\uff0c\u53ea\u6709\u5143\u6570\u636e\u88ab\u5b58\u50a8\u5728\u5408\u540c\u4e2d\u3002\u5143\u6570\u636e\u5305\u62ec\u4e00\u4e2a\u540d\u79f0\u3001\u4e00\u4e2a ID \u548c\u6307\u5411\u5916\u90e8\u8d44\u6e90\u7684\u94fe\u63a5\uff0c\u56fe\u50cf\u5b9e\u9645\u5b58\u50a8\u5728\u90a3\u91cc\u3002"),(0,r.kt)("p",null,"\u4f46\u8fd9\u91cc\u8fd8\u4ecb\u7ecd\u4e86\u53e6\u4e00\u79cd\u65b9\u6cd5\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u5c06 NFT \u5b58\u50a8\u5728\u94fe\u4e0a\uff0c\u800c\u4e0d\u9700\u8981\u4efb\u4f55\u5916\u90e8\u5b58\u50a8\u3002\u8fd9\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5728\u5916\u90e8\u5b58\u50a8\u51fa\u73b0\u95ee\u9898\u65f6\u4e0d\u4f1a\u4e22\u5931 NFT\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5408\u7ea6\u63a5\u53e3\u3001\u6570\u636e\u7ed3\u6784\u3001\u57fa\u672c\u529f\u80fd\u5e76\u89e3\u91ca\u4e86\u5b83\u4eec\u7684\u7528\u9014\u3002\u5b83\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u60c5\u51b5\u8fdb\u884c\u4fee\u6539\u3002\u6e90\u4ee3\u7801\u53ef\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/non-fungible-token/tree/master/on-chain-nft"},"GitHub")," \u67e5\u770b\u3002"),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("p",null,"\u4e3a\u4e86\u6210\u529f\u5b9e\u73b0\u8fd9\u79cd\u65b9\u6cd5\uff0c\u9700\u8981\u505a\u51e0\u4ef6\u4e8b\u3002\u9996\u5148\uff0c\u5f53\u521d\u59cb\u5316\u4e00\u4e2a\u96c6\u5408\u65f6\uff0c\u4eba\u4eec\u5e94\u8be5\u4e3a\u4e00\u4e2a\u96c6\u5408\u63d0\u4f9b\u6240\u6709\u53ef\u80fd\u7684\u56fe\u5c42\u7684\u56fe\u50cf\u3002\u5176\u6b21\uff0c\u5728\u7528\u4e00\u4e2a\u5c0f\u7684\u5143\u6570\u636e\u8fdb\u884c\u94f8\u5e01\u65f6\uff0c\u5e94\u8be5\u63d0\u4f9b\u4e00\u4e2a\u7528\u4e8e\u7279\u5b9a NFT \u7684\u56fe\u5c42\u7ec4\u5408\u3002\u8fd9\u79cd\u65b9\u6cd5\u5728\u521d\u59cb\u5316\u65f6\u4f3c\u4e4e\u76f8\u5f53\u6602\u8d35\uff0c\u4f46\u5728\u94f8\u5e01\u65f6\u5374\u76f8\u5bf9\u4fbf\u5b9c\u3002"),(0,r.kt)("h2",{id:"\u5f00\u53d1\u94fe\u4e0a-nft-\u5408\u7ea6"},"\u5f00\u53d1\u94fe\u4e0a NFT \u5408\u7ea6"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u4e0d\u53ef\u4f2a\u9020\u7684\u4ee3\u5e01\u5408\u7ea6\u5fc5\u987b\u652f\u6301\u7684\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"transfer(to, token_id)")," - \u5141\u8bb8\u4f60\u5c06\u5e26\u6709",(0,r.kt)("em",{parentName:"p"},"token_id"),"\u53f7\u7801\u7684\u4ee4\u724c\u8f6c\u79fb\u5230",(0,r.kt)("em",{parentName:"p"},"to"),"\u8d26\u6237")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"approve(approved_account, token_id)")," - \u5141\u8bb8\u4f60\u5c06\u5904\u7f6e\u4ee3\u5e01\u7684\u6743\u5229\u4ea4\u7ed9\u6307\u5b9a\u7684",(0,r.kt)("em",{parentName:"p"},"approved_account"),"\u3002\u8fd9\u4e2a\u529f\u80fd\u5728\u5e02\u573a\u6216\u62cd\u5356\u4f1a\u4e0a\u5f88\u6709\u7528\uff0c\u56e0\u4e3a\u5f53\u6240\u6709\u8005\u60f3\u51fa\u552e\u4ed6\u7684\u4ee3\u5e01\u65f6\uff0c\u4ed6\u4eec\u53ef\u4ee5\u628a\u5b83\u653e\u5728\u5e02\u573a/\u62cd\u5356\u4f1a\u4e0a\uff0c\u6240\u4ee5\u5408\u540c\u5c06\u80fd\u591f\u5728\u67d0\u4e2a\u65f6\u5019\u628a\u8fd9\u4e2a\u4ee3\u5e01\u53d1\u9001\u7ed9\u65b0\u7684\u6240\u6709\u8005")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"mint(to, token_id, metadata)")," - \u662f\u4e00\u4e2a\u521b\u5efa\u65b0\u4ee4\u724c\u7684\u51fd\u6570\u3002\u5143\u6570\u636e\u53ef\u4ee5\u5305\u62ec\u5173\u4e8e\u4ee4\u724c\u7684\u4efb\u4f55\u4fe1\u606f\uff1a\u5b83\u53ef\u4ee5\u662f\u4e00\u4e2a\u6307\u5411\u7279\u5b9a\u8d44\u6e90\u7684\u94fe\u63a5\uff0c\u4e5f\u53ef\u4ee5\u662f\u5bf9\u4ee4\u724c\u7684\u63cf\u8ff0\uff0c\u7b49\u7b49\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"burn(from, token_id)")," \u7528\u4e8e\u4ece\u5408\u540c\u4e2d\u79fb\u9664\u5e26\u6709\u6240\u8ff0",(0,r.kt)("em",{parentName:"p"},"token_id"),"\u7684\u4ee4\u724c\u3002"))),(0,r.kt)("p",null,"NFT \u5408\u7ea6\u7684\u9ed8\u8ba4\u5b9e\u73b0\u662f\u5728 Gear \u5e93\u4e2d\u63d0\u4f9b\u7684\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/gear-lib/tree/master/src/non_fungible_token"},"gear-lib/non_fungible_token"),"\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u9ed8\u8ba4\u7684\u5b9e\u73b0\uff0c\u8bf7\u5728 ",(0,r.kt)("em",{parentName:"p"},"Cargo.toml")," \u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'gear-lib = { git = "https://github.com/gear-dapps/gear-lib.git" }\ngear-lib-derive = { git = "https://github.com/gear-dapps/gear-lib.git" }\nhashbrown = "0.13.1"\n')),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u4ece\u4fee\u6539\u72b6\u6001\u548c init \u4fe1\u606f\u5f00\u59cb\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use hashbrown::{HashMap, HashSet};\n\n#[derive(Debug, Default, NFTStateKeeper, NFTCore, NFTMetaState)]\npub struct OnChainNFT {\n    #[NFTStateField]\n    pub token: NFTState,\n    pub token_id: TokenId,\n    pub owner: ActorId,\n    pub base_image: String,\n    pub layers: HashMap<LayerId, Vec<String>>,\n    pub nfts: HashMap<TokenId, Vec<ItemId>>,\n    pub nfts_existence: HashSet<String>,\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub struct InitOnChainNFT {\n    pub name: String,\n    pub symbol: String,\n    pub base_uri: String,\n    pub base_image: String,\n    pub layers: Vec<(LayerId, Vec<String>)>,\n    pub royalties: Option<Royalties>,\n}\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u91cd\u5199\u51e0\u4e2a\u51fd\u6570\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"mint"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"burn")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"token_uri"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"burn")," \u4e0e\u4eba\u4eec\u6240\u671f\u671b\u7684\u4e00\u6837\uff0c\u518d\u52a0\u4e0a\u72b6\u6001\u4fee\u6539\u3002(\u4f8b\u5982\uff0c\u5bf9\u7167\u72b6\u6001\u68c0\u67e5\uff0c\u6dfb\u52a0/\u5220\u9664)\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"token_uri")," \u5c06\u8fd4\u56de\u4e00\u4e2a NFT \u7684\u5143\u6570\u636e\uff0c\u4ee5\u53ca\u4e3a\u6307\u5b9a\u7684 NFT \u63d0\u4f9b\u7684\u6240\u6709\u5c42\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum OnChainNFTQuery {\n    TokenURI { token_id: TokenId },\n    Base(NFTQuery),\n}\n\n#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum OnChainNFTAction {\n    Mint {\n        token_metadata: TokenMetadata,\n        description: Vec<ItemId>,\n    },\n    Burn {\n        token_id: TokenId,\n    },\n    Transfer {\n        to: ActorId,\n        token_id: TokenId,\n    },\n    Approve {\n        to: ActorId,\n        token_id: TokenId,\n    },\n    TransferPayout {\n        to: ActorId,\n        token_id: TokenId,\n        amount: u128,\n    },\n}\n\n#[derive(Debug, Encode, Decode, TypeInfo)]\npub struct TokenURI {\n    pub metadata: TokenMetadata,\n    pub content: Vec<String>,\n}\n")),(0,r.kt)("p",null,"\u5728 Gear NFT \u5e93\u4e2d\u4e5f\u5b9a\u4e49\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenMetadata")," \uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, Default, Encode, Decode, Clone, TypeInfo)]\npub struct TokenMetadata {\n    // ex. "CryptoKitty #100"\n    pub name: String,\n    // free-form description\n    pub description: String,\n    // URL to associated media, preferably to decentralized, content-addressed storage\n    pub media: String,\n    // URL to an off-chain JSON file with more info.\n    pub reference: String,\n}\n')),(0,r.kt)("p",null,"\u4e3a\u6211\u4eec\u7684\u65b0\u51fd\u6570\u5b9a\u4e49\u4e00\u4e2a trait\uff0c\u5b83\u5c06\u6269\u5c55\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"NFTCore"),"\u7279\u8d28\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait OnChainNFTCore: NFTCore {\n    fn mint(&mut self, description: Vec<ItemId>, metadata: TokenMetadata);\n    fn burn(&mut self, token_id: TokenId);\n    fn token_uri(&mut self, token_id: TokenId) -> Option<Vec<u8>>;\n}\n")),(0,r.kt)("p",null,"\u5e76\u7f16\u5199\u8be5 trait \u7684\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl OnChainNFTCore for OnChainNFT {\n\n    /// Mint an NFT on chain.\n    /// `description` - is the vector of ids ,\n    ///  where each index represents a layer id, and element represents a layer item id.\n    /// `metadata` - is the default metadata provided by gear-lib.\n    fn mint(&mut self, description: Vec<ItemId>, metadata: TokenMetadata) {\n        // precheck if the layers actually exist\n        for (layer_id, layer_item_id) in description.iter().enumerate() {\n            if layer_id > self.layers.len() {\n                panic!("No such layer");\n            }\n            if *layer_item_id > self.layers.get(&(layer_id as u128)).expect("No such layer").len() as u128 {\n                panic!("No such item");\n            }\n        }\n\n        // also check if description has all layers provided\n        if description.len() != self.layers.len() {\n            panic!("The number of layers must be equal to the number of layers in the contract");\n        }\n\n        // precheck if there is already an nft with such description\n        let key = description\n            .clone()\n            .into_iter()\n            .map(|i| i.to_string())\n            .collect::<String>();\n        if self.nfts_existence.contains(&key) {\n            panic!("Such nft already exists");\n        }\n        self.nfts_existence.insert(key);\n        NFTCore::mint(self, &msg::source(), self.token_id, Some(metadata));\n        self.nfts.insert(self.token_id, description);\n        self.token_id = self.token_id.saturating_add(U256::one());\n    }\n\n    /// Burns an NFT.\n    /// `token_id` - is the id of a token. MUST exist.\n    fn burn(&mut self, token_id: TokenId) {\n        NFTCore::burn(self, token_id);\n        let key = self\n            .nfts\n            .get(&token_id)\n            .expect("No such token")\n            .iter()\n            .map(|i| i.to_string())\n            .collect::<String>();\n        self.nfts.remove(&token_id);\n        self.nfts_existence.remove(&key);\n    }\n\n    /// Returns token information - metadata and all the content of all the layers for the NFT.\n    /// `token_id` - is the id of a token. MUST exist.\n    fn token_uri(&mut self, token_id: TokenId) -> Option<Vec<u8>> {\n        let mut metadata = TokenMetadata::default();\n        if let Some(Some(mtd)) = self.token.token_metadata_by_id.get(&token_id) {\n            metadata = mtd.clone();\n        }\n        // construct media\n        let mut content: Vec<String> = Vec::new();\n        // check if exists\n        let nft = self.nfts.get(&token_id).expect("No such nft");\n        for (layer_id, layer_item_id) in nft.iter().enumerate() {\n            let layer_content = self\n                .layers\n                .get(&(layer_id as u128))\n                .expect("No such layer")\n                .iter()\n                .nth(*layer_item_id as usize)\n                .expect("No such layer item");\n            content.push(layer_content.clone());\n        }\n        Some(TokenURI { metadata, content }.encode())\n    }\n}\n')),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6709\u5fc5\u8981\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"handle"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"meta_state"),"\u51fd\u6570\u8fdb\u884c\u4fee\u6539\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\nextern "C" fn handle() {\n    let action: OnChainNFTAction = msg::load().expect("Could not load OnChainNFTAction");\n    let nft = unsafe { CONTRACT.get_or_insert(Default::default()) };\n    match action {\n        OnChainNFTAction::Mint {\n            description,\n            token_metadata,\n        } => OnChainNFTCore::mint(nft, description, token_metadata),\n        OnChainNFTAction::Burn { token_id } => OnChainNFTCore::burn(nft, token_id),\n        OnChainNFTAction::Transfer { to, token_id } => NFTCore::transfer(nft, &to, token_id),\n        OnChainNFTAction::TransferPayout {\n            to,\n            token_id,\n            amount,\n        } => NFTCore::transfer_payout(nft, &to, token_id, amount),\n        OnChainNFTAction::Approve { to, token_id } => NFTCore::approve(nft, &to, token_id),\n    }\n}\n\n#[no_mangle]\nextern "C" fn meta_state() -> *mut [i32; 2] {\n    let query: OnChainNFTQuery = msg::load().expect("failed to decode input argument");\n    let nft = unsafe { CONTRACT.get_or_insert(Default::default()) };\n    match query {\n        OnChainNFTQuery::TokenURI { token_id } => {\n            let encoded = OnChainNFTCore::token_uri(nft, token_id)\n                .expect("Error in reading OnChainNFT contract state");\n            gstd::util::to_leak_ptr(encoded)\n        }\n        OnChainNFTQuery::Base(query) => {\n            let encoded =\n                NFTMetaState::proc_state(nft, query).expect("Error in reading NFT contract state");\n            gstd::util::to_leak_ptr(encoded)\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"Gear \u4e3a gNFT \u534f\u8bae\u7684\u6838\u5fc3\u529f\u80fd\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u91cd\u590d\u4f7f\u7528\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/non-fungible-token/tree/master/nft/src"},"\u5e93"),"\u3002\u901a\u8fc7\u4f7f\u7528\u5bf9\u8c61\u7ec4\u5408\uff0c\u8be5\u5e93\u53ef\u4ee5\u5728\u81ea\u5b9a\u4e49\u7684 NFT \u5408\u7ea6\u5b9e\u73b0\u4e2d\u4f7f\u7528\uff0c\u51cf\u5c11\u53ef\u91cd\u590d\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u672c\u5408\u7ea6\u5b9e\u73b0\u5728 GitHub ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/non-fungible-token/tree/master/on-chain-nft/src"},"on-chain-nft/src"),"\u4e0a\u3002"),(0,r.kt)("p",null,"\u540c\u6837\u53ef\u4ee5\u627e\u5230\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"gtest")," \u5b9e\u73b0\u7684\u667a\u80fd\u5408\u7ea6\u6d4b\u8bd5\u8303\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gtest"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/non-fungible-token/tree/master/on-chain-nft/tests"},"on-chain-nft/tests"),"\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u5728 Gear \u4e0a\u6d4b\u8bd5\u667a\u80fd\u5408\u7ea6\u7684\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003\u8fd9\u7bc7\u6587\u7ae0\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://wiki.gear-tech.io/zh-cn/developing-contracts/testing/"},"\u5e94\u7528\u6d4b\u8bd5"),"\u3002"))}u.isMDXComponent=!0}}]);