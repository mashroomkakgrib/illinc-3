document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.buttons');

  function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();

  document.getElementById('button1').addEventListener('click', function () {
    const target = document.getElementById('film1');
  });
});
