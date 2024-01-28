// JavaScript код
const exerciseButton = document.getElementById('exerciseButton');
const ratingButton = document.getElementById('ratingButton');
const ratingModal = document.getElementById('ratingModal');
const ratingForm = document.getElementById('ratingForm');
const emailInput = document.getElementById('emailInput');

exerciseButton.addEventListener('click', () => {
  ratingModal.style.display = 'none';
});

ratingButton.addEventListener('click', () => {
  ratingModal.style.display = 'block';
});

ratingForm.addEventListener('submit', event => {
  event.preventDefault();

  const ratingValue = document.querySelector('input[name="rating"]:checked');
  const email = emailInput.value;
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submitRating', (req, res) => {
  const { rating, email } = req.body;

  if (rating && email) {
    res.status(200).send('Rating submitted successfully');
  } else {
    res.status(400).send('Invalid data. Please check your input.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
