import{s as f,e as g,b as h,d as p,h as _}from"../chunks/16.DwSqnteW.js";import{S as w,i as v,d as u,v as b,e as P,f as j,a as d,g as y,b as x,m as E,t as S,h as B,j as C}from"../chunks/index.DO47-CzA.js";import{B as m}from"../chunks/BlogView.91yCh2al.js";const O="src/routes/blog/[slug]/+page.svelte";function r(a){let t,s,c;s=new m({props:{post:a[0].blogPost},$$inline:!0});const i={c:function(){t=g("section"),P(s.$$.fragment),this.h()},l:function(o){t=h(o,"SECTION",{class:!0});var e=p(t);j(s.$$.fragment,e),e.forEach(d),this.h()},h:function(){y(t,"class","self-center py-4 flex flex-col"),_(t,O,6,0,107)},m:function(o,e){x(o,t,e),E(s,t,null),c=!0},p:function(o,[e]){const l={};e&1&&(l.post=o[0].blogPost),s.$set(l)},i:function(o){c||(S(s.$$.fragment,o),c=!0)},o:function(o){B(s.$$.fragment,o),c=!1},d:function(o){o&&d(t),C(s)}};return u("SvelteRegisterBlock",{block:i,id:r.name,type:"component",source:"",ctx:a}),i}function $(a,t,s){let{$$slots:c={},$$scope:i}=t;b("Page",c,[]);let{data:n}=t;a.$$.on_mount.push(function(){n===void 0&&!("data"in t||a.$$.bound[a.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const o=["data"];return Object.keys(t).forEach(e=>{!~o.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Page> was created with unknown prop '${e}'`)}),a.$$set=e=>{"data"in e&&s(0,n=e.data)},a.$capture_state=()=>({BlogView:m,data:n}),a.$inject_state=e=>{"data"in e&&s(0,n=e.data)},t&&"$$inject"in t&&a.$inject_state(t.$$inject),[n]}class q extends w{constructor(t){super(t),v(this,t,$,r,f,{data:0}),u("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:r.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{q as component};