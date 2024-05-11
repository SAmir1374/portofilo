import React from "react";
import "../styles/components/iconList.css";

function IconList({ items , ...props }) {
  return (
    <div className="iconList">
      <ul>
        {items.map((el, index) => (
          <li style={{ backgroundColor : el.backGroundColor }} key={index}>
            <a href={el.href} target="_blank">
              {el.icon}
              {el.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IconList;
