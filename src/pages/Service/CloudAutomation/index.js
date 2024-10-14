import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CloudAutomationImg from "../../../assets/img/cloudAutomation.png"
import AwsomeProject from "../../../components/AwsomeProject";

class CloudAutomation extends Component {
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
          Cloud <span>Automation</span>
          </div>
          <div className="d-block w-100 text-center pb-5 service-banner">
            {/* <img width="600px"src={CloudAutomationImg} alt="" /> */}
          </div>
          <div className="d-block w-100 service-contents">
           
            <div className="d-block w-100 mb-4 content">
            <p>I offer customized solutions to automate your cloud environment, reducing manual interventions, improving efficiency, and enabling seamless scalability.</p>
            <p>By implementing Infrastructure as Code (IaC), CI/CD pipelines, and automated monitoring, I help you optimize resource utilization, reduce costs, and improve deployment speed. Whether you're managing multi-cloud environments or working with AWS, Azure, or Google Cloud, I ensure your cloud operations are fully automated, secure, and future-ready.</p>
            <p>Let me help you unlock the full potential of your cloud environment through intelligent automation, allowing you to focus on innovation and growth.</p>
            <p>Ready to take your cloud infrastructure to the next level? Let’s connect and discuss how I can transform your cloud operations.

</p>
            </div>      
          </div>
        </Container>        
        <AwsomeProject />
      </div>
    );
  }
}

export default CloudAutomation;
