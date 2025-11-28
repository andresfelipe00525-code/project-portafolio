// date-updater.js
(function () {
	function updateYear() {
		const el = document.getElementById('year');
		if (!el) return;
		el.textContent = new Date().getFullYear();
	}
	document.addEventListener('DOMContentLoaded', updateYear);
})();
