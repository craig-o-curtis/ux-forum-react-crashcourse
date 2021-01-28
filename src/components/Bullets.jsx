import React from "react";

const Bullets = ({ children }) => (
  <div style={{ position: "relative" }}>
    <ul style={{ textAlign: "left" }}>{children}</ul>
  </div>
);

export default Bullets;
