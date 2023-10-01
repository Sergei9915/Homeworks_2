const firstNumber = prompt('Number 1:');
const secondNumber = prompt('Number 2:');
const thirdNumber = prompt('Number 3:');

const stringToFirstNumber = Number(firstNumber);
const stringToSecondNumber = Number(secondNumber);
const stringToThirdNumber = Number(thirdNumber);
const testValue = isNaN(stringToFirstNumber) || isNaN(stringToSecondNumber) || isNaN(stringToThirdNumber);
const averageValue = (stringToFirstNumber + stringToSecondNumber + stringToThirdNumber) / 3;

if (testValue === true) {
  alert('Error! You entered the wrong number!')
} else if (testValue === false) {
  alert (`The arithmetic mean of these numbers ${averageValue};`)
}
