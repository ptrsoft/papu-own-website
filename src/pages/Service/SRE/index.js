import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SREImg from "../../../assets/img/SRE.jpg"
import AwsomeProject from "../../../components/AwsomeProject";

class SRE extends Component {
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
          System <span>Reliability</span> Engineering
          </div>
          <div className="d-block w-100 text-center pb-5 service-banner">
            {/* <img width="600px"src={SREImg} alt="" /> */}
          </div>
          <div className="d-block w-100 service-contents">
           
            <div className="d-block w-100 mb-4 content">
          <p>My expertise focuses on improving system availability, performance,resilience, and reliability through proactive monitoring, automation.</p>
          <p>I have developed a mechanism for auto-discovery of distributed microservices and auto enablement of their operation dashboard and alerting systems that reduce operation management effort 70%.</p>
          <p>I also have developed a extendible SRE framework based on small plugin based golang CLI tooling that increased productivty by 50%.</p>
          <p>From infrastructure automation and monitoring to root cause analysis and optimization, I provide end-to-end solutions tailored to your business needs, keeping your systems running smoothly, even in high-demand scenarios.</p>
          <p>Ready to improve your system’s reliability and scalability? Let’s connect and discuss how I can help ensure your systems are always running at their best.
</p>
            </div>      
          </div>
        </Container>        
        <AwsomeProject />
      </div>
    );
  }
}

export default SRE;
