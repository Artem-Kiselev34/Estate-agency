let validation = new JustValidate('#form', {
	errorLabelStyle: {
		color: 'white'
	}
});

let selector = document.querySelector('#phone');
let im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

validation.addField('#name', [
	{
		rule: 'required',
		errorMessage: 'Введите имя'
	},
])

validation.addField('#phone', [
	{
		validator: () => {
			const phone = selector.inputmask.unmaskedvalue()
			return Boolean(Number(phone) && phone.length > 0)
		},
		errorMessage: 'Введите номер'
	},
	{
		validator: () => {
			const phone = selector.inputmask.unmaskedvalue()
			return Boolean(Number(phone) && phone.length === 10)
		},
		errorMessage: 'Введите номер полностью'
	},
])