import React from "react";
import "../styles/components/headerAndDesc.css";
import { Divider } from "@mui/material";

function HeaderAndDesc({ title, label, divider, desc, className, aLink }) {
  return (
    <div className={`describeHeader ${className}`}>
      <h3>{title}</h3>
      <p>{label}</p>
      {divider && <Divider sx={{ width: "50%", backgroundColor: "#fff" }} />}
      <p style={{ whiteSpace: "pre-wrap" }}>{desc}</p>
      {aLink && (
        <a href={aLink} target="_blank">
          {aLink}
        </a>
      )}
    </div>
  );
}

export default HeaderAndDesc;
