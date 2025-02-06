const user = {
  username: "Anna",
  fullName: "Anna Lialina",
  userLocation: "Ukraine",
  age: 26,

  displayInfo() {
    const { fullName, userLocation, age } = user;

    console.log(`Імʼя: ${fullName}`);
    console.log(`Місце проживання: ${userLocation}`);
    console.log(`Вік: ${age}`);
  },
};

user.displayInfo();
