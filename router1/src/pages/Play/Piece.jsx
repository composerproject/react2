import React from 'react';

const pieceNames = {
  p: '歩', // Pawn
  l: '香', // Lance
  n: '桂', // Knight
  s: '銀', // Silver General
  g: '金', // Gold General
  k: '玉', // King (for Sente)
  r: '飛', // Rook
  b: '角', // Bishop
  '+p': 'と', // Promoted Pawn
  '+l': '成香', // Promoted Lance
  '+n': '成桂', // Promoted Knight
  '+s': '成銀', // Promoted Silver
  '+b': '馬', // Horse (Promoted Bishop)
  '+r': '龍', // Dragon (Promoted Rook)
  // Upper case for Sente pieces
  P: '歩',
  L: '香',
  N: '桂',
  S: '銀',
  G: '金',
  K: '王',
  R: '飛',
  B: '角',
  '+P': 'と',
  '+L': '成香',
  '+N': '成桂',
  '+S': '成銀',
  '+B': '馬',
  '+R': '龍',
};

const Piece = ({ piece }) => {
  const isGote = piece !== piece.toUpperCase();
  const displayName = pieceNames[piece] || piece;
  
  return (
    <span style={{
      fontWeight: 'bold',
      display: 'inline-block',
      transform: isGote ? 'rotate(180deg)' : 'none'
    }}>
      {displayName}
    </span>
  );
};

export default Piece;
