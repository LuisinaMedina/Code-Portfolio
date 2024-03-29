const loader = document.getElementById('preloader');
window.onload = function() {
	//hide the preloader
	document.querySelector('#preloader').style.display = 'none';
};

let line1 = document.querySelector('.line-one');
let line2 = document.querySelector('.line-two');

window.onscroll = () => {
	let pos = window.scrollY - 900;
	line1.style.left = `${pos}px`;
	line2.style.right = `${pos}px`;
};

const scrollUp = document.getElementById('scroll-up');

scrollUp.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

const refreshButton = () => {
	if (document.documentElement.scrollTop <= 150) {
		scrollUp.style.display = 'none';
	} else {
		scrollUp.style.display = 'block';
	}
};

refreshButton();

document.addEventListener('scroll', (e) => {
	refreshButton();
});

function typeWriterEffect() {
	const words = [ 'a Front-End Developer', 'an English Teacher' ];

	let wordCount = 0;
	let letterCount = 0;

	let currentText = '';
	let currentWord = '';

	let timeOut = 400;

	let isDeleting = false;

	function type() {
		if (wordCount === words.length) {
			wordCount = 0;
		}

		currentWord = words[wordCount];

		if (isDeleting) {
			currentText = currentWord.slice(0, --letterCount);
		} else {
			currentText = currentWord.slice(0, ++letterCount);
		}

		document.querySelector('.typewrite').textContent = currentText;

		timeOut = isDeleting ? 200 : 400;

		if (!isDeleting && currentText.length === currentWord.length) {
			timeOut = 2000;
			isDeleting = true;
		} else if (isDeleting && currentText.length === 0) {
			timeOut = 1000;
			isDeleting = false;
			wordCount++;
		}

		setTimeout(type, timeOut);
	}
	type();
}

typeWriterEffect();
