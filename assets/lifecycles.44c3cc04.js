import{r as d}from"./react-app.b0a56fa4.js";import"./index.es.0a807a56.js";import"./preload-helper.8a9483d9.js";var O="/rallie/assets/react-logo.ecc203fb.svg";const m=d.connect("vue-app"),w=d.connect("host-app"),v=window.React;function k(n){return function(r){var o=v.useState(r(n.state)),e=o[0],t=o[1],a=n.watchState(r).do(function(p){t(p)});return v.useEffect(function(){return function(){a()}},[]),e}}const L="_app_1oof7_1",x="_appLogo_1oof7_5",R="_appLogoSpin_1oof7_1",S="_appHeader_1oof7_16",N="_appLink_1oof7_26",E="_button_1oof7_39";var i={app:L,appLogo:x,appLogoSpin:R,appHeader:S,appLink:N,button:E},f={exports:{}},u={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var g=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;function C(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function A(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de",Object.getOwnPropertyNames(n)[0]==="5")return!1;for(var r={},o=0;o<10;o++)r["_"+String.fromCharCode(o)]=o;var e=Object.getOwnPropertyNames(r).map(function(a){return r[a]});if(e.join("")!=="0123456789")return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(a){t[a]=a}),Object.keys(Object.assign({},t)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}A();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H=window.React,b=60103;u.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var _=Symbol.for;b=_("react.element"),u.Fragment=_("react.fragment")}var I=H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function j(n,r,o){var e,t={},a=null,p=null;o!==void 0&&(a=""+o),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)D.call(r,e)&&!T.hasOwnProperty(e)&&(t[e]=r[e]);if(n&&n.defaultProps)for(e in r=n.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:b,type:n,key:a,ref:p,props:t,_owner:I.current}}u.jsx=j;u.jsxs=j;f.exports=u;const s=f.exports.jsx,c=f.exports.jsxs;function q(){const n=k(m)(t=>t.count),r=()=>{m.setState(t=>{t.count++})},o=["info","error","warning","success","loading"],e={currentMode:"host",navigationMode:"remote",navigationLink:"/rallie/index.html"};return d.runInRemoteMode(()=>{e.currentMode="remote",e.navigationMode="host",e.navigationLink="/rallie/apps/react-app/index.html"}),s("div",{className:i.app,children:c("header",{className:i.appHeader,children:[s("img",{src:O,className:i.appLogo,alt:"logo"}),s("h1",{children:"Hello Vite + React + Rallie!"}),c("p",{children:["this app is running in ",s("strong",{children:e.currentMode})," mode, click ",s("a",{className:i.appLink,href:e.navigationLink,children:"here"})," to see how it works in ",e.navigationMode," mode"]}),s("p",{children:"the count is a state initialized by vue app"}),s("p",{children:c("button",{className:i.button,type:"button",onClick:r,children:["count is: ",n]})}),c("div",{children:[s("p",{children:"message is an event service provided by host app"}),o.map(t=>s("button",{className:i.button,onClick:()=>w.events[t]("message is an event service provided by host app"),children:t},t))]}),c("p",{children:["Edit ",s("code",{children:"App.jsx"})," and save to test HMR updates."]}),c("p",{children:[s("a",{className:i.appLink,href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})," | ",s("a",{className:i.appLink,href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer",children:"Vite Docs"})]})]})})}const y=window.ReactDOM;let h=null;const V=n=>{h=n!=null?n:document.getElementById("react-app"),y.render(s(q,{}),h)},$=()=>{y.unmountComponentAtNode(h)};export{V as onBootstrap,$ as onDestroy};
