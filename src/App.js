import React, { useState, useEffect } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import StickerButton from './components/StickerButton';

function App() {
  const [stickers, setStickers] = useState([]);
  const [past, setPast] = useState([]);
  const [future, setFuture] = useState([]);

  // Add a sticker with default rotation
  const addSticker = (imageSrc) => {
    const gridSize = 40;
    const x = Math.round(50 / gridSize) * gridSize;
    const y = Math.round(50 / gridSize) * gridSize;
    const newSticker = { id: Date.now(), src: imageSrc, x, y, rotation: 0 };
    setPast([...past, stickers]);
    setStickers([...stickers, newSticker]);
    setFuture([]);
  };

  // Clear all stickers
  const clearCanvas = () => {
    setPast([...past, stickers]);
    setStickers([]);
    setFuture([]);
  };

  // Undo action
  const undo = () => {
    if (past.length === 0) return;
    const previous = past[past.length - 1];
    setFuture([stickers, ...future]);
    setStickers(previous);
    setPast(past.slice(0, -1));
  };

  // Redo action
  const redo = () => {
    if (future.length === 0) return;
    const next = future[0];
    setPast([...past, stickers]);
    setStickers(next);
    setFuture(future.slice(1));
  };

  // Handle keyboard shortcuts for undo/redo
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'z') {
        undo();
      } else if (e.ctrlKey && e.key === 'y') {
        redo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stickers, past, future, undo, redo]); // Added undo and redo to dependencies

  return (
    <div className="app">
      <h1>MyEra Sticker App</h1>
      <div className="controls">
        <div className="buttons">
          <StickerButton imageSrc="/stickers/sticker1.png" onClick={addSticker} />
          <StickerButton imageSrc="/stickers/sticker2.png" onClick={addSticker} />
          <StickerButton imageSrc="/stickers/sticker3.png" onClick={addSticker} />
        </div>
        <div className="stats">
          <p>Stickers: {stickers.length}</p>
          <button onClick={clearCanvas}>Clear Canvas</button>
          <button onClick={undo} disabled={past.length === 0}>Undo</button>
          <button onClick={redo} disabled={future.length === 0}>Redo</button>
        </div>
      </div>
      <Canvas
        stickers={stickers}
        setStickers={setStickers}
        past={past} // Added past prop
        setPast={setPast}
        setFuture={setFuture}
      />
    </div>
  );
}

export default App;