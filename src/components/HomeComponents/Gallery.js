import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <div className="background py-5">
      <Container>
        <div className="text-center py-5">
          <h3
            className=" text-capitalize"
            style={{ fontSize: "24px", color: "#a37e2c" }}
          >
            {t("mostPopular")}
          </h3>
          <h1
            className="text-white text-capitalize"
            style={{ fontSize: "48px" }}
          >
            {t("weeklySale")}
          </h1>
          <hr className="mb-3 text-white"></hr>
        </div>
        <Row>
          <Col md={4}>
            <GalleryItem
              pizzaImg={"pizza1.jpg"}
              pizzaName={"Pizza #1"}
              pizzaPrice={"249.00 MKD"}
            />
          </Col>
          <Col md={4}>
            <GalleryItem
              pizzaImg={"pizza2.jpg"}
              pizzaName={"Pizza #2"}
              pizzaPrice={"249.00 MKD"}
            />
          </Col>
          <Col md={4}>
            <GalleryItem
              pizzaImg={"pizza3.jpg"}
              pizzaName={"Pizza #3"}
              pizzaPrice={"249.00 MKD"}
            />
          </Col>
          <Col md={4}>
            <GalleryItem
              pizzaImg={"pizza4.jpg"}
              pizzaName={"Pizza #4"}
              pizzaPrice={"249.00 MKD"}
            />
          </Col>
          <Col md={4}>
            <GalleryItem
              pizzaImg={"pizza5.jpg"}
              pizzaName={"Pizza #5"}
              pizzaPrice={"249.00 MKD"}
            />
          </Col>
          <Col md={4}>
            <GalleryItem
              pizzaImg={"pizza6.jpg"}
              pizzaName={"Pizza #6"}
              pizzaPrice={"249.00 MKD"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
