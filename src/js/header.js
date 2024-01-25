document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop().split('.')[0];

  const navigationLinks = document.querySelectorAll('.navigation-link');

  Array.from(navigationLinks)
    .reduce((accumulator, link) => {
      const linkPages = link
        .getAttribute('href')
        .split('/')
        .pop()
        .split('.')[0];
      const isCurrentPages = linkPages === currentPage;

      if (isCurrentPages) {
        accumulator.push(link);
      }

      return accumulator;
    }, [])
    .forEach(link => {
      link.classList.add('current-page-link');
    });
});
