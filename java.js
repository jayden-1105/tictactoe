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

topLeft.onclick = (e) => fillBox(e);
topCenter.onclick = (e) => fillBox(e);
topRight.onclick = (e) => fillBox(e);
middleCenter.onclick = (e) => fillBox(e);
middleRight.onclick = (e) => fillBox(e);
middleLeft.onclick = (e) => fillBox(e);
bottomLeft.onclick = (e) => fillBox(e);
bottomCenter.onclick = (e) => fillBox(e);
bottomRight.onclick = (e) => fillBox(e);

//Default Variable Values
currentTurn = 'X'
XWins = false;
OWins = false;


// Fills in the clicked on box with the current turns symbol and disables the button
function fillBox(e) {
    let selection = e.target.value;
    if (selection == "topLeft") {
        topLeft.innerHTML = currentTurn;
        topLeft.disabled = true;
    }
    if (selection == "topCenter") {
        topCenter.innerHTML = currentTurn;
        topCenter.disabled = true;
    }
    if (selection == "topRight") {
        topRight.innerHTML = currentTurn;
        topRight.disabled = true;
    }
    if (selection == "middleLeft") {
        middleLeft.innerHTML = currentTurn;
        middleLeft.disabled = true;
    }
    if (selection == "middleCenter") {
        middleCenter.innerHTML = currentTurn;
        middleCenter.disabled = true;
    }
    if (selection == "middleRight") {
        middleRight.innerHTML = currentTurn;
        middleRight.disabled = true;
    }
    if (selection == "bottomLeft") {
        bottomLeft.innerHTML = currentTurn;
        bottomLeft.disabled = true;
    }
    if (selection == "bottomCenter") {
        bottomCenter.innerHTML = currentTurn;
        bottomCenter.disabled = true;
    }
    if (selection == "bottomRight") {
        bottomRight.innerHTML = currentTurn;
        bottomRight.disabled = true;
    }
    changeTurn();
    changeDisplay();
}

// Determines whose turn it is then fills the selected box with the appropriate X or O 
function changeTurn() {
    if(currentTurn === 'X') {
        currentTurn = 'O';
    }
    else {
        currentTurn = 'X';
    }
}


// Function to change the display of whose turn it is
function changeDisplay() {
    if (currentTurn === "X") {
        playerTurn.innerHTML = "It's X's Turn"
    }
    else {
        playerTurn.innerHTML = "It's O's Turn"
    }
}
