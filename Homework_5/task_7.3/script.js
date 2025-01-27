function promptNumbers() {
  const attempt = 10;

  for (let i = 1; i <= attempt; i++) {
    let userInput = prompt("Введіть число більше 100!");

    if (i === attempt) {
      console.log(`Останнє введене значення: ${userInput}`);
      return;
    }

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
    }

    alert("Число повинно бути більше 100!");
  }
}
promptNumbers();
