import{c as i,r as s,_ as o}from"./preload-helper-075147a5.js";const t=i("vue-app");t.initState({count:0});s(t).relyOn(["lib:vue","host-app"]).onBootstrap(async e=>{console.log("vue-app bootstrapped"),(await o(()=>import("./lifecycles-1ef7c187.js"),["assets/lifecycles-1ef7c187.js","assets/preload-helper-075147a5.js","assets/lifecycles-bbc18d6a.css"])).onBootstrap(e)}).onDestroy(async()=>{(await o(()=>import("./lifecycles-1ef7c187.js"),["assets/lifecycles-1ef7c187.js","assets/preload-helper-075147a5.js","assets/lifecycles-bbc18d6a.css"])).onDestroy()});t.run(async e=>{e.isEntry&&(e.use(async(a,r)=>{a.name==="starter"?await o(()=>import("./index-92cf87e1.js"),["assets/index-92cf87e1.js","assets/preload-helper-075147a5.js"]):await r()}),await t.load("starter"),e.freeze(),t.activate(t.name,document.getElementById("vue-app")))});const _=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{_ as i,t as v};