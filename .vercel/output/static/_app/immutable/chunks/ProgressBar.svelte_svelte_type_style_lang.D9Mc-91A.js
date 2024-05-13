import{w as oe,r as re}from"./entry.DAzvZ7mJ.js";import{O as ne,s as ae,B as N,o as A,C as G,e as T,b as W,d as R,h as M,n as H,y as X,P as z,K as Q,t as ce,L as V,f as ie,D as F,E as le,z as ue,N as fe}from"./16.qRzACfvT.js";import{g as de}from"./spread.CgU5AtxT.js";import{S as me,i as he,d as C,v as ge,a as b,k as g,b as O,l as S,c as J,s as ve}from"./index.DWOnfsL5.js";const I={};function K(s){return s==="local"?localStorage:sessionStorage}function q(s,e,t){const a=(t==null?void 0:t.serializer)??JSON,m=(t==null?void 0:t.storage)??"local";function l(u,c){K(m).setItem(u,a.stringify(c))}if(!I[s]){const u=oe(e,r=>{const n=K(m).getItem(s);n&&r(a.parse(n));{const f=d=>{d.key===s&&r(d.newValue?a.parse(d.newValue):null)};return window.addEventListener("storage",f),()=>window.removeEventListener("storage",f)}}),{subscribe:c,set:i}=u;I[s]={set(r){l(s,r),i(r)},update(r){const n=r(ne(u));l(s,n),i(n)},subscribe:c}}return I[s]}const be=q("modeOsPrefers",!1),we=q("modeUserPrefers",void 0),ye=q("modeCurrent",!1);function ze(){const s=window.matchMedia("(prefers-color-scheme: light)").matches;return be.set(s),s}function Me(s){we.set(s)}function Be(s){const e=document.documentElement.classList,t="dark";s===!0?e.remove(t):e.add(t),ye.set(s)}function Ce(){const s=document.documentElement.classList,e=localStorage.getItem("modeUserPrefers")==="false",t=!("modeUserPrefers"in localStorage),a=window.matchMedia("(prefers-color-scheme: dark)").matches;e||t&&a?s.add("dark"):s.remove("dark")}const Y="(prefers-reduced-motion: reduce)";function Pe(){return window.matchMedia(Y).matches}re(Pe(),s=>{{const e=a=>{s(a.matches)},t=window.matchMedia(Y);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});const B="node_modules/@skeletonlabs/skeleton/dist/components/Avatar/Avatar.svelte";function Z(s){let e,t,a=String(s[1]).substring(0,2).toUpperCase()+"",m,l;const u={c:function(){e=Q("svg"),t=Q("text"),m=ce(a),this.h()},l:function(i){e=V(i,"svg",{class:!0,viewBox:!0});var r=R(e);t=V(r,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var n=R(t);m=ie(n,a),n.forEach(b),r.forEach(b),this.h()},h:function(){g(t,"x","50%"),g(t,"y","50%"),g(t,"dominant-baseline","central"),g(t,"text-anchor","middle"),g(t,"font-weight","bold"),g(t,"font-size",s[3]),g(t,"class",l="avatar-text "+s[2]),M(t,B,39,3,1253),g(e,"class","avatar-initials w-full h-full"),g(e,"viewBox","0 0 512 512"),M(e,B,38,2,1184)},m:function(i,r){O(i,e,r),J(e,t),J(t,m)},p:function(i,r){r&2&&a!==(a=String(i[1]).substring(0,2).toUpperCase()+"")&&ve(m,a),r&8&&g(t,"font-size",i[3]),r&4&&l!==(l="avatar-text "+i[2])&&g(t,"class",l)},d:function(i){i&&b(e)}};return C("SvelteRegisterBlock",{block:u,id:Z.name,type:"else",source:"(38:1) {:else}",ctx:s}),u}function x(s){let e,t,a,m,l,u,c,i,r=[{class:t="avatar-image "+s[8]},{style:a=s[10].style??""},{src:m=s[0]},{alt:l=s[10].alt||""},s[9]()],n={};for(let d=0;d<r.length;d+=1)n=A(n,r[d]);const f={c:function(){e=T("img"),this.h()},l:function(h){e=W(h,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h:function(){F(e,n),M(e,B,28,2,971)},m:function(h,v){O(h,e,v),c||(i=[le(u=s[5].call(null,e,s[6])),S(e,"error",s[21],!1,!1,!1,!1)],c=!0)},p:function(h,v){F(e,n=de(r,[{class:t},v&1024&&a!==(a=h[10].style??"")&&{style:a},v&1&&!ue(e.src,m=h[0])&&{src:m},v&1024&&l!==(l=h[10].alt||"")&&{alt:l},h[9]()])),u&&fe(u.update)&&v&64&&u.update.call(null,h[6])},d:function(h){h&&b(e),c=!1,X(i)}};return C("SvelteRegisterBlock",{block:f,id:x.name,type:"if",source:"(28:1) {#if src}",ctx:s}),f}function j(s){let e,t,a,m;function l(r,n){return r[0]?x:Z}let u=l(s),c=u(s);const i={c:function(){e=T("figure"),c.c(),this.h()},l:function(n){e=W(n,"FIGURE",{class:!0,"data-testid":!0});var f=R(e);c.l(f),f.forEach(b),this.h()},h:function(){g(e,"class",t="avatar "+s[7]),g(e,"data-testid","avatar"),M(e,B,26,0,858)},m:function(n,f){O(n,e,f),c.m(e,null),a||(m=[S(e,"click",s[17],!1,!1,!1,!1),S(e,"keydown",s[18],!1,!1,!1,!1),S(e,"keyup",s[19],!1,!1,!1,!1),S(e,"keypress",s[20],!1,!1,!1,!1)],a=!0)},p:function(n,[f]){u===(u=l(n))&&c?c.p(n,f):(c.d(1),c=u(n),c&&(c.c(),c.m(e,null))),f&128&&t!==(t="avatar "+n[7])&&g(e,"class",t)},i:H,o:H,d:function(n){n&&b(e),c.d(),a=!1,X(m)}};return C("SvelteRegisterBlock",{block:i,id:j.name,type:"component",source:"",ctx:s}),i}function ke(s,e,t){let a;const m=["initials","fill","fontSize","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let l=N(e,m),{$$slots:u={},$$scope:c}=e;ge("Avatar",u,[]);let{initials:i="AB"}=e,{fill:r="fill-token"}=e,{fontSize:n=150}=e,{src:f=""}=e,{fallback:d=""}=e,{action:h=()=>{}}=e,{actionParams:v=""}=e,{background:w="bg-surface-400-500-token"}=e,{width:y="w-16"}=e,{border:P=""}=e,{rounded:k="rounded-full"}=e,{shadow:E=""}=e,{cursor:_=""}=e,L="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",U="w-full object-cover";function D(){return delete l.class,l}function p(o){z.call(this,s,o)}function $(o){z.call(this,s,o)}function ee(o){z.call(this,s,o)}function te(o){z.call(this,s,o)}const se=()=>t(0,f=d);return s.$$set=o=>{t(10,e=A(A({},e),G(o))),t(23,l=N(e,m)),"initials"in o&&t(1,i=o.initials),"fill"in o&&t(2,r=o.fill),"fontSize"in o&&t(3,n=o.fontSize),"src"in o&&t(0,f=o.src),"fallback"in o&&t(4,d=o.fallback),"action"in o&&t(5,h=o.action),"actionParams"in o&&t(6,v=o.actionParams),"background"in o&&t(11,w=o.background),"width"in o&&t(12,y=o.width),"border"in o&&t(13,P=o.border),"rounded"in o&&t(14,k=o.rounded),"shadow"in o&&t(15,E=o.shadow),"cursor"in o&&t(16,_=o.cursor)},s.$capture_state=()=>({initials:i,fill:r,fontSize:n,src:f,fallback:d,action:h,actionParams:v,background:w,width:y,border:P,rounded:k,shadow:E,cursor:_,cBase:L,cImage:U,prunedRestProps:D,classesBase:a}),s.$inject_state=o=>{t(10,e=A(A({},e),o)),"initials"in e&&t(1,i=o.initials),"fill"in e&&t(2,r=o.fill),"fontSize"in e&&t(3,n=o.fontSize),"src"in e&&t(0,f=o.src),"fallback"in e&&t(4,d=o.fallback),"action"in e&&t(5,h=o.action),"actionParams"in e&&t(6,v=o.actionParams),"background"in e&&t(11,w=o.background),"width"in e&&t(12,y=o.width),"border"in e&&t(13,P=o.border),"rounded"in e&&t(14,k=o.rounded),"shadow"in e&&t(15,E=o.shadow),"cursor"in e&&t(16,_=o.cursor),"cBase"in e&&t(22,L=o.cBase),"cImage"in e&&t(8,U=o.cImage),"classesBase"in e&&t(7,a=o.classesBase)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{t(7,a=`${L} ${w} ${y} ${P} ${k} ${E} ${_} ${e.class??""}`)},e=G(e),[f,i,r,n,d,h,v,a,U,D,e,w,y,P,k,E,_,p,$,ee,te,se]}class Le extends me{constructor(e){super(e),he(this,e,ke,j,ae,{initials:1,fill:2,fontSize:3,src:0,fallback:4,action:5,actionParams:6,background:11,width:12,border:13,rounded:14,shadow:15,cursor:16}),C("SvelteRegisterComponent",{component:this,tagName:"Avatar",options:e,id:j.name})}get initials(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initials(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get fill(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set fill(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get fontSize(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set fontSize(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get src(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set src(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get fallback(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set fallback(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get action(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set action(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get actionParams(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set actionParams(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get background(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set background(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get width(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set width(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get border(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set border(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get rounded(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set rounded(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get shadow(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set shadow(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get cursor(){throw new Error("<Avatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set cursor(e){throw new Error("<Avatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Le as A,Be as a,Me as b,ze as g,ye as m,Ce as s};
