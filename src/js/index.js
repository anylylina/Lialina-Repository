import initials, { capitalize, upper } from "./format";
import "../styles/home.scss";

const greet = (name = "guest") => {
  return `Hello ${name}`;
};

console.log(greet(capitalize("john")));
console.log(greet(upper("john")));

console.log(initials("john doe"));
