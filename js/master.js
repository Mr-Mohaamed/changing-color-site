let landingPage = document.querySelector('.landing-page');
let imgsArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
let colorList = document.querySelectorAll(
	'.settings .change-color .colors span'
);
let mainColor = localStorage.getItem('color_option');

// Open Option
document.querySelector('.settings .gear').onclick = function () {
	document.querySelector('.settings').classList.toggle('open');
	document
		.querySelector('.settings .gear .fa-gear')
		.classList.toggle('fa-spin');
};
// Get Color From LocalStorage
if (mainColor !== null) {
	document.documentElement.style.setProperty('--main-color', mainColor);
	colorList.forEach((e) => {
		e.classList.remove('active');
		if (e.dataset.color === mainColor) {
			e.classList.add('active');
		}
	});
}
// Change Background Image
setInterval(() => {
	let randomNumber = Math.floor(Math.random() * imgsArray.length);
	landingPage.style.backgroundImage = `url("../image/${imgsArray[randomNumber]}")`;
}, 10000);

// Change Page Colors
colorList.forEach((li) => {
	li.addEventListener('click', (e) => {
		// Remove Active
		colorList.forEach((color) => {
			color.classList.remove('active');
		});
		// Add Active
		e.target.classList.add('active');
		// Set New Color
		document.documentElement.style.setProperty(
			'--main-color',
			e.target.dataset.color
		);
		// Put in Local Storage
		localStorage.setItem('color_option', e.target.dataset.color);
	});
});

// Skill Progress .................

let skillOffsetTop = document.querySelector('.skills').offsetTop;
let skillOffsetheight = document.querySelector('.skills').offsetHeight;
let windowHeight = this.innerHeight;
let allSkills = document.querySelectorAll('span.progress');

let calcc = skillOffsetTop + skillOffsetheight - windowHeight;
window.onscroll = function () {
	let windowScroll = this.pageYOffset;
	if (windowScroll >= skillOffsetTop + skillOffsetheight - windowHeight) {
		allSkills.forEach((e) => {
			e.style.width = e.dataset.progress;
		});
	}
};
// popUp boxs
let popGallary = document.querySelectorAll('.gallary .images img');

popGallary.forEach((e) => {
	e.addEventListener('click', (e) => {
		let popUp = document.createElement('div');

		let overlay = document.createElement('div');
		overlay.className = 'pop-overlay';

		let popUpContainer = document.createElement('div');
		popUpContainer.className = 'pop-container';

		let popUpImg = document.createElement('img');
		popUpImg.className = 'pop-img';

		popUpImg.src = e.target.src;

		popUpContainer.appendChild(popUpImg);
		overlay.appendChild(popUpContainer);
		popUp.appendChild(overlay);
		document.body.appendChild(popUp);
	});
});
document.addEventListener('click', (e) => {
	if (e.target.className == 'pop-overlay') {
		e.target.parentNode.remove();
	}
});
