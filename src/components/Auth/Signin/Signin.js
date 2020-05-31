import React, { useState } from "react";
import "./Signin.scss";

import { ReactComponent as Logo } from "assets/LOGO.svg";
import { ReactComponent as Close } from "assets/Close.svg";
import { Link } from "react-router-dom";
import Signup from "components/Auth/Signup/Signup";
import ModalPortal from "components/Modal/ModalPortal";



const Signin = ({ onClose }) => {
  const [ state, setState ] = useState({ signupModal: false });

  const handleOpenModal = () => {
    setState({ signupModal: true });
  };
  
  const handleCloseModal = () => {
    setState({ signupModal: false });
  };
  
  return (
    <div className="c-signin">
      <div className="c-signin__wrapper">
        <div className="c-signin__wrapper--wrap1">
          <Logo className="logo" />
          <Close className="close" onClick={onClose} />
        </div>
        <div className="c-signin__wrapper--wrap2">
          <input className="id" placeholder="ID" type="id" />
          <input className="password" placeholder="Password" type="password" />
          <Link to="/">
            <button type="submit">
              Log-in
            </button>
          </Link>
          <span onClick={() => setState(handleOpenModal)}>Register Here!</span>
          {state.signupModal && (
            <ModalPortal>
              <Signup onClose={() => setState(handleCloseModal)} />
            </ModalPortal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
