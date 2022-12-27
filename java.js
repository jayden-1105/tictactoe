const topLeft = document.querySelector('.topleft');

topLeft.onclick = () => fillBox();

//Default Variable Values
currentTurn = 'X'
XWins = false;
OWins = false;


// Fills in the clicked on box with the current turns symbol
function fillBox() {
    topLeft.innerHTML = currentTurn;
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

