import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import MigrationModernization from "./pages/Service/MigrationModernization";
import CloudAutomation from "./pages/Service/CloudAutomation";
import SRE from "./pages/Service/SRE";
import CostManagementAndOptimization from "./pages/Service/CostManagementAndOptimization";
import ContainerizationServerlessOrchestration from "./pages/Service/ContainerizationServerlessOrchestration";
import SecurityAndCompliance from "./pages/Service/SecurityAndCompliance";
import MicroservicesTransformation from "./pages/Portfolio/MicroservicesTransformation";
import SassAutomation from "./pages/Portfolio/SassAutomation";
import SREFrameworkDevelopment from "./pages/Portfolio/SREFrameworkDevelopment";
import Contact from "./pages/Contact";

import { PopupWidget } from "react-calendly";

function App() {
  
  return (
    <div className="App">
      <div style={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }}>
      <PopupWidget
        url="https://calendly.com/papu-bhattacharya-ptrtechnology/30min"
        rootElement={document.getElementById("root")}
        text="Schedule a Meeting!"
        textColor="#ffffff"
        color="#fd853a"
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '4d5055'
        }}

       
      />
    </div>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Navigate to="/" replace />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/service/migration-modernization" element={<MigrationModernization />} />
          <Route path="/service/cloud-automation" element={<CloudAutomation />} />
          <Route path="/service/system-reliability-engineering" element={<SRE />} />
          <Route path="/service/cost-management-and-optimization" element={<CostManagementAndOptimization />} />
          <Route path="/service/containerization-serverless-orchestration" element={<ContainerizationServerlessOrchestration />} />
          <Route path="/service/security-and-compliance" element={<SecurityAndCompliance />} />
          <Route path="/portfolio/microservices-transformation" element={<MicroservicesTransformation />} />
          <Route path="/portfolio/saas-automation" element={<SassAutomation />} />
          <Route path="/portfolio/sre-framework-development" element={<SREFrameworkDevelopment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
