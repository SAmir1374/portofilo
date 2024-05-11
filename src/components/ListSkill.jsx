import React from "react";
import "../styles/components/listSkill.css";

function ListSkill({ items, props }) {
  return (
    <ul>
      {items.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  );
}

export default ListSkill;
