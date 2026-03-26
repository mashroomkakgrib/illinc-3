// const box = document.querySelector('.screen3');
// const draggables = document.querySelectorAll('.draggable');

// let activeEl = null;
// let offsetX = 0,
//   offsetY = 0;

// let isDragging = false;

// const move = (x, y) => {
//   if (!activeEl) return;

//   isDragging = true;

//   const boxRect = box.getBoundingClientRect();

//   let newX = x - boxRect.left - offsetX;
//   let newY = y - boxRect.top - offsetY;

//   newX = Math.max(0, Math.min(newX, box.clientWidth - activeEl.offsetWidth));
//   newY = Math.max(0, Math.min(newY, box.clientHeight - activeEl.offsetHeight));

//   activeEl.style.left = `${newX}px`;
//   activeEl.style.top = `${newY}px`;
// };

// draggables.forEach((el) => {
//   el.addEventListener('mousedown', (e) => {
//     activeEl = el;
//     isDragging = false;

//     const elRect = el.getBoundingClientRect();
//     offsetX = e.clientX - elRect.left;
//     offsetY = e.clientY - elRect.top;

//     document.addEventListener('mousemove', mouseMoveHandler);
//     document.addEventListener('mouseup', mouseUpHandler);
//   });
// });

// function mouseMoveHandler(e) {
//   move(e.clientX, e.clientY);
// }

// function mouseUpHandler() {
//   if (activeEl) {
//     activeEl = null;
//     document.removeEventListener('mousemove', mouseMoveHandler);
//     document.removeEventListener('mouseup', mouseUpHandler);
//   }
// }

// draggables.forEach((el) => {
//   el.addEventListener('touchstart', (e) => {
//     activeEl = el;
//     isDragging = false;

//     const touch = e.touches[0];
//     const elRect = el.getBoundingClientRect();
//     offsetX = touch.clientX - elRect.left;
//     offsetY = touch.clientY - elRect.top;

//     document.addEventListener('touchmove', touchMoveHandler, {
//       passive: false
//     });
//     document.addEventListener('touchend', touchEndHandler);
//   });
// });

// function touchMoveHandler(e) {
//   e.preventDefault(); // важно для блокировки прокрутки при drag
//   const touch = e.touches[0];
//   move(touch.clientX, touch.clientY);
// }

// function touchEndHandler() {
//   if (activeEl) {
//     activeEl = null;
//     document.removeEventListener('touchmove', touchMoveHandler);
//     document.removeEventListener('touchend', touchEndHandler);
//   }
// }

const photo2 = document.getElementById('photo2');

photo2.onmousedown = function (event) {
  let shiftX = event.clientX - photo2.getBoundingClientRect().left;
  let shiftY = event.clientY - photo2.getBoundingClientRect().top;

  photo2.style.position = 'absolute';
  photo2.style.zIndex = 1000;
  document.body.append(photo2);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    photo2.style.left = pageX - shiftX + 'px';
    photo2.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  photo2.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    photo2.onmouseup = null;
  };
};

// Отмена браузерного Drag and Drop
photo2.ondragstart = function () {
  return false;
};
