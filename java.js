const topLeft = document.querySelector('.topleft');
const topCenter = document.querySelector('.topcenter');
const topRight = document.querySelector('.topright');
const middleLeft = document.querySelector('.middleleft');
const middleCenter = document.querySelector('.middlecenter');
const middleRight = document.querySelector('.middleright');
const bottomLeft = document.querySelector('.bottomleft');
const bottomCenter = document.querySelector('.bottomcenter');
const bottomRight = document.querySelector('.bottomright');
const playerTurn = document.querySelector('.playerturn');
const xScore = document.querySelector('.xscore');
const oScore = document.querySelector('.oscore');
const newGame = document.querySelector('.newgame');
const resetScore = document.querySelector('.resetscore');


topLeft.onclick = (e) => takeTurn(e);
topCenter.onclick = (e) => takeTurn(e);
topRight.onclick = (e) => takeTurn(e);
middleCenter.onclick = (e) => takeTurn(e);
middleRight.onclick = (e) => takeTurn(e);
middleLeft.onclick = (e) => takeTurn(e);
bottomLeft.onclick = (e) => takeTurn(e);
bottomCenter.onclick = (e) => takeTurn(e);
bottomRight.onclick = (e) => takeTurn(e);
newGame.onclick = () => startNewGame();

//Default Variable Values
currentTurn = 'X'
xWins = false;
oWins = false;
r1c1 = "";
r1c2 = "";
r1c3 = "";
r2c1 = "";
r2c2 = "";
r2c3 = "";
r3c1 = "";
r3c2 = "";
r3c3 = "";
oWinCount = 0;
xWinCount = 0;


// Fills in the clicked on box with the current turns symbol and disables the button
function takeTurn(e) {
    let selection = e.target.value;
    if (selection == "topLeft") {
        topLeft.innerHTML = currentTurn;
        topLeft.disabled = true;
        r1c1 = currentTurn;
    }
    if (selection == "topCenter") {
        topCenter.innerHTML = currentTurn;
        topCenter.disabled = true;
        r1c2 = currentTurn;
    }
    if (selection == "topRight") {
        topRight.innerHTML = currentTurn;
        topRight.disabled = true;
        r1c3 = currentTurn;
    }
    if (selection == "middleLeft") {
        middleLeft.innerHTML = currentTurn;
        middleLeft.disabled = true;
        r2c1 = currentTurn;
    }
    if (selection == "middleCenter") {
        middleCenter.innerHTML = currentTurn;
        middleCenter.disabled = true;
        r2c2 = currentTurn;
    }
    if (selection == "middleRight") {
        middleRight.innerHTML = currentTurn;
        middleRight.disabled = true;
        r2c3 = currentTurn;
    }
    if (selection == "bottomLeft") {
        bottomLeft.innerHTML = currentTurn;
        bottomLeft.disabled = true;
        r3c1 = currentTurn;
    }
    if (selection == "bottomCenter") {
        bottomCenter.innerHTML = currentTurn;
        bottomCenter.disabled = true;
        r3c2 = currentTurn;
    }
    if (selection == "bottomRight") {
        bottomRight.innerHTML = currentTurn;
        bottomRight.disabled = true;
        r3c3 = currentTurn;
    }
    changeTurn();
    checkWin();
    updateDisplay();
  }

// Changes whose turn it is. Will run every time a player takes a turn.
function changeTurn() {
    if(currentTurn === 'X') {
        currentTurn = 'O';
    }
    else {
        currentTurn = 'X';
    }
}


// Function to change the display of whose turn it is or if someone won
function updateDisplay() {
    if(xWins === true) {
        playerTurn.innerHTML = "X Wins!"
    }
    else if(oWins === true) {
        playerTurn.innerHTML = "O Wins!"
    }
    else if (currentTurn === "X") {
        playerTurn.innerHTML = "It's X's Turn"
    }
    else {
        playerTurn.innerHTML = "It's O's Turn"
    }
}

//Function to check for a winner
function checkWin() {

    if (r1c1 === "X" && r1c2 === "X" && r1c3 === "X" ||  
        r1c1 === "X" && r2c1 === "X" && r3c1 === "X" ||
        r1c1 === "X" && r2c2 === "X" && r3c3 === "X" ||
        r1c2 === "X" && r2c2 === "X" && r3c2 === "X" ||
        r1c3 === "X" && r2c3 === "X" && r3c3 === "X" ||
        r1c3 === "X" && r2c2 === "X" && r3c1 === "X" ||
        r2c1 === "X" && r2c2 === "X" && r2c3 === "X" ||
        r1c3 === "X" && r2c3 === "X" && r3c3 === "X"){
            xWins = true;
            xWinCount++;
            updateScoreboard()
            disableButtons();
    }
    else if (r1c1 === "O" && r1c2 === "O" && r1c3 === "O" ||  
        r1c1 === "O" && r2c1 === "O" && r3c1 === "O" ||
        r1c1 === "O" && r2c2 === "O" && r3c3 === "O" ||
        r1c2 === "O" && r2c2 === "O" && r3c2 === "O" ||
        r1c3 === "O" && r2c3 === "O" && r3c3 === "O" ||
        r1c3 === "O" && r2c2 === "O" && r3c1 === "O" ||
        r2c1 === "O" && r2c2 === "O" && r2c3 === "O" ||
        r1c3 === "O" && r2c3 === "O" && r3c3 === "O"){
            oWins = true;
            oWinCount++;
            updateScoreboard()
            disableButtons();
    }
}

// Function to disable all buttons/tictactoe sectors after a win
function disableButtons() {
    topLeft.disabled = true;
    topCenter.disabled = true;
    topRight.disabled = true;
    middleCenter.disabled = true;
    middleRight.disabled = true;
    middleLeft.disabled = true;
    bottomLeft.disabled = true;
    bottomCenter.disabled = true;
    bottomRight.disabled = true;
}

// Function to enable all buttons/tictactoe sectors after a win
function enableButtons() {
    topLeft.disabled = false;
    topCenter.disabled = false;
    topRight.disabled = false;
    middleCenter.disabled = false;
    middleRight.disabled = false;
    middleLeft.disabled = false;
    bottomLeft.disabled = false;
    bottomCenter.disabled = false;
    bottomRight.disabled = false;
}

// Function to update scoreboard

function updateScoreboard() {
    oScore.innerHTML = `O Wins: ${oWinCount}`;
    xScore.innerHTML = `X Wins: ${xWinCount}`;
}

//Function to clear gameboard for new game
function clearGameboard() {
    topLeft.innerHTML = ""
    topCenter.innerHTML = ""
    topRight.innerHTML = ""
    middleLeft.innerHTML = ""
    middleCenter.innerHTML = ""
    middleRight.innerHTML = ""
    bottomLeft.innerHTML = ""
    bottomCenter.innerHTML = ""
    bottomRight.innerHTML = ""
}

//Function to reset all row/column values to "" and xWin and OWin back to false
function resetVariables(){
    r1c1 = "";
    r1c2 = "";
    r1c3 = "";
    r2c1 = "";
    r2c2 = "";
    r2c3 = "";
    r3c1 = "";
    r3c2 = "";
    r3c3 = "";
    xWins = false;
    oWins = false;
}

// New Game function
function startNewGame() {
    resetVariables();
    clearGameboard();
    enableButtons();
    updateDisplay();
}