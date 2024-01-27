function a(){const t=document.querySelectorAll(".navigation-link"),e=document.location.pathname;for(let n=0;n<t.length;n++){const o=t[n].pathname;(e==="/"&&n===0||e!=="/"&&o===e)&&t[n].classList.add("current-page-link")}}document.addEventListener("DOMContentLoaded",function(){a()});
//# sourceMappingURL=header-7460c33d.js.map
