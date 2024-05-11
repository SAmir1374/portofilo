import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Container } from "@mui/material";
import HeaderAndDesc from "../components/HeaderAndDesc";
import Carusel from "../components/Carusel";
import ListSkill from "../components/ListSkill";
import { useTranslation } from "react-i18next";
import Arrow from "../components/Arrow";
import "../styles/pages/skillSample.css";
import { Link, useLocation, useParams } from "react-router-dom";
import MenuIcon from "../components/icons/MenuIcon";

function SkillSample({
  imgSrc,
  projectTitle,
  projectTitleLabel,
  projectAbout,
  projectTechnical,
  items = [],
  ...props
}) {
  const { t, i18n } = useTranslation("global");
  const { id } = useParams();

  useEffect(() => {}, [i18n.language]);

  const handleArrow = (items = [], id) => {
    const helper = {};
    if (items.length === 1) {
      if (i18n.language === "fa") {
        helper.left = false;
        helper.right = false;
        helper.leftHref = `/skill/${+id}`;
      } else {
        helper.left = false;
        helper.right = false;
        helper.rightHref = `/skill/${+id}`;
      }
    } else {
      if (items.length === 2) {
        if (+id === +items[items.length - 1].id) {
          if (i18n.language === "fa") {
            helper.left = false;
            helper.right = true;
            helper.rightHref = `/skill/${+id - 1}`;
          } else {
            helper.left = true;
            helper.right = false;
            helper.leftHref = `/skill/${+id - 1}`;
          }
        } else {
          if (i18n.language === "fa") {
            helper.left = true;
            helper.right = false;
            helper.leftHref = `/skill/${+id + 1}`;
          } else {
            helper.left = false;
            helper.right = true;
            helper.rightHref = `/skill/${+id + 1}`;
          }
        }
      }

      if (items.length > 2) {
        if (+id === +items[items.length - 1].id) {
          if (i18n.language === "fa") {
            helper.left = false;
            helper.right = true;
            helper.rightHref = `/skill/${+id - 1}`;
          } else {
            helper.left = true;
            helper.right = false;
            helper.leftHref = `/skill/${+id - 1}`;
          }
        } else if (+id === 0) {
          if (i18n.language === "fa") {
            helper.left = true;
            helper.right = false;
            helper.leftHref = `/skill/${+id + 1}`;
          } else {
            helper.left = false;
            helper.right = true;
            helper.rightHref = `/skill/${+id + 1}`;
          }
        } else if (+id !== 0) {
          if (i18n.language === "fa") {
            helper.leftHref = `/skill/${+id + 1}`;
            helper.rightHref = `/skill/${+id - 1}`;
          } else {
            helper.leftHref = `/skill/${+id - 1}`;
            helper.rightHref = `/skill/${+id + 1}`;
          }
        }
      }
    }

    return helper;
  };

  return (
    <motion.div
      style={{ direction: `${i18n.language === "fa" ? "rtl" : "ltr"}` }}
    >
      <Arrow
        {...handleArrow(t("Skill.myProject", { returnObjects: true }), id)}
      />
      <Container className="skillSampleContainer">
        <header className="skillSimpleHeader">
          <div className="headerIconAndDescribe">
            <motion.span>
              <Link to={"/skill"}>
                <MenuIcon
                  style={{
                    cursor: "pointer",
                    stroke: "#aaaaaa",
                  }}
                />
              </Link>
            </motion.span>
            <HeaderAndDesc
              title={t(`Skill.myProject.${id}.title`, { returnObjects: true })}
              divider={false}
              desc={t(`Skill.myProject.${id}.projectTitleLabel`, {
                returnObjects: true,
              })}
            />
          </div>
          <Button
            variant="contained"
            sx={{
              fontFamily: `${i18n.language === "fa" ? "Dana" : ""}`,
              margin: "20px 0",
              padding: "12px 40px",
              opacity: "0.8",
            }}
          >
            <a
              style={{ color: "#f2f2f2", textDecoration: "none" }}
              target="_blank"
              href={t(`Skill.myProject.${id}.Demo`)}
            >
              {t("Skill.projectDemo")}
            </a>
          </Button>
        </header>
        <main className="skillSampleMain">
          <Carusel
            style={{ direction: `${i18n.language === "fa" ? "ltr" : "ltr"}` }}
            items={t(`Skill.myProject.${id}.img`, { returnObjects: true })}
          />
          <div className="">
            <HeaderAndDesc
              title={t("Skill.ProjectAbout")}
              divider
              desc={t(`Skill.myProject.${id}.aboutProject`, {
                returnObjects: true,
              })}
            />

            <HeaderAndDesc
              title={t("Skill.ProjectTechnical")}
              divider
              label={t(`Skill.myProject.${id}.technicalSheetLabel`, {
                returnObjects: true,
              })}
            />
            <ListSkill
              items={t(`Skill.myProject.${id}.technicalSheet`, {
                returnObjects: true,
              })}
            />
            <HeaderAndDesc
              title={t("Skill.gitHubTitle")}
              divider
              aLink={t(`Skill.myProject.${id}.gitHub`, {
                returnObjects: true,
              })}
            />
          </div>
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

export default SkillSample;
