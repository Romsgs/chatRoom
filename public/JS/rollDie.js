// const websocketScript = require('./socketScript');

const button = document.getElementById('rollDie');

// button.onclick(() => {
//   const result = document.getElementById('dieResult');
//   let resultado = Math.floor(Math.random() * 20);
//   result.innerText = `${resultado}`;
// });

function roll() {
  const result = document.getElementById('dieResult');
  let resultado = Math.floor(Math.random() * 20);
  result.innerText = `${resultado}`;
}

button.addEventListener('click', roll);
