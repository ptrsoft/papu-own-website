import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  const handleNavClick = () => {
    setExpanded(false); // Close the Navbar when a link is clicked
  };

  return (
    <div className="w-100 d-block px-5 header-main">
      <Container fluid>
        <div className="header w-100 d-block py-2">
          <Row className="align-items-center">
            <Col lg={5} md={4} sm={8} xs={6}>
              <Navbar className="justify-content-center">
                <Nav onClick={handleNavClick}>
                  <Link
                    to="/"
                    className={
                      activePath === "/" ? "nav-link active" : "nav-link"
                    }
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={
                      activePath === "/about" ? "nav-link active" : "nav-link"
                    }
                  >
                    About
                  </Link>
                  <Link
                    to="/service/migration-modernization"
                    className={
                      activePath === "/service/migration-modernization" ? "nav-link active" : "nav-link"
                    }
                  >
                    Service
                  </Link>
                </Nav>
              </Navbar>
            </Col>
            <Col lg={2} md={4} sm={4} xs={6}>
              <Link
                to="/"
                className="logo w-100 d-flex justify-content-center align-items-center"
              >
                <img src={Logo} alt="I’m Papu Bhattacharya, DevOps Expert" />
                <span className="text">Papu</span>
                <span className="text show">Bhattacharya</span>
              </Link>
            </Col>
            <Col lg={5} md={4} sm={8} xs={6}>
              <Navbar className="justify-content-center">
                <Nav onClick={handleNavClick}>
                  <Link
                    to="/resume"
                    className={
                      activePath === "/resume" ? "nav-link active" : "nav-link"
                    }
                  >
                    Resume
                  </Link>
                  <Link
                    to="/project"
                    className={
                      activePath === "/project" ? "nav-link active" : "nav-link"
                    }
                  >
                    Project
                  </Link>
                  <Link
                    to="/contact"
                    className={
                      activePath === "/contact" ? "nav-link active" : "nav-link"
                    }
                  >
                    Contact
                  </Link>
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Header;
