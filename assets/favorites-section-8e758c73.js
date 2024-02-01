const B="data:image/png;base64,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",U="/energy-flow/assets/mobile-dumbbell@2x-f820c5ff.png",q="/energy-flow/assets/tablet-desctop-dumbbell-2db80238.png",C="/energy-flow/assets/tablet-desctop-dumbbell@2x-16744c02.png",p=document.querySelector(".favorites-list-item"),y=document.querySelector(".favorites-container-error-notification"),h=document.querySelector(".favorites-main"),m=document.querySelector(".favorites-pagination-container-btn");function k(){const f=window.location.href,n="favorites";return f.includes(n)}const E=k();async function w(){if(E){let v=function(a){if(a.length===0||a===null){h.remove(),x();return}const o=8;let s=1;if(window.matchMedia("(max-width: 376px)").matches){let c=function(e,t,i){p.innerHTML="",i--;const r=t*i,d=r+t,A=e.slice(r,d);p.innerHTML=S(A)},g=function(e,t){m.innerHTML="";const i=Math.ceil(e.length/t);if(i>1){const r=document.querySelector(".favorites-pagination");for(let d=0;d<i;d++){const A=l(d+1);m.appendChild(A)}r.appendChild(m)}else return},l=function(e){const t=document.createElement("li");return t.innerText=e,s==e&&t.classList.add("favorites-pagination-btn"),s!==e&&t.classList.add("favorites-pagination-btn-not-activ"),t.addEventListener("click",()=>{s=e,c(a,o,s);let i=document.querySelector("li.favorites-pagination-btn");i.classList.remove("favorites-pagination-btn"),i.classList.add("favorites-pagination-btn-not-activ"),t.classList.remove("favorites-pagination-btn-not-activ"),t.classList.add("favorites-pagination-btn")}),t};var u=c,b=g,M=l;c(a,o,s),g(a,o)}else p.innerHTML=S(a);p.addEventListener("click",c=>{const l=c.target.closest(".favorites-btn-trash");if(l){let e=l.dataset.id,i=(JSON.parse(localStorage.getItem("favorites"))||[]).filter(r=>r._id!==e);localStorage.setItem("favorites",JSON.stringify(i)),w()}})};var f=v;h.classList.remove("is-hidden");let n=JSON.parse(localStorage.getItem("favorites"))||[];v(n)}else return}function S(f){return f.reduce((n,{bodyPart:v,burnedCalories:a,target:o,time:s,_id:u,name:b})=>n+`<li class="favorits-item">
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
              ${a} / ${s} min
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Body part:</span>
              ${v}
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Target:</span>
              ${o}
            </p>
          </div>
        </li>`,"")}function x(){return y.innerHTML=`<h2 class="favorites-container-error-title">Favorites</h2>
    <div class="favorites-container-error-description">
      <img
        srcset="
          ${B}             85w,
          ${U}         170w,
          ${q}    116w,
          ${C} 231w
        "
        sizes="
      (min-width: 1440px) 116px,
      (min-width: 768px) 116px,
      (max-width: 767px) 85px"
        src="./img/favorites-section/mobile-dumbbell.png"
        alt="dumbbell"
      />

      <p class="favorites-error-description">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>
    </div>`}w();
//# sourceMappingURL=favorites-section-8e758c73.js.map
