let usersNumbers = prompt('Введите числа через пробел: ');
console.log('Информация от пользователя: ', usersNumbers);
console.log('Длина массива: ', usersNumbers.length)

function changeArray() {
  usersArrSplit = usersNumbers.trim().split(' '); // Через сплит делаем массив из строки.
  console.log('Масив чисел: ', usersArrSplit);

  sortUsersArr = usersArrSplit.sort(); // Cортируем массив по возрастанию.
  console.log('Отсортированный массив по возрастанию: ', sortUsersArr);

  removedUsersArr = sortUsersArr.splice(1, 3); // Удаляем элементы с 2 по 4.
  console.log('Удалили элементы с 2 по 4 включительно: ', sortUsersArr)
}
changeArray()