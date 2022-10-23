const burger = document.querySelector('.menu-icon');
const isMenu = document.querySelector('.menu');
const body = document.body;


	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		isMenu.classList.toggle('_active');
		body.classList.toggle('._lock');
	})

