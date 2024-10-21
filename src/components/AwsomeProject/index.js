import React, { Component } from "react";
import { Button } from "react-bootstrap";

class AwsomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="awsome-project-container  d-block w-100 px-md-5 p-3 py-5">
        <div className="d-block w-100 text-center heading">
          Have an Awsome Project <br /> Idea? <span>Let’s Discuss</span>
        </div>
        <div className="d-block w-100 text-center">
          <div className="d-inline-flex align-items-center justify-content-start form">
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
            />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AwsomeProject;
