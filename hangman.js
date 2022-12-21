var canvas = document.getElementById("mainCanvas");
var ctx1 = canvas.getContext("2d");


function head() {
    ctx1.beginPath();
    ctx1.arc(250, 140, 55, 0, 2 * Math.PI);
    ctx1.lineWidth = 5;
    ctx1.strokeStyle = "deepPink";
    ctx1.stroke();
};


function torso() {
    ctx1.beginPath();
    ctx1.moveTo(250,195);
    ctx1.lineTo(250, 420);
    ctx1.stroke();
};


function leftArm() {
    ctx1.beginPath();
    ctx1.moveTo(250,280);
    ctx1.lineTo(170, 320);
    ctx1.stroke();
};

function rightArm() {
    ctx1.beginPath();
    ctx1.moveTo(250,280);
    ctx1.lineTo(330, 320);
    ctx1.stroke();
};


function leftLeg() {
    ctx1.beginPath();
    ctx1.moveTo(250,420);
    ctx1.lineTo(180, 495);
    ctx1.stroke();
};


function rightLeg() {
    ctx1.beginPath();
    ctx1.moveTo(250,420);
    ctx1.lineTo(330, 495);
    ctx1.stroke();
};

function leftEye() {
    ctx1.beginPath();
    ctx1.arc(230, 130, 4, 0, 2 * Math.PI);
    ctx1.lineWidth = 5;
    ctx1.strokeStyle = "deepPink";
    ctx1.fillStyle = "deepPink";
    ctx1.fill()
    ctx1.stroke();
};

function rightEye() {
    ctx1.beginPath();
    ctx1.arc(270, 130, 4, 0, 2 * Math.PI);
    ctx1.lineWidth = 5;
    ctx1.strokeStyle = "deepPink";
    ctx1.fillStyle = "deepPink";
    ctx1.fill()
    ctx1.stroke();
};




