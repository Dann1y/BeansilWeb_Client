import React, { Component } from "react";
import Header from "components/Header/Header";
import Welcome from "components/Welcome/Welcome";
import About from "components/About/About";

class MainContainer extends Component {
  render() {
    return (
      <>
        <Header />
        <Welcome />
        <About />
      </>
    );
  }
}

export default MainContainer;