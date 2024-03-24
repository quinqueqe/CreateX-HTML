const mySlider1 = new Splide('#mySlider1', {
	perPage: 1,
	arrows: false,
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
mySlider1.mount()