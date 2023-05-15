import React from "react";
import MainRoute from "./routes/MainRoute";
import Navbar from "./components/navbar/Navbar";
import AxyenniyNavbar from "./components/navbar/AxyenniyNavbar";

const App = () => {
  return (
    <div>
      <AxyenniyNavbar />
      <MainRoute />
    </div>
  );
};

export default App;
