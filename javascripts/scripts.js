document.addEventListener('DOMContentLoaded', function () {
  function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();

  document.querySelector('.buttons');
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

let isDragging = false;
let activeElement = null;
let startX = 0,
  startY = 0;

document.querySelectorAll('.dragg').forEach((img) => {
  img.ondragstart = () => false;

  img.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    activeElement = img;

    startX = e.clientX - activeElement.offsetLeft;
    startY = e.clientY - activeElement.offsetTop;

    activeElement.style.position = 'absolute';
    activeElement.style.zIndex = '1000';
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging && activeElement) {
      activeElement.style.left = e.clientX - startX + 'px';
      activeElement.style.top = e.clientY - startY + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    activeElement = null;
  });
});
