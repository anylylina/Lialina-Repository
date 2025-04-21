const container = document.getElementById("cat-container");

const totalCats = 10;

fetch("https://cataas.com/api/cats")
  .then((res) => res.json())
  .then((data) => {
    const cats = data.slice(0, totalCats);

    cats.forEach((cat, index) => {
      const imageUrl = `https://cataas.com/cat/${cat.id}`;
      createCatCard(imageUrl, cat, index);
    });
  })
  .catch((err) => {
    console.error("Помилка при завантаженні котиків:", err);
  });

function createCatCard(imageUrl, catData, index) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "Котик";

  const text = document.createElement("p");
  const createdAt = isNaN(new Date(catData.created_at))
    ? "Дата невідома"
    : new Date(catData.created_at).toLocaleDateString();
  const tags = catData.tags.length ? catData.tags.join(", ") : "без тегів";

  text.innerHTML = `
    <strong>Котик №${index + 1}</strong><br>
    Дата: ${createdAt}<br>
    Теги: ${tags}
  `;

  card.appendChild(img);
  card.appendChild(text);
  container.appendChild(card);
}
