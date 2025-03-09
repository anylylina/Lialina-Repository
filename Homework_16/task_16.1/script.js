class Student {
  constructor(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
    } else {
      console.log("Досягнуто максимальну кількість відвідувань (25)");
    }
  }

  absent() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    } else {
      console.log('"Досягнуто максимальну кількість відвідувань (25)"');
    }
  }

  summary() {
    const attendedClasses = this.attendance.filter(
      (value) => value === true
    ).length;
    const totalClasses = this.attendance.filter(
      (value) => value !== null
    ).length;
    const attendanceRate =
      totalClasses === 0 ? 0 : attendedClasses / totalClasses;

    const averageGrade = this.getAverageGrade();

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Анна", "Ляліна", 1998, [95, 88, 92, 100, 97]);
const student2 = new Student("Ольга", "Данилейко", 1994, [85, 80, 82, 78, 90]);
const student3 = new Student("Сергій", "Данилейко", 1991, [70, 60, 75, 65, 80]);

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.present();

console.log(
  `${student1.firstName} ${
    student1.lastName
  }, Вік: ${student1.getAge()}, Середній бал: ${student1.getAverageGrade()}`
);
console.log(`Висновок: ${student1.summary()}`);

console.log(
  `${student2.firstName} ${
    student2.lastName
  }, Вік: ${student2.getAge()}, Середній бал: ${student2.getAverageGrade()}`
);
console.log(`Висновок: ${student2.summary()}`);

console.log(
  `${student3.firstName} ${
    student3.lastName
  }, Вік: ${student3.getAge()}, Середній бал: ${student3.getAverageGrade()}`
);
console.log(`Висновок: ${student3.summary()}`);
