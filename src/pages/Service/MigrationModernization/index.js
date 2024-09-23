import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ServiceImage from "../../../assets/img/services-banner-image.png";
import AwsomeProject from "../../../components/AwsomeProject";

class MigrationModernization extends Component {
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
            <span>Microservices Transformation</span> in Cloud
          </div>
          <div className="d-block w-100 text-center pb-5 service-banner">
            <img src={ServiceImage} alt="" />
          </div>
          <div className="d-block w-100 service-contents">
            <h3 className="d-block w-100 mb-4">
              Industry: <span>Automative</span>
            </h3>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">The Ask?</h4>
              <p>
                Customer wanted to consolidate their entire business from 4
                different data centers to a Hybrid Cloud and bring agility,
                reliability, scaling, vendor neutrality with minimal operation
                cost!
              </p>
              <p>
                They wanted to maintain entire IT, fully software-defined, and
                reduce the operations effort to maintain 4 different physical
                data centers. They wanted centralized source, true data, and
                better data governance. They wanted to create an infrastructure
                with statelessness, horizontal scalability in services, better
                security, and statistics of their exposed API to the outside
                world. They wanted fast and accurate releases to meet growing
                business demand. Also they needed major replatforming and
                rearchitecture of existing applications to meet agility and
                scalability that business demands. Above all, high CAPEX on
                hardware and operations cost were a big concern .Wanted to
                achieve more for less with IT budgets.
              </p>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">My Answer:</h4>
              <p>
                Many monolith applications, different hardware environments,
                hard to scale, hard to operate. I did a quick 360° audit of
                existing infrastructure, processes and came out with a plan to
                address key improvement areas with migration path and risks
                involved. I did multiple PoC’s with customer to impart a solid
                understanding of the technologies to modernize IT.I translated
                entire hardware infrastructure into a few lines of software code
                that could create and maintain backbone infrastructure
                seamlessly. I refactored monolith applications to multiple
                microservices, established complete application lifecycle
                management and operation support system to maintain the business
                operations. I also implemented required data security,
                governance and compliance requirements in cloud.
              </p>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Technologies Used:</h4>
              <ul>
                <li>Infrastructure as Code: AWS CloudFormation</li>
                <li>Container Framework : AWS ECS</li>
                <li>CI/CD Tool: AWS CodePipeline, AWS CodeBuild</li>
                <li>Monitoring and Logging: AWS CloudWatch, AWS X-Ray</li>
                <li>Security: AWS IAM, AWS KMS (Key Management Service)</li>
              </ul>
            </div>
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Final Outcome:</h4>
              <p>
                The resulting IT infrastructure is now fully Software Defined.
                The entire business system is managed by few resources reducing
                Capex by 80% and Opex by 70%. The business achieved Scalability,
                Reliability, Security, Agility, Performance, Operations SLA’s.
              </p>
            </div>
            <div className="d-block w-100 content">
              <h4 className="d-block w-100 pb-3 mb-3">Key Differences:</h4>
              <p>
                The customer could create and maintain their entire
                infrastructure with the code we created. They can create,
                modify, and remove infrastructure needs in no time, and it’s
                fully elastic.The DevOps automation helped them manage the
                lifecycle of multiple microservices through an automated
                platform, releasing quality code every hour if needed.The
                services achieved Elasticity, Scales up/down/out as per workload
                needs.
              </p>
            </div>
          </div>
        </Container>
        <AwsomeProject />
      </div>
    );
  }
}

export default MigrationModernization;
