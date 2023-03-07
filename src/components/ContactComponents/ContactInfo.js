import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="background py-5">
      <Container>
        <Row>
          <Col md={12}>
            <h3
              className=" goldTxt text-capitalize"
              style={{ fontSize: "24px", color: "#a37e2c" }}
            >
              {t("OurLocation")}
            </h3>
            <h1
              className="text-white text-capitalize"
              style={{ fontSize: "40px" }}
            >
              {t("WhereFind")}
            </h1>
            <hr className="mb-3 text-white"></hr>
            <p className="text-white w-75 fs-5 lh-5">{t("ContactTxt")}</p>
          </Col>
          <Col md={12} className="text-white">
            <div className="fs-6 my-2">
              <HiMapPin className="fs-4" /> Proleterski Brigadi 49, Struga,
              North Macedonia{" "}
            </div>
            <div className="my-2">
              <HiEnvelope className="fs-4" />{" "}
              <a
                className="text-white text-decoration-none fs-6"
                href="mailto:booking@pizzaparadiso.com"
              >
                booking@pizzaparadiso.com
              </a>
            </div>
            <div className="my-2">
              <HiPhone className="fs-4" />{" "}
              <a
                className="text-white text-decoration-none fs-6"
                href="tel:077777777"
              >
                077 777 777
              </a>
            </div>
            <Button
              href="https://goo.gl/maps/ak3JLEa2z6EuxYfD6"
              className="my-4 specialBtn"
              target="_blank"
            >
              Take Me There
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInfo;
