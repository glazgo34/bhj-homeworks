const deadEl = document.getElementById('dead');
const lostEl = document.getElementById('lost');

const getHole = (index) => document.getElementById(`hole${index}`);

let dead = Number(deadEl.textContent);
let lost = Number(lostEl.textContent);

const drawStatus = () => {
  deadEl.textContent = String(dead);
  lostEl.textContent = String(lost);
};

const gameOver = () => {
	alert(dead === 10 ? 'Победа':'Поражение');

	dead = lost = 0;

	drawStatus();
}

for(let index = 1; index <= 9; index++) {
	getHole(index).onclick = () => {
		if (getHole(index).classList.contains("hole_has-mole")) {
      dead++;
    } else {
      lost++;
    }

		drawStatus();

    if (dead === 10 || lost === 5) {
      gameOver();
    }
	}
}