const cells = document.querySelectorAll('.row > div');
let currentPlayer = 'x';

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {
    let cell = event.target;

    // stops person from overriding a play
    if (cell.textContent === 'x' || cell.textContent === 'o') {
        return;
    }


    // draws player
    cell.textContent = currentPlayer;
    checkWin();
    togglePlayer();
}

function togglePlayer() {
    if (currentPlayer === 'x') {
        currentPlayer = 'o';
    } else {
        currentPlayer = 'x';
    }
}

// checks each combination of cells for a win
function checkWin() {
    // x win conditions
    // top row
    if (cells[0].textContent === 'x' && cells[1].textContent === 'x' && cells[2].textContent === 'x') { alert('X Wins!') }
    // middle row (horizontal)
    else if (cells[3].textContent === 'x' && cells[4].textContent === 'x' && cells[5].textContent === 'x') { alert('X Wins!') }
    // bottom row
    else if (cells[6].textContent === 'x' && cells[7].textContent === 'x' && cells[8].textContent === 'x') { alert('X Wins!') }
    // left row
    else if (cells[0].textContent === 'x' && cells[3].textContent === 'x' && cells[6].textContent === 'x') { alert('X Wins!') }
    // middle row (vertical)
    else if (cells[1].textContent === 'x' && cells[4].textContent === 'x' && cells[7].textContent === 'x') { alert('X Wins!') }
    // right row
    else if (cells[2].textContent === 'x' && cells[5].textContent === 'x' && cells[8].textContent === 'x') { alert('X Wins!') }
    else if (cells[0].textContent === 'x' && cells[4].textContent === 'x' && cells[8].textContent === 'x') { alert('X Wins!') }
    else if (cells[2].textContent === 'x' && cells[4].textContent === 'x' && cells[6].textContent === 'x') { alert('X Wins!') }

    // o win conditions
    // top row
    if (cells[0].textContent === 'o' && cells[1].textContent === 'o' && cells[2].textContent === 'o') { alert('O Wins!') }
    // middle row (horizontal)
    else if (cells[3].textContent === 'o' && cells[4].textContent === 'o' && cells[5].textContent === 'o') { alert('O Wins!') }
    // bottom row
    else if (cells[6].textContent === 'o' && cells[7].textContent === 'o' && cells[8].textContent === 'o') { alert('O Wins!') }
    // left row
    else if (cells[0].textContent === 'o' && cells[3].textContent === 'o' && cells[6].textContent === 'o') { alert('O Wins!') }
    // middle row (vertical)
    else if (cells[1].textContent === 'o' && cells[4].textContent === 'o' && cells[7].textContent === 'o') { alert('O Wins!') }
    // right row
    else if (cells[2].textContent === 'o' && cells[5].textContent === 'o' && cells[8].textContent === 'o') { alert('O Wins!') }
    else if (cells[0].textContent === 'o' && cells[4].textContent === 'o' && cells[8].textContent === 'o') { alert('O Wins!') }
    else if (cells[2].textContent === 'o' && cells[4].textContent === 'o' && cells[6].textContent === 'o') { alert('O Wins!') }
}