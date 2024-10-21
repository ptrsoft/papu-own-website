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
              I help people to achieve "More with less in cloud", i always<br /> provided simple but effective solutions.
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
              Papu has a unique skill set: On the one hand, he has enterprise experience and vision, that could shape your software architecture in a way you didn't even think of. On the other hand, he is a top hands-on developer. Highly recommended!
              Papu demonstrated an ability to see beyond originally intended architecture for this job to provide excellent feedback, analysis, relaying of his experience with various candidate technologies, and to suggest possibly better alternatives. He ended up being right about most of it :)
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
              Working with Papu, you get something very rare on freelancing: enterprise know-how, backported to your business.

His enterprise experience is very valuable.

He sees the “big picture”. We started the job docker oriented, and we ended up in high availability solutions with OpenShift.I wanted only a specific job, but he gave me the solutions for a full architecture of my business, microservices oriented. And I am not talking docker only, but advanced solutions in networking, storage, software automation etc.

And, not least, Papu is great human being, totally dedicated to the customer.
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
              Papu has proved to be an freelancing top-performer. Very skilled and very dedicated to implement my questions. His communication was even better. I asked work on some issues which were very hard, some others were the wrong way to solve the problem. Papu has worked very hard on the difficult issues and has given good feedback and advice where the questions were the wrong direction. The result has been very good. Would highly recommend to anyone else.
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
              I really enjoy working with Papu, mainly because he's got all the things right that I as a client find important: his responsiveness is always within a few hours at most, he's transparent, pro-active and doesn't settle for anything less than a very happy customer. Apart from that he's just a pleasant guy who knows how to do business: honest and reasonable. Way to go!
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
              Papu is the expert of Linux system. You will be surprised by how good he is and how efficient the team works. I will be recommending him to everyone that needs system service and reliability engineering. Great guy to work with.
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
              Papu is an amazing person, very skilled and knows exactly what he is doing. We will definitely re-hire him if our needs so require.
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Testimonials;
