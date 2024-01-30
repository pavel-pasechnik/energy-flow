const ulFavoritesList = document.querySelector('.favorites-list-item');
const containerErrorMasseg = document.querySelector(
  '.favorites-container-error-notification'
);

const mainContainerFavorites = document.querySelector('.favorites-main');
const listPaginationBtn = document.querySelector(
  '.favorites-pagination-container-btn'
);

// беремо значення поточної сторінки
// const currentURL = window.location.href;

// // визначаємо поточний Url для порівняння
// const targetURL = 'http://localhost:5173/favorites.html';

// функция яка повертає true або false при порівнянні
// function checkURL() {
//   if (currentURL === targetURL) {
//     return true;
//   } else {
//     return false;
//   }
// }

function checkURL() {
  // беремо значення поточної сторінки
  const currentURL = window.location.href;

  // визначаємо поточний Url для порівняння
  const targetURL = 'favorites';

  // повертає true або false

  return currentURL.includes(targetURL);
}

const isOnTargetPage = checkURL();

async function renderFavoritseList() {
  // умова при якої скріпт виконується
  if (isOnTargetPage) {
    mainContainerFavorites.classList.remove('is-hidden');
    let arrayData = JSON.parse(localStorage.getItem('favorites')) || [];

    function check(array) {
      console.log(array);

      if (array.length === 0 || array === null) {
        mainContainerFavorites.remove();
        renderErrorCard();
        return;
      }
      const perPage = 8;
      let currentPage = 1;

      if (window.matchMedia('(max-width: 376px)').matches) {
        function favoritesList(array, perPage, currentPage) {
          ulFavoritesList.innerHTML = '';
          currentPage--;
          const start = perPage * currentPage;
          const end = start + perPage;
          const paginationData = array.slice(start, end);
          ulFavoritesList.innerHTML = cardMarking(paginationData);
        }

        // функція формування списку кнопочок + стилізация

        function favoritesListPaginationBtn(arrData, perPage) {
          listPaginationBtn.innerHTML = '';
          const containerPagonationList = document.querySelector('.pagination');
          const pagesCount = Math.ceil(arrData.length / perPage);

          for (let i = 0; i < pagesCount; i++) {
            const itemPagonationBtn = favoritesItemPaginationBtn(i + 1);
            listPaginationBtn.appendChild(itemPagonationBtn);
          }
          containerPagonationList.appendChild(listPaginationBtn);
        }

        // формування та стилізація кількості кнопочок

        function favoritesItemPaginationBtn(page) {
          const itemPagonationBtn = document.createElement('li');
          itemPagonationBtn.innerText = page;

          if (currentPage == page) {
            itemPagonationBtn.classList.add('favorites-pagination-btn');
          }
          if (currentPage !== page) {
            itemPagonationBtn.classList.add(
              'favorites-pagination-btn-not-activ'
            );
          }

          itemPagonationBtn.addEventListener('click', () => {
            currentPage = page;
            favoritesList(array, perPage, currentPage);

            let currentItemLi = document.querySelector(
              'li.favorites-pagination-btn'
            );
            currentItemLi.classList.remove('favorites-pagination-btn');
            currentItemLi.classList.add('favorites-pagination-btn-not-activ');

            itemPagonationBtn.classList.remove(
              'favorites-pagination-btn-not-activ'
            );
            itemPagonationBtn.classList.add('favorites-pagination-btn');
          });

          return itemPagonationBtn;
        }

        favoritesList(array, perPage, currentPage);
        favoritesListPaginationBtn(array, perPage);
      } else {
        ulFavoritesList.innerHTML = cardMarking(array);
      }

      ulFavoritesList.addEventListener('click', event => {
        const element = event.target;
        if (array.length === 0 || array === null) {
          mainContainerFavorites.classList.add('is-hidden');
          renderErrorCard();
          return;
        }
        if (element.classList.contains('favorites-btn-trash')) {
          let i = element.dataset.id;
          const b = array.filter(id => id._id !== i);
          let c = localStorage.setItem('favorites', JSON.stringify(b));
          console.log(i);
          check(b);
        }
      });
    }
    check(arrayData);
    // window.addEventListener('resize', check);
  }
  // переривання функції
  else {
    return;
  }
}

// функція рендеру картки

