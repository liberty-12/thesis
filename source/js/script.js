// Open/close navigation menu on mobile

var menu = document.querySelector(".aside-menu");
var menuButton = document.querySelector(".aside-menu__button");
var lectureContent = document.querySelector(".lecture-content");

menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (menu.classList.contains("aside-menu--closed")) {
    menu.classList.remove("aside-menu--closed");
    lectureContent.classList.remove("lecture-content--js");
    menuButton.classList.remove("aside-menu__button--js");
  } else {
    menu.classList.add("aside-menu--closed");
    lectureContent.classList.add("lecture-content--js");
    menuButton.classList.add("aside-menu__button--js");
  }
});
