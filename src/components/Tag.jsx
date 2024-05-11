import React from "react";
import "../styles/components/tag.css";
import { motion } from "framer-motion";

function Tag({ title = ["html"], ...props }) {
  return (
    <ul className="tag">
      {title.map((el, index) => (
        <motion.li
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" , delay : index * 0.2 }}
          key={index}
        >
          {el}
        </motion.li>
      ))}
    </ul>
  );
}

export default Tag;
