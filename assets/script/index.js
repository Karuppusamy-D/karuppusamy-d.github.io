/*===== MENU SHOW =====*/
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');
const nav_overlay = document.querySelector('.nav-overlay');


function showMenu() {
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            toggle.firstElementChild.classList.toggle("bx-x");
            nav_overlay.classList.toggle("show");
        });
        nav_overlay.addEventListener('click', () => toggle.click())
    }
}
showMenu();

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    /*Remove menu mobile*/
    nav.classList.remove('show');
    toggle.firstElementChild.classList.remove("bx-x");
    nav_overlay.classList.remove("show");
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
    useDelay: 'once'
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 100 });
sr.reveal('.home__social-icon', { interval: 100 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 200 });
sr.reveal('.about__text', { delay: 200 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 100 });
sr.reveal('.skills__img', { delay: 300 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 100 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 100 });




