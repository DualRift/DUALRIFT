(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();var Cm={exports:{}},tc={};var ay;function iA(){if(ay)return tc;ay=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:o,type:i,key:c,ref:a!==void 0?a:null,props:l}}return tc.Fragment=t,tc.jsx=e,tc.jsxs=e,tc}var sy;function rA(){return sy||(sy=1,Cm.exports=iA()),Cm.exports}var qt=rA(),Dm={exports:{}},ec={},Um={exports:{}},Nm={};var oy;function aA(){return oy||(oy=1,(function(o){function t(B,H){var K=B.length;B.push(H);t:for(;0<K;){var ft=K-1>>>1,R=B[ft];if(0<a(R,H))B[ft]=H,B[K]=R,K=ft;else break t}}function e(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var H=B[0],K=B.pop();if(K!==H){B[0]=K;t:for(var ft=0,R=B.length,Z=R>>>1;ft<Z;){var dt=2*(ft+1)-1,St=B[dt],wt=dt+1,Pt=B[wt];if(0>a(St,K))wt<R&&0>a(Pt,St)?(B[ft]=Pt,B[wt]=K,ft=wt):(B[ft]=St,B[dt]=K,ft=dt);else if(wt<R&&0>a(Pt,K))B[ft]=Pt,B[wt]=K,ft=wt;else break t}}return H}function a(B,H){var K=B.sortIndex-H.sortIndex;return K!==0?K:B.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,x=null,g=3,v=!1,M=!1,E=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var H=e(d);H!==null;){if(H.callback===null)i(d);else if(H.startTime<=B)i(d),H.sortIndex=H.expirationTime,t(p,H);else break;H=e(d)}}function F(B){if(E=!1,C(B),!M)if(e(p)!==null)M=!0,P||(P=!0,V());else{var H=e(d);H!==null&&X(F,H.startTime-B)}}var P=!1,N=-1,b=5,L=-1;function z(){return S?!0:!(o.unstable_now()-L<b)}function G(){if(S=!1,P){var B=o.unstable_now();L=B;var H=!0;try{t:{M=!1,E&&(E=!1,A(N),N=-1),v=!0;var K=g;try{e:{for(C(B),x=e(p);x!==null&&!(x.expirationTime>B&&z());){var ft=x.callback;if(typeof ft=="function"){x.callback=null,g=x.priorityLevel;var R=ft(x.expirationTime<=B);if(B=o.unstable_now(),typeof R=="function"){x.callback=R,C(B),H=!0;break e}x===e(p)&&i(p),C(B)}else i(p);x=e(p)}if(x!==null)H=!0;else{var Z=e(d);Z!==null&&X(F,Z.startTime-B),H=!1}}break t}finally{x=null,g=K,v=!1}H=void 0}}finally{H?V():P=!1}}}var V;if(typeof D=="function")V=function(){D(G)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,rt=nt.port2;nt.port1.onmessage=G,V=function(){rt.postMessage(null)}}else V=function(){y(G,0)};function X(B,H){N=y(function(){B(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(B){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var K=g;g=H;try{return B()}finally{g=K}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=g;g=B;try{return H()}finally{g=K}},o.unstable_scheduleCallback=function(B,H,K){var ft=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ft+K:ft):K=ft,B){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=K+R,B={id:_++,callback:H,priorityLevel:B,startTime:K,expirationTime:R,sortIndex:-1},K>ft?(B.sortIndex=K,t(d,B),e(p)===null&&B===e(d)&&(E?(A(N),N=-1):E=!0,X(F,K-ft))):(B.sortIndex=R,t(p,B),M||v||(M=!0,P||(P=!0,V()))),B},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(B){var H=g;return function(){var K=g;g=H;try{return B.apply(this,arguments)}finally{g=K}}}})(Nm)),Nm}var ly;function sA(){return ly||(ly=1,Um.exports=aA()),Um.exports}var Lm={exports:{}},Ee={};var uy;function oA(){if(uy)return Ee;uy=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function g(R){return R===null||typeof R!="object"?null:(R=x&&R[x]||R["@@iterator"],typeof R=="function"?R:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(R,Z,dt){this.props=R,this.context=Z,this.refs=E,this.updater=dt||v}S.prototype.isReactComponent={},S.prototype.setState=function(R,Z){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,Z,"setState")},S.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function y(){}y.prototype=S.prototype;function A(R,Z,dt){this.props=R,this.context=Z,this.refs=E,this.updater=dt||v}var D=A.prototype=new y;D.constructor=A,M(D,S.prototype),D.isPureReactComponent=!0;var C=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function N(R,Z,dt,St,wt,Pt){return dt=Pt.ref,{$$typeof:o,type:R,key:Z,ref:dt!==void 0?dt:null,props:Pt}}function b(R,Z){return N(R.type,Z,void 0,void 0,void 0,R.props)}function L(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function z(R){var Z={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(dt){return Z[dt]})}var G=/\/+/g;function V(R,Z){return typeof R=="object"&&R!==null&&R.key!=null?z(""+R.key):Z.toString(36)}function nt(){}function rt(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(nt,nt):(R.status="pending",R.then(function(Z){R.status==="pending"&&(R.status="fulfilled",R.value=Z)},function(Z){R.status==="pending"&&(R.status="rejected",R.reason=Z)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function X(R,Z,dt,St,wt){var Pt=typeof R;(Pt==="undefined"||Pt==="boolean")&&(R=null);var $=!1;if(R===null)$=!0;else switch(Pt){case"bigint":case"string":case"number":$=!0;break;case"object":switch(R.$$typeof){case o:case t:$=!0;break;case _:return $=R._init,X($(R._payload),Z,dt,St,wt)}}if($)return wt=wt(R),$=St===""?"."+V(R,0):St,C(wt)?(dt="",$!=null&&(dt=$.replace(G,"$&/")+"/"),X(wt,Z,dt,"",function(Xt){return Xt})):wt!=null&&(L(wt)&&(wt=b(wt,dt+(wt.key==null||R&&R.key===wt.key?"":(""+wt.key).replace(G,"$&/")+"/")+$)),Z.push(wt)),1;$=0;var Tt=St===""?".":St+":";if(C(R))for(var gt=0;gt<R.length;gt++)St=R[gt],Pt=Tt+V(St,gt),$+=X(St,Z,dt,Pt,wt);else if(gt=g(R),typeof gt=="function")for(R=gt.call(R),gt=0;!(St=R.next()).done;)St=St.value,Pt=Tt+V(St,gt++),$+=X(St,Z,dt,Pt,wt);else if(Pt==="object"){if(typeof R.then=="function")return X(rt(R),Z,dt,St,wt);throw Z=String(R),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return $}function B(R,Z,dt){if(R==null)return R;var St=[],wt=0;return X(R,St,"","",function(Pt){return Z.call(dt,Pt,wt++)}),St}function H(R){if(R._status===-1){var Z=R._result;Z=Z(),Z.then(function(dt){(R._status===0||R._status===-1)&&(R._status=1,R._result=dt)},function(dt){(R._status===0||R._status===-1)&&(R._status=2,R._result=dt)}),R._status===-1&&(R._status=0,R._result=Z)}if(R._status===1)return R._result.default;throw R._result}var K=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function ft(){}return Ee.Children={map:B,forEach:function(R,Z,dt){B(R,function(){Z.apply(this,arguments)},dt)},count:function(R){var Z=0;return B(R,function(){Z++}),Z},toArray:function(R){return B(R,function(Z){return Z})||[]},only:function(R){if(!L(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},Ee.Component=S,Ee.Fragment=e,Ee.Profiler=a,Ee.PureComponent=A,Ee.StrictMode=i,Ee.Suspense=p,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(R){return F.H.useMemoCache(R)}},Ee.cache=function(R){return function(){return R.apply(null,arguments)}},Ee.cloneElement=function(R,Z,dt){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var St=M({},R.props),wt=R.key,Pt=void 0;if(Z!=null)for($ in Z.ref!==void 0&&(Pt=void 0),Z.key!==void 0&&(wt=""+Z.key),Z)!P.call(Z,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&Z.ref===void 0||(St[$]=Z[$]);var $=arguments.length-2;if($===1)St.children=dt;else if(1<$){for(var Tt=Array($),gt=0;gt<$;gt++)Tt[gt]=arguments[gt+2];St.children=Tt}return N(R.type,wt,void 0,void 0,Pt,St)},Ee.createContext=function(R){return R={$$typeof:c,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:l,_context:R},R},Ee.createElement=function(R,Z,dt){var St,wt={},Pt=null;if(Z!=null)for(St in Z.key!==void 0&&(Pt=""+Z.key),Z)P.call(Z,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(wt[St]=Z[St]);var $=arguments.length-2;if($===1)wt.children=dt;else if(1<$){for(var Tt=Array($),gt=0;gt<$;gt++)Tt[gt]=arguments[gt+2];wt.children=Tt}if(R&&R.defaultProps)for(St in $=R.defaultProps,$)wt[St]===void 0&&(wt[St]=$[St]);return N(R,Pt,void 0,void 0,null,wt)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(R){return{$$typeof:f,render:R}},Ee.isValidElement=L,Ee.lazy=function(R){return{$$typeof:_,_payload:{_status:-1,_result:R},_init:H}},Ee.memo=function(R,Z){return{$$typeof:d,type:R,compare:Z===void 0?null:Z}},Ee.startTransition=function(R){var Z=F.T,dt={};F.T=dt;try{var St=R(),wt=F.S;wt!==null&&wt(dt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(ft,K)}catch(Pt){K(Pt)}finally{F.T=Z}},Ee.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},Ee.use=function(R){return F.H.use(R)},Ee.useActionState=function(R,Z,dt){return F.H.useActionState(R,Z,dt)},Ee.useCallback=function(R,Z){return F.H.useCallback(R,Z)},Ee.useContext=function(R){return F.H.useContext(R)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(R,Z){return F.H.useDeferredValue(R,Z)},Ee.useEffect=function(R,Z,dt){var St=F.H;if(typeof dt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(R,Z)},Ee.useId=function(){return F.H.useId()},Ee.useImperativeHandle=function(R,Z,dt){return F.H.useImperativeHandle(R,Z,dt)},Ee.useInsertionEffect=function(R,Z){return F.H.useInsertionEffect(R,Z)},Ee.useLayoutEffect=function(R,Z){return F.H.useLayoutEffect(R,Z)},Ee.useMemo=function(R,Z){return F.H.useMemo(R,Z)},Ee.useOptimistic=function(R,Z){return F.H.useOptimistic(R,Z)},Ee.useReducer=function(R,Z,dt){return F.H.useReducer(R,Z,dt)},Ee.useRef=function(R){return F.H.useRef(R)},Ee.useState=function(R){return F.H.useState(R)},Ee.useSyncExternalStore=function(R,Z,dt){return F.H.useSyncExternalStore(R,Z,dt)},Ee.useTransition=function(){return F.H.useTransition()},Ee.version="19.1.0",Ee}var cy;function W0(){return cy||(cy=1,Lm.exports=oA()),Lm.exports}var Om={exports:{}},vi={};var fy;function lA(){if(fy)return vi;fy=1;var o=W0();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var i={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,d,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:x==null?null:""+x,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return vi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,vi.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,_)},vi.flushSync=function(p){var d=c.T,_=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=d,i.p=_,i.d.f()}},vi.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,i.d.C(p,d))},vi.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},vi.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,x=f(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,v=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?i.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:v}):_==="script"&&i.d.X(p,{crossOrigin:x,integrity:g,fetchPriority:v,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},vi.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);i.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&i.d.M(p)},vi.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,x=f(_,d.crossOrigin);i.d.L(p,_,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},vi.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);i.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else i.d.m(p)},vi.requestFormReset=function(p){i.d.r(p)},vi.unstable_batchedUpdates=function(p,d){return p(d)},vi.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},vi.useFormStatus=function(){return c.H.useHostTransitionStatus()},vi.version="19.1.0",vi}var hy;function uA(){if(hy)return Om.exports;hy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Om.exports=lA(),Om.exports}var dy;function cA(){if(dy)return ec;dy=1;var o=sA(),t=W0(),e=uA();function i(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,s=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(s=r.return),n=r.return;while(n)}return r.tag===3?s:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(i(188))}function p(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(i(188));return r!==n?null:n}for(var s=n,u=r;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){s=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return f(h),n;if(m===u)return f(h),r;m=m.sibling}throw Error(i(188))}if(s.return!==u.return)s=h,u=m;else{for(var T=!1,O=h.child;O;){if(O===s){T=!0,s=h,u=m;break}if(O===u){T=!0,u=h,s=m;break}O=O.sibling}if(!T){for(O=m.child;O;){if(O===s){T=!0,s=m,u=h;break}if(O===u){T=!0,u=m,s=h;break}O=O.sibling}if(!T)throw Error(i(189))}}if(s.alternate!==u)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?n:r}function d(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=d(n),r!==null)return r;n=n.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),z=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var nt=Symbol.for("react.client.reference");function rt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===nt?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case F:return"Suspense";case P:return"SuspenseList";case L:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case v:return"Portal";case D:return(n.displayName||"Context")+".Provider";case A:return(n._context.displayName||"Context")+".Consumer";case C:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case N:return r=n.displayName||null,r!==null?r:rt(n.type)||"Memo";case b:r=n._payload,n=n._init;try{return rt(n(r))}catch{}}return null}var X=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},ft=[],R=-1;function Z(n){return{current:n}}function dt(n){0>R||(n.current=ft[R],ft[R]=null,R--)}function St(n,r){R++,ft[R]=n.current,n.current=r}var wt=Z(null),Pt=Z(null),$=Z(null),Tt=Z(null);function gt(n,r){switch(St($,r),St(Pt,n),St(wt,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?LS(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=LS(r),n=OS(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}dt(wt),St(wt,n)}function Xt(){dt(wt),dt(Pt),dt($)}function ae(n){n.memoizedState!==null&&St(Tt,n);var r=wt.current,s=OS(r,n.type);r!==s&&(St(Pt,n),St(wt,s))}function Qt(n){Pt.current===n&&(dt(wt),dt(Pt)),Tt.current===n&&(dt(Tt),Zu._currentValue=K)}var ve=Object.prototype.hasOwnProperty,Yt=o.unstable_scheduleCallback,se=o.unstable_cancelCallback,ye=o.unstable_shouldYield,oe=o.unstable_requestPaint,at=o.unstable_now,we=o.unstable_getCurrentPriorityLevel,_n=o.unstable_ImmediatePriority,q=o.unstable_UserBlockingPriority,me=o.unstable_NormalPriority,he=o.unstable_LowPriority,Ue=o.unstable_IdlePriority,It=o.log,xe=o.unstable_setDisableYieldValue,I=null,w=null;function Q(n){if(typeof It=="function"&&xe(n),w&&typeof w.setStrictMode=="function")try{w.setStrictMode(I,n)}catch{}}var ht=Math.clz32?Math.clz32:At,Et=Math.log,Ot=Math.LN2;function At(n){return n>>>=0,n===0?32:31-(Et(n)/Ot|0)|0}var pt=256,_t=4194304;function Ft(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Vt(n,r,s){var u=n.pendingLanes;if(u===0)return 0;var h=0,m=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var O=u&134217727;return O!==0?(u=O&~m,u!==0?h=Ft(u):(T&=O,T!==0?h=Ft(T):s||(s=O&~n,s!==0&&(h=Ft(s))))):(O=u&~m,O!==0?h=Ft(O):T!==0?h=Ft(T):s||(s=u&~n,s!==0&&(h=Ft(s)))),h===0?0:r!==0&&r!==h&&(r&m)===0&&(m=h&-h,s=r&-r,m>=s||m===32&&(s&4194048)!==0)?r:h}function Dt(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Nt(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var n=pt;return pt<<=1,(pt&4194048)===0&&(pt=256),n}function le(){var n=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),n}function de(n){for(var r=[],s=0;31>s;s++)r.push(n);return r}function W(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ct(n,r,s,u,h,m){var T=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var O=n.entanglements,k=n.expirationTimes,st=n.hiddenUpdates;for(s=T&~s;0<s;){var vt=31-ht(s),Mt=1<<vt;O[vt]=0,k[vt]=-1;var ut=st[vt];if(ut!==null)for(st[vt]=null,vt=0;vt<ut.length;vt++){var ct=ut[vt];ct!==null&&(ct.lane&=-536870913)}s&=~Mt}u!==0&&mt(n,u,0),m!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=m&~(T&~r))}function mt(n,r,s){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-ht(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|s&4194090}function Ht(n,r){var s=n.entangledLanes|=r;for(n=n.entanglements;s;){var u=31-ht(s),h=1<<u;h&r|n[u]&r&&(n[u]|=r),s&=~h}}function Ut(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function bt(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Rt(){var n=H.p;return n!==0?n:(n=window.event,n===void 0?32:$S(n.type))}function Lt(n,r){var s=H.p;try{return H.p=n,r()}finally{H.p=s}}var ne=Math.random().toString(36).slice(2),xt="__reactFiber$"+ne,Jt="__reactProps$"+ne,jt="__reactContainer$"+ne,ue="__reactEvents$"+ne,Dn="__reactListeners$"+ne,be="__reactHandles$"+ne,fn="__reactResources$"+ne,Qe="__reactMarker$"+ne;function Je(n){delete n[xt],delete n[Jt],delete n[ue],delete n[Dn],delete n[be]}function ke(n){var r=n[xt];if(r)return r;for(var s=n.parentNode;s;){if(r=s[jt]||s[xt]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(n=BS(n);n!==null;){if(s=n[xt])return s;n=BS(n)}return r}n=s,s=n.parentNode}return null}function Pe(n){if(n=n[xt]||n[jt]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function Un(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(i(33))}function We(n){var r=n[fn];return r||(r=n[fn]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Fe(n){n[Qe]=!0}var _i=new Set,bn={};function hn(n,r){xn(n,r),xn(n+"Capture",r)}function xn(n,r){for(bn[n]=r,n=0;n<r.length;n++)_i.add(r[n])}var Hr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ya={},Fn={};function Tn(n){return ve.call(Fn,n)?!0:ve.call(ya,n)?!1:Hr.test(n)?Fn[n]=!0:(ya[n]=!0,!1)}function li(n,r,s){if(Tn(r))if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+s)}}function U(n,r,s){if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+s)}}function j(n,r,s,u){if(u===null)n.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(r,s,""+u)}}var lt,tt;function et(n){if(lt===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);lt=r&&r[1]||"",tt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lt+n+tt}var zt=!1;function Gt(n,r){if(!n||zt)return"";zt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ct){var ut=ct}Reflect.construct(n,[],Mt)}else{try{Mt.call()}catch(ct){ut=ct}n.call(Mt.prototype)}}else{try{throw Error()}catch(ct){ut=ct}(Mt=n())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ct){if(ct&&ut&&typeof ct.stack=="string")return[ct.stack,ut.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),T=m[0],O=m[1];if(T&&O){var k=T.split(`
`),st=O.split(`
`);for(h=u=0;u<k.length&&!k[u].includes("DetermineComponentFrameRoot");)u++;for(;h<st.length&&!st[h].includes("DetermineComponentFrameRoot");)h++;if(u===k.length||h===st.length)for(u=k.length-1,h=st.length-1;1<=u&&0<=h&&k[u]!==st[h];)h--;for(;1<=u&&0<=h;u--,h--)if(k[u]!==st[h]){if(u!==1||h!==1)do if(u--,h--,0>h||k[u]!==st[h]){var vt=`
`+k[u].replace(" at new "," at ");return n.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",n.displayName)),vt}while(1<=u&&0<=h);break}}}finally{zt=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?et(s):""}function kt(n){switch(n.tag){case 26:case 27:case 5:return et(n.type);case 16:return et("Lazy");case 13:return et("Suspense");case 19:return et("SuspenseList");case 0:case 15:return Gt(n.type,!1);case 11:return Gt(n.type.render,!1);case 1:return Gt(n.type,!0);case 31:return et("Activity");default:return""}}function ee(n){try{var r="";do r+=kt(n),n=n.return;while(n);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Zt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ge(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Me(n){var r=ge(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,m=s.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(T){u=""+T,m.call(this,T)}}),Object.defineProperty(n,r,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ie(n){n._valueTracker||(n._valueTracker=Me(n))}function je(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var s=r.getValue(),u="";return n&&(u=ge(n)?n.checked?"true":"false":n.value),n=u,n!==s?(r.setValue(n),!0):!1}function gn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Sn=/[\n"\\]/g;function Te(n){return n.replace(Sn,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Vn(n,r,s,u,h,m,T,O){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),r!=null?T==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+Zt(r)):n.value!==""+Zt(r)&&(n.value=""+Zt(r)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),r!=null?ui(n,T,Zt(r)):s!=null?ui(n,T,Zt(s)):u!=null&&n.removeAttribute("value"),h==null&&m!=null&&(n.defaultChecked=!!m),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?n.name=""+Zt(O):n.removeAttribute("name")}function Kt(n,r,s,u,h,m,T,O){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),r!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;s=s!=null?""+Zt(s):"",r=r!=null?""+Zt(r):s,O||r===n.value||(n.value=r),n.defaultValue=r}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=O?n.checked:!!u,n.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function ui(n,r,s){r==="number"&&gn(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Ae(n,r,s,u){if(n=n.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=r.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&u&&(n[s].defaultSelected=!0)}else{for(s=""+Zt(s),r=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Ri(n,r,s){if(r!=null&&(r=""+Zt(r),r!==n.value&&(n.value=r),s==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=s!=null?""+Zt(s):""}function Ji(n,r,s,u){if(r==null){if(u!=null){if(s!=null)throw Error(i(92));if(X(u)){if(1<u.length)throw Error(i(93));u=u[0]}s=u}s==null&&(s=""),r=s}s=Zt(r),n.defaultValue=s,u=n.textContent,u===s&&u!==""&&u!==null&&(n.value=u)}function wi(n,r){if(r){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=r;return}}n.textContent=r}var ts=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $e(n,r,s){var u=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,s):typeof s!="number"||s===0||ts.has(r)?r==="float"?n.cssFloat=s:n[r]=(""+s).trim():n[r]=s+"px"}function yn(n,r,s){if(r!=null&&typeof r!="object")throw Error(i(62));if(n=n.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var h in r)u=r[h],r.hasOwnProperty(h)&&s[h]!==u&&$e(n,h,u)}else for(var m in r)r.hasOwnProperty(m)&&$e(n,m,r[m])}function Sr(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var on=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$r=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gr(n){return $r.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Ho=null;function Dd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Go=null,Vo=null;function Pg(n){var r=Pe(n);if(r&&(n=r.stateNode)){var s=n[Jt]||null;t:switch(n=r.stateNode,r.type){case"input":if(Vn(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Te(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var u=s[r];if(u!==n&&u.form===n.form){var h=u[Jt]||null;if(!h)throw Error(i(90));Vn(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)u=s[r],u.form===n.form&&je(u)}break t;case"textarea":Ri(n,s.value,s.defaultValue);break t;case"select":r=s.value,r!=null&&Ae(n,!!s.multiple,r,!1)}}}var Ud=!1;function Fg(n,r,s){if(Ud)return n(r,s);Ud=!0;try{var u=n(r);return u}finally{if(Ud=!1,(Go!==null||Vo!==null)&&(Ff(),Go&&(r=Go,n=Vo,Vo=Go=null,Pg(r),n)))for(r=0;r<n.length;r++)Pg(n[r])}}function lu(n,r){var s=n.stateNode;if(s===null)return null;var u=s[Jt]||null;if(u===null)return null;s=u[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break t;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(i(231,r,typeof s));return s}var Ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nd=!1;if(Ma)try{var uu={};Object.defineProperty(uu,"passive",{get:function(){Nd=!0}}),window.addEventListener("test",uu,uu),window.removeEventListener("test",uu,uu)}catch{Nd=!1}var es=null,Ld=null,Qc=null;function Ig(){if(Qc)return Qc;var n,r=Ld,s=r.length,u,h="value"in es?es.value:es.textContent,m=h.length;for(n=0;n<s&&r[n]===h[n];n++);var T=s-n;for(u=1;u<=T&&r[s-u]===h[m-u];u++);return Qc=h.slice(n,1<u?1-u:void 0)}function Jc(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function $c(){return!0}function Bg(){return!1}function Bi(n){function r(s,u,h,m,T){this._reactName=s,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(s=n[O],this[O]=s?s(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?$c:Bg,this.isPropagationStopped=Bg,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=$c)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=$c)},persist:function(){},isPersistent:$c}),r}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=Bi(Ys),cu=_({},Ys,{view:0,detail:0}),ib=Bi(cu),Od,Pd,fu,ef=_({},cu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Id,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fu&&(fu&&n.type==="mousemove"?(Od=n.screenX-fu.screenX,Pd=n.screenY-fu.screenY):Pd=Od=0,fu=n),Od)},movementY:function(n){return"movementY"in n?n.movementY:Pd}}),zg=Bi(ef),rb=_({},ef,{dataTransfer:0}),ab=Bi(rb),sb=_({},cu,{relatedTarget:0}),Fd=Bi(sb),ob=_({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),lb=Bi(ob),ub=_({},Ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),cb=Bi(ub),fb=_({},Ys,{data:0}),Hg=Bi(fb),hb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},db={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mb(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=pb[n])?!!r[n]:!1}function Id(){return mb}var _b=_({},cu,{key:function(n){if(n.key){var r=hb[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Jc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?db[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Id,charCode:function(n){return n.type==="keypress"?Jc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gb=Bi(_b),vb=_({},ef,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gg=Bi(vb),xb=_({},cu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Id}),Sb=Bi(xb),yb=_({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mb=Bi(yb),Eb=_({},ef,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),bb=Bi(Eb),Tb=_({},Ys,{newState:0,oldState:0}),Ab=Bi(Tb),Rb=[9,13,27,32],Bd=Ma&&"CompositionEvent"in window,hu=null;Ma&&"documentMode"in document&&(hu=document.documentMode);var wb=Ma&&"TextEvent"in window&&!hu,Vg=Ma&&(!Bd||hu&&8<hu&&11>=hu),kg=" ",Xg=!1;function Wg(n,r){switch(n){case"keyup":return Rb.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ko=!1;function Cb(n,r){switch(n){case"compositionend":return Yg(r);case"keypress":return r.which!==32?null:(Xg=!0,kg);case"textInput":return n=r.data,n===kg&&Xg?null:n;default:return null}}function Db(n,r){if(ko)return n==="compositionend"||!Bd&&Wg(n,r)?(n=Ig(),Qc=Ld=es=null,ko=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Vg&&r.locale!=="ko"?null:r.data;default:return null}}var Ub={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qg(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Ub[n.type]:r==="textarea"}function jg(n,r,s,u){Go?Vo?Vo.push(u):Vo=[u]:Go=u,r=Vf(r,"onChange"),0<r.length&&(s=new tf("onChange","change",null,s,u),n.push({event:s,listeners:r}))}var du=null,pu=null;function Nb(n){wS(n,0)}function nf(n){var r=Un(n);if(je(r))return n}function Zg(n,r){if(n==="change")return r}var Kg=!1;if(Ma){var zd;if(Ma){var Hd="oninput"in document;if(!Hd){var Qg=document.createElement("div");Qg.setAttribute("oninput","return;"),Hd=typeof Qg.oninput=="function"}zd=Hd}else zd=!1;Kg=zd&&(!document.documentMode||9<document.documentMode)}function Jg(){du&&(du.detachEvent("onpropertychange",$g),pu=du=null)}function $g(n){if(n.propertyName==="value"&&nf(pu)){var r=[];jg(r,pu,n,Dd(n)),Fg(Nb,r)}}function Lb(n,r,s){n==="focusin"?(Jg(),du=r,pu=s,du.attachEvent("onpropertychange",$g)):n==="focusout"&&Jg()}function Ob(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return nf(pu)}function Pb(n,r){if(n==="click")return nf(r)}function Fb(n,r){if(n==="input"||n==="change")return nf(r)}function Ib(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var $i=typeof Object.is=="function"?Object.is:Ib;function mu(n,r){if($i(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var s=Object.keys(n),u=Object.keys(r);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var h=s[u];if(!ve.call(r,h)||!$i(n[h],r[h]))return!1}return!0}function tv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ev(n,r){var s=tv(n);n=0;for(var u;s;){if(s.nodeType===3){if(u=n+s.textContent.length,n<=r&&u>=r)return{node:s,offset:r-n};n=u}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=tv(s)}}function nv(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?nv(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function iv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=gn(n.document);r instanceof n.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)n=r.contentWindow;else break;r=gn(n.document)}return r}function Gd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var Bb=Ma&&"documentMode"in document&&11>=document.documentMode,Xo=null,Vd=null,_u=null,kd=!1;function rv(n,r,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;kd||Xo==null||Xo!==gn(u)||(u=Xo,"selectionStart"in u&&Gd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_u&&mu(_u,u)||(_u=u,u=Vf(Vd,"onSelect"),0<u.length&&(r=new tf("onSelect","select",null,r,s),n.push({event:r,listeners:u}),r.target=Xo)))}function qs(n,r){var s={};return s[n.toLowerCase()]=r.toLowerCase(),s["Webkit"+n]="webkit"+r,s["Moz"+n]="moz"+r,s}var Wo={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionrun:qs("Transition","TransitionRun"),transitionstart:qs("Transition","TransitionStart"),transitioncancel:qs("Transition","TransitionCancel"),transitionend:qs("Transition","TransitionEnd")},Xd={},av={};Ma&&(av=document.createElement("div").style,"AnimationEvent"in window||(delete Wo.animationend.animation,delete Wo.animationiteration.animation,delete Wo.animationstart.animation),"TransitionEvent"in window||delete Wo.transitionend.transition);function js(n){if(Xd[n])return Xd[n];if(!Wo[n])return n;var r=Wo[n],s;for(s in r)if(r.hasOwnProperty(s)&&s in av)return Xd[n]=r[s];return n}var sv=js("animationend"),ov=js("animationiteration"),lv=js("animationstart"),zb=js("transitionrun"),Hb=js("transitionstart"),Gb=js("transitioncancel"),uv=js("transitionend"),cv=new Map,Wd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wd.push("scrollEnd");function Vr(n,r){cv.set(n,r),hn(r,[n])}var fv=new WeakMap;function yr(n,r){if(typeof n=="object"&&n!==null){var s=fv.get(n);return s!==void 0?s:(r={value:n,source:r,stack:ee(r)},fv.set(n,r),r)}return{value:n,source:r,stack:ee(r)}}var Mr=[],Yo=0,Yd=0;function rf(){for(var n=Yo,r=Yd=Yo=0;r<n;){var s=Mr[r];Mr[r++]=null;var u=Mr[r];Mr[r++]=null;var h=Mr[r];Mr[r++]=null;var m=Mr[r];if(Mr[r++]=null,u!==null&&h!==null){var T=u.pending;T===null?h.next=h:(h.next=T.next,T.next=h),u.pending=h}m!==0&&hv(s,h,m)}}function af(n,r,s,u){Mr[Yo++]=n,Mr[Yo++]=r,Mr[Yo++]=s,Mr[Yo++]=u,Yd|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function qd(n,r,s,u){return af(n,r,s,u),sf(n)}function qo(n,r){return af(n,null,null,r),sf(n)}function hv(n,r,s){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s);for(var h=!1,m=n.return;m!==null;)m.childLanes|=s,u=m.alternate,u!==null&&(u.childLanes|=s),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(h=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,h&&r!==null&&(h=31-ht(s),n=m.hiddenUpdates,u=n[h],u===null?n[h]=[r]:u.push(r),r.lane=s|536870912),m):null}function sf(n){if(50<Gu)throw Gu=0,$p=null,Error(i(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var jo={};function Vb(n,r,s,u){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tr(n,r,s,u){return new Vb(n,r,s,u)}function jd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ea(n,r){var s=n.alternate;return s===null?(s=tr(n.tag,r,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=r,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,r=n.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function dv(n,r){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,r=s.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function of(n,r,s,u,h,m){var T=0;if(u=n,typeof n=="function")jd(n)&&(T=1);else if(typeof n=="string")T=XT(n,s,wt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case L:return n=tr(31,s,r,h),n.elementType=L,n.lanes=m,n;case M:return Zs(s.children,h,m,r);case E:T=8,h|=24;break;case S:return n=tr(12,s,r,h|2),n.elementType=S,n.lanes=m,n;case F:return n=tr(13,s,r,h),n.elementType=F,n.lanes=m,n;case P:return n=tr(19,s,r,h),n.elementType=P,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case y:case D:T=10;break t;case A:T=9;break t;case C:T=11;break t;case N:T=14;break t;case b:T=16,u=null;break t}T=29,s=Error(i(130,n===null?"null":typeof n,"")),u=null}return r=tr(T,s,r,h),r.elementType=n,r.type=u,r.lanes=m,r}function Zs(n,r,s,u){return n=tr(7,n,u,r),n.lanes=s,n}function Zd(n,r,s){return n=tr(6,n,null,r),n.lanes=s,n}function Kd(n,r,s){return r=tr(4,n.children!==null?n.children:[],n.key,r),r.lanes=s,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Zo=[],Ko=0,lf=null,uf=0,Er=[],br=0,Ks=null,ba=1,Ta="";function Qs(n,r){Zo[Ko++]=uf,Zo[Ko++]=lf,lf=n,uf=r}function pv(n,r,s){Er[br++]=ba,Er[br++]=Ta,Er[br++]=Ks,Ks=n;var u=ba;n=Ta;var h=32-ht(u)-1;u&=~(1<<h),s+=1;var m=32-ht(r)+h;if(30<m){var T=h-h%5;m=(u&(1<<T)-1).toString(32),u>>=T,h-=T,ba=1<<32-ht(r)+h|s<<h|u,Ta=m+n}else ba=1<<m|s<<h|u,Ta=n}function Qd(n){n.return!==null&&(Qs(n,1),pv(n,1,0))}function Jd(n){for(;n===lf;)lf=Zo[--Ko],Zo[Ko]=null,uf=Zo[--Ko],Zo[Ko]=null;for(;n===Ks;)Ks=Er[--br],Er[br]=null,Ta=Er[--br],Er[br]=null,ba=Er[--br],Er[br]=null}var Ci=null,Nn=null,Ze=!1,Js=null,ta=!1,$d=Error(i(519));function $s(n){var r=Error(i(418,""));throw xu(yr(r,n)),$d}function mv(n){var r=n.stateNode,s=n.type,u=n.memoizedProps;switch(r[xt]=n,r[Jt]=u,s){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(s=0;s<ku.length;s++)Be(ku[s],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":Be("invalid",r),Kt(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),ie(r);break;case"select":Be("invalid",r);break;case"textarea":Be("invalid",r),Ji(r,u.value,u.defaultValue,u.children),ie(r)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||u.suppressHydrationWarning===!0||NS(r.textContent,s)?(u.popover!=null&&(Be("beforetoggle",r),Be("toggle",r)),u.onScroll!=null&&Be("scroll",r),u.onScrollEnd!=null&&Be("scrollend",r),u.onClick!=null&&(r.onclick=kf),r=!0):r=!1,r||$s(n)}function _v(n){for(Ci=n.return;Ci;)switch(Ci.tag){case 5:case 13:ta=!1;return;case 27:case 3:ta=!0;return;default:Ci=Ci.return}}function gu(n){if(n!==Ci)return!1;if(!Ze)return _v(n),Ze=!0,!1;var r=n.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||mm(n.type,n.memoizedProps)),s=!s),s&&Nn&&$s(n),_v(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));t:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(r===0){Nn=Xr(n.nextSibling);break t}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;n=n.nextSibling}Nn=null}}else r===27?(r=Nn,gs(n.type)?(n=xm,xm=null,Nn=n):Nn=r):Nn=Ci?Xr(n.stateNode.nextSibling):null;return!0}function vu(){Nn=Ci=null,Ze=!1}function gv(){var n=Js;return n!==null&&(Gi===null?Gi=n:Gi.push.apply(Gi,n),Js=null),n}function xu(n){Js===null?Js=[n]:Js.push(n)}var tp=Z(null),to=null,Aa=null;function ns(n,r,s){St(tp,r._currentValue),r._currentValue=s}function Ra(n){n._currentValue=tp.current,dt(tp)}function ep(n,r,s){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===s)break;n=n.return}}function np(n,r,s,u){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var m=h.dependencies;if(m!==null){var T=h.child;m=m.firstContext;t:for(;m!==null;){var O=m;m=h;for(var k=0;k<r.length;k++)if(O.context===r[k]){m.lanes|=s,O=m.alternate,O!==null&&(O.lanes|=s),ep(m.return,s,n),u||(T=null);break t}m=O.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(i(341));T.lanes|=s,m=T.alternate,m!==null&&(m.lanes|=s),ep(T,s,n),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===n){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function Su(n,r,s,u){n=null;for(var h=r,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var O=h.type;$i(h.pendingProps.value,T.value)||(n!==null?n.push(O):n=[O])}}else if(h===Tt.current){if(T=h.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(Zu):n=[Zu])}h=h.return}n!==null&&np(r,n,s,u),r.flags|=262144}function cf(n){for(n=n.firstContext;n!==null;){if(!$i(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function eo(n){to=n,Aa=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function gi(n){return vv(to,n)}function ff(n,r){return to===null&&eo(n),vv(n,r)}function vv(n,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Aa===null){if(n===null)throw Error(i(308));Aa=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Aa=Aa.next=r;return s}var kb=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(s,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(s){return s()})}},Xb=o.unstable_scheduleCallback,Wb=o.unstable_NormalPriority,Zn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ip(){return{controller:new kb,data:new Map,refCount:0}}function yu(n){n.refCount--,n.refCount===0&&Xb(Wb,function(){n.controller.abort()})}var Mu=null,rp=0,Qo=0,Jo=null;function Yb(n,r){if(Mu===null){var s=Mu=[];rp=0,Qo=sm(),Jo={status:"pending",value:void 0,then:function(u){s.push(u)}}}return rp++,r.then(xv,xv),r}function xv(){if(--rp===0&&Mu!==null){Jo!==null&&(Jo.status="fulfilled");var n=Mu;Mu=null,Qo=0,Jo=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function qb(n,r){var s=[],u={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(u.status="rejected",u.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),u}var Sv=B.S;B.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Yb(n,r),Sv!==null&&Sv(n,r)};var no=Z(null);function ap(){var n=no.current;return n!==null?n:vn.pooledCache}function hf(n,r){r===null?St(no,no.current):St(no,r.pool)}function yv(){var n=ap();return n===null?null:{parent:Zn._currentValue,pool:n}}var Eu=Error(i(460)),Mv=Error(i(474)),df=Error(i(542)),sp={then:function(){}};function Ev(n){return n=n.status,n==="fulfilled"||n==="rejected"}function pf(){}function bv(n,r,s){switch(s=n[s],s===void 0?n.push(r):s!==r&&(r.then(pf,pf),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Av(n),n;default:if(typeof r.status=="string")r.then(pf,pf);else{if(n=vn,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=u}},function(u){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Av(n),n}throw bu=r,Eu}}var bu=null;function Tv(){if(bu===null)throw Error(i(459));var n=bu;return bu=null,n}function Av(n){if(n===Eu||n===df)throw Error(i(483))}var is=!1;function op(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function rs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function as(n,r,s){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(nn&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,r=sf(n),hv(n,null,s),r}return af(n,u,r,s),sf(n)}function Tu(n,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,s|=u,r.lanes=s,Ht(n,s)}}function up(n,r){var s=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var T={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=T:m=m.next=T,s=s.next}while(s!==null);m===null?h=m=r:m=m.next=r}else h=m=r;s={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=r:n.next=r,s.lastBaseUpdate=r}var cp=!1;function Au(){if(cp){var n=Jo;if(n!==null)throw n}}function Ru(n,r,s,u){cp=!1;var h=n.updateQueue;is=!1;var m=h.firstBaseUpdate,T=h.lastBaseUpdate,O=h.shared.pending;if(O!==null){h.shared.pending=null;var k=O,st=k.next;k.next=null,T===null?m=st:T.next=st,T=k;var vt=n.alternate;vt!==null&&(vt=vt.updateQueue,O=vt.lastBaseUpdate,O!==T&&(O===null?vt.firstBaseUpdate=st:O.next=st,vt.lastBaseUpdate=k))}if(m!==null){var Mt=h.baseState;T=0,vt=st=k=null,O=m;do{var ut=O.lane&-536870913,ct=ut!==O.lane;if(ct?(Xe&ut)===ut:(u&ut)===ut){ut!==0&&ut===Qo&&(cp=!0),vt!==null&&(vt=vt.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});t:{var pe=n,ce=O;ut=r;var cn=s;switch(ce.tag){case 1:if(pe=ce.payload,typeof pe=="function"){Mt=pe.call(cn,Mt,ut);break t}Mt=pe;break t;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=ce.payload,ut=typeof pe=="function"?pe.call(cn,Mt,ut):pe,ut==null)break t;Mt=_({},Mt,ut);break t;case 2:is=!0}}ut=O.callback,ut!==null&&(n.flags|=64,ct&&(n.flags|=8192),ct=h.callbacks,ct===null?h.callbacks=[ut]:ct.push(ut))}else ct={lane:ut,tag:O.tag,payload:O.payload,callback:O.callback,next:null},vt===null?(st=vt=ct,k=Mt):vt=vt.next=ct,T|=ut;if(O=O.next,O===null){if(O=h.shared.pending,O===null)break;ct=O,O=ct.next,ct.next=null,h.lastBaseUpdate=ct,h.shared.pending=null}}while(!0);vt===null&&(k=Mt),h.baseState=k,h.firstBaseUpdate=st,h.lastBaseUpdate=vt,m===null&&(h.shared.lanes=0),ds|=T,n.lanes=T,n.memoizedState=Mt}}function Rv(n,r){if(typeof n!="function")throw Error(i(191,n));n.call(r)}function wv(n,r){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)Rv(s[n],r)}var $o=Z(null),mf=Z(0);function Cv(n,r){n=Oa,St(mf,n),St($o,r),Oa=n|r.baseLanes}function fp(){St(mf,Oa),St($o,$o.current)}function hp(){Oa=mf.current,dt($o),dt(mf)}var ss=0,Ce=null,ln=null,kn=null,_f=!1,tl=!1,io=!1,gf=0,wu=0,el=null,jb=0;function In(){throw Error(i(321))}function dp(n,r){if(r===null)return!1;for(var s=0;s<r.length&&s<n.length;s++)if(!$i(n[s],r[s]))return!1;return!0}function pp(n,r,s,u,h,m){return ss=m,Ce=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,B.H=n===null||n.memoizedState===null?hx:dx,io=!1,m=s(u,h),io=!1,tl&&(m=Uv(r,s,u,h)),Dv(n),m}function Dv(n){B.H=Ef;var r=ln!==null&&ln.next!==null;if(ss=0,kn=ln=Ce=null,_f=!1,wu=0,el=null,r)throw Error(i(300));n===null||ei||(n=n.dependencies,n!==null&&cf(n)&&(ei=!0))}function Uv(n,r,s,u){Ce=n;var h=0;do{if(tl&&(el=null),wu=0,tl=!1,25<=h)throw Error(i(301));if(h+=1,kn=ln=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=eT,m=r(s,u)}while(tl);return m}function Zb(){var n=B.H,r=n.useState()[0];return r=typeof r.then=="function"?Cu(r):r,n=n.useState()[0],(ln!==null?ln.memoizedState:null)!==n&&(Ce.flags|=1024),r}function mp(){var n=gf!==0;return gf=0,n}function _p(n,r,s){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~s}function gp(n){if(_f){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}_f=!1}ss=0,kn=ln=Ce=null,tl=!1,wu=gf=0,el=null}function zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kn===null?Ce.memoizedState=kn=n:kn=kn.next=n,kn}function Xn(){if(ln===null){var n=Ce.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var r=kn===null?Ce.memoizedState:kn.next;if(r!==null)kn=r,ln=n;else{if(n===null)throw Ce.alternate===null?Error(i(467)):Error(i(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},kn===null?Ce.memoizedState=kn=n:kn=kn.next=n}return kn}function vp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cu(n){var r=wu;return wu+=1,el===null&&(el=[]),n=bv(el,n,r),r=Ce,(kn===null?r.memoizedState:kn.next)===null&&(r=r.alternate,B.H=r===null||r.memoizedState===null?hx:dx),n}function vf(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Cu(n);if(n.$$typeof===D)return gi(n)}throw Error(i(438,String(n)))}function xp(n){var r=null,s=Ce.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var u=Ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=vp(),Ce.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(n),u=0;u<n;u++)s[u]=z;return r.index++,s}function wa(n,r){return typeof r=="function"?r(n):r}function xf(n){var r=Xn();return Sp(r,ln,n)}function Sp(n,r,s){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=s;var h=n.baseQueue,m=u.pending;if(m!==null){if(h!==null){var T=h.next;h.next=m.next,m.next=T}r.baseQueue=h=m,u.pending=null}if(m=n.baseState,h===null)n.memoizedState=m;else{r=h.next;var O=T=null,k=null,st=r,vt=!1;do{var Mt=st.lane&-536870913;if(Mt!==st.lane?(Xe&Mt)===Mt:(ss&Mt)===Mt){var ut=st.revertLane;if(ut===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Mt===Qo&&(vt=!0);else if((ss&ut)===ut){st=st.next,ut===Qo&&(vt=!0);continue}else Mt={lane:0,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},k===null?(O=k=Mt,T=m):k=k.next=Mt,Ce.lanes|=ut,ds|=ut;Mt=st.action,io&&s(m,Mt),m=st.hasEagerState?st.eagerState:s(m,Mt)}else ut={lane:Mt,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},k===null?(O=k=ut,T=m):k=k.next=ut,Ce.lanes|=Mt,ds|=Mt;st=st.next}while(st!==null&&st!==r);if(k===null?T=m:k.next=O,!$i(m,n.memoizedState)&&(ei=!0,vt&&(s=Jo,s!==null)))throw s;n.memoizedState=m,n.baseState=T,n.baseQueue=k,u.lastRenderedState=m}return h===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function yp(n){var r=Xn(),s=r.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=n;var u=s.dispatch,h=s.pending,m=r.memoizedState;if(h!==null){s.pending=null;var T=h=h.next;do m=n(m,T.action),T=T.next;while(T!==h);$i(m,r.memoizedState)||(ei=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),s.lastRenderedState=m}return[m,u]}function Nv(n,r,s){var u=Ce,h=Xn(),m=Ze;if(m){if(s===void 0)throw Error(i(407));s=s()}else s=r();var T=!$i((ln||h).memoizedState,s);T&&(h.memoizedState=s,ei=!0),h=h.queue;var O=Pv.bind(null,u,h,n);if(Du(2048,8,O,[n]),h.getSnapshot!==r||T||kn!==null&&kn.memoizedState.tag&1){if(u.flags|=2048,nl(9,Sf(),Ov.bind(null,u,h,s,r),null),vn===null)throw Error(i(349));m||(ss&124)!==0||Lv(u,r,s)}return s}function Lv(n,r,s){n.flags|=16384,n={getSnapshot:r,value:s},r=Ce.updateQueue,r===null?(r=vp(),Ce.updateQueue=r,r.stores=[n]):(s=r.stores,s===null?r.stores=[n]:s.push(n))}function Ov(n,r,s,u){r.value=s,r.getSnapshot=u,Fv(r)&&Iv(n)}function Pv(n,r,s){return s(function(){Fv(r)&&Iv(n)})}function Fv(n){var r=n.getSnapshot;n=n.value;try{var s=r();return!$i(n,s)}catch{return!0}}function Iv(n){var r=qo(n,2);r!==null&&ar(r,n,2)}function Mp(n){var r=zi();if(typeof n=="function"){var s=n;if(n=s(),io){Q(!0);try{s()}finally{Q(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},r}function Bv(n,r,s,u){return n.baseState=s,Sp(n,ln,typeof u=="function"?u:wa)}function Kb(n,r,s,u,h){if(Mf(n))throw Error(i(485));if(n=r.action,n!==null){var m={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};B.T!==null?s(!0):m.isTransition=!1,u(m),s=r.pending,s===null?(m.next=r.pending=m,zv(r,m)):(m.next=s.next,r.pending=s.next=m)}}function zv(n,r){var s=r.action,u=r.payload,h=n.state;if(r.isTransition){var m=B.T,T={};B.T=T;try{var O=s(h,u),k=B.S;k!==null&&k(T,O),Hv(n,r,O)}catch(st){Ep(n,r,st)}finally{B.T=m}}else try{m=s(h,u),Hv(n,r,m)}catch(st){Ep(n,r,st)}}function Hv(n,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){Gv(n,r,u)},function(u){return Ep(n,r,u)}):Gv(n,r,s)}function Gv(n,r,s){r.status="fulfilled",r.value=s,Vv(r),n.state=s,r=n.pending,r!==null&&(s=r.next,s===r?n.pending=null:(s=s.next,r.next=s,zv(n,s)))}function Ep(n,r,s){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=s,Vv(r),r=r.next;while(r!==u)}n.action=null}function Vv(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function kv(n,r){return r}function Xv(n,r){if(Ze){var s=vn.formState;if(s!==null){t:{var u=Ce;if(Ze){if(Nn){e:{for(var h=Nn,m=ta;h.nodeType!==8;){if(!m){h=null;break e}if(h=Xr(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Nn=Xr(h.nextSibling),u=h.data==="F!";break t}}$s(u)}u=!1}u&&(r=s[0])}}return s=zi(),s.memoizedState=s.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:r},s.queue=u,s=ux.bind(null,Ce,u),u.dispatch=s,u=Mp(!1),m=wp.bind(null,Ce,!1,u.queue),u=zi(),h={state:r,dispatch:null,action:n,pending:null},u.queue=h,s=Kb.bind(null,Ce,h,m,s),h.dispatch=s,u.memoizedState=n,[r,s,!1]}function Wv(n){var r=Xn();return Yv(r,ln,n)}function Yv(n,r,s){if(r=Sp(n,r,kv)[0],n=xf(wa)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Cu(r)}catch(T){throw T===Eu?df:T}else u=r;r=Xn();var h=r.queue,m=h.dispatch;return s!==r.memoizedState&&(Ce.flags|=2048,nl(9,Sf(),Qb.bind(null,h,s),null)),[u,m,n]}function Qb(n,r){n.action=r}function qv(n){var r=Xn(),s=ln;if(s!==null)return Yv(r,s,n);Xn(),r=r.memoizedState,s=Xn();var u=s.queue.dispatch;return s.memoizedState=n,[r,u,!1]}function nl(n,r,s,u){return n={tag:n,create:s,deps:u,inst:r,next:null},r=Ce.updateQueue,r===null&&(r=vp(),Ce.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=n.next=n:(u=s.next,s.next=n,n.next=u,r.lastEffect=n),n}function Sf(){return{destroy:void 0,resource:void 0}}function jv(){return Xn().memoizedState}function yf(n,r,s,u){var h=zi();u=u===void 0?null:u,Ce.flags|=n,h.memoizedState=nl(1|r,Sf(),s,u)}function Du(n,r,s,u){var h=Xn();u=u===void 0?null:u;var m=h.memoizedState.inst;ln!==null&&u!==null&&dp(u,ln.memoizedState.deps)?h.memoizedState=nl(r,m,s,u):(Ce.flags|=n,h.memoizedState=nl(1|r,m,s,u))}function Zv(n,r){yf(8390656,8,n,r)}function Kv(n,r){Du(2048,8,n,r)}function Qv(n,r){return Du(4,2,n,r)}function Jv(n,r){return Du(4,4,n,r)}function $v(n,r){if(typeof r=="function"){n=n();var s=r(n);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function tx(n,r,s){s=s!=null?s.concat([n]):null,Du(4,4,$v.bind(null,r,n),s)}function bp(){}function ex(n,r){var s=Xn();r=r===void 0?null:r;var u=s.memoizedState;return r!==null&&dp(r,u[1])?u[0]:(s.memoizedState=[n,r],n)}function nx(n,r){var s=Xn();r=r===void 0?null:r;var u=s.memoizedState;if(r!==null&&dp(r,u[1]))return u[0];if(u=n(),io){Q(!0);try{n()}finally{Q(!1)}}return s.memoizedState=[u,r],u}function Tp(n,r,s){return s===void 0||(ss&1073741824)!==0?n.memoizedState=r:(n.memoizedState=s,n=aS(),Ce.lanes|=n,ds|=n,s)}function ix(n,r,s,u){return $i(s,r)?s:$o.current!==null?(n=Tp(n,s,u),$i(n,r)||(ei=!0),n):(ss&42)===0?(ei=!0,n.memoizedState=s):(n=aS(),Ce.lanes|=n,ds|=n,r)}function rx(n,r,s,u,h){var m=H.p;H.p=m!==0&&8>m?m:8;var T=B.T,O={};B.T=O,wp(n,!1,r,s);try{var k=h(),st=B.S;if(st!==null&&st(O,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var vt=qb(k,u);Uu(n,r,vt,rr(n))}else Uu(n,r,u,rr(n))}catch(Mt){Uu(n,r,{then:function(){},status:"rejected",reason:Mt},rr())}finally{H.p=m,B.T=T}}function Jb(){}function Ap(n,r,s,u){if(n.tag!==5)throw Error(i(476));var h=ax(n).queue;rx(n,h,r,K,s===null?Jb:function(){return sx(n),s(u)})}function ax(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:K},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:s},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function sx(n){var r=ax(n).next.queue;Uu(n,r,{},rr())}function Rp(){return gi(Zu)}function ox(){return Xn().memoizedState}function lx(){return Xn().memoizedState}function $b(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var s=rr();n=rs(s);var u=as(r,n,s);u!==null&&(ar(u,r,s),Tu(u,r,s)),r={cache:ip()},n.payload=r;return}r=r.return}}function tT(n,r,s){var u=rr();s={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Mf(n)?cx(r,s):(s=qd(n,r,s,u),s!==null&&(ar(s,n,u),fx(s,r,u)))}function ux(n,r,s){var u=rr();Uu(n,r,s,u)}function Uu(n,r,s,u){var h={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Mf(n))cx(r,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var T=r.lastRenderedState,O=m(T,s);if(h.hasEagerState=!0,h.eagerState=O,$i(O,T))return af(n,r,h,0),vn===null&&rf(),!1}catch{}if(s=qd(n,r,h,u),s!==null)return ar(s,n,u),fx(s,r,u),!0}return!1}function wp(n,r,s,u){if(u={lane:2,revertLane:sm(),action:u,hasEagerState:!1,eagerState:null,next:null},Mf(n)){if(r)throw Error(i(479))}else r=qd(n,s,u,2),r!==null&&ar(r,n,2)}function Mf(n){var r=n.alternate;return n===Ce||r!==null&&r===Ce}function cx(n,r){tl=_f=!0;var s=n.pending;s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r}function fx(n,r,s){if((s&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,s|=u,r.lanes=s,Ht(n,s)}}var Ef={readContext:gi,use:vf,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useLayoutEffect:In,useInsertionEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useSyncExternalStore:In,useId:In,useHostTransitionStatus:In,useFormState:In,useActionState:In,useOptimistic:In,useMemoCache:In,useCacheRefresh:In},hx={readContext:gi,use:vf,useCallback:function(n,r){return zi().memoizedState=[n,r===void 0?null:r],n},useContext:gi,useEffect:Zv,useImperativeHandle:function(n,r,s){s=s!=null?s.concat([n]):null,yf(4194308,4,$v.bind(null,r,n),s)},useLayoutEffect:function(n,r){return yf(4194308,4,n,r)},useInsertionEffect:function(n,r){yf(4,2,n,r)},useMemo:function(n,r){var s=zi();r=r===void 0?null:r;var u=n();if(io){Q(!0);try{n()}finally{Q(!1)}}return s.memoizedState=[u,r],u},useReducer:function(n,r,s){var u=zi();if(s!==void 0){var h=s(r);if(io){Q(!0);try{s(r)}finally{Q(!1)}}}else h=r;return u.memoizedState=u.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},u.queue=n,n=n.dispatch=tT.bind(null,Ce,n),[u.memoizedState,n]},useRef:function(n){var r=zi();return n={current:n},r.memoizedState=n},useState:function(n){n=Mp(n);var r=n.queue,s=ux.bind(null,Ce,r);return r.dispatch=s,[n.memoizedState,s]},useDebugValue:bp,useDeferredValue:function(n,r){var s=zi();return Tp(s,n,r)},useTransition:function(){var n=Mp(!1);return n=rx.bind(null,Ce,n.queue,!0,!1),zi().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,s){var u=Ce,h=zi();if(Ze){if(s===void 0)throw Error(i(407));s=s()}else{if(s=r(),vn===null)throw Error(i(349));(Xe&124)!==0||Lv(u,r,s)}h.memoizedState=s;var m={value:s,getSnapshot:r};return h.queue=m,Zv(Pv.bind(null,u,m,n),[n]),u.flags|=2048,nl(9,Sf(),Ov.bind(null,u,m,s,r),null),s},useId:function(){var n=zi(),r=vn.identifierPrefix;if(Ze){var s=Ta,u=ba;s=(u&~(1<<32-ht(u)-1)).toString(32)+s,r="«"+r+"R"+s,s=gf++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=jb++,r="«"+r+"r"+s.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:Rp,useFormState:Xv,useActionState:Xv,useOptimistic:function(n){var r=zi();r.memoizedState=r.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=wp.bind(null,Ce,!0,s),s.dispatch=r,[n,r]},useMemoCache:xp,useCacheRefresh:function(){return zi().memoizedState=$b.bind(null,Ce)}},dx={readContext:gi,use:vf,useCallback:ex,useContext:gi,useEffect:Kv,useImperativeHandle:tx,useInsertionEffect:Qv,useLayoutEffect:Jv,useMemo:nx,useReducer:xf,useRef:jv,useState:function(){return xf(wa)},useDebugValue:bp,useDeferredValue:function(n,r){var s=Xn();return ix(s,ln.memoizedState,n,r)},useTransition:function(){var n=xf(wa)[0],r=Xn().memoizedState;return[typeof n=="boolean"?n:Cu(n),r]},useSyncExternalStore:Nv,useId:ox,useHostTransitionStatus:Rp,useFormState:Wv,useActionState:Wv,useOptimistic:function(n,r){var s=Xn();return Bv(s,ln,n,r)},useMemoCache:xp,useCacheRefresh:lx},eT={readContext:gi,use:vf,useCallback:ex,useContext:gi,useEffect:Kv,useImperativeHandle:tx,useInsertionEffect:Qv,useLayoutEffect:Jv,useMemo:nx,useReducer:yp,useRef:jv,useState:function(){return yp(wa)},useDebugValue:bp,useDeferredValue:function(n,r){var s=Xn();return ln===null?Tp(s,n,r):ix(s,ln.memoizedState,n,r)},useTransition:function(){var n=yp(wa)[0],r=Xn().memoizedState;return[typeof n=="boolean"?n:Cu(n),r]},useSyncExternalStore:Nv,useId:ox,useHostTransitionStatus:Rp,useFormState:qv,useActionState:qv,useOptimistic:function(n,r){var s=Xn();return ln!==null?Bv(s,ln,n,r):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:xp,useCacheRefresh:lx},il=null,Nu=0;function bf(n){var r=Nu;return Nu+=1,il===null&&(il=[]),bv(il,n,r)}function Lu(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Tf(n,r){throw r.$$typeof===x?Error(i(525)):(n=Object.prototype.toString.call(r),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function px(n){var r=n._init;return r(n._payload)}function mx(n){function r(J,Y){if(n){var it=J.deletions;it===null?(J.deletions=[Y],J.flags|=16):it.push(Y)}}function s(J,Y){if(!n)return null;for(;Y!==null;)r(J,Y),Y=Y.sibling;return null}function u(J){for(var Y=new Map;J!==null;)J.key!==null?Y.set(J.key,J):Y.set(J.index,J),J=J.sibling;return Y}function h(J,Y){return J=Ea(J,Y),J.index=0,J.sibling=null,J}function m(J,Y,it){return J.index=it,n?(it=J.alternate,it!==null?(it=it.index,it<Y?(J.flags|=67108866,Y):it):(J.flags|=67108866,Y)):(J.flags|=1048576,Y)}function T(J){return n&&J.alternate===null&&(J.flags|=67108866),J}function O(J,Y,it,yt){return Y===null||Y.tag!==6?(Y=Zd(it,J.mode,yt),Y.return=J,Y):(Y=h(Y,it),Y.return=J,Y)}function k(J,Y,it,yt){var te=it.type;return te===M?vt(J,Y,it.props.children,yt,it.key):Y!==null&&(Y.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===b&&px(te)===Y.type)?(Y=h(Y,it.props),Lu(Y,it),Y.return=J,Y):(Y=of(it.type,it.key,it.props,null,J.mode,yt),Lu(Y,it),Y.return=J,Y)}function st(J,Y,it,yt){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==it.containerInfo||Y.stateNode.implementation!==it.implementation?(Y=Kd(it,J.mode,yt),Y.return=J,Y):(Y=h(Y,it.children||[]),Y.return=J,Y)}function vt(J,Y,it,yt,te){return Y===null||Y.tag!==7?(Y=Zs(it,J.mode,yt,te),Y.return=J,Y):(Y=h(Y,it),Y.return=J,Y)}function Mt(J,Y,it){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Zd(""+Y,J.mode,it),Y.return=J,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case g:return it=of(Y.type,Y.key,Y.props,null,J.mode,it),Lu(it,Y),it.return=J,it;case v:return Y=Kd(Y,J.mode,it),Y.return=J,Y;case b:var yt=Y._init;return Y=yt(Y._payload),Mt(J,Y,it)}if(X(Y)||V(Y))return Y=Zs(Y,J.mode,it,null),Y.return=J,Y;if(typeof Y.then=="function")return Mt(J,bf(Y),it);if(Y.$$typeof===D)return Mt(J,ff(J,Y),it);Tf(J,Y)}return null}function ut(J,Y,it,yt){var te=Y!==null?Y.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return te!==null?null:O(J,Y,""+it,yt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case g:return it.key===te?k(J,Y,it,yt):null;case v:return it.key===te?st(J,Y,it,yt):null;case b:return te=it._init,it=te(it._payload),ut(J,Y,it,yt)}if(X(it)||V(it))return te!==null?null:vt(J,Y,it,yt,null);if(typeof it.then=="function")return ut(J,Y,bf(it),yt);if(it.$$typeof===D)return ut(J,Y,ff(J,it),yt);Tf(J,it)}return null}function ct(J,Y,it,yt,te){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return J=J.get(it)||null,O(Y,J,""+yt,te);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case g:return J=J.get(yt.key===null?it:yt.key)||null,k(Y,J,yt,te);case v:return J=J.get(yt.key===null?it:yt.key)||null,st(Y,J,yt,te);case b:var Ne=yt._init;return yt=Ne(yt._payload),ct(J,Y,it,yt,te)}if(X(yt)||V(yt))return J=J.get(it)||null,vt(Y,J,yt,te,null);if(typeof yt.then=="function")return ct(J,Y,it,bf(yt),te);if(yt.$$typeof===D)return ct(J,Y,it,ff(Y,yt),te);Tf(Y,yt)}return null}function pe(J,Y,it,yt){for(var te=null,Ne=null,re=Y,fe=Y=0,ii=null;re!==null&&fe<it.length;fe++){re.index>fe?(ii=re,re=null):ii=re.sibling;var qe=ut(J,re,it[fe],yt);if(qe===null){re===null&&(re=ii);break}n&&re&&qe.alternate===null&&r(J,re),Y=m(qe,Y,fe),Ne===null?te=qe:Ne.sibling=qe,Ne=qe,re=ii}if(fe===it.length)return s(J,re),Ze&&Qs(J,fe),te;if(re===null){for(;fe<it.length;fe++)re=Mt(J,it[fe],yt),re!==null&&(Y=m(re,Y,fe),Ne===null?te=re:Ne.sibling=re,Ne=re);return Ze&&Qs(J,fe),te}for(re=u(re);fe<it.length;fe++)ii=ct(re,J,fe,it[fe],yt),ii!==null&&(n&&ii.alternate!==null&&re.delete(ii.key===null?fe:ii.key),Y=m(ii,Y,fe),Ne===null?te=ii:Ne.sibling=ii,Ne=ii);return n&&re.forEach(function(Ms){return r(J,Ms)}),Ze&&Qs(J,fe),te}function ce(J,Y,it,yt){if(it==null)throw Error(i(151));for(var te=null,Ne=null,re=Y,fe=Y=0,ii=null,qe=it.next();re!==null&&!qe.done;fe++,qe=it.next()){re.index>fe?(ii=re,re=null):ii=re.sibling;var Ms=ut(J,re,qe.value,yt);if(Ms===null){re===null&&(re=ii);break}n&&re&&Ms.alternate===null&&r(J,re),Y=m(Ms,Y,fe),Ne===null?te=Ms:Ne.sibling=Ms,Ne=Ms,re=ii}if(qe.done)return s(J,re),Ze&&Qs(J,fe),te;if(re===null){for(;!qe.done;fe++,qe=it.next())qe=Mt(J,qe.value,yt),qe!==null&&(Y=m(qe,Y,fe),Ne===null?te=qe:Ne.sibling=qe,Ne=qe);return Ze&&Qs(J,fe),te}for(re=u(re);!qe.done;fe++,qe=it.next())qe=ct(re,J,fe,qe.value,yt),qe!==null&&(n&&qe.alternate!==null&&re.delete(qe.key===null?fe:qe.key),Y=m(qe,Y,fe),Ne===null?te=qe:Ne.sibling=qe,Ne=qe);return n&&re.forEach(function(nA){return r(J,nA)}),Ze&&Qs(J,fe),te}function cn(J,Y,it,yt){if(typeof it=="object"&&it!==null&&it.type===M&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case g:t:{for(var te=it.key;Y!==null;){if(Y.key===te){if(te=it.type,te===M){if(Y.tag===7){s(J,Y.sibling),yt=h(Y,it.props.children),yt.return=J,J=yt;break t}}else if(Y.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===b&&px(te)===Y.type){s(J,Y.sibling),yt=h(Y,it.props),Lu(yt,it),yt.return=J,J=yt;break t}s(J,Y);break}else r(J,Y);Y=Y.sibling}it.type===M?(yt=Zs(it.props.children,J.mode,yt,it.key),yt.return=J,J=yt):(yt=of(it.type,it.key,it.props,null,J.mode,yt),Lu(yt,it),yt.return=J,J=yt)}return T(J);case v:t:{for(te=it.key;Y!==null;){if(Y.key===te)if(Y.tag===4&&Y.stateNode.containerInfo===it.containerInfo&&Y.stateNode.implementation===it.implementation){s(J,Y.sibling),yt=h(Y,it.children||[]),yt.return=J,J=yt;break t}else{s(J,Y);break}else r(J,Y);Y=Y.sibling}yt=Kd(it,J.mode,yt),yt.return=J,J=yt}return T(J);case b:return te=it._init,it=te(it._payload),cn(J,Y,it,yt)}if(X(it))return pe(J,Y,it,yt);if(V(it)){if(te=V(it),typeof te!="function")throw Error(i(150));return it=te.call(it),ce(J,Y,it,yt)}if(typeof it.then=="function")return cn(J,Y,bf(it),yt);if(it.$$typeof===D)return cn(J,Y,ff(J,it),yt);Tf(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,Y!==null&&Y.tag===6?(s(J,Y.sibling),yt=h(Y,it),yt.return=J,J=yt):(s(J,Y),yt=Zd(it,J.mode,yt),yt.return=J,J=yt),T(J)):s(J,Y)}return function(J,Y,it,yt){try{Nu=0;var te=cn(J,Y,it,yt);return il=null,te}catch(re){if(re===Eu||re===df)throw re;var Ne=tr(29,re,null,J.mode);return Ne.lanes=yt,Ne.return=J,Ne}}}var rl=mx(!0),_x=mx(!1),Tr=Z(null),ea=null;function os(n){var r=n.alternate;St(Kn,Kn.current&1),St(Tr,n),ea===null&&(r===null||$o.current!==null||r.memoizedState!==null)&&(ea=n)}function gx(n){if(n.tag===22){if(St(Kn,Kn.current),St(Tr,n),ea===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(ea=n)}}else ls()}function ls(){St(Kn,Kn.current),St(Tr,Tr.current)}function Ca(n){dt(Tr),ea===n&&(ea=null),dt(Kn)}var Kn=Z(0);function Af(n){for(var r=n;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||vm(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Cp(n,r,s,u){r=n.memoizedState,s=s(u,r),s=s==null?r:_({},r,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Dp={enqueueSetState:function(n,r,s){n=n._reactInternals;var u=rr(),h=rs(u);h.payload=r,s!=null&&(h.callback=s),r=as(n,h,u),r!==null&&(ar(r,n,u),Tu(r,n,u))},enqueueReplaceState:function(n,r,s){n=n._reactInternals;var u=rr(),h=rs(u);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=as(n,h,u),r!==null&&(ar(r,n,u),Tu(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var s=rr(),u=rs(s);u.tag=2,r!=null&&(u.callback=r),r=as(n,u,s),r!==null&&(ar(r,n,s),Tu(r,n,s))}};function vx(n,r,s,u,h,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,T):r.prototype&&r.prototype.isPureReactComponent?!mu(s,u)||!mu(h,m):!0}function xx(n,r,s,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,u),r.state!==n&&Dp.enqueueReplaceState(r,r.state,null)}function ro(n,r){var s=r;if("ref"in r){s={};for(var u in r)u!=="ref"&&(s[u]=r[u])}if(n=n.defaultProps){s===r&&(s=_({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var Rf=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Sx(n){Rf(n)}function yx(n){console.error(n)}function Mx(n){Rf(n)}function wf(n,r){try{var s=n.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function Ex(n,r,s){try{var u=n.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Up(n,r,s){return s=rs(s),s.tag=3,s.payload={element:null},s.callback=function(){wf(n,r)},s}function bx(n){return n=rs(n),n.tag=3,n}function Tx(n,r,s,u){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;n.payload=function(){return h(m)},n.callback=function(){Ex(r,s,u)}}var T=s.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){Ex(r,s,u),typeof h!="function"&&(ps===null?ps=new Set([this]):ps.add(this));var O=u.stack;this.componentDidCatch(u.value,{componentStack:O!==null?O:""})})}function nT(n,r,s,u,h){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=s.alternate,r!==null&&Su(r,s,h,!0),s=Tr.current,s!==null){switch(s.tag){case 13:return ea===null?em():s.alternate===null&&Ln===0&&(Ln=3),s.flags&=-257,s.flags|=65536,s.lanes=h,u===sp?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([u]):r.add(u),im(n,u,h)),!1;case 22:return s.flags|=65536,u===sp?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([u]):s.add(u)),im(n,u,h)),!1}throw Error(i(435,s.tag))}return im(n,u,h),em(),!1}if(Ze)return r=Tr.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,u!==$d&&(n=Error(i(422),{cause:u}),xu(yr(n,s)))):(u!==$d&&(r=Error(i(423),{cause:u}),xu(yr(r,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,u=yr(u,s),h=Up(n.stateNode,u,h),up(n,h),Ln!==4&&(Ln=2)),!1;var m=Error(i(520),{cause:u});if(m=yr(m,s),Hu===null?Hu=[m]:Hu.push(m),Ln!==4&&(Ln=2),r===null)return!0;u=yr(u,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=Up(s.stateNode,u,n),up(s,n),!1;case 1:if(r=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ps===null||!ps.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=bx(h),Tx(h,n,s,u),up(s,h),!1}s=s.return}while(s!==null);return!1}var Ax=Error(i(461)),ei=!1;function ci(n,r,s,u){r.child=n===null?_x(r,null,s,u):rl(r,n.child,s,u)}function Rx(n,r,s,u,h){s=s.render;var m=r.ref;if("ref"in u){var T={};for(var O in u)O!=="ref"&&(T[O]=u[O])}else T=u;return eo(r),u=pp(n,r,s,T,m,h),O=mp(),n!==null&&!ei?(_p(n,r,h),Da(n,r,h)):(Ze&&O&&Qd(r),r.flags|=1,ci(n,r,u,h),r.child)}function wx(n,r,s,u,h){if(n===null){var m=s.type;return typeof m=="function"&&!jd(m)&&m.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=m,Cx(n,r,m,u,h)):(n=of(s.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!zp(n,h)){var T=m.memoizedProps;if(s=s.compare,s=s!==null?s:mu,s(T,u)&&n.ref===r.ref)return Da(n,r,h)}return r.flags|=1,n=Ea(m,u),n.ref=r.ref,n.return=r,r.child=n}function Cx(n,r,s,u,h){if(n!==null){var m=n.memoizedProps;if(mu(m,u)&&n.ref===r.ref)if(ei=!1,r.pendingProps=u=m,zp(n,h))(n.flags&131072)!==0&&(ei=!0);else return r.lanes=n.lanes,Da(n,r,h)}return Np(n,r,s,u,h)}function Dx(n,r,s){var u=r.pendingProps,h=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|s:s,n!==null){for(h=r.child=n.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return Ux(n,r,u,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&hf(r,m!==null?m.cachePool:null),m!==null?Cv(r,m):fp(),gx(r);else return r.lanes=r.childLanes=536870912,Ux(n,r,m!==null?m.baseLanes|s:s,s)}else m!==null?(hf(r,m.cachePool),Cv(r,m),ls(),r.memoizedState=null):(n!==null&&hf(r,null),fp(),ls());return ci(n,r,h,s),r.child}function Ux(n,r,s,u){var h=ap();return h=h===null?null:{parent:Zn._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},n!==null&&hf(r,null),fp(),gx(r),n!==null&&Su(n,r,u,!0),null}function Cf(n,r){var s=r.ref;if(s===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(i(284));(n===null||n.ref!==s)&&(r.flags|=4194816)}}function Np(n,r,s,u,h){return eo(r),s=pp(n,r,s,u,void 0,h),u=mp(),n!==null&&!ei?(_p(n,r,h),Da(n,r,h)):(Ze&&u&&Qd(r),r.flags|=1,ci(n,r,s,h),r.child)}function Nx(n,r,s,u,h,m){return eo(r),r.updateQueue=null,s=Uv(r,u,s,h),Dv(n),u=mp(),n!==null&&!ei?(_p(n,r,m),Da(n,r,m)):(Ze&&u&&Qd(r),r.flags|=1,ci(n,r,s,m),r.child)}function Lx(n,r,s,u,h){if(eo(r),r.stateNode===null){var m=jo,T=s.contextType;typeof T=="object"&&T!==null&&(m=gi(T)),m=new s(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Dp,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},op(r),T=s.contextType,m.context=typeof T=="object"&&T!==null?gi(T):jo,m.state=r.memoizedState,T=s.getDerivedStateFromProps,typeof T=="function"&&(Cp(r,s,T,u),m.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&Dp.enqueueReplaceState(m,m.state,null),Ru(r,u,m,h),Au(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){m=r.stateNode;var O=r.memoizedProps,k=ro(s,O);m.props=k;var st=m.context,vt=s.contextType;T=jo,typeof vt=="object"&&vt!==null&&(T=gi(vt));var Mt=s.getDerivedStateFromProps;vt=typeof Mt=="function"||typeof m.getSnapshotBeforeUpdate=="function",O=r.pendingProps!==O,vt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(O||st!==T)&&xx(r,m,u,T),is=!1;var ut=r.memoizedState;m.state=ut,Ru(r,u,m,h),Au(),st=r.memoizedState,O||ut!==st||is?(typeof Mt=="function"&&(Cp(r,s,Mt,u),st=r.memoizedState),(k=is||vx(r,s,k,u,ut,st,T))?(vt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=st),m.props=u,m.state=st,m.context=T,u=k):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,lp(n,r),T=r.memoizedProps,vt=ro(s,T),m.props=vt,Mt=r.pendingProps,ut=m.context,st=s.contextType,k=jo,typeof st=="object"&&st!==null&&(k=gi(st)),O=s.getDerivedStateFromProps,(st=typeof O=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==Mt||ut!==k)&&xx(r,m,u,k),is=!1,ut=r.memoizedState,m.state=ut,Ru(r,u,m,h),Au();var ct=r.memoizedState;T!==Mt||ut!==ct||is||n!==null&&n.dependencies!==null&&cf(n.dependencies)?(typeof O=="function"&&(Cp(r,s,O,u),ct=r.memoizedState),(vt=is||vx(r,s,vt,u,ut,ct,k)||n!==null&&n.dependencies!==null&&cf(n.dependencies))?(st||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,ct,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,ct,k)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===n.memoizedProps&&ut===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ut===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=ct),m.props=u,m.state=ct,m.context=k,u=vt):(typeof m.componentDidUpdate!="function"||T===n.memoizedProps&&ut===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ut===n.memoizedState||(r.flags|=1024),u=!1)}return m=u,Cf(n,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,n!==null&&u?(r.child=rl(r,n.child,null,h),r.child=rl(r,null,s,h)):ci(n,r,s,h),r.memoizedState=m.state,n=r.child):n=Da(n,r,h),n}function Ox(n,r,s,u){return vu(),r.flags|=256,ci(n,r,s,u),r.child}var Lp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Op(n){return{baseLanes:n,cachePool:yv()}}function Pp(n,r,s){return n=n!==null?n.childLanes&~s:0,r&&(n|=Ar),n}function Px(n,r,s){var u=r.pendingProps,h=!1,m=(r.flags&128)!==0,T;if((T=m)||(T=n!==null&&n.memoizedState===null?!1:(Kn.current&2)!==0),T&&(h=!0,r.flags&=-129),T=(r.flags&32)!==0,r.flags&=-33,n===null){if(Ze){if(h?os(r):ls(),Ze){var O=Nn,k;if(k=O){t:{for(k=O,O=ta;k.nodeType!==8;){if(!O){O=null;break t}if(k=Xr(k.nextSibling),k===null){O=null;break t}}O=k}O!==null?(r.memoizedState={dehydrated:O,treeContext:Ks!==null?{id:ba,overflow:Ta}:null,retryLane:536870912,hydrationErrors:null},k=tr(18,null,null,0),k.stateNode=O,k.return=r,r.child=k,Ci=r,Nn=null,k=!0):k=!1}k||$s(r)}if(O=r.memoizedState,O!==null&&(O=O.dehydrated,O!==null))return vm(O)?r.lanes=32:r.lanes=536870912,null;Ca(r)}return O=u.children,u=u.fallback,h?(ls(),h=r.mode,O=Df({mode:"hidden",children:O},h),u=Zs(u,h,s,null),O.return=r,u.return=r,O.sibling=u,r.child=O,h=r.child,h.memoizedState=Op(s),h.childLanes=Pp(n,T,s),r.memoizedState=Lp,u):(os(r),Fp(r,O))}if(k=n.memoizedState,k!==null&&(O=k.dehydrated,O!==null)){if(m)r.flags&256?(os(r),r.flags&=-257,r=Ip(n,r,s)):r.memoizedState!==null?(ls(),r.child=n.child,r.flags|=128,r=null):(ls(),h=u.fallback,O=r.mode,u=Df({mode:"visible",children:u.children},O),h=Zs(h,O,s,null),h.flags|=2,u.return=r,h.return=r,u.sibling=h,r.child=u,rl(r,n.child,null,s),u=r.child,u.memoizedState=Op(s),u.childLanes=Pp(n,T,s),r.memoizedState=Lp,r=h);else if(os(r),vm(O)){if(T=O.nextSibling&&O.nextSibling.dataset,T)var st=T.dgst;T=st,u=Error(i(419)),u.stack="",u.digest=T,xu({value:u,source:null,stack:null}),r=Ip(n,r,s)}else if(ei||Su(n,r,s,!1),T=(s&n.childLanes)!==0,ei||T){if(T=vn,T!==null&&(u=s&-s,u=(u&42)!==0?1:Ut(u),u=(u&(T.suspendedLanes|s))!==0?0:u,u!==0&&u!==k.retryLane))throw k.retryLane=u,qo(n,u),ar(T,n,u),Ax;O.data==="$?"||em(),r=Ip(n,r,s)}else O.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=k.treeContext,Nn=Xr(O.nextSibling),Ci=r,Ze=!0,Js=null,ta=!1,n!==null&&(Er[br++]=ba,Er[br++]=Ta,Er[br++]=Ks,ba=n.id,Ta=n.overflow,Ks=r),r=Fp(r,u.children),r.flags|=4096);return r}return h?(ls(),h=u.fallback,O=r.mode,k=n.child,st=k.sibling,u=Ea(k,{mode:"hidden",children:u.children}),u.subtreeFlags=k.subtreeFlags&65011712,st!==null?h=Ea(st,h):(h=Zs(h,O,s,null),h.flags|=2),h.return=r,u.return=r,u.sibling=h,r.child=u,u=h,h=r.child,O=n.child.memoizedState,O===null?O=Op(s):(k=O.cachePool,k!==null?(st=Zn._currentValue,k=k.parent!==st?{parent:st,pool:st}:k):k=yv(),O={baseLanes:O.baseLanes|s,cachePool:k}),h.memoizedState=O,h.childLanes=Pp(n,T,s),r.memoizedState=Lp,u):(os(r),s=n.child,n=s.sibling,s=Ea(s,{mode:"visible",children:u.children}),s.return=r,s.sibling=null,n!==null&&(T=r.deletions,T===null?(r.deletions=[n],r.flags|=16):T.push(n)),r.child=s,r.memoizedState=null,s)}function Fp(n,r){return r=Df({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Df(n,r){return n=tr(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Ip(n,r,s){return rl(r,n.child,null,s),n=Fp(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Fx(n,r,s){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),ep(n.return,r,s)}function Bp(n,r,s,u,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:h}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=s,m.tailMode=h)}function Ix(n,r,s){var u=r.pendingProps,h=u.revealOrder,m=u.tail;if(ci(n,r,u.children,s),u=Kn.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fx(n,s,r);else if(n.tag===19)Fx(n,s,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break t;for(;n.sibling===null;){if(n.return===null||n.return===r)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(St(Kn,u),h){case"forwards":for(s=r.child,h=null;s!==null;)n=s.alternate,n!==null&&Af(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),Bp(r,!1,h,s,m);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Af(n)===null){r.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Bp(r,!0,s,null,m);break;case"together":Bp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Da(n,r,s){if(n!==null&&(r.dependencies=n.dependencies),ds|=r.lanes,(s&r.childLanes)===0)if(n!==null){if(Su(n,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(i(153));if(r.child!==null){for(n=r.child,s=Ea(n,n.pendingProps),r.child=s,s.return=r;n.sibling!==null;)n=n.sibling,s=s.sibling=Ea(n,n.pendingProps),s.return=r;s.sibling=null}return r.child}function zp(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&cf(n)))}function iT(n,r,s){switch(r.tag){case 3:gt(r,r.stateNode.containerInfo),ns(r,Zn,n.memoizedState.cache),vu();break;case 27:case 5:ae(r);break;case 4:gt(r,r.stateNode.containerInfo);break;case 10:ns(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(os(r),r.flags|=128,null):(s&r.child.childLanes)!==0?Px(n,r,s):(os(r),n=Da(n,r,s),n!==null?n.sibling:null);os(r);break;case 19:var h=(n.flags&128)!==0;if(u=(s&r.childLanes)!==0,u||(Su(n,r,s,!1),u=(s&r.childLanes)!==0),h){if(u)return Ix(n,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),St(Kn,Kn.current),u)break;return null;case 22:case 23:return r.lanes=0,Dx(n,r,s);case 24:ns(r,Zn,n.memoizedState.cache)}return Da(n,r,s)}function Bx(n,r,s){if(n!==null)if(n.memoizedProps!==r.pendingProps)ei=!0;else{if(!zp(n,s)&&(r.flags&128)===0)return ei=!1,iT(n,r,s);ei=(n.flags&131072)!==0}else ei=!1,Ze&&(r.flags&1048576)!==0&&pv(r,uf,r.index);switch(r.lanes=0,r.tag){case 16:t:{n=r.pendingProps;var u=r.elementType,h=u._init;if(u=h(u._payload),r.type=u,typeof u=="function")jd(u)?(n=ro(u,n),r.tag=1,r=Lx(null,r,u,n,s)):(r.tag=0,r=Np(null,r,u,n,s));else{if(u!=null){if(h=u.$$typeof,h===C){r.tag=11,r=Rx(null,r,u,n,s);break t}else if(h===N){r.tag=14,r=wx(null,r,u,n,s);break t}}throw r=rt(u)||u,Error(i(306,r,""))}}return r;case 0:return Np(n,r,r.type,r.pendingProps,s);case 1:return u=r.type,h=ro(u,r.pendingProps),Lx(n,r,u,h,s);case 3:t:{if(gt(r,r.stateNode.containerInfo),n===null)throw Error(i(387));u=r.pendingProps;var m=r.memoizedState;h=m.element,lp(n,r),Ru(r,u,null,s);var T=r.memoizedState;if(u=T.cache,ns(r,Zn,u),u!==m.cache&&np(r,[Zn],s,!0),Au(),u=T.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:T.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=Ox(n,r,u,s);break t}else if(u!==h){h=yr(Error(i(424)),r),xu(h),r=Ox(n,r,u,s);break t}else for(n=r.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,Nn=Xr(n.firstChild),Ci=r,Ze=!0,Js=null,ta=!0,s=_x(r,null,u,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(vu(),u===h){r=Da(n,r,s);break t}ci(n,r,u,s)}r=r.child}return r;case 26:return Cf(n,r),n===null?(s=VS(r.type,null,r.pendingProps,null))?r.memoizedState=s:Ze||(s=r.type,n=r.pendingProps,u=Xf($.current).createElement(s),u[xt]=r,u[Jt]=n,hi(u,s,n),Fe(u),r.stateNode=u):r.memoizedState=VS(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return ae(r),n===null&&Ze&&(u=r.stateNode=zS(r.type,r.pendingProps,$.current),Ci=r,ta=!0,h=Nn,gs(r.type)?(xm=h,Nn=Xr(u.firstChild)):Nn=h),ci(n,r,r.pendingProps.children,s),Cf(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Ze&&((h=u=Nn)&&(u=UT(u,r.type,r.pendingProps,ta),u!==null?(r.stateNode=u,Ci=r,Nn=Xr(u.firstChild),ta=!1,h=!0):h=!1),h||$s(r)),ae(r),h=r.type,m=r.pendingProps,T=n!==null?n.memoizedProps:null,u=m.children,mm(h,m)?u=null:T!==null&&mm(h,T)&&(r.flags|=32),r.memoizedState!==null&&(h=pp(n,r,Zb,null,null,s),Zu._currentValue=h),Cf(n,r),ci(n,r,u,s),r.child;case 6:return n===null&&Ze&&((n=s=Nn)&&(s=NT(s,r.pendingProps,ta),s!==null?(r.stateNode=s,Ci=r,Nn=null,n=!0):n=!1),n||$s(r)),null;case 13:return Px(n,r,s);case 4:return gt(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=rl(r,null,u,s):ci(n,r,u,s),r.child;case 11:return Rx(n,r,r.type,r.pendingProps,s);case 7:return ci(n,r,r.pendingProps,s),r.child;case 8:return ci(n,r,r.pendingProps.children,s),r.child;case 12:return ci(n,r,r.pendingProps.children,s),r.child;case 10:return u=r.pendingProps,ns(r,r.type,u.value),ci(n,r,u.children,s),r.child;case 9:return h=r.type._context,u=r.pendingProps.children,eo(r),h=gi(h),u=u(h),r.flags|=1,ci(n,r,u,s),r.child;case 14:return wx(n,r,r.type,r.pendingProps,s);case 15:return Cx(n,r,r.type,r.pendingProps,s);case 19:return Ix(n,r,s);case 31:return u=r.pendingProps,s=r.mode,u={mode:u.mode,children:u.children},n===null?(s=Df(u,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=Ea(n.child,u),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return Dx(n,r,s);case 24:return eo(r),u=gi(Zn),n===null?(h=ap(),h===null&&(h=vn,m=ip(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),r.memoizedState={parent:u,cache:h},op(r),ns(r,Zn,h)):((n.lanes&s)!==0&&(lp(n,r),Ru(r,null,null,s),Au()),h=n.memoizedState,m=r.memoizedState,h.parent!==u?(h={parent:u,cache:u},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),ns(r,Zn,u)):(u=m.cache,ns(r,Zn,u),u!==h.cache&&np(r,[Zn],s,!0))),ci(n,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function Ua(n){n.flags|=4}function zx(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!qS(r)){if(r=Tr.current,r!==null&&((Xe&4194048)===Xe?ea!==null:(Xe&62914560)!==Xe&&(Xe&536870912)===0||r!==ea))throw bu=sp,Mv;n.flags|=8192}}function Uf(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?le():536870912,n.lanes|=r,ll|=r)}function Ou(n,r){if(!Ze)switch(n.tailMode){case"hidden":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function An(n){var r=n.alternate!==null&&n.alternate.child===n.child,s=0,u=0;if(r)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=s,r}function rT(n,r,s){var u=r.pendingProps;switch(Jd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(r),null;case 1:return An(r),null;case 3:return s=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),Ra(Zn),Xt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(gu(r)?Ua(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,gv())),An(r),null;case 26:return s=r.memoizedState,n===null?(Ua(r),s!==null?(An(r),zx(r,s)):(An(r),r.flags&=-16777217)):s?s!==n.memoizedState?(Ua(r),An(r),zx(r,s)):(An(r),r.flags&=-16777217):(n.memoizedProps!==u&&Ua(r),An(r),r.flags&=-16777217),null;case 27:Qt(r),s=$.current;var h=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&Ua(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return An(r),null}n=wt.current,gu(r)?mv(r):(n=zS(h,u,s),r.stateNode=n,Ua(r))}return An(r),null;case 5:if(Qt(r),s=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&Ua(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return An(r),null}if(n=wt.current,gu(r))mv(r);else{switch(h=Xf($.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?h.createElement(s,{is:u.is}):h.createElement(s)}}n[xt]=r,n[Jt]=u;t:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break t;for(;h.sibling===null;){if(h.return===null||h.return===r)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=n;t:switch(hi(n,s,u),s){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Ua(r)}}return An(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&Ua(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(i(166));if(n=$.current,gu(r)){if(n=r.stateNode,s=r.memoizedProps,u=null,h=Ci,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}n[xt]=r,n=!!(n.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||NS(n.nodeValue,s)),n||$s(r)}else n=Xf(n).createTextNode(u),n[xt]=r,r.stateNode=n}return An(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=gu(r),u!==null&&u.dehydrated!==null){if(n===null){if(!h)throw Error(i(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[xt]=r}else vu(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;An(r),h=!1}else h=gv(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Ca(r),r):(Ca(r),null)}if(Ca(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=u!==null,n=n!==null&&n.memoizedState!==null,s){u=r.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)}return s!==n&&s&&(r.child.flags|=8192),Uf(r,r.updateQueue),An(r),null;case 4:return Xt(),n===null&&cm(r.stateNode.containerInfo),An(r),null;case 10:return Ra(r.type),An(r),null;case 19:if(dt(Kn),h=r.memoizedState,h===null)return An(r),null;if(u=(r.flags&128)!==0,m=h.rendering,m===null)if(u)Ou(h,!1);else{if(Ln!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(m=Af(n),m!==null){for(r.flags|=128,Ou(h,!1),n=m.updateQueue,r.updateQueue=n,Uf(r,n),r.subtreeFlags=0,n=s,s=r.child;s!==null;)dv(s,n),s=s.sibling;return St(Kn,Kn.current&1|2),r.child}n=n.sibling}h.tail!==null&&at()>Of&&(r.flags|=128,u=!0,Ou(h,!1),r.lanes=4194304)}else{if(!u)if(n=Af(m),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,Uf(r,n),Ou(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ze)return An(r),null}else 2*at()-h.renderingStartTime>Of&&s!==536870912&&(r.flags|=128,u=!0,Ou(h,!1),r.lanes=4194304);h.isBackwards?(m.sibling=r.child,r.child=m):(n=h.last,n!==null?n.sibling=m:r.child=m,h.last=m)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=at(),r.sibling=null,n=Kn.current,St(Kn,u?n&1|2:n&1),r):(An(r),null);case 22:case 23:return Ca(r),hp(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(s&536870912)!==0&&(r.flags&128)===0&&(An(r),r.subtreeFlags&6&&(r.flags|=8192)):An(r),s=r.updateQueue,s!==null&&Uf(r,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==s&&(r.flags|=2048),n!==null&&dt(no),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Ra(Zn),An(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function aT(n,r){switch(Jd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ra(Zn),Xt(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Qt(r),null;case 13:if(Ca(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(i(340));vu()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return dt(Kn),null;case 4:return Xt(),null;case 10:return Ra(r.type),null;case 22:case 23:return Ca(r),hp(),n!==null&&dt(no),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Ra(Zn),null;case 25:return null;default:return null}}function Hx(n,r){switch(Jd(r),r.tag){case 3:Ra(Zn),Xt();break;case 26:case 27:case 5:Qt(r);break;case 4:Xt();break;case 13:Ca(r);break;case 19:dt(Kn);break;case 10:Ra(r.type);break;case 22:case 23:Ca(r),hp(),n!==null&&dt(no);break;case 24:Ra(Zn)}}function Pu(n,r){try{var s=r.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&n)===n){u=void 0;var m=s.create,T=s.inst;u=m(),T.destroy=u}s=s.next}while(s!==h)}}catch(O){dn(r,r.return,O)}}function us(n,r,s){try{var u=r.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&n)===n){var T=u.inst,O=T.destroy;if(O!==void 0){T.destroy=void 0,h=r;var k=s,st=O;try{st()}catch(vt){dn(h,k,vt)}}}u=u.next}while(u!==m)}}catch(vt){dn(r,r.return,vt)}}function Gx(n){var r=n.updateQueue;if(r!==null){var s=n.stateNode;try{wv(r,s)}catch(u){dn(n,n.return,u)}}}function Vx(n,r,s){s.props=ro(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(u){dn(n,r,u)}}function Fu(n,r){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof s=="function"?n.refCleanup=s(u):s.current=u}}catch(h){dn(n,r,h)}}function na(n,r){var s=n.ref,u=n.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(h){dn(n,r,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){dn(n,r,h)}else s.current=null}function kx(n){var r=n.type,s=n.memoizedProps,u=n.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break t;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(h){dn(n,n.return,h)}}function Hp(n,r,s){try{var u=n.stateNode;AT(u,n.type,s,r),u[Jt]=r}catch(h){dn(n,n.return,h)}}function Xx(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&gs(n.type)||n.tag===4}function Gp(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||Xx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&gs(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vp(n,r,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(n),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=kf));else if(u!==4&&(u===27&&gs(n.type)&&(s=n.stateNode,r=null),n=n.child,n!==null))for(Vp(n,r,s),n=n.sibling;n!==null;)Vp(n,r,s),n=n.sibling}function Nf(n,r,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?s.insertBefore(n,r):s.appendChild(n);else if(u!==4&&(u===27&&gs(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Nf(n,r,s),n=n.sibling;n!==null;)Nf(n,r,s),n=n.sibling}function Wx(n){var r=n.stateNode,s=n.memoizedProps;try{for(var u=n.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);hi(r,u,s),r[xt]=n,r[Jt]=s}catch(m){dn(n,n.return,m)}}var Na=!1,Bn=!1,kp=!1,Yx=typeof WeakSet=="function"?WeakSet:Set,ni=null;function sT(n,r){if(n=n.containerInfo,dm=Kf,n=iv(n),Gd(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else t:{s=(s=n.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var T=0,O=-1,k=-1,st=0,vt=0,Mt=n,ut=null;e:for(;;){for(var ct;Mt!==s||h!==0&&Mt.nodeType!==3||(O=T+h),Mt!==m||u!==0&&Mt.nodeType!==3||(k=T+u),Mt.nodeType===3&&(T+=Mt.nodeValue.length),(ct=Mt.firstChild)!==null;)ut=Mt,Mt=ct;for(;;){if(Mt===n)break e;if(ut===s&&++st===h&&(O=T),ut===m&&++vt===u&&(k=T),(ct=Mt.nextSibling)!==null)break;Mt=ut,ut=Mt.parentNode}Mt=ct}s=O===-1||k===-1?null:{start:O,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(pm={focusedElem:n,selectionRange:s},Kf=!1,ni=r;ni!==null;)if(r=ni,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,ni=n;else for(;ni!==null;){switch(r=ni,m=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,s=r,h=m.memoizedProps,m=m.memoizedState,u=s.stateNode;try{var pe=ro(s.type,h,s.elementType===s.type);n=u.getSnapshotBeforeUpdate(pe,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(ce){dn(s,s.return,ce)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,s=n.nodeType,s===9)gm(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":gm(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=r.sibling,n!==null){n.return=r.return,ni=n;break}ni=r.return}}function qx(n,r,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:cs(n,s),u&4&&Pu(5,s);break;case 1:if(cs(n,s),u&4)if(n=s.stateNode,r===null)try{n.componentDidMount()}catch(T){dn(s,s.return,T)}else{var h=ro(s.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(h,r,n.__reactInternalSnapshotBeforeUpdate)}catch(T){dn(s,s.return,T)}}u&64&&Gx(s),u&512&&Fu(s,s.return);break;case 3:if(cs(n,s),u&64&&(n=s.updateQueue,n!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{wv(n,r)}catch(T){dn(s,s.return,T)}}break;case 27:r===null&&u&4&&Wx(s);case 26:case 5:cs(n,s),r===null&&u&4&&kx(s),u&512&&Fu(s,s.return);break;case 12:cs(n,s);break;case 13:cs(n,s),u&4&&Kx(n,s),u&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=mT.bind(null,s),LT(n,s))));break;case 22:if(u=s.memoizedState!==null||Na,!u){r=r!==null&&r.memoizedState!==null||Bn,h=Na;var m=Bn;Na=u,(Bn=r)&&!m?fs(n,s,(s.subtreeFlags&8772)!==0):cs(n,s),Na=h,Bn=m}break;case 30:break;default:cs(n,s)}}function jx(n){var r=n.alternate;r!==null&&(n.alternate=null,jx(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Je(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Mn=null,Hi=!1;function La(n,r,s){for(s=s.child;s!==null;)Zx(n,r,s),s=s.sibling}function Zx(n,r,s){if(w&&typeof w.onCommitFiberUnmount=="function")try{w.onCommitFiberUnmount(I,s)}catch{}switch(s.tag){case 26:Bn||na(s,r),La(n,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Bn||na(s,r);var u=Mn,h=Hi;gs(s.type)&&(Mn=s.stateNode,Hi=!1),La(n,r,s),Wu(s.stateNode),Mn=u,Hi=h;break;case 5:Bn||na(s,r);case 6:if(u=Mn,h=Hi,Mn=null,La(n,r,s),Mn=u,Hi=h,Mn!==null)if(Hi)try{(Mn.nodeType===9?Mn.body:Mn.nodeName==="HTML"?Mn.ownerDocument.body:Mn).removeChild(s.stateNode)}catch(m){dn(s,r,m)}else try{Mn.removeChild(s.stateNode)}catch(m){dn(s,r,m)}break;case 18:Mn!==null&&(Hi?(n=Mn,IS(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),$u(n)):IS(Mn,s.stateNode));break;case 4:u=Mn,h=Hi,Mn=s.stateNode.containerInfo,Hi=!0,La(n,r,s),Mn=u,Hi=h;break;case 0:case 11:case 14:case 15:Bn||us(2,s,r),Bn||us(4,s,r),La(n,r,s);break;case 1:Bn||(na(s,r),u=s.stateNode,typeof u.componentWillUnmount=="function"&&Vx(s,r,u)),La(n,r,s);break;case 21:La(n,r,s);break;case 22:Bn=(u=Bn)||s.memoizedState!==null,La(n,r,s),Bn=u;break;default:La(n,r,s)}}function Kx(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{$u(n)}catch(s){dn(r,r.return,s)}}function oT(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Yx),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Yx),r;default:throw Error(i(435,n.tag))}}function Xp(n,r){var s=oT(n);r.forEach(function(u){var h=_T.bind(null,n,u);s.has(u)||(s.add(u),u.then(h,h))})}function er(n,r){var s=r.deletions;if(s!==null)for(var u=0;u<s.length;u++){var h=s[u],m=n,T=r,O=T;t:for(;O!==null;){switch(O.tag){case 27:if(gs(O.type)){Mn=O.stateNode,Hi=!1;break t}break;case 5:Mn=O.stateNode,Hi=!1;break t;case 3:case 4:Mn=O.stateNode.containerInfo,Hi=!0;break t}O=O.return}if(Mn===null)throw Error(i(160));Zx(m,T,h),Mn=null,Hi=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Qx(r,n),r=r.sibling}var kr=null;function Qx(n,r){var s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:er(r,n),nr(n),u&4&&(us(3,n,n.return),Pu(3,n),us(5,n,n.return));break;case 1:er(r,n),nr(n),u&512&&(Bn||s===null||na(s,s.return)),u&64&&Na&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var h=kr;if(er(r,n),nr(n),u&512&&(Bn||s===null||na(s,s.return)),u&4){var m=s!==null?s.memoizedState:null;if(u=n.memoizedState,s===null)if(u===null)if(n.stateNode===null){t:{u=n.type,s=n.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Qe]||m[xt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),hi(m,u,s),m[xt]=n,Fe(m),u=m;break t;case"link":var T=WS("link","href",h).get(u+(s.href||""));if(T){for(var O=0;O<T.length;O++)if(m=T[O],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){T.splice(O,1);break e}}m=h.createElement(u),hi(m,u,s),h.head.appendChild(m);break;case"meta":if(T=WS("meta","content",h).get(u+(s.content||""))){for(O=0;O<T.length;O++)if(m=T[O],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){T.splice(O,1);break e}}m=h.createElement(u),hi(m,u,s),h.head.appendChild(m);break;default:throw Error(i(468,u))}m[xt]=n,Fe(m),u=m}n.stateNode=u}else YS(h,n.type,n.stateNode);else n.stateNode=XS(h,u,n.memoizedProps);else m!==u?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,u===null?YS(h,n.type,n.stateNode):XS(h,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Hp(n,n.memoizedProps,s.memoizedProps)}break;case 27:er(r,n),nr(n),u&512&&(Bn||s===null||na(s,s.return)),s!==null&&u&4&&Hp(n,n.memoizedProps,s.memoizedProps);break;case 5:if(er(r,n),nr(n),u&512&&(Bn||s===null||na(s,s.return)),n.flags&32){h=n.stateNode;try{wi(h,"")}catch(ct){dn(n,n.return,ct)}}u&4&&n.stateNode!=null&&(h=n.memoizedProps,Hp(n,h,s!==null?s.memoizedProps:h)),u&1024&&(kp=!0);break;case 6:if(er(r,n),nr(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,s=n.stateNode;try{s.nodeValue=u}catch(ct){dn(n,n.return,ct)}}break;case 3:if(qf=null,h=kr,kr=Wf(r.containerInfo),er(r,n),kr=h,nr(n),u&4&&s!==null&&s.memoizedState.isDehydrated)try{$u(r.containerInfo)}catch(ct){dn(n,n.return,ct)}kp&&(kp=!1,Jx(n));break;case 4:u=kr,kr=Wf(n.stateNode.containerInfo),er(r,n),nr(n),kr=u;break;case 12:er(r,n),nr(n);break;case 13:er(r,n),nr(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Kp=at()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Xp(n,u)));break;case 22:h=n.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,st=Na,vt=Bn;if(Na=st||h,Bn=vt||k,er(r,n),Bn=vt,Na=st,nr(n),u&8192)t:for(r=n.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||k||Na||Bn||ao(n)),s=null,r=n;;){if(r.tag===5||r.tag===26){if(s===null){k=s=r;try{if(m=k.stateNode,h)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{O=k.stateNode;var Mt=k.memoizedProps.style,ut=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;O.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch(ct){dn(k,k.return,ct)}}}else if(r.tag===6){if(s===null){k=r;try{k.stateNode.nodeValue=h?"":k.memoizedProps}catch(ct){dn(k,k.return,ct)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break t;for(;r.sibling===null;){if(r.return===null||r.return===n)break t;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,Xp(n,s))));break;case 19:er(r,n),nr(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Xp(n,u)));break;case 30:break;case 21:break;default:er(r,n),nr(n)}}function nr(n){var r=n.flags;if(r&2){try{for(var s,u=n.return;u!==null;){if(Xx(u)){s=u;break}u=u.return}if(s==null)throw Error(i(160));switch(s.tag){case 27:var h=s.stateNode,m=Gp(n);Nf(n,m,h);break;case 5:var T=s.stateNode;s.flags&32&&(wi(T,""),s.flags&=-33);var O=Gp(n);Nf(n,O,T);break;case 3:case 4:var k=s.stateNode.containerInfo,st=Gp(n);Vp(n,st,k);break;default:throw Error(i(161))}}catch(vt){dn(n,n.return,vt)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Jx(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Jx(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function cs(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)qx(n,r.alternate,r),r=r.sibling}function ao(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:us(4,r,r.return),ao(r);break;case 1:na(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Vx(r,r.return,s),ao(r);break;case 27:Wu(r.stateNode);case 26:case 5:na(r,r.return),ao(r);break;case 22:r.memoizedState===null&&ao(r);break;case 30:ao(r);break;default:ao(r)}n=n.sibling}}function fs(n,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,h=n,m=r,T=m.flags;switch(m.tag){case 0:case 11:case 15:fs(h,m,s),Pu(4,m);break;case 1:if(fs(h,m,s),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(st){dn(u,u.return,st)}if(u=m,h=u.updateQueue,h!==null){var O=u.stateNode;try{var k=h.shared.hiddenCallbacks;if(k!==null)for(h.shared.hiddenCallbacks=null,h=0;h<k.length;h++)Rv(k[h],O)}catch(st){dn(u,u.return,st)}}s&&T&64&&Gx(m),Fu(m,m.return);break;case 27:Wx(m);case 26:case 5:fs(h,m,s),s&&u===null&&T&4&&kx(m),Fu(m,m.return);break;case 12:fs(h,m,s);break;case 13:fs(h,m,s),s&&T&4&&Kx(h,m);break;case 22:m.memoizedState===null&&fs(h,m,s),Fu(m,m.return);break;case 30:break;default:fs(h,m,s)}r=r.sibling}}function Wp(n,r){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&yu(s))}function Yp(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&yu(n))}function ia(n,r,s,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)$x(n,r,s,u),r=r.sibling}function $x(n,r,s,u){var h=r.flags;switch(r.tag){case 0:case 11:case 15:ia(n,r,s,u),h&2048&&Pu(9,r);break;case 1:ia(n,r,s,u);break;case 3:ia(n,r,s,u),h&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&yu(n)));break;case 12:if(h&2048){ia(n,r,s,u),n=r.stateNode;try{var m=r.memoizedProps,T=m.id,O=m.onPostCommit;typeof O=="function"&&O(T,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(k){dn(r,r.return,k)}}else ia(n,r,s,u);break;case 13:ia(n,r,s,u);break;case 23:break;case 22:m=r.stateNode,T=r.alternate,r.memoizedState!==null?m._visibility&2?ia(n,r,s,u):Iu(n,r):m._visibility&2?ia(n,r,s,u):(m._visibility|=2,al(n,r,s,u,(r.subtreeFlags&10256)!==0)),h&2048&&Wp(T,r);break;case 24:ia(n,r,s,u),h&2048&&Yp(r.alternate,r);break;default:ia(n,r,s,u)}}function al(n,r,s,u,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=n,T=r,O=s,k=u,st=T.flags;switch(T.tag){case 0:case 11:case 15:al(m,T,O,k,h),Pu(8,T);break;case 23:break;case 22:var vt=T.stateNode;T.memoizedState!==null?vt._visibility&2?al(m,T,O,k,h):Iu(m,T):(vt._visibility|=2,al(m,T,O,k,h)),h&&st&2048&&Wp(T.alternate,T);break;case 24:al(m,T,O,k,h),h&&st&2048&&Yp(T.alternate,T);break;default:al(m,T,O,k,h)}r=r.sibling}}function Iu(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=n,u=r,h=u.flags;switch(u.tag){case 22:Iu(s,u),h&2048&&Wp(u.alternate,u);break;case 24:Iu(s,u),h&2048&&Yp(u.alternate,u);break;default:Iu(s,u)}r=r.sibling}}var Bu=8192;function sl(n){if(n.subtreeFlags&Bu)for(n=n.child;n!==null;)tS(n),n=n.sibling}function tS(n){switch(n.tag){case 26:sl(n),n.flags&Bu&&n.memoizedState!==null&&YT(kr,n.memoizedState,n.memoizedProps);break;case 5:sl(n);break;case 3:case 4:var r=kr;kr=Wf(n.stateNode.containerInfo),sl(n),kr=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Bu,Bu=16777216,sl(n),Bu=r):sl(n));break;default:sl(n)}}function eS(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function zu(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var u=r[s];ni=u,iS(u,n)}eS(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)nS(n),n=n.sibling}function nS(n){switch(n.tag){case 0:case 11:case 15:zu(n),n.flags&2048&&us(9,n,n.return);break;case 3:zu(n);break;case 12:zu(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Lf(n)):zu(n);break;default:zu(n)}}function Lf(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var u=r[s];ni=u,iS(u,n)}eS(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:us(8,r,r.return),Lf(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,Lf(r));break;default:Lf(r)}n=n.sibling}}function iS(n,r){for(;ni!==null;){var s=ni;switch(s.tag){case 0:case 11:case 15:us(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:yu(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,ni=u;else t:for(s=n;ni!==null;){u=ni;var h=u.sibling,m=u.return;if(jx(u),u===s){ni=null;break t}if(h!==null){h.return=m,ni=h;break t}ni=m}}}var lT={getCacheForType:function(n){var r=gi(Zn),s=r.data.get(n);return s===void 0&&(s=n(),r.data.set(n,s)),s}},uT=typeof WeakMap=="function"?WeakMap:Map,nn=0,vn=null,Ie=null,Xe=0,rn=0,ir=null,hs=!1,ol=!1,qp=!1,Oa=0,Ln=0,ds=0,so=0,jp=0,Ar=0,ll=0,Hu=null,Gi=null,Zp=!1,Kp=0,Of=1/0,Pf=null,ps=null,fi=0,ms=null,ul=null,cl=0,Qp=0,Jp=null,rS=null,Gu=0,$p=null;function rr(){if((nn&2)!==0&&Xe!==0)return Xe&-Xe;if(B.T!==null){var n=Qo;return n!==0?n:sm()}return Rt()}function aS(){Ar===0&&(Ar=(Xe&536870912)===0||Ze?Bt():536870912);var n=Tr.current;return n!==null&&(n.flags|=32),Ar}function ar(n,r,s){(n===vn&&(rn===2||rn===9)||n.cancelPendingCommit!==null)&&(fl(n,0),_s(n,Xe,Ar,!1)),W(n,s),((nn&2)===0||n!==vn)&&(n===vn&&((nn&2)===0&&(so|=s),Ln===4&&_s(n,Xe,Ar,!1)),ra(n))}function sS(n,r,s){if((nn&6)!==0)throw Error(i(327));var u=!s&&(r&124)===0&&(r&n.expiredLanes)===0||Dt(n,r),h=u?hT(n,r):nm(n,r,!0),m=u;do{if(h===0){ol&&!u&&_s(n,r,0,!1);break}else{if(s=n.current.alternate,m&&!cT(s)){h=nm(n,r,!1),m=!1;continue}if(h===2){if(m=r,n.errorRecoveryDisabledLanes&m)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){r=T;t:{var O=n;h=Hu;var k=O.current.memoizedState.isDehydrated;if(k&&(fl(O,T).flags|=256),T=nm(O,T,!1),T!==2){if(qp&&!k){O.errorRecoveryDisabledLanes|=m,so|=m,h=4;break t}m=Gi,Gi=h,m!==null&&(Gi===null?Gi=m:Gi.push.apply(Gi,m))}h=T}if(m=!1,h!==2)continue}}if(h===1){fl(n,0),_s(n,r,0,!0);break}t:{switch(u=n,m=h,m){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:_s(u,r,Ar,!hs);break t;case 2:Gi=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(h=Kp+300-at(),10<h)){if(_s(u,r,Ar,!hs),Vt(u,0,!0)!==0)break t;u.timeoutHandle=PS(oS.bind(null,u,s,Gi,Pf,Zp,r,Ar,so,ll,hs,m,2,-0,0),h);break t}oS(u,s,Gi,Pf,Zp,r,Ar,so,ll,hs,m,0,-0,0)}}break}while(!0);ra(n)}function oS(n,r,s,u,h,m,T,O,k,st,vt,Mt,ut,ct){if(n.timeoutHandle=-1,Mt=r.subtreeFlags,(Mt&8192||(Mt&16785408)===16785408)&&(ju={stylesheets:null,count:0,unsuspend:WT},tS(r),Mt=qT(),Mt!==null)){n.cancelPendingCommit=Mt(pS.bind(null,n,r,m,s,u,h,T,O,k,vt,1,ut,ct)),_s(n,m,T,!st);return}pS(n,r,m,s,u,h,T,O,k)}function cT(n){for(var r=n;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var h=s[u],m=h.getSnapshot;h=h.value;try{if(!$i(m(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _s(n,r,s,u){r&=~jp,r&=~so,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var h=r;0<h;){var m=31-ht(h),T=1<<m;u[m]=-1,h&=~T}s!==0&&mt(n,s,r)}function Ff(){return(nn&6)===0?(Vu(0),!1):!0}function tm(){if(Ie!==null){if(rn===0)var n=Ie.return;else n=Ie,Aa=to=null,gp(n),il=null,Nu=0,n=Ie;for(;n!==null;)Hx(n.alternate,n),n=n.return;Ie=null}}function fl(n,r){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,wT(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),tm(),vn=n,Ie=s=Ea(n.current,null),Xe=r,rn=0,ir=null,hs=!1,ol=Dt(n,r),qp=!1,ll=Ar=jp=so=ds=Ln=0,Gi=Hu=null,Zp=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var h=31-ht(u),m=1<<h;r|=n[h],u&=~m}return Oa=r,rf(),s}function lS(n,r){Ce=null,B.H=Ef,r===Eu||r===df?(r=Tv(),rn=3):r===Mv?(r=Tv(),rn=4):rn=r===Ax?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,ir=r,Ie===null&&(Ln=1,wf(n,yr(r,n.current)))}function uS(){var n=B.H;return B.H=Ef,n===null?Ef:n}function cS(){var n=B.A;return B.A=lT,n}function em(){Ln=4,hs||(Xe&4194048)!==Xe&&Tr.current!==null||(ol=!0),(ds&134217727)===0&&(so&134217727)===0||vn===null||_s(vn,Xe,Ar,!1)}function nm(n,r,s){var u=nn;nn|=2;var h=uS(),m=cS();(vn!==n||Xe!==r)&&(Pf=null,fl(n,r)),r=!1;var T=Ln;t:do try{if(rn!==0&&Ie!==null){var O=Ie,k=ir;switch(rn){case 8:tm(),T=6;break t;case 3:case 2:case 9:case 6:Tr.current===null&&(r=!0);var st=rn;if(rn=0,ir=null,hl(n,O,k,st),s&&ol){T=0;break t}break;default:st=rn,rn=0,ir=null,hl(n,O,k,st)}}fT(),T=Ln;break}catch(vt){lS(n,vt)}while(!0);return r&&n.shellSuspendCounter++,Aa=to=null,nn=u,B.H=h,B.A=m,Ie===null&&(vn=null,Xe=0,rf()),T}function fT(){for(;Ie!==null;)fS(Ie)}function hT(n,r){var s=nn;nn|=2;var u=uS(),h=cS();vn!==n||Xe!==r?(Pf=null,Of=at()+500,fl(n,r)):ol=Dt(n,r);t:do try{if(rn!==0&&Ie!==null){r=Ie;var m=ir;e:switch(rn){case 1:rn=0,ir=null,hl(n,r,m,1);break;case 2:case 9:if(Ev(m)){rn=0,ir=null,hS(r);break}r=function(){rn!==2&&rn!==9||vn!==n||(rn=7),ra(n)},m.then(r,r);break t;case 3:rn=7;break t;case 4:rn=5;break t;case 7:Ev(m)?(rn=0,ir=null,hS(r)):(rn=0,ir=null,hl(n,r,m,7));break;case 5:var T=null;switch(Ie.tag){case 26:T=Ie.memoizedState;case 5:case 27:var O=Ie;if(!T||qS(T)){rn=0,ir=null;var k=O.sibling;if(k!==null)Ie=k;else{var st=O.return;st!==null?(Ie=st,If(st)):Ie=null}break e}}rn=0,ir=null,hl(n,r,m,5);break;case 6:rn=0,ir=null,hl(n,r,m,6);break;case 8:tm(),Ln=6;break t;default:throw Error(i(462))}}dT();break}catch(vt){lS(n,vt)}while(!0);return Aa=to=null,B.H=u,B.A=h,nn=s,Ie!==null?0:(vn=null,Xe=0,rf(),Ln)}function dT(){for(;Ie!==null&&!ye();)fS(Ie)}function fS(n){var r=Bx(n.alternate,n,Oa);n.memoizedProps=n.pendingProps,r===null?If(n):Ie=r}function hS(n){var r=n,s=r.alternate;switch(r.tag){case 15:case 0:r=Nx(s,r,r.pendingProps,r.type,void 0,Xe);break;case 11:r=Nx(s,r,r.pendingProps,r.type.render,r.ref,Xe);break;case 5:gp(r);default:Hx(s,r),r=Ie=dv(r,Oa),r=Bx(s,r,Oa)}n.memoizedProps=n.pendingProps,r===null?If(n):Ie=r}function hl(n,r,s,u){Aa=to=null,gp(r),il=null,Nu=0;var h=r.return;try{if(nT(n,h,r,s,Xe)){Ln=1,wf(n,yr(s,n.current)),Ie=null;return}}catch(m){if(h!==null)throw Ie=h,m;Ln=1,wf(n,yr(s,n.current)),Ie=null;return}r.flags&32768?(Ze||u===1?n=!0:ol||(Xe&536870912)!==0?n=!1:(hs=n=!0,(u===2||u===9||u===3||u===6)&&(u=Tr.current,u!==null&&u.tag===13&&(u.flags|=16384))),dS(r,n)):If(r)}function If(n){var r=n;do{if((r.flags&32768)!==0){dS(r,hs);return}n=r.return;var s=rT(r.alternate,r,Oa);if(s!==null){Ie=s;return}if(r=r.sibling,r!==null){Ie=r;return}Ie=r=n}while(r!==null);Ln===0&&(Ln=5)}function dS(n,r){do{var s=aT(n.alternate,n);if(s!==null){s.flags&=32767,Ie=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(n=n.sibling,n!==null)){Ie=n;return}Ie=n=s}while(n!==null);Ln=6,Ie=null}function pS(n,r,s,u,h,m,T,O,k){n.cancelPendingCommit=null;do Bf();while(fi!==0);if((nn&6)!==0)throw Error(i(327));if(r!==null){if(r===n.current)throw Error(i(177));if(m=r.lanes|r.childLanes,m|=Yd,Ct(n,s,m,T,O,k),n===vn&&(Ie=vn=null,Xe=0),ul=r,ms=n,cl=s,Qp=m,Jp=h,rS=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,gT(me,function(){return xS(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=B.T,B.T=null,h=H.p,H.p=2,T=nn,nn|=4;try{sT(n,r,s)}finally{nn=T,H.p=h,B.T=u}}fi=1,mS(),_S(),gS()}}function mS(){if(fi===1){fi=0;var n=ms,r=ul,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var u=H.p;H.p=2;var h=nn;nn|=4;try{Qx(r,n);var m=pm,T=iv(n.containerInfo),O=m.focusedElem,k=m.selectionRange;if(T!==O&&O&&O.ownerDocument&&nv(O.ownerDocument.documentElement,O)){if(k!==null&&Gd(O)){var st=k.start,vt=k.end;if(vt===void 0&&(vt=st),"selectionStart"in O)O.selectionStart=st,O.selectionEnd=Math.min(vt,O.value.length);else{var Mt=O.ownerDocument||document,ut=Mt&&Mt.defaultView||window;if(ut.getSelection){var ct=ut.getSelection(),pe=O.textContent.length,ce=Math.min(k.start,pe),cn=k.end===void 0?ce:Math.min(k.end,pe);!ct.extend&&ce>cn&&(T=cn,cn=ce,ce=T);var J=ev(O,ce),Y=ev(O,cn);if(J&&Y&&(ct.rangeCount!==1||ct.anchorNode!==J.node||ct.anchorOffset!==J.offset||ct.focusNode!==Y.node||ct.focusOffset!==Y.offset)){var it=Mt.createRange();it.setStart(J.node,J.offset),ct.removeAllRanges(),ce>cn?(ct.addRange(it),ct.extend(Y.node,Y.offset)):(it.setEnd(Y.node,Y.offset),ct.addRange(it))}}}}for(Mt=[],ct=O;ct=ct.parentNode;)ct.nodeType===1&&Mt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<Mt.length;O++){var yt=Mt[O];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}Kf=!!dm,pm=dm=null}finally{nn=h,H.p=u,B.T=s}}n.current=r,fi=2}}function _S(){if(fi===2){fi=0;var n=ms,r=ul,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var u=H.p;H.p=2;var h=nn;nn|=4;try{qx(n,r.alternate,r)}finally{nn=h,H.p=u,B.T=s}}fi=3}}function gS(){if(fi===4||fi===3){fi=0,oe();var n=ms,r=ul,s=cl,u=rS;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?fi=5:(fi=0,ul=ms=null,vS(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(ps=null),bt(s),r=r.stateNode,w&&typeof w.onCommitFiberRoot=="function")try{w.onCommitFiberRoot(I,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=B.T,h=H.p,H.p=2,B.T=null;try{for(var m=n.onRecoverableError,T=0;T<u.length;T++){var O=u[T];m(O.value,{componentStack:O.stack})}}finally{B.T=r,H.p=h}}(cl&3)!==0&&Bf(),ra(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===$p?Gu++:(Gu=0,$p=n):Gu=0,Vu(0)}}function vS(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,yu(r)))}function Bf(n){return mS(),_S(),gS(),xS()}function xS(){if(fi!==5)return!1;var n=ms,r=Qp;Qp=0;var s=bt(cl),u=B.T,h=H.p;try{H.p=32>s?32:s,B.T=null,s=Jp,Jp=null;var m=ms,T=cl;if(fi=0,ul=ms=null,cl=0,(nn&6)!==0)throw Error(i(331));var O=nn;if(nn|=4,nS(m.current),$x(m,m.current,T,s),nn=O,Vu(0,!1),w&&typeof w.onPostCommitFiberRoot=="function")try{w.onPostCommitFiberRoot(I,m)}catch{}return!0}finally{H.p=h,B.T=u,vS(n,r)}}function SS(n,r,s){r=yr(s,r),r=Up(n.stateNode,r,2),n=as(n,r,2),n!==null&&(W(n,2),ra(n))}function dn(n,r,s){if(n.tag===3)SS(n,n,s);else for(;r!==null;){if(r.tag===3){SS(r,n,s);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ps===null||!ps.has(u))){n=yr(s,n),s=bx(2),u=as(r,s,2),u!==null&&(Tx(s,u,r,n),W(u,2),ra(u));break}}r=r.return}}function im(n,r,s){var u=n.pingCache;if(u===null){u=n.pingCache=new uT;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(s)||(qp=!0,h.add(s),n=pT.bind(null,n,r,s),r.then(n,n))}function pT(n,r,s){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,vn===n&&(Xe&s)===s&&(Ln===4||Ln===3&&(Xe&62914560)===Xe&&300>at()-Kp?(nn&2)===0&&fl(n,0):jp|=s,ll===Xe&&(ll=0)),ra(n)}function yS(n,r){r===0&&(r=le()),n=qo(n,r),n!==null&&(W(n,r),ra(n))}function mT(n){var r=n.memoizedState,s=0;r!==null&&(s=r.retryLane),yS(n,s)}function _T(n,r){var s=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(r),yS(n,s)}function gT(n,r){return Yt(n,r)}var zf=null,dl=null,rm=!1,Hf=!1,am=!1,oo=0;function ra(n){n!==dl&&n.next===null&&(dl===null?zf=dl=n:dl=dl.next=n),Hf=!0,rm||(rm=!0,xT())}function Vu(n,r){if(!am&&Hf){am=!0;do for(var s=!1,u=zf;u!==null;){if(n!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var T=u.suspendedLanes,O=u.pingedLanes;m=(1<<31-ht(42|n)+1)-1,m&=h&~(T&~O),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,TS(u,m))}else m=Xe,m=Vt(u,u===vn?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Dt(u,m)||(s=!0,TS(u,m));u=u.next}while(s);am=!1}}function vT(){MS()}function MS(){Hf=rm=!1;var n=0;oo!==0&&(RT()&&(n=oo),oo=0);for(var r=at(),s=null,u=zf;u!==null;){var h=u.next,m=ES(u,r);m===0?(u.next=null,s===null?zf=h:s.next=h,h===null&&(dl=s)):(s=u,(n!==0||(m&3)!==0)&&(Hf=!0)),u=h}Vu(n)}function ES(n,r){for(var s=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var T=31-ht(m),O=1<<T,k=h[T];k===-1?((O&s)===0||(O&u)!==0)&&(h[T]=Nt(O,r)):k<=r&&(n.expiredLanes|=O),m&=~O}if(r=vn,s=Xe,s=Vt(n,n===r?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,s===0||n===r&&(rn===2||rn===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&se(u),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Dt(n,s)){if(r=s&-s,r===n.callbackPriority)return r;switch(u!==null&&se(u),bt(s)){case 2:case 8:s=q;break;case 32:s=me;break;case 268435456:s=Ue;break;default:s=me}return u=bS.bind(null,n),s=Yt(s,u),n.callbackPriority=r,n.callbackNode=s,r}return u!==null&&u!==null&&se(u),n.callbackPriority=2,n.callbackNode=null,2}function bS(n,r){if(fi!==0&&fi!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(Bf()&&n.callbackNode!==s)return null;var u=Xe;return u=Vt(n,n===vn?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(sS(n,u,r),ES(n,at()),n.callbackNode!=null&&n.callbackNode===s?bS.bind(null,n):null)}function TS(n,r){if(Bf())return null;sS(n,r,!0)}function xT(){CT(function(){(nn&6)!==0?Yt(_n,vT):MS()})}function sm(){return oo===0&&(oo=Bt()),oo}function AS(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Gr(""+n)}function RS(n,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,n.id&&s.setAttribute("form",n.id),r.parentNode.insertBefore(s,r),n=new FormData(n),s.parentNode.removeChild(s),n}function ST(n,r,s,u,h){if(r==="submit"&&s&&s.stateNode===h){var m=AS((h[Jt]||null).action),T=u.submitter;T&&(r=(r=T[Jt]||null)?AS(r.formAction):T.getAttribute("formAction"),r!==null&&(m=r,T=null));var O=new tf("action","action",null,u,h);n.push({event:O,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(oo!==0){var k=T?RS(h,T):new FormData(h);Ap(s,{pending:!0,data:k,method:h.method,action:m},null,k)}}else typeof m=="function"&&(O.preventDefault(),k=T?RS(h,T):new FormData(h),Ap(s,{pending:!0,data:k,method:h.method,action:m},m,k))},currentTarget:h}]})}}for(var om=0;om<Wd.length;om++){var lm=Wd[om],yT=lm.toLowerCase(),MT=lm[0].toUpperCase()+lm.slice(1);Vr(yT,"on"+MT)}Vr(sv,"onAnimationEnd"),Vr(ov,"onAnimationIteration"),Vr(lv,"onAnimationStart"),Vr("dblclick","onDoubleClick"),Vr("focusin","onFocus"),Vr("focusout","onBlur"),Vr(zb,"onTransitionRun"),Vr(Hb,"onTransitionStart"),Vr(Gb,"onTransitionCancel"),Vr(uv,"onTransitionEnd"),xn("onMouseEnter",["mouseout","mouseover"]),xn("onMouseLeave",["mouseout","mouseover"]),xn("onPointerEnter",["pointerout","pointerover"]),xn("onPointerLeave",["pointerout","pointerover"]),hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ku="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ET=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ku));function wS(n,r){r=(r&4)!==0;for(var s=0;s<n.length;s++){var u=n[s],h=u.event;u=u.listeners;t:{var m=void 0;if(r)for(var T=u.length-1;0<=T;T--){var O=u[T],k=O.instance,st=O.currentTarget;if(O=O.listener,k!==m&&h.isPropagationStopped())break t;m=O,h.currentTarget=st;try{m(h)}catch(vt){Rf(vt)}h.currentTarget=null,m=k}else for(T=0;T<u.length;T++){if(O=u[T],k=O.instance,st=O.currentTarget,O=O.listener,k!==m&&h.isPropagationStopped())break t;m=O,h.currentTarget=st;try{m(h)}catch(vt){Rf(vt)}h.currentTarget=null,m=k}}}}function Be(n,r){var s=r[ue];s===void 0&&(s=r[ue]=new Set);var u=n+"__bubble";s.has(u)||(CS(r,n,2,!1),s.add(u))}function um(n,r,s){var u=0;r&&(u|=4),CS(s,n,u,r)}var Gf="_reactListening"+Math.random().toString(36).slice(2);function cm(n){if(!n[Gf]){n[Gf]=!0,_i.forEach(function(s){s!=="selectionchange"&&(ET.has(s)||um(s,!1,n),um(s,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Gf]||(r[Gf]=!0,um("selectionchange",!1,r))}}function CS(n,r,s,u){switch($S(r)){case 2:var h=KT;break;case 8:h=QT;break;default:h=bm}s=h.bind(null,r,s,n),h=void 0,!Nd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,s,{capture:!0,passive:h}):n.addEventListener(r,s,!0):h!==void 0?n.addEventListener(r,s,{passive:h}):n.addEventListener(r,s,!1)}function fm(n,r,s,u,h){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var O=u.stateNode.containerInfo;if(O===h)break;if(T===4)for(T=u.return;T!==null;){var k=T.tag;if((k===3||k===4)&&T.stateNode.containerInfo===h)return;T=T.return}for(;O!==null;){if(T=ke(O),T===null)return;if(k=T.tag,k===5||k===6||k===26||k===27){u=m=T;continue t}O=O.parentNode}}u=u.return}Fg(function(){var st=m,vt=Dd(s),Mt=[];t:{var ut=cv.get(n);if(ut!==void 0){var ct=tf,pe=n;switch(n){case"keypress":if(Jc(s)===0)break t;case"keydown":case"keyup":ct=gb;break;case"focusin":pe="focus",ct=Fd;break;case"focusout":pe="blur",ct=Fd;break;case"beforeblur":case"afterblur":ct=Fd;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=ab;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Sb;break;case sv:case ov:case lv:ct=lb;break;case uv:ct=Mb;break;case"scroll":case"scrollend":ct=ib;break;case"wheel":ct=bb;break;case"copy":case"cut":case"paste":ct=cb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Gg;break;case"toggle":case"beforetoggle":ct=Ab}var ce=(r&4)!==0,cn=!ce&&(n==="scroll"||n==="scrollend"),J=ce?ut!==null?ut+"Capture":null:ut;ce=[];for(var Y=st,it;Y!==null;){var yt=Y;if(it=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||it===null||J===null||(yt=lu(Y,J),yt!=null&&ce.push(Xu(Y,yt,it))),cn)break;Y=Y.return}0<ce.length&&(ut=new ct(ut,pe,null,s,vt),Mt.push({event:ut,listeners:ce}))}}if((r&7)===0){t:{if(ut=n==="mouseover"||n==="pointerover",ct=n==="mouseout"||n==="pointerout",ut&&s!==Ho&&(pe=s.relatedTarget||s.fromElement)&&(ke(pe)||pe[jt]))break t;if((ct||ut)&&(ut=vt.window===vt?vt:(ut=vt.ownerDocument)?ut.defaultView||ut.parentWindow:window,ct?(pe=s.relatedTarget||s.toElement,ct=st,pe=pe?ke(pe):null,pe!==null&&(cn=l(pe),ce=pe.tag,pe!==cn||ce!==5&&ce!==27&&ce!==6)&&(pe=null)):(ct=null,pe=st),ct!==pe)){if(ce=zg,yt="onMouseLeave",J="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(ce=Gg,yt="onPointerLeave",J="onPointerEnter",Y="pointer"),cn=ct==null?ut:Un(ct),it=pe==null?ut:Un(pe),ut=new ce(yt,Y+"leave",ct,s,vt),ut.target=cn,ut.relatedTarget=it,yt=null,ke(vt)===st&&(ce=new ce(J,Y+"enter",pe,s,vt),ce.target=it,ce.relatedTarget=cn,yt=ce),cn=yt,ct&&pe)e:{for(ce=ct,J=pe,Y=0,it=ce;it;it=pl(it))Y++;for(it=0,yt=J;yt;yt=pl(yt))it++;for(;0<Y-it;)ce=pl(ce),Y--;for(;0<it-Y;)J=pl(J),it--;for(;Y--;){if(ce===J||J!==null&&ce===J.alternate)break e;ce=pl(ce),J=pl(J)}ce=null}else ce=null;ct!==null&&DS(Mt,ut,ct,ce,!1),pe!==null&&cn!==null&&DS(Mt,cn,pe,ce,!0)}}t:{if(ut=st?Un(st):window,ct=ut.nodeName&&ut.nodeName.toLowerCase(),ct==="select"||ct==="input"&&ut.type==="file")var te=Zg;else if(qg(ut))if(Kg)te=Fb;else{te=Ob;var Ne=Lb}else ct=ut.nodeName,!ct||ct.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?st&&Sr(st.elementType)&&(te=Zg):te=Pb;if(te&&(te=te(n,st))){jg(Mt,te,s,vt);break t}Ne&&Ne(n,ut,st),n==="focusout"&&st&&ut.type==="number"&&st.memoizedProps.value!=null&&ui(ut,"number",ut.value)}switch(Ne=st?Un(st):window,n){case"focusin":(qg(Ne)||Ne.contentEditable==="true")&&(Xo=Ne,Vd=st,_u=null);break;case"focusout":_u=Vd=Xo=null;break;case"mousedown":kd=!0;break;case"contextmenu":case"mouseup":case"dragend":kd=!1,rv(Mt,s,vt);break;case"selectionchange":if(Bb)break;case"keydown":case"keyup":rv(Mt,s,vt)}var re;if(Bd)t:{switch(n){case"compositionstart":var fe="onCompositionStart";break t;case"compositionend":fe="onCompositionEnd";break t;case"compositionupdate":fe="onCompositionUpdate";break t}fe=void 0}else ko?Wg(n,s)&&(fe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(fe="onCompositionStart");fe&&(Vg&&s.locale!=="ko"&&(ko||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&ko&&(re=Ig()):(es=vt,Ld="value"in es?es.value:es.textContent,ko=!0)),Ne=Vf(st,fe),0<Ne.length&&(fe=new Hg(fe,n,null,s,vt),Mt.push({event:fe,listeners:Ne}),re?fe.data=re:(re=Yg(s),re!==null&&(fe.data=re)))),(re=wb?Cb(n,s):Db(n,s))&&(fe=Vf(st,"onBeforeInput"),0<fe.length&&(Ne=new Hg("onBeforeInput","beforeinput",null,s,vt),Mt.push({event:Ne,listeners:fe}),Ne.data=re)),ST(Mt,n,st,s,vt)}wS(Mt,r)})}function Xu(n,r,s){return{instance:n,listener:r,currentTarget:s}}function Vf(n,r){for(var s=r+"Capture",u=[];n!==null;){var h=n,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=lu(n,s),h!=null&&u.unshift(Xu(n,h,m)),h=lu(n,r),h!=null&&u.push(Xu(n,h,m))),n.tag===3)return u;n=n.return}return[]}function pl(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function DS(n,r,s,u,h){for(var m=r._reactName,T=[];s!==null&&s!==u;){var O=s,k=O.alternate,st=O.stateNode;if(O=O.tag,k!==null&&k===u)break;O!==5&&O!==26&&O!==27||st===null||(k=st,h?(st=lu(s,m),st!=null&&T.unshift(Xu(s,st,k))):h||(st=lu(s,m),st!=null&&T.push(Xu(s,st,k)))),s=s.return}T.length!==0&&n.push({event:r,listeners:T})}var bT=/\r\n?/g,TT=/\u0000|\uFFFD/g;function US(n){return(typeof n=="string"?n:""+n).replace(bT,`
`).replace(TT,"")}function NS(n,r){return r=US(r),US(n)===r}function kf(){}function un(n,r,s,u,h,m){switch(s){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||wi(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&wi(n,""+u);break;case"className":U(n,"class",u);break;case"tabIndex":U(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":U(n,s,u);break;case"style":yn(n,u,m);break;case"data":if(r!=="object"){U(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||s!=="href")){n.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(s);break}u=Gr(""+u),n.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(r!=="input"&&un(n,r,"name",h.name,h,null),un(n,r,"formEncType",h.formEncType,h,null),un(n,r,"formMethod",h.formMethod,h,null),un(n,r,"formTarget",h.formTarget,h,null)):(un(n,r,"encType",h.encType,h,null),un(n,r,"method",h.method,h,null),un(n,r,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(s);break}u=Gr(""+u),n.setAttribute(s,u);break;case"onClick":u!=null&&(n.onclick=kf);break;case"onScroll":u!=null&&Be("scroll",n);break;case"onScrollEnd":u!=null&&Be("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}s=Gr(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,""+u):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":u===!0?n.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,u):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(s,u):n.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(s):n.setAttribute(s,u);break;case"popover":Be("beforetoggle",n),Be("toggle",n),li(n,"popover",u);break;case"xlinkActuate":j(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":j(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":j(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":j(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":j(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":j(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":j(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":j(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":j(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":li(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=on.get(s)||s,li(n,s,u))}}function hm(n,r,s,u,h,m){switch(s){case"style":yn(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"children":typeof u=="string"?wi(n,u):(typeof u=="number"||typeof u=="bigint")&&wi(n,""+u);break;case"onScroll":u!=null&&Be("scroll",n);break;case"onScrollEnd":u!=null&&Be("scrollend",n);break;case"onClick":u!=null&&(n.onclick=kf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bn.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),m=n[Jt]||null,m=m!=null?m[s]:null,typeof m=="function"&&n.removeEventListener(r,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(r,u,h);break t}s in n?n[s]=u:u===!0?n.setAttribute(s,""):li(n,s,u)}}}function hi(n,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",n),Be("load",n);var u=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var T=s[m];if(T!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:un(n,r,m,T,s,null)}}h&&un(n,r,"srcSet",s.srcSet,s,null),u&&un(n,r,"src",s.src,s,null);return;case"input":Be("invalid",n);var O=m=T=h=null,k=null,st=null;for(u in s)if(s.hasOwnProperty(u)){var vt=s[u];if(vt!=null)switch(u){case"name":h=vt;break;case"type":T=vt;break;case"checked":k=vt;break;case"defaultChecked":st=vt;break;case"value":m=vt;break;case"defaultValue":O=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(i(137,r));break;default:un(n,r,u,vt,s,null)}}Kt(n,m,O,k,st,T,h,!1),ie(n);return;case"select":Be("invalid",n),u=T=m=null;for(h in s)if(s.hasOwnProperty(h)&&(O=s[h],O!=null))switch(h){case"value":m=O;break;case"defaultValue":T=O;break;case"multiple":u=O;default:un(n,r,h,O,s,null)}r=m,s=T,n.multiple=!!u,r!=null?Ae(n,!!u,r,!1):s!=null&&Ae(n,!!u,s,!0);return;case"textarea":Be("invalid",n),m=h=u=null;for(T in s)if(s.hasOwnProperty(T)&&(O=s[T],O!=null))switch(T){case"value":u=O;break;case"defaultValue":h=O;break;case"children":m=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(i(91));break;default:un(n,r,T,O,s,null)}Ji(n,u,h,m),ie(n);return;case"option":for(k in s)s.hasOwnProperty(k)&&(u=s[k],u!=null)&&(k==="selected"?n.selected=u&&typeof u!="function"&&typeof u!="symbol":un(n,r,k,u,s,null));return;case"dialog":Be("beforetoggle",n),Be("toggle",n),Be("cancel",n),Be("close",n);break;case"iframe":case"object":Be("load",n);break;case"video":case"audio":for(u=0;u<ku.length;u++)Be(ku[u],n);break;case"image":Be("error",n),Be("load",n);break;case"details":Be("toggle",n);break;case"embed":case"source":case"link":Be("error",n),Be("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in s)if(s.hasOwnProperty(st)&&(u=s[st],u!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:un(n,r,st,u,s,null)}return;default:if(Sr(r)){for(vt in s)s.hasOwnProperty(vt)&&(u=s[vt],u!==void 0&&hm(n,r,vt,u,s,void 0));return}}for(O in s)s.hasOwnProperty(O)&&(u=s[O],u!=null&&un(n,r,O,u,s,null))}function AT(n,r,s,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,T=null,O=null,k=null,st=null,vt=null;for(ct in s){var Mt=s[ct];if(s.hasOwnProperty(ct)&&Mt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":k=Mt;default:u.hasOwnProperty(ct)||un(n,r,ct,null,u,Mt)}}for(var ut in u){var ct=u[ut];if(Mt=s[ut],u.hasOwnProperty(ut)&&(ct!=null||Mt!=null))switch(ut){case"type":m=ct;break;case"name":h=ct;break;case"checked":st=ct;break;case"defaultChecked":vt=ct;break;case"value":T=ct;break;case"defaultValue":O=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(i(137,r));break;default:ct!==Mt&&un(n,r,ut,ct,u,Mt)}}Vn(n,T,O,k,st,vt,m,h);return;case"select":ct=T=O=ut=null;for(m in s)if(k=s[m],s.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":ct=k;default:u.hasOwnProperty(m)||un(n,r,m,null,u,k)}for(h in u)if(m=u[h],k=s[h],u.hasOwnProperty(h)&&(m!=null||k!=null))switch(h){case"value":ut=m;break;case"defaultValue":O=m;break;case"multiple":T=m;default:m!==k&&un(n,r,h,m,u,k)}r=O,s=T,u=ct,ut!=null?Ae(n,!!s,ut,!1):!!u!=!!s&&(r!=null?Ae(n,!!s,r,!0):Ae(n,!!s,s?[]:"",!1));return;case"textarea":ct=ut=null;for(O in s)if(h=s[O],s.hasOwnProperty(O)&&h!=null&&!u.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:un(n,r,O,null,u,h)}for(T in u)if(h=u[T],m=s[T],u.hasOwnProperty(T)&&(h!=null||m!=null))switch(T){case"value":ut=h;break;case"defaultValue":ct=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==m&&un(n,r,T,h,u,m)}Ri(n,ut,ct);return;case"option":for(var pe in s)ut=s[pe],s.hasOwnProperty(pe)&&ut!=null&&!u.hasOwnProperty(pe)&&(pe==="selected"?n.selected=!1:un(n,r,pe,null,u,ut));for(k in u)ut=u[k],ct=s[k],u.hasOwnProperty(k)&&ut!==ct&&(ut!=null||ct!=null)&&(k==="selected"?n.selected=ut&&typeof ut!="function"&&typeof ut!="symbol":un(n,r,k,ut,u,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in s)ut=s[ce],s.hasOwnProperty(ce)&&ut!=null&&!u.hasOwnProperty(ce)&&un(n,r,ce,null,u,ut);for(st in u)if(ut=u[st],ct=s[st],u.hasOwnProperty(st)&&ut!==ct&&(ut!=null||ct!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(i(137,r));break;default:un(n,r,st,ut,u,ct)}return;default:if(Sr(r)){for(var cn in s)ut=s[cn],s.hasOwnProperty(cn)&&ut!==void 0&&!u.hasOwnProperty(cn)&&hm(n,r,cn,void 0,u,ut);for(vt in u)ut=u[vt],ct=s[vt],!u.hasOwnProperty(vt)||ut===ct||ut===void 0&&ct===void 0||hm(n,r,vt,ut,u,ct);return}}for(var J in s)ut=s[J],s.hasOwnProperty(J)&&ut!=null&&!u.hasOwnProperty(J)&&un(n,r,J,null,u,ut);for(Mt in u)ut=u[Mt],ct=s[Mt],!u.hasOwnProperty(Mt)||ut===ct||ut==null&&ct==null||un(n,r,Mt,ut,u,ct)}var dm=null,pm=null;function Xf(n){return n.nodeType===9?n:n.ownerDocument}function LS(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function OS(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function mm(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var _m=null;function RT(){var n=window.event;return n&&n.type==="popstate"?n===_m?!1:(_m=n,!0):(_m=null,!1)}var PS=typeof setTimeout=="function"?setTimeout:void 0,wT=typeof clearTimeout=="function"?clearTimeout:void 0,FS=typeof Promise=="function"?Promise:void 0,CT=typeof queueMicrotask=="function"?queueMicrotask:typeof FS<"u"?function(n){return FS.resolve(null).then(n).catch(DT)}:PS;function DT(n){setTimeout(function(){throw n})}function gs(n){return n==="head"}function IS(n,r){var s=r,u=0,h=0;do{var m=s.nextSibling;if(n.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<u&&8>u){s=u;var T=n.ownerDocument;if(s&1&&Wu(T.documentElement),s&2&&Wu(T.body),s&4)for(s=T.head,Wu(s),T=s.firstChild;T;){var O=T.nextSibling,k=T.nodeName;T[Qe]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&T.rel.toLowerCase()==="stylesheet"||s.removeChild(T),T=O}}if(h===0){n.removeChild(m),$u(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:u=s.charCodeAt(0)-48;else u=0;s=m}while(s);$u(r)}function gm(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":gm(s),Je(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function UT(n,r,s,u){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Qe])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Xr(n.nextSibling),n===null)break}return null}function NT(n,r,s){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Xr(n.nextSibling),n===null))return null;return n}function vm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function LT(n,r){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")r();else{var u=function(){r(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Xr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var xm=null;function BS(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return n;r--}else s==="/$"&&r++}n=n.previousSibling}return null}function zS(n,r,s){switch(r=Xf(s),n){case"html":if(n=r.documentElement,!n)throw Error(i(452));return n;case"head":if(n=r.head,!n)throw Error(i(453));return n;case"body":if(n=r.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function Wu(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Je(n)}var Rr=new Map,HS=new Set;function Wf(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Pa=H.d;H.d={f:OT,r:PT,D:FT,C:IT,L:BT,m:zT,X:GT,S:HT,M:VT};function OT(){var n=Pa.f(),r=Ff();return n||r}function PT(n){var r=Pe(n);r!==null&&r.tag===5&&r.type==="form"?sx(r):Pa.r(n)}var ml=typeof document>"u"?null:document;function GS(n,r,s){var u=ml;if(u&&typeof r=="string"&&r){var h=Te(r);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),HS.has(h)||(HS.add(h),n={rel:n,crossOrigin:s,href:r},u.querySelector(h)===null&&(r=u.createElement("link"),hi(r,"link",n),Fe(r),u.head.appendChild(r)))}}function FT(n){Pa.D(n),GS("dns-prefetch",n,null)}function IT(n,r){Pa.C(n,r),GS("preconnect",n,r)}function BT(n,r,s){Pa.L(n,r,s);var u=ml;if(u&&n&&r){var h='link[rel="preload"][as="'+Te(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Te(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Te(s.imageSizes)+'"]')):h+='[href="'+Te(n)+'"]';var m=h;switch(r){case"style":m=_l(n);break;case"script":m=gl(n)}Rr.has(m)||(n=_({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:n,as:r},s),Rr.set(m,n),u.querySelector(h)!==null||r==="style"&&u.querySelector(Yu(m))||r==="script"&&u.querySelector(qu(m))||(r=u.createElement("link"),hi(r,"link",n),Fe(r),u.head.appendChild(r)))}}function zT(n,r){Pa.m(n,r);var s=ml;if(s&&n){var u=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+Te(u)+'"][href="'+Te(n)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=gl(n)}if(!Rr.has(m)&&(n=_({rel:"modulepreload",href:n},r),Rr.set(m,n),s.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(qu(m)))return}u=s.createElement("link"),hi(u,"link",n),Fe(u),s.head.appendChild(u)}}}function HT(n,r,s){Pa.S(n,r,s);var u=ml;if(u&&n){var h=We(u).hoistableStyles,m=_l(n);r=r||"default";var T=h.get(m);if(!T){var O={loading:0,preload:null};if(T=u.querySelector(Yu(m)))O.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":r},s),(s=Rr.get(m))&&Sm(n,s);var k=T=u.createElement("link");Fe(k),hi(k,"link",n),k._p=new Promise(function(st,vt){k.onload=st,k.onerror=vt}),k.addEventListener("load",function(){O.loading|=1}),k.addEventListener("error",function(){O.loading|=2}),O.loading|=4,Yf(T,r,u)}T={type:"stylesheet",instance:T,count:1,state:O},h.set(m,T)}}}function GT(n,r){Pa.X(n,r);var s=ml;if(s&&n){var u=We(s).hoistableScripts,h=gl(n),m=u.get(h);m||(m=s.querySelector(qu(h)),m||(n=_({src:n,async:!0},r),(r=Rr.get(h))&&ym(n,r),m=s.createElement("script"),Fe(m),hi(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function VT(n,r){Pa.M(n,r);var s=ml;if(s&&n){var u=We(s).hoistableScripts,h=gl(n),m=u.get(h);m||(m=s.querySelector(qu(h)),m||(n=_({src:n,async:!0,type:"module"},r),(r=Rr.get(h))&&ym(n,r),m=s.createElement("script"),Fe(m),hi(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function VS(n,r,s,u){var h=(h=$.current)?Wf(h):null;if(!h)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=_l(s.href),s=We(h).hoistableStyles,u=s.get(r),u||(u={type:"style",instance:null,count:0,state:null},s.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=_l(s.href);var m=We(h).hoistableStyles,T=m.get(n);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,T),(m=h.querySelector(Yu(n)))&&!m._p&&(T.instance=m,T.state.loading=5),Rr.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Rr.set(n,s),m||kT(h,n,s,T.state))),r&&u===null)throw Error(i(528,""));return T}if(r&&u!==null)throw Error(i(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=gl(s),s=We(h).hoistableScripts,u=s.get(r),u||(u={type:"script",instance:null,count:0,state:null},s.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function _l(n){return'href="'+Te(n)+'"'}function Yu(n){return'link[rel="stylesheet"]['+n+"]"}function kS(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function kT(n,r,s,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),hi(r,"link",s),Fe(r),n.head.appendChild(r))}function gl(n){return'[src="'+Te(n)+'"]'}function qu(n){return"script[async]"+n}function XS(n,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+Te(s.href)+'"]');if(u)return r.instance=u,Fe(u),u;var h=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),Fe(u),hi(u,"style",h),Yf(u,s.precedence,n),r.instance=u;case"stylesheet":h=_l(s.href);var m=n.querySelector(Yu(h));if(m)return r.state.loading|=4,r.instance=m,Fe(m),m;u=kS(s),(h=Rr.get(h))&&Sm(u,h),m=(n.ownerDocument||n).createElement("link"),Fe(m);var T=m;return T._p=new Promise(function(O,k){T.onload=O,T.onerror=k}),hi(m,"link",u),r.state.loading|=4,Yf(m,s.precedence,n),r.instance=m;case"script":return m=gl(s.src),(h=n.querySelector(qu(m)))?(r.instance=h,Fe(h),h):(u=s,(h=Rr.get(m))&&(u=_({},s),ym(u,h)),n=n.ownerDocument||n,h=n.createElement("script"),Fe(h),hi(h,"link",u),n.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Yf(u,s.precedence,n));return r.instance}function Yf(n,r,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,T=0;T<u.length;T++){var O=u[T];if(O.dataset.precedence===r)m=O;else if(m!==h)break}m?m.parentNode.insertBefore(n,m.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(n,r.firstChild))}function Sm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function ym(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var qf=null;function WS(n,r,s){if(qf===null){var u=new Map,h=qf=new Map;h.set(s,u)}else h=qf,u=h.get(s),u||(u=new Map,h.set(s,u));if(u.has(n))return u;for(u.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var m=s[h];if(!(m[Qe]||m[xt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(r)||"";T=n+T;var O=u.get(T);O?O.push(m):u.set(T,[m])}}return u}function YS(n,r,s){n=n.ownerDocument||n,n.head.insertBefore(s,r==="title"?n.querySelector("head > title"):null)}function XT(n,r,s){if(s===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(n=r.disabled,typeof r.precedence=="string"&&n==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function qS(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ju=null;function WT(){}function YT(n,r,s){if(ju===null)throw Error(i(475));var u=ju;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=_l(s.href),m=n.querySelector(Yu(h));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=jf.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=m,Fe(m);return}m=n.ownerDocument||n,s=kS(s),(h=Rr.get(h))&&Sm(s,h),m=m.createElement("link"),Fe(m);var T=m;T._p=new Promise(function(O,k){T.onload=O,T.onerror=k}),hi(m,"link",s),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=jf.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function qT(){if(ju===null)throw Error(i(475));var n=ju;return n.stylesheets&&n.count===0&&Mm(n,n.stylesheets),0<n.count?function(r){var s=setTimeout(function(){if(n.stylesheets&&Mm(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(s)}}:null}function jf(){if(this.count--,this.count===0){if(this.stylesheets)Mm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Zf=null;function Mm(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Zf=new Map,r.forEach(jT,n),Zf=null,jf.call(n))}function jT(n,r){if(!(r.state.loading&4)){var s=Zf.get(n);if(s)var u=s.get(null);else{s=new Map,Zf.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var T=h[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(s.set(T.dataset.precedence,T),u=T)}u&&s.set(null,u)}h=r.instance,T=h.getAttribute("data-precedence"),m=s.get(T)||u,m===u&&s.set(null,h),s.set(T,h),this.count++,u=jf.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),r.state.loading|=4}}var Zu={$$typeof:D,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function ZT(n,r,s,u,h,m,T,O){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=de(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=de(0),this.hiddenUpdates=de(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function jS(n,r,s,u,h,m,T,O,k,st,vt,Mt){return n=new ZT(n,r,s,T,O,k,st,Mt),r=1,m===!0&&(r|=24),m=tr(3,null,null,r),n.current=m,m.stateNode=n,r=ip(),r.refCount++,n.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:s,cache:r},op(m),n}function ZS(n){return n?(n=jo,n):jo}function KS(n,r,s,u,h,m){h=ZS(h),u.context===null?u.context=h:u.pendingContext=h,u=rs(r),u.payload={element:s},m=m===void 0?null:m,m!==null&&(u.callback=m),s=as(n,u,r),s!==null&&(ar(s,n,r),Tu(s,n,r))}function QS(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<r?s:r}}function Em(n,r){QS(n,r),(n=n.alternate)&&QS(n,r)}function JS(n){if(n.tag===13){var r=qo(n,67108864);r!==null&&ar(r,n,67108864),Em(n,67108864)}}var Kf=!0;function KT(n,r,s,u){var h=B.T;B.T=null;var m=H.p;try{H.p=2,bm(n,r,s,u)}finally{H.p=m,B.T=h}}function QT(n,r,s,u){var h=B.T;B.T=null;var m=H.p;try{H.p=8,bm(n,r,s,u)}finally{H.p=m,B.T=h}}function bm(n,r,s,u){if(Kf){var h=Tm(u);if(h===null)fm(n,r,u,Qf,s),ty(n,u);else if($T(h,n,r,s,u))u.stopPropagation();else if(ty(n,u),r&4&&-1<JT.indexOf(n)){for(;h!==null;){var m=Pe(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=Ft(m.pendingLanes);if(T!==0){var O=m;for(O.pendingLanes|=2,O.entangledLanes|=2;T;){var k=1<<31-ht(T);O.entanglements[1]|=k,T&=~k}ra(m),(nn&6)===0&&(Of=at()+500,Vu(0))}}break;case 13:O=qo(m,2),O!==null&&ar(O,m,2),Ff(),Em(m,2)}if(m=Tm(u),m===null&&fm(n,r,u,Qf,s),m===h)break;h=m}h!==null&&u.stopPropagation()}else fm(n,r,u,null,s)}}function Tm(n){return n=Dd(n),Am(n)}var Qf=null;function Am(n){if(Qf=null,n=ke(n),n!==null){var r=l(n);if(r===null)n=null;else{var s=r.tag;if(s===13){if(n=c(r),n!==null)return n;n=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Qf=n,null}function $S(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(we()){case _n:return 2;case q:return 8;case me:case he:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Rm=!1,vs=null,xs=null,Ss=null,Ku=new Map,Qu=new Map,ys=[],JT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ty(n,r){switch(n){case"focusin":case"focusout":vs=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":Ss=null;break;case"pointerover":case"pointerout":Ku.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qu.delete(r.pointerId)}}function Ju(n,r,s,u,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:s,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},r!==null&&(r=Pe(r),r!==null&&JS(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function $T(n,r,s,u,h){switch(r){case"focusin":return vs=Ju(vs,n,r,s,u,h),!0;case"dragenter":return xs=Ju(xs,n,r,s,u,h),!0;case"mouseover":return Ss=Ju(Ss,n,r,s,u,h),!0;case"pointerover":var m=h.pointerId;return Ku.set(m,Ju(Ku.get(m)||null,n,r,s,u,h)),!0;case"gotpointercapture":return m=h.pointerId,Qu.set(m,Ju(Qu.get(m)||null,n,r,s,u,h)),!0}return!1}function ey(n){var r=ke(n.target);if(r!==null){var s=l(r);if(s!==null){if(r=s.tag,r===13){if(r=c(s),r!==null){n.blockedOn=r,Lt(n.priority,function(){if(s.tag===13){var u=rr();u=Ut(u);var h=qo(s,u);h!==null&&ar(h,s,u),Em(s,u)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Jf(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var s=Tm(n.nativeEvent);if(s===null){s=n.nativeEvent;var u=new s.constructor(s.type,s);Ho=u,s.target.dispatchEvent(u),Ho=null}else return r=Pe(s),r!==null&&JS(r),n.blockedOn=s,!1;r.shift()}return!0}function ny(n,r,s){Jf(n)&&s.delete(r)}function tA(){Rm=!1,vs!==null&&Jf(vs)&&(vs=null),xs!==null&&Jf(xs)&&(xs=null),Ss!==null&&Jf(Ss)&&(Ss=null),Ku.forEach(ny),Qu.forEach(ny)}function $f(n,r){n.blockedOn===r&&(n.blockedOn=null,Rm||(Rm=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,tA)))}var th=null;function iy(n){th!==n&&(th=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){th===n&&(th=null);for(var r=0;r<n.length;r+=3){var s=n[r],u=n[r+1],h=n[r+2];if(typeof u!="function"){if(Am(u||s)===null)continue;break}var m=Pe(s);m!==null&&(n.splice(r,3),r-=3,Ap(m,{pending:!0,data:h,method:s.method,action:u},u,h))}}))}function $u(n){function r(k){return $f(k,n)}vs!==null&&$f(vs,n),xs!==null&&$f(xs,n),Ss!==null&&$f(Ss,n),Ku.forEach(r),Qu.forEach(r);for(var s=0;s<ys.length;s++){var u=ys[s];u.blockedOn===n&&(u.blockedOn=null)}for(;0<ys.length&&(s=ys[0],s.blockedOn===null);)ey(s),s.blockedOn===null&&ys.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var h=s[u],m=s[u+1],T=h[Jt]||null;if(typeof m=="function")T||iy(s);else if(T){var O=null;if(m&&m.hasAttribute("formAction")){if(h=m,T=m[Jt]||null)O=T.formAction;else if(Am(h)!==null)continue}else O=T.action;typeof O=="function"?s[u+1]=O:(s.splice(u,3),u-=3),iy(s)}}}function wm(n){this._internalRoot=n}eh.prototype.render=wm.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(i(409));var s=r.current,u=rr();KS(s,u,n,r,null,null)},eh.prototype.unmount=wm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;KS(n.current,2,null,n,null,null),Ff(),r[jt]=null}};function eh(n){this._internalRoot=n}eh.prototype.unstable_scheduleHydration=function(n){if(n){var r=Rt();n={blockedOn:null,target:n,priority:r};for(var s=0;s<ys.length&&r!==0&&r<ys[s].priority;s++);ys.splice(s,0,n),s===0&&ey(n)}};var ry=t.version;if(ry!=="19.1.0")throw Error(i(527,ry,"19.1.0"));H.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=p(r),n=n!==null?d(n):null,n=n===null?null:n.stateNode,n};var eA={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nh.isDisabled&&nh.supportsFiber)try{I=nh.inject(eA),w=nh}catch{}}return ec.createRoot=function(n,r){if(!a(n))throw Error(i(299));var s=!1,u="",h=Sx,m=yx,T=Mx,O=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(O=r.unstable_transitionCallbacks)),r=jS(n,1,!1,null,null,s,u,h,m,T,O,null),n[jt]=r.current,cm(n),new wm(r)},ec.hydrateRoot=function(n,r,s){if(!a(n))throw Error(i(299));var u=!1,h="",m=Sx,T=yx,O=Mx,k=null,st=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(T=s.onCaughtError),s.onRecoverableError!==void 0&&(O=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(k=s.unstable_transitionCallbacks),s.formState!==void 0&&(st=s.formState)),r=jS(n,1,!0,r,s??null,u,h,m,T,O,k,st),r.context=ZS(null),s=r.current,u=rr(),u=Ut(u),h=rs(u),h.callback=null,as(s,h,u),s=u,r.current.lanes=s,W(r,s),ra(r),n[jt]=r.current,cm(n),new eh(r)},ec.version="19.1.0",ec}var py;function fA(){if(py)return Dm.exports;py=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Dm.exports=cA(),Dm.exports}var hA=fA(),On=W0();function Ga(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function KM(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var gr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oc={duration:.5,overwrite:!1,delay:0},Y0,mi,En,Pr=1e8,mn=1/Pr,w_=Math.PI*2,dA=w_/4,pA=0,QM=Math.sqrt,mA=Math.cos,_A=Math.sin,oi=function(t){return typeof t=="string"},Pn=function(t){return typeof t=="function"},Ka=function(t){return typeof t=="number"},q0=function(t){return typeof t>"u"},va=function(t){return typeof t=="object"},Wi=function(t){return t!==!1},j0=function(){return typeof window<"u"},ih=function(t){return Pn(t)||oi(t)},JM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ai=Array.isArray,gA=/random\([^)]+\)/g,vA=/,\s*/g,my=/(?:-?\.?\d|\.)+/gi,$M=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pm=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tE=/[+-]=-?[.\d]+/,xA=/[^,'"\[\]\s]+/gi,SA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wn,oa,C_,Z0,vr={},ed={},eE,nE=function(t){return(ed=Kl(t,vr))&&Qi},K0=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Pc=function(t,e){return!e&&console.warn(t)},iE=function(t,e){return t&&(vr[t]=e)&&ed&&(ed[t]=e)||vr},Fc=function(){return 0},yA={suppressEvents:!0,isStart:!0,kill:!1},Hh={suppressEvents:!0,kill:!1},MA={suppressEvents:!0},Q0={},Is=[],D_={},rE,cr={},Fm={},_y=30,Gh=[],J0="",$0=function(t){var e=t[0],i,a;if(va(e)||Pn(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(a=Gh.length;a--&&!Gh[a].targetTest(e););i=Gh[a]}for(a=t.length;a--;)t[a]&&(t[a]._gsap||(t[a]._gsap=new AE(t[a],i)))||t.splice(a,1);return t},To=function(t){return t._gsap||$0(Fr(t))[0]._gsap},aE=function(t,e,i){return(i=t[e])&&Pn(i)?t[e]():q0(i)&&t.getAttribute&&t.getAttribute(e)||i},Yi=function(t,e){return(t=t.split(",")).forEach(e)||t},zn=function(t){return Math.round(t*1e5)/1e5||0},Rn=function(t){return Math.round(t*1e7)/1e7||0},Gl=function(t,e){var i=e.charAt(0),a=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+a:i==="-"?t-a:i==="*"?t*a:t/a},EA=function(t,e){for(var i=e.length,a=0;t.indexOf(e[a])<0&&++a<i;);return a<i},nd=function(){var t=Is.length,e=Is.slice(0),i,a;for(D_={},Is.length=0,i=0;i<t;i++)a=e[i],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},tg=function(t){return!!(t._initted||t._startAt||t.add)},sE=function(t,e,i,a){Is.length&&!mi&&nd(),t.render(e,i,!!(mi&&e<0&&tg(t))),Is.length&&!mi&&nd()},oE=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(xA).length<2?e:oi(t)?t.trim():t},lE=function(t){return t},xr=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},bA=function(t){return function(e,i){for(var a in i)a in e||a==="duration"&&t||a==="ease"||(e[a]=i[a])}},Kl=function(t,e){for(var i in e)t[i]=e[i];return t},gy=function o(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=va(e[i])?o(t[i]||(t[i]={}),e[i]):e[i]);return t},id=function(t,e){var i={},a;for(a in t)a in e||(i[a]=t[a]);return i},Mc=function(t){var e=t.parent||wn,i=t.keyframes?bA(Ai(t.keyframes)):xr;if(Wi(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},TA=function(t,e){for(var i=t.length,a=i===e.length;a&&i--&&t[i]===e[i];);return i<0},uE=function(t,e,i,a,l){var c=t[a],f;if(l)for(f=e[l];c&&c[l]>f;)c=c._prev;return c?(e._next=c._next,c._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[a]=e,e._prev=c,e.parent=e._dp=t,e},yd=function(t,e,i,a){i===void 0&&(i="_first"),a===void 0&&(a="_last");var l=e._prev,c=e._next;l?l._next=c:t[i]===e&&(t[i]=c),c?c._prev=l:t[a]===e&&(t[a]=l),e._next=e._prev=e.parent=null},Hs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ao=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},AA=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},U_=function(t,e,i,a){return t._startAt&&(mi?t._startAt.revert(Hh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,a))},RA=function o(t){return!t||t._ts&&o(t.parent)},vy=function(t){return t._repeat?Ql(t._tTime,t=t.duration()+t._rDelay)*t:0},Ql=function(t,e){var i=Math.floor(t=Rn(t/e));return t&&i===t?i-1:i},rd=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Md=function(t){return t._end=Rn(t._start+(t._tDur/Math.abs(t._ts||t._rts||mn)||0))},Ed=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Rn(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Md(t),i._dirty||Ao(i,t)),t},cE=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=rd(t.rawTime(),e),(!e._dur||Yc(0,e.totalDuration(),i)-e._tTime>mn)&&e.render(i,!0)),Ao(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-mn}},ca=function(t,e,i,a){return e.parent&&Hs(e),e._start=Rn((Ka(i)?i:i||t!==wn?Cr(t,i,e):t._time)+e._delay),e._end=Rn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),uE(t,e,"_first","_last",t._sort?"_start":0),N_(e)||(t._recent=e),a||cE(t,e),t._ts<0&&Ed(t,t._tTime),t},fE=function(t,e){return(vr.ScrollTrigger||K0("scrollTrigger",e))&&vr.ScrollTrigger.create(e,t)},hE=function(t,e,i,a,l){if(ng(t,e,l),!t._initted)return 1;if(!i&&t._pt&&!mi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&rE!==hr.frame)return Is.push(t),t._lazy=[l,a],1},wA=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},N_=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},CA=function(t,e,i,a){var l=t.ratio,c=e<0||!e&&(!t._start&&wA(t)&&!(!t._initted&&N_(t))||(t._ts<0||t._dp._ts<0)&&!N_(t))?0:1,f=t._rDelay,p=0,d,_,x;if(f&&t._repeat&&(p=Yc(0,t._tDur,e),_=Ql(p,f),t._yoyo&&_&1&&(c=1-c),_!==Ql(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||mi||a||t._zTime===mn||!e&&t._zTime){if(!t._initted&&hE(t,e,a,i,p))return;for(x=t._zTime,t._zTime=e||(i?mn:0),i||(i=e&&!x),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;e<0&&U_(t,e,i,!0),t._onUpdate&&!i&&pr(t,"onUpdate"),p&&t._repeat&&!i&&t.parent&&pr(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===c&&(c&&Hs(t,1),!i&&!mi&&(pr(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},DA=function(t,e,i){var a;if(i>e)for(a=t._first;a&&a._start<=i;){if(a.data==="isPause"&&a._start>e)return a;a=a._next}else for(a=t._last;a&&a._start>=i;){if(a.data==="isPause"&&a._start<e)return a;a=a._prev}},Jl=function(t,e,i,a){var l=t._repeat,c=Rn(e)||0,f=t._tTime/t._tDur;return f&&!a&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:Rn(c*(l+1)+t._rDelay*l):c,f>0&&!a&&Ed(t,t._tTime=t._tDur*f),t.parent&&Md(t),i||Ao(t.parent,t),t},xy=function(t){return t instanceof Xi?Ao(t):Jl(t,t._dur)},UA={_start:0,endTime:Fc,totalDuration:Fc},Cr=function o(t,e,i){var a=t.labels,l=t._recent||UA,c=t.duration()>=Pr?l.endTime(!1):t._dur,f,p,d;return oi(e)&&(isNaN(e)||e in a)?(p=e.charAt(0),d=e.substr(-1)==="%",f=e.indexOf("="),p==="<"||p===">"?(f>=0&&(e=e.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(d?(f<0?l:i).totalDuration()/100:1)):f<0?(e in a||(a[e]=c),a[e]):(p=parseFloat(e.charAt(f-1)+e.substr(f+1)),d&&i&&(p=p/100*(Ai(i)?i[0]:i).totalDuration()),f>1?o(t,e.substr(0,f-1),i)+p:c+p)):e==null?c:+e},Ec=function(t,e,i){var a=Ka(e[1]),l=(a?2:1)+(t<2?0:1),c=e[l],f,p;if(a&&(c.duration=e[1]),c.parent=i,t){for(f=c,p=i;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=Wi(p.vars.inherit)&&p.parent;c.immediateRender=Wi(f.immediateRender),t<2?c.runBackwards=1:c.startAt=e[l-1]}return new qn(e[0],c,e[l+1])},Ws=function(t,e){return t||t===0?e(t):e},Yc=function(t,e,i){return i<t?t:i>e?e:i},Ei=function(t,e){return!oi(t)||!(e=SA.exec(t))?"":e[1]},NA=function(t,e,i){return Ws(i,function(a){return Yc(t,e,a)})},L_=[].slice,dE=function(t,e){return t&&va(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&va(t[0]))&&!t.nodeType&&t!==oa},LA=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(a){var l;return oi(a)&&!e||dE(a,1)?(l=i).push.apply(l,Fr(a)):i.push(a)})||i},Fr=function(t,e,i){return En&&!e&&En.selector?En.selector(t):oi(t)&&!i&&(C_||!$l())?L_.call((e||Z0).querySelectorAll(t),0):Ai(t)?LA(t,i):dE(t)?L_.call(t,0):t?[t]:[]},O_=function(t){return t=Fr(t)[0]||Pc("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Fr(e,i.querySelectorAll?i:i===t?Pc("Invalid scope")||Z0.createElement("div"):t)}},pE=function(t){return t.sort(function(){return .5-Math.random()})},mE=function(t){if(Pn(t))return t;var e=va(t)?t:{each:t},i=Ro(e.ease),a=e.from||0,l=parseFloat(e.base)||0,c={},f=a>0&&a<1,p=isNaN(a)||f,d=e.axis,_=a,x=a;return oi(a)?_=x={center:.5,edges:.5,end:1}[a]||0:!f&&p&&(_=a[0],x=a[1]),function(g,v,M){var E=(M||e).length,S=c[E],y,A,D,C,F,P,N,b,L;if(!S){if(L=e.grid==="auto"?0:(e.grid||[1,Pr])[1],!L){for(N=-Pr;N<(N=M[L++].getBoundingClientRect().left)&&L<E;);L<E&&L--}for(S=c[E]=[],y=p?Math.min(L,E)*_-.5:a%L,A=L===Pr?0:p?E*x/L-.5:a/L|0,N=0,b=Pr,P=0;P<E;P++)D=P%L-y,C=A-(P/L|0),S[P]=F=d?Math.abs(d==="y"?C:D):QM(D*D+C*C),F>N&&(N=F),F<b&&(b=F);a==="random"&&pE(S),S.max=N-b,S.min=b,S.v=E=(parseFloat(e.amount)||parseFloat(e.each)*(L>E?E-1:d?d==="y"?E/L:L:Math.max(L,E/L))||0)*(a==="edges"?-1:1),S.b=E<0?l-E:l,S.u=Ei(e.amount||e.each)||0,i=i&&E<0?YA(i):i}return E=(S[g]-S.min)/S.max||0,Rn(S.b+(i?i(E):E)*S.v)+S.u}},P_=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var a=Rn(Math.round(parseFloat(i)/t)*t*e);return(a-a%1)/e+(Ka(i)?0:Ei(i))}},_E=function(t,e){var i=Ai(t),a,l;return!i&&va(t)&&(a=i=t.radius||Pr,t.values?(t=Fr(t.values),(l=!Ka(t[0]))&&(a*=a)):t=P_(t.increment)),Ws(e,i?Pn(t)?function(c){return l=t(c),Math.abs(l-c)<=a?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=Pr,_=0,x=t.length,g,v;x--;)l?(g=t[x].x-f,v=t[x].y-p,g=g*g+v*v):g=Math.abs(t[x]-f),g<d&&(d=g,_=x);return _=!a||d<=a?t[_]:c,l||_===c||Ka(c)?_:_+Ei(c)}:P_(t))},gE=function(t,e,i,a){return Ws(Ai(t)?!e:i===!0?!!(i=0):!a,function(){return Ai(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(a=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*a)/a})},OA=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(a){return e.reduce(function(l,c){return c(l)},a)}},PA=function(t,e){return function(i){return t(parseFloat(i))+(e||Ei(i))}},FA=function(t,e,i){return xE(t,e,0,1,i)},vE=function(t,e,i){return Ws(i,function(a){return t[~~e(a)]})},IA=function o(t,e,i){var a=e-t;return Ai(t)?vE(t,o(0,t.length),e):Ws(i,function(l){return(a+(l-t)%a)%a+t})},BA=function o(t,e,i){var a=e-t,l=a*2;return Ai(t)?vE(t,o(0,t.length-1),e):Ws(i,function(c){return c=(l+(c-t)%l)%l||0,t+(c>a?l-c:c)})},Ic=function(t){return t.replace(gA,function(e){var i=e.indexOf("[")+1,a=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(vA);return gE(i?a:+a[0],i?0:+a[1],+a[2]||1e-5)})},xE=function(t,e,i,a,l){var c=e-t,f=a-i;return Ws(l,function(p){return i+((p-t)/c*f||0)})},zA=function o(t,e,i,a){var l=isNaN(t+e)?0:function(v){return(1-v)*t+v*e};if(!l){var c=oi(t),f={},p,d,_,x,g;if(i===!0&&(a=1)&&(i=null),c)t={p:t},e={p:e};else if(Ai(t)&&!Ai(e)){for(_=[],x=t.length,g=x-2,d=1;d<x;d++)_.push(o(t[d-1],t[d]));x--,l=function(M){M*=x;var E=Math.min(g,~~M);return _[E](M-E)},i=e}else a||(t=Kl(Ai(t)?[]:{},t));if(!_){for(p in e)eg.call(f,t,p,"get",e[p]);l=function(M){return ag(M,f)||(c?t.p:t)}}}return Ws(i,l)},Sy=function(t,e,i){var a=t.labels,l=Pr,c,f,p;for(c in a)f=a[c]-e,f<0==!!i&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},pr=function(t,e,i){var a=t.vars,l=a[e],c=En,f=t._ctx,p,d,_;if(l)return p=a[e+"Params"],d=a.callbackScope||t,i&&Is.length&&nd(),f&&(En=f),_=p?l.apply(d,p):l.call(d),En=c,_},hc=function(t){return Hs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mi),t.progress()<1&&pr(t,"onInterrupt"),t},zl,SE=[],yE=function(t){if(t)if(t=!t.name&&t.default||t,j0()||t.headless){var e=t.name,i=Pn(t),a=e&&!i&&t.init?function(){this._props=[]}:t,l={init:Fc,render:ag,add:eg,kill:nR,modifier:eR,rawVars:0},c={targetTest:0,get:0,getSetter:rg,aliases:{},register:0};if($l(),t!==a){if(cr[e])return;xr(a,xr(id(t,l),c)),Kl(a.prototype,Kl(l,id(t,c))),cr[a.prop=e]=a,t.targetTest&&(Gh.push(a),Q0[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}iE(e,a),t.register&&t.register(Qi,a,qi)}else SE.push(t)},pn=255,dc={aqua:[0,pn,pn],lime:[0,pn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pn],navy:[0,0,128],white:[pn,pn,pn],olive:[128,128,0],yellow:[pn,pn,0],orange:[pn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pn,0,0],pink:[pn,192,203],cyan:[0,pn,pn],transparent:[pn,pn,pn,0]},Im=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*pn+.5|0},ME=function(t,e,i){var a=t?Ka(t)?[t>>16,t>>8&pn,t&pn]:0:dc.black,l,c,f,p,d,_,x,g,v,M;if(!a){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),dc[t])a=dc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return a=parseInt(t.substr(1,6),16),[a>>16,a>>8&pn,a&pn,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),a=[t>>16,t>>8&pn,t&pn]}else if(t.substr(0,3)==="hsl"){if(a=M=t.match(my),!e)p=+a[0]%360/360,d=+a[1]/100,_=+a[2]/100,c=_<=.5?_*(d+1):_+d-_*d,l=_*2-c,a.length>3&&(a[3]*=1),a[0]=Im(p+1/3,l,c),a[1]=Im(p,l,c),a[2]=Im(p-1/3,l,c);else if(~t.indexOf("="))return a=t.match($M),i&&a.length<4&&(a[3]=1),a}else a=t.match(my)||dc.transparent;a=a.map(Number)}return e&&!M&&(l=a[0]/pn,c=a[1]/pn,f=a[2]/pn,x=Math.max(l,c,f),g=Math.min(l,c,f),_=(x+g)/2,x===g?p=d=0:(v=x-g,d=_>.5?v/(2-x-g):v/(x+g),p=x===l?(c-f)/v+(c<f?6:0):x===c?(f-l)/v+2:(l-c)/v+4,p*=60),a[0]=~~(p+.5),a[1]=~~(d*100+.5),a[2]=~~(_*100+.5)),i&&a.length<4&&(a[3]=1),a},EE=function(t){var e=[],i=[],a=-1;return t.split(Bs).forEach(function(l){var c=l.match(Bl)||[];e.push.apply(e,c),i.push(a+=c.length+1)}),e.c=i,e},yy=function(t,e,i){var a="",l=(t+a).match(Bs),c=e?"hsla(":"rgba(",f=0,p,d,_,x;if(!l)return t;if(l=l.map(function(g){return(g=ME(g,e,1))&&c+(e?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),i&&(_=EE(t),p=i.c,p.join(a)!==_.c.join(a)))for(d=t.replace(Bs,"1").split(Bl),x=d.length-1;f<x;f++)a+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:i).shift());if(!d)for(d=t.split(Bs),x=d.length-1;f<x;f++)a+=d[f]+l[f];return a+d[x]},Bs=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in dc)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),HA=/hsl[a]?\(/,bE=function(t){var e=t.join(" "),i;if(Bs.lastIndex=0,Bs.test(e))return i=HA.test(e),t[1]=yy(t[1],i),t[0]=yy(t[0],i,EE(t[1])),!0},Bc,hr=(function(){var o=Date.now,t=500,e=33,i=o(),a=i,l=1e3/240,c=l,f=[],p,d,_,x,g,v,M=function E(S){var y=o()-a,A=S===!0,D,C,F,P;if((y>t||y<0)&&(i+=y-e),a+=y,F=a-i,D=F-c,(D>0||A)&&(P=++x.frame,g=F-x.time*1e3,x.time=F=F/1e3,c+=D+(D>=l?4:l-D),C=1),A||(p=d(E)),C)for(v=0;v<f.length;v++)f[v](F,g,P,S)};return x={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(S){return g/(1e3/(S||60))},wake:function(){eE&&(!C_&&j0()&&(oa=C_=window,Z0=oa.document||{},vr.gsap=Qi,(oa.gsapVersions||(oa.gsapVersions=[])).push(Qi.version),nE(ed||oa.GreenSockGlobals||!oa.gsap&&oa||{}),SE.forEach(yE)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&x.sleep(),d=_||function(S){return setTimeout(S,c-x.time*1e3+1|0)},Bc=1,M(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),Bc=0,d=Fc},lagSmoothing:function(S,y){t=S||1/0,e=Math.min(y||33,t)},fps:function(S){l=1e3/(S||240),c=x.time*1e3+l},add:function(S,y,A){var D=y?function(C,F,P,N){S(C,F,P,N),x.remove(D)}:S;return x.remove(S),f[A?"unshift":"push"](D),$l(),D},remove:function(S,y){~(y=f.indexOf(S))&&f.splice(y,1)&&v>=y&&v--},_listeners:f},x})(),$l=function(){return!Bc&&hr.wake()},Ve={},GA=/^[\d.\-M][\d.\-,\s]/,VA=/["']/g,kA=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),a=i[0],l=1,c=i.length,f,p,d;l<c;l++)p=i[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),e[a]=isNaN(d)?d.replace(VA,"").trim():+d,a=p.substr(f+1).trim();return e},XA=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),a=t.indexOf("(",e);return t.substring(e,~a&&a<i?t.indexOf(")",i+1):i)},WA=function(t){var e=(t+"").split("("),i=Ve[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[kA(e[1])]:XA(t).split(",").map(oE)):Ve._CE&&GA.test(t)?Ve._CE("",t):i},YA=function(t){return function(e){return 1-t(1-e)}},Ro=function(t,e){return t&&(Pn(t)?t:Ve[t]||WA(t))||e},Bo=function(t,e,i,a){i===void 0&&(i=function(p){return 1-e(1-p)}),a===void 0&&(a=function(p){return p<.5?e(p*2)/2:1-e((1-p)*2)/2});var l={easeIn:e,easeOut:i,easeInOut:a},c;return Yi(t,function(f){Ve[f]=vr[f]=l,Ve[c=f.toLowerCase()]=i;for(var p in l)Ve[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Ve[f+"."+p]=l[p]}),l},TE=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Bm=function o(t,e,i){var a=e>=1?e:1,l=(i||(t?.3:.45))/(e<1?e:1),c=l/w_*(Math.asin(1/a)||0),f=function(_){return _===1?1:a*Math.pow(2,-10*_)*_A((_-c)*l)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:TE(f);return l=w_/l,p.config=function(d,_){return o(t,d,_)},p},zm=function o(t,e){e===void 0&&(e=1.70158);var i=function(c){return c?--c*c*((e+1)*c+e)+1:0},a=t==="out"?i:t==="in"?function(l){return 1-i(1-l)}:TE(i);return a.config=function(l){return o(t,l)},a};Yi("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Bo(o+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;Bo("Elastic",Bm("in"),Bm("out"),Bm());(function(o,t){var e=1/t,i=2*e,a=2.5*e,l=function(f){return f<e?o*f*f:f<i?o*Math.pow(f-1.5/t,2)+.75:f<a?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Bo("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Bo("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Bo("Circ",function(o){return-(QM(1-o*o)-1)});Bo("Sine",function(o){return o===1?1:-mA(o*dA)+1});Bo("Back",zm("in"),zm("out"),zm());Ve.SteppedEase=Ve.steps=vr.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,a=t+(e?0:1),l=e?1:0,c=1-mn;return function(f){return((a*Yc(0,c,f)|0)+l)*i}}};Oc.ease=Ve["quad.out"];Yi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return J0+=o+","+o+"Params,"});var AE=function(t,e){this.id=pA++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:aE,this.set=e?e.getSetter:rg},zc=(function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Jl(this,+e.duration,1,1),this.data=e.data,En&&(this._ctx=En,En.data.push(this)),Bc||hr.wake()}var t=o.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Jl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,a){if($l(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Ed(this,i),!l._dp||l.parent||cE(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ca(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===mn||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),sE(this,i,a)),this},t.time=function(i,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+vy(this))%(this._dur+this._rDelay)||(i?this._dur:0),a):this._time},t.totalProgress=function(i,a){return arguments.length?this.totalTime(this.totalDuration()*i,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+vy(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,a){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,a):this._repeat?Ql(this._tTime,l)+1:1},t.timeScale=function(i,a){if(!arguments.length)return this._rts===-mn?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?rd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-mn?0:this._rts,this.totalTime(Yc(-Math.abs(this._delay),this.totalDuration(),l),a!==!1),Md(this),AA(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($l(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==mn&&(this._tTime-=mn)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=Rn(i);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&ca(a,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Wi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var a=this.parent||this._dp;return a?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rd(a.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=MA);var a=mi;return mi=i,tg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),mi=a,this},t.globalTime=function(i){for(var a=this,l=arguments.length?i:a.rawTime();a;)l=a._start+l/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,xy(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var a=this._time;return this._rDelay=i,xy(this),a?this.time(a):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,a){return this.totalTime(Cr(this,i),Wi(a))},t.restart=function(i,a){return this.play().totalTime(i?-this._delay:0,Wi(a)),this._dur||(this._zTime=-mn),this},t.play=function(i,a){return i!=null&&this.seek(i,a),this.reversed(!1).paused(!1)},t.reverse=function(i,a){return i!=null&&this.seek(i||this.totalDuration(),a),this.reversed(!0).paused(!1)},t.pause=function(i,a){return i!=null&&this.seek(i,a),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-mn:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-mn,this},t.isActive=function(){var i=this.parent||this._dp,a=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=a&&l<this.endTime(!0)-mn)},t.eventCallback=function(i,a,l){var c=this.vars;return arguments.length>1?(a?(c[i]=a,l&&(c[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=a)):delete c[i],this):c[i]},t.then=function(i){var a=this,l=a._prom;return new Promise(function(c){var f=Pn(i)?i:lE,p=function(){var _=a.then;a.then=null,l&&l(),Pn(f)&&(f=f(a))&&(f.then||f===a)&&(a.then=_),c(f),a.then=_};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?p():a._prom=p})},t.kill=function(){hc(this)},o})();xr(zc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-mn,_prom:0,_ps:!1,_rts:1});var Xi=(function(o){KM(t,o);function t(i,a){var l;return i===void 0&&(i={}),l=o.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=Wi(i.sortChildren),wn&&ca(i.parent||wn,Ga(l),a),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&fE(Ga(l),i.scrollTrigger),l}var e=t.prototype;return e.to=function(a,l,c){return Ec(0,arguments,this),this},e.from=function(a,l,c){return Ec(1,arguments,this),this},e.fromTo=function(a,l,c,f){return Ec(2,arguments,this),this},e.set=function(a,l,c){return l.duration=0,l.parent=this,Mc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new qn(a,l,Cr(this,c),1),this},e.call=function(a,l,c){return ca(this,qn.delayedCall(0,a,l),c)},e.staggerTo=function(a,l,c,f,p,d,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new qn(a,c,Cr(this,p)),this},e.staggerFrom=function(a,l,c,f,p,d,_){return c.runBackwards=1,Mc(c).immediateRender=Wi(c.immediateRender),this.staggerTo(a,l,c,f,p,d,_)},e.staggerFromTo=function(a,l,c,f,p,d,_,x){return f.startAt=c,Mc(f).immediateRender=Wi(f.immediateRender),this.staggerTo(a,l,f,p,d,_,x)},e.render=function(a,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=a<=0?0:Rn(a),x=this._zTime<0!=a<0&&(this._initted||!d),g,v,M,E,S,y,A,D,C,F,P,N;if(this!==wn&&_>p&&a>=0&&(_=p),_!==this._tTime||c||x){if(f!==this._time&&d&&(_+=this._time-f,a+=this._time-f),g=_,C=this._start,D=this._ts,y=!D,x&&(d||(f=this._zTime),(a||!l)&&(this._zTime=a)),this._repeat){if(P=this._yoyo,S=d+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(S*100+a,l,c);if(g=Rn(_%S),_===p?(E=this._repeat,g=d):(F=Rn(_/S),E=~~F,E&&E===F&&(g=d,E--),g>d&&(g=d)),F=Ql(this._tTime,S),!f&&this._tTime&&F!==E&&this._tTime-F*S-this._dur<=0&&(F=E),P&&E&1&&(g=d-g,N=1),E!==F&&!this._lock){var b=P&&F&1,L=b===(P&&E&1);if(E<F&&(b=!b),f=b?0:_%d?d:_,this._lock=1,this.render(f||(N?0:Rn(E*S)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&pr(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1,F=E),f&&f!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,L&&(this._lock=2,f=b?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=DA(this,Rn(f),Rn(g)),A&&(_-=g-(g=A._start))),this._tTime=_,this._time=g,this._act=!!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,f=0),!f&&_&&d&&!l&&!F&&(pr(this,"onStart"),this._tTime!==_))return this;if(g>=f&&a>=0)for(v=this._first;v;){if(M=v._next,(v._act||g>=v._start)&&v._ts&&A!==v){if(v.parent!==this)return this.render(a,l,c);if(v.render(v._ts>0?(g-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(g-v._start)*v._ts,l,c),g!==this._time||!this._ts&&!y){A=0,M&&(_+=this._zTime=-mn);break}}v=M}else{v=this._last;for(var z=a<0?a:g;v;){if(M=v._prev,(v._act||z<=v._end)&&v._ts&&A!==v){if(v.parent!==this)return this.render(a,l,c);if(v.render(v._ts>0?(z-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(z-v._start)*v._ts,l,c||mi&&tg(v)),g!==this._time||!this._ts&&!y){A=0,M&&(_+=this._zTime=z?-mn:mn);break}}v=M}}if(A&&!l&&(this.pause(),A.render(g>=f?0:-mn)._zTime=g>=f?1:-1,this._ts))return this._start=C,Md(this),this.render(a,l,c);this._onUpdate&&!l&&pr(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(C===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((a||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Hs(this,1),!l&&!(a<0&&!f)&&(_||f||!p)&&(pr(this,_===p&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(a,l){var c=this;if(Ka(l)||(l=Cr(this,l,a)),!(a instanceof zc)){if(Ai(a))return a.forEach(function(f){return c.add(f,l)}),this;if(oi(a))return this.addLabel(a,l);if(Pn(a))a=qn.delayedCall(0,a);else return this}return this!==a?ca(this,a,l):this},e.getChildren=function(a,l,c,f){a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Pr);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof qn?l&&p.push(d):(c&&p.push(d),a&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},e.getById=function(a){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===a)return l[c]},e.remove=function(a){return oi(a)?this.removeLabel(a):Pn(a)?this.killTweensOf(a):(a.parent===this&&yd(this,a),a===this._recent&&(this._recent=this._last),Ao(this))},e.totalTime=function(a,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rn(hr.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),o.prototype.totalTime.call(this,a,l),this._forcing=0,this):this._tTime},e.addLabel=function(a,l){return this.labels[a]=Cr(this,l),this},e.removeLabel=function(a){return delete this.labels[a],this},e.addPause=function(a,l,c){var f=qn.delayedCall(0,l||Fc,c);return f.data="isPause",this._hasPause=1,ca(this,f,Cr(this,a))},e.removePause=function(a){var l=this._first;for(a=Cr(this,a);l;)l._start===a&&l.data==="isPause"&&Hs(l),l=l._next},e.killTweensOf=function(a,l,c){for(var f=this.getTweensOf(a,c),p=f.length;p--;)Us!==f[p]&&f[p].kill(a,l);return this},e.getTweensOf=function(a,l){for(var c=[],f=Fr(a),p=this._first,d=Ka(l),_;p;)p instanceof qn?EA(p._targets,f)&&(d?(!Us||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(_=p.getTweensOf(f,l)).length&&c.push.apply(c,_),p=p._next;return c},e.tweenTo=function(a,l){l=l||{};var c=this,f=Cr(c,a),p=l,d=p.startAt,_=p.onStart,x=p.onStartParams,g=p.immediateRender,v,M=qn.to(c,xr({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||mn,onStart:function(){if(c.pause(),!v){var S=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());M._dur!==S&&Jl(M,S,0,1).render(M._time,!0,!0),v=1}_&&_.apply(M,x||[])}},l));return g?M.render(0):M},e.tweenFromTo=function(a,l,c){return this.tweenTo(l,xr({startAt:{time:Cr(this,a)}},c))},e.recent=function(){return this._recent},e.nextLabel=function(a){return a===void 0&&(a=this._time),Sy(this,Cr(this,a))},e.previousLabel=function(a){return a===void 0&&(a=this._time),Sy(this,Cr(this,a),1)},e.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+mn)},e.shiftChildren=function(a,l,c){c===void 0&&(c=0);var f=this._first,p=this.labels,d;for(a=Rn(a);f;)f._start>=c&&(f._start+=a,f._end+=a),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=a);return Ao(this)},e.invalidate=function(a){var l=this._first;for(this._lock=0;l;)l.invalidate(a),l=l._next;return o.prototype.invalidate.call(this,a)},e.clear=function(a){a===void 0&&(a=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),Ao(this)},e.totalDuration=function(a){var l=0,c=this,f=c._last,p=Pr,d,_,x;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-a:a));if(c._dirty){for(x=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,ca(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!x&&!c._dp||x&&x.smoothChildTiming)&&(c._start+=Rn(_/c._ts),c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;Jl(c,c===wn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(a){if(wn._ts&&(sE(wn,rd(a,wn)),rE=hr.frame),hr.frame>=_y){_y+=gr.autoSleep||120;var l=wn._first;if((!l||!l._ts)&&gr.autoSleep&&hr._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||hr.sleep()}}},t})(zc);xr(Xi.prototype,{_lock:0,_hasPause:0,_forcing:0});var qA=function(t,e,i,a,l,c,f){var p=new qi(this._pt,t,e,0,1,NE,null,l),d=0,_=0,x,g,v,M,E,S,y,A;for(p.b=i,p.e=a,i+="",a+="",(y=~a.indexOf("random("))&&(a=Ic(a)),c&&(A=[i,a],c(A,t,e),i=A[0],a=A[1]),g=i.match(Pm)||[];x=Pm.exec(a);)M=x[0],E=a.substring(d,x.index),v?v=(v+1)%5:E.substr(-5)==="rgba("&&(v=1),M!==g[_++]&&(S=parseFloat(g[_-1])||0,p._pt={_next:p._pt,p:E||_===1?E:",",s:S,c:M.charAt(1)==="="?Gl(S,M)-S:parseFloat(M)-S,m:v&&v<4?Math.round:0},d=Pm.lastIndex);return p.c=d<a.length?a.substring(d,a.length):"",p.fp=f,(tE.test(a)||y)&&(p.e=0),this._pt=p,p},eg=function(t,e,i,a,l,c,f,p,d,_){Pn(a)&&(a=a(l||0,t,c));var x=t[e],g=i!=="get"?i:Pn(x)?d?t[e.indexOf("set")||!Pn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](d):t[e]():x,v=Pn(x)?d?JA:DE:ig,M;if(oi(a)&&(~a.indexOf("random(")&&(a=Ic(a)),a.charAt(1)==="="&&(M=Gl(g,a)+(Ei(g)||0),(M||M===0)&&(a=M))),!_||g!==a||F_)return!isNaN(g*a)&&a!==""?(M=new qi(this._pt,t,e,+g||0,a-(g||0),typeof x=="boolean"?tR:UE,0,v),d&&(M.fp=d),f&&M.modifier(f,this,t),this._pt=M):(!x&&!(e in t)&&K0(e,a),qA.call(this,t,e,g,a,v,p||gr.stringFilter,d))},jA=function(t,e,i,a,l){if(Pn(t)&&(t=bc(t,l,e,i,a)),!va(t)||t.style&&t.nodeType||Ai(t)||JM(t))return oi(t)?bc(t,l,e,i,a):t;var c={},f;for(f in t)c[f]=bc(t[f],l,e,i,a);return c},RE=function(t,e,i,a,l,c){var f,p,d,_;if(cr[t]&&(f=new cr[t]).init(l,f.rawVars?e[t]:jA(e[t],a,l,c,i),i,a,c)!==!1&&(i._pt=p=new qi(i._pt,l,t,0,1,f.render,f,0,f.priority),i!==zl))for(d=i._ptLookup[i._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Us,F_,ng=function o(t,e,i){var a=t.vars,l=a.ease,c=a.startAt,f=a.immediateRender,p=a.lazy,d=a.onUpdate,_=a.runBackwards,x=a.yoyoEase,g=a.keyframes,v=a.autoRevert,M=t._dur,E=t._startAt,S=t._targets,y=t.parent,A=y&&y.data==="nested"?y.vars.targets:S,D=t._overwrite==="auto"&&!Y0,C=t.timeline,F=a.easeReverse||x,P,N,b,L,z,G,V,nt,rt,X,B,H,K;if(C&&(!g||!l)&&(l="none"),t._ease=Ro(l,Oc.ease),t._rEase=F&&(Ro(F)||t._ease),t._from=!C&&!!a.runBackwards,t._from&&(t.ratio=1),!C||g&&!a.stagger){if(nt=S[0]?To(S[0]).harness:0,H=nt&&a[nt.prop],P=id(a,Q0),E&&(E._zTime<0&&E.progress(1),e<0&&_&&f&&!v?E.render(-1,!0):E.revert(_&&M?Hh:yA),E._lazy=0),c){if(Hs(t._startAt=qn.set(S,xr({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!E&&Wi(p),startAt:null,delay:0,onUpdate:d&&function(){return pr(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mi||!f&&!v)&&t._startAt.revert(Hh),f&&M&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(_&&M&&!E){if(e&&(f=!1),b=xr({overwrite:!1,data:"isFromStart",lazy:f&&!E&&Wi(p),immediateRender:f,stagger:0,parent:y},P),H&&(b[nt.prop]=H),Hs(t._startAt=qn.set(S,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mi?t._startAt.revert(Hh):t._startAt.render(-1,!0)),t._zTime=e,!f)o(t._startAt,mn,mn);else if(!e)return}for(t._pt=t._ptCache=0,p=M&&Wi(p)||p&&!M,N=0;N<S.length;N++){if(z=S[N],V=z._gsap||$0(S)[N]._gsap,t._ptLookup[N]=X={},D_[V.id]&&Is.length&&nd(),B=A===S?N:A.indexOf(z),nt&&(rt=new nt).init(z,H||P,t,B,A)!==!1&&(t._pt=L=new qi(t._pt,z,rt.name,0,1,rt.render,rt,0,rt.priority),rt._props.forEach(function(ft){X[ft]=L}),rt.priority&&(G=1)),!nt||H)for(b in P)cr[b]&&(rt=RE(b,P,t,B,z,A))?rt.priority&&(G=1):X[b]=L=eg.call(t,z,b,"get",P[b],B,A,0,a.stringFilter);t._op&&t._op[N]&&t.kill(z,t._op[N]),D&&t._pt&&(Us=t,wn.killTweensOf(z,X,t.globalTime(e)),K=!t.parent,Us=0),t._pt&&p&&(D_[V.id]=1)}G&&LE(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!K,g&&e<=0&&C.render(Pr,!0,!0)},ZA=function(t,e,i,a,l,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[e],_,x,g,v;if(!d)for(d=t._ptCache[e]=[],g=t._ptLookup,v=t._targets.length;v--;){if(_=g[v][e],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==e&&_.fp!==e;)_=_._next;if(!_)return F_=1,t.vars[e]="+=0",ng(t,f),F_=0,p?Pc(e+" not eligible for reset. Try splitting into individual properties"):1;d.push(_)}for(v=d.length;v--;)x=d[v],_=x._pt||x,_.s=(a||a===0)&&!l?a:_.s+(a||0)+c*_.c,_.c=i-_.s,x.e&&(x.e=zn(i)+Ei(x.e)),x.b&&(x.b=_.s+Ei(x.b))},KA=function(t,e){var i=t[0]?To(t[0]).harness:0,a=i&&i.aliases,l,c,f,p;if(!a)return e;l=Kl({},e);for(c in a)if(c in l)for(p=a[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},QA=function(t,e,i,a){var l=e.ease||a||"power1.inOut",c,f;if(Ai(e))f=i[t]||(i[t]=[]),e.forEach(function(p,d){return f.push({t:d/(e.length-1)*100,v:p,e:l})});else for(c in e)f=i[c]||(i[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:e[c],e:l})},bc=function(t,e,i,a,l){return Pn(t)?t.call(e,i,a,l):oi(t)&&~t.indexOf("random(")?Ic(t):t},wE=J0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",CE={};Yi(wE+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return CE[o]=1});var qn=(function(o){KM(t,o);function t(i,a,l,c){var f;typeof a=="number"&&(l.duration=a,a=l,l=null),f=o.call(this,c?a:Mc(a))||this;var p=f.vars,d=p.duration,_=p.delay,x=p.immediateRender,g=p.stagger,v=p.overwrite,M=p.keyframes,E=p.defaults,S=p.scrollTrigger,y=a.parent||wn,A=(Ai(i)||JM(i)?Ka(i[0]):"length"in a)?[i]:Fr(i),D,C,F,P,N,b,L,z;if(f._targets=A.length?$0(A):Pc("GSAP target "+i+" not found. https://gsap.com",!gr.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=v,M||g||ih(d)||ih(_)){a=f.vars;var G=a.easeReverse||a.yoyoEase;if(D=f.timeline=new Xi({data:"nested",defaults:E||{},targets:y&&y.data==="nested"?y.vars.targets:A}),D.kill(),D.parent=D._dp=Ga(f),D._start=0,g||ih(d)||ih(_)){if(P=A.length,L=g&&mE(g),va(g))for(N in g)~wE.indexOf(N)&&(z||(z={}),z[N]=g[N]);for(C=0;C<P;C++)F=id(a,CE),F.stagger=0,G&&(F.easeReverse=G),z&&Kl(F,z),b=A[C],F.duration=+bc(d,Ga(f),C,b,A),F.delay=(+bc(_,Ga(f),C,b,A)||0)-f._delay,!g&&P===1&&F.delay&&(f._delay=_=F.delay,f._start+=_,F.delay=0),D.to(b,F,L?L(C,b,A):0),D._ease=Ve.none;D.duration()?d=_=0:f.timeline=0}else if(M){Mc(xr(D.vars.defaults,{ease:"none"})),D._ease=Ro(M.ease||a.ease||"none");var V=0,nt,rt,X;if(Ai(M))M.forEach(function(B){return D.to(A,B,">")}),D.duration();else{F={};for(N in M)N==="ease"||N==="easeEach"||QA(N,M[N],F,M.easeEach);for(N in F)for(nt=F[N].sort(function(B,H){return B.t-H.t}),V=0,C=0;C<nt.length;C++)rt=nt[C],X={ease:rt.e,duration:(rt.t-(C?nt[C-1].t:0))/100*d},X[N]=rt.v,D.to(A,X,V),V+=X.duration;D.duration()<d&&D.to({},{duration:d-D.duration()})}}d||f.duration(d=D.duration())}else f.timeline=0;return v===!0&&!Y0&&(Us=Ga(f),wn.killTweensOf(A),Us=0),ca(y,Ga(f),l),a.reversed&&f.reverse(),a.paused&&f.paused(!0),(x||!d&&!M&&f._start===Rn(y._time)&&Wi(x)&&RA(Ga(f))&&y.data!=="nested")&&(f._tTime=-mn,f.render(Math.max(0,-_)||0)),S&&fE(Ga(f),S),f}var e=t.prototype;return e.render=function(a,l,c){var f=this._time,p=this._tDur,d=this._dur,_=a<0,x=a>p-mn&&!_?p:a<mn?0:a,g,v,M,E,S,y,A,D;if(!d)CA(this,a,l,c);else if(x!==this._tTime||!a||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(g=x,D=this.timeline,this._repeat){if(E=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(E*100+a,l,c);if(g=Rn(x%E),x===p?(M=this._repeat,g=d):(S=Rn(x/E),M=~~S,M&&M===S?(g=d,M--):g>d&&(g=d)),y=this._yoyo&&M&1,y&&(g=d-g),S=Ql(this._tTime,E),g===f&&!c&&this._initted&&M===S)return this._tTime=x,this;M!==S&&this.vars.repeatRefresh&&!y&&!this._lock&&g!==E&&this._initted&&(this._lock=c=1,this.render(Rn(E*M),!0).invalidate()._lock=0)}if(!this._initted){if(hE(this,_?a:g,c,l,x))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&M!==S))return this;if(d!==this._dur)return this.render(a,l,c)}if(this._rEase){var C=g<f;if(C!==this._inv){var F=C?f:d-f;this._inv=C,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=F?(C?-1:1)/F:0,this._invScale=C?-this.ratio:1-this.ratio,this._invEase=C?this._rEase:this._ease}this.ratio=A=this._invRatio+this._invScale*this._invEase((g-this._invTime)*this._invRecip)}else this.ratio=A=this._ease(g/d);if(this._from&&(this.ratio=A=1-A),this._tTime=x,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&x&&!l&&!S&&(pr(this,"onStart"),this._tTime!==x))return this;for(v=this._pt;v;)v.r(A,v.d),v=v._next;D&&D.render(a<0?a:D._dur*D._ease(g/this._dur),l,c)||this._startAt&&(this._zTime=a),this._onUpdate&&!l&&(_&&U_(this,a,l,c),pr(this,"onUpdate")),this._repeat&&M!==S&&this.vars.onRepeat&&!l&&this.parent&&pr(this,"onRepeat"),(x===this._tDur||!x)&&this._tTime===x&&(_&&!this._onUpdate&&U_(this,a,!0,!0),(a||!d)&&(x===this._tDur&&this._ts>0||!x&&this._ts<0)&&Hs(this,1),!l&&!(_&&!f)&&(x||f||y)&&(pr(this,x===p?"onComplete":"onReverseComplete",!0),this._prom&&!(x<p&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),o.prototype.invalidate.call(this,a)},e.resetTo=function(a,l,c,f,p){Bc||hr.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||ng(this,d),_=this._ease(d/this._dur),ZA(this,a,l,c,f,_,d,p)?this.resetTo(a,l,c,f,1):(Ed(this,0),this.parent||uE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(a,l){if(l===void 0&&(l="all"),!a&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?hc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mi),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(a,l,Us&&Us.vars.overwrite!==!0)._first||hc(this),this.parent&&c!==this.timeline.totalDuration()&&Jl(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=a?Fr(a):f,d=this._ptLookup,_=this._pt,x,g,v,M,E,S,y;if((!l||l==="all")&&TA(f,p))return l==="all"&&(this._pt=0),hc(this);for(x=this._op=this._op||[],l!=="all"&&(oi(l)&&(E={},Yi(l,function(A){return E[A]=1}),l=E),l=KA(f,l)),y=f.length;y--;)if(~p.indexOf(f[y])){g=d[y],l==="all"?(x[y]=l,M=g,v={}):(v=x[y]=x[y]||{},M=l);for(E in M)S=g&&g[E],S&&((!("kill"in S.d)||S.d.kill(E)===!0)&&yd(this,S,"_pt"),delete g[E]),v!=="all"&&(v[E]=1)}return this._initted&&!this._pt&&_&&hc(this),this},t.to=function(a,l){return new t(a,l,arguments[2])},t.from=function(a,l){return Ec(1,arguments)},t.delayedCall=function(a,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(a,l,c){return Ec(2,arguments)},t.set=function(a,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(a,l)},t.killTweensOf=function(a,l,c){return wn.killTweensOf(a,l,c)},t})(zc);xr(qn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yi("staggerTo,staggerFrom,staggerFromTo",function(o){qn[o]=function(){var t=new Xi,e=L_.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var ig=function(t,e,i){return t[e]=i},DE=function(t,e,i){return t[e](i)},JA=function(t,e,i,a){return t[e](a.fp,i)},$A=function(t,e,i){return t.setAttribute(e,i)},rg=function(t,e){return Pn(t[e])?DE:q0(t[e])&&t.setAttribute?$A:ig},UE=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},tR=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},NE=function(t,e){var i=e._pt,a="";if(!t&&e.b)a=e.b;else if(t===1&&e.e)a=e.e;else{for(;i;)a=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+a,i=i._next;a+=e.c}e.set(e.t,e.p,a,e)},ag=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},eR=function(t,e,i,a){for(var l=this._pt,c;l;)c=l._next,l.p===a&&l.modifier(t,e,i),l=c},nR=function(t){for(var e=this._pt,i,a;e;)a=e._next,e.p===t&&!e.op||e.op===t?yd(this,e,"_pt"):e.dep||(i=1),e=a;return!i},iR=function(t,e,i,a){a.mSet(t,e,a.m.call(a.tween,i,a.mt),a)},LE=function(t){for(var e=t._pt,i,a,l,c;e;){for(i=e._next,a=l;a&&a.pr>e.pr;)a=a._next;(e._prev=a?a._prev:c)?e._prev._next=e:l=e,(e._next=a)?a._prev=e:c=e,e=i}t._pt=l},qi=(function(){function o(e,i,a,l,c,f,p,d,_){this.t=i,this.s=l,this.c=c,this.p=a,this.r=f||UE,this.d=p||this,this.set=d||ig,this.pr=_||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(i,a,l){this.mSet=this.mSet||this.set,this.set=iR,this.m=i,this.mt=l,this.tween=a},o})();Yi(J0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return Q0[o]=1});vr.TweenMax=vr.TweenLite=qn;vr.TimelineLite=vr.TimelineMax=Xi;wn=new Xi({sortChildren:!1,defaults:Oc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gr.stringFilter=bE;var wo=[],Vh={},rR=[],My=0,aR=0,Hm=function(t){return(Vh[t]||rR).map(function(e){return e()})},I_=function(){var t=Date.now(),e=[];t-My>2&&(Hm("matchMediaInit"),wo.forEach(function(i){var a=i.queries,l=i.conditions,c,f,p,d;for(f in a)c=oa.matchMedia(a[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(i.revert(),p&&e.push(i))}),Hm("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(a){return i.add(null,a)})}),My=t,Hm("matchMedia"))},OE=(function(){function o(e,i){this.selector=i&&O_(i),this.data=[],this._r=[],this.isReverted=!1,this.id=aR++,e&&this.add(e)}var t=o.prototype;return t.add=function(i,a,l){Pn(i)&&(l=a,a=i,i=Pn);var c=this,f=function(){var d=En,_=c.selector,x;return d&&d!==c&&d.data.push(c),l&&(c.selector=O_(l)),En=c,x=a.apply(c,arguments),Pn(x)&&c._r.push(x),En=d,c.selector=_,c.isReverted=!1,x};return c.last=f,i===Pn?f(c,function(p){return c.add(null,p)}):i?c[i]=f:f},t.ignore=function(i){var a=En;En=null,i(this),En=a},t.getTweens=function(){var i=[];return this.data.forEach(function(a){return a instanceof o?i.push.apply(i,a.getTweens()):a instanceof qn&&!(a.parent&&a.parent.data==="nested")&&i.push(a)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,a){var l=this;if(i?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,x){return x.g-_.g||-1/0}).forEach(function(_){return _.t.revert(i)}),p=l.data.length;p--;)d=l.data[p],d instanceof Xi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof qn)&&d.revert&&d.revert(i);l._r.forEach(function(_){return _(i,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),a)for(var c=wo.length;c--;)wo[c].id===this.id&&wo.splice(c,1)},t.revert=function(i){this.kill(i||{})},o})(),sR=(function(){function o(e){this.contexts=[],this.scope=e,En&&En.data.push(this)}var t=o.prototype;return t.add=function(i,a,l){va(i)||(i={matches:i});var c=new OE(0,l||this.scope),f=c.conditions={},p,d,_;En&&!c.selector&&(c.selector=En.selector),this.contexts.push(c),a=c.add("onMatch",a),c.queries=i;for(d in i)d==="all"?_=1:(p=oa.matchMedia(i[d]),p&&(wo.indexOf(c)<0&&wo.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(I_):p.addEventListener("change",I_)));return _&&a(c,function(x){return c.add(null,x)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(a){return a.kill(i,!0)})},o})(),ad={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(a){return yE(a)})},timeline:function(t){return new Xi(t)},getTweensOf:function(t,e){return wn.getTweensOf(t,e)},getProperty:function(t,e,i,a){oi(t)&&(t=Fr(t)[0]);var l=To(t||{}).get,c=i?lE:oE;return i==="native"&&(i=""),t&&(e?c((cr[e]&&cr[e].get||l)(t,e,i,a)):function(f,p,d){return c((cr[f]&&cr[f].get||l)(t,f,p,d))})},quickSetter:function(t,e,i){if(t=Fr(t),t.length>1){var a=t.map(function(_){return Qi.quickSetter(_,e,i)}),l=a.length;return function(_){for(var x=l;x--;)a[x](_)}}t=t[0]||{};var c=cr[e],f=To(t),p=f.harness&&(f.harness.aliases||{})[e]||e,d=c?function(_){var x=new c;zl._pt=0,x.init(t,i?_+i:_,zl,0,[t]),x.render(1,x),zl._pt&&ag(1,zl)}:f.set(t,p);return c?d:function(_){return d(t,p,i?_+i:_,f,1)}},quickTo:function(t,e,i){var a,l=Qi.to(t,xr((a={},a[e]="+=0.1",a.paused=!0,a.stagger=0,a),i||{})),c=function(p,d,_){return l.resetTo(e,p,d,_)};return c.tween=l,c},isTweening:function(t){return wn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ro(t.ease,Oc.ease)),gy(Oc,t||{})},config:function(t){return gy(gr,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,a=t.plugins,l=t.defaults,c=t.extendTimeline;(a||"").split(",").forEach(function(f){return f&&!cr[f]&&!vr[f]&&Pc(e+" effect requires "+f+" plugin.")}),Fm[e]=function(f,p,d){return i(Fr(f),xr(p||{},l),d)},c&&(Xi.prototype[e]=function(f,p,d){return this.add(Fm[e](f,va(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,e){Ve[t]=Ro(e)},parseEase:function(t,e){return arguments.length?Ro(t,e):Ve},getById:function(t){return wn.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Xi(t),a,l;for(i.smoothChildTiming=Wi(t.smoothChildTiming),wn.remove(i),i._dp=0,i._time=i._tTime=wn._time,a=wn._first;a;)l=a._next,(e||!(!a._dur&&a instanceof qn&&a.vars.onComplete===a._targets[0]))&&ca(i,a,a._start-a._delay),a=l;return ca(wn,i,0),i},context:function(t,e){return t?new OE(t,e):En},matchMedia:function(t){return new sR(t)},matchMediaRefresh:function(){return wo.forEach(function(t){var e=t.conditions,i,a;for(a in e)e[a]&&(e[a]=!1,i=1);i&&t.revert()})||I_()},addEventListener:function(t,e){var i=Vh[t]||(Vh[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Vh[t],a=i&&i.indexOf(e);a>=0&&i.splice(a,1)},utils:{wrap:IA,wrapYoyo:BA,distribute:mE,random:gE,snap:_E,normalize:FA,getUnit:Ei,clamp:NA,splitColor:ME,toArray:Fr,selector:O_,mapRange:xE,pipe:OA,unitize:PA,interpolate:zA,shuffle:pE},install:nE,effects:Fm,ticker:hr,updateRoot:Xi.updateRoot,plugins:cr,globalTimeline:wn,core:{PropTween:qi,globals:iE,Tween:qn,Timeline:Xi,Animation:zc,getCache:To,_removeLinkedListItem:yd,reverting:function(){return mi},context:function(t){return t&&En&&(En.data.push(t),t._ctx=En),En},suppressOverwrites:function(t){return Y0=t}}};Yi("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ad[o]=qn[o]});hr.add(Xi.updateRoot);zl=ad.to({},{duration:0});var oR=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},lR=function(t,e){var i=t._targets,a,l,c;for(a in e)for(l=i.length;l--;)c=t._ptLookup[l][a],c&&(c=c.d)&&(c._pt&&(c=oR(c,a)),c&&c.modifier&&c.modifier(e[a],t,i[l],a))},Gm=function(t,e){return{name:t,headless:1,rawVars:1,init:function(a,l,c){c._onInit=function(f){var p,d;if(oi(l)&&(p={},Yi(l,function(_){return p[_]=1}),l=p),e){p={};for(d in l)p[d]=e(l[d]);l=p}lR(f,l)}}}},Qi=ad.registerPlugin({name:"attr",init:function(t,e,i,a,l){var c,f,p;this.tween=i;for(c in e)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",e[c],a,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,e){for(var i=e._pt;i;)mi?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Gm("roundProps",P_),Gm("modifiers"),Gm("snap",_E))||ad;qn.version=Xi.version=Qi.version="3.15.0";eE=1;j0()&&$l();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;var Ey,Ns,Vl,sg,yo,by,og,uR=function(){return typeof window<"u"},Qa={},mo=180/Math.PI,kl=Math.PI/180,vl=Math.atan2,Ty=1e8,lg=/([A-Z])/g,cR=/(left|right|width|margin|padding|x)/i,fR=/[\s,\(]\S/,fa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},B_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},hR=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},dR=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},pR=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},mR=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},PE=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},FE=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},_R=function(t,e,i){return t.style[e]=i},gR=function(t,e,i){return t.style.setProperty(e,i)},vR=function(t,e,i){return t._gsap[e]=i},xR=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},SR=function(t,e,i,a,l){var c=t._gsap;c.scaleX=c.scaleY=i,c.renderTransform(l,c)},yR=function(t,e,i,a,l){var c=t._gsap;c[e]=i,c.renderTransform(l,c)},Cn="transform",ji=Cn+"Origin",MR=function o(t,e){var i=this,a=this.target,l=a.style,c=a._gsap;if(t in Qa&&l){if(this.tfm=this.tfm||{},t!=="transform")t=fa[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return i.tfm[f]=Va(a,f)}):this.tfm[t]=c.x?c[t]:Va(a,t),t===ji&&(this.tfm.zOrigin=c.zOrigin);else return fa.transform.split(",").forEach(function(f){return o.call(i,f,e)});if(this.props.indexOf(Cn)>=0)return;c.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(ji,e,"")),t=Cn}(l||e)&&this.props.push(t,e,l[t])},IE=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ER=function(){var t=this.props,e=this.target,i=e.style,a=e._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?i[t[l]]=t[l+2]:i.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(lg,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)a[c]=this.tfm[c];a.svg&&(a.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=og(),(!l||!l.isStart)&&!i[Cn]&&(IE(i),a.zOrigin&&i[ji]&&(i[ji]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},BE=function(t,e){var i={target:t,props:[],revert:ER,save:MR};return t._gsap||Qi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(a){return i.save(a)}),i},zE,z_=function(t,e){var i=Ns.createElementNS?Ns.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ns.createElement(t);return i&&i.style?i:Ns.createElement(t)},mr=function o(t,e,i){var a=getComputedStyle(t);return a[e]||a.getPropertyValue(e.replace(lg,"-$1").toLowerCase())||a.getPropertyValue(e)||!i&&o(t,tu(e)||e,1)||""},Ay="O,Moz,ms,Ms,Webkit".split(","),tu=function(t,e,i){var a=e||yo,l=a.style,c=5;if(t in l&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(Ay[c]+t in l););return c<0?null:(c===3?"ms":c>=0?Ay[c]:"")+t},H_=function(){uR()&&window.document&&(Ey=window,Ns=Ey.document,Vl=Ns.documentElement,yo=z_("div")||{style:{}},z_("div"),Cn=tu(Cn),ji=Cn+"Origin",yo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zE=!!tu("perspective"),og=Qi.core.reverting,sg=1)},Ry=function(t){var e=t.ownerSVGElement,i=z_("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=t.cloneNode(!0),l;a.style.display="block",i.appendChild(a),Vl.appendChild(i);try{l=a.getBBox()}catch{}return i.removeChild(a),Vl.removeChild(i),l},wy=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},HE=function(t){var e,i;try{e=t.getBBox()}catch{e=Ry(t),i=1}return e&&(e.width||e.height)||i||(e=Ry(t)),e&&!e.width&&!e.x&&!e.y?{x:+wy(t,["x","cx","x1"])||0,y:+wy(t,["y","cy","y1"])||0,width:0,height:0}:e},GE=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&HE(t))},Gs=function(t,e){if(e){var i=t.style,a;e in Qa&&e!==ji&&(e=Cn),i.removeProperty?(a=e.substr(0,2),(a==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(a==="--"?e:e.replace(lg,"-$1").toLowerCase())):i.removeAttribute(e)}},Ls=function(t,e,i,a,l,c){var f=new qi(t._pt,e,i,0,1,c?FE:PE);return t._pt=f,f.b=a,f.e=l,t._props.push(i),f},Cy={deg:1,rad:1,turn:1},bR={grid:1,flex:1},Vs=function o(t,e,i,a){var l=parseFloat(i)||0,c=(i+"").trim().substr((l+"").length)||"px",f=yo.style,p=cR.test(e),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),x=100,g=a==="px",v=a==="%",M,E,S,y;if(a===c||!l||Cy[a]||Cy[c])return l;if(c!=="px"&&!g&&(l=o(t,e,i,"px")),y=t.getCTM&&GE(t),(v||c==="%")&&(Qa[e]||~e.indexOf("adius")))return M=y?t.getBBox()[p?"width":"height"]:t[_],zn(v?l/M*x:l/100*M);if(f[p?"width":"height"]=x+(g?c:a),E=a!=="rem"&&~e.indexOf("adius")||a==="em"&&t.appendChild&&!d?t:t.parentNode,y&&(E=(t.ownerSVGElement||{}).parentNode),(!E||E===Ns||!E.appendChild)&&(E=Ns.body),S=E._gsap,S&&v&&S.width&&p&&S.time===hr.time&&!S.uncache)return zn(l/S.width*x);if(v&&(e==="height"||e==="width")){var A=t.style[e];t.style[e]=x+a,M=t[_],A?t.style[e]=A:Gs(t,e)}else(v||c==="%")&&!bR[mr(E,"display")]&&(f.position=mr(t,"position")),E===t&&(f.position="static"),E.appendChild(yo),M=yo[_],E.removeChild(yo),f.position="absolute";return p&&v&&(S=To(E),S.time=hr.time,S.width=E[_]),zn(g?M*l/x:M&&l?x/M*l:0)},Va=function(t,e,i,a){var l;return sg||H_(),e in fa&&e!=="transform"&&(e=fa[e],~e.indexOf(",")&&(e=e.split(",")[0])),Qa[e]&&e!=="transform"?(l=Gc(t,a),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:od(mr(t,ji))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||a||~(l+"").indexOf("calc("))&&(l=sd[e]&&sd[e](t,e,i)||mr(t,e)||aE(t,e)||(e==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?Vs(t,e,l,i)+i:l},TR=function(t,e,i,a){if(!i||i==="none"){var l=tu(e,t,1),c=l&&mr(t,l,1);c&&c!==i?(e=l,i=c):e==="borderColor"&&(i=mr(t,"borderTopColor"))}var f=new qi(this._pt,t.style,e,0,1,NE),p=0,d=0,_,x,g,v,M,E,S,y,A,D,C,F;if(f.b=i,f.e=a,i+="",a+="",a.substring(0,6)==="var(--"&&(a=mr(t,a.substring(4,a.indexOf(")")))),a==="auto"&&(E=t.style[e],t.style[e]=a,a=mr(t,e)||a,E?t.style[e]=E:Gs(t,e)),_=[i,a],bE(_),i=_[0],a=_[1],g=i.match(Bl)||[],F=a.match(Bl)||[],F.length){for(;x=Bl.exec(a);)S=x[0],A=a.substring(p,x.index),M?M=(M+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(M=1),S!==(E=g[d++]||"")&&(v=parseFloat(E)||0,C=E.substr((v+"").length),S.charAt(1)==="="&&(S=Gl(v,S)+C),y=parseFloat(S),D=S.substr((y+"").length),p=Bl.lastIndex-D.length,D||(D=D||gr.units[e]||C,p===a.length&&(a+=D,f.e+=D)),C!==D&&(v=Vs(t,e,E,D)||0),f._pt={_next:f._pt,p:A||d===1?A:",",s:v,c:y-v,m:M&&M<4||e==="zIndex"?Math.round:0});f.c=p<a.length?a.substring(p,a.length):""}else f.r=e==="display"&&a==="none"?FE:PE;return tE.test(a)&&(f.e=0),this._pt=f,f},Dy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},AR=function(t){var e=t.split(" "),i=e[0],a=e[1]||"50%";return(i==="top"||i==="bottom"||a==="left"||a==="right")&&(t=i,i=a,a=t),e[0]=Dy[i]||i,e[1]=Dy[a]||a,e.join(" ")},RR=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,a=i.style,l=e.u,c=i._gsap,f,p,d;if(l==="all"||l===!0)a.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],Qa[f]&&(p=1,f=f==="transformOrigin"?ji:Cn),Gs(i,f);p&&(Gs(i,Cn),c&&(c.svg&&i.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",Gc(i,1),c.uncache=1,IE(a)))}},sd={clearProps:function(t,e,i,a,l){if(l.data!=="isFromStart"){var c=t._pt=new qi(t._pt,e,i,0,0,RR);return c.u=a,c.pr=-10,c.tween=l,t._props.push(i),1}}},Hc=[1,0,0,1,0,0],VE={},kE=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Uy=function(t){var e=mr(t,Cn);return kE(e)?Hc:e.substr(7).match($M).map(zn)},ug=function(t,e){var i=t._gsap||To(t),a=t.style,l=Uy(t),c,f,p,d;return i.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?Hc:l):(l===Hc&&!t.offsetParent&&t!==Vl&&!i.svg&&(p=a.display,a.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,Vl.appendChild(t)),l=Uy(t),p?a.display=p:Gs(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):Vl.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},G_=function(t,e,i,a,l,c){var f=t._gsap,p=l||ug(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,x=f.xOffset||0,g=f.yOffset||0,v=p[0],M=p[1],E=p[2],S=p[3],y=p[4],A=p[5],D=e.split(" "),C=parseFloat(D[0])||0,F=parseFloat(D[1])||0,P,N,b,L;i?p!==Hc&&(N=v*S-M*E)&&(b=C*(S/N)+F*(-E/N)+(E*A-S*y)/N,L=C*(-M/N)+F*(v/N)-(v*A-M*y)/N,C=b,F=L):(P=HE(t),C=P.x+(~D[0].indexOf("%")?C/100*P.width:C),F=P.y+(~(D[1]||D[0]).indexOf("%")?F/100*P.height:F)),a||a!==!1&&f.smooth?(y=C-d,A=F-_,f.xOffset=x+(y*v+A*E)-y,f.yOffset=g+(y*M+A*S)-A):f.xOffset=f.yOffset=0,f.xOrigin=C,f.yOrigin=F,f.smooth=!!a,f.origin=e,f.originIsAbsolute=!!i,t.style[ji]="0px 0px",c&&(Ls(c,f,"xOrigin",d,C),Ls(c,f,"yOrigin",_,F),Ls(c,f,"xOffset",x,f.xOffset),Ls(c,f,"yOffset",g,f.yOffset)),t.setAttribute("data-svg-origin",C+" "+F)},Gc=function(t,e){var i=t._gsap||new AE(t);if("x"in i&&!e&&!i.uncache)return i;var a=t.style,l=i.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=mr(t,ji)||"0",_,x,g,v,M,E,S,y,A,D,C,F,P,N,b,L,z,G,V,nt,rt,X,B,H,K,ft,R,Z,dt,St,wt,Pt;return _=x=g=E=S=y=A=D=C=0,v=M=1,i.svg=!!(t.getCTM&&GE(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(a[Cn]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[Cn]!=="none"?p[Cn]:"")),a.scale=a.rotate=a.translate="none"),N=ug(t,i.svg),i.svg&&(i.uncache?(K=t.getBBox(),d=i.xOrigin-K.x+"px "+(i.yOrigin-K.y)+"px",H=""):H=!e&&t.getAttribute("data-svg-origin"),G_(t,H||d,!!H||i.originIsAbsolute,i.smooth!==!1,N)),F=i.xOrigin||0,P=i.yOrigin||0,N!==Hc&&(G=N[0],V=N[1],nt=N[2],rt=N[3],_=X=N[4],x=B=N[5],N.length===6?(v=Math.sqrt(G*G+V*V),M=Math.sqrt(rt*rt+nt*nt),E=G||V?vl(V,G)*mo:0,A=nt||rt?vl(nt,rt)*mo+E:0,A&&(M*=Math.abs(Math.cos(A*kl))),i.svg&&(_-=F-(F*G+P*nt),x-=P-(F*V+P*rt))):(Pt=N[6],St=N[7],R=N[8],Z=N[9],dt=N[10],wt=N[11],_=N[12],x=N[13],g=N[14],b=vl(Pt,dt),S=b*mo,b&&(L=Math.cos(-b),z=Math.sin(-b),H=X*L+R*z,K=B*L+Z*z,ft=Pt*L+dt*z,R=X*-z+R*L,Z=B*-z+Z*L,dt=Pt*-z+dt*L,wt=St*-z+wt*L,X=H,B=K,Pt=ft),b=vl(-nt,dt),y=b*mo,b&&(L=Math.cos(-b),z=Math.sin(-b),H=G*L-R*z,K=V*L-Z*z,ft=nt*L-dt*z,wt=rt*z+wt*L,G=H,V=K,nt=ft),b=vl(V,G),E=b*mo,b&&(L=Math.cos(b),z=Math.sin(b),H=G*L+V*z,K=X*L+B*z,V=V*L-G*z,B=B*L-X*z,G=H,X=K),S&&Math.abs(S)+Math.abs(E)>359.9&&(S=E=0,y=180-y),v=zn(Math.sqrt(G*G+V*V+nt*nt)),M=zn(Math.sqrt(B*B+Pt*Pt)),b=vl(X,B),A=Math.abs(b)>2e-4?b*mo:0,C=wt?1/(wt<0?-wt:wt):0),i.svg&&(H=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!kE(mr(t,Cn)),H&&t.setAttribute("transform",H))),Math.abs(A)>90&&Math.abs(A)<270&&(l?(v*=-1,A+=E<=0?180:-180,E+=E<=0?180:-180):(M*=-1,A+=A<=0?180:-180)),e=e||i.uncache,i.x=_-((i.xPercent=_&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+c,i.y=x-((i.yPercent=x&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-x)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+c,i.z=g+c,i.scaleX=zn(v),i.scaleY=zn(M),i.rotation=zn(E)+f,i.rotationX=zn(S)+f,i.rotationY=zn(y)+f,i.skewX=A+f,i.skewY=D+f,i.transformPerspective=C+c,(i.zOrigin=parseFloat(d.split(" ")[2])||!e&&i.zOrigin||0)&&(a[ji]=od(d)),i.xOffset=i.yOffset=0,i.force3D=gr.force3D,i.renderTransform=i.svg?CR:zE?XE:wR,i.uncache=0,i},od=function(t){return(t=t.split(" "))[0]+" "+t[1]},Vm=function(t,e,i){var a=Ei(e);return zn(parseFloat(e)+parseFloat(Vs(t,"x",i+"px",a)))+a},wR=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,XE(t,e)},lo="0deg",nc="0px",uo=") ",XE=function(t,e){var i=e||this,a=i.xPercent,l=i.yPercent,c=i.x,f=i.y,p=i.z,d=i.rotation,_=i.rotationY,x=i.rotationX,g=i.skewX,v=i.skewY,M=i.scaleX,E=i.scaleY,S=i.transformPerspective,y=i.force3D,A=i.target,D=i.zOrigin,C="",F=y==="auto"&&t&&t!==1||y===!0;if(D&&(x!==lo||_!==lo)){var P=parseFloat(_)*kl,N=Math.sin(P),b=Math.cos(P),L;P=parseFloat(x)*kl,L=Math.cos(P),c=Vm(A,c,N*L*-D),f=Vm(A,f,-Math.sin(P)*-D),p=Vm(A,p,b*L*-D+D)}S!==nc&&(C+="perspective("+S+uo),(a||l)&&(C+="translate("+a+"%, "+l+"%) "),(F||c!==nc||f!==nc||p!==nc)&&(C+=p!==nc||F?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+uo),d!==lo&&(C+="rotate("+d+uo),_!==lo&&(C+="rotateY("+_+uo),x!==lo&&(C+="rotateX("+x+uo),(g!==lo||v!==lo)&&(C+="skew("+g+", "+v+uo),(M!==1||E!==1)&&(C+="scale("+M+", "+E+uo),A.style[Cn]=C||"translate(0, 0)"},CR=function(t,e){var i=e||this,a=i.xPercent,l=i.yPercent,c=i.x,f=i.y,p=i.rotation,d=i.skewX,_=i.skewY,x=i.scaleX,g=i.scaleY,v=i.target,M=i.xOrigin,E=i.yOrigin,S=i.xOffset,y=i.yOffset,A=i.forceCSS,D=parseFloat(c),C=parseFloat(f),F,P,N,b,L;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=kl,d*=kl,F=Math.cos(p)*x,P=Math.sin(p)*x,N=Math.sin(p-d)*-g,b=Math.cos(p-d)*g,d&&(_*=kl,L=Math.tan(d-_),L=Math.sqrt(1+L*L),N*=L,b*=L,_&&(L=Math.tan(_),L=Math.sqrt(1+L*L),F*=L,P*=L)),F=zn(F),P=zn(P),N=zn(N),b=zn(b)):(F=x,b=g,P=N=0),(D&&!~(c+"").indexOf("px")||C&&!~(f+"").indexOf("px"))&&(D=Vs(v,"x",c,"px"),C=Vs(v,"y",f,"px")),(M||E||S||y)&&(D=zn(D+M-(M*F+E*N)+S),C=zn(C+E-(M*P+E*b)+y)),(a||l)&&(L=v.getBBox(),D=zn(D+a/100*L.width),C=zn(C+l/100*L.height)),L="matrix("+F+","+P+","+N+","+b+","+D+","+C+")",v.setAttribute("transform",L),A&&(v.style[Cn]=L)},DR=function(t,e,i,a,l){var c=360,f=oi(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?mo:1),d=p-a,_=a+d+"deg",x,g;return f&&(x=l.split("_")[1],x==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),x==="cw"&&d<0?d=(d+c*Ty)%c-~~(d/c)*c:x==="ccw"&&d>0&&(d=(d-c*Ty)%c-~~(d/c)*c)),t._pt=g=new qi(t._pt,e,i,a,d,hR),g.e=_,g.u="deg",t._props.push(i),g},Ny=function(t,e){for(var i in e)t[i]=e[i];return t},UR=function(t,e,i){var a=Ny({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=i.style,f,p,d,_,x,g,v,M;a.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),c[Cn]=e,f=Gc(i,1),Gs(i,Cn),i.setAttribute("transform",d)):(d=getComputedStyle(i)[Cn],c[Cn]=e,f=Gc(i,1),c[Cn]=d);for(p in Qa)d=a[p],_=f[p],d!==_&&l.indexOf(p)<0&&(v=Ei(d),M=Ei(_),x=v!==M?Vs(i,p,d,M):parseFloat(d),g=parseFloat(_),t._pt=new qi(t._pt,f,p,x,g-x,B_),t._pt.u=M||0,t._props.push(p));Ny(f,a)};Yi("padding,margin,Width,Radius",function(o,t){var e="Top",i="Right",a="Bottom",l="Left",c=(t<3?[e,i,a,l]:[e+l,e+i,a+i,a+l]).map(function(f){return t<2?o+f:"border"+f+o});sd[t>1?"border"+o:o]=function(f,p,d,_,x){var g,v;if(arguments.length<4)return g=c.map(function(M){return Va(f,M,d)}),v=g.join(" "),v.split(g[0]).length===5?g[0]:v;g=(_+"").split(" "),v={},c.forEach(function(M,E){return v[M]=g[E]=g[E]||g[(E-1)/2|0]}),f.init(p,v,x)}});var WE={name:"css",register:H_,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,a,l){var c=this._props,f=t.style,p=i.vars.startAt,d,_,x,g,v,M,E,S,y,A,D,C,F,P,N,b,L;sg||H_(),this.styles=this.styles||BE(t),b=this.styles.props,this.tween=i;for(E in e)if(E!=="autoRound"&&(_=e[E],!(cr[E]&&RE(E,e,i,a,t,l)))){if(v=typeof _,M=sd[E],v==="function"&&(_=_.call(i,a,t,l),v=typeof _),v==="string"&&~_.indexOf("random(")&&(_=Ic(_)),M)M(this,t,E,_,i)&&(N=1);else if(E.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(E)+"").trim(),_+="",Bs.lastIndex=0,Bs.test(d)||(S=Ei(d),y=Ei(_),y?S!==y&&(d=Vs(t,E,d,y)+y):S&&(_+=S)),this.add(f,"setProperty",d,_,a,l,0,0,E),c.push(E),b.push(E,0,f[E]);else if(v!=="undefined"){if(p&&E in p?(d=typeof p[E]=="function"?p[E].call(i,a,t,l):p[E],oi(d)&&~d.indexOf("random(")&&(d=Ic(d)),Ei(d+"")||d==="auto"||(d+=gr.units[E]||Ei(Va(t,E))||""),(d+"").charAt(1)==="="&&(d=Va(t,E))):d=Va(t,E),g=parseFloat(d),A=v==="string"&&_.charAt(1)==="="&&_.substr(0,2),A&&(_=_.substr(2)),x=parseFloat(_),E in fa&&(E==="autoAlpha"&&(g===1&&Va(t,"visibility")==="hidden"&&x&&(g=0),b.push("visibility",0,f.visibility),Ls(this,f,"visibility",g?"inherit":"hidden",x?"inherit":"hidden",!x)),E!=="scale"&&E!=="transform"&&(E=fa[E],~E.indexOf(",")&&(E=E.split(",")[0]))),D=E in Qa,D){if(this.styles.save(E),L=_,v==="string"&&_.substring(0,6)==="var(--"){if(_=mr(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var z=t.style.perspective;t.style.perspective=_,_=mr(t,"perspective"),z?t.style.perspective=z:Gs(t,"perspective")}x=parseFloat(_)}if(C||(F=t._gsap,F.renderTransform&&!e.parseTransform||Gc(t,e.parseTransform),P=e.smoothOrigin!==!1&&F.smooth,C=this._pt=new qi(this._pt,f,Cn,0,1,F.renderTransform,F,0,-1),C.dep=1),E==="scale")this._pt=new qi(this._pt,F,"scaleY",F.scaleY,(A?Gl(F.scaleY,A+x):x)-F.scaleY||0,B_),this._pt.u=0,c.push("scaleY",E),E+="X";else if(E==="transformOrigin"){b.push(ji,0,f[ji]),_=AR(_),F.svg?G_(t,_,0,P,0,this):(y=parseFloat(_.split(" ")[2])||0,y!==F.zOrigin&&Ls(this,F,"zOrigin",F.zOrigin,y),Ls(this,f,E,od(d),od(_)));continue}else if(E==="svgOrigin"){G_(t,_,1,P,0,this);continue}else if(E in VE){DR(this,F,E,g,A?Gl(g,A+_):_);continue}else if(E==="smoothOrigin"){Ls(this,F,"smooth",F.smooth,_);continue}else if(E==="force3D"){F[E]=_;continue}else if(E==="transform"){UR(this,_,t);continue}}else E in f||(E=tu(E)||E);if(D||(x||x===0)&&(g||g===0)&&!fR.test(_)&&E in f)S=(d+"").substr((g+"").length),x||(x=0),y=Ei(_)||(E in gr.units?gr.units[E]:S),S!==y&&(g=Vs(t,E,d,y)),this._pt=new qi(this._pt,D?F:f,E,g,(A?Gl(g,A+x):x)-g,!D&&(y==="px"||E==="zIndex")&&e.autoRound!==!1?mR:B_),this._pt.u=y||0,D&&L!==_?(this._pt.b=d,this._pt.e=L,this._pt.r=pR):S!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=dR);else if(E in f)TR.call(this,t,E,d,A?A+_:_);else if(E in t)this.add(t,E,d||t[E],A?A+_:_,a,l);else if(E!=="parseTransform"){K0(E,_);continue}D||(E in f?b.push(E,0,f[E]):typeof t[E]=="function"?b.push(E,2,t[E]()):b.push(E,1,d||t[E])),c.push(E)}}N&&LE(this)},render:function(t,e){if(e.tween._time||!og())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Va,aliases:fa,getSetter:function(t,e,i){var a=fa[e];return a&&a.indexOf(",")<0&&(e=a),e in Qa&&e!==ji&&(t._gsap.x||Va(t,"x"))?i&&by===i?e==="scale"?xR:vR:(by=i||{})&&(e==="scale"?SR:yR):t.style&&!q0(t.style[e])?_R:~e.indexOf("-")?gR:rg(t,e)},core:{_removeProperty:Gs,_getMatrix:ug}};Qi.utils.checkPrefix=tu;Qi.core.getStyleSaver=BE;(function(o,t,e,i){var a=Yi(o+","+t+","+e,function(l){Qa[l]=1});Yi(t,function(l){gr.units[l]="deg",VE[l]=1}),fa[a[13]]=o+","+t,Yi(i,function(l){var c=l.split(":");fa[c[1]]=a[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){gr.units[o]="px"});Qi.registerPlugin(WE);var _r=Qi.registerPlugin(WE)||Qi;_r.core.Tween;const YE="/assets/IMG_2776_(1)_1779423085437-BMmkqFf2.jpeg";function NR({onComplete:o}){const t=On.useRef(null),e=On.useRef(null),i=On.useRef(null),a=On.useRef(null);return On.useEffect(()=>{const l=_r.context(()=>{_r.timeline({onComplete:()=>{t.current&&(t.current.style.display="none"),o()}}).to(e.current,{scale:1.05,opacity:.8,duration:.5,yoyo:!0,repeat:2,ease:"power1.inOut"}).to(e.current,{scale:1.2,opacity:0,duration:.4,ease:"power2.in"}).to([i.current,a.current],{xPercent:f=>f===0?-100:100,duration:1,ease:"power4.inOut",stagger:0},"-=0.2")},t);return()=>l.revert()},[o]),qt.jsxs("div",{ref:t,className:"fixed inset-0 z-50 flex items-center justify-center pointer-events-none",children:[qt.jsx("div",{ref:i,className:"absolute inset-y-0 left-0 w-1/2 bg-black origin-left"}),qt.jsx("div",{ref:a,className:"absolute inset-y-0 right-0 w-1/2 bg-black origin-right"}),qt.jsx("img",{ref:e,src:YE,alt:"DualRift Loading",className:"relative z-10 w-48 h-48 md:w-64 md:h-64 object-contain opacity-50"})]})}const cg="184",LR=0,Ly=1,OR=2,kh=1,PR=2,pc=3,ks=0,Zi=1,ka=2,qa=0,Xl=1,V_=2,Oy=3,Py=4,FR=5,xo=100,IR=101,BR=102,zR=103,HR=104,GR=200,VR=201,kR=202,XR=203,k_=204,X_=205,WR=206,YR=207,qR=208,jR=209,ZR=210,KR=211,QR=212,JR=213,$R=214,W_=0,Y_=1,q_=2,eu=3,j_=4,Z_=5,K_=6,Q_=7,qE=0,tw=1,ew=2,ma=0,jE=1,ZE=2,KE=3,QE=4,JE=5,$E=6,t1=7,e1=300,No=301,nu=302,km=303,Xm=304,bd=306,J_=1e3,Wa=1001,$_=1002,di=1003,nw=1004,rh=1005,Ti=1006,Wm=1007,Mo=1008,Or=1009,n1=1010,i1=1011,Vc=1012,fg=1013,xa=1014,ha=1015,Ja=1016,hg=1017,dg=1018,kc=1020,r1=35902,a1=35899,s1=1021,o1=1022,Kr=1023,$a=1026,Eo=1027,l1=1028,pg=1029,Lo=1030,mg=1031,_g=1033,Xh=33776,Wh=33777,Yh=33778,qh=33779,t0=35840,e0=35841,n0=35842,i0=35843,r0=36196,a0=37492,s0=37496,o0=37488,l0=37489,ld=37490,u0=37491,c0=37808,f0=37809,h0=37810,d0=37811,p0=37812,m0=37813,_0=37814,g0=37815,v0=37816,x0=37817,S0=37818,y0=37819,M0=37820,E0=37821,b0=36492,T0=36494,A0=36495,R0=36283,w0=36284,ud=36285,C0=36286,iw=3200,Fy=0,rw=1,Ds="",Dr="srgb",cd="srgb-linear",fd="linear",sn="srgb",xl=7680,Iy=519,aw=512,sw=513,ow=514,gg=515,lw=516,uw=517,vg=518,cw=519,By=35044,zy="300 es",da=2e3,hd=2001;function fw(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function dd(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hw(){const o=dd("canvas");return o.style.display="block",o}const Hy={};function Gy(...o){const t="THREE."+o.shift();console.log(t,...o)}function u1(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=o[1];e&&e.isStackTrace?o[0]+=" "+e.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function _e(...o){o=u1(o);const t="THREE."+o.shift();{const e=o[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...o)}}function Ye(...o){o=u1(o);const t="THREE."+o.shift();{const e=o[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...o)}}function D0(...o){const t=o.join(" ");t in Hy||(Hy[t]=!0,_e(...o))}function dw(o,t,e){return new Promise(function(i,a){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:i()}}setTimeout(l,e)})}const pw={[W_]:Y_,[q_]:K_,[j_]:Q_,[eu]:Z_,[Y_]:W_,[K_]:q_,[Q_]:j_,[Z_]:eu};class zo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const l=a.indexOf(e);l!==-1&&a.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,t);t.target=null}}}const xi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ym=Math.PI/180,U0=180/Math.PI;function qc(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xi[o&255]+xi[o>>8&255]+xi[o>>16&255]+xi[o>>24&255]+"-"+xi[t&255]+xi[t>>8&255]+"-"+xi[t>>16&15|64]+xi[t>>24&255]+"-"+xi[e&63|128]+xi[e>>8&255]+"-"+xi[e>>16&255]+xi[e>>24&255]+xi[i&255]+xi[i>>8&255]+xi[i>>16&255]+xi[i>>24&255]).toLowerCase()}function Ge(o,t,e){return Math.max(t,Math.min(e,o))}function mw(o,t){return(o%t+t)%t}function qm(o,t,e){return(1-e)*o+e*t}function ic(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Dg=class Dg{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ge(this.x,t.x,e.x),this.y=Ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ge(this.x,t,e),this.y=Ge(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),l=this.x-t.x,c=this.y-t.y;return this.x=l*i-c*a+t.x,this.y=l*a+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dg.prototype.isVector2=!0;let Ke=Dg;class su{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,l,c,f){let p=i[a+0],d=i[a+1],_=i[a+2],x=i[a+3],g=l[c+0],v=l[c+1],M=l[c+2],E=l[c+3];if(x!==E||p!==g||d!==v||_!==M){let S=p*g+d*v+_*M+x*E;S<0&&(g=-g,v=-v,M=-M,E=-E,S=-S);let y=1-f;if(S<.9995){const A=Math.acos(S),D=Math.sin(A);y=Math.sin(y*A)/D,f=Math.sin(f*A)/D,p=p*y+g*f,d=d*y+v*f,_=_*y+M*f,x=x*y+E*f}else{p=p*y+g*f,d=d*y+v*f,_=_*y+M*f,x=x*y+E*f;const A=1/Math.sqrt(p*p+d*d+_*_+x*x);p*=A,d*=A,_*=A,x*=A}}t[e]=p,t[e+1]=d,t[e+2]=_,t[e+3]=x}static multiplyQuaternionsFlat(t,e,i,a,l,c){const f=i[a],p=i[a+1],d=i[a+2],_=i[a+3],x=l[c],g=l[c+1],v=l[c+2],M=l[c+3];return t[e]=f*M+_*x+p*v-d*g,t[e+1]=p*M+_*g+d*x-f*v,t[e+2]=d*M+_*v+f*g-p*x,t[e+3]=_*M-f*x-p*g-d*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,a=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(i/2),_=f(a/2),x=f(l/2),g=p(i/2),v=p(a/2),M=p(l/2);switch(c){case"XYZ":this._x=g*_*x+d*v*M,this._y=d*v*x-g*_*M,this._z=d*_*M+g*v*x,this._w=d*_*x-g*v*M;break;case"YXZ":this._x=g*_*x+d*v*M,this._y=d*v*x-g*_*M,this._z=d*_*M-g*v*x,this._w=d*_*x+g*v*M;break;case"ZXY":this._x=g*_*x-d*v*M,this._y=d*v*x+g*_*M,this._z=d*_*M+g*v*x,this._w=d*_*x-g*v*M;break;case"ZYX":this._x=g*_*x-d*v*M,this._y=d*v*x+g*_*M,this._z=d*_*M-g*v*x,this._w=d*_*x+g*v*M;break;case"YZX":this._x=g*_*x+d*v*M,this._y=d*v*x+g*_*M,this._z=d*_*M-g*v*x,this._w=d*_*x-g*v*M;break;case"XZY":this._x=g*_*x-d*v*M,this._y=d*v*x-g*_*M,this._z=d*_*M+g*v*x,this._w=d*_*x+g*v*M;break;default:_e("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],l=e[8],c=e[1],f=e[5],p=e[9],d=e[2],_=e[6],x=e[10],g=i+f+x;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(_-p)*v,this._y=(l-d)*v,this._z=(c-a)*v}else if(i>f&&i>x){const v=2*Math.sqrt(1+i-f-x);this._w=(_-p)/v,this._x=.25*v,this._y=(a+c)/v,this._z=(l+d)/v}else if(f>x){const v=2*Math.sqrt(1+f-i-x);this._w=(l-d)/v,this._x=(a+c)/v,this._y=.25*v,this._z=(p+_)/v}else{const v=2*Math.sqrt(1+x-i-f);this._w=(c-a)/v,this._x=(l+d)/v,this._y=(p+_)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,l=t._z,c=t._w,f=e._x,p=e._y,d=e._z,_=e._w;return this._x=i*_+c*f+a*d-l*p,this._y=a*_+c*p+l*f-i*d,this._z=l*_+c*d+i*p-a*f,this._w=c*_-i*f-a*p-l*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,a=t._y,l=t._z,c=t._w,f=this.dot(t);f<0&&(i=-i,a=-a,l=-l,c=-c,f=-f);let p=1-e;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,e=Math.sin(e*d)/_,this._x=this._x*p+i*e,this._y=this._y*p+a*e,this._z=this._z*p+l*e,this._w=this._w*p+c*e,this._onChangeCallback()}else this._x=this._x*p+i*e,this._y=this._y*p+a*e,this._z=this._z*p+l*e,this._w=this._w*p+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ug=class Ug{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vy.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vy.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*a,this.y=l[1]*e+l[4]*i+l[7]*a,this.z=l[2]*e+l[5]*i+l[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=t.elements,c=1/(l[3]*e+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*a+l[12])*c,this.y=(l[1]*e+l[5]*i+l[9]*a+l[13])*c,this.z=(l[2]*e+l[6]*i+l[10]*a+l[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,l=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*a-f*i),_=2*(f*e-l*a),x=2*(l*i-c*e);return this.x=e+p*d+c*x-f*_,this.y=i+p*_+f*d-l*x,this.z=a+p*x+l*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*a,this.y=l[1]*e+l[5]*i+l[9]*a,this.z=l[2]*e+l[6]*i+l[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ge(this.x,t.x,e.x),this.y=Ge(this.y,t.y,e.y),this.z=Ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ge(this.x,t,e),this.y=Ge(this.y,t,e),this.z=Ge(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,l=t.z,c=e.x,f=e.y,p=e.z;return this.x=a*p-l*f,this.y=l*c-i*p,this.z=i*f-a*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jm.copy(this).projectOnVector(t),this.sub(jm)}reflect(t){return this.sub(jm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ug.prototype.isVector3=!0;let ot=Ug;const jm=new ot,Vy=new su,Ng=class Ng{constructor(t,e,i,a,l,c,f,p,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,l,c,f,p,d)}set(t,e,i,a,l,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=a,_[2]=f,_[3]=e,_[4]=l,_[5]=p,_[6]=i,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,c=i[0],f=i[3],p=i[6],d=i[1],_=i[4],x=i[7],g=i[2],v=i[5],M=i[8],E=a[0],S=a[3],y=a[6],A=a[1],D=a[4],C=a[7],F=a[2],P=a[5],N=a[8];return l[0]=c*E+f*A+p*F,l[3]=c*S+f*D+p*P,l[6]=c*y+f*C+p*N,l[1]=d*E+_*A+x*F,l[4]=d*S+_*D+x*P,l[7]=d*y+_*C+x*N,l[2]=g*E+v*A+M*F,l[5]=g*S+v*D+M*P,l[8]=g*y+v*C+M*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return e*c*_-e*f*d-i*l*_+i*f*p+a*l*d-a*c*p}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],x=_*c-f*d,g=f*p-_*l,v=d*l-c*p,M=e*x+i*g+a*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=x*E,t[1]=(a*d-_*i)*E,t[2]=(f*i-a*c)*E,t[3]=g*E,t[4]=(_*e-a*p)*E,t[5]=(a*l-f*e)*E,t[6]=v*E,t[7]=(i*p-d*e)*E,t[8]=(c*e-i*l)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(i*p,i*d,-i*(p*c+d*f)+c+t,-a*d,a*p,-a*(-d*c+p*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(Zm.makeScale(t,e)),this}rotate(t){return this.premultiply(Zm.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zm.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ng.prototype.isMatrix3=!0;let Se=Ng;const Zm=new Se,ky=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xy=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _w(){const o={enabled:!0,workingColorSpace:cd,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===sn&&(a.r=ja(a.r),a.g=ja(a.g),a.b=ja(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===sn&&(a.r=Wl(a.r),a.g=Wl(a.g),a.b=Wl(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ds?fd:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return D0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return D0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(a,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[cd]:{primaries:t,whitePoint:i,transfer:fd,toXYZ:ky,fromXYZ:Xy,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Dr},outputColorSpaceConfig:{drawingBufferColorSpace:Dr}},[Dr]:{primaries:t,whitePoint:i,transfer:sn,toXYZ:ky,fromXYZ:Xy,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Dr}}}),o}const He=_w();function ja(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wl(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Sl;class gw{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Sl===void 0&&(Sl=dd("canvas")),Sl.width=t.width,Sl.height=t.height;const a=Sl.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Sl}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dd("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=ja(l[c]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ja(e[i]/255)*255):e[i]=ja(e[i]);return{data:e,width:t.width,height:t.height}}else return _e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vw=0;class xg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=qc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Km(a[c].image)):l.push(Km(a[c]))}else l=Km(a);i.url=l}return e||(t.images[this.uuid]=i),i}}function Km(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?gw.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(_e("Texture: Unable to serialize Texture."),{})}let xw=0;const Qm=new ot;class Ii extends zo{constructor(t=Ii.DEFAULT_IMAGE,e=Ii.DEFAULT_MAPPING,i=Wa,a=Wa,l=Ti,c=Mo,f=Kr,p=Or,d=Ii.DEFAULT_ANISOTROPY,_=Ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=qc(),this.name="",this.source=new xg(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qm).x}get height(){return this.source.getSize(Qm).y}get depth(){return this.source.getSize(Qm).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){_e(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){_e(`Texture.setValues(): property '${e}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==e1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case J_:t.x=t.x-Math.floor(t.x);break;case Wa:t.x=t.x<0?0:1;break;case $_:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case J_:t.y=t.y-Math.floor(t.y);break;case Wa:t.y=t.y<0?0:1;break;case $_:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ii.DEFAULT_IMAGE=null;Ii.DEFAULT_MAPPING=e1;Ii.DEFAULT_ANISOTROPY=1;const Lg=class Lg{constructor(t=0,e=0,i=0,a=1){this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*a+c[12]*l,this.y=c[1]*e+c[5]*i+c[9]*a+c[13]*l,this.z=c[2]*e+c[6]*i+c[10]*a+c[14]*l,this.w=c[3]*e+c[7]*i+c[11]*a+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,l;const p=t.elements,d=p[0],_=p[4],x=p[8],g=p[1],v=p[5],M=p[9],E=p[2],S=p[6],y=p[10];if(Math.abs(_-g)<.01&&Math.abs(x-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+v+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(d+1)/2,C=(v+1)/2,F=(y+1)/2,P=(_+g)/4,N=(x+E)/4,b=(M+S)/4;return D>C&&D>F?D<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(D),a=P/i,l=N/i):C>F?C<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),i=P/a,l=b/a):F<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(F),i=N/l,a=b/l),this.set(i,a,l,e),this}let A=Math.sqrt((S-M)*(S-M)+(x-E)*(x-E)+(g-_)*(g-_));return Math.abs(A)<.001&&(A=1),this.x=(S-M)/A,this.y=(x-E)/A,this.z=(g-_)/A,this.w=Math.acos((d+v+y-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ge(this.x,t.x,e.x),this.y=Ge(this.y,t.y,e.y),this.z=Ge(this.z,t.z,e.z),this.w=Ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ge(this.x,t,e),this.y=Ge(this.y,t,e),this.z=Ge(this.z,t,e),this.w=Ge(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lg.prototype.isVector4=!0;let Hn=Lg;class Sw extends zo{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Hn(0,0,t,e),this.scissorTest=!1,this.viewport=new Hn(0,0,t,e),this.textures=[];const a={width:t,height:e,depth:i.depth},l=new Ii(a),c=i.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const a=Object.assign({},t.textures[e].image);this.textures[e].source=new xg(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _a extends Sw{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class c1 extends Ii{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yw extends Ii{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sd=class Sd{constructor(t,e,i,a,l,c,f,p,d,_,x,g,v,M,E,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,l,c,f,p,d,_,x,g,v,M,E,S)}set(t,e,i,a,l,c,f,p,d,_,x,g,v,M,E,S){const y=this.elements;return y[0]=t,y[4]=e,y[8]=i,y[12]=a,y[1]=l,y[5]=c,y[9]=f,y[13]=p,y[2]=d,y[6]=_,y[10]=x,y[14]=g,y[3]=v,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sd().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,a=1/yl.setFromMatrixColumn(t,0).length(),l=1/yl.setFromMatrixColumn(t,1).length(),c=1/yl.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,l=t.z,c=Math.cos(i),f=Math.sin(i),p=Math.cos(a),d=Math.sin(a),_=Math.cos(l),x=Math.sin(l);if(t.order==="XYZ"){const g=c*_,v=c*x,M=f*_,E=f*x;e[0]=p*_,e[4]=-p*x,e[8]=d,e[1]=v+M*d,e[5]=g-E*d,e[9]=-f*p,e[2]=E-g*d,e[6]=M+v*d,e[10]=c*p}else if(t.order==="YXZ"){const g=p*_,v=p*x,M=d*_,E=d*x;e[0]=g+E*f,e[4]=M*f-v,e[8]=c*d,e[1]=c*x,e[5]=c*_,e[9]=-f,e[2]=v*f-M,e[6]=E+g*f,e[10]=c*p}else if(t.order==="ZXY"){const g=p*_,v=p*x,M=d*_,E=d*x;e[0]=g-E*f,e[4]=-c*x,e[8]=M+v*f,e[1]=v+M*f,e[5]=c*_,e[9]=E-g*f,e[2]=-c*d,e[6]=f,e[10]=c*p}else if(t.order==="ZYX"){const g=c*_,v=c*x,M=f*_,E=f*x;e[0]=p*_,e[4]=M*d-v,e[8]=g*d+E,e[1]=p*x,e[5]=E*d+g,e[9]=v*d-M,e[2]=-d,e[6]=f*p,e[10]=c*p}else if(t.order==="YZX"){const g=c*p,v=c*d,M=f*p,E=f*d;e[0]=p*_,e[4]=E-g*x,e[8]=M*x+v,e[1]=x,e[5]=c*_,e[9]=-f*_,e[2]=-d*_,e[6]=v*x+M,e[10]=g-E*x}else if(t.order==="XZY"){const g=c*p,v=c*d,M=f*p,E=f*d;e[0]=p*_,e[4]=-x,e[8]=d*_,e[1]=g*x+E,e[5]=c*_,e[9]=v*x-M,e[2]=M*x-v,e[6]=f*_,e[10]=E*x+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mw,t,Ew)}lookAt(t,e,i){const a=this.elements;return sr.subVectors(t,e),sr.lengthSq()===0&&(sr.z=1),sr.normalize(),Es.crossVectors(i,sr),Es.lengthSq()===0&&(Math.abs(i.z)===1?sr.x+=1e-4:sr.z+=1e-4,sr.normalize(),Es.crossVectors(i,sr)),Es.normalize(),ah.crossVectors(sr,Es),a[0]=Es.x,a[4]=ah.x,a[8]=sr.x,a[1]=Es.y,a[5]=ah.y,a[9]=sr.y,a[2]=Es.z,a[6]=ah.z,a[10]=sr.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,c=i[0],f=i[4],p=i[8],d=i[12],_=i[1],x=i[5],g=i[9],v=i[13],M=i[2],E=i[6],S=i[10],y=i[14],A=i[3],D=i[7],C=i[11],F=i[15],P=a[0],N=a[4],b=a[8],L=a[12],z=a[1],G=a[5],V=a[9],nt=a[13],rt=a[2],X=a[6],B=a[10],H=a[14],K=a[3],ft=a[7],R=a[11],Z=a[15];return l[0]=c*P+f*z+p*rt+d*K,l[4]=c*N+f*G+p*X+d*ft,l[8]=c*b+f*V+p*B+d*R,l[12]=c*L+f*nt+p*H+d*Z,l[1]=_*P+x*z+g*rt+v*K,l[5]=_*N+x*G+g*X+v*ft,l[9]=_*b+x*V+g*B+v*R,l[13]=_*L+x*nt+g*H+v*Z,l[2]=M*P+E*z+S*rt+y*K,l[6]=M*N+E*G+S*X+y*ft,l[10]=M*b+E*V+S*B+y*R,l[14]=M*L+E*nt+S*H+y*Z,l[3]=A*P+D*z+C*rt+F*K,l[7]=A*N+D*G+C*X+F*ft,l[11]=A*b+D*V+C*B+F*R,l[15]=A*L+D*nt+C*H+F*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],l=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],x=t[6],g=t[10],v=t[14],M=t[3],E=t[7],S=t[11],y=t[15],A=p*v-d*g,D=f*v-d*x,C=f*g-p*x,F=c*v-d*_,P=c*g-p*_,N=c*x-f*_;return e*(E*A-S*D+y*C)-i*(M*A-S*F+y*P)+a*(M*D-E*F+y*N)-l*(M*C-E*P+S*N)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],x=t[9],g=t[10],v=t[11],M=t[12],E=t[13],S=t[14],y=t[15],A=e*f-i*c,D=e*p-a*c,C=e*d-l*c,F=i*p-a*f,P=i*d-l*f,N=a*d-l*p,b=_*E-x*M,L=_*S-g*M,z=_*y-v*M,G=x*S-g*E,V=x*y-v*E,nt=g*y-v*S,rt=A*nt-D*V+C*G+F*z-P*L+N*b;if(rt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/rt;return t[0]=(f*nt-p*V+d*G)*X,t[1]=(a*V-i*nt-l*G)*X,t[2]=(E*N-S*P+y*F)*X,t[3]=(g*P-x*N-v*F)*X,t[4]=(p*z-c*nt-d*L)*X,t[5]=(e*nt-a*z+l*L)*X,t[6]=(S*C-M*N-y*D)*X,t[7]=(_*N-g*C+v*D)*X,t[8]=(c*V-f*z+d*b)*X,t[9]=(i*z-e*V-l*b)*X,t[10]=(M*P-E*C+y*A)*X,t[11]=(x*C-_*P-v*A)*X,t[12]=(f*L-c*G-p*b)*X,t[13]=(e*G-i*L+a*b)*X,t[14]=(E*D-M*F-S*A)*X,t[15]=(_*F-x*D+g*A)*X,this}scale(t){const e=this.elements,i=t.x,a=t.y,l=t.z;return e[0]*=i,e[4]*=a,e[8]*=l,e[1]*=i,e[5]*=a,e[9]*=l,e[2]*=i,e[6]*=a,e[10]*=l,e[3]*=i,e[7]*=a,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),l=1-i,c=t.x,f=t.y,p=t.z,d=l*c,_=l*f;return this.set(d*c+i,d*f-a*p,d*p+a*f,0,d*f+a*p,_*f+i,_*p-a*c,0,d*p-a*f,_*p+a*c,l*p*p+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,l,c){return this.set(1,i,l,0,t,1,c,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,l=e._x,c=e._y,f=e._z,p=e._w,d=l+l,_=c+c,x=f+f,g=l*d,v=l*_,M=l*x,E=c*_,S=c*x,y=f*x,A=p*d,D=p*_,C=p*x,F=i.x,P=i.y,N=i.z;return a[0]=(1-(E+y))*F,a[1]=(v+C)*F,a[2]=(M-D)*F,a[3]=0,a[4]=(v-C)*P,a[5]=(1-(g+y))*P,a[6]=(S+A)*P,a[7]=0,a[8]=(M+D)*N,a[9]=(S-A)*N,a[10]=(1-(g+E))*N,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const l=this.determinant();if(l===0)return i.set(1,1,1),e.identity(),this;let c=yl.set(a[0],a[1],a[2]).length();const f=yl.set(a[4],a[5],a[6]).length(),p=yl.set(a[8],a[9],a[10]).length();l<0&&(c=-c),Wr.copy(this);const d=1/c,_=1/f,x=1/p;return Wr.elements[0]*=d,Wr.elements[1]*=d,Wr.elements[2]*=d,Wr.elements[4]*=_,Wr.elements[5]*=_,Wr.elements[6]*=_,Wr.elements[8]*=x,Wr.elements[9]*=x,Wr.elements[10]*=x,e.setFromRotationMatrix(Wr),i.x=c,i.y=f,i.z=p,this}makePerspective(t,e,i,a,l,c,f=da,p=!1){const d=this.elements,_=2*l/(e-t),x=2*l/(i-a),g=(e+t)/(e-t),v=(i+a)/(i-a);let M,E;if(p)M=l/(c-l),E=c*l/(c-l);else if(f===da)M=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===hd)M=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,a,l,c,f=da,p=!1){const d=this.elements,_=2/(e-t),x=2/(i-a),g=-(e+t)/(e-t),v=-(i+a)/(i-a);let M,E;if(p)M=1/(c-l),E=c/(c-l);else if(f===da)M=-2/(c-l),E=-(c+l)/(c-l);else if(f===hd)M=-1/(c-l),E=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=v,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Sd.prototype.isMatrix4=!0;let jn=Sd;const yl=new ot,Wr=new jn,Mw=new ot(0,0,0),Ew=new ot(1,1,1),Es=new ot,ah=new ot,sr=new ot,Wy=new jn,Yy=new su;class Oo{constructor(t=0,e=0,i=0,a=Oo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,l=a[0],c=a[4],f=a[8],p=a[1],d=a[5],_=a[9],x=a[2],g=a[6],v=a[10];switch(e){case"XYZ":this._y=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,v),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,v),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,v),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Ge(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,v));break;case"XZY":this._z=Math.asin(-Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,v),this._y=0);break;default:_e("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Wy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wy,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yy.setFromEuler(this),this.setFromQuaternion(Yy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oo.DEFAULT_ORDER="XYZ";class f1{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bw=0;const qy=new ot,Ml=new su,Fa=new jn,sh=new ot,rc=new ot,Tw=new ot,Aw=new su,jy=new ot(1,0,0),Zy=new ot(0,1,0),Ky=new ot(0,0,1),Qy={type:"added"},Rw={type:"removed"},El={type:"childadded",child:null},Jm={type:"childremoved",child:null};class Ki extends zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=qc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ki.DEFAULT_UP.clone();const t=new ot,e=new Oo,i=new su,a=new ot(1,1,1);function l(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jn},normalMatrix:{value:new Se}}),this.matrix=new jn,this.matrixWorld=new jn,this.matrixAutoUpdate=Ki.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ki.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ml.setFromAxisAngle(t,e),this.quaternion.multiply(Ml),this}rotateOnWorldAxis(t,e){return Ml.setFromAxisAngle(t,e),this.quaternion.premultiply(Ml),this}rotateX(t){return this.rotateOnAxis(jy,t)}rotateY(t){return this.rotateOnAxis(Zy,t)}rotateZ(t){return this.rotateOnAxis(Ky,t)}translateOnAxis(t,e){return qy.copy(t).applyQuaternion(this.quaternion),this.position.add(qy.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jy,t)}translateY(t){return this.translateOnAxis(Zy,t)}translateZ(t){return this.translateOnAxis(Ky,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fa.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?sh.copy(t):sh.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),rc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fa.lookAt(rc,sh,this.up):Fa.lookAt(sh,rc,this.up),this.quaternion.setFromRotationMatrix(Fa),a&&(Fa.extractRotation(a.matrixWorld),Ml.setFromRotationMatrix(Fa),this.quaternion.premultiply(Ml.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qy),El.child=t,this.dispatchEvent(El),El.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rw),Jm.child=t,this.dispatchEvent(Jm),Jm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qy),El.child=t,this.dispatchEvent(El),El.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rc,t,Tw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rc,Aw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,a=t.z,l=this.matrix.elements;l[12]+=e-l[0]*e-l[4]*i-l[8]*a,l[13]+=i-l[1]*e-l[5]*i-l[9]*a,l[14]+=a-l[2]*e-l[6]*i-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const x=p[d];l(t.shapes,x)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));a.material=f}else a.material=l(t.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(l(t.animations,p))}}if(e){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),x=c(t.shapes),g=c(t.skeletons),v=c(t.animations),M=c(t.nodes);f.length>0&&(i.geometries=f),p.length>0&&(i.materials=p),d.length>0&&(i.textures=d),_.length>0&&(i.images=_),x.length>0&&(i.shapes=x),g.length>0&&(i.skeletons=g),v.length>0&&(i.animations=v),M.length>0&&(i.nodes=M)}return i.object=a,i;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Ki.DEFAULT_UP=new ot(0,1,0);Ki.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ki.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mc extends Ki{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ww={type:"move"};class $m{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const E of t.hand.values()){const S=e.getJointPose(E,i),y=this._getHandJoint(d,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const _=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=_.position.distanceTo(x.position),v=.02,M=.005;d.inputState.pinching&&g>v+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=v-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));f!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(ww)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new mc;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const h1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},oh={h:0,s:0,l:0};function t_(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class en{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dr){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,He.colorSpaceToWorking(this,e),this}setRGB(t,e,i,a=He.workingColorSpace){return this.r=t,this.g=e,this.b=i,He.colorSpaceToWorking(this,a),this}setHSL(t,e,i,a=He.workingColorSpace){if(t=mw(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,c=2*i-l;this.r=t_(c,l,t+1/3),this.g=t_(c,l,t),this.b=t_(c,l,t-1/3)}return He.colorSpaceToWorking(this,a),this}setStyle(t,e=Dr){function i(l){l!==void 0&&parseFloat(l)<1&&_e("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:_e("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(l,16),e);_e("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dr){const i=h1[t.toLowerCase()];return i!==void 0?this.setHex(i,e):_e("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ja(t.r),this.g=ja(t.g),this.b=ja(t.b),this}copyLinearToSRGB(t){return this.r=Wl(t.r),this.g=Wl(t.g),this.b=Wl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dr){return He.workingToColorSpace(Si.copy(this),t),Math.round(Ge(Si.r*255,0,255))*65536+Math.round(Ge(Si.g*255,0,255))*256+Math.round(Ge(Si.b*255,0,255))}getHexString(t=Dr){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=He.workingColorSpace){He.workingToColorSpace(Si.copy(this),e);const i=Si.r,a=Si.g,l=Si.b,c=Math.max(i,a,l),f=Math.min(i,a,l);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const x=c-f;switch(d=_<=.5?x/(c+f):x/(2-c-f),c){case i:p=(a-l)/x+(a<l?6:0);break;case a:p=(l-i)/x+2;break;case l:p=(i-a)/x+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,e=He.workingColorSpace){return He.workingToColorSpace(Si.copy(this),e),t.r=Si.r,t.g=Si.g,t.b=Si.b,t}getStyle(t=Dr){He.workingToColorSpace(Si.copy(this),t);const e=Si.r,i=Si.g,a=Si.b;return t!==Dr?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(bs),this.setHSL(bs.h+t,bs.s+e,bs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(bs),t.getHSL(oh);const i=qm(bs.h,oh.h,e),a=qm(bs.s,oh.s,e),l=qm(bs.l,oh.l,e);return this.setHSL(i,a,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*a,this.g=l[1]*e+l[4]*i+l[7]*a,this.b=l[2]*e+l[5]*i+l[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Si=new en;en.NAMES=h1;class Sg{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new en(t),this.density=e}clone(){return new Sg(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cw extends Ki{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oo,this.environmentIntensity=1,this.environmentRotation=new Oo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Yr=new ot,Ia=new ot,e_=new ot,Ba=new ot,bl=new ot,Tl=new ot,Jy=new ot,n_=new ot,i_=new ot,r_=new ot,a_=new Hn,s_=new Hn,o_=new Hn;class Zr{constructor(t=new ot,e=new ot,i=new ot){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),Yr.subVectors(t,e),a.cross(Yr);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(t,e,i,a,l){Yr.subVectors(a,e),Ia.subVectors(i,e),e_.subVectors(t,e);const c=Yr.dot(Yr),f=Yr.dot(Ia),p=Yr.dot(e_),d=Ia.dot(Ia),_=Ia.dot(e_),x=c*d-f*f;if(x===0)return l.set(0,0,0),null;const g=1/x,v=(d*p-f*_)*g,M=(c*_-f*p)*g;return l.set(1-v-M,M,v)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,Ba)===null?!1:Ba.x>=0&&Ba.y>=0&&Ba.x+Ba.y<=1}static getInterpolation(t,e,i,a,l,c,f,p){return this.getBarycoord(t,e,i,a,Ba)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ba.x),p.addScaledVector(c,Ba.y),p.addScaledVector(f,Ba.z),p)}static getInterpolatedAttribute(t,e,i,a,l,c){return a_.setScalar(0),s_.setScalar(0),o_.setScalar(0),a_.fromBufferAttribute(t,e),s_.fromBufferAttribute(t,i),o_.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(a_,l.x),c.addScaledVector(s_,l.y),c.addScaledVector(o_,l.z),c}static isFrontFacing(t,e,i,a){return Yr.subVectors(i,e),Ia.subVectors(t,e),Yr.cross(Ia).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yr.subVectors(this.c,this.b),Ia.subVectors(this.a,this.b),Yr.cross(Ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zr.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,l){return Zr.getInterpolation(t,this.a,this.b,this.c,e,i,a,l)}containsPoint(t){return Zr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,l=this.c;let c,f;bl.subVectors(a,i),Tl.subVectors(l,i),n_.subVectors(t,i);const p=bl.dot(n_),d=Tl.dot(n_);if(p<=0&&d<=0)return e.copy(i);i_.subVectors(t,a);const _=bl.dot(i_),x=Tl.dot(i_);if(_>=0&&x<=_)return e.copy(a);const g=p*x-_*d;if(g<=0&&p>=0&&_<=0)return c=p/(p-_),e.copy(i).addScaledVector(bl,c);r_.subVectors(t,l);const v=bl.dot(r_),M=Tl.dot(r_);if(M>=0&&v<=M)return e.copy(l);const E=v*d-p*M;if(E<=0&&d>=0&&M<=0)return f=d/(d-M),e.copy(i).addScaledVector(Tl,f);const S=_*M-v*x;if(S<=0&&x-_>=0&&v-M>=0)return Jy.subVectors(l,a),f=(x-_)/(x-_+(v-M)),e.copy(a).addScaledVector(Jy,f);const y=1/(S+E+g);return c=E*y,f=g*y,e.copy(i).addScaledVector(bl,c).addScaledVector(Tl,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class jc{constructor(t=new ot(1/0,1/0,1/0),e=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qr.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qr.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=qr.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const l=i.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,qr):qr.fromBufferAttribute(l,c),qr.applyMatrix4(t.matrixWorld),this.expandByPoint(qr);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lh.copy(i.boundingBox)),lh.applyMatrix4(t.matrixWorld),this.union(lh)}const a=t.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qr),qr.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ac),uh.subVectors(this.max,ac),Al.subVectors(t.a,ac),Rl.subVectors(t.b,ac),wl.subVectors(t.c,ac),Ts.subVectors(Rl,Al),As.subVectors(wl,Rl),co.subVectors(Al,wl);let e=[0,-Ts.z,Ts.y,0,-As.z,As.y,0,-co.z,co.y,Ts.z,0,-Ts.x,As.z,0,-As.x,co.z,0,-co.x,-Ts.y,Ts.x,0,-As.y,As.x,0,-co.y,co.x,0];return!l_(e,Al,Rl,wl,uh)||(e=[1,0,0,0,1,0,0,0,1],!l_(e,Al,Rl,wl,uh))?!1:(ch.crossVectors(Ts,As),e=[ch.x,ch.y,ch.z],l_(e,Al,Rl,wl,uh))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qr).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qr).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(za),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const za=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],qr=new ot,lh=new jc,Al=new ot,Rl=new ot,wl=new ot,Ts=new ot,As=new ot,co=new ot,ac=new ot,uh=new ot,ch=new ot,fo=new ot;function l_(o,t,e,i,a){for(let l=0,c=o.length-3;l<=c;l+=3){fo.fromArray(o,l);const f=a.x*Math.abs(fo.x)+a.y*Math.abs(fo.y)+a.z*Math.abs(fo.z),p=t.dot(fo),d=e.dot(fo),_=i.dot(fo);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const Wn=new ot,fh=new Ke;let Dw=0;class Qr extends zo{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dw++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=By,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)fh.fromBufferAttribute(this,e),fh.applyMatrix3(t),this.setXY(e,fh.x,fh.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Wn.fromBufferAttribute(this,e),Wn.applyMatrix3(t),this.setXYZ(e,Wn.x,Wn.y,Wn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Wn.fromBufferAttribute(this,e),Wn.applyMatrix4(t),this.setXYZ(e,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Wn.fromBufferAttribute(this,e),Wn.applyNormalMatrix(t),this.setXYZ(e,Wn.x,Wn.y,Wn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Wn.fromBufferAttribute(this,e),Wn.transformDirection(t),this.setXYZ(e,Wn.x,Wn.y,Wn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ic(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Vi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ic(e,this.array)),e}setX(t,e){return this.normalized&&(e=Vi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ic(e,this.array)),e}setY(t,e){return this.normalized&&(e=Vi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ic(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Vi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ic(e,this.array)),e}setW(t,e){return this.normalized&&(e=Vi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Vi(e,this.array),i=Vi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=Vi(e,this.array),i=Vi(i,this.array),a=Vi(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,l){return t*=this.itemSize,this.normalized&&(e=Vi(e,this.array),i=Vi(i,this.array),a=Vi(a,this.array),l=Vi(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==By&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class d1 extends Qr{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class p1 extends Qr{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ir extends Qr{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Uw=new jc,sc=new ot,u_=new ot;class Td{constructor(t=new ot,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Uw.setFromPoints(t).getCenter(i);let a=0;for(let l=0,c=t.length;l<c;l++)a=Math.max(a,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sc.subVectors(t,this.center);const e=sc.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(sc,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(u_.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sc.copy(t.center).add(u_)),this.expandByPoint(sc.copy(t.center).sub(u_))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Nw=0;const wr=new jn,c_=new Ki,Cl=new ot,or=new jc,oc=new jc,ri=new ot;class zr extends zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=qc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fw(t)?p1:d1)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new Se().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wr.makeRotationFromQuaternion(t),this.applyMatrix4(wr),this}rotateX(t){return wr.makeRotationX(t),this.applyMatrix4(wr),this}rotateY(t){return wr.makeRotationY(t),this.applyMatrix4(wr),this}rotateZ(t){return wr.makeRotationZ(t),this.applyMatrix4(wr),this}translate(t,e,i){return wr.makeTranslation(t,e,i),this.applyMatrix4(wr),this}scale(t,e,i){return wr.makeScale(t,e,i),this.applyMatrix4(wr),this}lookAt(t){return c_.lookAt(t),c_.updateMatrix(),this.applyMatrix4(c_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cl).negate(),this.translate(Cl.x,Cl.y,Cl.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ir(i,3))}else{const i=Math.min(t.length,e.count);for(let a=0;a<i;a++){const l=t[a];e.setXYZ(a,l.x,l.y,l.z||0)}t.length>e.count&&_e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const l=e[i];or.setFromBufferAttribute(l),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,or.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,or.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(or.min),this.boundingBox.expandByPoint(or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Td);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){const i=this.boundingSphere.center;if(or.setFromBufferAttribute(t),e)for(let l=0,c=e.length;l<c;l++){const f=e[l];oc.setFromBufferAttribute(f),this.morphTargetsRelative?(ri.addVectors(or.min,oc.min),or.expandByPoint(ri),ri.addVectors(or.max,oc.max),or.expandByPoint(ri)):(or.expandByPoint(oc.min),or.expandByPoint(oc.max))}or.getCenter(i);let a=0;for(let l=0,c=t.count;l<c;l++)ri.fromBufferAttribute(t,l),a=Math.max(a,i.distanceToSquared(ri));if(e)for(let l=0,c=e.length;l<c;l++){const f=e[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)ri.fromBufferAttribute(f,d),p&&(Cl.fromBufferAttribute(t,d),ri.add(Cl)),a=Math.max(a,i.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,a=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qr(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let b=0;b<i.count;b++)f[b]=new ot,p[b]=new ot;const d=new ot,_=new ot,x=new ot,g=new Ke,v=new Ke,M=new Ke,E=new ot,S=new ot;function y(b,L,z){d.fromBufferAttribute(i,b),_.fromBufferAttribute(i,L),x.fromBufferAttribute(i,z),g.fromBufferAttribute(l,b),v.fromBufferAttribute(l,L),M.fromBufferAttribute(l,z),_.sub(d),x.sub(d),v.sub(g),M.sub(g);const G=1/(v.x*M.y-M.x*v.y);isFinite(G)&&(E.copy(_).multiplyScalar(M.y).addScaledVector(x,-v.y).multiplyScalar(G),S.copy(x).multiplyScalar(v.x).addScaledVector(_,-M.x).multiplyScalar(G),f[b].add(E),f[L].add(E),f[z].add(E),p[b].add(S),p[L].add(S),p[z].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let b=0,L=A.length;b<L;++b){const z=A[b],G=z.start,V=z.count;for(let nt=G,rt=G+V;nt<rt;nt+=3)y(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const D=new ot,C=new ot,F=new ot,P=new ot;function N(b){F.fromBufferAttribute(a,b),P.copy(F);const L=f[b];D.copy(L),D.sub(F.multiplyScalar(F.dot(L))).normalize(),C.crossVectors(P,L);const G=C.dot(p[b])<0?-1:1;c.setXYZW(b,D.x,D.y,D.z,G)}for(let b=0,L=A.length;b<L;++b){const z=A[b],G=z.start,V=z.count;for(let nt=G,rt=G+V;nt<rt;nt+=3)N(t.getX(nt+0)),N(t.getX(nt+1)),N(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qr(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,v=i.count;g<v;g++)i.setXYZ(g,0,0,0);const a=new ot,l=new ot,c=new ot,f=new ot,p=new ot,d=new ot,_=new ot,x=new ot;if(t)for(let g=0,v=t.count;g<v;g+=3){const M=t.getX(g+0),E=t.getX(g+1),S=t.getX(g+2);a.fromBufferAttribute(e,M),l.fromBufferAttribute(e,E),c.fromBufferAttribute(e,S),_.subVectors(c,l),x.subVectors(a,l),_.cross(x),f.fromBufferAttribute(i,M),p.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.add(_),p.add(_),d.add(_),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(E,p.x,p.y,p.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,v=e.count;g<v;g+=3)a.fromBufferAttribute(e,g+0),l.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),_.subVectors(c,l),x.subVectors(a,l),_.cross(x),i.setXYZ(g+0,_.x,_.y,_.z),i.setXYZ(g+1,_.x,_.y,_.z),i.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ri.fromBufferAttribute(t,e),ri.normalize(),t.setXYZ(e,ri.x,ri.y,ri.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,x=f.normalized,g=new d.constructor(p.length*_);let v=0,M=0;for(let E=0,S=p.length;E<S;E++){f.isInterleavedBufferAttribute?v=p[E]*f.data.stride+f.offset:v=p[E]*_;for(let y=0;y<_;y++)g[M++]=d[v++]}return new Qr(g,_,x)}if(this.index===null)return _e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new zr,i=this.index.array,a=this.attributes;for(const f in a){const p=a[f],d=t(p,i);e.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,x=d.length;_<x;_++){const g=d[_],v=t(g,i);p.push(v)}e.morphAttributes[f]=p}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const p in i){const d=i[p];t.data.attributes[p]=d.toJSON(t.data)}const a={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let x=0,g=d.length;x<g;x++){const v=d[x];_.push(v.toJSON(t.data))}_.length>0&&(a[p]=_,l=!0)}l&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const d in a){const _=a[d];this.setAttribute(d,_.clone(e))}const l=t.morphAttributes;for(const d in l){const _=[],x=l[d];for(let g=0,v=x.length;g<v;g++)_.push(x[g].clone(e));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const x=c[d];this.addGroup(x.start,x.count,x.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Lw=0;class Zc extends zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=qc(),this.name="",this.type="Material",this.blending=Xl,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=k_,this.blendDst=X_,this.blendEquation=xo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new en(0,0,0),this.blendAlpha=0,this.depthFunc=eu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){_e(`Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){_e(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xl&&(i.blending=this.blending),this.side!==ks&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==k_&&(i.blendSrc=this.blendSrc),this.blendDst!==X_&&(i.blendDst=this.blendDst),this.blendEquation!==xo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xl&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xl&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xl&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(e){const l=a(t.textures),c=a(t.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ha=new ot,f_=new ot,hh=new ot,Rs=new ot,h_=new ot,dh=new ot,d_=new ot;class m1{constructor(t=new ot,e=new ot(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ha)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ha.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ha.copy(this.origin).addScaledVector(this.direction,e),Ha.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){f_.copy(t).add(e).multiplyScalar(.5),hh.copy(e).sub(t).normalize(),Rs.copy(this.origin).sub(f_);const l=t.distanceTo(e)*.5,c=-this.direction.dot(hh),f=Rs.dot(this.direction),p=-Rs.dot(hh),d=Rs.lengthSq(),_=Math.abs(1-c*c);let x,g,v,M;if(_>0)if(x=c*p-f,g=c*f-p,M=l*_,x>=0)if(g>=-M)if(g<=M){const E=1/_;x*=E,g*=E,v=x*(x+c*g+2*f)+g*(c*x+g+2*p)+d}else g=l,x=Math.max(0,-(c*g+f)),v=-x*x+g*(g+2*p)+d;else g=-l,x=Math.max(0,-(c*g+f)),v=-x*x+g*(g+2*p)+d;else g<=-M?(x=Math.max(0,-(-c*l+f)),g=x>0?-l:Math.min(Math.max(-l,-p),l),v=-x*x+g*(g+2*p)+d):g<=M?(x=0,g=Math.min(Math.max(-l,-p),l),v=g*(g+2*p)+d):(x=Math.max(0,-(c*l+f)),g=x>0?l:Math.min(Math.max(-l,-p),l),v=-x*x+g*(g+2*p)+d);else g=c>0?-l:l,x=Math.max(0,-(c*g+f)),v=-x*x+g*(g+2*p)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(f_).addScaledVector(hh,g),v}intersectSphere(t,e){Ha.subVectors(t.center,this.origin);const i=Ha.dot(this.direction),a=Ha.dot(Ha)-i*i,l=t.radius*t.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=i-c,p=i+c;return p<0?null:f<0?this.at(p,e):this.at(f,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,l,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(i=(t.min.x-g.x)*d,a=(t.max.x-g.x)*d):(i=(t.max.x-g.x)*d,a=(t.min.x-g.x)*d),_>=0?(l=(t.min.y-g.y)*_,c=(t.max.y-g.y)*_):(l=(t.max.y-g.y)*_,c=(t.min.y-g.y)*_),i>c||l>a||((l>i||isNaN(i))&&(i=l),(c<a||isNaN(a))&&(a=c),x>=0?(f=(t.min.z-g.z)*x,p=(t.max.z-g.z)*x):(f=(t.max.z-g.z)*x,p=(t.min.z-g.z)*x),i>p||f>a)||((f>i||i!==i)&&(i=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,Ha)!==null}intersectTriangle(t,e,i,a,l){h_.subVectors(e,t),dh.subVectors(i,t),d_.crossVectors(h_,dh);let c=this.direction.dot(d_),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Rs.subVectors(this.origin,t);const p=f*this.direction.dot(dh.crossVectors(Rs,dh));if(p<0)return null;const d=f*this.direction.dot(h_.cross(Rs));if(d<0||p+d>c)return null;const _=-f*Rs.dot(d_);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pd extends Zc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new en(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oo,this.combine=qE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $y=new jn,ho=new m1,ph=new Td,tM=new ot,mh=new ot,_h=new ot,gh=new ot,p_=new ot,vh=new ot,eM=new ot,xh=new ot;class Jr extends Ki{constructor(t=new zr,e=new pd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const f=this.morphTargetInfluences;if(l&&f){vh.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],x=l[p];_!==0&&(p_.fromBufferAttribute(x,t),c?vh.addScaledVector(p_,_):vh.addScaledVector(p_.sub(e),_))}e.add(vh)}return e}raycast(t,e){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ph.copy(i.boundingSphere),ph.applyMatrix4(l),ho.copy(t.ray).recast(t.near),!(ph.containsPoint(ho.origin)===!1&&(ho.intersectSphere(ph,tM)===null||ho.origin.distanceToSquared(tM)>(t.far-t.near)**2))&&($y.copy(l).invert(),ho.copy(t.ray).applyMatrix4($y),!(i.boundingBox!==null&&ho.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ho)))}_computeIntersections(t,e,i){let a;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,x=l.attributes.normal,g=l.groups,v=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,E=g.length;M<E;M++){const S=g[M],y=c[S.materialIndex],A=Math.max(S.start,v.start),D=Math.min(f.count,Math.min(S.start+S.count,v.start+v.count));for(let C=A,F=D;C<F;C+=3){const P=f.getX(C),N=f.getX(C+1),b=f.getX(C+2);a=Sh(this,y,t,i,d,_,x,P,N,b),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,e.push(a))}}else{const M=Math.max(0,v.start),E=Math.min(f.count,v.start+v.count);for(let S=M,y=E;S<y;S+=3){const A=f.getX(S),D=f.getX(S+1),C=f.getX(S+2);a=Sh(this,c,t,i,d,_,x,A,D,C),a&&(a.faceIndex=Math.floor(S/3),e.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let M=0,E=g.length;M<E;M++){const S=g[M],y=c[S.materialIndex],A=Math.max(S.start,v.start),D=Math.min(p.count,Math.min(S.start+S.count,v.start+v.count));for(let C=A,F=D;C<F;C+=3){const P=C,N=C+1,b=C+2;a=Sh(this,y,t,i,d,_,x,P,N,b),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,e.push(a))}}else{const M=Math.max(0,v.start),E=Math.min(p.count,v.start+v.count);for(let S=M,y=E;S<y;S+=3){const A=S,D=S+1,C=S+2;a=Sh(this,c,t,i,d,_,x,A,D,C),a&&(a.faceIndex=Math.floor(S/3),e.push(a))}}}}function Ow(o,t,e,i,a,l,c,f){let p;if(t.side===Zi?p=i.intersectTriangle(c,l,a,!0,f):p=i.intersectTriangle(a,l,c,t.side===ks,f),p===null)return null;xh.copy(f),xh.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(xh);return d<e.near||d>e.far?null:{distance:d,point:xh.clone(),object:o}}function Sh(o,t,e,i,a,l,c,f,p,d){o.getVertexPosition(f,mh),o.getVertexPosition(p,_h),o.getVertexPosition(d,gh);const _=Ow(o,t,e,i,mh,_h,gh,eM);if(_){const x=new ot;Zr.getBarycoord(eM,mh,_h,gh,x),a&&(_.uv=Zr.getInterpolatedAttribute(a,f,p,d,x,new Ke)),l&&(_.uv1=Zr.getInterpolatedAttribute(l,f,p,d,x,new Ke)),c&&(_.normal=Zr.getInterpolatedAttribute(c,f,p,d,x,new ot),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:p,c:d,normal:new ot,materialIndex:0};Zr.getNormal(mh,_h,gh,g.normal),_.face=g,_.barycoord=x}return _}class Pw extends Ii{constructor(t=null,e=1,i=1,a,l,c,f,p,d=di,_=di,x,g){super(null,c,f,p,d,_,a,l,x,g),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const m_=new ot,Fw=new ot,Iw=new Se;class _o{constructor(t=new ot(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=m_.subVectors(i,e).cross(Fw.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const a=t.delta(m_),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return i===!0&&(c<0||c>1)?null:e.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Iw.getNormalMatrix(t),a=this.coplanarPoint(m_).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const po=new Td,Bw=new Ke(.5,.5),yh=new ot;class _1{constructor(t=new _o,e=new _o,i=new _o,a=new _o,l=new _o,c=new _o){this.planes=[t,e,i,a,l,c]}set(t,e,i,a,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(i),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=da,i=!1){const a=this.planes,l=t.elements,c=l[0],f=l[1],p=l[2],d=l[3],_=l[4],x=l[5],g=l[6],v=l[7],M=l[8],E=l[9],S=l[10],y=l[11],A=l[12],D=l[13],C=l[14],F=l[15];if(a[0].setComponents(d-c,v-_,y-M,F-A).normalize(),a[1].setComponents(d+c,v+_,y+M,F+A).normalize(),a[2].setComponents(d+f,v+x,y+E,F+D).normalize(),a[3].setComponents(d-f,v-x,y-E,F-D).normalize(),i)a[4].setComponents(p,g,S,C).normalize(),a[5].setComponents(d-p,v-g,y-S,F-C).normalize();else if(a[4].setComponents(d-p,v-g,y-S,F-C).normalize(),e===da)a[5].setComponents(d+p,v+g,y+S,F+C).normalize();else if(e===hd)a[5].setComponents(p,g,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),po.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),po.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(po)}intersectsSprite(t){po.center.set(0,0,0);const e=Bw.distanceTo(t.center);return po.radius=.7071067811865476+e,po.applyMatrix4(t.matrixWorld),this.intersectsSphere(po)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(yh.x=a.normal.x>0?t.max.x:t.min.x,yh.y=a.normal.y>0?t.max.y:t.min.y,yh.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(yh)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class g1 extends Zc{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new en(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nM=new jn,N0=new m1,Mh=new Td,Eh=new ot;class zw extends Ki{constructor(t=new zr,e=new g1){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,l=t.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mh.copy(i.boundingSphere),Mh.applyMatrix4(a),Mh.radius+=l,t.ray.intersectsSphere(Mh)===!1)return;nM.copy(a).invert(),N0.copy(t.ray).applyMatrix4(nM);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=i.index,x=i.attributes.position;if(d!==null){const g=Math.max(0,c.start),v=Math.min(d.count,c.start+c.count);for(let M=g,E=v;M<E;M++){const S=d.getX(M);Eh.fromBufferAttribute(x,S),iM(Eh,S,p,a,t,e,this)}}else{const g=Math.max(0,c.start),v=Math.min(x.count,c.start+c.count);for(let M=g,E=v;M<E;M++)Eh.fromBufferAttribute(x,M),iM(Eh,M,p,a,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function iM(o,t,e,i,a,l,c){const f=N0.distanceSqToPoint(o);if(f<e){const p=new ot;N0.closestPointToPoint(o,p),p.applyMatrix4(i);const d=a.ray.origin.distanceTo(p);if(d<a.near||d>a.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class v1 extends Ii{constructor(t=[],e=No,i,a,l,c,f,p,d,_){super(t,e,i,a,l,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class iu extends Ii{constructor(t,e,i=xa,a,l,c,f=di,p=di,d,_=$a,x=1){if(_!==$a&&_!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:x};super(g,a,l,c,f,p,_,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xg(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Hw extends iu{constructor(t,e=xa,i=No,a,l,c=di,f=di,p,d=$a){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,e,i,a,l,c,f,p,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class x1 extends Ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Kc extends zr{constructor(t=1,e=1,i=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],_=[],x=[];let g=0,v=0;M("z","y","x",-1,-1,i,e,t,c,l,0),M("z","y","x",1,-1,i,e,-t,c,l,1),M("x","z","y",1,1,t,i,e,a,c,2),M("x","z","y",1,-1,t,i,-e,a,c,3),M("x","y","z",1,-1,t,e,i,a,l,4),M("x","y","z",-1,-1,t,e,-i,a,l,5),this.setIndex(p),this.setAttribute("position",new Ir(d,3)),this.setAttribute("normal",new Ir(_,3)),this.setAttribute("uv",new Ir(x,2));function M(E,S,y,A,D,C,F,P,N,b,L){const z=C/N,G=F/b,V=C/2,nt=F/2,rt=P/2,X=N+1,B=b+1;let H=0,K=0;const ft=new ot;for(let R=0;R<B;R++){const Z=R*G-nt;for(let dt=0;dt<X;dt++){const St=dt*z-V;ft[E]=St*A,ft[S]=Z*D,ft[y]=rt,d.push(ft.x,ft.y,ft.z),ft[E]=0,ft[S]=0,ft[y]=P>0?1:-1,_.push(ft.x,ft.y,ft.z),x.push(dt/N),x.push(1-R/b),H+=1}}for(let R=0;R<b;R++)for(let Z=0;Z<N;Z++){const dt=g+Z+X*R,St=g+Z+X*(R+1),wt=g+(Z+1)+X*(R+1),Pt=g+(Z+1)+X*R;p.push(dt,St,Pt),p.push(St,wt,Pt),K+=6}f.addGroup(v,K,L),v+=K,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yg extends zr{constructor(t=[],e=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:a};const l=[],c=[];f(a),d(i),_(),this.setAttribute("position",new Ir(l,3)),this.setAttribute("normal",new Ir(l.slice(),3)),this.setAttribute("uv",new Ir(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(A){const D=new ot,C=new ot,F=new ot;for(let P=0;P<e.length;P+=3)v(e[P+0],D),v(e[P+1],C),v(e[P+2],F),p(D,C,F,A)}function p(A,D,C,F){const P=F+1,N=[];for(let b=0;b<=P;b++){N[b]=[];const L=A.clone().lerp(C,b/P),z=D.clone().lerp(C,b/P),G=P-b;for(let V=0;V<=G;V++)V===0&&b===P?N[b][V]=L:N[b][V]=L.clone().lerp(z,V/G)}for(let b=0;b<P;b++)for(let L=0;L<2*(P-b)-1;L++){const z=Math.floor(L/2);L%2===0?(g(N[b][z+1]),g(N[b+1][z]),g(N[b][z])):(g(N[b][z+1]),g(N[b+1][z+1]),g(N[b+1][z]))}}function d(A){const D=new ot;for(let C=0;C<l.length;C+=3)D.x=l[C+0],D.y=l[C+1],D.z=l[C+2],D.normalize().multiplyScalar(A),l[C+0]=D.x,l[C+1]=D.y,l[C+2]=D.z}function _(){const A=new ot;for(let D=0;D<l.length;D+=3){A.x=l[D+0],A.y=l[D+1],A.z=l[D+2];const C=S(A)/2/Math.PI+.5,F=y(A)/Math.PI+.5;c.push(C,1-F)}M(),x()}function x(){for(let A=0;A<c.length;A+=6){const D=c[A+0],C=c[A+2],F=c[A+4],P=Math.max(D,C,F),N=Math.min(D,C,F);P>.9&&N<.1&&(D<.2&&(c[A+0]+=1),C<.2&&(c[A+2]+=1),F<.2&&(c[A+4]+=1))}}function g(A){l.push(A.x,A.y,A.z)}function v(A,D){const C=A*3;D.x=t[C+0],D.y=t[C+1],D.z=t[C+2]}function M(){const A=new ot,D=new ot,C=new ot,F=new ot,P=new Ke,N=new Ke,b=new Ke;for(let L=0,z=0;L<l.length;L+=9,z+=6){A.set(l[L+0],l[L+1],l[L+2]),D.set(l[L+3],l[L+4],l[L+5]),C.set(l[L+6],l[L+7],l[L+8]),P.set(c[z+0],c[z+1]),N.set(c[z+2],c[z+3]),b.set(c[z+4],c[z+5]),F.copy(A).add(D).add(C).divideScalar(3);const G=S(F);E(P,z+0,A,G),E(N,z+2,D,G),E(b,z+4,C,G)}}function E(A,D,C,F){F<0&&A.x===1&&(c[D]=A.x-1),C.x===0&&C.z===0&&(c[D]=F/2/Math.PI+.5)}function S(A){return Math.atan2(A.z,-A.x)}function y(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yg(t.vertices,t.indices,t.radius,t.detail)}}class md extends yg{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,l,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new md(t.radius,t.detail)}}class Ad extends zr{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const l=t/2,c=e/2,f=Math.floor(i),p=Math.floor(a),d=f+1,_=p+1,x=t/f,g=e/p,v=[],M=[],E=[],S=[];for(let y=0;y<_;y++){const A=y*g-c;for(let D=0;D<d;D++){const C=D*x-l;M.push(C,-A,0),E.push(0,0,1),S.push(D/f),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let A=0;A<f;A++){const D=A+d*y,C=A+d*(y+1),F=A+1+d*(y+1),P=A+1+d*y;v.push(D,C,P),v.push(C,F,P)}this.setIndex(v),this.setAttribute("position",new Ir(M,3)),this.setAttribute("normal",new Ir(E,3)),this.setAttribute("uv",new Ir(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ad(t.width,t.height,t.widthSegments,t.heightSegments)}}function ru(o){const t={};for(const e in o){t[e]={};for(const i in o[e]){const a=o[e][i];if(rM(a))a.isRenderTargetTexture?(_e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone();else if(Array.isArray(a))if(rM(a[0])){const l=[];for(let c=0,f=a.length;c<f;c++)l[c]=a[c].clone();t[e][i]=l}else t[e][i]=a.slice();else t[e][i]=a}}return t}function Ni(o){const t={};for(let e=0;e<o.length;e++){const i=ru(o[e]);for(const a in i)t[a]=i[a]}return t}function rM(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function Gw(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function S1(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:He.workingColorSpace}const Vw={clone:ru,merge:Ni};var kw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends Zc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kw,this.fragmentShader=Xw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ru(t.uniforms),this.uniformsGroups=Gw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?e.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[a]={type:"m4",value:c.toArray()}:e.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ww extends Sa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yw extends Zc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qw extends Zc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bh=new ot,Th=new su,aa=new ot;class y1 extends Ki{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jn,this.projectionMatrix=new jn,this.projectionMatrixInverse=new jn,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(bh,Th,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bh,Th,aa.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(bh,Th,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bh,Th,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ws=new ot,aM=new Ke,sM=new Ke;class Ur extends y1{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=U0*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ym*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return U0*2*Math.atan(Math.tan(Ym*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ws.x,ws.y).multiplyScalar(-t/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ws.x,ws.y).multiplyScalar(-t/ws.z)}getViewSize(t,e){return this.getViewBounds(t,aM,sM),e.subVectors(sM,aM)}setViewOffset(t,e,i,a,l,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ym*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*a/p,e-=c.offsetY*i/d,a*=c.width/p,i*=c.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class M1 extends y1{constructor(t=-1,e=1,i=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-t,c=i+t,f=a+e,p=a-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Dl=-90,Ul=1;class jw extends Ki{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ur(Dl,Ul,t,e);a.layers=this.layers,this.add(a);const l=new Ur(Dl,Ul,t,e);l.layers=this.layers,this.add(l);const c=new Ur(Dl,Ul,t,e);c.layers=this.layers,this.add(c);const f=new Ur(Dl,Ul,t,e);f.layers=this.layers,this.add(f);const p=new Ur(Dl,Ul,t,e);p.layers=this.layers,this.add(p);const d=new Ur(Dl,Ul,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,l,c,f,p]=e;for(const d of e)this.remove(d);if(t===da)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===hd)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,1,a),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,2,a),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,3,a),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(i,4,a),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,a),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,_),t.setRenderTarget(x,g,v),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Zw extends Ur{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Og=class Og{constructor(t,e,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,a){const l=this.elements;return l[0]=t,l[2]=e,l[1]=i,l[3]=a,this}};Og.prototype.isMatrix2=!0;let oM=Og;function lM(o,t,e,i){const a=Kw(i);switch(e){case s1:return o*t;case l1:return o*t/a.components*a.byteLength;case pg:return o*t/a.components*a.byteLength;case Lo:return o*t*2/a.components*a.byteLength;case mg:return o*t*2/a.components*a.byteLength;case o1:return o*t*3/a.components*a.byteLength;case Kr:return o*t*4/a.components*a.byteLength;case _g:return o*t*4/a.components*a.byteLength;case Xh:case Wh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Yh:case qh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case e0:case i0:return Math.max(o,16)*Math.max(t,8)/4;case t0:case n0:return Math.max(o,8)*Math.max(t,8)/2;case r0:case a0:case o0:case l0:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case s0:case ld:case u0:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case c0:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case f0:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case h0:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case d0:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case p0:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case m0:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case _0:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case g0:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case v0:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case x0:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case S0:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case y0:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case M0:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case E0:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case b0:case T0:case A0:return Math.ceil(o/4)*Math.ceil(t/4)*16;case R0:case w0:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ud:case C0:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kw(o){switch(o){case Or:case n1:return{byteLength:1,components:1};case Vc:case i1:case Ja:return{byteLength:2,components:1};case hg:case dg:return{byteLength:2,components:4};case xa:case fg:case ha:return{byteLength:4,components:1};case r1:case a1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cg}}));typeof window<"u"&&(window.__THREE__?_e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cg);function E1(){let o=null,t=!1,e=null,i=null;function a(l,c){e(l,c),i=o.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&o!==null&&(i=o.requestAnimationFrame(a),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){o=l}}}function Qw(o){const t=new WeakMap;function e(f,p){const d=f.array,_=f.usage,x=d.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,d,_),f.onUploadCallback();let v;if(d instanceof Float32Array)v=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)v=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=o.SHORT;else if(d instanceof Uint32Array)v=o.UNSIGNED_INT;else if(d instanceof Int32Array)v=o.INT;else if(d instanceof Int8Array)v=o.BYTE;else if(d instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:x}}function i(f,p,d){const _=p.array,x=p.updateRanges;if(o.bindBuffer(d,f),x.length===0)o.bufferSubData(d,0,_);else{x.sort((v,M)=>v.start-M.start);let g=0;for(let v=1;v<x.length;v++){const M=x[g],E=x[v];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,x[g]=E)}x.length=g+1;for(let v=0,M=x.length;v<M;v++){const E=x[v];o.bufferSubData(d,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,e(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,f,p),d.version=f.version}}return{get:a,remove:l,update:c}}var Jw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$w=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,oC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_C=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wC="gl_FragColor = linearToOutputTexel( gl_FragColor );",CC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,UC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,XC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$C=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,e2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,l2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,m2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,g2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,M2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,w2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,P2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,F2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,H2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Q2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,l3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,g3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Re={alphahash_fragment:Jw,alphahash_pars_fragment:$w,alphamap_fragment:tC,alphamap_pars_fragment:eC,alphatest_fragment:nC,alphatest_pars_fragment:iC,aomap_fragment:rC,aomap_pars_fragment:aC,batching_pars_vertex:sC,batching_vertex:oC,begin_vertex:lC,beginnormal_vertex:uC,bsdfs:cC,iridescence_fragment:fC,bumpmap_pars_fragment:hC,clipping_planes_fragment:dC,clipping_planes_pars_fragment:pC,clipping_planes_pars_vertex:mC,clipping_planes_vertex:_C,color_fragment:gC,color_pars_fragment:vC,color_pars_vertex:xC,color_vertex:SC,common:yC,cube_uv_reflection_fragment:MC,defaultnormal_vertex:EC,displacementmap_pars_vertex:bC,displacementmap_vertex:TC,emissivemap_fragment:AC,emissivemap_pars_fragment:RC,colorspace_fragment:wC,colorspace_pars_fragment:CC,envmap_fragment:DC,envmap_common_pars_fragment:UC,envmap_pars_fragment:NC,envmap_pars_vertex:LC,envmap_physical_pars_fragment:XC,envmap_vertex:OC,fog_vertex:PC,fog_pars_vertex:FC,fog_fragment:IC,fog_pars_fragment:BC,gradientmap_pars_fragment:zC,lightmap_pars_fragment:HC,lights_lambert_fragment:GC,lights_lambert_pars_fragment:VC,lights_pars_begin:kC,lights_toon_fragment:WC,lights_toon_pars_fragment:YC,lights_phong_fragment:qC,lights_phong_pars_fragment:jC,lights_physical_fragment:ZC,lights_physical_pars_fragment:KC,lights_fragment_begin:QC,lights_fragment_maps:JC,lights_fragment_end:$C,lightprobes_pars_fragment:t2,logdepthbuf_fragment:e2,logdepthbuf_pars_fragment:n2,logdepthbuf_pars_vertex:i2,logdepthbuf_vertex:r2,map_fragment:a2,map_pars_fragment:s2,map_particle_fragment:o2,map_particle_pars_fragment:l2,metalnessmap_fragment:u2,metalnessmap_pars_fragment:c2,morphinstance_vertex:f2,morphcolor_vertex:h2,morphnormal_vertex:d2,morphtarget_pars_vertex:p2,morphtarget_vertex:m2,normal_fragment_begin:_2,normal_fragment_maps:g2,normal_pars_fragment:v2,normal_pars_vertex:x2,normal_vertex:S2,normalmap_pars_fragment:y2,clearcoat_normal_fragment_begin:M2,clearcoat_normal_fragment_maps:E2,clearcoat_pars_fragment:b2,iridescence_pars_fragment:T2,opaque_fragment:A2,packing:R2,premultiplied_alpha_fragment:w2,project_vertex:C2,dithering_fragment:D2,dithering_pars_fragment:U2,roughnessmap_fragment:N2,roughnessmap_pars_fragment:L2,shadowmap_pars_fragment:O2,shadowmap_pars_vertex:P2,shadowmap_vertex:F2,shadowmask_pars_fragment:I2,skinbase_vertex:B2,skinning_pars_vertex:z2,skinning_vertex:H2,skinnormal_vertex:G2,specularmap_fragment:V2,specularmap_pars_fragment:k2,tonemapping_fragment:X2,tonemapping_pars_fragment:W2,transmission_fragment:Y2,transmission_pars_fragment:q2,uv_pars_fragment:j2,uv_pars_vertex:Z2,uv_vertex:K2,worldpos_vertex:Q2,background_vert:J2,background_frag:$2,backgroundCube_vert:t3,backgroundCube_frag:e3,cube_vert:n3,cube_frag:i3,depth_vert:r3,depth_frag:a3,distance_vert:s3,distance_frag:o3,equirect_vert:l3,equirect_frag:u3,linedashed_vert:c3,linedashed_frag:f3,meshbasic_vert:h3,meshbasic_frag:d3,meshlambert_vert:p3,meshlambert_frag:m3,meshmatcap_vert:_3,meshmatcap_frag:g3,meshnormal_vert:v3,meshnormal_frag:x3,meshphong_vert:S3,meshphong_frag:y3,meshphysical_vert:M3,meshphysical_frag:E3,meshtoon_vert:b3,meshtoon_frag:T3,points_vert:A3,points_frag:R3,shadow_vert:w3,shadow_frag:C3,sprite_vert:D3,sprite_frag:U3},Wt={common:{diffuse:{value:new en(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new en(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ot},probesMax:{value:new ot},probesResolution:{value:new ot}},points:{diffuse:{value:new en(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new en(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},ua={basic:{uniforms:Ni([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Ni([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new en(0)},envMapIntensity:{value:1}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Ni([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new en(0)},specular:{value:new en(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Ni([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new en(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Ni([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new en(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Ni([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Ni([Wt.points,Wt.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Ni([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Ni([Wt.common,Wt.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Ni([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Ni([Wt.sprite,Wt.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distance:{uniforms:Ni([Wt.common,Wt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distance_vert,fragmentShader:Re.distance_frag},shadow:{uniforms:Ni([Wt.lights,Wt.fog,{color:{value:new en(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};ua.physical={uniforms:Ni([ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new en(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new en(0)},specularColor:{value:new en(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const Ah={r:0,b:0,g:0},N3=new jn,b1=new Se;b1.set(-1,0,0,0,1,0,0,0,1);function L3(o,t,e,i,a,l){const c=new en(0);let f=a===!0?0:1,p,d,_=null,x=0,g=null;function v(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){const C=A.backgroundBlurriness>0;D=t.get(D,C)}return D}function M(A){let D=!1;const C=v(A);C===null?S(c,f):C&&C.isColor&&(S(C,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?e.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,l),(o.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(A,D){const C=v(D);C&&(C.isCubeTexture||C.mapping===bd)?(d===void 0&&(d=new Jr(new Kc(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:ru(ua.backgroundCube.uniforms),vertexShader:ua.backgroundCube.vertexShader,fragmentShader:ua.backgroundCube.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(N3.makeRotationFromEuler(D.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(b1),d.material.toneMapped=He.getTransfer(C.colorSpace)!==sn,(_!==C||x!==C.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,_=C,x=C.version,g=o.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Jr(new Ad(2,2),new Sa({name:"BackgroundMaterial",uniforms:ru(ua.background.uniforms),vertexShader:ua.background.vertexShader,fragmentShader:ua.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=He.getTransfer(C.colorSpace)!==sn,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||x!==C.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,_=C,x=C.version,g=o.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null))}function S(A,D){A.getRGB(Ah,S1(o)),e.buffers.color.setClear(Ah.r,Ah.g,Ah.b,D,l)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,D=1){c.set(A),f=D,S(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,S(c,f)},render:M,addToRenderList:E,dispose:y}}function O3(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},a=g(null);let l=a,c=!1;function f(G,V,nt,rt,X){let B=!1;const H=x(G,rt,nt,V);l!==H&&(l=H,d(l.object)),B=v(G,rt,nt,X),B&&M(G,rt,nt,X),X!==null&&t.update(X,o.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,C(G,V,nt,rt),X!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function p(){return o.createVertexArray()}function d(G){return o.bindVertexArray(G)}function _(G){return o.deleteVertexArray(G)}function x(G,V,nt,rt){const X=rt.wireframe===!0;let B=i[V.id];B===void 0&&(B={},i[V.id]=B);const H=G.isInstancedMesh===!0?G.id:0;let K=B[H];K===void 0&&(K={},B[H]=K);let ft=K[nt.id];ft===void 0&&(ft={},K[nt.id]=ft);let R=ft[X];return R===void 0&&(R=g(p()),ft[X]=R),R}function g(G){const V=[],nt=[],rt=[];for(let X=0;X<e;X++)V[X]=0,nt[X]=0,rt[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:nt,attributeDivisors:rt,object:G,attributes:{},index:null}}function v(G,V,nt,rt){const X=l.attributes,B=V.attributes;let H=0;const K=nt.getAttributes();for(const ft in K)if(K[ft].location>=0){const Z=X[ft];let dt=B[ft];if(dt===void 0&&(ft==="instanceMatrix"&&G.instanceMatrix&&(dt=G.instanceMatrix),ft==="instanceColor"&&G.instanceColor&&(dt=G.instanceColor)),Z===void 0||Z.attribute!==dt||dt&&Z.data!==dt.data)return!0;H++}return l.attributesNum!==H||l.index!==rt}function M(G,V,nt,rt){const X={},B=V.attributes;let H=0;const K=nt.getAttributes();for(const ft in K)if(K[ft].location>=0){let Z=B[ft];Z===void 0&&(ft==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),ft==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor));const dt={};dt.attribute=Z,Z&&Z.data&&(dt.data=Z.data),X[ft]=dt,H++}l.attributes=X,l.attributesNum=H,l.index=rt}function E(){const G=l.newAttributes;for(let V=0,nt=G.length;V<nt;V++)G[V]=0}function S(G){y(G,0)}function y(G,V){const nt=l.newAttributes,rt=l.enabledAttributes,X=l.attributeDivisors;nt[G]=1,rt[G]===0&&(o.enableVertexAttribArray(G),rt[G]=1),X[G]!==V&&(o.vertexAttribDivisor(G,V),X[G]=V)}function A(){const G=l.newAttributes,V=l.enabledAttributes;for(let nt=0,rt=V.length;nt<rt;nt++)V[nt]!==G[nt]&&(o.disableVertexAttribArray(nt),V[nt]=0)}function D(G,V,nt,rt,X,B,H){H===!0?o.vertexAttribIPointer(G,V,nt,X,B):o.vertexAttribPointer(G,V,nt,rt,X,B)}function C(G,V,nt,rt){E();const X=rt.attributes,B=nt.getAttributes(),H=V.defaultAttributeValues;for(const K in B){const ft=B[K];if(ft.location>=0){let R=X[K];if(R===void 0&&(K==="instanceMatrix"&&G.instanceMatrix&&(R=G.instanceMatrix),K==="instanceColor"&&G.instanceColor&&(R=G.instanceColor)),R!==void 0){const Z=R.normalized,dt=R.itemSize,St=t.get(R);if(St===void 0)continue;const wt=St.buffer,Pt=St.type,$=St.bytesPerElement,Tt=Pt===o.INT||Pt===o.UNSIGNED_INT||R.gpuType===fg;if(R.isInterleavedBufferAttribute){const gt=R.data,Xt=gt.stride,ae=R.offset;if(gt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<ft.locationSize;Qt++)y(ft.location+Qt,gt.meshPerAttribute);G.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Qt=0;Qt<ft.locationSize;Qt++)S(ft.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,wt);for(let Qt=0;Qt<ft.locationSize;Qt++)D(ft.location+Qt,dt/ft.locationSize,Pt,Z,Xt*$,(ae+dt/ft.locationSize*Qt)*$,Tt)}else{if(R.isInstancedBufferAttribute){for(let gt=0;gt<ft.locationSize;gt++)y(ft.location+gt,R.meshPerAttribute);G.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let gt=0;gt<ft.locationSize;gt++)S(ft.location+gt);o.bindBuffer(o.ARRAY_BUFFER,wt);for(let gt=0;gt<ft.locationSize;gt++)D(ft.location+gt,dt/ft.locationSize,Pt,Z,dt*$,dt/ft.locationSize*gt*$,Tt)}}else if(H!==void 0){const Z=H[K];if(Z!==void 0)switch(Z.length){case 2:o.vertexAttrib2fv(ft.location,Z);break;case 3:o.vertexAttrib3fv(ft.location,Z);break;case 4:o.vertexAttrib4fv(ft.location,Z);break;default:o.vertexAttrib1fv(ft.location,Z)}}}}A()}function F(){L();for(const G in i){const V=i[G];for(const nt in V){const rt=V[nt];for(const X in rt){const B=rt[X];for(const H in B)_(B[H].object),delete B[H];delete rt[X]}}delete i[G]}}function P(G){if(i[G.id]===void 0)return;const V=i[G.id];for(const nt in V){const rt=V[nt];for(const X in rt){const B=rt[X];for(const H in B)_(B[H].object),delete B[H];delete rt[X]}}delete i[G.id]}function N(G){for(const V in i){const nt=i[V];for(const rt in nt){const X=nt[rt];if(X[G.id]===void 0)continue;const B=X[G.id];for(const H in B)_(B[H].object),delete B[H];delete X[G.id]}}}function b(G){for(const V in i){const nt=i[V],rt=G.isInstancedMesh===!0?G.id:0,X=nt[rt];if(X!==void 0){for(const B in X){const H=X[B];for(const K in H)_(H[K].object),delete H[K];delete X[B]}delete nt[rt],Object.keys(nt).length===0&&delete i[V]}}}function L(){z(),c=!0,l!==a&&(l=a,d(l.object))}function z(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:L,resetDefaultState:z,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:S,disableUnusedAttributes:A}}function P3(o,t,e){let i;function a(p){i=p}function l(p,d){o.drawArrays(i,p,d),e.update(d,i,1)}function c(p,d,_){_!==0&&(o.drawArraysInstanced(i,p,d,_),e.update(d,i,_))}function f(p,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,p,0,d,0,_);let g=0;for(let v=0;v<_;v++)g+=d[v];e.update(g,i,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function F3(o,t,e,i){let a;function l(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");a=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(N){return!(N!==Kr&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const b=N===Ja&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Or&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ha&&!b)}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const _=p(d);_!==d&&(_e("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const x=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&_e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:C,maxSamples:F,samples:P}}function I3(o){const t=this;let e=null,i=0,a=!1,l=!1;const c=new _o,f=new Se,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const v=x.length!==0||g||i!==0||a;return a=g,i=x.length,v},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){e=_(x,g,0)},this.setState=function(x,g,v){const M=x.clippingPlanes,E=x.clipIntersection,S=x.clipShadows,y=o.get(x);if(!a||M===null||M.length===0||l&&!S)l?_(null):d();else{const A=l?0:i,D=A*4;let C=y.clippingState||null;p.value=C,C=_(M,g,D,v);for(let F=0;F!==D;++F)C[F]=e[F];y.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function d(){p.value!==e&&(p.value=e,p.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function _(x,g,v,M){const E=x!==null?x.length:0;let S=null;if(E!==0){if(S=p.value,M!==!0||S===null){const y=v+E*4,A=g.matrixWorldInverse;f.getNormalMatrix(A),(S===null||S.length<y)&&(S=new Float32Array(y));for(let D=0,C=v;D!==E;++D,C+=4)c.copy(x[D]).applyMatrix4(A,f),c.normal.toArray(S,C),S[C+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,S}}const Os=4,uM=[.125,.215,.35,.446,.526,.582],So=20,B3=256,lc=new M1,cM=new en;let __=null,g_=0,v_=0,x_=!1;const z3=new ot;class fM{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,a=100,l={}){const{size:c=256,position:f=z3}=l;__=this._renderer.getRenderTarget(),g_=this._renderer.getActiveCubeFace(),v_=this._renderer.getActiveMipmapLevel(),x_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,i,a,p,f),e>0&&this._blur(p,0,0,e),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(__,g_,v_),this._renderer.xr.enabled=x_,t.scissorTest=!1,Nl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===No||t.mapping===nu?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),__=this._renderer.getRenderTarget(),g_=this._renderer.getActiveCubeFace(),v_=this._renderer.getActiveMipmapLevel(),x_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Ja,format:Kr,colorSpace:cd,depthBuffer:!1},a=hM(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hM(t,e,i);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=H3(l)),this._blurMaterial=V3(l,t,e),this._ggxMaterial=G3(l,t,e)}return a}_compileMaterial(t){const e=new Jr(new zr,t);this._renderer.compile(e,lc)}_sceneToCubeUV(t,e,i,a,l){const p=new Ur(90,1,e,i),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,v=x.toneMapping;x.getClearColor(cM),x.toneMapping=ma,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(a),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jr(new Kc,new pd({name:"PMREM.Background",side:Zi,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let y=!1;const A=t.background;A?A.isColor&&(S.color.copy(A),t.background=null,y=!0):(S.color.copy(cM),y=!0);for(let D=0;D<6;D++){const C=D%3;C===0?(p.up.set(0,d[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[D],l.y,l.z)):C===1?(p.up.set(0,0,d[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[D],l.z)):(p.up.set(0,d[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[D]));const F=this._cubeSize;Nl(a,C*F,D>2?F:0,F,F),x.setRenderTarget(a),y&&x.render(E,p),x.render(t,p)}x.toneMapping=v,x.autoClear=g,t.background=A}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===No||t.mapping===nu;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=pM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dM());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Nl(e,0,0,3*p,2*p),i.setRenderTarget(e),i.render(c,lc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(t,l-1,l);e.autoClear=i}_applyGGXFilter(t,e,i){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[i];f.material=c;const p=c.uniforms,d=i/(this._lodMeshes.length-1),_=e/(this._lodMeshes.length-1),x=Math.sqrt(d*d-_*_),g=0+d*1.25,v=x*g,{_lodMax:M}=this,E=this._sizeLods[i],S=3*E*(i>M-Os?i-M+Os:0),y=4*(this._cubeSize-E);p.envMap.value=t.texture,p.roughness.value=v,p.mipInt.value=M-e,Nl(l,S,y,3*E,2*E),a.setRenderTarget(l),a.render(f,lc),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=M-i,Nl(t,S,y,3*E,2*E),a.setRenderTarget(t),a.render(f,lc)}_blur(t,e,i,a,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,a,"latitudinal",l),this._halfBlur(c,t,i,i,a,"longitudinal",l)}_halfBlur(t,e,i,a,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[a];x.material=d;const g=d.uniforms,v=this._sizeLods[i]-1,M=isFinite(l)?Math.PI/(2*v):2*Math.PI/(2*So-1),E=l/M,S=isFinite(l)?1+Math.floor(_*E):So;S>So&&_e(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${So}`);const y=[];let A=0;for(let N=0;N<So;++N){const b=N/E,L=Math.exp(-b*b/2);y.push(L),N===0?A+=L:N<S&&(A+=2*L)}for(let N=0;N<y.length;N++)y[N]=y[N]/A;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:D}=this;g.dTheta.value=M,g.mipInt.value=D-i;const C=this._sizeLods[a],F=3*C*(a>D-Os?a-D+Os:0),P=4*(this._cubeSize-C);Nl(e,F,P,3*C,2*C),p.setRenderTarget(e),p.render(x,lc)}}function H3(o){const t=[],e=[],i=[];let a=o;const l=o-Os+1+uM.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let p=1/f;c>o-Os?p=uM[c-o+Os-1]:c===0&&(p=0),e.push(p);const d=1/(f-2),_=-d,x=1+d,g=[_,_,x,_,x,x,_,_,x,x,_,x],v=6,M=6,E=3,S=2,y=1,A=new Float32Array(E*M*v),D=new Float32Array(S*M*v),C=new Float32Array(y*M*v);for(let P=0;P<v;P++){const N=P%3*2/3-1,b=P>2?0:-1,L=[N,b,0,N+2/3,b,0,N+2/3,b+1,0,N,b,0,N+2/3,b+1,0,N,b+1,0];A.set(L,E*M*P),D.set(g,S*M*P);const z=[P,P,P,P,P,P];C.set(z,y*M*P)}const F=new zr;F.setAttribute("position",new Qr(A,E)),F.setAttribute("uv",new Qr(D,S)),F.setAttribute("faceIndex",new Qr(C,y)),i.push(new Jr(F,null)),a>Os&&a--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function hM(o,t,e){const i=new _a(o,t,e);return i.texture.mapping=bd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nl(o,t,e,i,a){o.viewport.set(t,e,i,a),o.scissor.set(t,e,i,a)}function G3(o,t,e){return new Sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function V3(o,t,e){const i=new Float32Array(So),a=new ot(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:So,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function dM(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function pM(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function Rd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class T1 extends _a{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new v1(a),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Kc(5,5,5),l=new Sa({name:"CubemapFromEquirect",uniforms:ru(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zi,blending:qa});l.uniforms.tEquirect.value=e;const c=new Jr(a,l),f=e.minFilter;return e.minFilter===Mo&&(e.minFilter=Ti),new jw(1,10,this).update(t,c),e.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,a=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,a);t.setRenderTarget(l)}}function k3(o){let t=new WeakMap,e=new WeakMap,i=null;function a(g,v=!1){return g==null?null:v?c(g):l(g)}function l(g){if(g&&g.isTexture){const v=g.mapping;if(v===km||v===Xm)if(t.has(g)){const M=t.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const E=new T1(M.height);return E.fromEquirectangularTexture(o,g),t.set(g,E),g.addEventListener("dispose",d),f(E.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const v=g.mapping,M=v===km||v===Xm,E=v===No||v===nu;if(M||E){let S=e.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return i===null&&(i=new fM(o)),S=M?i.fromEquirectangular(g,S):i.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,e.set(g,S),S.texture;if(S!==void 0)return S.texture;{const A=g.image;return M&&A&&A.height>0||E&&A&&p(A)?(i===null&&(i=new fM(o)),S=M?i.fromEquirectangular(g):i.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,e.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function f(g,v){return v===km?g.mapping=No:v===Xm&&(g.mapping=nu),g}function p(g){let v=0;const M=6;for(let E=0;E<M;E++)g[E]!==void 0&&v++;return v===M}function d(g){const v=g.target;v.removeEventListener("dispose",d);const M=t.get(v);M!==void 0&&(t.delete(v),M.dispose())}function _(g){const v=g.target;v.removeEventListener("dispose",_);const M=e.get(v);M!==void 0&&(e.delete(v),M.dispose())}function x(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:x}}function X3(o){const t={};function e(i){if(t[i]!==void 0)return t[i];const a=o.getExtension(i);return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&D0("WebGLRenderer: "+i+" extension not supported."),a}}}function W3(o,t,e,i){const a={},l=new WeakMap;function c(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete a[g.id];const v=l.get(g);v&&(t.remove(v),l.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function f(x,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,e.memory.geometries++),g}function p(x){const g=x.attributes;for(const v in g)t.update(g[v],o.ARRAY_BUFFER)}function d(x){const g=[],v=x.index,M=x.attributes.position;let E=0;if(M===void 0)return;if(v!==null){const A=v.array;E=v.version;for(let D=0,C=A.length;D<C;D+=3){const F=A[D+0],P=A[D+1],N=A[D+2];g.push(F,P,P,N,N,F)}}else{const A=M.array;E=M.version;for(let D=0,C=A.length/3-1;D<C;D+=3){const F=D+0,P=D+1,N=D+2;g.push(F,P,P,N,N,F)}}const S=new(M.count>=65535?p1:d1)(g,1);S.version=E;const y=l.get(x);y&&t.remove(y),l.set(x,S)}function _(x){const g=l.get(x);if(g){const v=x.index;v!==null&&g.version<v.version&&d(x)}else d(x);return l.get(x)}return{get:f,update:p,getWireframeAttribute:_}}function Y3(o,t,e){let i;function a(x){i=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function p(x,g){o.drawElements(i,g,l,x*c),e.update(g,i,1)}function d(x,g,v){v!==0&&(o.drawElementsInstanced(i,g,l,x*c,v),e.update(g,i,v))}function _(x,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,l,x,0,v);let E=0;for(let S=0;S<v;S++)E+=g[S];e.update(E,i,1)}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_}function q3(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(e.calls++,c){case o.TRIANGLES:e.triangles+=f*(l/3);break;case o.LINES:e.lines+=f*(l/2);break;case o.LINE_STRIP:e.lines+=f*(l-1);break;case o.LINE_LOOP:e.lines+=f*l;break;case o.POINTS:e.points+=f*l;break;default:Ye("WebGLInfo: Unknown draw mode:",c);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function j3(o,t,e){const i=new WeakMap,a=new Hn;function l(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let g=i.get(f);if(g===void 0||g.count!==x){let z=function(){b.dispose(),i.delete(f),f.removeEventListener("dispose",z)};var v=z;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),E===!0&&(C=2),S===!0&&(C=3);let F=f.attributes.position.count*C,P=1;F>t.maxTextureSize&&(P=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const N=new Float32Array(F*P*4*x),b=new c1(N,F,P,x);b.type=ha,b.needsUpdate=!0;const L=C*4;for(let G=0;G<x;G++){const V=y[G],nt=A[G],rt=D[G],X=F*P*4*G;for(let B=0;B<V.count;B++){const H=B*L;M===!0&&(a.fromBufferAttribute(V,B),N[X+H+0]=a.x,N[X+H+1]=a.y,N[X+H+2]=a.z,N[X+H+3]=0),E===!0&&(a.fromBufferAttribute(nt,B),N[X+H+4]=a.x,N[X+H+5]=a.y,N[X+H+6]=a.z,N[X+H+7]=0),S===!0&&(a.fromBufferAttribute(rt,B),N[X+H+8]=a.x,N[X+H+9]=a.y,N[X+H+10]=a.z,N[X+H+11]=rt.itemSize===4?a.w:1)}}g={count:x,texture:b,size:new Ke(F,P)},i.set(f,g),f.addEventListener("dispose",z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,e);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const E=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,e),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:l}}function Z3(o,t,e,i,a){let l=new WeakMap;function c(d){const _=a.render.frame,x=d.geometry,g=t.get(d,x);if(l.get(g)!==_&&(t.update(g),l.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),l.get(d)!==_&&(e.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,o.ARRAY_BUFFER),l.set(d,_))),d.isSkinnedMesh){const v=d.skeleton;l.get(v)!==_&&(v.update(),l.set(v,_))}return g}function f(){l=new WeakMap}function p(d){const _=d.target;_.removeEventListener("dispose",p),i.releaseStatesOfObject(_),e.remove(_.instanceMatrix),_.instanceColor!==null&&e.remove(_.instanceColor)}return{update:c,dispose:f}}const K3={[jE]:"LINEAR_TONE_MAPPING",[ZE]:"REINHARD_TONE_MAPPING",[KE]:"CINEON_TONE_MAPPING",[QE]:"ACES_FILMIC_TONE_MAPPING",[$E]:"AGX_TONE_MAPPING",[t1]:"NEUTRAL_TONE_MAPPING",[JE]:"CUSTOM_TONE_MAPPING"};function Q3(o,t,e,i,a){const l=new _a(t,e,{type:o,depthBuffer:i,stencilBuffer:a,depthTexture:i?new iu(t,e):void 0}),c=new _a(t,e,{type:Ja,depthBuffer:!1,stencilBuffer:!1}),f=new zr;f.setAttribute("position",new Ir([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ir([0,2,0,0,2,0],2));const p=new Ww({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Jr(f,p),_=new M1(-1,1,1,-1,0,1);let x=null,g=null,v=!1,M,E=null,S=[],y=!1;this.setSize=function(A,D){l.setSize(A,D),c.setSize(A,D);for(let C=0;C<S.length;C++){const F=S[C];F.setSize&&F.setSize(A,D)}},this.setEffects=function(A){S=A,y=S.length>0&&S[0].isRenderPass===!0;const D=l.width,C=l.height;for(let F=0;F<S.length;F++){const P=S[F];P.setSize&&P.setSize(D,C)}},this.begin=function(A,D){if(v||A.toneMapping===ma&&S.length===0)return!1;if(E=D,D!==null){const C=D.width,F=D.height;(l.width!==C||l.height!==F)&&this.setSize(C,F)}return y===!1&&A.setRenderTarget(l),M=A.toneMapping,A.toneMapping=ma,!0},this.hasRenderPass=function(){return y},this.end=function(A,D){A.toneMapping=M,v=!0;let C=l,F=c;for(let P=0;P<S.length;P++){const N=S[P];if(N.enabled!==!1&&(N.render(A,F,C,D),N.needsSwap!==!1)){const b=C;C=F,F=b}}if(x!==A.outputColorSpace||g!==A.toneMapping){x=A.outputColorSpace,g=A.toneMapping,p.defines={},He.getTransfer(x)===sn&&(p.defines.SRGB_TRANSFER="");const P=K3[g];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,A.setRenderTarget(E),A.render(d,_),E=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),p.dispose()}}const A1=new Ii,L0=new iu(1,1),R1=new c1,w1=new yw,C1=new v1,mM=[],_M=[],gM=new Float32Array(16),vM=new Float32Array(9),xM=new Float32Array(4);function ou(o,t,e){const i=o[0];if(i<=0||i>0)return o;const a=t*e;let l=mM[a];if(l===void 0&&(l=new Float32Array(a),mM[a]=l),t!==0){i.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=e,o[c].toArray(l,f)}return l}function $n(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function ti(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function wd(o,t){let e=_M[t];e===void 0&&(e=new Int32Array(t),_M[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function J3(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function $3(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($n(e,t))return;o.uniform2fv(this.addr,t),ti(e,t)}}function tD(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($n(e,t))return;o.uniform3fv(this.addr,t),ti(e,t)}}function eD(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($n(e,t))return;o.uniform4fv(this.addr,t),ti(e,t)}}function nD(o,t){const e=this.cache,i=t.elements;if(i===void 0){if($n(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ti(e,t)}else{if($n(e,i))return;xM.set(i),o.uniformMatrix2fv(this.addr,!1,xM),ti(e,i)}}function iD(o,t){const e=this.cache,i=t.elements;if(i===void 0){if($n(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ti(e,t)}else{if($n(e,i))return;vM.set(i),o.uniformMatrix3fv(this.addr,!1,vM),ti(e,i)}}function rD(o,t){const e=this.cache,i=t.elements;if(i===void 0){if($n(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ti(e,t)}else{if($n(e,i))return;gM.set(i),o.uniformMatrix4fv(this.addr,!1,gM),ti(e,i)}}function aD(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function sD(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($n(e,t))return;o.uniform2iv(this.addr,t),ti(e,t)}}function oD(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($n(e,t))return;o.uniform3iv(this.addr,t),ti(e,t)}}function lD(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($n(e,t))return;o.uniform4iv(this.addr,t),ti(e,t)}}function uD(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function cD(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($n(e,t))return;o.uniform2uiv(this.addr,t),ti(e,t)}}function fD(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($n(e,t))return;o.uniform3uiv(this.addr,t),ti(e,t)}}function hD(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($n(e,t))return;o.uniform4uiv(this.addr,t),ti(e,t)}}function dD(o,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(o.uniform1i(this.addr,a),i[0]=a);let l;this.type===o.SAMPLER_2D_SHADOW?(L0.compareFunction=e.isReversedDepthBuffer()?vg:gg,l=L0):l=A1,e.setTexture2D(t||l,a)}function pD(o,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(o.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||w1,a)}function mD(o,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(o.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||C1,a)}function _D(o,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(o.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||R1,a)}function gD(o){switch(o){case 5126:return J3;case 35664:return $3;case 35665:return tD;case 35666:return eD;case 35674:return nD;case 35675:return iD;case 35676:return rD;case 5124:case 35670:return aD;case 35667:case 35671:return sD;case 35668:case 35672:return oD;case 35669:case 35673:return lD;case 5125:return uD;case 36294:return cD;case 36295:return fD;case 36296:return hD;case 35678:case 36198:case 36298:case 36306:case 35682:return dD;case 35679:case 36299:case 36307:return pD;case 35680:case 36300:case 36308:case 36293:return mD;case 36289:case 36303:case 36311:case 36292:return _D}}function vD(o,t){o.uniform1fv(this.addr,t)}function xD(o,t){const e=ou(t,this.size,2);o.uniform2fv(this.addr,e)}function SD(o,t){const e=ou(t,this.size,3);o.uniform3fv(this.addr,e)}function yD(o,t){const e=ou(t,this.size,4);o.uniform4fv(this.addr,e)}function MD(o,t){const e=ou(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function ED(o,t){const e=ou(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function bD(o,t){const e=ou(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function TD(o,t){o.uniform1iv(this.addr,t)}function AD(o,t){o.uniform2iv(this.addr,t)}function RD(o,t){o.uniform3iv(this.addr,t)}function wD(o,t){o.uniform4iv(this.addr,t)}function CD(o,t){o.uniform1uiv(this.addr,t)}function DD(o,t){o.uniform2uiv(this.addr,t)}function UD(o,t){o.uniform3uiv(this.addr,t)}function ND(o,t){o.uniform4uiv(this.addr,t)}function LD(o,t,e){const i=this.cache,a=t.length,l=wd(e,a);$n(i,l)||(o.uniform1iv(this.addr,l),ti(i,l));let c;this.type===o.SAMPLER_2D_SHADOW?c=L0:c=A1;for(let f=0;f!==a;++f)e.setTexture2D(t[f]||c,l[f])}function OD(o,t,e){const i=this.cache,a=t.length,l=wd(e,a);$n(i,l)||(o.uniform1iv(this.addr,l),ti(i,l));for(let c=0;c!==a;++c)e.setTexture3D(t[c]||w1,l[c])}function PD(o,t,e){const i=this.cache,a=t.length,l=wd(e,a);$n(i,l)||(o.uniform1iv(this.addr,l),ti(i,l));for(let c=0;c!==a;++c)e.setTextureCube(t[c]||C1,l[c])}function FD(o,t,e){const i=this.cache,a=t.length,l=wd(e,a);$n(i,l)||(o.uniform1iv(this.addr,l),ti(i,l));for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||R1,l[c])}function ID(o){switch(o){case 5126:return vD;case 35664:return xD;case 35665:return SD;case 35666:return yD;case 35674:return MD;case 35675:return ED;case 35676:return bD;case 5124:case 35670:return TD;case 35667:case 35671:return AD;case 35668:case 35672:return RD;case 35669:case 35673:return wD;case 5125:return CD;case 36294:return DD;case 36295:return UD;case 36296:return ND;case 35678:case 36198:case 36298:case 36306:case 35682:return LD;case 35679:case 36299:case 36307:return OD;case 35680:case 36300:case 36308:case 36293:return PD;case 36289:case 36303:case 36311:case 36292:return FD}}class BD{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gD(e.type)}}class zD{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ID(e.type)}}class HD{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(t,e[f.id],i)}}}const S_=/(\w+)(\])?(\[|\.)?/g;function SM(o,t){o.seq.push(t),o.map[t.id]=t}function GD(o,t,e){const i=o.name,a=i.length;for(S_.lastIndex=0;;){const l=S_.exec(i),c=S_.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===a){SM(e,d===void 0?new BD(f,o,t):new zD(f,o,t));break}else{let x=e.map[f];x===void 0&&(x=new HD(f),SM(e,x)),e=x}}}class jh{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const f=t.getActiveUniform(e,c),p=t.getUniformLocation(e,f.name);GD(f,p,this)}const a=[],l=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(t,e,i,a){const l=this.map[e];l!==void 0&&l.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let l=0,c=e.length;l!==c;++l){const f=e[l],p=i[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,l=t.length;a!==l;++a){const c=t[a];c.id in e&&i.push(c)}return i}}function yM(o,t,e){const i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}const VD=37297;let kD=0;function XD(o,t){const e=o.split(`
`),i=[],a=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let c=a;c<l;c++){const f=c+1;i.push(`${f===t?">":" "} ${f}: ${e[c]}`)}return i.join(`
`)}const MM=new Se;function WD(o){He._getMatrix(MM,He.workingColorSpace,o);const t=`mat3( ${MM.elements.map(e=>e.toFixed(4))} )`;switch(He.getTransfer(o)){case fd:return[t,"LinearTransferOETF"];case sn:return[t,"sRGBTransferOETF"];default:return _e("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function EM(o,t,e){const i=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return e.toUpperCase()+`

`+l+`

`+XD(o.getShaderSource(t),f)}else return l}function YD(o,t){const e=WD(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const qD={[jE]:"Linear",[ZE]:"Reinhard",[KE]:"Cineon",[QE]:"ACESFilmic",[$E]:"AgX",[t1]:"Neutral",[JE]:"Custom"};function jD(o,t){const e=qD[t];return e===void 0?(_e("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rh=new ot;function ZD(){He.getLuminanceCoefficients(Rh);const o=Rh.x.toFixed(4),t=Rh.y.toFixed(4),e=Rh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KD(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_c).join(`
`)}function QD(o){const t=[];for(const e in o){const i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function JD(o,t){const e={},i=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=o.getActiveAttrib(t,a),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),e[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return e}function _c(o){return o!==""}function bM(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function TM(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $D=/^[ \t]*#include +<([\w\d./]+)>/gm;function O0(o){return o.replace($D,eU)}const tU=new Map;function eU(o,t){let e=Re[t];if(e===void 0){const i=tU.get(t);if(i!==void 0)e=Re[i],_e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return O0(e)}const nU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function AM(o){return o.replace(nU,iU)}function iU(o,t,e,i){let a="";for(let l=parseInt(t);l<parseInt(e);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function RM(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const rU={[kh]:"SHADOWMAP_TYPE_PCF",[pc]:"SHADOWMAP_TYPE_VSM"};function aU(o){return rU[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sU={[No]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE",[bd]:"ENVMAP_TYPE_CUBE_UV"};function oU(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":sU[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const lU={[nu]:"ENVMAP_MODE_REFRACTION"};function uU(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":lU[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cU={[qE]:"ENVMAP_BLENDING_MULTIPLY",[tw]:"ENVMAP_BLENDING_MIX",[ew]:"ENVMAP_BLENDING_ADD"};function fU(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":cU[o.combine]||"ENVMAP_BLENDING_NONE"}function hU(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function dU(o,t,e,i){const a=o.getContext(),l=e.defines;let c=e.vertexShader,f=e.fragmentShader;const p=aU(e),d=oU(e),_=uU(e),x=fU(e),g=hU(e),v=KD(e),M=QD(l),E=a.createProgram();let S,y,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(_c).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(_c).join(`
`),y.length>0&&(y+=`
`)):(S=[RM(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+_:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_c).join(`
`),y=[RM(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+_:"",e.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ma?"#define TONE_MAPPING":"",e.toneMapping!==ma?Re.tonemapping_pars_fragment:"",e.toneMapping!==ma?jD("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,YD("linearToOutputTexel",e.outputColorSpace),ZD(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_c).join(`
`)),c=O0(c),c=bM(c,e),c=TM(c,e),f=O0(f),f=bM(f,e),f=TM(f,e),c=AM(c),f=AM(f),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",e.glslVersion===zy?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=A+S+c,C=A+y+f,F=yM(a,a.VERTEX_SHADER,D),P=yM(a,a.FRAGMENT_SHADER,C);a.attachShader(E,F),a.attachShader(E,P),e.index0AttributeName!==void 0?a.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function N(G){if(o.debug.checkShaderErrors){const V=a.getProgramInfoLog(E)||"",nt=a.getShaderInfoLog(F)||"",rt=a.getShaderInfoLog(P)||"",X=V.trim(),B=nt.trim(),H=rt.trim();let K=!0,ft=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,E,F,P);else{const R=EM(a,F,"vertex"),Z=EM(a,P,"fragment");Ye("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+X+`
`+R+`
`+Z)}else X!==""?_e("WebGLProgram: Program Info Log:",X):(B===""||H==="")&&(ft=!1);ft&&(G.diagnostics={runnable:K,programLog:X,vertexShader:{log:B,prefix:S},fragmentShader:{log:H,prefix:y}})}a.deleteShader(F),a.deleteShader(P),b=new jh(a,E),L=JD(a,E)}let b;this.getUniforms=function(){return b===void 0&&N(this),b};let L;this.getAttributes=function(){return L===void 0&&N(this),L};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=a.getProgramParameter(E,VD)),z},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kD++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=F,this.fragmentShader=P,this}let pU=0;class mU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new _U(t),e.set(t,i)),i}}class _U{constructor(t){this.id=pU++,this.code=t,this.usedTimes=0}}function gU(o){return o===Lo||o===ld||o===ud}function vU(o,t,e,i,a,l){const c=new f1,f=new mU,p=new Set,d=[],_=new Map,x=i.logarithmicDepthBuffer;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function E(b,L,z,G,V,nt){const rt=G.fog,X=V.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,K=t.get(b.envMap||B,H),ft=K&&K.mapping===bd?K.image.height:null,R=v[b.type];b.precision!==null&&(g=i.getMaxPrecision(b.precision),g!==b.precision&&_e("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const Z=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=Z!==void 0?Z.length:0;let St=0;X.morphAttributes.position!==void 0&&(St=1),X.morphAttributes.normal!==void 0&&(St=2),X.morphAttributes.color!==void 0&&(St=3);let wt,Pt,$,Tt;if(R){const Lt=ua[R];wt=Lt.vertexShader,Pt=Lt.fragmentShader}else wt=b.vertexShader,Pt=b.fragmentShader,f.update(b),$=f.getVertexShaderID(b),Tt=f.getFragmentShaderID(b);const gt=o.getRenderTarget(),Xt=o.state.buffers.depth.getReversed(),ae=V.isInstancedMesh===!0,Qt=V.isBatchedMesh===!0,ve=!!b.map,Yt=!!b.matcap,se=!!K,ye=!!b.aoMap,oe=!!b.lightMap,at=!!b.bumpMap,we=!!b.normalMap,_n=!!b.displacementMap,q=!!b.emissiveMap,me=!!b.metalnessMap,he=!!b.roughnessMap,Ue=b.anisotropy>0,It=b.clearcoat>0,xe=b.dispersion>0,I=b.iridescence>0,w=b.sheen>0,Q=b.transmission>0,ht=Ue&&!!b.anisotropyMap,Et=It&&!!b.clearcoatMap,Ot=It&&!!b.clearcoatNormalMap,At=It&&!!b.clearcoatRoughnessMap,pt=I&&!!b.iridescenceMap,_t=I&&!!b.iridescenceThicknessMap,Ft=w&&!!b.sheenColorMap,Vt=w&&!!b.sheenRoughnessMap,Dt=!!b.specularMap,Nt=!!b.specularColorMap,Bt=!!b.specularIntensityMap,le=Q&&!!b.transmissionMap,de=Q&&!!b.thicknessMap,W=!!b.gradientMap,Ct=!!b.alphaMap,mt=b.alphaTest>0,Ht=!!b.alphaHash,Ut=!!b.extensions;let bt=ma;b.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(bt=o.toneMapping);const Rt={shaderID:R,shaderType:b.type,shaderName:b.name,vertexShader:wt,fragmentShader:Pt,defines:b.defines,customVertexShaderID:$,customFragmentShaderID:Tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&V._colorsTexture!==null,instancing:ae,instancingColor:ae&&V.instanceColor!==null,instancingMorph:ae&&V.morphTexture!==null,outputColorSpace:gt===null?o.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ve,matcap:Yt,envMap:se,envMapMode:se&&K.mapping,envMapCubeUVHeight:ft,aoMap:ye,lightMap:oe,bumpMap:at,normalMap:we,displacementMap:_n,emissiveMap:q,normalMapObjectSpace:we&&b.normalMapType===rw,normalMapTangentSpace:we&&b.normalMapType===Fy,packedNormalMap:we&&b.normalMapType===Fy&&gU(b.normalMap.format),metalnessMap:me,roughnessMap:he,anisotropy:Ue,anisotropyMap:ht,clearcoat:It,clearcoatMap:Et,clearcoatNormalMap:Ot,clearcoatRoughnessMap:At,dispersion:xe,iridescence:I,iridescenceMap:pt,iridescenceThicknessMap:_t,sheen:w,sheenColorMap:Ft,sheenRoughnessMap:Vt,specularMap:Dt,specularColorMap:Nt,specularIntensityMap:Bt,transmission:Q,transmissionMap:le,thicknessMap:de,gradientMap:W,opaque:b.transparent===!1&&b.blending===Xl&&b.alphaToCoverage===!1,alphaMap:Ct,alphaTest:mt,alphaHash:Ht,combine:b.combine,mapUv:ve&&M(b.map.channel),aoMapUv:ye&&M(b.aoMap.channel),lightMapUv:oe&&M(b.lightMap.channel),bumpMapUv:at&&M(b.bumpMap.channel),normalMapUv:we&&M(b.normalMap.channel),displacementMapUv:_n&&M(b.displacementMap.channel),emissiveMapUv:q&&M(b.emissiveMap.channel),metalnessMapUv:me&&M(b.metalnessMap.channel),roughnessMapUv:he&&M(b.roughnessMap.channel),anisotropyMapUv:ht&&M(b.anisotropyMap.channel),clearcoatMapUv:Et&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&M(b.sheenRoughnessMap.channel),specularMapUv:Dt&&M(b.specularMap.channel),specularColorMapUv:Nt&&M(b.specularColorMap.channel),specularIntensityMapUv:Bt&&M(b.specularIntensityMap.channel),transmissionMapUv:le&&M(b.transmissionMap.channel),thicknessMapUv:de&&M(b.thicknessMap.channel),alphaMapUv:Ct&&M(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(we||Ue),vertexNormals:!!X.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(ve||Ct),fog:!!rt,useFog:b.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||X.attributes.normal===void 0&&we===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Xt,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:St,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:nt.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:bt,decodeVideoTexture:ve&&b.map.isVideoTexture===!0&&He.getTransfer(b.map.colorSpace)===sn,decodeVideoTextureEmissive:q&&b.emissiveMap.isVideoTexture===!0&&He.getTransfer(b.emissiveMap.colorSpace)===sn,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ka,flipSided:b.side===Zi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ut&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&b.extensions.multiDraw===!0||Qt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Rt.vertexUv1s=p.has(1),Rt.vertexUv2s=p.has(2),Rt.vertexUv3s=p.has(3),p.clear(),Rt}function S(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)L.push(z),L.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(y(L,b),A(L,b),L.push(o.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function y(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function A(b,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),L.packedNormalMap&&c.enable(22),L.vertexNormals&&c.enable(23),b.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),L.numLightProbeGrids>0&&c.enable(22),b.push(c.mask)}function D(b){const L=v[b.type];let z;if(L){const G=ua[L];z=Vw.clone(G.uniforms)}else z=b.uniforms;return z}function C(b,L){let z=_.get(L);return z!==void 0?++z.usedTimes:(z=new dU(o,L,b,a),d.push(z),_.set(L,z)),z}function F(b){if(--b.usedTimes===0){const L=d.indexOf(b);d[L]=d[d.length-1],d.pop(),_.delete(b.cacheKey),b.destroy()}}function P(b){f.remove(b)}function N(){f.dispose()}return{getParameters:E,getProgramCacheKey:S,getUniforms:D,acquireProgram:C,releaseProgram:F,releaseShaderCache:P,programs:d,dispose:N}}function xU(){let o=new WeakMap;function t(c){return o.has(c)}function e(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function i(c){o.delete(c)}function a(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:l}}function SU(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function wM(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function CM(){const o=[];let t=0;const e=[],i=[],a=[];function l(){t=0,e.length=0,i.length=0,a.length=0}function c(g){let v=0;return g.isInstancedMesh&&(v+=2),g.isSkinnedMesh&&(v+=1),v}function f(g,v,M,E,S,y){let A=o[t];return A===void 0?(A={id:g.id,object:g,geometry:v,material:M,materialVariant:c(g),groupOrder:E,renderOrder:g.renderOrder,z:S,group:y},o[t]=A):(A.id=g.id,A.object=g,A.geometry=v,A.material=M,A.materialVariant=c(g),A.groupOrder=E,A.renderOrder=g.renderOrder,A.z=S,A.group=y),t++,A}function p(g,v,M,E,S,y){const A=f(g,v,M,E,S,y);M.transmission>0?i.push(A):M.transparent===!0?a.push(A):e.push(A)}function d(g,v,M,E,S,y){const A=f(g,v,M,E,S,y);M.transmission>0?i.unshift(A):M.transparent===!0?a.unshift(A):e.unshift(A)}function _(g,v){e.length>1&&e.sort(g||SU),i.length>1&&i.sort(v||wM),a.length>1&&a.sort(v||wM)}function x(){for(let g=t,v=o.length;g<v;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:i,transparent:a,init:l,push:p,unshift:d,finish:x,sort:_}}function yU(){let o=new WeakMap;function t(i,a){const l=o.get(i);let c;return l===void 0?(c=new CM,o.set(i,[c])):a>=l.length?(c=new CM,l.push(c)):c=l[a],c}function e(){o=new WeakMap}return{get:t,dispose:e}}function MU(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new ot,color:new en};break;case"SpotLight":e={position:new ot,direction:new ot,color:new en,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ot,color:new en,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ot,skyColor:new en,groundColor:new en};break;case"RectAreaLight":e={color:new en,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[t.id]=e,e}}}function EU(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let bU=0;function TU(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function AU(o){const t=new MU,e=EU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ot);const a=new ot,l=new jn,c=new jn;function f(d){let _=0,x=0,g=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let v=0,M=0,E=0,S=0,y=0,A=0,D=0,C=0,F=0,P=0,N=0;d.sort(TU);for(let L=0,z=d.length;L<z;L++){const G=d[L],V=G.color,nt=G.intensity,rt=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Lo?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=V.r*nt,x+=V.g*nt,g+=V.b*nt;else if(G.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(G.sh.coefficients[B],nt);N++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,K=e.get(G);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,i.directionalShadow[v]=K,i.directionalShadowMap[v]=X,i.directionalShadowMatrix[v]=G.shadow.matrix,A++}i.directional[v]=B,v++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(V).multiplyScalar(nt),B.distance=rt,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,i.spot[E]=B;const H=G.shadow;if(G.map&&(i.spotLightMap[F]=G.map,F++,H.updateMatrices(G),G.castShadow&&P++),i.spotLightMatrix[E]=H.matrix,G.castShadow){const K=e.get(G);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,i.spotShadow[E]=K,i.spotShadowMap[E]=X,C++}E++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(V).multiplyScalar(nt),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),i.rectArea[S]=B,S++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const H=G.shadow,K=e.get(G);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,i.pointShadow[M]=K,i.pointShadowMap[M]=X,i.pointShadowMatrix[M]=G.shadow.matrix,D++}i.point[M]=B,M++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(nt),B.groundColor.copy(G.groundColor).multiplyScalar(nt),i.hemi[y]=B,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Wt.LTC_FLOAT_1,i.rectAreaLTC2=Wt.LTC_FLOAT_2):(i.rectAreaLTC1=Wt.LTC_HALF_1,i.rectAreaLTC2=Wt.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=x,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==v||b.pointLength!==M||b.spotLength!==E||b.rectAreaLength!==S||b.hemiLength!==y||b.numDirectionalShadows!==A||b.numPointShadows!==D||b.numSpotShadows!==C||b.numSpotMaps!==F||b.numLightProbes!==N)&&(i.directional.length=v,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=C+F-P,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,b.directionalLength=v,b.pointLength=M,b.spotLength=E,b.rectAreaLength=S,b.hemiLength=y,b.numDirectionalShadows=A,b.numPointShadows=D,b.numSpotShadows=C,b.numSpotMaps=F,b.numLightProbes=N,i.version=bU++)}function p(d,_){let x=0,g=0,v=0,M=0,E=0;const S=_.matrixWorldInverse;for(let y=0,A=d.length;y<A;y++){const D=d[y];if(D.isDirectionalLight){const C=i.directional[x];C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),x++}else if(D.isSpotLight){const C=i.spot[v];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),v++}else if(D.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),c.identity(),l.copy(D.matrixWorld),l.premultiply(S),c.extractRotation(l),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(D.isPointLight){const C=i.point[g];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),g++}else if(D.isHemisphereLight){const C=i.hemi[E];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),E++}}}return{setup:f,setupView:p,state:i}}function DM(o){const t=new AU(o),e=[],i=[],a=[];function l(g){x.camera=g,e.length=0,i.length=0,a.length=0}function c(g){e.push(g)}function f(g){i.push(g)}function p(g){a.push(g)}function d(){t.setup(e)}function _(g){t.setupView(e,g)}const x={lightsArray:e,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:d,setupLightsView:_,pushLight:c,pushShadow:f,pushLightProbeGrid:p}}function RU(o){let t=new WeakMap;function e(a,l=0){const c=t.get(a);let f;return c===void 0?(f=new DM(o),t.set(a,[f])):l>=c.length?(f=new DM(o),c.push(f)):f=c[l],f}function i(){t=new WeakMap}return{get:e,dispose:i}}const wU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DU=[new ot(1,0,0),new ot(-1,0,0),new ot(0,1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1)],UU=[new ot(0,-1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1),new ot(0,-1,0),new ot(0,-1,0)],UM=new jn,uc=new ot,y_=new ot;function NU(o,t,e){let i=new _1;const a=new Ke,l=new Ke,c=new Hn,f=new Yw,p=new qw,d={},_=e.maxTextureSize,x={[ks]:Zi,[Zi]:ks,[ka]:ka},g=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:wU,fragmentShader:CU}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const M=new zr;M.setAttribute("position",new Qr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Jr(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let y=this.type;this.render=function(P,N,b){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===PR&&(_e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kh);const L=o.getRenderTarget(),z=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),V=o.state;V.setBlending(qa),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const nt=y!==this.type;nt&&N.traverse(function(rt){rt.material&&(Array.isArray(rt.material)?rt.material.forEach(X=>X.needsUpdate=!0):rt.material.needsUpdate=!0)});for(let rt=0,X=P.length;rt<X;rt++){const B=P[rt],H=B.shadow;if(H===void 0){_e("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const K=H.getFrameExtents();a.multiply(K),l.copy(H.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/K.x),a.x=l.x*K.x,H.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/K.y),a.y=l.y*K.y,H.mapSize.y=l.y));const ft=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ft,H.map===null||nt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===pc){if(B.isPointLight){_e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new _a(a.x,a.y,{format:Lo,type:Ja,minFilter:Ti,magFilter:Ti,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new iu(a.x,a.y,ha),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=$a,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=di,H.map.depthTexture.magFilter=di}else B.isPointLight?(H.map=new T1(a.x),H.map.depthTexture=new Hw(a.x,xa)):(H.map=new _a(a.x,a.y),H.map.depthTexture=new iu(a.x,a.y,xa)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=$a,this.type===kh?(H.map.depthTexture.compareFunction=ft?vg:gg,H.map.depthTexture.minFilter=Ti,H.map.depthTexture.magFilter=Ti):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=di,H.map.depthTexture.magFilter=di);H.camera.updateProjectionMatrix()}const R=H.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<R;Z++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,Z),o.clear();else{Z===0&&(o.setRenderTarget(H.map),o.clear());const dt=H.getViewport(Z);c.set(l.x*dt.x,l.y*dt.y,l.x*dt.z,l.y*dt.w),V.viewport(c)}if(B.isPointLight){const dt=H.camera,St=H.matrix,wt=B.distance||dt.far;wt!==dt.far&&(dt.far=wt,dt.updateProjectionMatrix()),uc.setFromMatrixPosition(B.matrixWorld),dt.position.copy(uc),y_.copy(dt.position),y_.add(DU[Z]),dt.up.copy(UU[Z]),dt.lookAt(y_),dt.updateMatrixWorld(),St.makeTranslation(-uc.x,-uc.y,-uc.z),UM.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(UM,dt.coordinateSystem,dt.reversedDepth)}else H.updateMatrices(B);i=H.getFrustum(),C(N,b,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===pc&&A(H,b),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(L,z,G)};function A(P,N){const b=t.update(E);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,v.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new _a(a.x,a.y,{format:Lo,type:Ja})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(N,null,b,g,E,null),v.uniforms.shadow_pass.value=P.mapPass.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(N,null,b,v,E,null)}function D(P,N,b,L){let z=null;const G=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)z=G;else if(z=b.isPointLight===!0?p:f,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const V=z.uuid,nt=N.uuid;let rt=d[V];rt===void 0&&(rt={},d[V]=rt);let X=rt[nt];X===void 0&&(X=z.clone(),rt[nt]=X,N.addEventListener("dispose",F)),z=X}if(z.visible=N.visible,z.wireframe=N.wireframe,L===pc?z.side=N.shadowSide!==null?N.shadowSide:N.side:z.side=N.shadowSide!==null?N.shadowSide:x[N.side],z.alphaMap=N.alphaMap,z.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,z.map=N.map,z.clipShadows=N.clipShadows,z.clippingPlanes=N.clippingPlanes,z.clipIntersection=N.clipIntersection,z.displacementMap=N.displacementMap,z.displacementScale=N.displacementScale,z.displacementBias=N.displacementBias,z.wireframeLinewidth=N.wireframeLinewidth,z.linewidth=N.linewidth,b.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const V=o.properties.get(z);V.light=b}return z}function C(P,N,b,L,z){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&z===pc)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);const nt=t.update(P),rt=P.material;if(Array.isArray(rt)){const X=nt.groups;for(let B=0,H=X.length;B<H;B++){const K=X[B],ft=rt[K.materialIndex];if(ft&&ft.visible){const R=D(P,ft,L,z);P.onBeforeShadow(o,P,N,b,nt,R,K),o.renderBufferDirect(b,null,nt,R,P,K),P.onAfterShadow(o,P,N,b,nt,R,K)}}}else if(rt.visible){const X=D(P,rt,L,z);P.onBeforeShadow(o,P,N,b,nt,X,null),o.renderBufferDirect(b,null,nt,X,P,null),P.onAfterShadow(o,P,N,b,nt,X,null)}}const V=P.children;for(let nt=0,rt=V.length;nt<rt;nt++)C(V[nt],N,b,L,z)}function F(P){P.target.removeEventListener("dispose",F);for(const b in d){const L=d[b],z=P.target.uuid;z in L&&(L[z].dispose(),delete L[z])}}}function LU(o,t){function e(){let W=!1;const Ct=new Hn;let mt=null;const Ht=new Hn(0,0,0,0);return{setMask:function(Ut){mt!==Ut&&!W&&(o.colorMask(Ut,Ut,Ut,Ut),mt=Ut)},setLocked:function(Ut){W=Ut},setClear:function(Ut,bt,Rt,Lt,ne){ne===!0&&(Ut*=Lt,bt*=Lt,Rt*=Lt),Ct.set(Ut,bt,Rt,Lt),Ht.equals(Ct)===!1&&(o.clearColor(Ut,bt,Rt,Lt),Ht.copy(Ct))},reset:function(){W=!1,mt=null,Ht.set(-1,0,0,0)}}}function i(){let W=!1,Ct=!1,mt=null,Ht=null,Ut=null;return{setReversed:function(bt){if(Ct!==bt){const Rt=t.get("EXT_clip_control");bt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Ct=bt;const Lt=Ut;Ut=null,this.setClear(Lt)}},getReversed:function(){return Ct},setTest:function(bt){bt?gt(o.DEPTH_TEST):Xt(o.DEPTH_TEST)},setMask:function(bt){mt!==bt&&!W&&(o.depthMask(bt),mt=bt)},setFunc:function(bt){if(Ct&&(bt=pw[bt]),Ht!==bt){switch(bt){case W_:o.depthFunc(o.NEVER);break;case Y_:o.depthFunc(o.ALWAYS);break;case q_:o.depthFunc(o.LESS);break;case eu:o.depthFunc(o.LEQUAL);break;case j_:o.depthFunc(o.EQUAL);break;case Z_:o.depthFunc(o.GEQUAL);break;case K_:o.depthFunc(o.GREATER);break;case Q_:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ht=bt}},setLocked:function(bt){W=bt},setClear:function(bt){Ut!==bt&&(Ut=bt,Ct&&(bt=1-bt),o.clearDepth(bt))},reset:function(){W=!1,mt=null,Ht=null,Ut=null,Ct=!1}}}function a(){let W=!1,Ct=null,mt=null,Ht=null,Ut=null,bt=null,Rt=null,Lt=null,ne=null;return{setTest:function(xt){W||(xt?gt(o.STENCIL_TEST):Xt(o.STENCIL_TEST))},setMask:function(xt){Ct!==xt&&!W&&(o.stencilMask(xt),Ct=xt)},setFunc:function(xt,Jt,jt){(mt!==xt||Ht!==Jt||Ut!==jt)&&(o.stencilFunc(xt,Jt,jt),mt=xt,Ht=Jt,Ut=jt)},setOp:function(xt,Jt,jt){(bt!==xt||Rt!==Jt||Lt!==jt)&&(o.stencilOp(xt,Jt,jt),bt=xt,Rt=Jt,Lt=jt)},setLocked:function(xt){W=xt},setClear:function(xt){ne!==xt&&(o.clearStencil(xt),ne=xt)},reset:function(){W=!1,Ct=null,mt=null,Ht=null,Ut=null,bt=null,Rt=null,Lt=null,ne=null}}}const l=new e,c=new i,f=new a,p=new WeakMap,d=new WeakMap;let _={},x={},g={},v=new WeakMap,M=[],E=null,S=!1,y=null,A=null,D=null,C=null,F=null,P=null,N=null,b=new en(0,0,0),L=0,z=!1,G=null,V=null,nt=null,rt=null,X=null;const B=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const ft=o.getParameter(o.VERSION);ft.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ft)[1]),H=K>=1):ft.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ft)[1]),H=K>=2);let R=null,Z={};const dt=o.getParameter(o.SCISSOR_BOX),St=o.getParameter(o.VIEWPORT),wt=new Hn().fromArray(dt),Pt=new Hn().fromArray(St);function $(W,Ct,mt,Ht){const Ut=new Uint8Array(4),bt=o.createTexture();o.bindTexture(W,bt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Rt=0;Rt<mt;Rt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Ht,0,o.RGBA,o.UNSIGNED_BYTE,Ut):o.texImage2D(Ct+Rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ut);return bt}const Tt={};Tt[o.TEXTURE_2D]=$(o.TEXTURE_2D,o.TEXTURE_2D,1),Tt[o.TEXTURE_CUBE_MAP]=$(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[o.TEXTURE_2D_ARRAY]=$(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Tt[o.TEXTURE_3D]=$(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),gt(o.DEPTH_TEST),c.setFunc(eu),at(!1),we(Ly),gt(o.CULL_FACE),ye(qa);function gt(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function Xt(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function ae(W,Ct){return g[W]!==Ct?(o.bindFramebuffer(W,Ct),g[W]=Ct,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ct),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Qt(W,Ct){let mt=M,Ht=!1;if(W){mt=v.get(Ct),mt===void 0&&(mt=[],v.set(Ct,mt));const Ut=W.textures;if(mt.length!==Ut.length||mt[0]!==o.COLOR_ATTACHMENT0){for(let bt=0,Rt=Ut.length;bt<Rt;bt++)mt[bt]=o.COLOR_ATTACHMENT0+bt;mt.length=Ut.length,Ht=!0}}else mt[0]!==o.BACK&&(mt[0]=o.BACK,Ht=!0);Ht&&o.drawBuffers(mt)}function ve(W){return E!==W?(o.useProgram(W),E=W,!0):!1}const Yt={[xo]:o.FUNC_ADD,[IR]:o.FUNC_SUBTRACT,[BR]:o.FUNC_REVERSE_SUBTRACT};Yt[zR]=o.MIN,Yt[HR]=o.MAX;const se={[GR]:o.ZERO,[VR]:o.ONE,[kR]:o.SRC_COLOR,[k_]:o.SRC_ALPHA,[ZR]:o.SRC_ALPHA_SATURATE,[qR]:o.DST_COLOR,[WR]:o.DST_ALPHA,[XR]:o.ONE_MINUS_SRC_COLOR,[X_]:o.ONE_MINUS_SRC_ALPHA,[jR]:o.ONE_MINUS_DST_COLOR,[YR]:o.ONE_MINUS_DST_ALPHA,[KR]:o.CONSTANT_COLOR,[QR]:o.ONE_MINUS_CONSTANT_COLOR,[JR]:o.CONSTANT_ALPHA,[$R]:o.ONE_MINUS_CONSTANT_ALPHA};function ye(W,Ct,mt,Ht,Ut,bt,Rt,Lt,ne,xt){if(W===qa){S===!0&&(Xt(o.BLEND),S=!1);return}if(S===!1&&(gt(o.BLEND),S=!0),W!==FR){if(W!==y||xt!==z){if((A!==xo||F!==xo)&&(o.blendEquation(o.FUNC_ADD),A=xo,F=xo),xt)switch(W){case Xl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case V_:o.blendFunc(o.ONE,o.ONE);break;case Oy:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Py:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ye("WebGLState: Invalid blending: ",W);break}else switch(W){case Xl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case V_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Oy:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Py:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",W);break}D=null,C=null,P=null,N=null,b.set(0,0,0),L=0,y=W,z=xt}return}Ut=Ut||Ct,bt=bt||mt,Rt=Rt||Ht,(Ct!==A||Ut!==F)&&(o.blendEquationSeparate(Yt[Ct],Yt[Ut]),A=Ct,F=Ut),(mt!==D||Ht!==C||bt!==P||Rt!==N)&&(o.blendFuncSeparate(se[mt],se[Ht],se[bt],se[Rt]),D=mt,C=Ht,P=bt,N=Rt),(Lt.equals(b)===!1||ne!==L)&&(o.blendColor(Lt.r,Lt.g,Lt.b,ne),b.copy(Lt),L=ne),y=W,z=!1}function oe(W,Ct){W.side===ka?Xt(o.CULL_FACE):gt(o.CULL_FACE);let mt=W.side===Zi;Ct&&(mt=!mt),at(mt),W.blending===Xl&&W.transparent===!1?ye(qa):ye(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ht=W.stencilWrite;f.setTest(Ht),Ht&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),q(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?gt(o.SAMPLE_ALPHA_TO_COVERAGE):Xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function at(W){G!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),G=W)}function we(W){W!==LR?(gt(o.CULL_FACE),W!==V&&(W===Ly?o.cullFace(o.BACK):W===OR?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Xt(o.CULL_FACE),V=W}function _n(W){W!==nt&&(H&&o.lineWidth(W),nt=W)}function q(W,Ct,mt){W?(gt(o.POLYGON_OFFSET_FILL),(rt!==Ct||X!==mt)&&(rt=Ct,X=mt,c.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,mt))):Xt(o.POLYGON_OFFSET_FILL)}function me(W){W?gt(o.SCISSOR_TEST):Xt(o.SCISSOR_TEST)}function he(W){W===void 0&&(W=o.TEXTURE0+B-1),R!==W&&(o.activeTexture(W),R=W)}function Ue(W,Ct,mt){mt===void 0&&(R===null?mt=o.TEXTURE0+B-1:mt=R);let Ht=Z[mt];Ht===void 0&&(Ht={type:void 0,texture:void 0},Z[mt]=Ht),(Ht.type!==W||Ht.texture!==Ct)&&(R!==mt&&(o.activeTexture(mt),R=mt),o.bindTexture(W,Ct||Tt[W]),Ht.type=W,Ht.texture=Ct)}function It(){const W=Z[R];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function xe(){try{o.compressedTexImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function I(){try{o.compressedTexImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function w(){try{o.texSubImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function Q(){try{o.texSubImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function Et(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function Ot(){try{o.texStorage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function At(){try{o.texStorage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function pt(){try{o.texImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function _t(){try{o.texImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function Ft(W){return x[W]!==void 0?x[W]:o.getParameter(W)}function Vt(W,Ct){x[W]!==Ct&&(o.pixelStorei(W,Ct),x[W]=Ct)}function Dt(W){wt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),wt.copy(W))}function Nt(W){Pt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Pt.copy(W))}function Bt(W,Ct){let mt=d.get(Ct);mt===void 0&&(mt=new WeakMap,d.set(Ct,mt));let Ht=mt.get(W);Ht===void 0&&(Ht=o.getUniformBlockIndex(Ct,W.name),mt.set(W,Ht))}function le(W,Ct){const Ht=d.get(Ct).get(W);p.get(Ct)!==Ht&&(o.uniformBlockBinding(Ct,Ht,W.__bindingPointIndex),p.set(Ct,Ht))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},x={},R=null,Z={},g={},v=new WeakMap,M=[],E=null,S=!1,y=null,A=null,D=null,C=null,F=null,P=null,N=null,b=new en(0,0,0),L=0,z=!1,G=null,V=null,nt=null,rt=null,X=null,wt.set(0,0,o.canvas.width,o.canvas.height),Pt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:gt,disable:Xt,bindFramebuffer:ae,drawBuffers:Qt,useProgram:ve,setBlending:ye,setMaterial:oe,setFlipSided:at,setCullFace:we,setLineWidth:_n,setPolygonOffset:q,setScissorTest:me,activeTexture:he,bindTexture:Ue,unbindTexture:It,compressedTexImage2D:xe,compressedTexImage3D:I,texImage2D:pt,texImage3D:_t,pixelStorei:Vt,getParameter:Ft,updateUBOMapping:Bt,uniformBlockBinding:le,texStorage2D:Ot,texStorage3D:At,texSubImage2D:w,texSubImage3D:Q,compressedTexSubImage2D:ht,compressedTexSubImage3D:Et,scissor:Dt,viewport:Nt,reset:de}}function OU(o,t,e,i,a,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ke,_=new WeakMap,x=new Set;let g;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,w){return M?new OffscreenCanvas(I,w):dd("canvas")}function S(I,w,Q){let ht=1;const Et=xe(I);if((Et.width>Q||Et.height>Q)&&(ht=Q/Math.max(Et.width,Et.height)),ht<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ot=Math.floor(ht*Et.width),At=Math.floor(ht*Et.height);g===void 0&&(g=E(Ot,At));const pt=w?E(Ot,At):g;return pt.width=Ot,pt.height=At,pt.getContext("2d").drawImage(I,0,0,Ot,At),_e("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+Ot+"x"+At+")."),pt}else return"data"in I&&_e("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),I;return I}function y(I){return I.generateMipmaps}function A(I){o.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(I,w,Q,ht,Et,Ot=!1){if(I!==null){if(o[I]!==void 0)return o[I];_e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let At;ht&&(At=t.get("EXT_texture_norm16"),At||_e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pt=w;if(w===o.RED&&(Q===o.FLOAT&&(pt=o.R32F),Q===o.HALF_FLOAT&&(pt=o.R16F),Q===o.UNSIGNED_BYTE&&(pt=o.R8),Q===o.UNSIGNED_SHORT&&At&&(pt=At.R16_EXT),Q===o.SHORT&&At&&(pt=At.R16_SNORM_EXT)),w===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(pt=o.R8UI),Q===o.UNSIGNED_SHORT&&(pt=o.R16UI),Q===o.UNSIGNED_INT&&(pt=o.R32UI),Q===o.BYTE&&(pt=o.R8I),Q===o.SHORT&&(pt=o.R16I),Q===o.INT&&(pt=o.R32I)),w===o.RG&&(Q===o.FLOAT&&(pt=o.RG32F),Q===o.HALF_FLOAT&&(pt=o.RG16F),Q===o.UNSIGNED_BYTE&&(pt=o.RG8),Q===o.UNSIGNED_SHORT&&At&&(pt=At.RG16_EXT),Q===o.SHORT&&At&&(pt=At.RG16_SNORM_EXT)),w===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(pt=o.RG8UI),Q===o.UNSIGNED_SHORT&&(pt=o.RG16UI),Q===o.UNSIGNED_INT&&(pt=o.RG32UI),Q===o.BYTE&&(pt=o.RG8I),Q===o.SHORT&&(pt=o.RG16I),Q===o.INT&&(pt=o.RG32I)),w===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),Q===o.UNSIGNED_INT&&(pt=o.RGB32UI),Q===o.BYTE&&(pt=o.RGB8I),Q===o.SHORT&&(pt=o.RGB16I),Q===o.INT&&(pt=o.RGB32I)),w===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),Q===o.UNSIGNED_INT&&(pt=o.RGBA32UI),Q===o.BYTE&&(pt=o.RGBA8I),Q===o.SHORT&&(pt=o.RGBA16I),Q===o.INT&&(pt=o.RGBA32I)),w===o.RGB&&(Q===o.UNSIGNED_SHORT&&At&&(pt=At.RGB16_EXT),Q===o.SHORT&&At&&(pt=At.RGB16_SNORM_EXT),Q===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(pt=o.R11F_G11F_B10F)),w===o.RGBA){const _t=Ot?fd:He.getTransfer(Et);Q===o.FLOAT&&(pt=o.RGBA32F),Q===o.HALF_FLOAT&&(pt=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(pt=_t===sn?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT&&At&&(pt=At.RGBA16_EXT),Q===o.SHORT&&At&&(pt=At.RGBA16_SNORM_EXT),Q===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function F(I,w){let Q;return I?w===null||w===xa||w===kc?Q=o.DEPTH24_STENCIL8:w===ha?Q=o.DEPTH32F_STENCIL8:w===Vc&&(Q=o.DEPTH24_STENCIL8,_e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===xa||w===kc?Q=o.DEPTH_COMPONENT24:w===ha?Q=o.DEPTH_COMPONENT32F:w===Vc&&(Q=o.DEPTH_COMPONENT16),Q}function P(I,w){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==di&&I.minFilter!==Ti?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function N(I){const w=I.target;w.removeEventListener("dispose",N),L(w),w.isVideoTexture&&_.delete(w),w.isHTMLTexture&&x.delete(w)}function b(I){const w=I.target;w.removeEventListener("dispose",b),G(w)}function L(I){const w=i.get(I);if(w.__webglInit===void 0)return;const Q=I.source,ht=v.get(Q);if(ht){const Et=ht[w.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&z(I),Object.keys(ht).length===0&&v.delete(Q)}i.remove(I)}function z(I){const w=i.get(I);o.deleteTexture(w.__webglTexture);const Q=I.source,ht=v.get(Q);delete ht[w.__cacheKey],c.memory.textures--}function G(I){const w=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(w.__webglFramebuffer[ht]))for(let Et=0;Et<w.__webglFramebuffer[ht].length;Et++)o.deleteFramebuffer(w.__webglFramebuffer[ht][Et]);else o.deleteFramebuffer(w.__webglFramebuffer[ht]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[ht])}else{if(Array.isArray(w.__webglFramebuffer))for(let ht=0;ht<w.__webglFramebuffer.length;ht++)o.deleteFramebuffer(w.__webglFramebuffer[ht]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ht=0;ht<w.__webglColorRenderbuffer.length;ht++)w.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[ht]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=I.textures;for(let ht=0,Et=Q.length;ht<Et;ht++){const Ot=i.get(Q[ht]);Ot.__webglTexture&&(o.deleteTexture(Ot.__webglTexture),c.memory.textures--),i.remove(Q[ht])}i.remove(I)}let V=0;function nt(){V=0}function rt(){return V}function X(I){V=I}function B(){const I=V;return I>=a.maxTextures&&_e("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),V+=1,I}function H(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function K(I,w){const Q=i.get(I);if(I.isVideoTexture&&Ue(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){const ht=I.image;if(ht===null)_e("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)_e("WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(Q,I,w);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+w)}function ft(I,w){const Q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Xt(Q,I,w);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+w)}function R(I,w){const Q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Xt(Q,I,w);return}e.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+w)}function Z(I,w){const Q=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Q.__version!==I.version){ae(Q,I,w);return}e.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+w)}const dt={[J_]:o.REPEAT,[Wa]:o.CLAMP_TO_EDGE,[$_]:o.MIRRORED_REPEAT},St={[di]:o.NEAREST,[nw]:o.NEAREST_MIPMAP_NEAREST,[rh]:o.NEAREST_MIPMAP_LINEAR,[Ti]:o.LINEAR,[Wm]:o.LINEAR_MIPMAP_NEAREST,[Mo]:o.LINEAR_MIPMAP_LINEAR},wt={[aw]:o.NEVER,[cw]:o.ALWAYS,[sw]:o.LESS,[gg]:o.LEQUAL,[ow]:o.EQUAL,[vg]:o.GEQUAL,[lw]:o.GREATER,[uw]:o.NOTEQUAL};function Pt(I,w){if(w.type===ha&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ti||w.magFilter===Wm||w.magFilter===rh||w.magFilter===Mo||w.minFilter===Ti||w.minFilter===Wm||w.minFilter===rh||w.minFilter===Mo)&&_e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,dt[w.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,dt[w.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,dt[w.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,St[w.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,St[w.minFilter]),w.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,wt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===di||w.minFilter!==rh&&w.minFilter!==Mo||w.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function $(I,w){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",N));const ht=w.source;let Et=v.get(ht);Et===void 0&&(Et={},v.set(ht,Et));const Ot=H(w);if(Ot!==I.__cacheKey){Et[Ot]===void 0&&(Et[Ot]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),Et[Ot].usedTimes++;const At=Et[I.__cacheKey];At!==void 0&&(Et[I.__cacheKey].usedTimes--,At.usedTimes===0&&z(w)),I.__cacheKey=Ot,I.__webglTexture=Et[Ot].texture}return Q}function Tt(I,w,Q){return Math.floor(Math.floor(I/Q)/w)}function gt(I,w,Q,ht){const Ot=I.updateRanges;if(Ot.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,w.width,w.height,Q,ht,w.data);else{Ot.sort((Vt,Dt)=>Vt.start-Dt.start);let At=0;for(let Vt=1;Vt<Ot.length;Vt++){const Dt=Ot[At],Nt=Ot[Vt],Bt=Dt.start+Dt.count,le=Tt(Nt.start,w.width,4),de=Tt(Dt.start,w.width,4);Nt.start<=Bt+1&&le===de&&Tt(Nt.start+Nt.count-1,w.width,4)===le?Dt.count=Math.max(Dt.count,Nt.start+Nt.count-Dt.start):(++At,Ot[At]=Nt)}Ot.length=At+1;const pt=e.getParameter(o.UNPACK_ROW_LENGTH),_t=e.getParameter(o.UNPACK_SKIP_PIXELS),Ft=e.getParameter(o.UNPACK_SKIP_ROWS);e.pixelStorei(o.UNPACK_ROW_LENGTH,w.width);for(let Vt=0,Dt=Ot.length;Vt<Dt;Vt++){const Nt=Ot[Vt],Bt=Math.floor(Nt.start/4),le=Math.ceil(Nt.count/4),de=Bt%w.width,W=Math.floor(Bt/w.width),Ct=le,mt=1;e.pixelStorei(o.UNPACK_SKIP_PIXELS,de),e.pixelStorei(o.UNPACK_SKIP_ROWS,W),e.texSubImage2D(o.TEXTURE_2D,0,de,W,Ct,mt,Q,ht,w.data)}I.clearUpdateRanges(),e.pixelStorei(o.UNPACK_ROW_LENGTH,pt),e.pixelStorei(o.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(o.UNPACK_SKIP_ROWS,Ft)}}function Xt(I,w,Q){let ht=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ht=o.TEXTURE_3D);const Et=$(I,w),Ot=w.source;e.bindTexture(ht,I.__webglTexture,o.TEXTURE0+Q);const At=i.get(Ot);if(Ot.version!==At.__version||Et===!0){if(e.activeTexture(o.TEXTURE0+Q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const mt=He.getPrimaries(He.workingColorSpace),Ht=w.colorSpace===Ds?null:He.getPrimaries(w.colorSpace),Ut=w.colorSpace===Ds||mt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;e.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment);let _t=S(w.image,!1,a.maxTextureSize);_t=It(w,_t);const Ft=l.convert(w.format,w.colorSpace),Vt=l.convert(w.type);let Dt=C(w.internalFormat,Ft,Vt,w.normalized,w.colorSpace,w.isVideoTexture);Pt(ht,w);let Nt;const Bt=w.mipmaps,le=w.isVideoTexture!==!0,de=At.__version===void 0||Et===!0,W=Ot.dataReady,Ct=P(w,_t);if(w.isDepthTexture)Dt=F(w.format===Eo,w.type),de&&(le?e.texStorage2D(o.TEXTURE_2D,1,Dt,_t.width,_t.height):e.texImage2D(o.TEXTURE_2D,0,Dt,_t.width,_t.height,0,Ft,Vt,null));else if(w.isDataTexture)if(Bt.length>0){le&&de&&e.texStorage2D(o.TEXTURE_2D,Ct,Dt,Bt[0].width,Bt[0].height);for(let mt=0,Ht=Bt.length;mt<Ht;mt++)Nt=Bt[mt],le?W&&e.texSubImage2D(o.TEXTURE_2D,mt,0,0,Nt.width,Nt.height,Ft,Vt,Nt.data):e.texImage2D(o.TEXTURE_2D,mt,Dt,Nt.width,Nt.height,0,Ft,Vt,Nt.data);w.generateMipmaps=!1}else le?(de&&e.texStorage2D(o.TEXTURE_2D,Ct,Dt,_t.width,_t.height),W&&gt(w,_t,Ft,Vt)):e.texImage2D(o.TEXTURE_2D,0,Dt,_t.width,_t.height,0,Ft,Vt,_t.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){le&&de&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Dt,Bt[0].width,Bt[0].height,_t.depth);for(let mt=0,Ht=Bt.length;mt<Ht;mt++)if(Nt=Bt[mt],w.format!==Kr)if(Ft!==null)if(le){if(W)if(w.layerUpdates.size>0){const Ut=lM(Nt.width,Nt.height,w.format,w.type);for(const bt of w.layerUpdates){const Rt=Nt.data.subarray(bt*Ut/Nt.data.BYTES_PER_ELEMENT,(bt+1)*Ut/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,bt,Nt.width,Nt.height,1,Ft,Rt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,0,Nt.width,Nt.height,_t.depth,Ft,Nt.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,mt,Dt,Nt.width,Nt.height,_t.depth,0,Nt.data,0,0);else _e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?W&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,0,Nt.width,Nt.height,_t.depth,Ft,Vt,Nt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,mt,Dt,Nt.width,Nt.height,_t.depth,0,Ft,Vt,Nt.data)}else{le&&de&&e.texStorage2D(o.TEXTURE_2D,Ct,Dt,Bt[0].width,Bt[0].height);for(let mt=0,Ht=Bt.length;mt<Ht;mt++)Nt=Bt[mt],w.format!==Kr?Ft!==null?le?W&&e.compressedTexSubImage2D(o.TEXTURE_2D,mt,0,0,Nt.width,Nt.height,Ft,Nt.data):e.compressedTexImage2D(o.TEXTURE_2D,mt,Dt,Nt.width,Nt.height,0,Nt.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?W&&e.texSubImage2D(o.TEXTURE_2D,mt,0,0,Nt.width,Nt.height,Ft,Vt,Nt.data):e.texImage2D(o.TEXTURE_2D,mt,Dt,Nt.width,Nt.height,0,Ft,Vt,Nt.data)}else if(w.isDataArrayTexture)if(le){if(de&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Dt,_t.width,_t.height,_t.depth),W)if(w.layerUpdates.size>0){const mt=lM(_t.width,_t.height,w.format,w.type);for(const Ht of w.layerUpdates){const Ut=_t.data.subarray(Ht*mt/_t.data.BYTES_PER_ELEMENT,(Ht+1)*mt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ht,_t.width,_t.height,1,Ft,Vt,Ut)}w.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Ft,Vt,_t.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Dt,_t.width,_t.height,_t.depth,0,Ft,Vt,_t.data);else if(w.isData3DTexture)le?(de&&e.texStorage3D(o.TEXTURE_3D,Ct,Dt,_t.width,_t.height,_t.depth),W&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Ft,Vt,_t.data)):e.texImage3D(o.TEXTURE_3D,0,Dt,_t.width,_t.height,_t.depth,0,Ft,Vt,_t.data);else if(w.isFramebufferTexture){if(de)if(le)e.texStorage2D(o.TEXTURE_2D,Ct,Dt,_t.width,_t.height);else{let mt=_t.width,Ht=_t.height;for(let Ut=0;Ut<Ct;Ut++)e.texImage2D(o.TEXTURE_2D,Ut,Dt,mt,Ht,0,Ft,Vt,null),mt>>=1,Ht>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in o){const mt=o.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),_t.parentNode!==mt){mt.appendChild(_t),x.add(w),mt.onpaint=Lt=>{const ne=Lt.changedElements;for(const xt of x)ne.includes(xt.image)&&(xt.needsUpdate=!0)},mt.requestPaint();return}const Ht=0,Ut=o.RGBA,bt=o.RGBA,Rt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Ht,Ut,bt,Rt,_t),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(le&&de){const mt=xe(Bt[0]);e.texStorage2D(o.TEXTURE_2D,Ct,Dt,mt.width,mt.height)}for(let mt=0,Ht=Bt.length;mt<Ht;mt++)Nt=Bt[mt],le?W&&e.texSubImage2D(o.TEXTURE_2D,mt,0,0,Ft,Vt,Nt):e.texImage2D(o.TEXTURE_2D,mt,Dt,Ft,Vt,Nt);w.generateMipmaps=!1}else if(le){if(de){const mt=xe(_t);e.texStorage2D(o.TEXTURE_2D,Ct,Dt,mt.width,mt.height)}W&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,Vt,_t)}else e.texImage2D(o.TEXTURE_2D,0,Dt,Ft,Vt,_t);y(w)&&A(ht),At.__version=Ot.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ae(I,w,Q){if(w.image.length!==6)return;const ht=$(I,w),Et=w.source;e.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+Q);const Ot=i.get(Et);if(Et.version!==Ot.__version||ht===!0){e.activeTexture(o.TEXTURE0+Q);const At=He.getPrimaries(He.workingColorSpace),pt=w.colorSpace===Ds?null:He.getPrimaries(w.colorSpace),_t=w.colorSpace===Ds||At===pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;e.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Ft=w.isCompressedTexture||w.image[0].isCompressedTexture,Vt=w.image[0]&&w.image[0].isDataTexture,Dt=[];for(let bt=0;bt<6;bt++)!Ft&&!Vt?Dt[bt]=S(w.image[bt],!0,a.maxCubemapSize):Dt[bt]=Vt?w.image[bt].image:w.image[bt],Dt[bt]=It(w,Dt[bt]);const Nt=Dt[0],Bt=l.convert(w.format,w.colorSpace),le=l.convert(w.type),de=C(w.internalFormat,Bt,le,w.normalized,w.colorSpace),W=w.isVideoTexture!==!0,Ct=Ot.__version===void 0||ht===!0,mt=Et.dataReady;let Ht=P(w,Nt);Pt(o.TEXTURE_CUBE_MAP,w);let Ut;if(Ft){W&&Ct&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,de,Nt.width,Nt.height);for(let bt=0;bt<6;bt++){Ut=Dt[bt].mipmaps;for(let Rt=0;Rt<Ut.length;Rt++){const Lt=Ut[Rt];w.format!==Kr?Bt!==null?W?mt&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt,0,0,Lt.width,Lt.height,Bt,Lt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt,de,Lt.width,Lt.height,0,Lt.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt,0,0,Lt.width,Lt.height,Bt,le,Lt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt,de,Lt.width,Lt.height,0,Bt,le,Lt.data)}}}else{if(Ut=w.mipmaps,W&&Ct){Ut.length>0&&Ht++;const bt=xe(Dt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,de,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Vt){W?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Dt[bt].width,Dt[bt].height,Bt,le,Dt[bt].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,de,Dt[bt].width,Dt[bt].height,0,Bt,le,Dt[bt].data);for(let Rt=0;Rt<Ut.length;Rt++){const ne=Ut[Rt].image[bt].image;W?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt+1,0,0,ne.width,ne.height,Bt,le,ne.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt+1,de,ne.width,ne.height,0,Bt,le,ne.data)}}else{W?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Bt,le,Dt[bt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,de,Bt,le,Dt[bt]);for(let Rt=0;Rt<Ut.length;Rt++){const Lt=Ut[Rt];W?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt+1,0,0,Bt,le,Lt.image[bt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt+1,de,Bt,le,Lt.image[bt])}}}y(w)&&A(o.TEXTURE_CUBE_MAP),Ot.__version=Et.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Qt(I,w,Q,ht,Et,Ot){const At=l.convert(Q.format,Q.colorSpace),pt=l.convert(Q.type),_t=C(Q.internalFormat,At,pt,Q.normalized,Q.colorSpace),Ft=i.get(w),Vt=i.get(Q);if(Vt.__renderTarget=w,!Ft.__hasExternalTextures){const Dt=Math.max(1,w.width>>Ot),Nt=Math.max(1,w.height>>Ot);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?e.texImage3D(Et,Ot,_t,Dt,Nt,w.depth,0,At,pt,null):e.texImage2D(Et,Ot,_t,Dt,Nt,0,At,pt,null)}e.bindFramebuffer(o.FRAMEBUFFER,I),he(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,Et,Vt.__webglTexture,0,me(w)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,Et,Vt.__webglTexture,Ot),e.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(I,w,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,I),w.depthBuffer){const ht=w.depthTexture,Et=ht&&ht.isDepthTexture?ht.type:null,Ot=F(w.stencilBuffer,Et),At=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;he(w)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me(w),Ot,w.width,w.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,me(w),Ot,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Ot,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,I)}else{const ht=w.textures;for(let Et=0;Et<ht.length;Et++){const Ot=ht[Et],At=l.convert(Ot.format,Ot.colorSpace),pt=l.convert(Ot.type),_t=C(Ot.internalFormat,At,pt,Ot.normalized,Ot.colorSpace);he(w)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me(w),_t,w.width,w.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,me(w),_t,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,_t,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Yt(I,w,Q){const ht=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(o.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=i.get(w.depthTexture);if(Et.__renderTarget=w,(!Et.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ht){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,w.depthTexture.addEventListener("dispose",N)),Et.__webglTexture===void 0){Et.__webglTexture=o.createTexture(),e.bindTexture(o.TEXTURE_CUBE_MAP,Et.__webglTexture),Pt(o.TEXTURE_CUBE_MAP,w.depthTexture);const Ft=l.convert(w.depthTexture.format),Vt=l.convert(w.depthTexture.type);let Dt;w.depthTexture.format===$a?Dt=o.DEPTH_COMPONENT24:w.depthTexture.format===Eo&&(Dt=o.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Dt,w.width,w.height,0,Ft,Vt,null)}}else K(w.depthTexture,0);const Ot=Et.__webglTexture,At=me(w),pt=ht?o.TEXTURE_CUBE_MAP_POSITIVE_X+Q:o.TEXTURE_2D,_t=w.depthTexture.format===Eo?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(w.depthTexture.format===$a)he(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,pt,Ot,0,At):o.framebufferTexture2D(o.FRAMEBUFFER,_t,pt,Ot,0);else if(w.depthTexture.format===Eo)he(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,pt,Ot,0,At):o.framebufferTexture2D(o.FRAMEBUFFER,_t,pt,Ot,0);else throw new Error("Unknown depthTexture format")}function se(I){const w=i.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const ht=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ht){const Et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ht.removeEventListener("dispose",Et)};ht.addEventListener("dispose",Et),w.__depthDisposeCallback=Et}w.__boundDepthTexture=ht}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(Q)for(let ht=0;ht<6;ht++)Yt(w.__webglFramebuffer[ht],I,ht);else{const ht=I.texture.mipmaps;ht&&ht.length>0?Yt(w.__webglFramebuffer[0],I,0):Yt(w.__webglFramebuffer,I,0)}else if(Q){w.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[ht]),w.__webglDepthbuffer[ht]===void 0)w.__webglDepthbuffer[ht]=o.createRenderbuffer(),ve(w.__webglDepthbuffer[ht],I,!1);else{const Et=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=w.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,Ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,Ot)}}else{const ht=I.texture.mipmaps;if(ht&&ht.length>0?e.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),ve(w.__webglDepthbuffer,I,!1);else{const Et=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,Ot)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function ye(I,w,Q){const ht=i.get(I);w!==void 0&&Qt(ht.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&se(I)}function oe(I){const w=I.texture,Q=i.get(I),ht=i.get(w);I.addEventListener("dispose",b);const Et=I.textures,Ot=I.isWebGLCubeRenderTarget===!0,At=Et.length>1;if(At||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=w.version,c.memory.textures++),Ot){Q.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[pt]=[];for(let _t=0;_t<w.mipmaps.length;_t++)Q.__webglFramebuffer[pt][_t]=o.createFramebuffer()}else Q.__webglFramebuffer[pt]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let pt=0;pt<w.mipmaps.length;pt++)Q.__webglFramebuffer[pt]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(At)for(let pt=0,_t=Et.length;pt<_t;pt++){const Ft=i.get(Et[pt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=o.createTexture(),c.memory.textures++)}if(I.samples>0&&he(I)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let pt=0;pt<Et.length;pt++){const _t=Et[pt];Q.__webglColorRenderbuffer[pt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[pt]);const Ft=l.convert(_t.format,_t.colorSpace),Vt=l.convert(_t.type),Dt=C(_t.internalFormat,Ft,Vt,_t.normalized,_t.colorSpace,I.isXRRenderTarget===!0),Nt=me(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,Dt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+pt,o.RENDERBUFFER,Q.__webglColorRenderbuffer[pt])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(Q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ot){e.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),Pt(o.TEXTURE_CUBE_MAP,w);for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0)for(let _t=0;_t<w.mipmaps.length;_t++)Qt(Q.__webglFramebuffer[pt][_t],I,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_t);else Qt(Q.__webglFramebuffer[pt],I,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);y(w)&&A(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let pt=0,_t=Et.length;pt<_t;pt++){const Ft=Et[pt],Vt=i.get(Ft);let Dt=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Dt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Dt,Vt.__webglTexture),Pt(Dt,Ft),Qt(Q.__webglFramebuffer,I,Ft,o.COLOR_ATTACHMENT0+pt,Dt,0),y(Ft)&&A(Dt)}e.unbindTexture()}else{let pt=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(pt,ht.__webglTexture),Pt(pt,w),w.mipmaps&&w.mipmaps.length>0)for(let _t=0;_t<w.mipmaps.length;_t++)Qt(Q.__webglFramebuffer[_t],I,w,o.COLOR_ATTACHMENT0,pt,_t);else Qt(Q.__webglFramebuffer,I,w,o.COLOR_ATTACHMENT0,pt,0);y(w)&&A(pt),e.unbindTexture()}I.depthBuffer&&se(I)}function at(I){const w=I.textures;for(let Q=0,ht=w.length;Q<ht;Q++){const Et=w[Q];if(y(Et)){const Ot=D(I),At=i.get(Et).__webglTexture;e.bindTexture(Ot,At),A(Ot),e.unbindTexture()}}}const we=[],_n=[];function q(I){if(I.samples>0){if(he(I)===!1){const w=I.textures,Q=I.width,ht=I.height;let Et=o.COLOR_BUFFER_BIT;const Ot=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=i.get(I),pt=w.length>1;if(pt)for(let Ft=0;Ft<w.length;Ft++)e.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const _t=I.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Ft=0;Ft<w.length;Ft++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),pt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,At.__webglColorRenderbuffer[Ft]);const Vt=i.get(w[Ft]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Vt,0)}o.blitFramebuffer(0,0,Q,ht,0,0,Q,ht,Et,o.NEAREST),p===!0&&(we.length=0,_n.length=0,we.push(o.COLOR_ATTACHMENT0+Ft),I.depthBuffer&&I.resolveDepthBuffer===!1&&(we.push(Ot),_n.push(Ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,_n)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),pt)for(let Ft=0;Ft<w.length;Ft++){e.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,At.__webglColorRenderbuffer[Ft]);const Vt=i.get(w[Ft]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.TEXTURE_2D,Vt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const w=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function me(I){return Math.min(a.maxSamples,I.samples)}function he(I){const w=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ue(I){const w=c.render.frame;_.get(I)!==w&&(_.set(I,w),I.update())}function It(I,w){const Q=I.colorSpace,ht=I.format,Et=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==cd&&Q!==Ds&&(He.getTransfer(Q)===sn?(ht!==Kr||Et!==Or)&&_e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",Q)),w}function xe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=B,this.resetTextureUnits=nt,this.getTextureUnits=rt,this.setTextureUnits=X,this.setTexture2D=K,this.setTexture2DArray=ft,this.setTexture3D=R,this.setTextureCube=Z,this.rebindTextures=ye,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function PU(o,t){function e(i,a=Ds){let l;const c=He.getTransfer(a);if(i===Or)return o.UNSIGNED_BYTE;if(i===hg)return o.UNSIGNED_SHORT_4_4_4_4;if(i===dg)return o.UNSIGNED_SHORT_5_5_5_1;if(i===r1)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===a1)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===n1)return o.BYTE;if(i===i1)return o.SHORT;if(i===Vc)return o.UNSIGNED_SHORT;if(i===fg)return o.INT;if(i===xa)return o.UNSIGNED_INT;if(i===ha)return o.FLOAT;if(i===Ja)return o.HALF_FLOAT;if(i===s1)return o.ALPHA;if(i===o1)return o.RGB;if(i===Kr)return o.RGBA;if(i===$a)return o.DEPTH_COMPONENT;if(i===Eo)return o.DEPTH_STENCIL;if(i===l1)return o.RED;if(i===pg)return o.RED_INTEGER;if(i===Lo)return o.RG;if(i===mg)return o.RG_INTEGER;if(i===_g)return o.RGBA_INTEGER;if(i===Xh||i===Wh||i===Yh||i===qh)if(c===sn)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===Xh)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===Xh)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qh)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===t0||i===e0||i===n0||i===i0)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===t0)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===e0)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===n0)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===i0)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===r0||i===a0||i===s0||i===o0||i===l0||i===ld||i===u0)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===r0||i===a0)return c===sn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===s0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===o0)return l.COMPRESSED_R11_EAC;if(i===l0)return l.COMPRESSED_SIGNED_R11_EAC;if(i===ld)return l.COMPRESSED_RG11_EAC;if(i===u0)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===c0||i===f0||i===h0||i===d0||i===p0||i===m0||i===_0||i===g0||i===v0||i===x0||i===S0||i===y0||i===M0||i===E0)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===c0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===f0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===h0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===d0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===p0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===m0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===g0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===v0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===x0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===S0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===y0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===M0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===E0)return c===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===b0||i===T0||i===A0)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===b0)return c===sn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===T0)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===A0)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===R0||i===w0||i===ud||i===C0)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===R0)return l.COMPRESSED_RED_RGTC1_EXT;if(i===w0)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ud)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===C0)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kc?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:e}}const FU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new x1(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Sa({vertexShader:FU,fragmentShader:IU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jr(new Ad(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zU extends zo{constructor(t,e){super();const i=this;let a=null,l=1,c=null,f="local-floor",p=1,d=null,_=null,x=null,g=null,v=null,M=null;const E=typeof XRWebGLBinding<"u",S=new BU,y={},A=e.getContextAttributes();let D=null,C=null;const F=[],P=[],N=new Ke;let b=null;const L=new Ur;L.viewport=new Hn;const z=new Ur;z.viewport=new Hn;const G=[L,z],V=new Zw;let nt=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Tt=F[$];return Tt===void 0&&(Tt=new $m,F[$]=Tt),Tt.getTargetRaySpace()},this.getControllerGrip=function($){let Tt=F[$];return Tt===void 0&&(Tt=new $m,F[$]=Tt),Tt.getGripSpace()},this.getHand=function($){let Tt=F[$];return Tt===void 0&&(Tt=new $m,F[$]=Tt),Tt.getHandSpace()};function X($){const Tt=P.indexOf($.inputSource);if(Tt===-1)return;const gt=F[Tt];gt!==void 0&&(gt.update($.inputSource,$.frame,d||c),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",B),a.removeEventListener("inputsourceschange",H);for(let $=0;$<F.length;$++){const Tt=P[$];Tt!==null&&(P[$]=null,F[$].disconnect(Tt))}nt=null,rt=null,S.reset();for(const $ in y)delete y[$];t.setRenderTarget(D),v=null,g=null,x=null,a=null,C=null,Pt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,i.isPresenting===!0&&_e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,i.isPresenting===!0&&_e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return x===null&&E&&(x=new XRWebGLBinding(a,e)),x},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(D=t.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",B),a.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(N),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Xt=null,ae=null;A.depth&&(ae=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=A.stencil?Eo:$a,Xt=A.stencil?kc:xa);const Qt={colorFormat:e.RGBA8,depthFormat:ae,scaleFactor:l};x=this.getBinding(),g=x.createProjectionLayer(Qt),a.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new _a(g.textureWidth,g.textureHeight,{format:Kr,type:Or,depthTexture:new iu(g.textureWidth,g.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const gt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};v=new XRWebGLLayer(a,e,gt),a.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),C=new _a(v.framebufferWidth,v.framebufferHeight,{format:Kr,type:Or,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await a.requestReferenceSpace(f),Pt.setContext(a),Pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H($){for(let Tt=0;Tt<$.removed.length;Tt++){const gt=$.removed[Tt],Xt=P.indexOf(gt);Xt>=0&&(P[Xt]=null,F[Xt].disconnect(gt))}for(let Tt=0;Tt<$.added.length;Tt++){const gt=$.added[Tt];let Xt=P.indexOf(gt);if(Xt===-1){for(let Qt=0;Qt<F.length;Qt++)if(Qt>=P.length){P.push(gt),Xt=Qt;break}else if(P[Qt]===null){P[Qt]=gt,Xt=Qt;break}if(Xt===-1)break}const ae=F[Xt];ae&&ae.connect(gt)}}const K=new ot,ft=new ot;function R($,Tt,gt){K.setFromMatrixPosition(Tt.matrixWorld),ft.setFromMatrixPosition(gt.matrixWorld);const Xt=K.distanceTo(ft),ae=Tt.projectionMatrix.elements,Qt=gt.projectionMatrix.elements,ve=ae[14]/(ae[10]-1),Yt=ae[14]/(ae[10]+1),se=(ae[9]+1)/ae[5],ye=(ae[9]-1)/ae[5],oe=(ae[8]-1)/ae[0],at=(Qt[8]+1)/Qt[0],we=ve*oe,_n=ve*at,q=Xt/(-oe+at),me=q*-oe;if(Tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(me),$.translateZ(q),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ae[10]===-1)$.projectionMatrix.copy(Tt.projectionMatrix),$.projectionMatrixInverse.copy(Tt.projectionMatrixInverse);else{const he=ve+q,Ue=Yt+q,It=we-me,xe=_n+(Xt-me),I=se*Yt/Ue*he,w=ye*Yt/Ue*he;$.projectionMatrix.makePerspective(It,xe,I,w,he,Ue),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Z($,Tt){Tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let Tt=$.near,gt=$.far;S.texture!==null&&(S.depthNear>0&&(Tt=S.depthNear),S.depthFar>0&&(gt=S.depthFar)),V.near=z.near=L.near=Tt,V.far=z.far=L.far=gt,(nt!==V.near||rt!==V.far)&&(a.updateRenderState({depthNear:V.near,depthFar:V.far}),nt=V.near,rt=V.far),V.layers.mask=$.layers.mask|6,L.layers.mask=V.layers.mask&-5,z.layers.mask=V.layers.mask&-3;const Xt=$.parent,ae=V.cameras;Z(V,Xt);for(let Qt=0;Qt<ae.length;Qt++)Z(ae[Qt],Xt);ae.length===2?R(V,L,z):V.projectionMatrix.copy(L.projectionMatrix),dt($,V,Xt)};function dt($,Tt,gt){gt===null?$.matrix.copy(Tt.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(Tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Tt.projectionMatrix),$.projectionMatrixInverse.copy(Tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=U0*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(g===null&&v===null))return p},this.setFoveation=function($){p=$,g!==null&&(g.fixedFoveation=$),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=$)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(V)},this.getCameraTexture=function($){return y[$]};let St=null;function wt($,Tt){if(_=Tt.getViewerPose(d||c),M=Tt,_!==null){const gt=_.views;v!==null&&(t.setRenderTargetFramebuffer(C,v.framebuffer),t.setRenderTarget(C));let Xt=!1;gt.length!==V.cameras.length&&(V.cameras.length=0,Xt=!0);for(let Yt=0;Yt<gt.length;Yt++){const se=gt[Yt];let ye=null;if(v!==null)ye=v.getViewport(se);else{const at=x.getViewSubImage(g,se);ye=at.viewport,Yt===0&&(t.setRenderTargetTextures(C,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(C))}let oe=G[Yt];oe===void 0&&(oe=new Ur,oe.layers.enable(Yt),oe.viewport=new Hn,G[Yt]=oe),oe.matrix.fromArray(se.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(se.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ye.x,ye.y,ye.width,ye.height),Yt===0&&(V.matrix.copy(oe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Xt===!0&&V.cameras.push(oe)}const ae=a.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){x=i.getBinding();const Yt=x.getDepthInformation(gt[0]);Yt&&Yt.isValid&&Yt.texture&&S.init(Yt,a.renderState)}if(ae&&ae.includes("camera-access")&&E){t.state.unbindTexture(),x=i.getBinding();for(let Yt=0;Yt<gt.length;Yt++){const se=gt[Yt].camera;if(se){let ye=y[se];ye||(ye=new x1,y[se]=ye);const oe=x.getCameraImage(se);ye.sourceTexture=oe}}}}for(let gt=0;gt<F.length;gt++){const Xt=P[gt],ae=F[gt];Xt!==null&&ae!==void 0&&ae.update(Xt,Tt,d||c)}St&&St($,Tt),Tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Tt}),M=null}const Pt=new E1;Pt.setAnimationLoop(wt),this.setAnimationLoop=function($){St=$},this.dispose=function(){}}}const HU=new jn,D1=new Se;D1.set(-1,0,0,0,1,0,0,0,1);function GU(o,t){function e(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,S1(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,A,D,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),x(S,y)):y.isMeshPhongMaterial?(l(S,y),_(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),g(S,y),y.isMeshPhysicalMaterial&&v(S,y,C)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),E(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?p(S,y,A,D):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,e(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Zi&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,e(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Zi&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,e(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,e(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const A=t.get(y),D=A.envMap,C=A.envMapRotation;D&&(S.envMap.value=D,S.envMapRotation.value.setFromMatrix4(HU.makeRotationFromEuler(C)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(D1),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,A,D){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*A,S.scale.value=D*.5,y.map&&(S.map.value=y.map,e(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function _(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function x(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function v(S,y,A){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Zi&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const A=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function VU(o,t,e,i){let a={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,D){const C=D.program;i.uniformBlockBinding(A,C)}function d(A,D){let C=a[A.id];C===void 0&&(M(A),C=_(A),a[A.id]=C,A.addEventListener("dispose",S));const F=D.program;i.updateUBOMapping(A,F);const P=t.render.frame;l[A.id]!==P&&(g(A),l[A.id]=P)}function _(A){const D=x();A.__bindingPointIndex=D;const C=o.createBuffer(),F=A.__size,P=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,F,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,C),C}function x(){for(let A=0;A<f;A++)if(c.indexOf(A)===-1)return c.push(A),A;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const D=a[A.id],C=A.uniforms,F=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let P=0,N=C.length;P<N;P++){const b=Array.isArray(C[P])?C[P]:[C[P]];for(let L=0,z=b.length;L<z;L++){const G=b[L];if(v(G,P,L,F)===!0){const V=G.__offset,nt=Array.isArray(G.value)?G.value:[G.value];let rt=0;for(let X=0;X<nt.length;X++){const B=nt[X],H=E(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,V+rt,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):ArrayBuffer.isView(B)?G.__data.set(new B.constructor(B.buffer,B.byteOffset,G.__data.length)):(B.toArray(G.__data,rt),rt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,V,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(A,D,C,F){const P=A.value,N=D+"_"+C;if(F[N]===void 0)return typeof P=="number"||typeof P=="boolean"?F[N]=P:ArrayBuffer.isView(P)?F[N]=P.slice():F[N]=P.clone(),!0;{const b=F[N];if(typeof P=="number"||typeof P=="boolean"){if(b!==P)return F[N]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(b.equals(P)===!1)return b.copy(P),!0}}return!1}function M(A){const D=A.uniforms;let C=0;const F=16;for(let N=0,b=D.length;N<b;N++){const L=Array.isArray(D[N])?D[N]:[D[N]];for(let z=0,G=L.length;z<G;z++){const V=L[z],nt=Array.isArray(V.value)?V.value:[V.value];for(let rt=0,X=nt.length;rt<X;rt++){const B=nt[rt],H=E(B),K=C%F,ft=K%H.boundary,R=K+ft;C+=ft,R!==0&&F-R<H.storage&&(C+=F-R),V.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=C,C+=H.storage}}}const P=C%F;return P>0&&(C+=F-P),A.__size=C,A.__cache={},this}function E(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?_e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(D.boundary=16,D.storage=A.byteLength):_e("WebGLRenderer: Unsupported uniform value type.",A),D}function S(A){const D=A.target;D.removeEventListener("dispose",S);const C=c.indexOf(D.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function y(){for(const A in a)o.deleteBuffer(a[A]);c=[],a={},l={}}return{bind:p,update:d,dispose:y}}const kU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let sa=null;function XU(){return sa===null&&(sa=new Pw(kU,16,16,Lo,Ja),sa.name="DFG_LUT",sa.minFilter=Ti,sa.magFilter=Ti,sa.wrapS=Wa,sa.wrapT=Wa,sa.generateMipmaps=!1,sa.needsUpdate=!0),sa}class WU{constructor(t={}){const{canvas:e=hw(),context:i=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:v=Or}=t;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const E=v,S=new Set([_g,mg,pg]),y=new Set([Or,xa,Vc,kc,hg,dg]),A=new Uint32Array(4),D=new Int32Array(4),C=new ot;let F=null,P=null;const N=[],b=[];let L=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ma,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let G=!1,V=null;this._outputColorSpace=Dr;let nt=0,rt=0,X=null,B=-1,H=null;const K=new Hn,ft=new Hn;let R=null;const Z=new en(0);let dt=0,St=e.width,wt=e.height,Pt=1,$=null,Tt=null;const gt=new Hn(0,0,St,wt),Xt=new Hn(0,0,St,wt);let ae=!1;const Qt=new _1;let ve=!1,Yt=!1;const se=new jn,ye=new ot,oe=new Hn,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function _n(){return X===null?Pt:1}let q=i;function me(U,j){return e.getContext(U,j)}try{const U={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cg}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),q===null){const j="webgl2";if(q=me(j,U),q===null)throw me(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw Ye("WebGLRenderer: "+U.message),U}let he,Ue,It,xe,I,w,Q,ht,Et,Ot,At,pt,_t,Ft,Vt,Dt,Nt,Bt,le,de,W,Ct,mt;function Ht(){he=new X3(q),he.init(),W=new PU(q,he),Ue=new F3(q,he,t,W),It=new LU(q,he),Ue.reversedDepthBuffer&&g&&It.buffers.depth.setReversed(!0),xe=new q3(q),I=new xU,w=new OU(q,he,It,I,Ue,W,xe),Q=new k3(z),ht=new Qw(q),Ct=new O3(q,ht),Et=new W3(q,ht,xe,Ct),Ot=new Z3(q,Et,ht,Ct,xe),Bt=new j3(q,Ue,w),Vt=new I3(I),At=new vU(z,Q,he,Ue,Ct,Vt),pt=new GU(z,I),_t=new yU,Ft=new RU(he),Nt=new L3(z,Q,It,Ot,M,p),Dt=new NU(z,Ot,Ue),mt=new VU(q,xe,Ue,It),le=new P3(q,he,xe),de=new Y3(q,he,xe),xe.programs=At.programs,z.capabilities=Ue,z.extensions=he,z.properties=I,z.renderLists=_t,z.shadowMap=Dt,z.state=It,z.info=xe}Ht(),E!==Or&&(L=new Q3(E,e.width,e.height,a,l));const Ut=new zU(z,q);this.xr=Ut,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const U=he.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=he.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Pt},this.setPixelRatio=function(U){U!==void 0&&(Pt=U,this.setSize(St,wt,!1))},this.getSize=function(U){return U.set(St,wt)},this.setSize=function(U,j,lt=!0){if(Ut.isPresenting){_e("WebGLRenderer: Can't change size while VR device is presenting.");return}St=U,wt=j,e.width=Math.floor(U*Pt),e.height=Math.floor(j*Pt),lt===!0&&(e.style.width=U+"px",e.style.height=j+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,U,j)},this.getDrawingBufferSize=function(U){return U.set(St*Pt,wt*Pt).floor()},this.setDrawingBufferSize=function(U,j,lt){St=U,wt=j,Pt=lt,e.width=Math.floor(U*lt),e.height=Math.floor(j*lt),this.setViewport(0,0,U,j)},this.setEffects=function(U){if(E===Or){Ye("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let j=0;j<U.length;j++)if(U[j].isOutputPass===!0){_e("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(K)},this.getViewport=function(U){return U.copy(gt)},this.setViewport=function(U,j,lt,tt){U.isVector4?gt.set(U.x,U.y,U.z,U.w):gt.set(U,j,lt,tt),It.viewport(K.copy(gt).multiplyScalar(Pt).round())},this.getScissor=function(U){return U.copy(Xt)},this.setScissor=function(U,j,lt,tt){U.isVector4?Xt.set(U.x,U.y,U.z,U.w):Xt.set(U,j,lt,tt),It.scissor(ft.copy(Xt).multiplyScalar(Pt).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(U){It.setScissorTest(ae=U)},this.setOpaqueSort=function(U){$=U},this.setTransparentSort=function(U){Tt=U},this.getClearColor=function(U){return U.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(U=!0,j=!0,lt=!0){let tt=0;if(U){let et=!1;if(X!==null){const zt=X.texture.format;et=S.has(zt)}if(et){const zt=X.texture.type,Gt=y.has(zt),kt=Nt.getClearColor(),ee=Nt.getClearAlpha(),Zt=kt.r,ge=kt.g,Me=kt.b;Gt?(A[0]=Zt,A[1]=ge,A[2]=Me,A[3]=ee,q.clearBufferuiv(q.COLOR,0,A)):(D[0]=Zt,D[1]=ge,D[2]=Me,D[3]=ee,q.clearBufferiv(q.COLOR,0,D))}else tt|=q.COLOR_BUFFER_BIT}j&&(tt|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(tt|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&q.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),V=U},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),Nt.dispose(),_t.dispose(),Ft.dispose(),I.dispose(),Q.dispose(),Ot.dispose(),Ct.dispose(),mt.dispose(),At.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",be),Ut.removeEventListener("sessionend",fn),Qe.stop()};function bt(U){U.preventDefault(),Gy("WebGLRenderer: Context Lost."),G=!0}function Rt(){Gy("WebGLRenderer: Context Restored."),G=!1;const U=xe.autoReset,j=Dt.enabled,lt=Dt.autoUpdate,tt=Dt.needsUpdate,et=Dt.type;Ht(),xe.autoReset=U,Dt.enabled=j,Dt.autoUpdate=lt,Dt.needsUpdate=tt,Dt.type=et}function Lt(U){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function ne(U){const j=U.target;j.removeEventListener("dispose",ne),xt(j)}function xt(U){Jt(U),I.remove(U)}function Jt(U){const j=I.get(U).programs;j!==void 0&&(j.forEach(function(lt){At.releaseProgram(lt)}),U.isShaderMaterial&&At.releaseShaderCache(U))}this.renderBufferDirect=function(U,j,lt,tt,et,zt){j===null&&(j=at);const Gt=et.isMesh&&et.matrixWorld.determinant()<0,kt=xn(U,j,lt,tt,et);It.setMaterial(tt,Gt);let ee=lt.index,Zt=1;if(tt.wireframe===!0){if(ee=Et.getWireframeAttribute(lt),ee===void 0)return;Zt=2}const ge=lt.drawRange,Me=lt.attributes.position;let ie=ge.start*Zt,je=(ge.start+ge.count)*Zt;zt!==null&&(ie=Math.max(ie,zt.start*Zt),je=Math.min(je,(zt.start+zt.count)*Zt)),ee!==null?(ie=Math.max(ie,0),je=Math.min(je,ee.count)):Me!=null&&(ie=Math.max(ie,0),je=Math.min(je,Me.count));const gn=je-ie;if(gn<0||gn===1/0)return;Ct.setup(et,tt,kt,lt,ee);let Sn,Te=le;if(ee!==null&&(Sn=ht.get(ee),Te=de,Te.setIndex(Sn)),et.isMesh)tt.wireframe===!0?(It.setLineWidth(tt.wireframeLinewidth*_n()),Te.setMode(q.LINES)):Te.setMode(q.TRIANGLES);else if(et.isLine){let Vn=tt.linewidth;Vn===void 0&&(Vn=1),It.setLineWidth(Vn*_n()),et.isLineSegments?Te.setMode(q.LINES):et.isLineLoop?Te.setMode(q.LINE_LOOP):Te.setMode(q.LINE_STRIP)}else et.isPoints?Te.setMode(q.POINTS):et.isSprite&&Te.setMode(q.TRIANGLES);if(et.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Te.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Vn=et._multiDrawStarts,Kt=et._multiDrawCounts,ui=et._multiDrawCount,Ae=ee?ht.get(ee).bytesPerElement:1,Ri=I.get(tt).currentProgram.getUniforms();for(let Ji=0;Ji<ui;Ji++)Ri.setValue(q,"_gl_DrawID",Ji),Te.render(Vn[Ji]/Ae,Kt[Ji])}else if(et.isInstancedMesh)Te.renderInstances(ie,gn,et.count);else if(lt.isInstancedBufferGeometry){const Vn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Kt=Math.min(lt.instanceCount,Vn);Te.renderInstances(ie,gn,Kt)}else Te.render(ie,gn)};function jt(U,j,lt){U.transparent===!0&&U.side===ka&&U.forceSinglePass===!1?(U.side=Zi,U.needsUpdate=!0,Fe(U,j,lt),U.side=ks,U.needsUpdate=!0,Fe(U,j,lt),U.side=ka):Fe(U,j,lt)}this.compile=function(U,j,lt=null){lt===null&&(lt=U),P=Ft.get(lt),P.init(j),b.push(P),lt.traverseVisible(function(et){et.isLight&&et.layers.test(j.layers)&&(P.pushLight(et),et.castShadow&&P.pushShadow(et))}),U!==lt&&U.traverseVisible(function(et){et.isLight&&et.layers.test(j.layers)&&(P.pushLight(et),et.castShadow&&P.pushShadow(et))}),P.setupLights();const tt=new Set;return U.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const zt=et.material;if(zt)if(Array.isArray(zt))for(let Gt=0;Gt<zt.length;Gt++){const kt=zt[Gt];jt(kt,lt,et),tt.add(kt)}else jt(zt,lt,et),tt.add(zt)}),P=b.pop(),tt},this.compileAsync=function(U,j,lt=null){const tt=this.compile(U,j,lt);return new Promise(et=>{function zt(){if(tt.forEach(function(Gt){I.get(Gt).currentProgram.isReady()&&tt.delete(Gt)}),tt.size===0){et(U);return}setTimeout(zt,10)}he.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let ue=null;function Dn(U){ue&&ue(U)}function be(){Qe.stop()}function fn(){Qe.start()}const Qe=new E1;Qe.setAnimationLoop(Dn),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(U){ue=U,Ut.setAnimationLoop(U),U===null?Qe.stop():Qe.start()},Ut.addEventListener("sessionstart",be),Ut.addEventListener("sessionend",fn),this.render=function(U,j){if(j!==void 0&&j.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;V!==null&&V.renderStart(U,j);const lt=Ut.enabled===!0&&Ut.isPresenting===!0,tt=L!==null&&(X===null||lt)&&L.begin(z,X);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(j),j=Ut.getCamera()),U.isScene===!0&&U.onBeforeRender(z,U,j,X),P=Ft.get(U,b.length),P.init(j),P.state.textureUnits=w.getTextureUnits(),b.push(P),se.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Qt.setFromProjectionMatrix(se,da,j.reversedDepth),Yt=this.localClippingEnabled,ve=Vt.init(this.clippingPlanes,Yt),F=_t.get(U,N.length),F.init(),N.push(F),Ut.enabled===!0&&Ut.isPresenting===!0){const Gt=z.xr.getDepthSensingMesh();Gt!==null&&Je(Gt,j,-1/0,z.sortObjects)}Je(U,j,0,z.sortObjects),F.finish(),z.sortObjects===!0&&F.sort($,Tt),we=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,we&&Nt.addToRenderList(F,U),this.info.render.frame++,ve===!0&&Vt.beginShadows();const et=P.state.shadowsArray;if(Dt.render(et,U,j),ve===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&L.hasRenderPass())===!1){const Gt=F.opaque,kt=F.transmissive;if(P.setupLights(),j.isArrayCamera){const ee=j.cameras;if(kt.length>0)for(let Zt=0,ge=ee.length;Zt<ge;Zt++){const Me=ee[Zt];Pe(Gt,kt,U,Me)}we&&Nt.render(U);for(let Zt=0,ge=ee.length;Zt<ge;Zt++){const Me=ee[Zt];ke(F,U,Me,Me.viewport)}}else kt.length>0&&Pe(Gt,kt,U,j),we&&Nt.render(U),ke(F,U,j)}X!==null&&rt===0&&(w.updateMultisampleRenderTarget(X),w.updateRenderTargetMipmap(X)),tt&&L.end(z),U.isScene===!0&&U.onAfterRender(z,U,j),Ct.resetDefaultState(),B=-1,H=null,b.pop(),b.length>0?(P=b[b.length-1],w.setTextureUnits(P.state.textureUnits),ve===!0&&Vt.setGlobalState(z.clippingPlanes,P.state.camera)):P=null,N.pop(),N.length>0?F=N[N.length-1]:F=null,V!==null&&V.renderEnd()};function Je(U,j,lt,tt){if(U.visible===!1)return;if(U.layers.test(j.layers)){if(U.isGroup)lt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(j);else if(U.isLightProbeGrid)P.pushLightProbeGrid(U);else if(U.isLight)P.pushLight(U),U.castShadow&&P.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Qt.intersectsSprite(U)){tt&&oe.setFromMatrixPosition(U.matrixWorld).applyMatrix4(se);const Gt=Ot.update(U),kt=U.material;kt.visible&&F.push(U,Gt,kt,lt,oe.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Qt.intersectsObject(U))){const Gt=Ot.update(U),kt=U.material;if(tt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),oe.copy(U.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),oe.copy(Gt.boundingSphere.center)),oe.applyMatrix4(U.matrixWorld).applyMatrix4(se)),Array.isArray(kt)){const ee=Gt.groups;for(let Zt=0,ge=ee.length;Zt<ge;Zt++){const Me=ee[Zt],ie=kt[Me.materialIndex];ie&&ie.visible&&F.push(U,Gt,ie,lt,oe.z,Me)}}else kt.visible&&F.push(U,Gt,kt,lt,oe.z,null)}}const zt=U.children;for(let Gt=0,kt=zt.length;Gt<kt;Gt++)Je(zt[Gt],j,lt,tt)}function ke(U,j,lt,tt){const{opaque:et,transmissive:zt,transparent:Gt}=U;P.setupLightsView(lt),ve===!0&&Vt.setGlobalState(z.clippingPlanes,lt),tt&&It.viewport(K.copy(tt)),et.length>0&&Un(et,j,lt),zt.length>0&&Un(zt,j,lt),Gt.length>0&&Un(Gt,j,lt),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Pe(U,j,lt,tt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[tt.id]===void 0){const ie=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[tt.id]=new _a(1,1,{generateMipmaps:!0,type:ie?Ja:Or,minFilter:Mo,samples:Math.max(4,Ue.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}const zt=P.state.transmissionRenderTarget[tt.id],Gt=tt.viewport||K;zt.setSize(Gt.z*z.transmissionResolutionScale,Gt.w*z.transmissionResolutionScale);const kt=z.getRenderTarget(),ee=z.getActiveCubeFace(),Zt=z.getActiveMipmapLevel();z.setRenderTarget(zt),z.getClearColor(Z),dt=z.getClearAlpha(),dt<1&&z.setClearColor(16777215,.5),z.clear(),we&&Nt.render(lt);const ge=z.toneMapping;z.toneMapping=ma;const Me=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),P.setupLightsView(tt),ve===!0&&Vt.setGlobalState(z.clippingPlanes,tt),Un(U,lt,tt),w.updateMultisampleRenderTarget(zt),w.updateRenderTargetMipmap(zt),he.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let je=0,gn=j.length;je<gn;je++){const Sn=j[je],{object:Te,geometry:Vn,material:Kt,group:ui}=Sn;if(Kt.side===ka&&Te.layers.test(tt.layers)){const Ae=Kt.side;Kt.side=Zi,Kt.needsUpdate=!0,We(Te,lt,tt,Vn,Kt,ui),Kt.side=Ae,Kt.needsUpdate=!0,ie=!0}}ie===!0&&(w.updateMultisampleRenderTarget(zt),w.updateRenderTargetMipmap(zt))}z.setRenderTarget(kt,ee,Zt),z.setClearColor(Z,dt),Me!==void 0&&(tt.viewport=Me),z.toneMapping=ge}function Un(U,j,lt){const tt=j.isScene===!0?j.overrideMaterial:null;for(let et=0,zt=U.length;et<zt;et++){const Gt=U[et],{object:kt,geometry:ee,group:Zt}=Gt;let ge=Gt.material;ge.allowOverride===!0&&tt!==null&&(ge=tt),kt.layers.test(lt.layers)&&We(kt,j,lt,ee,ge,Zt)}}function We(U,j,lt,tt,et,zt){U.onBeforeRender(z,j,lt,tt,et,zt),U.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),et.onBeforeRender(z,j,lt,tt,U,zt),et.transparent===!0&&et.side===ka&&et.forceSinglePass===!1?(et.side=Zi,et.needsUpdate=!0,z.renderBufferDirect(lt,j,tt,et,U,zt),et.side=ks,et.needsUpdate=!0,z.renderBufferDirect(lt,j,tt,et,U,zt),et.side=ka):z.renderBufferDirect(lt,j,tt,et,U,zt),U.onAfterRender(z,j,lt,tt,et,zt)}function Fe(U,j,lt){j.isScene!==!0&&(j=at);const tt=I.get(U),et=P.state.lights,zt=P.state.shadowsArray,Gt=et.state.version,kt=At.getParameters(U,et.state,zt,j,lt,P.state.lightProbeGridArray),ee=At.getProgramCacheKey(kt);let Zt=tt.programs;tt.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?j.environment:null,tt.fog=j.fog;const ge=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;tt.envMap=Q.get(U.envMap||tt.environment,ge),tt.envMapRotation=tt.environment!==null&&U.envMap===null?j.environmentRotation:U.envMapRotation,Zt===void 0&&(U.addEventListener("dispose",ne),Zt=new Map,tt.programs=Zt);let Me=Zt.get(ee);if(Me!==void 0){if(tt.currentProgram===Me&&tt.lightsStateVersion===Gt)return bn(U,kt),Me}else kt.uniforms=At.getUniforms(U),V!==null&&U.isNodeMaterial&&V.build(U,lt,kt),U.onBeforeCompile(kt,z),Me=At.acquireProgram(kt,ee),Zt.set(ee,Me),tt.uniforms=kt.uniforms;const ie=tt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(ie.clippingPlanes=Vt.uniform),bn(U,kt),tt.needsLights=ya(U),tt.lightsStateVersion=Gt,tt.needsLights&&(ie.ambientLightColor.value=et.state.ambient,ie.lightProbe.value=et.state.probe,ie.directionalLights.value=et.state.directional,ie.directionalLightShadows.value=et.state.directionalShadow,ie.spotLights.value=et.state.spot,ie.spotLightShadows.value=et.state.spotShadow,ie.rectAreaLights.value=et.state.rectArea,ie.ltc_1.value=et.state.rectAreaLTC1,ie.ltc_2.value=et.state.rectAreaLTC2,ie.pointLights.value=et.state.point,ie.pointLightShadows.value=et.state.pointShadow,ie.hemisphereLights.value=et.state.hemi,ie.directionalShadowMatrix.value=et.state.directionalShadowMatrix,ie.spotLightMatrix.value=et.state.spotLightMatrix,ie.spotLightMap.value=et.state.spotLightMap,ie.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.lightProbeGrid=P.state.lightProbeGridArray.length>0,tt.currentProgram=Me,tt.uniformsList=null,Me}function _i(U){if(U.uniformsList===null){const j=U.currentProgram.getUniforms();U.uniformsList=jh.seqWithValue(j.seq,U.uniforms)}return U.uniformsList}function bn(U,j){const lt=I.get(U);lt.outputColorSpace=j.outputColorSpace,lt.batching=j.batching,lt.batchingColor=j.batchingColor,lt.instancing=j.instancing,lt.instancingColor=j.instancingColor,lt.instancingMorph=j.instancingMorph,lt.skinning=j.skinning,lt.morphTargets=j.morphTargets,lt.morphNormals=j.morphNormals,lt.morphColors=j.morphColors,lt.morphTargetsCount=j.morphTargetsCount,lt.numClippingPlanes=j.numClippingPlanes,lt.numIntersection=j.numClipIntersection,lt.vertexAlphas=j.vertexAlphas,lt.vertexTangents=j.vertexTangents,lt.toneMapping=j.toneMapping}function hn(U,j){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;C.setFromMatrixPosition(j.matrixWorld);for(let lt=0,tt=U.length;lt<tt;lt++){const et=U[lt];if(et.texture!==null&&et.boundingBox.containsPoint(C))return et}return null}function xn(U,j,lt,tt,et){j.isScene!==!0&&(j=at),w.resetTextureUnits();const zt=j.fog,Gt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?j.environment:null,kt=X===null?z.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:He.workingColorSpace,ee=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Zt=Q.get(tt.envMap||Gt,ee),ge=tt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Me=!!lt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),ie=!!lt.morphAttributes.position,je=!!lt.morphAttributes.normal,gn=!!lt.morphAttributes.color;let Sn=ma;tt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Sn=z.toneMapping);const Te=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Vn=Te!==void 0?Te.length:0,Kt=I.get(tt),ui=P.state.lights;if(ve===!0&&(Yt===!0||U!==H)){const on=U===H&&tt.id===B;Vt.setState(tt,U,on)}let Ae=!1;tt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==ui.state.version||Kt.outputColorSpace!==kt||et.isBatchedMesh&&Kt.batching===!1||!et.isBatchedMesh&&Kt.batching===!0||et.isBatchedMesh&&Kt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&Kt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&Kt.instancing===!1||!et.isInstancedMesh&&Kt.instancing===!0||et.isSkinnedMesh&&Kt.skinning===!1||!et.isSkinnedMesh&&Kt.skinning===!0||et.isInstancedMesh&&Kt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Kt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Kt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Kt.instancingMorph===!1&&et.morphTexture!==null||Kt.envMap!==Zt||tt.fog===!0&&Kt.fog!==zt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Vt.numPlanes||Kt.numIntersection!==Vt.numIntersection)||Kt.vertexAlphas!==ge||Kt.vertexTangents!==Me||Kt.morphTargets!==ie||Kt.morphNormals!==je||Kt.morphColors!==gn||Kt.toneMapping!==Sn||Kt.morphTargetsCount!==Vn||!!Kt.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Ae=!0):(Ae=!0,Kt.__version=tt.version);let Ri=Kt.currentProgram;Ae===!0&&(Ri=Fe(tt,j,et),V&&tt.isNodeMaterial&&V.onUpdateProgram(tt,Ri,Kt));let Ji=!1,wi=!1,ts=!1;const $e=Ri.getUniforms(),yn=Kt.uniforms;if(It.useProgram(Ri.program)&&(Ji=!0,wi=!0,ts=!0),tt.id!==B&&(B=tt.id,wi=!0),Kt.needsLights){const on=hn(P.state.lightProbeGridArray,et);Kt.lightProbeGrid!==on&&(Kt.lightProbeGrid=on,wi=!0)}if(Ji||H!==U){It.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),$e.setValue(q,"projectionMatrix",U.projectionMatrix),$e.setValue(q,"viewMatrix",U.matrixWorldInverse);const $r=$e.map.cameraPosition;$r!==void 0&&$r.setValue(q,ye.setFromMatrixPosition(U.matrixWorld)),Ue.logarithmicDepthBuffer&&$e.setValue(q,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&$e.setValue(q,"isOrthographic",U.isOrthographicCamera===!0),H!==U&&(H=U,wi=!0,ts=!0)}if(Kt.needsLights&&(ui.state.directionalShadowMap.length>0&&$e.setValue(q,"directionalShadowMap",ui.state.directionalShadowMap,w),ui.state.spotShadowMap.length>0&&$e.setValue(q,"spotShadowMap",ui.state.spotShadowMap,w),ui.state.pointShadowMap.length>0&&$e.setValue(q,"pointShadowMap",ui.state.pointShadowMap,w)),et.isSkinnedMesh){$e.setOptional(q,et,"bindMatrix"),$e.setOptional(q,et,"bindMatrixInverse");const on=et.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),$e.setValue(q,"boneTexture",on.boneTexture,w))}et.isBatchedMesh&&($e.setOptional(q,et,"batchingTexture"),$e.setValue(q,"batchingTexture",et._matricesTexture,w),$e.setOptional(q,et,"batchingIdTexture"),$e.setValue(q,"batchingIdTexture",et._indirectTexture,w),$e.setOptional(q,et,"batchingColorTexture"),et._colorsTexture!==null&&$e.setValue(q,"batchingColorTexture",et._colorsTexture,w));const Sr=lt.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&Bt.update(et,lt,Ri),(wi||Kt.receiveShadow!==et.receiveShadow)&&(Kt.receiveShadow=et.receiveShadow,$e.setValue(q,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&j.environment!==null&&(yn.envMapIntensity.value=j.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=XU()),wi){if($e.setValue(q,"toneMappingExposure",z.toneMappingExposure),Kt.needsLights&&Hr(yn,ts),zt&&tt.fog===!0&&pt.refreshFogUniforms(yn,zt),pt.refreshMaterialUniforms(yn,tt,Pt,wt,P.state.transmissionRenderTarget[U.id]),Kt.needsLights&&Kt.lightProbeGrid){const on=Kt.lightProbeGrid;yn.probesSH.value=on.texture,yn.probesMin.value.copy(on.boundingBox.min),yn.probesMax.value.copy(on.boundingBox.max),yn.probesResolution.value.copy(on.resolution)}jh.upload(q,_i(Kt),yn,w)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(jh.upload(q,_i(Kt),yn,w),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&$e.setValue(q,"center",et.center),$e.setValue(q,"modelViewMatrix",et.modelViewMatrix),$e.setValue(q,"normalMatrix",et.normalMatrix),$e.setValue(q,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){const on=tt.uniformsGroups;for(let $r=0,Gr=on.length;$r<Gr;$r++){const Ho=on[$r];mt.update(Ho,Ri),mt.bind(Ho,Ri)}}return Ri}function Hr(U,j){U.ambientLightColor.needsUpdate=j,U.lightProbe.needsUpdate=j,U.directionalLights.needsUpdate=j,U.directionalLightShadows.needsUpdate=j,U.pointLights.needsUpdate=j,U.pointLightShadows.needsUpdate=j,U.spotLights.needsUpdate=j,U.spotLightShadows.needsUpdate=j,U.rectAreaLights.needsUpdate=j,U.hemisphereLights.needsUpdate=j}function ya(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(U,j,lt){const tt=I.get(U);tt.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),I.get(U.texture).__webglTexture=j,I.get(U.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:lt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,j){const lt=I.get(U);lt.__webglFramebuffer=j,lt.__useDefaultFramebuffer=j===void 0};const Fn=q.createFramebuffer();this.setRenderTarget=function(U,j=0,lt=0){X=U,nt=j,rt=lt;let tt=null,et=!1,zt=!1;if(U){const kt=I.get(U);if(kt.__useDefaultFramebuffer!==void 0){It.bindFramebuffer(q.FRAMEBUFFER,kt.__webglFramebuffer),K.copy(U.viewport),ft.copy(U.scissor),R=U.scissorTest,It.viewport(K),It.scissor(ft),It.setScissorTest(R),B=-1;return}else if(kt.__webglFramebuffer===void 0)w.setupRenderTarget(U);else if(kt.__hasExternalTextures)w.rebindTextures(U,I.get(U.texture).__webglTexture,I.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const ge=U.depthTexture;if(kt.__boundDepthTexture!==ge){if(ge!==null&&I.has(ge)&&(U.width!==ge.image.width||U.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(U)}}const ee=U.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(zt=!0);const Zt=I.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Zt[j])?tt=Zt[j][lt]:tt=Zt[j],et=!0):U.samples>0&&w.useMultisampledRTT(U)===!1?tt=I.get(U).__webglMultisampledFramebuffer:Array.isArray(Zt)?tt=Zt[lt]:tt=Zt,K.copy(U.viewport),ft.copy(U.scissor),R=U.scissorTest}else K.copy(gt).multiplyScalar(Pt).floor(),ft.copy(Xt).multiplyScalar(Pt).floor(),R=ae;if(lt!==0&&(tt=Fn),It.bindFramebuffer(q.FRAMEBUFFER,tt)&&It.drawBuffers(U,tt),It.viewport(K),It.scissor(ft),It.setScissorTest(R),et){const kt=I.get(U.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,kt.__webglTexture,lt)}else if(zt){const kt=j;for(let ee=0;ee<U.textures.length;ee++){const Zt=I.get(U.textures[ee]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+ee,Zt.__webglTexture,lt,kt)}}else if(U!==null&&lt!==0){const kt=I.get(U.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,kt.__webglTexture,lt)}B=-1},this.readRenderTargetPixels=function(U,j,lt,tt,et,zt,Gt,kt=0){if(!(U&&U.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=I.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Gt!==void 0&&(ee=ee[Gt]),ee){It.bindFramebuffer(q.FRAMEBUFFER,ee);try{const Zt=U.textures[kt],ge=Zt.format,Me=Zt.type;if(U.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+kt),!Ue.textureFormatReadable(ge)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Me)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=U.width-tt&&lt>=0&&lt<=U.height-et&&q.readPixels(j,lt,tt,et,W.convert(ge),W.convert(Me),zt)}finally{const Zt=X!==null?I.get(X).__webglFramebuffer:null;It.bindFramebuffer(q.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(U,j,lt,tt,et,zt,Gt,kt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=I.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Gt!==void 0&&(ee=ee[Gt]),ee)if(j>=0&&j<=U.width-tt&&lt>=0&&lt<=U.height-et){It.bindFramebuffer(q.FRAMEBUFFER,ee);const Zt=U.textures[kt],ge=Zt.format,Me=Zt.type;if(U.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+kt),!Ue.textureFormatReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,ie),q.bufferData(q.PIXEL_PACK_BUFFER,zt.byteLength,q.STREAM_READ),q.readPixels(j,lt,tt,et,W.convert(ge),W.convert(Me),0);const je=X!==null?I.get(X).__webglFramebuffer:null;It.bindFramebuffer(q.FRAMEBUFFER,je);const gn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await dw(q,gn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,ie),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,zt),q.deleteBuffer(ie),q.deleteSync(gn),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,j=null,lt=0){const tt=Math.pow(2,-lt),et=Math.floor(U.image.width*tt),zt=Math.floor(U.image.height*tt),Gt=j!==null?j.x:0,kt=j!==null?j.y:0;w.setTexture2D(U,0),q.copyTexSubImage2D(q.TEXTURE_2D,lt,0,0,Gt,kt,et,zt),It.unbindTexture()};const Tn=q.createFramebuffer(),li=q.createFramebuffer();this.copyTextureToTexture=function(U,j,lt=null,tt=null,et=0,zt=0){let Gt,kt,ee,Zt,ge,Me,ie,je,gn;const Sn=U.isCompressedTexture?U.mipmaps[zt]:U.image;if(lt!==null)Gt=lt.max.x-lt.min.x,kt=lt.max.y-lt.min.y,ee=lt.isBox3?lt.max.z-lt.min.z:1,Zt=lt.min.x,ge=lt.min.y,Me=lt.isBox3?lt.min.z:0;else{const yn=Math.pow(2,-et);Gt=Math.floor(Sn.width*yn),kt=Math.floor(Sn.height*yn),U.isDataArrayTexture?ee=Sn.depth:U.isData3DTexture?ee=Math.floor(Sn.depth*yn):ee=1,Zt=0,ge=0,Me=0}tt!==null?(ie=tt.x,je=tt.y,gn=tt.z):(ie=0,je=0,gn=0);const Te=W.convert(j.format),Vn=W.convert(j.type);let Kt;j.isData3DTexture?(w.setTexture3D(j,0),Kt=q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(w.setTexture2DArray(j,0),Kt=q.TEXTURE_2D_ARRAY):(w.setTexture2D(j,0),Kt=q.TEXTURE_2D),It.activeTexture(q.TEXTURE0),It.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),It.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),It.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);const ui=It.getParameter(q.UNPACK_ROW_LENGTH),Ae=It.getParameter(q.UNPACK_IMAGE_HEIGHT),Ri=It.getParameter(q.UNPACK_SKIP_PIXELS),Ji=It.getParameter(q.UNPACK_SKIP_ROWS),wi=It.getParameter(q.UNPACK_SKIP_IMAGES);It.pixelStorei(q.UNPACK_ROW_LENGTH,Sn.width),It.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Sn.height),It.pixelStorei(q.UNPACK_SKIP_PIXELS,Zt),It.pixelStorei(q.UNPACK_SKIP_ROWS,ge),It.pixelStorei(q.UNPACK_SKIP_IMAGES,Me);const ts=U.isDataArrayTexture||U.isData3DTexture,$e=j.isDataArrayTexture||j.isData3DTexture;if(U.isDepthTexture){const yn=I.get(U),Sr=I.get(j),on=I.get(yn.__renderTarget),$r=I.get(Sr.__renderTarget);It.bindFramebuffer(q.READ_FRAMEBUFFER,on.__webglFramebuffer),It.bindFramebuffer(q.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let Gr=0;Gr<ee;Gr++)ts&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,I.get(U).__webglTexture,et,Me+Gr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,I.get(j).__webglTexture,zt,gn+Gr)),q.blitFramebuffer(Zt,ge,Gt,kt,ie,je,Gt,kt,q.DEPTH_BUFFER_BIT,q.NEAREST);It.bindFramebuffer(q.READ_FRAMEBUFFER,null),It.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(et!==0||U.isRenderTargetTexture||I.has(U)){const yn=I.get(U),Sr=I.get(j);It.bindFramebuffer(q.READ_FRAMEBUFFER,Tn),It.bindFramebuffer(q.DRAW_FRAMEBUFFER,li);for(let on=0;on<ee;on++)ts?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,yn.__webglTexture,et,Me+on):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,yn.__webglTexture,et),$e?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Sr.__webglTexture,zt,gn+on):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Sr.__webglTexture,zt),et!==0?q.blitFramebuffer(Zt,ge,Gt,kt,ie,je,Gt,kt,q.COLOR_BUFFER_BIT,q.NEAREST):$e?q.copyTexSubImage3D(Kt,zt,ie,je,gn+on,Zt,ge,Gt,kt):q.copyTexSubImage2D(Kt,zt,ie,je,Zt,ge,Gt,kt);It.bindFramebuffer(q.READ_FRAMEBUFFER,null),It.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else $e?U.isDataTexture||U.isData3DTexture?q.texSubImage3D(Kt,zt,ie,je,gn,Gt,kt,ee,Te,Vn,Sn.data):j.isCompressedArrayTexture?q.compressedTexSubImage3D(Kt,zt,ie,je,gn,Gt,kt,ee,Te,Sn.data):q.texSubImage3D(Kt,zt,ie,je,gn,Gt,kt,ee,Te,Vn,Sn):U.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,zt,ie,je,Gt,kt,Te,Vn,Sn.data):U.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,zt,ie,je,Sn.width,Sn.height,Te,Sn.data):q.texSubImage2D(q.TEXTURE_2D,zt,ie,je,Gt,kt,Te,Vn,Sn);It.pixelStorei(q.UNPACK_ROW_LENGTH,ui),It.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ae),It.pixelStorei(q.UNPACK_SKIP_PIXELS,Ri),It.pixelStorei(q.UNPACK_SKIP_ROWS,Ji),It.pixelStorei(q.UNPACK_SKIP_IMAGES,wi),zt===0&&j.generateMipmaps&&q.generateMipmap(Kt),It.unbindTexture()},this.initRenderTarget=function(U){I.get(U).__webglFramebuffer===void 0&&w.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?w.setTextureCube(U,0):U.isData3DTexture?w.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?w.setTexture2DArray(U,0):w.setTexture2D(U,0),It.unbindTexture()},this.resetState=function(){nt=0,rt=0,X=null,It.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=He._getDrawingBufferColorSpace(t),e.unpackColorSpace=He._getUnpackColorSpace()}}function YU(o,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,i.key,i)}}function qU(o,t,e){return t&&YU(o.prototype,t),o}var pi,Zh,dr,Ps,Fs,Yl,U1,go,ql,N1,Ya,jr,L1,O1=function(){return pi||typeof window<"u"&&(pi=window.gsap)&&pi.registerPlugin&&pi},P1=1,Hl=[],Oe=[],ga=[],Tc=Date.now,P0=function(t,e){return e},jU=function(){var t=ql.core,e=t.bridge||{},i=t._scrollers,a=t._proxies;i.push.apply(i,Oe),a.push.apply(a,ga),Oe=i,ga=a,P0=function(c,f){return e[c](f)}},zs=function(t,e){return~ga.indexOf(t)&&ga[ga.indexOf(t)+1][e]},Ac=function(t){return!!~N1.indexOf(t)},Ui=function(t,e,i,a,l){return t.addEventListener(e,i,{passive:a!==!1,capture:!!l})},Di=function(t,e,i,a){return t.removeEventListener(e,i,!!a)},wh="scrollLeft",Ch="scrollTop",F0=function(){return Ya&&Ya.isPressed||Oe.cache++},_d=function(t,e){var i=function a(l){if(l||l===0){P1&&(dr.history.scrollRestoration="manual");var c=Ya&&Ya.isPressed;l=a.v=Math.round(l)||(Ya&&Ya.iOS?1:0),t(l),a.cacheID=Oe.cache,c&&P0("ss",l)}else(e||Oe.cache!==a.cacheID||P0("ref"))&&(a.cacheID=Oe.cache,a.v=t());return a.v+a.offset};return i.offset=0,t&&i},Fi={s:wh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_d(function(o){return arguments.length?dr.scrollTo(o,Jn.sc()):dr.pageXOffset||Ps[wh]||Fs[wh]||Yl[wh]||0})},Jn={s:Ch,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fi,sc:_d(function(o){return arguments.length?dr.scrollTo(Fi.sc(),o):dr.pageYOffset||Ps[Ch]||Fs[Ch]||Yl[Ch]||0})},ki=function(t,e){return(e&&e._ctx&&e._ctx.selector||pi.utils.toArray)(t)[0]||(typeof t=="string"&&pi.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ZU=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},Xs=function(t,e){var i=e.s,a=e.sc;Ac(t)&&(t=Ps.scrollingElement||Fs);var l=Oe.indexOf(t),c=a===Jn.sc?1:2;!~l&&(l=Oe.push(t)-1),Oe[l+c]||Ui(t,"scroll",F0);var f=Oe[l+c],p=f||(Oe[l+c]=_d(zs(t,i),!0)||(Ac(t)?a:_d(function(d){return arguments.length?t[i]=d:t[i]})));return p.target=t,f||(p.smooth=pi.getProperty(t,"scrollBehavior")==="smooth"),p},I0=function(t,e,i){var a=t,l=t,c=Tc(),f=c,p=e||50,d=Math.max(500,p*3),_=function(M,E){var S=Tc();E||S-c>p?(l=a,a=M,f=c,c=S):i?a+=M:a=l+(M-l)/(S-f)*(c-f)},x=function(){l=a=i?0:a,f=c=0},g=function(M){var E=f,S=l,y=Tc();return(M||M===0)&&M!==a&&_(M),c===f||y-f>d?0:(a+(i?S:-S))/((i?y:c)-E)*1e3};return{update:_,reset:x,getVelocity:g}},cc=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},NM=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},F1=function(){ql=pi.core.globals().ScrollTrigger,ql&&ql.core&&jU()},I1=function(t){return pi=t||O1(),!Zh&&pi&&typeof document<"u"&&document.body&&(dr=window,Ps=document,Fs=Ps.documentElement,Yl=Ps.body,N1=[dr,Ps,Fs,Yl],pi.utils.clamp,L1=pi.core.context||function(){},go="onpointerenter"in Yl?"pointer":"mouse",U1=Gn.isTouch=dr.matchMedia&&dr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in dr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,jr=Gn.eventTypes=("ontouchstart"in Fs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Fs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return P1=0},500),Zh=1),ql||F1(),Zh};Fi.op=Jn;Oe.cache=0;var Gn=(function(){function o(e){this.init(e)}var t=o.prototype;return t.init=function(i){Zh||I1(pi)||console.warn("Please gsap.registerPlugin(Observer)"),ql||F1();var a=i.tolerance,l=i.dragMinimum,c=i.type,f=i.target,p=i.lineHeight,d=i.debounce,_=i.preventDefault,x=i.onStop,g=i.onStopDelay,v=i.ignore,M=i.wheelSpeed,E=i.event,S=i.onDragStart,y=i.onDragEnd,A=i.onDrag,D=i.onPress,C=i.onRelease,F=i.onRight,P=i.onLeft,N=i.onUp,b=i.onDown,L=i.onChangeX,z=i.onChangeY,G=i.onChange,V=i.onToggleX,nt=i.onToggleY,rt=i.onHover,X=i.onHoverEnd,B=i.onMove,H=i.ignoreCheck,K=i.isNormalizer,ft=i.onGestureStart,R=i.onGestureEnd,Z=i.onWheel,dt=i.onEnable,St=i.onDisable,wt=i.onClick,Pt=i.scrollSpeed,$=i.capture,Tt=i.allowClicks,gt=i.lockAxis,Xt=i.onLockAxis;this.target=f=ki(f)||Fs,this.vars=i,v&&(v=pi.utils.toArray(v)),a=a||1e-9,l=l||0,M=M||1,Pt=Pt||1,c=c||"wheel,touch,pointer",d=d!==!1,p||(p=parseFloat(dr.getComputedStyle(Yl).lineHeight)||22);var ae,Qt,ve,Yt,se,ye,oe,at=this,we=0,_n=0,q=i.passive||!_&&i.passive!==!1,me=Xs(f,Fi),he=Xs(f,Jn),Ue=me(),It=he(),xe=~c.indexOf("touch")&&!~c.indexOf("pointer")&&jr[0]==="pointerdown",I=Ac(f),w=f.ownerDocument||Ps,Q=[0,0,0],ht=[0,0,0],Et=0,Ot=function(){return Et=Tc()},At=function(Lt,ne){return(at.event=Lt)&&v&&ZU(Lt.target,v)||ne&&xe&&Lt.pointerType!=="touch"||H&&H(Lt,ne)},pt=function(){at._vx.reset(),at._vy.reset(),Qt.pause(),x&&x(at)},_t=function(){var Lt=at.deltaX=NM(Q),ne=at.deltaY=NM(ht),xt=Math.abs(Lt)>=a,Jt=Math.abs(ne)>=a;G&&(xt||Jt)&&G(at,Lt,ne,Q,ht),xt&&(F&&at.deltaX>0&&F(at),P&&at.deltaX<0&&P(at),L&&L(at),V&&at.deltaX<0!=we<0&&V(at),we=at.deltaX,Q[0]=Q[1]=Q[2]=0),Jt&&(b&&at.deltaY>0&&b(at),N&&at.deltaY<0&&N(at),z&&z(at),nt&&at.deltaY<0!=_n<0&&nt(at),_n=at.deltaY,ht[0]=ht[1]=ht[2]=0),(Yt||ve)&&(B&&B(at),ve&&(S&&ve===1&&S(at),A&&A(at),ve=0),Yt=!1),ye&&!(ye=!1)&&Xt&&Xt(at),se&&(Z(at),se=!1),ae=0},Ft=function(Lt,ne,xt){Q[xt]+=Lt,ht[xt]+=ne,at._vx.update(Lt),at._vy.update(ne),d?ae||(ae=requestAnimationFrame(_t)):_t()},Vt=function(Lt,ne){gt&&!oe&&(at.axis=oe=Math.abs(Lt)>Math.abs(ne)?"x":"y",ye=!0),oe!=="y"&&(Q[2]+=Lt,at._vx.update(Lt,!0)),oe!=="x"&&(ht[2]+=ne,at._vy.update(ne,!0)),d?ae||(ae=requestAnimationFrame(_t)):_t()},Dt=function(Lt){if(!At(Lt,1)){Lt=cc(Lt,_);var ne=Lt.clientX,xt=Lt.clientY,Jt=ne-at.x,jt=xt-at.y,ue=at.isDragging;at.x=ne,at.y=xt,(ue||(Jt||jt)&&(Math.abs(at.startX-ne)>=l||Math.abs(at.startY-xt)>=l))&&(ve||(ve=ue?2:1),ue||(at.isDragging=!0),Vt(Jt,jt))}},Nt=at.onPress=function(Rt){At(Rt,1)||Rt&&Rt.button||(at.axis=oe=null,Qt.pause(),at.isPressed=!0,Rt=cc(Rt),we=_n=0,at.startX=at.x=Rt.clientX,at.startY=at.y=Rt.clientY,at._vx.reset(),at._vy.reset(),Ui(K?f:w,jr[1],Dt,q,!0),at.deltaX=at.deltaY=0,D&&D(at))},Bt=at.onRelease=function(Rt){if(!At(Rt,1)){Di(K?f:w,jr[1],Dt,!0);var Lt=!isNaN(at.y-at.startY),ne=at.isDragging,xt=ne&&(Math.abs(at.x-at.startX)>3||Math.abs(at.y-at.startY)>3),Jt=cc(Rt);!xt&&Lt&&(at._vx.reset(),at._vy.reset(),_&&Tt&&pi.delayedCall(.08,function(){if(Tc()-Et>300&&!Rt.defaultPrevented){if(Rt.target.click)Rt.target.click();else if(w.createEvent){var jt=w.createEvent("MouseEvents");jt.initMouseEvent("click",!0,!0,dr,1,Jt.screenX,Jt.screenY,Jt.clientX,Jt.clientY,!1,!1,!1,!1,0,null),Rt.target.dispatchEvent(jt)}}})),at.isDragging=at.isGesturing=at.isPressed=!1,x&&ne&&!K&&Qt.restart(!0),ve&&_t(),y&&ne&&y(at),C&&C(at,xt)}},le=function(Lt){return Lt.touches&&Lt.touches.length>1&&(at.isGesturing=!0)&&ft(Lt,at.isDragging)},de=function(){return(at.isGesturing=!1)||R(at)},W=function(Lt){if(!At(Lt)){var ne=me(),xt=he();Ft((ne-Ue)*Pt,(xt-It)*Pt,1),Ue=ne,It=xt,x&&Qt.restart(!0)}},Ct=function(Lt){if(!At(Lt)){Lt=cc(Lt,_),Z&&(se=!0);var ne=(Lt.deltaMode===1?p:Lt.deltaMode===2?dr.innerHeight:1)*M;Ft(Lt.deltaX*ne,Lt.deltaY*ne,0),x&&!K&&Qt.restart(!0)}},mt=function(Lt){if(!At(Lt)){var ne=Lt.clientX,xt=Lt.clientY,Jt=ne-at.x,jt=xt-at.y;at.x=ne,at.y=xt,Yt=!0,x&&Qt.restart(!0),(Jt||jt)&&Vt(Jt,jt)}},Ht=function(Lt){at.event=Lt,rt(at)},Ut=function(Lt){at.event=Lt,X(at)},bt=function(Lt){return At(Lt)||cc(Lt,_)&&wt(at)};Qt=at._dc=pi.delayedCall(g||.25,pt).pause(),at.deltaX=at.deltaY=0,at._vx=I0(0,50,!0),at._vy=I0(0,50,!0),at.scrollX=me,at.scrollY=he,at.isDragging=at.isGesturing=at.isPressed=!1,L1(this),at.enable=function(Rt){return at.isEnabled||(Ui(I?w:f,"scroll",F0),c.indexOf("scroll")>=0&&Ui(I?w:f,"scroll",W,q,$),c.indexOf("wheel")>=0&&Ui(f,"wheel",Ct,q,$),(c.indexOf("touch")>=0&&U1||c.indexOf("pointer")>=0)&&(Ui(f,jr[0],Nt,q,$),Ui(w,jr[2],Bt),Ui(w,jr[3],Bt),Tt&&Ui(f,"click",Ot,!0,!0),wt&&Ui(f,"click",bt),ft&&Ui(w,"gesturestart",le),R&&Ui(w,"gestureend",de),rt&&Ui(f,go+"enter",Ht),X&&Ui(f,go+"leave",Ut),B&&Ui(f,go+"move",mt)),at.isEnabled=!0,at.isDragging=at.isGesturing=at.isPressed=Yt=ve=!1,at._vx.reset(),at._vy.reset(),Ue=me(),It=he(),Rt&&Rt.type&&Nt(Rt),dt&&dt(at)),at},at.disable=function(){at.isEnabled&&(Hl.filter(function(Rt){return Rt!==at&&Ac(Rt.target)}).length||Di(I?w:f,"scroll",F0),at.isPressed&&(at._vx.reset(),at._vy.reset(),Di(K?f:w,jr[1],Dt,!0)),Di(I?w:f,"scroll",W,$),Di(f,"wheel",Ct,$),Di(f,jr[0],Nt,$),Di(w,jr[2],Bt),Di(w,jr[3],Bt),Di(f,"click",Ot,!0),Di(f,"click",bt),Di(w,"gesturestart",le),Di(w,"gestureend",de),Di(f,go+"enter",Ht),Di(f,go+"leave",Ut),Di(f,go+"move",mt),at.isEnabled=at.isPressed=at.isDragging=!1,St&&St(at))},at.kill=at.revert=function(){at.disable();var Rt=Hl.indexOf(at);Rt>=0&&Hl.splice(Rt,1),Ya===at&&(Ya=0)},Hl.push(at),K&&Ac(f)&&(Ya=at),at.enable(E)},qU(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();Gn.version="3.15.0";Gn.create=function(o){return new Gn(o)};Gn.register=I1;Gn.getAll=function(){return Hl.slice()};Gn.getById=function(o){return Hl.filter(function(t){return t.vars.id===o})[0]};O1()&&pi.registerPlugin(Gn);var $t,Fl,Le,an,fr,tn,Mg,gd,Xc,Rc,gc,Dh,yi,Cd,B0,Oi,LM,OM,Il,B1,M_,z1,Li,z0,H1,G1,Cs,H0,Eg,jl,bg,wc,G0,E_,Uh=1,Mi=Date.now,b_=Mi(),Br=0,vc=0,PM=function(t,e,i){var a=ur(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=a,a?t.substr(6,t.length-7):t},FM=function(t,e){return e&&(!ur(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},KU=function o(){return vc&&requestAnimationFrame(o)},IM=function(){return Cd=1},BM=function(){return Cd=0},la=function(t){return t},xc=function(t){return Math.round(t*1e5)/1e5||0},V1=function(){return typeof window<"u"},k1=function(){return $t||V1()&&($t=window.gsap)&&$t.registerPlugin&&$t},Po=function(t){return!!~Mg.indexOf(t)},X1=function(t){return(t==="Height"?bg:Le["inner"+t])||fr["client"+t]||tn["client"+t]},W1=function(t){return zs(t,"getBoundingClientRect")||(Po(t)?function(){return td.width=Le.innerWidth,td.height=bg,td}:function(){return Xa(t)})},QU=function(t,e,i){var a=i.d,l=i.d2,c=i.a;return(c=zs(t,"getBoundingClientRect"))?function(){return c()[a]}:function(){return(e?X1(l):t["client"+l])||0}},JU=function(t,e){return!e||~ga.indexOf(t)?W1(t):function(){return td}},pa=function(t,e){var i=e.s,a=e.d2,l=e.d,c=e.a;return Math.max(0,(i="scroll"+a)&&(c=zs(t,i))?c()-W1(t)()[l]:Po(t)?(fr[i]||tn[i])-X1(a):t[i]-t["offset"+a])},Nh=function(t,e){for(var i=0;i<Il.length;i+=3)(!e||~e.indexOf(Il[i+1]))&&t(Il[i],Il[i+1],Il[i+2])},ur=function(t){return typeof t=="string"},bi=function(t){return typeof t=="function"},Sc=function(t){return typeof t=="number"},vo=function(t){return typeof t=="object"},fc=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},Ll=function(t,e,i){if(t.enabled){var a=t._ctx?t._ctx.add(function(){return e(t,i)}):e(t,i);a&&a.totalTime&&(t.callbackAnimation=a)}},Ol=Math.abs,Y1="left",q1="top",Tg="right",Ag="bottom",Co="width",Do="height",Cc="Right",Dc="Left",Uc="Top",Nc="Bottom",Yn="padding",Nr="margin",au="Width",Rg="Height",Qn="px",Lr=function(t){return Le.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},$U=function(t){var e=Lr(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},zM=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Xa=function(t,e){var i=e&&Lr(t)[B0]!=="matrix(1, 0, 0, 1, 0, 0)"&&$t.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),a=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),a},vd=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},j1=function(t){var e=[],i=t.labels,a=t.duration(),l;for(l in i)e.push(i[l]/a);return e},tN=function(t){return function(e){return $t.utils.snap(j1(t),e)}},wg=function(t){var e=$t.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(a,l){return a-l});return i?function(a,l,c){c===void 0&&(c=.001);var f;if(!l)return e(a);if(l>0){for(a-=c,f=0;f<i.length;f++)if(i[f]>=a)return i[f];return i[f-1]}else for(f=i.length,a+=c;f--;)if(i[f]<=a)return i[f];return i[0]}:function(a,l,c){c===void 0&&(c=.001);var f=e(a);return!l||Math.abs(f-a)<c||f-a<0==l<0?f:e(l<0?a-t:a+t)}},eN=function(t){return function(e,i){return wg(j1(t))(e,i.direction)}},Lh=function(t,e,i,a){return i.split(",").forEach(function(l){return t(e,l,a)})},si=function(t,e,i,a,l){return t.addEventListener(e,i,{passive:!a,capture:!!l})},ai=function(t,e,i,a){return t.removeEventListener(e,i,!!a)},Oh=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},HM={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ph={toggleActions:"play",anticipatePin:0},xd={top:0,left:0,center:.5,bottom:1,right:1},Kh=function(t,e){if(ur(t)){var i=t.indexOf("="),a=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(a*=e/100),t=t.substr(0,i-1)),t=a+(t in xd?xd[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Fh=function(t,e,i,a,l,c,f,p){var d=l.startColor,_=l.endColor,x=l.fontSize,g=l.indent,v=l.fontWeight,M=an.createElement("div"),E=Po(i)||zs(i,"pinType")==="fixed",S=t.indexOf("scroller")!==-1,y=E?tn:i.tagName==="IFRAME"?i.contentDocument.body:i,A=t.indexOf("start")!==-1,D=A?d:_,C="border-color:"+D+";font-size:"+x+";color:"+D+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return C+="position:"+((S||p)&&E?"fixed;":"absolute;"),(S||p||!E)&&(C+=(a===Jn?Tg:Ag)+":"+(c+parseFloat(g))+"px;"),f&&(C+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),M._isStart=A,M.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),M.style.cssText=C,M.innerText=e||e===0?t+"-"+e:t,y.children[0]?y.insertBefore(M,y.children[0]):y.appendChild(M),M._offset=M["offset"+a.op.d2],Qh(M,0,a,A),M},Qh=function(t,e,i,a){var l={display:"block"},c=i[a?"os2":"p2"],f=i[a?"p2":"os2"];t._isFlipped=a,l[i.a+"Percent"]=a?-100:0,l[i.a]=a?"1px":0,l["border"+c+au]=1,l["border"+f+au]=0,l[i.p]=e+"px",$t.set(t,l)},De=[],V0={},Wc,GM=function(){return Mi()-Br>34&&(Wc||(Wc=requestAnimationFrame(Za)))},Pl=function(){(!Li||!Li.isPressed||Li.startX>tn.clientWidth)&&(Oe.cache++,Li?Wc||(Wc=requestAnimationFrame(Za)):Za(),Br||Io("scrollStart"),Br=Mi())},T_=function(){G1=Le.innerWidth,H1=Le.innerHeight},yc=function(t){Oe.cache++,(t===!0||!yi&&!z1&&!an.fullscreenElement&&!an.webkitFullscreenElement&&(!z0||G1!==Le.innerWidth||Math.abs(Le.innerHeight-H1)>Le.innerHeight*.25))&&gd.restart(!0)},Fo={},nN=[],Z1=function o(){return ai(ze,"scrollEnd",o)||bo(!0)},Io=function(t){return Fo[t]&&Fo[t].map(function(e){return e()})||nN},lr=[],K1=function(t){for(var e=0;e<lr.length;e+=5)(!t||lr[e+4]&&lr[e+4].query===t)&&(lr[e].style.cssText=lr[e+1],lr[e].getBBox&&lr[e].setAttribute("transform",lr[e+2]||""),lr[e+3].uncache=1)},Q1=function(){return Oe.forEach(function(t){return bi(t)&&++t.cacheID&&(t.rec=t())})},Cg=function(t,e){var i;for(Oi=0;Oi<De.length;Oi++)i=De[Oi],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));wc=!0,e&&K1(e),e||Io("revert")},J1=function(t,e){Oe.cache++,(e||!Pi)&&Oe.forEach(function(i){return bi(i)&&i.cacheID++&&(i.rec=0)}),ur(t)&&(Le.history.scrollRestoration=Eg=t)},Pi,Uo=0,VM,iN=function(){if(VM!==Uo){var t=VM=Uo;requestAnimationFrame(function(){return t===Uo&&bo(!0)})}},$1=function(){tn.appendChild(jl),bg=!Li&&jl.offsetHeight||Le.innerHeight,tn.removeChild(jl)},kM=function(t){return Xc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},bo=function(t,e){if(fr=an.documentElement,tn=an.body,Mg=[Le,an,fr,tn],Br&&!t&&!wc){si(ze,"scrollEnd",Z1);return}$1(),Pi=ze.isRefreshing=!0,wc||Q1();var i=Io("refreshInit");B1&&ze.sort(),e||Cg(),Oe.forEach(function(a){bi(a)&&(a.smooth&&(a.target.style.scrollBehavior="auto"),a(0))}),De.slice(0).forEach(function(a){return a.refresh()}),wc=!1,De.forEach(function(a){if(a._subPinOffset&&a.pin){var l=a.vars.horizontal?"offsetWidth":"offsetHeight",c=a.pin[l];a.revert(!0,1),a.adjustPinSpacing(a.pin[l]-c),a.refresh()}}),G0=1,kM(!0),De.forEach(function(a){var l=pa(a.scroller,a._dir),c=a.vars.end==="max"||a._endClamp&&a.end>l,f=a._startClamp&&a.start>=l;(c||f)&&a.setPositions(f?l-1:a.start,c?Math.max(f?l:a.start+1,l):a.end,!0)}),kM(!1),G0=0,i.forEach(function(a){return a&&a.render&&a.render(-1)}),Oe.forEach(function(a){bi(a)&&(a.smooth&&requestAnimationFrame(function(){return a.target.style.scrollBehavior="smooth"}),a.rec&&a(a.rec))}),J1(Eg,1),gd.pause(),Uo++,Pi=2,Za(2),De.forEach(function(a){return bi(a.vars.onRefresh)&&a.vars.onRefresh(a)}),Pi=ze.isRefreshing=!1,Io("refresh")},k0=0,Jh=1,Lc,Za=function(t){if(t===2||!Pi&&!wc){ze.isUpdating=!0,Lc&&Lc.update(0);var e=De.length,i=Mi(),a=i-b_>=50,l=e&&De[0].scroll();if(Jh=k0>l?-1:1,Pi||(k0=l),a&&(Br&&!Cd&&i-Br>200&&(Br=0,Io("scrollEnd")),gc=b_,b_=i),Jh<0){for(Oi=e;Oi-- >0;)De[Oi]&&De[Oi].update(0,a);Jh=1}else for(Oi=0;Oi<e;Oi++)De[Oi]&&De[Oi].update(0,a);ze.isUpdating=!1}Wc=0},X0=[Y1,q1,Ag,Tg,Nr+Nc,Nr+Cc,Nr+Uc,Nr+Dc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$h=X0.concat([Co,Do,"boxSizing","max"+au,"max"+Rg,"position",Nr,Yn,Yn+Uc,Yn+Cc,Yn+Nc,Yn+Dc]),rN=function(t,e,i){Zl(i);var a=t._gsap;if(a.spacerIsNative)Zl(a.spacerState);else if(t._gsap.swappedIn){var l=e.parentNode;l&&(l.insertBefore(t,e),l.removeChild(e))}t._gsap.swappedIn=!1},A_=function(t,e,i,a){if(!t._gsap.swappedIn){for(var l=X0.length,c=e.style,f=t.style,p;l--;)p=X0[l],c[p]=i[p];c.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(c.display="inline-block"),f[Ag]=f[Tg]="auto",c.flexBasis=i.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[Co]=vd(t,Fi)+Qn,c[Do]=vd(t,Jn)+Qn,c[Yn]=f[Nr]=f[q1]=f[Y1]="0",Zl(a),f[Co]=f["max"+au]=i[Co],f[Do]=f["max"+Rg]=i[Do],f[Yn]=i[Yn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},aN=/([A-Z])/g,Zl=function(t){if(t){var e=t.t.style,i=t.length,a=0,l,c;for((t.t._gsap||$t.core.getCache(t.t)).uncache=1;a<i;a+=2)c=t[a+1],l=t[a],c?e[l]=c:e[l]&&e.removeProperty(l.replace(aN,"-$1").toLowerCase())}},Ih=function(t){for(var e=$h.length,i=t.style,a=[],l=0;l<e;l++)a.push($h[l],i[$h[l]]);return a.t=t,a},sN=function(t,e,i){for(var a=[],l=t.length,c=i?8:0,f;c<l;c+=2)f=t[c],a.push(f,f in e?e[f]:t[c+1]);return a.t=t.t,a},td={left:0,top:0},XM=function(t,e,i,a,l,c,f,p,d,_,x,g,v,M){bi(t)&&(t=t(p)),ur(t)&&t.substr(0,3)==="max"&&(t=g+(t.charAt(4)==="="?Kh("0"+t.substr(3),i):0));var E=v?v.time():0,S,y,A;if(v&&v.seek(0),isNaN(t)||(t=+t),Sc(t))v&&(t=$t.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,g,t)),f&&Qh(f,i,a,!0);else{bi(e)&&(e=e(p));var D=(t||"0").split(" "),C,F,P,N;A=ki(e,p)||tn,C=Xa(A)||{},(!C||!C.left&&!C.top)&&Lr(A).display==="none"&&(N=A.style.display,A.style.display="block",C=Xa(A),N?A.style.display=N:A.style.removeProperty("display")),F=Kh(D[0],C[a.d]),P=Kh(D[1]||"0",i),t=C[a.p]-d[a.p]-_+F+l-P,f&&Qh(f,P,a,i-P<20||f._isStart&&P>20),i-=i-P}if(M&&(p[M]=t||-.001,t<0&&(t=0)),c){var b=t+i,L=c._isStart;S="scroll"+a.d2,Qh(c,b,a,L&&b>20||!L&&(x?Math.max(tn[S],fr[S]):c.parentNode[S])<=b+1),x&&(d=Xa(f),x&&(c.style[a.op.p]=d[a.op.p]-a.op.m-c._offset+Qn))}return v&&A&&(S=Xa(A),v.seek(g),y=Xa(A),v._caScrollDist=S[a.p]-y[a.p],t=t/v._caScrollDist*g),v&&v.seek(E),v?t:Math.round(t)},oN=/(webkit|moz|length|cssText|inset)/i,WM=function(t,e,i,a){if(t.parentNode!==e){var l=t.style,c,f;if(e===tn){t._stOrig=l.cssText,f=Lr(t);for(c in f)!+c&&!oN.test(c)&&f[c]&&typeof l[c]=="string"&&c!=="0"&&(l[c]=f[c]);l.top=i,l.left=a}else l.cssText=t._stOrig;$t.core.getCache(t).uncache=1,e.appendChild(t)}},tb=function(t,e,i){var a=e,l=a;return function(c){var f=Math.round(t());return f!==a&&f!==l&&Math.abs(f-a)>3&&Math.abs(f-l)>3&&(c=f,i&&i()),l=a,a=Math.round(c),a}},Bh=function(t,e,i){var a={};a[e.p]="+="+i,$t.set(t,a)},YM=function(t,e){var i=Xs(t,e),a="_scroll"+e.p2,l=function c(f,p,d,_,x){var g=c.tween,v=p.onComplete,M={};d=d||i();var E=tb(i,d,function(){g.kill(),c.tween=0});return x=_&&x||0,_=_||f-d,g&&g.kill(),p[a]=f,p.inherit=!1,p.modifiers=M,M[a]=function(){return E(d+_*g.ratio+x*g.ratio*g.ratio)},p.onUpdate=function(){Oe.cache++,c.tween&&Za()},p.onComplete=function(){c.tween=0,v&&v.call(g)},g=c.tween=$t.to(t,p),g};return t[a]=i,i.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},si(t,"wheel",i.wheelHandler),ze.isTouch&&si(t,"touchmove",i.wheelHandler),l},ze=(function(){function o(e,i){Fl||o.register($t)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),H0(this),this.init(e,i)}var t=o.prototype;return t.init=function(i,a){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!vc){this.update=this.refresh=this.kill=la;return}i=zM(ur(i)||Sc(i)||i.nodeType?{trigger:i}:i,Ph);var l=i,c=l.onUpdate,f=l.toggleClass,p=l.id,d=l.onToggle,_=l.onRefresh,x=l.scrub,g=l.trigger,v=l.pin,M=l.pinSpacing,E=l.invalidateOnRefresh,S=l.anticipatePin,y=l.onScrubComplete,A=l.onSnapComplete,D=l.once,C=l.snap,F=l.pinReparent,P=l.pinSpacer,N=l.containerAnimation,b=l.fastScrollEnd,L=l.preventOverlaps,z=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Fi:Jn,G=!x&&x!==0,V=ki(i.scroller||Le),nt=$t.core.getCache(V),rt=Po(V),X=("pinType"in i?i.pinType:zs(V,"pinType")||rt&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],H=G&&i.toggleActions.split(" "),K="markers"in i?i.markers:Ph.markers,ft=rt?0:parseFloat(Lr(V)["border"+z.p2+au])||0,R=this,Z=i.onRefreshInit&&function(){return i.onRefreshInit(R)},dt=QU(V,rt,z),St=JU(V,rt),wt=0,Pt=0,$=0,Tt=Xs(V,z),gt,Xt,ae,Qt,ve,Yt,se,ye,oe,at,we,_n,q,me,he,Ue,It,xe,I,w,Q,ht,Et,Ot,At,pt,_t,Ft,Vt,Dt,Nt,Bt,le,de,W,Ct,mt,Ht,Ut;if(R._startClamp=R._endClamp=!1,R._dir=z,S*=45,R.scroller=V,R.scroll=N?N.time.bind(N):Tt,Qt=Tt(),R.vars=i,a=a||i.animation,"refreshPriority"in i&&(B1=1,i.refreshPriority===-9999&&(Lc=R)),nt.tweenScroll=nt.tweenScroll||{top:YM(V,Jn),left:YM(V,Fi)},R.tweenTo=gt=nt.tweenScroll[z.p],R.scrubDuration=function(xt){le=Sc(xt)&&xt,le?Bt?Bt.duration(xt):Bt=$t.to(a,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return y&&y(R)}}):(Bt&&Bt.progress(1).kill(),Bt=0)},a&&(a.vars.lazy=!1,a._initted&&!R.isReverted||a.vars.immediateRender!==!1&&i.immediateRender!==!1&&a.duration()&&a.render(0,!0,!0),R.animation=a.pause(),a.scrollTrigger=R,R.scrubDuration(x),Dt=0,p||(p=a.vars.id)),C&&((!vo(C)||C.push)&&(C={snapTo:C}),"scrollBehavior"in tn.style&&$t.set(rt?[tn,fr]:V,{scrollBehavior:"auto"}),Oe.forEach(function(xt){return bi(xt)&&xt.target===(rt?an.scrollingElement||fr:V)&&(xt.smooth=!1)}),ae=bi(C.snapTo)?C.snapTo:C.snapTo==="labels"?tN(a):C.snapTo==="labelsDirectional"?eN(a):C.directional!==!1?function(xt,Jt){return wg(C.snapTo)(xt,Mi()-Pt<500?0:Jt.direction)}:$t.utils.snap(C.snapTo),de=C.duration||{min:.1,max:2},de=vo(de)?Rc(de.min,de.max):Rc(de,de),W=$t.delayedCall(C.delay||le/2||.1,function(){var xt=Tt(),Jt=Mi()-Pt<500,jt=gt.tween;if((Jt||Math.abs(R.getVelocity())<10)&&!jt&&!Cd&&wt!==xt){var ue=(xt-Yt)/me,Dn=a&&!G?a.totalProgress():ue,be=Jt?0:(Dn-Nt)/(Mi()-gc)*1e3||0,fn=$t.utils.clamp(-ue,1-ue,Ol(be/2)*be/.185),Qe=ue+(C.inertia===!1?0:fn),Je,ke,Pe=C,Un=Pe.onStart,We=Pe.onInterrupt,Fe=Pe.onComplete;if(Je=ae(Qe,R),Sc(Je)||(Je=Qe),ke=Math.max(0,Math.round(Yt+Je*me)),xt<=se&&xt>=Yt&&ke!==xt){if(jt&&!jt._initted&&jt.data<=Ol(ke-xt))return;C.inertia===!1&&(fn=Je-ue),gt(ke,{duration:de(Ol(Math.max(Ol(Qe-Dn),Ol(Je-Dn))*.185/be/.05||0)),ease:C.ease||"power3",data:Ol(ke-xt),onInterrupt:function(){return W.restart(!0)&&We&&Ll(R,We)},onComplete:function(){R.update(),wt=Tt(),a&&!G&&(Bt?Bt.resetTo("totalProgress",Je,a._tTime/a._tDur):a.progress(Je)),Dt=Nt=a&&!G?a.totalProgress():R.progress,A&&A(R),Fe&&Ll(R,Fe)}},xt,fn*me,ke-xt-fn*me),Un&&Ll(R,Un,gt.tween)}}else R.isActive&&wt!==xt&&W.restart(!0)}).pause()),p&&(V0[p]=R),g=R.trigger=ki(g||v!==!0&&v),Ut=g&&g._gsap&&g._gsap.stRevert,Ut&&(Ut=Ut(R)),v=v===!0?g:ki(v),ur(f)&&(f={targets:g,className:f}),v&&(M===!1||M===Nr||(M=!M&&v.parentNode&&v.parentNode.style&&Lr(v.parentNode).display==="flex"?!1:Yn),R.pin=v,Xt=$t.core.getCache(v),Xt.spacer?he=Xt.pinState:(P&&(P=ki(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),Xt.spacerIsNative=!!P,P&&(Xt.spacerState=Ih(P))),Xt.spacer=xe=P||an.createElement("div"),xe.classList.add("pin-spacer"),p&&xe.classList.add("pin-spacer-"+p),Xt.pinState=he=Ih(v)),i.force3D!==!1&&$t.set(v,{force3D:!0}),R.spacer=xe=Xt.spacer,Vt=Lr(v),Ot=Vt[M+z.os2],w=$t.getProperty(v),Q=$t.quickSetter(v,z.a,Qn),A_(v,xe,Vt),It=Ih(v)),K){_n=vo(K)?zM(K,HM):HM,at=Fh("scroller-start",p,V,z,_n,0),we=Fh("scroller-end",p,V,z,_n,0,at),I=at["offset"+z.op.d2];var bt=ki(zs(V,"content")||V);ye=this.markerStart=Fh("start",p,bt,z,_n,I,0,N),oe=this.markerEnd=Fh("end",p,bt,z,_n,I,0,N),N&&(Ht=$t.quickSetter([ye,oe],z.a,Qn)),!X&&!(ga.length&&zs(V,"fixedMarkers")===!0)&&($U(rt?tn:V),$t.set([at,we],{force3D:!0}),pt=$t.quickSetter(at,z.a,Qn),Ft=$t.quickSetter(we,z.a,Qn))}if(N){var Rt=N.vars.onUpdate,Lt=N.vars.onUpdateParams;N.eventCallback("onUpdate",function(){R.update(0,0,1),Rt&&Rt.apply(N,Lt||[])})}if(R.previous=function(){return De[De.indexOf(R)-1]},R.next=function(){return De[De.indexOf(R)+1]},R.revert=function(xt,Jt){if(!Jt)return R.kill(!0);var jt=xt!==!1||!R.enabled,ue=yi;jt!==R.isReverted&&(jt&&(Ct=Math.max(Tt(),R.scroll.rec||0),$=R.progress,mt=a&&a.progress()),ye&&[ye,oe,at,we].forEach(function(Dn){return Dn.style.display=jt?"none":"block"}),jt&&(yi=R,R.update(jt)),v&&(!F||!R.isActive)&&(jt?rN(v,xe,he):A_(v,xe,Lr(v),At)),jt||R.update(jt),yi=ue,R.isReverted=jt)},R.refresh=function(xt,Jt,jt,ue){if(!((yi||!R.enabled)&&!Jt)){if(v&&xt&&Br){si(o,"scrollEnd",Z1);return}!Pi&&Z&&Z(R),yi=R,gt.tween&&!jt&&(gt.tween.kill(),gt.tween=0),Bt&&Bt.pause(),E&&a&&(a.revert({kill:!1}).invalidate(),a.getChildren?a.getChildren(!0,!0,!1).forEach(function(Gt){return Gt.vars.immediateRender&&Gt.render(0,!0,!0)}):a.vars.immediateRender&&a.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Dn=dt(),be=St(),fn=N?N.duration():pa(V,z),Qe=me<=.01||!me,Je=0,ke=ue||0,Pe=vo(jt)?jt.end:i.end,Un=i.endTrigger||g,We=vo(jt)?jt.start:i.start||(i.start===0||!g?0:v?"0 0":"0 100%"),Fe=R.pinnedContainer=i.pinnedContainer&&ki(i.pinnedContainer,R),_i=g&&Math.max(0,De.indexOf(R))||0,bn=_i,hn,xn,Hr,ya,Fn,Tn,li,U,j,lt,tt,et,zt;for(K&&vo(jt)&&(et=$t.getProperty(at,z.p),zt=$t.getProperty(we,z.p));bn-- >0;)Tn=De[bn],Tn.end||Tn.refresh(0,1)||(yi=R),li=Tn.pin,li&&(li===g||li===v||li===Fe)&&!Tn.isReverted&&(lt||(lt=[]),lt.unshift(Tn),Tn.revert(!0,!0)),Tn!==De[bn]&&(_i--,bn--);for(bi(We)&&(We=We(R)),We=PM(We,"start",R),Yt=XM(We,g,Dn,z,Tt(),ye,at,R,be,ft,X,fn,N,R._startClamp&&"_startClamp")||(v?-.001:0),bi(Pe)&&(Pe=Pe(R)),ur(Pe)&&!Pe.indexOf("+=")&&(~Pe.indexOf(" ")?Pe=(ur(We)?We.split(" ")[0]:"")+Pe:(Je=Kh(Pe.substr(2),Dn),Pe=ur(We)?We:(N?$t.utils.mapRange(0,N.duration(),N.scrollTrigger.start,N.scrollTrigger.end,Yt):Yt)+Je,Un=g)),Pe=PM(Pe,"end",R),se=Math.max(Yt,XM(Pe||(Un?"100% 0":fn),Un,Dn,z,Tt()+Je,oe,we,R,be,ft,X,fn,N,R._endClamp&&"_endClamp"))||-.001,Je=0,bn=_i;bn--;)Tn=De[bn]||{},li=Tn.pin,li&&Tn.start-Tn._pinPush<=Yt&&!N&&Tn.end>0&&(hn=Tn.end-(R._startClamp?Math.max(0,Tn.start):Tn.start),(li===g&&Tn.start-Tn._pinPush<Yt||li===Fe)&&isNaN(We)&&(Je+=hn*(1-Tn.progress)),li===v&&(ke+=hn));if(Yt+=Je,se+=Je,R._startClamp&&(R._startClamp+=Je),R._endClamp&&!Pi&&(R._endClamp=se||-.001,se=Math.min(se,pa(V,z))),me=se-Yt||(Yt-=.01)&&.001,Qe&&($=$t.utils.clamp(0,1,$t.utils.normalize(Yt,se,Ct))),R._pinPush=ke,ye&&Je&&(hn={},hn[z.a]="+="+Je,Fe&&(hn[z.p]="-="+Tt()),$t.set([ye,oe],hn)),v&&!(G0&&R.end>=pa(V,z)))hn=Lr(v),ya=z===Jn,Hr=Tt(),ht=parseFloat(w(z.a))+ke,!fn&&se>1&&(tt=(rt?an.scrollingElement||fr:V).style,tt={style:tt,value:tt["overflow"+z.a.toUpperCase()]},rt&&Lr(tn)["overflow"+z.a.toUpperCase()]!=="scroll"&&(tt.style["overflow"+z.a.toUpperCase()]="scroll")),A_(v,xe,hn),It=Ih(v),xn=Xa(v,!0),U=X&&Xs(V,ya?Fi:Jn)(),M?(At=[M+z.os2,me+ke+Qn],At.t=xe,bn=M===Yn?vd(v,z)+me+ke:0,bn&&(At.push(z.d,bn+Qn),xe.style.flexBasis!=="auto"&&(xe.style.flexBasis=bn+Qn)),Zl(At),Fe&&De.forEach(function(Gt){Gt.pin===Fe&&Gt.vars.pinSpacing!==!1&&(Gt._subPinOffset=!0)}),X&&Tt(Ct)):(bn=vd(v,z),bn&&xe.style.flexBasis!=="auto"&&(xe.style.flexBasis=bn+Qn)),X&&(Fn={top:xn.top+(ya?Hr-Yt:U)+Qn,left:xn.left+(ya?U:Hr-Yt)+Qn,boxSizing:"border-box",position:"fixed"},Fn[Co]=Fn["max"+au]=Math.ceil(xn.width)+Qn,Fn[Do]=Fn["max"+Rg]=Math.ceil(xn.height)+Qn,Fn[Nr]=Fn[Nr+Uc]=Fn[Nr+Cc]=Fn[Nr+Nc]=Fn[Nr+Dc]="0",Fn[Yn]=hn[Yn],Fn[Yn+Uc]=hn[Yn+Uc],Fn[Yn+Cc]=hn[Yn+Cc],Fn[Yn+Nc]=hn[Yn+Nc],Fn[Yn+Dc]=hn[Yn+Dc],Ue=sN(he,Fn,F),Pi&&Tt(0)),a?(j=a._initted,M_(1),a.render(a.duration(),!0,!0),Et=w(z.a)-ht+me+ke,_t=Math.abs(me-Et)>1,X&&_t&&Ue.splice(Ue.length-2,2),a.render(0,!0,!0),j||a.invalidate(!0),a.parent||a.totalTime(a.totalTime()),M_(0)):Et=me,tt&&(tt.value?tt.style["overflow"+z.a.toUpperCase()]=tt.value:tt.style.removeProperty("overflow-"+z.a));else if(g&&Tt()&&!N)for(xn=g.parentNode;xn&&xn!==tn;)xn._pinOffset&&(Yt-=xn._pinOffset,se-=xn._pinOffset),xn=xn.parentNode;lt&&lt.forEach(function(Gt){return Gt.revert(!1,!0)}),R.start=Yt,R.end=se,Qt=ve=Pi?Ct:Tt(),!N&&!Pi&&(Qt<Ct&&Tt(Ct),R.scroll.rec=0),R.revert(!1,!0),Pt=Mi(),W&&(wt=-1,W.restart(!0)),yi=0,a&&G&&(a._initted||mt)&&a.progress()!==mt&&a.progress(mt||0,!0).render(a.time(),!0,!0),(Qe||$!==R.progress||N||E||a&&!a._initted)&&(a&&!G&&(a._initted||$||a.vars.immediateRender!==!1)&&a.totalProgress(N&&Yt<-.001&&!$?$t.utils.normalize(Yt,se,0):$,!0),R.progress=Qe||(Qt-Yt)/me===$?0:$),v&&M&&(xe._pinOffset=Math.round(R.progress*Et)),Bt&&Bt.invalidate(),isNaN(et)||(et-=$t.getProperty(at,z.p),zt-=$t.getProperty(we,z.p),Bh(at,z,et),Bh(ye,z,et-(ue||0)),Bh(we,z,zt),Bh(oe,z,zt-(ue||0))),Qe&&!Pi&&R.update(),_&&!Pi&&!q&&(q=!0,_(R),q=!1)}},R.getVelocity=function(){return(Tt()-ve)/(Mi()-gc)*1e3||0},R.endAnimation=function(){fc(R.callbackAnimation),a&&(Bt?Bt.progress(1):a.paused()?G||fc(a,R.direction<0,1):fc(a,a.reversed()))},R.labelToScroll=function(xt){return a&&a.labels&&(Yt||R.refresh()||Yt)+a.labels[xt]/a.duration()*me||0},R.getTrailing=function(xt){var Jt=De.indexOf(R),jt=R.direction>0?De.slice(0,Jt).reverse():De.slice(Jt+1);return(ur(xt)?jt.filter(function(ue){return ue.vars.preventOverlaps===xt}):jt).filter(function(ue){return R.direction>0?ue.end<=Yt:ue.start>=se})},R.update=function(xt,Jt,jt){if(!(N&&!jt&&!xt)){var ue=Pi===!0?Ct:R.scroll(),Dn=xt?0:(ue-Yt)/me,be=Dn<0?0:Dn>1?1:Dn||0,fn=R.progress,Qe,Je,ke,Pe,Un,We,Fe,_i;if(Jt&&(ve=Qt,Qt=N?Tt():ue,C&&(Nt=Dt,Dt=a&&!G?a.totalProgress():be)),S&&v&&!yi&&!Uh&&Br&&(!be&&Yt<ue+(ue-ve)/(Mi()-gc)*S?be=1e-4:be===1&&se>ue+(ue-ve)/(Mi()-gc)*S&&(be=.9999)),be!==fn&&R.enabled){if(Qe=R.isActive=!!be&&be<1,Je=!!fn&&fn<1,We=Qe!==Je,Un=We||!!be!=!!fn,R.direction=be>fn?1:-1,R.progress=be,Un&&!yi&&(ke=be&&!fn?0:be===1?1:fn===1?2:3,G&&(Pe=!We&&H[ke+1]!=="none"&&H[ke+1]||H[ke],_i=a&&(Pe==="complete"||Pe==="reset"||Pe in a))),L&&(We||_i)&&(_i||x||!a)&&(bi(L)?L(R):R.getTrailing(L).forEach(function(Hr){return Hr.endAnimation()})),G||(Bt&&!yi&&!Uh?(Bt._dp._time-Bt._start!==Bt._time&&Bt.render(Bt._dp._time-Bt._start),Bt.resetTo?Bt.resetTo("totalProgress",be,a._tTime/a._tDur):(Bt.vars.totalProgress=be,Bt.invalidate().restart())):a&&a.totalProgress(be,!!(yi&&(Pt||xt)))),v){if(xt&&M&&(xe.style[M+z.os2]=Ot),!X)Q(xc(ht+Et*be));else if(Un){if(Fe=!xt&&be>fn&&se+1>ue&&ue+1>=pa(V,z),F)if(!xt&&(Qe||Fe)){var bn=Xa(v,!0),hn=ue-Yt;WM(v,tn,bn.top+(z===Jn?hn:0)+Qn,bn.left+(z===Jn?0:hn)+Qn)}else WM(v,xe);Zl(Qe||Fe?Ue:It),_t&&be<1&&Qe||Q(ht+(be===1&&!Fe?Et:0))}}C&&!gt.tween&&!yi&&!Uh&&W.restart(!0),f&&(We||D&&be&&(be<1||!E_))&&Xc(f.targets).forEach(function(Hr){return Hr.classList[Qe||D?"add":"remove"](f.className)}),c&&!G&&!xt&&c(R),Un&&!yi?(G&&(_i&&(Pe==="complete"?a.pause().totalProgress(1):Pe==="reset"?a.restart(!0).pause():Pe==="restart"?a.restart(!0):a[Pe]()),c&&c(R)),(We||!E_)&&(d&&We&&Ll(R,d),B[ke]&&Ll(R,B[ke]),D&&(be===1?R.kill(!1,1):B[ke]=0),We||(ke=be===1?1:3,B[ke]&&Ll(R,B[ke]))),b&&!Qe&&Math.abs(R.getVelocity())>(Sc(b)?b:2500)&&(fc(R.callbackAnimation),Bt?Bt.progress(1):fc(a,Pe==="reverse"?1:!be,1))):G&&c&&!yi&&c(R)}if(Ft){var xn=N?ue/N.duration()*(N._caScrollDist||0):ue;pt(xn+(at._isFlipped?1:0)),Ft(xn)}Ht&&Ht(-ue/N.duration()*(N._caScrollDist||0))}},R.enable=function(xt,Jt){R.enabled||(R.enabled=!0,si(V,"resize",yc),rt||si(V,"scroll",Pl),Z&&si(o,"refreshInit",Z),xt!==!1&&(R.progress=$=0,Qt=ve=wt=Tt()),Jt!==!1&&R.refresh())},R.getTween=function(xt){return xt&&gt?gt.tween:Bt},R.setPositions=function(xt,Jt,jt,ue){if(N){var Dn=N.scrollTrigger,be=N.duration(),fn=Dn.end-Dn.start;xt=Dn.start+fn*xt/be,Jt=Dn.start+fn*Jt/be}R.refresh(!1,!1,{start:FM(xt,jt&&!!R._startClamp),end:FM(Jt,jt&&!!R._endClamp)},ue),R.update()},R.adjustPinSpacing=function(xt){if(At&&xt){var Jt=At.indexOf(z.d)+1;At[Jt]=parseFloat(At[Jt])+xt+Qn,At[1]=parseFloat(At[1])+xt+Qn,Zl(At)}},R.disable=function(xt,Jt){if(xt!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Jt||Bt&&Bt.pause(),Ct=0,Xt&&(Xt.uncache=1),Z&&ai(o,"refreshInit",Z),W&&(W.pause(),gt.tween&&gt.tween.kill()&&(gt.tween=0)),!rt)){for(var jt=De.length;jt--;)if(De[jt].scroller===V&&De[jt]!==R)return;ai(V,"resize",yc),rt||ai(V,"scroll",Pl)}},R.kill=function(xt,Jt){R.disable(xt,Jt),Bt&&!Jt&&Bt.kill(),p&&delete V0[p];var jt=De.indexOf(R);jt>=0&&De.splice(jt,1),jt===Oi&&Jh>0&&Oi--,jt=0,De.forEach(function(ue){return ue.scroller===R.scroller&&(jt=1)}),jt||Pi||(R.scroll.rec=0),a&&(a.scrollTrigger=null,xt&&a.revert({kill:!1}),Jt||a.kill()),ye&&[ye,oe,at,we].forEach(function(ue){return ue.parentNode&&ue.parentNode.removeChild(ue)}),Lc===R&&(Lc=0),v&&(Xt&&(Xt.uncache=1),jt=0,De.forEach(function(ue){return ue.pin===v&&jt++}),jt||(Xt.spacer=0)),i.onKill&&i.onKill(R)},De.push(R),R.enable(!1,!1),Ut&&Ut(R),a&&a.add&&!me){var ne=R.update;R.update=function(){R.update=ne,Oe.cache++,Yt||se||R.refresh()},$t.delayedCall(.01,R.update),me=.01,Yt=se=0}else R.refresh();v&&iN()},o.register=function(i){return Fl||($t=i||k1(),V1()&&window.document&&o.enable(),Fl=vc),Fl},o.defaults=function(i){if(i)for(var a in i)Ph[a]=i[a];return Ph},o.disable=function(i,a){vc=0,De.forEach(function(c){return c[a?"kill":"disable"](i)}),ai(Le,"wheel",Pl),ai(an,"scroll",Pl),clearInterval(Dh),ai(an,"touchcancel",la),ai(tn,"touchstart",la),Lh(ai,an,"pointerdown,touchstart,mousedown",IM),Lh(ai,an,"pointerup,touchend,mouseup",BM),gd.kill(),Nh(ai);for(var l=0;l<Oe.length;l+=3)Oh(ai,Oe[l],Oe[l+1]),Oh(ai,Oe[l],Oe[l+2])},o.enable=function(){if(Le=window,an=document,fr=an.documentElement,tn=an.body,$t){if(Xc=$t.utils.toArray,Rc=$t.utils.clamp,H0=$t.core.context||la,M_=$t.core.suppressOverwrites||la,Eg=Le.history.scrollRestoration||"auto",k0=Le.pageYOffset||0,$t.core.globals("ScrollTrigger",o),tn){vc=1,jl=document.createElement("div"),jl.style.height="100vh",jl.style.position="absolute",$1(),KU(),Gn.register($t),o.isTouch=Gn.isTouch,Cs=Gn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),z0=Gn.isTouch===1,si(Le,"wheel",Pl),Mg=[Le,an,fr,tn],$t.matchMedia?(o.matchMedia=function(_){var x=$t.matchMedia(),g;for(g in _)x.add(g,_[g]);return x},$t.addEventListener("matchMediaInit",function(){Q1(),Cg()}),$t.addEventListener("matchMediaRevert",function(){return K1()}),$t.addEventListener("matchMedia",function(){bo(0,1),Io("matchMedia")}),$t.matchMedia().add("(orientation: portrait)",function(){return T_(),T_})):console.warn("Requires GSAP 3.11.0 or later"),T_(),si(an,"scroll",Pl);var i=tn.hasAttribute("style"),a=tn.style,l=a.borderTopStyle,c=$t.core.Animation.prototype,f,p;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),a.borderTopStyle="solid",f=Xa(tn),Jn.m=Math.round(f.top+Jn.sc())||0,Fi.m=Math.round(f.left+Fi.sc())||0,l?a.borderTopStyle=l:a.removeProperty("border-top-style"),i||(tn.setAttribute("style",""),tn.removeAttribute("style")),Dh=setInterval(GM,250),$t.delayedCall(.5,function(){return Uh=0}),si(an,"touchcancel",la),si(tn,"touchstart",la),Lh(si,an,"pointerdown,touchstart,mousedown",IM),Lh(si,an,"pointerup,touchend,mouseup",BM),B0=$t.utils.checkPrefix("transform"),$h.push(B0),Fl=Mi(),gd=$t.delayedCall(.2,bo).pause(),Il=[an,"visibilitychange",function(){var _=Le.innerWidth,x=Le.innerHeight;an.hidden?(LM=_,OM=x):(LM!==_||OM!==x)&&yc()},an,"DOMContentLoaded",bo,Le,"load",bo,Le,"resize",yc],Nh(si),De.forEach(function(_){return _.enable(0,1)}),p=0;p<Oe.length;p+=3)Oh(ai,Oe[p],Oe[p+1]),Oh(ai,Oe[p],Oe[p+2])}else if(an){var d=function _(){o.enable(),an.removeEventListener("DOMContentLoaded",_)};an.addEventListener("DOMContentLoaded",d)}}},o.config=function(i){"limitCallbacks"in i&&(E_=!!i.limitCallbacks);var a=i.syncInterval;a&&clearInterval(Dh)||(Dh=a)&&setInterval(GM,a),"ignoreMobileResize"in i&&(z0=o.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Nh(ai)||Nh(si,i.autoRefreshEvents||"none"),z1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(i,a){var l=ki(i),c=Oe.indexOf(l),f=Po(l);~c&&Oe.splice(c,f?6:2),a&&(f?ga.unshift(Le,a,tn,a,fr,a):ga.unshift(l,a))},o.clearMatchMedia=function(i){De.forEach(function(a){return a._ctx&&a._ctx.query===i&&a._ctx.kill(!0,!0)})},o.isInViewport=function(i,a,l){var c=(ur(i)?ki(i):i).getBoundingClientRect(),f=c[l?Co:Do]*a||0;return l?c.right-f>0&&c.left+f<Le.innerWidth:c.bottom-f>0&&c.top+f<Le.innerHeight},o.positionInViewport=function(i,a,l){ur(i)&&(i=ki(i));var c=i.getBoundingClientRect(),f=c[l?Co:Do],p=a==null?f/2:a in xd?xd[a]*f:~a.indexOf("%")?parseFloat(a)*f/100:parseFloat(a)||0;return l?(c.left+p)/Le.innerWidth:(c.top+p)/Le.innerHeight},o.killAll=function(i){if(De.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),i!==!0){var a=Fo.killAll||[];Fo={},a.forEach(function(l){return l()})}},o})();ze.version="3.15.0";ze.saveStyles=function(o){return o?Xc(o).forEach(function(t){if(t&&t.style){var e=lr.indexOf(t);e>=0&&lr.splice(e,5),lr.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),$t.core.getCache(t),H0())}}):lr};ze.revert=function(o,t){return Cg(!o,t)};ze.create=function(o,t){return new ze(o,t)};ze.refresh=function(o){return o?yc(!0):(Fl||ze.register())&&bo(!0)};ze.update=function(o){return++Oe.cache&&Za(o===!0?2:0)};ze.clearScrollMemory=J1;ze.maxScroll=function(o,t){return pa(o,t?Fi:Jn)};ze.getScrollFunc=function(o,t){return Xs(ki(o),t?Fi:Jn)};ze.getById=function(o){return V0[o]};ze.getAll=function(){return De.filter(function(o){return o.vars.id!=="ScrollSmoother"})};ze.isScrolling=function(){return!!Br};ze.snapDirectional=wg;ze.addEventListener=function(o,t){var e=Fo[o]||(Fo[o]=[]);~e.indexOf(t)||e.push(t)};ze.removeEventListener=function(o,t){var e=Fo[o],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};ze.batch=function(o,t){var e=[],i={},a=t.interval||.016,l=t.batchMax||1e9,c=function(d,_){var x=[],g=[],v=$t.delayedCall(a,function(){_(x,g),x=[],g=[]}).pause();return function(M){x.length||v.restart(!0),x.push(M.trigger),g.push(M),l<=x.length&&v.progress(1)}},f;for(f in t)i[f]=f.substr(0,2)==="on"&&bi(t[f])&&f!=="onRefreshInit"?c(f,t[f]):t[f];return bi(l)&&(l=l(),si(ze,"refresh",function(){return l=t.batchMax()})),Xc(o).forEach(function(p){var d={};for(f in i)d[f]=i[f];d.trigger=p,e.push(ze.create(d))}),e};var qM=function(t,e,i,a){return e>a?t(a):e<0&&t(0),i>a?(a-e)/(i-e):i<0?e/(e-i):1},R_=function o(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Gn.isTouch?" pinch-zoom":""):"none",t===fr&&o(tn,e)},zh={auto:1,scroll:1},lN=function(t){var e=t.event,i=t.target,a=t.axis,l=(e.changedTouches?e.changedTouches[0]:e).target,c=l._gsap||$t.core.getCache(l),f=Mi(),p;if(!c._isScrollT||f-c._isScrollT>2e3){for(;l&&l!==tn&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(zh[(p=Lr(l)).overflowY]||zh[p.overflowX]));)l=l.parentNode;c._isScroll=l&&l!==i&&!Po(l)&&(zh[(p=Lr(l)).overflowY]||zh[p.overflowX]),c._isScrollT=f}(c._isScroll||a==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},eb=function(t,e,i,a){return Gn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:a=a&&lN,onPress:a,onDrag:a,onScroll:a,onEnable:function(){return i&&si(an,Gn.eventTypes[0],ZM,!1,!0)},onDisable:function(){return ai(an,Gn.eventTypes[0],ZM,!0)}})},uN=/(input|label|select|textarea)/i,jM,ZM=function(t){var e=uN.test(t.target.tagName);(e||jM)&&(t._gsapAllow=!0,jM=e)},cN=function(t){vo(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,a=e.momentum,l=e.allowNestedScroll,c=e.onRelease,f,p,d=ki(t.target)||fr,_=$t.core.globals().ScrollSmoother,x=_&&_.get(),g=Cs&&(t.content&&ki(t.content)||x&&t.content!==!1&&!x.smooth()&&x.content()),v=Xs(d,Jn),M=Xs(d,Fi),E=1,S=(Gn.isTouch&&Le.visualViewport?Le.visualViewport.scale*Le.visualViewport.width:Le.outerWidth)/Le.innerWidth,y=0,A=bi(a)?function(){return a(f)}:function(){return a||2.8},D,C,F=eb(d,t.type,!0,l),P=function(){return C=!1},N=la,b=la,L=function(){p=pa(d,Jn),b=Rc(Cs?1:0,p),i&&(N=Rc(0,pa(d,Fi))),D=Uo},z=function(){g._gsap.y=xc(parseFloat(g._gsap.y)+v.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},G=function(){if(C){requestAnimationFrame(P);var K=xc(f.deltaY/2),ft=b(v.v-K);if(g&&ft!==v.v+v.offset){v.offset=ft-v.v;var R=xc((parseFloat(g&&g._gsap.y)||0)-v.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",g._gsap.y=R+"px",v.cacheID=Oe.cache,Za()}return!0}v.offset&&z(),C=!0},V,nt,rt,X,B=function(){L(),V.isActive()&&V.vars.scrollY>p&&(v()>p?V.progress(1)&&v(p):V.resetTo("scrollY",p))};return g&&$t.set(g,{y:"+=0"}),t.ignoreCheck=function(H){return Cs&&H.type==="touchmove"&&G()||E>1.05&&H.type!=="touchstart"||f.isGesturing||H.touches&&H.touches.length>1},t.onPress=function(){C=!1;var H=E;E=xc((Le.visualViewport&&Le.visualViewport.scale||1)/S),V.pause(),H!==E&&R_(d,E>1.01?!0:i?!1:"x"),nt=M(),rt=v(),L(),D=Uo},t.onRelease=t.onGestureStart=function(H,K){if(v.offset&&z(),!K)X.restart(!0);else{Oe.cache++;var ft=A(),R,Z;i&&(R=M(),Z=R+ft*.05*-H.velocityX/.227,ft*=qM(M,R,Z,pa(d,Fi)),V.vars.scrollX=N(Z)),R=v(),Z=R+ft*.05*-H.velocityY/.227,ft*=qM(v,R,Z,pa(d,Jn)),V.vars.scrollY=b(Z),V.invalidate().duration(ft).play(.01),(Cs&&V.vars.scrollY>=p||R>=p-1)&&$t.to({},{onUpdate:B,duration:ft})}c&&c(H)},t.onWheel=function(){V._ts&&V.pause(),Mi()-y>1e3&&(D=0,y=Mi())},t.onChange=function(H,K,ft,R,Z){if(Uo!==D&&L(),K&&i&&M(N(R[2]===K?nt+(H.startX-H.x):M()+K-R[1])),ft){v.offset&&z();var dt=Z[2]===ft,St=dt?rt+H.startY-H.y:v()+ft-Z[1],wt=b(St);dt&&St!==wt&&(rt+=wt-St),v(wt)}(ft||K)&&Za()},t.onEnable=function(){R_(d,i?!1:"x"),ze.addEventListener("refresh",B),si(Le,"resize",B),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=M.smooth=!1),F.enable()},t.onDisable=function(){R_(d,!0),ai(Le,"resize",B),ze.removeEventListener("refresh",B),F.kill()},t.lockAxis=t.lockAxis!==!1,f=new Gn(t),f.iOS=Cs,Cs&&!v()&&v(1),Cs&&$t.ticker.add(la),X=f._dc,V=$t.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:tb(v,v(),function(){return V.pause()})},onUpdate:Za,onComplete:X.vars.onComplete}),f};ze.sort=function(o){if(bi(o))return De.sort(o);var t=Le.pageYOffset||0;return ze.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Le.innerHeight}),De.sort(o||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ze.observe=function(o){return new Gn(o)};ze.normalizeScroll=function(o){if(typeof o>"u")return Li;if(o===!0&&Li)return Li.enable();if(o===!1){Li&&Li.kill(),Li=o;return}var t=o instanceof Gn?o:cN(o);return Li&&Li.target===t.target&&Li.kill(),Po(t.target)&&(Li=t),t};ze.core={_getVelocityProp:I0,_inputObserver:eb,_scrollers:Oe,_proxies:ga,bridge:{ss:function(){Br||Io("scrollStart"),Br=Mi()},ref:function(){return yi}}};k1()&&$t.registerPlugin(ze);const nb="/assets/IMG_2776_1779423085437-oVmPnrB5.jpeg";_r.registerPlugin(ze);function fN(){const o=On.useRef(null),t=On.useRef(null),e=On.useRef(null),i=On.useRef(null),a=On.useRef(null);return On.useEffect(()=>{const l=_r.context(()=>{_r.timeline({delay:1.8}).fromTo(a.current,{y:-30,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out"}).fromTo(t.current,{y:50,opacity:0},{y:0,opacity:1,duration:1,ease:"power4.out"},"-=0.6").fromTo(e.current,{y:30,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out"},"-=0.6").fromTo(i.current,{scale:.9,opacity:0},{scale:1,opacity:1,duration:.5,ease:"back.out(1.7)"},"-=0.4"),_r.to(o.current,{yPercent:30,ease:"none",scrollTrigger:{trigger:o.current,start:"top top",end:"bottom top",scrub:!0}})});let c=window.innerWidth,f=window.innerHeight;const p=c<768;let d,_=null,x=null,g=null,v=null,M=null,E=null,S=null,y=null,A=null;try{const D=new Cw;D.fog=new Sg(0,.001);const C=new Ur(75,c/f,.1,1e3);C.position.z=30,_=new WU({alpha:!0,antialias:!p}),_.setSize(c,f),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.current&&o.current.appendChild(_.domElement),v=new md(12,p?1:2),M=new pd({color:4473924,wireframe:!0,transparent:!0,opacity:.3});const F=new Jr(v,M);E=new md(14,p?1:2),S=new pd({color:2003199,wireframe:!0,transparent:!0,opacity:.1});const P=new Jr(E,S),N=new mc;N.add(F),N.add(P),D.add(N),y=new zr;const b=p?300:1e3,L=new Float32Array(b*3);for(let K=0;K<b*3;K++)L[K]=(Math.random()-.5)*100;y.setAttribute("position",new Qr(L,3)),A=new g1({size:.1,color:16777215,transparent:!0,opacity:.4,blending:V_});const z=new zw(y,A);D.add(z);let G=0,V=0,nt=0,rt=0;const X=c/2,B=f/2;x=K=>{G=K.clientX-X,V=K.clientY-B},p||document.addEventListener("mousemove",x);const H=()=>{d=requestAnimationFrame(H),nt=G*.001,rt=V*.001,N.rotation.y+=.002,N.rotation.x+=.001,F.rotation.y+=.001,P.rotation.x-=.002,z.rotation.y+=5e-4,p||(N.rotation.y+=.05*(nt-N.rotation.y),N.rotation.x+=.05*(rt-N.rotation.x),C.position.x+=(G*.01-C.position.x)*.05,C.position.y+=(-V*.01-C.position.y)*.05,C.lookAt(D.position)),_.render(D,C)};H(),g=()=>{c=window.innerWidth,f=window.innerHeight,C.aspect=c/f,C.updateProjectionMatrix(),_.setSize(c,f)},window.addEventListener("resize",g)}catch{}return()=>{l.revert(),cancelAnimationFrame(d),g&&window.removeEventListener("resize",g),x&&!p&&document.removeEventListener("mousemove",x),_&&(o.current&&_.domElement.parentNode===o.current&&o.current.removeChild(_.domElement),_.dispose()),v?.dispose(),M?.dispose(),E?.dispose(),S?.dispose(),y?.dispose(),A?.dispose()}},[]),qt.jsxs("section",{className:"relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center text-center",children:[qt.jsx("div",{ref:o,className:"absolute inset-0 z-0 bg-black"}),qt.jsx("div",{className:"absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none"}),qt.jsxs("div",{className:"relative z-10 flex flex-col items-center px-4 mt-16 max-w-5xl mx-auto",children:[qt.jsx("img",{ref:a,src:nb,alt:"DualRift",className:"w-48 md:w-64 lg:w-80 object-contain mb-8 mix-blend-screen opacity-0"}),qt.jsxs("h1",{ref:t,className:"text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-6 uppercase opacity-0 mix-blend-difference drop-shadow-2xl",children:["Built ",qt.jsx("span",{className:"text-primary",children:"Different"})]}),qt.jsx("p",{ref:e,className:"text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-sans opacity-0",children:"Raw power meets precision. Luxury streetwear forged for the apex predator. Welcome to the rift."}),qt.jsxs("a",{ref:i,href:"https://www.instagram.com/dual.rift",target:"_blank",rel:"noopener noreferrer",className:"group relative inline-block px-8 py-4 bg-white text-black font-display font-bold uppercase tracking-widest overflow-hidden opacity-0 hover:text-white transition-colors duration-300","data-testid":"link-shop-hero",children:[qt.jsx("span",{className:"relative z-10",children:"Shop the Drop"}),qt.jsx("div",{className:"absolute inset-0 h-full w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full z-0"})]})]})]})}const hN=[{title:"Premium Materials",description:"Sourced globally, crafted locally. We use only the finest heavyweight cottons, technical nylons, and distressed denims.",number:"01"},{title:"Limited Runs",description:"Once it's gone, it's gone. No restocks. No second chances. We keep the circle tight.",number:"02"},{title:"Pack Mentality",description:"More than a brand. A collective of creators, disruptors, and rule-breakers.",number:"03"},{title:"Relentless Design",description:"Every seam, zipper, and print is obsessed over. Perfection is the baseline.",number:"04"}];function dN(){const o=On.useRef(null),t=On.useRef([]);On.useEffect(()=>{const a=_r.context(()=>{_r.fromTo(t.current,{y:100,opacity:0},{y:0,opacity:1,duration:1,stagger:.2,ease:"power3.out",scrollTrigger:{trigger:o.current,start:"top 80%"}})},o);return()=>a.revert()},[]);const e=(a,l)=>{const c=t.current[l];if(!c)return;const f=c.getBoundingClientRect(),p=a.clientX-f.left,d=a.clientY-f.top,_=f.width/2,x=f.height/2,g=(d-x)/x*-10,v=(p-_)/_*10;_r.to(c,{rotateX:g,rotateY:v,duration:.5,ease:"power2.out",transformPerspective:1e3,transformOrigin:"center"})},i=a=>{const l=t.current[a];l&&_r.to(l,{rotateX:0,rotateY:0,duration:.5,ease:"power2.out"})};return qt.jsx("section",{ref:o,className:"py-24 px-4 md:px-12 lg:px-24 bg-black relative z-10",children:qt.jsxs("div",{className:"max-w-7xl mx-auto",children:[qt.jsxs("div",{className:"mb-16",children:[qt.jsxs("h2",{className:"text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase",children:["The ",qt.jsx("span",{className:"text-gray-500",children:"Anatomy"})]}),qt.jsx("div",{className:"w-24 h-1 bg-primary"})]}),qt.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 perspective-[1000px]",children:hN.map((a,l)=>qt.jsxs("div",{ref:c=>t.current[l]=c,onMouseMove:c=>e(c,l),onMouseLeave:()=>i(l),className:"bg-card border border-card-border p-8 md:p-12 relative overflow-hidden group cursor-default transition-colors hover:border-primary/50",children:[qt.jsx("div",{className:"absolute -right-4 -top-8 text-[8rem] font-display font-bold text-white/5 select-none pointer-events-none transition-transform group-hover:scale-110 duration-700",children:a.number}),qt.jsx("h3",{className:"text-2xl font-bold font-display text-white mb-4 relative z-10",children:a.title}),qt.jsx("p",{className:"text-gray-400 font-sans leading-relaxed relative z-10",children:a.description})]},l))})]})})}function pN(){const o=On.useRef(null),t=On.useRef(null),e=On.useRef(null);return On.useEffect(()=>{const i=_r.context(()=>{_r.timeline({scrollTrigger:{trigger:o.current,start:"top 70%"}}).fromTo(t.current,{x:-100,opacity:0},{x:0,opacity:1,duration:1.2,ease:"power4.out"}).fromTo(e.current,{x:100,opacity:0},{x:0,opacity:1,duration:1.2,ease:"power4.out"},"-=1")},o);return()=>i.revert()},[]),qt.jsx("section",{ref:o,className:"py-24 px-4 md:px-12 lg:px-24 bg-[#050505] overflow-hidden",children:qt.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16",children:[qt.jsxs("div",{ref:t,className:"w-full lg:w-1/2 flex justify-center relative",children:[qt.jsx("div",{className:"absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none"}),qt.jsx("img",{src:YE,alt:"DualRift Mark",className:"w-64 md:w-96 h-auto object-contain relative z-10 mix-blend-screen drop-shadow-2xl"})]}),qt.jsxs("div",{ref:e,className:"w-full lg:w-1/2 flex flex-col justify-center",children:[qt.jsx("h2",{className:"text-sm tracking-[0.3em] text-primary font-bold uppercase mb-4",children:"The Manifesto"}),qt.jsxs("h3",{className:"text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase leading-tight",children:["Two Sides. ",qt.jsx("br",{}),qt.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white",children:"One Vision."})]}),qt.jsx("p",{className:"text-gray-400 font-sans text-lg mb-6 leading-relaxed",children:"The wolf silhouette represents duality. Light and shadow. Restraint and aggression. We stand at the intersection of high fashion and street culture, building garments that command attention without begging for it."}),qt.jsx("p",{className:"text-gray-400 font-sans text-lg mb-8 leading-relaxed",children:"Founded in the underground, built for the global stage. DualRift isn't just apparel; it's a declaration of independence."})]})]})})}function mN(){const[o,t]=On.useState(""),[e,i]=On.useState(!1),a=l=>{l.preventDefault(),o&&(i(!0),t(""),setTimeout(()=>i(!1),3e3))};return qt.jsx("footer",{className:"bg-black pt-24 pb-8 px-4 md:px-12 lg:px-24 border-t border-white/5",children:qt.jsxs("div",{className:"max-w-7xl mx-auto",children:[qt.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16",children:[qt.jsxs("div",{className:"col-span-1 lg:col-span-2",children:[qt.jsx("img",{src:nb,alt:"DualRift",className:"w-40 mb-6 opacity-80 mix-blend-screen"}),qt.jsx("p",{className:"text-gray-500 font-sans max-w-sm",children:"Luxury streetwear forged for the apex predator. Built Different."})]}),qt.jsxs("div",{children:[qt.jsx("h4",{className:"text-white font-display font-bold uppercase tracking-widest mb-6",children:"Social"}),qt.jsx("ul",{className:"space-y-4",children:[{label:"Instagram",href:"https://www.instagram.com/dual.rift"}].map(({label:l,href:c})=>qt.jsx("li",{children:qt.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-primary transition-colors font-sans","data-testid":`link-social-${l.toLowerCase().replace(/[^a-z]/g,"")}`,children:l})},l))})]}),qt.jsxs("div",{children:[qt.jsx("h4",{className:"text-white font-display font-bold uppercase tracking-widest mb-6",children:"Contact"}),qt.jsx("a",{href:"mailto:dualrift2398@gmail.com",className:"text-gray-400 hover:text-primary transition-colors font-sans text-sm","data-testid":"link-contact-email",children:"dualrift2398@gmail.com"})]}),qt.jsxs("div",{children:[qt.jsx("h4",{className:"text-white font-display font-bold uppercase tracking-widest mb-6",children:"Join the Pack"}),qt.jsx("p",{className:"text-gray-500 font-sans mb-4 text-sm",children:"Early access to drops. No spam."}),qt.jsxs("form",{onSubmit:a,className:"flex flex-col gap-3",children:[qt.jsx("input",{type:"email",placeholder:"EMAIL ADDRESS",value:o,onChange:l=>t(l.target.value),required:!0,className:"bg-transparent border-b border-gray-700 py-2 text-white font-sans focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600","data-testid":"input-newsletter-email"}),qt.jsx("button",{type:"submit",className:"text-left font-display font-bold uppercase tracking-widest text-sm mt-2 hover:text-primary transition-colors","data-testid":"button-newsletter-submit",children:e?qt.jsx("span",{className:"text-green-500",children:"Welcome."}):"Subscribe →"})]})]})]}),qt.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-600 text-xs font-sans",children:[qt.jsxs("p",{children:["© ",new Date().getFullYear()," DUALRIFT. ALL RIGHTS RESERVED."]}),qt.jsxs("div",{className:"flex gap-6 mt-4 md:mt-0",children:[qt.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"PRIVACY"}),qt.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"TERMS"})]})]})]})})}function _N(){const[o,t]=On.useState(!0);return On.useEffect(()=>{document.documentElement.classList.add("dark")},[]),qt.jsxs("div",{className:"relative w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground",children:[o&&qt.jsx(NR,{onComplete:()=>t(!1)}),qt.jsxs("main",{className:"w-full",children:[qt.jsx(fN,{}),qt.jsx(dN,{}),qt.jsx(pN,{}),qt.jsx(mN,{})]})]})}hA.createRoot(document.getElementById("root")).render(qt.jsx(_N,{}));
