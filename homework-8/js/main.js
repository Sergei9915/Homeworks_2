// Написати цикли, які зможуть:

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
// let str = '';
// for (let i = 10; i <= 20; i++) {
//   if (i != 20) {
//     str += i + ', ';
//   } else {
//     str += i + '.';
//   }
// }

// console.log('str:', str);

// 2. Вивести квадрати чисел від 10 до 20.
// let str = '';
// for (let i = 10; i <= 20; i++) {
//   if (i != 20) {
//     str += Math.pow(i, 2) + ', ';
//   } else {
//     str += Math.pow(i, 2) + '.';
//   }
// }

// console.log('str:', str);

// 3. Вивести таблицю множення на 7.
// let str = '';
// for (let i = 0; i <= 10; i++) {
//   str += `${i} * 7 = ` + `${i * 7}\n`
// }
// console.log(str)

// 4. Знайти суму всіх цілих чисел від 1 до 15.
// let str = 0;
// for (let i = 1; i <= 15; i++) {
//   str += i;
// }
// console.log('str:', str)

// 5. Знайти добуток усіх цілих чисел від 15 до 35.
// let str = 1;
// for (let i = 15; i <= 35; i++) {
//   str *= i;
// }
// console.log('str:', str) // BigInt(str)

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// let str = 1;
// for (let i = 1; i <= 500; i++) {
//   str += i; // str += i / 500;
//   ArithmeticNum = str / 500;
// }
// console.log('str:', ArithmeticNum);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
// let str = 0;

// for (let i = 30; i <= 80; i += 2) {
//   str += i;
// }
// console.log('str:', str)

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// let str = ''

// for (let i = 100; i <= 200; i++) {
//   if (i % 3 === 0) {
//     str += i + ' ';
//   }
// }
// console.log(str)

// // Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// let naturalNum = +prompt('Enter a natural number');
// let userAlert = '';
// let pairedShare = '';
// let sumNaturalNum = 0;

// for (let i = 0; i <= naturalNum; i++) {
//   if (naturalNum % i === 0) {
//     userAlert += i + '; ';
//     pairedShare += naturalNum % 2; // <= Визначити кількість його парних дільників.
//     sumNaturalNum += i; // <= Знайти суму його парних дільників.
//   }
// }

// if (isNaN(naturalNum) || naturalNum <= 0) {
//   alert(`Число ${naturalNum} - натуральным числом не является!`)
// } else {
//   alert(`${naturalNum} - можно разделить на:\n ${userAlert}`);
//   alert(`Количество его четных делителей:\n ${pairedShare.length};`);
//   alert(`Сумма его парных делителей:\n ${sumNaturalNum}.`)
// }

// Надрукувати повну таблицю множення від 1 до 10.
// let str = '';

// for (let i = 0; i <= 10; i++) {
//   for (let a = 0; a <= 10; a++) {
//     str += `---- ${i} * ${a} = ${i * a};\n`;
//   }
// }
// console.log(str)