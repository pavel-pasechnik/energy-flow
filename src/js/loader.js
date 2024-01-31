// The function add Loader

export const addLoading = () => {
  const divLoader = document.createElement('div');
  divLoader.classList.add('container-loader');
  divLoader.insertAdjacentHTML('afterbegin', '<div class="loader"></div>');
};

//  The function remove Loader
export const removeLoading = () => {
  const loader = document.querySelector('.loader');
  loader.remove();
};
