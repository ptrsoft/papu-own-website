import React, { useEffect } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3dba196d-cb29-4020-b789-5ba401a70ead");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container className="py-5">
            <div className="awsome-project-container text-center mb-4">
                <div className="d-block w-100 text-center heading">
                    Have an Awsome Project <br /> Idea? <span>Let’s Discuss</span>
                </div>
            </div>
            <form action='https://api.web3forms.com/submit' >
                <div className="form-container" style={{ maxWidth: '600px', margin: 'auto' }}>
                    <Form>
                        <Row className="mb-3">
                            <Col xs={12}>
                                <Form.Control
                                    name='FullName'
                                    type="text"
                                    placeholder="Full Name*"
                                    required
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col xs={12}>
                                <Form.Control
                                    name='Email'
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
                                    name='MobileNumber'
                                    placeholder="Phone Number*"
                                    required
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col xs={12}>
                                <Form.Control
                                    type="text"
                                    name='companyName'
                                    placeholder="Company Name*"
                                    required
                                />
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col xs={12}>
                                <Form.Control
                                    name='Message'
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
            </form>
            <span>{result}</span>
        </Container>
    );
};

export default Contact;
