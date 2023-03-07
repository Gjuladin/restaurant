import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Chef from "./Chef";

const ChefsLayout = () => {
  const { t } = useTranslation();
  return (
    <div className="background py-5">
      <Container>
        <div className="text-center py-5">
          <h3
            className=" text-capitalize"
            style={{ fontSize: "24px", color: "#a37e2c" }}
          >
            {t("AboutTeam")}
          </h3>
          <h1
            className="text-white text-capitalize"
            style={{ fontSize: "48px" }}
          >
            {t("MeetChefs")}
          </h1>
          <hr className="mb-3 text-white"></hr>
        </div>
        <Row>
          <Col md={4}>
            <Chef chefImage={"femaleChef.jpg"} chefName="Janette Doe" />
          </Col>
          <Col md={4}>
            <Chef chefImage={"baldChef.jpg"} chefName="John Doe" />
          </Col>
          <Col md={4}>
            <Chef chefImage={"highChef.jpg"} chefName="Johnathan Doe" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChefsLayout;
