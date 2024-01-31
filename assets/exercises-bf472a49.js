import{getRequest as q}from"./api-energy-flow-8bc8b845.js";import"./vendor-afb53a8d.js";function H(){const c=window.location.href,h="index";return c.includes(h)}const O=H();if(O){let f=function(e){q("/filters",e).then(s=>{const{page:r,totalPages:i,results:y}=s;let T=y.reduce((n,t)=>n+`<a class="subspecies-item" href="">
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
  <p class="subspecies-item-name">${t.name.charAt(0).toUpperCase()+t.name.slice(1)}</p>
  <p class="subspecies-item-group">${t.filter}</p>
    </button>
</a>`,"");if(c.innerHTML=T,i>1){const n=E(r,i);l.innerHTML=n}else l.innerHTML=""}).catch(s=>{console.error(s.message)})},E=function(e,s){let r="";for(let i=1;i<=s;i++)r+=`<button class="pagination-btn" type="button">${i}</button>`;return r},N=function(){u.addEventListener("click",e=>{if(e.preventDefault(),e.target.tagName==="BUTTON")return e.target.dataset.action})},L=function(e,s){l.addEventListener("click",r=>{r.target.tagName==="BUTTON"&&(e.page=parseInt(r.target.textContent),s(e),v.scrollIntoView({behavior:"smooth"}),e.page=1)})},x=function(e){q("/exercises",e).then(s=>{const{page:r,totalPages:i,results:y}=s;Array.from(y).length===0?U.classList.remove("is-hidden"):U.classList.add("is-hidden");let T=y.reduce((n,t)=>n+`<a class="exercises-gallery-item" >
  <div class="exercises-gallery-top">
    <div class="exercises-gallery-top-left">
      <p class="badge">WORKOUT</p>
      <label class="exercises-gallery-raiting">${t.rating}</label
      ><svg class="exercises-gallery-raiting-svg" width="14" height="13">
        <use href="../sprite.svg#star"></use>
      </svg>
    </div>
    <button class="exercises-gallery-btn-start" data-action="${t._id}" type="button">
      Start
      <svg class="exercises-gallery-btn-icon">
        <use href="../sprite.svg#"></use>
      </svg>
    </button>
  </div>
  <div class="exercises-gallery-center">
    <svg class="exercises-gallery-center-icon">
      <use href="../sprite.svg#favorites-man"></use>
    </svg>
    <label class="exercises-gallery-name">${t.name.charAt(0).toUpperCase()+t.name.slice(1)}</label>
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
</a>`,"");if(u.innerHTML=T,i>1){const n=E(r,i);l.innerHTML=n,l.removeEventListener("click",t=>{t.target.tagName==="BUTTON"&&(e.page=parseInt(t.target.textContent),callback(e),e.page=1)})}else l.innerHTML=""}).catch(s=>{console.log(s)})};const c=document.querySelector(".subspecies"),h=document.querySelector(".exercises-nav-panel"),u=document.querySelector(".exercises-gallery"),$=document.querySelector(".exercises-nav-input"),w=document.querySelector(".exercises-nav-input-block"),B=document.querySelector(".input-search-icon"),l=document.querySelector(".pagination"),v=document.querySelector(".exercises-container"),S=document.querySelector(".exercises-current-ex"),U=document.querySelector(".without-exercises");let k=1,d="Muscles",o,C=window.innerWidth,g=0,p=0,m="";C<=375?(g=8,p=8):C<=768?(g=12,p=8):(g=12,p=9);const b={filter:d,page:k,limit:g},a={page:k,limit:p};f(b),h.addEventListener("click",e=>{if(e.target.tagName==="BUTTON")Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("exercises-button-isactive"):e.target.classList.add("exercises-button-isactive")}),S.textContent="",d=e.target.textContent.trim(),b.filter=d,delete a[o],v.scrollIntoView({behavior:"smooth"}),f(b),L(b,f),c.classList.remove("is-hidden"),u.classList.add("is-hidden"),w.classList.add("is-hidden");else return}),c.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(m=e.target.dataset.value,o=d.toLowerCase(),o==="body parts"&&(o="bodypart"),S.textContent=m.charAt(0).toUpperCase()+m.slice(1),a[o]=m,c.classList.add("is-hidden"),u.classList.remove("is-hidden"),w.classList.remove("is-hidden"),v.scrollIntoView({behavior:"smooth"}),x(a),L(a,x))}),B.addEventListener("click",e=>{a.keyword=$.value.trim(),x(a),L(a,x),delete a.keyword}),N()}
//# sourceMappingURL=exercises-bf472a49.js.map
