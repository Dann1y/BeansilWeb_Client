import React, { Component } from "react";
import "./Introduce.scss";

class Introduce extends Component {
  render() {
    return (
      <div className="c-intro">
        <div className="c-intro__wrapper">
            <div className="c-intro__wrapper--title">OUR TEAM</div>
            <span>간단한 소개 글</span>
            <div className="c-intro__wrapper--photo"></div>
        </div>
      </div>
    );
  }
}

export default Introduce;
