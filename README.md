# RGBGuessingGame
This is based on a tutorial made by Colt Steele that can be found on Udemy.
To hear the audio npm install howler or 
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.5/howler.core.min.js"></script>
Thoughts and plans: 
Add an expert mode  9 or 12 squares
Add optional timer
Add point system  - 10 games x 6 square game (60 squares), count clicks -
var gamesClicked = 0;
var numClicks = 0;

	// if var gamesClicked = 10 then ....  pseudo code only
	if (gamesClicked = 10){
	if(numClicks = 50){
		alert("Perfect Score");
	}else if(numClicks >= 20 && < 50){
		alert("You're doing well");
	}else{
		alert("Keep on practicing, you need it");
	}					
}

Add sound or animation when win