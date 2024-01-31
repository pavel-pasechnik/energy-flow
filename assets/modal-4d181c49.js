import{getRequest as f}from"./api-energy-flow-8bc8b845.js";import"./vendor-afb53a8d.js";function u(e){const t=document.getElementById("exerciseModal"),s=document.getElementById("modalBackdrop");t.classList.add("is-visible"),s.classList.add("is-visible"),f(`/exercises/${e}`).then(o=>{o&&o.gifUrl?p(o):console.error("Invalid data or missing gifUrl")}).catch(o=>{console.error("Error fetching exercise data",o)})}function l(){const e=document.getElementById("exerciseModal"),t=document.getElementById("modalBackdrop");e.classList.remove("is-visible"),t.classList.remove("is-visible"),location.reload()}function p(e){const t=document.getElementById("exerciseModal"),s=document.getElementById("modalBackdrop"),o=document.getElementById("exerciseDetails");o.innerHTML="";const a=document.createElement("div");a.innerHTML=`
    <div class="exercise-details">
      <button id="closeButton" class="close-button">
        <svg class="close-icon" width="12" height="12" viewBox="0 0 14 14" >
          <path d="M12.8332 1.16666L1.1665 12.8333M1.1665 1.16666L12.8332 12.8333" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
              <span class="rating-value">${m(e.rating)}</span>
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
                   <svg class="heart-icon" width="20" height="20" viewBox="0 0 20 18">
   <path d="M17.3671 2.84166C16.9415 2.41583 16.4361 2.07803 15.8799 1.84757C15.3237 1.6171 14.7275 1.49847 14.1254 1.49847C13.5234 1.49847 12.9272 1.6171 12.371 1.84757C11.8147 2.07803 11.3094 2.41583 10.8838 2.84166L10.0004 3.725L9.11709 2.84166C8.25735 1.98192 7.09128 1.49892 5.87542 1.49892C4.65956 1.49892 3.4935 1.98192 2.63376 2.84166C1.77401 3.70141 1.29102 4.86747 1.29102 6.08333C1.29102 7.29919 1.77401 8.46525 2.63376 9.325L3.51709 10.2083L10.0004 16.6917L16.4838 10.2083L17.3671 9.325C17.7929 8.89937 18.1307 8.39401 18.3612 7.83779C18.5917 7.28158 18.7103 6.6854 18.7103 6.08333C18.7103 5.48126 18.5917 4.88508 18.3612 4.32887C18.1307 3.77265 17.7929 3.26729 17.3671 2.84166Z" stroke="#F6F6F6" fill="transparent" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </button>
                  <button class="rating-button"  data-action="${e._id}">Give a Rating</button>
              </div>
          </div>
        </div>
      </div>
    </div>`,o.appendChild(a),t.classList.add("is-visible");const i=document.getElementById("favoriteButton");d(e._id)&&v(i),i.addEventListener("click",()=>{d(e._id)?(k(e._id),b(i)):(h(e),v(i))}),s.addEventListener("click",r=>{r.stopPropagation(),l()}),document.getElementById("closeButton").addEventListener("click",()=>{l()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&l()})}function m(e){return isNaN(e)?"N/A":Math.round(e).toFixed(1)}function g(e){const t=Math.round(e),s=5-t,o=`<svg class="star" width="18" height="18" viewBox="0 0 34 32">
    <path fill="#EEA10C" d="M15.24 1.561c.504-1.552 2.699-1.552 3.204 0l2.558 7.872a1.684 1.684 0 0 0 1.602 1.164h8.277c1.632 0 2.31 2.088.99 3.047l-6.696 4.865a1.685 1.685 0 0 0-.612 1.883l2.558 7.872c.504 1.552-1.272 2.842-2.592 1.883l-6.696-4.865a1.684 1.684 0 0 0-1.98 0l-6.696 4.865c-1.32.959-3.096-.331-2.592-1.883l2.558-7.872a1.685 1.685 0 0 0-.612-1.883l-6.696-4.865c-1.32-.959-.642-3.047.99-3.047h8.277c.73 0 1.376-.47 1.602-1.164l2.558-7.872z" style="fill:var(--color1, #EEA10C)"/>
  </svg>`,a=`
  <svg class="star empty-star" width="18" height="18" viewBox="0 0 34 32">
    <path d="M15.24 1.561c.504-1.552 2.699-1.552 3.204 0l2.558 7.872a1.684 1.684 0 0 0 1.602 1.164h8.277c1.632 0 2.31 2.088.99 3.047l-6.696 4.865a1.685 1.685 0 0 0-.612 1.883l2.558 7.872c.504 1.552-1.272 2.842-2.592 1.883l-6.696-4.865a1.684 1.684 0 0 0-1.98 0l-6.696 4.865c-1.32.959-3.096-.331-2.592-1.883l2.558-7.872a1.685 1.685 0 0 0-.612-1.883l-6.696-4.865c-1.32-.959-.642-3.047.99-3.047h8.277c.73 0 1.376-.47 1.602-1.164l2.558-7.872z" />
  </svg>`;let i="";for(let n=0;n<t;n++)i+=o;for(let n=0;n<s;n++)i+=a;return i}function d(e){return c().some(s=>s._id===e)}function c(){return JSON.parse(localStorage.getItem("favorites"))||[]}function h(e){const t=c();t.push(e),localStorage.setItem("favorites",JSON.stringify(t))}function k(e){const s=c().filter(o=>o._id!==e);s.length>0?localStorage.setItem("favorites",JSON.stringify(s)):localStorage.removeItem("favorites")}function v(e){const t=e.querySelector("span");t.textContent="Remove from",e.querySelector("use").setAttribute("href",'<path fill="none" stroke="#f6f6f6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z" style="stroke:var(--color3, #f6f6f6)"/>')}function b(e){const t=e.querySelector("span");t.textContent="Add to Favorites",e.querySelector("use").setAttribute("href",'<path fill="none" stroke="#f6f6f6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z" style="stroke:var(--color3, #f6f6f6)"/>')}document.addEventListener("click",e=>{const t=e.target;if(t.classList.contains("exercises-gallery-btn-start")||t.classList.contains("favorites-btn-arrow")){const s=t.dataset.action;u(s,t.classList.contains("exercises-gallery-btn-start"))}});
//# sourceMappingURL=modal-4d181c49.js.map
