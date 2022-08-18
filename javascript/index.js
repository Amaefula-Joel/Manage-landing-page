$(document).ready(function () {
    const testimonialContainer = $('#testimonial-container');

    testimonialContainer.owlCarousel({
      center: true,
      loop: true,
      nav: false,
      //margin: 20,
      responsive: {
        0: {
          items: 1,
        },
        478: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1020: {
          items: 2.7,
        },
      },
      autoplay: true,
      autoplayTimeout: 8000,
    });


    var menuBtn = $('.menu-btn');
    var navCon = $('.navlink-container');

    menuBtn.click(function () {
      navCon.fadeToggle();
      
      $(this).toggleClass('close');

      $('.nav-shadow').toggleClass('active')
    })
  });