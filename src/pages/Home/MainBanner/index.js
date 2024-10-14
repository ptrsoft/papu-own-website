import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MainPapuSir from "../../../assets/img/main-papu-sir.png";
import HelloVector from "../../../assets/img/hello-vector.png";
import MainBannerHeadingVector from "../../../assets/img/main-banner-heading-vector.png";
import AnimateVector from "../../../assets/img/main-papu-sir-animate.png";
import { Link } from "react-router-dom";

class MainBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      isHovered: false, // Track hover state

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
  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isScrolled , isHovered} = this.state;

    // Define inline styles based on hover state
    const imageStyle = {
      // transition: "transform 0.3s ease",
      // transform: isHovered ? "scale(1.05)" : "scale(1)",
    };

    const animateStyle = {
      opacity: isHovered ? 1 : 0,
      transition: "opacity 0.3s ease-in-out",
    };
    return (
      <div className="main-banner-container d-block w-100 pt-3 px-md-5 px-2">
        <Container fluid>
          <div className="d-block w-100 text-center heading">
            <div
              className={`d-inline-block hello ${isHovered ? "scrolled" : ""}`}
            >
              Hello!{" "}
              <span>
                <img src={HelloVector} alt="" />
              </span>
            </div>
            <h2 className={isHovered ? "scrolled" : ""}>
              I’m <span>Papu Bhattacharya</span>, <br /> DevOps Expert
              <div className="heading-vector">
                <img src={MainBannerHeadingVector} alt="" />
              </div>
            </h2>
          </div>
          <div className="d-flex w-100 align-items-center contents">
            <div
              className={`d-inline-flex content-left ${
                isHovered ? "scrolled" : ""
              }`}
            >
              <i className="fa-solid fa-quote-left"></i>
              <p>
                Hands-on DevOps Expert, 25 Years in DevSecOps Solutioning and
                Product Development.
              </p>
            </div>
            <div className="d-inline-flex justify-content-center content-center" >
              <div className="image" onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave} >
              <img src={MainPapuSir} alt="Papu Bhattacharya" style={imageStyle} />

              </div>
              <div className="banner-buttons">
                <a href="#portfolio">
                <Button className="active">
                  Portfolio <i className="fa-solid fa-arrow-right"></i>
                </Button>
                </a>
                <Link to={'/contact'}>
                <Button >
                  Hire me <i className="fa-solid fa-arrow-right"></i>
                </Button>
                </Link>
              </div>
              <div className={`animate ${isHovered ? "scrolled" : ""}`}>
                <img src={AnimateVector} alt="" />
              </div>
            </div>
            <div
              className={`d-inline-flex content-right ${
                isHovered ? "scrolled" : ""
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
