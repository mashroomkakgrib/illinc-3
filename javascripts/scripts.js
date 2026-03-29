document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.buttons');

  function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();

  const button1 = document.getElementById('button1');
  button1.addEventListener('click', function () {
    const target = document.getElementById('film1');
    target.style.display = 'block';
  });

  const button2 = document.getElementById('button2');
  button2.addEventListener('click', function () {
    const target = document.getElementById('film2');
    target.style.display = 'block';
  });

  const button3 = document.getElementById('button3');
  button3.addEventListener('click', function () {
    const target = document.getElementById('film3');
    target.style.display = 'block';
  });

  const buttoninfilm1 = document.getElementById('buttoninfilm1');
  buttoninfilm1.addEventListener('click', function () {
    const target = document.getElementById('film1');
    target.style.display = 'none';
  });

  const buttoninfilm2 = document.getElementById('buttoninfilm2');
  buttoninfilm2.addEventListener('click', function () {
    const target = document.getElementById('film2');
    target.style.display = 'none';
  });

  const buttoninfilm3 = document.getElementById('buttoninfilm3');
  buttoninfilm3.addEventListener('click', function () {
    const target = document.getElementById('film3');
    target.style.display = 'none';
  });
});
