const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', showReveal);

function showReveal(event) {
    const viewportHeight = window.innerHeight;

    for (let element of reveal) {
        
        const topElement = element.getBoundingClientRect().top;
        if (topElement < viewportHeight) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    }
}