import React, { Component } from "react";

import Header from "components/Header/Header";
import Welcome from "components/Welcome/Welcome";
import About from "components/About/About";
import Benefit from "components/Benefit/Benefit";
import Needs from "components/Needs/Needs";

class MainContainer extends Component {
  render() {
    return (
      <>
        <Header />
        <Welcome />
        <About />
        <Benefit />
        <Needs />
      </>
    );
  }
}

export default MainContainer;