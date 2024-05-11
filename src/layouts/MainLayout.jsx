import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";

function MainLayout() {
  
  const { t, i18n } = useTranslation("global");

  return (
    <div style={{ fontFamily: `${ i18n.language === "fa" ? "Dana" : "" }` }}>
      <Navigation items={t("menu", { returnObjects: true })} />
      <Outlet />
    </div>
  );
}

export default MainLayout;
