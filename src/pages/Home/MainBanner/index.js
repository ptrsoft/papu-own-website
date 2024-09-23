import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MainPapuSir from "../../../assets/img/main-papu-sir.png";
import HelloVector from "../../../assets/img/hello-vector.png";
import MainBannerHeadingVector from "../../../assets/img/main-banner-heading-vector.png";
import AnimateVector from "../../../assets/img/main-papu-sir-animate.png";

class MainBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Toggle 'scrolled' class after 100px of scrolling
    if (scrollPosition > 100) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  };

  render() {
    const { isScrolled } = this.state;
    return (
      <div className="main-banner-container d-block w-100 pt-3 px-md-5 px-2">
        <Container fluid>
          <div className="d-block w-100 text-center heading">
            <div
              className={`d-inline-block hello ${isScrolled ? "scrolled" : ""}`}
            >
              Hello!{" "}
              <span>
                <img src={HelloVector} alt="" />
              </span>
            </div>
            <h2 className={isScrolled ? "scrolled" : ""}>
              I’m <span>Papu Bhattacharya</span>, <br /> DevOps Expert
              <div className="heading-vector">
                <img src={MainBannerHeadingVector} alt="" />
              </div>
            </h2>
          </div>
          <div className="d-flex w-100 align-items-center contents">
            <div
              className={`d-inline-flex content-left ${
                isScrolled ? "scrolled" : ""
              }`}
            >
              <i className="fa-solid fa-quote-left"></i>
              <p>
                Hands-on DevOps Expert, 25 Years in DevSecOps Solutioning and
                Product Development.
              </p>
            </div>
            <div className="d-inline-flex justify-content-center content-center">
              <div className="image">
                <img src={MainPapuSir} alt="" />
              </div>
              <div className="banner-buttons">
                <Button className="active">
                  Portfolio <i className="fa-solid fa-arrow-right"></i>
                </Button>
                <Button>
                  Hire me <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </div>
              <div className={`animate ${isScrolled ? "scrolled" : ""}`}>
                <img src={AnimateVector} alt="" />
              </div>
            </div>
            <div
              className={`d-inline-flex content-right ${
                isScrolled ? "scrolled" : ""
              }`}
            >
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="years">25 Years</div>
              <div className="experince">Experience</div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default MainBanner;
