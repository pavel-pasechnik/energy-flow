import{getRequest as u}from"./api-energy-flow-3175d380.js";import"./vendor-cae18210.js";function m(e){const s=document.getElementById("exerciseModal"),t=document.getElementById("modalBackdrop");s.classList.add("is-visible"),t.classList.add("is-visible"),u(`/exercises/${e}`).then(i=>{p(i)})}function c(){const e=document.getElementById("exerciseModal"),s=document.getElementById("modalBackdrop");e.classList.remove("is-visible"),s.classList.remove("is-visible")}function p(e){const s=document.getElementById("exerciseModal"),t=document.getElementById("modalBackdrop"),i=document.getElementById("exerciseDetails");i.innerHTML="";const r=document.createElement("div");r.innerHTML=`
    <div class="exercise-details">
      <button id="closeButton" class="close-button">
        <svg class="close-icon" width="12" height="12" >
          <use href="./img/sprite.svg#close"></use>
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
              <span class="rating-value">${f(e.rating)}</span>
              <div class="star-rating">${g(e.rating)}</div>
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
                  <use href="./img/sprite.svg#heart"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`,i.appendChild(r),s.classList.add("is-visible");const o=document.getElementById("favoriteButton");l(e._id)&&d(o),o.addEventListener("click",()=>{l(e._id)?(b(e._id),y(o)):(h(e),d(o))}),t.addEventListener("click",()=>{c()}),document.getElementById("closeButton").addEventListener("click",()=>{c()}),document.addEventListener("keydown",v=>{v.key==="Escape"&&c()})}function f(e){return isNaN(e)?"N/A":Math.round(e).toFixed(1)}function g(e){const s=Math.round(e),t=5-s,i=`<svg class="star" width="18" height="18" >
    <use href="./img/sprite.svg#colorstar"></use>
  </svg>`,r=`
    <svg class="star empty-star" width="18" height="18" >
      <use href="./img/sprite.svg#star"></use>
    </svg>`;let o="";for(let n=0;n<s;n++)o+=i;for(let n=0;n<t;n++)o+=r;return o}function l(e){return a().some(t=>t._id===e)}function a(){return JSON.parse(localStorage.getItem("favorites"))||[]}function h(e){const s=a();s.push(e),localStorage.setItem("favorites",JSON.stringify(s))}function b(e){const t=a().filter(i=>i._id!==e);localStorage.setItem("favorites",JSON.stringify(t))}function d(e){const s=e.querySelector("span");s.textContent="Remove from",e.querySelector("use").setAttribute("href","./img/sprite.svg#heart")}function y(e){const s=e.querySelector("span");s.textContent="Add to Favorites",e.querySelector("use").setAttribute("href","./img/sprite.svg#heart")}document.addEventListener("click",e=>{if(e.target.classList.contains("exercises-gallery-btn-start")){const s=e.target.dataset.action;m(s)}});
//# sourceMappingURL=modal-ff9caebb.js.map
