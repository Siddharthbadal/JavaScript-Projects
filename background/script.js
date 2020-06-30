const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const bodyBox = document.querySelector('.box');
const bodyBoxx = document.querySelector('.boxx');
const colors = ['#fff','yellow', ' #b3b3b3','red', 'green','#3b5998','wheat','skyblue', 
				'#db0d74', '#2f4f4f', '#ff3300', '#00ffff', '#990000','#FF1493','#800080',
				'#FF8C00', '#6B8E23', '#4169E1', '#B8860B'];

colorBtn.addEventListener('click',changeColor);
function changeColor (){
	// bodyBcg.style.backgroundColor= colors[2];
	let random = Math.floor(Math.random() * colors.length)
	bodyBcg.style.backgroundColor = colors[random];
}

colorBtn.addEventListener('click',changeColors);
function changeColors (){
	// bodyBcg.style.backgroundColor= colors[2];
	let random = Math.floor(Math.random() * colors.length)
	bodyBox.style.backgroundColor = colors[random];
}
 
colorBtn.addEventListener('click',changeColorr);
function changeColorr (){
	// bodyBcg.style.backgroundColor= colors[2];
	let random = Math.floor(Math.random() * colors.length)
	bodyBoxx.style.backgroundColor = colors[random];
}