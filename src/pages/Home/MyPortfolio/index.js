import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import PortfolioImage from "../../../assets/img/portfolio-image.png";
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
      slidesToShow: 2,
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
              Lets have a look at <br />
              my <span>Portfolio</span>
            </h2>
            <Button>See All</Button>
          </div>
          <Slider {...settings}>
            
            <div className="d-block w-100 portfolio-box">
              <div className="d-block w-100 image">
                <img src={PortfolioImage} alt="" />
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
                <img src={PortfolioImage} alt="" />
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
                <img src={PortfolioImage} alt="" />
              </div>
              <div className="name">
                <a href="#">Microservices Transformation</a>
              </div>
              <div className="button">
                <Button><i className="fa-solid fa-arrow-right"></i></Button>
              </div>
            </div>
            <div className="d-block w-100 portfolio-box">
              <div className="d-block w-100 image">
                <img src={PortfolioImage} alt="" />
              </div>
              <div className="name">
                <a href="#">SAAS Automation</a>
              </div>
              <div className="button">
                <Button><i className="fa-solid fa-arrow-right"></i></Button>
              </div>
            </div>


          </Slider>
        </Container>
      </div>
    );
  }
}

export default MyPortfolio;
