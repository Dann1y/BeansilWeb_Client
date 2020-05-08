import React, { Component } from "react";
import "./Header.scss";

import { ReactComponent as Logo } from "assets/LOGO.svg";

class Header extends Component {
  render() {
    return (
      <div className="c-header">
        <Logo onClick={"/"}/>
        <div className="c-header__wrapper">
          <span className="c-header__wrapper--menu">ABOUT</span>
          <span className="c-header__wrapper--menu">SKILL</span>
          <span className="c-header__wrapper--menu">APPLY</span>
          <span className="c-header__wrapper--menu">TEAM</span>
          <span className="c-header__wrapper--menu">Log-In</span>
        </div>
      </div>
    );
  }
}

export default Header;
