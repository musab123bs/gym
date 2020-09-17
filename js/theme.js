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
});

var content1 = document.getElementById("content1");
		var content2 = document.getElementById("content2");
		var content3 = document.getElementById("content3");
		var content4 = document.getElementById("content4");
		var btn1 = document.getElementById("btn1");
		var btn2 = document.getElementById("btn2");
		var btn3 = document.getElementById("btn3");
		var btn4 = document.getElementById("btn4");

function openClassOne(){
	content1.style.transform = "translateX(0)";
	content2.style.transform = "translateX(112%)";
	content3.style.transform = "translateX(112%)";
	content4.style.transform = "translateX(112%)";
	content1.style.transitionDelay = "0.5s";
	content2.style.transitionDelay = "0";
	content3.style.transitionDelay = "0";
	content4.style.transitionDelay = "0";
}
function openClassTwo(){	
	content1.style.transform = "translateX(112%)";
	content2.style.transform = "translateX(0)";
	content3.style.transform = "translateX(112%)";
	content4.style.transform = "translateX(112%)";
	content2.style.transitionDelay = "0.5s";
	content1.style.transitionDelay = "0";
	content3.style.transitionDelay = "0";
	content4.style.transitionDelay = "0";
}
function openClassThree(){
	content1.style.transform = "translateX(112%)";
	content2.style.transform = "translateX(112%)";
	content3.style.transform = "translateX(0)";
	content4.style.transform = "translateX(112%)";
	content3.style.transitionDelay = "0.5s";
	content1.style.transitionDelay = "0";
	content2.style.transitionDelay = "0";
	content4.style.transitionDelay = "0";
}
function openClassFour(){
	content1.style.transform = "translateX(112%)";
	content2.style.transform = "translateX(112%)";
	content3.style.transform = "translateX(112%)";
	content4.style.transform = "translateX(0)";
	content4.style.transitionDelay = "0.5s";
	content3.style.transitionDelay = "0";
	content2.style.transitionDelay = "0";
	content1.style.transitionDelay = "0";
}