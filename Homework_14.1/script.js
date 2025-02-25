const imagePaths = [
  "https://i.pinimg.com/736x/2f/f4/1a/2ff41a584453eb5742de6a7dada846ac.jpg",
  "https://i.pinimg.com/736x/41/80/48/418048ab47ebc1593e67a2c74217d1e1.jpg",
  "https://i.pinimg.com/736x/d8/e6/23/d8e62357350215014a51018318995213.jpg",
  "https://i.pinimg.com/736x/62/b8/21/62b821e610cb922fd5419ac568a79a5e.jpg",
  "https://i.pinimg.com/736x/55/e2/cc/55e2ccdfc46d6469d563655e582e95f1.jpg",
  "https://i.pinimg.com/736x/46/4e/3f/464e3fe931d71ab2028accbabdb7972e.jpg",
];

const slideImage = document.getElementById("slideImage");
const prevBtn = document.getElementById("prevImg");
const nextBtn = document.getElementById("nextImg");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

function updateSlide() {
  slideImage.src = imagePaths[currentIndex];

  prevBtn.classList.toggle("hidden", currentIndex === 0);
  nextBtn.classList.toggle("hidden", currentIndex === imagePaths.length - 1);

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}
imagePaths.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
  dotsContainer.appendChild(dot);
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < imagePaths.length - 1) {
    currentIndex++;
    updateSlide();
  }
});

updateSlide();
