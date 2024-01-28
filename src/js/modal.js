import { getRequest } from './api-energy-flow';

// Added event listener for the start button in the exercise gallery
document.addEventListener('click', event => {
  if (event.target.classList.contains('exercises-gallery-btn-start')) {
    const exerciseId = event.target.dataset.action;
    showExerciseModal(exerciseId);
  }
});

// Function to call the API and display the modal window with exercise data
function showExerciseModal(exerciseId) {
  getRequest(`/exercises/${exerciseId}`).then(data => {
    fillModalWithData(data);
  });
}

// Function to fill the modal window with data
function fillModalWithData(data) {
  const modal = document.getElementById('exerciseModal');
  const modalContent = document.getElementById('exerciseDetails');

  modalContent.innerHTML = '';

  // Creating a DOM element for the modal window
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
      addToFavorites(data._id);
      setRemoveFromFavorites(favoriteButton);
    }
  });

  const modalContainer = document.getElementById('exerciseModal');

  // Adding event listener for the modal window container
  modalContainer.addEventListener('click', (event) => {
    if (event.target === modalContainer || event.target.closest('#closeButton')) {
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

// Function to check if the exercise is already in favorites
function isExerciseFavorite(exerciseId) {
  const favorites = getFavorites();
  return favorites.includes(exerciseId);
}

// Function to get the list of favorite exercises from Local Storage
function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}

// Function to add an exercise to favorites in Local Storage
function addToFavorites(exerciseId) {
  const favorites = getFavorites();
  favorites.push(exerciseId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Function to remove an exercise from favorites in Local Storage
function removeFromFavorites(exerciseId) {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(id => id !== exerciseId);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
}

// Function to set the "Remove from Favorites" button state
function setRemoveFromFavorites(button) {
  button.innerHTML = '<span>Remove from</span> <img src="./img/heart.svg" alt="Favorite Icon">';
}

// Function to set the "Add to Favorites" button state
function setAddToFavorites(button) {
  button.innerHTML = '<span>Add to Favorites</span> <img src="./img/heart.svg" alt="Favorite Icon">';
}

// Function to close the modal window
function closeExerciseModal() {
  console.log('Close button clicked');
  const modal = document.getElementById('exerciseModal');
  if (modal) {
    modal.classList.remove('is-visible');
  }
}

// Adding event listener for closing the modal window with the "Escape" key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeExerciseModal();
  }
});


// // Варіант, що додається весь обєкт 
// import { getRequest } from './api-energy-flow';

// document.addEventListener('click', event => {
//   if (event.target.classList.contains('exercises-gallery-btn-start')) {
//     const exerciseId = event.target.dataset.action;
//     showExerciseModal(exerciseId);
//   }
// });

// function showExerciseModal(exerciseId) {
//   getRequest(`/exercises/${exerciseId}`).then(data => {
//     fillModalWithData(data);
//   });
// }

// function fillModalWithData(data) {
//   const modal = document.getElementById('exerciseModal');
//   const modalContent = document.getElementById('exerciseDetails');

//   modalContent.innerHTML = '';

//   const exerciseDetails = document.createElement('div');
//   exerciseDetails.innerHTML = `
//     <div class="exercise-details">
//       <button id="closeButton" class="close-button">
//         <img src="./img/close.svg" alt="Close Icon">
//       </button>
//       <div class="content-wrapper">
//         <div class="left-section">
//           <div class="exercise-image">
//             <img src="${data.gifUrl}" alt="${data.name}" />
//           </div>
//         </div>
//         <div class="right-section">
//           <div class="exercise-info">
//             <div class="details">
//               <h2 class="exercise-name">${data.name}</h2>
//               <div class="star-container">
//                 <span class="rating-value">${formatRating(data.rating)}</span>
//                 <div class="star-rating">${getStarRating(data.rating)}</div>
//               </div>
//               <div class="info-block">
//                 <hr class="section-divider-top">
//                 <p class="info-item"><span class="info-label">Target:</span> ${data.target}</p>
//                 <p class="info-item"><span class="info-label">Body Part:</span> ${data.bodyPart}</p>
//                 <p class="info-item"><span class="info-label">Equipment:</span> ${data.equipment}</p>
//                 <p class="info-item"><span class="info-label">Popularity:</span> ${data.popularity}</p>
//                 <p class="info-item"><span class="info-label">Burned calories:</span> ${data.burnedCalories}/${data.time} min</p>
//                 <hr class="section-divider-bottom">
//               </div>
//               <div class="exercise-description">
//                 <p>${data.description}</p>
//               </div>
//               <div class="action-buttons">
//                 <button class="favorite-button" id="favoriteButton">
//                   <span>Add to Favorites</span>
//                   <img src="./img/heart.svg" alt="Favorite Icon">
//                 </button>
//                 <button class="rating-button rate-button">Give a Rating</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>`;

//   modalContent.appendChild(exerciseDetails);
//   modal.classList.add('is-visible');

//   const favoriteButton = document.getElementById('favoriteButton');

//   if (isExerciseFavorite(data._id)) {
//     setRemoveFromFavorites(favoriteButton);
//   }

//   favoriteButton.addEventListener('click', () => {
//     if (isExerciseFavorite(data._id)) {
//       removeFromFavorites(data._id);
//       setAddToFavorites(favoriteButton);
//     } else {
//       addToFavorites(data);
//       setRemoveFromFavorites(favoriteButton);
//     }
//   });

//   const modalContainer = document.getElementById('exerciseModal');

//   modalContainer.addEventListener('click', (event) => {
//     if (event.target === modalContainer || event.target.closest('#closeButton')) {
//       closeExerciseModal();
//     }
//   });
// }

// function formatRating(rating) {
//   return isNaN(rating) ? 'N/A' : Math.round(rating).toFixed(1);
// }

// function getStarRating(rating) {
//   const filledStars = Math.round(rating);
//   const emptyStars = 5 - filledStars;
//   const filledStarSvg = '<img src="./img/colorstar.svg" alt="Filled Star" class="star">';
//   const emptyStarSvg = '<img src="./img/star.svg" alt="Empty Star" class="star">';
  
//   let stars = '';

//   for (let i = 0; i < filledStars; i++) {
//     stars += filledStarSvg;
//   }

//   for (let i = 0; i < emptyStars; i++) {
//     stars += emptyStarSvg;
//   }

//   return stars;
// }

// function isExerciseFavorite(exerciseId) {
//   const favorites = getFavorites();
//   return favorites.includes(exerciseId);
// }

// function getFavorites() {
//   return JSON.parse(localStorage.getItem('favorites')) || [];
// }

// function addToFavorites(exerciseData) {
//   const favorites = getFavorites();
//   favorites.push(exerciseData);
//   localStorage.setItem('favorites', JSON.stringify(favorites));
// }

// function removeFromFavorites(exerciseId) {
//   const favorites = getFavorites();
//   const updatedFavorites = favorites.filter(id => id !== exerciseId);
//   localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
// }

// function setRemoveFromFavorites(button) {
//   button.innerHTML = '<span>Remove from</span> <img src="./img/heart.svg" alt="Favorite Icon">';
// }

// function setAddToFavorites(button) {
//   button.innerHTML = '<span>Add to Favorites</span> <img src="./img/heart.svg" alt="Favorite Icon">';
// }

// function closeExerciseModal() {
//   console.log('Close button clicked');
//   const modal = document.getElementById('exerciseModal');
//   if (modal) {
//     modal.classList.remove('is-visible');
//   }
// }

// document.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") {
//     closeExerciseModal();
//   }
// });




