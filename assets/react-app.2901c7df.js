import{A as s,r as i}from"./index.es.845f6a41.js";import{_ as t}from"./preload-helper.8a9483d9.js";const e=new s("react-app");i(e).relyOn(["lib:react","lib:react-dom","host-app"]).relateTo(["vue-app"]).onBootstrap(async a=>{console.log("react-app bootstrapped"),(await t(()=>import("./lifecycles.5a0a29e6.js"),["assets/lifecycles.5a0a29e6.js","assets/lifecycles.eebe2c89.css","assets/index.es.845f6a41.js","assets/preload-helper.8a9483d9.js"])).onBootstrap(a)}).onDestroy(async()=>{(await t(()=>import("./lifecycles.5a0a29e6.js"),["assets/lifecycles.5a0a29e6.js","assets/lifecycles.eebe2c89.css","assets/index.es.845f6a41.js","assets/preload-helper.8a9483d9.js"])).onDestroy()});e.run(async({bus:a,isEntryApp:r})=>{r&&(a==null||a.use(async(o,p)=>{o.name==="starter"?await t(()=>import("./index.184fc0b7.js"),["assets/index.184fc0b7.js","assets/index.es.845f6a41.js"]):await p()}),await e.load("starter"),e.activate(e.name))});export{e as r};
