// The function add Loader
export const addLoading = () => {
  load -
    container.insertAdjacentHTML(
      'afterbegin',
      '<div class="container-loader"><div class="loader"></div></div>'
    );
};

//  The function remove Loader
export const removeLoading = () => {
  const loader = document.querySelector('.loader');
  loader.remove();
};
