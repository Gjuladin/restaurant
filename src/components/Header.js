import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logo from "../assets/lightlogo.png";
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
  const { t } = useTranslation();
  return (
    <Navbar className="background" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="me-5">
          <img src={logo} width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ms-5">
          <Nav className="me-auto my-0 fs-5">
            <Link to="/" className="text-white px-3 text-decoration-none ">
              {t("homepage")}
            </Link>
            <Link to="/about" className="text-white px-3 text-decoration-none">
              {t("aboutUs")}
            </Link>
            <Link to="/menu" className="text-white px-3 text-decoration-none">
              {t("menu")}
            </Link>
            <Link
              to="/contact"
              className="text-white px-3 text-decoration-none"
            >
              {t("contactUs")}
            </Link>
          </Nav>
          <LanguageDropdown />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
