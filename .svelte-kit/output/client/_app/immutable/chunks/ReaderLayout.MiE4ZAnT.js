import{s as f,i as _,e as m,b as p,d as h,h as v,u as w,j as $,k as g}from"./16.qRzACfvT.js";import{S as y,i as R,d,v as b,a as u,k as L,b as S,t as j,g as k}from"./index.DWOnfsL5.js";const C="src/lib/components/ReaderLayout.svelte";function c(o){let t,n;const l=o[1].default,e=_(l,o,o[0],null),r={c:function(){t=m("div"),e&&e.c(),this.h()},l:function(s){t=p(s,"DIV",{class:!0});var i=h(t);e&&e.l(i),i.forEach(u),this.h()},h:function(){L(t,"class","w-full md:w-4/5 lg:w-3/5 xl:w-2/3 2xl:w-1/3 justify-center"),v(t,C,0,0,0)},m:function(s,i){S(s,t,i),e&&e.m(t,null),n=!0},p:function(s,[i]){e&&e.p&&(!n||i&1)&&w(e,l,s,s[0],n?g(l,s[0],i,null):$(s[0]),null)},i:function(s){n||(j(e,s),n=!0)},o:function(s){k(e,s),n=!1},d:function(s){s&&u(t),e&&e.d(s)}};return d("SvelteRegisterBlock",{block:r,id:c.name,type:"component",source:"",ctx:o}),r}function D(o,t,n){let{$$slots:l={},$$scope:e}=t;b("ReaderLayout",l,["default"]);const r=[];return Object.keys(t).forEach(a=>{!~r.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<ReaderLayout> was created with unknown prop '${a}'`)}),o.$$set=a=>{"$$scope"in a&&n(0,e=a.$$scope)},[e,l]}class q extends y{constructor(t){super(t),R(this,t,D,c,f,{}),d("SvelteRegisterComponent",{component:this,tagName:"ReaderLayout",options:t,id:c.name})}}export{q as R};