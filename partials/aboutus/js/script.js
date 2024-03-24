const mySlider1 = new Splide('#mySlider1', {
	perPage: 1,
	// gap: -5,
	arrows: false,
	pagination: false,
	width: 822,
	// breakpoints: {
	// 	1024: {
	// 		perPage: 2,
	// 	},
	// 	767: {
	// 		perPage: 1,
	// 		arrows: false,
	// 	}
	// }
})
mySlider1.mount()



const splide = new Splide('#splide')


splide.on('pagination:mounted', function (data) {
	// You can add your class to the UL element
	data.list.classList.add('splide__pagination--custom')


	// `items` contains all dot items
	data.items.forEach(function (item) {
		item.button.textContent = String(item.page + 1)
	})
})


splide.mount()





const btn = document.querySelector('#mainbtn')
const modal = document.querySelector('modal')

// btn.addEventListener('click', function () {
// 	if (modal.classList.contains('none') == true) {
// 		modal.classList.remove('none')
// 	}else {
// 		modal.classList.add('none')
// 	}
// })



btn.onclick = function () {
	modal.classList.remove('none')
}

