const quoteTextRef = document.querySelector('.quote__description');
const quoteAuthorTextRef = document.querySelector('.quote-author__text');

const currentDate = new Date().getDate();
localStorage.setItem('quoteDay', currentDate);
async function getQuote() {
  try {
    const res = await fetch(`https://energyflow.b.goit.study/api/quote`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log('quote-err', err);
  }
}

getQuote().then(data => {
  quoteTextRef.textContent = data.quote;
  quoteAuthorTextRef.textContent = data.author;
});

if (new Date().getDate !== Number(localStorage.getItem('quoteDay'))) {
  getQuote().then(data => {
    quoteTextRef.textContent = data.quote;
    quoteAuthorTextRef.textContent = data.author;
  });
}
