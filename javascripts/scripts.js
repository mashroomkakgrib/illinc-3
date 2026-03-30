document.addEventListener('DOMContentLoaded', function () {
  function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();

  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  document.getElementById('date').textContent = `${day}.${month}.${year}`;

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

  const button4 = document.getElementById('button4');
  button4.addEventListener('click', function () {
    const target = document.getElementById('film4');
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

  const buttoninfilm4 = document.getElementById('buttoninfilm4');
  buttoninfilm4.addEventListener('click', function () {
    const target = document.getElementById('film4');
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

const img1 = document.getElementById('change1');
const photoSrc = 'images/screen-3/photos.svg';
const changePhotoSrc = 'images/screen-3/changephotos.svg';

img1.addEventListener('click', function () {
  const currentSrc = img1.getAttribute('src');

  if (currentSrc.includes(photoSrc)) {
    img1.src = changePhotoSrc;
  } else {
    img1.src = photoSrc;
  }
});

const img2 = document.getElementById('change2');
const photoboothSrc = 'images/screen-3/photobooth.svg';
const changePhotoboothSrc = 'images/screen-3/changephotobooth.svg';

img2.addEventListener('click', function () {
  const currentSrc = img2.getAttribute('src');

  if (currentSrc.includes(photoboothSrc)) {
    img2.src = changePhotoboothSrc;
  } else {
    img2.src = photoboothSrc;
  }
});

const img3 = document.getElementById('change3');
const photofilmSrc = 'images/screen-3/photofilm.svg';
const changePhotofilmSrc = 'images/screen-3/changephotofilm.svg';

img3.addEventListener('click', function () {
  const currentSrc = img3.getAttribute('src');

  if (currentSrc.includes(photofilmSrc)) {
    img3.src = changePhotofilmSrc;
  } else {
    img3.src = photofilmSrc;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const follower = document.getElementById('cursor-follower');

  document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX - 50 + 'px';
    follower.style.top = e.clientY - 50 + 'px';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const follower = document.getElementById('cursor-follower-2');

  document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX - 50 + 'px';
    follower.style.top = e.clientY - 50 + 'px';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const follower = document.getElementById('cursor-follower-3');

  document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX - 50 + 'px';
    follower.style.top = e.clientY - 50 + 'px';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const follower = document.getElementById('cursor-follower-4');

  document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX - 50 + 'px';
    follower.style.top = e.clientY - 50 + 'px';
  });
});
