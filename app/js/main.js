const sidebar_open = document.querySelector('.header__btn')
const sidebar_close = document.querySelector('.sidebar_close')
const sidebar = document.querySelector('.sidebar')

sidebar_open.addEventListener('click', () => {
	sidebar.classList.remove('sidebar__hide')
})

sidebar_close.addEventListener('click', () => {
	sidebar.classList.add('sidebar__hide')
})