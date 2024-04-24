import{s as K,w as L,k as N,x as U,y as Q,e as y,a as F,b as S,d as q,g as M,h as k,z as D,A as V,B as W,C as X,D as Y,E as I,t as Z,f as x}from"./16.DwSqnteW.js";import{S as $,i as tt,d as b,v as et,a as g,g as v,b as h,c as z,t as nt,h as ot,q as G}from"./index.DO47-CzA.js";import{g as it}from"./spread.CgU5AtxT.js";import{e as H}from"./forms.C10bcbAc.js";const P="node_modules/@auth/sveltekit/dist/components/SignOut.svelte",st=s=>({}),A=s=>({});function T(s){var l,d;let t,i,o=((l=s[1])==null?void 0:l.redirect)&&w(s),e=((d=s[1])==null?void 0:d.redirectTo)&&E(s);const c={c:function(){o&&o.c(),t=F(),e&&e.c(),i=I()},l:function(n){o&&o.l(n),t=M(n),e&&e.l(n),i=I()},m:function(n,a){o&&o.m(n,a),h(n,t,a),e&&e.m(n,a),h(n,i,a)},p:function(n,a){var p,u;(p=n[1])!=null&&p.redirect?o?o.p(n,a):(o=w(n),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),(u=n[1])!=null&&u.redirectTo?e?e.p(n,a):(e=E(n),e.c(),e.m(i.parentNode,i)):e&&(e.d(1),e=null)},d:function(n){n&&(g(t),g(i)),o&&o.d(n),e&&e.d(n)}};return b("SvelteRegisterBlock",{block:c,id:T.name,type:"if",source:"(14:2) {#if options}",ctx:s}),c}function w(s){let t,i;const o={c:function(){t=y("input"),this.h()},l:function(c){t=S(c,"INPUT",{type:!0,name:!0}),this.h()},h:function(){v(t,"type","hidden"),v(t,"name","redirect"),t.value=i=s[1].redirect,k(t,P,15,6,324)},m:function(c,l){h(c,t,l)},p:function(c,l){l&2&&i!==(i=c[1].redirect)&&G(t,"value",i)},d:function(c){c&&g(t)}};return b("SvelteRegisterBlock",{block:o,id:w.name,type:"if",source:"(15:4) {#if options?.redirect}",ctx:s}),o}function E(s){let t,i;const o={c:function(){t=y("input"),this.h()},l:function(c){t=S(c,"INPUT",{type:!0,name:!0}),this.h()},h:function(){v(t,"type","hidden"),v(t,"name","redirectTo"),t.value=i=s[1].redirectTo,k(t,P,18,6,435)},m:function(c,l){h(c,t,l)},p:function(c,l){l&2&&i!==(i=c[1].redirectTo)&&G(t,"value",i)},d:function(c){c&&g(t)}};return b("SvelteRegisterBlock",{block:o,id:E.name,type:"if",source:"(18:4) {#if options?.redirectTo}",ctx:s}),o}function J(s){let t;const i={c:function(){t=Z("Sign Out")},l:function(e){t=x(e,"Sign Out")},m:function(e,c){h(e,t,c)},d:function(e){e&&g(t)}};return b("SvelteRegisterBlock",{block:i,id:J.name,type:"fallback",source:"(23:30) Sign Out",ctx:s}),i}function R(s){let t,i,o,e,c,l,d,m,n=s[1]&&T(s);const a=s[5].submitButton,p=L(a,s,s[4],A),u=p||J(s);let B=[{method:"POST"},{action:e=`/${s[2]}`},{class:c=`signOutButton ${s[0]}`},s[3]],O={};for(let _=0;_<B.length;_+=1)O=N(O,B[_]);const j={c:function(){t=y("form"),n&&n.c(),i=F(),o=y("button"),u&&u.c(),this.h()},l:function(r){t=S(r,"FORM",{method:!0,action:!0,class:!0});var f=q(t);n&&n.l(f),i=M(f),o=S(f,"BUTTON",{type:!0});var C=q(o);u&&u.l(C),C.forEach(g),f.forEach(g),this.h()},h:function(){v(o,"type","submit"),k(o,P,21,2,524),D(t,O),k(t,P,6,0,149)},m:function(r,f){h(r,t,f),n&&n.m(t,null),z(t,i),z(t,o),u&&u.m(o,null),l=!0,d||(m=V(H.call(null,t)),d=!0)},p:function(r,[f]){r[1]?n?n.p(r,f):(n=T(r),n.c(),n.m(t,i)):n&&(n.d(1),n=null),p&&p.p&&(!l||f&16)&&W(p,a,r,r[4],l?Y(a,r[4],f,st):X(r[4]),A),D(t,O=it(B,[{method:"POST"},(!l||f&4&&e!==(e=`/${r[2]}`))&&{action:e},(!l||f&1&&c!==(c=`signOutButton ${r[0]}`))&&{class:c},f&8&&r[3]]))},i:function(r){l||(nt(u,r),l=!0)},o:function(r){ot(u,r),l=!1},d:function(r){r&&g(t),n&&n.d(),u&&u.d(r),d=!1,m()}};return b("SvelteRegisterBlock",{block:j,id:R.name,type:"component",source:"",ctx:s}),j}function ct(s,t,i){const o=["className","options","signOutPage"];let e=U(t,o),{$$slots:c={},$$scope:l}=t;et("SignOut",c,["submitButton"]);let{className:d=""}=t,{options:m=void 0}=t,{signOutPage:n="signout"}=t;return s.$$set=a=>{t=N(N({},t),Q(a)),i(3,e=U(t,o)),"className"in a&&i(0,d=a.className),"options"in a&&i(1,m=a.options),"signOutPage"in a&&i(2,n=a.signOutPage),"$$scope"in a&&i(4,l=a.$$scope)},s.$capture_state=()=>({enhance:H,className:d,options:m,signOutPage:n}),s.$inject_state=a=>{"className"in t&&i(0,d=a.className),"options"in t&&i(1,m=a.options),"signOutPage"in t&&i(2,n=a.signOutPage)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),[d,m,n,e,l,c]}class ft extends ${constructor(t){super(t),tt(this,t,ct,R,K,{className:0,options:1,signOutPage:2}),b("SvelteRegisterComponent",{component:this,tagName:"SignOut",options:t,id:R.name})}get className(){throw new Error("<SignOut>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set className(t){throw new Error("<SignOut>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get options(){throw new Error("<SignOut>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set options(t){throw new Error("<SignOut>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get signOutPage(){throw new Error("<SignOut>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set signOutPage(t){throw new Error("<SignOut>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ft as S};
