
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("header")[0].style.top = "-100px";
  } else {
    document.getElementsByClassName("header")[0].style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}

// animation active
var paginationRow = document.getElementById("pagination")
var paginationButton = paginationRow.getElementsByClassName("pagination__page");

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
