import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/components/shadowEffect.css";

function ShadowEffect({ title = "Welcome" }) {
  const [words, setWords] = useState(title.split(""));

  return (
    <motion.div
      className="shadoWrapper"
      initial={{
        height: "100vh",
        width: "100vw",
        opacity: 1,
        zIndex: 1111,
        position: "fixed",
        top: 0,
        left: 0,
      }}
      animate={{ opacity: 0 , zIndex : -1111 }}
      transition={{delay : 2 , duration: 4 , zIndex : {delay : 5} }}
    >
      {words.map((el, index) => (
        <span key={el} style={{ margin: "3px", marginRight: "5px", animationDelay: `${1 + index / 10}s` }}>
          {el}
        </span>
      ))}
    </motion.div>
  );
}

export default ShadowEffect;
