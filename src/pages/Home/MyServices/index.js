import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Modal, Row, Col, Button } from "react-bootstrap";

// The four key services. Each card renders a Font Awesome icon (FA 6.6.0 is
// loaded globally in styles.scss) instead of a raster image, so icons always
// match the service and stay crisp at any size.
const FDE_PORTAL_URL = "https://fde.thenexusai.tech/";
const NEXUS_ONTOLOGY_URL = "https://thenexusai.tech/";

const SERVICES = [
  {
    key: "fde-training",
    name: "FDE Training",
    icon: "fa-graduation-cap",
    portalUrl: FDE_PORTAL_URL,
    portalTitle: "FDE Training Portal",
    caption:
      "Hands-on training that turns engineers into Forward Deployed Engineers who ship production AI.",
  },
  {
    key: "ontology-ai-automation",
    name: "Ontology Powered AI Automation",
    icon: "fa-share-nodes",
    portalUrl: NEXUS_ONTOLOGY_URL,
    portalTitle: "Nexus Ontology Platform",
    caption:
      "Automation grounded in a model of your business, so AI reasons over your domain — not guesses.",
  },
  {
    key: "agent-engineering",
    name: "Agent Engineering",
    icon: "fa-robot",
    caption:
      "Production-ready AI agents that use your tools and systems, with guardrails and observability.",
  },
  {
    key: "ai-ops",
    name: "AI Ops",
    icon: "fa-gauge-high",
    caption:
      "Keep systems and AI models healthy with anomaly detection, monitoring, and ML-Ops automation.",
  },
];

