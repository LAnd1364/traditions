// ----------------------------------------------AOS------------------------------------------------
$(window).on("scroll", function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 220, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
});

$(function() {

  // ----------------------------------------------menu__btn------------------------------------------------
  $('.menu__btn, .menu__item-link').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn-line').toggleClass('menu__btn-line--active');
  });
  // ----------------------------------------------menu__btn------------------------------------------------
  $('.menu__item-link, .logo').on('click', function(e) {
    e.preventDefault()
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 700);
  });
  // ----------------------------------------------header__address-hint------------------------------------------------
  $('.header__address').hover(function() {
    $('.header__address-hint').toggleClass('header__address-hint--hover');
  }); 
  // ----------------------------------------------arrow-right------------------------------------------------
  $('.invite__link').hover(function() {
    $('.invite__content').toggleClass('invite__content--hover');
  }); 
  // ----------------------------------------------product__btn------------------------------------------------
  $('.product__btn').on('click', function() {
    $(this).toggleClass('product__btn--added');
  }); 
  // ----------------------------------------------product-slider------------------------------------------------
  $('.product-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn slick-prev"><div class="arrow-right"><span class="arrow-right__angle"></span></div></button>',
    nextArrow: '<button class="slick-btn slick-next"><div class="arrow-right"><span class="arrow-right__angle"></span></div></button>',
    responsive: [
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 661,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  });
  // ----------------------------------------------set-slider------------------------------------------------
  $('.set-slider__l').slick({
    asNavFor: '.set-slider__s',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true,
    infinite: false,
  });
  $('.set-slider__s').slick({
    asNavFor: '.set-slider__l',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 661,
        settings: {
          dots: true,
        }
      },
    ]
  });
  // ----------------------------------------------reviews-slider------------------------------------------------
  $('.reviews-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    prevArrow: '<button class="slick-btn slick-prev"><div class="arrow-right"><span class="arrow-right__angle"></span></div></button>',
    nextArrow: '<button class="slick-btn slick-next"><div class="arrow-right"><span class="arrow-right__angle"></span></div></button>',
    responsive: [
      {
        breakpoint: 1061,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  });
  // ----------------------------------------------footer__list-slide------------------------------------------------
$('.footer__item-title-slide').on('click', function() {
  $(this).next().slideToggle();
  $(this).toggleClass('footer__item-title-slide--active');
});

});