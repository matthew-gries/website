/**
 * Script to set the text of an element to a random quote.
 */

const QUOTE_LIST_URL = "https://gist.githubusercontent.com/erickedji/68802/raw/7264f2d232702b4013490a0b2f9286cfa1b817e3/quotes.txt";
const QUOTE_ELEMENT_CLASS_NAME = "random-quote";

/**
 * Random number function from Mozilla.
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
  

/**
 * Asynchronously get a list of quotes to pick from.
 */
async function getQuoteList() {

    return fetch(QUOTE_LIST_URL)
        .then(res => res.text())
        .then((text) => {
            const splitQuotes = text.split(/\r\n\r\n/);
            return splitQuotes;
        });
}

getQuoteList()
    .then((quotes) => {
        const quote = quotes[getRandomIntInclusive(0, quotes.length-1)];
        const quoteElement = document.getElementsByClassName(QUOTE_ELEMENT_CLASS_NAME)[0];
        quoteElement.textContent = quote;
    })
    .catch(e => console.log(e));