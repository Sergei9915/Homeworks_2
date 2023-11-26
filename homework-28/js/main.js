const pow = (num, degree) => {
  degree--;

  if (degree < 0) {
    return 1;
  } else {
    return num * pow(num, degree);
  }
};

console.log(pow(2, 3));
