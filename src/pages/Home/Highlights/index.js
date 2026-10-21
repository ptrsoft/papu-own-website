import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Two flagship offerings highlighted at the top of the home page.
const HIGHLIGHTS = [
  {
    key: "ontology",
    tag: "Product",
    icon: "fa-share-nodes",
    title: "Nexus Ontology Platform",
    text: "An ontology-driven AI platform I built — model your business as entities, relationships and rules, then let AI reason and automate over your real domain.",
    cta: "Explore the platform",
    url: "https://thenexusai.tech/",
  },
  {
    key: "fde",
    tag: "Training",
    icon: "fa-graduation-cap",
    title: "FDE Training",
    text: "Hands-on training that turns engineers into Forward Deployed Engineers — framing real business problems and shipping production-grade AI that moves the metric.",
    cta: "Start learning",
    url: "https://fde.thenexusai.tech/",
  },
];

class Highlights extends Component {
  render() {
    return (
      <div className="highlights-container d-block w-100 px-lg-5 px-md-3 px-2 py-5">
        <Container fluid>
          <div className="d-block w-100 text-center pb-5 highlights-heading">
            <span className="eyebrow">What I'm building &amp; teaching</span>
            <h2>
              Two ways to <span>work with me</span>
            </h2>
          </div>
          <Row className="justify-content-center">
            {HIGHLIGHTS.map((h, i) => (
              <Col lg={6} md={6} key={h.key}>
                <a
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`highlight-card appear delay-${i}`}
                >
                  <span className="glow" aria-hidden="true"></span>
                  <div className="highlight-top">
                    <span className="highlight-icon">
                      <i className={`fa-solid ${h.icon}`}></i>
                    </span>
                    <span className="highlight-tag">{h.tag}</span>
                  </div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                  <span className="highlight-cta">
                    {h.cta}
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Highlights;
