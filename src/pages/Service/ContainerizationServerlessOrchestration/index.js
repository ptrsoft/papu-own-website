import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SREImg from "../../../assets/img/SRE.jpg"
import AwsomeProject from "../../../components/AwsomeProject";

class ContainerizationServerlessOrchestration extends Component {
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
          Containerization/<span>Serverless Orchestration</span>

          </div>
          <div className="d-block w-100 text-center pb-5 service-banner">
            {/* <img width="600px"src={SREImg} alt="" /> */}
          </div>
          <div className="d-block w-100 service-contents">
           
            <div className="d-block w-100 mb-4 content">
      <p>I am helping businesses build efficient, scalable, and resilient cloud-native applications. I specialize in implementing modern infrastructure solutions like Docker, Kubernetes, and serverless platforms (AWS Lambda, Azure Functions) to reduce complexity, improve resource efficiency, and accelerate deployment times.</p>
      <h4  className="d-block w-100 pb-3 mb-3">With my services, I help you:
</h4>
<ul>
    <li>Containerize applications for greater portability and consistency across environments.
    </li>
    <li>Implement Kubernetes orchestration for seamless scaling, automation, and management of containerized workloads.
    </li>
    <li>Optimize serverless architectures to reduce infrastructure management and achieve cost-efficient, scalable applications.
    </li>
    <li>Build CI/CD pipelines that integrate with your containerized or serverless environments for rapid, reliable deployment.
    </li>
</ul>
<p>
Whether you're starting from scratch or modernizing existing infrastructure, I ensure your applications run smoothly with minimal overhead, enabling your team to focus on innovation rather than operations.

</p>
<p>Ready to adopt containerization or serverless architectures for faster, scalable deployments? Let’s connect and discuss how I can help you streamline your cloud infrastructure.</p>
            </div>      
          </div>
        </Container>        
        <AwsomeProject />
      </div>
    );
  }
}

export default ContainerizationServerlessOrchestration;
