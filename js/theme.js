burger = document.querySelector('.burger')
header = document.querySelector('.header')
menu =document.querySelector('.menu')
list = document.querySelector('.menu ul')
bannerContent = document.querySelector('.bnr-content p')
hdrBtn =document.querySelector('.sign-btn')

burger.addEventListener('click' , ()=>{
	menu.classList.toggle('display')
	list.classList.toggle('v-height')
	header.classList.toggle('h-height')
	bannerContent.classList.toggle('opacity')
	hdrBtn.classList.toggle('display')
})





clsBtn1 =document.querySelector('.cls-sub-col-1')
cls1 = document.querySelector('.cls-img')
clsBtn2 = document.querySelector('.cls-sub-col-2')
cls2 = document.querySelector('.cls-col-3')
clsBtn3 = document.querySelector('.cls-sub-col-3')
cls3 = document.querySelector('.cls-col-4')
clsBtn4 = document.querySelector('.cls-sub-col-4')
cls4 = document.querySelector('.cls-col-5')

clsBtn1.addEventListener('click', ()=>{
	cls1.classList.toggle('displayOne')
})
clsBtn2.addEventListener('click', ()=>{
	cls2.classList.toggle('displayTwo')
})
clsBtn3.addEventListener('click', ()=>{
	cls3.classList.toggle('displayThree')
})
clsBtn4.addEventListener('click', ()=>{
	cls4.classList.toggle('displayFour')
})