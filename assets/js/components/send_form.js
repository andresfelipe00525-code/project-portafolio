const formContainerDOM = document.querySelector('#form');
const modalDOM = document.querySelector('#modal');
const buttonCloseDOM = document.querySelector('#btn_close-modal');

function openModal() {
	modalDOM.open = true;
}

function closeModal() {
	modalDOM.open = false;
}

function sendEmail(event) {
	event.preventDefault();

	const templateParams = {
		name: document.querySelector('#name').value,
		email: document.querySelector('#email').value,
		subject: document.querySelector('#subject').value,
		message: document.querySelector('#message').value,
	};

	if (
		templateParams.name &&
		templateParams.email &&
		templateParams.subject &&
		templateParams.message
	) {
		emailjs.send('Afelipe2', 'template_sbt9uu7', templateParams).then(
			(response) => {
				console.log('SUCCESS!', response.status, response.text);
				openModal();
			},
			(error) => {
				console.log('FAILED...', error);
			},
		);
	}
}

formContainerDOM.addEventListener('submit', sendEmail);
buttonCloseDOM.addEventListener('click', closeModal);

export default sendEmail;
