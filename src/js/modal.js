import { getRequest } from './api-energy-flow';

// Show the exercise modal with the given exercise ID
function showExerciseModal(exerciseId) {
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
    });
}

// Close the exercise modal
function closeExerciseModal() {
  const modal = document.getElementById('exerciseModal');
  const backdrop = document.getElementById('modalBackdrop');

  // Hide both modal and backdrop
  modal.classList.remove('is-visible');
  backdrop.classList.remove('is-visible');

  location.reload();
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
        <svg class="close-icon" width="12" height="12" viewBox="0 0 14 14" >
          <path d="M12.8332 1.16666L1.1665 12.8333M1.1665 1.16666L12.8332 12.8333" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                   <svg class="heart-icon" width="20" height="20" viewBox="0 0 20 18">
   <path d="M17.3671 2.84166C16.9415 2.41583 16.4361 2.07803 15.8799 1.84757C15.3237 1.6171 14.7275 1.49847 14.1254 1.49847C13.5234 1.49847 12.9272 1.6171 12.371 1.84757C11.8147 2.07803 11.3094 2.41583 10.8838 2.84166L10.0004 3.725L9.11709 2.84166C8.25735 1.98192 7.09128 1.49892 5.87542 1.49892C4.65956 1.49892 3.4935 1.98192 2.63376 2.84166C1.77401 3.70141 1.29102 4.86747 1.29102 6.08333C1.29102 7.29919 1.77401 8.46525 2.63376 9.325L3.51709 10.2083L10.0004 16.6917L16.4838 10.2083L17.3671 9.325C17.7929 8.89937 18.1307 8.39401 18.3612 7.83779C18.5917 7.28158 18.7103 6.6854 18.7103 6.08333C18.7103 5.48126 18.5917 4.88508 18.3612 4.32887C18.1307 3.77265 17.7929 3.26729 17.3671 2.84166Z" stroke="#F6F6F6" fill="transparent" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
  return isNaN(rating) ? 'N/A' : Math.round(rating).toFixed(1);
}

// Generate the star rating SVG based on the given rating
function getStarRating(rating) {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;
  // const filledStarSvg = `<svg class="star" width="18" height="18" >
  //   <use href="/energy-flow/assets/sprite-0567d6ea.svg#colorstar"></use>
  // </svg>`;
   const filledStarSvg = `<svg class="star" width="18" height="18" viewBox="0 0 34 32">
    <path fill="#EEA10C" d="M15.24 1.561c.504-1.552 2.699-1.552 3.204 0l2.558 7.872a1.684 1.684 0 0 0 1.602 1.164h8.277c1.632 0 2.31 2.088.99 3.047l-6.696 4.865a1.685 1.685 0 0 0-.612 1.883l2.558 7.872c.504 1.552-1.272 2.842-2.592 1.883l-6.696-4.865a1.684 1.684 0 0 0-1.98 0l-6.696 4.865c-1.32.959-3.096-.331-2.592-1.883l2.558-7.872a1.685 1.685 0 0 0-.612-1.883l-6.696-4.865c-1.32-.959-.642-3.047.99-3.047h8.277c.73 0 1.376-.47 1.602-1.164l2.558-7.872z" style="fill:var(--color1, #EEA10C)"/>
  </svg>`
  // const emptyStarSvg = `
  //   <svg class="star empty-star" width="18" height="18" >
  //     <use href="/energy-flow/assets/sprite-0567d6ea.svg#star"></use>
  //   </svg>`;
const emptyStarSvg = `
  <svg class="star empty-star" width="18" height="18" viewBox="0 0 34 32">
    <path d="M15.24 1.561c.504-1.552 2.699-1.552 3.204 0l2.558 7.872a1.684 1.684 0 0 0 1.602 1.164h8.277c1.632 0 2.31 2.088.99 3.047l-6.696 4.865a1.685 1.685 0 0 0-.612 1.883l2.558 7.872c.504 1.552-1.272 2.842-2.592 1.883l-6.696-4.865a1.684 1.684 0 0 0-1.98 0l-6.696 4.865c-1.32.959-3.096-.331-2.592-1.883l2.558-7.872a1.685 1.685 0 0 0-.612-1.883l-6.696-4.865c-1.32-.959-.642-3.047.99-3.047h8.277c.73 0 1.376-.47 1.602-1.164l2.558-7.872z" />
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
  use.setAttribute('href', '<path fill="none" stroke="#f6f6f6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z" style="stroke:var(--color3, #f6f6f6)"/>');
}

// Set the "Add to Favorites" state for the button
function setAddToFavorites(button) {
  const span = button.querySelector('span');
  span.textContent = 'Add to Favorites';
  const use = button.querySelector('use');
  use.setAttribute('href', '<path fill="none" stroke="#f6f6f6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z" style="stroke:var(--color3, #f6f6f6)"/>');
}

// Added event listener for both the start and favorites buttons in the exercise gallery
document.addEventListener('click', event => {
  const clickedElement = event.target;

  // Check if clicked on a button with class exercises-gallery-btn-start or favorites-btn-arrow
  if (
    clickedElement.classList.contains('exercises-gallery-btn-start') ||
    clickedElement.classList.contains('favorites-btn-arrow')
  ) {
    const exerciseId = clickedElement.dataset.action;
    showExerciseModal(
      exerciseId,
      clickedElement.classList.contains('exercises-gallery-btn-start')
    );
  }
});





