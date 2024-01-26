function onload() {
  const lnk = document.querySelectorAll('.navigation-link');
  for (let i = 0; i < lnk.length; i++)
    if (lnk[i].href == document.URL.split(/[\?#]/)[0]) {
      lnk[i].classList.add('current-page-link');
    }
}

onload();
