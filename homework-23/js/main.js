class SuperMath {
  input() {
    const userInput = prompt("Введите число: ");
    const parsedValue = parseFloat(userInput);

    return !isNaN(parsedValue) ? parsedValue : null;
  }

  check(obj) {
    const { X, Y, znak } = obj;

    if (this.isValidOperator(znak)) {
      const confirmMessage = `Хотите исполнить ${znak} с ${X} и ${Y}? (да/нет)`;
      const userConfirmation = prompt(confirmMessage);

      if (userConfirmation === null) {
        console.log("Отмена");
      } else if (userConfirmation.toLowerCase() === "да") {
        if (isNaN(X) || isNaN(Y)) {
          console.log("Введите число!");
        } else {
          const result = this.performOperation(znak, X, Y);
          if (!isNaN(result)) {
            console.log(`Результат: ${result}`);
          } else {
            console.log("Ввели не число!");
          }
        }
      } else {
        obj.X = this.input();
        obj.Y = this.input();
        this.check(obj);
      }
    } else {
      console.log(
        "Неверный оператор. Пожалуйста, введите действительный оператор (+ - / * %)."
      );
    }
  }

  isValidOperator(operator) {
    const validOperators = ["+", "-", "/", "*", "%"];
    return validOperators.includes(operator);
  }

  performOperation(operator, X, Y) {
    switch (operator) {
      case "+":
        return this.add(X, Y);
      case "-":
        return this.subtract(X, Y);
      case "/":
        return Y !== 0 ? this.divide(X, Y) : console.log("Делить на 0 нельзя");
      case "*":
        return this.multiply(X, Y);
      case "%":
        return Y !== 0
          ? this.modulo(X, Y)
          : console.log("Не могу вычислить по модулю на 0");
      default:
        console.log("Неверный оператор.");
        return NaN;
    }
  }

  add(X, Y) {
    return X + Y;
  }

  subtract(X, Y) {
    return X - Y;
  }

  multiply(X, Y) {
    return X * Y;
  }

  divide(X, Y) {
    return X / Y;
  }

  modulo(X, Y) {
    return X % Y;
  }
}

const superMath = new SuperMath();
const mathObj = { X: 12, Y: 3, znak: "/" };

superMath.check(mathObj);