// Reusable detail modal shell so every service modal looks consistent.
class ServiceModal extends Component {
  render() {
    const {
      icon,
      title,
      titleAccent,
      intro,
      bullets,
      closing,
      portalUrl,
      portalTitle,
      ...rest
    } = this.props;
    const portalName = portalTitle || "Portal";
    return (
      <Modal
        {...rest}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div>
          <div className="main-container d-block w-100 px-lg-5 px-md-3 px-2">
            <Container fluid>
              <div className="d-flex align-items-center gap-3 pb-4 pt-4 main-heading">
                {icon ? (
                  <i
                    className={`fa-solid ${icon}`}
                    style={{ color: "#fd853a", fontSize: 40 }}
                  ></i>
                ) : null}
                <span style={{ marginLeft: 12 }}>
                  {title} <span>{titleAccent}</span>
                </span>
              </div>
              <div className="d-block w-100 service-contents">
                <div className="d-block w-100 mb-4 content">
                  <p>{intro}</p>
                </div>
                {portalUrl ? (
                  <div className="d-block w-100 mb-4 content">
                    <a
                      href={portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        style={{
                          backgroundColor: "#fd853a",
                          borderColor: "#fd853a",
                        }}
                      >
                        Visit the {portalName}{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </Button>
                    </a>
                  </div>
                ) : null}
                <div className="d-block w-100 mb-4 content">
                  <h4 className="d-block w-100 pb-3 mb-3">Key services include:</h4>
                  <ul>
                    {bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="d-block w-100 mb-4 content">
                  <p>{closing}</p>
                  {portalUrl ? (
                    <p>
                      Learn more at{" "}
                      <a
                        href={portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {portalUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </a>
                      .
                    </p>
                  ) : null}
                </div>
              </div>
            </Container>
          </div>
        </div>
        <Modal.Footer>
          {portalUrl ? (
            <a href={portalUrl} target="_blank" rel="noopener noreferrer">
              <Button
                style={{ backgroundColor: "#fd853a", borderColor: "#fd853a" }}
              >
                Go to {portalName}
              </Button>
            </a>
          ) : null}
          <Button onClick={rest.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// Content for each service's detail modal.
const MODAL_CONTENT = {
  "fde-training": {
    icon: "fa-graduation-cap",
    title: "FDE",
    titleAccent: "Training",
    portalUrl: FDE_PORTAL_URL,
    portalTitle: "FDE Training Portal",
    intro:
      "I train engineers and teams to work as Forward Deployed Engineers — sitting with the business, framing the real problem, and shipping production-grade AI that moves a measurable metric. The program runs through the FDE Training Portal, a hands-on learning platform.",
    bullets: [
      "Forward Deployed Engineer mindset and operating model",
      "Problem framing: from business pain to a solvable AI problem",
      "Hands-on build labs: prototype to production in days",
      "Working directly with stakeholders and measuring impact",
      "Team enablement, playbooks, and delivery templates",
    ],
    closing:
      "Want to build an FDE capability inside your organization? Let's design a training program around your real use cases.",
  },
  "ontology-ai-automation": {
    icon: "fa-share-nodes",
    title: "Ontology Powered",
    titleAccent: "AI Automation",
    portalUrl: NEXUS_ONTOLOGY_URL,
    portalTitle: "Nexus Ontology Platform",
    intro:
      "I model your business as a shared ontology — entities, relationships, and rules — then drive AI automation on top of it, so decisions are grounded in your domain rather than guessed from raw text. This is powered by the Nexus Ontology Platform.",
    bullets: [
      "Domain ontology and knowledge-graph modeling",
      "Grounding LLMs and agents on structured domain knowledge",
      "Rule- and relationship-driven automation workflows",
      "Mapping existing data and systems onto the ontology",
      "Explainable, auditable AI decisions",
    ],
    closing:
      "Ready to turn your domain knowledge into automation that AI can reason over? Let's connect.",
  },
  "agent-engineering": {
    icon: "fa-robot",
    title: "Agent",
    titleAccent: "Engineering",
    intro:
      "I design, build, and harden AI agents that reliably use tools, call your systems, and complete multi-step tasks — with the guardrails, evaluation, and observability needed to run them in production.",
    bullets: [
      "Agent architecture: planning, tools, memory, and orchestration",
      "Tool/function calling and safe integration with your APIs",
      "Multi-agent workflows and hand-offs",
      "Guardrails, evaluation harnesses, and human-in-the-loop",
      "Agent observability, tracing, and cost control",
    ],
    closing:
      "Want agents that actually get work done safely? Let's scope your first production agent.",
  },
  "ai-ops": {
    icon: "fa-gauge-high",
    title: "AI",
    titleAccent: "Ops",
    intro:
      "I bring AI into operations and keep AI systems healthy in production — anomaly detection, incident prediction, and model/service observability so systems and the models they run stay reliable and cost-efficient.",
    bullets: [
      "Model and service observability, drift and quality monitoring",
      "Anomaly detection and incident prediction",
      "ML-Ops: model lifecycle, deployment, and rollback automation",
      "Inference cost, latency, and reliability optimization",
      "Automated root-cause analysis and alerting",
    ],
    closing:
      "Ready to make your operations AI-driven and your AI systems resilient? Let's talk.",
  },
};

class MyServices extends Component {
  constructor(props) {
    super(props);
    // One open/close flag per service, keyed by service key.
    this.state = SERVICES.reduce((acc, s) => {
      acc[s.key] = false;
      return acc;
    }, {});
  }

  setModal = (key, show) => {
    this.setState({ [key]: show });
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
        {
          breakpoint: 1200,
          settings: { slidesToShow: 3, slidesToScroll: 1 },
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 2, slidesToScroll: 1 },
        },
        {
          breakpoint: 767,
          settings: { slidesToShow: 2, slidesToScroll: 1 },
        },
        {
          breakpoint: 568,
          settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
      ],
    };
    return (
      <div
        className="services-container services-modern d-block w-100 px-lg-5 px-md-3 px-2 py-5 mb-5"
        id="services"
      >
        <Container fluid>
          <div className="d-flex w-100 pb-5 heading">
            <Row className="align-items-end">
              <Col lg={7}>
                <h2>
                  My <span>Services</span>
                </h2>
              </Col>
              <Col lg={5}>
                <p>
                  If you are looking to turn complex business problems into
                  production-grade AI solutions with measurable business impact,
                  I could help you always.
                </p>
              </Col>
            </Row>
          </div>
          <Slider {...settings} className="mb-5 services-slider">
            {SERVICES.map((service) => {
              // FDE/Ontology link straight to their portal; others open the modal.
              const openModal = (e) => {
                e.preventDefault();
                this.setModal(service.key, true);
              };
              const cardProps = service.portalUrl
                ? {
                    href: service.portalUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : { href: "#services", onClick: openModal };
              return (
                <div className="services-slide" key={service.key}>
                  <a className="service-card" {...cardProps}>
                    <span className="glow" aria-hidden="true"></span>
                    <div className="service-card-top">
                      <span className="service-badge">
                        <i className={`fa-solid ${service.icon}`}></i>
                      </span>
                    </div>
                    <h3>{service.name}</h3>
                    {service.caption ? <p>{service.caption}</p> : null}
                    <span className="service-cta">
                      {service.portalUrl ? "Visit portal" : "Learn more"}
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              );
            })}
          </Slider>
        </Container>

        {SERVICES.map((service) => (
          <ServiceModal
            key={service.key}
            {...MODAL_CONTENT[service.key]}
            show={this.state[service.key]}
            onHide={() => this.setModal(service.key, false)}
          />
        ))}
      </div>
    );
  }
}

export default MyServices;
