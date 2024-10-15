import React, { Component, useState } from "react";
import Slider from "react-slick";
import { Container,Modal, Row, Col, Button } from "react-bootstrap";
import ServiceImage1 from "../../../assets/img/service-image1.png";
import ServiceImage2 from "../../../assets/img/service-image2.png";
import ServicesBgLeft from "../../../assets/img/services-bg-left.png";
import ServicesBgCenter from "../../../assets/img/services-bg-center.png";
import ServicesBgRight from "../../../assets/img/services-bg-right.png";
import SafeImage from "../../../assets/img/safe.png";
import SafeImageHover from "../../../assets/img/safe-hover.png";
import { Link } from "react-router-dom";



import MigrationAndModernization from "../../../assets/img/Migration_Modernization.png" 
import CloudAutiomation from "../../../assets/img/Cloud_Automation.png" 
import SRE from "../../../assets/img/Cloud_SRE (1).png" 
import CostOptimization from "../../../assets/img/cost optimization.jpg" 
import Serverless from "../../../assets/img/serverless.jpg" 
import securityComplianceManagement from "../../../assets/img/security-compliance-management.jpg" 


class MigrationAndModernizationModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
     <div>
     <div className="main-container d-block w-100 px-lg-5 px-md-3 px-2">
        <Container fluid>
          <div className="d-block w-100 text-start pb-4 pt-4 main-heading">
            Microservices <span>Transformation in Cloud</span>
          </div>
          {/* <div className="d-block w-100 text-center pb-5 service-banner"> */}
            {/* <img src={ServiceImage} alt="" /> */}
          {/* </div> */}
          <div className="d-block w-100 service-contents">
           
            <div className="d-block w-100 mb-4 content">
            <p>Whether you're aiming to streamline your applications, or modernize your IT architecture, I offer tailored solutions that align with your goals.</p>
             
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">key services includes:
              </h4>
            <ul>
              <li>Containerization and Serverless Transformation</li>
              <li>Monolith to Microservices Transformation
              </li>
              <li>Modern ultrasmart Cloudnative App development
              </li>
              <li>Data Lifecycle Management
              </li>
              <li>IOT and Edge Computing
              </li>
            </ul>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Accelerators</h4>
              <p>Please look at my Opensource Projects
              </p>
           <ol>
            <li>Appblocks technology that reduce any cloudnative enterprise product development or transformation effort by 60% <br /> (Link to  <a target="_blank" href="https://github.com/ptrsoft#appblocks-framework">https://github.com/ptrsoft#appblocks-framework</a>  )</li>
            <li> A cloudnative Automation framework that reduce Opex by 50% <br />
            (Link to <a target="_blank" href="https://github.com/ptrsoft#automation-framework"> https://github.com/ptrsoft#automation-framework</a>)</li>
           </ol>
           <p>Ready to transform your IT systems? Let’s connect(link) and discuss how I can help your business thrive.</p>
            </div>
          
            
          </div>
        </Container>
        {/* <AwsomeProject /> */}
      </div>
     </div>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class CloudAutomationModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
     <div>
     <div className="main-container d-block w-100 px-lg-5 px-md-3 px-2">
        <Container fluid>
          <div className="d-block w-100 text-start pb-4 pt-4 main-heading">
          Cloud <span>Automation</span>
          </div>
          {/* <div className="d-block w-100 text-center pb-5 service-banner"> */}
            {/* <img src={ServiceImage} alt="" /> */}
          {/* </div> */}
          <div className="d-block w-100 service-contents">
           
            <div className="d-block w-100 mb-4 content">
<p>I offer customized solutions to automate your cloud environment, reducing manual interventions, improving efficiency, and enabling seamless scalability.</p>             
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">key services includes:
              </h4>
            <ul>
             <li>Infrastructure as Code (IaC)
             </li>
             <li>CI/CD pipelines
             </li>
             <li>Automated Monitoring
             </li>
            </ul>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Accelerators</h4>
           <ul>
            <li> A cloudnative Automation framework that reduce Opex by 50% <br />
            (Link to <a target="_blank" href="https://github.com/ptrsoft#automation-framework"> https://github.com/ptrsoft#automation-framework)</a></li>
            <li> A SRE framework that reduce operational dashboarding and alerting efforts by Autodiscovery of Infrastructure and Services and Autoprovisioning of Dashboards & Alerts <br /> 
            (Link to <a target="_blank" href="https://github.com/ptrsoft#automation-framework">https://github.com/ptrsoft#automation-framework</a> )</li>
            <li> A Serverless UI deployment framework that deploy Web and Mobility Applications in One Go with 90% Reduced Capex. <br />(Link to <a target="_blank" href="https://github.com/ptrsoft#automation-framework">https://github.com/ptrsoft#automation-framework</a>)</li>
           </ul>
           <p>Ready to take your cloud infrastructure to the next level? Let’s connect and discuss how I can transform your cloud operations.</p>
            </div>
          
          </div>
        </Container>
        {/* <AwsomeProject /> */}
      </div>
     </div>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class SREModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
     <div>
     <div className="main-container d-block w-100 px-lg-5 px-md-3 px-2">
        <Container fluid>
          <div className="d-block w-100 text-start pb-4 pt-4 main-heading">
          System Reliability <span>Engineering</span> 
          </div>
          {/* <div className="d-block w-100 text-center pb-5 service-banner"> */}
            {/* <img src={ServiceImage} alt="" /> */}
          {/* </div> */}
          <div className="d-block w-100 service-contents">
           
            <div className="d-block w-100 mb-4 content">
              <p>My expertise focuses on improving system availability, performance,resilience, and reliability through proactive monitoring, automation.</p>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">key services includes:
              </h4>
            <ul>
            <li>Infrastructure Monitoring
            </li>
            <li>Container and Serverless Monitoring
            </li>
            <li>ML-Ops
            </li>
            </ul>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Accelerators</h4>
           <ul>
            <li> A mechanism for auto-discovery of distributed microservices and auto enablement of their operation dashboard and alerting systems that reduce operation management effort 70%.</li>
            <li>Extendible SRE framework based on small plugin based golang CLI tooling that increased productivty by 50%.
            </li>

           </ul>
           <p>From infrastructure automation and monitoring to root cause analysis and optimization, I provide end-to-end solutions tailored to your business needs, keeping your systems running smoothly, even in high-demand scenarios.</p>
           <p>Ready to improve your system’s reliability and scalability? Let’s connect and discuss how I can help ensure your systems are always running at their best.</p>
            </div>
          
          </div>
        </Container>
        {/* <AwsomeProject /> */}
      </div>
     </div>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class MyServices extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false, cloudModalShow: false , SREModalShow: false};

  }

  setModalShow = (show) => {
    this.setState({ modalShow: show });
  }; 
   setCloudModalShow = (show) => {
    this.setState({ cloudModalShow: show });
  };

  setSREModalShow = (show) => {
    this.setState({ SREModalShow: show });
  };


  handleScrollToTop = () => {
    window.scrollTo(0, 0);
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
    return (
      <div className="services-container d-block w-100 px-lg-5 px-md-3 px-2 py-5 mb-5" id="services">
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
                // to="/service/migration-modernization"
                onClick={() => this.setModalShow(true)}
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
                      src={MigrationAndModernization}
                      // src={MigrationAndModernization}
                      alt="Migration and Modernization"
                    />
                  </div>
                </div>
              </Link>
              <div className="button">
                <Link
                  // to="/service/migration-modernization"
                  // onClick={this.handleScrollToTop}
                  onClick={() => this.setModalShow(true)}
                >
                  <Button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="d-block w-100 services-box">
              <Link
                // to="/service/cloud-automation"
                // onClick={this.handleScrollToTop}
                onClick={this.setCloudModalShow}
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
                      src={CloudAutiomation}
                      alt="Cloud Automation"
                    />
                  </div>
                </div>
              </Link>
              <div className="button">
                <Link
                  // to="/service/cloud-automation"
                  // onClick={this.handleScrollToTop}
                                  onClick={this.setCloudModalShow}
                >

                  <Button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="d-block w-100 services-box">
              <Link
                // to="/service/system-reliability-engineering"
                // onClick={this.handleScrollToTop}
                onClick={this.setSREModalShow}

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
                      src={SRE}
                      alt="System Reliability Engineering"
                    />
                  </div>
                </div>
              </Link>
              <div className="button">
                <Link
                // to="/service/system-reliability-engineering"
                onClick={this.setSREModalShow}
                >
                  <Button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </Link>
              </div>
            </div>
          </Slider>
        </Container>
        <MigrationAndModernizationModal
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        />
         <CloudAutomationModal
          show={this.state.cloudModalShow}
          onHide={() => this.setCloudModalShow(false)}
        /> <SREModal
          show={this.state.SREModalShow}
          onHide={() => this.setSREModalShow(false)}
        />
      </div>
    );
  }
}

export default MyServices;
