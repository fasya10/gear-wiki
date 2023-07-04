"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"Dutch Auction",sidebar_position:11},i="Dutch auction",c={unversionedId:"examples/dutch-auction",id:"examples/dutch-auction",title:"Dutch auction",description:"Introduction",source:"@site/docs/examples/dutch-auction.md",sourceDirName:"examples",slug:"/examples/dutch-auction",permalink:"/docs/examples/dutch-auction",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/dutch-auction.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"Dutch Auction",sidebar_position:11},sidebar:"docs",previous:{title:"Game of chance",permalink:"/docs/examples/game-of-chance"},next:{title:"Supply chain",permalink:"/docs/examples/supply-chain"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Contract description",id:"contract-description",level:2},{value:"Actions",id:"actions",level:3},{value:"Structures in actions:",id:"structures-in-actions",level:4},{value:"Events",id:"events",level:3},{value:"Consistency of contract states",id:"consistency-of-contract-states",level:2},{value:"Programm metadata and state",id:"programm-metadata-and-state",level:3},{value:"Source code",id:"source-code",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dutch-auction"},"Dutch auction"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"A Dutch auction is one of several types of auctions for buying or selling goods. Most commonly, it means an auction in which the auctioneer begins with a high asking price in the case of selling, and lowers it until some participant accepts the price, or it reaches a predetermined reserve price. A Dutch auction has also been called a clock auction or open-outcry descending-price auction. This type of auction shows the advantage of speed since a sale never requires more than one bid."),(0,o.kt)("p",null,"The auction uses ",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/gnft-721"},"Gear non-fungible tokens (gNFT)")," as tradable goods."),(0,o.kt)("p",null,"The article explains the programming interface, data structure, basic functions and explains their purpose. It can be used as is or modified to suit your own scenarios. Anyone can easily create their own application and run it on the Gear Network. The source code is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dutch-auction"},"GitHub"),"."),(0,o.kt)("h2",{id:"contract-description"},"Contract description"),(0,o.kt)("h3",{id:"actions"},"Actions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Action {\n    Buy,\n    Create(CreateConfig),\n    ForceStop,\n    Reward,\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Buy")," is an action to buy an GNFT token by current price"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Create(CreateConfig)")," is an action to create a new auction if the previous one is over or if it's the first auction in this contract.",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ForceStop")," is an action to force stop an auction if contract owner would prefer to finish it ahead of time")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note how DutchAuction is composed; that allows users to reuse its functionality over and over again.")),(0,o.kt)("h4",{id:"structures-in-actions"},"Structures in actions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct CreateConfig {\n    pub nft_contract_actor_id: ActorId,\n    pub token_owner: ActorId,\n    pub token_id: U256,\n    pub starting_price: u128,\n    pub discount_rate: u128,\n    pub duration: Duration,\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To create a new auction you need to have these fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nft_contract_actor_id")," is a contract address where auctioneers NFT had been minted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"token_owner")," is an address of token owner to send him a reward if someone bought his NFT"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"token_id")," is an id of NFT in its contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"starting_price")," is the price at which the auction starts and starts descending"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"discount_rate")," is the amount by which the price will decrease per millisecond over time"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"duration")," is a property is needed to set the duration of the auction")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Duration {\n    pub days: u64,\n    pub hours: u64,\n    pub minutes: u64,\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"days")," amount of days in period"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hours")," amount of hours in period"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"minutes")," amount of minutes in period")),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Event {\n    AuctionStarted {\n        token_owner: ActorId,\n        price: u128,\n        token_id: U256,\n    },\n    Bought {\n        price: u128,\n    },\n    AuctionStopped {\n        token_owner: ActorId,\n        token_id: U256,\n    },\n    Rewarded {\n        price: u128,\n    },\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AuctionStarted")," is an event that occurs when someone use ",(0,o.kt)("inlineCode",{parentName:"li"},"Create(CreateConfig)")," successfully"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AuctionStoped")," is an event that occurs when contract owner forcibly ends the auction")),(0,o.kt)("h2",{id:"consistency-of-contract-states"},"Consistency of contract states"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Dutch auction")," contract interacts with the ",(0,o.kt)("inlineCode",{parentName:"p"},"non-fungible")," token contract. Each transaction that changes the states of Dutch Auction and the non-fungible token is stored in the state until it is completed. User can complete a pending transaction by sending a message exactly the same as the previous one with indicating the transaction id. The idempotency of the non-fungible token contract allows to restart a transaction without duplicate changes which guarantees the state consistency of these 2 contracts."),(0,o.kt)("h3",{id:"programm-metadata-and-state"},"Programm metadata and state"),(0,o.kt)("p",null,"Metadata interface description:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct AuctionMetadata;\n\nimpl Metadata for AuctionMetadata {\n    type Init = ();\n    type Handle = InOut<Action, Event>;\n    type Others = ();\n    type Reply = ();\n    type Signal = ();\n    type State = AuctionInfo;\n}\n")),(0,o.kt)("p",null,"To display the full contract state information, the ",(0,o.kt)("inlineCode",{parentName:"p"},"state()")," function is used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\nextern "C" fn state() {\n    reply(common_state()).expect(\n        "Failed to encode or reply with `<AuctionMetadata as Metadata>::State` from `state()`",\n    );\n}\n')),(0,o.kt)("p",null,"To display only necessary certain values from the state, you need to write a separate crate. In this crate, specify functions that will return the desired values from the ",(0,o.kt)("inlineCode",{parentName:"p"},"AuctionInfo")," state. For example - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dutch-auction/tree/master/state"},"gear-dapps/dutch-auction/state"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[metawasm]\npub mod metafns {\n    pub type State = <AuctionMetadata as Metadata>::State;\n\n    pub fn info(mut state: State) -> AuctionInfo {\n        if matches!(state.status, Status::IsRunning) && exec::block_timestamp() >= state.expires_at\n        {\n            state.status = Status::Expired\n        }\n        state\n    }\n}\n")),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("p",null,"The source code of this example of Dutch Auction smart contract and the example of an implementation of its testing is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dutch-auction"},"gear-dapps/dutch-auction"),"."),(0,o.kt)("p",null,"See also an example of the smart contract testing implementation based on ",(0,o.kt)("inlineCode",{parentName:"p"},"gtest"),": ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dutch-auction/tree/master/tests"},"gear-dapps/dutch-auction/tree/master/tests"),"."),(0,o.kt)("p",null,"For more details about testing smart contracts written on Gear, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/developing-contracts/testing"},"Program Testing")," article."))}d.isMDXComponent=!0}}]);