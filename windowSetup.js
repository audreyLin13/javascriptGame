windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

var canvas = document.getElementById("mainCanvas");
canvas.width = windowWidth - 60;
canvas.height = windowHeight - 60;
canvas.style.border = "30px solid pink";

var ctx = canvas.getContext("2d");
ctx.font = "40px Tahoma";
ctx.textAlign = "center";
ctx.fillText("Welcome to Hangman! ⭐🌷", canvas.width/2, 50);

ctx.font = "40px Tahoma";
ctx.fillText("Guess a Letter!", canvas.width*0.58, canvas.height*0.58);

ctx.font = "40px Tahoma";
ctx.fillText("Wrong Guesses 😔:", canvas.width*0.44, canvas.height*0.8);
