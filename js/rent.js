const rent = document.querySelector('.rent');

if(rent) {
	const items = rent.querySelectorAll('.block-rent');

	items.forEach(item => {
		item.addEventListener('click', e => {
			item.querySelector('.block-rent__dropdown').classList.toggle('_active');
			item.querySelector('.block-rent__icon').classList.toggle('_active');

			if (e.target.classList.contains('block-rent__item')) {
				item.querySelector('.block-rent__value').textContent = e.target.textContent;
			}
		})
	})
}