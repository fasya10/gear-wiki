"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Multisig Wallet",sidebar_position:13},r="Multisig Wallet",s={unversionedId:"examples/multisig-wallet",id:"examples/multisig-wallet",title:"Multisig Wallet",description:"Introduction",source:"@site/docs/examples/multisig-wallet.md",sourceDirName:"examples",slug:"/examples/multisig-wallet",permalink:"/docs/examples/multisig-wallet",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/multisig-wallet.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_label:"Multisig Wallet",sidebar_position:13},sidebar:"docs",previous:{title:"Supply chain",permalink:"/docs/examples/supply-chain"},next:{title:"Concert (FT to NFT transition)",permalink:"/docs/examples/concert"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Logic",id:"logic",level:2},{value:"Interface",id:"interface",level:2},{value:"Init Config",id:"init-config",level:3},{value:"Actions",id:"actions",level:3},{value:"Events",id:"events",level:3},{value:"Program metadata and state",id:"program-metadata-and-state",level:3},{value:"Source code",id:"source-code",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multisig-wallet"},"Multisig Wallet"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Multisignature wallets are cryptocurrency wallets that require one or more private keys to sign and send a transaction."),(0,i.kt)("p",null,"Imagine a bank vault that requires more than one key to open: That\u2019s a little how multisignature cryptocurrency wallets work."),(0,i.kt)("p",null,"Multisignature proponents argue that multisignature is the most secure and fail-proof way to store cryptocurrency. Even if a thief gets his hands on one of your wallets, for example, they still won\u2019t be able to access your account without the keys to the other wallets in the setup."),(0,i.kt)("p",null,"This article explains the programming interface, data structure, basic functions and explains their purpose. It can be used as is or modified to suit your own scenarios. Anyone can easily create their own application and run it on the Gear Network. The source code is available on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/multisig-wallet"},"GitHub"),"."),(0,i.kt)("h2",{id:"logic"},"Logic"),(0,i.kt)("p",null,"Wallet is owned by one or more owners, and in order for something significant to take place required count of owners should confirm this action."),(0,i.kt)("p",null,"Deployer of a contract can choose how many owners are allowed to send transaction from the wallet as well as the minimum number of owners needed to send it (e.g., you could have a 2-of-3 multisig where two out of three assigned private keys are needed, 3-of-5, 5-of-7, etc.)."),(0,i.kt)("p",null,"To send a transaction through multisig wallet one of the owners should send transaction to the wallet with a ",(0,i.kt)("inlineCode",{parentName:"p"},"SubmitTransaction")," action in the payload, and other owners should approve this transaction by ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmTransaction")," action until the required amount is reached."),(0,i.kt)("p",null,"In the description of the transaction owner can add some useful information about it."),(0,i.kt)("p",null,"The wallet is flexible and users can manage the list of owners and the number of confirmations required."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Of course, we took care of the security of the contract, so adding an owner, removing an owner, replacing an owner and changing required confirmations count can only be done with required confirmations from other owners.")),(0,i.kt)("p",null,"The transaction approval logic is complex, for example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If the owner submits the transaction and the contract only needs one confirmation to execute the transaction, the contract will firstly add the transaction to the storage, then confirm it by the submitting owner, then execute transaction automatically."),(0,i.kt)("li",{parentName:"ol"},"If the owner submits the transaction and the contract needs two or more confirmations to execute the transaction, the contract will firstly add the transaction to the storage, then confirm it by the submitting owner. And to execute this transaction wallet will steel need one or more confirmations. Then another owner send ",(0,i.kt)("inlineCode",{parentName:"li"},"ConfirmTransaction")," action to the contract and if everything is fine, the transaction will be executed automatically")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In most cases a transaction will execute automatically after all confirmations is done. But there is a corner case, if the transaction was confirmed ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," times, and the contract requires ",(0,i.kt)("inlineCode",{parentName:"p"},"n + 1")," or more confirmations, and then the owners change the required confirmations count to ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," or less, owners can either wait for the next confirmation, or simply call ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteTransaction")," with corresponding transaction ID to execute it")),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("h3",{id:"init-config"},"Init Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct MWInitConfig {\n    pub owners: Vec<ActorId>,\n    pub required: u64,\n}\n")),(0,i.kt)("p",null,"Describes initial state of the wallet."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"owners")," - a list of owners of a new wallet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"required")," - a required confirmations count to approve and execute transaction")),(0,i.kt)("h3",{id:"actions"},"Actions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum MWAction {\n    AddOwner(ActorId),\n    RemoveOwner(ActorId),\n    ReplaceOwner {\n        old_owner: ActorId,\n        new_owner: ActorId,\n    },\n    ChangeRequiredConfirmationsCount(u64),\n    SubmitTransaction {\n        destination: ActorId,\n        data: Vec<u8>,\n        value: u128,\n        description: Option<String>\n    },\n    ConfirmTransaction(U256),\n    RevokeConfirmation(U256),\n    ExecuteTransaction(U256),\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AddOwner")," is an action to add a new owner. Action has to be used through ",(0,i.kt)("inlineCode",{parentName:"li"},"SubmitTransaction"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RemoveOwner")," is an action to remove an owner. Action has to be used through ",(0,i.kt)("inlineCode",{parentName:"li"},"SubmitTransaction"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ReplaceOwner")," is an action to replace an owner with a new owner. Action has to be used through ",(0,i.kt)("inlineCode",{parentName:"li"},"SubmitTransaction"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ChangeRequiredConfirmationsCount")," is an action to change the number of required confirmations. Action has to be used through ",(0,i.kt)("inlineCode",{parentName:"li"},"SubmitTransaction"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SubmitTransaction")," is an action that allows an owner to submit and automatically confirm a transaction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ConfirmTransaction")," is an action that allows an owner to confirm a transaction. If this is the last confirmation, the transaction is automatically executed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RevokeConfirmation")," is an action that allows an owner to revoke a confirmation for a transaction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExecuteTransaction")," is an action that allows anyone to execute a confirmed transaction.")),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum MWEvent {\n    Confirmation {\n        sender: ActorId,\n        transaction_id: U256,\n    },\n    Revocation {\n        sender: ActorId,\n        transaction_id: U256,\n    },\n    Submission {\n        transaction_id: U256,\n    },\n    Execution {\n        transaction_id: U256,\n    },\n    OwnerAddition {\n        owner: ActorId,\n    },\n    OwnerRemoval {\n        owner: ActorId,\n    },\n    OwnerReplace {\n        old_owner: ActorId,\n        new_owner: ActorId,\n    },\n    RequirementChange(U256),\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Confirmation")," is an event that occurs when someone use ",(0,i.kt)("inlineCode",{parentName:"li"},"ConfirmTransaction")," action successfully"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Revocation")," is an event that occurs when someone use ",(0,i.kt)("inlineCode",{parentName:"li"},"RevokeConfirmation")," action successfully"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Submission")," is an event that occurs when someone use ",(0,i.kt)("inlineCode",{parentName:"li"},"SubmitTransaction")," action successfully"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Execution")," is an event that occurs when someone use ",(0,i.kt)("inlineCode",{parentName:"li"},"ExecuteTransaction")," action successfully"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OwnerAddition")," is an event that occurs when the wallet use ",(0,i.kt)("inlineCode",{parentName:"li"},"AddOwner")," action successfully"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OwnerRemoval")," is an event that occurs when the wallet use ",(0,i.kt)("inlineCode",{parentName:"li"},"RemoveOwner")," action successfully"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OwnerReplace")," is an event that occurs when the wallet use ",(0,i.kt)("inlineCode",{parentName:"li"},"ReplaceOwner")," action successfully"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RequirementChange")," is an event that occurs when the wallet use ",(0,i.kt)("inlineCode",{parentName:"li"},"ChangeRequiredConfirmationsCount")," action successfully")),(0,i.kt)("h3",{id:"program-metadata-and-state"},"Program metadata and state"),(0,i.kt)("p",null,"Metadata interface description:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct ContractMetadata;\n\nimpl Metadata for ContractMetadata {\n    type Init = In<MWInitConfig>;\n    type Handle = InOut<MWAction, MWEvent>;\n    type Reply = ();\n    type Others = ();\n    type Signal = ();\n    type State = State;\n}\n")),(0,i.kt)("p",null,"To display the full contract state information, the ",(0,i.kt)("inlineCode",{parentName:"p"},"state()")," function is used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\nextern "C" fn state() {\n    reply(common_state())\n        .expect("Failed to encode or reply with `<ContractMetadata as Metadata>::State` from `state()`");\n}\n')),(0,i.kt)("p",null,"To display only necessary certain values from the state, you need to write a separate crate. In this crate, specify functions that will return the desired values from the ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," struct. For example - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/multisig-wallet/tree/master/state"},"gear-dapps/multisig-wallet/state"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[metawasm]\npub trait Metawasm {\n    type State = <ContractMetadata as Metadata>::State;\n\n    // Returns number of confirmations of a transaction.\n    // `transaction_id` Transaction ID.\n    // Number of confirmations.\n    fn confirmations_count(transaction_id: TransactionId, state: Self::State) -> Option<u32> {\n        common_confirmations_count(&state, transaction_id)\n    }\n\n    // Returns total number of transactions after filers are applied.\n    // `pending` Include pending transactions.\n    // `executed` Include executed transactions.\n    // Total number of transactions after filters are applied.\n    fn transactions_count(pending_executed: PendingExecuted, state: Self::State) -> u32 {\n        state\n            .transactions\n            .into_iter()\n            .filter(|(_, tx)| {\n                (pending_executed.0 && !tx.executed) || (pending_executed.1 && tx.executed)\n            })\n            .count() as _\n    }\n\n    // Returns list of owners.\n    // List of owner addresses.\n    fn owners(state: Self::State) -> Vec<ActorId> {\n        state.owners\n    }\n\n    // Returns array with owner addresses, which confirmed transaction.\n    // `transaction_id` Transaction ID.\n    // Returns array of owner addresses.\n    fn confirmations(transaction_id: TransactionId, state: Self::State) -> Option<Vec<ActorId>> {\n        state\n            .confirmations\n            .into_iter()\n            .find_map(|(tx_id, confirmations)| (tx_id == transaction_id).then_some(confirmations))\n    }\n\n    // Returns list of transaction IDs in defined range.\n    // `from` Index start position of transaction array.\n    // `to` Index end position of transaction array(not included).\n    // `pending` Include pending transactions.\n    // `executed` Include executed transactions.\n    // `Returns` array of transaction IDs.\n    fn transaction_ids(\n        from_to_pending_executed: FromToPendingExecuted,\n        state: Self::State,\n    ) -> Vec<TransactionId> {\n        let (from, to, pending, executed) = from_to_pending_executed;\n\n        state\n            .transactions\n            .into_iter()\n            .filter(|(_, tx)| (pending && !tx.executed) || (executed && tx.executed))\n            .map(|(id, _)| id)\n            .take(to as _)\n            .skip(from as _)\n            .collect()\n    }\n\n    // Returns the confirmation status of a transaction.\n    // `transaction_id` Transaction ID.\n    fn is_confirmed(transaction_id: TransactionId, state: Self::State) -> bool {\n        let required = state.required;\n\n        if let Some(count) = common_confirmations_count(&state, transaction_id) {\n            count >= required\n        } else {\n            false\n        }\n    }\n\n    // Returns the description of a transaction.\n    // `transaction_id` Transaction ID.\n    fn transaction_description(\n        transaction_id: TransactionId,\n        state: Self::State,\n    ) -> Option<Option<String>> {\n        state\n            .transactions\n            .into_iter()\n            .find_map(|(tx_id, tx)| (tx_id == transaction_id).then_some(tx.description))\n    }\n}\n\npub type PendingExecuted = (bool, bool);\npub type FromToPendingExecuted = (u32, u32, bool, bool);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ConfirmationsCount")," returns number of confirmations of a transaction whose ID is a parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TransactionsCount")," returns total number of transactions after filers are applied. ",(0,i.kt)("inlineCode",{parentName:"li"},"pending")," includes transactions that have not been executed yet, ",(0,i.kt)("inlineCode",{parentName:"li"},"executed")," includes transactions that have been completed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Owners")," returns list of owners."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Confirmations")," returns array with owner addresses, which confirmed transaction whose ID is a parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TransactionIds")," returns list of transaction IDs in defined range.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from")," index start position of transaction array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to")," index end position of transaction array(not included)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pending")," include pending transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"executed")," include executed transactions."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsConfirmed")," returns the confirmation status of the transaction whose ID is a parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Description")," Returns the description of the transaction whose ID is a parameter.")),(0,i.kt)("p",null,"Each state request has a corresponding reply with the same name."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Replies:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum StateReply {\n    ConfirmationCount(u64),\n    TransactionsCount(u64),\n    Owners(Vec<ActorId>),\n    Confirmations(Vec<ActorId>),\n    TransactionIds(Vec<U256>),\n    IsConfirmed(bool),\n    Description(Option<String>)\n}\n")),(0,i.kt)("h2",{id:"source-code"},"Source code"),(0,i.kt)("p",null,"The source code of this example of Multisig Wallet smart contract and the example of an implementation of its testing is available on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/multisig-wallet"},"GitHub"),"."),(0,i.kt)("p",null,"See also an example of the smart contract testing implementation based on ",(0,i.kt)("inlineCode",{parentName:"p"},"gtest"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/multisig-wallet/tree/master/tests"},"multisig-wallet/tests"),"."),(0,i.kt)("p",null,"For more details about testing smart contracts written on Gear, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/developing-contracts/testing"},"Program Testing")," article."))}p.isMDXComponent=!0}}]);