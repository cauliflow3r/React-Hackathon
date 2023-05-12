import React, { useState } from "react";

const Canvas = ({ canvasId, strokeColor, lineWidth }, ref) => {
  const [isPainting, setIsPainting] = useState(false);

  const handleMouseDown = () => {
    setIsPainting(true);
  };

  const handleMouseUp = () => {
    setIsPainting(false);

    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    ctx.stroke();
    ctx.beginPath();
  };

  const handleMouseMove = (e) => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    if (!isPainting) {
      return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = strokeColor;

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
    ctx.stroke();
  };

  return (
    <canvas
      ref={ref}
      id={canvasId}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    ></canvas>
  );
};

export default React.forwardRef(Canvas);
