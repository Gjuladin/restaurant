import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import OppeningHours from "./OppeningHours";

import logo from "../assets/lightlogo.png";

//Icons
import { HiEnvelope, HiPhone } from "react-icons/hi2";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container fluid className="bg-dark py-5 text-white">
        <Container>
          <Row>
            <Col md={4}>
              <h4 className="text-center">{t("OppeningHours")}</h4>
              <OppeningHours />
            </Col>
            <Col
              md={8}
              className="d-flex justify-content-end align-items-center text-center"
            >
              <Row>
                <Col md={12}>
                  <img src={logo} width={150} height={150} />
                </Col>
                <Col md={12}>
                  <div className="fs-6 my-2">
                    {" "}
                    Proleterski Brigadi 49, Struga, North Macedonia{" "}
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
                  <div className="mt-2">
                    {" "}
                    <FaFacebook className="fs-4 mx-2" />
                    <FaTwitter className="fs-4 mx-2" />
                    <FaInstagram className="fs-4 mx-2" />
                    <FaPinterest className="fs-4 mx-2" />
                    <FaYoutube className="fs-4 mx-2" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Col md={12} className="pt-5">
          <hr></hr>
          <div className="text-center mt-5">
            &copy; Gjuladin Sherifoski {t("AllRights")}
          </div>
        </Col>
      </Container>
    </>
  );
};

export default Footer;
