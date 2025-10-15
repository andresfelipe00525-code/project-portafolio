const dateContainerDOM = document.querySelector('.footer__copy span');

function dateUpdater() {
	const currentYear = new Date().getFullYear();

	dateContainerDOM.textContent = `@ ${currentYear}`;
}

export default dateUpdater;
