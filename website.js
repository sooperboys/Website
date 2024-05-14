// clock.js
function updateClocks() {
  const now = new Date();
  const newYorkTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const hours = newYorkTime.getHours();
  const minutes = newYorkTime.getMinutes();
  const seconds = newYorkTime.getSeconds();

  // Digital Clock
  const digitalClock = document.getElementById('digital-clock');
  digitalClock.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

setInterval(updateClocks, 1000);
updateClocks(); // initial call to set clock hands immediately
