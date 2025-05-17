import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Дякую за повідомлення! Я зв'яжусь з вами найближчим часом.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <div className="bg-pink-100 p-6 rounded shadow-md max-w-xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">Зв'яжіться зі мною 💬</h2>
        <p className="mb-2">📍 Одеська область, м. Одеса</p>
        <p className="mb-2">
          📧 Email:{" "}
          <a
            href="mailto:anylylina2018@gmail.com"
            className="text-pink-600 hover:underline">
            anylylina2018@gmail.com
          </a>
        </p>
        <p className="mb-2">
          📞 Телефон:{" "}
          <a href="tel:+380738977912" className="text-pink-600 hover:underline">
            +38 (073) 897 79 12
          </a>
        </p>
        <p className="mb-2">
          💻 GitHub:{" "}
          <a
            href="https://github.com/anylylina/Lialina-Repository"
            className="text-pink-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer">
            https://github.com/anylylina/Lialina-Repository
          </a>
        </p>
      </div>

      <div className="bg-pink-100 p-6 rounded shadow-md max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Напишіть мені ✍️</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Ваше ім'я"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-800 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-800 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Ваше повідомлення"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-800 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
          <button
            type="submit"
            className="bg-pink-400 text-white px-6 py-2 rounded hover:bg-pink-600 transition">
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
