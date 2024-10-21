import React, { Component } from "react";
import { Button } from "react-bootstrap";

class AwsomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="awsome-project-container d-block w-100 px-md-5 p-3 py-5">
        {/* Heading */}
        <div className="d-block w-100 text-center heading">
          Have an Awsome Project <br /> Idea? <span>Let’s Discuss</span>
        </div>

        {/* Email Address Input */}
        <div className="d-flex flex-column gap-3 align-items-center w-100 text-center">
          <div className="d-inline-flex align-items-center justify-content-start form">
            <span className="input-icon">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
            />
           
          </div>

          {/* New Text Area for Project Description */}
          <div className="d-inline-flex align-items-start justify-content-start form">
            <textarea
            rows={3}
              className="form-control"
              placeholder="Brief Description of your Requirement"
              style={{resize:'none'}}
            />
          </div>
          <Button className="form">
              Send
            </Button>
        </div>
      </div>
    );
  }
}

export default AwsomeProject;
