//  FOR LOADING
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

// FOR FIXED HEADER

window.addEventListener("scroll", myFunction);

var header = document.querySelector(".header-wrapper");

function myFunction() {
  if (window.pageYOffset > 30) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// FOR HAMBURGER ( MOBILE MENU )
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.classList.remove("lock-scroll");
}

// FOR BACK TO TOP BUTTON

// Get the button
let mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* ============= WHEN MOBILE MENU OPENED ADD TO BODY SOME CLASS[LOCK-SCROLL] =========== */

 function lockScroll() {
   document.body.classList.toggle("lock-scroll");
 }