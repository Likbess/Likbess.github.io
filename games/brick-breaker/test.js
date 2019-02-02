const choice = document.querySelector('.choice');
const button = document.querySelector('.button');

if (window.innerHeight > 750) {
  choice.height = 750;
} else {
  choice.height = window.innerHeight;
}

const overlay = document.querySelector('.overlay');

window.addEventListener('load', () => {
  overlay.classList.add('fade-out');
});

setTimeout(() => {
  overlay.style.display = 'none';
}, 1000);

window.addEventListener('load', () => {
  setInterval(() => {
    button.classList.toggle('hover');
  }, 800);
});
