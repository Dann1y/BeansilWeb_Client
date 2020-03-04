import React, { Component } from "react";

import Header from "components/Header/Header";
import Introduce from "components/Introduce/Introduce";

class TeamContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Introduce />
      </>
    );
  }
}

export default TeamContainer;
