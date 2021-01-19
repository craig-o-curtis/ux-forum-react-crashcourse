import React from "react";
import "./Grid.css";
import KebabCase from "../utils/KebabCase";

const Grid = ({ items = [] }) => {
  return (
    <div className={`Grid`}>
      {items.map((item, idx) => (
        <div
          key={`item-${idx}-${KebabCase(item.label)}`}
          className={`GridItem`}
        >
          <a href={`#${item.slide}`}>{item.label}</a>
        </div>
      ))}
    </div>
  );
};

export default Grid;
