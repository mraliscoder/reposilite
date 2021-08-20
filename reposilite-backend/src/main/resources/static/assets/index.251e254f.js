var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,o=(e,o)=>{for(var s in o||(o={}))n.call(o,s)&&r(e,s,o[s]);if(t)for(var s of t(o))a.call(o,s)&&r(e,s,o[s]);return e};import{r as s,d as l,u as i,o as d,a as c,c as u,b as p,n as m,e as f,f as g,w as b,g as v,h as y,t as h,i as w,j as x,F as I,k,l as T,m as E,p as P,q as S,s as O,v as _,x as L,y as R,z as M,A as j,V as D,T as V}from"./vendor.f1f83286.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const A=s({isDark:!1});function $(){return{theme:A,fetchTheme:()=>{A.isDark="true"===localStorage.getItem("dark-theme")},toggleTheme:()=>{A.isDark=!A.isDark,localStorage.setItem("dark-theme",A.isDark)}}}const B=l({setup(){i({title:window.REPOSILITE_TITLE,description:window.REPOSILITE_DESCRIPTION});const{theme:e,fetchTheme:t}=$();return d((()=>{t()})),{theme:e}}});B.render=function(e,t,n,a,r,o){const s=c("router-view");return f(),u("div",{class:m({dark:e.theme.isDark})},[p(s,{class:"min-h-screen dark:bg-black dark:text-white"})],2)};const H={},C={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},G=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)];H.render=function(e,t){return f(),u("svg",C,G)};const U={components:{GlobeIcon:H}},z={class:"bg-gray-100 dark:bg-black"},N={class:"container mx-auto flex flex-row"},q=g("div",{class:"w-35"},[g("img",{class:"border-2 rounded-full dark:border-gray-700",src:"https://avatars.githubusercontent.com/u/75123628?s=200&v=4"})],-1),K={class:"flex flex-col justify-center px-10"},W=g("div",null,[g("p",null,"Public Maven repository for Bookkity organization")],-1),F={class:"flex flex-row py-2"},Y=g("a",{class:"px-3 text-gray-500",href:"https://github.com/bookkity"},"https://github.com/bookkity",-1);U.render=function(e,t,n,a,r,o){const s=c("GlobeIcon");return f(),u("div",z,[g("div",N,[q,g("div",K,[W,g("div",F,[p(s),Y])])])])};const J={},Q={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},X=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)];J.render=function(e,t){return f(),u("svg",Q,X)};const Z={},ee={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},te=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)];Z.render=function(e,t){return f(),u("svg",ee,te)};const ne={name:"Index",components:{Hero:U,MoonIcon:J,SunIcon:Z},setup(){const{theme:e,toggleTheme:t}=$();return{theme:e,toggleTheme:t}},data:()=>({title:window.REPOSILITE_TITLE})},ae={class:"bg-gray-100 dark:bg-black dark:text-white"},re={class:"container mx-auto flex flex-row py-10 justify-between"},oe={class:"text-xl font-medium py-1"},se={class:"flex flex-row mt-0.5"},le=g("div",{class:"py-1.5 rounded-full bg-white dark:bg-gray-900 font-bold px-6 text-sm"}," Dashboard ",-1);ne.render=function(e,t,n,a,r,o){const s=c("router-link"),l=c("SunIcon"),i=c("MoonIcon"),d=c("Hero");return f(),u("header",ae,[g("div",re,[g("h1",oe,[p(s,{to:"/"},{default:b((()=>[y(h(r.title),1)])),_:1})]),g("nav",se,[p(s,{to:"/dashboard"},{default:b((()=>[le])),_:1}),g("div",{class:"ml-4 pl-2 pr-1.5 py-0.9 cursor-pointer rounded-full bg-white dark:bg-gray-900",onClick:t[0]||(t[0]=e=>a.toggleTheme())},[a.theme.isDark?(f(),v(l,{key:0})):(f(),v(i,{key:1}))])])]),p(d,{class:"pt-2 pb-11"})])};const ie={maven:{details:e=>w.get(Vue.prototype.$reposilite.basePath+"/api/maven/details/"+(e||""))}},de=[{name:"Maven",value:"\n<dependency>\n    <groupId>{groupId}</groupId>\n    <artifactId>{artifactId}</artifactId>\n    <version>{version}</version>\n</dependency>"},{name:"Gradle Groovy",value:'implementation "{groupId}:{artifactId}:{version}"'},{name:"Gradle Kotlin",value:'implementation("{groupId}:{artifactId}:{version}")'},{name:"SBT",value:'"{groupId}" %% "{artifactId}" %% "{version}"'}],ce={setup(){const e=s({selectedTab:de[0].name});return o({tabs:de},x(e))}},ue={class:"bg-white dark:bg-gray-900 shadow-lg p-7 border rounded-xl border-gray-100 dark:border-gray-900"},pe=g("div",{class:"flex flex-row justify-between"},[g("h1",{class:"font-bold"},"Artifact details")],-1),me=g("hr",{class:"dark:border-gray-800"},null,-1),fe={class:"mt-6 p-4 mr-1 rounded-lg bg-gray-100 dark:bg-gray-900"},ge={class:"text-sm max-w-21"};ce.render=function(e,t,n,a,r,o){const s=c("tab"),l=c("tabs"),i=c("tab-panel"),d=c("tab-panels");return f(),u("div",ue,[pe,p(l,{modelValue:e.selectedTab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedTab=t),class:"pt-3"},{default:b((()=>[(f(!0),u(I,null,k(a.tabs,((e,t)=>(f(),v(s,{class:"buildtool py-1 px-2 cursor-pointer",key:`t${t}`,val:e.name,label:e.name,indicator:!0},null,8,["val","label"])))),128))])),_:1},8,["modelValue"]),me,p(d,{modelValue:e.selectedTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedTab=t),animate:!0},{default:b((()=>[(f(!0),u(I,null,k(a.tabs,((e,t)=>(f(),v(i,{key:`tp${t}`,val:e.name},{default:b((()=>[g("div",fe,[g("pre",ge,h(e.value.trim()),1)])])),_:2},1032,["val"])))),128))])),_:1},8,["modelValue"])])};const be={components:{Card:ce},setup(){T();const e=E(),t=P("xyz"),n=P([]);return S((()=>e.params.qualifier),(async e=>{var a;t.value=((a=`/${e}`).endsWith("/")?a.slice(0,-1):a).split("/").slice(0,-1).join("/")||"/",ie.maven.details(e).then((e=>n.value=e.data.files)).catch((e=>console.log(e)))}),{immediate:!0}),{parentPath:t,files:n}}},ve={class:"bg-gray-100"},ye={class:"bg-gray-100 dark:bg-black"},he={class:"container mx-auto"},we={class:"pt-7 pb-3 pl-2 font-semibold"},xe=g("span",{class:"font-normal text-xl text-gray-500"}," ⤴ ",-1),Ie={class:"dark:bg-black"},ke={class:"container mx-auto relative"},Te={class:"lg:absolute pt-5 -top-5 right-8"},Ee={class:"pt-4"},Pe={class:"flex flex-row mb-1.5 py-3 rounded-full bg-white dark:bg-gray-900 xl:max-w-1/2 cursor-pointer"},Se={key:0,class:"text-xm px-6 pt-1.75"},Oe={key:1,class:"text-xm px-6 pt-1.75"},_e={class:"font-semibold"};be.render=function(e,t,n,a,r,o){const s=c("router-link"),l=c("Card");return f(),u("div",ve,[g("div",ye,[g("div",he,[g("p",we,[y(" Index of "+h(e.$route.path)+" ",1),p(s,{to:a.parentPath},{default:b((()=>[xe])),_:1},8,["to"])])])]),g("div",Ie,[g("div",ke,[g("div",Te,[p(l)]),g("div",Ee,[(f(!0),u(I,null,k(a.files,(t=>(f(),v(s,{key:t,to:e.append(e.$route.path,t.name)},{default:b((()=>[g("div",Pe,["DIRECTORY"==t.type?(f(),u("div",Se,"⚫")):(f(),u("div",Oe,"⚪")),g("div",_e,h(t.name),1)])])),_:2},1032,["to"])))),128))])])])])};const Le={components:{Hero:U,Browser:be}};Le.render=function(e,t,n,a,r,o){const s=c("Browser");return f(),v(s,{ref:""},null,512)};const Re=[{type:"Maven",snippet:`\n    <repository>\n        <name>${window.REPOSILITE_TITLE}</name>\n        <id>${window.REPOSILITE_ID}</id>\n        <url>${window.location}</url>\n    </repository>\n    `},{type:"Gradle Groovy",snippet:`\n    maven {\n        url "${window.location}"\n    }\n    `},{type:"Gradle Kotlin",snippet:`\n    maven {\n        url = uri("${window.location}")\n    }\n    `},{type:"SBT",snippet:`\n    resolvers += "${window.REPOSILITE_TITLE}" at "${window.location}"\n    `}],Me={setup:()=>({configurations:Re}),methods:{trim(e){const t=e.length-e.trimStart().length-1;return e.split("\n").map((e=>e.substring(t))).join("\n").trim()}}},je={class:"container mx-auto pt-10 pb-6 px-6"},De={class:"text-lg font-bold"},Ve={class:"my-4 py-4 px-6 rounded-lg shadow-md text-sm bg-gray-50 dark:bg-gray-900 justify-items-center"};Me.render=function(e,t,n,a,r,o){return f(),u("div",je,[(f(!0),u(I,null,k(a.configurations,(e=>(f(),u("div",{key:e.type,class:"px-7"},[g("h1",De,h(e.type),1),g("pre",Ve,h(o.trim(e.snippet)),1)])))),128))])};const Ae={},$e={class:"container mx-auto pt-10 px-6"},Be=[g("i",null,"Endpoints :: soon™",-1)];Ae.render=function(e,t){return f(),u("div",$e,Be)};const He=["Overview","Usage","Endpoints"],Ce={name:"Index",components:{Header:ne,Overview:Le,Usage:Me,Endpoints:Ae},setup(){const e=s({selectedMenuTab:He[0]});return o({menuTabs:He},x(e))}};O("data-v-095cb884");const Ge={class:"bg-gray-100 dark:bg-black"},Ue={class:"container mx-auto"},ze=g("hr",{class:"dark:border-gray-700"},null,-1),Ne={class:"overflow-auto"};_(),Ce.render=function(e,t,n,a,r,o){const s=c("Header"),l=c("tab"),i=c("tabs"),d=c("Overview"),m=c("tab-panel"),y=c("Usage"),h=c("Endpoints"),w=c("tab-panels");return f(),u("div",null,[p(s),g("div",Ge,[g("div",Ue,[p(i,{modelValue:e.selectedMenuTab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedMenuTab=t)},{default:b((()=>[(f(!0),u(I,null,k(a.menuTabs,((e,t)=>(f(),v(l,{class:"item font-normal",key:`menu${t}`,val:e,label:e,indicator:!0},null,8,["val","label"])))),128))])),_:1},8,["modelValue"])]),ze,g("div",Ne,[p(w,{modelValue:e.selectedMenuTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedMenuTab=t),animate:!0},{default:b((()=>[p(m,{val:"Overview"},{default:b((()=>[p(d)])),_:1}),p(m,{val:"Usage"},{default:b((()=>[p(y)])),_:1}),p(m,{val:"Endpoints"},{default:b((()=>[p(h)])),_:1})])),_:1},8,["modelValue"])])])])},Ce.__scopeId="data-v-095cb884";const qe={name:"Index",components:{Header:ne},methods:{login(){}}};O("data-v-33f7a355");const Ke={class:"container mx-auto pt-10 px-6 flex justify-center"},We={class:"border border-gray-100 dark:border-gray-700 m-w-20 p-10 rounded-2xl shadow-md text-center"},Fe=g("h1",{class:"font-bold text-xl pb-4"},"Login",-1),Ye={class:"flex flex-col w-96"},Je=g("input",{placeholder:"Alias",type:"text",class:"input"},null,-1),Qe=g("input",{placeholder:"Token",type:"password",class:"input"},null,-1),Xe={class:"text-right mt-1"},Ze=y("← Back to index"),et=["click"];_(),qe.render=function(e,t,n,a,r,o){const s=c("Header"),l=c("router-link");return f(),u("div",null,[p(s),g("div",Ke,[g("div",We,[Fe,g("form",Ye,[Je,Qe,g("div",Xe,[p(l,{to:"/",class:"text-blue-400 text-xs"},{default:b((()=>[Ze])),_:1})]),g("div",{class:"bg-gray-100 dark:bg-gray-900 py-2 my-3 cursor-pointer",click:o.login},"Sign in",8,et)])])])])},qe.__scopeId="data-v-33f7a355";const tt=L({history:R(),routes:[{path:"/:qualifier(.*)",name:"Index",component:Ce},{path:"/dashboard",name:"Dashboard",component:qe}]}),nt=!"{{REPOSILITE.BASE_PATH}}".includes("REPOSILITE.BASE_PATH");window.REPOSILITE_BASE_PATH=nt?"{{REPOSILITE.BASE_PATH}}":"/",window.REPOSILITE_ID=nt?"{{REPOSILITE.ID}}":"reposilite-repository",window.REPOSILITE_TITLE=nt?"{{REPOSILITE.TITLE}}":"Reposilite Repository",window.REPOSILITE_DESCRIPTION=nt?"{{REPOSILITE.DESCRIPTION}}":"Default description";const at=M(B);at.config.globalProperties.append=(e,t)=>e+(e.endsWith("/")?"":"/")+t,at.config.globalProperties.drop=e=>(e.endsWith("/")?e.slice(0,-1):e).split("/").slice(0,-1).join("/"),at.use(j()).use(D,w).use(V).use(tt).mount("#app");
