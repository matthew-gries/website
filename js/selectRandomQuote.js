/**
 * Script to set the text of an element to a random quote.
 */

const QUOTE_LIST_URL = "https://raw.githubusercontent.com/akhiltak/inspirational-quotes/master/Quotes.csv";
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
            const splitQuoteString = text.split(/[\r\n]+/);
            const quotes = [];
            for (let i = 1; i < splitQuoteString.length; i++) {
                const quoteComponents = splitQuoteString[i].split(";");
                const quote = quoteComponents[0] + " -- " + quoteComponents[1];
                quotes.push(quote); 
            }
            return quotes;
        });
}

getQuoteList()
    .then((quotes) => {
        const quote = quotes[getRandomIntInclusive(0, quotes.length-1)];
        const quoteElement = document.getElementsByClassName(QUOTE_ELEMENT_CLASS_NAME)[0];
        quoteElement.textContent = quote;
    })
    .catch(e => console.log(e));