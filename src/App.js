import React from "react";
import AppRoutes from "./routes/AppRoutes";
import AxyenniyNavbar from "./components/navbar/AxyenniyNavbar";

const App = () => {
  return (
    <div>
      <AxyenniyNavbar />
      <AppRoutes />
    </div>
  );
};

export default App;
