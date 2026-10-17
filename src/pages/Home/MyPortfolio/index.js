import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Modal, Button } from "react-bootstrap";
import ServicesBgLeft from "../../../assets/img/services-bg-left.png";
import ServicesBgCenter from "../../../assets/img/services-bg-center.png";
import ServicesBgRight from "../../../assets/img/services-bg-right.png";
import SafeImage from "../../../assets/img/safe.png";
import SafeImageHover from "../../../assets/img/safe-hover.png";

import RevSense from "../../../assets/img/case-studies/callsense.png";
import EconetAlarm from "../../../assets/img/case-studies/econet-alarm-management.png";
import PassiveNetwork from "../../../assets/img/case-studies/telco-noc-passive-network.png";
import RelianceJio from "../../../assets/img/case-studies/reliance-jio.png";
import Toyota from "../../../assets/img/case-studies/toyota.png";
import MedFusion from "../../../assets/img/case-studies/medfusion.png";
import IndianDefense from "../../../assets/img/case-studies/indian-defense-dr.png";
import IndianMeteorology from "../../../assets/img/case-studies/indian-meteorology.png";

const caseStudies = [
  { title: "RevSense — AI-Powered Revenue Acceleration Platform", img: RevSense },
  { title: "Econet Wireless — AI-Powered Alarm Management & NOC Intelligence", img: EconetAlarm },
  { title: "Passive Network Detection & Automated Revenue Recovery", img: PassiveNetwork },
  { title: "Reliance Jio — Hyper-Scale Real-Time Network Monitoring", img: RelianceJio },
  { title: "Toyota Motor — Microservices & Hybrid Cloud Transformation", img: Toyota },
  { title: "MedFusion Inc — End-to-End Cloud Resource Provisioning Automation", img: MedFusion },
  { title: "Indian Defense — Lightweight Script-Based Disaster Recovery", img: IndianDefense },
  { title: "Indian Meteorology Department — Intelligent Satellite Data Staging", img: IndianMeteorology },
];

class MyPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  setSelected = (entry) => {
    this.setState({ selected: entry });
  };

  render() {
    var settings = {
      // dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const { selected } = this.state;
    return (
      <div className="services-container d-block w-100 px-lg-5 px-md-3 px-2 py-5 mb-5" id="portfolio">
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
            <h2>
              My <span>Portfolios</span>
              <p>Selected AI case studies with measurable business impact</p>
            </h2>
          </div>
          <Slider {...settings} className="mb-5">
            {caseStudies.map((study, index) => (
              <div className="d-block w-100 services-box" key={index}>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setSelected(study);
                  }}
                >
                  <img
                    src={SafeImage}
                    alt={study.title}
                    className="safe-img"
                  />
                  <img
                    src={SafeImageHover}
                    alt={study.title}
                    className="safe-img-hover"
                  />

                  <div className="d-block w-100 services-inner">
                    <div className="name">{study.title}</div>
                    <div className="d-block image">
                      <img src={study.img} alt={study.title} />
                    </div>
                  </div>
                </a>
                <div className="button">
                  <a
                    href="#portfolio"
                    onClick={(e) => {
                      e.preventDefault();
                      this.setSelected(study);
                    }}
                  >
                    <Button>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
        <Modal
          show={selected !== null}
          onHide={() => this.setSelected(null)}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div>
            {selected && (
              <img
                src={selected.img}
                alt={selected.title}
                style={{ width: "100%" }}
              />
            )}
          </div>
          <Modal.Footer>
            <Button onClick={() => this.setSelected(null)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MyPortfolio;
