import React from 'react'
import { Container } from 'react-bootstrap'
import AwsomeProject from '../../components/AwsomeProject'
import ServiceImage from "../../assets/img/SREDevelopment.png"
const About = () => {
  return (
    <div className="main-container d-block w-100 px-lg-5 px-md-3 px-2">
        <Container fluid>
          <div className="d-block w-100 text-center pb-4 pt-4 main-heading">
          Why I’m the <span>Right Partner</span> for Your <span>IT Needs?</span>

          </div>
          <div className="d-block w-100 text-center pb-5 service-banner">
            <img src={ServiceImage} alt="" />
          </div>
          <div className="d-block w-100 service-contents">
           
            <div className="d-block w-100 mb-4 content">
                <p>If you are looking for simple, cost effective and higly reliable IT system that can supercharge your core business, I could help you always.</p>
            </div>

            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Services:</h4>
            <ul>
            <li>Migration and Modernization
            </li>
            <li>Cloud Automation
            </li>
            <li>System Reliability Engineering
            </li>
            <li>Cost Management and Optimization
            </li>
            <li>Containerization/Serverless Orchestration
            </li>
            <li>Security and Compliance
            </li>
            </ul>
            </div>

            <div className="d-block w-100 mb-4 content">
              <h4 className="d-block w-100 pb-3 mb-3">Work Experience</h4>
         
         <b>Synectiks Inc | Nov 2016 - May 2024 | Role: CTO</b>
         <p>Did lead a 50+ dev team to develop a cross cloud SRE platform that reduced cloud capex 25%, Opex 50% and improved product SLE's 30%, served some premium customers like US Defence.</p>

         <b>Reliance Jio | July 2015 - July 2016 | Role: General Manager</b>
         <p>Responsible for complete software and hardware architecture of Jio Bigdata platform, Jio OSS support platform.</p>
<b>Trilogy Inc | July 2010 - July 2015 | Role: Consultant Technologist/Architect</b>
<p>Associated with Trilogy Inc, for multiple product development and DevOps consulting projects</p>

<b>HP LAB | June 2004 - July | 2010 Role: Senior Software Architect</b>
<p>Was part of core team of successful startup startup APPIQ and contributed toward creating a team and product from scratch and thereby making to acquire by HP Lab with a price of 260 million $</p>
</div>

<div className="d-block w-100 mb-4 content">
<h4 className="d-block w-100 pb-3 mb-3">Why hire me?</h4>
<p>Consistently delivered multiple production ready DevOps solutions that reduced cloud capex 25-50%,Opex 50-60% and Product SLE's by 60%.

</p>
<p>100+ Projects Completed 10+ Opensource Products 50+ Happy Customers

</p>
  
</div>
          
          </div>
        </Container>
        <AwsomeProject />
      </div>
     
  )
}

export default About