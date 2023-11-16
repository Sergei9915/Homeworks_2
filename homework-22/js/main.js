class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let price = this.size.price + this.stuffing.price;
    this.toppings.forEach((topping) => {
      price += topping.price;
    });

    return price;
  }

  calculateCalories() {
    let calories = this.size.calories + this.stuffing.calories;
    this.toppings.forEach((topping) => {
      calories += topping.calories;
    });

    return calories;
  }
}

const size = {
  small: { price: 50, calories: 20 },
  large: { price: 100, calories: 40 },
};

const stuffing = {
  cheese: { price: 10, calories: 20 },
  salad: { price: 20, calories: 5 },
  potato: { price: 15, calories: 10 },
};

const topping = {
  spice: { price: 15, calories: 0 },
  mayo: { price: 20, calories: 5 },
};

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(size.small, stuffing.cheese);
console.log(hamburger);

// добавка з майонезу
hamburger.addTopping(topping.mayo);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(topping.spice);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());
