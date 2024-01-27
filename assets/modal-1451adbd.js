import{getRequest as v}from"./api-energy-flow-08c61571.js";import"./vendor-e6025c9a.js";function m(e){v(`/exercises/${e}`).then(t=>{f(t)})}function f(e){const t=document.getElementById("exerciseModal"),i=document.getElementById("exerciseDetails");i.innerHTML="";const o=document.createElement("div");o.innerHTML=`
    <div class="exercise-details">
      <button id="closeButton" class="close-button">
        <img src="./img/close.svg" alt="Close Icon">
      </button>
      <div class="content-wrapper">
        <div class="left-section">
          <div class="exercise-image">
            <img src="${e.gifUrl}" alt="${e.name}" />
          </div>
        </div>
        <div class="right-section">
          <div class="exercise-info">
            <div class="details">
              <h2 class="exercise-name">${e.name}</h2>
              <div class="rating">
  <div class="star-divider-container">
    <div class="star-container">
      <span>${u(e.rating)}</span>
      ${p(e.rating)}
    </div>
  </div>
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
                  <img src="./img/heart.svg" alt="Favorite Icon">
                </button>
                <button class="rating-button rate-button">Give a Rating</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,i.appendChild(o),t.classList.add("is-visible");const n=document.getElementById("favoriteButton");c(e._id)&&l(n),n.addEventListener("click",()=>{c(e._id)?(b(e._id),x(n)):(g(e._id),l(n))});const a=document.getElementById("exerciseModal");a.addEventListener("click",s=>{(s.target===a||s.target.closest("#closeButton"))&&d()})}function u(e){return isNaN(e)?"N/A":Math.round(e).toFixed(1)}function p(e){const t=Math.round(e),i=5-t,o='<img src="./img/colorstar.svg" alt="Filled Star" class="star">',n='<img src="./img/star.svg" alt="Empty Star" class="star">';let a="";for(let s=0;s<t;s++)a+=o;for(let s=0;s<i;s++)a+=n;return a}function c(e){return r().includes(e)}function r(){return JSON.parse(localStorage.getItem("favorites"))||[]}function g(e){const t=r();t.push(e),localStorage.setItem("favorites",JSON.stringify(t))}function b(e){const i=r().filter(o=>o!==e);localStorage.setItem("favorites",JSON.stringify(i))}function l(e){e.innerHTML='<span>Remove from</span> <img src="./img/heart.svg" alt="Favorite Icon">'}function x(e){e.innerHTML='<span>Add to Favorites</span> <img src="./img/heart.svg" alt="Favorite Icon">'}function d(){console.log("Close button clicked");const e=document.getElementById("exerciseModal");e&&e.classList.remove("is-visible")}document.getElementById("startButton").addEventListener("click",()=>{m("64f389465ae26083f39b17df")});document.addEventListener("keydown",e=>{e.key==="Escape"&&d()});
//# sourceMappingURL=modal-1451adbd.js.map
