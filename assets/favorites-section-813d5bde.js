import{getRequest as m}from"./api-energy-flow-3175d380.js";import"./vendor-cae18210.js";const p=document.querySelector(".favorites-list-item"),h=JSON.parse(localStorage.getItem("favorites"));async function b(){let s=[];for(const e of h)await m(`/exercises/${e}`).then(i=>s.push(i)).catch(i=>console.log(i));return s}async function w(){let s=await b();const e=8;let i=1;function c(){if(window.matchMedia("(max-width: 376px)").matches){let v=function(a,t,n){p.innerHTML="",n--;const l=t*n,o=l+t,r=a.slice(l,o);p.innerHTML=u(r)},d=function(a,t){const n=document.querySelector(".pagination"),l=Math.ceil(a.length/t),o=document.createElement("ul");o.classList.add("favorites-pagination-container-btn");for(let r=0;r<l;r++){const g=f(r+1);o.appendChild(g)}n.appendChild(o)},f=function(a){const t=document.createElement("li");return t.innerText=a,i==a&&t.classList.add("favorites-pagination-btn"),i!==a&&t.classList.add("favorites-pagination-btn-not-activ"),t.addEventListener("click",()=>{i=a,v(s,e,i);let n=document.querySelector("li.favorites-pagination-btn");n.classList.remove("favorites-pagination-btn"),n.classList.add("favorites-pagination-btn-not-activ"),t.classList.remove("favorites-pagination-btn-not-activ"),t.classList.add("favorites-pagination-btn")}),t};v(s,e,i),d(s,e)}else p.innerHTML=u(s)}c(),window.addEventListener("resize",c)}function u(s){return s.reduce((e,{bodyPart:i,burnedCalories:c,target:v,time:d,equipment:f})=>e+`<li class="favorits-item">
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
            <p class="favorites-title-name">${f}</p>
          </div>
          <div class="favorites-description-workout">
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span"
                >Burned calories:
              </span>
              ${c} / ${d} min
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Body part:</span>
              ${i}
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Target:</span>
              ${v}
            </p>
          </div>
        </li>`,"")}w();
//# sourceMappingURL=favorites-section-813d5bde.js.map
