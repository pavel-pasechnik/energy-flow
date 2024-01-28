//imports
import { getRequest } from './api-energy-flow';

//variables
const phraseBlock = document.querySelector('.home-quote-phrase-text');
const authorBlock = document.querySelector('.home-quote-phrase-author');
const localStorage = window.localStorage;
const quoteModel = localStorage.getItem('quote');

//set default values
phraseBlock.innerHTML = 'Loading...';
authorBlock.innerHTML = 'Loading...';

//get quote
renderQuote(quoteModel);

function renderQuote(quoteModel) {
    //get current format date
    const formatNowDate = getFormattedDate();
    //check if quoteModel is not null
    if (quoteModel !== null) {
        //parse quoteModel
        const { author, quote, lastSaveDate } = JSON.parse(quoteModel);
        //check if lastSaveDate is equal to current date
        if (lastSaveDate === formatNowDate) { 
            //set quote and author
            phraseBlock.innerHTML = quote;
            authorBlock.innerHTML = author;
        } else {
            //get new quote
            getQuoteAndUpdate();
        }
    } else {
        //get new quote
        getQuoteAndUpdate();
    }
}

function getQuoteAndUpdate() { 
    //get current format date
    const formatNowDate = getFormattedDate();
    //get new quote from server
    getRequest('/quote').then(data => { 
                //parse data
        const { quote, author } = data;
                //create quoteModel
                const quoteModel = {
                    quote: quote,
                    author: author,
                    lastSaveDate: formatNowDate,
                };
                //set quoteModel to localStorage
        localStorage.setItem('quote', JSON.stringify(quoteModel));
                //set quote and author
                phraseBlock.innerHTML = quoteModel.quote;
                authorBlock.innerHTML = quoteModel.author;
            });
}

function getFormattedDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth().toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();
    const nowDate = `${day}.${month}.${year}`;
    return nowDate;
}