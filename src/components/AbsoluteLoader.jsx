import React from "react";
import LoaderRing from "./LoaderRing";

const AbsoluteLoader = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        flex: "1 1 auto",
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <LoaderRing />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AbsoluteLoader;
