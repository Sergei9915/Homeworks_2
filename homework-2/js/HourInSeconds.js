const hour = prompt('How many hours?'); // Пользователь вводит число;
const stringHourToNumber = Number(hour); // Конвертация строки в число;
const second = Number(3600); // Переменная со значением;
const hourInSecond = hour * second; // 
const testValue = isNaN(stringHourToNumber); // Проверка на NaN

if (testValue === false) {
  alert(`There are ${hourInSecond} seconds in this ${hour} hour`)
} else if (testValue === true) {
  alert('Error! You entered the wrong number!')
} // Функция
