const zt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};zt();/*! *****************************************************************************
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
***************************************************************************** */var y=function(){return y=Object.assign||function(e){for(var n,s=1,r=arguments.length;s<r;s++){n=arguments[s];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},y.apply(this,arguments)};function b(t,e,n,s){function r(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(l){try{c(s.next(l))}catch(h){o(h)}}function u(l){try{c(s.throw(l))}catch(h){o(h)}}function c(l){l.done?i(l.value):r(l.value).then(a,u)}c((s=s.apply(t,e||[])).next())})}function g(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},s,r,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(l){return u([c,l])}}function u(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,r&&(i=c[0]&2?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(l){c=[6,l],r=0}finally{s=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function V(t,e,n){if(n||arguments.length===2)for(var s=0,r=e.length,i;s<r;s++)(i||!(s in e))&&(i||(i=Array.prototype.slice.call(e,0,s)),i[s]=e[s]);return t.concat(i||Array.prototype.slice.call(e))}var d={removeNonExistedBroadcast:function(t){return"[@rallie/core] you are trying to remove a listener of the broadcast event ".concat(t,", but ").concat(t," hasn't been registed as a broadcast event")},wrongBroadcastCallback:function(t){return"[@rallie/core] you are trying to remove a listener of the broadcast event ".concat(t,", but the listener hasn't been registed")},broadcastCallbackError:function(t){return"[@rallie/core] one of the callbacks of the broadcast event ".concat(t," throws an uncaught error")},removeNonExistedUnicast:function(t){return"[@rallie/core] you are trying to remove a listener of the unicast event ".concat(t,", but ").concat(t," hasn't been registed as a unicast event")},wrongUnicastCallback:function(t){return"[@rallie/core] you are trying to remove a listener of the unicast event ".concat(t,", but the listener hasn't been registed")},registedExistedUnicast:function(t){return"[@rallie/core] you are trying to register a unicast event ".concat(t,", but it has been registered before")},emittedNonExistedUnicast:function(t){return"[@rallie/core] you have emitted ".concat(t," unicast, but there is no listener of this event")},createExistingApp:function(t){return"[@rallie/core] ".concat(t," is existing, you are not allowed to create it again")},resourceNotDeclared:function(t,e){return"[@rallie/core] can not find any assets of the app ".concat(t," on the bus ").concat(e)},appNotCreated:function(t){return"[@rallie/core] you are trying to activate app ".concat(t,", but it was not created")},modifyPrivateState:function(t){return"[@rallie/core] state ".concat(t," is private, you are not allowed to set it")},accessUninitializedState:function(t){return"[@rallie/core] it's not allowed to set or watch state ".concat(t," before it is initialized")},waitStateTimeout:function(t){return"[@rallie/core] wait for states ".concat(JSON.stringify(t)," timeout")},duplicatedInitial:function(t){return"[@rallie/core] duplicated initialized state ".concat(t)},initializePrimitiveState:function(t){return"[@rallie/core] it's not allowed to initialized state ".concat(t," to a primitive value")},duplicatedBus:function(t){return"[@rallie/core] the bus named ".concat(t," has been defined before, please rename your bus")},bootstrapTimeout:function(t,e){return"[@rallie/core] failed to bootstrap the app ".concat(t," in ").concat(e," milliseconds. ")+"If you see another same error at the same time, there might be circular dependencies"},multipleCalledNextFn:function(){return"[@rallie/core] next() called multiple times in the middleware"},wrongMiddlewareType:function(){return"[@rallie/core] the middleware must be a function"}},ut={emptyBroadcastEvents:function(t){return"[@rallie/core] you have emitted ".concat(t," broadcast, but there is no listener of this event")},handlerIsNotInTheEventsPool:function(t,e){return"[@rallie/core] the event ".concat(t," is not in the events pool that you specified when calling on").concat(e?"Unicast":"Broadcast")}};function lt(t){return["string","number","boolean","undefined"].includes(typeof t)}function ft(t){var e={},n=[];return t.forEach(function(s){var r=typeof s=="string"?s:s.name;e[r]||(n.push(s),e[r]=!0)}),n}var ht=function(t){return function(e,n){var s=-1,r=function(i){if(i<=s)return Promise.reject(new Error(d.multipleCalledNextFn()));s=i;var o=t[i];if(i===t.length&&(o=n),!o)return Promise.resolve();try{return Promise.resolve(o(e,r.bind(null,i+1)))}catch(a){return Promise.reject(a)}};return r(0)}},jt=function(){function t(){this.broadcastEvents={},this.unicastEvents={}}return t.prototype.addBroadcastEventListener=function(e,n){this.broadcastEvents[e]=this.broadcastEvents[e]||[],this.broadcastEvents[e].push(n)},t.prototype.addUnicastEventListener=function(e,n){if(this.unicastEvents[e])throw new Error(d.registedExistedUnicast(e));this.unicastEvents[e]=n},t.prototype.removeBroadcastEventListener=function(e,n){var s=this.broadcastEvents[e];if(s){for(var r=-1,i=0;i<s.length;i++)if(s[i]===n){r=i;break}if(r!==-1)s.splice(r,1);else{var o=d.wrongBroadcastCallback(e);throw new Error(o)}}else{var o=d.removeNonExistedBroadcast(e);throw new Error(o)}},t.prototype.removeUnicastEventListener=function(e,n){if(!this.unicastEvents[e]){var s=d.removeNonExistedUnicast(e);throw new Error(s)}if(this.unicastEvents[e]!==n){var s=d.wrongUnicastCallback(e);throw new Error(s)}delete this.unicastEvents[e]},t.prototype.emitBroadcast=function(e){for(var n=[],s=1;s<arguments.length;s++)n[s-1]=arguments[s];var r=this.broadcastEvents[e],i=e.startsWith("$state");r&&r.length!==0?r.forEach(function(o){try{o.apply(void 0,n)}catch(a){console.error(d.broadcastCallbackError(e)),console.error(a)}}):i||console.warn(ut.emptyBroadcastEvents(e))},t.prototype.emitUnicast=function(e){for(var n=[],s=1;s<arguments.length;s++)n[s-1]=arguments[s];var r=this.unicastEvents[e];if(r)return r.apply(void 0,n);throw new Error(d.emittedNonExistedUnicast(e))},t}();function Kt(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Wt=Object.assign,Ht=Object.prototype.hasOwnProperty,C=(t,e)=>Ht.call(t,e),E=Array.isArray,U=t=>dt(t)==="[object Map]",Ft=t=>typeof t=="string",Y=t=>typeof t=="symbol",k=t=>t!==null&&typeof t=="object",Dt=Object.prototype.toString,dt=t=>Dt.call(t),Gt=t=>dt(t).slice(8,-1),q=t=>Ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pt=(t,e)=>!Object.is(t,e);let $t;function vt(t,e){e=e||$t,e&&e.active&&e.effects.push(t)}const wt=t=>{const e=new Set(t);return e.w=0,e.n=0,e},bt=t=>(t.w&S)>0,gt=t=>(t.n&S)>0,Jt=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=S},Vt=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];bt(r)&&!gt(r)?r.delete(t):e[n++]=r,r.w&=~S,r.n&=~S}e.length=n}},Z=new WeakMap;let O=0,S=1;const Q=30,L=[];let B;const T=Symbol(""),X=Symbol("");class Yt{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],vt(this,s)}run(){if(!this.active)return this.fn();if(!L.includes(this))try{return L.push(B=this),Qt(),S=1<<++O,O<=Q?Jt(this):mt(this),this.fn()}finally{O<=Q&&Vt(this),S=1<<--O,yt(),L.pop();const e=L.length;B=e>0?L[e-1]:void 0}}stop(){this.active&&(mt(this),this.onStop&&this.onStop(),this.active=!1)}}function mt(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function qt(t,e){t.effect&&(t=t.effect.fn);const n=new Yt(t);e&&(Wt(n,e),e.scope&&vt(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}let R=!0;const tt=[];function Zt(){tt.push(R),R=!1}function Qt(){tt.push(R),R=!0}function yt(){const t=tt.pop();R=t===void 0?!0:t}function w(t,e,n){if(!Xt())return;let s=Z.get(t);s||Z.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=wt()),te(r)}function Xt(){return R&&B!==void 0}function te(t,e){let n=!1;O<=Q?gt(t)||(t.n|=S,n=!bt(t)):n=!t.has(B),n&&(t.add(B),B.deps.push(t))}function _(t,e,n,s,r,i){const o=Z.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&E(t))o.forEach((u,c)=>{(c==="length"||c>=s)&&a.push(u)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":E(t)?q(n)&&a.push(o.get("length")):(a.push(o.get(T)),U(t)&&a.push(o.get(X)));break;case"delete":E(t)||(a.push(o.get(T)),U(t)&&a.push(o.get(X)));break;case"set":U(t)&&a.push(o.get(T));break}if(a.length===1)a[0]&&Et(a[0]);else{const u=[];for(const c of a)c&&u.push(...c);Et(wt(u))}}function Et(t,e){for(const n of E(t)?t:[...t])(n!==B||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ee=Kt("__proto__,__v_isRef,__isVue"),St=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Y)),ne=At(),re=At(!0),_t=se();function se(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=f(this);for(let i=0,o=this.length;i<o;i++)w(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(f)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zt();const s=f(this)[e].apply(this,n);return yt(),s}}),t}function At(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_raw"&&i===(t?e?ye:Lt:e?me:Ot).get(s))return s;const o=E(s);if(!t&&o&&C(_t,r))return Reflect.get(_t,r,i);const a=Reflect.get(s,r,i);return(Y(r)?St.has(r):ee(r))||(t||w(s,"get",r),e)?a:it(a)?!o||!q(r)?a.value:a:k(a)?t?D(a):nt(a):a}}const ie=oe();function oe(t=!1){return function(n,s,r,i){let o=n[s];if(!t&&!_e(r)&&(r=f(r),o=f(o),!E(n)&&it(o)&&!it(r)))return o.value=r,!0;const a=E(n)&&q(s)?Number(s)<n.length:C(n,s),u=Reflect.set(n,s,r,i);return n===f(i)&&(a?pt(r,o)&&_(n,"set",s,r):_(n,"add",s,r)),u}}function ae(t,e){const n=C(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&_(t,"delete",e,void 0),s}function ce(t,e){const n=Reflect.has(t,e);return(!Y(e)||!St.has(e))&&w(t,"has",e),n}function ue(t){return w(t,"iterate",E(t)?"length":T),Reflect.ownKeys(t)}const le={get:ne,set:ie,deleteProperty:ae,has:ce,ownKeys:ue},fe={get:re,set(t,e){return!0},deleteProperty(t,e){return!0}},et=t=>t,z=t=>Reflect.getPrototypeOf(t);function j(t,e,n=!1,s=!1){t=t.__v_raw;const r=f(t),i=f(e);e!==i&&!n&&w(r,"get",e),!n&&w(r,"get",i);const{has:o}=z(r),a=s?et:n?st:rt;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function K(t,e=!1){const n=this.__v_raw,s=f(n),r=f(t);return t!==r&&!e&&w(s,"has",t),!e&&w(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function W(t,e=!1){return t=t.__v_raw,!e&&w(f(t),"iterate",T),Reflect.get(t,"size",t)}function xt(t){t=f(t);const e=f(this);return z(e).has.call(e,t)||(e.add(t),_(e,"add",t,t)),this}function Bt(t,e){e=f(e);const n=f(this),{has:s,get:r}=z(n);let i=s.call(n,t);i||(t=f(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?pt(e,o)&&_(n,"set",t,e):_(n,"add",t,e),this}function Tt(t){const e=f(this),{has:n,get:s}=z(e);let r=n.call(e,t);r||(t=f(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&_(e,"delete",t,void 0),i}function Rt(){const t=f(this),e=t.size!==0,n=t.clear();return e&&_(t,"clear",void 0,void 0),n}function H(t,e){return function(s,r){const i=this,o=i.__v_raw,a=f(o),u=e?et:t?st:rt;return!t&&w(a,"iterate",T),o.forEach((c,l)=>s.call(r,u(c),u(l),i))}}function F(t,e,n){return function(...s){const r=this.__v_raw,i=f(r),o=U(i),a=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,c=r[t](...s),l=n?et:e?st:rt;return!e&&w(i,"iterate",u?X:T),{next(){const{value:h,done:v}=c.next();return v?{value:h,done:v}:{value:a?[l(h[0]),l(h[1])]:l(h),done:v}},[Symbol.iterator](){return this}}}}function A(t){return function(...e){return t==="delete"?!1:this}}function he(){const t={get(i){return j(this,i)},get size(){return W(this)},has:K,add:xt,set:Bt,delete:Tt,clear:Rt,forEach:H(!1,!1)},e={get(i){return j(this,i,!1,!0)},get size(){return W(this)},has:K,add:xt,set:Bt,delete:Tt,clear:Rt,forEach:H(!1,!0)},n={get(i){return j(this,i,!0)},get size(){return W(this,!0)},has(i){return K.call(this,i,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:H(!0,!1)},s={get(i){return j(this,i,!0,!0)},get size(){return W(this,!0)},has(i){return K.call(this,i,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:H(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=F(i,!1,!1),n[i]=F(i,!0,!1),e[i]=F(i,!1,!0),s[i]=F(i,!0,!0)}),[t,n,e,s]}const[de,pe,ve,we]=he();function It(t,e){const n=e?t?we:ve:t?pe:de;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(C(n,r)&&r in s?n:s,r,i)}const be={get:It(!1,!1)},ge={get:It(!0,!1)},Ot=new WeakMap,me=new WeakMap,Lt=new WeakMap,ye=new WeakMap;function Ee(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Se(t){return t.__v_skip||!Object.isExtensible(t)?0:Ee(Gt(t))}function nt(t){return t&&t.__v_isReadonly?t:Nt(t,!1,le,be,Ot)}function D(t){return Nt(t,!0,fe,ge,Lt)}function Nt(t,e,n,s,r){if(!k(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Se(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function _e(t){return!!(t&&t.__v_isReadonly)}function f(t){const e=t&&t.__v_raw;return e?f(e):t}const rt=t=>k(t)?nt(t):t,st=t=>k(t)?D(t):t;function it(t){return Boolean(t&&t.__v_isRef===!0)}Promise.resolve();var Ae=function(){function t(e,n){this.namespace=e,this.stores=n,this.stores[e].watchers.push(this)}return t.prototype.do=function(e){var n=this;return this.handler=e,function(){return n.unwatch()}},t.prototype.unwatch=function(){this===null||this===void 0||this.stopEffect(),this.handler=null;var e=this.stores[this.namespace].watchers.indexOf(this);e!==-1&&this.stores[this.namespace].watchers.splice(e,1)},t}(),ot="$state-initialized",xe=function(){function t(e,n){this.eventEmitter=e,this.stores=n,this.eventEmitter=e,this.stores=n}return t.prototype.offEvents=function(e,n,s){var r=n?this.eventEmitter.removeUnicastEventListener:this.eventEmitter.removeBroadcastEventListener;r=r.bind(this.eventEmitter),s?e[s]?(r(s,e[s]),delete e[s]):console.warn(ut.handlerIsNotInTheEventsPool(s,n)):Object.entries(e).forEach(function(i){var o=i[0],a=i[1];r(o,a)})},t.prototype.onBroadcast=function(e){var n=this;return Object.entries(e).forEach(function(s){var r=s[0],i=s[1];n.eventEmitter.addBroadcastEventListener(r,i)}),function(s){n.offEvents(e,!1,s)}},t.prototype.onUnicast=function(e){var n=this;return Object.entries(e).forEach(function(s){var r=s[0],i=s[1];try{n.eventEmitter.addUnicastEventListener(r,i)}catch(o){console.error(o)}}),function(s){n.offEvents(e,!0,s)}},t.prototype.createBroadcaster=function(e){var n=this;return new Proxy({},{get:function(s,r){return function(){for(var i,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return e==null||e(r),(i=n.eventEmitter).emitBroadcast.apply(i,V([r],o,!1))}},set:function(){return!1}})},t.prototype.createUnicaster=function(e){var n=this;return new Proxy({},{get:function(s,r){return function(){for(var i,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return e==null||e(r),(i=n.eventEmitter).emitUnicast.apply(i,V([r],o,!1))}},set:function(){return!1}})},t.prototype.existState=function(e){return!!this.stores[e]},t.prototype.initState=function(e,n,s){if(s===void 0&&(s=!1),this.existState(e))throw new Error(d.duplicatedInitial(e));if(lt(n))throw new Error(d.initializePrimitiveState(e));return this.stores[e]={state:nt(n),owner:s?this:null,watchers:[]},this.eventEmitter.emitBroadcast(ot,e),this.getState(e)},t.prototype.getState=function(e,n){if(this.existState(e)){var s=D(this.stores[e].state);return n?n(s):s}else return null},t.prototype.getStateToSet=function(e){if(!this.existState(e)){var n=d.accessUninitializedState(e);throw new Error(n)}var s=this.stores[e].owner;if(s!==this&&s!==null){var n=d.modifyPrivateState(e);throw new Error(n)}return this.stores[e].state},t.prototype.setState=function(e,n){return b(this,void 0,void 0,function(){var s;return g(this,function(r){switch(r.label){case 0:return s=this.getStateToSet(e),[4,Promise.resolve(n(s))];case 1:return r.sent(),[2]}})})},t.prototype.watchState=function(e,n){if(!this.existState(e)){var s=d.accessUninitializedState(e);throw new Error(s)}var r=D(this.stores[e].state),i=new Ae(e,this.stores);i.oldWatchingStates=n(JSON.parse(JSON.stringify(r)),!1);var o=qt(function(){var a,u=n(r,!0),c=lt(u)?u:JSON.parse(JSON.stringify(u));try{(a=i.handler)===null||a===void 0||a.call(i,u,i.oldWatchingStates)}finally{i.oldWatchingStates=c}});return i.stopEffect=function(){return o.effect.stop()},i},t.prototype.waitState=function(e,n){var s=this;n===void 0&&(n=10*1e3);var r=V([],e,!0),i=e.filter(function(a){return!s.existState(a)});if(i.length===0){var o=r.map(function(a){return s.getState(a)});return Promise.resolve(o)}else return new Promise(function(a,u){var c=setTimeout(function(){clearTimeout(c);var h=d.waitStateTimeout(i);u(new Error(h))},n),l=function(h){var v=i.indexOf(h);if(v!==-1&&i.splice(v,1),i.length===0){clearTimeout(c),s.eventEmitter.removeBroadcastEventListener(ot,l);var m=r.map(function(P){return s.getState(P)});a(m)}};s.eventEmitter.addBroadcastEventListener(ot,l)})},t}(),Be=function(){function t(e){this.name=e,this.dependenciesReady=!1,this.bootstrapping=null,this.dependencies=[],this.relatedApps=[],this.name=e,this.isRallieCoreApp=!0}return t.prototype.relateTo=function(e){var n=this,s=function(o){return typeof o=="string"?o:o.name},r=ft(e),i=this.relatedApps.map(function(o){return o.name});return r.forEach(function(o){i.includes(s(o))||n.relatedApps.push({name:s(o),ctx:typeof o!="string"?o.ctx:void 0})}),this},t.prototype.relyOn=function(e){var n=this,s=function(a){return typeof a=="string"?a:a.name},r=ft(e),i=this.dependencies.map(function(a){return a.name}),o=this.relatedApps.map(function(a){return a.name});return r.forEach(function(a){var u=s(a);i.includes(u)||n.dependencies.push({name:u,ctx:typeof a!="string"?a.ctx:void 0,data:typeof a!="string"?a.data:void 0}),o.includes(u)||n.relatedApps.push({name:u,ctx:typeof a!="string"?a.ctx:void 0})}),this},t.prototype.onBootstrap=function(e){return this.doBootstrap=e,this},t.prototype.onActivate=function(e){return this.doActivate=e,this},t.prototype.onDestroy=function(e){return this.doDestroy=e,this},t}(),Te=function(t){return b(void 0,void 0,void 0,function(){var e;return g(this,function(n){return e=new Promise(function(s){var r=null;if(t instanceof HTMLScriptElement)r=t;else{r=document.createElement("script");var i=typeof t!="string"?t:{type:"text/javascript",src:t};Object.entries(i).forEach(function(o){var a=o[0],u=o[1];r[a]=u})}r.src&&(r.onload=r.onerror=function(){s()}),document.body.appendChild(r),r.src||s()}),[2,e]})})},Re=function(t){var e=null;if(t instanceof HTMLLinkElement)e=t;else{var n=typeof t!="string"?t:{rel:"stylesheet",type:"text/css",href:t};e=document.createElement("link"),Object.entries(n).forEach(function(s){var r=s[0],i=s[1];e[r]=i})}document.head.appendChild(e)},Ie=function(t){return function(e){return b(void 0,void 0,void 0,function(){var n,s,r;return g(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),n=null,typeof e=="string"?n=e:e instanceof HTMLScriptElement?n=e.getAttribute("src"):n=e.src,[4,t(n)];case 1:return s=i.sent(),[4,s.text()];case 2:return r=i.sent(),[2,r];case 3:return i.sent(),[2,""];case 4:return[2]}})})}},Oe=function(t){var e=new Function(t);e()},x={loadScript:Te,loadLink:Re,fetchScript:Ie,excuteCode:Oe},Le=function(){function t(e){this.eventEmitter=new jt,this.stores={},this.apps={},this.loadingApps={},this.conf={maxBootstrapTime:10*1e3,fetch:null,assets:{}},this.middlewares=[],this.name=e,this.composedMiddlewareFn=ht(this.middlewares)}return t.prototype.isRallieCoreApp=function(e){return this.apps[e]&&typeof this.apps[e]!="boolean"},t.prototype.config=function(e){return this.conf=y(y(y({},this.conf),e),{assets:y(y({},this.conf.assets),(e==null?void 0:e.assets)||{})}),this},t.prototype.use=function(e){if(typeof e!="function")throw new Error(d.wrongMiddlewareType());return this.middlewares.push(e),this.composedMiddlewareFn=ht(this.middlewares),this},t.prototype.createContext=function(e,n){n===void 0&&(n={});var s=y({name:e,loadScript:x.loadScript,loadLink:x.loadLink,fetchScript:x.fetchScript(this.conf.fetch),excuteCode:x.excuteCode,conf:this.conf},n);return s},t.prototype.loadResourcesFromAssetsConfig=function(e){return b(this,void 0,void 0,function(){var n,s,r,i,o,a,u,c,l,h,v,m,P,M,G,$,J;return g(this,function(I){switch(I.label){case 0:if(n=e.name,s=e.loadScript,r=s===void 0?x.loadScript:s,i=e.loadLink,o=i===void 0?x.loadLink:i,a=e.fetchScript,u=a===void 0?x.fetchScript(this.conf.fetch):a,c=e.excuteCode,l=c===void 0?x.excuteCode:c,h=e.conf,v=h===void 0?this.conf:h,m=v.assets,P=v.fetch,!m[n])return[3,7];if(m[n].css&&m[n].css.forEach(function(kt){o(kt)}),!m[n].js)return[3,6];M=0,G=m[n].js,I.label=1;case 1:return M<G.length?($=G[M],P?[3,3]:[4,r($)]):[3,6];case 2:return I.sent(),[3,5];case 3:return[4,u($)];case 4:J=I.sent(),J&&l(J),I.label=5;case 5:return M++,[3,1];case 6:return[3,8];case 7:throw new Error(d.resourceNotDeclared(n,this.name));case 8:return[2]}})})},t.prototype.createSocket=function(){return new xe(this.eventEmitter,this.stores)},t.prototype.existApp=function(e){return!!this.apps[e]},t.prototype.createApp=function(e){if(this.existApp(e))throw new Error(d.createExistingApp(e));var n=new Be(e);return this.apps[e]=n,n},t.prototype.loadApp=function(e,n){return n===void 0&&(n={}),b(this,void 0,void 0,function(){var s=this;return g(this,function(r){switch(r.label){case 0:return this.apps[e]?[3,2]:(this.loadingApps[e]||(this.loadingApps[e]=new Promise(function(i,o){var a=s.createContext(e,n);s.composedMiddlewareFn(a,s.loadResourcesFromAssetsConfig.bind(s)).then(function(){var u=e.startsWith("lib:");u&&!s.apps[e]&&(s.apps[e]=!0),s.apps[e]||o(new Error(d.appNotCreated(e))),i()}).catch(function(u){o(u)})})),[4,this.loadingApps[e]]);case 1:r.sent(),r.label=2;case 2:return[2]}})})},t.prototype.activateDependencies=function(e){return b(this,void 0,void 0,function(){var n,s,r,i,o,a;return g(this,function(u){switch(u.label){case 0:if(!(!e.dependenciesReady&&e.dependencies.length!==0))return[3,5];n=0,s=e.dependencies,u.label=1;case 1:return n<s.length?(r=s[n],i=r.name,o=r.data,a=r.ctx,[4,this.activateApp(i,o,a)]):[3,4];case 2:u.sent(),u.label=3;case 3:return n++,[3,1];case 4:e.dependenciesReady=!0,u.label=5;case 5:return[2]}})})},t.prototype.loadRelatedApps=function(e){return b(this,void 0,void 0,function(){var n,s,r,i,o;return g(this,function(a){switch(a.label){case 0:n=0,s=e.relatedApps,a.label=1;case 1:return n<s.length?(r=s[n],i=r.name,o=r.ctx,[4,this.loadApp(i,o)]):[3,4];case 2:a.sent(),a.label=3;case 3:return n++,[3,1];case 4:return[2]}})})},t.prototype.activateApp=function(e,n,s){return s===void 0&&(s={}),b(this,void 0,void 0,function(){var r,i,o,a,u=this;return g(this,function(c){switch(c.label){case 0:return[4,this.loadApp(e,s)];case 1:return c.sent(),this.isRallieCoreApp(e)?(r=this.apps[e],[4,this.loadRelatedApps(r)]):[3,8];case 2:return c.sent(),r.bootstrapping?[3,4]:(i=function(){return b(u,void 0,void 0,function(){return g(this,function(l){switch(l.label){case 0:return[4,this.activateDependencies(r)];case 1:return l.sent(),r.doBootstrap?[4,Promise.resolve(r.doBootstrap(n))]:[3,3];case 2:return l.sent(),[3,5];case 3:return r.doActivate?[4,Promise.resolve(r.doActivate(n))]:[3,5];case 4:l.sent(),l.label=5;case 5:return[2]}})})},o=function(l){return new Promise(function(h,v){setTimeout(function(){v(new Error(d.bootstrapTimeout(e,l)))},l)})},r.bootstrapping=Promise.race([i(),o(this.conf.maxBootstrapTime)]),[4,r.bootstrapping]);case 3:return c.sent(),[3,8];case 4:return[4,r.bootstrapping];case 5:return c.sent(),a=r.doActivate,a?[4,Promise.resolve(r.doActivate(n))]:[3,7];case 6:a=c.sent(),c.label=7;case 7:c.label=8;case 8:return[2]}})})},t.prototype.destroyApp=function(e,n){return b(this,void 0,void 0,function(){var s,r;return g(this,function(i){switch(i.label){case 0:return this.isRallieCoreApp(e)?(s=this.apps[e],r=s.doDestroy,r?[4,Promise.resolve(s.doDestroy(n))]:[3,2]):[3,3];case 1:r=i.sent(),i.label=2;case 2:s.bootstrapping=null,s.dependenciesReady=!1,i.label=3;case 3:return[2]}})})},t}(),Ne={},at="DEFAULT_BUS",Pe=function(t){if(t===void 0&&(t=at),window.RALLIE_BUS_STORE===void 0&&Reflect.defineProperty(window,"RALLIE_BUS_STORE",{value:Ne,writable:!1}),window.RALLIE_BUS_STORE[t])throw new Error(d.duplicatedBus(t));var e=new Le(t);return Reflect.defineProperty(window.RALLIE_BUS_STORE,t,{value:e,writable:!1}),e},Pt=function(t){return t===void 0&&(t=at),window.RALLIE_BUS_STORE&&window.RALLIE_BUS_STORE[t]},ct=function(t){t===void 0&&(t=at);var e=null,n=!1,s=Pt(t);return s?(e=s,n=!1):(e=Pe(t),n=!0),[e,n]};/*! *****************************************************************************
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
***************************************************************************** */function Mt(t,e,n,s){function r(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(l){try{c(s.next(l))}catch(h){o(h)}}function u(l){try{c(s.throw(l))}catch(h){o(h)}}function c(l){l.done?i(l.value):r(l.value).then(a,u)}c((s=s.apply(t,e||[])).next())})}function Ct(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},s,r,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(l){return u([c,l])}}function u(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,r&&(i=c[0]&2?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(l){c=[6,l],r=0}finally{s=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var p={privateBus:function(t){return"".concat(t,".bus")},stateNamespace:function(t){return"".concat(t,".state")},isGlobalBusAccessed:"isGlobalBusAccessed"},Ut=function(t){return"[rallie] ".concat(t)},N={stateNotInitialized:function(t){return Ut(" app ".concat(t,`'s state is not initialized, please check:
`)+"1. whether app ".concat(t,` is loaded.
`)+"2. whether app ".concat(t," initializes the state"))},duplicatedAppName:function(t){return Ut("the app ".concat(t," is already registered, please rename your app"))}},Me=function(){function t(e){var n=this;this.name=e,this.isRallieApp=!1;var s=ct(p.privateBus(e))[0];this.socket=s.createSocket(),this.events=this.socket.createBroadcaster(),this.methods=this.socket.createUnicaster(),Reflect.defineProperty(this,"state",{get:function(){return n.socket.getState(p.stateNamespace(n.name))},set:function(){return!1}})}return t.prototype.setState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.setState(p.stateNamespace(this.name),e);throw new Error(N.stateNotInitialized(this.name))},t.prototype.watchState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.watchState(p.stateNamespace(this.name),e);throw new Error(N.stateNotInitialized(this.name))},t.prototype.listenEvents=function(e){return this.socket.onBroadcast(e)},t}(),Ce=function(){function t(e,n){var s=this,r;this.name=e,this.isRallieApp=!0;var i=ct(),o=i[0],a=i[1];if(o.existApp(e))throw new Error(N.duplicatedAppName(e));this.globalBus=o,this.globalSocket=o.createSocket(),this.isHost=a,a&&this.globalSocket.initState(p.isGlobalBusAccessed,{value:!1},!0);var u=ct(p.privateBus(e))[0];this.socket=u.createSocket(),this.events=this.socket.createBroadcaster(),this.methods=this.socket.createUnicaster(),(n==null?void 0:n.state)&&this.socket.initState(p.stateNamespace(e),n.state,(r=n==null?void 0:n.isPrivate)!==null&&r!==void 0?r:!1),Reflect.defineProperty(this,"state",{get:function(){return s.socket.getState(p.stateNamespace(s.name))},set:function(){return!1}})}return t.prototype.setState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.setState(p.stateNamespace(this.name),e);throw new Error(N.stateNotInitialized(this.name))},t.prototype.watchState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.watchState(p.stateNamespace(this.name),e);throw new Error(N.stateNotInitialized(this.name))},t.prototype.listenEvents=function(e){return this.socket.onBroadcast(e)},t.prototype.addMethods=function(e){return this.socket.onUnicast(e)},t.prototype.connect=function(e){return new Me(e)},t.prototype.load=function(e,n){return n===void 0&&(n={}),this.globalBus.loadApp(e,n)},t.prototype.activate=function(e,n,s){return s===void 0&&(s={}),this.globalBus.activateApp(e,n,s)},t.prototype.destroy=function(e,n){return this.globalBus.destroyApp(e,n)},t.prototype.runInHostMode=function(e){return Mt(this,void 0,void 0,function(){var n,s=this;return Ct(this,function(r){switch(r.label){case 0:return this.isHost?(n=function(i){s.globalSocket.setState(p.isGlobalBusAccessed,function(o){o.value=i})},[4,Promise.resolve(e(this.globalBus,n))]):[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})},t.prototype.runInRemoteMode=function(e){var n;return Mt(this,void 0,void 0,function(){var s;return Ct(this,function(r){switch(r.label){case 0:return this.isHost?[3,2]:(s=((n=this.globalSocket.getState(p.isGlobalBusAccessed))===null||n===void 0?void 0:n.value)?this.globalBus:null,[4,Promise.resolve(e(s))]);case 1:r.sent(),r.label=2;case 2:return[2]}})})},t}();function Ue(t){var e=Pt();return e.createApp(t.name)}export{Ce as A,Ue as r};
