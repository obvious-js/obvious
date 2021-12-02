const Kt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Kt();/*! *****************************************************************************
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
***************************************************************************** */var y=function(){return y=Object.assign||function(e){for(var n,s=1,r=arguments.length;s<r;s++){n=arguments[s];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},y.apply(this,arguments)};function b(t,e,n,s){function r(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(l){try{c(s.next(l))}catch(d){o(d)}}function u(l){try{c(s.throw(l))}catch(d){o(d)}}function c(l){l.done?i(l.value):r(l.value).then(a,u)}c((s=s.apply(t,e||[])).next())})}function g(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},s,r,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(l){return u([c,l])}}function u(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,r&&(i=c[0]&2?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(l){c=[6,l],r=0}finally{s=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function q(t,e,n){if(n||arguments.length===2)for(var s=0,r=e.length,i;s<r;s++)(i||!(s in e))&&(i||(i=Array.prototype.slice.call(e,0,s)),i[s]=e[s]);return t.concat(i||Array.prototype.slice.call(e))}var f={removeNonExistedBroadcast:function(t){return"[@rallie/core] you are trying to remove a listener of the broadcast event ".concat(t,", but ").concat(t," hasn't been registed as a broadcast event")},wrongBroadcastCallback:function(t){return"[@rallie/core] you are trying to remove a listener of the broadcast event ".concat(t,", but the listener hasn't been registed")},broadcastCallbackError:function(t){return"[@rallie/core] one of the callbacks of the broadcast event ".concat(t," throws an uncaught error")},removeNonExistedUnicast:function(t){return"[@rallie/core] you are trying to remove a listener of the unicast event ".concat(t,", but ").concat(t," hasn't been registed as a unicast event")},wrongUnicastCallback:function(t){return"[@rallie/core] you are trying to remove a listener of the unicast event ".concat(t,", but the listener hasn't been registed")},registedExistedUnicast:function(t){return"[@rallie/core] you are trying to register a unicast event ".concat(t,", but it has been registered before")},emittedNonExistedUnicast:function(t){return"[@rallie/core] you have emitted ".concat(t," unicast, but there is no listener of this event")},createExistingApp:function(t){return"[@rallie/core] ".concat(t," is existing, you are not allowed to create it again")},resourceNotDeclared:function(t,e){return"[@rallie/core] can not find any assets of the app ".concat(t," on the bus ").concat(e)},appNotCreated:function(t){return"[@rallie/core] you are trying to activate app ".concat(t,", but it was not created")},modifyPrivateState:function(t){return"[@rallie/core] state ".concat(t," is private, you are not allowed to set it")},accessUninitializedState:function(t){return"[@rallie/core] it's not allowed to set or watch state ".concat(t," before it is initialized")},waitStateTimeout:function(t){return"[@rallie/core] wait for states ".concat(JSON.stringify(t)," timeout")},duplicatedInitial:function(t){return"[@rallie/core] duplicated initialized state ".concat(t)},initializePrimitiveState:function(t){return"[@rallie/core] it's not allowed to initialized state ".concat(t," to a primitive value")},duplicatedBus:function(t){return"[@rallie/core] the bus named ".concat(t," has been defined before, please rename your bus")},invalidResource:function(t){return"[@rallie/core] ".concat(t," is not a valid asset")},bootstrapTimeout:function(t,e){return"[@rallie/core] failed to bootstrap the app ".concat(t," in ").concat(e," milliseconds. ")+"If you see another same error at the same time, there might be circular dependencies"},multipleCalledNextFn:function(){return"[@rallie/core] next() called multiple times in the middleware"},wrongMiddlewareType:function(){return"[@rallie/core] the middleware must be a function"}},ht={emptyBroadcastEvents:function(t){return"[@rallie/core] you have emitted ".concat(t," broadcast, but there is no listener of this event")},handlerIsNotInTheEventsPool:function(t,e){return"[@rallie/core] the event ".concat(t," is not in the events pool that you specified when calling on").concat(e?"Unicast":"Broadcast")}};function dt(t){return["string","number","boolean","undefined"].includes(typeof t)}function pt(t){var e={},n=[];return t.forEach(function(s){var r=typeof s=="string"?s:s.name;e[r]||(n.push(s),e[r]=!0)}),n}var vt=function(t){return function(e,n){var s=-1,r=function(i){if(i<=s)return Promise.reject(new Error(f.multipleCalledNextFn()));s=i;var o=t[i];if(i===t.length&&(o=n),!o)return Promise.resolve();try{return Promise.resolve(o(e,r.bind(null,i+1)))}catch(a){return Promise.reject(a)}};return r(0)}},Wt=function(){function t(){this.broadcastEvents={},this.unicastEvents={}}return t.prototype.addBroadcastEventListener=function(e,n){this.broadcastEvents[e]=this.broadcastEvents[e]||[],this.broadcastEvents[e].push(n)},t.prototype.addUnicastEventListener=function(e,n){if(this.unicastEvents[e])throw new Error(f.registedExistedUnicast(e));this.unicastEvents[e]=n},t.prototype.removeBroadcastEventListener=function(e,n){var s=this.broadcastEvents[e];if(s){for(var r=-1,i=0;i<s.length;i++)if(s[i]===n){r=i;break}if(r!==-1)s.splice(r,1);else{var o=f.wrongBroadcastCallback(e);throw new Error(o)}}else{var o=f.removeNonExistedBroadcast(e);throw new Error(o)}},t.prototype.removeUnicastEventListener=function(e,n){if(!this.unicastEvents[e]){var s=f.removeNonExistedUnicast(e);throw new Error(s)}if(this.unicastEvents[e]!==n){var s=f.wrongUnicastCallback(e);throw new Error(s)}delete this.unicastEvents[e]},t.prototype.emitBroadcast=function(e){for(var n=[],s=1;s<arguments.length;s++)n[s-1]=arguments[s];var r=this.broadcastEvents[e],i=e.startsWith("$state");r&&r.length!==0?r.forEach(function(o){try{o.apply(void 0,n)}catch(a){console.error(f.broadcastCallbackError(e)),console.error(a)}}):i||console.warn(ht.emptyBroadcastEvents(e))},t.prototype.emitUnicast=function(e){for(var n=[],s=1;s<arguments.length;s++)n[s-1]=arguments[s];var r=this.unicastEvents[e];if(r)return r.apply(void 0,n);throw new Error(f.emittedNonExistedUnicast(e))},t}();function Ft(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Ht=Object.assign,Dt=Object.prototype.hasOwnProperty,j=(t,e)=>Dt.call(t,e),E=Array.isArray,z=t=>wt(t)==="[object Map]",Gt=t=>typeof t=="string",Z=t=>typeof t=="symbol",K=t=>t!==null&&typeof t=="object",$t=Object.prototype.toString,wt=t=>$t.call(t),Jt=t=>wt(t).slice(8,-1),Q=t=>Gt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bt=(t,e)=>!Object.is(t,e);let Vt;function gt(t,e){e=e||Vt,e&&e.active&&e.effects.push(t)}const mt=t=>{const e=new Set(t);return e.w=0,e.n=0,e},yt=t=>(t.w&S)>0,Et=t=>(t.n&S)>0,Yt=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=S},qt=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];yt(r)&&!Et(r)?r.delete(t):e[n++]=r,r.w&=~S,r.n&=~S}e.length=n}},X=new WeakMap;let N=0,S=1;const tt=30,L=[];let B;const R=Symbol(""),et=Symbol("");class Zt{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],gt(this,s)}run(){if(!this.active)return this.fn();if(!L.includes(this))try{return L.push(B=this),te(),S=1<<++N,N<=tt?Yt(this):St(this),this.fn()}finally{N<=tt&&qt(this),S=1<<--N,_t(),L.pop();const e=L.length;B=e>0?L[e-1]:void 0}}stop(){this.active&&(St(this),this.onStop&&this.onStop(),this.active=!1)}}function St(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function Qt(t,e){t.effect&&(t=t.effect.fn);const n=new Zt(t);e&&(Ht(n,e),e.scope&&gt(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}let I=!0;const nt=[];function Xt(){nt.push(I),I=!1}function te(){nt.push(I),I=!0}function _t(){const t=nt.pop();I=t===void 0?!0:t}function w(t,e,n){if(!ee())return;let s=X.get(t);s||X.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=mt()),ne(r)}function ee(){return I&&B!==void 0}function ne(t,e){let n=!1;N<=tt?Et(t)||(t.n|=S,n=!yt(t)):n=!t.has(B),n&&(t.add(B),B.deps.push(t))}function _(t,e,n,s,r,i){const o=X.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&E(t))o.forEach((u,c)=>{(c==="length"||c>=s)&&a.push(u)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":E(t)?Q(n)&&a.push(o.get("length")):(a.push(o.get(R)),z(t)&&a.push(o.get(et)));break;case"delete":E(t)||(a.push(o.get(R)),z(t)&&a.push(o.get(et)));break;case"set":z(t)&&a.push(o.get(R));break}if(a.length===1)a[0]&&At(a[0]);else{const u=[];for(const c of a)c&&u.push(...c);At(mt(u))}}function At(t,e){for(const n of E(t)?t:[...t])(n!==B||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const re=Ft("__proto__,__v_isRef,__isVue"),xt=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Z)),se=Rt(),ie=Rt(!0),Bt=oe();function oe(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=h(this);for(let i=0,o=this.length;i<o;i++)w(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(h)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xt();const s=h(this)[e].apply(this,n);return _t(),s}}),t}function Rt(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_raw"&&i===(t?e?Se:Mt:e?Ee:Pt).get(s))return s;const o=E(s);if(!t&&o&&j(Bt,r))return Reflect.get(Bt,r,i);const a=Reflect.get(s,r,i);return(Z(r)?xt.has(r):re(r))||(t||w(s,"get",r),e)?a:at(a)?!o||!Q(r)?a.value:a:K(a)?t?J(a):st(a):a}}const ae=ce();function ce(t=!1){return function(n,s,r,i){let o=n[s];if(!t&&!xe(r)&&(r=h(r),o=h(o),!E(n)&&at(o)&&!at(r)))return o.value=r,!0;const a=E(n)&&Q(s)?Number(s)<n.length:j(n,s),u=Reflect.set(n,s,r,i);return n===h(i)&&(a?bt(r,o)&&_(n,"set",s,r):_(n,"add",s,r)),u}}function ue(t,e){const n=j(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&_(t,"delete",e,void 0),s}function le(t,e){const n=Reflect.has(t,e);return(!Z(e)||!xt.has(e))&&w(t,"has",e),n}function fe(t){return w(t,"iterate",E(t)?"length":R),Reflect.ownKeys(t)}const he={get:se,set:ae,deleteProperty:ue,has:le,ownKeys:fe},de={get:ie,set(t,e){return!0},deleteProperty(t,e){return!0}},rt=t=>t,W=t=>Reflect.getPrototypeOf(t);function F(t,e,n=!1,s=!1){t=t.__v_raw;const r=h(t),i=h(e);e!==i&&!n&&w(r,"get",e),!n&&w(r,"get",i);const{has:o}=W(r),a=s?rt:n?ot:it;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function H(t,e=!1){const n=this.__v_raw,s=h(n),r=h(t);return t!==r&&!e&&w(s,"has",t),!e&&w(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function D(t,e=!1){return t=t.__v_raw,!e&&w(h(t),"iterate",R),Reflect.get(t,"size",t)}function Tt(t){t=h(t);const e=h(this);return W(e).has.call(e,t)||(e.add(t),_(e,"add",t,t)),this}function It(t,e){e=h(e);const n=h(this),{has:s,get:r}=W(n);let i=s.call(n,t);i||(t=h(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?bt(e,o)&&_(n,"set",t,e):_(n,"add",t,e),this}function Ot(t){const e=h(this),{has:n,get:s}=W(e);let r=n.call(e,t);r||(t=h(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&_(e,"delete",t,void 0),i}function Nt(){const t=h(this),e=t.size!==0,n=t.clear();return e&&_(t,"clear",void 0,void 0),n}function G(t,e){return function(s,r){const i=this,o=i.__v_raw,a=h(o),u=e?rt:t?ot:it;return!t&&w(a,"iterate",R),o.forEach((c,l)=>s.call(r,u(c),u(l),i))}}function $(t,e,n){return function(...s){const r=this.__v_raw,i=h(r),o=z(i),a=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,c=r[t](...s),l=n?rt:e?ot:it;return!e&&w(i,"iterate",u?et:R),{next(){const{value:d,done:v}=c.next();return v?{value:d,done:v}:{value:a?[l(d[0]),l(d[1])]:l(d),done:v}},[Symbol.iterator](){return this}}}}function A(t){return function(...e){return t==="delete"?!1:this}}function pe(){const t={get(i){return F(this,i)},get size(){return D(this)},has:H,add:Tt,set:It,delete:Ot,clear:Nt,forEach:G(!1,!1)},e={get(i){return F(this,i,!1,!0)},get size(){return D(this)},has:H,add:Tt,set:It,delete:Ot,clear:Nt,forEach:G(!1,!0)},n={get(i){return F(this,i,!0)},get size(){return D(this,!0)},has(i){return H.call(this,i,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:G(!0,!1)},s={get(i){return F(this,i,!0,!0)},get size(){return D(this,!0)},has(i){return H.call(this,i,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:G(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=$(i,!1,!1),n[i]=$(i,!0,!1),e[i]=$(i,!1,!0),s[i]=$(i,!0,!0)}),[t,n,e,s]}const[ve,we,be,ge]=pe();function Lt(t,e){const n=e?t?ge:be:t?we:ve;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(j(n,r)&&r in s?n:s,r,i)}const me={get:Lt(!1,!1)},ye={get:Lt(!0,!1)},Pt=new WeakMap,Ee=new WeakMap,Mt=new WeakMap,Se=new WeakMap;function _e(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ae(t){return t.__v_skip||!Object.isExtensible(t)?0:_e(Jt(t))}function st(t){return t&&t.__v_isReadonly?t:Ct(t,!1,he,me,Pt)}function J(t){return Ct(t,!0,de,ye,Mt)}function Ct(t,e,n,s,r){if(!K(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Ae(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function xe(t){return!!(t&&t.__v_isReadonly)}function h(t){const e=t&&t.__v_raw;return e?h(e):t}const it=t=>K(t)?st(t):t,ot=t=>K(t)?J(t):t;function at(t){return Boolean(t&&t.__v_isRef===!0)}Promise.resolve();var Be=function(){function t(e,n){this.namespace=e,this.stores=n,this.stores[e].watchers.push(this)}return t.prototype.do=function(e){var n=this;return this.handler=e,function(){return n.unwatch()}},t.prototype.unwatch=function(){this===null||this===void 0||this.stopEffect(),this.handler=null;var e=this.stores[this.namespace].watchers.indexOf(this);e!==-1&&this.stores[this.namespace].watchers.splice(e,1)},t}(),ct="$state-initialized",Re=function(){function t(e,n){this.eventEmitter=e,this.stores=n,this.eventEmitter=e,this.stores=n}return t.prototype.offEvents=function(e,n,s){var r=n?this.eventEmitter.removeUnicastEventListener:this.eventEmitter.removeBroadcastEventListener;r=r.bind(this.eventEmitter),s?e[s]?(r(s,e[s]),delete e[s]):console.warn(ht.handlerIsNotInTheEventsPool(s,n)):Object.entries(e).forEach(function(i){var o=i[0],a=i[1];r(o,a)})},t.prototype.onBroadcast=function(e){var n=this;return Object.entries(e).forEach(function(s){var r=s[0],i=s[1];n.eventEmitter.addBroadcastEventListener(r,i)}),function(s){n.offEvents(e,!1,s)}},t.prototype.onUnicast=function(e){var n=this;return Object.entries(e).forEach(function(s){var r=s[0],i=s[1];try{n.eventEmitter.addUnicastEventListener(r,i)}catch(o){console.error(o)}}),function(s){n.offEvents(e,!0,s)}},t.prototype.createBroadcaster=function(e){var n=this;return new Proxy({},{get:function(s,r){return function(){for(var i,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return e==null||e(r),(i=n.eventEmitter).emitBroadcast.apply(i,q([r],o,!1))}},set:function(){return!1}})},t.prototype.createUnicaster=function(e){var n=this;return new Proxy({},{get:function(s,r){return function(){for(var i,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return e==null||e(r),(i=n.eventEmitter).emitUnicast.apply(i,q([r],o,!1))}},set:function(){return!1}})},t.prototype.existState=function(e){return!!this.stores[e]},t.prototype.initState=function(e,n,s){if(s===void 0&&(s=!1),this.existState(e))throw new Error(f.duplicatedInitial(e));if(dt(n))throw new Error(f.initializePrimitiveState(e));return this.stores[e]={state:st(n),owner:s?this:null,watchers:[]},this.eventEmitter.emitBroadcast(ct,e),this.getState(e)},t.prototype.getState=function(e,n){if(this.existState(e)){var s=J(this.stores[e].state);return n?n(s):s}else return null},t.prototype.getStateToSet=function(e){if(!this.existState(e)){var n=f.accessUninitializedState(e);throw new Error(n)}var s=this.stores[e].owner;if(s!==this&&s!==null){var n=f.modifyPrivateState(e);throw new Error(n)}return this.stores[e].state},t.prototype.setState=function(e,n){return b(this,void 0,void 0,function(){var s;return g(this,function(r){switch(r.label){case 0:return s=this.getStateToSet(e),[4,Promise.resolve(n(s))];case 1:return r.sent(),[2]}})})},t.prototype.watchState=function(e,n){if(!this.existState(e)){var s=f.accessUninitializedState(e);throw new Error(s)}var r=J(this.stores[e].state),i=new Be(e,this.stores);i.oldWatchingStates=n(JSON.parse(JSON.stringify(r)),!1);var o=Qt(function(){var a,u=n(r,!0),c=dt(u)?u:JSON.parse(JSON.stringify(u));try{(a=i.handler)===null||a===void 0||a.call(i,u,i.oldWatchingStates)}finally{i.oldWatchingStates=c}});return i.stopEffect=function(){return o.effect.stop()},i},t.prototype.waitState=function(e,n){var s=this;n===void 0&&(n=10*1e3);var r=q([],e,!0),i=e.filter(function(a){return!s.existState(a)});if(i.length===0){var o=r.map(function(a){return s.getState(a)});return Promise.resolve(o)}else return new Promise(function(a,u){var c=setTimeout(function(){clearTimeout(c);var d=f.waitStateTimeout(i);u(new Error(d))},n),l=function(d){var v=i.indexOf(d);if(v!==-1&&i.splice(v,1),i.length===0){clearTimeout(c),s.eventEmitter.removeBroadcastEventListener(ct,l);var m=r.map(function(M){return s.getState(M)});a(m)}};s.eventEmitter.addBroadcastEventListener(ct,l)})},t}(),Te=function(){function t(e){this.name=e,this.dependenciesReady=!1,this.bootstrapping=null,this.dependencies=[],this.relatedApps=[],this.name=e,this.isRallieCoreApp=!0}return t.prototype.relateTo=function(e){var n=this,s=function(o){return typeof o=="string"?o:o.name},r=pt(e),i=this.relatedApps.map(function(o){return o.name});return r.forEach(function(o){i.includes(s(o))||n.relatedApps.push({name:s(o),ctx:typeof o!="string"?o.ctx:void 0})}),this},t.prototype.relyOn=function(e){var n=this,s=function(a){return typeof a=="string"?a:a.name},r=pt(e),i=this.dependencies.map(function(a){return a.name}),o=this.relatedApps.map(function(a){return a.name});return r.forEach(function(a){var u=s(a);i.includes(u)||n.dependencies.push({name:u,ctx:typeof a!="string"?a.ctx:void 0,data:typeof a!="string"?a.data:void 0}),o.includes(u)||n.relatedApps.push({name:u,ctx:typeof a!="string"?a.ctx:void 0})}),this},t.prototype.onBootstrap=function(e){return this.doBootstrap=e,this},t.prototype.onActivate=function(e){return this.doActivate=e,this},t.prototype.onDestroy=function(e){return this.doDestroy=e,this},t}(),Ie=function(t){return b(void 0,void 0,void 0,function(){var e;return g(this,function(n){return e=new Promise(function(s){var r=null;if(t instanceof HTMLScriptElement)r=t;else{r=document.createElement("script");var i=typeof t!="string"?t:{type:"text/javascript",src:t};Object.entries(i).forEach(function(o){var a=o[0],u=o[1];r[a]=u})}r.src&&(r.onload=r.onerror=function(){s()}),document.body.appendChild(r),r.src||s()}),[2,e]})})},Oe=function(t){var e=null;if(t instanceof HTMLLinkElement)e=t;else{var n=typeof t!="string"?t:{rel:"stylesheet",type:"text/css",href:t};e=document.createElement("link"),Object.entries(n).forEach(function(s){var r=s[0],i=s[1];e[r]=i})}document.head.appendChild(e)},Ne=function(t){return function(e){return b(void 0,void 0,void 0,function(){var n,s;return g(this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,t(e)];case 1:return n=r.sent(),[4,n.text()];case 2:return s=r.sent(),[2,s];case 3:return r.sent(),[2,""];case 4:return[2]}})})}},Le=function(t){var e=new Function(t);e()},x={loadScript:Ie,loadLink:Oe,fetchScript:Ne,excuteCode:Le},Pe=function(){function t(e){this.eventEmitter=new Wt,this.stores={},this.apps={},this.loadingApps={},this.conf={maxBootstrapTime:10*1e3,fetch:null,assets:{}},this.middlewares=[],this.name=e,this.composedMiddlewareFn=vt(this.middlewares)}return t.prototype.isRallieCoreApp=function(e){return this.apps[e]&&typeof this.apps[e]!="boolean"},t.prototype.config=function(e){return this.conf=y(y(y({},this.conf),e),{assets:y(y({},this.conf.assets),(e==null?void 0:e.assets)||{})}),this},t.prototype.use=function(e){if(typeof e!="function")throw new Error(f.wrongMiddlewareType());return this.middlewares.push(e),this.composedMiddlewareFn=vt(this.middlewares),this},t.prototype.createContext=function(e,n){n===void 0&&(n={});var s=y({name:e,loadScript:x.loadScript,loadLink:x.loadLink,fetchScript:x.fetchScript(this.conf.fetch),excuteCode:x.excuteCode,conf:this.conf},n);return s},t.prototype.loadResourcesFromAssetsConfig=function(e){return b(this,void 0,void 0,function(){var n,s,r,i,o,a,u,c,l,d,v,m,M,C,V,O,U,Y;return g(this,function(T){switch(T.label){case 0:if(n=e.name,s=e.loadScript,r=s===void 0?x.loadScript:s,i=e.loadLink,o=i===void 0?x.loadLink:i,a=e.fetchScript,u=a===void 0?x.fetchScript(this.conf.fetch):a,c=e.excuteCode,l=c===void 0?x.excuteCode:c,d=e.conf,v=d===void 0?this.conf:d,m=v.assets,M=v.fetch,!m[n])return[3,9];if(m[n].css&&m[n].css.forEach(function(k){var ft=typeof k=="string"?k:k.href;/^.+\.css$/.test(ft)?o(k):console.error(f.invalidResource(ft))}),!m[n].js)return[3,8];C=0,V=m[n].js,T.label=1;case 1:return C<V.length?(O=V[C],U=typeof O=="string"?O:O.src,/^.+\.js$/.test(U)?M?[3,3]:[4,r(O)]:[3,6]):[3,8];case 2:return T.sent(),[3,5];case 3:return[4,u(U)];case 4:Y=T.sent(),Y&&l(Y),T.label=5;case 5:return[3,7];case 6:console.error(f.invalidResource(U)),T.label=7;case 7:return C++,[3,1];case 8:return[3,10];case 9:throw new Error(f.resourceNotDeclared(n,this.name));case 10:return[2]}})})},t.prototype.createSocket=function(){return new Re(this.eventEmitter,this.stores)},t.prototype.existApp=function(e){return!!this.apps[e]},t.prototype.createApp=function(e){if(this.existApp(e))throw new Error(f.createExistingApp(e));var n=new Te(e);return this.apps[e]=n,n},t.prototype.loadApp=function(e,n){return n===void 0&&(n={}),b(this,void 0,void 0,function(){var s=this;return g(this,function(r){switch(r.label){case 0:return this.apps[e]?[3,2]:(this.loadingApps[e]||(this.loadingApps[e]=new Promise(function(i,o){var a=s.createContext(e,n);s.composedMiddlewareFn(a,s.loadResourcesFromAssetsConfig.bind(s)).then(function(){var u=e.startsWith("lib:");u&&!s.apps[e]&&(s.apps[e]=!0),s.apps[e]||o(new Error(f.appNotCreated(e))),i()}).catch(function(u){o(u)})})),[4,this.loadingApps[e]]);case 1:r.sent(),r.label=2;case 2:return[2]}})})},t.prototype.activateDependencies=function(e){return b(this,void 0,void 0,function(){var n,s,r,i,o,a;return g(this,function(u){switch(u.label){case 0:if(!(!e.dependenciesReady&&e.dependencies.length!==0))return[3,5];n=0,s=e.dependencies,u.label=1;case 1:return n<s.length?(r=s[n],i=r.name,o=r.data,a=r.ctx,[4,this.activateApp(i,o,a)]):[3,4];case 2:u.sent(),u.label=3;case 3:return n++,[3,1];case 4:e.dependenciesReady=!0,u.label=5;case 5:return[2]}})})},t.prototype.loadRelatedApps=function(e){return b(this,void 0,void 0,function(){var n,s,r,i,o;return g(this,function(a){switch(a.label){case 0:n=0,s=e.relatedApps,a.label=1;case 1:return n<s.length?(r=s[n],i=r.name,o=r.ctx,[4,this.loadApp(i,o)]):[3,4];case 2:a.sent(),a.label=3;case 3:return n++,[3,1];case 4:return[2]}})})},t.prototype.activateApp=function(e,n,s){return s===void 0&&(s={}),b(this,void 0,void 0,function(){var r,i,o,a,u=this;return g(this,function(c){switch(c.label){case 0:return[4,this.loadApp(e,s)];case 1:return c.sent(),this.isRallieCoreApp(e)?(r=this.apps[e],[4,this.loadRelatedApps(r)]):[3,8];case 2:return c.sent(),r.bootstrapping?[3,4]:(i=function(){return b(u,void 0,void 0,function(){return g(this,function(l){switch(l.label){case 0:return[4,this.activateDependencies(r)];case 1:return l.sent(),r.doBootstrap?[4,Promise.resolve(r.doBootstrap(n))]:[3,3];case 2:return l.sent(),[3,5];case 3:return r.doActivate?[4,Promise.resolve(r.doActivate(n))]:[3,5];case 4:l.sent(),l.label=5;case 5:return[2]}})})},o=function(l){return new Promise(function(d,v){setTimeout(function(){v(new Error(f.bootstrapTimeout(e,l)))},l)})},r.bootstrapping=Promise.race([i(),o(this.conf.maxBootstrapTime)]),[4,r.bootstrapping]);case 3:return c.sent(),[3,8];case 4:return[4,r.bootstrapping];case 5:return c.sent(),a=r.doActivate,a?[4,Promise.resolve(r.doActivate(n))]:[3,7];case 6:a=c.sent(),c.label=7;case 7:c.label=8;case 8:return[2]}})})},t.prototype.destroyApp=function(e,n){return b(this,void 0,void 0,function(){var s,r;return g(this,function(i){switch(i.label){case 0:return this.isRallieCoreApp(e)?(s=this.apps[e],r=s.doDestroy,r?[4,Promise.resolve(s.doDestroy(n))]:[3,2]):[3,3];case 1:r=i.sent(),i.label=2;case 2:s.bootstrapping=null,s.dependenciesReady=!1,i.label=3;case 3:return[2]}})})},t}(),Me={},ut="DEFAULT_BUS",Ce=function(t){if(t===void 0&&(t=ut),window.RALLIE_BUS_STORE===void 0&&Reflect.defineProperty(window,"RALLIE_BUS_STORE",{value:Me,writable:!1}),window.RALLIE_BUS_STORE[t])throw new Error(f.duplicatedBus(t));var e=new Pe(t);return Reflect.defineProperty(window.RALLIE_BUS_STORE,t,{value:e,writable:!1}),e},Ut=function(t){return t===void 0&&(t=ut),window.RALLIE_BUS_STORE&&window.RALLIE_BUS_STORE[t]},lt=function(t){t===void 0&&(t=ut);var e=null,n=!1,s=Ut(t);return s?(e=s,n=!1):(e=Ce(t),n=!0),[e,n]};/*! *****************************************************************************
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
***************************************************************************** */function kt(t,e,n,s){function r(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(l){try{c(s.next(l))}catch(d){o(d)}}function u(l){try{c(s.throw(l))}catch(d){o(d)}}function c(l){l.done?i(l.value):r(l.value).then(a,u)}c((s=s.apply(t,e||[])).next())})}function jt(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},s,r,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(l){return u([c,l])}}function u(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,r&&(i=c[0]&2?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(l){c=[6,l],r=0}finally{s=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var p={privateBus:function(t){return"".concat(t,".bus")},stateNamespace:function(t){return"".concat(t,".state")},isGlobalBusAccessed:"isGlobalBusAccessed"},zt=function(t){return"[rallie] ".concat(t)},P={stateNotInitialized:function(t){return zt(" app ".concat(t,`'s state is not initialized, please check:
`)+"1. whether app ".concat(t,` is loaded.
`)+"2. whether app ".concat(t," initializes the state"))},duplicatedAppName:function(t){return zt("the app ".concat(t," is already registered, please rename your app"))}},Ue=function(){function t(e){var n=this;this.name=e,this.isRallieApp=!1;var s=lt(p.privateBus(e))[0];this.socket=s.createSocket(),this.events=this.socket.createBroadcaster(),this.methods=this.socket.createUnicaster(),Reflect.defineProperty(this,"state",{get:function(){return n.socket.getState(p.stateNamespace(n.name))},set:function(){return!1}})}return t.prototype.setState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.setState(p.stateNamespace(this.name),e);throw new Error(P.stateNotInitialized(this.name))},t.prototype.watchState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.watchState(p.stateNamespace(this.name),e);throw new Error(P.stateNotInitialized(this.name))},t.prototype.listenEvents=function(e){return this.socket.onBroadcast(e)},t}(),ke=function(){function t(e,n){var s=this,r;this.name=e,this.isRallieApp=!0;var i=lt(),o=i[0],a=i[1];if(o.existApp(e))throw new Error(P.duplicatedAppName(e));this.globalBus=o,this.globalSocket=o.createSocket(),this.isHost=a,a&&this.globalSocket.initState(p.isGlobalBusAccessed,{value:!1},!0);var u=lt(p.privateBus(e))[0];this.socket=u.createSocket(),this.events=this.socket.createBroadcaster(),this.methods=this.socket.createUnicaster(),(n==null?void 0:n.state)&&this.socket.initState(p.stateNamespace(e),n.state,(r=n==null?void 0:n.isPrivate)!==null&&r!==void 0?r:!1),Reflect.defineProperty(this,"state",{get:function(){return s.socket.getState(p.stateNamespace(s.name))},set:function(){return!1}})}return t.prototype.setState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.setState(p.stateNamespace(this.name),e);throw new Error(P.stateNotInitialized(this.name))},t.prototype.watchState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.watchState(p.stateNamespace(this.name),e);throw new Error(P.stateNotInitialized(this.name))},t.prototype.listenEvents=function(e){return this.socket.onBroadcast(e)},t.prototype.addMethods=function(e){return this.socket.onUnicast(e)},t.prototype.connect=function(e){return new Ue(e)},t.prototype.load=function(e,n){return n===void 0&&(n={}),this.globalBus.loadApp(e,n)},t.prototype.activate=function(e,n,s){return s===void 0&&(s={}),this.globalBus.activateApp(e,n,s)},t.prototype.destroy=function(e,n){return this.globalBus.destroyApp(e,n)},t.prototype.runInHostMode=function(e){return kt(this,void 0,void 0,function(){var n,s=this;return jt(this,function(r){switch(r.label){case 0:return this.isHost?(n=function(i){s.globalSocket.setState(p.isGlobalBusAccessed,function(o){o.value=i})},[4,Promise.resolve(e(this.globalBus,n))]):[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})},t.prototype.runInRemoteMode=function(e){var n;return kt(this,void 0,void 0,function(){var s;return jt(this,function(r){switch(r.label){case 0:return this.isHost?[3,2]:(s=((n=this.globalSocket.getState(p.isGlobalBusAccessed))===null||n===void 0?void 0:n.value)?this.globalBus:null,[4,Promise.resolve(e(s))]);case 1:r.sent(),r.label=2;case 2:return[2]}})})},t}();function je(t){var e=Ut();return e.createApp(t.name)}export{ke as A,je as r};