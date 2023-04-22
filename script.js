let gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""],
};

function Player(name, symbol){
    this.name = name
    this.symbol= symbol
}


let player1 = new Player("Player 1", "X");
let player2 = new Player("Player 2", "O");

let i = 0;
let gameOver = false;


function clicked(x){
    console.log(x);
    let currentPlayer = i % 2 === 0 ? player1 : player2;

    gameBoard.board[x] = currentPlayer.symbol;
    document.querySelector(`#button_${x}`).innerHTML = currentPlayer.symbol;
    document.querySelector(`#button_${x}`).disabled = true;

    let winner = checkWin(currentPlayer);
    if (winner) {
        console.log(`${winner.name} wygrał!`);
        showWinnerModal(winner.name)
        gameOver = true;
        // dalsze akcje po wygranej
    } else {
        console.log("Gra nadal trwa.");
        // dalsze akcje po każdym ruchu
    }

    if (gameOver) {
        // zablokowanie wszystkich przycisków na planszy
        let buttons = document.querySelectorAll(".square");
        buttons.forEach(button => button.disabled = true);
    }

    i++;
}


function checkWin(currentPlayer) {
    let symbol = currentPlayer.symbol;

    // sprawdzenie wierszy
    for (let i = 0; i < 9; i += 3) {
        if (gameBoard.board[i] === symbol && gameBoard.board[i+1] === symbol && gameBoard.board[i+2] === symbol) {
            return currentPlayer;
        }
    }

    // sprawdzenie kolumn
    for (let i = 0; i < 3; i++) {
        if (gameBoard.board[i] === symbol && gameBoard.board[i+3] === symbol && gameBoard.board[i+6] === symbol) {
            return currentPlayer;
        }
    }

    // sprawdzenie przekątnych
    if (gameBoard.board[0] === symbol && gameBoard.board[4] === symbol && gameBoard.board[8] === symbol) {
        return currentPlayer;
    }

    if (gameBoard.board[2] === symbol && gameBoard.board[4] === symbol && gameBoard.board[6] === symbol) {
        return currentPlayer;
    }

    return null;
}

function reset(){
    gameBoard.board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    let buttons = document.querySelectorAll(".square");
    buttons.forEach(button => button.disabled = false);
    buttons.forEach(square => {square.innerHTML = '';});

}

function showWinnerModal(winner) {
    const modal = document.getElementById('modal');
    const message = document.getElementById('winner-message');
    const button = document.getElementById('new-game-button');
    const button2 = document.getElementById('hide-popup-button');


    message.textContent = `${winner.toString()} is a winner!`;


    modal.style.display = 'block';

    button.addEventListener('click', function() {
        modal.style.display = 'none';
        reset();
    });

    button2.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

