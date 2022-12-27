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
r1c1 = "";
r1c2 = "";
r1c3 = "";
r2c1 = "";
r2c2 = "";
r2c3 = "";
r3c1 = "";
r3c2 = "";
r3c3 = "";

// Fills in the clicked on box with the current turns symbol and disables the button
function fillBox(e) {
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
    console.log(r1c1);
    console.log(r1c2);
    console.log(r1c3);
    console.log(r2c1);
    console.log(r2c2);
    console.log(r2c3);
    console.log(r3c1);
    console.log(r3c2);
    console.log(r3c3);
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
