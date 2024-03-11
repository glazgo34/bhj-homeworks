const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');

const modalClose = document.querySelectorAll('.modal__close_times');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
	clearActiveClasses();
	modalSuccess.classList.add('modal_active');
});

let arrModal = modalClose.forEach((item) => {
	item.onclick = () => {
		clearActiveClasses();
	}
});

function clearActiveClasses() {
	modalMain.classList.remove('modal_active');
	modalSuccess.classList.remove('modal_active');
}