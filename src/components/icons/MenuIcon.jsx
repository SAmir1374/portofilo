import * as React from "react";
import { motion } from "framer-motion";

const svgVarent = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 0.5 },
  },
};

const pathVarent = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const SVGComponent = (props) => (
  <motion.svg
    variants={svgVarent}
    initial="hidden"
    animate="visible"
    fill="transparent"
    width={60}
    height={50}
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 297 297"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g>
        <g>
          <motion.path
            variants={pathVarent}
            strokeWidth={8}
            d="M66.102,0H15.804C7.089,0,0,7.089,0,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298 c8.715,0,15.804-7.089,15.804-15.804V15.804C81.907,7.089,74.817,0,66.102,0z"
          />
          <motion.path
            strokeWidth={8}
            variants={pathVarent}
            d="M173.649,0h-50.298c-8.715,0-15.804,7.089-15.804,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298 c8.715,0,15.804-7.089,15.804-15.804V15.804C189.453,7.089,182.364,0,173.649,0z"
          />
          <motion.path
            strokeWidth={8}
            variants={pathVarent}
            d="M66.102,107.547H15.804C7.089,107.547,0,114.636,0,123.351v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298 c8.715,0,15.804-7.089,15.804-15.804v-50.298C81.907,114.636,74.817,107.547,66.102,107.547z"
          />
          <motion.path
            strokeWidth={8}
            variants={pathVarent}
            d="M173.649,107.547h-50.298c-8.715,0-15.804,7.089-15.804,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298 c8.715,0,15.804-7.089,15.804-15.804v-50.298C189.453,114.636,182.364,107.547,173.649,107.547z"
          />
          <motion.path
            strokeWidth={8}
            variants={pathVarent}
            d="M281.196,0h-50.298c-8.715,0-15.804,7.089-15.804,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298 c8.715,0,15.804-7.089,15.804-15.804V15.804C297,7.089,289.911,0,281.196,0z"
          />
          <motion.path
            strokeWidth={8}
            variants={pathVarent}
            d="M281.196,107.547h-50.298c-8.715,0-15.804,7.089-15.804,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298 c8.715,0,15.804-7.089,15.804-15.804v-50.298C297,114.636,289.911,107.547,281.196,107.547z"
          />
          <motion.path
            strokeWidth={8}
            variants={pathVarent}
            d="M66.102,215.093H15.804C7.089,215.093,0,222.183,0,230.898v50.298C0,289.911,7.089,297,15.804,297h50.298 c8.715,0,15.804-7.089,15.804-15.804v-50.298C81.907,222.183,74.817,215.093,66.102,215.093z"
          />
          <motion.path
            strokeWidth={8}
            variants={pathVarent}
            d="M173.649,215.093h-50.298c-8.715,0-15.804,7.089-15.804,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298 c8.715,0,15.804-7.089,15.804-15.804v-50.298C189.453,222.183,182.364,215.093,173.649,215.093z"
          />
          <motion.path
            strokeWidth={8}
            variants={pathVarent}
            d="M281.196,215.093h-50.298c-8.715,0-15.804,7.089-15.804,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298 c8.715,0,15.804-7.089,15.804-15.804v-50.298C297,222.183,289.911,215.093,281.196,215.093z"
          />
        </g>
      </g>
    </g>
  </motion.svg>
);
export default SVGComponent;
