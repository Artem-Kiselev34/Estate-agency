
let swipers = document.querySelectorAll(".slider"); //Находим все слайдеры в tabs

swipers.forEach(value => {
  let swiper = new Swiper(value, {
    slidesPerView: 4,
    // spaceBetween: 0,
    loop: true,
    init: false,
   
    navigation: {
      nextEl: value.querySelector('.swiper-btn-next'), //инициализируем кнопки управления у ДАННОГО слайдера через поиск querySelector()
      prevEl: value.querySelector('.swiper-btn-prev'), //инициализируем кнопки управления у ДАННОГО слайдера через поиск querySelector()
    },
    


    // pagination: {
    //   el: value.querySelector(".swiper-pagination"), //инициализируем пагиницию у ДАННОГО слайдера через поиск querySelector()
    //   clickable: true,
    // },

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
      991: {
        slidesPerView: 4,
      },
    },
    observer: true,
    observerParents: true
  });

  // swiper.on("slideChange afterInit init", function() {
  //   let currentSlide = this.activeIndex + 1;
  //   value.querySelector('.counter').innerHTML = `
  // <span class="counter__current">
  // ${currentSlide < 5 ? '0' + currentSlide : currentSlide}
  // </span>  
  // <span class="counter__total">
  //   /${this.slides.length}
  // </span>`;
  // });

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