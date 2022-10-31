import React, { Component } from "react";
import PageWrapper from "./components/PageWrapper";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/Common/Services";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/Common/Portfolio";
import Team from "./components/Common/Team";
import Login from "./components/pages/Login";
import AdminWrapper from "./components/AdminWrapper";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/admin" element={<Login />}>
            render =
            {(props) => (
              <AdminWrapper>
                <Login />
              </AdminWrapper>
            )}
          </Route>

          <Route exact={true} path="/" element={<Home />}>
            render =
            {(props) => (
              <PageWrapper>
                <Home {...props} />
              </PageWrapper>
            )}
          </Route>

          <Route path="/about" element={<About />}>
            render ={" "}
            {(props) => (
              <PageWrapper>
                <About {...props} />
              </PageWrapper>
            )}
          </Route>

          <Route path="/services" element={<Services />}>
            render ={" "}
            {(props) => (
              <PageWrapper>
                <Services {...props} />
              </PageWrapper>
            )}
          </Route>

          <Route path="/portfolio" element={<Portfolio />}>
            render ={" "}
            {(props) => (
              <PageWrapper>
                <Portfolio {...props} />
              </PageWrapper>
            )}
          </Route>

          <Route path="/team" element={<Team />}>
            render ={" "}
            {(props) => (
              <PageWrapper>
                <Team {...props} />
              </PageWrapper>
            )}
          </Route>

          <Route path="/contact" element={<Contact />}>
            render ={" "}
            {(props) => (
              <PageWrapper>
                <Contact {...props} />
              </PageWrapper>
            )}
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
