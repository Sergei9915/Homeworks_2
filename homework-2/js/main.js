let a = prompt('Number 1:') // Пользователь вводит первое число;
let b = prompt('Number 2:') // Пользователь вводит второе чиcло;

const stringToNumberA = Number(a); // Конвертация строки в число;
const stringToNumberB = Number(b); // Конвертация стровки в число; 

const add = stringToNumberA + stringToNumberB; // Первое и второе число прибавляются;
const minus = a - b; // Первое и второе число отнимаются;
const multiply = a * b; // Первое и второе число умножаются;
const divide = a / b; // Первое и второе число делится;

alert(`${a} + ${b} = ${add}; ${a} - ${b} = ${minus}; ${a} * ${b} = ${multiply}; ${a} / ${b} = ${divide}.`); // Показываем пользователю результат;