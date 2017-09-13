// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ];

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = colorPicker(); //this will be a string
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
// var messageDisplay = querySelector("#message"); alternatively
var h1 = document.querySelector("h1");
var newColors= document.getElementById("resetColors");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6; 

easyBtn.addEventListener("click",function(){
	//if clicked add class selected
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = colorPicker();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){  // if there is a next color so in this case it will only affect 3
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",function(){		
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = colorPicker();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});

newColors.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = colorPicker();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
	 squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "steelblue";
});


colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
	//grab color of clicked color & compare to picked color
	var clickedColor = this.style.backgroundColor; // don't use func in a loop, this not recognized
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		newColors.textContent = "Play Again?"
		changeColors(clickedColor); //pass in clickedColor but it works without it
		h1.style.backgroundColor = clickedColor;
	}else{
		this.style.backgroundColor = "steelblue";
		messageDisplay.textContent = "Try Again";
	}
});
}

function changeColors(color){
	//loop thru all sq
	for(var i=0; i<squares.length; i++){
	 squares[i].style.backgroundColor = color; // see line 30, 
	 //squares[i].style.backgroundColor = color; if you pass in clickedColor
}
}

function colorPicker (){
	var random = Math.floor(Math.random() * colors.length);
	return colors [random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// add num random colors to arr
	 for(var i = 0; i<num; i ++){
	 	// get random color and push into array
	 	arr.push(randomColor());
	 }
	return arr;
}

function randomColor(){
	// pick a red from 0 -255, green and a blue
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
 }


