import { getRequest } from './api-energy-flow';

const ulFavoritesList = document.querySelector('.favorites-list-item');
const containerErrorMasseg = document.querySelector(
  '.favorites-container-error-notification'
);

const mainContainerFavorites = document.querySelector('.favorites-main');
// функція отримання массиву вправ з localStorage
// async function getFavoritseList() {
//   let arrayData = [];

//   for (const _id of savedFavoritesExercises) {
//     await getRequest(`/exercises/${_id}`)
//       .then(data => {
//         return arrayData.push(data);
//       })
//       .catch(error => console.log(error));
//   }

//   return arrayData;
// }

// пагінация по сторінкам за допомогою кнопочок

async function renderFavoritseList() {
  // функція для показу сторінки за значенням perPage
  function check() {
    let arrayData = JSON.parse(localStorage.getItem('favorites'));
    if (arrayData.length === 0 || arrayData === null) {
      mainContainerFavorites.classList.add('is-hidden');
      return renderErrorCard(arrayData);
    }
    console.log(arrayData);
    renderErrorCard(arrayData);
    const perPage = 8;
    let currentPage = 1;

    if (window.matchMedia('(max-width: 376px)').matches) {
      function favoritesList(arrayData, perPage, currentPage) {
        ulFavoritesList.innerHTML = '';
        currentPage--;
        const start = perPage * currentPage;
        const end = start + perPage;
        const paginationData = arrayData.slice(start, end);
        ulFavoritesList.innerHTML = cardMarking(paginationData);
      }

      // функція формування списку кнопочок + стилізация

      function favoritesListPaginationBtn(arrData, perPage) {
        const containerPagonationList = document.querySelector('.pagination');
        const pagesCount = Math.ceil(arrData.length / perPage);
        const listPaginationBtn = document.createElement('ul');
        listPaginationBtn.classList.add('favorites-pagination-container-btn');

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
          itemPagonationBtn.classList.add('favorites-pagination-btn-not-activ');
        }

        itemPagonationBtn.addEventListener('click', () => {
          // event.preventDefault();
          currentPage = page;
          favoritesList(arrayData, perPage, currentPage);

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

      favoritesList(arrayData, perPage, currentPage);
      favoritesListPaginationBtn(arrayData, perPage);
    } else {
      ulFavoritesList.innerHTML = cardMarking(arrayData);
    }

    ulFavoritesList.addEventListener('click', event => {
      const element = event.target;
      if (element.classList.contains('favorites-btn-trash')) {
        let i = element.dataset.id;
        const b = arrayData.filter(id => id._id !== i);
        let c = localStorage.setItem('favorites', JSON.stringify(b));
        console.log(i);
        check();
      }
    });
  }
  check();
  // window.addEventListener('resize', check);
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
              <button type="button" class="favorites-btn-arrow">
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
