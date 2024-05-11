import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/components/formGroup.css";

function MyTextArea({ name, label, className, icon , register }) {
  const { t, i18n } = useTranslation("global");
  return (
    <div className={`myFormGroup ltr ${className}`}>
      <textarea name={name} id="" cols="30" rows="10" className={`${i18n.language === "fa" ? "textareaRtl" : "textareaLtr"}`} {...register(name)}></textarea>
      <ul className={`${i18n.language === "fa" ? "rtl" : "ltr"}`}>
        <li>{icon}</li>
        {/* <li className="label change">{label}</li> */}
      </ul>
    </div>
  );
}

export default MyTextArea;
