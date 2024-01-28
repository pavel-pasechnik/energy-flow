const currentDate = new Date();

// Отримати збережену цитату та дату з localStorage
const storedQuote = localStorage.getItem('quote');
const storedDate = localStorage.getItem('quoteDate');

// Перевірити, чи є збережена цитата і чи не минув час оновлення (наприклад, 24 години)
const shouldFetchNewQuote = !storedQuote || !storedDate || currentDate - new Date(storedDate) > 24 * 60 * 60 * 1000;

if (shouldFetchNewQuote) {
  // Зробити запит на отримання нової цитати з API
  fetch('https://energyflow.b.goit.study/api/quote')
    .then(response => response.json())
    .then(data => {
      // Оновити localStorage з новою цитатою та поточною датою
      localStorage.setItem('quote', data.quote);
      localStorage.setItem('quoteDate', currentDate.toISOString());

      // Використовувати нову цитату
      console.log(`Цитата дня: "${data.quote}"`);
    })
    .catch(error => {
      console.error('Виникла помилка під час отримання цитати:', error);
    });
} else {
  // Використовувати збережену цитату
  console.log(`Цитата дня (з localStorage): "${storedQuote}"`);
}