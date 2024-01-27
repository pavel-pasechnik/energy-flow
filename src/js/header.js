//navigation current class

// function onload() {
//   const lnk = document.querySelectorAll('.navigation-link');
//   const pathName = window.location.pathname;

//   for (let i = 0; i < lnk.length; i++) {
//     const currentHref = lnk[i].pathname;

//     if ((pathName === '/' && i === 0) || currentHref === pathName) {
//       lnk[i].classList.add('current-page-link');
//     }
//   }
// }

// onload();

// second current page

// function onload() {
//   const lnk = document.querySelectorAll('.navigation-link');
//   const pathName = window.location.pathname;

//   for (let i = 0; i < lnk.length; i++) {
//     const currentHref = lnk[i].pathname;

//     if (
//       (pathName === '/' && i === 0) ||
//       (pathName !== '/' && currentHref === pathName)
//     ) {
//       lnk[i].classList.add('current-page-link');
//     }
//   }
// }

// onload();

// add currnet link
document.addEventListener('DOMContentLoaded', onload);

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  onload();
} else {
  document.addEventListener('DOMContentLoaded', onload);
}

function onload() {
  const lnk = document.querySelectorAll('.navigation-link');
  const pathName = window.location.pathname;

  for (let i = 0; i < lnk.length; i++) {
    const currentHref = lnk[i].pathname;

    if (
      (pathName === '/' && i === 0) ||
      (pathName !== '/' && currentHref === pathName)
    ) {
      lnk[i].classList.add('current-page-link');
    }
  }
}
