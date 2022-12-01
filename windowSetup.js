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
