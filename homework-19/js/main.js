class Human {
  constructor(name, floor) {
    this.name = name;
    this.floor = floor;
  }
}

class Apartment {
  residents = []; // Создаем пустой массив жителей.

  addResident(resident) {
    this.residents.push(resident);
  } // Создаем метод, который добавляет жителя/жителей в массив.
}

class House {
  constructor(maxApartment) {
    this.maxApartment = maxApartment;
  } // Конструктор принимающий параметр макс. количество квартир.

  apartment = []; // пустой массив квартир.

  addApartment(copyApartment) {
    this.maxApartment > this.apartment.length ? this.apartment.push(copyApartment) : console.log("В доме превышен лимит по квартирам!");
  } // Сравниваем макс. количество квартир с пустым массивом квартир.
}

const human1 = new Human("Serhii", "man");
const human2 = new Human("Mike", "man");
const human3 = new Human("Masha", "woman");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment(); 

apartment1.addResident(human1);
apartment2.addResident(human2);
apartment3.addResident(human3);

const house1 = new House(2);

house1.addApartment(apartment1);
house1.addApartment(apartment2);
console.log(house1);

house1.addApartment(apartment3);
