let name = prompt("Введите ваше имя");
let age = parseInt( prompt("Введие ваш возраст") );

if(age >= 1) {
  alert("Привет, меня зовут " + name + ", мне " + age + " лет.")
} else if(age < 1) {
  alert("Вы ещё не родились")
} else {
  alert('Ошибка 404')
}