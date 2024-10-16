import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import githubLogo from "../../assets/icons/github.svg";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  const handleNavClick = () => {
    setExpanded(false); // Close the Navbar when a link is clicked
  };

  return (
    <div className="w-100 d-block px-lg-5 px-md-2 header-main">
      <Container fluid>
        <div className="header w-100 py-2">
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
                 
                  <a href="#services"
                    // to="/service/migration-modernization"
                    className={
                      activePath === "/service/migration-modernization" ||
                      activePath ===  "/service/cloud-automation" ||
                      activePath ===  "/service/system-reliability-engineering" ||
                      activePath ===  "/service/cost-management-and-optimization" ||
                      activePath ===  "/service/containerization-serverless-orchestration" ||
                      activePath ===  "/service/security-and-compliance" 
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Services
                  </a>
                  <a href="#portfolio"
                    // to="/service/migration-modernization"
                    className={
                      activePath ===  "/portfolio" 
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                   Portfolios
                  </a>

                  
                  
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
                  target="_blank"
                    to="https://github.com/ptrsoft"
                    className={
                      activePath === "/resume" ? "nav-link active" : "nav-link"
                    }
                  >
                    <span style={{display:'flex' , justifyContent:'center' , alignItems:'center' , gap:'10px'}}>
                   Github 
                   <img src={githubLogo} alt="" />
                    </span>
                  </Link>
                  <a
                  href="#blogs"
                    // to="/project"
                    className={
                      activePath === "/blogs" ? "nav-link active" : "nav-link"
                    }
                  >
                 Blogs
                  </a>
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
        <div className="small-screen-header w-100 py-2 px-3">
          <Row className="align-items-center">
            <Col md={8} sm={8} xs={8}>
              <Link to="/" className="logo w-100 d-flex">
                <img src={Logo} alt="I’m Papu Bhattacharya, DevOps Expert" />
              </Link>
            </Col>
            <Col md={4} sm={4} xs={4}>
              <Navbar expand="lg" className="justify-content-end">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
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
                        activePath === "/service/migration-modernization"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Services
                    </Link>
                    <Link
                      to="/resume"
                      className={
                        activePath === "/resume"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Resume
                    </Link>
                    <Link
                      to="/project"
                      className={
                        activePath === "/project"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Project
                    </Link>
                    <Link
                      to="/contact"
                      className={
                        activePath === "/contact"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Contact
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Header;