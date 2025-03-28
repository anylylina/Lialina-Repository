// Неймінг
// 1. Дотримання конвенцій іменування
// Правильний вибір назв змінних та функцій є важливим елементом написання чистого та зрозумілого коду. Коректні назви допомагають зробити код більш зрозумілим та підтримуваним. Давайте ми розглянемо важливі аспекти вибору правильних назв для змінних та функцій в мові JavaScript.

// Помилка
// Приклади
// CamelCase: Одна з найпоширеніших конвенцій іменування в JavaScript. Імена змінних та функцій пишуться з малої літери, окрім першої, і кожне нове слово починається з великої літери. Наприклад, myVariable, calculateTotalAmount.

// Помилка
// let myVariable = 42;
// function calculateTotalAmount(price, quantity) {
//     return price * quantity;
// }
// Помилка
// snake_case: Ця конвенція полягає в тому, що слова в іменах розділяються підкресленням. Це не часто використовується в назвах змінних та функцій у JavaScript.

// Помилка
// let my_variable = 42;
// function calculate_total_amount(price, quantity) {
//     return price * quantity;
// }
// Помилка
// PascalCase: В цій конвенції кожне слово починається з великої літери, і жодних інших роздільників не використовується. Використовується для назв класів та конструкторів.

// Помилка
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// Помилка
// Зрозумілі та описові назви
// Зрозумілість: Назви змінних та функцій повинні бути зрозумілими та легко читатися. Вони повинні відображати суть об'єкта або операції, яку вони виконують. Якщо змінна відповідає за збереження кількості товарів, то quantity буде більш зрозумілою назвою, ніж q.
// Описовість: Імена мають бути якомога більш описовими. Наприклад, calculateTotalAmount говорить нам більше, ніж calculate.
// Помилка
// Уникнення абревіатур та скорочень
// Уникайте використання абревіатур та скорочень, які можуть бути незрозумілими для інших розробників. Наприклад, getInfo краще, ніж getInf, якщо це не є загальноприйнятим скороченням в проекті.

// Помилка
// // Погано: скорочення, яке може бути незрозумілим
// function getInf(data) {
//     // ...
// }

// // Добре: зрозуміла та описова назва
// function getInfo(data) {
//     // ...
// }
// Помилка
// Загальні принципи іменування змінних та функцій допомагають зробити код більш зрозумілим і підтримуваним. Пам'ятайте, що зрозумілі та описові назви є ключем до успішної розробки та спільної роботи над проектами.

//Коментування

// Коректне коментування в JavaScript
// Коментування грає важливу роль у написанні якісного коду. Від якості коментарів залежить зрозумілість та підтримуваність коду. Ми розглянемо важливі принципи коректного коментування в JavaScript, включаючи коментарі для пояснення складних частин коду та документування API.

// Помилка
// Коментарі для пояснення складних частин коду
// Один із основних видів коментування - це додати пояснення до складних або нетривіальних частин коду. Це допомагає іншим розробникам легше розуміти вашу логіку.

// Помилка
// // Підрахунок суми всіх елементів масиву
// function calculateSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// Помилка
// У цьому прикладі коментар пояснює, що робить функція calculateSum, яка ітерується через масив та обчислює суму його елементів.

// Помилка
// Коментарі для документування API та публічних методів
// Коли ви створюєте бібліотеки або модулі, корисно документувати API, яке ви надаєте. Документація API робить ваш код більш зрозумілим для інших розробників, які його використовують.

// Помилка
// /**
//  * Клас, який представляє книгу.
//  */
// class Book {
//     /**
//      * Створює новий екземпляр книги.
//      * @param {string} title - Заголовок книги.
//      * @param {string} author - Автор книги.
//      */
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }

//     /**
//      * Повертає рядок, який представляє книгу.
//      * @returns {string} Рядок з інформацією про книгу.
//      */
//     getInfo() {
//         return `${this.title} - ${this.author}`;
//     }
// }
// Помилка
// Цей приклад показує, як використовувати коментарі документації (за допомогою JSDoc) для опису класу Book та його методів. Інші розробники можуть легко зрозуміти, як використовувати цей клас і його методи.

// Помилка
// Уникнення зайвих коментарів
// Хоча коментарі корисні, важливо не перевантажувати код зайвими коментарями. Якщо код сам по собі зрозумілий, зайві коментарі можуть створити більше плутанини.

// Помилка
// // Приростити змінну `counter` на одиницю
// counter++;
// Помилка
// У цьому прикладі коментар зовсім не додає корисної інформації, оскільки операція counter++ вже зрозуміла. Уникайте зайвих коментарів та додавайте коментарі тільки тоді, коли вони дійсно необхідні для зрозуміння коду.

// Коректне коментування - це важливий аспект написання чистого та зрозумілого коду в JavaScript. Правильні коментарі допомагають іншим розробникам легше розуміти ваш код і використовувати ваші API. Пам'ятайте про збалансований підхід до коментування та уникайте зайвих коментарів, коли код вже зрозумілий.
