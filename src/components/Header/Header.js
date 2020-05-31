import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "assets/LOGO.svg";
//import Signin from "components/Auth/Signin/Signin";
//import ModalPortal from "components/Modal/ModalPortal";

class Header extends Component {
  // state = { loginModal: false };

  // handleOpenModal = () => {
  //   this.setState({ loginModal: true });
  // };

  // handleCloseModal = () => {
  //   this.setState({ loginModal: false });
  // };

  // scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // }

  scrollToAbout = () => {
    window.scrollTo(0, 1202);
  };

  scrollToBenefit = () => {
    window.scrollTo(0, 1630);
  };
  scrollToSkill = () => {
    window.scrollTo(0, 3028);
  };
  scrollToApply = () => {
    window.scrollTo(0, 3605);
  };

  render() {
    return (
      <div className="c-header">
        <Link to="/">
          <Logo />
        </Link>
        <div className="c-header__wrapper">
          <span
            className="c-header__wrapper--menu"
            onClick={this.scrollToAbout}
          >
            ABOUT
          </span>
          <span
            className="c-header__wrapper--menu"
            onClick={this.scrollToBenefit}
          >
            BENEFITS
          </span>
          <span
            className="c-header__wrapper--menu"
            onClick={this.scrollToSkill}
          >
            SKILL
          </span>
          <span
            className="c-header__wrapper--menu"
            onClick={this.scrollToApply}
          >
            APPLY
          </span>
          <Link to="/introduce">
            <span className="c-header__wrapper--menu">TEAM</span>
          </Link>
          {/* <span
            className="c-header__wrapper--menu"
            onClick={this.handleOpenModal}
          >
            Log-In
          </span>
          {this.state.loginModal && (
            <ModalPortal>
              <Signin onClose={this.handleCloseModal} />
            </ModalPortal>
          )} */}
        </div>
      </div>
    );
  }
}

export default Header;
