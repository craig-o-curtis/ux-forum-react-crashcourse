import React from "react";
import "./MainContent.css";

const MainContent = ({
  maxWidth = 800,
  width = "100%",
  margin = "0 auto",
  flexDirection = "column",
  justifyContent = "center",
  alignItems = "stretch",
  children,
}) => (
  <main
    className="MainContent"
    style={{
      maxWidth,
      width,
      margin,
      flexDirection,
      justifyContent,
      alignItems,
    }}
  >
    {children}
  </main>
);

export default MainContent;
