import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ServiceImage from "../../../assets/img/services-banner-image.png";
import MigrationandModernization from "../../../assets/img/Migration&Modernization.jpg"
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
            <span>Migration</span> and <span>Modernization</span>
          </div>
          <div className="d-block w-100 text-center pb-5 service-banner">
            <img width="600px"src={MigrationandModernization} alt="" />
          </div>
          <div className="d-block w-100 service-contents">
           
            <div className="d-block w-100 mb-4 content">
              <p>
              Whether you're aiming to move your infrastructure to the cloud, streamline your applications, or modernize your IT architecture, I offer tailored solutions that align with your goals.
              I also implement modern tools and technologies such as containerization microservices, and serverless architectures, enabling you to optimize performance and reduce costs.
              </p>
            </div>
           
            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Please refer to my Opensource products that helps in

</h4>
              <ul>
                <li>Reduce Operation Management time & Effort @50%n</li>
                <li>Improves product SLE's by 30%</li>
                <li>Reduce Cloud Capex by 25%d</li>
                <li>Reduce Dev Effort by 50%</li>
              </ul>
              <p>
              <a target="_blank" href="https://www.ptrtechnology.com/technologies">www.ptrtechnology.com/technologies</a>
              </p>

<p>Let me help you future-proof your IT infrastructure and accelerate your digital transformation with smooth, cost-effective migration and modernization strategies. <br />Ready to transform your IT systems? Let’s connect and discuss how I can help your business thrive.

</p>
            </div>



            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Cloud Automation</h4>
             <p>I offer customized solutions to automate your cloud environment, reducing manual interventions, improving efficiency, and enabling seamless scalability.</p>
             <p>By implementing Infrastructure as Code (IaC), CI/CD pipelines, and automated monitoring, I help you optimize resource utilization, reduce costs, and improve deployment speed. Whether you're managing multi-cloud environments or working with AWS, Azure, or Google Cloud, I ensure your cloud operations are fully automated, secure, and future-ready.</p>
             <p>Let me help you unlock the full potential of your cloud environment through intelligent automation, allowing you to focus on innovation and growth. <br /> Ready to take your cloud infrastructure to the next level? Let’s connect and discuss how I can transform your cloud operations.
             </p>
            </div>

            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">System Reliability Engineering
              </h4>
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

export default MigrationModernization;
