const arrowDown = document.querySelector('.arrow-down');
const projects = document.querySelector('.box1');
const hireMe = document.querySelector('.hire-me');
const contact = document.querySelector('.contact');
const navOpen = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-arrow-left');
const slideBar = document.querySelector('.slide-bar');
const home = document.querySelector('.homex');
const about = document.querySelector('.aboutx');
const projectsX = document.querySelector('.projectsx');
const skills = document.querySelector('.skillsx');
const contactX = document.querySelector('.contactx');
const avatar = document.querySelector('.avatar');
const resume = document.querySelector('.resume');

arrowDown.addEventListener('click', () => {
    projects.scrollIntoView({ behavior: 'smooth', block: 'end'});
});

hireMe.addEventListener('click', () => {
    contact.scrollIntoView({ behavior: 'smooth', block: 'end'});
});

navOpen.addEventListener('click', () => {
    slideBar.style.animation = 'slideX 0.5s linear 1';
    slideBar.style.transform = 'translateX(0)';

    setTimeout(() => {
        contactX.style.animation = 'dropDown 0.5s linear 1';
        contactX.style.transform = 'scale(0.9) translateY(0)'
    }, 500);

    setTimeout(() => {
        skills.style.animation = 'dropDown 0.5s linear 1';
        skills.style.transform = 'scale(0.9) translateY(0)'
    }, 900);

    setTimeout(() => {
        projectsX.style.animation = 'dropDown 0.5s linear 1';
        projectsX.style.transform = 'scale(0.9) translateY(0)'
    }, 1300);

    setTimeout(() => {
        about.style.animation = 'dropDown 0.5s linear 1';
        about.style.transform = 'scale(0.9) translateY(0)'
    }, 1700);

    setTimeout(() => {
        home.style.animation = 'dropDown 0.5s linear 1';
        home.style.transform = 'scale(0.9) translateY(0)'
    }, 2100);
    
});

navClose.addEventListener('click', () => {
    setTimeout(() => {
        slideBar.style.animation = 'slideoutX 0.5s linear 1';
        slideBar.style.transform = 'translateX(-1000%)';
    }, 2150);
    
        home.style.animation = 'floatOut 0.5s linear 1';
        home.style.transform = 'scale(0.9) translateY(-1000%)'
       
    setTimeout(() => {
        about.style.animation = 'floatOut 0.5s linear 1';
        about.style.transform = 'scale(0.9) translateY(-1000%)'
    }, 400);

    setTimeout(() => {
        projectsX.style.animation = 'floatOut 0.5s linear 1';
        projectsX.style.transform = 'scale(0.9) translateY(-1000%)'
    }, 900);

    setTimeout(() => {
        skills.style.animation = 'floatOut 0.5s linear 1';
        skills.style.transform = 'scale(0.9) translateY(-1000%)'
    }, 1300);

    setTimeout(() => {
        contactX.style.animation = 'floatOut 0.5s linear 1';
        contactX.style.transform = 'scale(0.9) translateY(-1000%)'
    }, 1700);
});

home.addEventListener('click', e => {
    slideBar.style.animation = 'slideoutX 0.5s linear 1';
    slideBar.style.transform = 'translateX(-100%)';
    // scrollIntoView({ behavior: 'smooth', block: 'end'});
});

about.addEventListener('click', e => {
    slideBar.style.animation = 'slideoutX 0.5s linear 1';
    slideBar.style.transform = 'translateX(-100%)';
});

projectsX.addEventListener('click', e => {
    slideBar.style.animation = 'slideoutX 0.5s linear 1';
    slideBar.style.transform = 'translateX(-100%)';
    projects.scrollIntoView({ behavior: 'smooth', block: 'end'});
});

skills.addEventListener('click', e => {
    slideBar.style.animation = 'slideoutX 0.5s linear 1';
    slideBar.style.transform = 'translateX(-100%)';
    resume.scrollIntoView({ behavior: 'smooth', block: 'end'});
});

contactX.addEventListener('click', e => {
    slideBar.style.animation = 'slideoutX 0.5s linear 1';
    slideBar.style.transform = 'translateX(-100%)';
    contact.scrollIntoView({ behavior: 'smooth', block: 'end'});
});

window.addEventListener('load', () => {
    setTimeout(() => {
        avatar.style.display = 'block';
    }, 3000)
});

// Light and Dark Modes

const lightMode = document.querySelector('.fa-lightbulb');
const darkMode = document.querySelector('.fa-moon');

lightMode.addEventListener('click', () => {
    lightMode.style.display = 'none';
    darkMode.style.display = 'inline';
});
darkMode.addEventListener('click', () => {
    darkMode.style.display = 'none';
    lightMode.style.display = 'inline';
});

// More Info

const infoIcon1 = document.querySelector('.info1');
const infoText1 = document.querySelector('.info-text1');
const infoClose1 = document.querySelector('.info-close1');

const infoIcon2 = document.querySelector('.info2');
const infoText2 = document.querySelector('.info-text2');
const infoClose2 = document.querySelector('.info-close2');

const infoIcon3 = document.querySelector('.info3');
const infoText3 = document.querySelector('.info-text3');
const infoClose3 = document.querySelector('.info-close3');

const infoIcon4 = document.querySelector('.info4');
const infoText4 = document.querySelector('.info-text4');
const infoClose4 = document.querySelector('.info-close4');

infoIcon1.addEventListener('click', () => {
    infoText1.style.display = 'block';
    infoText1.style.animation = 'fadeIn 1s linear 1';
});
infoClose1.addEventListener('click', () => {
    infoText1.style.animation = 'fadeOut 1s linear 1';
    setTimeout(() => {
        infoText1.style.display = 'none';
    }, 1000); 
});

infoIcon2.addEventListener('click', () => {
    infoText2.style.display = 'block';
    infoText2.style.animation = 'fadeIn 1s linear 1';
});
infoClose2.addEventListener('click', () => {
    infoText2.style.animation = 'fadeOut 1s linear 1';
    setTimeout(() => {
        infoText2.style.display = 'none';
    }, 1000); 
});

infoIcon3.addEventListener('click', () => {
    infoText3.style.display = 'block';
    infoText3.style.animation = 'fadeIn 1s linear 1';
});
infoClose3.addEventListener('click', () => {
    infoText3.style.animation = 'fadeOut 1s linear 1';
    setTimeout(() => {
        infoText3.style.display = 'none';
    }, 1000); 
});

infoIcon4.addEventListener('click', () => {
    infoText4.style.display = 'block';
    infoText4.style.animation = 'fadeIn 1s linear 1';
});
infoClose4.addEventListener('click', () => {
    infoText4.style.animation = 'fadeOut 1s linear 1';
    setTimeout(() => {
        infoText4.style.display = 'none';
    }, 1000); 
});