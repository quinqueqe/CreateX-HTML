const btn1 = document.querySelector('#offerbtn1')
const text1 = document.querySelector('#offertext1')

const btn2 = document.querySelector('#offerbtn2')
const text2 = document.querySelector('#offertext2')

btn1.addEventListener('click', function () {
	if (btn1.classList.contains('offeractive') == true) {
		btn1.classList.remove('offeractive')
		text1.classList.remove('none')
	} else {
		btn1.classList.add('offeractive')
		text1.classList.add('none')
	}
})

btn2.addEventListener('click', function () {
	if (btn2.classList.contains('offeractive') == true) {
		btn2.classList.remove('offeractive')
		text2.classList.remove('none')
	} else {
		btn2.classList.add('offeractive')
		text2.classList.add('none')
	}
})


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
