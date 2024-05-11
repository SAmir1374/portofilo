import React from "react";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import "../styles/components/Arrow.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Arrow({
  left = true,
  right = true,
  leftHref = "/",
  rightHref = "/",
  leftLabel,
  rightLabel,
}) {
  const { t, i18n } = useTranslation("global");
  return (
    <div className="mainArrow">
      {left && (
        <Link to={leftHref}>
          <ArrowLeftIcon
            className={"arrowLeft"}
            style={{ stroke: "#aaaaaa", transform: "scale(2)" }}
          />
        </Link>
      )}
      {right && (
        <Link to={rightHref}>
          <ArrowRightIcon
            className={"arrowRight"}
            style={{ stroke: "#aaaaaa", transform: "scale(2)" }}
          />
        </Link>
      )}
    </div>
  );
}

export default Arrow;
