import{c as i,r as s,_ as e}from"./preload-helper-075147a5.js";const a=i("react-app");s(a).relyOn(["lib:react","lib:react-dom","host-app"]).relateTo(["vue-app"]).onBootstrap(async t=>{console.log("react-app bootstrapped"),(await e(()=>import("./lifecycles-a01b2e18.js"),["assets/lifecycles-a01b2e18.js","assets/preload-helper-075147a5.js","assets/lifecycles-8a638749.css"])).onBootstrap(t)}).onDestroy(async()=>{(await e(()=>import("./lifecycles-a01b2e18.js"),["assets/lifecycles-a01b2e18.js","assets/preload-helper-075147a5.js","assets/lifecycles-8a638749.css"])).onDestroy()});a.run(async t=>{t.isEntry&&(t.use(async(o,r)=>{o.name==="starter"?await e(()=>import("./index-92cf87e1.js"),["assets/index-92cf87e1.js","assets/preload-helper-075147a5.js"]):await r()}),await a.load("starter"),t.freeze(),a.activate(a.name))});const p=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{p as i,a as r};
