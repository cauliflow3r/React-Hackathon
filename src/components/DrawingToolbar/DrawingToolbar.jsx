import React from "react";
import CanvasForm from "../Canvas/CanvasForm";

const DrawingToolbar = (
  {
    strokeColor,
    setStrokeColor,
    lineWidth,
    setLineWidth,
    handleClear,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    handleNsfw,
    type,
    setType,
    handleSubmit,
  },
  ref
) => {
  return (
    <div className="toolbar" ref={ref}>
      <div className="column">
        <h1>Draw</h1>
        <label htmlFor="stroke">Color</label>
        <input
          id="stroke"
          name="stroke"
          type="color"
          value={strokeColor}
          onChange={(e) => setStrokeColor(e.target.value)}
        />
        <label htmlFor="lineWidth">Line Width</label>
        <input
          id="lineWidth"
          name="lineWidth"
          type="range"
          min="1"
          max="30"
          value={lineWidth}
          onChange={(e) => setLineWidth(parseInt(e.target.value))}
        />
        <button id="clear" onClick={handleClear}>
          <span class="button_top"> Clear</span>
        </button>
        <CanvasForm
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
          handleNsfw={handleNsfw}
          type={type}
          setType={setType}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default React.forwardRef(DrawingToolbar);
