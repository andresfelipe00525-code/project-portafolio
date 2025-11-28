// main.js — inicializaciones generales (no module)
(function () {
	// Mobile menu
	const menuToggle = document.getElementById('menu-toggle');
	const mobileMenu = document.getElementById('mobile-menu');
	const mobileClose = document.getElementById('mobile-close');

	if (menuToggle && mobileMenu) {
		menuToggle.addEventListener('click', () => {
			mobileMenu.style.display = 'block';
			mobileMenu.setAttribute('aria-hidden', 'false');
		});
	}
	if (mobileClose)
		mobileClose.addEventListener('click', () => {
			mobileMenu.style.display = 'none';
			mobileMenu.setAttribute('aria-hidden', 'true');
		});

	// Dark mode toggle
	const darkBtn = document.getElementById('dark-toggle');
	const html = document.documentElement;
	try {
		const saved = localStorage.getItem('theme');
		if (saved === 'dark') {
			html.setAttribute('data-theme', 'dark');
		}
	} catch (e) {}

	if (darkBtn) {
		darkBtn.addEventListener('click', () => {
			const isDark = html.getAttribute('data-theme') === 'dark';
			if (isDark) {
				html.removeAttribute('data-theme');
				localStorage.setItem('theme', 'light');
			} else {
				html.setAttribute('data-theme', 'dark');
				localStorage.setItem('theme', 'dark');
			}
		});
	}

	// Close mobile menu on link click
	Array.from(document.querySelectorAll('.mobile-nav .nav-link')).forEach(
		(a) => {
			a.addEventListener('click', () => {
				if (mobileMenu) {
					mobileMenu.style.display = 'none';
					mobileMenu.setAttribute('aria-hidden', 'true');
				}
			});
		},
	);

	// Small fallback: highlight current nav (initial)
	function updateNavInitial() {
		const links = Array.from(document.querySelectorAll('.nav-link'));
		links.forEach((l) => l.classList.remove('active'));
		const id = location.hash ? location.hash.substring(1) : 'home';
		const match = document.querySelector(
			`.nav a[href="#${id}"], .nav-link[href="#${id}"]`,
		);
		if (match) match.classList.add('active');
	}
	updateNavInitial();
})();
