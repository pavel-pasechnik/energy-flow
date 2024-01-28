import{getRequest as d}from"./api-energy-flow-29420f42.js";import{S as x}from"./vendor-d0789155.js";const a=document.querySelector(".subspecies"),f=document.querySelector(".exercises-nav-panel"),i=document.querySelector(".exercises-gallery");document.querySelector(".exercises-nav-input");let v=1,c="Muscles";const u={filter:c,page:v,limit:12};let p="";const r={page:1,limit:9},g=new x(".subspecies a",{captionDelay:250,captionsData:"alt",close:!0});function b(e){d("/filters",e).then(s=>{const{results:l}=s;console.log(l);let n=l.reduce((o,t)=>o+`<a class="subspecies-item" href="">
  <button
   type="button"
   data-value="${t.name}"
    class="subspecies-item-btn"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${t.imgUrl}) lightgray -16.825px
          0.844px / 121.36% 108.504% no-repeat;
    "
  >
  <p class="subspecies-item-name">${t.name}</p>
  <p class="subspecies-item-group">${t.filter}</p>
    </button>
</a>`,"");a.innerHTML=n,g.refresh()}).catch(s=>{console.log(s)})}b(u);f.addEventListener("click",e=>{c=e.target.textContent,u.filter=c,b(u),g.refresh(),y(a),m(i)});function y(e){e.style.display="flex"}function m(e){e.style.display="none"}a.addEventListener("click",e=>{e.preventDefault(),p=e.target.dataset.value;let s=c.toLowerCase();s==="body parts"&&(s="bodypart"),r[s]=p,console.log(r),m(a),y(i),E(r),delete r[s],console.log(r)});function h(){i.addEventListener("click",e=>{if(e.preventDefault(),e.target.tagName==="BUTTON"){const s=e.target.dataset.action;return console.log(s),s}})}h();function E(e){d("/exercises",e).then(s=>{const{results:l}=s;console.log(l);let n=l.reduce((o,t)=>o+`<a class="exercises-gallery-item" >
  <div class="exercises-gallery-top">
    <div class="exercises-gallery-top-left">
      <p class="badge">WORKOUT</p>
      <label class="exercises-gallery-raiting">${t.rating}</label
      ><svg class="exercises-gallery-raiting-svg" width="18" height="18">
        <use href="../img/Exercises/symbol-defs.svg#icon-star"></use>
      </svg>
    </div>
    <button class="exercises-gallery-btn-start" data-action="${t._id}" type="button">
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
    <label class="exercises-gallery-name">${t.name}</label>
  </div>
  <ul class="exercises-gallery-bottom">
    <li class="exercises-gallery-bottom-point">
      Burned calories:<span class="exercises-gallery-bottom-point-value"
        >${t.burnedCalories} / 3 min</span
      >
    </li>
    <li class="exercises-gallery-bottom-point">
      Body part:
      <span class="exercises-gallery-bottom-point-value"
        >${t.bodyPart}</span
      >
    </li>
    <li class="exercises-gallery-bottom-point">
      Target:<span class="exercises-gallery-bottom-point-value"
        >${t.target}</span
      >
    </li>
  </ul>
</a>`,"");i.innerHTML=n,g.refresh()}).catch(s=>{console.log(s)})}
//# sourceMappingURL=exercises-749b5986.js.map
