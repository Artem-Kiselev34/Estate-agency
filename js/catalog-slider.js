let menu = ['Квартиры', 'Новостройки', 'Аренда квартир и комнат', 'Загородная']
var mySwiper = new Swiper ('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
    
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
  })