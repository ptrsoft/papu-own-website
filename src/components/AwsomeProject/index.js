import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { PopupWidget } from "react-calendly";

class AwsomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionStatus: "", // New state variable
    };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Add access key to formData
    formData.append("access_key", "5ec1ae3f-410e-4bdf-8274-a4e89d06288f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        this.setState({ submissionStatus: "We will contact you soon!" }); // Update state on success
        event.target.reset();
      } else {
        this.setState({ submissionStatus: "Error: Please try again." }); // Update state on error
      }
    } catch (error) {
      console.error("Fetch error:", error);
      this.setState({ submissionStatus: "Error: Please try again." }); // Handle fetch error
    }
  };

  render() {
    return (
      <div className="awsome-project-container d-block w-100 px-md-5 p-3 py-5">
        {/* Heading */}
        <div className="d-block w-100 text-center heading">
          Have an Awsome Project <br /> Idea? <span>Let’s Discuss</span>
        </div>

        {/* Email Address Input */}
        <form onSubmit={this.onSubmit}>
          <div className="d-flex flex-column gap-3 align-items-center w-100 text-center">
            <div className="d-inline-flex align-items-center justify-content-start form">
              <span className="input-icon">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                name="email" // Changed to 'email'
                type="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>

            {/* New Text Area for Project Description */}
            <div className="d-inline-flex align-items-start justify-content-start form">
              <textarea
                name="description" // Changed to 'description'
                rows={3}
                className="form-control"
                placeholder="Brief Description of your Requirement"
                style={{ resize: 'none' }}
                required
              />
            </div>
            <Button type="submit" className="form">
              Send
            </Button>
          
          </div>
        </form>
       
        {/* Submission Status Message */}
        {this.state.submissionStatus && (
          <div className="submission-status text-center mt-3">
            {this.state.submissionStatus}
          </div>
        )}
      </div>
    );
  }
}

export default AwsomeProject;
 