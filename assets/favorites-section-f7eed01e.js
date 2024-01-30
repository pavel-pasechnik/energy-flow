const u=document.querySelector(".favorites-list-item"),S=document.querySelector(".favorites-container-error-notification"),h=document.querySelector(".favorites-main"),b=document.querySelector(".favorites-pagination-container-btn");function k(){const f=window.location.href,o="favorites";return f.includes(o)}const y=k();async function T(){if(y){let a=function(e){if(console.log(e),e.length===0||e===null){h.remove(),x();return}const r=8;let s=1;if(window.matchMedia("(max-width: 376px)").matches){let c=function(i,t,n){u.innerHTML="",n--;const p=t*n,v=p+t,m=i.slice(p,v);u.innerHTML=L(m)},l=function(i,t){b.innerHTML="";const n=document.querySelector(".pagination"),p=Math.ceil(i.length/t);for(let v=0;v<p;v++){const m=d(v+1);b.appendChild(m)}n.appendChild(b)},d=function(i){const t=document.createElement("li");return t.innerText=i,s==i&&t.classList.add("favorites-pagination-btn"),s!==i&&t.classList.add("favorites-pagination-btn-not-activ"),t.addEventListener("click",()=>{s=i,c(e,r,s);let n=document.querySelector("li.favorites-pagination-btn");n.classList.remove("favorites-pagination-btn"),n.classList.add("favorites-pagination-btn-not-activ"),t.classList.remove("favorites-pagination-btn-not-activ"),t.classList.add("favorites-pagination-btn")}),t};var w=c,g=l,M=d;c(e,r,s),l(e,r)}else u.innerHTML=L(e);u.addEventListener("click",c=>{const l=c.target;if(e.length===0||e===null){h.classList.add("is-hidden"),x();return}if(l.classList.contains("favorites-btn-trash")){let d=l.dataset.id;const i=e.filter(t=>t._id!==d);localStorage.setItem("favorites",JSON.stringify(i)),console.log(d),a(i)}})};var f=a;h.classList.remove("is-hidden");let o=JSON.parse(localStorage.getItem("favorites"))||[];a(o)}else return}function L(f){return f.reduce((o,{bodyPart:a,burnedCalories:e,target:r,time:s,equipment:w,_id:g})=>o+`<li class="favorits-item">
          <div class="favorites-container-nav">
            <div class="favorites-container-workout">
              <p class="favoritese-title">WORKOUT</p>
              <button type="button" class="favorites-btn-trash" data-id="${g}" ">
                <svg width="16" height="16" class="favorites-trash">
                  <use href="../src/img/sprite.svg#favorites-trash"></use>
                </svg>
              </button>
            </div>
            <div class="favorites-container-start">
              <p class="favorites-title-btn-start">Start</p>
              <button type="button" class="favorites-btn-arrow" data-action="${g}">
                <svg class="favorites-arrow" width="14" height="14" alt="arrow">
                  <use href="../src/img/sprite.svg#favorites-arrow"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="favorite-title-exercises">
            <svg width="24" height="24" class="favorites-icon-man">
              <use href="../src/img/sprite.svg#favorites-man"></use>
            </svg>
            <p class="favorites-title-name">${r}</p>
          </div>
          <div class="favorites-description-workout">
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span"
                >Burned calories:
              </span>
              ${e} / ${s} min
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Body part:</span>
              ${a}
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Target:</span>
              ${w}
            </p>
          </div>
        </li>`,"")}function x(){return S.innerHTML=`<h2 class="favorites-container-error-title">Favorites</h2>
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
    </div>`}T();
//# sourceMappingURL=favorites-section-f7eed01e.js.map
