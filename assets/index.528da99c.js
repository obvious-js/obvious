import{_ as s,A as m,r as u}from"./preload-helper.040f5dcf.js";function d(t){switch(t){case"../apps/host-app/index.tsx":return s(()=>import("./index.6f08869a.js").then(function(e){return e.i}),["assets/index.6f08869a.js","assets/preload-helper.040f5dcf.js"]);case"../apps/react-app/index.tsx":return s(()=>import("./index.f1450ee7.js").then(function(e){return e.i}),["assets/index.f1450ee7.js","assets/preload-helper.040f5dcf.js"]);case"../apps/vue-app/index.tsx":return s(()=>import("./index.3c330d25.js").then(function(e){return e.i}),["assets/index.3c330d25.js","assets/preload-helper.040f5dcf.js"]);default:return new Promise(function(e,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}const _=(t={})=>async(e,a)=>{const{name:r}=e;if(r.startsWith("lib:")){const o=r.slice(4),c=t[o]||"",p=Date.now(),i=`https://cdn.jsdelivr.net/npm/${o}${c}`;await e.loadScript(i);const l=Date.now();console.log(`load ${o} from ${i}. cost ${l-p}ms`)}else await a()},w=async(t,e)=>{await d(`../apps/${t.name}/index.tsx`).catch(async a=>{console.error(a),await e()})},v=async(t,e)=>{try{const a=`${window.location.origin}/rallie/apps/${t.name}/index.html#${t.name}`,r=Date.now();await t.loadHtml(a);const o=Date.now();console.log(`load ${t.name} from ${a}, cost ${o-r}ms`)}catch(a){console.error(a),await e()}},n=new m("starter");n.run(t=>{t.use(_({vue:"@3.2.23/dist/vue.global.js",react:"@17.0.2/umd/react.development.js","react-dom":"@17.0.2/umd/react-dom.development.js"})),t.use(w),t.use(v),u(n).onBootstrap(async()=>{n.activate("react-app"),n.activate("vue-app")}),t.isEntry&&n.activate(n.name)});
