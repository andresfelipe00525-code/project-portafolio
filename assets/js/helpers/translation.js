const translations = {
	es: {
		'nav.home': 'Inicio',
		'nav.about': 'Sobre mí',
		'nav.skills': 'Habilidades',
		'nav.projects': 'Proyectos',
		'nav.gallery': 'Galería',
		'nav.contact': 'Contacto',

		'hero.title': 'Hola, soy Andrés Felipe',
		'hero.subtitle':
			'Desarrollador Web Full Stack enfocado en construir aplicaciones modernas, limpias y escalables con JavaScript, React y Node.js.',
		'hero.projects': 'Ver proyectos',
		'hero.cv': 'Descargar CV',
		'hero.location': '📍 Bogotá, Colombia',
		'hero.lang': '🌎 Español (nativo) — Inglés C1',

		'about.title': 'Sobre mí',
		'about.text':
			'Soy desarrollador web Full Stack con experiencia en proyectos reales, especializado en React, Node.js y JavaScript moderno. Me enfoco en construir interfaces limpias, aplicaciones escalables y soluciones de alto rendimiento orientadas al usuario.',

		'skills.title': 'Habilidades Técnicas',
		'projects.title': 'Proyectos',
		'gallery.title': 'Galería',
		'contact.title': 'Contacto',
	},

	en: {
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.skills': 'Skills',
		'nav.projects': 'Projects',
		'nav.gallery': 'Gallery',
		'nav.contact': 'Contact',

		'hero.title': "Hi, I'm Andrés Felipe",
		'hero.subtitle':
			'Full Stack Web Developer focused on building modern, clean and scalable applications with JavaScript, React and Node.js.',
		'hero.projects': 'View projects',
		'hero.cv': 'Download CV',
		'hero.location': '📍 Bogotá, Colombia',
		'hero.lang': '🌎 Spanish (native) — English C1',

		'about.title': 'About me',
		'about.text':
			'I am a Full Stack Developer with real-world experience, specialized in React, Node.js and modern JavaScript. I focus on building clean interfaces, scalable systems and high-performance user-centered applications.',

		'skills.title': 'Technical Skills',
		'projects.title': 'Projects',
		'gallery.title': 'Gallery',
		'contact.title': 'Contact',
	},
};

let currentLang = localStorage.getItem('lang') || 'es';
const langEsBtn = document.getElementById('lang-es');
const langEnBtn = document.getElementById('lang-en');

function changeLang(lang) {
	currentLang = lang;
	localStorage.setItem('lang', lang);

	// Actualiza la clase activa en los botones
	langEsBtn.classList.remove('active-lang');
	langEnBtn.classList.remove('active-lang');
	if (lang === 'es') {
		langEsBtn.classList.add('active-lang');
	} else {
		langEnBtn.classList.add('active-lang');
	}

	// Traduce los elementos
	document.querySelectorAll('[data-i18n]').forEach((el) => {
		const key = el.dataset.i18n;
		if (translations[lang][key]) {
			el.textContent = translations[lang][key];
		}
	});
}

// Inicializa con el idioma guardado
changeLang(currentLang);

// Event Listeners para los botones
langEsBtn.onclick = () => changeLang('es');
langEnBtn.onclick = () => changeLang('en');
