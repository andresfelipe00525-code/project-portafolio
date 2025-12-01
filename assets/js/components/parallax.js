document.addEventListener('DOMContentLoaded', () => {
	const hero = document.getElementById('home');
	if (!hero) return;

	const layers = Array.from(document.querySelectorAll('.home__layer'));
	if (!layers.length) return;

	hero.addEventListener('mousemove', (e) => {
		const x = e.clientX;
		const y = e.clientY;

		layers.forEach((layer) => {
			const speed = Number(layer.dataset.speed) || 4;
			const moveX = (x - window.innerWidth / 2) / (speed * 20);
			const moveY = (y - window.innerHeight / 2) / (speed * 20);
			layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
		});
	});

	hero.addEventListener('mouseleave', () => {
		layers.forEach((l) => (l.style.transform = 'translate3d(0,0,0)'));
	});
});
