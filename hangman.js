var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(170, 110, 65, 0, 2 * Math.PI);
ctx.stroke();
