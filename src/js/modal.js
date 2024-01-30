// Add all object to Local
import { getRequest } from './api-energy-flow';
// Function to show the modal and backdrop
function showExerciseModal(exerciseId) {
  const modal = document.getElementById('exerciseModal');
  const backdrop = document.getElementById('modalBackdrop');

  // Show both modal and backdrop
  modal.classList.add('is-visible');
  backdrop.classList.add('is-visible');

  // Fetch and fill modal data
  getRequest(`/exercises/${exerciseId}`).then(data => {
    fillModalWithData(data);
  });
}

// Function to close the modal and backdrop
function closeExerciseModal() {
  const modal = document.getElementById('exerciseModal');
  const backdrop = document.getElementById('modalBackdrop');

  // Hide both modal and backdrop
  modal.classList.remove('is-visible');
  backdrop.classList.remove('is-visible');
}

// Function to fill the modal window with data
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
          <use href="/energy-flow/assets/sprite-0567d6ea.svg#close"></use>
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
                <svg class="heart-icon" width="20" height="20" >
                  <use href="/energy-flow/assets/sprite-0567d6ea.svg#heart"></use>
                </svg>
              </button>
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
  backdrop.addEventListener('click', () => {
    closeExerciseModal();
  });

  const closeButton = document.getElementById('closeButton');
  closeButton.addEventListener('click', () => {
    closeExerciseModal();
  });

  // Adding event listener for closing the modal window with the "Escape" key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeExerciseModal();
    }
  });
}

// Function to format rating with one decimal place
function formatRating(rating) {
  return isNaN(rating) ? 'N/A' : Math.round(rating).toFixed(1);
}

