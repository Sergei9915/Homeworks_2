const mathematicalSymbol = prompt('Write the symbol: +, -, *, /;'); // Пользователь вводит символ;
const firstNumber = prompt('Number 1:'); // Пользователь вводит 1 число;
const secondNumber = prompt('Number 2:'); // Пользователь вводит 2 число;

const stringToFirstNumber = Number(firstNumber); // Конвертация строки в число;
const stringToSecondNumber = Number(secondNumber); // Конвертация стровки в число; 
const testValue = isNaN(stringToFirstNumber) || isNaN(stringToSecondNumber); // Проверка на NaN;

const sub = stringToFirstNumber - stringToSecondNumber; // sub;
const add = stringToFirstNumber + stringToSecondNumber; // add; 
const mul = stringToFirstNumber * stringToSecondNumber; // mul;
const div = stringToFirstNumber / stringToSecondNumber; // div;

if (testValue === true) {
  alert('Error! You entered the wrong number!')
} else if (mathematicalSymbol === '-') {
  alert(`${firstNumber} - ${secondNumber} = ${sub}`)
} else if (mathematicalSymbol === '/') {
  alert(`${firstNumber} / ${secondNumber} = ${mul}`)
} else if (mathematicalSymbol === '*') {
  alert(`${firstNumber} * ${secondNumber} = ${mul}`)
} else if (mathematicalSymbol === '+') {
  alert(`${firstNumber} + ${secondNumber} = ${add}`)
} else if (mathematicalSymbol === mathematicalSymbol) {
  alert('Error! You entered an invalid character!')
} // Функция;