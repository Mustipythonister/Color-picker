function update(){
	var color = document.getElementById("color");
	var display = document.getElementById("display");
	display.innerHTML=color.value;
	display.style.background=color.value;


}
function del(){
	var to_del = document.querySelector('.saved');
	let del = localStorage.removeItem("color");
	to_del.remove();
}

function save(){


	var color = document.getElementById("color").value;
	let save = localStorage.setItem("color", color);
	var newd = document.createElement("div");
	newd.classList.add("saved");
	let to_append = document.getElementById("c");
	to_append.append(newd);
	newd.style.background=color;
	newd.innerHTML=color;
	newd.addEventListener('dblclick', del);
}

function l(){

	var color = localStorage.getItem("color");
	if(color==="null"){
		var to_hide = document.querySelector('.saved');
		to_hide.innerHTML="Empty box";
		to_hide.remove();
	}else{
		var newd = document.createElement("div");
		newd.classList.add("saved");
		let to_append = document.getElementById("c");
		to_append.append(newd);
		newd.style.background=color;
		newd.innerHTML=color;
		newd.addEventListener('dblclick', del);
	}
}

setInterval(update, 1);