const menuBtn = document.querySelector(".menu-button");
const hamBurger = document.querySelector(".menu-button_burger");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav_items");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamBurger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((items) => items.classList.add("open"));

    showMenu = true;
  } else {
    hamBurger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((items) => items.classList.remove("open"));

    showMenu = false;
  }
}

const typed = document.querySelector(".home_typed");
if (typed) {
  let words = typed.getAttribute("data-typed-items");
  words = words.split(",");
  new Typed(".home_typed", {
    strings: words,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}

const header = document.querySelector(".header");
const main = document.querySelector(".main");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyTop = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    nav.style.position = "fixed";
  } else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyTop, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(main);