function cardMarking(obj) {
  return obj.reduce(
    (html, { bodyPart, burnedCalories, target, time, equipment, _id }) =>
      html +
      `<li class="favorits-item">
          <div class="favorites-container-nav">
            <div class="favorites-container-workout">
              <p class="favoritese-title">WORKOUT</p>
              <button type="button" class="favorites-btn-trash" data-id="${_id}" ">
                <svg id="favorites-trash" viewBox="0 0 32 32" width="32" height="32">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6" d="M21.333 8V6.933c0-1.493 0-2.24-.291-2.811a2.666 2.666 0 0 0-1.165-1.165c-.57-.291-1.317-.291-2.811-.291h-2.133c-1.493 0-2.24 0-2.811.291-.502.256-.91.664-1.165 1.165-.291.57-.291 1.317-.291 2.811V8m2.667 7.333V22m5.334-6.667V22M4 8h24m-2.667 0v14.933c0 2.24 0 3.36-.436 4.216a4.001 4.001 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436h-5.867c-2.24 0-3.36 0-4.216-.436a3.996 3.996 0 0 1-1.748-1.748c-.436-.856-.436-1.976-.436-4.216V8"/>
  </svg>
              </button>
            </div>
            <div class="favorites-container-start">
              <p class="favorites-title-btn-start">Start</p>
              <button type="button" class="favorites-btn-arrow" data-action="${_id}">
                <svg id="favorites-arrow" viewBox="0 0 32 32" width="32" height="32"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.971" d="m15 28 13-13m0 0L15 2m13 13H2"/>                  
                </svg>
              </button>
            </div>
          </div>
          <div class="favorite-title-exercises">
            <svg id="favorites-man" viewBox="0 0 32 32" width="32" height="32"><path fill="#7e847f" d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z" 
            style="fill:var(--color2, #7e847f)"/><path fill="#f6f6f6" d="M25.098 11.634a.79.79 0 0 0-1.111-.099l-2.188 1.838-1.006-2.493a.757.757 0 0 
            0-.153-.241 2.148 2.148 0 0 0-1.055-1.078 2.158 2.158 0 0 0-.655-.174c-.049-.025-.093-.059-.148-.076l-3.85-1.073a.792.792 0 0 0-.611.083.77.77 
            0 0 0-.479.448l-1.45 3.728a.791.791 0 0 0 .451 1.022.79.79 0 0 0 1.021-.452l1.225-3.148 1.754.488c-.043.069-.089.134-.124.208l-2.248 
            4.873c-.032.072-.05.144-.073.218l-2.732 4.58-4.572 1.529a1.168 1.168 0 0 0 1.387 1.88l4.679-1.611c.143-.104.247-.24.326-.387.059-.062.126-.112.171-.189l1.629-2.731 2.891 
            2.464-3.094 3.486a1.167 1.167 0 0 0 1.747 1.547l3.861-4.349c.12-.134.192-.289.24-.451.029-.088.029-.179.036-.27 0-.046.017-.088.014-.131a1.143 
            1.143 0 0 0-.401-.849l-2.661-2.269c.192-.183.355-.4.473-.655l1.724-3.733.552 1.471a.742.742 0 0 0 .159.366.754.754 0 0 0 
            .303.211c.012.006.025.007.039.01a.738.738 0 0 0 .489.024l.003-.001c.024-.006.049-.001.073-.012a.8.8 0 0 0 .311-.226l3.14-2.665c.334-.281.193-.777-.088-1.111zm-3.972-1.899a2.201 
            2.201 0 1 0 0-4.402 2.201 2.201 0 0 0 0 4.402z" style="fill:var(--color3, #f6f6f6)"/>              
            </svg>
            <p class="favorites-title-name">${target}</p>
          </div>
          <div class="favorites-description-workout">
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span"
                >Burned calories:
              </span>
              ${burnedCalories} / ${time} min
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Body part:</span>
              ${bodyPart}
            </p>
            <p class="favorites-title-descriptoin">
              <span class="favorites-description-workout-span">Target:</span>
              ${equipment}
            </p>
          </div>
        </li>`,
    ''
  );
}

function renderErrorCard() {
  return (containerErrorMasseg.innerHTML = `<h2 class="favorites-container-error-title">Favorites</h2>
    <div class="favorites-container-error-description">
      <img
        srcset="
          ../img/favorites-section/mobile-dumbbell.png             85w,
          ../img/favorites-section/mobile-dumbbell@2x.png         170w,
          ../img/favorites-section/tablet-desctop-dumbbell.png    116w,
          ../img/favorites-section/tablet-desctop-dumbbell@2x.png 116w
        "
        sizes="
      (min-width: 1440px) 116px, 
      (min-width: 768px) 116px, 
      (max-width: 767px) 85px"
        src="../img/favorites-section/mobile-dumbbell.png"
        alt="dumbbell"
      />

      <p class="favorites-error-description">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>
    </div>`);
}

renderFavoritseList();
