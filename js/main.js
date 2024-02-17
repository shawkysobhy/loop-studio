const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const toggleNavigate = () => {
	menuBtn.classList.toggle('open');
	menu.classList.toggle('hidden');
	menu.classList.toggle('flex');
};
menuBtn.addEventListener('click', toggleNavigate);

const links = document.querySelectorAll('.menu-link');

links.forEach((link) => {
	link.addEventListener('click', toggleNavigate);
});
