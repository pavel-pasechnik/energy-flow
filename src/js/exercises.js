import { getRequest } from './api-energy-flow';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const subspecies = document.querySelector('.subspecies');
const navBtns = document.querySelector('.exercises-nav-panel');
const exercisesGallery = document.querySelector('.exercises-gallery');
const searchInput = document.querySelector('.exercises-nav-input');

let currentPage = 1;
let currentSubspecies = 'Muscles';
const params = {
  filter: currentSubspecies,
  page: currentPage,
  limit: 12,
};
let currentValue = '';
const params2 = {
  page: 1,
  limit: 9,
};
const lightbox = new SimpleLightbox('.subspecies a', {
  captionDelay: 250,
  captionsData: 'alt',
  close: true,
});
function renderSubspecies(params) {
  const requestParams = getRequest('/filters', params)
    .then(data => {
      const { results } = data;
      console.log(results);
      let subspeciesHtml = results.reduce(
        (html, image) =>
          html +
          `<a class="subspecies-item" href="">
  <button
   type="button"
   data-value="${image.name}"
    class="subspecies-item-btn"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${image.imgUrl}) lightgray -16.825px
          0.844px / 121.36% 108.504% no-repeat;
    "
  >
  <p class="subspecies-item-name">${image.name}</p>
  <p class="subspecies-item-group">${image.filter}</p>
    </button>
</a>`,
        ''
      );
      subspecies.innerHTML = subspeciesHtml;
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    });
}
renderSubspecies(params);

navBtns.addEventListener('click', event => {
  currentSubspecies = event.target.textContent;
  params.filter = currentSubspecies;

  renderSubspecies(params);
  lightbox.refresh();
  showGallery(subspecies);
  hideGallery(exercisesGallery);
});
// Функції щоб сховати або показати галерею
function showGallery(doShow) {
  doShow.style.display = 'flex';
}
function hideGallery(doHide) {
  doHide.style.display = 'none';
}
// Слухач на картки з підвидами
subspecies.addEventListener('click', event => {
  event.preventDefault();
  currentValue = event.target.dataset.value;

  let lowerCurrentSubspecies = currentSubspecies.toLowerCase();
  if (lowerCurrentSubspecies === 'body parts') {
    lowerCurrentSubspecies = 'bodypart';
  }
  params2[lowerCurrentSubspecies] = currentValue;
  console.log(params2);
  hideGallery(subspecies);
  showGallery(exercisesGallery);
  renderExercises(params2);
  delete params2[lowerCurrentSubspecies];
  console.log(params2);
});
// слухач при натисканні на старт, на картці з вправою, повертає її ID
function getExercisesId() {
  exercisesGallery.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.tagName === 'BUTTON') {
      const liElement = event.target.dataset.action;
      console.log(liElement);
      return liElement;
    }
  });
}
const ExercisesId = getExercisesId();

// Функція для рендеру вправ

function renderExercises(param) {
  const requestParams2 = getRequest('/exercises', param)
    .then(data => {
      const { results } = data;
      console.log(results);
      let ExercisesHtml = results.reduce(
        (html, image) =>
          html +
          `<a class="exercises-gallery-item" >
  <div class="exercises-gallery-top">
    <div class="exercises-gallery-top-left">
      <p class="badge">WORKOUT</p>
      <label class="exercises-gallery-raiting">${image.rating}</label
      ><svg class="exercises-gallery-raiting-svg" width="18" height="18">
        <use href="../img/Exercises/symbol-defs.svg#icon-star"></use>
      </svg>
    </div>
    <button class="exercises-gallery-btn-start" data-action="${image._id}" type="button">
      Start
      <svg class="exercises-gallery-btn-icon" width="16" height="16">
        <use href="../img/Exercises/symbol-defs.svg#icon-arrow"></use>
      </svg>
    </button>
  </div>
  <div class="exercises-gallery-center">
    <svg class="exercises-gallery-center-icon" width="24" height="24">
      <use href="../img/Exercises/symbol-defs.svg#icon-icon"></use>
    </svg>
    <label class="exercises-gallery-name">${image.name}</label>
  </div>
  <ul class="exercises-gallery-bottom">
    <li class="exercises-gallery-bottom-point">
      Burned calories:<span class="exercises-gallery-bottom-point-value"
        >${image.burnedCalories} / 3 min</span
      >
    </li>
    <li class="exercises-gallery-bottom-point">
      Body part:
      <span class="exercises-gallery-bottom-point-value"
        >${image.bodyPart}</span
      >
    </li>
    <li class="exercises-gallery-bottom-point">
      Target:<span class="exercises-gallery-bottom-point-value"
        >${image.target}</span
      >
    </li>
  </ul>
</a>`,
        ''
      );

      exercisesGallery.innerHTML = ExercisesHtml;
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    });
}
