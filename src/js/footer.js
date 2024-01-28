
// !Sample import of postRequest and its use
//
// import { postRequest } from './api-energy-flow';
//
// postRequest('/subscription', { email: 'test@gmail.com' }).then(data => {
//   console.log(data);
// });


import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);

if (result === '/index.html' || result === '/') {
    const footerForm = document.querySelector('#footer-form'); 


  footerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    submitForm();
    footerForm.reset();
  });
}

async function submitForm() {
    const footerForm = document.querySelector('#footer-form');
  const formData = new FormData(footerForm);
  const emailValue = formData.get('email');
  const formattedData = { email: emailValue };

  try {
    const response = await axios.post(footerForm.action, formattedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;
    if (data && data.message) {
      showSuccess();
    }
  } catch (error) {
    if (error.response && error.response.status !== 409) {
      showError();
    }
    if (error.response && error.response.status === 409) {
      showError409();
    }
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
    text: "We assure you of effective and top-notch training sessions that will exceed your expectations. Stick with us, and we guarantee you numerous exciting learning experiences.",
    icon: 'success',
  });
}