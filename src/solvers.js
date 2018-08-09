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
    board._addPiece(); // O(n**2)
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board._buildBoard()));
  return board._buildBoard();
};

/*
 *  worst cast is O(n**3) total
 */

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var addRook = function(board, row = 0) {
    if (row === n) {
      solutionCount++;
      return; 
    }
    
    for (let i = 0; i < n; i++) {
      if (board.get(row)[i] === 0) {
        var newBoard = (new Board(board._buildBoard()))._addPiece(row, i);
        addRook(newBoard, row + 1);
      }
    }
  };

  addRook(new Board({n:n}));

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

/*
 *  O(n!) because every increment of n
 *  we have to solve a previous (n-1) solution tree and is run n times
 */

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutionCount = 0;
  var solutionBoard;

  if (n === 2 || n === 3) {
    return (new Board({n:n}))._buildBoard();
  }

  var addQueen = function(board, numAdded = 0, row = 0) {
    var boards = [];
    if (numAdded === n) {
      solutionCount++;
      solutionBoard = board._buildBoard();
      return; 
    }
    
    for (let i = 0; i < n; i++) {
      if (board.get(row)[i] === 0) {
        boards.push((new Board(board._buildBoard()))._addPiece(row, i, 'q'));
      }
    }
    for (let board of boards) {
      if (!solutionBoard) {
        addQueen(board, numAdded + 1, row + 1);
      }
    }
  };

  addQueen(new Board({n:n}));

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutionBoard));
  return solutionBoard;
};

/*
 *  worst case O(n!) final solution is correct (ex. n = 6, only 4 solutions) 
 */

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;

  var addQueen = function(board, row = 0) {
    if (row === n) {
      solutionCount++;
      return; 
    }
    
    for (let i = 0; i < n; i++) {
      if (board.get(row)[i] === 0) {
        newBoard = (new Board(board._buildBoard()))._addPiece(row, i, 'q');
        addQueen(newBoard, row + 1);
      }
    }
  };

  addQueen(new Board({n:n}));

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

/*
 *  O(n!) because we null out the invalid spots 
 *  without the need to check everytime
 */
