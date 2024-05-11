import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import SimpleResume from "../components/SimpleResume";
import img from "../components/imgs/images.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tag from "../components/Tag";
import Arrow from "../components/Arrow";
import "../styles/pages/skillPage.css";

function Skill() {
  const { t, i18n } = useTranslation("global");

  useEffect(() => {}, [i18n.language]);

  return (
    <motion.div
      // initial={{ x: i18n.language === "fa" ? "100%" : "-100%", opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // exit={{ x: i18n.language === "fa" ? "-100%" : "100%", opacity: 0 }}
      // transition={{ duration : 0.5 }}
      style={{ direction: `${i18n.language === "fa" ? "rtl" : "ltr"}` }}
    >
      <Container fixed className="skillPageContainer">
        <Arrow
          leftHref={`${i18n.language === "fa" ? "/contact" : "/"}`}
          rightHref={`${i18n.language === "fa" ? "/" : "/contact"}`}
        />

        <div className="wrapper">
          <header>
            <h1 className="SkillTitle">{t("Skill.titlePage")}</h1>
            <p className="wrapperDescribe">{t("Skill.descPage")}</p>
            <div className="wrapperTag">
              <Tag title={t("Skill.mySkills", { returnObjects: true })} />
            </div>
            <div className="wrapperSmall">
              <small>{t("Skill.ProjectLabel")}</small>
            </div>
          </header>
        </div>
        <main>
          <Box>
            <Grid container sx={{ justifyContent: "center", gap: "30px" }}>
              {t("Skill.myProject", { returnObjects: true }).map((e, index) => (
                <Grid key={index} container item xs={12} md={5}>
                  <SimpleResume
                    title={e.title}
                    imgSrc={e.img[0]}
                    data={t("Skill.myProject", { returnObjects: true })}
                    href={e.href}
                    tagTitle={e.technicalSheet}
                    tiket={e.tiket}
                    tiketColor={e.tiketColor}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </main>
        <div className="skillFooter">
          <h2>{t("Skill.footer.title")}</h2>
          <p
            dangerouslySetInnerHTML={{ __html: t("Skill.footer.desc") }}
            style={{ whiteSpace: "pre-wrap" }}
          ></p>
        </div>
      </Container>
    </motion.div>
  );
}

export default Skill;
