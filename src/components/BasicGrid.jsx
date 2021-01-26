import React from "react";
import "./Grid.css";

const BasicGrid = ({
  columns = 3,
  rows = 2,
  gridAutoFlow = "row",
  className = "",
  children,
}) => {
  return (
    <div
      className={`Grid BasicGrid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridAutoFlow: gridAutoFlow,
      }}
    >
      {children}
    </div>
  );
};

export default BasicGrid;
