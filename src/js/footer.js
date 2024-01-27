// !Sample import of postRequest and its use
//
// import { postRequest } from './api-energy-flow';
//
// postRequest('/subscription', { email: 'test@gmail.com' }).then(data => {
//   console.log(data);
// });

import * as basicLightBox from 'basiclightbox';

const form = document.querySelector('#formEmail');
const emailInput = document.querySelector('#formInput');

form.addEventListener('submit', handleFormSubmit);
// emailInput.addEventListener('keyup', handleKeyPress);

function handleFormSubmit(event) {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (email === '') {
    alert('Please enter an email address');
    return;
  }

  sendDataToServer({ email })
    .then(() => {
      console.log('Data sent successfully');
      emailInput.value = '';
      subModal();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function sendDataToServer(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Imitating sending data to server:', data);
      resolve();
    }, 2000);
  });
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function subModal() {
  const instance = basicLightBox.create(
    `
   <div class="sub-modal">
      <button class="remove-btn">
     
      </button>
      <div class="sub-modal-content">
         <h2 class="products-titel">Thank you for enrolling in our <span>training program</span></h2>
         <p>We assure you of effective and top-notch training sessions that will exceed your expectations. Stick with us, and we guarantee you numerous exciting learning experiences.</p>
      </div>
  
   </div>
   `,
    {
      onClose: instance => subModal.removeEventListener('click', modalClose),
    }
  );
  instance.show();
  const subModal = document.querySelector('.sub-modal');
  subModal.addEventListener('click', modalClose);

  function modalClose(evt) {
    if (
      evt.target.className === 'remove-btn' ||
      evt.target.className === 'remove-btn-img'
    ) {
      instance.close();
    }
    return;
  }
}
















// КОПІЯ КОДУ

// import * as basicLightBox from 'basiclightbox';

// const form = document.querySelector('#formEmail');
// const emailInput = document.querySelector('#formInput');

// form.addEventListener('submit', handleFormSubmit);


// function handleFormSubmit(event) {
//   event.preventDefault();
//   const email = emailInput.value.trim();

//   if (!validateEmail(email)) {
//     alert('Please enter a valid email address');
//     return;
//   }

//   if (email === '') {
//     alert('Please enter an email address');
//     return;
//   }

//   sendDataToServer({ email })
//     .then(() => {
//       console.log('Data sent successfully');
//       emailInput.value = '';
//       subModal();
//     })
//     .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//     });
// }

// function sendDataToServer(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Imitating sending data to server:', data);
//       resolve();
//     }, 2000);
//   });
// }

// function validateEmail(email) {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return emailRegex.test(email);
// }

// function subModal() {
//   const instance = basicLightBox.create(
//     `
//    <div class="sub-modal">
//       <button class="remove-btn">
     
//       </button>
//       <div class="sub-modal-content">
//          <h2 class="products-titel">Thank you for enrolling in our <span>training program</span></h2>
//          <p>We assure you of effective and top-notch training sessions that will exceed your expectations. Stick with us, and we guarantee you numerous exciting learning experiences.</p>
//       </div>
  
//    </div>
//    `,
//     {
//       onClose: instance => subModal.removeEventListener('click', modalClose),
//     }
//   );
//   instance.show();
//   const subModal = document.querySelector('.sub-modal');
//   subModal.addEventListener('click', modalClose);

//   function modalClose(evt) {
//     if (
//       evt.target.className === 'remove-btn' ||
//       evt.target.className === 'remove-btn-img'
//     ) {
//       instance.close();
//     }
//     return;
//   }
// }