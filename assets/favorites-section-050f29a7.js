const p=document.querySelector(".favorites-list-item"),M=document.querySelector(".favorites-container-error-notification"),w=document.querySelector(".favorites-main"),h=document.querySelector(".favorites-pagination-container-btn");function k(){const v=window.location.href,a="favorites";return v.includes(a)}const C=k();async function x(){if(C){let f=function(s){if(s.length===0||s===null){w.remove(),y();return}const r=8;let o=1;if(window.matchMedia("(max-width: 376px)").matches){let c=function(e,t,i){p.innerHTML="",i--;const n=t*i,d=n+t,g=e.slice(n,d);p.innerHTML=L(g)},m=function(e,t){h.innerHTML="";const i=document.querySelector(".pagination"),n=Math.ceil(e.length/t);for(let d=0;d<n;d++){const g=l(d+1);h.appendChild(g)}i.appendChild(h)},l=function(e){const t=document.createElement("li");return t.innerText=e,o==e&&t.classList.add("favorites-pagination-btn"),o!==e&&t.classList.add("favorites-pagination-btn-not-activ"),t.addEventListener("click",()=>{o=e,c(s,r,o);let i=document.querySelector("li.favorites-pagination-btn");i.classList.remove("favorites-pagination-btn"),i.classList.add("favorites-pagination-btn-not-activ"),t.classList.remove("favorites-pagination-btn-not-activ"),t.classList.add("favorites-pagination-btn")}),t};var u=c,b=m,B=l;c(s,r,o),m(s,r)}else p.innerHTML=L(s);p.addEventListener("click",c=>{const l=c.target.closest(".favorites-btn-trash");if(l){let e=l.dataset.id,i=(JSON.parse(localStorage.getItem("favorites"))||[]).filter(n=>n._id!==e);localStorage.setItem("favorites",JSON.stringify(i)),x()}})};var v=f;w.classList.remove("is-hidden");let a=JSON.parse(localStorage.getItem("favorites"))||[];f(a)}else return}function L(v){return v.reduce((a,{bodyPart:f,burnedCalories:s,target:r,time:o,_id:u,name:b})=>a+`<li class="favorits-item">
          <div class="favorites-container-nav">
            <div class="favorites-container-workout">
              <p class="favoritese-title">WORKOUT</p>
              <button type="button" class="favorites-btn-trash" data-id="${u}" ">
                  <svg id="favorites-trash" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M10.6667 4.00001V3.46668C10.6667 2.71994 10.6667 2.34657 10.5213 2.06136C10.3935 1.81047 10.1895 1.6065 9.93865 1.47867C9.65344 1.33334 9.28007 1.33334 8.53333 1.33334H7.46667C6.71993 1.33334 6.34656 1.33334 6.06135 1.47867C5.81046 1.6065 5.60649 1.81047 5.47866 2.06136C5.33333 2.34657 5.33333 2.71994 5.33333 3.46668V4.00001M6.66667 7.66668V11M9.33333 7.66668V11M2 4.00001H14M12.6667 4.00001V11.4667C12.6667 12.5868 12.6667 13.1468 12.4487 13.5747C12.2569 13.951 11.951 14.2569 11.5746 14.4487C11.1468 14.6667 10.5868 14.6667 9.46667 14.6667H6.53333C5.41323 14.6667 4.85318 14.6667 4.42535 14.4487C4.04903 14.2569 3.74307 13.951 3.55132 13.5747C3.33333 13.1468 3.33333 12.5868 3.33333 11.4667V4.00001" stroke="#1B1B1B" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </button>
            </div>
            <div class="favorites-container-start">
 
              <button type="button" class="favorites-btn-arrow favorites-title-btn-start" data-action="${u}">Start

                <svg id="favorites-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1" stroke="#1B1B1B" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </button>
            </div>
          </div>
          <div class="favorite-title-exercises">
            <svg id="favorites-man" viewBox="0 0 32 32" width="32" height="32"><path fill="#7e847f" d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z" 
            style="fill:var(--color2, #7e847f)"/><path fill="#f6f6f6" d="M25.098 11.634a.79.79 0 0 0-1.111-.099l-2.188 1.838-1.006-2.493a.757.757 0 0 
            0-.153-.241 2.148 2.148 0 0 0-1.055-1.078 2.158 2.158 0 0 0-.655-.174c-.049-.025-.093-.059-.148-.076l-3.85-1.073a.792.792 0 0 0-.611.083.77.77 
            0 0 0-.479.448l-1.45 3.728a.791.791 0 0 0 .451 1.022.79.79 0 0 0 1.021-.452l1.225-3.148 1.754.488c-.043.069-.089.134-.124.208l-2.248 
            4.873c-.032.072-.05.144-.073.218l-2.732 4.58-4.572 1.529a1.168 1.168 0 0 0 1.387 1.88l4.679-1.611c.143-.104.247-.24.326-.387.059-.062.126-.112.171-.189l1.629-2.731 2.891 
            2.464-3.094 3.486a1.167 1.167 0 0 0 1.747 1.547l3.861-4.349c.12-.134.192-.289.24-.451.029-.088.029-.179.036-.27 0-.046.017-.088.014-.131a1.143 
            1.143 0 0 0-.401-.849l-2.661-2.269c.192-.183.355-.4.473-.655l1.724-3.733.552 1.471a.742.742 0 0 0 .159.366.754.754 0 0 0 
            .303.211c.012.006.025.007.039.01a.738.738 0 0 0 .489.024l.003-.001c.024-.006.049-.001.073-.012a.8.8 0 0 0 .311-.226l3.14-2.665c.334-.281.193-.777-.088-1.111zm-3.972-1.899a2.201 
            2.201 0 1 0 0-4.402 2.201 2.201 0 0 0 0 4.402z" style="fill:var(--color3, #f6f6f6)"/>              
            </svg>
            <p class="favorites-title-name">${b}</p>
          </div>
          <div class="favorites-description-workout">
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span"
                >Burned calories:
              </span>
              ${s} / ${o} min
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Body part:</span>
              ${f}
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Target:</span>
              ${r}
            </p>
          </div>
        </li>`,"")}function y(){return M.innerHTML=`<h2 class="favorites-container-error-title">Favorites</h2>
    <div class="favorites-container-error-description">
      <img
        srcset="
          ../img/favorites-section/mobile-dumbbell.png             85w,
          ../img/favorites-section/mobile-dumbbell@2x.png         170w,
          ../img/favorites-section/tablet-desctop-dumbbell.png    116w,
          ../img/favorites-section/tablet-desctop-dumbbell@2x.png 231w
        "
        sizes="
      (min-width: 1440px) 116px, 
      (min-width: 768px) 116px, 
      (max-width: 767px) 85px"
        src="../img/favorites-section/mobile-dumbbell.png"
        alt="dumbbell"
      />

      <p class="favorites-error-description">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>
    </div>`}x();
//# sourceMappingURL=favorites-section-050f29a7.js.map
