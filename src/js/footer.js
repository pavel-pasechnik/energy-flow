// Імпортуємо функцію для відправки запитів
import { postRequest } from './api-energy-flow';

// Імпортуємо бібліотеку для відображення повідомлень
import Swal from 'sweetalert2';

// Стилі для повідомлень
import 'sweetalert2/src/sweetalert2.scss';

// Отримуємо шлях сторінки
const fullUrl = window.location.pathname;

// Вирізаємо останню частину шляху
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);

// Перевіряємо, що це головна сторінка
if (result === '/index.html' || result === '/') {
  // Знаходимо форму в футері
  const footerForm = document.querySelector('#footer-form');

  // Підписуємося на подію відправки форми
  footerForm.addEventListener('submit', function (event) {
    // Відміняємо дефолтну поведінку
    event.preventDefault();

    // Викликаємо функцію відправки запиту
    submitForm();
  });
}

// Функція відправки запиту
async function submitForm() {
  // Змінна для збереження помилки
  let error;

  // Отримуємо форму
  const footerForm = document.querySelector('#footer-form');

  // Створюємо об'єкт з даними форми
  const formData = new FormData(footerForm);

  // Отримуємо значення email
  const emailValue = formData.get('footer-email');

  // Формуємо об'єкт для відправки
  const formattedData = { email: `${emailValue}` };

  try {
    // Відправляємо POST запит
    const response = await postRequest('/subscription', formattedData);
    // Отримуємо дані з відповіді
    const data = response.data;

    // Перевіряємо, чи немає помилки
    if (data && !data.error) {
      // Показуємо повідомлення про успіх
      showSuccess();

      // Очищуємо форму
      footerForm.reset();
    }
  } catch (err) {
    // Зберігаємо помилку
    error = err;

    // Показуємо помилку, якщо статус не 409
    if (error.response && error.response.status !== 409) {
      showError();
    }
  }

  // Перевіряємо, чи статус помилки 409
  if (error && error.response && error.response.status === 409) {
    showError409();
  }
}

function showError() {
  Swal.fire({
    title: 'Bad request',

    text: 'Something went wrong.',

    icon: 'error',
  });
}

function showError409() {
  Swal.fire({
    title: 'Warning!',

    text: 'Subscription already exists',

    icon: 'warning',
  });
}

function showSuccess() {
  Swal.fire({
    title: 'Thank you for enrolling in our training program!',

    text: 'We assure you of effective and top-notch training sessions that will exceed your expectations. Stick with us, and we guarantee you numerous exciting learning experiences.',

    icon: 'success',
  });
}
