const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const sliderItem = document.querySelectorAll('.slider__item');
let arr = Array.from(sliderItem);

next.onclick = function() {
	let activeSlide = arr.findIndex((item) => item.className.includes('slider__item_active'));
	arr[activeSlide].classList.toggle('slider__item_active');
	activeSlide = (activeSlide == arr.length - 1) ? 0 : activeSlide + 1;
	arr[activeSlide].classList.toggle('slider__item_active');
}

prev.onclick = function() {
	let activeSlide = arr.findIndex((item) => item.className.includes('slider__item_active'));
	arr[activeSlide].classList.toggle('slider__item_active');
	activeSlide = (activeSlide == 0) ? arr.length - 1 : activeSlide - 1;
	arr[activeSlide].classList.toggle('slider__item_active');
}

