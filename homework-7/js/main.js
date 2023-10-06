let numOrStr = prompt('Input number or string');
console.log(typeof numOrStr);

// if (numOrStr === null) {
//   console.log('ви скасували')
// } else if (numOrStr.trim() === '') {
//   console.log('Empty String');
// } else if (isNaN(+numOrStr)) {
//   console.log(' number is Ba_NaN')
// } else {
//   console.log('OK!')
// }

switch (numOrStr) {
  case numOrStr:
    if (numOrStr === null) {
      console.log('Ви скасували');
      alert('Ви скасували!');
    } else if (numOrStr.trim() === '') {
      console.log('Empty String');
      alert('Empty String');
    } else if (isNaN(+numOrStr)) {
      console.log('Number is Ba_NaN');
      alert('Number is Ba_NaN');
    } else {
      console.log('OK!');
      alert('OK!');
    }
}
