import React, { useEffect } from "react";
import "../styles/components/simpleResume.css";
import Tag from "./Tag";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SimpleResume({
  title = "SKY GO Desktop ",
  tagTitle,
  imgSrc,
  data,
  href,
  tiket,
  tiketColor,
}) {
  useEffect(() => {}, [data]);

  return (
    <Link to={href} state={data} style={{ textDecoration: "none" }}>
      <div className="simpleResume">
        {tiket && (
          <motion.div
            className="tiket"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 style={{ backgroundColor: `${tiketColor}`, color: "#f2f2f2" }}>
              {tiket}
            </h3>
          </motion.div>
        )}
        <div className="bar">
          <h2>{title}</h2>
          <i></i>
        </div>
        <div className="main" style={{ backgroundImage: `url(${imgSrc})` }}>
          <div>
            <Tag title={tagTitle} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SimpleResume;
