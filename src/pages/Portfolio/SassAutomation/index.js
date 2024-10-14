import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ServiceImage from "../../../assets/img/services-banner-image.png"
import EcomsPlatforms from "../../../assets/img/EcomsPlatforms.png"
// import ServiceImage from "../../../../assets/img/services-banner-image.png";
// import AwsomeProject from "../../../../components/AwsomeProject";
import AwsomeProject from "../../../components/AwsomeProject";


class SassAutomation extends Component {
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
            <span>DevOps Ecosystem </span>For <span>SAAS Delivery</span> <br /> of Ecommerce Platform in Cloud
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
              <p>
              A cloud automation platform that can provision the production ready entire retail product suite in one touch for individual customers.The idea was to deliver highest flexibility for every customer and deliver changes with more velocity.
              </p>
              <p>
              So the need was to create secure cloud environment for every customers and provison infrastructure and services with data for every customer in private space and deliver any customer specific changes.The system needed to highly reliable and cost effective and it should have autodiscovery of infrastructure and self serviced monitoring system so that we have auto observality of every SAAS delivery for customers.              
              </p>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">My Answer:</h4>
              <p>
              Designed and developed the complete cloud automation platform to get a production ready complete suite of single tenant Ecommerce line of products for SAAS delivery using AWS services.I wrote the complete automation to provision secure cloud environment, created the software defined code to provision infrastructure and deployed services.Extablished a DevOps ecosystem so that we can deliver both container and serverless services for every customers seamlessly while managing the entire SAAS eceosystem from single control plane.
              </p>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Technologies Used:</h4>
              <ul>
                <li>Infrastructure as Code: AWS CloudFormation</li>
                <li>Serverless Framework: WAF, API Gateway,AWS Lambda, DynamoDB, S3</li>
                <li>Container Framework : EKS, Vanilla Kubernetes</li>
                <li>CI/CD Tool: Tekton , Argo CD</li>
                <li>Monitoring and Logging: AWS CloudWatch, AWS X-Ray</li>
                <li>Security: AWS IAM, AWS KMS (Key Management Service)</li>
              </ul>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Final Outcome:</h4>
              <ul>
                <li>Achieved a simple and highly flexible, reliable and cost-effective SAAS ecosystem</li>
                <li>The Autodiscovery mechanisms delivered enhanced observability and reliability.</li>
              </ul>
            </div>
            <div className="d-block w-100 content">
              <h4 className="d-block w-100 pb-3 mb-3">Key Differences:</h4>
              <ul>
                <li>The arcitecture and mudularity did yield 80% less Capex & Opex and 50% improved Product SLE's</li>
              </ul>
            </div>
          </div>
        </Container>
        <AwsomeProject />
      </div>
    );
  }
}

export default SassAutomation;
