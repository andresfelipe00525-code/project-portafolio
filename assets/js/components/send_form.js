const form = document.querySelector('.contact-form form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	alert('Mensaje enviado correctamente ✅');
	form.reset();
});
