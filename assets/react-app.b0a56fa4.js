import{A as p,r as c}from"./index.es.0a807a56.js";import{_ as t}from"./preload-helper.8a9483d9.js";const a=new p("react-app");c(a).relyOn(["lib:react","lib:react-dom","host-app"]).relateTo(["vue-app"]).onBootstrap(async e=>{console.log("react-app bootstrapped"),(await t(()=>import("./lifecycles.44c3cc04.js"),["assets/lifecycles.44c3cc04.js","assets/lifecycles.eebe2c89.css","assets/index.es.0a807a56.js","assets/preload-helper.8a9483d9.js"])).onBootstrap(e)}).onDestroy(async()=>{(await t(()=>import("./lifecycles.44c3cc04.js"),["assets/lifecycles.44c3cc04.js","assets/lifecycles.eebe2c89.css","assets/index.es.0a807a56.js","assets/preload-helper.8a9483d9.js"])).onDestroy()});a.runInHostMode(async(e,r)=>{r(!0),e.use(async(o,s)=>{o.name==="starter"?await t(()=>import("./index.cfc98b6a.js"),["assets/index.cfc98b6a.js","assets/index.es.0a807a56.js"]):await s()}),await a.load("starter"),a.activate(a.name)});export{a as r};
