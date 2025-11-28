// selected_menu.js — marca enlace activo según scroll
(function () {
	const sections = Array.from(document.querySelectorAll('section[id]'));
	const links = Array.from(document.querySelectorAll('.nav-link'));

	if (!sections.length || !links.length) return;

	function onScroll() {
		const scrollY = window.scrollY + 120;
		let currentId = '';
		sections.forEach((sec) => {
			const top = sec.offsetTop;
			const h = sec.offsetHeight;
			if (scrollY >= top && scrollY < top + h) currentId = sec.id;
		});
		links.forEach((l) => {
			l.classList.toggle('active', l.getAttribute('href') === '#' + currentId);
		});
	}

	window.addEventListener('scroll', onScroll);
	window.addEventListener('load', onScroll);
	onScroll();
})();
