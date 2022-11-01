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

	link.forEach(el => el.addEventListener('click', openMenu, true));