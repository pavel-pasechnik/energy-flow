import{getRequest as m}from"./api-energy-flow-3175d380.js";import"./vendor-cae18210.js";function l(e){const t=document.getElementById("exerciseModal"),s=document.getElementById("modalBackdrop");t.classList.add("is-visible"),s.classList.add("is-visible"),m(`/exercises/${e}`).then(i=>{p(i)})}function a(){const e=document.getElementById("exerciseModal"),t=document.getElementById("modalBackdrop");e.classList.remove("is-visible"),t.classList.remove("is-visible")}function p(e){const t=document.getElementById("exerciseModal"),s=document.getElementById("modalBackdrop"),i=document.getElementById("exerciseDetails");i.innerHTML="";const r=document.createElement("div");r.innerHTML=`
    <div class="exercise-details">
      <button id="closeButton" class="close-button">
        <svg class="close-icon" width="12" height="12" >
          <use href="../img/sprite.svg#close"></use>
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
              <div class="star-rating">${f(e.rating)}</div>
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
                  <use href="../img/sprite.svg#heart"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`,i.appendChild(r),t.classList.add("is-visible");const o=document.getElementById("favoriteButton");d(e._id)&&v(o),o.addEventListener("click",()=>{d(e._id)?(b(e._id),y(o)):(h(e),v(o))}),s.addEventListener("click",()=>{a()}),document.getElementById("closeButton").addEventListener("click",()=>{a()}),document.addEventListener("keydown",u=>{u.key==="Escape"&&a()})}function g(e){return isNaN(e)?"N/A":Math.round(e).toFixed(1)}function f(e){const t=Math.round(e),s=5-t,i=`<svg class="star" width="18" height="18" >
    <use href="../img/sprite.svg#colorstar"></use>
  </svg>`,r=`
    <svg class="star empty-star" width="18" height="18" >
      <use href="../img/sprite.svg#star"></use>
    </svg>`;let o="";for(let n=0;n<t;n++)o+=i;for(let n=0;n<s;n++)o+=r;return o}function d(e){return c().some(s=>s._id===e)}function c(){return JSON.parse(localStorage.getItem("favorites"))||[]}function h(e){const t=c();t.push(e),localStorage.setItem("favorites",JSON.stringify(t))}function b(e){const s=c().filter(i=>i._id!==e);localStorage.setItem("favorites",JSON.stringify(s))}function v(e){const t=e.querySelector("span");t.textContent="Remove from",e.querySelector("use").setAttribute("href","../img/sprite.svg#heart")}function y(e){const t=e.querySelector("span");t.textContent="Add to Favorites",e.querySelector("use").setAttribute("href","../img/sprite.svg#heart")}document.addEventListener("click",e=>{if(e.target.classList.contains("exercises-gallery-btn-start")){const t=e.target.dataset.action;l(t)}if(e.target.classList.contains("favorites-btn-arrow")){const t=e.target.getAttribute("data-action");l(t)}});
//# sourceMappingURL=modal-097fa426.js.map
