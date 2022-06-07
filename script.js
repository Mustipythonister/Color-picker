function update(){
	var color = document.getElementById("color");
	var display = document.getElementById("display");
	var di = document.getElementById("di");
	di.innerHTML=color.value;

	display.innerHTML=color.value;
	document.title="Color picker "+color.value;
	display.style.background=color.value;
	if(color.value==="#ffffff"){
		display.style.color="black";
	}else{
		display.style.color="white";
	}
 




}

function save(){
	let clr = document.getElementById("color").value; 
	var autosave = localStorage.setItem("color", clr);
	var update = document.querySelector('.saved');
	update.style.background=color.value;
	update.innerHTML=color.value;
	if(color.value==="#ffffff"){
		update.style.color="black";
	}else{
		update.style.color="white";
	}
}

function load(){
	var b = document.querySelector('.saved');
	var c = localStorage.getItem("color");
	console.log(c);
	b.style="background:"+c;
	b.innerHTML=c;
}

setInterval(update, 1);

const hello = "Hello and welcome to Color picker online, this is an open source website you can edit it on my github account, I decided to make this website to help my self when the internet is off i can use it to build my websites, my next project is a gradient generator.I hope you like the website";
const art = "__/_MUSTAPHA_/__";

console.log(art);
console.log(hello);

function t(){
	alert("Hey, thank you so much for visiting my github account i hope you like it.");
}

