$(function() {

  // ----------------------------------------------menu__btn------------------------------------------------
  $('.menu__btn').on('click', function() {
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