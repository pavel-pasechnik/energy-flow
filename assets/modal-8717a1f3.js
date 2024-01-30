import{getRequest as f}from"./api-energy-flow-1a327691.js";import"./vendor-cae18210.js";function u(e){const s=document.getElementById("exerciseModal"),t=document.getElementById("modalBackdrop");s.classList.add("is-visible"),t.classList.add("is-visible"),f(`/exercises/${e}`).then(i=>{i&&i.gifUrl?m(i):console.error("Invalid data or missing gifUrl")}).catch(i=>{console.error("Error fetching exercise data",i)})}function c(){const e=document.getElementById("exerciseModal"),s=document.getElementById("modalBackdrop");e.classList.remove("is-visible"),s.classList.remove("is-visible")}function m(e){const s=document.getElementById("exerciseModal"),t=document.getElementById("modalBackdrop"),i=document.getElementById("exerciseDetails");i.innerHTML="";const r=document.createElement("div");r.innerHTML=`
    <div class="exercise-details">
      <button id="closeButton" class="close-button">
        <svg class="close-icon" width="12" height="12" >
          <use href="/energy-flow/assets/sprite-0567d6ea.svg#close"></use>
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
              <div class="star-rating">${p(e.rating)}</div>
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
                  <use href="/energy-flow/assets/sprite-0567d6ea.svg#heart"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`,i.appendChild(r),s.classList.add("is-visible");const o=document.getElementById("favoriteButton");d(e._id)&&v(o),o.addEventListener("click",()=>{d(e._id)?(y(e._id),b(o)):(h(e),v(o))}),t.addEventListener("click",a=>{a.stopPropagation(),c()}),document.getElementById("closeButton").addEventListener("click",()=>{c()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&c()})}function g(e){return isNaN(e)?"N/A":Math.round(e).toFixed(1)}function p(e){const s=Math.round(e),t=5-s,i=`<svg class="star" width="18" height="18" >
    <use href="/energy-flow/assets/sprite-0567d6ea.svg#colorstar"></use>
  </svg>`,r=`
    <svg class="star empty-star" width="18" height="18" >
      <use href="/energy-flow/assets/sprite-0567d6ea.svg#star"></use>
    </svg>`;let o="";for(let n=0;n<s;n++)o+=i;for(let n=0;n<t;n++)o+=r;return o}function d(e){return l().some(t=>t._id===e)}function l(){return JSON.parse(localStorage.getItem("favorites"))||[]}function h(e){const s=l();s.push(e),localStorage.setItem("favorites",JSON.stringify(s))}function y(e){const t=l().filter(i=>i._id!==e);t.length>0?localStorage.setItem("favorites",JSON.stringify(t)):localStorage.removeItem("favorites")}function v(e){const s=e.querySelector("span");s.textContent="Remove from",e.querySelector("use").setAttribute("href","/energy-flow/assets/sprite-0567d6ea.svg#heart")}function b(e){const s=e.querySelector("span");s.textContent="Add to Favorites",e.querySelector("use").setAttribute("href","/energy-flow/assets/sprite-0567d6ea.svg#heart")}document.addEventListener("click",e=>{const s=e.target;if(s.classList.contains("exercises-gallery-btn-start")||s.classList.contains("favorites-btn-arrow")){const t=s.dataset.action;u(t,s.classList.contains("exercises-gallery-btn-start"))}});
//# sourceMappingURL=modal-8717a1f3.js.map
