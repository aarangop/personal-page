import{s as f,e as p,b as g,d as h,h as _}from"../chunks/16.qRzACfvT.js";import{S as w,i as v,d as u,v as b,e as P,f as y,a as d,k as j,b as x,m as E,t as S,g as B,h as C}from"../chunks/index.DWOnfsL5.js";import{B as m}from"../chunks/BlogView.B0LXhR8m.js";const O="src/routes/admin/blog/[slug]/+page.svelte";function r(o){let t,s,c;s=new m({props:{post:o[0].post},$$inline:!0});const i={c:function(){t=p("section"),P(s.$$.fragment),this.h()},l:function(a){t=g(a,"SECTION",{class:!0});var e=h(t);y(s.$$.fragment,e),e.forEach(d),this.h()},h:function(){j(t,"class","self-center py-4 flex flex-col"),_(t,O,6,0,107)},m:function(a,e){x(a,t,e),E(s,t,null),c=!0},p:function(a,[e]){const l={};e&1&&(l.post=a[0].post),s.$set(l)},i:function(a){c||(S(s.$$.fragment,a),c=!0)},o:function(a){B(s.$$.fragment,a),c=!1},d:function(a){a&&d(t),C(s)}};return u("SvelteRegisterBlock",{block:i,id:r.name,type:"component",source:"",ctx:o}),i}function $(o,t,s){let{$$slots:c={},$$scope:i}=t;b("Page",c,[]);let{data:n}=t;o.$$.on_mount.push(function(){n===void 0&&!("data"in t||o.$$.bound[o.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const a=["data"];return Object.keys(t).forEach(e=>{!~a.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Page> was created with unknown prop '${e}'`)}),o.$$set=e=>{"data"in e&&s(0,n=e.data)},o.$capture_state=()=>({BlogView:m,data:n}),o.$inject_state=e=>{"data"in e&&s(0,n=e.data)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[n]}class q extends w{constructor(t){super(t),v(this,t,$,r,f,{data:0}),u("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:r.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{q as component};