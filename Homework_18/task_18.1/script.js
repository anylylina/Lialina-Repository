let timeLeft = 85;

const timerElement = document.getElementById("timer");
const startButton = document.getElementById("startButton");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function startTimer() {
  const countdown = setInterval(() => {
    timerElement.textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerElement.textContent = "00:00";
    }

    timeLeft--;
  }, 1000);

  startButton.disabled = true;
}

startButton.addEventListener("click", startTimer);