// Function to get star rating
function getStarRating(rating) {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;
  const filledStarSvg = `<svg class="star" width="18" height="18" >
    <use href="/energy-flow/assets/sprite-0567d6ea.svg#colorstar"></use>
  </svg>`;
  const emptyStarSvg = `
    <svg class="star empty-star" width="18" height="18" >
      <use href="/energy-flow/assets/sprite-0567d6ea.svg#star"></use>
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

// Function to check if the exercise is already in favorites
function isExerciseFavorite(exerciseId) {
  const favorites = getFavorites();
  return favorites.some(exercise => exercise._id === exerciseId);
}

// Function to get the list of favorite exercises from Local Storage
function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}

// Function to add an exercise to favorites in Local Storage
function addToFavorites(exercise) {
  const favorites = getFavorites();
  favorites.push(exercise);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Function to remove an exercise from favorites in Local Storage
function removeFromFavorites(exerciseId) {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(exercise => exercise._id !== exerciseId);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
}

// Function to set the "Remove from Favorites" button state
function setRemoveFromFavorites(button) {
  const span = button.querySelector('span');
  span.textContent = 'Remove from';
  const use = button.querySelector('use');
  use.setAttribute('href', '/energy-flow/assets/sprite-0567d6ea.svg#heart');
}

// Function to set the "Add to Favorites" button state
function setAddToFavorites(button) {
  const span = button.querySelector('span');
  span.textContent = 'Add to Favorites';
  const use = button.querySelector('use');
  use.setAttribute('href', '/energy-flow/assets/sprite-0567d6ea.svg#heart');
}

// // Added event listener for the start button in the exercise gallery
// document.addEventListener('click', event => {
//   if (event.target.classList.contains('exercises-gallery-btn-start')) {
//     const exerciseId = event.target.dataset.action;
//     showExerciseModal(exerciseId);
//   }
// });
// пропрацювати
document.addEventListener('click', event => {
  if (event.target.classList.contains('exercises-gallery-btn-start')) {
    const exerciseId = event.target.dataset.action;
    showExerciseModal(exerciseId);
  }
  if (event.target.classList.contains('favorites-btn-arrow')) {
    const exerciseId = event.target.getAttribute('data-action');
    showExerciseModal(exerciseId);
  }
});


// All code when we add only ID to Local Storage
// import { getRequest } from './api-energy-flow';

// // Function to show the modal and backdrop
// function showExerciseModal(exerciseId) {
//   const modal = document.getElementById('exerciseModal');
//   const backdrop = document.getElementById('modalBackdrop');

//   // Show both modal and backdrop
//   modal.classList.add('is-visible');
//   backdrop.classList.add('is-visible');

//   // Fetch and fill modal data
//   getRequest(`/exercises/${exerciseId}`).then(data => {
//     fillModalWithData(data);
//   });
// }

// // Function to close the modal and backdrop
// function closeExerciseModal() {
//   const modal = document.getElementById('exerciseModal');
//   const backdrop = document.getElementById('modalBackdrop');

//   // Hide both modal and backdrop
//   modal.classList.remove('is-visible');
//   backdrop.classList.remove('is-visible');
// }

// // Function to fill the modal window with data
// function fillModalWithData(data) {
//   const modal = document.getElementById('exerciseModal');
//   const backdrop = document.getElementById('modalBackdrop');
//   const modalContent = document.getElementById('exerciseDetails');

//   modalContent.innerHTML = '';

//   // Creating a DOM element for the modal window
//   const exerciseDetails = document.createElement('div');
//   exerciseDetails.innerHTML = `
//     <div class="exercise-details">
//       <button id="closeButton" class="close-button">
//         <svg class="close-icon" width="12" height="12" >
//           <use href="./img/sprite.svg#close"></use>
//         </svg>
//       </button>
//       <div class="content-wrapper">
//         <div class="left-section">
//           <div class="exercise-image">
//             <img src="${data.gifUrl}" alt="${data.name}" />
//           </div>
//         </div>
//         <div class="right-section">
//           <div class="exercise-info">
//             <h2 class="exercise-name">${data.name}</h2>
//             <div class="star-container">
//               <span class="rating-value">${formatRating(data.rating)}</span>
//               <div class="star-rating">${getStarRating(data.rating)}</div>
//             </div>
//             <div class="info-block">
//               <hr class="section-divider-top">
//               <p class="info-item"><span class="info-label">Target:</span> ${data.target}</p>
//               <p class="info-item"><span class="info-label">Body Part:</span> ${data.bodyPart}</p>
//               <p class="info-item"><span class="info-label">Equipment:</span> ${data.equipment}</p>
//               <p class="info-item"><span class="info-label">Popularity:</span> ${data.popularity}</p>
//               <p class="info-item"><span class="info-label">Burned calories:</span> ${data.burnedCalories}/${data.time} min</p>
//               <hr class="section-divider-bottom">
//             </div>
//             <div class="exercise-description">
//               <p>${data.description}</p>
//             </div>
//             <div class="action-buttons">
//               <button class="favorite-button" id="favoriteButton">
//                 <span>Add to Favorites</span>
//                 <svg class="heart-icon" width="20" height="20" >
//                   <use href="./img/sprite.svg#heart"></use>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>`;

//   modalContent.appendChild(exerciseDetails);
//   modal.classList.add('is-visible');

//   const favoriteButton = document.getElementById('favoriteButton');

//   // Checking if the exercise is already in favorites
//   if (isExerciseFavorite(data._id)) {
//     setRemoveFromFavorites(favoriteButton);
//   }

//   // Adding event listener for the "Favorite" button
//   favoriteButton.addEventListener('click', () => {
//     if (isExerciseFavorite(data._id)) {
//       removeFromFavorites(data._id);
//       setAddToFavorites(favoriteButton);
//     } else {
//       addToFavorites(data._id);
//       setRemoveFromFavorites(favoriteButton);
//     }
//   });

//   // Adding event listener for the modal window container
//   backdrop.addEventListener('click', () => {
//     closeExerciseModal();
//   });

//   const closeButton = document.getElementById('closeButton');
//   closeButton.addEventListener('click', () => {
//     closeExerciseModal();
//   });

//   // Adding event listener for closing the modal window with the "Escape" key
//   document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//       closeExerciseModal();
//     }
//   });
// }

// // Function to format rating with one decimal place
// function formatRating(rating) {
//   return isNaN(rating) ? 'N/A' : Math.round(rating).toFixed(1);
// }

// // Function to get star rating
// function getStarRating(rating) {
//   const filledStars = Math.round(rating);
//   const emptyStars = 5 - filledStars;
//   const filledStarSvg = `<svg class="star" width="18" height="18" >
//     <use href="./img/sprite.svg#colorstar"></use>
//   </svg>`;
//   const emptyStarSvg = `
//     <svg class="star empty-star" width="18" height="18" >
//       <use href="./img/sprite.svg#star"></use>
//     </svg>`;

//   let stars = '';

//   for (let i = 0; i < filledStars; i++) {
//     stars += filledStarSvg;
//   }

//   for (let i = 0; i < emptyStars; i++) {
//     stars += emptyStarSvg;
//   }

//   return stars;
// }

// // Function to check if the exercise is already in favorites
// function isExerciseFavorite(exerciseId) {
//   const favorites = getFavorites();
//   return favorites.includes(exerciseId);
// }

// // Function to get the list of favorite exercises from Local Storage
// function getFavorites() {
//   return JSON.parse(localStorage.getItem('favorites')) || [];
// }

// // Function to add an exercise to favorites in Local Storage
// function addToFavorites(exerciseId) {
//   const favorites = getFavorites();
//   favorites.push(exerciseId);
//   localStorage.setItem('favorites', JSON.stringify(favorites));
// }

// // Function to remove an exercise from favorites in Local Storage
// function removeFromFavorites(exerciseId) {
//   const favorites = getFavorites();
//   const updatedFavorites = favorites.filter(id => id !== exerciseId);
//   localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
// }

// // Function to set the "Remove from Favorites" button state
// function setRemoveFromFavorites(button) {
//   const span = button.querySelector('span');
//   span.textContent = 'Remove from';
//   const use = button.querySelector('use');
//   use.setAttribute('href', './img/sprite.svg#heart');
// }

// // Function to set the "Add to Favorites" button state
// function setAddToFavorites(button) {
//   const span = button.querySelector('span');
//   span.textContent = 'Add to Favorites';
//   const use = button.querySelector('use');
//   use.setAttribute('href', './img/sprite.svg#heart');
// }

// // Added event listener for the start button in the exercise gallery
// document.addEventListener('click', event => {
//   if (event.target.classList.contains('exercises-gallery-btn-start')) {
//     const exerciseId = event.target.dataset.action;
//     showExerciseModal(exerciseId);
//   }
// });





