import{A as s,r as i,_ as t}from"./preload-helper.77688dea.js";const a=new s("react-app");i(a).relyOn(["lib:react","lib:react-dom","host-app"]).relateTo(["vue-app"]).onBootstrap(async e=>{console.log("react-app bootstrapped"),(await t(()=>import("./lifecycles.3e881927.js"),["assets/lifecycles.3e881927.js","assets/lifecycles.eebe2c89.css","assets/preload-helper.77688dea.js"])).onBootstrap(e)}).onDestroy(async()=>{(await t(()=>import("./lifecycles.3e881927.js"),["assets/lifecycles.3e881927.js","assets/lifecycles.eebe2c89.css","assets/preload-helper.77688dea.js"])).onDestroy()});a.run(async e=>{e.isEntry&&(e.freeze(!1),e.use(async(r,o)=>{r.name==="starter"?await t(()=>import("./index.f310a4f4.js"),["assets/index.f310a4f4.js","assets/preload-helper.77688dea.js"]):await o()}),await a.load("starter"),e.freeze(!0),a.activate(a.name))});var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module"});export{_ as i,a as r};