export const aboutContainerVariants = {
  init: {},
  animate: {},
  exit: {
    x: "-100vw",
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

// export const aboutSkillVariants = {
//   initial: {
//     x: i18n.language === "fa" ? "100%" : "-100%",
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//   },
//   exit: {
//     x: i18n.language === "fa" ? "-100%" : "100%",
//     opacity: 0,
//   },
// };
