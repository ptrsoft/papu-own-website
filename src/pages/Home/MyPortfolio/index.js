import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Modal, Button } from "react-bootstrap";

// Case studies. The full document for each lives in /public/portfolios and is
// shown in a popup PDF viewer. Sector/Impact metadata is taken straight from
// each case-study document. Icons are Font Awesome (FA 6.6.0, loaded globally).
const caseStudies = [
  {
    key: "revsense",
    title: "RevSense — Revenue Acceleration Platform",
    icon: "fa-chart-line",
    sector: "Sector-agnostic · Telco",
    impact: "+$20M / yr revenue",
    blurb:
      "AI revenue-intelligence across voice, CRM, catalogue, email, meetings and social — QA, compliance, deal and campaign intelligence from every interaction.",
    pdf: "/portfolios/revsense.pdf",
  },
  {
    key: "nocsense",
    title: "NOCSense — Network Operations Intelligence",
    icon: "fa-tower-broadcast",
    sector: "Telco",
    impact: "~$1.2M / mo Opex saved",
    blurb:
      "Topology-aware alarm correlation and auto-remediation on 200,000 alarms/day — 95.87% noise eliminated, 70.2% of incidents auto-resolved.",
    pdf: "/portfolios/nocsense.pdf",
  },
  {
    key: "passive-network",
    title: "Passive Network — Detection & Revenue Recovery",
    icon: "fa-signal",
    sector: "Telco",
    impact: "$3.15M–$4.75M / yr",
    blurb:
      "Ontology-driven detection of passive network cells with revenue metering and auto-remediation — 70%+ proactive detection, 40% MTTR reduction.",
    pdf: "/portfolios/passive-network.pdf",
  },
  {
    key: "supplychain",
    title: "SupplyChain — Supply Chain Intelligence",
    icon: "fa-truck-fast",
    sector: "Manufacturing",
    impact: "$5.7M–$10.1M / yr",
    blurb:
      "SCOR/GS1-aligned ontology unifying Salesforce, SAP and Oracle — demand forecasting, inventory optimization and order-to-cash intelligence.",
    pdf: "/portfolios/supplychain.pdf",
  },
];

class MyPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  setSelected = (entry) => {
    this.setState({ selected: entry });
  };

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 568, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    };
    const { selected } = this.state;
    return (
      <div
        className="services-container services-modern theme-light d-block w-100 px-lg-5 px-md-3 px-2 py-5 mb-5"
        id="portfolio"
      >
        <Container fluid>
          <div className="d-flex w-100 pb-5 heading">
            <h2>
              My <span>Portfolios</span>
              <p>Selected AI case studies with measurable business impact</p>
            </h2>
          </div>
          <Slider {...settings} className="mb-5 services-slider">
            {caseStudies.map((study) => {
              const openModal = (e) => {
                e.preventDefault();
                this.setSelected(study);
              };
              return (
                <div className="services-slide" key={study.key}>
                  <a
                    className="service-card portfolio-card"
                    href="#portfolio"
                    onClick={openModal}
                  >
                    <span className="glow" aria-hidden="true"></span>
                    <div className="service-card-top">
                      <span className="service-badge">
                        <i className={`fa-solid ${study.icon}`}></i>
                      </span>
                    </div>
                    <h3>{study.title}</h3>
                    <div className="portfolio-meta">
                      <span className="meta-chip">
                        <span className="meta-label">Sector</span>
                        <span className="meta-value">{study.sector}</span>
                      </span>
                      <span className="meta-chip impact">
                        <span className="meta-label">Impact</span>
                        <span className="meta-value">{study.impact}</span>
                      </span>
                    </div>
                    <p>{study.blurb}</p>
                    <span className="service-cta">
                      Read case study
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              );
            })}
          </Slider>
        </Container>

        <Modal
          show={selected !== null}
          onHide={() => this.setSelected(null)}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="portfolio-modal"
        >
          {selected && (
            <>
              <Modal.Header closeButton>
                <div className="d-flex align-items-center gap-3">
                  <i
                    className={`fa-solid ${selected.icon}`}
                    style={{ color: "#fd853a", fontSize: 28 }}
                  ></i>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 20 }}>
                      {selected.title}
                    </div>
                    <div style={{ fontSize: 14, color: "#667085" }}>
                      Sector: {selected.sector} &nbsp;·&nbsp; Impact:{" "}
                      {selected.impact}
                    </div>
                  </div>
                </div>
              </Modal.Header>
              <Modal.Body style={{ padding: 0 }}>
                <iframe
                  title={selected.title}
                  src={selected.pdf}
                  style={{
                    width: "100%",
                    height: "80vh",
                    border: "none",
                    display: "block",
                  }}
                />
              </Modal.Body>
              <Modal.Footer>
                <a href={selected.pdf} target="_blank" rel="noopener noreferrer">
                  <Button
                    style={{
                      backgroundColor: "#fd853a",
                      borderColor: "#fd853a",
                    }}
                  >
                    Open in new tab{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Button>
                </a>
                <Button
                  variant="secondary"
                  onClick={() => this.setSelected(null)}
                >
                  Close
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </div>
    );
  }
}

export default MyPortfolio;
