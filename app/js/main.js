const sidebar_open = document.querySelector('.header__btn')
const sidebar_close = document.querySelector('.sidebar_close')
const sidebar = document.querySelector('.sidebar')

sidebar.style = 'height: ' + document.body.scrollHeight + 'px;'

sidebar_open.addEventListener('click', () => {
	sidebar.classList.remove('sidebar__hide')
})

sidebar_close.addEventListener('click', () => {
	sidebar.classList.add('sidebar__hide')
})

const collectionItems = document.querySelectorAll('.gallery-small__item')

collectionItems.forEach((el) => {
	el.addEventListener('mouseover', () => {
		el.children[1].style = 'display: block;'
	})

	el.addEventListener('mouseout', () => {
		el.children[1].style = 'display: none;'
	})
})

const progressbarItems = document.querySelectorAll('.progressbar__item')

progressbarItems.forEach((el) => {
	let persent = el.children[1].textContent
	el.nextElementSibling.style = `background: linear-gradient(90deg, rgba(54,56,56,1) 0%, rgba(54,56,56,1) ${persent}, rgba(255,255,255,1) ${persent}, rgba(255,255,255,1) 100%);`
})

const btnLight = document.querySelectorAll('.btn-light')
const galleryImg = document.querySelectorAll('.gallery')

	btnLight.forEach(el => {
		el.addEventListener('click', (el) => {
			let target = el.currentTarget
			let content = target.dataset.button

			btnLight.forEach(el => {
				el.classList.remove('btn-light--active')
			})
			target.classList.add('btn-light--active')

			galleryImg.forEach(el => {
				el.classList.remove('gallery--active')
			})
			document.querySelector(`#${content}`).classList.add('gallery--active')
		})
})
