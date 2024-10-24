import React from "react";
import { Row, Col, Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import githubLogo from "../../assets/icons/github.svg";


const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="footer d-block w-100 py-md-5 py-4 px-lg-5 px-2">
      <Container fluid>
        <div className="d-flex align-items-center justify-content-between pb-md-5 pb-4 mb-4 lets-connect">
          <h2>Lets Connect there</h2>
          <Button onClick={() => navigate('/contact')}>
            Hire me <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </div>
        <div className="d-block w-100 pt-3 footer-bottom">
          <Row>
            <Col lg={5} md={12}>
              <Link
                to="/"
                className="logo w-100 d-flex justify-content-start align-items-center"
              >
                <img src={Logo} alt="I’m Papu Bhattacharya, DevOps Expert" />
                <span className="text">Papu</span>
                <span className="text show">Bhattacharya</span>
              </Link>
              <div className="d-block pt-4 about-text">
                I have extensive project experience of AWS, Kubernetes and Cloud Automation and DevOps and SRE.I help people to do "More with Less in cloud", simplify and streamline their cloud operations. My existing Cloud Automation works would significantly reduce the time for the production delivery of your applications.
              </div>
              {/* <div className="d-block w-100 pt-4 social-icons">
                <a href="#">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-square-whatsapp"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div> */}
            </Col>
            <Col lg={7} md={12}>
              <Row>
                <Col lg={3} md={12}>
                  <div className="d-block w-100 footer-link">
                    <h4>Navigation</h4>
                    <div className="d-block w-100 links">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                      {/* <Link to="#" className="nav-link">
                        About Us
                      </Link> */}
                      <a href="#services" className="nav-link">
                        Service
                      </a>
                      <a href="#blogs" className="nav-link">
                    Blogs
                      </a>
                      <a href="#portfolio" className="nav-link">
                      Portfolios
                      </a>
                      <Link to="https://github.com/ptrsoft" target="_blank" className="nav-link">
                        Github
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="d-block w-100 footer-link">
                    <h4>Contact</h4>
                    <div className="d-block w-100 links">
                      <a href="#" className="nav-link">
                        +91 99631 11687
                      </a>
                      <a href="#" className="nav-link">
                        papu.bhattacharya@ptrtechnology.com
                      </a>
                      <a href="#" className="nav-link">
                        papu.me
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg={5} md={12}>
                  {/* <div className="d-block w-100 information">
                    <h4>Get the latest information</h4>
                    <div className="d-flex w-100 align-items-center justify-content-start form">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                      />
                      <Button>
                        <i className="fa-solid fa-paper-plane"></i>
                      </Button>
                    </div>
                  </div> */}
                  <div className="d-block w-100 pt-4 social-icons">
                    <a href="https://www.facebook.com/papubhat" target="_blank">
                      <i className="fa-brands fa-square-facebook"></i>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/papubhattacharyapromodeagro/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/papubhattacharya/">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a target="_blank" href="https://x.com/papubhattachary">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
