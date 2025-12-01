const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('.section');

function setActiveLink() {
	let current = '';

	sections.forEach((section) => {
		const sectionTop = section.offsetTop - 100; // Offset para mejor activación
		if (window.scrollY >= sectionTop) {
			current = section.getAttribute('id');
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove('active');
		if (link.getAttribute('href').includes(current)) {
			link.classList.add('active');
		}
	});
}

// Inicializa al cargar
window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// También activa la clase al hacer click (para UX)
navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		navLinks.forEach((l) => l.classList.remove('active'));
		link.classList.add('active');
	});
});
