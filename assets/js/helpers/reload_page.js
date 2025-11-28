(function () {
	window.addEventListener('load', () => {
		const loader = document.getElementById('loader');
		if (!loader) return;
		loader.classList.add('hidden');
		setTimeout(() => {
			try {
				loader.style.display = 'none';
			} catch (e) {}
		}, 400);
	});
})();
