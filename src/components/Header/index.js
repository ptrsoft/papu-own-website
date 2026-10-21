import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import githubLogo from "../../assets/icons/github.svg";

const GITHUB_URL = "https://github.com/clouderp-code";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activePath = location.pathname;

  const handleNavClick = () => {
    setExpanded(false); // Close the Navbar when a link is clicked
  };

  // Scroll to a home-page section. These sections only exist on "/", so when
  // the user is on another route (e.g. /contact) we navigate home first and
  // pass the target section as state; Home reads it and scrolls on mount.
  const goToSection = (id) => (e) => {
    e.preventDefault();
    setExpanded(false);
    if (activePath === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
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
                 
                  <a href="/#services"
                    onClick={goToSection("services")}
                    className="nav-link"
                  >
                    Services
                  </a>
                  <a href="/#portfolio"
                    onClick={goToSection("portfolio")}
                    className="nav-link"
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
                <img src={Logo} alt="Papu Bhattacharya — Forward Deployed Engineer (FDE)" />
                <span className="text">Papu</span>
                <span className="text show">Bhattacharya</span>
              </Link>
            </Col>
            <Col lg={5} md={4} sm={8} xs={6}>
              <Navbar className="justify-content-center">
                <Nav onClick={handleNavClick}>
                  <a
                  href="/#blogs"
                    onClick={goToSection("blogs")}
                    className="nav-link"
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
                  <Link
                  target="_blank"
                    to={GITHUB_URL}
                    className="nav-link"
                  >
                    <span style={{display:'flex' , justifyContent:'center' , alignItems:'center' , gap:'10px'}}>
                   Github 
                   <img src={githubLogo} alt="" />
                    </span>
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
                <img src={Logo} alt="Papu Bhattacharya — Forward Deployed Engineer (FDE)" />
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
                    <a
                      href="/#services"
                      onClick={goToSection("services")}
                      className="nav-link"
                    >
                      Services
                    </a>
                    <a
                      href="/#portfolio"
                      onClick={goToSection("portfolio")}
                      className="nav-link"
                    >
                      Portfolios
                    </a>
                    <a
                      href="/#blogs"
                      onClick={goToSection("blogs")}
                      className="nav-link"
                    >
                      Blogs
                    </a>
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
                    <Link
                      to={GITHUB_URL}
                      target="_blank"
                      className="nav-link"
                    >
                      Github
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