// import React, { Component } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import Slider from "react-slick";
// import PortfolioImage from "../../../assets/img/portfolio-image.png";
// import SREFrameworkPortfolio from "../../../assets/img/SRE_FrameworkPortfolio.png";
// import MicroservicesTransformationPortfolio from "../../../assets/img/Microservices_TransformationPortfolio.png";
// import SaaSAutomationPortfolio from "../../../assets/img/SaaS_AutomationPortfolio.png";
// import { Link } from "react-router-dom";




// class MyPortfolio extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     var settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       arrows: true,
//       responsive: [
//         {
//           breakpoint: 992,
//           settings: {
//             slidesToShow: 2,
//           },
//         },
//         {
//           breakpoint: 767,
//           settings: {
//             slidesToShow: 2,
//           },
//         },
//         {
//           breakpoint: 568,
//           settings: {
//             slidesToShow: 1,
//           },
//         },
//       ],
//     };
//     return (
//       <div className="portfolio-container d-block w-100 p-lg-5 p-md-3 pb-4 mt-5 mb-5" id="portfolio">
//         <Container fluid>
//           <div className="d-flex w-100 pb-4 heading">
//             <h2>
//               Lets Have  Look at <br />
//               My <span>Portfolios</span>
//             </h2>
//             <Button>See All</Button>
//           </div>
//           <Slider {...settings}>
//           <div className="d-block w-100 portfolio-box">
//               <div className="d-block w-100 image">
//                 <img src={SaaSAutomationPortfolio} alt="" />
//               </div>
//               <div className="name">
//                 <a href="#">SAAS Automation</a>
//               </div>
//               <div className="button">
//               <Link target="_blank"  to={'/portfolio/saas-automation'}>
//                 <Button><i className="fa-solid fa-arrow-right"></i></Button>
//               </Link>
//               </div>
//             </div>


//             <div className="d-block w-100 portfolio-box">
//               <div className="d-block w-100 image">
//                 <img src={MicroservicesTransformationPortfolio} alt="" />
//               </div>
//               <div className="name">
//                 <a href="#">Microservices Transformation</a>
//               </div>
//               <div className="button">
//                <Link target="_blank" to={'/portfolio/microservices-transformation'}> <Button><i className="fa-solid fa-arrow-right"></i></Button></Link>
//               </div>
//             </div>

          

//             <div className="d-block w-100 portfolio-box">
//               <div className="d-block w-100 image">
//                 <img src={SREFrameworkPortfolio} alt="" />
//               </div>
//               <div className="name">
//                 <a href="#"> SRE Framework Development</a>
//               </div>
//               <div className="button">
//                 <Link target="_blank"  to={'/portfolio/sre-framework-development'}>
//                 <Button><i className="fa-solid fa-arrow-right"></i></Button>
//                 </Link>
//               </div>
//             </div>
//           </Slider>
//         </Container>
//       </div>
//     );
//   }
// }

// export default MyPortfolio;


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
import SRE from "../../../assets/SRE_Framework (1).png" 
import MicroservicesTransformationimg from "../../../assets/img/Microservices_Transformation (1).png" 
import SaasAuto from "../../../assets/img/SaaS_Automation (3).png" 

// import SaaSAutomationImg from "../../../assets/img/SaaS_Automation (1).png"
import SassAutomation from "../../Portfolio/SassAutomation";
import MicroservicesTransformation from "../../Portfolio/MicroservicesTransformation";
import SREFrameworkDevelopment from "../../Portfolio/SREFrameworkDevelopment";




class SAASAutomationModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
     <div>
   <SassAutomation/>
     </div>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class MicrosoftTransmodal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
     <div>
   <MicroservicesTransformation/>
     </div>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class SREFrameworkDevelopmentModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
     <div>
   <SREFrameworkDevelopment/>
     </div>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class MyPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cloudAutoModalShow: false ,
      microsoftTransModalShow: false ,
      SREFrameworkDevelopmentModalShow: false ,
    };

  }
  setCloudAutoModal = (show) => {
    this.setState({ cloudAutoModalShow: show });
  };
   setMicrosoftModal = (show) => {
    this.setState({ microsoftTransModalShow: show });
  };setSREFrameworkDevelopmentModal = (show) => {
    this.setState({ SREFrameworkDevelopmentModalShow: show });
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
      <div  className="services-container d-block w-100 px-lg-5 px-md-3 px-2 py-5 mb-5" id="portfolio">
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
                </h2>
            
          </div>
          <Slider {...settings} className="mb-5">
            <div className="d-block w-100 services-box">
              <Link 
               onClick={this.setCloudAutoModal}
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
                  <div className="name">SAAS Automation</div>
                  <div className="d-block image">
                    <img
                      src={SaasAuto}
                      alt="Saas Automation"
                    />
                  </div>
                </div>
              </Link>
              <div className="button">
                <Link                onClick={this.setCloudAutoModal}
     >
                  <Button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </Link>
              </div>
            </div>

          

            <div className="d-block w-100 services-box">
              <Link 
                             onClick={this.setMicrosoftModal}
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
                  <div className="name">Microservices Transformation</div>
                  <div className="d-block image">
                    <img
                      src={MicroservicesTransformationimg}
                      alt="Microservices Transformation"
                    />
                  </div>
                </div>
              </Link>
              <div className="button">
                <Link

onClick={this.setMicrosoftModal}

                >
                  <Button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </Link>
              </div>
            </div>


            <div className="d-block w-100 services-box">
              <Link 
              onClick={this.setSREFrameworkDevelopmentModal}
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
                  <div className="name">SRE Framework Development</div>
                  <div className="d-block image">
                    <img
                      src={SRE}
                      alt="SRE Framework Developmentc:\Users\hp\Downloads\Microservices_Transformation (1).png"
                    />
                  </div>
                </div>
              </Link>
              <div className="button">
                <Link
                              onClick={this.setSREFrameworkDevelopmentModal}

                >

                  <Button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </Link>
              </div>
            </div>
          </Slider>
         
        </Container>
       <SAASAutomationModal
        show={this.state.cloudAutoModalShow}
        onHide={() => this.setCloudAutoModal(false)}
       />
       <MicrosoftTransmodal
        show={this.state.microsoftTransModalShow}
        onHide={() => this.setMicrosoftModal(false)}
       />
       <SREFrameworkDevelopmentModal
        show={this.state.SREFrameworkDevelopmentModalShow}
        onHide={() => this.setSREFrameworkDevelopmentModal(false)}
       />
      </div>
    );
  }
}

export default MyPortfolio;