let gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""],
};

let player = (name, symbol) => {
    return {name, symbol};
}

let i = 0;

function clicked(x){
   console.log(x);
   gameBoard.board[x] = "X";
    console.log(gameBoard.board);
    document.querySelector(`#button_${x}`).innerHTML = "X";
    document.querySelector(`#button_${x}`).disabled = true;

    if (i % 2 ){
        gameBoard.board[x] = "O";
        document.querySelector(`#button_${x}`).innerHTML = "O";
        document.querySelector(`#button_${x}`).disabled = true;
    }
    i++

}