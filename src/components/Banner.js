import React from "react";
import { Container } from "react-bootstrap";

const Banner = ({ backgroundImage, secondaryTxt, mainTxt }) => {
  return (
    <>
      <Container fluid className="g-0 position-relative text-center">
        <img
          src={require(`../assets/images/backgrounds/${backgroundImage}`)}
          alt="banner"
          style={{
            objectFit: "cover",
            width: "100%",
            filter: " brightness(25%)",
            height: "400px",
          }}
        />
        <div className="position-absolute top-50 start-50 translate-middle ">
          <h3 className="secondaryTxt">{secondaryTxt}</h3>
          <h1 className="mainTxt goldTxt">{mainTxt}</h1>
        </div>
      </Container>
    </>
  );
};

export default Banner;
