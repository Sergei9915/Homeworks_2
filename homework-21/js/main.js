class Student {
  constructor(name, surname, year, grade) {
    (this.name = name),
      (this.surname = surname),
      (this.year = year),
      (this.grade = grade),
      (this.array = new Array(25));
  }

  ageStudent() {
    const todaysYear = 2023;
    return todaysYear - this.year;
  }

  get averagePoint() {
    const point =
      this.grade.reduce((accum, point) => (accum += point), 0) /
      this.grade.length;
    return Math.round(point);
  }

  present() {
    let empty = this.array.findIndex((i) => i === undefined);

    if (empty >= 0) {
      this.array[empty] = "true";
    } else {
      console.log("Список посещаемости заполнен!");
    }
  }

  absent() {
    let empty = this.array.findIndex((i) => i === undefined);

    if (empty >= 0) {
      this.array[empty] = "false";
    } else {
      console.log("Список посещаемости заполнен!");
    }
  }

  summary() {
    const numberOfVisits = this.array.filter((arr) => arr === "true").length;

    const averageVisit = numberOfVisits / this.array.length;

    if (this.averagePoint > 90 && averageVisit > 0.9) {
      console.log("Молодец!");
    } else if (this.averagePoint > 90 || averageVisit > 0.9) {
      console.log("Хорошо, но можно лучше!");
    } else {
      console.log("Редиска!");
    }
  }
}

const student1 = new Student(
  "Serhii",
  "Capitan",
  1999,
  [100, 90, 70, 80, 90, 80]
);
console.log(student1);
console.log("Возвраст студента:", student1.ageStudent());
console.log("Средний балл:", student1.averagePoint);

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

student1.summary();

const student2 = new Student(
  "Mike",
  "Shevchenko",
  1987,
  [100, 90, 100, 100, 90, 85]
);
console.log(student2);
console.log("Возвраст студента:", student2.ageStudent());
console.log("Средний балл:", student2.averagePoint);

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

student2.summary();
