import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import "../components/Styles/DrawingPage.css";

const DrawingPage = () => {
  const canvasRef = useRef(null);
  const toolbarRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(5);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL(); // Convert canvas to data URL

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("drawing", dataURL);

    try {
      await axios.post("http://localhost:8000/drawings", formData);
      alert("Drawing submitted successfully!");
      // Reset form fields
      setName("");
      setDescription("");
      setPrice("");
    } catch (error) {
      console.error("Error submitting drawing:", error);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const toolbar = toolbarRef.current;
    const ctx = canvas.getContext("2d");

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;

    let isPainting = false;
    let startX;
    let startY;

    const draw = (e) => {
      if (!isPainting) {
        return;
      }

      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.strokeStyle = strokeColor;

      ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
      ctx.stroke();
    };

    const handleMouseDown = (e) => {
      isPainting = true;
      startX = e.clientX - canvasOffsetX;
      startY = e.clientY - canvasOffsetY;
    };

    const handleMouseUp = () => {
      isPainting = false;
      ctx.stroke();
      ctx.beginPath();
    };

    toolbar.addEventListener("click", (e) => {
      if (e.target.id === "clear") {
        handleClear();
      }
    });

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", draw);
    };
  }, [lineWidth, strokeColor, handleClear]);

  return (
    <section className="container">
      <div className="toolbar" ref={toolbarRef}>
        <h1>Draw.</h1>
        <label htmlFor="stroke">Stroke</label>
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
          type="number"
          value={lineWidth}
          onChange={(e) => setLineWidth(parseInt(e.target.value))}
        />
        <button id="clear" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="drawing-container">
        <div className="drawing-board">
          <canvas ref={canvasRef} id="drawing-board"></canvas>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Submit Drawing</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};
export default DrawingPage;
