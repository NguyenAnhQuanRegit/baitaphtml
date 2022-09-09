var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("header").style.top = "0";
  } else {
    document.getElementsByClassName("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
