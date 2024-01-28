import{getRequest as o}from"./api-energy-flow-a51fea21.js";import"./vendor-cae18210.js";const n=document.querySelector(".favorites-list-item"),c=JSON.parse(localStorage.getItem("favorites"));async function v(){for(const t of c){let e=await o(`/exercises/${t}`).then(s=>s).catch(s=>console.log(s));n.insertAdjacentHTML("beforeend",l(e))}}function l(t){const{bodyPart:e,burnedCalories:s,target:i,time:a,equipment:r}=t;return`<li class="favorits-item">
          <div class="favorites-container-nav">
            <div class="favorites-container-workout">
              <p class="favoritese-title">WORKOUT</p>
              <button type="button" class="favorites-btn-trash">
                <svg width="16" height="16" class="favorites-trash">
                  <use href="./img/symbol-defs.svg#icon-trash-favorites"></use>
                </svg>
              </button>
            </div>
            <div class="favorites-container-start">
              <p class="favorites-title-btn-start">Start</p>
              <button type="button" class="favorites-btn-arrow">
                <svg class="favorites-arrow" width="14" height="14" alt="arrow">
                  <use href="../img/favorites-arrow.svg"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="favorite-title-exercises">
            <svg width="24" height="24" class="favorites-icon-man">
              <use href="./img/symbol-defs.svg#icon-icon-favorites"></use>
            </svg>
            <p class="favorites-title-name">${r}</p>
          </div>
          <div class="favorites-description-workout">
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span"
                >Burned calories:
              </span>
              ${s} / ${a} min
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Body part:</span>
              ${e}
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Target:</span>
              ${i}
            </p>
          </div>
        </li>`}v();
//# sourceMappingURL=favorites-section-a414f66f.js.map
