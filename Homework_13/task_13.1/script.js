document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    let isValid = true;

    if (name === "") {
      showError("name-error", "Обовʼязкове текстове поле");
      isValid = false;
    }

    if (message.length < 5) {
      showError(
        "message-error",
        "Текстове поле має містити не менше 5 символів"
      );
      isValid = false;
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
      showError(
        "phone-error",
        "Обовʼязкове поле. Повинно починатись на +380 та містити 12 цифр"
      );
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      showError("email-error", "Поле Email має містити @ та крапку");
      isValid = false;
    }

    if (isValid) {
      console.log({
        Name: name,
        Message: message,
        Phone: phone,
        Email: email,
      });

      document.getElementById("contact-form").reset();
    }
  });

function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach((element) => {
    element.textContent = "";
  });
}
