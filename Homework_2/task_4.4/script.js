let numOrStr = prompt("input number or string");
console.log(numOrStr);

switch (true) {
  case numOrStr === null:
    message = "Ви скасували";
    break;
  case numOrStr.trim() === "":
    message = "Empty String";
    break;
  case isNaN(+numOrStr):
    message = "Number is Ba_NaN";
    break;
  default:
    message = "OK!";
}
console.log(message);
