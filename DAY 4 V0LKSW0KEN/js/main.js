// Hero Swiper Slider
var swiper = new Swiper('.swiper', {
    effect: "slide",
    speed: 5000,
    spaceBetween: 0,
    loop : true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }

    // autoplay: {
    //   delay: 3000,
    // }

  });

  // mobile menu
  let mobileMenuicon = document .querySelector('header .fa-bars')
  let menu = document .querySelector('header .menu')

  mobileMenuicon.addEventListener('click', function(){
    menu.classList.toggle("open");
  });
