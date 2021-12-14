const Ct=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Ct();/*! *****************************************************************************
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
***************************************************************************** */var y=function(){return y=Object.assign||function(e){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},y.apply(this,arguments)};function b(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(l){try{c(r.next(l))}catch(h){o(h)}}function u(l){try{c(r.throw(l))}catch(h){o(h)}}function c(l){l.done?i(l.value):s(l.value).then(a,u)}c((r=r.apply(t,e||[])).next())})}function g(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(l){return u([c,l])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(i=c[0]&2?s.return:c[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,c[1])).done)return i;switch(s=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,s=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(l){c=[6,l],s=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function C(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}var d={removeNonExistedBroadcast:function(t){return"[@rallie/core] you are trying to remove a listener of the broadcast event ".concat(t,", but ").concat(t," hasn't been registed as a broadcast event")},wrongBroadcastCallback:function(t){return"[@rallie/core] you are trying to remove a listener of the broadcast event ".concat(t,", but the listener hasn't been registed")},broadcastCallbackError:function(t){return"[@rallie/core] one of the callbacks of the broadcast event ".concat(t," throws an uncaught error")},removeNonExistedUnicast:function(t){return"[@rallie/core] you are trying to remove a listener of the unicast event ".concat(t,", but ").concat(t," hasn't been registed as a unicast event")},wrongUnicastCallback:function(t){return"[@rallie/core] you are trying to remove a listener of the unicast event ".concat(t,", but the listener hasn't been registed")},registedExistedUnicast:function(t){return"[@rallie/core] you are trying to register a unicast event ".concat(t,", but it has been registered before")},emittedNonExistedUnicast:function(t){return"[@rallie/core] you have emitted ".concat(t," unicast, but there is no listener of this event")},createExistingApp:function(t){return"[@rallie/core] ".concat(t," is existing, you are not allowed to create it again")},resourceNotDeclared:function(t,e){return"[@rallie/core] can not find any assets of the app ".concat(t," on the bus ").concat(e)},appNotCreated:function(t){return"[@rallie/core] you are trying to activate app ".concat(t,", but it was not created")},modifyPrivateState:function(t){return"[@rallie/core] state ".concat(t," is private, you are not allowed to set it")},accessUninitializedState:function(t){return"[@rallie/core] it's not allowed to set or watch state ".concat(t," before it is initialized")},waitStateTimeout:function(t){return"[@rallie/core] wait for states ".concat(JSON.stringify(t)," timeout")},duplicatedInitial:function(t){return"[@rallie/core] duplicated initialized state ".concat(t)},initializePrimitiveState:function(t){return"[@rallie/core] it's not allowed to initialized state ".concat(t," to a primitive value")},duplicatedBus:function(t){return"[@rallie/core] the bus named ".concat(t," has been defined before, please rename your bus")},bootstrapTimeout:function(t,e){return"[@rallie/core] failed to bootstrap the app ".concat(t," in ").concat(e," milliseconds. ")+"If you see another same error at the same time, there might be circular dependencies"},multipleCalledNextFn:function(){return"[@rallie/core] next() called multiple times in the middleware"},wrongMiddlewareType:function(){return"[@rallie/core] the middleware must be a function"}},Ut={handlerIsNotInTheEventsPool:function(t,e){return"[@rallie/core] the event ".concat(t," is not in the events pool that you specified when calling on").concat(e?"Unicast":"Broadcast")}};function ut(t){return["string","number","boolean","undefined"].includes(typeof t)}function lt(t){var e={},n=[];return t.forEach(function(r){var s=typeof r=="string"?r:r.name;e[s]||(n.push(r),e[s]=!0)}),n}var ft=function(t){return function(e,n){var r=-1,s=function(i){if(i<=r)return Promise.reject(new Error(d.multipleCalledNextFn()));r=i;var o=t[i];if(i===t.length&&(o=n),!o)return Promise.resolve();try{return Promise.resolve(o(e,s.bind(null,i+1)))}catch(a){return Promise.reject(a)}};return s(0)}},kt=function(){function t(){this.broadcastEvents={},this.unicastEvents={}}return t.prototype.addBroadcastEventListener=function(e,n){var r=this;this.broadcastEvents[e]=this.broadcastEvents[e]||{listeners:[],emitedArgs:[]};var s=this.broadcastEvents[e],i=s.listeners,o=s.emitedArgs;i.push(n),o.length>0&&(o.forEach(function(a){r.emitBroadcast.apply(r,C([e],a,!1))}),this.broadcastEvents[e].emitedArgs=[])},t.prototype.addUnicastEventListener=function(e,n){if(this.unicastEvents[e])throw new Error(d.registedExistedUnicast(e));this.unicastEvents[e]=n},t.prototype.removeBroadcastEventListener=function(e,n){var r,s=(r=this.broadcastEvents[e])===null||r===void 0?void 0:r.listeners;if(s){for(var i=-1,o=0;o<s.length;o++)if(s[o]===n){i=o;break}if(i!==-1)s.splice(i,1);else{var a=d.wrongBroadcastCallback(e);throw new Error(a)}}else{var a=d.removeNonExistedBroadcast(e);throw new Error(a)}},t.prototype.removeUnicastEventListener=function(e,n){if(!this.unicastEvents[e]){var r=d.removeNonExistedUnicast(e);throw new Error(r)}if(this.unicastEvents[e]!==n){var r=d.wrongUnicastCallback(e);throw new Error(r)}delete this.unicastEvents[e]},t.prototype.emitBroadcast=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];this.broadcastEvents[e]=this.broadcastEvents[e]||{listeners:[],emitedArgs:[]};var s=this.broadcastEvents[e],i=s.listeners,o=s.emitedArgs;i.length>0?i.forEach(function(a){try{a.apply(void 0,n)}catch(u){console.error(d.broadcastCallbackError(e)),console.error(u)}}):o.push(n)},t.prototype.emitUnicast=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var s=this.unicastEvents[e];if(s)return s.apply(void 0,n);throw new Error(d.emittedNonExistedUnicast(e))},t}();function zt(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const jt=Object.assign,Kt=Object.prototype.hasOwnProperty,U=(t,e)=>Kt.call(t,e),E=Array.isArray,k=t=>ht(t)==="[object Map]",Wt=t=>typeof t=="string",Y=t=>typeof t=="symbol",z=t=>t!==null&&typeof t=="object",Ft=Object.prototype.toString,ht=t=>Ft.call(t),Dt=t=>ht(t).slice(8,-1),q=t=>Wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,dt=(t,e)=>!Object.is(t,e);let Gt;function pt(t,e){e=e||Gt,e&&e.active&&e.effects.push(t)}const vt=t=>{const e=new Set(t);return e.w=0,e.n=0,e},wt=t=>(t.w&S)>0,bt=t=>(t.n&S)>0,Ht=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=S},$t=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];wt(s)&&!bt(s)?s.delete(t):e[n++]=s,s.w&=~S,s.n&=~S}e.length=n}},Z=new WeakMap;let O=0,S=1;const Q=30,L=[];let B;const T=Symbol(""),X=Symbol("");class Jt{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],pt(this,r)}run(){if(!this.active)return this.fn();if(!L.includes(this))try{return L.push(B=this),qt(),S=1<<++O,O<=Q?Ht(this):gt(this),this.fn()}finally{O<=Q&&$t(this),S=1<<--O,mt(),L.pop();const e=L.length;B=e>0?L[e-1]:void 0}}stop(){this.active&&(gt(this),this.onStop&&this.onStop(),this.active=!1)}}function gt(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function Vt(t,e){t.effect&&(t=t.effect.fn);const n=new Jt(t);e&&(jt(n,e),e.scope&&pt(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}let R=!0;const tt=[];function Yt(){tt.push(R),R=!1}function qt(){tt.push(R),R=!0}function mt(){const t=tt.pop();R=t===void 0?!0:t}function w(t,e,n){if(!Zt())return;let r=Z.get(t);r||Z.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=vt()),Qt(s)}function Zt(){return R&&B!==void 0}function Qt(t,e){let n=!1;O<=Q?bt(t)||(t.n|=S,n=!wt(t)):n=!t.has(B),n&&(t.add(B),B.deps.push(t))}function _(t,e,n,r,s,i){const o=Z.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&E(t))o.forEach((u,c)=>{(c==="length"||c>=r)&&a.push(u)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":E(t)?q(n)&&a.push(o.get("length")):(a.push(o.get(T)),k(t)&&a.push(o.get(X)));break;case"delete":E(t)||(a.push(o.get(T)),k(t)&&a.push(o.get(X)));break;case"set":k(t)&&a.push(o.get(T));break}if(a.length===1)a[0]&&yt(a[0]);else{const u=[];for(const c of a)c&&u.push(...c);yt(vt(u))}}function yt(t,e){for(const n of E(t)?t:[...t])(n!==B||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Xt=zt("__proto__,__v_isRef,__isVue"),Et=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Y)),te=_t(),ee=_t(!0),St=ne();function ne(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=f(this);for(let i=0,o=this.length;i<o;i++)w(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(f)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Yt();const r=f(this)[e].apply(this,n);return mt(),r}}),t}function _t(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?ge:Ot:e?be:It).get(r))return r;const o=E(r);if(!t&&o&&U(St,s))return Reflect.get(St,s,i);const a=Reflect.get(r,s,i);return(Y(s)?Et.has(s):Xt(s))||(t||w(r,"get",s),e)?a:it(a)?!o||!q(s)?a.value:a:z(a)?t?H(a):nt(a):a}}const re=se();function se(t=!1){return function(n,r,s,i){let o=n[r];if(!t&&!Ee(s)&&(s=f(s),o=f(o),!E(n)&&it(o)&&!it(s)))return o.value=s,!0;const a=E(n)&&q(r)?Number(r)<n.length:U(n,r),u=Reflect.set(n,r,s,i);return n===f(i)&&(a?dt(s,o)&&_(n,"set",r,s):_(n,"add",r,s)),u}}function ie(t,e){const n=U(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&_(t,"delete",e,void 0),r}function oe(t,e){const n=Reflect.has(t,e);return(!Y(e)||!Et.has(e))&&w(t,"has",e),n}function ae(t){return w(t,"iterate",E(t)?"length":T),Reflect.ownKeys(t)}const ce={get:te,set:re,deleteProperty:ie,has:oe,ownKeys:ae},ue={get:ee,set(t,e){return!0},deleteProperty(t,e){return!0}},et=t=>t,j=t=>Reflect.getPrototypeOf(t);function K(t,e,n=!1,r=!1){t=t.__v_raw;const s=f(t),i=f(e);e!==i&&!n&&w(s,"get",e),!n&&w(s,"get",i);const{has:o}=j(s),a=r?et:n?st:rt;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function W(t,e=!1){const n=this.__v_raw,r=f(n),s=f(t);return t!==s&&!e&&w(r,"has",t),!e&&w(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function F(t,e=!1){return t=t.__v_raw,!e&&w(f(t),"iterate",T),Reflect.get(t,"size",t)}function At(t){t=f(t);const e=f(this);return j(e).has.call(e,t)||(e.add(t),_(e,"add",t,t)),this}function xt(t,e){e=f(e);const n=f(this),{has:r,get:s}=j(n);let i=r.call(n,t);i||(t=f(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?dt(e,o)&&_(n,"set",t,e):_(n,"add",t,e),this}function Bt(t){const e=f(this),{has:n,get:r}=j(e);let s=n.call(e,t);s||(t=f(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&_(e,"delete",t,void 0),i}function Tt(){const t=f(this),e=t.size!==0,n=t.clear();return e&&_(t,"clear",void 0,void 0),n}function D(t,e){return function(r,s){const i=this,o=i.__v_raw,a=f(o),u=e?et:t?st:rt;return!t&&w(a,"iterate",T),o.forEach((c,l)=>r.call(s,u(c),u(l),i))}}function G(t,e,n){return function(...r){const s=this.__v_raw,i=f(s),o=k(i),a=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,c=s[t](...r),l=n?et:e?st:rt;return!e&&w(i,"iterate",u?X:T),{next(){const{value:h,done:v}=c.next();return v?{value:h,done:v}:{value:a?[l(h[0]),l(h[1])]:l(h),done:v}},[Symbol.iterator](){return this}}}}function A(t){return function(...e){return t==="delete"?!1:this}}function le(){const t={get(i){return K(this,i)},get size(){return F(this)},has:W,add:At,set:xt,delete:Bt,clear:Tt,forEach:D(!1,!1)},e={get(i){return K(this,i,!1,!0)},get size(){return F(this)},has:W,add:At,set:xt,delete:Bt,clear:Tt,forEach:D(!1,!0)},n={get(i){return K(this,i,!0)},get size(){return F(this,!0)},has(i){return W.call(this,i,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:D(!0,!1)},r={get(i){return K(this,i,!0,!0)},get size(){return F(this,!0)},has(i){return W.call(this,i,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:D(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=G(i,!1,!1),n[i]=G(i,!0,!1),e[i]=G(i,!1,!0),r[i]=G(i,!0,!0)}),[t,n,e,r]}const[fe,he,de,pe]=le();function Rt(t,e){const n=e?t?pe:de:t?he:fe;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(U(n,s)&&s in r?n:r,s,i)}const ve={get:Rt(!1,!1)},we={get:Rt(!0,!1)},It=new WeakMap,be=new WeakMap,Ot=new WeakMap,ge=new WeakMap;function me(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(t){return t.__v_skip||!Object.isExtensible(t)?0:me(Dt(t))}function nt(t){return t&&t.__v_isReadonly?t:Lt(t,!1,ce,ve,It)}function H(t){return Lt(t,!0,ue,we,Ot)}function Lt(t,e,n,r,s){if(!z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ye(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ee(t){return!!(t&&t.__v_isReadonly)}function f(t){const e=t&&t.__v_raw;return e?f(e):t}const rt=t=>z(t)?nt(t):t,st=t=>z(t)?H(t):t;function it(t){return Boolean(t&&t.__v_isRef===!0)}Promise.resolve();var Se=function(){function t(e,n){this.namespace=e,this.stores=n,this.stores[e].watchers.push(this)}return t.prototype.do=function(e){var n=this;return this.handler=e,function(){return n.unwatch()}},t.prototype.unwatch=function(){this===null||this===void 0||this.stopEffect(),this.handler=null;var e=this.stores[this.namespace].watchers.indexOf(this);e!==-1&&this.stores[this.namespace].watchers.splice(e,1)},t}(),ot="$state-initialized",_e=function(){function t(e,n){this.eventEmitter=e,this.stores=n,this.eventEmitter=e,this.stores=n}return t.prototype.offEvents=function(e,n,r){var s=n?this.eventEmitter.removeUnicastEventListener:this.eventEmitter.removeBroadcastEventListener;s=s.bind(this.eventEmitter),r?e[r]?(s(r,e[r]),delete e[r]):console.warn(Ut.handlerIsNotInTheEventsPool(r,n)):Object.entries(e).forEach(function(i){var o=i[0],a=i[1];s(o,a)})},t.prototype.onBroadcast=function(e){var n=this;return Object.entries(e).forEach(function(r){var s=r[0],i=r[1];n.eventEmitter.addBroadcastEventListener(s,i)}),function(r){n.offEvents(e,!1,r)}},t.prototype.onUnicast=function(e){var n=this;return Object.entries(e).forEach(function(r){var s=r[0],i=r[1];try{n.eventEmitter.addUnicastEventListener(s,i)}catch(o){console.error(o)}}),function(r){n.offEvents(e,!0,r)}},t.prototype.createBroadcaster=function(e){var n=this;return new Proxy({},{get:function(r,s){return function(){for(var i,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return e==null||e(s),(i=n.eventEmitter).emitBroadcast.apply(i,C([s],o,!1))}},set:function(){return!1}})},t.prototype.createUnicaster=function(e){var n=this;return new Proxy({},{get:function(r,s){return function(){for(var i,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return e==null||e(s),(i=n.eventEmitter).emitUnicast.apply(i,C([s],o,!1))}},set:function(){return!1}})},t.prototype.existState=function(e){return!!this.stores[e]},t.prototype.initState=function(e,n,r){if(r===void 0&&(r=!1),this.existState(e))throw new Error(d.duplicatedInitial(e));if(ut(n))throw new Error(d.initializePrimitiveState(e));return this.stores[e]={state:nt(n),owner:r?this:null,watchers:[]},this.eventEmitter.emitBroadcast(ot,e),this.getState(e)},t.prototype.getState=function(e,n){if(this.existState(e)){var r=H(this.stores[e].state);return n?n(r):r}else return null},t.prototype.getStateToSet=function(e){if(!this.existState(e)){var n=d.accessUninitializedState(e);throw new Error(n)}var r=this.stores[e].owner;if(r!==this&&r!==null){var n=d.modifyPrivateState(e);throw new Error(n)}return this.stores[e].state},t.prototype.setState=function(e,n){return b(this,void 0,void 0,function(){var r;return g(this,function(s){switch(s.label){case 0:return r=this.getStateToSet(e),[4,Promise.resolve(n(r))];case 1:return s.sent(),[2]}})})},t.prototype.watchState=function(e,n){if(!this.existState(e)){var r=d.accessUninitializedState(e);throw new Error(r)}var s=H(this.stores[e].state),i=new Se(e,this.stores);i.oldWatchingStates=n(JSON.parse(JSON.stringify(s)),!1);var o=Vt(function(){var a,u=n(s,!0),c=ut(u)?u:JSON.parse(JSON.stringify(u));try{(a=i.handler)===null||a===void 0||a.call(i,u,i.oldWatchingStates)}finally{i.oldWatchingStates=c}});return i.stopEffect=function(){return o.effect.stop()},i},t.prototype.waitState=function(e,n){var r=this;n===void 0&&(n=10*1e3);var s=C([],e,!0),i=e.filter(function(a){return!r.existState(a)});if(i.length===0){var o=s.map(function(a){return r.getState(a)});return Promise.resolve(o)}else return new Promise(function(a,u){var c=setTimeout(function(){clearTimeout(c);var h=d.waitStateTimeout(i);u(new Error(h))},n),l=function(h){var v=i.indexOf(h);if(v!==-1&&i.splice(v,1),i.length===0){clearTimeout(c),r.eventEmitter.removeBroadcastEventListener(ot,l);var m=s.map(function(P){return r.getState(P)});a(m)}};r.eventEmitter.addBroadcastEventListener(ot,l)})},t}(),Ae=function(){function t(e){this.name=e,this.dependenciesReady=!1,this.bootstrapping=null,this.dependencies=[],this.relatedApps=[],this.name=e,this.isRallieCoreApp=!0}return t.prototype.relateTo=function(e){var n=this,r=function(o){return typeof o=="string"?o:o.name},s=lt(e),i=this.relatedApps.map(function(o){return o.name});return s.forEach(function(o){i.includes(r(o))||n.relatedApps.push({name:r(o),ctx:typeof o!="string"?o.ctx:void 0})}),this},t.prototype.relyOn=function(e){var n=this,r=function(a){return typeof a=="string"?a:a.name},s=lt(e),i=this.dependencies.map(function(a){return a.name}),o=this.relatedApps.map(function(a){return a.name});return s.forEach(function(a){var u=r(a);i.includes(u)||n.dependencies.push({name:u,ctx:typeof a!="string"?a.ctx:void 0,data:typeof a!="string"?a.data:void 0}),o.includes(u)||n.relatedApps.push({name:u,ctx:typeof a!="string"?a.ctx:void 0})}),this},t.prototype.onBootstrap=function(e){return this.doBootstrap=e,this},t.prototype.onActivate=function(e){return this.doActivate=e,this},t.prototype.onDestroy=function(e){return this.doDestroy=e,this},t}(),xe=function(t){return b(void 0,void 0,void 0,function(){var e;return g(this,function(n){return e=new Promise(function(r){var s=null;if(t instanceof HTMLScriptElement)s=t;else{s=document.createElement("script");var i=typeof t!="string"?t:{type:"text/javascript",src:t};Object.entries(i).forEach(function(o){var a=o[0],u=o[1];s[a]=u})}s.src&&(s.onload=s.onerror=function(){r()}),document.body.appendChild(s),s.src||r()}),[2,e]})})},Be=function(t){var e=null;if(t instanceof HTMLLinkElement)e=t;else{var n=typeof t!="string"?t:{rel:"stylesheet",type:"text/css",href:t};e=document.createElement("link"),Object.entries(n).forEach(function(r){var s=r[0],i=r[1];e[s]=i})}document.head.appendChild(e)},Te=function(t){return function(e){return b(void 0,void 0,void 0,function(){var n,r,s;return g(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),n=null,typeof e=="string"?n=e:e instanceof HTMLScriptElement?n=e.getAttribute("src"):n=e.src,[4,t(n)];case 1:return r=i.sent(),[4,r.text()];case 2:return s=i.sent(),[2,s];case 3:return i.sent(),[2,""];case 4:return[2]}})})}},Re=function(t){var e=new Function(t);e()},x={loadScript:xe,loadLink:Be,fetchScript:Te,excuteCode:Re},Ie=function(){function t(e){this.eventEmitter=new kt,this.stores={},this.apps={},this.loadingApps={},this.conf={maxBootstrapTime:10*1e3,fetch:null,assets:{}},this.middlewares=[],this.name=e,this.composedMiddlewareFn=ft(this.middlewares)}return t.prototype.isRallieCoreApp=function(e){return this.apps[e]&&typeof this.apps[e]!="boolean"},t.prototype.config=function(e){return this.conf=y(y(y({},this.conf),e),{assets:y(y({},this.conf.assets),(e==null?void 0:e.assets)||{})}),this},t.prototype.use=function(e){if(typeof e!="function")throw new Error(d.wrongMiddlewareType());return this.middlewares.push(e),this.composedMiddlewareFn=ft(this.middlewares),this},t.prototype.createContext=function(e,n){n===void 0&&(n={});var r=y({name:e,loadScript:x.loadScript,loadLink:x.loadLink,fetchScript:x.fetchScript(this.conf.fetch),excuteCode:x.excuteCode,conf:this.conf},n);return r},t.prototype.loadResourcesFromAssetsConfig=function(e){return b(this,void 0,void 0,function(){var n,r,s,i,o,a,u,c,l,h,v,m,P,M,$,J,V;return g(this,function(I){switch(I.label){case 0:if(n=e.name,r=e.loadScript,s=r===void 0?x.loadScript:r,i=e.loadLink,o=i===void 0?x.loadLink:i,a=e.fetchScript,u=a===void 0?x.fetchScript(this.conf.fetch):a,c=e.excuteCode,l=c===void 0?x.excuteCode:c,h=e.conf,v=h===void 0?this.conf:h,m=v.assets,P=v.fetch,!m[n])return[3,7];if(m[n].css&&m[n].css.forEach(function(Mt){o(Mt)}),!m[n].js)return[3,6];M=0,$=m[n].js,I.label=1;case 1:return M<$.length?(J=$[M],P?[3,3]:[4,s(J)]):[3,6];case 2:return I.sent(),[3,5];case 3:return[4,u(J)];case 4:V=I.sent(),V&&l(V),I.label=5;case 5:return M++,[3,1];case 6:return[3,8];case 7:throw new Error(d.resourceNotDeclared(n,this.name));case 8:return[2]}})})},t.prototype.createSocket=function(){return new _e(this.eventEmitter,this.stores)},t.prototype.existApp=function(e){return!!this.apps[e]},t.prototype.createApp=function(e){if(this.existApp(e))throw new Error(d.createExistingApp(e));var n=new Ae(e);return this.apps[e]=n,n},t.prototype.loadApp=function(e,n){return n===void 0&&(n={}),b(this,void 0,void 0,function(){var r=this;return g(this,function(s){switch(s.label){case 0:return this.apps[e]?[3,2]:(this.loadingApps[e]||(this.loadingApps[e]=new Promise(function(i,o){var a=r.createContext(e,n);r.composedMiddlewareFn(a,r.loadResourcesFromAssetsConfig.bind(r)).then(function(){var u=e.startsWith("lib:");u&&!r.apps[e]&&(r.apps[e]=!0),r.apps[e]||o(new Error(d.appNotCreated(e))),i()}).catch(function(u){o(u)})})),[4,this.loadingApps[e]]);case 1:s.sent(),s.label=2;case 2:return[2]}})})},t.prototype.activateDependencies=function(e){return b(this,void 0,void 0,function(){var n,r,s,i,o,a;return g(this,function(u){switch(u.label){case 0:if(!(!e.dependenciesReady&&e.dependencies.length!==0))return[3,5];n=0,r=e.dependencies,u.label=1;case 1:return n<r.length?(s=r[n],i=s.name,o=s.data,a=s.ctx,[4,this.activateApp(i,o,a)]):[3,4];case 2:u.sent(),u.label=3;case 3:return n++,[3,1];case 4:e.dependenciesReady=!0,u.label=5;case 5:return[2]}})})},t.prototype.loadRelatedApps=function(e){return b(this,void 0,void 0,function(){var n,r,s,i,o;return g(this,function(a){switch(a.label){case 0:n=0,r=e.relatedApps,a.label=1;case 1:return n<r.length?(s=r[n],i=s.name,o=s.ctx,[4,this.loadApp(i,o)]):[3,4];case 2:a.sent(),a.label=3;case 3:return n++,[3,1];case 4:return[2]}})})},t.prototype.activateApp=function(e,n,r){return r===void 0&&(r={}),b(this,void 0,void 0,function(){var s,i,o,a,u=this;return g(this,function(c){switch(c.label){case 0:return[4,this.loadApp(e,r)];case 1:return c.sent(),this.isRallieCoreApp(e)?(s=this.apps[e],[4,this.loadRelatedApps(s)]):[3,8];case 2:return c.sent(),s.bootstrapping?[3,4]:(i=function(){return b(u,void 0,void 0,function(){return g(this,function(l){switch(l.label){case 0:return[4,this.activateDependencies(s)];case 1:return l.sent(),s.doBootstrap?[4,Promise.resolve(s.doBootstrap(n))]:[3,3];case 2:return l.sent(),[3,5];case 3:return s.doActivate?[4,Promise.resolve(s.doActivate(n))]:[3,5];case 4:l.sent(),l.label=5;case 5:return[2]}})})},o=function(l){return new Promise(function(h,v){setTimeout(function(){v(new Error(d.bootstrapTimeout(e,l)))},l)})},s.bootstrapping=Promise.race([i(),o(this.conf.maxBootstrapTime)]),[4,s.bootstrapping]);case 3:return c.sent(),[3,8];case 4:return[4,s.bootstrapping];case 5:return c.sent(),a=s.doActivate,a?[4,Promise.resolve(s.doActivate(n))]:[3,7];case 6:a=c.sent(),c.label=7;case 7:c.label=8;case 8:return[2]}})})},t.prototype.destroyApp=function(e,n){return b(this,void 0,void 0,function(){var r,s;return g(this,function(i){switch(i.label){case 0:return this.isRallieCoreApp(e)?(r=this.apps[e],s=r.doDestroy,s?[4,Promise.resolve(r.doDestroy(n))]:[3,2]):[3,3];case 1:s=i.sent(),i.label=2;case 2:r.bootstrapping=null,r.dependenciesReady=!1,i.label=3;case 3:return[2]}})})},t}(),Oe={},at="DEFAULT_BUS",Le=function(t){if(t===void 0&&(t=at),window.RALLIE_BUS_STORE===void 0&&Reflect.defineProperty(window,"RALLIE_BUS_STORE",{value:Oe,writable:!1}),window.RALLIE_BUS_STORE[t])throw new Error(d.duplicatedBus(t));var e=new Ie(t);return Reflect.defineProperty(window.RALLIE_BUS_STORE,t,{value:e,writable:!1}),e},Nt=function(t){return t===void 0&&(t=at),window.RALLIE_BUS_STORE&&window.RALLIE_BUS_STORE[t]},ct=function(t){t===void 0&&(t=at);var e=null,n=!1,r=Nt(t);return r?(e=r,n=!1):(e=Le(t),n=!0),[e,n]};/*! *****************************************************************************
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
***************************************************************************** */function Ne(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(l){try{c(r.next(l))}catch(h){o(h)}}function u(l){try{c(r.throw(l))}catch(h){o(h)}}function c(l){l.done?i(l.value):s(l.value).then(a,u)}c((r=r.apply(t,e||[])).next())})}function Pe(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(l){return u([c,l])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(i=c[0]&2?s.return:c[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,c[1])).done)return i;switch(s=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,s=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(l){c=[6,l],s=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var p={privateBus:function(t){return"".concat(t,".bus")},stateNamespace:function(t){return"".concat(t,".state")},isGlobalBusAccessible:"isGlobalBusAccessible"},Pt=function(t){return"[rallie] ".concat(t)},N={stateNotInitialized:function(t){return Pt(" app ".concat(t,`'s state is not initialized, please check:
`)+"1. whether app ".concat(t,` is loaded.
`)+"2. whether app ".concat(t," initializes the state"))},duplicatedAppName:function(t){return Pt("the app ".concat(t," is already registered, please rename your app"))}},Me=function(){function t(e){var n=this;this.name=e,this.isRallieApp=!1;var r=ct(p.privateBus(e))[0];this.socket=r.createSocket(),this.events=this.socket.createBroadcaster(),this.methods=this.socket.createUnicaster(),Reflect.defineProperty(this,"state",{get:function(){return n.socket.getState(p.stateNamespace(n.name))},set:function(){return!1}})}return t.prototype.setState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.setState(p.stateNamespace(this.name),e);throw new Error(N.stateNotInitialized(this.name))},t.prototype.watchState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.watchState(p.stateNamespace(this.name),e);throw new Error(N.stateNotInitialized(this.name))},t.prototype.listenEvents=function(e){return this.socket.onBroadcast(e)},t}(),Ce=function(){function t(e,n){var r=this,s;this.name=e,this.isRallieApp=!0;var i=ct(),o=i[0],a=i[1];if(o.existApp(e))throw new Error(N.duplicatedAppName(e));this.globalBus=o,this.globalSocket=o.createSocket(),this.isEntryApp=a,a&&this.globalSocket.initState(p.isGlobalBusAccessible,{value:!0},!0);var u=ct(p.privateBus(e))[0];this.socket=u.createSocket(),this.events=this.socket.createBroadcaster(),this.methods=this.socket.createUnicaster(),(n==null?void 0:n.state)&&this.socket.initState(p.stateNamespace(e),n.state,(s=n==null?void 0:n.isPrivate)!==null&&s!==void 0?s:!1),Reflect.defineProperty(this,"state",{get:function(){return r.socket.getState(p.stateNamespace(r.name))},set:function(){return!1}})}return t.prototype.setState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.setState(p.stateNamespace(this.name),e);throw new Error(N.stateNotInitialized(this.name))},t.prototype.watchState=function(e){if(this.socket.existState(p.stateNamespace(this.name)))return this.socket.watchState(p.stateNamespace(this.name),e);throw new Error(N.stateNotInitialized(this.name))},t.prototype.listenEvents=function(e){return this.socket.onBroadcast(e)},t.prototype.addMethods=function(e){return this.socket.onUnicast(e)},t.prototype.connect=function(e){return new Me(e)},t.prototype.load=function(e,n){return n===void 0&&(n={}),this.globalBus.loadApp(e,n)},t.prototype.activate=function(e,n,r){return r===void 0&&(r={}),this.globalBus.activateApp(e,n,r)},t.prototype.destroy=function(e,n){return this.globalBus.destroyApp(e,n)},t.prototype.run=function(e){var n;return Ne(this,void 0,void 0,function(){var r,s,i=this;return Pe(this,function(o){switch(o.label){case 0:return r=this.isEntryApp||((n=this.globalSocket.getState(p.isGlobalBusAccessible))===null||n===void 0?void 0:n.value),s=function(a){i.globalSocket.setState(p.isGlobalBusAccessible,function(u){u.value=a})},[4,Promise.resolve(e({isEntryApp:this.isEntryApp,bus:r?this.globalBus:void 0,setBusAccessible:this.isEntryApp?s:void 0}))];case 1:return o.sent(),[2]}})})},t}();function Ue(t){var e=Nt();return e.createApp(t.name)}export{Ce as A,Ue as r};