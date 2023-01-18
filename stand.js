var test = "trial";

function drawStand() {
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "deepPink";
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(130,50);
    ctx.lineTo(253, 50);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(40,540);
    ctx.lineTo(240, 540);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(130,50);
    ctx.lineTo(130, 540);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250,50);
    ctx.lineTo(250, 85);
    ctx.stroke();
};
   