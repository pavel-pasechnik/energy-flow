import{getRequest as m}from"./api-energy-flow-b6e4bd35.js";import{s as r}from"./sprite-25720120.js";import"./vendor-afb53a8d.js";function f(e){const t=document.getElementById("exerciseModal"),s=document.getElementById("modalBackdrop");t.classList.add("is-visible"),s.classList.add("is-visible"),m(`/exercises/${e}`).then(i=>{i&&i.gifUrl?p(i):console.error("Invalid data or missing gifUrl")}).catch(i=>{console.error("Error fetching exercise data",i)})}function l(){const e=document.getElementById("exerciseModal"),t=document.getElementById("modalBackdrop");e.classList.remove("is-visible"),t.classList.remove("is-visible"),location.reload()}function p(e){const t=document.getElementById("exerciseModal"),s=document.getElementById("modalBackdrop"),i=document.getElementById("exerciseDetails");i.innerHTML="";const a=document.createElement("div");a.innerHTML=`
    <div class="exercise-details">
      <button id="closeButton" class="close-button">
      <svg class="close-icon" width="12" height="12" >
      <use href="${r}#close"></use>
        </svg>
      </button>
      <div class="content-wrapper">
        <div class="left-section">
          <div class="exercise-image">
            <img src="${e.gifUrl}" alt="${e.name}" />
          </div>
        </div>
        <div class="right-section">
          <div class="exercise-info">
            <h2 class="exercise-name">${e.name}</h2>
            <div class="star-container">
              <span class="rating-value">${g(e.rating)}</span>
              <div class="star-rating">${h(e.rating)}</div>
            </div>
            <div class="info-block">
              <hr class="section-divider-top">
              <p class="info-item"><span class="info-label">Target:</span> ${e.target}</p>
              <p class="info-item"><span class="info-label">Body Part:</span> ${e.bodyPart}</p>
              <p class="info-item"><span class="info-label">Equipment:</span> ${e.equipment}</p>
              <p class="info-item"><span class="info-label">Popularity:</span> ${e.popularity}</p>
              <p class="info-item"><span class="info-label">Burned calories:</span> ${e.burnedCalories}/${e.time} min</p>
              <hr class="section-divider-bottom">
            </div>
            <div class="exercise-description">
              <p>${e.description}</p>
            </div>
              <div class="action-buttons">
                  <button class="favorite-button" id="favoriteButton">
                    <span>Add to Favorites</span>
                    <svg class="heart-icon" width="20" height="20" >
                    <use href="${r}#heart"></use>
                    </svg>

                  </button>
                  <button class="rating-button"  data-action="${e._id}">Give a Rating</button>
              </div>
          </div>
        </div>
      </div>
    </div>`,i.appendChild(a),t.classList.add("is-visible");const o=document.getElementById("favoriteButton");v(e._id)&&u(o),o.addEventListener("click",()=>{v(e._id)?(y(e._id),E(o)):(b(e),u(o))}),s.addEventListener("click",c=>{c.stopPropagation(),l()}),document.getElementById("closeButton").addEventListener("click",()=>{l()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&l()})}function g(e){return isNaN(e)?"N/A":e.toFixed(1)}function h(e){const t=Math.round(e),s=5-t,i=`<svg class="star" width="18" height="18" >
    <use href="${r}#colorstar"></use>
  </svg>`,a=`
    <svg class="star empty-star" width="18" height="18" >
      <use href="${r}#star"></use>
    </svg>`;let o="";for(let n=0;n<t;n++)o+=i;for(let n=0;n<s;n++)o+=a;return o}function v(e){return d().some(s=>s._id===e)}function d(){return JSON.parse(localStorage.getItem("favorites"))||[]}function b(e){const t=d();t.push(e),localStorage.setItem("favorites",JSON.stringify(t))}function y(e){const s=d().filter(i=>i._id!==e);s.length>0?localStorage.setItem("favorites",JSON.stringify(s)):localStorage.removeItem("favorites")}function u(e){const t=e.querySelector("span");t.textContent="Remove from",e.querySelector("use").setAttribute("href",`${r}#heart`)}function E(e){const t=e.querySelector("span");t.textContent="Add to Favorites",e.querySelector("use").setAttribute("href",`${r}#heart`)}document.addEventListener("click",e=>{const t=e.target;if(t.classList.contains("exercises-gallery-btn-start")||t.classList.contains("favorites-btn-arrow")){const s=t.dataset.action;f(s,t.classList.contains("exercises-gallery-btn-start"))}});
//# sourceMappingURL=modal-4ef295cc.js.map
