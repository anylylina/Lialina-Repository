class Coach {
  constructor(name, specialization, rating) {
    this.name = name;
    this.specialization = specialization;
    this.rating = rating;
  }

  displayInfo() {
    console.log(
      `Тренер: ${this.name}, Спеціалізація: ${this.specialization}, Рейтинг: ${this.rating}`
    );
  }
}

const coach1 = new Coach("Anna", "Fitness", 4.7);
const coach2 = new Coach("Вікторія", "Yoga", 4.9);

coach1.displayInfo();
coach2.displayInfo();
