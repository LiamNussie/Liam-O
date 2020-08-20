const arrowDown = document.querySelector('.arrow-down');
const projects = document.querySelector('.box1');
const hireMe = document.querySelector('.hire-me');
const contact = document.querySelector('.contact');

arrowDown.addEventListener('click', () => {
    projects.scrollIntoView({ behavior: 'smooth', block: 'end'});
});
hireMe.addEventListener('click', () => {
    contact.scrollIntoView({ behavior: 'smooth', block: 'end'});
});