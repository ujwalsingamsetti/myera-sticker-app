import React, { useRef } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

function Canvas({ stickers, setStickers }) {
  const stageRef = useRef(null);

  // Function to handle dragging
  const handleDragEnd = (e, id) => {
    const gridSize = 40;
    const newX = Math.round(e.target.x() / gridSize) * gridSize;
    const newY = Math.round(e.target.y() / gridSize) * gridSize;
    setStickers(stickers.map(sticker =>
      sticker.id === id ? { ...sticker, x: newX, y: newY } : sticker
    ));
  };

  // Function to handle double-click deletion
  const handleDblClick = (id) => {
    setStickers(stickers.filter(sticker => sticker.id !== id));
  };

  // Download canvas as PNG
  const handleDownload = () => {
    const dataURL = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas.png';
    link.click();
  };

  return (
    <div>
      <Stage width={600} height={400} ref={stageRef} style={{ border: '1px solid black' }}>
        <Layer>
          {stickers.map(sticker => (
            <Sticker
              key={sticker.id}
              sticker={sticker}
              onDragEnd={handleDragEnd}
              onDblClick={handleDblClick}
            />
          ))}
        </Layer>
      </Stage>
      <button onClick={handleDownload} style={{ marginTop: '10px' }}>
        Download Canvas
      </button>
    </div>
  );
}

// Component to render a single sticker
function Sticker({ sticker, onDragEnd, onDblClick }) {
  const [image] = useImage(sticker.src);
  return (
    <Image
      image={image}
      x={sticker.x}
      y={sticker.y}
      width={50}
      height={50}
      draggable
      onDragEnd={(e) => onDragEnd(e, sticker.id)}
      onDblClick={() => onDblClick(sticker.id)}
    />
  );
}

export default Canvas;