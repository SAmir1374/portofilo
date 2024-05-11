import { SVGProps } from "react";
import { motion } from "framer-motion";

const svgVarent = {
  hidden: {
    scale: 2,
  },
  visible: {
    rotate: 0,
    transition: { duration: 0.5 },
  },
};

const pathVarent = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    pathLength: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

function ArrowLeftIcon(props) {
  return (
    <motion.svg
      variants={svgVarent}
      initial="hidden"
      animate="visible"
      exit="exit"
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        variants={pathVarent}
        d="M4.00977 12.4805H18.9998"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={pathVarent}
        d="M10.013 6.48828L4.00195 12.5003L10.013 18.5123"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
export default ArrowLeftIcon;
