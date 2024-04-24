import{s as H,v as J,c as K,e as d,b as p,d as B,h as _,t as R,a as M,f as E,g as Q,i as x,n as D}from"../chunks/16.DwSqnteW.js";import{S as T,i as U,d as g,v as W,a as m,b as $,h as b,n as X,t as k,o as Y,e as L,f as O,m as N,j as V,c as y,s as Z,g as S}from"../chunks/index.DO47-CzA.js";import{p as C}from"../chunks/stores.BsDLfy45.js";import{S as j}from"../chunks/SignIn.CAsTB5Pw.js";import{S as A}from"../chunks/SignOut.DYgVa-IP.js";const v="src/routes/login/+page.svelte";function q(l){let t,e;t=new j({props:{$$slots:{submitButton:[F]},$$scope:{ctx:l}},$$inline:!0});const o={c:function(){L(t.$$.fragment)},l:function(s){O(t.$$.fragment,s)},m:function(s,n){N(t,s,n),e=!0},p:function(s,n){const i={};n&2&&(i.$$scope={dirty:n,ctx:s}),t.$set(i)},i:function(s){e||(k(t.$$.fragment,s),e=!0)},o:function(s){b(t.$$.fragment,s),e=!1},d:function(s){V(t,s)}};return g("SvelteRegisterBlock",{block:o,id:q.name,type:"else",source:"(13:1) {:else}",ctx:l}),o}function z(l){var f;let t,e,o=((f=l[0].data.session)==null?void 0:f.user.name)+"",c,s,n,i;n=new A({props:{$$slots:{submitButton:[G]},$$scope:{ctx:l}},$$inline:!0});const h={c:function(){t=d("p"),e=R("Logged In as "),c=R(o),s=M(),L(n.$$.fragment),this.h()},l:function(a){t=p(a,"P",{});var u=B(t);e=E(u,"Logged In as "),c=E(u,o),u.forEach(m),s=Q(a),O(n.$$.fragment,a),this.h()},h:function(){_(t,v,8,2,167)},m:function(a,u){$(a,t,u),y(t,e),y(t,c),$(a,s,u),N(n,a,u),i=!0},p:function(a,u){var P;(!i||u&1)&&o!==(o=((P=a[0].data.session)==null?void 0:P.user.name)+"")&&Z(c,o);const I={};u&2&&(I.$$scope={dirty:u,ctx:a}),n.$set(I)},i:function(a){i||(k(n.$$.fragment,a),i=!0)},o:function(a){b(n.$$.fragment,a),i=!1},d:function(a){a&&(m(t),m(s)),V(n,a)}};return g("SvelteRegisterBlock",{block:h,id:z.name,type:"if",source:"(6:1) {#if $page.data.session?.user}",ctx:l}),h}function F(l){let t,e,o="Log In";const c={c:function(){t=d("div"),e=d("span"),e.textContent=o,this.h()},l:function(n){t=p(n,"DIV",{slot:!0,class:!0});var i=B(t);e=p(i,"SPAN",{"data-svelte-h":!0}),x(e)!=="svelte-m3t7dv"&&(e.textContent=o),i.forEach(m),this.h()},h:function(){_(e,v,17,4,415),S(t,"slot","submitButton"),S(t,"class","btn variant-filled"),_(t,v,16,3,358)},m:function(n,i){$(n,t,i),y(t,e)},p:D,d:function(n){n&&m(t)}};return g("SvelteRegisterBlock",{block:c,id:F.name,type:"slot",source:"(15:3) ",ctx:l}),c}function G(l){let t,e,o="Log Out";const c={c:function(){t=d("div"),e=d("span"),e.textContent=o,this.h()},l:function(n){t=p(n,"DIV",{slot:!0,class:!0});var i=B(t);e=p(i,"SPAN",{"data-svelte-h":!0}),x(e)!=="svelte-5cn72c"&&(e.textContent=o),i.forEach(m),this.h()},h:function(){_(e,v,11,4,291),S(t,"slot","submitButton"),S(t,"class","btn variant-filled"),_(t,v,10,3,234)},m:function(n,i){$(n,t,i),y(t,e)},p:D,d:function(n){n&&m(t)}};return g("SvelteRegisterBlock",{block:c,id:G.name,type:"slot",source:"(9:3) ",ctx:l}),c}function w(l){let t,e,o,c;const s=[z,q],n=[];function i(f,r){var a;return(a=f[0].data.session)!=null&&a.user?0:1}e=i(l),o=n[e]=s[e](l);const h={c:function(){t=d("div"),o.c(),this.h()},l:function(r){t=p(r,"DIV",{});var a=B(t);o.l(a),a.forEach(m),this.h()},h:function(){_(t,v,6,0,127)},m:function(r,a){$(r,t,a),n[e].m(t,null),c=!0},p:function(r,[a]){let u=e;e=i(r),e===u?n[e].p(r,a):(Y(),b(n[u],1,1,()=>{n[u]=null}),X(),o=n[e],o?o.p(r,a):(o=n[e]=s[e](r),o.c()),k(o,1),o.m(t,null))},i:function(r){c||(k(o),c=!0)},o:function(r){b(o),c=!1},d:function(r){r&&m(t),n[e].d()}};return g("SvelteRegisterBlock",{block:h,id:w.name,type:"component",source:"",ctx:l}),h}function tt(l,t,e){let o;J(C,"page"),K(l,C,i=>e(0,o=i));let{$$slots:c={},$$scope:s}=t;W("Page",c,[]);const n=[];return Object.keys(t).forEach(i=>{!~n.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Page> was created with unknown prop '${i}'`)}),l.$capture_state=()=>({page:C,SignIn:j,SignOut:A,$page:o}),[o]}class at extends T{constructor(t){super(t),U(this,t,tt,w,H,{}),g("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:w.name})}}export{at as component};
