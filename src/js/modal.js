import { getRequest } from './api-energy-flow';
import svgUrl from '../img/sprite.svg';

// Show the exercise modal with the given exercise ID
function showExerciseModal(exerciseId, isFavoritesBtn = false) {
  const modal = document.getElementById('exerciseModal');
  const backdrop = document.getElementById('modalBackdrop');

  // Show both modal and backdrop
  modal.classList.add('is-visible');
  backdrop.classList.add('is-visible');

  // Fetch and fill modal data
  getRequest(`/exercises/${exerciseId}`)
    .then(data => {
      if (data && data.gifUrl) {
        fillModalWithData(data);
      } else {
        console.error('Invalid data or missing gifUrl');
      }
    })
    .catch(error => {
      console.error('Error fetching exercise data', error);
    })
    .finally(() => {
      // Pass isFavoritesBtn to closeExerciseModal
      const closeButton = document.getElementById('closeButton');
      closeButton.addEventListener('click', () => {
        closeExerciseModal(isFavoritesBtn);
      });
    });
}

// Close the exercise modal
function closeExerciseModal(isFavoritesBtn = false) {
  const modal = document.getElementById('exerciseModal');
  const backdrop = document.getElementById('modalBackdrop');

  // Hide both modal and backdrop
  modal.classList.remove('is-visible');
  backdrop.classList.remove('is-visible');

  if (isFavoritesBtn) {
    location.reload();
  }
}

// Fill the modal with data
function fillModalWithData(data) {
  const modal = document.getElementById('exerciseModal');
  const backdrop = document.getElementById('modalBackdrop');
  const modalContent = document.getElementById('exerciseDetails');

  modalContent.innerHTML = '';

  // Creating a DOM element for the modal window
  const exerciseDetails = document.createElement('div');
  exerciseDetails.innerHTML = `
    <div class="exercise-details">
      <button id="closeButton" class="close-button">
      <svg class="close-icon" width="12" height="12" >
      <use href="${svgUrl}#close"></use>
        </svg>
      </button>
      <div class="content-wrapper">
        <div class="left-section">
          <div class="exercise-image">
            <img src="${data.gifUrl}" alt="${data.name}" />
          </div>
        </div>
        <div class="right-section">
          <div class="exercise-info">
            <h2 class="exercise-name">${data.name}</h2>
            <div class="star-container">
              <span class="rating-value">${formatRating(data.rating)}</span>
              <div class="star-rating">${getStarRating(data.rating)}</div>
            </div>
            <div class="info-block">
              <hr class="section-divider-top">
              <p class="info-item"><span class="info-label">Target:</span> ${
                data.target
              }</p>
              <p class="info-item"><span class="info-label">Body Part:</span> ${
                data.bodyPart
              }</p>
              <p class="info-item"><span class="info-label">Equipment:</span> ${
                data.equipment
              }</p>
              <p class="info-item"><span class="info-label">Popularity:</span> ${
                data.popularity
              }</p>
              <p class="info-item"><span class="info-label">Burned calories:</span> ${
                data.burnedCalories
              }/${data.time} min</p>
              <hr class="section-divider-bottom">
            </div>
            <div class="exercise-description">
              <p>${data.description}</p>
            </div>
              <div class="action-buttons">
                  <button class="favorite-button" id="favoriteButton">
                    <span>Add to Favorites</span>
                    <svg class="heart-icon" width="20" height="20" >
                    <use href="${svgUrl}#heart"></use>
                    </svg>

                  </button>
                  <button class="rating-button"  data-action="${
                    data._id
                  }">Give a Rating</button>
              </div>
          </div>
        </div>
      </div>
    </div>`;

  modalContent.appendChild(exerciseDetails);
  modal.classList.add('is-visible');

  const favoriteButton = document.getElementById('favoriteButton');

  // Checking if the exercise is already in favorites
  if (isExerciseFavorite(data._id)) {
    setRemoveFromFavorites(favoriteButton);
  }

  // Adding event listener for the "Favorite" button
  favoriteButton.addEventListener('click', () => {
    if (isExerciseFavorite(data._id)) {
      removeFromFavorites(data._id);
      setAddToFavorites(favoriteButton);
    } else {
      addToFavorites(data);
      setRemoveFromFavorites(favoriteButton);
    }
  });

  // Adding event listener for the modal window container
  backdrop.addEventListener('click', event => {
    // Prevent the event from reaching the document level
    event.stopPropagation();
    closeExerciseModal();
  });

  const closeButton = document.getElementById('closeButton');
  closeButton.addEventListener('click', () => {
    closeExerciseModal();
  });

  // Adding event listener for closing the modal window with the "Escape" key
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeExerciseModal();
    }
  });
}

// Format the rating value
function formatRating(rating) {
  return isNaN(rating) ? 'N/A' : rating.toFixed(1);
}

// Generate the star rating SVG based on the given rating
function getStarRating(rating) {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;
  const filledStarSvg = `<svg class="star" width="18" height="18" >
    <use href="${svgUrl}#colorstar"></use>
  </svg>`;
  
  const emptyStarSvg = `
    <svg class="star empty-star" width="18" height="18" >
      <use href="${svgUrl}#star"></use>
    </svg>`;
  

  let stars = '';

  for (let i = 0; i < filledStars; i++) {
    stars += filledStarSvg;
  }

  for (let i = 0; i < emptyStars; i++) {
    stars += emptyStarSvg;
  }

  return stars;
}

// Check if the exercise is already in favorites
function isExerciseFavorite(exerciseId) {
  const favorites = getFavorites();
  return favorites.some(exercise => exercise._id === exerciseId);
}

// Get the list of favorite exercises from local storage
function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}

// Add the exercise to the list of favorites
function addToFavorites(exercise) {
  const favorites = getFavorites();
  favorites.push(exercise);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Remove the exercise from the list of favorites
function removeFromFavorites(exerciseId) {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(
    exercise => exercise._id !== exerciseId
  );

  if (updatedFavorites.length > 0) {
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } else {
    localStorage.removeItem('favorites');
  }
}

// Set the "Remove from Favorites" state for the button
function setRemoveFromFavorites(button) {
  const span = button.querySelector('span');
  span.textContent = 'Remove from';
  const use = button.querySelector('use');
  use.setAttribute('href', `${svgUrl}#heart`);

}


// Set the "Add to Favorites" state for the button
function setAddToFavorites(button) {
  const span = button.querySelector('span');
  span.textContent = 'Add to Favorites';
  const use = button.querySelector('use');
  use.setAttribute('href', `${svgUrl}#heart`);
}


document.addEventListener('click', event => {
  const clickedElement = event.target;

  // Check if clicked on a button with class exercises-gallery-btn-start
  if (clickedElement.classList.contains('exercises-gallery-btn-start')) {
    const exerciseId = clickedElement.dataset.action;
    showExerciseModal(exerciseId, false); 
  }

  // Check if clicked on a button with class favorites-btn-arrow
  if (clickedElement.classList.contains('favorites-btn-arrow')) {
    const exerciseId = clickedElement.dataset.action;
    showExerciseModal(exerciseId, true); 
  }
});