import{s as at,e as b,a as U,A as J,b as w,l as L,g as S,h as g,d as N,t as K,f as Q,n as W,w as D,y as ot}from"../chunks/16.qRzACfvT.js";import{S as lt,i as it,d as O,v as ct,k as _,b as j,g as z,n as rt,t as X,a as C,o as ut,e as ft,f as dt,c as m,m as ht,l as A,h as mt,s as pt}from"../chunks/index.DWOnfsL5.js";import{b as $}from"../chunks/paths.DKtcFExo.js";import{I as tt}from"../chunks/Icon.TsCgaYdk.js";async function q(i,t,s){const{callbackUrl:f=window.location.href,redirect:c=!0}=t??{},l=i==="credentials",a=l||i==="email",h=$??"",p=`${`${h}/auth/${l?"callback":"signin"}/${i}`}?${new URLSearchParams(s)}`,y=await fetch(`${h}/auth/csrf`),{csrfToken:u}=await y.json(),n=await fetch(p,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Return-Redirect":"1"},body:new URLSearchParams({...t,csrfToken:u,callbackUrl:f})}),r=await n.clone().json();if(c||!a){window.location.href=r.url??f,r.url.includes("#")&&window.location.reload();return}return n}async function Z(i){const{callbackUrl:t=window.location.href}=i??{},s=$??"",f=await fetch(`${s}/auth/csrf`),{csrfToken:c}=await f.json(),a=(await(await fetch(`${s}/auth/signout`,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Return-Redirect":"1"},body:new URLSearchParams({csrfToken:c,callbackUrl:t})})).json()).url??t;window.location.href=a,a.includes("#")&&window.location.reload()}const k="src/routes/login/+page.svelte";function et(i){let t,s,f,c="Sign In with GitHub",l,d,a,h,o,p,y;a=new tt({props:{icon:"bi:github"},$$inline:!0});let u=i[3]&&st(i);const n={c:function(){t=b("div"),s=b("button"),f=b("span"),f.textContent=c,l=U(),d=b("span"),ft(a.$$.fragment),h=U(),u&&u.c(),this.h()},l:function(e){t=w(e,"DIV",{class:!0});var v=N(t);s=w(v,"BUTTON",{class:!0});var I=N(s);f=w(I,"SPAN",{"data-svelte-h":!0}),L(f)!=="svelte-1cqsa9"&&(f.textContent=c),l=S(I),d=w(I,"SPAN",{});var x=N(d);dt(a.$$.fragment,x),x.forEach(C),I.forEach(C),h=S(v),u&&u.l(v),v.forEach(C),this.h()},h:function(){g(f,k,22,3,691),g(d,k,23,3,729),_(s,"class","btn variant-filled"),g(s,k,21,2,596),_(t,"class","flex flex-col space-y-2"),g(t,k,20,1,556)},m:function(e,v){j(e,t,v),m(t,s),m(s,f),m(s,l),m(s,d),ht(a,d,null),m(t,h),u&&u.m(t,null),o=!0,p||(y=A(s,"click",i[5],!1,!1,!1,!1),p=!0)},p:function(e,v){e[3]&&u.p(e,v)},i:function(e){o||(X(a.$$.fragment,e),o=!0)},o:function(e){z(a.$$.fragment,e),o=!1},d:function(e){e&&C(t),mt(a),u&&u.d(),p=!1,y()}};return O("SvelteRegisterBlock",{block:n,id:et.name,type:"else",source:"(17:0) {:else}",ctx:i}),n}function nt(i){var u;let t,s,f,c=((u=i[0].session.user)==null?void 0:u.name)+"",l,d,a,h="Log Out",o,p;const y={c:function(){t=b("div"),s=b("div"),f=K("You're currently logged in as "),l=K(c),d=U(),a=b("button"),a.textContent=h,this.h()},l:function(r){t=w(r,"DIV",{class:!0});var e=N(t);s=w(e,"DIV",{});var v=N(s);f=Q(v,"You're currently logged in as "),l=Q(v,c),v.forEach(C),d=S(e),a=w(e,"BUTTON",{class:!0,"data-svelte-h":!0}),L(a)!=="svelte-1jzggol"&&(a.textContent=h),e.forEach(C),this.h()},h:function(){g(s,k,14,2,364),_(a,"class","btn variant-filled"),g(a,k,15,2,433),_(t,"class","flex flex-col space-y-2"),g(t,k,13,1,324)},m:function(r,e){j(r,t,e),m(t,s),m(s,f),m(s,l),m(t,d),m(t,a),o||(p=A(a,"click",i[4],!1,!1,!1,!1),o=!0)},p:function(r,e){var v;e&1&&c!==(c=((v=r[0].session.user)==null?void 0:v.name)+"")&&pt(l,c)},i:W,o:W,d:function(r){r&&C(t),o=!1,p()}};return O("SvelteRegisterBlock",{block:y,id:nt.name,type:"if",source:"(10:0) {#if data.session}",ctx:i}),y}function st(i){let t,s,f,c,l="or",d,a,h,o,p,y="Username",u,n,r,e,v="Password",I,x,H,T,F="Log In",V,G;const M={c:function(){t=b("div"),s=b("hr"),f=U(),c=b("span"),c.textContent=l,d=U(),a=b("hr"),h=U(),o=b("form"),p=b("label"),p.textContent=y,u=U(),n=b("input"),r=U(),e=b("label"),e.textContent=v,I=U(),x=b("input"),H=U(),T=b("button"),T.textContent=F,this.h()},l:function(P){t=w(P,"DIV",{class:!0});var R=N(t);s=w(R,"HR",{class:!0}),f=S(R),c=w(R,"SPAN",{"data-svelte-h":!0}),L(c)!=="svelte-17wkmf7"&&(c.textContent=l),d=S(R),a=w(R,"HR",{class:!0}),R.forEach(C),h=S(P),o=w(P,"FORM",{class:!0});var E=N(o);p=w(E,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),L(p)!=="svelte-1dmp8vp"&&(p.textContent=y),u=S(E),n=w(E,"INPUT",{class:!0,type:!0,name:!0}),r=S(E),e=w(E,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),L(e)!=="svelte-m1esth"&&(e.textContent=v),I=S(E),x=w(E,"INPUT",{class:!0,type:!0,name:!0}),H=S(E),T=w(E,"BUTTON",{class:!0,"data-svelte-h":!0}),L(T)!=="svelte-izxejo"&&(T.textContent=F),E.forEach(C),this.h()},h:function(){_(s,"class","flex-1"),g(s,k,29,4,891),g(c,k,30,4,917),_(a,"class","flex-1"),g(a,k,31,4,937),_(t,"class","flex flex-row justify-between items-center space-x-2"),g(t,k,28,3,820),_(p,"class","label"),_(p,"for","username"),g(p,k,34,4,1014),_(n,"class","input mb-2"),_(n,"type","text"),_(n,"name","username"),g(n,k,35,4,1071),_(e,"class","label"),_(e,"for","password"),g(e,k,36,4,1154),_(x,"class","input mb-2"),_(x,"type","password"),_(x,"name","password"),g(x,k,37,4,1211),_(T,"class","btn variant-filled"),g(T,k,38,4,1298),_(o,"class","card flex flex-col p-4"),g(o,k,33,3,972)},m:function(P,R){j(P,t,R),m(t,s),m(t,f),m(t,c),m(t,d),m(t,a),j(P,h,R),j(P,o,R),m(o,p),m(o,u),m(o,n),D(n,i[1]),m(o,r),m(o,e),m(o,I),m(o,x),D(x,i[2]),m(o,H),m(o,T),V||(G=[A(n,"input",i[6]),A(x,"input",i[7]),A(T,"click",i[8],!1,!1,!1,!1)],V=!0)},p:function(P,R){R&2&&n.value!==P[1]&&D(n,P[1]),R&4&&x.value!==P[2]&&D(x,P[2])},d:function(P){P&&(C(t),C(h),C(o)),V=!1,ot(G)}};return O("SvelteRegisterBlock",{block:M,id:st.name,type:"if",source:"(25:2) {#if credentialsProvider}",ctx:i}),M}function Y(i){let t,s="Log In",f,c,l,d,a;const h=[nt,et],o=[];function p(u,n){return u[0].session?0:1}c=p(i),l=o[c]=h[c](i);const y={c:function(){t=b("h2"),t.textContent=s,f=U(),l.c(),d=J(),this.h()},l:function(n){t=w(n,"H2",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-1q515s4"&&(t.textContent=s),f=S(n),l.l(n),d=J(),this.h()},h:function(){_(t,"class","h2 mb-4"),g(t,k,11,0,272)},m:function(n,r){j(n,t,r),j(n,f,r),o[c].m(n,r),j(n,d,r),a=!0},p:function(n,[r]){let e=c;c=p(n),c===e?o[c].p(n,r):(ut(),z(o[e],1,1,()=>{o[e]=null}),rt(),l=o[c],l?l.p(n,r):(l=o[c]=h[c](n),l.c()),X(l,1),l.m(d.parentNode,d))},i:function(n){a||(X(l),a=!0)},o:function(n){z(l),a=!1},d:function(n){n&&(C(t),C(f),C(d)),o[c].d(n)}};return O("SvelteRegisterBlock",{block:y,id:Y.name,type:"component",source:"",ctx:i}),y}function _t(i,t,s){let{$$slots:f={},$$scope:c}=t;ct("Page",f,[]);let{data:l}=t,d=l.providers.filter(e=>e.id==="credentials"),a="",h="";i.$$.on_mount.push(function(){l===void 0&&!("data"in t||i.$$.bound[i.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const o=["data"];Object.keys(t).forEach(e=>{!~o.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Page> was created with unknown prop '${e}'`)});const p=()=>Z({callbackUrl:"/"}),y=()=>q("github",{callbackUrl:"/"});function u(){a=this.value,s(1,a)}function n(){h=this.value,s(2,h)}const r=()=>q("credentials",{username:a,password:h,callbackUrl:"/"});return i.$$set=e=>{"data"in e&&s(0,l=e.data)},i.$capture_state=()=>({signIn:q,signOut:Z,Icon:tt,data:l,credentialsProvider:d,username:a,password:h}),i.$inject_state=e=>{"data"in e&&s(0,l=e.data),"credentialsProvider"in e&&s(3,d=e.credentialsProvider),"username"in e&&s(1,a=e.username),"password"in e&&s(2,h=e.password)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),[l,a,h,d,p,y,u,n,r]}class kt extends lt{constructor(t){super(t),it(this,t,_t,Y,at,{data:0}),O("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:Y.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{kt as component};
