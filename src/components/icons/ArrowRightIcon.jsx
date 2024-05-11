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

function ArrowRightIcon(props) {
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
        d="M4.48047 12.48H19.4705"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={pathVarent}
        d="M13.4834 6.48804L19.5204 12.5L13.4834 18.512"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
export default ArrowRightIcon;
