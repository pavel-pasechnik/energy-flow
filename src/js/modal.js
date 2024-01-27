import { getRequest } from './api-energy-flow';

// Функція для виклику API та показу модального вікна з даними вправи
function showExerciseModal(exerciseId) {
  getRequest(`/exercises/${exerciseId}`).then(data => {
    fillModalWithData(data);
  });
}

// Функція для заповнення модального вікна даними
function fillModalWithData(data) {
  const modal = document.getElementById('exerciseModal');
  const modalContent = document.getElementById('exerciseDetails');

  modalContent.innerHTML = '';

  // Створення DOM-елемента для модального вікна
  const exerciseDetails = document.createElement('div');
  exerciseDetails.innerHTML = `
    <div class="exercise-details">
      <button id="closeButton" class="close-button">
        <img src="./img/close.svg" alt="Close Icon">
      </button>
      <div class="content-wrapper">
        <div class="left-section">
          <div class="exercise-image">
            <img src="${data.gifUrl}" alt="${data.name}" />
          </div>
        </div>
        <div class="right-section">
          <div class="exercise-info">
            <div class="details">
              <h2 class="exercise-name">${data.name}</h2>
              <div class="rating">
  <div class="star-divider-container">
    <div class="star-container">
      <span>${formatRating(data.rating)}</span>
      ${getStarRating(data.rating)}
    </div>
  </div>
</div>
              <div class="info-block">
               <hr class="section-divider-top">
                <p class="info-item"><span class="info-label">Target:</span> ${data.target}</p>
                <p class="info-item"><span class="info-label">Body Part:</span> ${data.bodyPart}</p>
                <p class="info-item"><span class="info-label">Equipment:</span> ${data.equipment}</p>
                <p class="info-item"><span class="info-label">Popularity:</span> ${data.popularity}</p>
                <p class="info-item"><span class="info-label">Burned calories:</span> ${data.burnedCalories}/${data.time} min</p>
                 <hr class="section-divider-bottom">
              </div>
              <div class="exercise-description">
                <p>${data.description}</p>
              </div>
              <div class="action-buttons">
                <button class="favorite-button" id="favoriteButton">
                  <span>Add to Favorites</span>
                  <img src="./img/heart.svg" alt="Favorite Icon">
                </button>
                <button class="rating-button rate-button">Give a Rating</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  modalContent.appendChild(exerciseDetails);
  modal.classList.add('is-visible');

  const favoriteButton = document.getElementById('favoriteButton');

  // Перевірка, чи вправа вже в обраних
  if (isExerciseFavorite(data._id)) {
    setRemoveFromFavorites(favoriteButton);
  }

  // Додавання слухача подій для кнопки "Favorite"
  favoriteButton.addEventListener('click', () => {
    if (isExerciseFavorite(data._id)) {
      removeFromFavorites(data._id);
      setAddToFavorites(favoriteButton);
    } else {
      addToFavorites(data._id);
      setRemoveFromFavorites(favoriteButton);
    }
  });

  const modalContainer = document.getElementById('exerciseModal');

  // Додавання слухача подій для контейнера модального вікна
  modalContainer.addEventListener('click', (event) => {
    if (event.target === modalContainer || event.target.closest('#closeButton')) {
      closeExerciseModal();
    }
  });
}

// Функція для форматування рейтингу з однією десятковою частиною
function formatRating(rating) {
  return isNaN(rating) ? 'N/A' : Math.round(rating).toFixed(1);
}

// Функція для отримання зіркового рейтингу
function getStarRating(rating) {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;
  const filledStarSvg = '<img src="./img/colorstar.svg" alt="Filled Star" class="star">';
  const emptyStarSvg = '<img src="./img/star.svg" alt="Empty Star" class="star">';
  
  let stars = '';

  for (let i = 0; i < filledStars; i++) {
    stars += filledStarSvg;
  }

  for (let i = 0; i < emptyStars; i++) {
    stars += emptyStarSvg;
  }

  return stars;
}

// Функція для перевірки, чи вправа вже в обраних
function isExerciseFavorite(exerciseId) {
  const favorites = getFavorites();
  return favorites.includes(exerciseId);
}

// Функція для отримання списку обраних вправ з Local Storage
function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}

// Функція для додавання вправи до обраних вправ в Local Storage
function addToFavorites(exerciseId) {
  const favorites = getFavorites();
  favorites.push(exerciseId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Функція для видалення вправи з обраних вправ в Local Storage
function removeFromFavorites(exerciseId) {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(id => id !== exerciseId);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
}

function setRemoveFromFavorites(button) {
  button.innerHTML = '<span>Remove from</span> <img src="./img/heart.svg" alt="Favorite Icon">';
}

function setAddToFavorites(button) {
  button.innerHTML = '<span>Add to Favorites</span> <img src="./img/heart.svg" alt="Favorite Icon">';
}

// Функція для закриття модального вікна
function closeExerciseModal() {
  console.log('Close button clicked');
  const modal = document.getElementById('exerciseModal');
  if (modal) {
    modal.classList.remove('is-visible');
  }
}

// Додавання слухача події для відкриття модального вікна
document.getElementById('startButton').addEventListener('click', () => {
  const exerciseId = '64f389465ae26083f39b17df';
  showExerciseModal(exerciseId);
});

// Додавання слухача події для закриття модального вікна по клавіші "Escape"
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeExerciseModal();
  }
});
