const button = document.querySelector('.button');
let userName;

function getUserName() {
  if (button.textContent === 'Нажми на меня') {
    userName = prompt('Введите имя');
    button.textContent = 'Ещё раз';
  } else {
    alert(`Привет, ${userName}! :)`);
  }
}

button.addEventListener('click', getUserName);

// ЁПРСТ Я ЭТО СДЕЛАЛ, У МЕНЯ ПОЛУЧИЛОСЬ!! Я САМ ДОГАДАЛСЯ, САМ, КАРЛ!!!!