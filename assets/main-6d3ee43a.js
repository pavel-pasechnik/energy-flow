(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))_(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&_(o)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function _(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const f="modulepreload",m=function(r){return"/energy-flow/"+r},d={},n=function(s,c,_){if(!c||c.length===0)return s();const t=document.getElementsByTagName("link");return Promise.all(c.map(e=>{if(e=m(e),e in d)return;d[e]=!0;const o=e.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!_)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===e&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${a}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":f,o||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),o)return new Promise((l,u)=>{i.addEventListener("load",l),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})};n(()=>import("./api-energy-flow-3bbb48de.js"),["assets/api-energy-flow-3bbb48de.js","assets/vendor-d1994bf5.js"]);n(()=>import("./header-56830da6.js"),[]);n(()=>import("./modal-c4a9e067.js").then(r=>r.h),[]);n(()=>import("./modal-c4a9e067.js").then(r=>r.e),[]);n(()=>import("./modal-c4a9e067.js").then(r=>r.f),[]);n(()=>import("./modal-c4a9e067.js").then(r=>r.a),[]);n(()=>import("./modal-c4a9e067.js").then(r=>r.b),[]);n(()=>import("./scroll-up-6a55c3d4.js"),[]);n(()=>import("./modal-c4a9e067.js").then(r=>r.m),[]);n(()=>import("./modal-c4a9e067.js").then(r=>r.c),[]);n(()=>import("./modal-rating-e98e9cd1.js"),[]);
//# sourceMappingURL=main-6d3ee43a.js.map