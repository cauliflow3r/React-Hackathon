import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import "../components/Styles/DrawingPage.css";
import Canvas from "../components/Canvas/Canvas";

const DrawingPage = () => {
  const canvasRef = useRef(null);
  const toolbarRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(5);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    console.log("ctx: ", ctx);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const canvas = canvasRef.current;
      const dataURL = canvas.toDataURL();

      const drawingData = {
        name,
        description,
        price,
        drawing: dataURL,
      };
      await axios.post("http://localhost:8000/drawings", drawingData);

      console.log("Drawing submitted successfully");

      setName("");
      setDescription("");
      setPrice(0);
      handleClear();
      setIsSubmitting(false);
      setIsFormOpen(false);
    } catch (error) {
      console.error("Error submitting drawing:", error);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const toolbar = toolbarRef.current;
    const ctx = canvas.getContext("2d");
    const margin = 20;

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;
    const canvasWidth = window.innerWidth - canvasOffsetX - margin;
    const canvasHeight = window.innerHeight - canvasOffsetY - margin;

    // Set the canvas dimensions
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  }, []);

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
        <button onClick={() => setIsFormOpen(!isFormOpen)}>Toggle Form</button>
      </div>
      <div className="drawing-container">
        <div className="drawing-board">
          <Canvas
            ref={canvasRef}
            canvasId="drawing-board"
            strokeColor={strokeColor}
            lineWidth={lineWidth}
          />
        </div>
        <div className={`form ${isFormOpen ? "open" : "closed"}`}>
          <form className="form">
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
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DrawingPage;
