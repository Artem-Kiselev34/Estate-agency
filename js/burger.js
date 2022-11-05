const burger = document.querySelector('.menu-icon');
const isMenu = document.querySelector('.menu');
const body = document.body;
const overlay = document.querySelector('.overlay');
const link = document.querySelectorAll('.menu__link');


let openMenu = function() {
	    burger.classList.toggle('_active');
		isMenu.classList.toggle('_active');
		body.classList.toggle('_lock');
		overlay.classList.toggle('_active');
}

	burger.addEventListener('click', openMenu, true);
	overlay.addEventListener('click', openMenu, true);

	link.forEach(el => el.addEventListener('click', () => {
		burger.classList.remove('_active');
		isMenu.classList.remove('_active');
		body.classList.remove('_lock');
		overlay.classList.remove('_active');
	  })
	);