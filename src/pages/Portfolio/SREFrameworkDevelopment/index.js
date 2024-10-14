import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ServiceImage from "../../../assets/img/services-banner-image.png"
import EcomsPlatforms from "../../../assets/img/SREDevelopment.png"
// import ServiceImage from "../../../../assets/img/services-banner-image.png";
// import AwsomeProject from "../../../../components/AwsomeProject";
import AwsomeProject from "../../../components/AwsomeProject";


class SREFrameworkDevelopment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="main-container d-block w-100 px-lg-5 px-md-3 px-2">
        <Container fluid>
          <div className="d-block w-100 text-center pb-4 pt-4 main-heading">
          Development of <span>SRE Framework</span> <br /> to reduce <span>OPEX</span> and <span>Gotomarket time</span>
          </div>
          <div className="d-block w-100 text-center pb-5 service-banner">
            <img src={EcomsPlatforms} alt="" />
          </div>
          <div className="d-block w-100 service-contents">
            <h3 className="d-block w-100 mb-4">
              Industry: <span>Retail</span>
            </h3>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">The Ask?</h4>
             <p>It takes a month time to setup observability (monitoring and alerting dashboards) once a product is deployed for production. We wanted to developed a mechanism for auto-discovery of distributed microservices and auto enablement of their operation dashboard and alerting systems that reduce 70% operation management effort and time to go to market.</p>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">My Answer:</h4>
              <p>
              Developed a extendible SRE framework based on small plugin based golang CLI tooling that would dynamically collect all data (Performance, Availability, Relaibility ,Cost ,End Usage, Data Protection) for all the discoverd services in CMDB. The Autodicovery mechanism made sure that when a service is deployed , its topology and KPA stats are available for query. Finally some background services could determine the SLE score of all the services and a alerting system could detect any SLE deviation in runtime.
              </p>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Technologies Used:</h4>
              <ul>
                <li>Programming Framework: Golang CLI , API
                </li>
                <li>Container Framework : Vanilla Kubernetes
                </li>
                <li>CI/CD Tool: Tekton , Argo CD
                </li>
                <li>Monitoring and Logging: AWS CloudWatch, AWS X-Ray
                </li>
              </ul>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Final Outcome:</h4>
              <ul>
                <li>Achieved a simple and extendable, reliable and cost-effective SRE ecosystem
                </li>
                <li>The Autodiscovery mechanisms delivered enhanced observability.
                </li>
                <li>The service scores delivered simplified SLE in runtime and improved system relaibility
                </li>
              </ul>
            </div>
            <div className="d-block w-100 content">
              <h4 className="d-block w-100 pb-3 mb-3">Key Differences:</h4>
              <ul>
                <li>The framework reduced 80% Opex for operation setup and improved 50% Product SLE's
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <AwsomeProject />
      </div>
    );
  }
}

export default SREFrameworkDevelopment;
