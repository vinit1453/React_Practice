import React from "react";
import { useTranslation } from "react-i18next";

export default function internationalization() {
  const { t, i18n } = useTranslation("en");

  const handleChangeLanguage = (event) => {
    //console.log(" selected", event.target.value);

    i18n.changeLanguage(event.target.value, () => {
      console.log(t("welcome_Message"));
    });
  };
  return (
    <>
      <div className="">
        <span for="language" style={{ color: "#762020" }}>
          Choose a language:
        </span>
        <select
          name="language"
          id="lan"
          onChangeCapture={(e) => handleChangeLanguage(e)}
        >
          <option value="en" selected>
            English
          </option>
          <option value="tel">Telugu</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
      <div id="msg">
        <h2>Message</h2>
        <p>{t("Heloo")}</p>
        <h5>Here we place Message</h5>
        <p>{t("welcome_Message")}</p>
      </div>
    </>
  );
}
