import{s as N,a as b,e as p,o as j,g as y,b as _,d as C,i as O,h,n as D}from"../chunks/16.DwSqnteW.js";import{S as I,i as R,d as F,v as k,e as q,a as i,f as z,g as v,b as E,c as $,m as A,t as B,h as H,j as T}from"../chunks/index.DO47-CzA.js";import{P as S}from"../chunks/PodcastFeedForm.BHFSCDn_.js";const g="src/routes/admin/podcast/new/+page.svelte";function w(l){let t,a,s,f="New Podcast Feed",r,e,o,d;o=new S({props:{submitFormAction:"createFeed"},$$inline:!0});const x={c:function(){t=b(),a=p("section"),s=p("h1"),s.textContent=f,r=b(),e=p("div"),q(o.$$.fragment),this.h()},l:function(n){j("svelte-1iwem0m",document.head).forEach(i),t=y(n),a=_(n,"SECTION",{class:!0});var m=C(a);s=_(m,"H1",{class:!0,"data-svelte-h":!0}),O(s)!=="svelte-16pziw9"&&(s.textContent=f),r=y(m),e=_(m,"DIV",{class:!0});var P=C(e);z(o.$$.fragment,P),P.forEach(i),m.forEach(i),this.h()},h:function(){document.title="New Podcast",v(s,"class","font-serif flex-1 text-2xl mb-4"),h(s,g,8,1,215),v(e,"class","card flex justify-center w-full overflow-scroll"),h(e,g,9,1,282),v(a,"class","flex flex-col py-4 items-center"),h(a,g,7,0,164)},m:function(n,u){E(n,t,u),E(n,a,u),$(a,s),$(a,r),$(a,e),A(o,e,null),d=!0},p:D,i:function(n){d||(B(o.$$.fragment,n),d=!0)},o:function(n){H(o.$$.fragment,n),d=!1},d:function(n){n&&(i(t),i(a)),T(o)}};return F("SvelteRegisterBlock",{block:x,id:w.name,type:"component",source:"",ctx:l}),x}function V(l,t,a){let{$$slots:s={},$$scope:f}=t;k("Page",s,[]);const r=[];return Object.keys(t).forEach(e=>{!~r.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Page> was created with unknown prop '${e}'`)}),l.$capture_state=()=>({PodcastFeedForm:S}),[]}class L extends I{constructor(t){super(t),R(this,t,V,w,N,{}),F("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:w.name})}}export{L as component};
