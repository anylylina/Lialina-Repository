const About = () => {
  return (
    <div className="max-w-4xl mx-auto bg-pink-100 bg-opacity-90 p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-8 items-center">
      <img
        src="/avat.JPG"
        alt="Avatar"
        className="w-40 h-40 object-cover rounded-full border-4 border-blue-300 shadow-md"
      />

      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Привіт! Я Аня 👋
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Я — Junior Frontend Developer, захоплююсь створенням красивих та
          зручних інтерфейсів. Навчаюся React, TailwindCSS, працюю над
          pet-проєктами. У вільний час люблю кінний спорт 🐎 та музику 🎸.
          <br />
          <br />
          Моя мрія — реалізувати себе, бути щасливою і подорожувати 🌍
        </p>
      </div>
    </div>
  );
};

export default About;
