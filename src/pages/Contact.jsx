import { Container } from "@mui/material";
import IconList from "../components/IconList";
import StepInputContact from "../components/StepInputContact";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Arrow from "../components/Arrow";
import "../styles/pages/contact.css";

function Contact() {
  const { t, i18n } = useTranslation("global");
  return (
    <motion.div
      // initial={{ x: i18n.language === "fa" ? "100%" : "-100%", opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      exit={{ x: i18n.language === "fa" ? "-100%" : "100%", opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ direction: `${i18n.language === "fa" ? "rtl" : "ltr"}` }}
    >
      <Container className="contactContainer">
        <Arrow
          left={i18n.language !== "fa"}
          right={i18n.language === "fa"}
          leftHref={`/skill`}
          rightHref="/skill"
        />
        <div className="contactTitle">
          <h3>{t("Contact.titlePage")}</h3>
          <p>{t("Contact.descPage")}</p>
        </div>

        <StepInputContact />

        <div className="contactFooterIcons">
          <h3>{t("Contact.footer.titleFooter", { returnObjects: true })}</h3>
          <p>{t("Contact.footer.descFooter", { returnObjects: true })}</p>
          <IconList
            items={[
              {
                icon: <FaLinkedinIn />,
                label: "Linkdin",
                href: "https://linkedin.com/in/seyedamirmuhammad-aghayan-8413881b5",
                backGroundColor: "rgb(2, 119, 181)",
              },
              {
                icon: <LuGithub />,
                label: "GitHub",
                href: "https://github.com/SAmir1374",
                backGroundColor: "rgb(79, 79, 79)",
              },
              {
                icon: <FaInstagram />,
                label: "Instagram",
                href: "https://www.instagram.com/s.amir.1374/",
                backGroundColor: "rgb(241, 151, 219)",
              },
            ]}
          />
        </div>
      </Container>
    </motion.div>
  );
}

export default Contact;
