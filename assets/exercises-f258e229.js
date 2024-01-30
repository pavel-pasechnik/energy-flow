import{getRequest as $}from"./api-energy-flow-ba3f6c65.js";import"./vendor-5ed05576.js";function U(){const a=window.location.href,x="index";return a.includes(x)}const H=U();if(H){let f=function(e){$("/filters",e).then(t=>{const{page:i,totalPages:n,results:y}=t;let h=y.reduce((l,s)=>l+`<a class="subspecies-item" href="">
  <button
   type="button"
   data-value="${s.name}"
    class="subspecies-item-btn"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${s.imgUrl}) lightgray -16.825px
          0.844px / 121.36% 108.504% no-repeat;
    "
  >
  <p class="subspecies-item-name">${s.name}</p>
  <p class="subspecies-item-group">${s.filter}</p>
    </button>
</a>`,"");if(a.innerHTML=h,n>1){const l=S(i,n);c.innerHTML=l}else c.innerHTML=""}).catch(t=>{console.error(t.message)})},S=function(e,t){let i="";for(let n=1;n<=t;n++)i+=`<button class="pagination-btn" type="button">${n}</button>`;return i},N=function(){g.addEventListener("click",e=>{if(e.preventDefault(),e.target.tagName==="BUTTON")return e.target.dataset.action})},v=function(e,t){c.addEventListener("click",i=>{i.target.tagName==="BUTTON"&&(e.page=parseInt(i.target.textContent),console.log(e),t(e),e.page=1)})},m=function(e){$("/exercises",e).then(t=>{console.log(t);const{page:i,totalPages:n,results:y}=t;Array.from(y).length===0&&console.log("Without result");let h=y.reduce((l,s)=>l+`<a class="exercises-gallery-item" >
  <div class="exercises-gallery-top">
    <div class="exercises-gallery-top-left">
      <p class="badge">WORKOUT</p>
      <label class="exercises-gallery-raiting">${s.rating}</label
      ><svg class="exercises-gallery-raiting-svg" width="14" height="13">
        <use href="../img/sprite.svg#star"></use>
      </svg>
    </div>
    <button class="exercises-gallery-btn-start" data-action="${s._id}" type="button">
      Start
      <svg class="exercises-gallery-btn-icon">
        <use href="../img/sprite.svg#arrow"></use>
      </svg>
    </button>
  </div>
  <div class="exercises-gallery-center">
    <svg class="exercises-gallery-center-icon">
      <use href="../img/Exercises/symbol-defs.svg#icon-icon"></use>
    </svg>
    <label class="exercises-gallery-name">${s.name}</label>
  </div>
  <ul class="exercises-gallery-bottom">
    <li class="exercises-gallery-bottom-point">
      Burned calories:<span class="exercises-gallery-bottom-point-value"
        >${s.burnedCalories} / 3 min</span
      >
    </li>
    <li class="exercises-gallery-bottom-point">
      Body part:
      <span class="exercises-gallery-bottom-point-value"
        >${s.bodyPart}</span
      >
    </li>
    <li class="exercises-gallery-bottom-point">
      Target:<span class="exercises-gallery-bottom-point-value"
        >${s.target}</span
      >
    </li>
  </ul>
</a>`,"");if(g.innerHTML=h,n>1){const l=S(i,n);c.innerHTML=l,c.removeEventListener("click",s=>{s.target.tagName==="BUTTON"&&(e.page=parseInt(s.target.textContent),console.log(e),callback(e),e.page=1)})}else c.innerHTML=""}).catch(t=>{console.log(t)})};const a=document.querySelector(".subspecies"),x=document.querySelector(".exercises-nav-panel"),g=document.querySelector(".exercises-gallery"),w=document.querySelector(".exercises-nav-input"),L=document.querySelector(".exercises-nav-input-block"),B=document.querySelector(".input-search-icon"),c=document.querySelector(".pagination");let T=1,u="Muscles",o,k=window.innerWidth,d=0,p=0,E="";k<=375?(d=8,p=8):k<=768?(d=12,p=8):(d=12,p=9);const b={filter:u,page:T,limit:d},r={page:T,limit:p};f(b),x.addEventListener("click",e=>{if(e.target.tagName==="BUTTON")Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("exercises-button-isactive"):e.target.classList.add("exercises-button-isactive")}),u=e.target.textContent.trim(),b.filter=u,delete r[o],f(b),v(b,f),a.classList.remove("is-hidden"),g.classList.add("is-hidden"),L.classList.add("is-hidden");else return}),a.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(E=e.target.dataset.value,o=u.toLowerCase(),o==="body parts"&&(o="bodypart"),r[o]=E,console.log(r),a.classList.add("is-hidden"),g.classList.remove("is-hidden"),L.classList.remove("is-hidden"),m(r),v(r,m),console.log(r))}),B.addEventListener("click",e=>{r.keyword=w.value.trim(),m(r),v(r,m),console.log(r),delete r.keyword,console.log(r)}),N()}
//# sourceMappingURL=exercises-f258e229.js.map
