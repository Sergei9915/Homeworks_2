console.log({}.prototype === {}.prototype);
//true - обьект {} пустой, и дает undefined. Сравниваем undef === undef.

function sayHello() {}
console.log(sayHello.prototype === sayHello.__proto__);
// false - Так как обьект прототипа не может равняться func самого обьекта.
// console.log(typeof sayHello.__proto__); // object
// console.log(typeof sayHello.prototype); // func
// console.log(sayHello.prototype); // Обьект самого прототипа.
// console.log(sayHello.__proto__); // Функция самого обьекта.

function sayHello() {}
function sayGoodBye() {}
console.log(sayHello.__proto__ === sayGoodBye.__proto__);
//true - у данных функций есть общий глобальный прототип - protype object.

console.log(sayHello.prototype === sayGoodBye.prototype);
//false - функций имеют разные обьекты прототипов.

let arrowFunc = () => {};
console.log(arrowFunc.prototype === Object.prototype);
//false - Стрелочные функций не имеют прототипов (дает undef). и не может равняться обьекту прототипов.
console.log(typeof arrowFunc.prototype);
console.log(typeof Object.prototype);

// const myName = "Serhii";
// console.log(myName.prototype);
let age = 22;
console.log(age.prototype === Number.prototype);
//false - так как у чисел нет prototype.
console.log(age.prototype);
console.log(Number.prototype);

console.log(age.__proto__ === Number.prototype);
//true - так как у чисел есть proto и его глобальный прототип является Number.prototype

function Test() {}
console.log(Test.__proto__ === Function.prototype);
//true - test.__proto__ ссылается на глобальный прототип func.prototype.
// console.log(Test.prototype);
// console.log(Test.__proto__);

let num = 77;
console.log(num.__proto__ === Number.prototype);
//true - так как у чисел есть proto и его глобальный прототип является Number.prototype
