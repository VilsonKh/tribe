$(function () {
   $(".events__slider").owlCarousel({
      rtl: true,
      center: false,
      items: 3,
      loop: false,
      margin: 15,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      nav: true,
      navText: [
         "<div class='nav-btn next-slide'><svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='37.000000pt' height='31.000000pt' viewBox='0 0 37.000000 31.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,31.000000) scale(0.100000,-0.100000)' fill='white' stroke='none'> <path d='M200 298 c0 -7 28 -38 63 -70 l62 -57 -162 -1 c-138 0 -163 -2 -163 -15 0 -13 25 -15 163 -15 l162 0 -65 -59 c-53 -48 -63 -62 -52 -72 10 -11 26 1 87 61 41 41 75 79 75 85 0 15 -143 155 -158 155 -6 0 -12 -5 -12 -12z'/></g></svg></div>",
      ],

      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 1,
         },
         1000: {
            items: 3,
         },
      },
   });

   $(".artists__slider").owlCarousel({
      items: 1,
      slideSpeed: 2000,
      autoplay: false,
      dots: false,
      loop: false,
      responsiveRefreshRate: 200,
   });

   $(".ever__slider").owlCarousel({
      items: 3,
      dots: false,
      nav: true,

      navText: [
         "<div class='ever__slider-prev nav-btn prev-slide'><svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='37.000000pt' height='31.000000pt' viewBox='0 0 37.000000 31.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,31.000000) scale(0.100000,-0.100000)' fill='white' stroke='none'><path d='M72 237 c-39 -40 -72 -77 -72 -82 0 -15 143 -155 158 -155 26 0 9 27 -50 82 l-63 57 163 1 c137 0 162 2 162 15 0 13 -25 15 -162 15 l-163 0 65 58 c40 36 61 63 56 70 -4 7 -10 12 -14 12 -4 0 -40 -33 -80 -73z'/> </g></svg></div> ",
         "<div class='ever__slider-next nav-btn next-slide'><svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='37.000000pt' height='31.000000pt' viewBox='0 0 37.000000 31.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,31.000000) scale(0.100000,-0.100000)' fill='white' stroke='none'> <path d='M200 298 c0 -7 28 -38 63 -70 l62 -57 -162 -1 c-138 0 -163 -2 -163 -15 0 -13 25 -15 163 -15 l162 0 -65 -59 c-53 -48 -63 -62 -52 -72 10 -11 26 1 87 61 41 41 75 79 75 85 0 15 -143 155 -158 155 -6 0 -12 -5 -12 -12z'/></g></svg></div>",
      ],

      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 3,
      responsiveRefreshRate: 100,
   });
});
