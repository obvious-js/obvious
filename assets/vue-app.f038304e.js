import{A as _,r as d}from"./index.es.788f3bae.js";import{_ as r}from"./preload-helper.8a9483d9.js";const t=new _("vue-app",{state:{count:0}});d(t).relyOn(["lib:vue","host-app"]).onBootstrap(async o=>{console.log("vue-app bootstrapped"),(await r(()=>import("./lifecycles.b37a9dd8.js"),["assets/lifecycles.b37a9dd8.js","assets/lifecycles.0a38d545.css","assets/index.es.788f3bae.js","assets/preload-helper.8a9483d9.js"])).onBootstrap(o)}).onDestroy(async()=>{(await r(()=>import("./lifecycles.b37a9dd8.js"),["assets/lifecycles.b37a9dd8.js","assets/lifecycles.0a38d545.css","assets/index.es.788f3bae.js","assets/preload-helper.8a9483d9.js"])).onDestroy()});t.run(async({bus:o,isEntryApp:p,setBusAccessible:a})=>{p&&(a==null||a(!0),o==null||o.use(async(n,e)=>{n.name==="starter"?await r(()=>import("./index.8f25bc63.js"),["assets/index.8f25bc63.js","assets/index.es.788f3bae.js"]):await e()}),await t.load("starter"),a==null||a(!1),t.activate(t.name,document.getElementById("vue-app")))});export{t as v};