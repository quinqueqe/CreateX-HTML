const mySlider1 = new Splide('#mySlider1', {
	perPage: 3,
	gap: 30,
	arrows: false,
	pagination: false,
	breakpoints: {
		1024: {
			perPage: 2,
		},
		767: {
			perPage: 1,
			arrows: false,
		}
	}
})
mySlider1.mount()




const splide = new Splide('#splide')



splide.on('pagination:mounted', function (data) {
	// You can add your class to the UL element\
	data.list.classList.add('splide__pagination--custom')


	// `items` contains all dot items
	// data.items.forEach(function (item) {
	// 	item.button.textContent = String(item.page + 1)
	// })
	
})

splide.mount()