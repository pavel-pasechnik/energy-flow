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
    let arrayData = JSON.parse(localStorage.getItem('favorites'));

    function check(array) {
      console.log(array);

      if (array.length === 0 || array === null) {
        mainContainerFavorites.remove();
        return renderErrorCard(array);
      }

      console.log(array);
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
          return renderErrorCard(array);
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
                <svg width="16" height="16" class="favorites-trash">
                  <use href="../img/sprite.svg#favorites-trash"></use>
                </svg>
              </button>
            </div>
            <div class="favorites-container-start">
              <p class="favorites-title-btn-start">Start</p>
              <button type="button" class="favorites-btn-arrow" data-action="${_id}">
                <svg class="favorites-arrow" width="14" height="14" alt="arrow">
                  <use href="../img/sprite.svg#favorites-arrow"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="favorite-title-exercises">
            <svg width="24" height="24" class="favorites-icon-man">
              <use href="../img/sprite.svg#favorites-man"></use>
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

function renderErrorCard(array) {
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

