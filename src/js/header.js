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

function onload() {
  // вибір усіх елементів з класом "navigation-link"
  const lnk = document.querySelectorAll('.navigation-link');
  // отримання поточного шляху url сторінкі
  const pathName = window.location.pathname;
  // перебір кожного елементу з селектора " navigation-link"
  for (let i = 0; i < lnk.length; i++) {
    // отримання шляху кожного елементу
    const currentHref = lnk[i].pathname;
    // перевірка чи поточний шлях збігається з шляхом елемента
    if (
      (pathName.endsWith('/') && i === 0) ||
      (pathName !== '/' && currentHref === pathName)
    ) {
      // якщо шлях кореневий то позначати перший елемент 2 якщо не кореневий то знайти відповідний шлях
      lnk[i].classList.add('current-page-link');
    }
  }
}
onload();
