import React, { Component } from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/Common/Services";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/Common/Portfolio";
import Team from "./components/Common/Team";

class App extends Component {
  render() {
    return (
      <Router>
          <Routes>
            <Route exact={true} path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="/portfolio" element={<Portfolio />} />

            <Route path="/team" element={<Team />} />

            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
