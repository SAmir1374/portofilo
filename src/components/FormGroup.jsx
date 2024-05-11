import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/components/formGroup.css";

function FormGroup({
  type = "text",
  label,
  className,
  icon,
  name,
  value,
  placeHolder,
  register,
}) {
  const { t, i18n } = useTranslation("global");

  return (
    <div className={`myFormGroup ltr ${className}`}>
      <input type={type} name={name} value={value} className={`${i18n.language === "fa" ? "inputRtl" : "inputLtr"}`} {...register} />
      <ul className={`${i18n.language === "fa" ? "rtl" : "ltr"}`}>
        <li>{icon}</li>
      </ul>
    </div>
  );
}

export default FormGroup;
