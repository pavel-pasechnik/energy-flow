document.addEventListener("DOMContentLoaded",()=>{const n=window.location.pathname.split("/").pop().split(".")[0],i=document.querySelectorAll(".navigation-link");Array.from(i).reduce((t,e)=>(e.getAttribute("href").split("/").pop().split(".")[0]===n&&t.push(e),t),[]).forEach(t=>{t.classList.add("current-page-link")})});
//# sourceMappingURL=header-29b1074c.js.map
