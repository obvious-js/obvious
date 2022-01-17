const Ot=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Ot();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var y=function(){return y=Object.assign||function(e){for(var n,s=1,i=arguments.length;s<i;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)};function g(t,e,n,s){function i(r){return r instanceof n?r:new n(function(o){o(r)})}return new(n||(n=Promise))(function(r,o){function a(l){try{c(s.next(l))}catch(f){o(f)}}function u(l){try{c(s.throw(l))}catch(f){o(f)}}function c(l){l.done?r(l.value):i(l.value).then(a,u)}c((s=s.apply(t,e||[])).next())})}function b(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},s,i,r,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(l){return u([c,l])}}function u(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,i&&(r=c[0]&2?i.return:c[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,c[1])).done)return r;switch(i=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){n.label=c[1];break}if(c[0]===6&&n.label<r[1]){n.label=r[1],r=c;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(c);break}r[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(l){c=[6,l],i=0}finally{s=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function B(t,e,n){if(n||arguments.length===2)for(var s=0,i=e.length,r;s<i;s++)(r||!(s in e))&&(r||(r=Array.prototype.slice.call(e,0,s)),r[s]=e[s]);return t.concat(r||Array.prototype.slice.call(e))}var d={removeNonExistedBroadcast:function(t){return"[@rallie/core] you are trying to remove a listener of the broadcast event ".concat(t,", but ").concat(t," hasn't been registed as a broadcast event")},wrongBroadcastCallback:function(t){return"[@rallie/core] you are trying to remove a listener of the broadcast event ".concat(t,", but the listener hasn't been registed")},broadcastCallbackError:function(t){return"[@rallie/core] one of the callbacks of the broadcast event ".concat(t," throws an uncaught error")},removeNonExistedUnicast:function(t){return"[@rallie/core] you are trying to remove a listener of the unicast event ".concat(t,", but ").concat(t," hasn't been registed as a unicast event")},registedExistedUnicast:function(t){return"[@rallie/core] you are trying to register a unicast event ".concat(t,", but it has been registered before")},emittedNonExistedUnicast:function(t){return"[@rallie/core] you have emitted ".concat(t," unicast, but there is no listener of this event")},createExistingApp:function(t){return"[@rallie/core] ".concat(t," is existing, you are not allowed to create it again")},resourceNotDeclared:function(t,e){return"[@rallie/core] can not find any assets of the app ".concat(t," on the bus ").concat(e)},appNotCreated:function(t){return"[@rallie/core] you are trying to activate app ".concat(t,", but it was not created")},modifyPrivateState:function(t){return"[@rallie/core] state ".concat(t," is private, you are not allowed to set it")},actionIsNotDefined:function(t){return"[@rallie/core] please describe your action when you modify the state ".concat(t)},accessUninitializedState:function(t){return"[@rallie/core] it's not allowed to set or watch state ".concat(t," before it is initialized")},waitStateTimeout:function(t){return"[@rallie/core] wait for states ".concat(JSON.stringify(t)," timeout")},duplicatedInitial:function(t){return"[@rallie/core] duplicated initialized state ".concat(t)},initializePrimitiveState:function(t){return"[@rallie/core] it's not allowed to initialized state ".concat(t," to a primitive value")},duplicatedBus:function(t){return"[@rallie/core] the bus named ".concat(t," has been defined before, please rename your bus")},circularDependencies:function(t,e){return"[@rallie/core] There is a circular dependency when activating the app ".concat(t,", and the circular path is ").concat(e.join("->"))},multipleCalledNextFn:function(){return"[@rallie/core] next() called multiple times in the middleware"},wrongMiddlewareType:function(){return"[@rallie/core] the middleware must be a function"}},Nt={handlerIsNotInTheEventsPool:function(t,e){return"[@rallie/core] the event ".concat(t," is not in the events pool that you specified when calling on").concat(e?"Unicast":"Broadcast")}};function nt(t){return["string","number","boolean","undefined"].includes(typeof t)}function rt(t){var e={},n=[];return t.forEach(function(s){var i=typeof s=="string"?s:s.name;e[i]||(n.push(s),e[i]=!0)}),n}var st=function(t){return function(e,n){var s=-1,i=function(r){if(r<=s)return Promise.reject(new Error(d.multipleCalledNextFn()));s=r;var o=t[r];if(r===t.length&&(o=n),!o)return Promise.resolve();try{return Promise.resolve(o(e,i.bind(null,r+1)))}catch(a){return Promise.reject(a)}};return i(0)}},Lt=function(){function t(){this.broadcastEvents={},this.unicastEvents={}}return t.prototype.addBroadcastEventListener=function(e,n){var s=this;this.broadcastEvents[e]=this.broadcastEvents[e]||{listeners:[],emitedArgs:[]};var i=this.broadcastEvents[e],r=i.listeners,o=i.emitedArgs;r.push(n),o.length>0&&(o.forEach(function(a){s.emitBroadcast.apply(s,B([e],a,!1))}),this.broadcastEvents[e].emitedArgs=[])},t.prototype.addUnicastEventListener=function(e,n){if(this.unicastEvents[e])throw new Error(d.registedExistedUnicast(e));this.unicastEvents[e]=n},t.prototype.removeBroadcastEventListener=function(e,n){var s,i=(s=this.broadcastEvents[e])===null||s===void 0?void 0:s.listeners;if(i){for(var r=-1,o=0;o<i.length;o++)if(i[o]===n){r=o;break}if(r!==-1)i.splice(r,1);else{var a=d.wrongBroadcastCallback(e);throw new Error(a)}}else{var a=d.removeNonExistedBroadcast(e);throw new Error(a)}},t.prototype.removeUnicastEventListener=function(e){if(!this.unicastEvents[e]){var n=d.removeNonExistedUnicast(e);throw new Error(n)}delete this.unicastEvents[e]},t.prototype.emitBroadcast=function(e){for(var n=[],s=1;s<arguments.length;s++)n[s-1]=arguments[s];this.broadcastEvents[e]=this.broadcastEvents[e]||{listeners:[],emitedArgs:[]};var i=this.broadcastEvents[e],r=i.listeners,o=i.emitedArgs;r.length>0?r.forEach(function(a){try{a.apply(void 0,n)}catch(u){console.error(d.broadcastCallbackError(e)),console.error(u)}}):o.push(n)},t.prototype.emitUnicast=function(e){for(var n=[],s=1;s<arguments.length;s++)n[s-1]=arguments[s];var i=this.unicastEvents[e];if(i)return i.apply(void 0,n);throw new Error(d.emittedNonExistedUnicast(e))},t}();function Pt(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Mt=Object.assign,Ut=Object.prototype.hasOwnProperty,N=(t,e)=>Ut.call(t,e),m=Array.isArray,L=t=>it(t)==="[object Map]",kt=t=>typeof t=="string",W=t=>typeof t=="symbol",P=t=>t!==null&&typeof t=="object",Ct=Object.prototype.toString,it=t=>Ct.call(t),zt=t=>it(t).slice(8,-1),$=t=>kt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ot=(t,e)=>!Object.is(t,e);let jt;function at(t,e){e=e||jt,e&&e.active&&e.effects.push(t)}const ct=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ut=t=>(t.w&E)>0,lt=t=>(t.n&E)>0,Kt=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=E},Dt=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ut(i)&&!lt(i)?i.delete(t):e[n++]=i,i.w&=~E,i.n&=~E}e.length=n}},F=new WeakMap;let T=0,E=1;const G=30,I=[];let A;const x=Symbol(""),H=Symbol("");class Wt{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],at(this,s)}run(){if(!this.active)return this.fn();if(!I.includes(this))try{return I.push(A=this),Gt(),E=1<<++T,T<=G?Kt(this):ft(this),this.fn()}finally{T<=G&&Dt(this),E=1<<--T,ht(),I.pop();const e=I.length;A=e>0?I[e-1]:void 0}}stop(){this.active&&(ft(this),this.onStop&&this.onStop(),this.active=!1)}}function ft(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function $t(t,e){t.effect&&(t=t.effect.fn);const n=new Wt(t);e&&(Mt(n,e),e.scope&&at(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}let R=!0;const J=[];function Ft(){J.push(R),R=!1}function Gt(){J.push(R),R=!0}function ht(){const t=J.pop();R=t===void 0?!0:t}function w(t,e,n){if(!Ht())return;let s=F.get(t);s||F.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ct()),Jt(i)}function Ht(){return R&&A!==void 0}function Jt(t,e){let n=!1;T<=G?lt(t)||(t.n|=E,n=!ut(t)):n=!t.has(A),n&&(t.add(A),A.deps.push(t))}function S(t,e,n,s,i,r){const o=F.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&m(t))o.forEach((u,c)=>{(c==="length"||c>=s)&&a.push(u)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":m(t)?$(n)&&a.push(o.get("length")):(a.push(o.get(x)),L(t)&&a.push(o.get(H)));break;case"delete":m(t)||(a.push(o.get(x)),L(t)&&a.push(o.get(H)));break;case"set":L(t)&&a.push(o.get(x));break}if(a.length===1)a[0]&&dt(a[0]);else{const u=[];for(const c of a)c&&u.push(...c);dt(ct(u))}}function dt(t,e){for(const n of m(t)?t:[...t])(n!==A||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Vt=Pt("__proto__,__v_isRef,__isVue"),pt=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(W)),Yt=wt(),qt=wt(!0),vt=Zt();function Zt(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=h(this);for(let r=0,o=this.length;r<o;r++)w(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(h)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ft();const s=h(this)[e].apply(this,n);return ht(),s}}),t}function wt(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&r===(t?e?de:_t:e?he:St).get(s))return s;const o=m(s);if(!t&&o&&N(vt,i))return Reflect.get(vt,i,r);const a=Reflect.get(s,i,r);return(W(i)?pt.has(i):Vt(i))||(t||w(s,"get",i),e)?a:Q(a)?!o||!$(i)?a.value:a:P(a)?t?K(a):Y(a):a}}const Qt=Xt();function Xt(t=!1){return function(n,s,i,r){let o=n[s];if(!t&&!we(i)&&(i=h(i),o=h(o),!m(n)&&Q(o)&&!Q(i)))return o.value=i,!0;const a=m(n)&&$(s)?Number(s)<n.length:N(n,s),u=Reflect.set(n,s,i,r);return n===h(r)&&(a?ot(i,o)&&S(n,"set",s,i):S(n,"add",s,i)),u}}function te(t,e){const n=N(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&S(t,"delete",e,void 0),s}function ee(t,e){const n=Reflect.has(t,e);return(!W(e)||!pt.has(e))&&w(t,"has",e),n}function ne(t){return w(t,"iterate",m(t)?"length":x),Reflect.ownKeys(t)}const re={get:Yt,set:Qt,deleteProperty:te,has:ee,ownKeys:ne},se={get:qt,set(t,e){return!0},deleteProperty(t,e){return!0}},V=t=>t,M=t=>Reflect.getPrototypeOf(t);function U(t,e,n=!1,s=!1){t=t.__v_raw;const i=h(t),r=h(e);e!==r&&!n&&w(i,"get",e),!n&&w(i,"get",r);const{has:o}=M(i),a=s?V:n?Z:q;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function k(t,e=!1){const n=this.__v_raw,s=h(n),i=h(t);return t!==i&&!e&&w(s,"has",t),!e&&w(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function C(t,e=!1){return t=t.__v_raw,!e&&w(h(t),"iterate",x),Reflect.get(t,"size",t)}function gt(t){t=h(t);const e=h(this);return M(e).has.call(e,t)||(e.add(t),S(e,"add",t,t)),this}function bt(t,e){e=h(e);const n=h(this),{has:s,get:i}=M(n);let r=s.call(n,t);r||(t=h(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ot(e,o)&&S(n,"set",t,e):S(n,"add",t,e),this}function yt(t){const e=h(this),{has:n,get:s}=M(e);let i=n.call(e,t);i||(t=h(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&S(e,"delete",t,void 0),r}function mt(){const t=h(this),e=t.size!==0,n=t.clear();return e&&S(t,"clear",void 0,void 0),n}function z(t,e){return function(s,i){const r=this,o=r.__v_raw,a=h(o),u=e?V:t?Z:q;return!t&&w(a,"iterate",x),o.forEach((c,l)=>s.call(i,u(c),u(l),r))}}function j(t,e,n){return function(...s){const i=this.__v_raw,r=h(i),o=L(r),a=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,c=i[t](...s),l=n?V:e?Z:q;return!e&&w(r,"iterate",u?H:x),{next(){const{value:f,done:v}=c.next();return v?{value:f,done:v}:{value:a?[l(f[0]),l(f[1])]:l(f),done:v}},[Symbol.iterator](){return this}}}}function _(t){return function(...e){return t==="delete"?!1:this}}function ie(){const t={get(r){return U(this,r)},get size(){return C(this)},has:k,add:gt,set:bt,delete:yt,clear:mt,forEach:z(!1,!1)},e={get(r){return U(this,r,!1,!0)},get size(){return C(this)},has:k,add:gt,set:bt,delete:yt,clear:mt,forEach:z(!1,!0)},n={get(r){return U(this,r,!0)},get size(){return C(this,!0)},has(r){return k.call(this,r,!0)},add:_("add"),set:_("set"),delete:_("delete"),clear:_("clear"),forEach:z(!0,!1)},s={get(r){return U(this,r,!0,!0)},get size(){return C(this,!0)},has(r){return k.call(this,r,!0)},add:_("add"),set:_("set"),delete:_("delete"),clear:_("clear"),forEach:z(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=j(r,!1,!1),n[r]=j(r,!0,!1),e[r]=j(r,!1,!0),s[r]=j(r,!0,!0)}),[t,n,e,s]}const[oe,ae,ce,ue]=ie();function Et(t,e){const n=e?t?ue:ce:t?ae:oe;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(N(n,i)&&i in s?n:s,i,r)}const le={get:Et(!1,!1)},fe={get:Et(!0,!1)},St=new WeakMap,he=new WeakMap,_t=new WeakMap,de=new WeakMap;function pe(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ve(t){return t.__v_skip||!Object.isExtensible(t)?0:pe(zt(t))}function Y(t){return t&&t.__v_isReadonly?t:At(t,!1,re,le,St)}function K(t){return At(t,!0,se,fe,_t)}function At(t,e,n,s,i){if(!P(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=ve(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function we(t){return!!(t&&t.__v_isReadonly)}function h(t){const e=t&&t.__v_raw;return e?h(e):t}const q=t=>P(t)?Y(t):t,Z=t=>P(t)?K(t):t;function Q(t){return Boolean(t&&t.__v_isRef===!0)}Promise.resolve();var ge=function(){function t(e,n){this.namespace=e,this.stores=n,this.stores[e].watchers.push(this)}return t.prototype.do=function(e){var n=this;return this.handler=e,function(){return n.unwatch()}},t.prototype.unwatch=function(){this===null||this===void 0||this.stopEffect(),this.handler=null;var e=this.stores[this.namespace].watchers.indexOf(this);e!==-1&&this.stores[this.namespace].watchers.splice(e,1)},t}(),X="$state-initialized",be=function(){function t(e,n){this.eventEmitter=e,this.stores=n,this.eventEmitter=e,this.stores=n}return t.prototype.offEvents=function(e,n,s){var i=n?this.eventEmitter.removeUnicastEventListener:this.eventEmitter.removeBroadcastEventListener;i=i.bind(this.eventEmitter),s?e[s]?(i(s,e[s]),delete e[s]):console.warn(Nt.handlerIsNotInTheEventsPool(s,n)):Object.entries(e).forEach(function(r){var o=r[0],a=r[1];i(o,a)})},t.prototype.onBroadcast=function(e){var n=this;return Object.entries(e).forEach(function(s){var i=s[0],r=s[1];n.eventEmitter.addBroadcastEventListener(i,r)}),function(s){n.offEvents(e,!1,s)}},t.prototype.onUnicast=function(e){var n=this;return Object.entries(e).forEach(function(s){var i=s[0],r=s[1];try{n.eventEmitter.addUnicastEventListener(i,r)}catch(o){console.error(o)}}),function(s){n.offEvents(e,!0,s)}},t.prototype.createBroadcaster=function(e){var n=this;return new Proxy({},{get:function(s,i){return function(){for(var r,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return e==null||e(i),(r=n.eventEmitter).emitBroadcast.apply(r,B([i],o,!1))}},set:function(){return!1}})},t.prototype.createUnicaster=function(e){var n=this;return new Proxy({},{get:function(s,i){return function(){for(var r,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return e==null||e(i),(r=n.eventEmitter).emitUnicast.apply(r,B([i],o,!1))}},set:function(){return!1}})},t.prototype.existState=function(e){return!!this.stores[e]},t.prototype.initState=function(e,n,s){if(s===void 0&&(s=!1),this.existState(e))throw new Error(d.duplicatedInitial(e));if(nt(n))throw new Error(d.initializePrimitiveState(e));return this.stores[e]={state:Y(n),owner:s?this:null,watchers:[]},this.eventEmitter.emitBroadcast(X,e),this.getState(e)},t.prototype.getState=function(e,n){if(this.existState(e)){var s=K(this.stores[e].state);return n?n(s):s}else return null},t.prototype.getStateToSet=function(e){if(!this.existState(e)){var n=d.accessUninitializedState(e);throw new Error(n)}var s=this.stores[e].owner;if(s!==this&&s!==null){var n=d.modifyPrivateState(e);throw new Error(n)}return this.stores[e].state},t.prototype.setState=function(e,n,s){return g(this,void 0,void 0,function(){var i;return b(this,function(r){switch(r.label){case 0:return i=this.getStateToSet(e),n?[4,Promise.resolve(s(i))]:[3,2];case 1:return r.sent(),[3,3];case 2:throw new Error(d.actionIsNotDefined(e));case 3:return[2]}})})},t.prototype.watchState=function(e,n){if(!this.existState(e)){var s=d.accessUninitializedState(e);throw new Error(s)}var i=!1,r=K(this.stores[e].state),o=new ge(e,this.stores),a=function(c){return nt(c)?c:JSON.parse(JSON.stringify(c))},u=$t(function(){return n(r)},{lazy:!0,scheduler:function(){i||(i=!0,Promise.resolve().then(function(){var c,l=n(r);(c=o.handler)===null||c===void 0||c.call(o,l,o.oldWatchingStates),o.oldWatchingStates=a(l),i=!1}))}});return o.oldWatchingStates=a(u()),o.stopEffect=function(){return u.effect.stop()},o},t.prototype.waitState=function(e,n){var s=this;n===void 0&&(n=10*1e3);var i=B([],e,!0),r=e.filter(function(a){return!s.existState(a)});if(r.length===0){var o=i.map(function(a){return s.getState(a)});return Promise.resolve(o)}else return new Promise(function(a,u){var c=setTimeout(function(){clearTimeout(c);var f=d.waitStateTimeout(r);u(new Error(f))},n),l=function(f){var v=r.indexOf(f);if(v!==-1&&r.splice(v,1),r.length===0){clearTimeout(c),s.eventEmitter.removeBroadcastEventListener(X,l);var Tt=i.map(function(It){return s.getState(It)});a(Tt)}};s.eventEmitter.addBroadcastEventListener(X,l)})},t}(),ye=function(){function t(e){this.name=e,this.dependenciesReady=!1,this.bootstrapping=null,this.dependencies=[],this.relatedApps=[],this.name=e,this.isRallieCoreApp=!0}return t.prototype.relateTo=function(e){var n=this,s=function(o){return typeof o=="string"?o:o.name},i=rt(e),r=this.relatedApps.map(function(o){return o.name});return i.forEach(function(o){r.includes(s(o))||n.relatedApps.push({name:s(o),ctx:typeof o!="string"?o.ctx:void 0})}),this},t.prototype.relyOn=function(e){var n=this,s=function(a){return typeof a=="string"?a:a.name},i=rt(e),r=this.dependencies.map(function(a){return a.name}),o=this.relatedApps.map(function(a){return a.name});return i.forEach(function(a){var u=s(a);r.includes(u)||n.dependencies.push({name:u,ctx:typeof a!="string"?a.ctx:void 0,data:typeof a!="string"?a.data:void 0}),o.includes(u)||n.relatedApps.push({name:u,ctx:typeof a!="string"?a.ctx:void 0})}),this},t.prototype.onBootstrap=function(e){return this.doBootstrap=e,this},t.prototype.onActivate=function(e){return this.doActivate=e,this},t.prototype.onDestroy=function(e){return this.doDestroy=e,this},t}(),me=function(t){return g(void 0,void 0,void 0,function(){var e;return b(this,function(n){return e=new Promise(function(s){var i=null;if(t instanceof HTMLScriptElement)i=t;else{i=document.createElement("script");var r=typeof t!="string"?t:{type:"text/javascript",src:t};Object.entries(r).forEach(function(o){var a=o[0],u=o[1];i[a]=u})}i.src&&(i.onload=i.onerror=function(){s()}),document.body.appendChild(i),i.src||s()}),[2,e]})})},Ee=function(t){var e=null;if(t instanceof HTMLLinkElement)e=t;else{var n=typeof t!="string"?t:{rel:"stylesheet",type:"text/css",href:t};e=document.createElement("link"),Object.entries(n).forEach(function(s){var i=s[0],r=s[1];e[i]=r})}document.head.appendChild(e)},D={loadScript:me,loadLink:Ee},Se=function(){function t(e){this.eventEmitter=new Lt,this.stores={},this.apps={},this.loadingApps={},this.conf={assets:{}},this.middlewares=[],this.name=e,this.composedMiddlewareFn=st(this.middlewares)}return t.prototype.isRallieCoreApp=function(e){return this.apps[e]&&typeof this.apps[e]!="boolean"},t.prototype.config=function(e){return this.conf=y(y(y({},this.conf),e),{assets:y(y({},this.conf.assets),(e==null?void 0:e.assets)||{})}),this},t.prototype.use=function(e){if(typeof e!="function")throw new Error(d.wrongMiddlewareType());return this.middlewares.push(e),this.composedMiddlewareFn=st(this.middlewares),this},t.prototype.createContext=function(e,n){n===void 0&&(n={});var s=y({name:e,loadScript:D.loadScript,loadLink:D.loadLink},n);return s},t.prototype.loadResourcesFromAssetsConfig=function(e){return g(this,void 0,void 0,function(){var n,s,i,r,o,a,u,c,l;return b(this,function(f){switch(f.label){case 0:if(n=e.name,s=e.loadScript,i=s===void 0?D.loadScript:s,r=e.loadLink,o=r===void 0?D.loadLink:r,a=this.conf.assets,!a[n])return[3,5];if(a[n].css&&a[n].css.forEach(function(v){o(v)}),!a[n].js)return[3,4];u=0,c=a[n].js,f.label=1;case 1:return u<c.length?(l=c[u],[4,i(l)]):[3,4];case 2:f.sent(),f.label=3;case 3:return u++,[3,1];case 4:return[3,6];case 5:throw new Error(d.resourceNotDeclared(n,this.name));case 6:return[2]}})})},t.prototype.createSocket=function(){return new be(this.eventEmitter,this.stores)},t.prototype.existApp=function(e){return!!this.apps[e]},t.prototype.createApp=function(e){if(this.existApp(e))throw new Error(d.createExistingApp(e));var n=new ye(e);return this.apps[e]=n,n},t.prototype.loadApp=function(e,n){return n===void 0&&(n={}),g(this,void 0,void 0,function(){var s=this;return b(this,function(i){switch(i.label){case 0:return this.apps[e]?[3,2]:(this.loadingApps[e]||(this.loadingApps[e]=new Promise(function(r,o){var a=s.createContext(e,n);s.composedMiddlewareFn(a,s.loadResourcesFromAssetsConfig.bind(s)).then(function(){var u=e.startsWith("lib:");u&&!s.apps[e]&&(s.apps[e]=!0),s.apps[e]||o(new Error(d.appNotCreated(e))),r()}).catch(function(u){o(u)})})),[4,this.loadingApps[e]]);case 1:i.sent(),i.label=2;case 2:return[2]}})})},t.prototype.activateDependencies=function(e,n){return g(this,void 0,void 0,function(){var s,i,r,o,a,u;return b(this,function(c){switch(c.label){case 0:if(!(!e.dependenciesReady&&e.dependencies.length!==0))return[3,5];s=0,i=e.dependencies,c.label=1;case 1:return s<i.length?(r=i[s],o=r.name,a=r.data,u=r.ctx,[4,this.activateApp(o,a,u,n)]):[3,4];case 2:c.sent(),c.label=3;case 3:return s++,[3,1];case 4:e.dependenciesReady=!0,c.label=5;case 5:return[2]}})})},t.prototype.loadRelatedApps=function(e){return g(this,void 0,void 0,function(){var n,s,i,r,o;return b(this,function(a){switch(a.label){case 0:n=0,s=e.relatedApps,a.label=1;case 1:return n<s.length?(i=s[n],r=i.name,o=i.ctx,[4,this.loadApp(r,o)]):[3,4];case 2:a.sent(),a.label=3;case 3:return n++,[3,1];case 4:return[2]}})})},t.prototype.activateApp=function(e,n,s,i){return s===void 0&&(s={}),i===void 0&&(i=[]),g(this,void 0,void 0,function(){var r,o,a,u,c,l=this;return b(this,function(f){switch(f.label){case 0:return[4,this.loadApp(e,s)];case 1:return f.sent(),this.isRallieCoreApp(e)?(r=this.apps[e],[4,this.loadRelatedApps(r)]):[3,9];case 2:if(f.sent(),i.includes(e))throw o=i.indexOf(e),a=B(B([],i.slice(o),!0),[e],!1),new Error(d.circularDependencies(e,a));return i.push(e),r.bootstrapping?[3,4]:(u=function(){return g(l,void 0,void 0,function(){return b(this,function(v){switch(v.label){case 0:return[4,this.activateDependencies(r,i)];case 1:return v.sent(),r.doBootstrap?[4,Promise.resolve(r.doBootstrap(n))]:[3,3];case 2:return v.sent(),[3,5];case 3:return r.doActivate?[4,Promise.resolve(r.doActivate(n))]:[3,5];case 4:v.sent(),v.label=5;case 5:return[2]}})})},r.bootstrapping=u(),[4,r.bootstrapping]);case 3:return f.sent(),[3,8];case 4:return[4,r.bootstrapping];case 5:return f.sent(),c=r.doActivate,c?[4,Promise.resolve(r.doActivate(n))]:[3,7];case 6:c=f.sent(),f.label=7;case 7:f.label=8;case 8:i.pop(),f.label=9;case 9:return[2]}})})},t.prototype.destroyApp=function(e,n){return g(this,void 0,void 0,function(){var s,i;return b(this,function(r){switch(r.label){case 0:return this.isRallieCoreApp(e)?(s=this.apps[e],i=s.doDestroy,i?[4,Promise.resolve(s.doDestroy(n))]:[3,2]):[3,3];case 1:i=r.sent(),r.label=2;case 2:s.bootstrapping=null,s.dependenciesReady=!1,r.label=3;case 3:return[2]}})})},t}(),_e={},tt="DEFAULT_BUS",Ae=function(t){if(t===void 0&&(t=tt),window.RALLIE_BUS_STORE===void 0&&Reflect.defineProperty(window,"RALLIE_BUS_STORE",{value:_e,writable:!1}),window.RALLIE_BUS_STORE[t])throw new Error(d.duplicatedBus(t));var e=new Se(t);return Reflect.defineProperty(window.RALLIE_BUS_STORE,t,{value:e,writable:!1}),e},xt=function(t){return t===void 0&&(t=tt),window.RALLIE_BUS_STORE&&window.RALLIE_BUS_STORE[t]},et=function(t){t===void 0&&(t=tt);var e=null,n=!1,s=xt(t);return s?(e=s,n=!1):(e=Ae(t),n=!0),[e,n]};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function xe(t,e,n,s){function i(r){return r instanceof n?r:new n(function(o){o(r)})}return new(n||(n=Promise))(function(r,o){function a(l){try{c(s.next(l))}catch(f){o(f)}}function u(l){try{c(s.throw(l))}catch(f){o(f)}}function c(l){l.done?r(l.value):i(l.value).then(a,u)}c((s=s.apply(t,e||[])).next())})}function Be(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},s,i,r,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(l){return u([c,l])}}function u(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,i&&(r=c[0]&2?i.return:c[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,c[1])).done)return r;switch(i=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){n.label=c[1];break}if(c[0]===6&&n.label<r[1]){n.label=r[1],r=c;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(c);break}r[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(l){c=[6,l],i=0}finally{s=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var p={privateBus:function(t){return"".concat(t,".bus")},stateNamespace:function(t){return"".concat(t,".state")},isGlobalBusAccessible:"isGlobalBusAccessible"},Bt=function(t){return"[rallie] ".concat(t)},O={stateNotInitialized:function(t){return Bt(" app ".concat(t,`'s state is not initialized, please check:
`)+"1. whether app ".concat(t,` is loaded.
`)+"2. whether app ".concat(t," initializes the state"))},duplicatedAppName:function(t){return Bt("the app ".concat(t," is already registered, please rename your app"))}},Re=function(){function t(e){var n=this;this.name=e,this.isRallieApp=!1;var s=et(p.privateBus(e))[0];this.socket=s.createSocket(),this.events=this.socket.createBroadcaster(),this.methods=this.socket.createUnicaster(),Reflect.defineProperty(this,"state",{get:function(){return n.socket.getState(p.stateNamespace(n.name))},set:function(){return!1}})}return t.prototype.setState=function(e,n){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.setState(p.stateNamespace(this.name),e,n);throw new Error(O.stateNotInitialized(this.name))},t.prototype.watchState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.watchState(p.stateNamespace(this.name),e);throw new Error(O.stateNotInitialized(this.name))},t.prototype.listenEvents=function(e){return this.socket.onBroadcast(e)},t}(),Oe=function(){function t(e,n){var s=this,i;this.name=e,this.isRallieApp=!0;var r=et(),o=r[0],a=r[1];if(o.existApp(e))throw new Error(O.duplicatedAppName(e));this.globalBus=o,this.globalSocket=o.createSocket(),this.isEntry=a,a&&this.globalSocket.initState(p.isGlobalBusAccessible,{value:!0},!0);var u=et(p.privateBus(e))[0];this.socket=u.createSocket(),this.events=this.socket.createBroadcaster(),this.methods=this.socket.createUnicaster(),(n==null?void 0:n.state)&&this.socket.initState(p.stateNamespace(e),n.state,(i=n==null?void 0:n.isPrivate)!==null&&i!==void 0?i:!1),Reflect.defineProperty(this,"state",{get:function(){return s.socket.getState(p.stateNamespace(s.name))},set:function(){return!1}})}return t.prototype.setState=function(e,n){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.setState(p.stateNamespace(this.name),e,n);throw new Error(O.stateNotInitialized(this.name))},t.prototype.watchState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.watchState(p.stateNamespace(this.name),e);throw new Error(O.stateNotInitialized(this.name))},t.prototype.listenEvents=function(e){return this.socket.onBroadcast(e)},t.prototype.addMethods=function(e){return this.socket.onUnicast(e)},t.prototype.connect=function(e){return new Re(e)},t.prototype.load=function(e,n){return n===void 0&&(n={}),this.globalBus.loadApp(e,n)},t.prototype.activate=function(e,n,s){return s===void 0&&(s={}),this.globalBus.activateApp(e,n,s)},t.prototype.destroy=function(e,n){return this.globalBus.destroyApp(e,n)},t.prototype.run=function(e){var n;return xe(this,void 0,void 0,function(){var s,i,r=this;return Be(this,function(o){switch(o.label){case 0:return s=this.isEntry||((n=this.globalSocket.getState(p.isGlobalBusAccessible))===null||n===void 0?void 0:n.value),i={isEntry:this.isEntry,conf:JSON.parse(JSON.stringify(this.globalBus.conf)),use:function(a){s&&r.globalBus.use(a)},config:function(a){s&&r.globalBus.config(a)},freeze:function(a){r.isEntry&&r.globalSocket.setState(p.isGlobalBusAccessible,"".concat(a?"disable":"enable"," remote app to access the bus"),function(u){u.value=!a})}},[4,Promise.resolve(e(i))];case 1:return o.sent(),[2]}})})},t}();function Ne(t){var e=xt();return e.createApp(t.name)}const Te="modulepreload",Rt={},Ie="/rallie/",Le=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${Ie}${s}`,s in Rt)return;Rt[s]=!0;const i=s.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":Te,i||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),i)return new Promise((a,u)=>{o.addEventListener("load",a),o.addEventListener("error",u)})})).then(()=>e())};export{Oe as A,Le as _,Ne as r};