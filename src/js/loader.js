
// The function add Loader
export function addLoading {
    load-container.insertAdjacentHTML('afterbegin', '<div class="container-loader"><div class="loader"></div></div>');
  }

//  The function remove Loader
export function removeLoading() {
    const loader = document.querySelector('.loader');
    loader.remove();
 }