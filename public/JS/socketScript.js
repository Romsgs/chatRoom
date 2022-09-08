var socket = io('http://localhost:3000'); // essa variavel esta no arquivo por causa da importacao de socket io la em cima no meta...

function renderMessage(message) {
  // console.log(messages);
  $('.messages').append(message);
}
function renderDieRoll(message) {
  $('.messages').append(message);
}
socket.on('previousMessages', (messages) => {
  for (message of messages) {
    renderMessage(message);
  }
});
socket.on('receivedMessage', (message) => {
  renderMessage(message);
});
$('#chat').submit(function (event) {
  event.preventDefault();
  let messageField = document.getElementById('messageField');
  var author = $('input[name=username]').val();
  var message = $('input[name=message]').val();
  if (author.length && message.length) {
    var messageObj = `<div class="message"><strong> ${author}: </strong> ${message} `;
    renderMessage(messageObj);
    socket.emit('sendMessage', messageObj);
  }
});
// socket.on()

///////////////////// DADO
const button = document.getElementById('rollDie');

function roll() {
  const result = document.getElementById('dieResult');
  let resultado = Math.floor(Math.random() * 20) + 1;
  result.innerText = `${resultado}`;
  let player = $('input[name=username]').val();
  let messageObj = `<div class="message"><strong> Sistema De Dados: </strong> O Jogador <strong>
    ${player} </strong>, rolou <strong>${resultado} </strong>, no D-20  </div>`;
  renderMessage(messageObj);
  socket.emit('sendMessage', messageObj);
}

button.addEventListener('click', roll);
///////////////////// FIM DADO
