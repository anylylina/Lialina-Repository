let birthYear = prompt("Вкажіть Ваш рік народження");

if (!birthYear) {
  alert("Шкода, що ви не захотіли ввести свій рік народження");
}

let city = prompt("В якому місті ви живете");

if (!city) {
  alert("Шкода, що ви не захотіли ввести своє місто");
}

let kindSport = prompt("Який вид спорту улюблений?");

if (!kindSport) {
  alert("Шкода, що ви не захотіли ввести свій улюблений вид спорту");
}

if (birthYear && city && kindSport) {
}

const currentYear = new Date().getFullYear();
const age = currentYear - parseInt(birthYear);

let cityMessage;
if (city.toLowerCase() === "Київ") {
  cityMessage = "Ти живешь в столиці України";
} else if (city.toLowerCase() === "Вашингтон") {
  cityMessage = "Ти живешь в столиці США";
} else if (city.toLowerCase() === "Лондон") {
  cityMessage = "Ти живешь в столиці Великобританії";
} else {
  cityMessage = `Ти живешь у місті ${city}.`;
}

let sportMessage;
if (kindSport.toLowerCase() === "футбол") {
  sportMessage = "Круто! Ти хочешь стати як Ліонель Мессі?";
} else if (kindSport.toLowerCase() === "бокс") {
  sportMessage = "Круто! Ти хочешь стати як Олександр Усік?";
} else if (kindSport.toLowerCase() === "фехтування") {
  sportMessage = "Круто! Ти хочешь стати як Ольга Харлан?";
}

alert(`Ваш вік: ${age}\n${cityMessage}\n${sportMessage}`);
