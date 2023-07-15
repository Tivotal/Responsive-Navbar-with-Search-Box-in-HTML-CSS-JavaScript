/* Created by Tivotal */

let searchBtn = document.querySelector(".search-icon");
let nav = document.querySelector(".nav");
let menuOpen = document.querySelector(".menuOpen");
let menuClose = document.querySelector(".menuClose");

searchBtn.addEventListener("click", () => {
  //toggling showsearch class to nav
  nav.classList.toggle("showSearch");
  nav.classList.remove("showMenu");
  //changing search icon
  if (nav.classList.contains("showSearch")) {
    return searchBtn.classList.replace("fa-search", "fa-times");
  }

  searchBtn.classList.replace("fa-times", "fa-search");
});

menuOpen.addEventListener("click", () => {
  nav.classList.add("showMenu");
  nav.classList.remove("showSearch");
  searchBtn.classList.replace("fa-times", "fa-search");
});

menuClose.addEventListener("click", () => {
  nav.classList.remove("showMenu");
});
