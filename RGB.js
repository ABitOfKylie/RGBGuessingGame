var numSquares = 6;
var colors = [];
var pickedColor; //this will be a string
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
// var messageDisplay = querySelector("#message"); alternatively
var h1 = document.querySelector("h1");
var newColors= document.getElementById("resetColors");
var modeButtons = document.querySelectorAll(".mode");

var timeRemaining = 10; // number of seconds
var start = document.getElementById("startBtn");
var timer = document.getElementById("timer");

var modal = document.getElementById('howToModal');
var infoBtn = document.getElementById("gameInfo");
var span = document.getElementsByClassName("close")[0];

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		//step one add mode button listeners 
			modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");

			// this.textContent === "Easy" ? numSquares =3: numSquares = 6; ternary operator 
			if(this.textContent === "Easy"){
				numSquares = 3;
			}else if(this.textContent === "Hard"){
				numSquares = 6;
			}else{
				numSquares = 15;
			}

			reset();
		});
	}
}

// correct vs incorrect 
function setUpSquares(){
	for(var i=0; i<squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
		//grab color of clicked color & compare to picked color
			var clickedColor = this.style.backgroundColor; // sublime says: don't use func in a loop, this not recognized
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				newColors.textContent = "Play Again?";  // newColors = id resetColors
				changeColors(clickedColor); 
				h1.style.backgroundColor = clickedColor;
			}else{
				this.style.backgroundColor = "#232323"; //steelblue
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares); // 6 is default
	pickedColor = colorPicker();
	colorDisplay.textContent = pickedColor;
	newColors.textContent = "New Colors"; // this refers to this reset btn newColors
	messageDisplay.textContent = "";
	// gridChange(); see notes below line @185
	// checking thru # of squares, if there is a color to 'paint' then show it, otherwise if no more colors - hide it
	for(var i=0; i<squares.length; i++){
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

function gridChange(){
		// Changes the grid/class from 2x3 to 3x5
	if (numSquares === "15") {
		squares.classList.remove("square");
		squares.classList.add("squareExpert");
	}else {
		squares.classList.remove("squareExpert");
		squares.classList.add("square");
	}
}
	// mdn documentation:
	// div.classList.remove("foo");
	// div.classList.add("anotherclass");

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

//***********Modal Section *************
// When the user clicks on the button, open the modal 
infoBtn.addEventListener("click", function(){
    modal.style.display = "block";
});


// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function(){
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(){
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

//*****************************************

//***********Timer Section *************

// start the 60 second countdown
start.addEventListener("click", function(){
	alert('start button is working - now call the timer function');
	startTimer();
});

function startTimer(){
	timer.innerHTML = timeRemaining;
	timeRemaining --;
	if(timeRemaining < 0){
		alert("Your time is up");
		timeRemaining = 10;
		timer.innerHTML = timeRemaining;
	}else{
		setTimeout (startTimer, 1000);
	}
}
// note setTimeout calls startTimer - recursive
//*****************************************

//---------notes on grid change -------
//  created a separate function gridChange lines 111-120 and called it in the reset function line 75
