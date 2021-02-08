import React from "react";
import AbsoluteLoader from "./AbsoluteLoader";

const IframeLoader = ({ src, title = "" }) => (
  <AbsoluteLoader>
    <iframe
      src={src}
      style={{
        border: 0,
        borderRadius: "4px",
        overflow: "hidden",
        flex: "1 1 auto",
        maxWidth: "100%",
      }}
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  </AbsoluteLoader>
);

export default IframeLoader;
