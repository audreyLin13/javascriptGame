windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
const fiveWords = ["apple", "small", "brain", "legal", "spoon"];
const sixWords = ["bishop", "office", "during", "theory", "policy"];
const sevenWords = ["address", "academy", "fortune", "counter", "genuine"];
var wrongGuessNumber = 0;
var listOfGuesses = [];
var rightGuessNumber = 0;
var myWord = newWord();
var wordLength = 7;

function buttonPressed(length) {
    wordLength = length;
    newGame();
    drawBlanks();
};

function update(){
    drawSetup();
    drawStand();
    drawBlanks();
};

function newGame() {
    wrongGuessNumber = 0;
    listOfGuesses = [];
    rightGuessNumber = 0;
    myWord = newWord();
    update();
};

function getRandom(myList){
    return myList[Math.floor(Math.random()*myList.length)];
};

function newWord() {
    if (wordLength == 7) {
        var wordOfChoice = getRandom(sevenWords);
    } else if (wordLength == 6) {
        var wordOfChoice = getRandom(sixWords);
    } else if (wordLength == 5) {
        var wordOfChoice = getRandom(fiveWords);
    };
    return wordOfChoice;
};


function drawBlanks() {
    let myBlanks = "";
    ctx.font = "40px Tahoma";
    ctx.textAlign = "center";
    if (wordLength == 5) {
        myBlanks = "_____ _____ _____ _____ _____ ";
        ctx.fillText(myBlanks, canvas.width*0.6, canvas.height*0.3);
    } else if (wordLength == 6) {
        myBlanks = "_____ _____ _____ _____ _____ _____ ";
        ctx.fillText(myBlanks, canvas.width*0.55, canvas.height*0.3);
    } else if (wordLength == 7) {
        myBlanks = "____ ____ ____ ____ ____ ____ ____ ";
        ctx.fillText(myBlanks, canvas.width*0.55, canvas.height*0.3);
    };
};

drawSetup();
drawStand();
drawBlanks();
setTimeout(() => {
    alert("click 'new game' to begin playing!");
}, 500);

function countSpacing(letterToSearch, word) {
    const indexes = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letterToSearch) {
        indexes.push(i);
        }
    };
    if (indexes.length == 2) {
        rightGuessNumber += 2;
    } else if (indexes.length == 1) {
        rightGuessNumber +=1;
    };
    return indexes
};

function checkWin() {
    if (rightGuessNumber == wordLength) {
        alert("congratulations! you did it! click 'new game' to continue playing!");
    };
};

function drawLetter(letterToDraw, ctxDraw, word) {
    spacing = countSpacing(letterToDraw, word);
    ctxDraw.font = "100px Tahoma";
    ctxDraw.fillStyle = "black";
    if (wordLength == 5) {
        if (spacing.length > 1) {
            let firstXCoord = canvas.width*0.415 + spacing[0]*120;
            let secondXCoord = canvas.width*0.415 + spacing[1]*120;
            ctxDraw.fillText(letterToDraw, firstXCoord, canvas.height*0.3);
            ctxDraw.fillText(letterToDraw, secondXCoord, canvas.height*0.3);
        } else {
            let xCoord = canvas.width*0.415 + spacing*120;
            ctxDraw.fillText(letterToDraw, xCoord, canvas.height*0.3);
        };
    } else if (wordLength == 6) {
        if (spacing.length > 1) {
            let firstXCoord = canvas.width*0.33 + spacing[0]*120;
            let secondXCoord = canvas.width*0.33 + spacing[1]*120;
            ctxDraw.fillText(letterToDraw, firstXCoord, canvas.height*0.3);
            ctxDraw.fillText(letterToDraw, secondXCoord, canvas.height*0.3);
        } else {
            let xCoord = canvas.width*0.33 + spacing*120;
            ctxDraw.fillText(letterToDraw, xCoord, canvas.height*0.3);
        };
    } else if (wordLength == 7) {
        if (spacing.length > 1) {
            let firstXCoord = canvas.width*0.33 + spacing[0]*100;
            let secondXCoord = canvas.width*0.33 + spacing[1]*100;
            ctxDraw.fillText(letterToDraw, firstXCoord, canvas.height*0.3);
            ctxDraw.fillText(letterToDraw, secondXCoord, canvas.height*0.3);
        } else {
            let xCoord = canvas.width*0.33 + spacing*100;
            ctxDraw.fillText(letterToDraw, xCoord, canvas.height*0.3);
        };
    };
    
};

function wrongLetter(letter, ctxWrong) {
    ctxWrong.font = "40px Tahoma";
    ctxWrong.fillStyle = "deepPink";
    let xCoord = canvas.width*0.56 +wrongGuessNumber*35;
    ctxWrong.fillText(letter, xCoord, canvas.height*0.8);
};


function checkLetter(letter) {
    let lower = letter.toLowerCase();
    let result = myWord.includes(lower);
    console.log(result);
    if (listOfGuesses.includes(lower) == true){
        alert("you've guessed this letter already!");
    } else if (result == true) {
        drawLetter(lower, ctx, myWord);
        listOfGuesses.push(lower);
        setTimeout(() => {
            checkWin();
        }, 500);
    } else if (result == false) {
        wrongGuessNumber += 1;
        if (wrongGuessNumber == 1) {
            head();
        } else if (wrongGuessNumber == 2) {
            torso();
        } else if (wrongGuessNumber == 3) {
            leftArm();
        } else if (wrongGuessNumber == 4) {
            rightArm();
        } else if (wrongGuessNumber == 5) {
            leftLeg();
        } else if (wrongGuessNumber == 6) {
            rightLeg();
        } else if (wrongGuessNumber == 7) {
            leftEye();
        } else if (wrongGuessNumber == 8) {
            rightEye();
        } else if (wrongGuessNumber == 9) {
            smile();
            setTimeout(() => {
                alert("hm, you kinda suck. maybe try 'new game'?");
            }, 500);
        };
        wrongLetter(lower, ctx);
        listOfGuesses.push(lower);
    };
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