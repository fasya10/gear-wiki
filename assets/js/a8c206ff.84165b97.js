"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1259],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),s=n(6550),o=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[o,c]=m({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=o??d;return g({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var b=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(d(t),o(a))},g=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:p},l,{className:(0,i.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},9477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),l=n(5162);n(4464);const s={sidebar_position:14},o="Testing with gclient",c={unversionedId:"developing-contracts/testing-gclient",id:"developing-contracts/testing-gclient",title:"Testing with gclient",description:"gclient is intended to be used as a tool for testing Gear programs with a real blockchain network. It allows you to send extrinsics and RPCs by connecting to the network. We recommend using gclient for end-to-end testing to ensure the program works as expected in the real blockchain world.",source:"@site/docs/developing-contracts/testing-gclient.mdx",sourceDirName:"developing-contracts",slug:"/developing-contracts/testing-gclient",permalink:"/docs/developing-contracts/testing-gclient",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/developing-contracts/testing-gclient.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"docs",previous:{title:"Testing with gtest",permalink:"/docs/developing-contracts/testing-gtest"},next:{title:"Gear fungible token standard",permalink:"/docs/developing-contracts/token-standards/gft20"}},u={},d=[{value:"Import <code>gclient</code> lib",id:"import-gclient-lib",level:2},{value:"Running the node",id:"running-the-node",level:2},{value:"Simple example",id:"simple-example",level:2},{value:"More details about <code>gclient</code>",id:"more-details-about-gclient",level:2}],p={toc:d},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-with-gclient"},"Testing with ",(0,r.kt)("inlineCode",{parentName:"h1"},"gclient")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gclient")," is intended to be used as a tool for testing Gear programs with a real blockchain network. It allows you to send extrinsics and RPCs by connecting to the network. We recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"gclient")," for end-to-end testing to ensure the program works as expected in the real blockchain world."),(0,r.kt)("p",null,"It is essential to underline that testing with ",(0,r.kt)("inlineCode",{parentName:"p"},"gclient")," requires the running node as the second part of the test suite. The ",(0,r.kt)("inlineCode",{parentName:"p"},"gclient")," interacts with the node over the WebSocket protocol. Depending on the purpose of testing, ",(0,r.kt)("inlineCode",{parentName:"p"},"gclient")," can communicate with either a local or a remote node. The best choice is to use the ",(0,r.kt)("strong",{parentName:"p"},"local node in developer mode")," for initial debugging and continuous integration."),(0,r.kt)("p",null,"Testing with ",(0,r.kt)("inlineCode",{parentName:"p"},"gclient")," is slower than ",(0,r.kt)("inlineCode",{parentName:"p"},"gtest")," and produces more build artifacts, so it is better suited as the last mile in quality control. However, ",(0,r.kt)("inlineCode",{parentName:"p"},"gclient")," gives the most accurate test results."),(0,r.kt)("h2",{id:"import-gclient-lib"},"Import ",(0,r.kt)("inlineCode",{parentName:"h2"},"gclient")," lib"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"gclient")," library, you must import it into your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"[dev-dependencies]")," block. Also, you need to add some external crates that are used together with ",(0,r.kt)("inlineCode",{parentName:"p"},"gclient"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "first-gear-app"\nversion = "0.1.0"\nauthors = ["Your Name"]\nedition = "2021"\n\n[dependencies]\ngstd = { git = "https://github.com/gear-tech/gear.git", features = ["debug"], branch = "stable" }\n\n[build-dependencies]\ngear-wasm-builder = { git = "https://github.com/gear-tech/gear.git", branch = "stable" }\n\n[dev-dependencies]\ngclient = { git = "https://github.com/gear-tech/gear.git", branch = "stable" }\ntokio = { version = "1.23.0", features = ["full"] }\n\n[patch.crates-io]\nsp-core = { git = "https://github.com/gear-tech/substrate.git", branch = "gear-stable" }\nsp-runtime = { git = "https://github.com/gear-tech/substrate.git", branch = "gear-stable" }\n')),(0,r.kt)("h2",{id:"running-the-node"},"Running the node"),(0,r.kt)("p",null,"The best way is to download the latest node binary for your operating system from ",(0,r.kt)("a",{parentName:"p",href:"https://get.gear.rs."},"https://get.gear.rs.")," Then unpack the package and run the node. Here and below, we assume the node is running in developer mode."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"win64",label:"Windows x64",className:"unique-tabs",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -O https://get.gear.rs/gear-nightly-x86_64-pc-windows-msvc.zip\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows x64"),": ",(0,r.kt)("a",{parentName:"p",href:"https://get.gear.rs/gear-nightly-x86_64-pc-windows-msvc.zip"},"gear-nightly-x86_64-pc-windows-msvc.zip")),(0,r.kt)("p",null,"Unzip the downloaded package, then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gear.exe --dev\n"))),(0,r.kt)(l.Z,{value:"mac-arm",label:"MacOS ARM",mdxType:"TabItem"},(0,r.kt)("p",null,"Terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://get.gear.rs/gear-nightly-aarch64-apple-darwin.tar.xz && \\\ntar xvf gear-nightly-aarch64-apple-darwin.tar.xz && \\\nrm gear-nightly-aarch64-apple-darwin.tar.xz\n")),(0,r.kt)("p",null,"Run the node in development mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gear --dev\n"))),(0,r.kt)(l.Z,{value:"mac-intel",label:"MacOS x64",mdxType:"TabItem"},(0,r.kt)("p",null,"Terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://get.gear.rs/gear-nightly-x86_64-apple-darwin.tar.xz && \\\ntar xvf gear-nightly-x86_64-apple-darwin.tar.xz && \\\nrm gear-nightly-x86_64-apple-darwin.tar.xz\n")),(0,r.kt)("p",null,"Run the node in development mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gear --dev\n"))),(0,r.kt)(l.Z,{value:"mac-linux",label:"Linux x64",mdxType:"TabItem"},(0,r.kt)("p",null,"Terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://get.gear.rs/gear-nightly-x86_64-unknown-linux-gnu.tar.xz && \\\ntar xvf gear-nightly-x86_64-unknown-linux-gnu.tar.xz && \\\nrm gear-nightly-x86_64-unknown-linux-gnu.tar.xz\n")),(0,r.kt)("p",null,"Run the node in development mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gear --dev\n")))),(0,r.kt)("p",null,"Open the second terminal window and run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," as it was described in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/developing-contracts/testing#building-a-program-in-test-mode"},"previous section"),"."),(0,r.kt)("h2",{id:"simple-example"},"Simple example"),(0,r.kt)("p",null,"Let's add an end-to-end test to our ",(0,r.kt)("inlineCode",{parentName:"p"},"first-gear-app")," introduced in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started-in-5-minutes#creating-your-first-gear-smart-contract"},"Getting Started")," section."),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"tests")," directory next to the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory and create the ",(0,r.kt)("inlineCode",{parentName:"p"},"end2end.rs")," file in it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 first-gear-app\n    \u251c\u2500\u2500 Cargo.toml\n    \u251c\u2500\u2500 src\n    \u2502   \u2514\u2500\u2500 lib.rs\n    \u2514\u2500\u2500 tests\n        \u2514\u2500\u2500 end2end.rs\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"end2end.rs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use gclient::{EventProcessor, GearApi, Result};\n\nconst WASM_PATH: &str = "./target/wasm32-unknown-unknown/release/first_gear_app.opt.wasm";\n\n#[tokio::test]\n#[ignore]\nasync fn test_example() -> Result<()> {\n    // Create API instance\n    let api = GearApi::dev().await?;\n\n    // Subscribe to events\n    let mut listener = api.subscribe().await?;\n\n    // Check that blocks are still running\n    assert!(listener.blocks_running().await?);\n\n    // Calculate gas amount needed for initialization\n    let gas_info = api\n        .calculate_upload_gas(\n            None,\n            gclient::code_from_os(WASM_PATH)?,\n            vec![],\n            0,\n            true,\n            None,\n        )\n        .await?;\n\n    // Upload and init the program\n    let (message_id, program_id, _hash) = api\n        .upload_program_bytes_by_path(\n            WASM_PATH,\n            gclient::bytes_now(),\n            vec![],\n            gas_info.min_limit,\n            0,\n        )\n        .await?;\n\n    assert!(listener.message_processed(message_id).await?.succeed());\n\n    let payload = b"PING".to_vec();\n\n    // Calculate gas amount needed for handling the message\n    let gas_info = api\n        .calculate_handle_gas(None, program_id, payload.clone(), 0, true, None)\n        .await?;\n\n    // Send the PING message\n    let (message_id, _hash) = api\n        .send_message_bytes(program_id, payload, gas_info.min_limit, 0)\n        .await?;\n\n    assert!(listener.message_processed(message_id).await?.succeed());\n\n    Ok(())\n}\n')),(0,r.kt)("p",null,"Run the following command and wait for all tests to be green:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo test --release -- --include-ignored\n")),(0,r.kt)("p",null,"It's recommended to mark with the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ignore]")," attribute tests with ",(0,r.kt)("inlineCode",{parentName:"p"},"gclient")," to separate their slow execution from the rest. To execute ignored tests with Cargo, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--include-ignored")," flag after a double dash (",(0,r.kt)("inlineCode",{parentName:"p"},"--"),") as shown above."),(0,r.kt)("p",null,"Let's explore what we've done in the test function above."),(0,r.kt)("p",null,"Firstly, we instantiate the API that allows interaction with the node by calling correspondent extrinsics. Then we create an event listener, as getting the feedback from the node is possible only by subscribing to events. We use the API instance both for invoking RPC calls (e.g., calculating the gas amount needed for processing) and sending extrinsics (e.g., uploading the program and sending a message). Events listener allows us to get the result of operation."),(0,r.kt)("h2",{id:"more-details-about-gclient"},"More details about ",(0,r.kt)("inlineCode",{parentName:"h2"},"gclient")),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gear.rs/gclient/"},(0,r.kt)("inlineCode",{parentName:"a"},"gclient")," docs")," for more information about its capabilities and use cases."))}m.isMDXComponent=!0}}]);