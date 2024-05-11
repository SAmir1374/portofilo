import React, { useEffect } from "react";
import { Container } from "@mui/material";
import IntroduceAnimation from "../components/IntroduceAnimation";
import { ReactType } from "../components/TypeWritterAnimation";
import { useTranslation } from "react-i18next";
import { AnimatePresence, delay, motion } from "framer-motion";
import "../styles/pages/about.css";
import Arrow from "../components/Arrow";
import { aboutContainerVariants } from "../utils/AnimateVariants";

function About() {
  const { t, i18n } = useTranslation("global");

  useEffect(() => {}, [t("About.desc")]);

  return (
    <motion.div
      initial={{ x: i18n.language === "fa" ? "100%" : "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: i18n.language === "fa" ? "-100%" : "100%", opacity: 0 }}
      transition={{ duration : 0.5 }}
      style={{
        height: "100vh",
        direction: `${i18n.language === "fa" ? "rtl" : "ltr"}`,
        transition: "all 0.5 ease",
      }}
    >
      <Container sx={{ height: "100vh" }} className="aboutContainer">
        <Arrow
          left={i18n.language === "fa"}
          right={i18n.language !== "fa"}
          leftHref={`/skill`}
          rightHref="/skill"
        />

        <div className="mainAboutPage">
          <IntroduceAnimation
            name={`${t("About.myName")} ${t("About.myLastName")}`}
          />
          <ReactType className={"ReactType"}>{t("About.desc")}</ReactType>
        </div>
      </Container>
    </motion.div>
  );
}

export default About;
