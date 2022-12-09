const words = ["Apple", "Orange", "Pear"];
const wordAndLength = [];
for (var i=0; i < words.length; i++) {
    const wordPair = [words[i], words[i].length]
    wordAndLength.push(wordPair)
};

let blanks = "";
let wordOfChoice = words[0]
for (var x=0; x < words[0].length; x++) {
    blanks += "_____ ";
};

windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "40px Tahoma";
ctx.textAlign = "center";
ctx.fillText(blanks, canvas.width*0.6, canvas.height*0.3);

function checkLetter(letter) {
    let text = words[0];
    let result = text.includes("letter");
    if (result == True) {
        alert("yes!")
    }
}

function getInputValue(e){
    var kp =e.key;
    if (kp == "Enter") {
        var inputVal = document.getElementById("letterGuess").value;
        checkLetter(inputVal);
    };
};

canvas.addEventListener("keypress", getInputValue);