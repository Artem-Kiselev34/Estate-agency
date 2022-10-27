const filter = document.querySelector('.filter');

if(filter) {
	const items = filter.querySelectorAll('.block-filter');

	items.forEach(item => {
		item.addEventListener('click', e => {
			item.querySelector('.block-filter__dropdown').classList.toggle('_active');
			item.querySelector('.block-filter__icon').classList.toggle('_active');

			if (e.target.classList.contains('block-filter__item')) {
				item.querySelector('.block-filter__value').textContent = e.target.textContent;
			}
		})
	})
}