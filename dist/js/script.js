$(document).ready(function(){
    // MAIN SLIDER
    $('#main-slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000
    });

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
