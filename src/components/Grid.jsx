import React from "react";
import { Link } from "gatsby";
import "./Grid.css";
import KebabCase from "../utils/KebabCase";
import { isUndefined } from "lodash";

const Grid = ({
  items = [],
  columns = 3,
  rows = 2,
  gridAutoFlow = "row",
  className = "",
}) => {
  return (
    <div
      className={`Grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridAutoFlow: gridAutoFlow,
      }}
    >
      {items.map((item, idx, boxColor) => (
        <div
          key={`item-${idx}-${KebabCase(item.label)}`}
          className={`GridItem ${
            !isUndefined(boxColor) ? "box-" + item.boxColor : ""
          }`}
        >
          <Link to={`/#${item.slide}`}>{item.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default Grid;
