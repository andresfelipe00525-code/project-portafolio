const btn = document.getElementById('theme-toggle');
const html = document.documentElement;

// Función para guardar y cargar la preferencia
function applyTheme(theme) {
	html.dataset.theme = theme;
	btn.textContent = theme === 'dark' ? '☀️' : '🌙';
	localStorage.setItem('theme', theme);
}

// Inicializar el tema al cargar
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
	applyTheme(savedTheme);
} else if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	applyTheme('dark');
} else {
	applyTheme('light');
}

btn.addEventListener('click', () => {
	const isDark = html.dataset.theme === 'dark';
	const newTheme = isDark ? 'light' : 'dark';
	applyTheme(newTheme);
});
