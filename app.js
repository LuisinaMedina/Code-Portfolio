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
