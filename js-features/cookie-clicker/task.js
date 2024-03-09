const clickerCounterElement = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
const cookie = document.getElementById("cookie");

let clickerCounter = Number(clickerCounterElement.textContent);
let dateStart = Date.now();

cookie.onclick = () => {
  const dateEnd = Date.now();

  clickerCounter++;

  clickerCounterElement.textContent = String(clickerCounter);
  clickerSpeed.textContent = (1 / ((dateEnd - dateStart) / 1000)).toFixed(2);

  if (clickerCounter%2 === 0) {
    cookie.width = 150;
  } else {
    cookie.width = 200;
  }

  dateStart = dateEnd;
};