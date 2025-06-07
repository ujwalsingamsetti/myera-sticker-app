import React, { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import StickerButton from './components/StickerButton';

function App() {
  // State to store stickers
  const [stickers, setStickers] = useState([]);

  // Function to add a new sticker
  const addSticker = (imageSrc) => {
    setStickers([...stickers, {
      id: Date.now(), // Unique ID using timestamp
      src: imageSrc,
      x: 50, // Default position
      y: 50,
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