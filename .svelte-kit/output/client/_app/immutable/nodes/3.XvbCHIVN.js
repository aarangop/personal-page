import{s as oe,L as w,q as H,e as A,a as L,c as E,b as F,g as S,f as g,m as _,F as K,i as N,h as P,M as fe,N as J,O as Q,P as V,Q as W,B as me,n as D,A as X,p as de,t as q,d as R,j as _e,l as Y}from"../chunks/scheduler.RyT_ppks.js";import{S as ce,i as ue,t as B,g as Z,a as U,c as $,b as he,d as pe,m as be,e as ge}from"../chunks/index.C3Nj-XYD.js";import{e as x}from"../chunks/each.D6YF6ztN.js";import{g as ve}from"../chunks/spread.CgU5AtxT.js";import{p as ke,i as Pe,a as ye}from"../chunks/entry.C5BBI4Ia.js";function Ie(l){const e=JSON.parse(l);return e.data&&(e.data=ke(e.data)),e}function ee(l){return HTMLElement.prototype.cloneNode.call(l)}function Te(l,e=()=>{}){const a=async({action:t,result:n,reset:r=!0,invalidateAll:o=!0})=>{n.type==="success"&&(r&&HTMLFormElement.prototype.reset.call(l),o&&await Pe()),(location.origin+location.pathname===t.origin+t.pathname||n.type==="redirect"||n.type==="error")&&ye(n)};async function i(t){var O,m,I,T;if(((O=t.submitter)!=null&&O.hasAttribute("formmethod")?t.submitter.formMethod:ee(l).method)!=="post")return;t.preventDefault();const r=new URL((m=t.submitter)!=null&&m.hasAttribute("formaction")?t.submitter.formAction:ee(l).action),o=new FormData(l),v=(I=t.submitter)==null?void 0:I.getAttribute("name");v&&o.append(v,((T=t.submitter)==null?void 0:T.getAttribute("value"))??"");const p=new AbortController;let f=!1;const b=await e({action:r,cancel:()=>f=!0,controller:p,formData:o,formElement:l,submitter:t.submitter})??a;if(f)return;let y;try{const c=await fetch(r,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:o,signal:p.signal});y=Ie(await c.text()),y.type==="error"&&(y.status=c.status)}catch(c){if((c==null?void 0:c.name)==="AbortError")return;y={type:"error",error:c}}b({action:r,formData:o,formElement:l,update:c=>a({action:r,result:y,reset:c==null?void 0:c.reset,invalidateAll:c==null?void 0:c.invalidateAll}),result:y})}return HTMLFormElement.prototype.addEventListener.call(l,"submit",i),{destroy(){HTMLFormElement.prototype.removeEventListener.call(l,"submit",i)}}}const Ae=l=>({}),te=l=>({}),Ee=l=>({}),ae=l=>({}),Ne=l=>({}),ie=l=>({});function le(l,e,a){const i=l.slice();return i[11]=e[a][0],i[12]=e[a][1],i}function Be(l){let e;return{c(){e=A("input"),this.h()},l(a){e=E(a,"INPUT",{type:!0,name:!0}),this.h()},h(){_(e,"type","hidden"),_(e,"name","callbackUrl"),e.value=l[3]},m(a,i){N(a,e,i)},p:D,d(a){a&&g(e)}}}function Le(l){let e;return{c(){e=A("input"),this.h()},l(a){e=E(a,"INPUT",{type:!0,name:!0}),this.h()},h(){_(e,"type","hidden"),_(e,"name","redirect"),e.value=l[4]},m(a,i){N(a,e,i)},p:D,d(a){a&&g(e)}}}function Se(l){let e,a=x(Object.entries(l[5])),i=[];for(let t=0;t<a.length;t+=1)i[t]=ne(le(l,a,t));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=X()},l(t){for(let n=0;n<i.length;n+=1)i[n].l(t);e=X()},m(t,n){for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(t,n);N(t,e,n)},p(t,n){if(n&32){a=x(Object.entries(t[5]));let r;for(r=0;r<a.length;r+=1){const o=le(t,a,r);i[r]?i[r].p(o,n):(i[r]=ne(o),i[r].c(),i[r].m(e.parentNode,e))}for(;r<i.length;r+=1)i[r].d(1);i.length=a.length}},d(t){t&&g(e),de(i,t)}}}function ne(l){let e;return{c(){e=A("input"),this.h()},l(a){e=E(a,"INPUT",{type:!0,name:!0}),this.h()},h(){_(e,"type","hidden"),_(e,"name",`authorizationParams-${l[11]}`),e.value=l[12]},m(a,i){N(a,e,i)},p:D,d(a){a&&g(e)}}}function re(l){let e;const a=l[10].credentials,i=w(a,l,l[9],ie);return{c(){i&&i.c()},l(t){i&&i.l(t)},m(t,n){i&&i.m(t,n),e=!0},p(t,n){i&&i.p&&(!e||n&512)&&J(i,a,t,t[9],e?V(a,t[9],n,Ne):Q(t[9]),ie)},i(t){e||(B(i,t),e=!0)},o(t){U(i,t),e=!1},d(t){i&&i.d(t)}}}function se(l){let e;const a=l[10].email,i=w(a,l,l[9],ae),t=i||Ue(l);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,r){t&&t.m(n,r),e=!0},p(n,r){i?i.p&&(!e||r&512)&&J(i,a,n,n[9],e?V(a,n[9],r,Ee):Q(n[9]),ae):t&&t.p&&(!e||r&2)&&t.p(n,e?r:-1)},i(n){e||(B(t,n),e=!0)},o(n){U(t,n),e=!1},d(n){t&&t.d(n)}}}function Ue(l){let e,a,i,t,n;return{c(){e=A("label"),a=q("Email"),t=L(),n=A("input"),this.h()},l(r){e=E(r,"LABEL",{class:!0,for:!0});var o=F(e);a=R(o,"Email"),o.forEach(g),t=S(r),n=E(r,"INPUT",{id:!0,type:!0,name:!0,placeholder:!0}),this.h()},h(){_(e,"class","section-header"),_(e,"for",i=`input-email-for-${l[1]}-provider`),_(n,"id","input-email-for-email-provider"),_(n,"type","email"),_(n,"name","email"),_(n,"placeholder","email@example.com"),n.required=!0},m(r,o){N(r,e,o),P(e,a),N(r,t,o),N(r,n,o)},p(r,o){o&2&&i!==(i=`input-email-for-${r[1]}-provider`)&&_(e,"for",i)},d(r){r&&(g(e),g(t),g(n))}}}function Oe(l){let e,a=l[1]?` with ${l[1]}`:"",i;return{c(){e=q("Signin"),i=q(a)},l(t){e=R(t,"Signin"),i=R(t,a)},m(t,n){N(t,e,n),N(t,i,n)},p(t,n){n&2&&a!==(a=t[1]?` with ${t[1]}`:"")&&_e(i,a)},d(t){t&&(g(e),g(i))}}}function ze(l){let e,a,i,t,n,r,o,v,p,f,d,b,y,O,m=l[3]&&Be(l),I=l[4]&&Le(l),T=l[5]&&Se(l),c=l[1]==="credentials"&&re(l),h=(l[1]==="email"||l[1]==="sendgrid"||l[1]==="resend")&&se(l);const M=l[10].submitButton,z=w(M,l,l[9],te),k=z||Oe(l);let j=[{method:"POST"},{action:f=`/${l[2]}`},{class:d=`signInButton ${l[0]}`},l[6]],C={};for(let s=0;s<j.length;s+=1)C=H(C,j[s]);return{c(){e=A("form"),a=A("input"),i=L(),m&&m.c(),t=L(),I&&I.c(),n=L(),T&&T.c(),r=L(),c&&c.c(),o=L(),h&&h.c(),v=L(),p=A("button"),k&&k.c(),this.h()},l(s){e=E(s,"FORM",{method:!0,action:!0,class:!0});var u=F(e);a=E(u,"INPUT",{type:!0,name:!0}),i=S(u),m&&m.l(u),t=S(u),I&&I.l(u),n=S(u),T&&T.l(u),r=S(u),c&&c.l(u),o=S(u),h&&h.l(u),v=S(u),p=E(u,"BUTTON",{type:!0});var G=F(p);k&&k.l(G),G.forEach(g),u.forEach(g),this.h()},h(){_(a,"type","hidden"),_(a,"name","providerId"),a.value=l[1],_(p,"type","submit"),K(e,C)},m(s,u){N(s,e,u),P(e,a),P(e,i),m&&m.m(e,null),P(e,t),I&&I.m(e,null),P(e,n),T&&T.m(e,null),P(e,r),c&&c.m(e,null),P(e,o),h&&h.m(e,null),P(e,v),P(e,p),k&&k.m(p,null),b=!0,y||(O=fe(Te.call(null,e)),y=!0)},p(s,[u]){(!b||u&2)&&(a.value=s[1]),s[3]&&m.p(s,u),s[4]&&I.p(s,u),s[5]&&T.p(s,u),s[1]==="credentials"?c?(c.p(s,u),u&2&&B(c,1)):(c=re(s),c.c(),B(c,1),c.m(e,o)):c&&(Z(),U(c,1,1,()=>{c=null}),$()),s[1]==="email"||s[1]==="sendgrid"||s[1]==="resend"?h?(h.p(s,u),u&2&&B(h,1)):(h=se(s),h.c(),B(h,1),h.m(e,v)):h&&(Z(),U(h,1,1,()=>{h=null}),$()),z?z.p&&(!b||u&512)&&J(z,M,s,s[9],b?V(M,s[9],u,Ae):Q(s[9]),te):k&&k.p&&(!b||u&2)&&k.p(s,b?u:-1),K(e,C=ve(j,[{method:"POST"},(!b||u&4&&f!==(f=`/${s[2]}`))&&{action:f},(!b||u&1&&d!==(d=`signInButton ${s[0]}`))&&{class:d},u&64&&s[6]]))},i(s){b||(B(c),B(h),B(k,s),b=!0)},o(s){U(c),U(h),U(k,s),b=!1},d(s){s&&g(e),m&&m.d(),I&&I.d(),T&&T.d(),c&&c.d(),h&&h.d(),k&&k.d(s),y=!1,O()}}}function Ce(l,e,a){const i=["className","provider","signInPage","options","authorizationParams"];let t=W(e,i),{$$slots:n={},$$scope:r}=e,{className:o=""}=e,{provider:v=""}=e,{signInPage:p="signin"}=e,{options:f=void 0}=e,{authorizationParams:d=void 0}=e;const b=f instanceof FormData?f.get("redirectTo"):f==null?void 0:f.redirectTo,y=f instanceof FormData?f.get("redirect"):f==null?void 0:f.redirectTo,O=d?typeof d=="string"&&d?new URLSearchParams(d):d:void 0;return l.$$set=m=>{e=H(H({},e),me(m)),a(6,t=W(e,i)),"className"in m&&a(0,o=m.className),"provider"in m&&a(1,v=m.provider),"signInPage"in m&&a(2,p=m.signInPage),"options"in m&&a(7,f=m.options),"authorizationParams"in m&&a(8,d=m.authorizationParams),"$$scope"in m&&a(9,r=m.$$scope)},[o,v,p,b,y,O,t,f,d,r,n]}class Fe extends ce{constructor(e){super(),ue(this,e,Ce,ze,oe,{className:0,provider:1,signInPage:2,options:7,authorizationParams:8})}}function De(l){let e,a,i,t,n="Podcast",r,o,v="Blog",p;return a=new Fe({props:{provider:"github",signInPage:"signin"}}),{c(){e=A("div"),he(a.$$.fragment),i=L(),t=A("a"),t.textContent=n,r=L(),o=A("a"),o.textContent=v,this.h()},l(f){e=E(f,"DIV",{class:!0});var d=F(e);pe(a.$$.fragment,d),i=S(d),t=E(d,"A",{class:!0,href:!0,"data-svelte-h":!0}),Y(t)!=="svelte-1wastld"&&(t.textContent=n),r=S(d),o=E(d,"A",{class:!0,href:!0,"data-svelte-h":!0}),Y(o)!=="svelte-1s4kslt"&&(o.textContent=v),d.forEach(g),this.h()},h(){_(t,"class","card p-4"),_(t,"href","/admin/podcast"),_(o,"class","card p-4"),_(o,"href","/admin/blog"),_(e,"class","flex flex-row")},m(f,d){N(f,e,d),be(a,e,null),P(e,i),P(e,t),P(e,r),P(e,o),p=!0},p:D,i(f){p||(B(a.$$.fragment,f),p=!0)},o(f){U(a.$$.fragment,f),p=!1},d(f){f&&g(e),ge(a)}}}class we extends ce{constructor(e){super(),ue(this,e,null,De,oe,{})}}export{we as component};
