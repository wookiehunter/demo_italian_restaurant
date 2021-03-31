// Imports and Constants
const navToggle = document.getElementById('navToggle');
const rings = document.querySelectorAll('.ring');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Functions
// Navigation animation
function navAnimation(direction1, direction2) {
	navItems.forEach((nav, i) => {
		nav.classList.replace(
			`slide-${direction1}-${i + 1}`,
			`slide-${direction2}-${i + 1}`,
		);
	});
}

function toggleNav() {
	overlay.classList.toggle('overlay-active');
	if (overlay.classList.contains('overlay-active')) {
		overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
		navAnimation('out', 'in');
	} else {
		overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
		navAnimation('in', 'out');
	}
}

// Event Listeners
navToggle.addEventListener('click', () => {
	rings.forEach((ring) => {
		setTimeout(ring.classList.toggle('active'), 1000);
	});
});
navToggle.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
	nav.addEventListener('click', toggleNav);
});
