import React, { Component } from "react";
import Slider from "react-slick";
import TestimonialsImage from "../../../assets/img/testimonials-image.jpg";
import TestimonialsIcon1 from "../../../assets/img/testimonials-heading-icon2.png";
import TestimonialsIcon2 from "../../../assets/img/testimonials-heading-icon1.png";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var settings = {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerPadding: "350px",
      className: "center",
      centerMode: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            centerPadding: "150px",
          },
        },
        {
          breakpoint: 767,
          settings: {
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 568,
          settings: {
            centerPadding: "50px",
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: "20px",
          },
        },
      ],
    };
    return (
      <div className="testimonials-container d-block w-100 py-5 mt-5">
        <div className="d-flex w-100 pb-5 heading">
          <div className="d-inline-flex flex-wrap heading-inner">
            <h2>
              Testimonials That <br /> Speak to <span>My Results</span>
            </h2>
            <p>
              <span className="right-top-icon">
                <img src={TestimonialsIcon1} alt="" />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
              <span className="left-bottom-icon">
                <img src={TestimonialsIcon2} alt="" />
              </span>
            </p>
          </div>
        </div>
        <Slider {...settings} className="mb-5">
          <div className="d-block w-100 px-2">
            <div className="d-block w-100 testimonial-box">
              <div className="profile">
                <div className="image">
                  <img src={TestimonialsImage} alt="" />
                </div>
                <div className="name">
                  <strong>Papu Bhattacharya</strong>
                  <span>DevOps Expert</span>
                </div>
              </div>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>5.0</span>
              </div>
              <div className="contents">
                consectetur adipiscing elit. Sed congue interdum ligula a
                dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
                orci elementum egestas lobortis.Sed lobortis orci elementum
                egestas lobortis.
              </div>
            </div>
          </div>
          <div className="d-block w-100 px-2">
            <div className="d-block w-100 testimonial-box">
              <div className="profile">
                <div className="image">
                  <img src={TestimonialsImage} alt="" />
                </div>
                <div className="name">
                  <strong>Papu Bhattacharya</strong>
                  <span>DevOps Expert</span>
                </div>
              </div>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>5.0</span>
              </div>
              <div className="contents">
                consectetur adipiscing elit. Sed congue interdum ligula a
                dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
                orci elementum egestas lobortis.Sed lobortis orci elementum
                egestas lobortis.
              </div>
            </div>
          </div>
          <div className="d-block w-100 px-2">
            <div className="d-block w-100 testimonial-box">
              <div className="profile">
                <div className="image">
                  <img src={TestimonialsImage} alt="" />
                </div>
                <div className="name">
                  <strong>Papu Bhattacharya</strong>
                  <span>DevOps Expert</span>
                </div>
              </div>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>5.0</span>
              </div>
              <div className="contents">
                consectetur adipiscing elit. Sed congue interdum ligula a
                dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
                orci elementum egestas lobortis.Sed lobortis orci elementum
                egestas lobortis.
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Testimonials;
