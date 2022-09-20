const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const navItem = document.querySelectorAll(".nav__item");

header.classList.remove("header-nojs");

menu.addEventListener("click", () => {
  header.classList.toggle("header--active");
});

navItem.forEach((item) =>
  item.addEventListener("click", () => {
    header.classList.remove("header--active");
  })
);
