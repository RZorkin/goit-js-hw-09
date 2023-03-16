const ref = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  intervalId: null,
  isActive: false,
};

ref.stop.setAttribute('disabled', '');

ref.start.addEventListener('click', () => {
  if (ref.isActive) {
    return;
  }
  ref.isActive = true;
  ref.start.setAttribute('disabled', '');
  ref.stop.removeAttribute('disabled');
  ref.intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

ref.stop.addEventListener('click', () => {
  ref.isActive = false;
  ref.start.removeAttribute('disabled');
  ref.stop.setAttribute('disabled', '');
  clearInterval(ref.intervalId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
