/*----- constants -----*/

var playerLookup = {
    '1': 'red', // Player 1
    '-1': 'yellow', //Player 2 
    'null': 'white' 
};

//const cells = document.querySelectorAll('.cell');

/*----- app's state (variables) -----*/

var board, winner, turn;


/*----- cached element references -----*/

// var circles = document.querySelectorAll('td');

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', boardClick);
document.querySelector('footer > button').addEventListener('click', initialize);

/*----- functions -----*/ 

initialize();

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
    // winner = getWinner();
    render();
}

// for (var x = 0; x <= 7; x = x + 1) {
//     for (var y = 0; y <= 6; y = y + 1) {
//       console.log(`col${x}row${y}`);
//     }
//    }


// function getWinner(board, col, row) {
//     for (var y = 0; y < col; y++) {
//         var consecutive = 0;
//         for (var x = 0; x < row; x++) {
//         if (board[y][x] == 1) {
//             consecutive++;
//             if (consecutive == 4) {
//             return true;
//             }
//         }
//         }
//     }
//     return false;
// }


function chkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a != null) && (a ==b) && (a == c) && (a == d));
}

function getWinner(bd) {
    // Check down
    for (r = null; r < 3; r++)
        for (c = null; c < 7; c++)
            if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]))
                return bd[r][c];

    // Check right
    for (r = null; r < 6; r++)
        for (c = null; c < 4; c++)
            if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]))
                return bd[r][c];

    // Check down-right
    for (r = null; r < 3; r++)
        for (c = null; c < 4; c++)
            if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3]))
                return bd[r][c];

    // Check down-left
    for (r = 3; r < 6; r++)
        for (c = null; c < 4; c++)
            if (chkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]))
                return bd[r][c];

    return 0;
}















