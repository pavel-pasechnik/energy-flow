import { getRequest } from './api-energy-flow';
import { postRequest } from './api-energy-flow';

const ulFavoritesList = document.querySelector('.favorites-list-item');

const savedFavoritesExercises = JSON.parse(localStorage.getItem('favorites'));

async function renderFavoritseList() {
  for (const _id of savedFavoritesExercises) {
    let result = await getRequest(`/exercises/${_id}`)
      .then(data => {
        return data;
      })
      .catch(error => console.log(error));

    ulFavoritesList.insertAdjacentHTML('beforeend', cardMarking(result));
  }
}

function cardMarking(obj) {
  const { bodyPart, burnedCalories, target, time, equipment } = obj;
  return `<li class="favorits-item">
          <div class="favorites-container-nav">
            <div class="favorites-container-workout">
              <p class="favoritese-title">WORKOUT</p>
              <button type="button" class="favorites-btn-trash">
                <svg width="16" height="16" class="favorites-trash">
                  <use href="./img/symbol-defs.svg#icon-trash-favorites"></use>
                </svg>
              </button>
            </div>
            <div class="favorites-container-start">
              <p class="favorites-title-btn-start">Start</p>
              <button type="button" class="favorites-btn-arrow">
                <svg class="favorites-arrow" width="14" height="14" alt="arrow">
                  <use href="../img/favorites-arrow.svg"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="favorite-title-exercises">
            <svg width="24" height="24" class="favorites-icon-man">
              <use href="./img/symbol-defs.svg#icon-icon-favorites"></use>
            </svg>
            <p class="favorites-title-name">${equipment}</p>
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
              ${target}
            </p>
          </div>
        </li>`;
}

renderFavoritseList();
