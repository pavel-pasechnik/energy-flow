import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { patchRequest } from './api-energy-flow';
import '@fortawesome/fontawesome-free/css/all.min.css';

let currentDataId; // глобальна змінна для запиту

// відкриття та закриття + отримання поточного дата айді

(() => {
  const refs = {
    closeModalBtnRaiting: document.querySelector('.modal-raiting-close-btn'),
    modalRaiting: document.querySelector('.modal-raiting-wrapper'),
  };

  document.addEventListener('click', event => {
    if (event.target.classList.contains('rating-button')) {
      currentDataId = event.target.dataset.action;
      toggleModal();
    }
  });

  refs.closeModalBtnRaiting.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalRaiting.classList.toggle('is-hidden-rating');
  }
})();

// stars rairing

const stars = document.querySelectorAll('.stars i');

stars.forEach((star, index1) => {
  star.addEventListener('click', () => {
    stars.forEach((star, index2) => {
      if (index1 >= index2) {
        star.classList.add('active');
        star.setAttribute('data-value', index1 + 1);
      } else {
        star.classList.remove('active');
        star.removeAttribute('data-value');
      }
    });
  });
});

// відправка на сервер логіка
const formRaiting = document.querySelector('.ratingForm');
const textarea = formRaiting.querySelector('textarea');

formRaiting.addEventListener('input', e => {
  const formRaitingData = new FormData(formRaiting);
  const formRaitingArr = {};

  formRaitingData.forEach((value, key) => {
    formRaitingArr[key] = value;
  });
});

formRaiting.addEventListener('submit', e => {
  e.preventDefault();
  const ratingValue = formRaiting
    .querySelector('.stars i.active')
    .getAttribute('data-value');
  const ratingEmailValue = formRaiting.querySelector(
    'input[name="emailInput"]'
  ).value;
  const ratingComentValue = textarea.value;

  const ratingDataObject = {
    rate: parseInt(ratingValue, 10),
    email: ratingEmailValue,
    review: ratingComentValue,
  };

  raitingSubmitDataToServer(ratingDataObject, currentDataId);
  console.log(ratingDataObject);
});

async function raitingSubmitDataToServer(data, currentDataId) {
  const url = `/exercises/${currentDataId}/rating`;
  if (data.rate === '' || data.email === '' || data.review === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter form!',
      position: 'topRight',
    });
    return;
  }
  console.log('currentDataId:', currentDataId);
  try {
    const response = await patchRequest(url, data);
    if (response.status === 200) {
      formRaiting.reset();
      iziToast.success({
        title: 'Success',
        message: 'Operation completed successfully.',
        position: 'topRight',
      });
    }
  } catch (error) {
    if (error.response && error.response.status === 409) {
      iziToast.error({
        title: 'Conflict',
        message:
          'Operation failed due to a conflict. Please check the data and try again.',
        position: 'topRight',
      });
    } else {
      iziToast.warning({
        title: 'Caution',
        message: error.message,
        position: 'topRight',
      });
    }
  }
}
