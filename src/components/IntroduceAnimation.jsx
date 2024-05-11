import React from "react";
import "../styles/components/introduceAnimation.css";

function IntroduceAnimation({
  name = "Amirmuhmammad Aghayan",
  label = "Front End Developer",
  className,
}) {
  return (
    <div className={` box ${className}`}>
      <div className="title">
        <span class="block"></span>
        <h1>
          {name}
          <span></span>
        </h1>
      </div>

      <div class="role">
        <div class="block"></div>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default IntroduceAnimation;
