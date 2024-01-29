import"./api-energy-flow-3175d380.js";import"./vendor-cae18210.js";const f=document.querySelector(".favorites-list-item"),b=document.querySelector(".favorites-container-error-notification"),g=document.querySelector(".favorites-main"),u=document.querySelector(".favorites-pagination-container-btn");g.classList.remove("is-hidden");async function w(){function n(){let i=JSON.parse(localStorage.getItem("favorites"));if(i.length===0||i===null)return g.classList.add("is-hidden"),h();console.log(i);const l=8;let s=1;if(window.matchMedia("(max-width: 376px)").matches){let o=function(e,t,a){f.innerHTML="",a--;const v=t*a,d=v+t,p=e.slice(v,d);f.innerHTML=m(p)},r=function(e,t){u.innerHTML="";const a=document.querySelector(".pagination"),v=Math.ceil(e.length/t);for(let d=0;d<v;d++){const p=c(d+1);u.appendChild(p)}a.appendChild(u)},c=function(e){const t=document.createElement("li");return t.innerText=e,s==e&&t.classList.add("favorites-pagination-btn"),s!==e&&t.classList.add("favorites-pagination-btn-not-activ"),t.addEventListener("click",()=>{s=e,o(i,l,s);let a=document.querySelector("li.favorites-pagination-btn");a.classList.remove("favorites-pagination-btn"),a.classList.add("favorites-pagination-btn-not-activ"),t.classList.remove("favorites-pagination-btn-not-activ"),t.classList.add("favorites-pagination-btn")}),t};o(i,l,s),r(i,l)}else f.innerHTML=m(i);f.addEventListener("click",o=>{const r=o.target;if(i.length===0||i===null)return g.classList.add("is-hidden"),h();if(r.classList.contains("favorites-btn-trash")){let c=r.dataset.id;const e=i.filter(t=>t._id!==c);localStorage.setItem("favorites",JSON.stringify(e)),console.log(c),n()}})}n(),window.addEventListener("resize",n)}function m(n){return n.reduce((i,{bodyPart:l,burnedCalories:s,target:o,time:r,equipment:c,_id:e})=>i+`<li class="favorits-item">
          <div class="favorites-container-nav">
            <div class="favorites-container-workout">
              <p class="favoritese-title">WORKOUT</p>
              <button type="button" class="favorites-btn-trash" data-id="${e}" ">
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
            <p class="favorites-title-name">${o}</p>
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
        </li>`,"")}function h(n){return b.innerHTML=`<h2 class="favorites-container-error-title">Favorites</h2>
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
    </div>`}w();
//# sourceMappingURL=favorites-section-2da4485d.js.map
