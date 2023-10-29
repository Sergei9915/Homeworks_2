const sumFunction = () => {
  let total = 0;

  return (value) => {
    total += value;
    return total;
  };
}

const result = sumFunction()

console.log(result(3)); // 3;
console.log(result(5)); // 8;
console.log(result(20)); // 28;
