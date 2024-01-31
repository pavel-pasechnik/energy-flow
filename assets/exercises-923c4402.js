import{getRequest as q}from"./api-energy-flow-8bc8b845.js";import{s as k}from"./sprite-25720120.js";import"./vendor-afb53a8d.js";function O(){const a=window.location.href,y="index";return a.includes(y)||a.endsWith("/")||a.includes("localhost")}const I=O();if(I){let v=function(e){q("/filters",e).then(s=>{const{page:r,totalPages:i,results:h}=s;let T=h.reduce((l,t)=>l+`<a class="subspecies-item" href="">
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
</a>`,"");if(a.innerHTML=T,i>1){const l=E(r,i);c.innerHTML=l}else c.innerHTML=""}).catch(s=>{console.error(s.message)})},E=function(e,s){let r="";for(let i=1;i<=s;i++)r+=`<button class="pagination-btn" type="button">${i}</button>`;return r},H=function(){u.addEventListener("click",e=>{if(e.preventDefault(),e.target.tagName==="BUTTON")return e.target.dataset.action})},L=function(e,s){c.addEventListener("click",r=>{r.target.tagName==="BUTTON"&&(e.page=parseInt(r.target.textContent),s(e),f.scrollIntoView({behavior:"smooth"}),e.page=1)})},x=function(e){q("/exercises",e).then(s=>{const{page:r,totalPages:i,results:h}=s;Array.from(h).length===0?S.classList.remove("is-hidden"):S.classList.add("is-hidden");let T=h.reduce((l,t)=>l+`<a class="exercises-gallery-item" >
  <div class="exercises-gallery-top">
    <div class="exercises-gallery-top-left">
      <p class="badge">WORKOUT</p>
      <label class="exercises-gallery-raiting">${t.rating}</label
      ><svg class="exercises-gallery-raiting-svg" width="14" height="13">
        <use xlink:href="${k}#star"></use>
      </svg>
    </div>
    <button class="exercises-gallery-btn-start" data-action="${t._id}" type="button">
      Start
      <svg class="exercises-gallery-btn-icon">
        <use xlink:href="${k}#favorites-arrow"></use>
      </svg>
    </button>
  </div>
  <div class="exercises-gallery-center">
    <svg class="exercises-gallery-center-icon">
      <use xlink:href="${k}#favorites-man"></use>
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
</a>`,"");if(u.innerHTML=T,i>1){const l=E(r,i);c.innerHTML=l,c.removeEventListener("click",t=>{t.target.tagName==="BUTTON"&&(e.page=parseInt(t.target.textContent),callback(e),e.page=1)})}else c.innerHTML=""}).catch(s=>{console.log(s)})};const a=document.querySelector(".subspecies"),y=document.querySelector(".exercises-nav-panel"),u=document.querySelector(".exercises-gallery"),B=document.querySelector(".exercises-nav-input"),w=document.querySelector(".exercises-nav-input-block"),N=document.querySelector(".input-search-icon"),c=document.querySelector(".pagination"),f=document.querySelector(".exercises-container"),U=document.querySelector(".exercises-current-ex"),S=document.querySelector(".without-exercises");let $=1,d="Muscles",o,C=window.innerWidth,g=0,p=0,m="";C<=375?(g=8,p=8):C<=768?(g=12,p=8):(g=12,p=9);const b={filter:d,page:$,limit:g},n={page:$,limit:p};v(b),y.addEventListener("click",e=>{if(e.target.tagName==="BUTTON")Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("exercises-button-isactive"):e.target.classList.add("exercises-button-isactive")}),U.textContent="",d=e.target.textContent.trim(),b.filter=d,delete n[o],f.scrollIntoView({behavior:"smooth"}),v(b),L(b,v),a.classList.remove("is-hidden"),u.classList.add("is-hidden"),w.classList.add("is-hidden");else return}),a.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(m=e.target.dataset.value,o=d.toLowerCase(),o==="body parts"&&(o="bodypart"),U.textContent=m.charAt(0).toUpperCase()+m.slice(1),n[o]=m,a.classList.add("is-hidden"),u.classList.remove("is-hidden"),w.classList.remove("is-hidden"),f.scrollIntoView({behavior:"smooth"}),x(n),L(n,x))}),N.addEventListener("click",e=>{n.keyword=B.value.trim(),x(n),L(n,x),delete n.keyword}),H()}
//# sourceMappingURL=exercises-923c4402.js.map
