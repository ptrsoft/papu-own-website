import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SREImg from "../../../assets/img/SRE.jpg"
import AwsomeProject from "../../../components/AwsomeProject";

class CostManagementAndOptimization extends Component {
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
          Cost <span>Management</span> and <span>Optimization</span>
          </div>
          <div className="d-block w-100 text-center pb-5 service-banner">
            {/* <img width="600px"src={SREImg} alt="" /> */}
          </div>
          <div className="d-block w-100 service-contents">
           
            <div className="d-block w-100 mb-4 content">
        <p>I help business to optimize their cloud spending while maximizing performance. My expertise lies in bringing financial accountability to the cloud, enabling cross-functional teams to make data-driven decisions that balance cost, speed, and quality.</p>
        <h4 className="d-block w-100 pb-3 mb-3">With my FinOps approach, I’ll help you:</h4>
<ul>
    <li>Gain real-time visibility into your cloud spend.
    </li>
    <li>Implement cost optimization strategies without compromising performance.
    </li>
    <li>Set up automated cost allocation and budget alerts.
    </li>
    <li>Ensure your cloud usage aligns with business goals by creating a culture of collaboration between finance, engineering, and operations.
    </li>
</ul>

<p>Whether you're using AWS, Azure, or Google Cloud, I can help you implement cost-saving strategies, manage resource allocation, and streamline cloud financial management to ensure you're getting the most value out of your cloud investments.</p>
<p>Let’s work together to improve your cloud financial efficiency and drive better business outcomes. Reach out, and let’s discuss how I can bring FinOps expertise to your team.</p>

            </div>      
          </div>
        </Container>        
        <AwsomeProject />
      </div>
    );
  }
}

export default CostManagementAndOptimization;
