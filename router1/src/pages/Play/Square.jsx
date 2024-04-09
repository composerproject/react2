// export default Square;
import React from 'react';
import Piece from './Piece';

const Square = ({ piece, onClick, highlight }) => {
    return (
        <div
            onClick={onClick}
            style={{
                width: '40px',
                height: '40px',
                backgroundColor: highlight ? 'pink' : '#f0d9b5',
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
