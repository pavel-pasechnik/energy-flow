const o=document.querySelector(".go-top");o.addEventListener("click",t);window.addEventListener("scroll",n);function n(){const e=window.scrollY,c=document.documentElement.clientHeight;e>c?o.classList.add("go-top--show"):o.classList.remove("go-top--show")}function t(){window.scrollY>0&&(window.scrollBy(0,-40),setTimeout(t,0))}
//# sourceMappingURL=scroll-up-6a55c3d4.js.map
