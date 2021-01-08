let first = parseInt( prompt('Введите первое число') );
let second = parseInt( prompt('Введите второе число') );

if(first > 0 && second > 0) {
  alert( first + ' + ' + second + ' = ' + Math.floor(first + second) + ',\n' + first + ' - ' + second + ' = ' + Math.floor(first - second) + ',\n' + first + ' * ' + second + ' = ' + Math.floor(first * second) + ',\n' + first + ' / ' + second + ' = ' + Math.floor(first / second) );
// ещё можно так?
/* 
  alert( `${first} + ${second} = ${Math.floor(first + second)},\n${first} - ${second} = ${Math.floor(first - second)},\n${first} * ${second} = ${Math.floor(first * second)},\n${first} / ${second} = ${Math.floor(first / second)}` );
*/
} else {
  alert('Вы ввели неккоректное число!')
}