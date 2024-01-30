import{getRequest as E}from"./api-energy-flow-1a327691.js";import{S as k}from"./vendor-cae18210.js";const u=document.querySelector(".subspecies"),q=document.querySelector(".exercises-nav-panel"),p=document.querySelector(".exercises-gallery"),h=document.querySelector(".exercises-nav-input"),x=document.querySelector(".exercises-nav-input-block");let $=1,g="Muscles",c,v=window.innerWidth,o=0,n=0,w="";v<=375?(o=8,n=8):v<=768?(o=12,n=8):(o=12,n=9);const b={filter:g,page:$,limit:o},t={page:$,limit:n},f=new k(".subspecies a",{captionDelay:250,captionsData:"alt",close:!0});function S(e){E("/filters",e).then(s=>{const{results:i}=s;console.log(i);let d=i.reduce((a,l)=>a+`<a class="subspecies-item" href="">
  <button
   type="button"
   data-value="${l.name}"
    class="subspecies-item-btn"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${l.imgUrl}) lightgray -16.825px
          0.844px / 121.36% 108.504% no-repeat;
    "
  >
  <p class="subspecies-item-name">${l.name}</p>
  <p class="subspecies-item-group">${l.filter}</p>
    </button>
</a>`,"");u.innerHTML=d,f.refresh()}).catch(s=>{console.error(s.message)})}S(b);q.addEventListener("click",e=>{g=e.target.textContent,b.filter=g,delete t[c],S(b),f.refresh(),y(u),m(p),m(x)});function y(e){e.style.display="flex"}function m(e){e.style.display="none"}u.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(w=e.target.dataset.value,c=g.toLowerCase(),c==="body parts"&&(c="bodypart"),t[c]=w,console.log(t),m(u),y(p),y(x),L(t),console.log(t))});x.addEventListener("submit",e=>{e.preventDefault(),console.log(h.value),t.keyword=h.value.trim(),console.log(t),L(t),delete t.keyword,console.log(t)});function B(){p.addEventListener("click",e=>{if(e.preventDefault(),e.target.tagName==="BUTTON"){const s=e.target.dataset.action;return console.log(s),s}})}B();function L(e){E("/exercises",e).then(s=>{console.log(s);const{page:i,totalPages:d,results:a}=s;console.log(`page: ${i}, totalPages: ${d}`),console.log(a),Array.from(a).length===0&&console.log("Without result");let l=a.reduce((T,r)=>T+`<a class="exercises-gallery-item" >
  <div class="exercises-gallery-top">
    <div class="exercises-gallery-top-left">
      <p class="badge">WORKOUT</p>
      <label class="exercises-gallery-raiting">${r.rating}</label
      ><svg class="exercises-gallery-raiting-svg" width="18" height="18">
        <use href="../img/Exercises/symbol-defs.svg#icon-star"></use>
      </svg>
    </div>
    <button class="exercises-gallery-btn-start" data-action="${r._id}" type="button">
      Start
      <svg class="exercises-gallery-btn-icon" width="16" height="16">
        <use href="../img/Exercises/symbol-defs.svg#icon-arrow"></use>
      </svg>
    </button>
  </div>
  <div class="exercises-gallery-center">
    <svg class="exercises-gallery-center-icon" width="24" height="24">
      <use href="../img/Exercises/symbol-defs.svg#icon-icon"></use>
    </svg>
    <label class="exercises-gallery-name">${r.name}</label>
  </div>
  <ul class="exercises-gallery-bottom">
    <li class="exercises-gallery-bottom-point">
      Burned calories:<span class="exercises-gallery-bottom-point-value"
        >${r.burnedCalories} / 3 min</span
      >
    </li>
    <li class="exercises-gallery-bottom-point">
      Body part:
      <span class="exercises-gallery-bottom-point-value"
        >${r.bodyPart}</span
      >
    </li>
    <li class="exercises-gallery-bottom-point">
      Target:<span class="exercises-gallery-bottom-point-value"
        >${r.target}</span
      >
    </li>
  </ul>
</a>`,"");p.innerHTML=l,f.refresh()}).catch(s=>{console.log(s)})}
//# sourceMappingURL=exercises-bc7ff547.js.map
