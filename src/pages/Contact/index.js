import React from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="py-5">
      <div className="awsome-project-container text-center mb-4">
      <div className="d-block w-100 text-center heading">
          Have an Awsome Project <br /> Idea? <span>Let’s Discuss</span>
        </div>       
      </div>

      <div className="form-container" style={{ maxWidth: '600px', margin: 'auto' }}>
        <Form>
          <Row className="mb-3">
            <Col xs={12}>
              <Form.Control
                type="text"
                placeholder="Full Name*"
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12}>
              <Form.Control
                type="email"
                placeholder="Email Address*"
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12}>
              <Form.Control
                type="tel"
                placeholder="Phone Number*"
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12}>
              <Form.Control
                type="text"
                placeholder="Company Name*"
                required
              />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col xs={12}>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message*"
                required
              />
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="w-100">
            Send
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Contact;
