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

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Navigate to="/" replace />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/service/migration-modernization" element={<MigrationModernization />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
