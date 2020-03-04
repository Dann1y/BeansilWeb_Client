import React, { Component } from "react";
import "./Welcome.scss";

import Clip from "assets/Clip.png";

class Welcome extends Component {
  render() {
    return (
      <div className="c-welcome">
        <div className="c-welcome__wrapper">
          <div className="c-welcome__wrapper--gsm">GSM Major Club</div>
          <div className="c-welcome__wrapper--beansil">Welcome to BEANSIL!</div>
          <img src={Clip} alt="clip" />
        </div>
      </div>
    );
  }
}

export default Welcome;
