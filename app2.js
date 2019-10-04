// array of 9 cells from html
const cells = document.querySelectorAll('.row > div');
// selects h4 with id of banner
const banner = document.querySelector('#banner');
// variables for gameplay
let currentPlayer = 'x';
let isGameOver = false;
let clickCounter = 0;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {
    let cell = event.target;

    // stops game from continuing if over and resets on click
    if (isGameOver) {
        resetGame();
        return;
    }

    // stops person from overriding a play
    if (cell.textContent === 'x' || cell.textContent === 'o') {
        return;
    }

    // draws player
    cell.textContent = currentPlayer;
    // moves click counter up by 1 on each click
    clickCounter++;
    checkWin();
    togglePlayer();
}

// toggles current player
function togglePlayer() {
    if (currentPlayer === 'x') {
        currentPlayer = 'o';
    } else {
        currentPlayer = 'x';
    }
}

// checks each combination of cells for a win
function checkWin() {
    // combinations of cells for a win
    if (checkCells(0, 1, 2) || checkCells(3, 4, 5) || checkCells(6, 7, 8) || checkCells(0, 3, 6) || checkCells(1, 4, 7) || checkCells(2, 5, 8) || checkCells(0, 4, 8) || checkCells(2, 4, 6)) {
        isGameOver = true;
        banner.textContent = currentPlayer + ' wins!!! (click to reset board)';
    }

    // tells game to register a draw if 9 moves have been made
    else if (clickCounter === 9) {
        isGameOver = true;
        banner.textContent = 'draw!!! (click to reset board)';
    }
}

// function that runs any number combinations through checkCells
function checkCells(indexOne, indexTwo, indexThree) {
    if (cells[indexOne].textContent === currentPlayer && cells[indexTwo].textContent === currentPlayer && cells[indexThree].textContent === currentPlayer) {
        return true;
    } else {
        return false;
    }
}

// resets all variables back to initial values
function resetGame() {
    // loop through cells and clear textContent
    for (let i = 0; i < cells.length; i++) {
        // blank string to reset textContent
        cells[i].textContent = '';
    }
    // reset gameOver to false for next playthrough
    isGameOver = false;
    // reset currentPlayer to 'x' for next playthrough
    currentPlayer = 'x';
    // reset clickCounter to 0
    clickCounter = 0;
    // reset banner to blank
    banner.textContent = '';
}