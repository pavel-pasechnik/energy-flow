const c=document.getElementById("exerciseButton"),r=document.getElementById("ratingButton"),o=document.getElementById("ratingModal"),u=document.getElementById("ratingForm"),l=document.getElementById("emailInput");c.addEventListener("click",()=>{o.style.display="none"});r.addEventListener("click",()=>{o.style.display="block"});u.addEventListener("submit",t=>{t.preventDefault(),document.querySelector('input[name="rating"]:checked'),l.value});const m=require("express"),i=require("body-parser"),e=m(),s=3e3;e.use(i.urlencoded({extended:!1}));e.use(i.json());e.post("/submitRating",(t,n)=>{const{rating:d,email:a}=t.body;d&&a?n.status(200).send("Rating submitted successfully"):n.status(400).send("Invalid data. Please check your input.")});e.listen(s,()=>{console.log(`Server is running on port ${s}`)});
//# sourceMappingURL=modal-rating-e98e9cd1.js.map