import React, { useState } from 'react';
import Square from './Square';



const ShogiBoard = () => {
    const sfen = 'lnsgkgsnl/1r5b1/p1ppppppp/9/1p5P1/9/PPPPPPP1P/1BG4R1/LNS1KGSNL w - 6';
    const [selectedSquare, setSelectedSquare] = useState(null);
    const [possibleMoves, setPossibleMoves] = useState([]);

    const getPossibleMoves = (piece, i, j) => {
        const moves = [];
        if (piece.toLowerCase() === 'k') { // King
          for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
              if (dx === 0 && dy === 0) continue; // Skip the current square
              const newX = i + dx;
              const newY = j + dy;
              if (newX >= 0 && newX < 9 && newY >= 0 && newY < 9) { // Ensure within bounds
                moves.push({ x: newX, y: newY });
              }
            }
          }
        } else if (piece === 'P') { // Sente's Pawn
          const newX = i - 1; // Move one square forward (up for Sente)
          if (newX >= 0) { // Ensure the move is within bounds
            moves.push({ x: newX, y: j });
          }
        } else if (piece === 'p') { // Gote's Pawn
          const newX = i + 1; // Move one square forward (down for Gote)
          if (newX < 9) { // Ensure the move is within bounds
            moves.push({ x: newX, y: j });
          }
        }
        // Add logic for other pieces...
        return moves;
      };
      

      const parseSFEN = (sfen) => {
        const board = [];
        const rows = sfen.split(' ')[0].split('/');
        for (let row of rows) {
            const boardRow = [];
            for (let char of row) {
                if (isNaN(char)) {
                    boardRow.push(char);
                } else { 
                    for (let i = 0; i < parseInt(char, 10); i++) {
                        boardRow.push('');
                    }
                }
            }
            board.push(boardRow);
        }
        return board;
    };
    const board = parseSFEN(sfen);

    const handleSquareClick = (piece, i, j) => {
        setSelectedSquare({ i, j });
        setPossibleMoves(getPossibleMoves(piece, i, j));
    };



    return (
        <div className="board" style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 40px)', gap: '1px' }}>
            {board.map((row, i) =>
                row.map((square, j) => {
                    const isHighlighted = possibleMoves.some(move => move.x === i && move.y === j);
                    return (
                        <Square
                            key={`${i}-${j}`}
                            piece={square}
                            selected={selectedSquare?.i === i && selectedSquare?.j === j}
                            onClick={() => handleSquareClick(square, i, j)}
                            highlight={isHighlighted}
                        />
                    );
                })
            )}
        </div>
    );
};


export default ShogiBoard;
