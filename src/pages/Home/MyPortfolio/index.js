import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import PortfolioImage from "../../../assets/img/portfolio-image.png";
import SREFrameworkPortfolio from "../../../assets/img/SRE_FrameworkPortfolio.png";
import MicroservicesTransformationPortfolio from "../../../assets/img/Microservices_TransformationPortfolio.png";
import SaaSAutomationPortfolio from "../../../assets/img/SaaS_AutomationPortfolio.png";
import { Link } from "react-router-dom";




class MyPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var settings = {
      // dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="portfolio-container d-block w-100 p-lg-5 p-md-3 pb-4 mt-5 mb-5" id="portfolio">
        <Container fluid>
          <div className="d-flex w-100 pb-4 heading">
            <h2>
              My <span>Portfolios</span>
            </h2>
            <Button>See All</Button>
          </div>
          <Slider {...settings}>
          <div className="d-block w-100 portfolio-box">
              <div className="d-block w-100 image">
                <img src={SaaSAutomationPortfolio} alt="" />
              </div>
              <div className="name">
                <a href="#">SAAS Automation</a>
              </div>
              <div className="button">
              <Link to={'/portfolio/saas-automation'}>
                <Button><i className="fa-solid fa-arrow-right"></i></Button>
              </Link>
              </div>
            </div>


            <div className="d-block w-100 portfolio-box">
              <div className="d-block w-100 image">
                <img src={MicroservicesTransformationPortfolio} alt="" />
              </div>
              <div className="name">
                <a href="#">Microservices Transformation</a>
              </div>
              <div className="button">
               <Link to={'/portfolio/microservices-transformation'}> <Button><i className="fa-solid fa-arrow-right"></i></Button></Link>
              </div>
            </div>

          

            <div className="d-block w-100 portfolio-box">
              <div className="d-block w-100 image">
                <img src={SREFrameworkPortfolio} alt="" />
              </div>
              <div className="name">
                <a href="#"> SRE Framework Development</a>
              </div>
              <div className="button">
                <Link to={'/portfolio/sre-framework-development'}>
                <Button><i className="fa-solid fa-arrow-right"></i></Button>
                </Link>
              </div>
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default MyPortfolio;
