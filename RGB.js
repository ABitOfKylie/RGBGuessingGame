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
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		// this.textContent === "Easy" ? numSquares =3: numSquares = 6; ternary operator 
		if(this.textContent === "Easy"){
			numSquares = 3;
		}else{
			numSquares = 6;
		}

		reset();
	});
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = colorPicker();
	colorDisplay.textContent = pickedColor;
	newColors.textContent = "New Colors"; // this refers to this reset btn newColors
	messageDisplay.textContent = "";
	for(var i=0; i<squares.length; i++){
		// checking thru # of squares, if there is a color to 'paint' then show it, otherwise if no more colors - hide it
		if(colors[i]){
			squares[i].style.display = "block";
	 		squares[i].style.backgroundColor = colors[i];
 		}else{
 			squares[i].style.display = "none";
 		}
	}
	h1.style.backgroundColor = "steelblue";
}

// aka reset button newColors
newColors.addEventListener("click", function(){
	reset();
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
			this.style.backgroundColor = "#232323"; //steelblue
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


