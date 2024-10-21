import React, { Component } from "react";
import MainBanner from "./MainBanner";
import MyWorkExperince from "./MyWorkExperince";
import WhyHireMe from "./WhyHireMe";
import MyPortfolio from "./MyPortfolio";
import Testimonials from "./Testimonials";
import MyServices from "./MyServices";
import AwsomeProject from "../../components/AwsomeProject";
import Blogs from "./Blogs";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container d-block w-100">
        <MainBanner />
        <MyServices />
        <MyWorkExperince />
        <WhyHireMe />
        <MyPortfolio />
        <Blogs/>
        <Testimonials />
        <AwsomeProject />
        
      </div>
    );
  }
}

export default Home;
