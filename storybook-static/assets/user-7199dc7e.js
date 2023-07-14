import{G as We}from"./iconBase-3663c682.js";import{j as wt}from"./jsx-runtime-94f6e698.js";import{r as P,R as Bt}from"./index-8db94870.js";import{f as te,R as Kt,b as Gt,_ as Ht,c as Xt,d as Qt,h as Yt,i as Jt,s as Zt}from"./ToastMessage-8e315cf6.js";import{r as er}from"./index-8ce4a492.js";var St={exports:{}},Ot={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=P;function tr(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rr=typeof Object.is=="function"?Object.is:tr,nr=B.useState,or=B.useEffect,ur=B.useLayoutEffect,ir=B.useDebugValue;function ar(e,t){var r=t(),n=nr({inst:{value:r,getSnapshot:t}}),o=n[0].inst,u=n[1];return ur(function(){o.value=r,o.getSnapshot=t,Ae(o)&&u({inst:o})},[e,r,t]),or(function(){return Ae(o)&&u({inst:o}),e(function(){Ae(o)&&u({inst:o})})},[e]),ir(r),r}function Ae(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!rr(e,r)}catch{return!0}}function cr(e,t){return t()}var fr=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?cr:ar;Ot.useSyncExternalStore=B.useSyncExternalStore!==void 0?B.useSyncExternalStore:fr;St.exports=Ot;var sr=St.exports;function Vn(e){return We({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"}},{tag:"path",attr:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"}}]})(e)}function Bn(e){return We({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]})(e)}function Kn(e){return We({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]})(e)}const Gn=({children:e})=>wt.jsx("div",{className:"h-screen w-full flex flex-col justify-center  items-center overflow-hidden",children:e});var Pt={exports:{}},Et={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=P,lr=sr;function dr(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pr=typeof Object.is=="function"?Object.is:dr,vr=lr.useSyncExternalStore,yr=ae.useRef,hr=ae.useEffect,mr=ae.useMemo,br=ae.useDebugValue;Et.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var u=yr(null);if(u.current===null){var a={hasValue:!1,value:null};u.current=a}else a=u.current;u=mr(function(){function f(d){if(!i){if(i=!0,s=d,d=n(d),o!==void 0&&a.hasValue){var l=a.value;if(o(l,d))return v=l}return v=d}if(l=v,pr(s,d))return l;var y=n(d);return o!==void 0&&o(l,y)?l:(s=d,v=y)}var i=!1,s,v,p=r===void 0?null:r;return[function(){return f(t())},p===null?void 0:function(){return f(p())}]},[t,r,n,o]);var c=vr(e,u[0],u[1]);return hr(function(){a.hasValue=!0,a.value=c},[c]),br(c),c};Pt.exports=Et;var gr=Pt.exports;function wr(e){e()}let $t=wr;const Sr=e=>$t=e,Or=()=>$t,rt=Symbol.for(`react-redux-context-${P.version}`),nt=globalThis;function Pr(){let e=nt[rt];return e||(e=P.createContext(null),nt[rt]=e),e}const k=new Proxy({},new Proxy({},{get(e,t){const r=Pr();return(n,...o)=>Reflect[t](r,...o)}}));function qe(e=k){return function(){return P.useContext(e)}}const xt=qe(),Er=()=>{throw new Error("uSES not initialized!")};let jt=Er;const $r=e=>{jt=e},xr=(e,t)=>e===t;function jr(e=k){const t=e===k?xt:qe(e);return function(n,o={}){const{equalityFn:u=xr,stabilityCheck:a=void 0,noopCheck:c=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:f,subscription:i,getServerState:s,stabilityCheck:v,noopCheck:p}=t();P.useRef(!0);const d=P.useCallback({[n.name](y){return n(y)}}[n.name],[n,v,a]),l=jt(i.addNestedSub,f.getState,s||f.getState,d,u);return P.useDebugValue(l),l}}const Hn=jr();var At={exports:{}},g={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=typeof Symbol=="function"&&Symbol.for,Fe=E?Symbol.for("react.element"):60103,Ve=E?Symbol.for("react.portal"):60106,ce=E?Symbol.for("react.fragment"):60107,fe=E?Symbol.for("react.strict_mode"):60108,se=E?Symbol.for("react.profiler"):60114,le=E?Symbol.for("react.provider"):60109,de=E?Symbol.for("react.context"):60110,Be=E?Symbol.for("react.async_mode"):60111,pe=E?Symbol.for("react.concurrent_mode"):60111,ve=E?Symbol.for("react.forward_ref"):60112,ye=E?Symbol.for("react.suspense"):60113,Ar=E?Symbol.for("react.suspense_list"):60120,he=E?Symbol.for("react.memo"):60115,me=E?Symbol.for("react.lazy"):60116,Cr=E?Symbol.for("react.block"):60121,Rr=E?Symbol.for("react.fundamental"):60117,_r=E?Symbol.for("react.responder"):60118,Mr=E?Symbol.for("react.scope"):60119;function A(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fe:switch(e=e.type,e){case Be:case pe:case ce:case se:case fe:case ye:return e;default:switch(e=e&&e.$$typeof,e){case de:case ve:case me:case he:case le:return e;default:return t}}case Ve:return t}}}function Ct(e){return A(e)===pe}g.AsyncMode=Be;g.ConcurrentMode=pe;g.ContextConsumer=de;g.ContextProvider=le;g.Element=Fe;g.ForwardRef=ve;g.Fragment=ce;g.Lazy=me;g.Memo=he;g.Portal=Ve;g.Profiler=se;g.StrictMode=fe;g.Suspense=ye;g.isAsyncMode=function(e){return Ct(e)||A(e)===Be};g.isConcurrentMode=Ct;g.isContextConsumer=function(e){return A(e)===de};g.isContextProvider=function(e){return A(e)===le};g.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fe};g.isForwardRef=function(e){return A(e)===ve};g.isFragment=function(e){return A(e)===ce};g.isLazy=function(e){return A(e)===me};g.isMemo=function(e){return A(e)===he};g.isPortal=function(e){return A(e)===Ve};g.isProfiler=function(e){return A(e)===se};g.isStrictMode=function(e){return A(e)===fe};g.isSuspense=function(e){return A(e)===ye};g.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ce||e===pe||e===se||e===fe||e===ye||e===Ar||typeof e=="object"&&e!==null&&(e.$$typeof===me||e.$$typeof===he||e.$$typeof===le||e.$$typeof===de||e.$$typeof===ve||e.$$typeof===Rr||e.$$typeof===_r||e.$$typeof===Mr||e.$$typeof===Cr)};g.typeOf=A;At.exports=g;var Ir=At.exports,Rt=Ir,Tr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_t={};_t[Rt.ForwardRef]=Tr;_t[Rt.Memo]=Nr;var w={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke=Symbol.for("react.element"),Ge=Symbol.for("react.portal"),be=Symbol.for("react.fragment"),ge=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),Oe=Symbol.for("react.context"),Dr=Symbol.for("react.server_context"),Pe=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),xe=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),Ur=Symbol.for("react.offscreen"),Mt;Mt=Symbol.for("react.module.reference");function C(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ke:switch(e=e.type,e){case be:case we:case ge:case Ee:case $e:return e;default:switch(e=e&&e.$$typeof,e){case Dr:case Oe:case Pe:case je:case xe:case Se:return e;default:return t}}case Ge:return t}}}w.ContextConsumer=Oe;w.ContextProvider=Se;w.Element=Ke;w.ForwardRef=Pe;w.Fragment=be;w.Lazy=je;w.Memo=xe;w.Portal=Ge;w.Profiler=we;w.StrictMode=ge;w.Suspense=Ee;w.SuspenseList=$e;w.isAsyncMode=function(){return!1};w.isConcurrentMode=function(){return!1};w.isContextConsumer=function(e){return C(e)===Oe};w.isContextProvider=function(e){return C(e)===Se};w.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ke};w.isForwardRef=function(e){return C(e)===Pe};w.isFragment=function(e){return C(e)===be};w.isLazy=function(e){return C(e)===je};w.isMemo=function(e){return C(e)===xe};w.isPortal=function(e){return C(e)===Ge};w.isProfiler=function(e){return C(e)===we};w.isStrictMode=function(e){return C(e)===ge};w.isSuspense=function(e){return C(e)===Ee};w.isSuspenseList=function(e){return C(e)===$e};w.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===be||e===we||e===ge||e===Ee||e===$e||e===Ur||typeof e=="object"&&e!==null&&(e.$$typeof===je||e.$$typeof===xe||e.$$typeof===Se||e.$$typeof===Oe||e.$$typeof===Pe||e.$$typeof===Mt||e.getModuleId!==void 0)};w.typeOf=C;function kr(){const e=Or();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,u=r={callback:n,next:null,prev:r};return u.prev?u.prev.next=u:t=u,function(){!o||t===null||(o=!1,u.next?u.next.prev=u.prev:r=u.prev,u.prev?u.prev.next=u.next:t=u.next)}}}}const ot={notify(){},get:()=>[]};function Lr(e,t){let r,n=ot;function o(v){return f(),n.subscribe(v)}function u(){n.notify()}function a(){s.onStateChange&&s.onStateChange()}function c(){return!!r}function f(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=kr())}function i(){r&&(r(),r=void 0,n.clear(),n=ot)}const s={addNestedSub:o,notifyNestedSubs:u,handleChangeWrapper:a,isSubscribed:c,trySubscribe:f,tryUnsubscribe:i,getListeners:()=>n};return s}const zr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wr=zr?P.useLayoutEffect:P.useEffect;function Xn({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",noopCheck:u="once"}){const a=P.useMemo(()=>{const i=Lr(e);return{store:e,subscription:i,getServerState:n?()=>n:void 0,stabilityCheck:o,noopCheck:u}},[e,n,o,u]),c=P.useMemo(()=>e.getState(),[e]);Wr(()=>{const{subscription:i}=a;return i.onStateChange=i.notifyNestedSubs,i.trySubscribe(),c!==e.getState()&&i.notifyNestedSubs(),()=>{i.tryUnsubscribe(),i.onStateChange=void 0}},[a,c]);const f=t||k;return Bt.createElement(f.Provider,{value:a},r)}function It(e=k){const t=e===k?xt:qe(e);return function(){const{store:n}=t();return n}}const qr=It();function Fr(e=k){const t=e===k?qr:It(e);return function(){return t().dispatch}}const Vr=Fr();$r(gr.useSyncExternalStoreWithSelector);Sr(er.unstable_batchedUpdates);function M(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function L(e){return!!e&&!!e[O]}function T(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Zr}(e)||Array.isArray(e)||!!e[lt]||!!(!((t=e.constructor)===null||t===void 0)&&t[lt])||He(e)||Xe(e))}function W(e,t,r){r===void 0&&(r=!1),G(e)===0?(r?Object.keys:V)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function G(e){var t=e[O];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:He(e)?2:Xe(e)?3:0}function F(e,t){return G(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Br(e,t){return G(e)===2?e.get(t):e[t]}function Tt(e,t,r){var n=G(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Nt(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function He(e){return Yr&&e instanceof Map}function Xe(e){return Jr&&e instanceof Set}function z(e){return e.o||e.t}function Qe(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Ut(e);delete t[O];for(var r=V(t),n=0;n<r.length;n++){var o=r[n],u=t[o];u.writable===!1&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(t[o]={configurable:!0,writable:!0,enumerable:u.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Ye(e,t){return t===void 0&&(t=!1),Je(e)||L(e)||!T(e)||(G(e)>1&&(e.set=e.add=e.clear=e.delete=Kr),Object.freeze(e),t&&W(e,function(r,n){return Ye(n,!0)},!0)),e}function Kr(){M(2)}function Je(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function I(e){var t=Le[e];return t||M(18,e),t}function Gr(e,t){Le[e]||(Le[e]=t)}function De(){return J}function Ce(e,t){t&&(I("Patches"),e.u=[],e.s=[],e.v=t)}function re(e){Ue(e),e.p.forEach(Hr),e.p=null}function Ue(e){e===J&&(J=e.l)}function ut(e){return J={p:[],l:J,h:e,m:!0,_:0}}function Hr(e){var t=e[O];t.i===0||t.i===1?t.j():t.g=!0}function Re(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||I("ES5").S(t,e,n),n?(r[O].P&&(re(t),M(4)),T(e)&&(e=ne(t,e),t.l||oe(t,e)),t.u&&I("Patches").M(r[O].t,e,t.u,t.s)):e=ne(t,r,[]),re(t),t.u&&t.v(t.u,t.s),e!==Dt?e:void 0}function ne(e,t,r){if(Je(t))return t;var n=t[O];if(!n)return W(t,function(c,f){return it(e,n,t,c,f,r)},!0),t;if(n.A!==e)return t;if(!n.P)return oe(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=Qe(n.k):n.o,u=o,a=!1;n.i===3&&(u=new Set(o),o.clear(),a=!0),W(u,function(c,f){return it(e,n,o,c,f,r,a)}),oe(e,o,!1),r&&e.u&&I("Patches").N(n,r,e.u,e.s)}return n.o}function it(e,t,r,n,o,u,a){if(L(o)){var c=ne(e,o,u&&t&&t.i!==3&&!F(t.R,n)?u.concat(n):void 0);if(Tt(r,n,c),!L(c))return;e.m=!1}else a&&r.add(o);if(T(o)&&!Je(o)){if(!e.h.D&&e._<1)return;ne(e,o),t&&t.A.l||oe(e,o)}}function oe(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&Ye(t,r)}function _e(e,t){var r=e[O];return(r?z(r):e)[t]}function at(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function N(e){e.P||(e.P=!0,e.l&&N(e.l))}function Me(e){e.o||(e.o=Qe(e.t))}function ke(e,t,r){var n=He(t)?I("MapSet").F(t,r):Xe(t)?I("MapSet").T(t,r):e.O?function(o,u){var a=Array.isArray(o),c={i:a?1:0,A:u?u.A:De(),P:!1,I:!1,R:{},l:u,t:o,k:null,o:null,j:null,C:!1},f=c,i=Z;a&&(f=[c],i=Y);var s=Proxy.revocable(f,i),v=s.revoke,p=s.proxy;return c.k=p,c.j=v,p}(t,r):I("ES5").J(t,r);return(r?r.A:De()).p.push(n),n}function Xr(e){return L(e)||M(22,e),function t(r){if(!T(r))return r;var n,o=r[O],u=G(r);if(o){if(!o.P&&(o.i<4||!I("ES5").K(o)))return o.t;o.I=!0,n=ct(r,u),o.I=!1}else n=ct(r,u);return W(n,function(a,c){o&&Br(o.t,a)===c||Tt(n,a,t(c))}),u===3?new Set(n):n}(e)}function ct(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Qe(e)}function Qr(){function e(u,a){var c=o[u];return c?c.enumerable=a:o[u]=c={configurable:!0,enumerable:a,get:function(){var f=this[O];return Z.get(f,u)},set:function(f){var i=this[O];Z.set(i,u,f)}},c}function t(u){for(var a=u.length-1;a>=0;a--){var c=u[a][O];if(!c.P)switch(c.i){case 5:n(c)&&N(c);break;case 4:r(c)&&N(c)}}}function r(u){for(var a=u.t,c=u.k,f=V(c),i=f.length-1;i>=0;i--){var s=f[i];if(s!==O){var v=a[s];if(v===void 0&&!F(a,s))return!0;var p=c[s],d=p&&p[O];if(d?d.t!==v:!Nt(p,v))return!0}}var l=!!a[O];return f.length!==V(a).length+(l?0:1)}function n(u){var a=u.k;if(a.length!==u.t.length)return!0;var c=Object.getOwnPropertyDescriptor(a,a.length-1);if(c&&!c.get)return!0;for(var f=0;f<a.length;f++)if(!a.hasOwnProperty(f))return!0;return!1}var o={};Gr("ES5",{J:function(u,a){var c=Array.isArray(u),f=function(s,v){if(s){for(var p=Array(v.length),d=0;d<v.length;d++)Object.defineProperty(p,""+d,e(d,!0));return p}var l=Ut(v);delete l[O];for(var y=V(l),h=0;h<y.length;h++){var m=y[h];l[m]=e(m,s||!!l[m].enumerable)}return Object.create(Object.getPrototypeOf(v),l)}(c,u),i={i:c?5:4,A:a?a.A:De(),P:!1,I:!1,R:{},l:a,t:u,k:f,o:null,g:!1,C:!1};return Object.defineProperty(f,O,{value:i,writable:!0}),f},S:function(u,a,c){c?L(a)&&a[O].A===u&&t(u.p):(u.u&&function f(i){if(i&&typeof i=="object"){var s=i[O];if(s){var v=s.t,p=s.k,d=s.R,l=s.i;if(l===4)W(p,function(S){S!==O&&(v[S]!==void 0||F(v,S)?d[S]||f(p[S]):(d[S]=!0,N(s)))}),W(v,function(S){p[S]!==void 0||F(p,S)||(d[S]=!1,N(s))});else if(l===5){if(n(s)&&(N(s),d.length=!0),p.length<v.length)for(var y=p.length;y<v.length;y++)d[y]=!1;else for(var h=v.length;h<p.length;h++)d[h]=!0;for(var m=Math.min(p.length,v.length),b=0;b<m;b++)p.hasOwnProperty(b)||(d[b]=!0),d[b]===void 0&&f(p[b])}}}}(u.p[0]),t(u.p))},K:function(u){return u.i===4?r(u):n(u)}})}var ft,J,Ze=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Yr=typeof Map<"u",Jr=typeof Set<"u",st=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Dt=Ze?Symbol.for("immer-nothing"):((ft={})["immer-nothing"]=!0,ft),lt=Ze?Symbol.for("immer-draftable"):"__$immer_draftable",O=Ze?Symbol.for("immer-state"):"__$immer_state",Zr=""+Object.prototype.constructor,V=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Ut=Object.getOwnPropertyDescriptors||function(e){var t={};return V(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},Le={},Z={get:function(e,t){if(t===O)return e;var r=z(e);if(!F(r,t))return function(o,u,a){var c,f=at(u,a);return f?"value"in f?f.value:(c=f.get)===null||c===void 0?void 0:c.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!T(n)?n:n===_e(e.t,t)?(Me(e),e.o[t]=ke(e.A.h,n,e)):n},has:function(e,t){return t in z(e)},ownKeys:function(e){return Reflect.ownKeys(z(e))},set:function(e,t,r){var n=at(z(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=_e(z(e),t),u=o==null?void 0:o[O];if(u&&u.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(Nt(r,o)&&(r!==void 0||F(e.t,t)))return!0;Me(e),N(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return _e(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Me(e),N(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=z(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){M(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){M(12)}},Y={};W(Z,function(e,t){Y[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Y.deleteProperty=function(e,t){return Y.set.call(this,e,t,void 0)},Y.set=function(e,t,r){return Z.set.call(this,e[0],t,r,e[0])};var en=function(){function e(r){var n=this;this.O=st,this.D=!0,this.produce=function(o,u,a){if(typeof o=="function"&&typeof u!="function"){var c=u;u=o;var f=n;return function(y){var h=this;y===void 0&&(y=c);for(var m=arguments.length,b=Array(m>1?m-1:0),S=1;S<m;S++)b[S-1]=arguments[S];return f.produce(y,function(x){var R;return(R=u).call.apply(R,[h,x].concat(b))})}}var i;if(typeof u!="function"&&M(6),a!==void 0&&typeof a!="function"&&M(7),T(o)){var s=ut(n),v=ke(n,o,void 0),p=!0;try{i=u(v),p=!1}finally{p?re(s):Ue(s)}return typeof Promise<"u"&&i instanceof Promise?i.then(function(y){return Ce(s,a),Re(y,s)},function(y){throw re(s),y}):(Ce(s,a),Re(i,s))}if(!o||typeof o!="object"){if((i=u(o))===void 0&&(i=o),i===Dt&&(i=void 0),n.D&&Ye(i,!0),a){var d=[],l=[];I("Patches").M(o,i,d,l),a(d,l)}return i}M(21,o)},this.produceWithPatches=function(o,u){if(typeof o=="function")return function(i){for(var s=arguments.length,v=Array(s>1?s-1:0),p=1;p<s;p++)v[p-1]=arguments[p];return n.produceWithPatches(i,function(d){return o.apply(void 0,[d].concat(v))})};var a,c,f=n.produce(o,u,function(i,s){a=i,c=s});return typeof Promise<"u"&&f instanceof Promise?f.then(function(i){return[i,a,c]}):[f,a,c]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){T(r)||M(8),L(r)&&(r=Xr(r));var n=ut(this),o=ke(this,r,void 0);return o[O].C=!0,Ue(n),o},t.finishDraft=function(r,n){var o=r&&r[O],u=o.A;return Ce(u,n),Re(void 0,u)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!st&&M(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var u=n[o];if(u.path.length===0&&u.op==="replace"){r=u.value;break}}o>-1&&(n=n.slice(o+1));var a=I("Patches").$;return L(r)?a(r,n):this.produce(r,function(c){return a(c,n)})},e}(),j=new en,kt=j.produce;j.produceWithPatches.bind(j);j.setAutoFreeze.bind(j);j.setUseProxies.bind(j);j.applyPatches.bind(j);j.createDraft.bind(j);j.finishDraft.bind(j);function ee(e){"@babel/helpers - typeof";return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ee(e)}function tn(e,t){if(ee(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(ee(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function rn(e){var t=tn(e,"string");return ee(t)==="symbol"?t:String(t)}function nn(e,t,r){return t=rn(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function pt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?dt(Object(r),!0).forEach(function(n){nn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function $(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var vt=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ie=function(){return Math.random().toString(36).substring(7).split("").join(".")},ue={INIT:"@@redux/INIT"+Ie(),REPLACE:"@@redux/REPLACE"+Ie(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ie()}};function on(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Lt(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error($(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error($(1));return r(Lt)(e,t)}if(typeof e!="function")throw new Error($(2));var o=e,u=t,a=[],c=a,f=!1;function i(){c===a&&(c=a.slice())}function s(){if(f)throw new Error($(3));return u}function v(y){if(typeof y!="function")throw new Error($(4));if(f)throw new Error($(5));var h=!0;return i(),c.push(y),function(){if(h){if(f)throw new Error($(6));h=!1,i();var b=c.indexOf(y);c.splice(b,1),a=null}}}function p(y){if(!on(y))throw new Error($(7));if(typeof y.type>"u")throw new Error($(8));if(f)throw new Error($(9));try{f=!0,u=o(u,y)}finally{f=!1}for(var h=a=c,m=0;m<h.length;m++){var b=h[m];b()}return y}function d(y){if(typeof y!="function")throw new Error($(10));o=y,p({type:ue.REPLACE})}function l(){var y,h=v;return y={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error($(11));function S(){b.next&&b.next(s())}S();var x=h(S);return{unsubscribe:x}}},y[vt]=function(){return this},y}return p({type:ue.INIT}),n={dispatch:p,subscribe:v,getState:s,replaceReducer:d},n[vt]=l,n}function un(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:ue.INIT});if(typeof n>"u")throw new Error($(12));if(typeof r(void 0,{type:ue.PROBE_UNKNOWN_ACTION()})>"u")throw new Error($(13))})}function an(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];typeof e[o]=="function"&&(r[o]=e[o])}var u=Object.keys(r),a;try{un(r)}catch(c){a=c}return function(f,i){if(f===void 0&&(f={}),a)throw a;for(var s=!1,v={},p=0;p<u.length;p++){var d=u[p],l=r[d],y=f[d],h=l(y,i);if(typeof h>"u")throw i&&i.type,new Error($(14));v[d]=h,s=s||h!==y}return s=s||u.length!==Object.keys(f).length,s?v:f}}function ie(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function cn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),u=function(){throw new Error($(15))},a={getState:o.getState,dispatch:function(){return u.apply(void 0,arguments)}},c=t.map(function(f){return f(a)});return u=ie.apply(void 0,c)(o.dispatch),pt(pt({},o),{},{dispatch:u})}}}function zt(e){var t=function(n){var o=n.dispatch,u=n.getState;return function(a){return function(c){return typeof c=="function"?c(o,u,e):a(c)}}};return t}var Wt=zt();Wt.withExtraArgument=zt;const yt=Wt;var qt=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(n[u]=o[u])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),fn=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},n,o,u,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(s){return f([i,s])}}function f(i){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(u=i[0]&2?o.return:i[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,i[1])).done)return u;switch(o=0,u&&(i=[i[0]&2,u.value]),i[0]){case 0:case 1:u=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,o=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(u=r.trys,!(u=u.length>0&&u[u.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!u||i[1]>u[0]&&i[1]<u[3])){r.label=i[1];break}if(i[0]===6&&r.label<u[1]){r.label=u[1],u=i;break}if(u&&r.label<u[2]){r.label=u[2],r.ops.push(i);break}u[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(s){i=[6,s],o=0}finally{n=u=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},K=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},sn=Object.defineProperty,ln=Object.defineProperties,dn=Object.getOwnPropertyDescriptors,ht=Object.getOwnPropertySymbols,pn=Object.prototype.hasOwnProperty,vn=Object.prototype.propertyIsEnumerable,mt=function(e,t,r){return t in e?sn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},D=function(e,t){for(var r in t||(t={}))pn.call(t,r)&&mt(e,r,t[r]);if(ht)for(var n=0,o=ht(t);n<o.length;n++){var r=o[n];vn.call(t,r)&&mt(e,r,t[r])}return e},Te=function(e,t){return ln(e,dn(t))},yn=function(e,t,r){return new Promise(function(n,o){var u=function(f){try{c(r.next(f))}catch(i){o(i)}},a=function(f){try{c(r.throw(f))}catch(i){o(i)}},c=function(f){return f.done?n(f.value):Promise.resolve(f.value).then(u,a)};c((r=r.apply(e,t)).next())})},hn=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ie:ie.apply(null,arguments)};function mn(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var bn=function(e){qt(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,K([void 0],r[0].concat(this)))):new(t.bind.apply(t,K([void 0],r.concat(this))))},t}(Array),gn=function(e){qt(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,K([void 0],r[0].concat(this)))):new(t.bind.apply(t,K([void 0],r.concat(this))))},t}(Array);function ze(e){return T(e)?kt(e,function(){}):e}function wn(e){return typeof e=="boolean"}function Sn(){return function(t){return On(t)}}function On(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new bn;return r&&(wn(r)?n.push(yt):n.push(yt.withExtraArgument(r.extraArgument))),n}var Pn=!0;function Qn(e){var t=Sn(),r=e||{},n=r.reducer,o=n===void 0?void 0:n,u=r.middleware,a=u===void 0?t():u,c=r.devTools,f=c===void 0?!0:c,i=r.preloadedState,s=i===void 0?void 0:i,v=r.enhancers,p=v===void 0?void 0:v,d;if(typeof o=="function")d=o;else if(mn(o))d=an(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var l=a;typeof l=="function"&&(l=l(t));var y=cn.apply(void 0,l),h=ie;f&&(h=hn(D({trace:!Pn},typeof f=="object"&&f)));var m=new gn(y),b=m;Array.isArray(p)?b=K([y],p):typeof p=="function"&&(b=p(m));var S=h.apply(void 0,b);return Lt(d,s,S)}function U(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var u=t.apply(void 0,n);if(!u)throw new Error("prepareAction did not return an object");return D(D({type:e,payload:u.payload},"meta"in u&&{meta:u.meta}),"error"in u&&{error:u.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function Ft(e){var t={},r=[],n,o={addCase:function(u,a){var c=typeof u=="string"?u:u.type;if(c in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[c]=a,o},addMatcher:function(u,a){return r.push({matcher:u,reducer:a}),o},addDefaultCase:function(u){return n=u,o}};return e(o),[t,r,n]}function En(e){return typeof e=="function"}function $n(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?Ft(t):[t,r,n],u=o[0],a=o[1],c=o[2],f;if(En(e))f=function(){return ze(e())};else{var i=ze(e);f=function(){return i}}function s(v,p){v===void 0&&(v=f());var d=K([u[p.type]],a.filter(function(l){var y=l.matcher;return y(p)}).map(function(l){var y=l.reducer;return y}));return d.filter(function(l){return!!l}).length===0&&(d=[c]),d.reduce(function(l,y){if(y)if(L(l)){var h=l,m=y(h,p);return m===void 0?l:m}else{if(T(l))return kt(l,function(b){return y(b,p)});var m=y(l,p);if(m===void 0){if(l===null)return l;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return l},v)}return s.getInitialState=f,s}function xn(e,t){return e+"/"+t}function jn(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:ze(e.initialState),n=e.reducers||{},o=Object.keys(n),u={},a={},c={};o.forEach(function(s){var v=n[s],p=xn(t,s),d,l;"reducer"in v?(d=v.reducer,l=v.prepare):d=v,u[s]=d,a[p]=d,c[s]=l?U(p,l):U(p)});function f(){var s=typeof e.extraReducers=="function"?Ft(e.extraReducers):[e.extraReducers],v=s[0],p=v===void 0?{}:v,d=s[1],l=d===void 0?[]:d,y=s[2],h=y===void 0?void 0:y,m=D(D({},p),a);return $n(r,function(b){for(var S in m)b.addCase(S,m[S]);for(var x=0,R=l;x<R.length;x++){var H=R[x];b.addMatcher(H.matcher,H.reducer)}h&&b.addDefaultCase(h)})}var i;return{name:t,reducer:function(s,v){return i||(i=f()),i(s,v)},actions:c,caseReducers:u,getInitialState:function(){return i||(i=f()),i.getInitialState()}}}var An="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Cn=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=An[Math.random()*64|0];return t},Rn=["name","message","stack","code"],Ne=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),bt=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),_n=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=Rn;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,r,n){var o=U(t+"/fulfilled",function(i,s,v,p){return{payload:i,meta:Te(D({},p||{}),{arg:v,requestId:s,requestStatus:"fulfilled"})}}),u=U(t+"/pending",function(i,s,v){return{payload:void 0,meta:Te(D({},v||{}),{arg:s,requestId:i,requestStatus:"pending"})}}),a=U(t+"/rejected",function(i,s,v,p,d){return{payload:p,error:(n&&n.serializeError||_n)(i||"Rejected"),meta:Te(D({},d||{}),{arg:v,requestId:s,rejectedWithValue:!!p,requestStatus:"rejected",aborted:(i==null?void 0:i.name)==="AbortError",condition:(i==null?void 0:i.name)==="ConditionError"})}}),c=typeof AbortController<"u"?AbortController:function(){function i(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return i.prototype.abort=function(){},i}();function f(i){return function(s,v,p){var d=n!=null&&n.idGenerator?n.idGenerator(i):Cn(),l=new c,y;function h(b){y=b,l.abort()}var m=function(){return yn(this,null,function(){var b,S,x,R,H,X,tt;return fn(this,function(q){switch(q.label){case 0:return q.trys.push([0,4,,5]),R=(b=n==null?void 0:n.condition)==null?void 0:b.call(n,i,{getState:v,extra:p}),In(R)?[4,R]:[3,2];case 1:R=q.sent(),q.label=2;case 2:if(R===!1||l.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return H=new Promise(function(_,Q){return l.signal.addEventListener("abort",function(){return Q({name:"AbortError",message:y||"Aborted"})})}),s(u(d,i,(S=n==null?void 0:n.getPendingMeta)==null?void 0:S.call(n,{requestId:d,arg:i},{getState:v,extra:p}))),[4,Promise.race([H,Promise.resolve(r(i,{dispatch:s,getState:v,extra:p,requestId:d,signal:l.signal,abort:h,rejectWithValue:function(_,Q){return new Ne(_,Q)},fulfillWithValue:function(_,Q){return new bt(_,Q)}})).then(function(_){if(_ instanceof Ne)throw _;return _ instanceof bt?o(_.payload,d,i,_.meta):o(_,d,i)})])];case 3:return x=q.sent(),[3,5];case 4:return X=q.sent(),x=X instanceof Ne?a(null,d,i,X.payload,X.meta):a(X,d,i),[3,5];case 5:return tt=n&&!n.dispatchConditionRejection&&a.match(x)&&x.meta.condition,tt||s(x),[2,x]}})})}();return Object.assign(m,{abort:h,requestId:d,arg:i,unwrap:function(){return m.then(Mn)}})}}return Object.assign(f,{pending:u,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function Mn(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function In(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var et="listenerMiddleware";U(et+"/add");U(et+"/removeAll");U(et+"/remove");var gt;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Qr();const Tn={currentuser:{}},Vt=jn({name:"auth",initialState:Tn,reducers:{signUpUser:(e,t)=>{e.currentuser=t.payload},loginUser:(e,t)=>{e.currentuser=t.payload},logoutUser:e=>{localStorage.removeItem("currentUser"),e.currentuser={}}}}),{signUpUser:Yn,logoutUser:Jn,loginUser:Nn}=Vt.actions,Zn=Vt.reducer,Dn=P.createContext(null),eo=({children:e})=>{const t=Vr(),[r,n]=P.useState(localStorage.getItem("currentUser")),[o,u]=P.useState(!0),[a,c]=P.useState(!1);function f(d,l){return Yt(te,d,l)}function i(d,l){return Jt(te,d,l)}function s(){return localStorage.removeItem("currentUser"),Zt(te)}async function v(){var y;const d=Kt(Ht(Xt,"users"),Gt("uid","==",r==null?void 0:r.uid)),l=await Qt(d);(y=l==null?void 0:l.docs)==null||y.map(h=>{var m;return((m=h==null?void 0:h.data())==null?void 0:m.roles)==="admin"?(c(!0),!0):(c(!1),!1)})}P.useEffect(()=>te.onAuthStateChanged(l=>{l&&(t(Nn({email:l.email,uid:l.uid,displayName:l.displayName})),localStorage.setItem("currentUser",l)),n(l),u(!1)}),[]),P.useEffect(()=>{v()},[r]);const p={isLoading:o,currentUser:r,login:i,signUp:f,logOut:s,isAdminRole:a};return wt.jsx(Dn.Provider,{value:p,children:e})},to="GET_USER",Un="SET_USER",kn={user:void 0},ro=(e=kn,t)=>{switch(t.type){case Un:{const{user:r}=t;return{...e,user:r}}default:return e}};export{Dn as A,to as G,Gn as H,Xn as P,eo as U,Bn as a,Vn as b,Qn as c,Zn as d,ro as e,Hn as f,Kn as g,Jn as h,Nn as l,sr as s,Vr as u};
//# sourceMappingURL=user-7199dc7e.js.map
