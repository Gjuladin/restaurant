import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Banner from "../../components/Banner";
import Category from "./Category";
import MenuItem from "./MenuItem";

const Staff = () => {
  const { t } = useTranslation();
  document.title = `${t("staff")} | Pizza Paradiso`;
  return (
    <>
      <Banner backgroundImage={"homebg.jpg"} mainTxt="Staff Only" />
      <Container fluid>
        <div className="my-5">
          <Category />
        </div>
        <div className="my-5">
          <MenuItem />
        </div>
      </Container>
    </>
  );
};

export default Staff;
