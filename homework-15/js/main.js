// Задание 1.
// const array = ["hello", "Sergey", 23, 20, 129, 221, false, "orange", true, "1"];

// const arithmeticNumber = function (item) {
//   const filterNumber = item.filter((item) => typeof item === "number");

//   const sumNumber = filterNumber.reduce(function (sum, numberItem) {
//     return (sum += numberItem);
//   }, 0);

//   const result = Math.round(sumNumber / filterNumber.length);

//   return result;
// };

// const result = arithmeticNumber(array);
// console.log(result);

// Задание 2.
// const firstNumber = +prompt("Введите первое чило:");
// const secondNumber = +prompt("Введите втрое число:");
// const mathematicalSymbol = prompt("Введите символ: +, -, *, /, %, или ^;");

// const doMath = (x, znak, y) => {
//   if (isNaN(x) || isNaN(y)) {
//     return alert("Ошибка!\nВведите пожалуйста числа.");
//   }

//   if (znak === null || znak === "") {
//     return alert("Ошибка! Пустая строка!\nИли Вы решили отменить?");
//   }

//   if (znak === "+") {
//     add = x + y;
//     alert(`${x} + ${y} = ${add}`);
//   } else if (znak === "-") {
//     sub = x - y;
//     alert(`${x} - ${y} = ${sub}`);
//   } else if (znak === "*") {
//     mul = x * y;
//     alert(`${x} * ${y} = ${mul}`);
//   } else if (znak === "/" && y === 0) {
//     alert(`Делить на ${y} нельзя!`);
//   } else if (znak === "/") {
//     div = x / y;
//     alert(`${x} / ${y} = ${div}`);
//   } else if (znak === "%") {
//     percent = x % y;
//     alert(`${x} % ${y} = ${percent}`);
//   } else if (znak === "^") {
//     square = Math.pow(x, y);
//     alert(`${x} в степени ${y} = ${square}`);
//   } else {
//     alert("Неверный символ!\nВведите пожалуйста: +, -, *, /, % или ^;");
//   }
// };

// doMath(firstNumber, mathematicalSymbol, secondNumber);

// Задание 3
// const twoDimensionalArray = function () {
//   const mainLengthArray = +prompt("Введите длину основного массива:");
//   const interiorLengthArray = +prompt("Введиете длину внутреннего массива:");

//   if (isNaN(mainLengthArray) || isNaN(interiorLengthArray) || mainLengthArray <= 0 || interiorLengthArray <= 0) {
//     alert("Введите положительные числа для длины массивов.")
//     return;
//   }
//   const resultArray = [];
//   for (let i = 0; i < mainLengthArray; i++) {
//     const innerArray = [];
//     for (let a = 0; a < interiorLengthArray; a++) {
//       const value = prompt(`Введите значение для основного массива [${i}] и для внутреннего [${a}]:`);
//       innerArray.push(value);
//     }
//     resultArray.push(innerArray);
//   }
//   return resultArray;
// };

// const result = twoDimensionalArray();
// console.log(result);

// // Задание 4

// const alertUsers = alert('Поиграем?')
// const usersPromt = prompt('Введите строку в кторой нужно удалить символы:');
// const removeSymbol = prompt('Введите символы для удаления (без пробелов):');

// const deleteSymbol = function (userString, remove) {
//   const splitRemove = remove.split('');

//   const splitUserString = userString.split('');

//   const filterArray = splitUserString.filter(symbol => !splitRemove.includes(symbol));

//   return filterArray.join('');
// };


// const result = deleteSymbol(usersPromt, removeSymbol)
// alert(`Теперь ваша строка выглядит так [${result}], понравилось? :)`)
