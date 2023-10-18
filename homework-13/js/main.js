const array = [1, 2, 3, 4, 5, 6, 7];
console.log('Before:', array);

const removeElement = (array, item) => array.splice(item - 1, 1); //

removeElement(array, 5);
console.log('After:', array);