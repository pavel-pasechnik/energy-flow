// scroll-up
const goTopBtn = document.querySelector('.go-top');
goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);
function trackScroll() {
  // calculate the position from the top of the page
  const offset = window.scrollY;
  // calculate the height of viewport
  const coords = document.documentElement.clientHeight;
  if (offset > coords) {
    // button appears
    goTopBtn.classList.add('go-top--show');
  } else {
    // button disappears
    goTopBtn.classList.remove('go-top--show');
  }
}
function goTop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -40);
    setTimeout(goTop, 0);
  }
}
