import React, { useRef } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

function Canvas({ stickers, setStickers, past, setPast, setFuture }) {
  const stageRef = useRef(null);

  // Handle dragging with grid snapping
  const handleDragEnd = (e, id) => {
    const gridSize = 40;
    const newX = Math.round(e.target.x() / gridSize) * gridSize;
    const newY = Math.round(e.target.y() / gridSize) * gridSize;
    setPast([...past, stickers]);
    setStickers(stickers.map(sticker =>
      sticker.id === id ? { ...sticker, x: newX, y: newY } : sticker
    ));
    setFuture([]);
  };

  // Handle double-click deletion
  const handleDblClick = (id) => {
    setPast([...past, stickers]);
    setStickers(stickers.filter(sticker => sticker.id !== id));
    setFuture([]);
  };

  // Handle rotation
  const handleRotate = (id) => {
    setPast([...past, stickers]);
    setStickers(stickers.map(sticker =>
      sticker.id === id ? { ...sticker, rotation: (sticker.rotation + 90) % 360 } : sticker
    ));
    setFuture([]);
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
    <div className="canvas-container">
      <Stage width={600} height={400} ref={stageRef}>
        <Layer>
          {stickers.map(sticker => (
            <Sticker
              key={sticker.id}
              sticker={sticker}
              onDragEnd={handleDragEnd}
              onDblClick={handleDblClick}
              onRotate={handleRotate}
            />
          ))}
        </Layer>
      </Stage>
      <button onClick={handleDownload}>Download Canvas</button>
    </div>
  );
}

// Component to render a single sticker
function Sticker({ sticker, onDragEnd, onDblClick, onRotate }) {
  const [image] = useImage(sticker.src);
  return (
    <Image
      image={image}
      x={sticker.x}
      y={sticker.y}
      width={50}
      height={50}
      rotation={sticker.rotation}
      draggable
      onDragEnd={(e) => onDragEnd(e, sticker.id)}
      onDblClick={() => onDblClick(sticker.id)}
      onClick={() => onRotate(sticker.id)}
    />
  );
}

export default Canvas;