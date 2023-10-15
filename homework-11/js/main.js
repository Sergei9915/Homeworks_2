const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Original array:', numbers);

const numberPositiveElements = numbers.filter((numbers) => numbers > 0);
console.log('numberPositiveElements:', numberPositiveElements);

const sumPositiveElements = numberPositiveElements.reduce(function (a, b) {
  return a + b;

}, 0);
console.log('sumPositiveElements:', sumPositiveElements);

const miniArrElement = Math.min(...numbers);
console.log('miniArrElement:', miniArrElement);
const miniIndexOf = numbers.indexOf(miniArrElement);
console.log('miniIndexOf:', miniIndexOf);

//const miniArrElement = numbers.sort(function (a, b) {
//   return a - b;
// }, 0);
// console.log('miniArrElement:', miniArrElement[0]);

const maxArrElement = Math.max(...numbers);
console.log('maxArrElement:', maxArrElement);
const maxIndexOf = numbers.indexOf(maxArrElement);
console.log('maxIndexOf:', maxIndexOf);

//const maxArrElement = numbers.sort(function (a, b) {
//   return a - b;
// }
// );
// console.log('maxArrElement:', maxArrElement[numbers.length - 1]);

const numberNegativeElements = numbers.filter((numbers) => numbers < 0);
console.log('numberNegativeElements:', numberNegativeElements.length);

const oddPositiveElements = numbers.filter((numbers) => numbers > 0 && numbers % 2 === 0);
console.log('oddPositiveElements', oddPositiveElements.length);

const doublesPositiveElements = numbers.filter((numbers) => numbers > 0 && numbers % 2 !== 0);
console.log('doublesPositiveElements:', doublesPositiveElements.length);

const sumDoublesPositiveElements = doublesPositiveElements.reduce(function (a, b) {
  return a + b;
}, 0);
console.log('sumDoublesPositiveElements: ', sumDoublesPositiveElements);

const sumOddPositiveElements = oddPositiveElements.reduce(function (a, b) {
  return a + b;
}, 0);
console.log('sumOddPositiveElements:', sumOddPositiveElements);

const productOfNumbers = numberPositiveElements.reduce(function (a, b) {
  return a * b;
}, 1);
console.log('productOfNumbers:', BigInt(productOfNumbers));

const largestElement = numbers.map(function (element) {
  if (element != Math.max(...numbers)) {
    return 0;
  }
  return element
})

console.log(largestElement)
