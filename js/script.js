/*----- constants -----*/

var playerLookup = {
    '1': 'yellow', // Player 1
    '-1': 'red', //Player 2 
    'null': 'white' 
};

/*----- app's state (variables) -----*/

var board, winner, turn;

/*----- cached element references -----*/

var popUp = document.getElementById('displayMess');

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', boardClick);
document.querySelector('footer > button').addEventListener('click', reset);

/*----- functions -----*/ 
function reset() {
    // if (winner) {

    // }
    initialize();
    render();
}

initialize();

function initialize() {
    if (winner == true) return false;
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
    
}

function render() {
    board.forEach(function(col, colIdx) {
        col.forEach(function(cell, rowIdx) {
            var td = document.getElementById(`col${colIdx}row${rowIdx}`);
          
            td.style.backgroundColor = playerLookup[cell];

            
                // transfer all state to the DOM
        });
    });
}

function boardClick(evt) {
    var target = evt.target;
    if (target.tagName !== 'TD') return;
    var col = parseInt(evt.target.id.charAt(3));
    if (!board[col].includes(null)) return;
    // update state (board, turn, winner)
    var row = board[col].indexOf(null);
    board[col][row] = turn;
    turn *= -1;
    winner = getWinner();
    render();
    // checkWinner();
    
}

function getWinner() {
    for (var colIdx = 0; colIdx < board.length; colIdx++) {
         for (var rowIdx = 0; rowIdx < board[colIdx].length; rowIdx++) {
         if (board[colIdx][rowIdx] === null) break; 
          winner = checkForWin(colIdx, rowIdx);
            if (winner) break; 

            console.log(colIdx, rowIdx, turn);
        };
        if (winner) break;
    };
};

function checkForWin(colIdx, rowIdx) {
    winner = upWin(colIdx, rowIdx);
    if (winner) return winner;
    winner = sideWin(colIdx, rowIdx);
    if (winner) return winner;
    winner = diagUp(colIdx, rowIdx);
    if (winner) return winner;
    return diagDown(colIdx, rowIdx);
};


function upWin(colIdx, rowIdx) {
    if (rowIdx > 2) return null;
    return Math.abs(board[colIdx][rowIdx] + board[colIdx][rowIdx + 1] + board[colIdx][rowIdx + 2] + board[colIdx][rowIdx + 3]) === 4 ? board[colIdx][rowIdx] : null;
};
function sideWin(colIdx,rowIdx) {
    if (colIdx > 3) return null;
    return Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx] + board[colIdx +2][rowIdx] + board[colIdx + 3][rowIdx]) === 4 ? board[colIdx][rowIdx] : null;
};
function diagUp(colIdx, rowIdx) {
    if (colIdx > 3) return null;
    return Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx + 1] + board[colIdx+ 2][rowIdx + 2] + board[colIdx + 3][rowIdx + 3]) === 4 ? board[colIdx][rowIdx] : null;
};
function diagDown(colIdx, rowIdx) {
    if (colIdx > 3 && rowIdx < 6) return null;
    return Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx - 1] + board[colIdx + 2][rowIdx - 2] + board[colIdx + 3][rowIdx - 3]) === 4 ? board[colIdx][rowIdx] : null;
};
