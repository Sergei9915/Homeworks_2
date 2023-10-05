let numOrStr = prompt('Input number or string');
console.log(typeof numOrStr)

// if (numOrStr === null) {
//   console.log('ви скасували')
// } else if (numOrStr.trim() === '') {
//   console.log('Empty String');
// } else if (isNaN(+numOrStr)) {
//   console.log(' number is Ba_NaN')
// } else {
//   console.log('OK!')

switch (true) {
  case numOrStr === null:
    console.log('Ви скасували!');
    alert('Ви скасували!');
    break;
  case numOrStr.trim() === '':
    console.log('Empty String');
    alert('Empty String');
    break;
  case isNaN(+numOrStr):
    console.log('Number is Ba_NaN')
    alert('Number is Ba_NaN')
    break;
  default:
    console.log('OK!')
    alert('OK!')
} // Проверяем на Boolean 