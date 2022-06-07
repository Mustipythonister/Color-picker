var div = document.getElementById("check");

var one = "#ec1313";
var two = "#ec6a13";
var three = "#ffdd00";
var four = "#5fe119";
var five = "#020ae3";
var six = "#b72cdd";
var seven = "#9800c2";

function c(a){
	if(a==="red"){
		var red = document.getElementById(a);
		div.style.background=one;
		div.innerHTML=one;


	}else if(a==="orange"){
		var o = document.getElementById(a);
		div.style.background=two;
		div.innerHTML=two;


	}else if(a==="yel"){
		var y = document.getElementById(a);
		div.style.background=three;
		div.innerHTML=three;


	}else if(a==="gre"){
		var g = document.getElementById(a);
		div.style.background=four;
		div.innerHTML=four;


	}else if(a==="blue"){
		var b = document.getElementById(a);
		div.style.background=five;
		div.innerHTML=five;


	}else if(a==="vi"){
		var vi = document.getElementById(a);
		div.style.background=six;
		div.innerHTML=six;


	}else if(a==="vio"){
		var vio = document.getElementById(a);
		div.style.background=seven;
		div.innerHTML=seven;


	}
}