
var prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && currentScrollPos > 100) {
    document.getElementsByClassName("header")[0].style.top = "-100px";
  } else {
    document.getElementsByClassName("header")[0].style.top = "0";
  }
  prevScrollpos = currentScrollPos;
})

// animation active
var paginationRow = document.getElementById("pagination")
var paginationButton = paginationRow.getElementsByClassName("pagination__button");

for (var i = 0; i < paginationButton.length; i++) {
  paginationButton[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// menu toggle dropdown button open
var menuToggleButton = document.getElementsByClassName("header-right__menu-toggle-btn")[0];
var menu = document.getElementsByClassName("menu")[0];

menuToggleButton.addEventListener("click", () => {
  menu.classList.toggle("hide");
})
