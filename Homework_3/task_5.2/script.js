const current = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
  const priceInUAN = dollars * current;
  console.log(`${dollars} доларів коштує ${priceInUAN} гривень`);
}
