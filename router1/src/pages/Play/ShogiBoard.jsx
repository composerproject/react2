import React, { useEffect, useState } from 'react';
import Square from './Square';
import Piece from './Piece'; // Assuming this imports correctly



const ShogiBoard = () => {

    // const parseSFEN = (sfen) => {
    //     const board = [];
    //     const rows = sfen.split(' ')[0].split('/');
    //     for (let row of rows) {
    //         const boardRow = [];
    //         for (let char of row) {
    //             if (isNaN(char)) {
    //                 boardRow.push(char);
    //             } else { 
    //                 for (let i = 0; i < parseInt(char, 10); i++) {
    //                     boardRow.push('');
    //                 }
    //             }
    //         }
    //         board.push(boardRow);
    //     }
    //     return board;
    // };

    const parseSFEN = (sfen) => {
        const parts = sfen.split(' ');
        const boardState = parts[0];
        const currentPlayer = parts[1];
        const piecesInHandString = parts[2];
        const moveNumber = parseInt(parts[3], 10);
    
        const rows = boardState.split('/');
        const board = rows.map(row => {
            const boardRow = [];
            for (const char of row) {
                const num = parseInt(char, 10);
                if (!isNaN(num)) {
                    for (let i = 0; i < num; i++) {
                        boardRow.push('');
                    }
                } else {
                    boardRow.push(char);
                }
            }
            return boardRow;
        });
    
        // Adjust hand objects to arrays for sente and gote
        const hand = { sente: [], gote: [] };
    
        // Parse pieces in hand
        if (piecesInHandString !== '-') {
            const pieceMatches = piecesInHandString.match(/[A-Z]?[0-9]?[a-z]/gi) || [];
            pieceMatches.forEach(match => {
                const countMatch = match.match(/(\d+)?([A-Za-z]+)/);
                const count = countMatch[1] ? parseInt(countMatch[1], 10) : 1;
                const piece = countMatch[2];
    
                // Check if piece is uppercase (gote) or lowercase (sente)
                if (piece === piece.toLowerCase()) {
                    // Add count of gote's pieces
                    for (let i = 0; i < count; i++) {
                        hand.gote.push(piece);
                    }
                } else {
                    // Add count of sente's pieces
                    for (let i = 0; i < count; i++) {
                        hand.sente.push(piece);
                    }
                }
            });
        }
    
        return {
            board,
            currentPlayer,
            hand,
            moveNumber
        };
    };
    


    // const sfen = 'lnsgkgsnl/1r5b1/p1ppppppp/9/1p5P1/9/PPPPPPP1P/1BG4R1/LNS1KGSNL w - 6';
    // const sfen = 'lnsgk1snl/1r4gb1/p1ppppp1p/7R1/1p7/9/PPPPPPP1P/1BG6/LNS1KGSNL w Pp 10';
    // const sfen = 'lnsgkgsnl/1r5b1/p1ppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b B2G4S4N4L18P 1';
    const sfen = 'lnsgk1snl/6gb1/p1ppppppp/9/9/1R7/P1PPPPP1P/1BG6/LNS1KGSNL w R2Pp 16';


    // Single state object to hold all game information
    const [gameState, setGameState] = useState({
        board: [],
        hand: { sente: [], gote: [] },
        currentPlayer: '',
        moveNumber: 0
    });

    useEffect(() => {
        setGameState(parseSFEN(sfen));
    }, [sfen]);
    


    // const [board, setBoard] = useState([]);
    const [selectedSquare, setSelectedSquare] = useState(null);
    const [possibleMoves, setPossibleMoves] = useState([]);
    
    const getPossibleMoves = (piece, i, j) => {
      const moves = [];
      const isSente = piece === piece.toLowerCase();

    // Check if a square is occupied by a friendly piece
    const isFriendlyPiece = (x, y) => {
    //   const targetPiece = board[y][x];
      const targetPiece = gameState.board[y][x];
      return (isSente && targetPiece === targetPiece.toLowerCase() && targetPiece !== '') ||
             (!isSente && targetPiece === targetPiece.toUpperCase() && targetPiece !== '');
    };

    const isOpponentPiece = (x, y) => {
    //   const targetPiece = board[y][x];
      const targetPiece = gameState.board[y][x];
      if (!targetPiece) return false; // Empty square
      return isSente ? targetPiece === targetPiece.toUpperCase() : targetPiece === targetPiece.toLowerCase();
  };
  
    // Single-step move addition function
    const addSingleMove = (dx, dy) => {
      const newX = i + dx;
      const newY = j + (isSente ? dy : -dy);
      if (newX >= 0 && newX < 9 && newY >= 0 && newY < 9 && !isFriendlyPiece(newX, newY)) {
          moves.push({ x: newX, y: newY });
      }
  };





// Multi-step move addition function for Rook, Bishop, and Lance
const addMultiMove = (dx, dy) => {
    for (let step = 1; step < 9; step++) {
        const newX = i + dx * step;
        const newY = j + (isSente ? dy * step : -dy * step);
        if (newX < 0 || newX >= 9 || newY < 0 || newY >= 9) break; // Stop if move goes off the board
        
        if (isFriendlyPiece(newX, newY)) break; // Stop if a friendly piece is encountered

        moves.push({ x: newX, y: newY }); // Add move (either an empty square or capturing an opponent's piece)
        
        if (isOpponentPiece(newX, newY)) break; // Stop after capturing an opponent's piece
    }
};

  
      // Determine moves based on piece type
      switch (piece.toLowerCase()) {
          case 'k': // King
              [[-1, -1], [1, -1], [-1, 1], [1, 1], [0, 1], [1, 0], [0, -1], [-1, 0]].forEach(([dx, dy]) => addSingleMove(dx, dy));
              break;
          case 'p': // Pawn
              addSingleMove(0, 1);
              break;
          case 'g': // Gold General and Promoted Pieces
          case '+s':
          case '+n':
          case '+l':
          case '+p':
              [[0, 1], [1, 1], [-1, 1], [0, -1], [1, 0], [-1, 0]].forEach(([dx, dy]) => addSingleMove(dx, dy));
              break;
          case 's': // Silver General
              [[-1, 1], [1, 1], [0, 1], [-1, -1], [1, -1]].forEach(([dx, dy]) => addSingleMove(dx, dy));
              break;
          case 'n': // Knight
              [[-1, 2], [1, 2]].forEach(([dx, dy]) => addSingleMove(dx, isSente ? -dy : dy));
              break;
          case 'b': // Bishop
              [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([dx, dy]) => addMultiMove(dx, dy));
              break;
          case 'r': // Rook
              [[0, 1], [1, 0], [0, -1], [-1, 0]].forEach(([dx, dy]) => addMultiMove(dx, dy));
              break;
          case 'l': // Lance
              addMultiMove(0, isSente ? -1 : 1); // Lance moves forward multiple steps
              break;
      }
  
      return moves.filter(move => !isFriendlyPiece(move.x, move.y));
  };
  
  
      



    // useEffect(() => {
    //     setBoard(parseSFEN(sfen));
    // }, [sfen]);

    // const handleSquareClick = (i, j) => {
    //     const piece = board[j][i];
    //     // If clicking on a possible move, move the selected piece
    //     if (selectedSquare && possibleMoves.some(move => move.x === i && move.y === j)) {
    //         const newBoard = [...board];
    //         newBoard[j][i] = newBoard[selectedSquare.j][selectedSquare.i]; // Move the piece
    //         newBoard[selectedSquare.j][selectedSquare.i] = ''; // Clear the old square
    //         setBoard(newBoard);
    //         setSelectedSquare(null);
    //         setPossibleMoves([]);
    //     } else {
    //         // Select the piece and show possible moves
    //         setSelectedSquare({ i, j });
    //         setPossibleMoves(getPossibleMoves(piece, i, j, board));
    //     }
    // };
    const handleSquareClick = (i, j) => {
        const piece = gameState.board[j][i];
        // Check if the click is on a highlighted square (a possible move)
        if (selectedSquare && possibleMoves.some(move => move.x === i && move.y === j)) {
            const newBoard = gameState.board.map((row, rowIndex) => 
                row.map((cell, colIndex) => {
                    if (rowIndex === j && colIndex === i) return gameState.board[selectedSquare.j][selectedSquare.i]; // Place the piece in the new location
                    if (rowIndex === selectedSquare.j && colIndex === selectedSquare.i) return ''; // Clear the old square
                    return cell; // Leave other squares unchanged
                })
            );
    
            setGameState(prevState => ({
                ...prevState,
                board: newBoard
            }));
    
            // Clear selected square and possible moves after moving a piece
            setSelectedSquare(null);
            setPossibleMoves([]);
        } else if (piece) {
            // Select the piece if one is clicked and show possible moves
            setSelectedSquare({ i, j });
            setPossibleMoves(getPossibleMoves(piece, i, j));
        }
    };
    

    // return (
    //     <div className="board" style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 40px)', gap: '1px' }}>
    //         {board.map((row, j) =>
    //             row.map((piece, i) => (
    //                 <Square
    //                     key={`${i}-${j}`}
    //                     piece={piece}
    //                     onClick={() => handleSquareClick(i, j)}
    //                     highlight={possibleMoves.some(move => move.x === i && move.y === j)}
    //                 />
    //             ))
    //         )}
    //     </div>
    // );

    return (
        <div>
<div className="player-hand gote-hand">
    {gameState.hand.gote.map((piece, index) => <Piece key={`gote-${index}`} piece={piece} isInHand={true} />)}
</div>
            <div className="board" style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 40px)', gap: '1px' }}>
                {gameState.board.map((row, j) =>
                    row.map((piece, i) => (
<Square
    key={`${i}-${j}`}
    piece={piece}
    onClick={() => handleSquareClick(i, j)}
    highlight={possibleMoves.some(move => move.x === i && move.y === j)}
>
    {piece && <Piece piece={piece} />}
</Square>
                    ))
                )}
            </div>
            <div className="player-hand sente-hand">
    {gameState.hand.sente.map((piece, index) => <Piece key={`sente-${index}`} piece={piece} isInHand={true} />)}
</div>
        </div>
    );
  
};


export default ShogiBoard;
