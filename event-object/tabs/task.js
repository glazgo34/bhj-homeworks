const tabs = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab__content');

for (let tab of tabs) {
    tab.addEventListener('click', tabsChange);
}

function tabsChange(event) {

    for (let tab of tabs) {
        tab.className = 'tab';
    }

    event.target.className = 'tab tab_active';

    for (let article of content) {
        article.className = 'tab__content';
    }

    const index = Array.from(tabs).indexOf(event.target);
    content[index].className = 'tab__content tab__content_active';
}