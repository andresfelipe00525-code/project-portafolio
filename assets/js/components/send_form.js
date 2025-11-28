// send_form.js — envío por EmailJS con modal de confirmación
(function () {
	const form = document.getElementById('form');
	const modal = document.getElementById('modal');
	const btnClose = document.getElementById('btn_close-modal');

	if (!form) return;

	function openModal() {
		if (modal && modal.showModal) modal.showModal();
	}
	function closeModal() {
		if (modal && modal.close) modal.close();
	}

	if (btnClose) btnClose.addEventListener('click', closeModal);

	const submitBtn = form.querySelector('.btn-send');

	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		const name = (form.querySelector('[name="name"]').value || '').trim();
		const email = (form.querySelector('[name="email"]').value || '').trim();
		const subject = (form.querySelector('[name="subject"]').value || '').trim();
		const message = (form.querySelector('[name="message"]').value || '').trim();

		if (!name || !email || !subject || !message) {
			alert('Por favor completa todos los campos.');
			return;
		}

		if (submitBtn) {
			submitBtn.disabled = true;
			submitBtn.textContent = 'Enviando...';
		}

		try {
			if (!window.emailjs) throw new Error('EmailJS no disponible');
			const templateParams = { name, email, subject, message };

			const res = await emailjs.send(
				'Afelipe2',
				'template_sbt9uu7',
				templateParams,
			);
			console.log('EmailJS: success', res);
			form.reset();
			openModal();
		} catch (err) {
			console.error('EmailJS error', err);
			alert('No se pudo enviar el mensaje. Intenta nuevamente más tarde.');
		} finally {
			if (submitBtn) {
				submitBtn.disabled = false;
				submitBtn.textContent = 'Enviar Mensaje';
			}
		}
	});
})();
