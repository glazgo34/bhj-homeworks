const btn = Array.from(document.querySelectorAll('.dropdown__value'));
const list  = Array.from(document.querySelectorAll('.dropdown__list'));
const link = Array.from(document.querySelectorAll('a.dropdown__link'));

for(let i = 0; i < btn.length; i++) {
	btn[i].onclick = function () {
		list[i].classList.toggle('dropdown__list_active');
	}
}

for(let j = 0; j < link.length; j++) {
	link[j].onclick = () => {
		let parent = link[j].closest('.dropdown');
		parent.querySelector('.dropdown__value').textContent = link[j].textContent;
		link[j].closest('.dropdown__list').classList.toggle('dropdown__list_active');
		return false;
	}
}