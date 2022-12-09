var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(170, 130, 65, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = "deepPink";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(170,195);
ctx.lineTo(170, 420);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(170,280);
ctx.lineTo(90, 320);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(170,280);
ctx.lineTo(250, 320);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(170,420);
ctx.lineTo(90, 495);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(170,420);
ctx.lineTo(250, 495);
ctx.stroke();


