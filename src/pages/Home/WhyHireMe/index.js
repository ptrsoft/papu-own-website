import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PapuSir from "../../../assets/img/papu-sir.png";
import { Link } from "react-router-dom";

class WhyHireMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="why-hire-container d-block w-100 px-lg-5 px-md-3 px-2 py-5">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <div className="d-block w-100 my-3 why-hire-image">
                <img src={PapuSir} alt="" />
                <div className="circles">
                  <span className="circle01"></span>
                  <span className="circle02"></span>
                  <span className="circle03"></span>
                  <span className="circle04"></span>
                  <span className="circle05"></span>
                  <span className="circle06"></span>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="d-block w-100 why-hire-text">
                <h2>
                  Why <span>Hire me</span>?
                </h2>
                <p>
                  Consistently delivered multiple production ready DevOps
                  solutions that reduced cloud capex 25-50%,Opex 50-60% and
                  Product SLE's by 60%.
                </p>
              </div>
              <div className="d-block w-100 projects">
                <Row>
                  <Col lg={4}>
                    <div className="d-block w-100 project">
                      <strong>100+</strong>
                      <p>Project Completed</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="d-block w-100 project">
                      <strong>10+</strong>
                      <p>Opensource Products</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="d-block w-100 project">
                      <strong>50+</strong>
                      <p>Happy Customers</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="d-block w-100 pt-md-5 hire-me-btn">
                <Link to={'/contact'}>
                <Button variant="outline-primary">Hire me</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WhyHireMe;
