/*===== VARIABLES =====*/
const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav-menu");
const nav_overlay = document.querySelector(".nav-overlay");
const navbarlinks = document.querySelectorAll(".nav__link");

/*===== Nav Menu Toggle =====*/
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    toggle.firstElementChild.classList.toggle("bx-x");
    nav_overlay.classList.toggle("show");
  });
  nav_overlay.addEventListener("click", () => toggle.click());
}

/*===== Nav Menu Close on Item Click =====*/
navbarlinks.forEach((n) =>
  n.addEventListener("click", (e) => {
    if (e.target.hash) {
      e.preventDefault();
      nav.classList.remove("show");
      toggle.firstElementChild.classList.remove("bx-x");
      nav_overlay.classList.remove("show");
      // Scroll
      let elementPos = document.querySelector(e.target.hash).offsetTop;
      window.scrollTo({
        top: elementPos - 20,
        behavior: "smooth",
      });
    }
  })
);

/*===== Nav Links active state on scroll =====*/
const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = document.querySelector(navbarlink.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbarlink.classList.add("active");
    } else {
      navbarlink.classList.remove("active");
    }
  });
};
document.addEventListener("scroll", navbarlinksActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false,
  useDelay: "once",
});

// Scroll Functions
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 100 });
sr.reveal(".home__social-icon", { interval: 100 });
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 200 });
sr.reveal(".about__text", { delay: 200 });
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {});
sr.reveal(".skills__data", { interval: 100 });
sr.reveal(".skills__img", { delay: 300 });
sr.reveal(".work__img", { interval: 100 });
sr.reveal(".contact__input", { interval: 100 });

/*===== END SCROLL REVEAL ANIMATION =====*/
