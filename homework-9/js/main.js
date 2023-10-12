// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
// let str = '';

// for (let i = 20; i <= 30; i = i + 0.5) {
//   str += i + '; '
// }
// console.log(str)
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
// let userData = +prompt('Enter the number of dollars')
// const one$ = 27;
// let userInfo = ''

// for (let i = 1; i <= 100; i += 10) {
//   userInfo = userData * one$;
// }

// alert(`${userData}$ = ${userInfo} грн.`)


// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// let userData = +prompt('Enter an integer')

// for (let i = 1; i <= 100; i++) {
//   if (Math.pow(i, 2) < userData) {
//     console.log(i)
//   }
// }

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// let userData = parseInt(prompt('Enter an integer'));
// let isTrue = true;

// for (let i = 2; i <= userData; i++) {
//   if (userData % i === 0) {
//     isTrue = false;
//   } else {
//     isTrue = true;
//   }
// }

// if (isTrue) {
//   console.log(`${userData} - не простое число.`)
// } else {
//   console.log(`${userData} - простое число`)
// }



// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
// let userData = parseInt(prompt('Enter an integer'));
// let isTrue = true;

// for (let i = 1; i <= userData; i++) {
//   if (userData % 3 !== 0) {
//     isTrue = false;
//   } else if (userData /= 3) {
//     isTrue = true;
//   }
// }

// if (isTrue) {
//   alert(`Можно получить данное число, путем сведения числа 3 в определенную степень.`)
// } else {
//   alert('Нельзя получить данное число, путем сведения числа 3 в определенную степень')
// }