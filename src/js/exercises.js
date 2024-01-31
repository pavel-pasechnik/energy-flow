import { getRequest } from './api-energy-flow';
import svgUrl from '../img/sprite.svg';

function checkURL() {
  const currentURL = window.location.href;
  const targetURL = 'index';
  return (
    currentURL.includes(targetURL) ||
    currentURL.endsWith('/') ||
    currentURL.includes('localhost')
  );
}

const isOnTargetPage = checkURL();
if (isOnTargetPage) {
  const subspecies = document.querySelector('.subspecies');
  const navigationBtns = document.querySelector('.exercises-nav-panel');
  const exercisesGallery = document.querySelector('.exercises-gallery');
  const searchInput = document.querySelector('.exercises-nav-input');
  const searchBlock = document.querySelector('.exercises-nav-input-block');
  const searchBtn = document.querySelector('.input-search-icon');
  const pagination = document.querySelector('.pagination');
  const scrollToUp = document.querySelector('.exercises-container');
  const currentSub = document.querySelector('.exercises-current-ex');
  const currentExer = document.querySelector('.exercises-current-exer');
  const withoutResult = document.querySelector('.without-exercises');

  let currentPage = 1;
  let currentSubspecies = 'Muscles';
  let lowerCurrentSubspecies;
  let screenWidth = window.innerWidth;
  let currentLimit = 0;
  let currentLimitExercises = 0;
  let currentValue = '';

  if (screenWidth <= 375) {
    currentLimit = 8;
    currentLimitExercises = 8;
  } else if (screenWidth <= 768) {
    currentLimit = 12;
    currentLimitExercises = 8;
  } else {
    currentLimit = 12;
    currentLimitExercises = 9;
  }

  const params = {
    filter: currentSubspecies,
    page: currentPage,
    limit: currentLimit,
  };

  const params2 = {
    page: currentPage,
    limit: currentLimitExercises,
  };
  function renderSubspecies(params) {
    getRequest('/filters', params)
      .then(data => {
        const { page, totalPages, results } = data;
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
  <p class="subspecies-item-name">${
    image.name.charAt(0).toUpperCase() + image.name.slice(1)
  }</p>
  <p class="subspecies-item-group">${image.filter}</p>
    </button>
</a>`,
          ''
        );
        subspecies.innerHTML = subspeciesHtml;

        if (totalPages > 1) {
          const pag = paginationPages(page, totalPages);
          pagination.innerHTML = pag;
        } else {
          pagination.innerHTML = '';
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  renderSubspecies(params);
  navigationBtns.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
      // Логіка для відображенян вибраного підвиду
      Array.from(event.currentTarget.children).map(a => {
        if (a.textContent !== event.target.textContent) {
          a.classList.remove('exercises-button-isactive');
        } else {
          event.target.classList.add('exercises-button-isactive');
        }
      });
      //
      currentSubspecies = event.target.textContent.trim();
      currentSub.textContent = currentSubspecies;
      params.filter = currentSubspecies;
      delete params2[lowerCurrentSubspecies];
      scrollToUp.scrollIntoView({ behavior: 'smooth' });
      renderSubspecies(params);

      getPagination(params, renderSubspecies);
      subspecies.classList.remove('is-hidden');
      exercisesGallery.classList.add('is-hidden');
      searchBlock.classList.add('is-hidden');
    } else {
      return;
    }
  });
  // Слухач на картки з підвидами

  subspecies.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.tagName === 'BUTTON') {
      currentValue = event.target.dataset.value;
      lowerCurrentSubspecies = currentSubspecies.toLowerCase();
      if (lowerCurrentSubspecies === 'body parts') {
        lowerCurrentSubspecies = 'bodypart';
      }
      currentSub.textContent = `${currentSub.textContent} / ${
        currentValue.charAt(0).toUpperCase() + currentValue.slice(1)
      }`;
      console.log(currentValue.charAt(0).toUpperCase() + currentValue.slice(1));
      params2[lowerCurrentSubspecies] = currentValue;
      subspecies.classList.add('is-hidden');
      exercisesGallery.classList.remove('is-hidden');
      searchBlock.classList.remove('is-hidden');
      scrollToUp.scrollIntoView({ behavior: 'smooth' });
      renderExercises(params2);
      getPagination(params2, renderExercises);
    }
  });
  // Слухач на інпут
  searchBtn.addEventListener('click', event => {
    params2.keyword = searchInput.value.trim();
    renderExercises(params2);
    getPagination(params2, renderExercises);
    delete params2.keyword;
  });
  //функция для пагинации страниц
  function paginationPages(page, totalPages) {
    let paginationHtml = '';
    for (let a = 1; a <= totalPages; a++) {
      paginationHtml += `<button class="pagination-btn" type="button">${a}</button>`;
    }
    return paginationHtml;
  }
  // слухач при натисканні на старт, на картці з вправою, повертає її ID
  function getExercisesId() {
    exercisesGallery.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.tagName === 'BUTTON') {
        const liElement = event.target.dataset.action;
        return liElement;
      }
    });
  }
  const ExercisesId = getExercisesId();
  // Слухач по пагінації
  function getPagination(param, callback) {
    pagination.addEventListener('click', event => {
      if (event.target.tagName === 'BUTTON') {
        param.page = parseInt(event.target.textContent);
        callback(param);
        scrollToUp.scrollIntoView({ behavior: 'smooth' });
        param.page = 1;
      }
    });
  }

  // Функція для рендеру вправ

  function renderExercises(param) {
    getRequest('/exercises', param)
      .then(data => {
        const { page, totalPages, results } = data;
        if (Array.from(results).length === 0) {
          withoutResult.classList.remove('is-hidden');
        } else {
          withoutResult.classList.add('is-hidden');
        }
        let ExercisesHtml = results.reduce(
          (html, image) =>
            html +
            `<a class="exercises-gallery-item" >
  <div class="exercises-gallery-top">
    <div class="exercises-gallery-top-left">
      <p class="badge">WORKOUT</p>
      <label class="exercises-gallery-raiting">${image.rating.toFixed(1)}</label
      ><svg class="exercises-gallery-raiting-svg" width="14" height="13">
        <use xlink:href="${svgUrl}#star"></use>
      </svg>
    </div>
    <button class="exercises-gallery-btn-start" data-action="${
      image._id
    }" type="button">
      Start
      <svg class="exercises-gallery-btn-icon">
        <use xlink:href="${svgUrl}#favorites-arrow"></use>
      </svg>
    </button>
  </div>
  <div class="exercises-gallery-center">
    <svg class="exercises-gallery-center-icon">
      <use xlink:href="${svgUrl}#favorites-man"></use>
    </svg>
    <label class="exercises-gallery-name">${
      image.name.charAt(0).toUpperCase() + image.name.slice(1)
    }</label>
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
        if (totalPages > 1) {
          const pag = paginationPages(page, totalPages);
          pagination.innerHTML = pag;
          pagination.removeEventListener('click', event => {
            if (event.target.tagName === 'BUTTON') {
              param.page = parseInt(event.target.textContent);
              callback(param);
              param.page = 1;
            }
          });
        } else {
          pagination.innerHTML = '';
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
