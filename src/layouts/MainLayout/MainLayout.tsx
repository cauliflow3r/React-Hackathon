import React from "react";
import { Box } from "@mui/system";
import AxyenniyNavbar from "../../components/navbar/AxyenniyNavbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <AxyenniyNavbar />
      <Box sx={{ height: 100 }} />
      {children}
    </>
  );
};

export default MainLayout;
