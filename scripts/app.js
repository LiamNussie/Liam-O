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
    }, 7000)
});




const overall = document.querySelector('.overall-container');

window.addEventListener('load', () => {
    setTimeout(() => {
        overall.style.display = 'block';
    }, 4000)
});


// More Info

const infoBox1 = document.querySelector('.box1');
const infoBox2 = document.querySelector('.box2');
const infoBox3 = document.querySelector('.box3');
const infoBox4 = document.querySelector('.box4');
const infoBox5 = document.querySelector('.box5');
const infoBox6 = document.querySelector('.box6');
const infoText1 = document.querySelector('.info-text1');
const infoText2 = document.querySelector('.info-text2');
const infoText3 = document.querySelector('.info-text3');
const infoText4 = document.querySelector('.info-text4');
const infoText5 = document.querySelector('.info-text5');
const infoText6 = document.querySelector('.info-text6');
const infoClose1 = document.querySelector('.info-btn1');
const infoClose2 = document.querySelector('.info-btn2');
const infoClose3 = document.querySelector('.info-btn3');
const infoClose4 = document.querySelector('.info-btn4');
const infoClose5 = document.querySelector('.info-btn5');
const infoClose6 = document.querySelector('.info-btn6');

infoBox1.addEventListener('click', e => {
    if(e.target.classList.contains('fa-info-circle')){
        infoText1.style.animation = 'fadeIn 1s ease 1';
        setTimeout(() => {
            infoText1.style.opacity = '1';
        }, 1000);
    } else {
        console.log('there was an error');
    };

    if(e.target.classList.contains('info-btn1')){
        infoText1.style.animation = 'fadeOut 1s ease 1';
        setTimeout(() => {
            infoText1.style.opacity = '0';
        }, 1000);
    } else {
        console.log('there was an error');
    };
    
});

infoBox2.addEventListener('click', e => {
    if(e.target.classList.contains('fa-info-circle')){
        infoText2.style.animation = 'fadeIn 1s ease 1';
        setTimeout(() => {
            infoText2.style.opacity = '1';
        }, 1000);
    } else {
        console.log('there was an error');
    };

    if(e.target.classList.contains('info-btn2')){
        infoText2.style.animation = 'fadeOut 1s ease 1';
        setTimeout(() => {
            infoText2.style.opacity = '0';
        }, 1000);
    } else {
        console.log('there was an error');
    };
    
});

infoBox3.addEventListener('click', e => {
    if(e.target.classList.contains('fa-info-circle')){
        infoText3.style.animation = 'fadeIn 1s ease 1';
        setTimeout(() => {
            infoText3.style.opacity = '1';
        }, 1000);
    } else {
        console.log('there was an error');
    };

    if(e.target.classList.contains('info-btn3')){
        infoText3.style.animation = 'fadeOut 1s ease 1';
        setTimeout(() => {
            infoText3.style.opacity = '0';
        }, 1000);
    } else {
        console.log('there was an error');
    };
    
});

infoBox4.addEventListener('click', e => {
    if(e.target.classList.contains('fa-info-circle')){
        infoText4.style.animation = 'fadeIn 1s ease 1';
        setTimeout(() => {
            infoText4.style.opacity = '1';
        }, 1000);
    } else {
        console.log('there was an error');
    };

    if(e.target.classList.contains('info-btn4')){
        infoText4.style.animation = 'fadeOut 1s ease 1';
        setTimeout(() => {
            infoText4.style.opacity = '0';
        }, 1000);
    } else {
        console.log('there was an error');
    };
    
});

infoBox5.addEventListener('click', e => {
    if(e.target.classList.contains('fa-info-circle')){
        infoText5.style.animation = 'fadeIn 1s ease 1';
        setTimeout(() => {
            infoText5.style.opacity = '1';
        }, 1000);
    } else {
        console.log('there was an error');
    };

    if(e.target.classList.contains('info-btn5')){
        infoText5.style.animation = 'fadeOut 1s ease 1';
        setTimeout(() => {
            infoText5.style.opacity = '0';
        }, 1000);
    } else {
        console.log('there was an error');
    };
    
});

infoBox6.addEventListener('click', e => {
    if(e.target.classList.contains('fa-info-circle')){
        infoText6.style.animation = 'fadeIn 1s ease 1';
        setTimeout(() => {
            infoText6.style.opacity = '1';
        }, 1000);
    } else {
        console.log('there was an error');
    };

    if(e.target.classList.contains('info-btn6')){
        infoText6.style.animation = 'fadeOut 1s ease 1';
        setTimeout(() => {
            infoText6.style.opacity = '0';
        }, 1000);
    } else {
        console.log('there was an error');
    };
    
});

