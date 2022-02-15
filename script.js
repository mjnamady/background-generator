var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bg");
var gredientColorCode = document.querySelector("h3");

//linear-gradient(to right, red , yellow)

function setGradient(){
	body.style.background 
	= "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	gredientColorCode.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
