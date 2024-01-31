import{getRequest as E}from"./api-energy-flow-b6e4bd35.js";import{s as S}from"./sprite-25720120.js";import"./vendor-afb53a8d.js";function O(){const n=window.location.href,y="index";return n.includes(y)||n.endsWith("/")||n.includes("localhost")}const I=O();if(I){let L=function(e){E("/filters",e).then(s=>{const{page:r,totalPages:i,results:h}=s;let k=h.reduce((c,t)=>c+`<a class="subspecies-item" href="">
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
</a>`,"");if(n.innerHTML=k,i>1){const c=q(r,i);l.innerHTML=c}else l.innerHTML=""}).catch(s=>{console.error(s.message)})},q=function(e,s){let r="";for(let i=1;i<=s;i++)r+=`<button class="pagination-btn" type="button">${i}</button>`;return r},H=function(){g.addEventListener("click",e=>{if(e.preventDefault(),e.target.tagName==="BUTTON")return e.target.dataset.action})},T=function(e,s){l.addEventListener("click",r=>{r.target.tagName==="BUTTON"&&(e.page=parseInt(r.target.textContent),s(e),f.scrollIntoView({behavior:"smooth"}),e.page=1)})},x=function(e){E("/exercises",e).then(s=>{const{page:r,totalPages:i,results:h}=s;Array.from(h).length===0?$.classList.remove("is-hidden"):$.classList.add("is-hidden");let k=h.reduce((c,t)=>c+`<a class="exercises-gallery-item" >
  <div class="exercises-gallery-top">
    <div class="exercises-gallery-top-left">
      <p class="badge">WORKOUT</p>
      <label class="exercises-gallery-raiting">${t.rating.toFixed(1)}</label
      ><svg class="exercises-gallery-raiting-svg" width="14" height="13">
        <use xlink:href="${S}#star"></use>
      </svg>
    </div>
    <button class="exercises-gallery-btn-start" data-action="${t._id}" type="button">
      Start
      <svg class="exercises-gallery-btn-icon">
        <use xlink:href="${S}#favorites-arrow"></use>
      </svg>
    </button>
  </div>
  <div class="exercises-gallery-center">
    <svg class="exercises-gallery-center-icon">
      <use xlink:href="${S}#favorites-man"></use>
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
</a>`,"");if(g.innerHTML=k,i>1){const c=q(r,i);l.innerHTML=c,l.removeEventListener("click",t=>{t.target.tagName==="BUTTON"&&(e.page=parseInt(t.target.textContent),callback(e),e.page=1)})}else l.innerHTML=""}).catch(s=>{console.log(s)})};const n=document.querySelector(".subspecies"),y=document.querySelector(".exercises-nav-panel"),g=document.querySelector(".exercises-gallery"),B=document.querySelector(".exercises-nav-input"),U=document.querySelector(".exercises-nav-input-block"),N=document.querySelector(".input-search-icon"),l=document.querySelector(".pagination"),f=document.querySelector(".exercises-container"),v=document.querySelector(".exercises-current-ex");document.querySelector(".exercises-current-exer");const $=document.querySelector(".without-exercises");let w=1,u="Muscles",d,C=window.innerWidth,p=0,m=0,o="";C<=375?(p=8,m=8):C<=768?(p=12,m=8):(p=12,m=9);const b={filter:u,page:w,limit:p},a={page:w,limit:m};L(b),y.addEventListener("click",e=>{if(e.target.tagName==="BUTTON")Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("exercises-button-isactive"):e.target.classList.add("exercises-button-isactive")}),u=e.target.textContent.trim(),v.textContent=u,b.filter=u,delete a[d],f.scrollIntoView({behavior:"smooth"}),L(b),T(b,L),n.classList.remove("is-hidden"),g.classList.add("is-hidden"),U.classList.add("is-hidden");else return}),n.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(o=e.target.dataset.value,d=u.toLowerCase(),d==="body parts"&&(d="bodypart"),v.textContent=`${v.textContent} / ${o.charAt(0).toUpperCase()+o.slice(1)}`,console.log(o.charAt(0).toUpperCase()+o.slice(1)),a[d]=o,n.classList.add("is-hidden"),g.classList.remove("is-hidden"),U.classList.remove("is-hidden"),f.scrollIntoView({behavior:"smooth"}),x(a),T(a,x))}),N.addEventListener("click",e=>{a.keyword=B.value.trim(),x(a),T(a,x),delete a.keyword}),H()}
//# sourceMappingURL=exercises-b68afac8.js.map
