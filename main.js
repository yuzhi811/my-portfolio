"use strict";

//Make navbar transparent when it is on the top
//scrolling 시 navbar의 height만큼 내려갔을 때 navbar를 변경
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  //console.log(window.scrollY);
  //console.log(navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }

  //toggle
  navbarMenu.classList.remove("open");
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);

  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({ behavior: "smooth" });
  scrollIntoViews(link);
});

//NAVBAR BURGER BUTTON for small screen
const burgerBtn = document.querySelector(".navbar__toggle-btn");
burgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  // const scrollTo = document.querySelector("#contact");
  // scrollTo.scrollIntoView({ behavior: "smooth" });
  scrollIntoViews("#contact");
});

//Make Home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  //console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show arrow up button when scrolling down
const arrow = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  //console.log(window.scrollY);
  //console.log(navbarHeight);
  if (window.scrollY > homeHeight / 2) {
    arrow.classList.add("visible");
  } else {
    arrow.classList.remove("visible");
  }
});

arrow.addEventListener("click", () => {
  scrollIntoViews("#home");
});

//Utility Function
function scrollIntoViews(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
