import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

const Contact = () => {
    const [result, setResult] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        const phoneNumber = formData.get('MobileNumber');

        if (!formData.get('FullName')) {
            newErrors.FullName = "Full Name is required.";
        }
        const email = formData.get('Email');
        if (!email) {
            newErrors.Email = "Email is required.";
        } else if (!emailPattern.test(email)) {
            newErrors.Email = "A valid email is required (must include '@' and a domain).";
        }
        if (!phoneNumber) {
            newErrors.MobileNumber = "Phone Number is required.";
        } else if (!/^\d{10}$/.test(phoneNumber)) { // Check for exactly 10 digits
            newErrors.MobileNumber = "Phone Number must be exactly 10 digits.";
        }
        if (!formData.get('companyName')) {
            newErrors.CompanyName = "Company Name is required.";
        }
        const message = formData.get('Message');
        if (!message) {
            newErrors.Message = "Message is required.";
        } else if (message.length < 5) {
            newErrors.Message = "Message must be at least 5 characters long.";
        }

        return newErrors;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        setErrors({}); // Clear previous errors
        const formData = new FormData(event.target);

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setResult(""); // Clear result message
            return; // Stop submission if there are validation errors
        }

        formData.append("access_key", "5ec1ae3f-410e-4bdf-8274-a4e89d06288f");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
                setErrors({}); // Clear errors on successful submission
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setResult("An error occurred while submitting the form.");
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container className="py-5">
            <div className="awsome-project-container text-center mb-4">
                <div className="d-block w-100 text-center heading">
                    Have an Awesome Project <br /> Idea? <span>Let’s Discuss</span>
                </div>
            </div>
            <Form onSubmit={onSubmit} noValidate>
                <div className="form-container" style={{ maxWidth: '600px', margin: 'auto' }}>
                    <Row className="mb-3">
                        <Col xs={12}>
                            <Form.Control
                                name='FullName'
                                type="text"
                                placeholder="Full Name*"
                                required
                                isInvalid={!!errors.FullName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.FullName}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={12}>
                            <Form.Control
                                name='Email'
                                type="email"
                                placeholder="Email Address*"
                                required
                                isInvalid={!!errors.Email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.Email}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={12}>
                            <Form.Control
                                type="tel"
                                name='MobileNumber'
                                placeholder="Phone Number*"
                                required
                                isInvalid={!!errors.MobileNumber}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.MobileNumber}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={12}>
                            <Form.Control
                                type="text"
                                name='companyName'
                                placeholder="Company Name*"
                                required
                                isInvalid={!!errors.CompanyName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.CompanyName}
                            </Form.Control.Feedback>
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
                                isInvalid={!!errors.Message}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.Message}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit" className="w-100">
                        Send
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Contact;
