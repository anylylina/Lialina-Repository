function promptNumbers() {
  for (let i = 0; i < 10; i++) {
    let userInput = prompt("Введіть число більше 100!");

    if (userInput === null) {
      console.log("Введення скасовано");
      break;
    }

    let number = Number(userInput);

    if (isNaN(number)) {
      console.log(`Останнє введене значення: ${userInput}`);
      return;
    }

    if (number > 100) {
      console.log(`Останнє введене значення: ${userInput}`);
      return;
    } else {
      alert("Число повинно бути більше 100!");
    }
  }
}
promptNumbers();
