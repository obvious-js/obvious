const $t=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};$t();/*! *****************************************************************************
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
***************************************************************************** */var y=function(){return y=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},y.apply(this,arguments)};function b(t,e,r,n){function s(i){return i instanceof r?i:new r(function(o){o(i)})}return new(r||(r=Promise))(function(i,o){function a(l){try{c(n.next(l))}catch(p){o(p)}}function u(l){try{c(n.throw(l))}catch(p){o(p)}}function c(l){l.done?i(l.value):s(l.value).then(a,u)}c((n=n.apply(t,e||[])).next())})}function m(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,s&&(i=c[0]&2?s.return:c[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,c[1])).done)return i;switch(s=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,s=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){r.label=c[1];break}if(c[0]===6&&r.label<i[1]){r.label=i[1],i=c;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(c);break}i[2]&&r.ops.pop(),r.trys.pop();continue}c=e.call(t,r)}catch(l){c=[6,l],s=0}finally{n=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Z(t,e,r){if(r||arguments.length===2)for(var n=0,s=e.length,i;n<s;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))}var f={removeNonExistedBroadcast:function(t){return"[@rallie/core] you are trying to remove a listener of the broadcast event "+t+", but "+t+" hasn't been registed as a broadcast event"},wrongBroadcastCallback:function(t){return"[@rallie/core] you are trying to remove a listener of the broadcast event "+t+", but the listener hasn't been registed"},broadcastCallbackError:function(t){return"[@rallie/core] one of the callbacks of the broadcast event "+t+" throws an uncaught error"},removeNonExistedUnicast:function(t){return"[@rallie/core] you are trying to remove a listener of the unicast event "+t+", but "+t+" hasn't been registed as a unicast event"},wrongUnicastCallback:function(t){return"[@rallie/core] you are trying to remove a listener of the unicast event "+t+", but the listener hasn't been registed"},registedExistedUnicast:function(t){return"[@rallie/core] you are trying to register a unicast event "+t+", but it has been registered before"},emittedNonExistedUnicast:function(t){return"[@rallie/core] you have emitted "+t+" unicast, but there is no listener of this event"},createExistingApp:function(t){return"[@rallie/core] "+t+" is existing, you are not allowed to create it again"},resourceNotDeclared:function(t,e){return"[@rallie/core] can not find any assets of the app "+t+" on the bus "+e},appNotCreated:function(t){return"[@rallie/core] you are trying to activate app "+t+", but it was not created"},modifyPrivateState:function(t){return"[@rallie/core] state "+t+" is private, you are not allowed to set it"},accessUninitializedState:function(t){return"[@rallie/core] it's not allowed to set or watch state "+t+" before it is initialized"},waitStateTimeout:function(t){return"[@rallie/core] wait for states "+JSON.stringify(t)+" timeout"},duplicatedInitial:function(t){return"[@rallie/core] duplicated initialized state "+t},initializePrimitiveState:function(t){return"[@rallie/core] it's not allowed to initialized state "+t+" to a primitive value"},duplicatedBus:function(t){return"[@rallie/core] the bus named "+t+" has been defined before, please rename your bus"},invalidResource:function(t){return"[@rallie/core] "+t+" is not a valid asset"},bootstrapNumberOverflow:function(t){return t===void 0&&(t=100),"[@rallie/core] the number of apps bootstraped at a time is greater than the maximum value of "+t+", it means that there may be circular dependencies, please check the app dependencies declaration or reset the bus's maxDependencyDepth"},multipleCalledNextFn:function(){return"[@rallie/core] next() called multiple times in the middleware"},wrongMiddlewareType:function(){return"[@rallie/core] the middleware must be a function"},wrongContextType:function(){return"[@rallie/core] the app's name is not specified when load or activate"}},wt={emptyBroadcastEvents:function(t){return"[@rallie/core] you have emitted "+t+" broadcast, but there is no listener of this event"},handlerIsNotInTheEventsPool:function(t,e){return"[@rallie/core] the event "+t+" is not in the events pool that you specified when calling on"+(e?"Unicast":"Broadcast")}};function Gt(t){return Object.prototype.toString.call(t)==="[object Object]"}function yt(t){return["string","number","boolean","undefined"].includes(typeof t)}function N(t){return typeof t=="string"?t:t.name}function Q(t){return typeof t=="string"?t:typeof t.ctx=="string"?t.ctx:t.ctx.name}function bt(t,e){var r={},n=[];return t.forEach(function(s){var i=e(s);r[i]||(n.push(s),r[i]=!0)}),n}function Ht(t){return bt(t,N)}function Jt(t){return bt(t,Q)}var mt=function(t){return function(e,r){var n=-1,s=function(i){if(i<=n)return Promise.reject(new Error(f.multipleCalledNextFn()));n=i;var o=t[i];if(i===t.length&&(o=r),!o)return Promise.resolve();try{return Promise.resolve(o(e,s.bind(null,i+1)))}catch(a){return Promise.reject(a)}};return s(0)}},Vt=function(){function t(){this.broadcastEvents={},this.unicastEvents={}}return t.prototype.addBroadcastEventListener=function(e,r){this.broadcastEvents[e]=this.broadcastEvents[e]||[],this.broadcastEvents[e].push(r)},t.prototype.addUnicastEventListener=function(e,r){if(this.unicastEvents[e])throw new Error(f.registedExistedUnicast(e));this.unicastEvents[e]=r},t.prototype.removeBroadcastEventListener=function(e,r){var n=this.broadcastEvents[e];if(n){for(var s=-1,i=0;i<n.length;i++)if(n[i]===r){s=i;break}if(s!==-1)n.splice(s,1);else{var o=f.wrongBroadcastCallback(e);throw new Error(o)}}else{var o=f.removeNonExistedBroadcast(e);throw new Error(o)}},t.prototype.removeUnicastEventListener=function(e,r){if(!this.unicastEvents[e]){var n=f.removeNonExistedUnicast(e);throw new Error(n)}if(this.unicastEvents[e]!==r){var n=f.wrongUnicastCallback(e);throw new Error(n)}delete this.unicastEvents[e]},t.prototype.emitBroadcast=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var s=this.broadcastEvents[e],i=e.startsWith("$state");s&&s.length!==0?s.forEach(function(o){try{o.apply(void 0,r)}catch(a){console.error(f.broadcastCallbackError(e)),console.error(a)}}):i||console.warn(wt.emptyBroadcastEvents(e))},t.prototype.emitUnicast=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var s=this.unicastEvents[e];if(s)return s.apply(void 0,r);throw new Error(f.emittedNonExistedUnicast(e))},t}();function Yt(t,e){const r=Object.create(null),n=t.split(",");for(let s=0;s<n.length;s++)r[n[s]]=!0;return e?s=>!!r[s.toLowerCase()]:s=>!!r[s]}const qt=Object.assign,Zt=Object.prototype.hasOwnProperty,k=(t,e)=>Zt.call(t,e),E=Array.isArray,D=t=>gt(t)==="[object Map]",Qt=t=>typeof t=="string",X=t=>typeof t=="symbol",z=t=>t!==null&&typeof t=="object",Xt=Object.prototype.toString,gt=t=>Xt.call(t),te=t=>gt(t).slice(8,-1),tt=t=>Qt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Et=(t,e)=>!Object.is(t,e);let ee;function St(t,e){e=e||ee,e&&e.active&&e.effects.push(t)}const _t=t=>{const e=new Set(t);return e.w=0,e.n=0,e},At=t=>(t.w&S)>0,xt=t=>(t.n&S)>0,re=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=S},ne=t=>{const{deps:e}=t;if(e.length){let r=0;for(let n=0;n<e.length;n++){const s=e[n];At(s)&&!xt(s)?s.delete(t):e[r++]=s,s.w&=~S,s.n&=~S}e.length=r}},et=new WeakMap;let L=0,S=1;const rt=30,C=[];let B;const O=Symbol(""),nt=Symbol("");class ie{constructor(e,r=null,n){this.fn=e,this.scheduler=r,this.active=!0,this.deps=[],St(this,n)}run(){if(!this.active)return this.fn();if(!C.includes(this))try{return C.push(B=this),ae(),S=1<<++L,L<=rt?re(this):Bt(this),this.fn()}finally{L<=rt&&ne(this),S=1<<--L,Ot(),C.pop();const e=C.length;B=e>0?C[e-1]:void 0}}stop(){this.active&&(Bt(this),this.onStop&&this.onStop(),this.active=!1)}}function Bt(t){const{deps:e}=t;if(e.length){for(let r=0;r<e.length;r++)e[r].delete(t);e.length=0}}function se(t,e){t.effect&&(t=t.effect.fn);const r=new ie(t);e&&(qt(r,e),e.scope&&St(r,e.scope)),(!e||!e.lazy)&&r.run();const n=r.run.bind(r);return n.effect=r,n}let T=!0;const it=[];function oe(){it.push(T),T=!1}function ae(){it.push(T),T=!0}function Ot(){const t=it.pop();T=t===void 0?!0:t}function d(t,e,r){if(!ce())return;let n=et.get(t);n||et.set(t,n=new Map);let s=n.get(r);s||n.set(r,s=_t()),ue(s)}function ce(){return T&&B!==void 0}function ue(t,e){let r=!1;L<=rt?xt(t)||(t.n|=S,r=!At(t)):r=!t.has(B),r&&(t.add(B),B.deps.push(t))}function _(t,e,r,n,s,i){const o=et.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(r==="length"&&E(t))o.forEach((u,c)=>{(c==="length"||c>=n)&&a.push(u)});else switch(r!==void 0&&a.push(o.get(r)),e){case"add":E(t)?tt(r)&&a.push(o.get("length")):(a.push(o.get(O)),D(t)&&a.push(o.get(nt)));break;case"delete":E(t)||(a.push(o.get(O)),D(t)&&a.push(o.get(nt)));break;case"set":D(t)&&a.push(o.get(O));break}if(a.length===1)a[0]&&Rt(a[0]);else{const u=[];for(const c of a)c&&u.push(...c);Rt(_t(u))}}function Rt(t,e){for(const r of E(t)?t:[...t])(r!==B||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const le=Yt("__proto__,__v_isRef,__isVue"),Tt=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(X)),fe=Nt(),he=Nt(!0),It=pe();function pe(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...r){const n=h(this);for(let i=0,o=this.length;i<o;i++)d(n,"get",i+"");const s=n[e](...r);return s===-1||s===!1?n[e](...r.map(h)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...r){oe();const n=h(this)[e].apply(this,r);return Ot(),n}}),t}function Nt(t=!1,e=!1){return function(n,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?Te:kt:e?Re:jt).get(n))return n;const o=E(n);if(!t&&o&&k(It,s))return Reflect.get(It,s,i);const a=Reflect.get(n,s,i);return(X(s)?Tt.has(s):le(s))||(t||d(n,"get",s),e)?a:ut(a)?!o||!tt(s)?a.value:a:z(a)?t?J(a):ot(a):a}}const de=ve();function ve(t=!1){return function(r,n,s,i){let o=r[n];if(!t&&(s=h(s),o=h(o),!E(r)&&ut(o)&&!ut(s)))return o.value=s,!0;const a=E(r)&&tt(n)?Number(n)<r.length:k(r,n),u=Reflect.set(r,n,s,i);return r===h(i)&&(a?Et(s,o)&&_(r,"set",n,s):_(r,"add",n,s)),u}}function we(t,e){const r=k(t,e);t[e];const n=Reflect.deleteProperty(t,e);return n&&r&&_(t,"delete",e,void 0),n}function ye(t,e){const r=Reflect.has(t,e);return(!X(e)||!Tt.has(e))&&d(t,"has",e),r}function be(t){return d(t,"iterate",E(t)?"length":O),Reflect.ownKeys(t)}const me={get:fe,set:de,deleteProperty:we,has:ye,ownKeys:be},ge={get:he,set(t,e){return!0},deleteProperty(t,e){return!0}},st=t=>t,F=t=>Reflect.getPrototypeOf(t);function K(t,e,r=!1,n=!1){t=t.__v_raw;const s=h(t),i=h(e);e!==i&&!r&&d(s,"get",e),!r&&d(s,"get",i);const{has:o}=F(s),a=n?st:r?ct:at;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function W(t,e=!1){const r=this.__v_raw,n=h(r),s=h(t);return t!==s&&!e&&d(n,"has",t),!e&&d(n,"has",s),t===s?r.has(t):r.has(t)||r.has(s)}function $(t,e=!1){return t=t.__v_raw,!e&&d(h(t),"iterate",O),Reflect.get(t,"size",t)}function Lt(t){t=h(t);const e=h(this);return F(e).has.call(e,t)||(e.add(t),_(e,"add",t,t)),this}function Ct(t,e){e=h(e);const r=h(this),{has:n,get:s}=F(r);let i=n.call(r,t);i||(t=h(t),i=n.call(r,t));const o=s.call(r,t);return r.set(t,e),i?Et(e,o)&&_(r,"set",t,e):_(r,"add",t,e),this}function Pt(t){const e=h(this),{has:r,get:n}=F(e);let s=r.call(e,t);s||(t=h(t),s=r.call(e,t)),n&&n.call(e,t);const i=e.delete(t);return s&&_(e,"delete",t,void 0),i}function Mt(){const t=h(this),e=t.size!==0,r=t.clear();return e&&_(t,"clear",void 0,void 0),r}function G(t,e){return function(n,s){const i=this,o=i.__v_raw,a=h(o),u=e?st:t?ct:at;return!t&&d(a,"iterate",O),o.forEach((c,l)=>n.call(s,u(c),u(l),i))}}function H(t,e,r){return function(...n){const s=this.__v_raw,i=h(s),o=D(i),a=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,c=s[t](...n),l=r?st:e?ct:at;return!e&&d(i,"iterate",u?nt:O),{next(){const{value:p,done:w}=c.next();return w?{value:p,done:w}:{value:a?[l(p[0]),l(p[1])]:l(p),done:w}},[Symbol.iterator](){return this}}}}function A(t){return function(...e){return t==="delete"?!1:this}}function Ee(){const t={get(i){return K(this,i)},get size(){return $(this)},has:W,add:Lt,set:Ct,delete:Pt,clear:Mt,forEach:G(!1,!1)},e={get(i){return K(this,i,!1,!0)},get size(){return $(this)},has:W,add:Lt,set:Ct,delete:Pt,clear:Mt,forEach:G(!1,!0)},r={get(i){return K(this,i,!0)},get size(){return $(this,!0)},has(i){return W.call(this,i,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:G(!0,!1)},n={get(i){return K(this,i,!0,!0)},get size(){return $(this,!0)},has(i){return W.call(this,i,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:G(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=H(i,!1,!1),r[i]=H(i,!0,!1),e[i]=H(i,!1,!0),n[i]=H(i,!0,!0)}),[t,r,e,n]}const[Se,_e,Ae,xe]=Ee();function Ut(t,e){const r=e?t?xe:Ae:t?_e:Se;return(n,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?n:Reflect.get(k(r,s)&&s in n?r:n,s,i)}const Be={get:Ut(!1,!1)},Oe={get:Ut(!0,!1)},jt=new WeakMap,Re=new WeakMap,kt=new WeakMap,Te=new WeakMap;function Ie(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ne(t){return t.__v_skip||!Object.isExtensible(t)?0:Ie(te(t))}function ot(t){return t&&t.__v_isReadonly?t:Dt(t,!1,me,Be,jt)}function J(t){return Dt(t,!0,ge,Oe,kt)}function Dt(t,e,r,n,s){if(!z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ne(t);if(o===0)return t;const a=new Proxy(t,o===2?n:r);return s.set(t,a),a}function h(t){const e=t&&t.__v_raw;return e?h(e):t}const at=t=>z(t)?ot(t):t,ct=t=>z(t)?J(t):t;function ut(t){return Boolean(t&&t.__v_isRef===!0)}Promise.resolve();var Le=function(){function t(e,r){this.namespace=e,this.stores=r,this.stores[e].watchers.push(this)}return t.prototype.do=function(e){var r=this;return this.handler=e,function(){return r.unwatch()}},t.prototype.unwatch=function(){this===null||this===void 0||this.stopEffect(),this.handler=null;var e=this.stores[this.namespace].watchers.indexOf(this);e!==-1&&this.stores[this.namespace].watchers.splice(e,1)},t}(),lt="$state-initialized",Ce=function(){function t(e,r){this.eventEmitter=e,this.stores=r,this.eventEmitter=e,this.stores=r}return t.prototype.offEvents=function(e,r,n){var s=r?this.eventEmitter.removeUnicastEventListener:this.eventEmitter.removeBroadcastEventListener;s=s.bind(this.eventEmitter),n?e[n]?(s(n,e[n]),delete e[n]):console.warn(wt.handlerIsNotInTheEventsPool(n,r)):Object.entries(e).forEach(function(i){var o=i[0],a=i[1];s(o,a)})},t.prototype.onBroadcast=function(e){var r=this;return Object.entries(e).forEach(function(n){var s=n[0],i=n[1];r.eventEmitter.addBroadcastEventListener(s,i)}),function(n){r.offEvents(e,!1,n)}},t.prototype.onUnicast=function(e){var r=this;return Object.entries(e).forEach(function(n){var s=n[0],i=n[1];try{r.eventEmitter.addUnicastEventListener(s,i)}catch(o){console.error(o)}}),function(n){r.offEvents(e,!0,n)}},t.prototype.createBroadcaster=function(e){var r=this;return new Proxy({},{get:function(n,s){return function(){for(var i,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return e==null||e(s),(i=r.eventEmitter).emitBroadcast.apply(i,Z([s],o,!1))}},set:function(){return!1}})},t.prototype.createUnicaster=function(e){var r=this;return new Proxy({},{get:function(n,s){return function(){for(var i,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return e==null||e(s),(i=r.eventEmitter).emitUnicast.apply(i,Z([s],o,!1))}},set:function(){return!1}})},t.prototype.existState=function(e){return!!this.stores[e]},t.prototype.initState=function(e,r,n){if(n===void 0&&(n=!1),this.existState(e))throw new Error(f.duplicatedInitial(e));if(yt(r))throw new Error(f.initializePrimitiveState(e));return this.stores[e]={state:ot(r),owner:n?this:null,watchers:[]},this.eventEmitter.emitBroadcast(lt,e),this.getState(e)},t.prototype.getState=function(e,r){if(this.existState(e)){var n=J(this.stores[e].state);return r?r(n):n}else return null},t.prototype.getStateToSet=function(e){if(!this.existState(e)){var r=f.accessUninitializedState(e);throw new Error(r)}var n=this.stores[e].owner;if(n!==this&&n!==null){var r=f.modifyPrivateState(e);throw new Error(r)}return this.stores[e].state},t.prototype.setState=function(e,r){return b(this,void 0,void 0,function(){var n;return m(this,function(s){switch(s.label){case 0:return n=this.getStateToSet(e),[4,Promise.resolve(r(n))];case 1:return s.sent(),[2]}})})},t.prototype.watchState=function(e,r){if(!this.existState(e)){var n=f.accessUninitializedState(e);throw new Error(n)}var s=J(this.stores[e].state),i=new Le(e,this.stores);i.oldWatchingStates=r(JSON.parse(JSON.stringify(s)),!1);var o=se(function(){var a,u=r(s,!0),c=yt(u)?u:JSON.parse(JSON.stringify(u));try{(a=i.handler)===null||a===void 0||a.call(i,u,i.oldWatchingStates)}finally{i.oldWatchingStates=c}});return i.stopEffect=function(){return o.effect.stop()},i},t.prototype.waitState=function(e,r){var n=this;r===void 0&&(r=10*1e3);var s=Z([],e,!0),i=e.filter(function(a){return!n.existState(a)});if(i.length===0){var o=s.map(function(a){return n.getState(a)});return Promise.resolve(o)}else return new Promise(function(a,u){var c=setTimeout(function(){clearTimeout(c);var p=f.waitStateTimeout(i);u(new Error(p))},r),l=function(p){var w=i.indexOf(p);if(w!==-1&&i.splice(w,1),i.length===0){clearTimeout(c),n.eventEmitter.removeBroadcastEventListener(lt,l);var g=s.map(function(P){return n.getState(P)});a(g)}};n.eventEmitter.addBroadcastEventListener(lt,l)})},t}(),Pe=function(){function t(e){this.name=e,this.dependenciesReady=!1,this.bootstrapped=!1,this.dependencies=[],this.relatedApps=[],this.name=e,this.isRallieCoreApp=!0}return t.prototype.relateTo=function(e){var r=this,n=Ht(e),s=this.relatedApps.map(function(i){return N(i)});return n.forEach(function(i){s.includes(N(i))||r.relatedApps.push(i)}),this},t.prototype.relyOn=function(e){var r=this,n=Jt(e),s=this.dependencies.map(function(o){return Q(o)}),i=this.relatedApps.map(function(o){return N(o)});return n.forEach(function(o){var a=Q(o);if(s.includes(a)||r.dependencies.push(o),!i.includes(a)){var u=typeof o=="string"?o:o.ctx;r.relatedApps.push(u)}}),this},t.prototype.onBootstrap=function(e){return this.doBootstrap=e,this},t.prototype.onActivate=function(e){return this.doActivate=e,this},t.prototype.onDestroy=function(e){return this.doDestroy=e,this},t.prototype.activateDependenciesApp=function(e){return b(this,void 0,void 0,function(){var r,n,s,i,o;return m(this,function(a){switch(a.label){case 0:if(!(!this.dependenciesReady&&this.dependencies.length!==0))return[3,7];r=0,n=this.dependencies,a.label=1;case 1:return r<n.length?(s=n[r],typeof s!="string"?[3,3]:[4,e(s)]):[3,6];case 2:return a.sent(),[3,5];case 3:return Gt(s)?(i=s.ctx,o=s.data,[4,e(i,o)]):[3,5];case 4:a.sent(),a.label=5;case 5:return r++,[3,1];case 6:this.dependenciesReady=!0,a.label=7;case 7:return[2]}})})},t.prototype.loadRelatedApps=function(e){return b(this,void 0,void 0,function(){return m(this,function(r){switch(r.label){case 0:return[4,Promise.all(this.relatedApps.map(function(n){return e(n)}))];case 1:return r.sent(),[2]}})})},t}(),Me=function(t){return b(void 0,void 0,void 0,function(){var e;return m(this,function(r){return e=new Promise(function(n){var s=typeof t!="string"?t:{type:"text/javascript",src:t},i=document.createElement("script");Object.entries(s).forEach(function(o){var a=o[0],u=o[1];i[a]=u}),i.src&&(i.onload=i.onerror=function(){n()}),document.body.appendChild(i),i.src||n()}),[2,e]})})},Ue=function(t){var e=typeof t!="string"?t:{rel:"stylesheet",type:"text/css",href:t},r=document.createElement("link");Object.entries(e).forEach(function(n){var s=n[0],i=n[1];r[s]=i}),document.head.appendChild(r)},je=function(t){return b(void 0,void 0,void 0,function(){var e,r;return m(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,fetch(t)];case 1:return e=n.sent(),[4,e.text()];case 2:return r=n.sent(),[2,r];case 3:return n.sent(),[2,""];case 4:return[2]}})})},ke=function(t){var e=new Function(t);e()},x={loadScript:Me,loadLink:Ue,fetchScript:je,excuteCode:ke},De=function(){function t(e){this.eventEmitter=new Vt,this.stores={},this.apps={},this.dependencyDepth=0,this.conf={maxDependencyDepth:100,loadScriptByFetch:!1,assets:{}},this.middlewares=[],this.name=e,this.composedMiddlewareFn=mt(this.middlewares)}return t.prototype.isRallieCoreApp=function(e){return this.apps[e]&&typeof this.apps[e]!="boolean"},t.prototype.config=function(e){return this.conf=y(y(y({},this.conf),e),{assets:y(y({},this.conf.assets),(e==null?void 0:e.assets)||{})}),this},t.prototype.use=function(e){if(typeof e!="function")throw new Error(f.wrongMiddlewareType());return this.middlewares.push(e),this.composedMiddlewareFn=mt(this.middlewares),this},t.prototype.createContext=function(e){var r={name:"",loadScript:x.loadScript,loadLink:x.loadLink,fetchScript:x.fetchScript,excuteCode:x.excuteCode,conf:this.conf},n=typeof e=="string"?e:e.name;if(n)typeof e!="string"&&(r=y(y({},r),e)),r.name=n;else throw new Error(f.wrongContextType());return r},t.prototype.loadResourcesFromAssetsConfig=function(e){return b(this,void 0,void 0,function(){var r,n,s,i,o,a,u,c,l,p,w,g,P,M,Y,I,U,q;return m(this,function(R){switch(R.label){case 0:if(r=e.name,n=e.loadScript,s=n===void 0?x.loadScript:n,i=e.loadLink,o=i===void 0?x.loadLink:i,a=e.fetchScript,u=a===void 0?x.fetchScript:a,c=e.excuteCode,l=c===void 0?x.excuteCode:c,p=e.conf,w=p===void 0?this.conf:p,g=w.assets,P=w.loadScriptByFetch,!g[r])return[3,9];if(g[r].css&&g[r].css.forEach(function(j){var vt=typeof j=="string"?j:j.href;/^.+\.css$/.test(vt)?o(j):console.error(f.invalidResource(vt))}),!g[r].js)return[3,8];M=0,Y=g[r].js,R.label=1;case 1:return M<Y.length?(I=Y[M],U=typeof I=="string"?I:I.src,/^.+\.js$/.test(U)?P?[3,3]:[4,s(I)]:[3,6]):[3,8];case 2:return R.sent(),[3,5];case 3:return[4,u(U)];case 4:q=R.sent(),q&&l(q),R.label=5;case 5:return[3,7];case 6:console.error(f.invalidResource(U)),R.label=7;case 7:return M++,[3,1];case 8:return[3,10];case 9:throw new Error(f.resourceNotDeclared(r,this.name));case 10:return[2]}})})},t.prototype.createSocket=function(){return new Ce(this.eventEmitter,this.stores)},t.prototype.existApp=function(e){return!!this.apps[e]},t.prototype.createApp=function(e){if(this.existApp(e))throw new Error(f.createExistingApp(e));var r=new Pe(e);return this.apps[e]=r,r},t.prototype.loadApp=function(e){return b(this,void 0,void 0,function(){var r,n,s;return m(this,function(i){switch(i.label){case 0:return r=this.createContext(e),n=r.name,this.apps[n]?[3,2]:[4,this.composedMiddlewareFn(r,this.loadResourcesFromAssetsConfig.bind(this))];case 1:if(i.sent(),s=n.startsWith("lib:"),s&&!this.apps[n]&&(this.apps[n]=!0),!this.apps[n])throw new Error(f.appNotCreated(n));i.label=2;case 2:return[2]}})})},t.prototype.activateApp=function(e,r){return b(this,void 0,void 0,function(){var n,s,i;return m(this,function(o){switch(o.label){case 0:return n=N(e),[4,this.loadApp(e)];case 1:return o.sent(),this.isRallieCoreApp(n)?(s=this.apps[n],[4,s.loadRelatedApps(this.loadApp.bind(this))]):[3,11];case 2:if(o.sent(),s.bootstrapped)return[3,8];if(this.dependencyDepth>this.conf.maxDependencyDepth)throw this.dependencyDepth=0,new Error(f.bootstrapNumberOverflow(this.conf.maxDependencyDepth));return this.dependencyDepth++,[4,s.activateDependenciesApp(this.activateApp.bind(this))];case 3:return o.sent(),s.doBootstrap?[4,Promise.resolve(s.doBootstrap(r))]:[3,5];case 4:return o.sent(),[3,7];case 5:return s.doActivate?[4,Promise.resolve(s.doActivate(r))]:[3,7];case 6:o.sent(),o.label=7;case 7:return s.bootstrapped=!0,this.dependencyDepth--,[3,11];case 8:return i=s.doActivate,i?[4,Promise.resolve(s.doActivate(r))]:[3,10];case 9:i=o.sent(),o.label=10;case 10:o.label=11;case 11:return[2]}})})},t.prototype.destroyApp=function(e,r){return b(this,void 0,void 0,function(){var n,s;return m(this,function(i){switch(i.label){case 0:return this.isRallieCoreApp(e)?(n=this.apps[e],s=n.doDestroy,s?[4,Promise.resolve(n.doDestroy(r))]:[3,2]):[3,3];case 1:s=i.sent(),i.label=2;case 2:n.bootstrapped=!1,n.dependenciesReady=!1,i.label=3;case 3:return[2]}})})},t}(),ze={},ft="DEFAULT_BUS",Fe=function(t){if(t===void 0&&(t=ft),window.RALLIE_BUS_STORE===void 0&&Reflect.defineProperty(window,"RALLIE_BUS_STORE",{value:ze,writable:!1}),window.RALLIE_BUS_STORE[t])throw new Error(f.duplicatedBus(t));var e=new De(t);return Reflect.defineProperty(window.RALLIE_BUS_STORE,t,{value:e,writable:!1}),e},zt=function(t){return t===void 0&&(t=ft),window.RALLIE_BUS_STORE&&window.RALLIE_BUS_STORE[t]},ht=function(t){t===void 0&&(t=ft);var e=null,r=!1,n=zt(t);return n?(e=n,r=!1):(e=Fe(t),r=!0),[e,r]};/*! *****************************************************************************
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
***************************************************************************** */var pt=function(t,e){return pt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])},pt(t,e)};function Ke(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");pt(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}function Ft(t,e,r,n){function s(i){return i instanceof r?i:new r(function(o){o(i)})}return new(r||(r=Promise))(function(i,o){function a(l){try{c(n.next(l))}catch(p){o(p)}}function u(l){try{c(n.throw(l))}catch(p){o(p)}}function c(l){l.done?i(l.value):s(l.value).then(a,u)}c((n=n.apply(t,e||[])).next())})}function Kt(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,s&&(i=c[0]&2?s.return:c[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,c[1])).done)return i;switch(s=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,s=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){r.label=c[1];break}if(c[0]===6&&r.label<i[1]){r.label=i[1],i=c;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(c);break}i[2]&&r.ops.pop(),r.trys.pop();continue}c=e.call(t,r)}catch(l){c=[6,l],s=0}finally{n=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var v={privateBus:function(t){return t+".bus"},publicStateNamespace:function(t){return t+".public"},privateStateNamespace:function(t){return t+".private"},isGlobalBusAccessed:"isGlobalBusAccessed"},Wt=function(t){return"[rallie] "+t},dt={stateNotInitialized:function(t,e){return Wt("the "+(e?"private":"public")+" state of the app "+t+` is not initialized, please check:
`+("1. whether app "+t+` is loaded.
`)+("2. whether app "+t+" initializes the "+(e?"private":"public")+" state"))},duplicatedAppName:function(t){return Wt("the app "+t+" is already registered, please rename your app")}},We=function(){function t(e,r,n,s){this.socket=e,this.namespace=n,this.appName=r,s&&this.socket.initState(n,s)}return t.prototype.get=function(e){return this.socket.getState(this.namespace,e)},t.prototype.watch=function(e){if(this.socket.existState(this.namespace))return this.socket.watchState(this.namespace,e);throw new Error(dt.stateNotInitialized(this.appName,this.namespace===v.privateStateNamespace(this.appName)))},t}(),V=function(t){Ke(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.set=function(r){if(this.socket.existState(this.namespace))return this.socket.setState(this.namespace,r);throw new Error(dt.stateNotInitialized(this.appName,this.namespace===v.privateStateNamespace(this.appName)))},e}(We),$e=function(){function t(e){this.name=e,this.isRallieApp=!1;var r=ht(v.privateBus(e))[0];this.socket=r.createSocket(),this.privateState=new V(this.socket,e,v.privateStateNamespace(this.name)),this.publicState=new V(this.socket,e,v.publicStateNamespace(this.name)),this.events=this.socket.createBroadcaster(),this.methods=this.socket.createUnicaster()}return t.prototype.listenEvents=function(e){return this.socket.onBroadcast(e)},t}(),Ge=function(){function t(e,r){var n,s;this.name=e,this.isRallieApp=!0;var i=ht(),o=i[0],a=i[1];if(o.existApp(e))throw new Error(dt.duplicatedAppName(e));this.globalBus=o,this.globalSocket=o.createSocket(),this.isHost=a,a&&this.globalSocket.initState(v.isGlobalBusAccessed,{value:!1},!0);var u=ht(v.privateBus(e))[0];this.socket=u.createSocket(),this.events=this.socket.createBroadcaster(),this.methods=this.socket.createUnicaster(),this.publicState=new V(this.socket,this.name,v.publicStateNamespace(this.name),(n=r==null?void 0:r.state)===null||n===void 0?void 0:n.public),this.privateState=new V(this.socket,this.name,v.privateStateNamespace(this.name),(s=r==null?void 0:r.state)===null||s===void 0?void 0:s.private)}return t.prototype.listenEvents=function(e){return this.socket.onBroadcast(e)},t.prototype.addMethods=function(e){return this.socket.onUnicast(e)},t.prototype.connect=function(e){return new $e(e)},t.prototype.load=function(e){return this.globalBus.loadApp(e)},t.prototype.activate=function(e,r){return this.globalBus.activateApp(e,r)},t.prototype.destroy=function(e,r){return this.globalBus.destroyApp(e,r)},t.prototype.runInHostMode=function(e){return Ft(this,void 0,void 0,function(){var r,n=this;return Kt(this,function(s){switch(s.label){case 0:return this.isHost?(r=function(i){n.globalSocket.setState(v.isGlobalBusAccessed,function(o){o.value=i})},[4,Promise.resolve(e(this.globalBus,r))]):[3,2];case 1:s.sent(),s.label=2;case 2:return[2]}})})},t.prototype.runInRemoteMode=function(e){var r;return Ft(this,void 0,void 0,function(){var n;return Kt(this,function(s){switch(s.label){case 0:return this.isHost?[3,2]:(n=((r=this.globalSocket.getState(v.isGlobalBusAccessed))===null||r===void 0?void 0:r.value)?this.globalBus:null,[4,Promise.resolve(e(n))]);case 1:s.sent(),s.label=2;case 2:return[2]}})})},t}();function He(t){var e=zt();return e.createApp(t.name)}export{Ge as A,He as r};
