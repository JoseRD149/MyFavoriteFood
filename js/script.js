let timer = 0;
let timerInterval;

function setTimer(minutes) {
  timer = minutes * 60; 
  updateClock();
}

function startTimer() {
  document.querySelectorAll(".time-controls button").forEach(button => button.disabled = true);
  clearInterval(timerInterval); 
  timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      updateClock();
    } else {
      clearInterval(timerInterval);
      alert("Time's up!");
      document.querySelectorAll(".time-controls button").forEach(button => button.disabled = false);
    }
  }, 1000);
}

function updateClock() {
  document.querySelector(".clock").textContent = `⏱ ${formatTime(timer)}`;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

function resetTimer() {
  clearInterval(timerInterval);
  timer = 0;
  updateClock();
  document.querySelectorAll(".time-controls button").forEach(button => button.disabled = false);
}
