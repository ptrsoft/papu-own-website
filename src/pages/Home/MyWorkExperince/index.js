
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class MyWorkExperince extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="experince-container d-block w-100 py-lg-5 py-3 px-lg-5 px-3">
        <h2 className="d-block w-100 text-center pb-md-5 mb-3 heading">
          My <span>Work Experince</span>
        </h2>
        <Container fluid>
          <Row>
            <Col lg={4}>
              <div className="d-block w-100 experince-left">
                <h3>Synectiks Inc</h3>
                <span>Nov 2016 - May 2024</span>
              </div>
            </Col>
            <Col lg={2}>
              <div className="d-block w-100 h-100 text-lg-center point">
                <span></span>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-block w-100 experince-right">
                <h3>Chief Technology Officer (CTO)</h3>
                <p>
                  Did lead a 50+ dev team to develop a cross cloud SRE platform
                  that reduced cloud capex 25%, Opex 50% and improved product
                  SLE's 30%, served some premium customers like US Defence.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <div className="d-block w-100 experince-left">
                <h3>Reliance Jio</h3>
                <span>July 2015 - July 2016</span>
              </div>
            </Col>
            <Col lg={2}>
              <div className="d-block w-100 h-100 text-lg-center point">
                <span></span>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-block w-100 experince-right">
                <h3>General Manager</h3>
                <p>
                  Responsible for complete software and hardware architecture of
                  Jio Bigdata platform, Jio OSS support platform.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <div className="d-block w-100 experince-left">
                <h3>Trilogy Inc</h3>
                <span>July 2010 - July 2015</span>
              </div>
            </Col>
            <Col lg={2}>
              <div className="d-block w-100 h-100 text-lg-center point">
                <span></span>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-block w-100 experince-right">
                <h3>Consultant Technologist/Architect</h3>
                <p>
                  Associated with Trilogy Inc, for multiple product development
                  and DevOps consulting projects.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <div className="d-block w-100 experince-left">
                <h3>HP LAB</h3>
                <span>June 2004 - July | 2010</span>
              </div>
            </Col>
            <Col lg={2}>
              <div className="d-block w-100 h-100 text-lg-center point last">
                <span></span>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-block w-100 experince-right">
                <h3>Senior Software Architect</h3>
                <p>
                  Was part of core team of successful startup startup APPIQ and
                  contributed toward creating a team and product from scratch
                  and thereby making to acquire by HP Lab with a price of 260
                  million $.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MyWorkExperince;
