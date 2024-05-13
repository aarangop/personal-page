import{s as G,a as F,r as J,g as I,e as g,b as v,d as P,l as K,h as $,A as x,m as Q,t as U,f as W}from"../chunks/16.qRzACfvT.js";import{S as X,i as Y,d as _,v as Z,e as N,a as m,f as O,b as k,m as L,t as h,g as p,h as V,j as B,k as b,c as y,o as q,n as z,s as ee}from"../chunks/index.DWOnfsL5.js";import{P as A}from"../chunks/PodcastCard.DxyfFOce.js";import{g as te}from"../chunks/entry.DAzvZ7mJ.js";import{R as H}from"../chunks/ReaderLayout.MiE4ZAnT.js";const w="src/routes/podcast/+page.svelte";function D(i,e,s){const l=i.slice();return l[1]=e[s],l}function E(i){let e,s,l=B(i[0].podcastFeeds),t=[];for(let o=0;o<l.length;o+=1)t[o]=R(D(i,l,o));const n=o=>p(t[o],1,1,()=>{t[o]=null}),c={c:function(){for(let a=0;a<t.length;a+=1)t[a].c();e=x()},l:function(a){for(let u=0;u<t.length;u+=1)t[u].l(a);e=x()},m:function(a,u){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(a,u);k(a,e,u),s=!0},p:function(a,u){if(u&1){l=B(a[0].podcastFeeds);let r;for(r=0;r<l.length;r+=1){const f=D(a,l,r);t[r]?(t[r].p(f,u),h(t[r],1)):(t[r]=R(f),t[r].c(),h(t[r],1),t[r].m(e.parentNode,e))}for(q(),r=l.length;r<t.length;r+=1)n(r);z()}},i:function(a){if(!s){for(let u=0;u<l.length;u+=1)h(t[u]);s=!0}},o:function(a){t=t.filter(Boolean);for(let u=0;u<t.length;u+=1)p(t[u]);s=!1},d:function(a){a&&m(e),Q(t,a)}};return _("SvelteRegisterBlock",{block:c,id:E.name,type:"if",source:"(16:4) {#if data.podcastFeeds.length > 0}",ctx:i}),c}function M(i){let e=i[1].slug+"",s;const l={c:function(){s=U(e)},l:function(n){s=W(n,e)},m:function(n,c){k(n,s,c)},p:function(n,c){c&1&&e!==(e=n[1].slug+"")&&ee(s,e)},d:function(n){n&&m(s)}};return _("SvelteRegisterBlock",{block:l,id:M.name,type:"slot",source:"(18:6) <PodcastCard enableEdit={false} feedData={feed}>",ctx:i}),l}function R(i){let e,s;e=new A({props:{enableEdit:!1,feedData:i[1],$$slots:{default:[M]},$$scope:{ctx:i}},$$inline:!0});const l={c:function(){N(e.$$.fragment)},l:function(n){O(e.$$.fragment,n)},m:function(n,c){L(e,n,c),s=!0},p:function(n,c){const o={};c&1&&(o.feedData=n[1]),c&17&&(o.$$scope={dirty:c,ctx:n}),e.$set(o)},i:function(n){s||(h(e.$$.fragment,n),s=!0)},o:function(n){p(e.$$.fragment,n),s=!1},d:function(n){V(e,n)}};return _("SvelteRegisterBlock",{block:l,id:R.name,type:"each",source:"(17:5) {#each data.podcastFeeds as feed}",ctx:i}),l}function T(i){let e,s,l="My Podcasts",t,n,c,o,a=i[0].podcastFeeds.length>0&&E(i);const u={c:function(){e=g("section"),s=g("h2"),s.textContent=l,t=F(),n=g("div"),c=g("div"),a&&a.c(),this.h()},l:function(f){e=v(f,"SECTION",{class:!0});var d=P(e);s=v(d,"H2",{class:!0,"data-svelte-h":!0}),K(s)!=="svelte-1iff8uz"&&(s.textContent=l),t=I(d),n=v(d,"DIV",{class:!0});var C=P(n);c=v(C,"DIV",{class:!0});var j=P(c);a&&a.l(j),j.forEach(m),C.forEach(m),d.forEach(m),this.h()},h:function(){b(s,"class","h2 mb-4 dark:text-white text-2xl"),$(s,w,15,2,325),b(c,"class","grid lg:grid-cols-2 sm:grid-cols-1 gap-2"),$(c,w,17,3,435),b(n,"class","flex flex-col space-y-2 grow"),$(n,w,16,2,389),b(e,"class","flex flex-col"),$(e,w,14,1,291)},m:function(f,d){k(f,e,d),y(e,s),y(e,t),y(e,n),y(n,c),a&&a.m(c,null),o=!0},p:function(f,d){f[0].podcastFeeds.length>0?a?(a.p(f,d),d&1&&h(a,1)):(a=E(f),a.c(),h(a,1),a.m(c,null)):a&&(q(),p(a,1,1,()=>{a=null}),z())},i:function(f){o||(h(a),o=!0)},o:function(f){p(a),o=!1},d:function(f){f&&m(e),a&&a.d()}};return _("SvelteRegisterBlock",{block:u,id:T.name,type:"slot",source:"(11:0) <ReaderLayout>",ctx:i}),u}function S(i){let e,s,l;s=new H({props:{$$slots:{default:[T]},$$scope:{ctx:i}},$$inline:!0});const t={c:function(){e=F(),N(s.$$.fragment),this.h()},l:function(c){J("svelte-1ngju15",document.head).forEach(m),e=I(c),O(s.$$.fragment,c),this.h()},h:function(){document.title="Podcasts"},m:function(c,o){k(c,e,o),L(s,c,o),l=!0},p:function(c,[o]){const a={};o&17&&(a.$$scope={dirty:o,ctx:c}),s.$set(a)},i:function(c){l||(h(s.$$.fragment,c),l=!0)},o:function(c){p(s.$$.fragment,c),l=!1},d:function(c){c&&m(e),V(s,c)}};return _("SvelteRegisterBlock",{block:t,id:S.name,type:"component",source:"",ctx:i}),t}function ne(i,e,s){let{$$slots:l={},$$scope:t}=e;Z("Page",l,[]);let{data:n}=e;i.$$.on_mount.push(function(){n===void 0&&!("data"in e||i.$$.bound[i.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const c=["data"];return Object.keys(e).forEach(o=>{!~c.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<Page> was created with unknown prop '${o}'`)}),i.$$set=o=>{"data"in o&&s(0,n=o.data)},i.$capture_state=()=>({PodcastCard:A,goto:te,ReaderLayout:H,data:n}),i.$inject_state=o=>{"data"in o&&s(0,n=o.data)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),[n]}class re extends X{constructor(e){super(e),Y(this,e,ne,S,G,{data:0}),_("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:S.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{re as component};
