$(document).ready(function(){
    // FANCBOX
    // try{
      $('[data-fancybox]').fancybox({});
    // } catch(e){}

    // MAIN SLIDER
    $('#main-slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000
    });

    // ITEM SLIDER MINI
    $('.item-slider-mini').slick({
      slidesToShow:4,
      slidesPerRow:1,
      slidesToScroll:1,
      arrows:true,
      nextArrow:'<button class="slick-next slick-arrow" type="button" style=""><img src="img/font-icons/down-arrow-blue.svg" alt=""></button>',
      prevArrow:'<button class="slick-prev slick-arrow" type="button" style=""><img src="img/font-icons/up-arrow-blue.svg" alt=""></button>',
      dots:false,
      autoplay:false,
      vertical:true,
      asNavFor:'.item-slider',
      focusOnSelect:true
    });

    // ITEM SLIDER
    $('.item-slider').slick({
      slidesToShow:1,
      slidesPerRow:1,
      slidesToScroll:1,
      arrows:false,
      dots:false,
      autoplay:false,
      vertical:true,
      asNavFor:'.item-slider-mini'
    });

    // ITEM SLIDER
    $('.fast-item-slider').slick({
      slidesToShow:1,
      slidesToScroll:1,
      arrows:false,
      dots:false,
      autoplay:false
    });


    // CATALOG SLIDER
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
  });

  $('.area-select').niceSelect();

  $('.pick-point-select').niceSelect();

  // ВАЛИДАЦИЯ

  // ВАЛИДАЦИЯ ШАГ 1

  try{
    let phoneVal = '';
    if($('#phoneOF').val() !== ''){
        phoneVal = $('#phoneOF').val();
    }
    var cleave = new Cleave('#phoneOF', {
    prefix: '+7',
    delimiters: [" (", ")", " ", "-", "-"],
    blocks: [2, 3, 0, 3, 2, 2],
    uppercase: true,
    noImmediatePrefix: true
    });
    
    if(phoneVal !== ''){
      $('#phoneOF').val(phoneVal); 
    }

  } catch(e){}

  function isPhoneValid(val){
    const pattern = "^\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$";
    const regex = new RegExp(pattern, "g");
    return regex.test(val);
  }

  $('.phone-field').change(function () {
    if(!isPhoneValid($(this).val())){
      $(this).siblings('.error-field').css('display', 'block');
      $(this).addClass('has-error');
    } else{
      $(this).siblings('.error-field').css('display', 'none');
      $(this).removeClass('has-error');
    }
  });

  $('.name-field').change(function (){
    if($(this).val()==''){
      $(this).siblings('.error-field').css('display', 'block');
      $(this).addClass('has-error');
    } else{
      $(this).siblings('.error-field').css('display', 'none');
      $(this).removeClass('has-error');
    }
  });

  function isStep1Success(){
    const phone = $('.phone-field');
    const name = $('.name-field');
    if(name.val().length !== 0 && isPhoneValid(phone.val()) && !phone.hasClass('has-error')){
      $('#order-step-1').addClass('success');
    } else{
      $('#order-step-1').removeClass('success');
    }
  }

  $('#order-step-1 input').change(function () {
    isStep1Success();
  });

  // ВАЛИДАЦИЯ ШАГ 2

  // СВЯЗЬ РАДИО-КНОПОК ДОСТАВКИ И ОПЛАТЫ
  function setPayment(){
    const deliveryType = $('input[name="shk_delivery"]:checked').attr('id');
    if (deliveryType=='delivery'){
        $('label[for="pay-1"]').css('display', 'block').closest('.field-group').addClass('curr-pay');
        $('label[for="pay-2"]').css('display', 'block').closest('.field-group').addClass('curr-pay');
        $('label[for="pay-4"]').css('display', 'none').closest('.field-group').removeClass('curr-pay');
        
    }
    else if (deliveryType=='by-myself'){
        $('label[for="pay-1"]').css('display', 'none').closest('.field-group').removeClass('curr-pay');
        $('label[for="pay-2"]').css('display', 'none').closest('.field-group').removeClass('curr-pay');
        $('label[for="pay-4"]').css('display', 'block').closest('.field-group').addClass('curr-pay');
    }
    $('input[name="payment"]').prop('checked', false);
  }

  function isAddrValid(){
    let hasDeliveryAddr = true;
    $('input.required-group').each(function () {
      if($(this).val() === ''){
        hasDeliveryAddr = false;
      }
    });

    if ($('.area-select').val()=='Выберите район')
      hasDeliveryAddr = false;

    return hasDeliveryAddr;
  }

  function isCarrying(){
    if ($('input [name="carrying"]:checked').length>0){
      return true;
    }
    else{
      return false;
    }
  }

  $('#order-step-2 .required-group').change(function () {
    if (!(isAddrValid() && isCarrying())){
        $('#order-step-2').removeClass('success');
        $('#order-step-2 .error-field').css('display', 'block');
      } else{
        $('#order-step-2').addClass('success');
        $('#order-step-2 .error-field').css('display', 'none');
      }
  });

  $('#order-step-2 .required-carrying').change(function () {
    if (!isCarrying()){
        $('#order-step-2').removeClass('success');
        // $('#order-step-2 .error-field').css('display', 'block');
      } else{
        $('#order-step-2').addClass('success');
        // $('#order-step-2 .error-field').css('display', 'none');
      }
  });


  function isStep2Success(){
    const delivType = $('input[name=shk_delivery]:checked').attr('id');
    if (delivType=='delivery'){
      $('.delivery-tab').addClass('checked');
      $('.bymslf-tab').removeClass('checked');
    }
    else if (delivType=='by-myself'){
      $('.delivery-tab').removeClass('checked');
      $('.bymslf-tab').addClass('checked');
      $('#order-step-2').addClass('success');
      $('#order-step-2 .error-field').css('display', 'none');
    }
    setPayment();
  };

  $('input[name=shk_delivery]').change(function () {
    isStep2Success();
    isStep4Success();
  });

  isStep2Success();

  // ВАЛИДАЦИЯ ШАГ 3

  function isStep3Success(){
      if($('input[name=pay-type]:checked').length > 0){
          $('#order-step-3').addClass('success');
      } else{
          $('#order-step-3').removeClass('success');
      }
  }

  $('#order-step-3 input').change(function () {
    isStep3Success();
  });

  // ПРОВЕРКА ВСЕХ ШАГОВ

  function canBeProcessed(){
    if($('.order-step.success').length === $('.order-step').length){
      $('.order-summary .send-submit-btn').get(0).disabled = false;
    } else{
      $('.order-summary .send-submit-btn').get(0).disabled = true;
    }
  }

  $('.order-steps input').change(function () {
    canBeProcessed();
  });
})
