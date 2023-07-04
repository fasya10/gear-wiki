"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>w});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,w=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(w,l(l({ref:t},u),{},{components:n})):a.createElement(w,l({ref:t},u))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:9},l="Escrow",s={unversionedId:"examples/escrow",id:"examples/escrow",title:"Escrow",description:"img alt",source:"@site/docs/examples/escrow.md",sourceDirName:"examples",slug:"/examples/escrow",permalink:"/docs/examples/escrow",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/escrow.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docs",previous:{title:"DAO",permalink:"/docs/examples/DAO"},next:{title:"Game of chance",permalink:"/docs/examples/game-of-chance"}},i={},c=[{value:"How to run",id:"how-to-run",level:2},{value:"\u2692\ufe0f Build program",id:"\ufe0f-build-program",level:3},{value:"\ud83c\udfd7\ufe0f Upload \u0421ode",id:"\ufe0f-upload-\u0441ode",level:3},{value:"\ud83d\udda5\ufe0f Run UI",id:"\ufe0f-run-ui",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Logic",id:"logic",level:2},{value:"Interface",id:"interface",level:2},{value:"Initialization",id:"initialization",level:3},{value:"Actions",id:"actions",level:3},{value:"Consistency of contract states",id:"consistency-of-contract-states",level:2},{value:"Program metadata and state",id:"program-metadata-and-state",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"escrow"},"Escrow"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:n(7578).Z,width:"3817",height:"1777"})),(0,r.kt)("p",null,"An escrow is a special wallet to which some assets (e.g. money or stocks) are deposited and stored until certain conditions are met. In terms of smart contracts, an escrow is a wallet that is stored on a blockchain and, like a regular escrow, can receive some assets (e.g. a cryptocurrency or fungible tokens (like ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/gft-20"},"Gear fungible tokens - gFT")," in this example)) from one user and, when certain conditions are met, send them to another."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Program source code is avalible on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gear-dapps/escrow"},"Github")),(0,r.kt)("li",{parentName:"ul"},"dApp UI ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gear-dapps/escrow/tree/master/frontend"},"Github"))),(0,r.kt)("h2",{id:"how-to-run"},"How to run"),(0,r.kt)("p",null,"This video demonstrates how to configure and run Escrow application on your own and explains the user interaction workflow: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://youtu.be/CD8j4epEY4E"},"https://youtu.be/CD8j4epEY4E"))),(0,r.kt)("h3",{id:"\ufe0f-build-program"},"\u2692\ufe0f Build program"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get the source code of the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gear-dapps/escrow"},"Escrow smart contract")),(0,r.kt)("li",{parentName:"ul"},"Build contract as described in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gear-dapps/escrow/blob/master/README.md"},"program/README.md"),".")),(0,r.kt)("h3",{id:"\ufe0f-upload-\u0441ode"},"\ud83c\udfd7\ufe0f Upload \u0421ode"),(0,r.kt)("p",null,"This application requires code to create an escrow wallet"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can uploade code using ",(0,r.kt)("a",{parentName:"li",href:"https://idea.gear-tech.io/"},"idea.gear-tech.io"),"."),(0,r.kt)("li",{parentName:"ol"},"In the network selector choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Staging Testnet")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Development")," (in this case, you should have a local node running)"),(0,r.kt)("li",{parentName:"ol"},"Upload code ",(0,r.kt)("inlineCode",{parentName:"li"},"escrow.opt.wasm")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"/target/wasm32-unknown-unknown/release/"))),(0,r.kt)("h3",{id:"\ufe0f-run-ui"},"\ud83d\udda5\ufe0f Run UI"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install packages as described in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gear-dapps/escrow/blob/master/frontend/README.md"},"frontend/README.md")),(0,r.kt)("li",{parentName:"ol"},"Configure .evn file. Specify network address and code ID like in the example below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"REACT_APP_NODE_ADDRESS=wss://node-workshop.gear.rs:443\nREACT_APP_CODE_ADDRESS=0xa31fa55b98adf40b0ad18ccda10a3deb8bbb59655fa10971c8046c7f6f959bb9\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Run app")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn start\n")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This article explains at a superficial level the purpose and logic of this smart contract. The source code of the smart contract example is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/escrow"},"GitHub"),"."),(0,r.kt)("h2",{id:"logic"},"Logic"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any user can create an escrow wallet as a buyer or seller."),(0,r.kt)("li",{parentName:"ul"},"A buyer can make a deposit or confirm a deal and close a wallet."),(0,r.kt)("li",{parentName:"ul"},"A seller can refund tokens from a paid wallet to a buyer."),(0,r.kt)("li",{parentName:"ul"},"Both buyer and seller can cancel a deal and close an unpaid wallet.")),(0,r.kt)("p",null,"One escrow wallet contains info about a ",(0,r.kt)("inlineCode",{parentName:"p"},"buyer"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"seller"),", wallet ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," of tokens that this wallet can store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Wallet {\n    /// A buyer.\n    pub buyer: ActorId,\n    /// A seller.\n    pub seller: ActorId,\n    /// A wallet state.\n    pub state: WalletState,\n    /// An amount of tokens that a wallet can have. **Not** a current amount on\n    /// a wallet balance!\n    pub amount: u128,\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WalletState")," is an enum that stores a current state of a wallet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"enum WalletState {\n    AwaitingDeposit,\n    AwaitingConfirmation,\n    Closed,\n}\n")),(0,r.kt)("h2",{id:"interface"},"Interface"),(0,r.kt)("h3",{id:"initialization"},"Initialization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Initializes an escrow program.\n#[derive(Decode, Encode, TypeInfo)]\npub struct InitEscrow {\n    /// Address of a fungible token program.\n    pub ft_program_id: ActorId,\n}\n")),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// An enum to send the program info about what it should do.\n///\n/// After a successful processing of this enum, the program replies with [`EscrowEvent`].\n#[derive(Clone, Decode, Encode, TypeInfo)]\npub enum EscrowAction {\n    /// Creates one escrow wallet and replies with its ID.\n    ///\n    /// # Requirements\n    /// * [`msg::source()`](gstd::msg::source) must be `buyer` or `seller` for this wallet.\n    /// * `buyer` or `seller` mustn't have the zero address.\n    ///\n    /// On success, returns [`EscrowEvent::Created`].\n    Create {\n        /// A buyer.\n        buyer: ActorId,\n        /// A seller.\n        seller: ActorId,\n        /// An amount of tokens.\n        amount: u128,\n    },\n\n    /// Makes a deposit from a buyer to an escrow wallet\n    /// and changes wallet's [`WalletState`] to [`AwaitingConfirmation`](WalletState::AwaitingConfirmation).\n    ///\n    /// Transfers tokens to an escrow wallet until a deal is confirmed (by [`EscrowAction::Confirm`]) or cancelled ([`EscrowAction::Cancel`]).\n    ///\n    /// # Requirements\n    /// * [`msg::source()`](gstd::msg::source) must be a buyer for this wallet.\n    /// * Wallet mustn't be paid or closed (that is, wallet's [`WalletState`] must be [`AwaitingDeposit`](WalletState::AwaitingDeposit)).\n    ///\n    /// On success, returns [`EscrowEvent::Deposited`].\n    Deposit(\n        /// A wallet ID.\n        WalletId,\n    ),\n\n    /// Confirms a deal by transferring tokens from an escrow wallet\n    /// to a seller and changing wallet's [`WalletState`] to [`Closed`](WalletState::Closed).\n    ///\n    /// Transfers tokens from an escrow wallet to a seller for this wallet.\n    ///\n    /// # Requirements\n    /// * [`msg::source()`](gstd::msg::source) must be a buyer for this wallet.\n    /// * Wallet must be paid and unclosed (that is, wallet's [`WalletState`] must be [`AwaitingDeposit`](WalletState::AwaitingConfirmation)).\n    ///\n    /// On success, returns [`EscrowEvent::Confirmed`].\n    Confirm(\n        /// A wallet ID.\n        WalletId,\n    ),\n\n    /// Refunds tokens from an escrow wallet to a buyer\n    /// and changes wallet's [`WalletState`] back to [`AwaitingDeposit`](WalletState::AwaitingDeposit)\n    /// (that is, a wallet can be reused).\n    ///\n    /// Refunds tokens from an escrow wallet to a buyer for this wallet.\n    ///\n    /// # Requirements\n    /// * [`msg::source()`](gstd::msg::source) must be a seller for this wallet.\n    /// * Wallet must be paid and unclosed (that is, wallet's [`WalletState`] must be [`AwaitingDeposit`](WalletState::AwaitingConfirmation)).\n    ///\n    /// On success, returns [`EscrowEvent::Refunded`].\n    Refund(\n        /// A wallet ID.\n        WalletId,\n    ),\n\n    /// Cancels a deal and closes an escrow wallet by changing its [`WalletState`] to [`Closed`](WalletState::Closed).\n    ///\n    /// # Requirements\n    /// * [`msg::source()`](gstd::msg::source) must be a buyer or seller for this wallet.\n    /// * Wallet mustn't be paid or closed (that is, wallet's [`WalletState`] must be [`AwaitingDeposit`](WalletState::AwaitingDeposit)).\n    ///\n    /// On success, returns [`EscrowEvent::Cancelled`].\n    Cancel(\n        /// A wallet ID.\n        WalletId,\n    ),\n\n    /// Continues the transaction if it fails due to lack of gas\n    /// or due to an error in the token contract.\n    ///\n    /// # Requirements:\n    /// * `transaction_id` should exists in `transactions` table;\n    ///\n    /// When transaction already processed replies with [`EscrowEvent::TransactionProcessed`].\n    Continue(\n        /// Identifier of suspended transaction.\n        u64,\n    ),\n}\n")),(0,r.kt)("h2",{id:"consistency-of-contract-states"},"Consistency of contract states"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Escrow")," contract interacts with the ",(0,r.kt)("inlineCode",{parentName:"p"},"fungible")," token contract. Each transaction that changes the states of Escrow and the fungible token is stored in the state until it is completed. User can complete a pending transaction by sending a message ",(0,r.kt)("inlineCode",{parentName:"p"},"Continue")," indicating the transaction id. The idempotency of the fungible token contract allows to restart a transaction without duplicate changes which guarantees the state consistency of these 2 contracts."),(0,r.kt)("h2",{id:"program-metadata-and-state"},"Program metadata and state"),(0,r.kt)("p",null,"Metadata interface description:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct EscrowMetadata;\n\nimpl Metadata for EscrowMetadata {\n    type Init = In<InitEscrow>;\n    type Handle = InOut<EscrowAction, EscrowEvent>;\n    type Others = ();\n    type Reply = ();\n    type Signal = ();\n    type State = EscrowState;\n}\n")),(0,r.kt)("p",null,"To display the full contract state information, the ",(0,r.kt)("inlineCode",{parentName:"p"},"state()")," function is used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\nextern "C" fn state() {\n    msg::reply(\n        unsafe { ESCROW.clone().expect("Uninitialized escrow state") },\n        0,\n    )\n    .expect("Failed to share state");\n}\n')),(0,r.kt)("p",null,"To display only necessary certain values from the state, you need to write a separate crate. In this crate, specify functions that will return the desired values from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Escrow")," state. For example - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/escrow/tree/master/state"},"gear-dapps/escrow/state"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[metawasm]\npub mod metafns {\n    pub type State = <EscrowMetadata as Metadata>::State;\n\n    pub fn info(state: State, wallet_id: U256) -> Wallet {\n        let (_, wallet) = *state\n            .wallets\n            .iter()\n            .find(|(id, _)| id == &wallet_id)\n            .unwrap_or_else(|| panic!("Wallet with the {wallet_id} ID doesn\'t exist"));\n\n        wallet\n    }\n\n    pub fn created_wallets(state: State) -> Vec<(WalletId, Wallet)> {\n        state\n            .wallets\n            .iter()\n            .map(|(wallet_id, wallet)| (*wallet_id, *wallet))\n            .collect()\n    }\n}\n')))}d.isMDXComponent=!0},7578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/escrow-d2b6bf1bf1f1b227f1b40b35d1c53dad.png"}}]);