const words = ["apple", "small", "brain", "legal", "spoon"];
const wordAndLength = [];
function getRandom(myList){
    return myList[Math.floor(Math.random()*myList.length)];
};

for (var i=0; i < words.length; i++) {
    const wordPair = [words[i], words[i].length]
    wordAndLength.push(wordPair)
};

let blanks = "";
var wordOfChoice = getRandom(words)
for (var x=0; x < wordOfChoice.length; x++) {
    blanks += "_____ ";
};

windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "40px Tahoma";
ctx.textAlign = "center";
ctx.fillText(blanks, canvas.width*0.6, canvas.height*0.3);

function countSpacing(letterToSearch, word) {
    const indexes = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letterToSearch) {
        indexes.push(i);
        }
    }
    return indexes
};

function drawLetter(letterToDraw, ctx, word) {
    spacing = countSpacing(letterToDraw, word);
    ctx.font = "100px Tahoma";

    if (spacing.length > 1) {
        let firstXCoord = canvas.width*0.415 + spacing[0]*120;
        let secondXCoord = canvas.width*0.415 + spacing[1]*120;
        ctx.fillText(letterToDraw, firstXCoord, canvas.height*0.3);
        ctx.fillText(letterToDraw, secondXCoord, canvas.height*0.3);
    } else {
        let xCoord = canvas.width*0.415 + spacing*120;
        ctx.fillText(letterToDraw, xCoord, canvas.height*0.3);
    };
};

function wrongLetter(letter, ctx) {
    ctx.font = "40px Tahoma";
    let xCoord = canvas.width*0.56 +wrongGuessNumber*35;
    ctx.fillText(letter, xCoord, canvas.height*0.8);
};

var wrongGuessNumber = 0;
var listOfGuesses = [];

function checkLetter(letter) {
    let lower = letter.toLowerCase()
    let result = wordOfChoice.includes(lower);
    console.log(result);
    if (listOfGuesses.includes(lower) == true){
        alert("you've guessed this letter already!");
    } else if (result == true) {
        drawLetter(lower, ctx, wordOfChoice);
        listOfGuesses.push(lower);
    } else if (result == false) {
        wrongGuessNumber += 1;
        wrongLetter(lower, ctx);
        listOfGuesses.push(lower);
    } ;
};

function getInputValue(e){
    var kp =e.key;
    if (kp == "Enter") {
        var inputVal = document.getElementById("letterGuess").value;
        if (inputVal.length > 1) {
            alert("please input ONE letter only!");
        } else if (!isNaN(inputVal)){
            alert("please input a letter!");
        } else {
            checkLetter(inputVal);
        };
    };
};

canvas.addEventListener("keypress", getInputValue);