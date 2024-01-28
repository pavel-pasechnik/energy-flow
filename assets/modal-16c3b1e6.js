import{getRequest as v}from"./api-energy-flow-29420f42.js";import"./vendor-d0789155.js";document.addEventListener("click",t=>{if(t.target.classList.contains("exercises-gallery-btn-start")){const e=t.target.dataset.action;m(e)}});function m(t){v(`/exercises/${t}`).then(e=>{f(e)})}function f(t){const e=document.getElementById("exerciseModal"),i=document.getElementById("exerciseDetails");i.innerHTML="";const o=document.createElement("div");o.innerHTML=`
    <div class="exercise-details">
      <button id="closeButton" class="close-button">
        <img src="./img/close.svg" alt="Close Icon">
      </button>
      <div class="content-wrapper">
        <div class="left-section">
          <div class="exercise-image">
            <img src="${t.gifUrl}" alt="${t.name}" />
          </div>
        </div>
        <div class="right-section">
          <div class="exercise-info">
            <div class="details">
              <h2 class="exercise-name">${t.name}</h2>
              <div class="star-container">
                <span class="rating-value">${g(t.rating)}</span>
                <div class="star-rating">${u(t.rating)}</div>
              </div>
              <div class="info-block">
                <hr class="section-divider-top">
                <p class="info-item"><span class="info-label">Target:</span> ${t.target}</p>
                <p class="info-item"><span class="info-label">Body Part:</span> ${t.bodyPart}</p>
                <p class="info-item"><span class="info-label">Equipment:</span> ${t.equipment}</p>
                <p class="info-item"><span class="info-label">Popularity:</span> ${t.popularity}</p>
                <p class="info-item"><span class="info-label">Burned calories:</span> ${t.burnedCalories}/${t.time} min</p>
                <hr class="section-divider-bottom">
              </div>
              <div class="exercise-description">
                <p>${t.description}</p>
              </div>
              <div class="action-buttons">
                <button class="favorite-button" id="favoriteButton">
                  <span>Add to Favorites</span>
                  <img src="./img/heart.svg" alt="Favorite Icon">
                </button>
                <button class="rating-button rate-button">Give a Rating</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,i.appendChild(o),e.classList.add("is-visible");const n=document.getElementById("favoriteButton");c(t._id)&&l(n),n.addEventListener("click",()=>{c(t._id)?(b(t._id),x(n)):(p(t._id),l(n))});const a=document.getElementById("exerciseModal");a.addEventListener("click",s=>{(s.target===a||s.target.closest("#closeButton"))&&d()})}function g(t){return isNaN(t)?"N/A":Math.round(t).toFixed(1)}function u(t){const e=Math.round(t),i=5-e,o='<img src="./img/colorstar.svg" alt="Filled Star" class="star">',n='<img src="./img/star.svg" alt="Empty Star" class="star">';let a="";for(let s=0;s<e;s++)a+=o;for(let s=0;s<i;s++)a+=n;return a}function c(t){return r().includes(t)}function r(){return JSON.parse(localStorage.getItem("favorites"))||[]}function p(t){const e=r();e.push(t),localStorage.setItem("favorites",JSON.stringify(e))}function b(t){const i=r().filter(o=>o!==t);localStorage.setItem("favorites",JSON.stringify(i))}function l(t){t.innerHTML='<span>Remove from</span> <img src="./img/heart.svg" alt="Favorite Icon">'}function x(t){t.innerHTML='<span>Add to Favorites</span> <img src="./img/heart.svg" alt="Favorite Icon">'}function d(){console.log("Close button clicked");const t=document.getElementById("exerciseModal");t&&t.classList.remove("is-visible")}document.addEventListener("keydown",t=>{t.key==="Escape"&&d()});
//# sourceMappingURL=modal-16c3b1e6.js.map
