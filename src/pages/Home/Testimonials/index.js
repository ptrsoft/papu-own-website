import React, { Component } from "react";
import Slider from "react-slick";
import TestimonialsImage from "../../../assets/img/testimonialImage.png";
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
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      centerPadding: "350px",
      className: "center",
      centerMode: false,
      infinite: false,
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

      <div className="testimonials-container  d-block w-100 px-lg-5 px-md-3 px-2 py-5 mt-5">
        <div className="d-flex w-100 pb-5 heading">
          <div className="d-inline-flex flex-wrap heading-inner">
            <h2>
              Testimonials That <br /> Speak to <span>My Results</span>
            </h2>
            <p>
              <span className="right-top-icon">
                <img src={TestimonialsIcon1} alt="" />
              </span>
              I help people turn complex business problems into production-grade AI solutions,<br /> always delivering simple but effective outcomes with measurable impact.
              <span className="left-bottom-icon">
                <img src={TestimonialsIcon2} alt="" />
              </span>
            </p>
          </div>
        </div>
        <Slider {...settings} className="mb-3">

          <div className="d-block w-100 px-2">
            <div className="d-block w-100 testimonial-box">
              <div className="profile">
                <div className="image">
                  <img src={TestimonialsImage} alt="" />
                </div>
                <div className="name">
                  <strong>Paul Hamstead - UK</strong>
                  <span>Upwork Customer</span>
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
              Papu has a unique skill set: on the one hand, he has the enterprise experience and vision to shape an AI solution in a way you didn't even think of. On the other hand, he is a top hands-on engineer. Highly recommended!
              He consistently saw beyond the originally intended approach, provided excellent analysis of candidate technologies, and suggested better alternatives that delivered real business impact. He ended up being right about most of it :)
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
                  <strong>Iulian - Romania</strong>
                  <span>Upwork Customer</span>
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
              Working with Papu, you get something very rare: enterprise know-how, applied directly to your business problem.

His experience turning ideas into production-grade AI is very valuable.

He sees the "big picture". We started with a narrow request and ended up with a full AI solution architecture for my business. And I am not talking about a single model only, but end-to-end solutions across data pipelines, evaluation, and reliable production delivery.

And, not least, Papu is a great human being, totally dedicated to the customer.
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
                  <strong>Ray Davis - US</strong>
                  <span> Upwork Customer</span>
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
              Papu has proved to be a top performer. Very skilled and very dedicated to solving the real problem. His communication was even better. Some of the challenges were genuinely hard, and some of my initial ideas were the wrong way to approach them. Papu worked hard on the difficult parts and gave honest feedback when my direction needed rethinking. The result was production-grade and delivered clear business value. Would highly recommend to anyone else.
              </div>
            </div>
          </div>
          
        </Slider>

        <Slider {...settings} className="mb-5">
        
          <div className="d-block w-100 px-2">
            <div className="d-block w-100 testimonial-box">
              <div className="profile">
                <div className="image">
                  <img src={TestimonialsImage} alt="" />
                </div>
                <div className="name">
                  <strong>Steve - US</strong>
                  <span> Upwork customer</span>
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
              I really enjoy working with Papu, mainly because he's got all the things right that I as a client find important: his responsiveness is always within a few hours at most, he's transparent, proactive and doesn't settle for anything less than a very happy customer. On top of that he knows how to translate a business problem into a working AI solution: honest, reasonable, and focused on impact. Way to go!
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
                  <strong>Lian Chen - Indonesia</strong>
                  <span>Datacenter Manager</span>
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
              Papu is an expert at building reliable, production-grade systems. You will be surprised by how good he is and how efficiently the team works. I will be recommending him to everyone that needs AI solutions and reliability engineering. Great guy to work with.
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
                  <strong>Alexander Gomej - UK</strong>
                  <span> Upwork Customer</span>
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
              Papu is an amazing person, very skilled and knows exactly what he is doing when it comes to delivering AI solutions with real business impact. We will definitely re-hire him if our needs so require.
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Testimonials;
