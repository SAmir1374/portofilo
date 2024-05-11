import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ReactTyped } from "react-typed";

function TypeWritterAnimation({ children, ...props }) {

  return (
    <TypeAnimation
      splitter={(str) => str.split(/(?= )/)}
      sequence={["", 3000, children, 720 * 10000, ""]}
      wrapper="p"
      speed={{ type: "keyStrokeDelayInMs", value: 200 }}
      omitDeletionAnimation={true}
      style={{
        fontSize: "18px",
        margin: "20px",
        lineHeight: "1.6em",
        color: "rgb(202,202,202)",
        display: "block",
        minHeight: "200px",
      }}
      repeat={0}
      {...props}
    />
  );
}

export function ReactType({ children, ...props }) {
  useEffect(() => {} , [children])

  return (
    <ReactTyped
      startDelay={2000}
      // startWhenVisible
      strings={[children]}
      typeSpeed={10}
      backSpeed={20}
      {...props}
    />
  );
}

export default TypeWritterAnimation;
