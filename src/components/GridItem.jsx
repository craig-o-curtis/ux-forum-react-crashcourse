import React from "react";
import isUndefined from "lodash/isUndefined";

const GridItem = ({ children, className }) => (
  <div className={`GridItem ${!isUndefined(className) ? className : ""}`}>
    {children}
  </div>
);

export default GridItem;
