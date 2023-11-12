class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
  }
}

class Car {
  constructor(brand, color, year, numberPlate) {
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.numberPlate = numberPlate;
    this.storage = null;
  }

  addHuman(driver){
    driver.age > 17 ? this.storage = driver : console.log('Вам нельзя преобрести машину!')
  }

  infoCar(){
    console.log(`Марка: ${this.brand};\nЦвет: ${this.color};\nГод выпуска: ${this.year};\nНомерной знак: ${this.numberPlate};`)
    this.storage ? this.storage.info() : console.log('Владельца нет!')
  }
}

const human1 = new Human('Serhii', 19);
const human2 = new Human('Mike', 24);
const human3 = new Human('Misha', 16);

const car1 = new Car('BMV', 'green', 2019, 'AE7456BA');
const car2 = new Car('Audi', 'black', 2022, 'KE8877CA');
const car3 = new Car('Lanos', 'red', 1998, 'AE6677УA');

car1.addHuman(human1);
car1.infoCar();

// car1.addHuman(human3);
// car2.infoCar()
