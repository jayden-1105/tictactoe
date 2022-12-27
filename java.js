const topLeft = document.querySelector('.topleft');
const topCenter = document.querySelector('.topcenter');
const topRight = document.querySelector('.topright');
const middleLeft = document.querySelector('.middleleft');
const middleCenter = document.querySelector('.middlecenter');
const middleRight = document.querySelector('.middleright');
const bottomLeft = document.querySelector('.bottomleft');
const bottomCenter = document.querySelector('.bottomcenter');
const bottomRight = document.querySelector('.bottomright');

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


// Fills in the clicked on box with the current turns symbol
function fillBox(e) {
    let selection = e.target.value;
    if (selection == "topLeft") {
        topLeft.innerHTML = currentTurn;
    }
    if (selection == "topCenter") {
        topCenter.innerHTML = currentTurn;
    }
    if (selection == "topRight") {
        topRight.innerHTML = currentTurn;
    }
    if (selection == "middleLeft") {
        middleLeft.innerHTML = currentTurn;
    }
    if (selection == "middleCenter") {
        middleCenter.innerHTML = currentTurn;
    }
    if (selection == "middleRight") {
        middleRight.innerHTML = currentTurn;
    }
    if (selection == "bottomLeft") {
        bottomLeft.innerHTML = currentTurn;
    }
    if (selection == "bottomCenter") {
        bottomCenter.innerHTML = currentTurn;
    }
    if (selection == "bottomRight") {
        bottomRight.innerHTML = currentTurn;
    }
    
    changeTurn();
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

