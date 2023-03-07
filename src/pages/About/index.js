import React from "react";
import { useTranslation } from "react-i18next";
import AboutUsComponent from "../../components/AboutUsComponents/AboutUsComponent";
import ChefsLayout from "../../components/AboutUsComponents/ChefsLayout";
import Banner from "../../components/Banner";

const About = () => {
  const { t } = useTranslation();
  document.title = `${t("aboutUs")} | Pizza Paradiso`;

  return (
    <>
      <Banner backgroundImage={"aboutbg.jpg"} mainTxt={t("AboutUsHeading")} />
      <AboutUsComponent
        secondaryTxt={t("NutritionTaste")}
        mainTxt={t("QualityTasty")}
        descTxt={t("descTxt1")}
        aboutImage={"topVievPizza.jpg"}
        orderNum="order-first"
      />
      <AboutUsComponent
        secondaryTxt={t("FabulousJourney")}
        mainTxt={t("Philosophy")}
        descTxt={t("descTxt2")}
        aboutImage={"pizzaImg2.jpg"}
        orderNum="order-last"
      />
      <ChefsLayout />
    </>
  );
};

export default About;
