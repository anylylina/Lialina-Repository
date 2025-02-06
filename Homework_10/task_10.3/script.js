const contactBook = {
  contacts: [
    { name: "Olga", phone: "+380968714764", email: "olga2025@gmail.com" },
    { name: "Anna", phone: "+380972714765", email: "anna2025@gmail.com" },
  ],
  addContact(userName, phone, email) {
    const newContact = { name: userName, phone, email };

    this.contacts.push(newContact);
    console.log(`Контакт ${userName} успішно додано!`);
  },

  findCotactByName(userName) {
    const contact = this.contacts.find((contact) => contact.name === userName);
    if (contact) {
      console.log("Знайдено контакт:", contact);
      return contact;
    } else {
      console.log(`Контакт з імʼям ${userName} не знайдено.`);
      return null;
    }
  },
};

contactBook.addContact("Sergiy", "+380738972387", "sergiy2025@gmail.com");

contactBook.findCotactByName("Anna");
contactBook.findCotactByName("Maria");
