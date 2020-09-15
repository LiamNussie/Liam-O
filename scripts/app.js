const arrowDown = document.querySelector('.arrow-down');
const projects = document.querySelector('.box1');
const hireMe = document.querySelector('.hire-me');
const contact = document.querySelector('.contact');
const navOpen = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-arrow-left');
const slideBar = document.querySelector('.slide-bar');
const home = document.querySelector('.homexx');
const about = document.querySelector('.aboutxx');
const projectsX = document.querySelector('.projectsxx');
const skills = document.querySelector('.skillsxx');
const contactX = document.querySelector('.contactxx');
const avatar = document.querySelector('.avatar');
const resume = document.querySelector('.resume');
const nav = document.querySelector('.nav');
const menu = document.querySelector('#menu');
const menuBg = document.querySelector('#menu-bg');
const change = document.querySelector('.change');

// Navigation

menu.addEventListener('click', () => {
    nav.style.display = 'block';
    if(menuBg.classList.contains('change-bg')){
        nav.style.display = 'block';
    } else{
        nav.style.display = 'none';
    }
});


function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}


arrowDown.addEventListener('click', () => {
    projects.scrollIntoView({ behavior: 'smooth', block: 'end'});
});

hireMe.addEventListener('click', () => {
    contact.scrollIntoView({ behavior: 'smooth', block: 'end'});
});



home.addEventListener('click', e => {
    document.getElementById("menu-bg").classList.toggle("change-bg");
    nav.style.display = 'none';
    document.getElementById("menu").classList.toggle("change");
});

about.addEventListener('click', e => {
    document.getElementById("menu-bg").classList.toggle("change-bg");
    nav.style.display = 'none';
    document.getElementById("menu").classList.toggle("change");
});

projectsX.addEventListener('click', e => {
    document.getElementById("menu-bg").classList.toggle("change-bg");
    nav.style.display = 'none';
    document.getElementById("menu").classList.toggle("change");
    projects.scrollIntoView({ behavior: 'smooth', block: 'end'});
});

skills.addEventListener('click', e => {
    document.getElementById("menu-bg").classList.toggle("change-bg");
    nav.style.display = 'none';
    document.getElementById("menu").classList.toggle("change");
    resume.scrollIntoView({ behavior: 'smooth', block: 'end'});
});

contactX.addEventListener('click', e => {
    document.getElementById("menu-bg").classList.toggle("change-bg");
    nav.style.display = 'none';
    document.getElementById("menu").classList.toggle("change");
    contact.scrollIntoView({ behavior: 'smooth', block: 'end'});
});

window.addEventListener('load', () => {
    setTimeout(() => {
        avatar.style.display = 'block';
    }, 3000)
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


const overall = document.querySelector('.overall-container');

window.addEventListener('load', () => {
    // setTimeout(() => {
    //     overall.style.display = 'block';
    // }, 3500)
});


