import React from 'react';

function StickerButton({ imageSrc, onClick }) {
  return (
    <button onClick={() => onClick(imageSrc)}>
      <img src={imageSrc} alt="Sticker" style={{ width: '50px', height: '50px' }} />
    </button>
  );
}

export default StickerButton;