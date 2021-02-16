$(document).ready(function(){
    // MAIN SLIDER
    $('#main-slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000
    });

    // ITEM SLIDER
    $('#item-slider').slick({
      slidesToShow:4,
      slidesPerRow:1,
      slidesToScroll:1,
      arrows:true,
      nextArrow:'<button class="slick-next slick-arrow" type="button" style=""><img src="img/font-icons/down-arrow-blue.svg" alt=""></button>',
      prevArrow:'<button class="slick-prev slick-arrow" type="button" style=""><img src="img/font-icons/up-arrow-blue.svg" alt=""></button>',
      dots:false,
      autoplay:false,
      vertical:true
    });

    $('.catalog-slider').slick({
      slidesToShow:5,
      slidesToScroll:1,
      arrows:true,
      dots:false,
      autoplay:false,
      appendArrows:$('.catalog-slider-nav'),
      nextArrow:'<button class="slick-next slick-arrow" type="button" style=""><img src="img/font-icons/arrow-right.svg" alt=""></button>',
      prevArrow:'<button class="slick-prev slick-arrow" type="button" style=""><img src="img/font-icons/arrow-left.svg" alt=""></button>',
      responsive:[
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    // ТАБЫ В КАРТОЧКЕ ТОВАРА
    $('.tab').on('click', function(){
      const contentId = $(this).data('contentId');
      console.log(contentId);
      $('.tab').removeClass('active')
      $('.tab-content').removeClass('active');
      $(this).addClass('active');
      $(`${contentId}`).addClass('active');
    })

    // ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ, КАТАЛОГА
  const mobileCatalog = $('.aside');
  const mobileMenu = $('.main-nav');

  const mobileCatalogBtn = $('.mobile-catalog-btn');
  const mobileMenuBtn = $('.main-nav-btn');

  function clickDarkBodyHandler(event){
    const target = $(event.target);
    if(target.is('body.dark')){
      $('body.dark').off('click', clickDarkBodyHandler);
      $('.opened').removeClass('opened');
      $(document.body).removeClass('dark').removeClass('overflow-hid');
    }
  }

  // КАТАЛОГ
  $(mobileCatalogBtn).click(function () {
    $(mobileCatalog).toggleClass('opened');
    $(document.body).toggleClass('dark').toggleClass('overflow-hid');

    if($(document.body).hasClass('dark')){
      $('body.dark').on('click', clickDarkBodyHandler);
    }
  });

  // НАВИГАЦИЯ
  $(mobileMenuBtn).click(function () {
    $(mobileMenu).toggleClass('opened');
    $(document.body).toggleClass('dark').toggleClass('overflow-hid');

    if($(document.body).hasClass('dark')){
      $('body.dark').on('click', clickDarkBodyHandler);
    }
  });

  // КАТАЛОГ ЗАКРЫТИЕ
  $('.aside .close-btn').click(function(){
    $('.aside').removeClass('opened');
    $(document.body).removeClass('dark').removeClass('overflow-hid');
  });

  // НАВИГАЦИЯ ЗАКРЫТИЕ
  $('.main-nav .close-btn').click(function(){
    $('.main-nav').removeClass('opened');
    $(document.body).removeClass('dark').removeClass('overflow-hid');
  });

  // ПОИСК ОТКРЫТИЕ
  $('.mobile-search-btn').on('click', function(){
    $('.search-block').addClass('opened');
  });

  $('.search-form__close-btn').on('click', function(){
    $('.search-block').removeClass('opened');
  })
})
