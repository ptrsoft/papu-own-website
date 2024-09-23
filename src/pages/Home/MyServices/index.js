import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Button } from "react-bootstrap";
import ServiceImage1 from "../../../assets/img/service-image1.png";
import ServiceImage2 from "../../../assets/img/service-image2.png";
import ServicesBgLeft from "../../../assets/img/services-bg-left.png";
import ServicesBgCenter from "../../../assets/img/services-bg-center.png";
import ServicesBgRight from "../../../assets/img/services-bg-right.png";
import SafeImage from "../../../assets/img/safe.png";
import SafeImageHover from "../../../assets/img/safe-hover.png";
import { Link } from "react-router-dom";

class MyServices extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    };
    return (
      <div className="services-container d-block w-100 p-5 mb-5" id="services">
        <div className="services-bg-left">
          <img src={ServicesBgLeft} alt="" />
        </div>
        <div className="services-bg-center">
          <img src={ServicesBgCenter} alt="" />
        </div>
        <div className="services-bg-right">
          <img src={ServicesBgRight} alt="" />
        </div>
        <Container fluid>
          <div className="d-flex w-100 pb-5 heading">
            <Row className="align-items-end">
              <Col lg={7}>
                <h2>
                  My <span>Services</span>
                </h2>
              </Col>
              <Col lg={5}>
                <p>
                  If you are looking for simple, cost effective and higly
                  reliable IT system that can supercharge your core business, I
                  could help you always.
                </p>
              </Col>
            </Row>
          </div>
          <Slider {...settings} className="mb-5">
            <div className="d-block w-100 services-box">
              <Link
                to="/service/migration-modernization"
                onClick={this.handleScrollToTop}
              >
                <img
                  src={SafeImage}
                  alt="Migration and Modernization"
                  className="safe-img"
                />
                <img
                  src={SafeImageHover}
                  alt="Migration and Modernization"
                  className="safe-img-hover"
                />

                <div className="d-block w-100 services-inner">
                  <div className="name">Migration and Modernization</div>
                  <div className="d-block image">
                    <img
                      src={ServiceImage1}
                      alt="Migration and Modernization"
                    />
                  </div>
                </div>
              </Link>
              <div className="button">
                <Link
                  to="/service/migration-modernization"
                  onClick={this.handleScrollToTop}
                >
                  <Button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="d-block w-100 services-box">
              <Link
                to="/service/migration-modernization"
                onClick={this.handleScrollToTop}
              >
                <img
                  src={SafeImage}
                  alt="Migration and Modernization"
                  className="safe-img"
                />
                <img
                  src={SafeImageHover}
                  alt="Migration and Modernization"
                  className="safe-img-hover"
                />

                <div className="d-block w-100 services-inner">
                  <div className="name">Cloud Automation</div>
                  <div className="d-block image">
                    <img
                      src={ServiceImage2}
                      alt="Cloud Automation"
                    />
                  </div>
                </div>
              </Link>
              <div className="button">
                <Link
                  to="/service/migration-modernization"
                  onClick={this.handleScrollToTop}
                >
                  <Button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="d-block w-100 services-box">
              <Link
                to="/service/migration-modernization"
                onClick={this.handleScrollToTop}
              >
                <img
                  src={SafeImage}
                  alt="Migration and Modernization"
                  className="safe-img"
                />
                <img
                  src={SafeImageHover}
                  alt="Migration and Modernization"
                  className="safe-img-hover"
                />

                <div className="d-block w-100 services-inner">
                  <div className="name">System Reliability Engineering</div>
                  <div className="d-block image">
                    <img
                      src={ServiceImage1}
                      alt="System Reliability Engineering"
                    />
                  </div>
                </div>
              </Link>
              <div className="button">
                <Link
                  to="/service/migration-modernization"
                  onClick={this.handleScrollToTop}
                >
                  <Button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </Link>
              </div>
            </div>
            
            
          </Slider>
        </Container>
      </div>
    );
  }
}

export default MyServices;
