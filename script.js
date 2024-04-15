const homepg = document.querySelector('.homepgbtn');
const aboutus = document.querySelector('.aboutusbtn');
const contactus = document.querySelector('.contactusbtn');
homepgbtn.addEventListener('click' , swaphome)
aboutusbtn.addEventListener('click' , swapabout)
contactusbtn.addEventListener('click' , swapcontact)
function swaphome(){
    location.href = "index.html"

}
function swapabout(){
    location.href = "aboutus.html"

}
function swapcontact(){
    location.href = "contact.html"
}
var slideIndex = 1;
showSlides(slideIndex);


function changeSlides(n) {
  showSlides(slideIndex += n);
}


function displaySlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  }