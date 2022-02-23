const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let timerId = null;

buttonStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  if (timerId) {
    buttonStart.setAttribute('disabled', true);
  }
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  if (timerId) {
    buttonStart.removeAttribute('disabled');
  }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
