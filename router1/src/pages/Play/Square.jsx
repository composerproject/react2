import React from 'react';
import Piece from './Piece'; // Ensure the path is correct

const Square = ({ piece, selected, onClick, highlight }) => {
    return (
      <div
        onClick={onClick}
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: selected ? '#a4d7e1' : highlight ? 'pink' : '#f0d9b5',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid #333',
        }}
      >
        {piece && <Piece piece={piece} />}
      </div>
    );
  };
  

export default Square;
