let age = parseInt( prompt('Сколько вам лет?') );

if(age <= 0) {
  alert('Вы ещё не родились!');
} else if(age >= 1 && age <= 3) {
  alert('Куда поведут туда и идите))');
} else if(age >= 4 && age <= 10) {
  alert('Проситесь на детскую площадку');
} else if(age >= 11 && age <= 18) {
  alert('Хорошо учитесь!');
} else if(age >= 19) {
  alert('Вы уже взрослые');
} else {
  alert('Вы ввели неккоректный возраст!');
}