document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.buttons');

  function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();

  const button1 = document
    .getElementById('button1')
    .addEventListener('click', function () {
      const target = document.getElementById('film1');
    });

  const button2 = document
    .getElementById('button2')
    .addEventListener('click', function () {
      const target = document.getElementById('film2');
    });

  const button3 = document
    .getElementById('button3')
    .addEventListener('click', function () {
      const target = document.getElementById('film3');
    });
});
