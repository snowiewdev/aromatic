//sliding mobile menu
const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector('.nav-bar-mobile');

  hamburger.addEventListener('click', () => {
    //show menu
    mobileMenu.classList.toggle('show-menu');
    //hamburger animation
    hamburger.classList.toggle('toggle');
  });
}

//call function here
navSlide();

AOS.init({
  duration: 1000,
  once: true
});