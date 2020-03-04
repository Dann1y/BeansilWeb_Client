import React, { Component } from "react";
import "./Apply.scss";

import Man from "assets/Man.png";

class Apply extends Component {
  render() {
    return (
      <div className="c-apply">
        <div className="c-apply__wrapper">
          <div className="c-apply__wrapper--desc">
            <span>
              “ 작은 콩에 불과했던 개인들이 모여 함께
              <br />
              <span>발전해나가며 나무가 되가는 동아리 빈실 “</span>
            </span>
          </div>
          <img src={Man} alt="man" />
          <button className="c-apply__wrapper--button">
              APPLY
          </button>
        </div>
      </div>
    );
  }
}

export default Apply;
