import React, { Component } from "react";
import "./Welcome.scss";

import Clip from "assets/Clip.png";
import { ReactComponent as Upicon } from "assets/Upicon.svg";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="c-welcome">
        <div className="c-welcome__wrapper">
          <div className="c-welcome__wrapper--gsm">GSM Major Club</div>
          <div className="c-welcome__wrapper--beansil">Welcome to BEANSIL!</div>
          <img src={Clip} alt="clip" />
          <Upicon onClick={this.scrollToTop} />
        </div>
      </div>
    );
  }
}

export default Welcome;
