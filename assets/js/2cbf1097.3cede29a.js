"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[2804],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5810:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9496),r=n(5924);const i={tabItem:"tabItem_mw14"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},8750:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(8126),r=n(9496),i=n(5924),l=n(3053),o=n(3442),s=n(9356),c=n(4634),u=n(6038);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=k({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,i]),tabValues:i}}var h=n(5667);const y={tabList:"tabList_r_eZ",tabItem:"tabItem_ZrSx"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==o&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(f,(0,a.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return r.createElement(_,(0,a.Z)({key:String(t)},e))}},2536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>_,frontMatter:()=>m,metadata:()=>b,toc:()=>y});var a=n(8126),r=(n(9496),n(9613));const i={toc:[{value:"Capabilities",id:"capabilities",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Temporary security credentials",id:"temporary-security-credentials",level:2},{value:"Server Side Encryption",id:"server-side-encryption",level:2},{value:"Example",id:"example",level:2},{value:"Via Builder",id:"via-builder",level:2},{value:"Basic Setup",id:"basic-setup",level:3},{value:"S3 with SSE-C",id:"s3-with-sse-c",level:3},{value:"S3 with SSE-KMS and aws managed kms key",id:"s3-with-sse-kms-and-aws-managed-kms-key",level:3},{value:"S3 with SSE-KMS and customer managed kms key",id:"s3-with-sse-kms-and-customer-managed-kms-key",level:3},{value:"S3 with SSE-S3",id:"s3-with-sse-s3",level:3}]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"capabilities"},"Capabilities"),(0,r.kt)("p",null,"This service can be used to:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","stat"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","read"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","write"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","create_dir"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","delete"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","copy"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","rename"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","list"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","scan"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","presign"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","blocking")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"root"),": Set the work dir for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket"),": Set the container name for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint"),": Set the endpoint for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"region"),": Set the region for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"access_key_id"),": Set the access_key_id for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret_access_key"),": Set the secret_access_key for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"security_token"),": Set the security_token for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default_storage_class"),": Set the default storage_class for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"server_side_encryption"),": Set the server_side_encryption for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"server_side_encryption_aws_kms_key_id"),": Set the server_side_encryption_aws_kms_key_id for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"server_side_encryption_customer_algorithm"),": Set the server_side_encryption_customer_algorithm for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"server_side_encryption_customer_key"),": Set the server_side_encryption_customer_key for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"server_side_encryption_customer_key_md5"),": Set the server_side_encryption_customer_key_md5 for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disable_config_load"),": Disable aws config load from env"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable_virtual_host_style"),": Enable virtual host style.")),(0,r.kt)("p",null,"Refer to ","[",(0,r.kt)("inlineCode",{parentName:"p"},"S3Builder"),"]","'s public API docs for more information."),(0,r.kt)("h2",{id:"temporary-security-credentials"},"Temporary security credentials"),(0,r.kt)("p",null,"OpenDAL now provides support for S3 temporary security credentials in IAM."),(0,r.kt)("p",null,"The way to take advantage of this feature is to build your S3 backend with ",(0,r.kt)("inlineCode",{parentName:"p"},"Builder::security_token"),"."),(0,r.kt)("p",null,"But OpenDAL will not refresh the temporary security credentials, please keep in mind to refresh those credentials in time."),(0,r.kt)("h2",{id:"server-side-encryption"},"Server Side Encryption"),(0,r.kt)("p",null,"OpenDAL provides full support of S3 Server Side Encryption(SSE) features."),(0,r.kt)("p",null,"The easiest way to configure them is to use helper functions like"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SSE-KMS: ",(0,r.kt)("inlineCode",{parentName:"li"},"server_side_encryption_with_aws_managed_kms_key")),(0,r.kt)("li",{parentName:"ul"},"SSE-KMS: ",(0,r.kt)("inlineCode",{parentName:"li"},"server_side_encryption_with_customer_managed_kms_key")),(0,r.kt)("li",{parentName:"ul"},"SSE-S3: ",(0,r.kt)("inlineCode",{parentName:"li"},"server_side_encryption_with_s3_key")),(0,r.kt)("li",{parentName:"ul"},"SSE-C: ",(0,r.kt)("inlineCode",{parentName:"li"},"server_side_encryption_with_customer_key"))),(0,r.kt)("p",null,"If those functions don't fulfill need, low-level options are also provided:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use service managed kms key",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'server_side_encryption="aws:kms"')))),(0,r.kt)("li",{parentName:"ul"},"Use customer provided kms key",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'server_side_encryption="aws:kms"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'server_side_encryption_aws_kms_key_id="your-kms-key"')))),(0,r.kt)("li",{parentName:"ul"},"Use S3 managed key",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'server_side_encryption="AES256"')))),(0,r.kt)("li",{parentName:"ul"},"Use customer key",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'server_side_encryption_customer_algorithm="AES256"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'server_side_encryption_customer_key="base64-of-your-aes256-key"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'server_side_encryption_customer_key_md5="base64-of-your-aes256-key-md5"'))))),(0,r.kt)("p",null,"After SSE have been configured, all requests send by this backed will attach those headers."),(0,r.kt)("p",null,"Reference: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html"},"Protecting data using server-side encryption")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h2",{id:"via-builder"},"Via Builder"),(0,r.kt)("h3",{id:"basic-setup"},"Basic Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::sync::Arc;\n\nuse anyhow::Result;\nuse opendal::services::S3;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create s3 backend builder.\n    let mut builder = S3::default();\n    // Set the root for s3, all operations will happen under this root.\n    //\n    // NOTE: the root must be absolute path.\n    builder.root("/path/to/dir");\n    // Set the bucket name. This is required.\n    builder.bucket("test");\n    // Set the region. This is required for some services, if you don\'t care about it, for example Minio service, just set it to "auto", it will be ignored.\n    builder.region("us-east-1");\n    // Set the endpoint.\n    //\n    // For examples:\n    // - "https://s3.amazonaws.com"\n    // - "http://127.0.0.1:9000"\n    // - "https://oss-ap-northeast-1.aliyuncs.com"\n    // - "https://cos.ap-seoul.myqcloud.com"\n    //\n    // Default to "https://s3.amazonaws.com"\n    builder.endpoint("https://s3.amazonaws.com");\n    // Set the access_key_id and secret_access_key.\n    //\n    // OpenDAL will try load credential from the env.\n    // If credential not set and no valid credential in env, OpenDAL will\n    // send request without signing like anonymous user.\n    builder.access_key_id("access_key_id");\n    builder.secret_access_key("secret_access_key");\n\n    let op: Operator = Operator::new(builder)?.finish();\n\n    Ok(())\n}\n\n')),(0,r.kt)("h3",{id:"s3-with-sse-c"},"S3 with SSE-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse log::info;\nuse opendal::services::S3;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = S3::default();\n\n    // Setup builders\n    builder.root("/path/to/dir");\n    builder.bucket("test");\n    builder.region("us-east-1");\n    builder.endpoint("https://s3.amazonaws.com");\n    builder.access_key_id("access_key_id");\n    builder.secret_access_key("secret_access_key");\n\n    // Enable SSE-C\n    builder.server_side_encryption_with_customer_key("AES256", "customer_key".as_bytes());\n\n    let op = Operator::new(builder)?.finish();\n    info!("operator: {:?}", op);\n\n    // Writing your testing code here.\n\n    Ok(())\n}\n')),(0,r.kt)("h3",{id:"s3-with-sse-kms-and-aws-managed-kms-key"},"S3 with SSE-KMS and aws managed kms key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse log::info;\nuse opendal::services::S3;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = S3::default();\n\n    // Setup builders\n    builder.root("/path/to/dir");\n    builder.bucket("test");\n    builder.region("us-east-1");\n    builder.endpoint("https://s3.amazonaws.com");\n    builder.access_key_id("access_key_id");\n    builder.secret_access_key("secret_access_key");\n    \n    // Enable SSE-KMS with aws managed kms key\n    builder.server_side_encryption_with_aws_managed_kms_key();\n\n    let op = Operator::new(builder)?.finish();\n    info!("operator: {:?}", op);\n\n    // Writing your testing code here.\n\n    Ok(())\n}\n')),(0,r.kt)("h3",{id:"s3-with-sse-kms-and-customer-managed-kms-key"},"S3 with SSE-KMS and customer managed kms key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse log::info;\nuse opendal::services::S3;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = S3::default();\n\n    // Setup builders\n    builder.root("/path/to/dir");\n    builder.bucket("test");\n    builder.region("us-east-1");\n    builder.endpoint("https://s3.amazonaws.com");\n    builder.access_key_id("access_key_id");\n    builder.secret_access_key("secret_access_key");\n\n    // Enable SSE-KMS with customer managed kms key\n    builder.server_side_encryption_with_customer_managed_kms_key("aws_kms_key_id");\n\n    let op = Operator::new(builder)?.finish();\n    info!("operator: {:?}", op);\n\n    // Writing your testing code here.\n\n    Ok(())\n}\n')),(0,r.kt)("h3",{id:"s3-with-sse-s3"},"S3 with SSE-S3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse log::info;\nuse opendal::services::S3;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = S3::default();\n\n    // Setup builders\n    builder.root("/path/to/dir");\n    builder.bucket("test");\n    builder.region("us-east-1");\n    builder.endpoint("https://s3.amazonaws.com");\n    builder.access_key_id("access_key_id");\n    builder.secret_access_key("secret_access_key");\n\n    // Enable SSE-S3\n    builder.server_side_encryption_with_s3_key();\n\n    let op = Operator::new(builder)?.finish();\n    info!("operator: {:?}", op);\n\n    // Writing your testing code here.\n\n    Ok(())\n}\n')))}o.isMDXComponent=!0;var s=n(8750),c=n(5810);const u={toc:[{value:"Compatible Services",id:"compatible-services",level:2},{value:"AWS S3",id:"aws-s3",level:3},{value:"Alibaba Object Storage Service (OSS)",id:"alibaba-object-storage-service-oss",level:3},{value:"Minio",id:"minio",level:3},{value:"QingStor Object Storage",id:"qingstor-object-storage",level:3},{value:"Scaleway Object Storage",id:"scaleway-object-storage",level:3},{value:"Tencent Cloud Object Storage (COS)",id:"tencent-cloud-object-storage-cos",level:3},{value:"Wasabi Object Storage",id:"wasabi-object-storage",level:3},{value:"Cloudflare R2",id:"cloudflare-r2",level:3},{value:"Google Cloud Storage XML API",id:"google-cloud-storage-xml-api",level:3}]},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"compatible-services"},"Compatible Services"),(0,r.kt)("h3",{id:"aws-s3"},"AWS S3"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"AWS S3")," is the default implementations of s3 services. Only ",(0,r.kt)("inlineCode",{parentName:"p"},"bucket")," is required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust,ignore"},'builder.bucket("<bucket_name>");\n')),(0,r.kt)("h3",{id:"alibaba-object-storage-service-oss"},"Alibaba Object Storage Service (OSS)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/product/object-storage-service"},"OSS")," is a s3 compatible service provided by ",(0,r.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com"},"Alibaba Cloud"),"."),(0,r.kt)("p",null,"To connect to OSS, we need to set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint"),": The endpoint of oss, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://oss-cn-hangzhou.aliyuncs.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket"),": The bucket name of oss.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"OSS provide internal endpoint for used at alibabacloud internally, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/object-storage-service/latest/regions-and-endpoints"},"OSS Regions and endpoints")," for more details.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"OSS only supports the virtual host style, users could meet errors like:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<Error>\n <Code>SecondLevelDomainForbidden</Code>\n <Message>The bucket you are attempting to access must be addressed using OSS third level domain.</Message>\n <RequestId>62A1C265292C0632377F021F</RequestId>\n <HostId>oss-cn-hangzhou.aliyuncs.com</HostId>\n</Error>\n')),(0,r.kt)("p",{parentName:"blockquote"},"In that case, please enable virtual host style for requesting.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust,ignore"},'builder.endpoint("https://oss-cn-hangzhou.aliyuncs.com");\nbuilder.region("<region>");\nbuilder.bucket("<bucket_name>");\nbuilder.enable_virtual_host_style();\n')),(0,r.kt)("h3",{id:"minio"},"Minio"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://min.io/"},"minio")," is an open-source s3 compatible services."),(0,r.kt)("p",null,"To connect to minio, we need to set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint"),": The endpoint of minio, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:9000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"region"),': The region of minio. If you don\'t care about it, just set it to "auto", it will be ignored.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket"),": The bucket name of minio.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust,ignore"},'builder.endpoint("http://127.0.0.1:9000");\nbuilder.region("<region>");\nbuilder.bucket("<bucket_name>");\n')),(0,r.kt)("h3",{id:"qingstor-object-storage"},"QingStor Object Storage"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.qingcloud.com/products/qingstor"},"QingStor Object Storage")," is a S3-compatible service provided by ",(0,r.kt)("a",{parentName:"p",href:"https://www.qingcloud.com/"},"QingCloud"),"."),(0,r.kt)("p",null,"To connect to QingStor Object Storage, we need to set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint"),": The endpoint of QingStor s3 compatible endpoint, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://s3.pek3b.qingstor.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket"),": The bucket name.")),(0,r.kt)("h3",{id:"scaleway-object-storage"},"Scaleway Object Storage"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/object-storage/"},"Scaleway Object Storage")," is a S3-compatible and multi-AZ redundant object storage service."),(0,r.kt)("p",null,"To connect to Scaleway Object Storage, we need to set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint"),": The endpoint of scaleway, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://s3.nl-ams.scw.cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"region"),": The region of scaleway."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket"),": The bucket name of scaleway.")),(0,r.kt)("h3",{id:"tencent-cloud-object-storage-cos"},"Tencent Cloud Object Storage (COS)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://intl.cloud.tencent.com/products/cos"},"COS")," is a s3 compatible service provided by ",(0,r.kt)("a",{parentName:"p",href:"https://intl.cloud.tencent.com/"},"Tencent Cloud"),"."),(0,r.kt)("p",null,"To connect to COS, we need to set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint"),": The endpoint of cos, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://cos.ap-beijing.myqcloud.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket"),": The bucket name of cos.")),(0,r.kt)("h3",{id:"wasabi-object-storage"},"Wasabi Object Storage"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wasabi.com/"},"Wasabi")," is a s3 compatible service."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cloud storage pricing that is 80% less than Amazon S3.")),(0,r.kt)("p",null,"To connect to wasabi, we need to set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint"),": The endpoint of wasabi, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://s3.us-east-2.wasabisys.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket"),": The bucket name of wasabi.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wasabi-support.zendesk.com/hc/en-us/articles/360015106031"},"What are the service URLs for Wasabi's different storage regions?")," for more details.")),(0,r.kt)("h3",{id:"cloudflare-r2"},"Cloudflare R2"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/r2/"},"Cloudflare R2")," provides s3 compatible API."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cloudflare R2 Storage allows developers to store large amounts of unstructured data without the costly egress bandwidth fees associated with typical cloud storage services.")),(0,r.kt)("p",null,"To connect to r2, we need to set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint"),": The endpoint of r2, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://<account_id>.r2.cloudflarestorage.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket"),": The bucket name of r2."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"region"),": When you create a new bucket, the data location is set to Automatic by default. So please use ",(0,r.kt)("inlineCode",{parentName:"li"},"auto")," for region."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"batch_max_operations"),": R2's delete objects will return ",(0,r.kt)("inlineCode",{parentName:"li"},"Internal Error")," if the batch is larger than ",(0,r.kt)("inlineCode",{parentName:"li"},"700"),". Please set this value ",(0,r.kt)("inlineCode",{parentName:"li"},"<= 700")," to make sure batch delete work as expected."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable_exact_buf_write"),": R2 requires the non-tailing parts size to be exactly the same. Please enable this option to avoid the error ",(0,r.kt)("inlineCode",{parentName:"li"},"All non-trailing parts must have the same length"),".")),(0,r.kt)("h3",{id:"google-cloud-storage-xml-api"},"Google Cloud Storage XML API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/xml-api/overview"},"Google Cloud Storage XML API")," provides s3 compatible API."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint"),": The endpoint of Google Cloud Storage XML API, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://storage.googleapis.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket"),": The bucket name."),(0,r.kt)("li",{parentName:"ul"},"To access GCS via S3 API, please enable ",(0,r.kt)("inlineCode",{parentName:"li"},'features = ["native-tls"]')," in your ",(0,r.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," to avoid connection being reset when using ",(0,r.kt)("inlineCode",{parentName:"li"},"rustls"),". Tracking in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seanmonstar/reqwest/issues/1809"},"https://github.com/seanmonstar/reqwest/issues/1809"))))}d.isMDXComponent=!0;const m={title:"S3"},k=void 0,b={unversionedId:"services/s3",id:"services/s3",title:"S3",description:"Aws S3 and compatible services (including minio, digitalocean space, Tencent Cloud Object Storage(COS) and so on) support.",source:"@site/docs/services/s3.mdx",sourceDirName:"services",slug:"/services/s3",permalink:"/docs/services/s3",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/services/s3.mdx",tags:[],version:"current",lastUpdatedBy:"xxt",lastUpdatedAt:1704054838,formattedLastUpdatedAt:"Dec 31, 2023",frontMatter:{title:"S3"},sidebar:"docs",previous:{title:"RocksDB",permalink:"/docs/services/rocksdb"},next:{title:"SFTP",permalink:"/docs/services/sftp"}},h={},y=[{value:"Via Config",id:"via-config",level:2}],g={toc:y},f="wrapper";function _(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aws S3 and compatible services (including minio, digitalocean space, Tencent Cloud Object Storage(COS) and so on) support."),(0,r.kt)("p",null,"For more information about s3-compatible services, refer to ",(0,r.kt)("a",{parentName:"p",href:"#compatible-services"},"Compatible Services"),"."),(0,r.kt)(o,{components:n.components,mdxType:"Docs"}),(0,r.kt)("h2",{id:"via-config"},"Via Config"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("bucket".to_string(), "test".to_string());\n    map.insert("region".to_string(), "us-east-1".to_string());\n    map.insert("endpoint".to_string(), "https://s3.amazonaws.com".to_string());\n    map.insert("access_key_id".to_string(), "access_key_id".to_string());\n    map.insert("secret_access_key".to_string(), "secret_access_key".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::S3, map)?;\n\n    Ok(())\n}\n'))),(0,r.kt)(c.Z,{value:"node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("s3", {\n    root: "/path/to/dir",\n    bucket: "test",\n    region: "us-east-1",\n    endpoint: "https://s3.amazonaws.com",\n    access_key_id: "access_key_id",\n    secret_access_key: "secret_access_key",\n  });\n}\n'))),(0,r.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import opendal\n\nop = opendal.Operator("s3",\n    root="/path/to/dir",\n    bucket="test",\n    region="us-east-1",\n    endpoint="https://s3.amazonaws.com",\n    access_key_id="access_key_id",\n    secret_access_key="secret_access_key",\n)\n')))),(0,r.kt)(d,{components:n.components,mdxType:"CompatibleServices"}))}_.isMDXComponent=!0}}]);