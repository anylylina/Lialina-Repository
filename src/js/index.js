import initials, { capitalize, upper } from "./format.js";

const greet = (name = "guest") => {
  return `Hello ${name}`;
};

console.log(greet(capitalize("john")));
console.log(greet(upper("john")));

console.log(initials("john doe"));
