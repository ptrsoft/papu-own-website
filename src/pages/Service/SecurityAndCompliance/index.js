import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SREImg from "../../../assets/img/SRE.jpg"
import AwsomeProject from "../../../components/AwsomeProject";

class SecurityAndCompliance extends Component {
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
          Security and <span>Compliance</span>

          </div>
          <div className="d-block w-100 text-center pb-5 service-banner">
            {/* <img width="600px"src={SREImg} alt="" /> */}
          </div>
          <div className="d-block w-100 service-contents">
           
            <div className="d-block w-100 mb-4 content">
                <p>I provide tailored solutions that safeguard your data, applications, and infrastructure while maintaining compliance with frameworks such as GDPR, ISO 27001, HIPAA, SOC 2, and more.</p>    
                <h4  className="d-block w-100 pb-3 mb-3">With my services, I can help you:

</h4>
<ul>
    <li>Implement robust security measures including firewalls, intrusion detection, encryption, and multi-factor authentication.
    </li>
    <li>Conduct security audits and vulnerability assessments to identify and mitigate risks.
    </li>
    <li>Develop and enforce compliance frameworks that align with industry standards and legal requirements.
    </li>
</ul>
<p>
Whether you're looking to secure your cloud environment, protect sensitive data, or meet regulatory obligations, I provide end-to-end solutions to keep your systems secure and compliant.</p>
<p>Let’s work together to secure your business and ensure compliance with industry standards. Reach out, and let’s discuss how I can help.

</p>
            </div>      
          </div>
        </Container>        
        <AwsomeProject />
      </div>
    );
  }
}

export default SecurityAndCompliance;
