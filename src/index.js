import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import global_en from "./translations/en/global.json";
import global_fa from "./translations/fa/global.json";
import App from "./App";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "auto",
  fallbackLng: "en",
  resources: {
    en: {
      global: global_en,
    },
    fa: {
      global: global_fa,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter basename="/portofilo" >
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
