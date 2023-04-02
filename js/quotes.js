const quotes = [
  {
    quote: '"Be the change that you wish to see in the world."',
    author: 'Mahatma Gandhi',
  },
  {
    quote: `"I have not failed. I've just found 10,000 ways that won't work."`,
    author: 'Thomas Edison',
  },
  {
    quote: '"If you want to live a happy life, tie it to a goal, not to people or things."',
    author: 'Albert Einstein',
  },
  {
    quote: '"The only way to do great work is to love what you do."',
    author: 'Steve Jobs',
  },
  {
    quote: `"You miss 100% of the shots you don't take."`,
    author: 'Wayne Gretzky',
  },
  {
    quote: '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    author: 'Winston Churchill',
  },
  {
    quote: '"The best way to predict the future is to invent it."',
    author: 'Alan Kay',
  },
  {
    quote: `"Believe you can and you're halfway there."`,
    author: 'Theodore Roosevelt',
  },
  {
    quote: '"A person who never made a mistake never tried anything new."',
    author: 'Albert Einstein',
  },
  {
    quote: `"Don't let yesterday take up too much of today."`,
    author: 'Will Rogers',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
