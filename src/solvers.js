/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  
  for (let i = 0; i < n; i++) {
    board._addPiece();
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board._buildBoard()));
  return board._buildBoard();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var addRook = function(board, numAdded = 0, row = 0) {
    var boards = [];
    if (numAdded === n) {
      solutionCount++;
      return; 
    }
    
    for (let i = 0; i < n; i++) {
      if (board.get(row)[i] === 0) {
        let matrix = board._buildBoard();
        let newBoard = new Board(matrix);
        newBoard._addPiece(row, i);
        boards.push(newBoard);
      }
    }
    for (let board of boards) {
      addRook(board, numAdded + 1, row + 1);
    }
  }

  addRook(new Board({n:n}))

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
