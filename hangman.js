var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
// head
ctx.beginPath();
ctx.arc(250, 140, 55, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = "deepPink";
ctx.stroke();

// torso
ctx.beginPath();
ctx.moveTo(250,195);
ctx.lineTo(250, 420);
ctx.stroke();

// left arm
ctx.beginPath();
ctx.moveTo(250,280);
ctx.lineTo(170, 320);
ctx.stroke();

// right arm
ctx.beginPath();
ctx.moveTo(250,280);
ctx.lineTo(330, 320);
ctx.stroke();

// left leg
ctx.beginPath();
ctx.moveTo(250,420);
ctx.lineTo(180, 495);
ctx.stroke();

// right leg
ctx.beginPath();
ctx.moveTo(250,420);
ctx.lineTo(330, 495);
ctx.stroke();


