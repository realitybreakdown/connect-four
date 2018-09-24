

/*----- constants -----*/

//const cells = document.querySelectorAll('.cell');

/*----- app's state (variables) -----*/
// var config = {
//     yellowPlayerName: "Player 1",
//     redPlayerName: "Player 2",
//     startingPlayer: "yellow", // Choose 'yellow' or 'red'.
//     takenMsg: "This position is already taken. Please make another choice.",
//     drawMsg: "This game is a draw.",
//     playerPrefix: "Current Player is: ",
//     winPrefix: "The winner is: ",
//     countToWin: 4,
// };



var resetBtn;
var init;

var player = {
    0: 'red',
    1: 'yellow'
};

var checkWinner
var boardClick;

var horizontalWin;
var diagonalWin;
var verticalWin;

var board = [
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null
]

/*----- cached element references -----*/

var tableBoard = document.getElementById("board");
var resetButton = document.getElementById('footer > button');

/*----- event listeners -----*/
    // Event Listener (Click)

tableBoard.addEventListener('click', boardClick);
//resetButton.addEventListener('click', initialize);

document.querySelectorAll('#board td')
.forEach(e => e.addEventListener("click", function() {
    console.log("clicked")
}));

/*----- functions -----*/ 
// function checkColums(board, columns, rows) {
//     for (var y = 0; y < columns; y++) {
//       var consecutive = 0;
//       for (var x = 0; x < rows; x++) {
//         if (board[y][x] == 1) {
//           consecutive++;
//           if (consecutive == 4) {
//             return true;
//           }
//         }
//       }
//     }
//     return false;
//   }
  
//   function checkRows(board, columns, rows) {
//     for (var x = 0; x < rows; x++) {
//       var consecutive = 0;
//       for (var y = 0; y < columns; y++) {
//         if (board[y][x] == 1) {
//           consecutive++;
//           if (consecutive == 4) {
//             return true;
//           }
//         }
//       }
//     }
//     return false;
//   }



// function changePlayer() {
//     // Change the value of our player variable.
//     if (currentPlayer === 'yellow') {
//         currentPlayer = 'red';
//     } else {
//         currentPlayer = 'yellow';
//     }


// function switchTurn() {
//     if ()
// } else {

//}











// Render
// *var row;
// *var column; 
// Add disc to board 
// Stack if disc underneath 

// var players = {
//     1 = 'yellow',
//     2 = 'red'
// };

// Players (2)
// const Player 1 = Yellow
// const Player 2 = Red

// Check winners 
// Check for draw
// Type of win (horizontal, vertical, diagonal)
    // column left to right 
    // for loop 
    // check for win down 
        // || &&

// Start Game 
// Reset 

// Players cant click on board after game stops 
