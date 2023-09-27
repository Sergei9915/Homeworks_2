let symbol = prompt('Write the symbol: +, -, *, /;'); // Пользователь вводит символ;
let a = prompt('Number 1:'); // Пользователь вводит 1 число;
let b = prompt('Number 2:'); // Пользователь вводит 2 число;

const stringToNumberA = Number(a); // Конвертация строки в число;
const stringToNumberB = Number(b); // Конвертация стровки в число; 

const sub = stringToNumberA - stringToNumberB; // sub
const add = stringToNumberA + stringToNumberB; // add 
const mul = stringToNumberA * stringToNumberB; // mul
const div = stringToNumberA / stringToNumberB; // div 

if (symbol === '-') {
  alert(`${a} - ${b} = ${sub}`)
} else if (symbol === '/') {
  alert(`${a} / ${b} = ${mul}`)
} else if (symbol === '*') {
  alert(`${a} * ${b} = ${mul}`)
} else if (symbol === '+') {
  alert(`${a} + ${b} = ${add}`)
} // Функция