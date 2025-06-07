import React, { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import StickerButton from './components/StickerButton';

function App() {
  // State to store stickers
  const [stickers, setStickers] = useState([]);

  // Function to add a new sticker
  const addSticker = (imageSrc) => {
    const gridSize = 40;
    const x = Math.round(50 / gridSize) * gridSize; // Snap to nearest 40
    const y = Math.round(50 / gridSize) * gridSize;
    setStickers([...stickers, {
      id: Date.now(),
      src: imageSrc,
      x,
      y,
    }]);
  };

  

  return (
    <div className="app">
      <h1>MyEra Sticker App</h1>
      <div className="layout">
        <div className="buttons">
          <StickerButton imageSrc="/stickers/sticker1.png" onClick={addSticker} />
          <StickerButton imageSrc="/stickers/sticker2.png" onClick={addSticker} />
          <StickerButton imageSrc="/stickers/sticker3.png" onClick={addSticker} />
        </div>
        <Canvas stickers={stickers} setStickers={setStickers} />
      </div>
    </div>
  );
}

export default App;