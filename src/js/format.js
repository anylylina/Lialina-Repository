export const capitalize = (a) => a[0].toUpperCase() + a.slice(1);

const upper = (a) => a.toUpperCase();
const lower = (a) => a.toLowerCase();

export { upper, lower };

const getInitials = (a) =>
  a

    .split(" ")
    .map((b) => b[0])
    .join("");

export default getInitials;
