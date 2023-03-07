import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUsComponent = ({
  aboutImage,
  descTxt,
  mainTxt,
  secondaryTxt,
  orderNum,
}) => {
  return (
    <div className="background py-5">
      <Container>
        <Row>
          <Col md={6} className={`d-flex flex-column float-end ${orderNum}`}>
            <h3
              className=" goldTxt text-capitalize"
              style={{ fontSize: "24px", color: "#a37e2c" }}
            >
              {secondaryTxt}
            </h3>
            <h1
              className="text-white text-capitalize"
              style={{ fontSize: "40px" }}
            >
              {mainTxt}
            </h1>
            <hr className="mb-3 text-white"></hr>
            <p className="text-white w-75 fs-5 lh-5">{descTxt}</p>
          </Col>
          <Col
            md={6}
            className={`d-flex ${
              orderNum === "order-first" && "justify-content-center"
            }`}
          >
            <img
              src={require(`../../assets/aboutImages/${aboutImage}`)}
              alt="img"
              style={{ width: "400px", height: "500px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsComponent;
