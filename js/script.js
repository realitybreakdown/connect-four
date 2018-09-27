/*----- constants -----*/

var playerLookup = {
    '1': 'yellow', // Player 1
    '-1': 'red', //Player 2 
    'null': 'white' 
};

/*----- app's state (variables) -----*/

var board, winner, turn, turnCounter;

/*----- cached element references -----*/

var popUp = document.getElementById('display-mess');
var resultMess = document.getElementById('result-mess');

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', boardClick);
document.querySelector('footer > button').addEventListener('click', reset);
document.getElementById('resbtn').addEventListener('click', reset);

/*----- functions -----*/ 

function reset() {
    initialize();
    render(); 
    popUp.style.display = "none";
}

initialize();
render();

function initialize() {
    board = [
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null]
        
    ];
    winner = null;
    turn = 1;
    turnCounter = 0;
}

function render() {
    board.forEach(function(col, colIdx) {
        col.forEach(function(cell, rowIdx) {
            var td = document.getElementById(`col${colIdx}row${rowIdx}`);
            td.style.backgroundColor = playerLookup[cell];
        });
    });
    if (winner || tieGame()) popMess();
    document.querySelector("#message").textContent = `${playerLookup[turn]}'s turn`;
};

function boardClick(evt) {
    if(winner !== null) return;
    var target = evt.target;
    if (target.tagName !== 'TD' || winner) return;
    var col = parseInt(evt.target.id.charAt(3));
    if (!board[col].includes(null)) return;
    // update state (board, turn, winner)
    var row = board[col].indexOf(null);
    board[col][row] = turn;
    turnCounter += 1;
    winner = getWinner();
    turn *= -1;
    render();
}

function getWinner() {
    for (var colIdx = 0; colIdx < board.length; colIdx++) {
         for (var rowIdx = 0; rowIdx < board[colIdx].length; rowIdx++) {
            if (board[colIdx][rowIdx] === null) break; 
            winner = checkForWin(colIdx, rowIdx);
            if (winner) break; 
        };
        if (winner) break;
    };
    return winner; 
}

function checkForWin(colIdx, rowIdx) {
    winner = upWin(colIdx, rowIdx);
    if (winner) return winner;
    winner = sideWin(colIdx, rowIdx);
    if (winner) return winner;
    winner = diagUp(colIdx, rowIdx);
    if (winner) return winner;
    return diagDown(colIdx, rowIdx);
}

function upWin(colIdx, rowIdx) {
    if (rowIdx > 2) return null;
    return Math.abs(board[colIdx][rowIdx] + board[colIdx][rowIdx + 1] + board[colIdx][rowIdx + 2] + board[colIdx][rowIdx + 3]) === 4 ? board[colIdx][rowIdx] : null;
}

function sideWin(colIdx,rowIdx) {
    if (colIdx > 3) return null;
    return Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx] + board[colIdx +2][rowIdx] + board[colIdx + 3][rowIdx]) === 4 ? board[colIdx][rowIdx] : null;
}

function diagUp(colIdx, rowIdx) {
    if (colIdx > 3) return null;
    return Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx + 1] + board[colIdx+ 2][rowIdx + 2] + board[colIdx + 3][rowIdx + 3]) === 4 ? board[colIdx][rowIdx] : null;
}

function diagDown(colIdx, rowIdx) {
    if (colIdx > 3 && rowIdx < 6) return null;
    return Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx - 1] + board[colIdx + 2][rowIdx - 2] + board[colIdx + 3][rowIdx - 3]) === 4 ? board[colIdx][rowIdx] : null;
}

function tieGame() {
    return (winner === null && turnCounter === 42);
}

function popMess() {
    popUp.style.display = "block";
    if (winner) {
        resultMess.textContent = `${playerLookup[winner]} is the winner!`;
    } else {
        resultMess.textContent = "Draw";
    }
}

