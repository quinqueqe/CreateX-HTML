const btn = document.querySelector('#mainbtn')
const modaL = document.querySelector('modal')
const btnD = document.querySelector('#btn-dis')




const btn2 = document.querySelector('.btn2')
const modai = document.querySelector('.modal2')
const btnA = document.querySelector('.button1')




btn.addEventListener('click', function () {
	modal.classList.toggle('active')
})

btnD.addEventListener('click', function () {
	modal.classList.remove('active')
})



btn2.addEventListener('click', function () {
	modai.classList.toggle('activee')
})

btnA.addEventListener('click', function () {
	modai.classList.add('activee')
})

