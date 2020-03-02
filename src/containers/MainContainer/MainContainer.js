import React, { Component } from "react";
import Header from "components/Header/Header";
import Welcome from "components/Welcome/Welcome";

class MainContainer extends Component {
  render() {
    return (
      <>
        <Header />
        <Welcome />
      </>
    );
  }
}

export default MainContainer;