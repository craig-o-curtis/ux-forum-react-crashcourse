import React from "react";
import AbsoluteLoader from "./AbsoluteLoader";

const CodeSandboxCharts = () => (
  <AbsoluteLoader>
    <iframe
      src="https://codesandbox.io/embed/5xv24y586n?codemirror=1&fontsize=14&hidenavigation=1&theme=dark"
      style={{
        border: 0,
        borderRadius: "4px",
        overflow: "hidden",
        flex: "1 1 auto",
      }}
      title="React-D3 Dashboard"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  </AbsoluteLoader>
);

export default CodeSandboxCharts;
