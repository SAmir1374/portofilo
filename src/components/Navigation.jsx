import React from "react";
import "../styles/components/navigation.css";
import { Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Navigation({
  items = [
    { name: "About", href: "/" },
    { name: "Skill", href: "/skill" },
    { name: "Contact", href: "/contact" },
  ],
}) {
  const { t, i18n } = useTranslation("global");

  const handleChange = (event) => {
    if (i18n.language === "auto" || i18n.language === "en") {
      i18n.changeLanguage("fa");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <div className="navigation" style={{direction: `${i18n.language === "fa" ? "rtl" : "ltr"}`}}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px",
          paddingTop: "20px",
        }}
      >
        <div className="navigationList">
          <ul>
            {items.map((el, index) => (
              <li key={index}>
                <Link to={el.href}>{el.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button onClick={handleChange} variant="outlined">
            {i18n.language === "auto" || i18n.language === "en" ? "فا" : "En"}
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Navigation;
