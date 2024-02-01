import{getRequest as m}from"./api-energy-flow-b6e4bd35.js";import{s as a}from"./sprite-25720120.js";import"./vendor-afb53a8d.js";function v(e,t=!1){const s=document.getElementById("exerciseModal"),o=document.getElementById("modalBackdrop");s.classList.add("is-visible"),o.classList.add("is-visible"),m(`/exercises/${e}`).then(i=>{i&&i.gifUrl?p(i):console.error("Invalid data or missing gifUrl")}).catch(i=>{console.error("Error fetching exercise data",i)}).finally(()=>{document.getElementById("closeButton").addEventListener("click",()=>{r(t)})})}function r(e=!1){const t=document.getElementById("exerciseModal"),s=document.getElementById("modalBackdrop");t.classList.remove("is-visible"),s.classList.remove("is-visible"),e&&location.reload()}function p(e){const t=document.getElementById("exerciseModal"),s=document.getElementById("modalBackdrop"),o=document.getElementById("exerciseDetails");o.innerHTML="";const i=document.createElement("div");i.innerHTML=`
    <div class="exercise-details">
      <button id="closeButton" class="close-button">
      <svg class="close-icon" width="12" height="12" >
      <use href="${a}#close"></use>
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
                    <use href="${a}#heart"></use>
                    </svg>

                  </button>
                  <button class="rating-button"  data-action="${e._id}">Give a Rating</button>
              </div>
          </div>
        </div>
      </div>
    </div>`,o.appendChild(i),t.classList.add("is-visible");const n=document.getElementById("favoriteButton");u(e._id)&&f(n),n.addEventListener("click",()=>{u(e._id)?(y(e._id),B(n)):(b(e),f(n))}),s.addEventListener("click",l=>{l.stopPropagation(),r()}),document.getElementById("closeButton").addEventListener("click",()=>{r()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&r()})}function g(e){return isNaN(e)?"N/A":e.toFixed(1)}function h(e){const t=Math.round(e),s=5-t,o=`<svg class="star" width="18" height="18" >
    <use href="${a}#colorstar"></use>
  </svg>`,i=`
    <svg class="star empty-star" width="18" height="18" >
      <use href="${a}#star"></use>
    </svg>`;let n="";for(let c=0;c<t;c++)n+=o;for(let c=0;c<s;c++)n+=i;return n}function u(e){return d().some(s=>s._id===e)}function d(){return JSON.parse(localStorage.getItem("favorites"))||[]}function b(e){const t=d();t.push(e),localStorage.setItem("favorites",JSON.stringify(t))}function y(e){const s=d().filter(o=>o._id!==e);s.length>0?localStorage.setItem("favorites",JSON.stringify(s)):localStorage.removeItem("favorites")}function f(e){const t=e.querySelector("span");t.textContent="Remove from",e.querySelector("use").setAttribute("href",`${a}#heart`)}function B(e){const t=e.querySelector("span");t.textContent="Add to Favorites",e.querySelector("use").setAttribute("href",`${a}#heart`)}document.addEventListener("click",e=>{const t=e.target;if(t.classList.contains("exercises-gallery-btn-start")){const s=t.dataset.action;v(s,!1)}if(t.classList.contains("favorites-btn-arrow")){const s=t.dataset.action;v(s,!0)}});
//# sourceMappingURL=modal-6048931e.js.map
