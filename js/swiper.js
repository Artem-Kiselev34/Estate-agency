// ----------------------------- Swiper slider -----------------------------


const sliderh = document.querySelector('.slider-main');
const sliderNav = document.querySelector('.slider-nav');

let mySwiperNav = new Swiper(sliderNav, {
	slidesPerView: 5,

})

let mySwiper = new Swiper(sliderh, {
	spaceBetween: 10,
	// loop: true,
	loopedSlides: 5,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: mySwiperNav,
	}
})

console.log('sw')
// ----------------------------------------------------------------
const slider = document.querySelector('.swiper-container');

let swiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	speed: 700,
	autoplay: {
		delay: 2000,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		init() {
		  this.el.addEventListener('mouseover', () => {
			this.autoplay.stop();
		  });
	
		  this.el.addEventListener('mouseout', () => {
			this.autoplay.start();
		  });
		}
	  }
    })

	document.getElementsByClassName("swiper-container")[0].addEventListener("mouseover", function() {
		document.querySelector('.swiper-button-prev').style.display = 'block';
		document.querySelector('.swiper-button-next').style.display = 'block';
	});
	
	document.getElementsByClassName("swiper-container")[0].addEventListener("mouseout", function() {
		document.querySelector('.swiper-button-prev').style.display = 'none';
		document.querySelector('.swiper-button-next').style.display = 'none';
	});

// --------------------------- card slider -----------------------------------

// const slidersNav = document.querySelector('.swiperExp');
// const sliders = document.querySelector('.swiperOneMain');

// 	    mySwiperNav = new Swiper(slidersNav, {
// 		slidesPerView: 3,
// 		loopedSlides: -1,
// 		loop: true,
// 	});


// 	    mySwiper = new Swiper(sliders, {
// 		slidesPerView: 1,
// 		loopedSlides: -1,
// 		loop: true,
		
// });


// let thumbs = document.querySelectorAll('.swiper-slide');
//  thumbs.forEach(el => el.addEventListener('mouseover', function() {
// 	mySwiper.slideTo(el.dataset.swiperSlideIndex)
//   }
//  ));

// -------------------------------------------------------------------------
	
// ----------------------------- Swiper slider -----------------------------
const slider2 = document.querySelector('.swiper-container2');

let swiper2 = new Swiper(slider2, {
	slidesPerView: 4,
	spaceBetween: 1,
	loop: true,
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },
	// thumbs: {
	// 	swiper2: thumbsSwiper
	//   },
	
	speed: 700,
	// autoplay: {
	// 	delay: 2000,
	// },
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	},

    })



	// ----------------------------------------------------------------






