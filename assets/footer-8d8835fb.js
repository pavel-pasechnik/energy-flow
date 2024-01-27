import{b as s}from"./vendor-e6025c9a.js";const r=document.querySelector("#formEmail"),o=document.querySelector("#formInput");r.addEventListener("submit",i);function i(t){t.preventDefault();const e=o.value.trim();if(!c(e)){alert("Please enter a valid email address");return}if(e===""){alert("Please enter an email address");return}l({email:e}).then(()=>{console.log("Data sent successfully"),o.value="",u()}).catch(n=>{console.error("There was a problem with the fetch operation:",n)})}function l(t){return new Promise((e,n)=>{setTimeout(()=>{console.log("Imitating sending data to server:",t),e()},2e3)})}function c(t){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)}function u(){const t=s.create(`
   <div class="sub-modal">
      <button class="remove-btn">
     
      </button>
      <div class="sub-modal-content">
         <h2 class="products-titel">Thank you for enrolling in our <span>training program</span></h2>
         <p>We assure you of effective and top-notch training sessions that will exceed your expectations. Stick with us, and we guarantee you numerous exciting learning experiences.</p>
      </div>
  
   </div>
   `,{onClose:a=>e.removeEventListener("click",n)});t.show();const e=document.querySelector(".sub-modal");e.addEventListener("click",n);function n(a){(a.target.className==="remove-btn"||a.target.className==="remove-btn-img")&&t.close()}}
//# sourceMappingURL=footer-8d8835fb.js.map
