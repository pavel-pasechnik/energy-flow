import{getRequest as v}from"./api-energy-flow-3175d380.js";import"./vendor-cae18210.js";document.addEventListener("click",e=>{if(e.target.classList.contains("exercises-gallery-btn-start")){const s=e.target.dataset.action;u(s)}});function u(e){v(`/exercises/${e}`).then(s=>{f(s)})}function f(e){const s=document.getElementById("exerciseModal"),t=document.getElementById("exerciseDetails");t.innerHTML="";const o=document.createElement("div");o.innerHTML=`
    <div class="exercise-details">
      <button id="closeButton" class="close-button">
    <svg class="close-icon">
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
                <span class="rating-value">${p(e.rating)}</span>
                <div class="star-rating">${m(e.rating)}</div>
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
    <svg class="heart-icon">
      <use href="./img/sprite.svg#heart"></use>
    </svg>
  </button>
                
              </div>
            </div>
        </div>
      </div>
    </div>`,t.appendChild(o),s.classList.add("is-visible");const n=document.getElementById("favoriteButton");c(e._id)&&l(n),n.addEventListener("click",()=>{c(e._id)?(h(e._id),y(n)):(g(e._id),l(n))});const r=document.getElementById("exerciseModal");r.addEventListener("click",i=>{(i.target===r||i.target.closest("#closeButton"))&&d()})}function p(e){return isNaN(e)?"N/A":Math.round(e).toFixed(1)}function m(e){const s=Math.round(e),t=5-s,o=`<svg class="star">
    <use href="./img/sprite.svg#colorstar"></use>
</svg>`,n=`
  <svg class="star empty-star">
    <use href="./img/sprite.svg#star"></use>
  </svg>
`;let r="";for(let i=0;i<s;i++)r+=o;for(let i=0;i<t;i++)r+=n;return r}function c(e){return a().includes(e)}function a(){return JSON.parse(localStorage.getItem("favorites"))||[]}function g(e){const s=a();s.push(e),localStorage.setItem("favorites",JSON.stringify(s))}function h(e){const t=a().filter(o=>o!==e);localStorage.setItem("favorites",JSON.stringify(t))}function l(e){const s=e.querySelector("span");s.textContent="Remove from",e.querySelector("use").setAttribute("href","./img/sprite.svg#heart")}function y(e){const s=e.querySelector("span");s.textContent="Add to Favorites",e.querySelector("use").setAttribute("href","./img/sprite.svg#heart")}function d(){console.log("Close button clicked");const e=document.getElementById("exerciseModal");e&&e.classList.remove("is-visible")}document.addEventListener("keydown",e=>{e.key==="Escape"&&d()});
//# sourceMappingURL=modal-ab4d8533.js.map
