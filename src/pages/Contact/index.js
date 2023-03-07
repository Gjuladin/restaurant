import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ContactInfo from "../../components/ContactComponents/ContactInfo";
import Banner from "../../components/Banner";
import ContactForm from "../../components/ContactComponents/ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  document.title = `${t("contactUs")} | Pizza Paradiso`;

  return (
    <div className="background">
      <Banner backgroundImage={"contactbg.jpg"} mainTxt={t("ContactUs")} />
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6}>
            <ContactInfo />
          </Col>
          <Col md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.8009408799676!2d20.672948815651154!3d41.18250871663332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350e722dcfae937%3A0xeebf92779667b175!2sProleterski%20Brigadi%2049%2C%20Struga%206330!5e0!3m2!1sen!2smk!4v1674315453064!5m2!1sen!2smk"
              width="800"
              height="600"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;
