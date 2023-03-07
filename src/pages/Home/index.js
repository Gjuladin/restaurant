import React from "react";
import { useTranslation } from "react-i18next";
import AboutUsComponent from "../../components/AboutUsComponents/AboutUsComponent";
import Banner from "../../components/Banner";
import video from "../../assets/video.mp4";
import ReactPlayer from "react-player";
import Gallery from "../../components/HomeComponents/Gallery";

const Home = () => {
  const { t } = useTranslation();
  document.title = `${t("homepage")} | Pizza Paradiso`;
  return (
    <>
      <Banner
        backgroundImage={"homebg.jpg"}
        mainTxt="Pizza Paradiso"
        secondaryTxt={t("WelcomeTo")}
      />
      <div className="background d-flex justify-content-center py-5">
        <ReactPlayer url={video} width="60%" height="100%" controls />
      </div>
      <AboutUsComponent
        secondaryTxt={t("NutritionTaste")}
        mainTxt={t("QualityTasty")}
        descTxt={t("descTxt1")}
        aboutImage={"topVievPizza.jpg"}
        orderNum="order-first"
      />
      <Gallery />
    </>
  );
};

export default Home;
