import React from 'react';

export default ({children: label}) => {
  const labelPieces = label.split('-');

  return [
    labelPieces[0],
    <small key="small">{labelPieces[1]}</small>
  ]
}

