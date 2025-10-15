const containerLoaderDOM = document.querySelector('.loader');

function loader() {
	containerLoaderDOM.classList.add('loader--hidden');
}

window.addEventListener('load', loader);

export default loader;
