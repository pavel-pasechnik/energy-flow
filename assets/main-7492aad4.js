(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))_(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&_(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function _(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const f="modulepreload",m=function(r){return"/energy-flow/"+r},d={},i=function(s,l,_){if(!l||l.length===0)return s();const t=document.getElementsByTagName("link");return Promise.all(l.map(e=>{if(e=m(e),e in d)return;d[e]=!0;const o=e.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!_)for(let c=t.length-1;c>=0;c--){const u=t[c];if(u.href===e&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":f,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((c,u)=>{n.addEventListener("load",c),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})};i(()=>import("./api-energy-flow-331c5a73.js"),["assets/api-energy-flow-331c5a73.js","assets/vendor-6b5a3f8c.js","assets/vendor-ef539242.css"]);i(()=>import("./header-1bc9da6b.js"),[]);i(()=>import("./modal-0c23f601.js").then(r=>r.h),[]);i(()=>import("./exercises-31b28a65.js"),["assets/exercises-31b28a65.js","assets/api-energy-flow-331c5a73.js","assets/vendor-6b5a3f8c.js","assets/vendor-ef539242.css"]);i(()=>import("./modal-0c23f601.js").then(r=>r.f),[]);i(()=>import("./modal-0c23f601.js").then(r=>r.a),[]);i(()=>import("./footer-334b742c.js"),["assets/footer-334b742c.js","assets/vendor-6b5a3f8c.js","assets/vendor-ef539242.css"]);i(()=>import("./scroll-up-6a55c3d4.js"),[]);i(()=>import("./modal-0c23f601.js").then(r=>r.m),[]);i(()=>import("./modal-0c23f601.js").then(r=>r.b),[]);i(()=>import("./modal-rating-e98e9cd1.js"),[]);
//# sourceMappingURL=main-7492aad4.js.map
