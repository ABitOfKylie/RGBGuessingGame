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
var minutes, seconds, timer, totalTime;
var counter = setInterval(timer, 1000);
var count = 50; // number of seconds
var start = document.getElementById("startBtn");

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
				newColors.textContent = "Play Again?";  // newColors = id newColors
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
	// gridChange(numSquares); needs fixing

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

start.addEventListener("click", function(){
	alert('start button works');
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

// function gridChange(numSquares){
// 		// Changes the grid/class from 2x3 to 3x5
// 	if (numSquares === "15") {
// 		$(squares).removeClass("square");
// 		$(squares).addClass("squareExpert");
// 	}else {
// 		$(squares).removeClass("squareExpert");
// 		$(squares).addClass("square");
// 	}
// }

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

// When the user clicks on the button, open the modal 
infoBtn.addEventListener("click", function(){
    modal.style.display = "block";
});


// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function(){
    modal.style.display = "none";
});
// span.onclick = function() {
//     modal.style.display = "none";
// }
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(){
    if (event.target == modal) {
        modal.style.display = "none";
    }
})



//timer looks like 01:02 rather than 1:2
// function zeros(i) {
// if (i < 10) {
//     i = "0" + i;
// }
// return i;
// }

// info.addEventListener("click", function(){
// 	alert("how to play button clicked - #info")
// 	// info.modal("toggle");
// });

// start.addEventListener("click", function(){
//   count=count-1;
//   if (count <= 0){
//      clearInterval(counter);
//      return;
//    }
//     document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
// });

// --------------60 second count down timer -----------
// <button onclick="onTimer()">Clickme</button>
// <div id="mycounter"></div>
// ----------
// i = 60;
// function onTimer() {
//   document.getElementById('mycounter').innerHTML = i;
//   i--;
//   if (i < 0) {
//     alert('You lose!');
//		reset();
//   }
//   else {
//     setTimeout(onTimer, 1000);
//   }
// }

//---------notes on grid change -------
//  created a separate function gridChange lines 111-120 and called it in the reset function line 75
