import{v as i}from"./index.69ab2258.js";import"./preload-helper.82734094.js";const l=i.connect("host-app");var w="/rallie/assets/vue-logo.03d6d6da.png";const h=window.Vue.ref,m=window.Vue.onBeforeUnmount;window.Vue.onBeforeMount;function v(e){return function(n){var c=h(n(e.state)),t=e.watchState(n).do(function(s){c.value=s});return m(function(){t()}),c}}var p=(e,n)=>{const c=e.__vccOpts||e;for(const[t,s]of n)c[t]=s;return c};const V=window.Vue.defineComponent,a=window.Vue.toDisplayString,o=window.Vue.createElementVNode,d=window.Vue.createTextVNode,f=window.Vue.unref,g=window.Vue.resolveComponent,k=window.Vue.withCtx,I=window.Vue.createVNode,S=window.Vue.Fragment,x=window.Vue.openBlock,B=window.Vue.createElementBlock,N=window.Vue.pushScopeId,$=window.Vue.popScopeId,r=e=>(N("data-v-5564284d"),e=e(),$(),e),C=d(" This app is running in "),y=d(" mode, click "),E=["href"],b=r(()=>o("p",null,"the count can be get, set and watched by the react app",-1)),M=r(()=>o("p",null,"the host app provide a method service to use naive-ui's button component",-1)),A=r(()=>o("p",null,[d(" Edit "),o("code",null,"components/HelloWorld.vue"),d(" to test hot module replacement. ")],-1)),D=r(()=>o("p",null,[o("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),d(" | "),o("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),H=V({props:{msg:String},setup(e){const n=v(i)(s=>s.count),c=()=>{i.setState(s=>{s.count++})},t={currentMode:"host",navigationMode:"remote",navigationLink:"/rallie/index.html"};return i.runInRemoteMode(()=>{t.currentMode="remote",t.navigationMode="host",t.navigationLink="/rallie/apps/vue-app/index.html"}),(s,Q)=>{const _=g("n-button");return x(),B(S,null,[o("h1",null,a(e.msg),1),o("p",null,[C,o("strong",null,a(t.currentMode),1),y,o("a",{href:t.navigationLink},"here",8,E),d(" to see how it works in "+a(t.navigationMode)+" mode ",1)]),b,I(_,{onClick:c},{default:k(()=>[d("count is: "+a(f(n)),1)]),_:1}),M,A,D],64)}}});var j=p(H,[["__scopeId","data-v-5564284d"]]);const U=window.Vue.defineComponent,L=window.Vue.createElementVNode,R=window.Vue.createVNode,T=window.Vue.openBlock,W=window.Vue.createElementBlock,F=window.Vue.pushScopeId,O=window.Vue.popScopeId,q=e=>(F("data-v-2ad8e692"),e=e(),O(),e),z={id:"vue-app"},G=q(()=>L("img",{alt:"Vue logo",src:w},null,-1)),J=U({setup(e){return(n,c)=>(T(),W("div",z,[G,R(j,{msg:"Hello Vite + Vue 3 + Rallie"})]))}});var K=p(J,[["__scopeId","data-v-2ad8e692"]]);const P=window.Vue.createApp;let u;const Z=e=>{u=P(K);const n=l.methods.useNaiveUI();u.use(n),e&&u.mount(e)},ee=()=>{u.unmount()};export{Z as onBootstrap,ee as onDestroy};
