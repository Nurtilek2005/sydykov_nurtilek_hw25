let winner = parseInt( prompt(`"Миномет!" Введите ваше число от 1 до 50`) );

if(winner <= 30 && winner >= 28) {
  alert('Вы победили!');
} else if(winner > 30) {
  alert('Перелёт! Вы не угадали число.');
} else if(winner < 28) {
  alert('Недолёт! Вы не угадали число.');
} else {
  alert('Вы ввели некорректное число');
}