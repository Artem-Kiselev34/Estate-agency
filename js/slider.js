
let swipers = document.querySelectorAll(".slider");

swipers.forEach(value => {
  let swiper = new Swiper(value, {
    slidesPerView: 4,
    loop: true,
    init: false,
   
    navigation: {
      nextEl: value.querySelector('.swiper-btn-next'),
      prevEl: value.querySelector('.swiper-btn-prev'),
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1025: {
        slidesPerView: 4,
      },
    },
    observer: true,
    observerParents: true
  });

  swiper.init();
});

$('.catalog__content').each(function() {

  let tabTabs = $(this).find('ul.tabs li');
  let tabItems = $(this).find('.tab-content').hide();
  $(".tab-container .tab-content.activ").show();

  tabTabs.each(function(i) {
    $(this).click(function() {
      $(this).addClass('active').show();
      tabTabs.not(this).removeClass('active');
      $(tabItems[i]).addClass('activ').show();
      tabItems.not(tabItems[i]).removeClass('activ').hide();
    });
  });

});