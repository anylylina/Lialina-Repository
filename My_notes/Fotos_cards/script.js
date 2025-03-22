const gallery = document.getElementById("gallery");

const apiKey = "48867124-c3ff144b17cb6de068c2df86b";

async function fetchPhotos(limit = 30, start = 0) {
  try {
    const params = new URLSearchParams({
      key: apiKey,
      per_page: limit,
      page: start + 1,
      image_type: "photo",
      lang: "ru",
    });

    const response = await fetch(
      `https://pixabay.com/api/?${params.toString()}`
    );

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();

    if (data.hits && data.hits.length > 0) {
      return data.hits;
    } else {
      throw new Error("Немає фотографій по запиту");
    }
  } catch (error) {
    console.error("Помилка завантаження:", error);

    return { error: true, message: "Помилка завантаження даних" };
  }
}

function createPhotoCards(photos) {
  if (photos.error) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = photos.message;
    errorMessage.style.color = "red";
    gallery.appendChild(errorMessage);

    return;
  }

  photos.forEach((photo) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = photo.webformatURL;
    img.alt = photo.tags;

    const desc = document.createElement("div");
    desc.classList.add("description");

    const maxLength = 50;
    const descriptionText =
      photo.tags.length > maxLength
        ? photo.tags.substring(0, maxLength) + "..."
        : photo.tags;

    desc.textContent = descriptionText;

    card.appendChild(img);
    card.appendChild(desc);

    gallery.appendChild(card);
  });
}

async function loadPhotos(limit = 30, start = 0) {
  const photos = await fetchPhotos(limit, start);

  createPhotoCards(photos);
}

loadPhotos(50, 1);
