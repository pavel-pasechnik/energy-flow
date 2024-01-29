import"./api-energy-flow-3175d380.js";import"./vendor-cae18210.js";const p=document.querySelector(".favorites-list-item"),m=document.querySelector(".favorites-container-error-notification");async function b(){function o(){let e=JSON.parse(localStorage.getItem("favorites"));console.log(e),h(e);const l=8;let s=1;if(window.matchMedia("(max-width: 376px)").matches){let n=function(i,t,a){p.innerHTML="",a--;const f=t*a,v=f+t,d=i.slice(f,v);p.innerHTML=u(d)},r=function(i,t){const a=document.querySelector(".pagination"),f=Math.ceil(i.length/t),v=document.createElement("ul");v.classList.add("favorites-pagination-container-btn");for(let d=0;d<f;d++){const g=c(d+1);v.appendChild(g)}a.appendChild(v)},c=function(i){const t=document.createElement("li");return t.innerText=i,s==i&&t.classList.add("favorites-pagination-btn"),s!==i&&t.classList.add("favorites-pagination-btn-not-activ"),t.addEventListener("click",()=>{s=i,n(e,l,s);let a=document.querySelector("li.favorites-pagination-btn");a.classList.remove("favorites-pagination-btn"),a.classList.add("favorites-pagination-btn-not-activ"),t.classList.remove("favorites-pagination-btn-not-activ"),t.classList.add("favorites-pagination-btn")}),t};n(e,l,s),r(e,l)}else p.innerHTML=u(e);p.addEventListener("click",n=>{const r=n.target;if(r.classList.contains("favorites-btn-trash")){let c=r.dataset.id;const i=e.filter(t=>t._id!==c);localStorage.setItem("favorites",JSON.stringify(i)),console.log(c),o()}})}o()}function u(o){return o.reduce((e,{bodyPart:l,burnedCalories:s,target:n,time:r,equipment:c,_id:i})=>e+`<li class="favorits-item">
          <div class="favorites-container-nav">
            <div class="favorites-container-workout">
              <p class="favoritese-title">WORKOUT</p>
              <button type="button" class="favorites-btn-trash" data-id="${i}" ">
                <svg width="16" height="16" class="favorites-trash">
                  <use href="../img/sprite.svg#favorites-trash"></use>
                </svg>
              </button>
            </div>
            <div class="favorites-container-start">
              <p class="favorites-title-btn-start">Start</p>
              <button type="button" class="favorites-btn-arrow">
                <svg class="favorites-arrow" width="14" height="14" alt="arrow">
                  <use href="../img/sprite.svg#favorites-arrow"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="favorite-title-exercises">
            <svg width="24" height="24" class="favorites-icon-man">
              <use href="../img/sprite.svg#favorites-man"></use>
            </svg>
            <p class="favorites-title-name">${n}</p>
          </div>
          <div class="favorites-description-workout">
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span"
                >Burned calories:
              </span>
              ${s} / ${r} min
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Body part:</span>
              ${l}
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Target:</span>
              ${c}
            </p>
          </div>
        </li>`,"")}function h(o){if(o.length===0)return m.innerHTML=`<h2 class="favorites-container-error-title">Favorites</h2>
    <div class="favorites-container-error-description">
      <img
        srcset="
          ../img/favorites-section/mobile-dumbbell.png             85w,
          ../img/favorites-section/mobile-dumbbell@2x.png         170w,
          ../img/favorites-section/tablet-desctop-dumbbell.png    116w,
          ../img/favorites-section/tablet-desctop-dumbbell@2x.png 116w
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
    </div>`}b();
//# sourceMappingURL=favorites-section-561b5e14.js.map
