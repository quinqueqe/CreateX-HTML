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
const mySlider2 = new Splide('#mySlider2', {
	perPage: 1,
	// arrows: false,
	pagination: false,
	width: 600,
	gap: 20,
	breakpoints: {
		1150: {
			// perPage: 2,
			arrows: false,
		},
		625: {
			width: 400,
		},
		545: {
			width: 300,
		}
	}
})
mySlider2.mount()