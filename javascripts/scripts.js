function updateClock() {
  const now = new Date();
  document.getElementById('clock').innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

document.getElementById('button1').addEventListener('click', function () {
  const target = document.getElementById('film1');
});

const element = document.getElementById('draggable');

element.onmousedown = function (event) {
  // 1. Подготовка к перемещению (получение отступов)
  let shiftX = event.clientX - element.getBoundingClientRect().left;
  let shiftY = event.clientY - element.getBoundingClientRect().top;

  element.style.position = 'absolute';
  element.style.zIndex = 1000;
  document.body.append(element); // Добавляем в body, чтобы не зависеть от родителей

  moveAt(event.clientX, event.clientY);
};
